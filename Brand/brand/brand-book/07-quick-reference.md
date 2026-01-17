# Quick Reference

**Version:** 2.0.0  
**Last Updated:** 2025-01-27  
**Status:** Approved

---

Quick reference for designers and developers. For full guidelines, see [00-introduction.md](00-introduction.md).

---

## Colors

### Primary (use equally)

```
White   #FFFFFF   │   Black   #030102
Yellow  #FFD826   │   Blue    #3988FF
```

### Secondary (use sparingly)

```
Violet  #B4A7FA   │   Orange  #FF6B35 (CTAs ONLY)
```

### Rules

#### English

- ✅ Max 3 colors per composition
- ✅ Orange = CTA buttons only
- ✅ Violet = details/accents only
- ❌ Never yellow text on white
- ❌ Never orange as background

---

#### Español

- ✅ Máximo 3 colores por composición
- ✅ Naranja = solo botones CTA
- ✅ Violeta = solo detalles/acentes
- ❌ Nunca texto amarillo sobre blanco
- ❌ Nunca naranja como fondo

---

## Logo

### Files

```
Light bg → logo-yellow-black.svg or logo-blue-black.svg
Dark bg  → logo-yellow-white.svg or logo-blue-white.svg
```

### Rules

#### English

- ✅ Always use official SVG files
- ✅ Min width: 170px (digital)
- ❌ Never use CSS egg shapes as logo
- ❌ Never use 🥚 emoji as logo
- ❌ Never separate wordmark from character

---

#### Español

- ✅ Siempre usa archivos SVG oficiales
- ✅ Ancho mínimo: 170px (digital)
- ❌ Nunca uses formas CSS de huevo como logo
- ❌ Nunca uses emoji 🥚 como logo
- ❌ Nunca separes el wordmark del personaje

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

#### English

- ✅ Sentence case always
- ❌ Never ALL CAPS (except acronyms)
- ❌ Never Title Case

---

#### Español

- ✅ Siempre sentence case
- ❌ Nunca MAYÚSCULAS (excepto acrónimos)
- ❌ Nunca Title Case

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

### English

| Do | Don't |
|----|-------|
| Direct, short sentences | Long, complex paragraphs |
| "You" (informal) | "You" (formal) |
| Active voice | Passive voice |
| Specific numbers | Vague claims |
| Sentence case | ALL CAPS or Title Case |

---

### Español

| Hacer | No Hacer |
|-------|----------|
| Directo, frases cortas | Párrafos largos, complejos |
| "Tú" (informal) | "Usted" (formal) |
| Voz activa | Voz pasiva |
| Números específicos | Afirmaciones vagas |
| Sentence case | MAYÚSCULAS o Title Case |

---

## Key Messages

### Tagline

#### English

> "Pa' emprender se necesitan huevos"

---

#### Español

> "Pa' emprender y transformar se necesitan huevos"

---

### Metrics

- $1.5M+ in value opportunities (minimum)
- 2-3 weeks for automations
- 500+ employees (target audience)
- Enterprise-only positioning

---

## File Paths

```
Brand/brand/
├── brand-book/        ← Complete brand book (bilingual)
├── assets/            ← Logos, fonts, illustrations
└── references/        ← CSS, JSON, Tailwind
```

---

## Mission

#### English

**We translate technology into practical tools that drive real results for enterprises across Latin America, enabling them to achieve operational excellence through intelligent automation and strategic systems—built sustainably, validated in real environments, and demonstrated with tangible showcases.**

---

#### Español

**Traducimos la tecnología en herramientas prácticas que impulsan resultados reales para empresas en América Latina, permitiéndoles lograr la excelencia operativa a través de automatización inteligente y sistemas estratégicos—construidos de forma sostenible, validados en entornos reales y demostrados con showcases tangibles.**
