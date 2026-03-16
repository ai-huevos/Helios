# ADW Portable - AI Developer Workflow

Self-contained AI developer workflow that turns GitHub issues into pull requests using Claude Code CLI or Cursor cloud agents.

## Quick Start (5 minutes)

### 1. Setup Repository

```bash
# Copy adw-portable to your new repository
cp -r adw-portable /path/to/your/repo/
cd /path/to/your/repo

# Create minimal CLAUDE.md (adapt the template)
cp adw-portable/templates/CLAUDE.md.template CLAUDE.md
# Edit CLAUDE.md with your project specifics
```

### 2. Configure Environment

```bash
# Required
export GITHUB_TOKEN="ghp_your_token_here"
export ANTHROPIC_API_KEY="sk-ant-your_key_here"  # For Claude CLI

# Optional (auto-detected from git remote)
export GITHUB_REPO="owner/repo"
```

### 3. Label an Issue

Add the `adw-ready` label to any GitHub issue you want processed.

### 4. Run ADW

**Option A: Claude Code CLI (Recommended)**
```bash
# Process specific issue
python adw-portable/scripts/adw_trigger.py --issue 42
python adw-portable/scripts/adw_execute.py --issue 42

# Or watch for new issues
python adw-portable/scripts/adw_trigger.py --watch
```

**Option B: Cursor Cloud Agents**
```bash
# Generate prompt for Cursor
python adw-portable/scripts/adw_trigger.py --issue 42
python adw-portable/scripts/adw_execute.py --issue 42 --cursor

# Prompt is copied to clipboard - paste into Cursor
```

---

## Detailed Setup

### For Cursor Cloud Agents

1. **Install Cursor Rules**
   ```bash
   # Create .cursor directory
   mkdir -p .cursor

   # Copy rules
   cp adw-portable/cursor-rules.md .cursor/rules
   ```

2. **Configure Cursor Settings**
   - Open Cursor Settings (Cmd+,)
   - Navigate to "Rules for AI"
   - Ensure "Apply rules to all conversations" is enabled

3. **Execute Workflow**
   ```bash
   # Generate and copy prompt
   python adw-portable/scripts/adw_execute.py --issue 42 --cursor

   # In Cursor:
   # 1. Open your project
   # 2. Press Cmd+L for new chat
   # 3. Paste the prompt (Cmd+V)
   # 4. Agent executes autonomously
   ```

### For Claude Code CLI

1. **Install Claude Code**
   ```bash
   # Via npm
   npm install -g @anthropic/claude-code

   # Verify installation
   claude --version
   ```

2. **Execute Workflow**
   ```bash
   # With worktree isolation (recommended)
   python adw-portable/scripts/adw_execute.py --issue 42 --worktree

   # Direct execution (works in current repo)
   python adw-portable/scripts/adw_execute.py --issue 42
   ```

---

## Workflow Types

ADW automatically classifies issues into three types:

| Type | Branch | Trigger Labels | Keywords in Title |
|------|--------|----------------|-------------------|
| `/feature` | `feature/<issue>-*` | feature, enhancement | add, implement, create |
| `/bug` | `fix/<issue>-*` | bug, fix, defect | fix, bug, error, broken |
| `/chore` | `chore/<issue>-*` | chore, maintenance | update, refactor, clean |

### Feature Workflow
```
Understand → Plan (3-7 steps) → Implement → Test → PR
```

### Bug Workflow
```
Diagnose → Reproduce → Fix → Verify → PR
```

### Chore Workflow
```
Understand → Execute → Verify → PR
```

---

## File Structure

```
your-repo/
├── .cursor/
│   └── rules              # Cursor AI rules (from cursor-rules.md)
├── .adw/
│   └── issue-42/
│       ├── prompt.md      # Generated execution prompt
│       ├── issue.json     # Issue metadata
│       └── execution.json # Execution log
├── adw-portable/
│   ├── scripts/
│   │   ├── adw_trigger.py # Issue monitoring & prompt generation
│   │   └── adw_execute.py # Execution via CLI or Cursor
│   ├── templates/
│   │   └── CLAUDE.md.template
│   ├── cursor-rules.md
│   └── README.md
└── CLAUDE.md              # Your project-specific instructions
```

---

## Configuration Options

### adw_trigger.py

| Option | Description | Default |
|--------|-------------|---------|
| `--issue N` | Process specific issue number | - |
| `--watch` | Continuous monitoring mode | false |
| `--interval N` | Watch poll interval (seconds) | 30 |
| `--label NAME` | GitHub label to filter | adw-ready |
| `--repo OWNER/REPO` | Target repository | auto-detect |

### adw_execute.py

| Option | Description | Default |
|--------|-------------|---------|
| `--issue N` | Issue number to execute | - |
| `--prompt FILE` | Direct prompt file | - |
| `--cursor` | Prepare for Cursor (clipboard) | false |
| `--worktree` | Use git worktree isolation | false |
| `--cleanup` | Cleanup worktree after | false |

---

## Creating Your CLAUDE.md

The `CLAUDE.md` file teaches the AI about your project. Start minimal and expand:

```markdown
# CLAUDE.md - My Project

## Project Overview
Brief description of what this project does.

## Quick Start
```bash
npm install
npm run dev
```

## Code Standards
- TypeScript strict mode
- Components in src/components/
- Tests alongside source files

## Key Patterns
- Use React hooks for state
- API calls through src/api/ layer
- Follow existing naming conventions
```

**Tips:**
- Start with 20-30 lines
- Add patterns as the AI makes mistakes
- Focus on "non-obvious" conventions

---

## Troubleshooting

### "No prompt found for issue"
```bash
# Run trigger first
python adw-portable/scripts/adw_trigger.py --issue 42
```

### "Claude Code CLI not found"
```bash
npm install -g @anthropic/claude-code
```

### "Permission denied on script"
```bash
chmod +x adw-portable/scripts/*.py
```

### "GitHub API rate limit"
```bash
# Check remaining requests
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/rate_limit
```

### Agent makes wrong decisions
1. Check your `CLAUDE.md` covers the pattern
2. Add specific guidance for the issue type
3. Consider adding examples

---

## Advanced: Continuous Integration

### GitHub Actions Integration

```yaml
# .github/workflows/adw.yml
name: ADW Auto-Execute

on:
  issues:
    types: [labeled]

jobs:
  execute:
    if: github.event.label.name == 'adw-ready'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: pip install requests

      - name: Trigger ADW
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          python adw-portable/scripts/adw_trigger.py --issue ${{ github.event.issue.number }}
          python adw-portable/scripts/adw_execute.py --issue ${{ github.event.issue.number }}
```

---

## Best Practices

1. **Start with simple issues** - Test with a documentation update or small fix
2. **Review first PRs carefully** - Calibrate CLAUDE.md based on results
3. **Use worktree isolation** - Prevents conflicts with your working directory
4. **Label deliberately** - Only add `adw-ready` when issue is well-specified
5. **Iterate on CLAUDE.md** - Add patterns as you see repeated mistakes

---

## License

MIT - Use freely, modify as needed.
