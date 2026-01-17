# Logo System

## The AI Huevos Logo

El logo de AI Huevos consiste en dos elementos inseparables:
1. **El huevo con rostro** — Nuestro personaje mascota
2. **El wordmark "ai huevos"** — En minúsculas, Scandia Medium

Estos elementos forman una unidad. **Nunca uses uno sin el otro.**

## Official Logo Files

### Location
```
Brand/ai-huevos-brand/assets/logos/
├── logo-yellow-black.svg   ← Primary (light backgrounds)
├── logo-yellow-white.svg   ← Primary (dark backgrounds)
├── logo-blue-black.svg     ← Alternate (light backgrounds)
└── logo-blue-white.svg     ← Alternate (dark backgrounds)
```

### Usage by Background

| Background | Use This File | Egg Color | Wordmark |
|------------|---------------|-----------|----------|
| White / Light | `logo-yellow-black.svg` | Yellow | Black |
| White / Light | `logo-blue-black.svg` | Blue | Black |
| Black / Dark | `logo-yellow-white.svg` | Yellow | White |
| Black / Dark | `logo-blue-white.svg` | Blue | White |
| Yellow | `logo-blue-black.svg` | Blue | Black |
| Blue | `logo-yellow-white.svg` | Yellow | White |

## Minimum Size

- **Digital:** 170px width minimum
- **Print:** 2.1cm width minimum
- Below these sizes, the character details become illegible

## Clear Space

El espacio mínimo alrededor del logo es igual a la altura de la letra "a" en el wordmark.

```
        ┌─────────────────────────────┐
        │         [clear]             │
        │    ┌─────────────────┐      │
        │    │                 │      │
[clear] │    │   🥚 ai huevos  │      │ [clear]
        │    │                 │      │
        │    └─────────────────┘      │
        │         [clear]             │
        └─────────────────────────────┘
```

## Logo Don'ts

### ❌ NEVER do these:

1. **No custom egg shapes**
   - Don't create CSS/SVG egg shapes as logo substitutes
   - Don't use `.egg { border-radius: 50% 50%... }` as the logo
   - The logo has specific facial features and proportions

2. **No emoji eggs**
   - 🥚 is NOT our logo
   - Don't use egg emojis in headers or as brand representation
   - Emojis are acceptable in casual content, not as identity

3. **No separated elements**
   - Don't use the wordmark without the character
   - Don't use the character without the wordmark
   - They are one lockup

4. **No modifications**
   - Don't rotate the logo
   - Don't stretch or compress
   - Don't add shadows or effects
   - Don't change the colors
   - Don't add outlines or strokes

5. **No busy backgrounds**
   - Don't place on complex images without overlay
   - Don't place on patterns
   - Use solid color backgrounds or photo overlays

## Correct vs Incorrect Examples

### ✅ CORRECT: Official Logo
```html
<img src="assets/logos/logo-yellow-black.svg" alt="AI Huevos" />
```

### ❌ INCORRECT: CSS Egg Shape
```html
<!-- WRONG: This is NOT the logo -->
<div class="egg" style="background: #FFD826; width: 48px; height: 56px;">
</div>
<span>AI Huevos</span>
```

### ❌ INCORRECT: Emoji
```html
<!-- WRONG: Emoji is NOT the logo -->
<h1>🥚 AI Huevos</h1>
```

### ❌ INCORRECT: Random Illustration
```html
<!-- WRONG: Custom illustration is NOT the logo -->
<svg><!-- custom egg drawing --></svg>
```

## Logo in Code

### React Component
```jsx
// ✅ CORRECT: Use the official SVG
import logo from '@/assets/logos/logo-yellow-black.svg';

function Header() {
  return (
    <img
      src={logo}
      alt="AI Huevos"
      width={170}
      style={{ minWidth: 170 }}
    />
  );
}
```

### HTML
```html
<!-- ✅ CORRECT -->
<img
  src="/assets/logos/logo-yellow-black.svg"
  alt="AI Huevos"
  width="170"
>
```

### CSS Background (if necessary)
```css
/* ✅ CORRECT: Use as background image */
.logo {
  background-image: url('/assets/logos/logo-yellow-black.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 170px;
  height: 94px; /* maintain aspect ratio */
}
```

## Favicon

For favicons, use a simplified version:
- The egg character only (no wordmark)
- Minimum 32x32px for visibility
- Use `favicon.svg` from assets (to be created)

## Co-branding

When our logo appears alongside partners:
- Maintain equal visual weight
- Use a divider line if needed
- Never allow partner logos to dominate ours
- Minimum 24px separation between logos
