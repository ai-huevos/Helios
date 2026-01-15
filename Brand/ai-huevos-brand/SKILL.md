---
name: ai-huevos-brand
description: AI Huevos brand guidelines and design system for creating on-brand artifacts, dashboards, presentations, and marketing materials. Use when creating any visual output, UI components, documents, or designs that should follow AI Huevos brand identity. Triggers include requests for branded content, dashboards, presentations, landing pages, marketing materials, or any design work for AI Huevos or clients using AI Huevos visual language.
---

# AI Huevos Brand Guidelines

Design by Nocturna Studio. Brand philosophy: **"Pa' emprender se necesitan huevos"** — Entrepreneurship takes courage.

## Brand Colors

### Primary Palette (Equal Proportion)
| Color | Hex | Usage |
|-------|-----|-------|
| White | #FFFFFF | Backgrounds, text on dark |
| Black | #121212 | Primary text, wordmark |
| Yellow | #FFD826 | Primary accent, main egg character |
| Blue | #3988FF | Primary accent, alternate egg |

### Secondary Palette (Lower Proportion)
| Color | Hex | Usage |
|-------|-----|-------|
| Violet | #B4A7FA | Details, accents |
| Orange | #FF6B35 | CTAs, buttons only — never protagonist |

### Web Extended Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Gray Dark | #8B8B8B | Highlights, section dividers |
| Gray Light | #E8E8E8 | Subtle backgrounds |

### Color Usage Rules
1. Primary colors (white, black, yellow, blue): Use in **similar proportions**
2. Violet: For details, lower proportion than primaries
3. Orange/Red: **Minimal use**, complements only, primarily for web CTAs
4. Text: Always white or black, prioritize contrast
5. Photography overlays: White/black text only, color for accents

## Typography

### Primary Font: Scandia
- **Medium**: Headlines, short text
- **Regular**: Body text, running copy
- Always use **sentence case**

### Code/Data Font: Geist Mono
- For metrics, data tables, code snippets

### Type Scale (Web/Dashboard)
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 32px | Bold | 1.2 |
| H2 | 28px | Bold | 1.3 |
| H3 | 24px | Semibold | 1.4 |
| H4 | 20px | Semibold | 1.4 |
| Body | 14px | Regular | 1.5 |
| Small | 12px | Regular | 1.5 |
| Metric | 48px | Bold (Mono) | 1.1 |
| Data | 13px | Regular (Mono) | 1.5 |

## Logo System

### Logo Variants
1. **Yellow egg** — Primary logo (light backgrounds)
2. **Blue egg** — Alternate logo (light backgrounds)
3. **Yellow egg white wordmark** — For dark/black backgrounds
4. **Blue egg white wordmark** — For dark/black backgrounds

### Logo on Backgrounds
| Background | Wordmark | Egg |
|------------|----------|-----|
| White | Black | Yellow or Blue |
| Black | White | Yellow or Blue |
| Blue | White | Yellow |
| Yellow | Black | Blue |

### Minimum Size
- **Digital**: 170px width
- **Print**: 2.1cm width

## Characters (Personajes)

The egg characters come in three forms:
- **Sin rostro**: Simple egg shapes — decorative use
- **Con rostro**: Eggs with faces — expressing ideas/emotions
- **Con cuerpo**: Full character with arms/legs — interaction

Character colors: Yellow, Blue, Violet, Orange (all 5 brand colors available)

## Color Combinations Matrix

### Permitted Combinations (Accent on Background)
| Accent ↓ / BG → | White | Black | Yellow | Blue | Violet | Orange |
|-----------------|-------|-------|--------|------|--------|--------|
| Black | ✓ | — | ✓ | ✓ | ✓ | ✓ |
| White | — | ✓ | ✓ | ✓ | ✓ | ✓ |
| Yellow | ✓ | ✓ | — | ✓ | ✓ | ✓ |
| Blue | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Violet | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| Gray | — | ✓ | ✓ | ✓ | ✓ | — |
| Orange | — | ✓ | ✓ | ✓ | — | — |

## Design Applications

### Web/Digital
- White as dominant background
- Black for text
- Gray tones for highlights and section dividers
- Yellow and Blue as complementary colors
- Violet for accents
- Orange primarily for buttons/CTAs

### Dashboards
- White/neutral-50 backgrounds
- Cards with subtle shadows and neutral-300 borders
- Data visualization: Yellow → Blue → Violet → Orange sequence
- Metrics in Geist Mono bold
- Status colors: success (#10B981), warning (#F59E0B), error (#EF4444)

## Assets

### Logos (`assets/logos/`)
- `logo-yellow-black.svg` — Yellow egg + black wordmark (light bg)
- `logo-blue-black.svg` — Blue egg + black wordmark (light bg)
- `logo-yellow-white.svg` — Yellow egg + white wordmark (dark bg)
- `logo-blue-white.svg` — Blue egg + white wordmark (dark bg)

### Fonts
Located at `../fonts/` relative to skill folder:
- **Scandia Regular**: `../fonts/Scandia/fonnts.com-Scandia.otf`
- **Scandia Medium**: `../fonts/Scandia/fonnts.com-Scandia_Medium.otf`
- **Scandia Bold**: `../fonts/Scandia/fonnts.com-Scandia_Bold.otf`
- **Geist Mono**: `../fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf`

## Implementation Files

See `references/` for ready-to-use implementation:
- `css-variables.css` — Full CSS custom properties
- `design-tokens.json` — Programmatic design tokens
- `tailwind-config.js` — Tailwind CSS configuration

## Key Brand Messages

- "Pa' emprender se necesitan huevos"
- "Traducimos la tecnología en herramientas prácticas que impulsan resultados reales"
- "AI tastes better with eggs"
