---
name: ai-huevos-brand
description: AI Huevos brand guidelines and design system for creating on-brand artifacts, dashboards, presentations, and marketing materials. Use when creating any visual output, UI components, documents, or designs that should follow AI Huevos brand identity.
---

# AI Huevos Design System

**Brand philosophy:** "Pa' emprender se necesitan huevos" — Entrepreneurship takes courage.

## Quick Start

| Task | Read This First |
|------|----------------|
| **Full brand manual** | [brand-manual.md](brand-manual.md) |
| **Quick reference** | [CHEATSHEET.md](CHEATSHEET.md) |
| **Presentations (PPTX)** | [slides.md](slides.md) |
| **UI/Artifacts (React)** | [components.md](components.md) |
| **Raw tokens** | [references/](references/) |

## Critical Rules

### 1. Logo Is Sacred
```
✅ ALWAYS use official SVG from assets/logos/
❌ NEVER create CSS egg shapes as logo substitute
❌ NEVER use 🥚 emoji as logo
❌ NEVER separate wordmark from character
```

### 2. Color Discipline
```
✅ Max 3 colors per composition
✅ Orange = CTAs only (never background)
✅ Violet = accents only (never dominant)
❌ NEVER yellow text on white (fails WCAG)
```

### 3. Typography
```
✅ Scandia for all text
✅ Geist Mono for data/code only
✅ Sentence case always
❌ NEVER ALL CAPS (except acronyms)
```

## Brand Colors

### Primary (Equal Proportion)
```
White   #FFFFFF  │  Backgrounds, text on dark
Black   #030102  │  Primary text, wordmark
Yellow  #FFD826  │  Primary accent, egg character
Blue    #3988FF  │  Primary accent, alternate egg
```

### Secondary (Lower Proportion)
```
Violet  #B4A7FA  │  Details, accents
Orange  #FF6B35  │  CTAs only — NEVER protagonist
```

## Logo Files

```
Light backgrounds → logo-yellow-black.svg or logo-blue-black.svg
Dark backgrounds  → logo-yellow-white.svg or logo-blue-white.svg

Location: assets/logos/
Minimum size: 170px width
```

## Light Mode vs Dark Mode

### Light Mode (White background)
- Text: Black only
- Colors: For decoration (icons, borders, buttons)
- Headlines: Black
- CTA: Yellow bg + Black text

### Dark Mode (Black background)
- Text: White or Yellow
- All accent colors work for text
- Headlines: White or Yellow (both AAA)
- CTA: Yellow bg + Black text

## Type Scale

| Style | Size | Weight | Use |
|-------|------|--------|-----|
| H1 | 32px | Bold | Page titles |
| H2 | 28px | Bold | Section headers |
| H3 | 24px | Semibold | Card headers |
| H4 | 20px | Semibold | Subsections |
| Body | 14px | Regular | Default text |
| Small | 12px | Regular | Captions |
| Metric | 48px | Bold (Mono) | Big numbers |

## File Structure

```
ai-huevos-brand/
├── SKILL.md              ← You are here
├── brand-manual.md       ← Full brand manual
├── CHEATSHEET.md         ← Quick reference
├── slides.md             ← Presentation patterns
├── components.md         ← UI component patterns
├── foundations/          ← Deep dive documentation
│   ├── 01-brand-identity.md
│   ├── 02-logo-system.md
│   ├── 03-color-system.md
│   ├── 04-typography.md
│   └── 05-voice-tone.md
├── assets/
│   └── logos/            ← Official SVG logos
└── references/
    ├── css-variables.css ← CSS custom properties
    ├── design-tokens.json← Token definitions
    └── tailwind-config.js← Tailwind preset
```

## Key Messages

- "Pa' emprender se necesitan huevos"
- "AI tastes better with eggs"
- "Traducimos la tecnología en herramientas prácticas"

## CSS Quick Reference

```css
:root {
  --white: #FFFFFF;
  --black: #030102;
  --yellow: #FFD826;
  --blue: #3988FF;
  --violet: #B4A7FA;
  --orange: #FF6B35;

  --font-primary: 'Scandia', system-ui, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  --radius-egg: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```
