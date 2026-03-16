# AI Huevos Typography

## Fonts

| Font | Usage |
|------|-------|
| **Scandia** | All text (headlines, body, UI) |
| **Geist Mono** | Data, metrics, code only |

### Fallback Stacks
```css
/* Primary */
font-family: 'Scandia', 'Inter', system-ui, -apple-system, sans-serif;

/* Monospace */
font-family: 'Geist Mono', 'Monaco', 'Courier New', monospace;
```

## Type Scale (UI)

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| H1 | 32px | 700 (Bold) | 1.2 | Page titles |
| H2 | 28px | 700 (Bold) | 1.3 | Section headers |
| H3 | 24px | 600 (Semibold) | 1.4 | Card headers |
| H4 | 20px | 600 (Semibold) | 1.4 | Subsections |
| Body Large | 16px | 400 (Regular) | 1.6 | Lead text |
| Body | 14px | 400 (Regular) | 1.5 | Default text |
| Small | 12px | 400 (Regular) | 1.5 | Captions |
| Label | 12px | 600 (Semibold) | 1.4 | Form labels |
| Metric | 48px | 700 (Bold) | 1.1 | Big numbers (mono) |

## Rules

### DO ✅
- Sentence case for all headings
- Clear hierarchy (H1 > H2 > H3)
- Consistent spacing between elements
- Use Geist Mono for numbers/data only

### DON'T ❌
- Never ALL CAPS (except acronyms like "AI", "CEO")
- Never Title Case
- Never mix fonts in same element
- Never use decorative fonts

## Tailwind Classes

```jsx
// H1
className="text-[32px] font-bold leading-[1.2]"

// H2
className="text-[28px] font-bold leading-[1.3]"

// H3
className="text-[24px] font-semibold leading-[1.4]"

// H4
className="text-[20px] font-semibold leading-[1.4]"

// Body Large
className="text-[16px] font-normal leading-[1.6]"

// Body
className="text-[14px] font-normal leading-[1.5]"

// Small
className="text-[12px] font-normal leading-[1.5]"

// Metric (monospace)
className="text-[48px] font-bold leading-[1.1] font-mono"
```

## CSS Variables

```css
:root {
  --font-primary: 'Scandia', 'Inter', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Monaco', monospace;

  /* Type scale */
  --text-h1: 32px;
  --text-h2: 28px;
  --text-h3: 24px;
  --text-h4: 20px;
  --text-body-lg: 16px;
  --text-body: 14px;
  --text-small: 12px;
  --text-metric: 48px;
}
```

## Examples

### Correct ✅
```
Agentes de IA para tu negocio
```

### Incorrect ❌
```
AGENTES DE IA PARA TU NEGOCIO  ← All caps
Agentes De IA Para Tu Negocio  ← Title case
```

## Responsive Adjustments

For mobile (< 768px), reduce by ~20%:

| Style | Desktop | Mobile |
|-------|---------|--------|
| H1 | 32px | 26px |
| H2 | 28px | 22px |
| H3 | 24px | 20px |
| Metric | 48px | 36px |
