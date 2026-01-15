# AI Huevos Pitch Deck - Master Design System
## SF Minimalist Aesthetic + Brand Guidelines Integration

---

## 1. DESIGN PHILOSOPHY

### Core Principles
- **Maximum 60% white space** per slide (40% content maximum)
- **One concept per slide** - no exceptions
- **Data over decoration** - remove all non-essential elements
- **Bold hierarchy** - clear visual priority at all times

### AI Huevos Brand Integration
- **Playful minimalism** - egg characters as functional accents, not decoration
- **High contrast** - black/white foundation with strategic color pops
- **Human-centered** - warm, approachable despite technical subject matter
- **Spanish-first** - all content in Spanish unless technical terms

---

## 2. COLOR SYSTEM

### Primary Palette (Slide Backgrounds)
```css
--white: #FFFFFF;        /* Default background */
--black: #000000;        /* Alternative background for impact */
--yellow: #FFE03D;       /* Accent background (use sparingly) */
--blue: #4D9FFF;         /* Accent background (use sparingly) */
```

### Accent Colors (10% maximum usage per slide)
```css
--purple: #B8A0FF;       /* Details, character accents */
--red-orange: #FF5C3D;   /* CTAs, urgent highlights */
```

### Text Colors (Based on Background)
```css
/* On white background */
--text-primary: #000000;
--text-secondary: #9B9B9B;

/* On black/colored backgrounds */
--text-primary: #FFFFFF;
--text-secondary: #E5E5E5;
```

### Color Usage Rules
1. **White background** = 80% of slides (default)
2. **Black background** = 15% of slides (for dramatic emphasis)
3. **Colored backgrounds** = 5% of slides (yellow/blue for closing vision)
4. **Never use color for large text areas** - only for accents/highlights
5. **Egg characters inherit slide accent color** - yellow/blue/purple

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack
```css
--font-primary: 'Scandia', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Geist Mono', 'SF Mono', Consolas, monospace;
```

### Type Scale (Optimized for 1920x1080px)
```css
/* Headlines (Scandia Medium) */
--type-display: 130px / 120px;  /* line-height */
--type-h1: 100px / 92px;
--type-h2: 75px / 70px;
--type-h3: 60px / 56px;
--type-h4: 48px / 48px;        /* Custom for pitch deck */

/* Body & Supporting (Scandia Regular) */
--type-body-large: 32px / 40px;  /* Custom for key stats */
--type-body: 24px / 32px;
--type-caption: 18px / 24px;

/* CTAs & Labels (Geist Mono Regular) */
--type-cta: 20px / 24px;
--type-label: 16px / 20px;
```

### Letter Spacing
```css
--tracking-tight: -0.01em;     /* Headlines only */
--tracking-normal: 0em;        /* Body text, CTAs */
```

### Font Weights
```css
--weight-medium: 500;          /* Scandia Medium - headlines only */
--weight-regular: 400;         /* Scandia Regular - body, Geist Mono */
```

### Typography Rules
1. **Scandia Medium** = Headlines only (H1-H4)
2. **Scandia Regular** = All body text, paragraphs, captions
3. **Geist Mono lowercase** = CTAs, labels, technical terms
4. **Max 15 words per slide** for primary message
5. **Sentence case always** (never all caps except logo)

---

## 4. LAYOUT SYSTEM

### Slide Dimensions
```css
--slide-width: 1920px;
--slide-height: 1080px;
--slide-ratio: 16:9;
```

### Grid System (12-column)
```css
--grid-columns: 12;
--grid-gap: 32px;
--grid-margin: 80px;         /* Left/right margins */
--grid-padding-top: 120px;   /* Top safe area */
--grid-padding-bottom: 80px; /* Bottom safe area */
```

### Content Area
```css
--content-width: 1760px;     /* 1920 - (80px × 2) */
--content-height: 880px;     /* 1080 - 120px - 80px */
--content-max-width: 1200px; /* For centered text-heavy slides */
```

### Spacing Scale
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 32px;
--space-lg: 64px;
--space-xl: 96px;
--space-2xl: 128px;
```

### Layout Templates

#### Template A: Title Slide
```
┌─────────────────────────────┐
│                             │ 120px top padding
│        [LOGO]               │
│                             │
│     [HEADLINE]              │ H1, centered
│     [TAGLINE]               │ Body, centered
│     [SUBLINE]               │ Caption, centered
│                             │
│                             │
└─────────────────────────────┘
```

#### Template B: Content + Visual (70/30 split)
```
┌─────────────────────────────┐
│                             │
│  [HEADLINE]        [VISUAL] │ H2 left, visual right
│                    ┌──────┐ │
│  [BODY TEXT]       │      │ │
│  • Bullet 1        │ IMG/ │ │
│  • Bullet 2        │ CHAR │ │
│  • Bullet 3        └──────┘ │
│                             │
└─────────────────────────────┘
```

#### Template C: Centered Message
```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│      [BIG HEADLINE]         │ Display/H1, centered
│                             │
│      [Supporting text]      │ Body, centered
│                             │
│                             │
└─────────────────────────────┘
```

#### Template D: Data Visualization
```
┌─────────────────────────────┐
│                             │
│  [HEADLINE]                 │ H2, left aligned
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   [CHART/TABLE]       │  │ Clean, minimal
│  │                       │  │
│  └───────────────────────┘  │
│  [Caption/Source]           │
└─────────────────────────────┘
```

---

## 5. COMPONENT LIBRARY

### Bullets
```css
/* Style 1: Em dash (—) */
.bullet-dash {
  list-style: none;
  padding-left: 0;
}
.bullet-dash li::before {
  content: "— ";
  color: var(--yellow); /* or blue/purple based on slide theme */
}

