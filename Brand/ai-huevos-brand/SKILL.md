---
name: ai-huevos-brand
description: AI Huevos brand guidelines and design system for creating on-brand artifacts, dashboards, presentations, and marketing materials. Use when creating any visual output, UI components, documents, or designs that should follow AI Huevos brand identity.
---

# AI Huevos Design System

**Brand philosophy:** "Pa' emprender se necesitan huevos" — Entrepreneurship takes courage.

## Quick Start

| Task | Read This First |
|------|----------------|
| **Presentations (PPTX)** | [slides.md](slides.md) → html2pptx patterns |
| **UI/Artifacts (React)** | [components.md](components.md) → React patterns |
| **Raw tokens** | [references/](references/) → CSS, Tailwind, JSON |

## Brand Colors

### Primary Palette (Equal Proportion)
```
White   #FFFFFF  │  Backgrounds, text on dark
Black   #030102  │  Primary text, wordmark  
Yellow  #FFD826  │  Primary accent, egg character
Blue    #3988FF  │  Primary accent, alternate egg
```

### Secondary Palette (Lower Proportion)
```
Violet  #B4A7FA  │  Details, accents
Orange  #FF6B35  │  CTAs only — never protagonist
```

### Extended (Web/Dashboard)
```
Gray Dark   #8B8B8B  │  Section dividers
Gray Light  #E8E8E8  │  Subtle backgrounds
```

### Data Visualization Sequence
`Yellow → Blue → Violet → Orange → Black`

## Typography

### Fonts
- **Scandia** — Headlines, body text
- **Geist Mono** — Data, metrics, code, CTAs

### Type Scale (UI)
| Style | Size | Weight | Use |
|-------|------|--------|-----|
| H1 | 32px | Bold | Page titles |
| H2 | 28px | Bold | Section headers |
| H3 | 24px | Semibold | Card headers |
| H4 | 20px | Semibold | Subsections |
| Body | 14px | Regular | Default text |
| Small | 12px | Regular | Captions |
| Metric | 48px | Bold (Mono) | Big numbers |

### Type Scale (Presentations)
| Style | Size | Use |
|-------|------|-----|
| Display | 130px | Impact statements |
| H1 | 100px | Slide titles |
| H2 | 75px | Section headers |
| Body Large | 32px | Key points |
| Body | 24px | Supporting text |

## Logo System

### Variants
| File | Wordmark | Egg | Background |
|------|----------|-----|------------|
| `logo-yellow-black.svg` | Black | Yellow | Light |
| `logo-blue-black.svg` | Black | Blue | Light |
| `logo-yellow-white.svg` | White | Yellow | Dark |
| `logo-blue-white.svg` | White | Blue | Dark |

### Usage Rules
- Minimum width: 170px (digital), 2.1cm (print)
- Clear space: Height of the "a" in wordmark
- Never rotate, distort, or add effects

## Color Combinations

### Safe Combinations
| Background | Text | Accent |
|------------|------|--------|
| White | Black | Yellow or Blue |
| Black | White | Yellow or Blue |
| Yellow | Black | Blue |
| Blue | White | Yellow |

### Avoid
- Orange on violet
- Yellow text on white (low contrast)
- Multiple accent colors competing

## Egg Characters

### Types
1. **Sin rostro** — Simple egg shapes, decorative
2. **Con rostro** — Expressive faces, emotions
3. **Con cuerpo** — Full character, interactions

### CSS Egg Shape
```css
.egg {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

## File Structure

```
ai-huevos-brand/
├── SKILL.md              ← You are here
├── slides.md             ← Presentation patterns
├── components.md         ← UI component patterns
├── assets/
│   ├── logos/            ← SVG logo files
│   └── fonts/            ← Scandia, Geist Mono
└── references/
    ├── css-variables.css ← Raw CSS custom properties
    ├── design-tokens.json← Token definitions
    └── tailwind-config.js← Tailwind preset
```

## Key Messages

- "Pa' emprender se necesitan huevos"
- "AI tastes better with eggs"
- "Traducimos la tecnología en herramientas prácticas"
