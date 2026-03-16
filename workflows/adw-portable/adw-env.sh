#!/bin/bash
# ADW Environment Setup Script
# Source this file to set up environment variables for ADW
# Usage: source workflows/adw-portable/adw-env.sh

echo "🚀 Setting up ADW environment..."

# Get GitHub token from gh CLI
if command -v gh &> /dev/null; then
    export GITHUB_TOKEN=$(gh auth token)
    echo "✓ GITHUB_TOKEN set from gh CLI"
else
    echo "✗ GitHub CLI (gh) not found. Install with: brew install gh"
    return 1
fi

# Auto-detect GitHub repo from git remote
if git remote get-url origin &> /dev/null; then
    REMOTE_URL=$(git remote get-url origin)
    # Extract owner/repo from URL (handles both HTTPS and SSH)
    export GITHUB_REPO=$(echo "$REMOTE_URL" | sed -E 's#.*github\.com[:/]##' | sed 's/\.git$//')
    echo "✓ GITHUB_REPO set to: $GITHUB_REPO"
else
    echo "⚠ No git remote found, GITHUB_REPO not set"
fi

# Check if ANTHROPIC_API_KEY is already set
if [ -n "$ANTHROPIC_API_KEY" ]; then
    echo "✓ ANTHROPIC_API_KEY already set (${#ANTHROPIC_API_KEY} chars)"
else
    # Check if Claude CLI config exists
    if [ -f "$HOME/.config/claude/config.json" ]; then
        echo "✓ Claude CLI is configured (API key in ~/.config/claude/config.json)"
        echo "  ADW scripts will use Claude CLI's config automatically"
    else
        echo "⚠ ANTHROPIC_API_KEY not set and Claude CLI not configured"
        echo "  Set it with: export ANTHROPIC_API_KEY='sk-ant-...'"
    fi
fi

echo ""
echo "Environment ready! You can now run:"
echo "  python workflows/adw-portable/scripts/adw_trigger.py --issue <number>"
echo "  python workflows/adw-portable/scripts/adw_execute.py --issue <number>"
