# Logo System

**Version:** 2.0.0  
**Last Updated:** 2025-01-27  
**Status:** Approved

---

## The AI Huevos Logo

### English

The AI Huevos logo consists of two inseparable elements:
1. **The egg character with face** — Our mascot character
2. **The wordmark "ai huevos"** — In lowercase, Scandia Medium

These elements form a unit. **Never use one without the other.**

---

### Español

El logo de AI Huevos consiste en dos elementos inseparables:
1. **El huevo con rostro** — Nuestro personaje mascota
2. **El wordmark "ai huevos"** — En minúsculas, Scandia Medium

Estos elementos forman una unidad. **Nunca uses uno sin el otro.**

---

## Official Logo Files

### Location

```
Brand/brand/assets/logos/
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

---

## Minimum Size

### English

- **Digital:** 170px width minimum
- **Print:** 2.1cm width minimum
- Below these sizes, the character details become illegible

---

### Español

- **Digital:** Mínimo 170px de ancho
- **Impreso:** Mínimo 2.1cm de ancho
- Por debajo de estos tamaños, los detalles del personaje se vuelven ilegibles

---

## Clear Space

### English

The minimum space around the logo is equal to the height of the letter "a" in the wordmark.

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

---

### Español

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

---

## Logo Don'ts

### English

#### ❌ NEVER do these:

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

---

### Español

#### ❌ NUNCA hagas esto:

1. **No crear formas de huevo personalizadas**
   - No crees formas de huevo CSS/SVG como sustitutos del logo
   - No uses `.egg { border-radius: 50% 50%... }` como logo
   - El logo tiene características faciales y proporciones específicas

2. **No usar emojis de huevo**
   - 🥚 NO es nuestro logo
   - No uses emojis de huevo en headers o como representación de marca
   - Los emojis son aceptables en contenido casual, no como identidad

3. **No separar elementos**
   - No uses el wordmark sin el personaje
   - No uses el personaje sin el wordmark
   - Son una sola unidad

4. **No modificar**
   - No rotes el logo
   - No estires o comprimas
   - No agregues sombras o efectos
   - No cambies los colores
   - No agregues contornos o strokes

5. **No usar fondos ocupados**
   - No lo coloques en imágenes complejas sin overlay
   - No lo coloques en patrones
   - Usa fondos de color sólido o overlays de foto

---

## Correct vs Incorrect Examples

### English

#### ✅ CORRECT: Official Logo

```html
<img src="assets/logos/logo-yellow-black.svg" alt="AI Huevos" />
```

#### ❌ INCORRECT: CSS Egg Shape

```html
<!-- WRONG: This is NOT the logo -->
<div class="egg" style="background: #FFD826; width: 48px; height: 56px;">
</div>
<span>AI Huevos</span>
```

#### ❌ INCORRECT: Emoji

```html
<!-- WRONG: Emoji is NOT the logo -->
<h1>🥚 AI Huevos</h1>
```

---

### Español

#### ✅ CORRECTO: Logo Oficial

```html
<img src="assets/logos/logo-yellow-black.svg" alt="AI Huevos" />
```

#### ❌ INCORRECTO: Forma CSS de Huevo

```html
<!-- MAL: Esto NO es el logo -->
<div class="egg" style="background: #FFD826; width: 48px; height: 56px;">
</div>
<span>AI Huevos</span>
```

#### ❌ INCORRECTO: Emoji

```html
<!-- MAL: El emoji NO es el logo -->
<h1>🥚 AI Huevos</h1>
```

---

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

---

## Favicon

### English

For favicons, use a simplified version:
- The egg character only (no wordmark)
- Minimum 32x32px for visibility
- Use `favicon.svg` from assets (to be created)

---

### Español

Para favicons, usa una versión simplificada:
- Solo el personaje huevo (sin wordmark)
- Mínimo 32x32px para visibilidad
- Usa `favicon.svg` desde assets (a crear)

---

## Co-branding

### English

When our logo appears alongside partners:
- Maintain equal visual weight
- Use a divider line if needed
- Never allow partner logos to dominate ours
- Minimum 24px separation between logos

---

### Español

Cuando nuestro logo aparece junto a socios:
- Mantén peso visual igual
- Usa una línea divisoria si es necesario
- Nunca permitas que los logos de socios dominen el nuestro
- Mínimo 24px de separación entre logos
