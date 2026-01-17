# Typography System

**Version:** 2.0.0  
**Last Updated:** 2025-01-27  
**Status:** Approved

---

## Font Families

### Primary: Scandia

#### English

**Scandia** is our primary typeface for all brand content.

- **Use for:** Headlines, body text, UI elements, marketing
- **Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)
- **Fallbacks:** 'Inter', system-ui, -apple-system, sans-serif

---

#### Español

**Scandia** es nuestra tipografía principal para todo el contenido de marca.

- **Usar para:** Titulares, texto del cuerpo, elementos UI, marketing
- **Pesos:** Regular (400), Medium (500), Semibold (600), Bold (700)
- **Fallbacks:** 'Inter', system-ui, -apple-system, sans-serif

---

```css
font-family: 'Scandia', 'Inter', system-ui, -apple-system, sans-serif;
```

---

### Monospace: Geist Mono

#### English

**Geist Mono** is used exclusively for data and code.

- **Use for:** Metrics, data tables, code snippets, CTAs (optional)
- **Weights:** Regular (400), Bold (700)
- **Fallbacks:** 'Monaco', 'Courier New', monospace

---

#### Español

**Geist Mono** se usa exclusivamente para datos y código.

- **Usar para:** Métricas, tablas de datos, snippets de código, CTAs (opcional)
- **Pesos:** Regular (400), Bold (700)
- **Fallbacks:** 'Monaco', 'Courier New', monospace

---

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

#### English

For slides and presentations, we use a larger scale.

---

#### Español

Para slides y presentaciones, usamos una escala mayor.

---

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

#### English

Use sentence case for everything. Only capitalize the first word and proper nouns.

```
✅ CORRECT:
- "Pa' emprender se necesitan huevos"
- "Schedule a demo"
- "Why AI Huevos?"
- "Intelligent automation"

❌ WRONG:
- "PA' EMPRENDER SE NECESITAN HUEVOS"
- "Schedule A Demo"
- "Why AI Huevos?"
```

---

#### Español

Usa sentence case para todo. Solo capitaliza la primera palabra y nombres propios.

```
✅ CORRECTO:
- "Pa' emprender se necesitan huevos"
- "Agenda una demo"
- "¿Por qué AI Huevos?"
- "Automatización inteligente"

❌ MALO:
- "PA' EMPRENDER SE NECESITAN HUEVOS"
- "Agenda Una Demo"
- "¿Por Qué AI Huevos?"
```

---

### Exceptions

#### English

**ALL CAPS allowed for:**
- Acronyms: AI, CRM, API, IA
- Brand abbreviations when context requires

**Title Case avoided except:**
- Proper nouns (names, companies)
- Official product names

---

#### Español

**MAYÚSCULAS permitidas para:**
- Acrónimos: AI, CRM, API, IA
- Abreviaciones de marca cuando el contexto lo requiere

**Title Case evitado excepto:**
- Nombres propios (nombres, empresas)
- Nombres oficiales de productos

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

#### English

For optimal readability:
- **Body text:** 50-75 characters per line
- **Max width:** ~680px for paragraphs
- **Presentations:** 40-60 characters per line

---

#### Español

Para legibilidad óptima:
- **Texto del cuerpo:** 50-75 caracteres por línea
- **Ancho máximo:** ~680px para párrafos
- **Presentaciones:** 40-60 caracteres por línea

---

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
Brand/brand/assets/fonts/scandia/
Brand/brand/assets/fonts/geist-mono/
```

---

## Typography Don'ts

#### English

❌ **Never:**
- Use ALL CAPS for headlines
- Use Title Case for regular text
- Mix more than 2 font families
- Use colored text on white backgrounds
- Use font sizes smaller than 12px
- Stretch or compress letterforms
- Use decorative or script fonts

---

#### Español

❌ **Nunca:**
- Usar MAYÚSCULAS para titulares
- Usar Title Case para texto regular
- Mezclar más de 2 familias tipográficas
- Usar texto de color en fondos blancos
- Usar tamaños de fuente menores a 12px
- Estirar o comprimir letras
- Usar fuentes decorativas o script
