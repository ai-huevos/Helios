# AI Huevos Brand Manual

**Version:** 2.0.0
**Last Updated:** 2025-01-16
**Status:** Approved

---

## Brand Overview

**AI Huevos** transforma equipos comerciales con agentes de IA que automatizan prospección, investigación y análisis para cerrar más ventas.

### Brand Philosophy
> "Pa' emprender se necesitan huevos" — Entrepreneurship takes courage.

### Brand Promise
Traducimos la tecnología en herramientas prácticas que potencian el coraje empresarial.

---

## How to Use This Manual

| I need to... | Read this |
|--------------|-----------|
| Understand the brand | [01-brand-identity.md](foundations/01-brand-identity.md) |
| Use the logo correctly | [02-logo-system.md](foundations/02-logo-system.md) |
| Choose the right colors | [03-color-system.md](foundations/03-color-system.md) |
| Apply typography | [04-typography.md](foundations/04-typography.md) |
| Write brand messages | [05-voice-tone.md](foundations/05-voice-tone.md) |
| Build presentations | [slides.md](slides.md) |
| Build UI components | [components.md](components.md) |
| Get raw tokens | [references/](references/) |

---

## Critical Rules (Read First)

### 1. Logo Is Sacred
- **ALWAYS** use official logo files from `assets/logos/`
- **NEVER** create custom egg shapes to represent AI Huevos
- **NEVER** use emoji eggs (🥚) as the logo
- The logo includes the wordmark + character — they are one unit

### 2. Color Discipline
- **Primary Colors (Black, White, Yellow, Blue):** Use in balanced proportion
- **Violet:** Accent only, never dominant
- **Orange:** CTAs only, never as background or main element
- **Rule:** If a design uses more than 3 brand colors, simplify

### 3. Typography Consistency
- **Scandia:** All text (headlines, body, UI)
- **Geist Mono:** Data, metrics, code only
- **Case:** Always sentence case, never ALL CAPS except for acronyms

### 4. Light vs Dark Mode
- **Light Mode:** Black text, Yellow/Blue for accents (not text)
- **Dark Mode:** White/Yellow text, all accent colors work
- See [03-color-system.md](foundations/03-color-system.md) for contrast ratios

---

## Quick Reference

### Brand Colors
```
PRIMARY (Equal proportion)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White   #FFFFFF    Backgrounds, text on dark
Black   #030102    Primary text, wordmark
Yellow  #FFD826    Primary accent, egg character
Blue    #3988FF    Primary accent, alternate egg

SECONDARY (Lower proportion)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Violet  #B4A7FA    Details, accents
Orange  #FF6B35    CTAs only — NEVER protagonist
```

### Logo Files
```
Light backgrounds → logo-yellow-black.svg or logo-blue-black.svg
Dark backgrounds  → logo-yellow-white.svg or logo-blue-white.svg
```

### Minimum Logo Size
- **Digital:** 170px width
- **Print:** 2.1cm width

---

## File Structure

```
Brand/ai-huevos-brand/
├── brand-manual.md          ← You are here (start here)
├── SKILL.md                 ← Claude skill definition
├── slides.md                ← Presentation patterns
├── components.md            ← UI component patterns
│
├── foundations/             ← Core brand guidelines
│   ├── 01-brand-identity.md
│   ├── 02-logo-system.md
│   ├── 03-color-system.md
│   ├── 04-typography.md
│   └── 05-voice-tone.md
│
├── assets/
│   ├── logos/               ← Official logo files (SVG)
│   │   ├── logo-yellow-black.svg
│   │   ├── logo-yellow-white.svg
│   │   ├── logo-blue-black.svg
│   │   └── logo-blue-white.svg
│   └── characters/          ← Egg character illustrations
│
└── references/              ← Implementation files
    ├── css-variables.css    ← CSS custom properties
    ├── design-tokens.json   ← Token definitions
    └── tailwind-config.js   ← Tailwind preset
```

---

## Approval History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2025-01-16 | Color system restrictions, light/dark mode guidelines, logo usage rules |
| 1.0.0 | 2024-12-01 | Initial brand system by Nocturna Studio |

---

## Contact

For brand questions or asset requests, contact the brand team.

**Design by:** Nocturna Studio
