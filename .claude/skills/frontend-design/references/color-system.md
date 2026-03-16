# AI Huevos Color System

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#FFFFFF` | Backgrounds, text on dark |
| **Black** | `#030102` | Primary text, wordmark |
| **Yellow** | `#FFD826` | Primary accent, egg mascot |
| **Blue** | `#3988FF` | Primary accent, links |
| **Violet** | `#B4A7FA` | Accents only (low proportion) |
| **Orange** | `#FF6B35` | CTAs ONLY (never background) |

## Rules

### DO ✅
- Max 3 colors per composition
- Orange = CTA buttons only
- Violet = details/accents only
- Black text on light backgrounds
- White/Yellow text on dark backgrounds

### DON'T ❌
- Never yellow text on white (1.5:1 = FAIL)
- Never violet text on white (2.3:1 = FAIL)
- Never orange as background
- Never more than 3 colors

## Contrast Ratios (WCAG)

### Safe Combinations (AAA/AA)
| Combination | Ratio | Rating |
|-------------|-------|--------|
| Black on White | 20.9:1 | AAA |
| White on Black | 20.9:1 | AAA |
| Yellow on Black | 13.9:1 | AAA |
| Violet on Black | 9.1:1 | AAA |
| Orange on Black | 6.5:1 | AA |
| Blue on Black | 5.9:1 | AA |

### Large Text Only (≥18px bold or ≥24px)
| Combination | Ratio | Rating |
|-------------|-------|--------|
| Blue on White | 3.5:1 | Large only |
| Orange on White | 3.2:1 | Large only |

### Forbidden
| Combination | Ratio | Rating |
|-------------|-------|--------|
| Yellow on White | 1.5:1 | **FAIL** |
| Violet on White | 2.3:1 | **FAIL** |

## Light Mode Palette

```
Background:  #FFFFFF (White)
Text:        #030102 (Black)
Headlines:   #030102 (Black only)
Accents:     #FFD826 or #3988FF (for icons, borders)
CTA Button:  #FF6B35 bg + #030102 text
```

## Dark Mode Palette

```
Background:  #030102 (Black)
Text:        #FFFFFF (White)
Headlines:   #FFFFFF or #FFD826 (both AAA)
Links:       #3988FF or #B4A7FA
CTA Button:  #FFD826 bg + #030102 text
```

## Button Styles

### Primary CTA (Orange)
```css
.btn-primary {
  background-color: #FF6B35;
  color: #030102;
}
.btn-primary:hover {
  background-color: #E55A2B;
}
```

### Secondary (Yellow)
```css
.btn-secondary {
  background-color: #FFD826;
  color: #030102;
}
.btn-secondary:hover {
  background-color: #E5C222;
}
```

### Outline
```css
.btn-outline {
  border: 2px solid #030102;
  color: #030102;
  background-color: transparent;
}
.btn-outline:hover {
  background-color: #F3F4F6;
}
```

## Tailwind Classes

```jsx
// Primary CTA
className="bg-[#FF6B35] text-[#030102] hover:bg-[#E55A2B]"

// Secondary
className="bg-[#FFD826] text-[#030102] hover:bg-[#E5C222]"

// Outline
className="border-2 border-[#030102] text-[#030102] hover:bg-gray-100"

// Link
className="text-[#3988FF] hover:text-[#2A6FCC]"

// Accent badge
className="bg-[#B4A7FA] text-[#030102]"
```

## Data Visualization

For charts and graphs, use in this order:
1. Yellow `#FFD826` - Primary series
2. Blue `#3988FF` - Secondary series
3. Violet `#B4A7FA` - Tertiary series
4. Orange `#FF6B35` - Quaternary series
5. Black `#030102` - For contrast
