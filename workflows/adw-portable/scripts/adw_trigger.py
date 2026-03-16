#!/usr/bin/env python3
"""
ADW Portable Trigger - Monitors GitHub issues and triggers ADW execution.

Usage:
    # Single issue
    python adw_trigger.py --issue 42

    # Continuous monitoring
    python adw_trigger.py --watch

    # With custom label filter
    python adw_trigger.py --watch --label "adw-ready"

Environment Variables:
    GITHUB_TOKEN     - GitHub personal access token
    GITHUB_REPO      - Repository in format "owner/repo"
    ADW_LABEL        - Label to filter issues (default: "adw-ready")
"""

import os
import sys
import json
import time
import argparse
import subprocess
from pathlib import Path
from datetime import datetime

# Optional: requests for API calls
try:
    import requests
except ImportError:
    print("Installing requests...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "-q"])
    import requests


class ADWTrigger:
    def __init__(self, repo: str, token: str, label: str = "adw-ready"):
        self.repo = repo
        self.token = token
        self.label = label
        self.api_base = "https://api.github.com"
        self.headers = {
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json"
        }
        self.processed_file = Path(".adw_processed_issues.json")
        self.processed = self._load_processed()

    def _load_processed(self) -> set:
        """Load previously processed issue numbers."""
        if self.processed_file.exists():
            data = json.loads(self.processed_file.read_text())
            return set(data.get("issues", []))
        return set()

    def _save_processed(self):
        """Save processed issue numbers."""
        self.processed_file.write_text(json.dumps({
            "issues": list(self.processed),
            "updated": datetime.now().isoformat()
        }, indent=2))

    def get_ready_issues(self) -> list:
        """Fetch issues with the ADW label."""
        url = f"{self.api_base}/repos/{self.repo}/issues"
        params = {
            "labels": self.label,
            "state": "open",
            "per_page": 10
        }

        response = requests.get(url, headers=self.headers, params=params)
        response.raise_for_status()

        issues = response.json()
        # Filter out PRs (they also come through issues API)
        return [i for i in issues if "pull_request" not in i]

    def classify_issue(self, issue: dict) -> str:
        """Classify issue type based on labels and content."""
        labels = [l["name"].lower() for l in issue.get("labels", [])]
        title = issue.get("title", "").lower()
        body = issue.get("body", "").lower()

        # Check labels first
        if any(l in labels for l in ["bug", "fix", "defect"]):
            return "bug"
        if any(l in labels for l in ["feature", "enhancement", "feat"]):
            return "feature"
        if any(l in labels for l in ["chore", "maintenance", "docs", "refactor"]):
            return "chore"

        # Check title/body keywords
        if any(kw in title for kw in ["fix", "bug", "error", "broken", "crash"]):
            return "bug"
        if any(kw in title for kw in ["add", "implement", "create", "new"]):
            return "feature"
        if any(kw in title for kw in ["update", "upgrade", "refactor", "clean"]):
            return "chore"

        # Default to feature for new functionality
        return "feature"

    def build_prompt(self, issue: dict, issue_type: str) -> str:
        """Build the execution prompt for the AI agent."""
        prompts = {
            "feature": self._feature_prompt(issue),
            "bug": self._bug_prompt(issue),
            "chore": self._chore_prompt(issue)
        }
        return prompts.get(issue_type, prompts["feature"])

    def _feature_prompt(self, issue: dict) -> str:
        return f"""# /feature - Implement GitHub Issue #{issue['number']}

## Issue Details
**Title:** {issue['title']}
**URL:** {issue['html_url']}

**Description:**
{issue.get('body', 'No description provided.')}

## Execution Instructions

### Phase 1: Understand
1. Read the issue requirements completely
2. Identify which files/modules will be affected
3. Check existing patterns in the codebase for similar features

### Phase 2: Plan
1. Break the feature into 3-7 atomic implementation steps
2. List the files you'll create or modify
3. Define what "done" looks like

### Phase 3: Implement
1. Create feature branch: `git checkout -b feature/{issue['number']}-<short-desc>`
2. Implement step by step, committing after each logical unit
3. Follow existing code patterns and conventions
4. Add tests if test infrastructure exists

### Phase 4: Deliver
1. Run build/lint/test commands
2. Create PR with summary of changes
3. Reference this issue in the PR

## Constraints
- Create feature branch before any changes
- Commit incrementally (not one big commit)
- Follow existing codebase patterns
- Read before you write
"""

    def _bug_prompt(self, issue: dict) -> str:
        return f"""# /bug - Fix GitHub Issue #{issue['number']}

## Issue Details
**Title:** {issue['title']}
**URL:** {issue['html_url']}

**Description:**
{issue.get('body', 'No description provided.')}

## Execution Instructions

### Phase 1: Diagnose
1. Read the bug report carefully
2. Identify the expected vs actual behavior
3. Locate the relevant code
4. Understand the root cause before fixing

### Phase 2: Fix
1. Create fix branch: `git checkout -b fix/{issue['number']}-<short-desc>`
2. Write a failing test that reproduces the bug (if test infra exists)
3. Implement the minimal fix
4. Verify the test passes

### Phase 3: Verify
1. Check for regression (other tests still pass)
2. Manual verification if applicable
3. Consider edge cases

### Phase 4: Deliver
1. Commit with message: `fix: <description> (closes #{issue['number']})`
2. Create PR explaining the root cause and fix
3. Reference this issue in the PR

## Constraints
- Understand before fixing (no guessing)
- Minimal change that solves the problem
- Don't refactor unrelated code
"""

    def _chore_prompt(self, issue: dict) -> str:
        return f"""# /chore - Execute GitHub Issue #{issue['number']}

## Issue Details
**Title:** {issue['title']}
**URL:** {issue['html_url']}

**Description:**
{issue.get('body', 'No description provided.')}

## Execution Instructions

### Phase 1: Understand
1. Read what needs to be done
2. Identify scope and affected files
3. Check for any dependencies or prerequisites

### Phase 2: Execute
1. Create chore branch: `git checkout -b chore/{issue['number']}-<short-desc>`
2. Make the required changes
3. Commit with clear messages

### Phase 3: Verify
1. Ensure nothing is broken
2. Run relevant checks (build, lint, test)

### Phase 4: Deliver
1. Create PR with summary
2. Reference this issue

## Constraints
- Keep scope limited to what's requested
- Don't add unrelated improvements
- Verify nothing breaks
"""

    def trigger_execution(self, issue: dict, prompt: str) -> bool:
        """Trigger ADW execution - outputs prompt for manual agent execution."""
        issue_num = issue["number"]
        output_dir = Path(f".adw/issue-{issue_num}")
        output_dir.mkdir(parents=True, exist_ok=True)

        # Write prompt file
        prompt_file = output_dir / "prompt.md"
        prompt_file.write_text(prompt)

        # Write issue metadata
        meta_file = output_dir / "issue.json"
        meta_file.write_text(json.dumps({
            "number": issue_num,
            "title": issue["title"],
            "url": issue["html_url"],
            "triggered_at": datetime.now().isoformat()
        }, indent=2))

        print(f"\n{'='*60}")
        print(f"ADW Ready: Issue #{issue_num}")
        print(f"{'='*60}")
        print(f"Title: {issue['title']}")
        print(f"Type: {self.classify_issue(issue)}")
        print(f"Prompt saved to: {prompt_file}")
        print(f"\nTo execute in Cursor:")
        print(f"  1. Open {prompt_file}")
        print(f"  2. Copy content to Cursor chat")
        print(f"  3. Or run: cat {prompt_file} | pbcopy")
        print(f"{'='*60}\n")

        return True

    def process_issue(self, issue_number: int = None):
        """Process a single issue by number or get next ready issue."""
        if issue_number:
            url = f"{self.api_base}/repos/{self.repo}/issues/{issue_number}"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            issue = response.json()
        else:
            issues = self.get_ready_issues()
            unprocessed = [i for i in issues if i["number"] not in self.processed]
            if not unprocessed:
                print("No unprocessed issues with ADW label found.")
                return None
            issue = unprocessed[0]

        issue_type = self.classify_issue(issue)
        prompt = self.build_prompt(issue, issue_type)

        if self.trigger_execution(issue, prompt):
            self.processed.add(issue["number"])
            self._save_processed()
            return issue

        return None

    def watch(self, interval: int = 30):
        """Continuously watch for new issues."""
        print(f"Watching {self.repo} for issues with label '{self.label}'...")
        print(f"Poll interval: {interval}s")
        print("Press Ctrl+C to stop\n")

        while True:
            try:
                issues = self.get_ready_issues()
                unprocessed = [i for i in issues if i["number"] not in self.processed]

                if unprocessed:
                    for issue in unprocessed:
                        self.process_issue(issue["number"])
                else:
                    print(f"[{datetime.now().strftime('%H:%M:%S')}] No new issues")

                time.sleep(interval)

            except KeyboardInterrupt:
                print("\nStopping watch...")
                break
            except Exception as e:
                print(f"Error: {e}")
                time.sleep(interval)


def main():
    parser = argparse.ArgumentParser(description="ADW Portable Trigger")
    parser.add_argument("--issue", "-i", type=int, help="Process specific issue number")
    parser.add_argument("--watch", "-w", action="store_true", help="Watch for new issues")
    parser.add_argument("--interval", type=int, default=30, help="Watch interval in seconds")
    parser.add_argument("--label", default="adw-ready", help="Label to filter issues")
    parser.add_argument("--repo", help="GitHub repo (owner/repo)")
    args = parser.parse_args()

    # Get config from env or args
    token = os.environ.get("GITHUB_TOKEN")
    repo = args.repo or os.environ.get("GITHUB_REPO")

    if not token:
        print("Error: GITHUB_TOKEN environment variable required")
        sys.exit(1)

    if not repo:
        # Try to detect from git remote
        try:
            result = subprocess.run(
                ["git", "remote", "get-url", "origin"],
                capture_output=True, text=True
            )
            if result.returncode == 0:
                url = result.stdout.strip()
                # Parse github.com/owner/repo from URL
                if "github.com" in url:
                    parts = url.replace(".git", "").split("github.com")[-1]
                    repo = parts.strip("/:")
        except:
            pass

    if not repo:
        print("Error: Could not determine repo. Set GITHUB_REPO or use --repo")
        sys.exit(1)

    trigger = ADWTrigger(repo, token, args.label)

    if args.watch:
        trigger.watch(args.interval)
    elif args.issue:
        trigger.process_issue(args.issue)
    else:
        # Process next available issue
        trigger.process_issue()


if __name__ == "__main__":
    main()
