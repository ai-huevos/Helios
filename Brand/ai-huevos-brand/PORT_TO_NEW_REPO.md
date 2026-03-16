# How to Port AI Huevos Brand Skill to Another Repo

This guide shows you how to copy the brand design system skill to any new repository.

---

## 🎯 Two Options

### Option 1: Minimal Essential (Recommended for most cases)
**3 files only** - Everything Claude needs to apply the brand consistently

### Option 2: Complete Documentation
**All files** - Full documentation including foundations, examples, and assets

---

## ✅ Option 1: Minimal Essential (3 Files)

### What to Copy

Copy these **3 files** to your new repo:

```
new-repo/
└── .claude/skills/ai-huevos-brand/
    ├── SKILL.md                    # Entry point + critical rules
    ├── CHEATSHEET.md               # Complete self-contained reference
    └── references/
        └── design-tokens.json      # Single source of truth (values)
```

### Why These 3 Files?

- **SKILL.md** - Tells Claude what this skill is and when to use it (with critical rules)
- **CHEATSHEET.md** - Self-contained reference with all colors, typography, patterns (no external deps)
- **design-tokens.json** - Machine-readable values (version 2.1.0, single source of truth)

### Copy Command

```bash
# From your AI huevos repo root:
mkdir -p new-repo/.claude/skills/ai-huevos-brand/references

cp Brand/ai-huevos-brand/SKILL.md new-repo/.claude/skills/ai-huevos-brand/
cp Brand/ai-huevos-brand/CHEATSHEET.md new-repo/.claude/skills/ai-huevos-brand/
cp Brand/ai-huevos-brand/references/design-tokens.json new-repo/.claude/skills/ai-huevos-brand/references/
```

**That's it!** Claude will have full brand context with these 3 files.

---

## 📚 Option 2: Complete Documentation (All Files)

### What to Copy

Copy the **entire directory structure**:

```
new-repo/
└── .claude/skills/ai-huevos-brand/
    ├── SKILL.md
    ├── brand-manual.md
    ├── CHEATSHEET.md
    ├── components.md
    ├── slides.md
    ├── foundations/
    │   ├── 01-brand-identity.md
    │   ├── 02-logo-system.md
    │   ├── 03-color-system.md
    │   ├── 04-typography.md
    │   └── 05-voice-tone.md
    ├── references/
    │   ├── css-variables.css
    │   ├── design-tokens.json
    │   └── tailwind-config.js
    └── assets/
        ├── fonts/
        │   └── [font files]
        └── logos/
            └── [SVG logos]
```

### Copy Command (Complete)

```bash
# From your AI huevos repo root:
cp -r Brand/ai-huevos-brand new-repo/.claude/skills/
```

### When to Use Complete Documentation

Use complete documentation if:
- You need logo SVG files locally
- You need font files (OTF/TTF) locally
- You want full brand manual with examples
- You're creating brand documentation site

**Note:** Font files are large. Consider using web fonts instead of local files.

---

## 🔧 Quick Setup in New Repo

### 1. Copy the files (choose your option above)

### 2. Verify the structure

```bash
cd new-repo
ls -la .claude/skills/ai-huevos-brand/
```

### 3. Test it works

Ask Claude in your new repo:
> "What are the AI Huevos brand colors?"

Claude should reference the skill automatically.

---

## 📋 What Each File Does

### Essential Files

| File | Purpose | Required? |
|------|---------|-----------|
| `SKILL.md` | Entry point, activation rules, quick reference | ✅ Yes |
| `CHEATSHEET.md` | Complete self-contained reference | ✅ Yes |
| `references/design-tokens.json` | Single source of truth for all values | ✅ Yes |

### Optional Files (Nice to Have)

| File | Purpose | When Needed |
|------|---------|-------------|
| `brand-manual.md` | Full brand manual | Deep brand understanding |
| `components.md` | UI component patterns | Building React/UI components |
| `slides.md` | Presentation patterns | Creating pitch decks |
| `foundations/*.md` | Deep dive docs | Brand education |
| `references/css-variables.css` | CSS custom properties | Can generate from JSON |
| `references/tailwind-config.js` | Tailwind preset | Using Tailwind CSS |
| `assets/logos/*.svg` | Logo files | Need logos locally |
| `assets/fonts/*.otf` | Font files | Need fonts locally (large!) |

---

## 🎨 Using Brand Assets in New Repo

### Option A: Link to Original (Recommended)
Reference logos/assets from original repo or CDN:
```markdown
Logo: `Brand/ai-huevos-brand/assets/logos/logo-yellow-black.svg`
```

### Option B: Copy Assets
If you need local assets:
```bash
cp -r Brand/ai-huevos-brand/assets new-repo/.claude/skills/ai-huevos-brand/
```
**Warning:** Font files are large (several MB). Consider web fonts instead.

---

## ✅ Verification Checklist

After copying, verify:

- [ ] `SKILL.md` exists at `.claude/skills/ai-huevos-brand/SKILL.md`
- [ ] `CHEATSHEET.md` exists and is readable
- [ ] `references/design-tokens.json` has version "2.1.0"
- [ ] File paths in SKILL.md still work (if using Option 2)

---

## 🚀 After Setup

The skill will automatically activate when Claude detects:
- Brand-related design tasks
- UI component creation
- Presentation creation
- Visual output requests

You can also explicitly reference it:
> "Use the AI Huevos brand skill to style this component"

---

## 📝 Notes

- **Version:** design-tokens.json is version 2.1.0 (last updated 2025-01-16)
- **Source of Truth:** `references/design-tokens.json` is the single source of truth
- **Fonts:** Scandia and Geist Mono - use web fonts or system fallbacks if not copying fonts
- **Logos:** Always use official SVG files, never create CSS substitutes

---

**Quick Start:** Copy Option 1 (3 files) - it's all you need for Claude to maintain brand consistency.
