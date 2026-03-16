#!/bin/bash
# Copy complete brand skill with all documentation to a new repo
# Usage: ./COPY_COMPLETE.sh /path/to/new-repo

if [ -z "$1" ]; then
    echo "Usage: ./COPY_COMPLETE.sh /path/to/new-repo"
    echo "Example: ./COPY_COMPLETE.sh ~/projects/my-new-project"
    exit 1
fi

TARGET_REPO="$1"
SKILL_DIR="$TARGET_REPO/.claude/skills"

# Create directory
mkdir -p "$SKILL_DIR"

# Copy entire directory
echo "Copying complete brand skill..."
cp -r . "$SKILL_DIR/ai-huevos-brand"

echo ""
echo "✅ Success! Complete brand skill copied to:"
echo "   $SKILL_DIR/ai-huevos-brand"
echo ""
echo "All files including:"
echo "  - Documentation (SKILL.md, brand-manual.md, CHEATSHEET.md, etc.)"
echo "  - Foundation docs (foundations/*.md)"
echo "  - References (css-variables.css, design-tokens.json, tailwind-config.js)"
echo "  - Assets (logos, fonts)"
echo ""
echo "⚠️  Note: Font files are large. Consider using web fonts instead."
echo "The brand skill is now ready in your new repo."
