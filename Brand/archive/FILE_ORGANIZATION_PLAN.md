# Brand Files Organization Plan
## Aligned with Repository Structure Rules

---

## 🎯 Current State Analysis

### Current Structure Issues:
1. **Scattered brand files** across multiple locations
2. **Duplicate content** (brand_guidelines.md vs brand-manual.md)
3. **Mixed languages** (Spanglish) throughout
4. **Inconsistent naming** (some in English, some in Spanish)
5. **Assets in multiple locations** (fonts/, Logo Kit/, assets/)
6. **Archive files** mixed with active files

---

## 🏗️ Target Structure (Following README.md Rules)

Based on `README.md` structure guidelines:

```
Brand/
├── README.md                          # Brand directory overview (bilingual)
│
├── brand/                             # Main brand identity (NEW - consolidated)
│   ├── README.md                      # How to use brand system (bilingual)
│   │
│   ├── brand-book/                    # Complete brand book (bilingual)
│   │   ├── 00-introduction.md
│   │   ├── 01-brand-philosophy.md
│   │   ├── 02-brand-identity.md
│   │   ├── 03-visual-identity/
│   │   │   ├── logo-system.md
│   │   │   ├── color-system.md
│   │   │   ├── typography.md
│   │   │   └── assets.md
│   │   ├── 04-voice-tone.md
│   │   ├── 05-messaging.md
│   │   ├── 06-usage-guidelines.md
│   │   └── 07-quick-reference.md
│   │
│   ├── assets/                        # All brand assets (consolidated)
│   │   ├── logos/                     # From ai-huevos-brand/assets/logos/
│   │   │   ├── logo-yellow-black.svg
│   │   │   ├── logo-yellow-white.svg
│   │   │   ├── logo-blue-black.svg
│   │   │   └── logo-blue-white.svg
│   │   ├── fonts/                     # Consolidated from multiple locations
│   │   │   ├── scandia/               # From fonts/Scandia/ + assets/fonts/
│   │   │   └── geist-mono/            # From fonts/Geist_Mono/ + assets/fonts/
│   │   └── illustrations/             # Character illustrations (if any)
│   │
│   └── references/                    # Implementation files
│       ├── css-variables.css
│       ├── design-tokens.json
│       └── tailwind-config.js
│
├── guidelines/                        # Operational guidelines (NEW)
│   ├── design-system/                 # Design system guidelines
│   │   ├── components.md              # From ai-huevos-brand/components.md
│   │   └── slides.md                 # From ai-huevos-brand/slides.md
│   │
│   └── content-guidelines/            # Content creation guidelines
│       └── writing-guide.md          # Extracted from voice-tone
│
├── templates/                         # Brand templates (NEW)
│   ├── presentations/                 # Presentation templates
│   │   └── pitch-deck-template.md    # From Pitch Deck/ content
│   │
│   └── documents/                     # Document templates
│       └── brand-usage-template.md
│
└── archive/                           # Deprecated/old files (NEW)
    ├── brand_guidelines.md            # Old version (consolidated into brand-book)
    ├── ai-huevos-narrative-v2.md     # Old narrative (review if still needed)
    ├── archive-hero-prototype.tsx
    ├── hero-with-photo.tsx
    ├── color-tests/                   # Old color test files
    └── Logo Kit/                      # Old logo kit (if superseded by assets/)
```

---

## 📦 Migration Map

### Files to Move/Consolidate:

| Current Location | Target Location | Action |
|-----------------|-----------------|--------|
| `Brand/ai-huevos-brand/foundations/*.md` | `Brand/brand/brand-book/03-visual-identity/` | Move & consolidate |
| `Brand/ai-huevos-brand/brand-manual.md` | `Brand/brand/brand-book/00-introduction.md` | Transform & expand |
| `Brand/ai-huevos-brand/CHEATSHEET.md` | `Brand/brand/brand-book/07-quick-reference.md` | Move & update |
| `Brand/ai-huevos-brand/components.md` | `Brand/guidelines/design-system/components.md` | Move |
| `Brand/ai-huevos-brand/slides.md` | `Brand/guidelines/design-system/slides.md` | Move |
| `Brand/ai-huevos-brand/assets/logos/` | `Brand/brand/assets/logos/` | Move |
| `Brand/ai-huevos-brand/assets/fonts/` | `Brand/brand/assets/fonts/` | Consolidate with `Brand/fonts/` |
| `Brand/fonts/Scandia/` | `Brand/brand/assets/fonts/scandia/` | Move |
| `Brand/fonts/Geist_Mono/` | `Brand/brand/assets/fonts/geist-mono/` | Move |
| `Brand/Logo Kit/` | `Brand/archive/Logo Kit/` | Archive (if superseded) |
| `Brand/brand_guidelines.md` | `Brand/archive/brand_guidelines.md` | Archive |
| `Brand/ai-huevos-narrative-v2.md` | `Brand/archive/ai-huevos-narrative-v2.md` | Archive or review |
| `Brand/color-tests/` | `Brand/archive/color-tests/` | Archive |
| `Brand/Pitch Deck/` | `Brand/templates/presentations/` | Move & organize |
| `Brand/archive-hero-prototype.tsx` | `Brand/archive/` | Archive |
| `Brand/hero-with-photo.tsx` | `Brand/archive/` | Archive |

---

## 🔄 File Naming Conventions

### Rules:
1. **Markdown files:** lowercase-with-hyphens.md
2. **Asset files:** lowercase-with-hyphens.ext
3. **Directories:** lowercase-with-hyphens/
4. **Bilingual files:** Include both languages in content, not filename

### Examples:
- ✅ `logo-system.md` (contains English + Spanish sections)
- ✅ `color-system.md` (contains English + Spanish sections)
- ❌ `logo-system-en.md` + `logo-system-es.md` (separate files)
- ❌ `LogoSystem.md` (camelCase)
- ❌ `logo_system.md` (underscores)

---

## 📝 README Files to Create/Update

### 1. `Brand/README.md`
```markdown
# AI Huevos Brand Guidelines

[Overview of brand directory structure]

## Quick Links
- [Brand Book](brand/brand-book/) - Complete brand guidelines
- [Assets](brand/assets/) - Logo, fonts, illustrations
- [Design System](guidelines/design-system/) - Component and slide guidelines
- [Templates](templates/) - Reusable templates
```

### 2. `Brand/brand/README.md`
```markdown
# AI Huevos Brand System

[How to use the brand system, quick start guide]
```

### 3. `Brand/brand/brand-book/README.md`
```markdown
# Brand Book

[Table of contents, how to navigate]
```

---

## ✅ Validation Checklist

After reorganization:

- [ ] All files follow naming conventions
- [ ] No duplicate content
- [ ] All internal links updated
- [ ] Assets consolidated in single location
- [ ] Archive files clearly marked
- [ ] README files created for each major directory
- [ ] Bilingual content properly structured
- [ ] No Spanglish in active files
- [ ] File structure matches repo rules from README.md

---

## 🚀 Implementation Steps

1. **Create new directory structure**
2. **Move assets first** (logos, fonts)
3. **Consolidate markdown files** (create bilingual versions)
4. **Update all internal links**
5. **Create README files**
6. **Archive old files**
7. **Test all links and references**
8. **Update main README.md** if needed

---

## 📌 Notes

- **Backward compatibility:** Consider creating symlinks or redirect files for old paths during transition
- **Git history:** Use `git mv` to preserve file history
- **Review before archive:** Some "old" files might still be referenced elsewhere
- **Incremental migration:** Don't try to do everything at once
