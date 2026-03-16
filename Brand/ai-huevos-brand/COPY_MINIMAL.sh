#!/bin/bash
# Copy minimal essential brand skill files to a new repo
# Usage: ./COPY_MINIMAL.sh /path/to/new-repo

if [ -z "$1" ]; then
    echo "Usage: ./COPY_MINIMAL.sh /path/to/new-repo"
    echo "Example: ./COPY_MINIMAL.sh ~/projects/my-new-project"
    exit 1
fi

TARGET_REPO="$1"
SKILL_DIR="$TARGET_REPO/.claude/skills/ai-huevos-brand"

# Create directory structure
mkdir -p "$SKILL_DIR/references"

# Copy essential files
echo "Copying SKILL.md..."
cp "SKILL.md" "$SKILL_DIR/"

echo "Copying CHEATSHEET.md..."
cp "CHEATSHEET.md" "$SKILL_DIR/"

echo "Copying design-tokens.json..."
cp "references/design-tokens.json" "$SKILL_DIR/references/"

echo ""
echo "✅ Success! Minimal brand skill copied to:"
echo "   $SKILL_DIR"
echo ""
echo "Files copied:"
echo "  - SKILL.md"
echo "  - CHEATSHEET.md"
echo "  - references/design-tokens.json"
echo ""
echo "The brand skill is now ready in your new repo."