/* Style 2: Simple dot (•) */
.bullet-dot {
  list-style-type: disc;
  color: var(--black);
}
```

### Data Tables
```css
.data-table {
  border-collapse: collapse;
  width: 100%;
  font-family: var(--font-primary);
  font-size: var(--type-body);
}

.data-table th {
  font-weight: var(--weight-medium);
  text-align: left;
  border-bottom: 3px solid var(--black);
  padding: 16px 24px;
}

.data-table td {
  padding: 16px 24px;
  border-bottom: 1px solid var(--light-gray);
}

/* Remove gridlines except header separator */
.data-table th,
.data-table td {
  border-left: none;
  border-right: none;
}
```

### Stat Callouts (Big Numbers)
```css
.stat-callout {
  font-family: var(--font-primary);
  font-weight: var(--weight-medium);
  font-size: 80px;
  line-height: 76px;
  letter-spacing: -0.01em;
  color: var(--yellow); /* or blue based on theme */
}

.stat-label {
  font-family: var(--font-primary);
  font-weight: var(--weight-regular);
  font-size: 20px;
  line-height: 28px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### CTAs / Buttons
```css
.cta-button {
  font-family: var(--font-mono);
  font-size: var(--type-cta);
  font-weight: var(--weight-regular);
  text-transform: lowercase;
  padding: 16px 32px;
  background: var(--red-orange);
  color: var(--white);
  border: none;
  border-radius: 0; /* Sharp corners for minimalism */
}
```

### Dividers
```css
.divider-horizontal {
  width: 80px;
  height: 3px;
  background: var(--yellow); /* or blue/purple */
  margin: 32px 0;
}
```

### Egg Characters (Visual Elements)
```css
.egg-character {
  width: 120px;
  height: auto;
  position: absolute;
  /* Position based on slide needs */
}

/* Use sparingly - max 1-2 per slide */
/* Colors match slide theme: yellow, blue, purple, orange */
```

---

## 6. DATA VISUALIZATION RULES

### Chart Principles
1. **Remove all gridlines** except primary axis
2. **Single accent color** for data (yellow, blue, or purple)
3. **White or black background** only (never gray)
4. **One metric focus** - highlight key data point
5. **Clean axes** - minimal labels, no decimals unless necessary

### Chart Color Palette
```css
--chart-primary: var(--yellow);   /* Main data series */
--chart-secondary: var(--blue);   /* Comparison data */
--chart-accent: var(--purple);    /* Highlights */
--chart-negative: var(--red-orange); /* Alerts, declines */
--chart-neutral: var(--light-gray);  /* Background bars */
```

### Chart Typography
```css
--chart-title: var(--type-h4);        /* 48px */
--chart-label: var(--type-caption);   /* 18px */
--chart-value: var(--type-body-large); /* 32px for key numbers */
```

---

## 7. ANIMATION PRINCIPLES

### Transitions (When presenting)
```css
/* Slide transitions */
.slide-enter {
  animation: fadeIn 0.4s ease-in;
}

/* Element reveals */
.reveal-element {
  animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Animation Rules
1. **Simple, easy movements** only
2. **Max 0.6s duration** for any animation
3. **Egg characters can animate** - but keep it subtle
4. **Text reveals in sequence** - headline → body → visual
5. **No complex animations** - this is not After Effects

---

## 8. ACCESSIBILITY GUIDELINES

### Contrast Ratios (WCAG AA)
- **Headline text (>24px)**: 3:1 minimum
- **Body text (<24px)**: 4.5:1 minimum
- **White on Black**: ✅ 21:1 (perfect)
- **Black on White**: ✅ 21:1 (perfect)
- **Black on Yellow**: ✅ 14:1 (excellent)
- **White on Blue**: ⚠️ 3.2:1 (use for headlines only, 48px+)

### Readable Text Sizes
- **Minimum body text**: 24px (already in system)
- **Minimum caption**: 18px (already in system)
- **Line length**: Max 75 characters per line
- **Line height**: 1.4-1.6 for body text (already optimized)

---

## 9. SLIDE QUANTITY RULES

### Slide Count Philosophy
- **Max 15 slides** for 15-minute pitch
- **1 slide = 1 minute** average speaking time
- **No backup slides in main deck** - create separate appendix if needed

### Slide Editing Checklist
For each slide, ask:
1. Can this be one slide instead of two? (Combine)
2. Can this be removed entirely? (Cut)
3. Does this have exactly one key message? (Simplify)
4. Is 60%+ of the slide empty space? (Add space)
5. Would someone remember this 5 minutes later? (Make memorable)

---

## 10. BRAND CHARACTER INTEGRATION

### When to Use Egg Characters
✅ **Use egg characters when:**
- Representing brand values (Claridad, Ingenio, Curiosidad, etc.)
- Adding visual interest to text-heavy slides
- Creating visual metaphors (e.g., "archeology" = excavation pose)
- Closing vision slide (network of eggs = connected enterprises)

❌ **Don't use egg characters when:**
- Data visualization is primary focus (charts trump characters)
- Slide already has photography or illustrations
- Space is needed for dense information
- It would feel forced or decorative

### Character Placement Rules
```css
.egg-character-accent {
  width: 80-120px;
  position: absolute;
  /* Common positions: */
  /* Top right corner */
  /* Bottom left corner */
  /* Next to headline (inline) */
}
```

### Character Colors by Slide Theme
- **Problem/Pain slides** → Blue (Curiosidad) or Purple (Ingenio)
- **Solution/Product slides** → Yellow (Claridad, Creatividad)
- **Vision/Closing slides** → Orange (Optimismo)
- **Traction/Team slides** → Mix of Yellow + Blue

---

## 11. EXPORT & DELIVERY FORMATS

### Primary Format: HTML/CSS
```
pitch-deck/
├── index.html              (Master file with all slides)
├── css/
│   ├── reset.css          (Browser normalization)
│   ├── design-system.css  (This document as CSS)
│   └── slides.css         (Individual slide styles)
├── fonts/
│   ├── Scandia/
│   └── Geist_Mono/
├── images/
│   ├── logo.svg
│   ├── characters/        (Egg character SVGs)
│   └── charts/            (Chart images/SVGs)
└── js/
    └── slide-controller.js (Keyboard navigation)
```

### Slide Navigation
- **Arrow keys** → Next/previous slide
- **Number keys** → Jump to slide
- **Spacebar** → Next slide
- **ESC** → Overview mode

### Browser Compatibility
- Chrome/Edge (primary)
- Safari (test on Mac)
- Firefox (fallback)

---

## 12. QUALITY CHECKLIST

Before finalizing any slide, verify:

**Visual Hierarchy**
- [ ] Headline is the first thing you see
- [ ] Clear reading order (top to bottom, left to right)
- [ ] No competing visual elements

**Typography**
- [ ] Scandia Medium for headlines only
- [ ] Scandia Regular for body text
- [ ] Geist Mono lowercase for CTAs
- [ ] Max 15 words for primary message
- [ ] Sentence case (not title case or all caps)

**Color**
- [ ] 80% white background, 15% black, 5% colored
- [ ] Color used for accents only (<10% per slide)
- [ ] High contrast text (black on white or white on black)
- [ ] Egg character colors match slide theme

**Layout**
- [ ] 60%+ white space
- [ ] Content respects margins (80px left/right, 120px top, 80px bottom)
- [ ] One concept per slide
- [ ] No decorative elements

**Brand Compliance**
- [ ] Spanish-first (unless technical term)
- [ ] Tone is clear, simple, direct, human
- [ ] Egg characters used functionally (if present)
- [ ] Logo has proper clear space

**Data Visualization** (if applicable)
- [ ] Gridlines removed (except primary axis)
- [ ] Single accent color
- [ ] One metric focus
- [ ] Clean axes with minimal labels

---

## 13. COMMON MISTAKES TO AVOID

❌ **Typography Mistakes**
- Using Title Case Instead Of Sentence case
- Mixing too many font sizes (stick to the scale)
- Body text smaller than 24px
- All caps for body text (logo exception only)

❌ **Color Mistakes**
- Colored backgrounds on >20% of slides
- Low contrast text (e.g., light gray on white)
- Using colors not in the palette
- Color for decoration instead of function

❌ **Layout Mistakes**
- Less than 50% white space
- Multiple concepts per slide
- Ignoring the grid margins
- Centering everything (use left-aligned when appropriate)

❌ **Content Mistakes**
- More than 15 words for primary message
- Walls of text (use bullets or split into slides)
- Multiple data points competing for attention
- Backup slides in the main deck

❌ **Brand Mistakes**
- English-first content (should be Spanish)
- Egg characters as pure decoration
- Corporate, stiff tone
- Logo smaller than 170px or without clear space

---

## DESIGN SYSTEM VERSION
**Version:** 1.0
**Date:** January 15, 2026
**Author:** AI Huevos Design Team
**Status:** Ready for Slide Implementation

**Next Steps:**
1. Review this design system
2. Create slide-by-slide specifications
3. Build HTML/CSS code for all 14 slides

---

**🤖 Optimizado para Claude Code + Brand Guidelines**
