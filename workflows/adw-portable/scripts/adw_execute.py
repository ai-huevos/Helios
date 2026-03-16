#!/usr/bin/env python3
"""
ADW Portable Executor - Executes ADW prompts via Claude Code CLI or prepares for Cursor.

Usage:
    # Execute with Claude Code CLI
    python adw_execute.py --issue 42

    # Prepare for Cursor (copy to clipboard)
    python adw_execute.py --issue 42 --cursor

    # Execute directly with a prompt file
    python adw_execute.py --prompt .adw/issue-42/prompt.md

    # Use git worktree isolation
    python adw_execute.py --issue 42 --worktree

Environment Variables:
    ANTHROPIC_API_KEY   - Required for Claude Code CLI execution
    GITHUB_TOKEN        - Required for PR creation
    GITHUB_REPO         - Repository in format "owner/repo"
"""

import os
import sys
import json
import argparse
import subprocess
import shutil
from pathlib import Path
from datetime import datetime


class ADWExecutor:
    def __init__(self, repo_root: Path = None):
        self.repo_root = repo_root or Path.cwd()
        self.adw_dir = self.repo_root / ".adw"

    def get_issue_prompt(self, issue_number: int) -> str:
        """Load prompt for an issue."""
        prompt_file = self.adw_dir / f"issue-{issue_number}" / "prompt.md"
        if not prompt_file.exists():
            raise FileNotFoundError(f"No prompt found for issue #{issue_number}. Run adw_trigger.py first.")
        return prompt_file.read_text()

    def setup_worktree(self, issue_number: int, branch_type: str = "feature") -> Path:
        """Create an isolated git worktree for the issue."""
        branch_name = f"{branch_type}/issue-{issue_number}"
        worktree_path = self.repo_root.parent / f"adw-worktree-{issue_number}"

        # Create branch if it doesn't exist
        subprocess.run(
            ["git", "branch", branch_name, "main"],
            cwd=self.repo_root,
            capture_output=True
        )

        # Create worktree
        if worktree_path.exists():
            print(f"Worktree already exists at {worktree_path}")
        else:
            result = subprocess.run(
                ["git", "worktree", "add", str(worktree_path), branch_name],
                cwd=self.repo_root,
                capture_output=True,
                text=True
            )
            if result.returncode != 0:
                raise RuntimeError(f"Failed to create worktree: {result.stderr}")

        print(f"Worktree ready at: {worktree_path}")
        return worktree_path

    def cleanup_worktree(self, issue_number: int):
        """Remove worktree after execution."""
        worktree_path = self.repo_root.parent / f"adw-worktree-{issue_number}"

        if worktree_path.exists():
            subprocess.run(
                ["git", "worktree", "remove", str(worktree_path), "--force"],
                cwd=self.repo_root,
                capture_output=True
            )
            print(f"Cleaned up worktree: {worktree_path}")

    def execute_with_claude_cli(self, prompt: str, work_dir: Path = None) -> dict:
        """Execute prompt using Claude Code CLI."""
        work_dir = work_dir or self.repo_root

        # Check for Claude CLI
        claude_check = subprocess.run(
            ["which", "claude"],
            capture_output=True
        )
        if claude_check.returncode != 0:
            raise RuntimeError("Claude Code CLI not found. Install from: https://claude.ai/code")

        # Create temp prompt file
        prompt_file = work_dir / ".adw_current_prompt.md"
        prompt_file.write_text(prompt)

        print(f"\nExecuting ADW in: {work_dir}")
        print("="*60)

        try:
            # Execute with Claude CLI
            result = subprocess.run(
                ["claude", "--print", "--dangerously-skip-permissions", "-p", prompt],
                cwd=work_dir,
                capture_output=False,  # Show output in real-time
                text=True
            )

            return {
                "success": result.returncode == 0,
                "returncode": result.returncode
            }
        finally:
            # Cleanup temp file
            if prompt_file.exists():
                prompt_file.unlink()

    def prepare_for_cursor(self, prompt: str, issue_number: int) -> str:
        """Prepare prompt for Cursor and copy to clipboard."""
        # Add Cursor-specific header
        cursor_prompt = f"""## ADW Execution - Issue #{issue_number}

> Execute this workflow autonomously. Create branch, implement, commit, and PR.

{prompt}

---
*Loaded from ADW Portable. Follow the phases sequentially.*
"""

        # Try to copy to clipboard
        try:
            if sys.platform == "darwin":
                subprocess.run(["pbcopy"], input=cursor_prompt.encode(), check=True)
                print("Prompt copied to clipboard (macOS)")
            elif sys.platform == "linux":
                subprocess.run(["xclip", "-selection", "clipboard"], input=cursor_prompt.encode(), check=True)
                print("Prompt copied to clipboard (Linux)")
            else:
                print("Clipboard not supported on this platform. Prompt saved to file.")
        except:
            pass

        # Also save to file
        output_file = self.adw_dir / f"issue-{issue_number}" / "cursor_prompt.md"
        output_file.write_text(cursor_prompt)
        print(f"Prompt saved to: {output_file}")

        return cursor_prompt

    def record_execution(self, issue_number: int, result: dict):
        """Record execution result."""
        log_file = self.adw_dir / f"issue-{issue_number}" / "execution.json"
        log_file.write_text(json.dumps({
            "executed_at": datetime.now().isoformat(),
            "success": result.get("success", False),
            "returncode": result.get("returncode"),
        }, indent=2))


def main():
    parser = argparse.ArgumentParser(description="ADW Portable Executor")
    parser.add_argument("--issue", "-i", type=int, help="Issue number to execute")
    parser.add_argument("--prompt", "-p", type=Path, help="Direct prompt file path")
    parser.add_argument("--cursor", "-c", action="store_true", help="Prepare for Cursor instead of CLI execution")
    parser.add_argument("--worktree", "-w", action="store_true", help="Use git worktree isolation")
    parser.add_argument("--cleanup", action="store_true", help="Cleanup worktree after execution")
    args = parser.parse_args()

    if not args.issue and not args.prompt:
        parser.print_help()
        sys.exit(1)

    executor = ADWExecutor()

    # Get prompt
    if args.prompt:
        prompt = args.prompt.read_text()
        issue_number = 0  # Unknown
    else:
        prompt = executor.get_issue_prompt(args.issue)
        issue_number = args.issue

    # Execute based on mode
    if args.cursor:
        executor.prepare_for_cursor(prompt, issue_number)
        print("\n Next steps:")
        print("1. Open Cursor")
        print("2. Start a new chat (Cmd+L)")
        print("3. Paste the prompt (Cmd+V)")
        print("4. Let the agent execute")
    else:
        work_dir = None

        if args.worktree and issue_number:
            work_dir = executor.setup_worktree(issue_number)

        try:
            result = executor.execute_with_claude_cli(prompt, work_dir)
            executor.record_execution(issue_number, result)

            if result["success"]:
                print("\n ADW execution completed successfully!")
            else:
                print(f"\n ADW execution finished with code: {result['returncode']}")

        finally:
            if args.cleanup and args.worktree and issue_number:
                executor.cleanup_worktree(issue_number)


if __name__ == "__main__":
    main()
