# Color System

## Color Philosophy

La paleta de AI Huevos balancea **profesionalismo** con **personalidad**. Usamos colores vibrantes con disciplina — cada color tiene un propósito específico.

## The Palette

### Primary Colors (Equal Proportion)

Estos cuatro colores forman la base de nuestra identidad. Deben usarse en proporciones similares.

| Color | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| **White** | `#FFFFFF` | 255, 255, 255 | Backgrounds, text on dark |
| **Black** | `#030102` | 3, 1, 2 | Primary text, wordmark |
| **Yellow** | `#FFD826` | 255, 216, 38 | Primary accent, egg character |
| **Blue** | `#3988FF` | 57, 136, 255 | Primary accent, alternate egg |

### Secondary Colors (Lower Proportion)

Estos colores complementan los primarios. Nunca deben dominar.

| Color | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| **Violet** | `#B4A7FA` | 180, 167, 250 | Details, accents |
| **Orange** | `#FF6B35` | 255, 107, 53 | CTAs only — NEVER protagonist |

### Extended Colors (Web/UI)

| Color | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| **Gray Dark** | `#8B8B8B` | 139, 139, 139 | Section dividers, captions |
| **Gray Light** | `#E8E8E8` | 232, 232, 232 | Subtle backgrounds |

---

## Color Usage Rules

### Rule 1: The 3-Color Maximum

En cualquier composición, usa máximo 3 colores de marca prominentemente.

```
✅ GOOD: White + Black + Yellow
✅ GOOD: Black + White + Blue
✅ GOOD: White + Black + Yellow (accent) + Blue (detail)

❌ BAD: White + Black + Yellow + Blue + Violet + Orange (too many)
```

### Rule 2: Orange Is for CTAs Only

Orange es nuestro color de "acción". Reservado exclusivamente para:
- Botones de call-to-action primarios
- Links importantes en dark mode
- Hover states

```
✅ CORRECT: <button class="cta-primary">Agenda una demo</button>
❌ WRONG: <section style="background: #FF6B35">...</section>
❌ WRONG: Orange as section background
❌ WRONG: Orange as header color
```

### Rule 3: Violet for Details

Violet es un color de acento sutil. Usado para:
- Tertiary elements
- Hover states
- Data visualization (tercera serie)
- Subtle highlights

```
✅ CORRECT: Icon background, card border
❌ WRONG: Main headline color
❌ WRONG: Large section background
```

### Rule 4: Yellow Text Restrictions

Yellow tiene bajo contraste en fondos claros. Never use as text on light backgrounds.

```
✅ CORRECT: Yellow text on black (13.9:1 contrast)
✅ CORRECT: Yellow as button background with black text
❌ WRONG: Yellow text on white (1.5:1 contrast - FAILS WCAG)
```

---

## Light Mode vs Dark Mode

### Light Mode (White Background)

| Element | Color | Notes |
|---------|-------|-------|
| Background | White `#FFFFFF` | Primary surfaces |
| Primary text | Black `#030102` | 20.9:1 contrast ✓ AAA |
| Secondary text | Gray Dark `#8B8B8B` | Use sparingly |
| Accents | Yellow, Blue | Icons, borders, buttons |
| Headlines | Black only | Never colored text on white |
| Links | Blue `#3988FF` | With underline for accessibility |
| CTA buttons | Yellow bg + Black text | Or Orange bg + Black text |

**Key Principle:** In light mode, all text must be black. Colors are for decorative elements only.

### Dark Mode (Black Background)

| Element | Color | Notes |
|---------|-------|-------|
| Background | Black `#030102` | Primary surfaces |
| Primary text | White `#FFFFFF` | 20.9:1 contrast ✓ AAA |
| Headlines | White or Yellow | Both pass AAA |
| Emphasis | Yellow `#FFD826` | 13.9:1 contrast ✓ AAA |
| Links | Blue `#3988FF` | 5.9:1 contrast ✓ AA |
| Secondary | Violet `#B4A7FA` | 9.1:1 contrast ✓ AAA |
| CTA buttons | Yellow bg + Black text | Maximum impact |

**Key Principle:** Dark mode is more expressive — all accent colors work for text.

---

## Contrast Ratios (WCAG 2.1)

| Combination | Ratio | Rating |
|-------------|-------|--------|
| Black on White | 20.9:1 | ✓ AAA |
| White on Black | 20.9:1 | ✓ AAA |
| Yellow on Black | 13.9:1 | ✓ AAA |
| Violet on Black | 9.1:1 | ✓ AAA |
| Orange on Black | 6.5:1 | ✓ AA |
| Blue on Black | 5.9:1 | ✓ AA |
| Yellow on White | 1.5:1 | ✗ FAIL |
| Violet on White | 2.3:1 | ✗ FAIL |
| Blue on White | 3.5:1 | ⚠ Large only |
| Orange on White | 3.2:1 | ⚠ Large only |

---

## Safe Color Combinations

### Approved Combinations

| Background | Text | Accent | Use Case |
|------------|------|--------|----------|
| White | Black | Yellow | Professional, light UI |
| White | Black | Blue | Corporate, trustworthy |
| Black | White | Yellow | Bold, tech-forward |
| Black | White | Blue | Sophisticated, modern |
| Black | Yellow | Blue | Maximum energy |
| Yellow | Black | Blue | Playful, attention-grabbing |
| Blue | White | Yellow | Confident, distinctive |

### Forbidden Combinations

| Combination | Reason |
|-------------|--------|
| Yellow text on White | Fails contrast (1.5:1) |
| Violet text on White | Fails contrast (2.3:1) |
| Orange on Violet | Vibrates visually |
| Multiple accent colors competing | Loses focus |
| Orange as background | Reserved for CTAs only |

---

## Data Visualization

Use colors in this sequence for charts and graphs:

```
Series 1: Yellow  #FFD826  (primary data)
Series 2: Blue    #3988FF  (secondary data)
Series 3: Violet  #B4A7FA  (tertiary)
Series 4: Orange  #FF6B35  (use sparingly)
Series 5: Black   #030102  (for contrast/reference)
```

---

## CSS Implementation

```css
:root {
  /* Primary */
  --color-white: #FFFFFF;
  --color-black: #030102;
  --color-yellow: #FFD826;
  --color-blue: #3988FF;

  /* Secondary */
  --color-violet: #B4A7FA;
  --color-orange: #FF6B35;

  /* Extended */
  --color-gray-dark: #8B8B8B;
  --color-gray-light: #E8E8E8;
}
```

---

## Examples

### ✅ Good: Light Mode Card
```css
.card {
  background: var(--color-white);
  color: var(--color-black);
  border-left: 4px solid var(--color-yellow);
}
```

### ✅ Good: Dark Mode Hero
```css
.hero {
  background: var(--color-black);
  color: var(--color-white);
}

.hero h1 .highlight {
  color: var(--color-yellow); /* AAA contrast */
}
```

### ❌ Bad: Rainbow Explosion
```css
/* TOO MANY COLORS */
.section {
  background: var(--color-yellow);
  border: 4px solid var(--color-violet);
}
.section h2 { color: var(--color-blue); }
.section p { color: var(--color-orange); }
```
