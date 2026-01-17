# Typography System

## Font Families

### Primary: Scandia

**Scandia** es nuestra tipografía principal para todo el contenido de marca.

- **Use for:** Headlines, body text, UI elements, marketing
- **Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)
- **Fallbacks:** 'Inter', system-ui, -apple-system, sans-serif

```css
font-family: 'Scandia', 'Inter', system-ui, -apple-system, sans-serif;
```

### Monospace: Geist Mono

**Geist Mono** se usa exclusivamente para datos y código.

- **Use for:** Metrics, data tables, code snippets, CTAs (optional)
- **Weights:** Regular (400), Bold (700)
- **Fallbacks:** 'Monaco', 'Courier New', monospace

```css
font-family: 'Geist Mono', 'Monaco', 'Courier New', monospace;
```

---

## Type Scale: UI/Web

### Headings

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| **H1** | 32px | Bold (700) | 1.2 | Page titles |
| **H2** | 28px | Bold (700) | 1.3 | Section headers |
| **H3** | 24px | Semibold (600) | 1.4 | Card headers |
| **H4** | 20px | Semibold (600) | 1.4 | Subsections |

### Body Text

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| **Body Large** | 16px | Regular (400) | 1.6 | Lead paragraphs |
| **Body** | 14px | Regular (400) | 1.5 | Default text |
| **Small** | 12px | Regular (400) | 1.5 | Captions, footnotes |
| **Label** | 12px | Semibold (600) | 1.4 | Form labels, tags |

### Data/Metrics

| Style | Size | Weight | Font | Use |
|-------|------|--------|------|-----|
| **Metric** | 48px | Bold (700) | Geist Mono | Big numbers |
| **Data** | 13px | Regular (400) | Geist Mono | Table data, code |

---

## Type Scale: Presentations

Para slides y presentaciones, usamos una escala mayor.

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| **Display** | 130px | Medium (500) | 0.92 | Impact statements |
| **H1** | 100px | Medium (500) | 0.92 | Slide titles |
| **H2** | 75px | Medium (500) | 0.93 | Section headers |
| **H3** | 60px | Medium (500) | 0.93 | Subheadings |
| **H4** | 48px | Medium (500) | 1.0 | Card titles |
| **Body Large** | 32px | Regular (400) | 1.25 | Key points |
| **Body** | 24px | Regular (400) | 1.33 | Supporting text |
| **Caption** | 18px | Regular (400) | 1.33 | Footnotes |
| **CTA** | 20px | Regular (400) | 1.2 | Calls to action (Mono) |

---

## Text Case Rules

### ✅ Sentence Case (Default)

Use sentence case for everything. Only capitalize the first word and proper nouns.

```
✅ CORRECT:
- "Pa' emprender se necesitan huevos"
- "Agenda una demo"
- "¿Por qué AI Huevos?"
- "Automatización inteligente"

❌ WRONG:
- "PA' EMPRENDER SE NECESITAN HUEVOS"
- "Agenda Una Demo"
- "¿Por Qué AI Huevos?"
```

### Exceptions

**ALL CAPS allowed for:**
- Acronyms: AI, CRM, API, IA
- Brand abbreviations when context requires

**Title Case avoided except:**
- Proper nouns (names, companies)
- Official product names

---

## Text Colors

### Light Mode (White Background)

| Element | Color | Hex |
|---------|-------|-----|
| Headings | Black | `#030102` |
| Body text | Black | `#030102` |
| Secondary text | Gray Dark | `#8B8B8B` |
| Links | Blue | `#3988FF` |
| Accents | Never colored text | — |

### Dark Mode (Black Background)

| Element | Color | Hex |
|---------|-------|-----|
| Headings | White or Yellow | `#FFFFFF` or `#FFD826` |
| Body text | White | `#FFFFFF` |
| Secondary text | White (80% opacity) | `rgba(255,255,255,0.8)` |
| Links | Blue or Violet | `#3988FF` or `#B4A7FA` |
| Emphasis | Yellow | `#FFD826` |

---

## Line Length

Para legibilidad óptima:

- **Body text:** 50-75 characters per line
- **Max width:** ~680px for paragraphs
- **Presentations:** 40-60 characters per line

```css
.prose {
  max-width: 680px;
}
```

---

## Letter Spacing

| Use Case | Value |
|----------|-------|
| Tight (metrics, display) | -0.5px to -1px |
| Normal (body) | 0 |
| Wide (labels, caps) | 0.5px to 1px |

---

## CSS Implementation

```css
/* Headings */
.text-h1 {
  font-family: 'Scandia', system-ui, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
}

.text-h2 {
  font-family: 'Scandia', system-ui, sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
}

.text-h3 {
  font-family: 'Scandia', system-ui, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
}

/* Body */
.text-body {
  font-family: 'Scandia', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

/* Metrics */
.text-metric {
  font-family: 'Geist Mono', monospace;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1px;
}
```

---

## Font Loading

### Web

```html
<style>
  @import url('https://fonts.cdnfonts.com/css/scandia');
  @import url('https://fonts.cdnfonts.com/css/geist-mono');
</style>
```

### Local Files

Fonts are stored in:
```
Brand/fonts/Scandia/
Brand/fonts/Geist_Mono/
```

---

## Typography Don'ts

❌ **Never:**
- Use ALL CAPS for headlines
- Use Title Case for regular text
- Mix more than 2 font families
- Use colored text on white backgrounds
- Use font sizes smaller than 12px
- Stretch or compress letterforms
- Use decorative or script fonts
