# AI Huevos Brand Cheatsheet

Quick reference for designers and developers. For full guidelines, see [brand-manual.md](brand-manual.md).

---

## Colors

```
PRIMARY (use equally)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White   #FFFFFF   │   Black   #030102
Yellow  #FFD826   │   Blue    #3988FF

SECONDARY (use sparingly)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Violet  #B4A7FA   │   Orange  #FF6B35 (CTAs ONLY)
```

### Rules
- ✅ Max 3 colors per composition
- ✅ Orange = CTA buttons only
- ✅ Violet = details/accents only
- ❌ Never yellow text on white
- ❌ Never orange as background

---

## Logo

### Files
```
Light bg → logo-yellow-black.svg or logo-blue-black.svg
Dark bg  → logo-yellow-white.svg or logo-blue-white.svg
```

### Rules
- ✅ Always use official SVG files
- ✅ Min width: 170px (digital)
- ❌ Never use CSS egg shapes as logo
- ❌ Never use 🥚 emoji as logo
- ❌ Never separate wordmark from character

---

## Typography

### Fonts
```
Scandia      → All text (headlines, body, UI)
Geist Mono   → Data, metrics, code only
```

### Scale
```
H1    32px / Bold
H2    28px / Bold
H3    24px / Semibold
H4    20px / Semibold
Body  14px / Regular
Small 12px / Regular
```

### Rules
- ✅ Sentence case always
- ❌ Never ALL CAPS (except acronyms)
- ❌ Never Title Case

---

## Light Mode

| Element | Color |
|---------|-------|
| Background | White `#FFFFFF` |
| Text | Black `#030102` |
| Accents | Yellow/Blue (icons, borders) |
| Headlines | Black only |
| CTA | Yellow bg + Black text |

**Rule:** All text = black. Colors for decoration only.

---

## Dark Mode

| Element | Color |
|---------|-------|
| Background | Black `#030102` |
| Text | White `#FFFFFF` |
| Headlines | White or Yellow |
| Links | Blue or Violet |
| CTA | Yellow bg + Black text |

**Rule:** All accent colors work for text.

---

## Buttons

```css
/* Primary CTA */
background: #FF6B35;  /* Orange */
color: #030102;       /* Black */

/* Secondary */
background: #FFD826;  /* Yellow */
color: #030102;       /* Black */

/* Outline */
border: 2px solid #030102;
color: #030102;
```

---

## Quick CSS

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

---

## Voice

| Do | Don't |
|----|-------|
| Direct, short sentences | Long, complex paragraphs |
| "Tú" (informal) | "Usted" (formal) |
| Active voice | Passive voice |
| Specific numbers | Vague claims |
| Sentence case | ALL CAPS or Title Case |

---

## Key Messages

> "Pa' emprender se necesitan huevos"

- 85% reduction in research time
- 3x increase in personalized outreach
- 60% improvement in lead qualification
- 24/7 agent operation

---

## File Paths

```
Brand/ai-huevos-brand/
├── brand-manual.md      ← Start here
├── CHEATSHEET.md        ← You are here
├── foundations/         ← Deep dive docs
├── assets/logos/        ← Official logos
└── references/          ← CSS, JSON, Tailwind
```
