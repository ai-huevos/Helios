# AI Huevos Brand Stability Checklist
**Quick reference for maintaining brand consistency across projects**

---

## 🎨 Color System (Copy-Paste Ready)

### Brand Colors
```css
/* Primary (use equally) */
--white: #FFFFFF;
--black: #030102;
--yellow: #FFD826;
--blue: #3988FF;

/* Secondary (use sparingly) */
--violet: #B4A7FA;
--orange: #FF6B35;  /* CTAs ONLY */

/* Extended Grays */
--gray-light: #E8E8E8;
--gray-dark: #8B8B8B;
```

### Semantic Colors (Status Indicators)
```css
/* Use these for status, actions, states */
--success: #10B981;  /* Green - active, approval, positive */
--error: #EF4444;    /* Red - reject, delete, negative */
--warning: #F59E0B;  /* Amber - caution, pending */
--info: #3B82F6;     /* Blue - information, neutral */
```

### ❌ NEVER
- Yellow text on white background (fails WCAG)
- Orange as background (CTAs only)
- More than 3 brand colors per composition
- Violet as dominant color

---

## 📐 Typography

```css
/* Fonts */
font-family: 'Scandia', 'Inter', system-ui, sans-serif;  /* All text */
font-family: 'Geist Mono', 'Monaco', monospace;          /* Data/metrics only */

/* Scale */
h1: 32px / 700 (Bold)
h2: 28px / 700 (Bold)
h3: 24px / 600 (Semibold)
h4: 20px / 600 (Semibold)
body: 14px / 400 (Regular)
small: 12px / 400 (Regular)
metric: 48px / 700 (Bold, Mono)  /* Big numbers/KPIs */
```

### Rules
- ✅ Always sentence case
- ❌ Never ALL CAPS (except acronyms)
- ❌ Never Title Case

---

## 🌓 Theme Modes

### Light Mode
```css
background: #FFFFFF;
text: #030102;          /* Black only */
headlines: #030102;     /* Black only */
accents: Yellow/Blue    /* Icons, borders, decoration */
CTA: Yellow bg + Black text
```
**Rule:** All text = black. Colors for decoration only.

### Dark Mode
```css
background: #030102;
text: #FFFFFF;          /* White */
headlines: #FFFFFF or #FFD826 (Yellow)
links: #3988FF (Blue) or #B4A7FA (Violet)
CTA: Yellow bg + Black text
```
**Rule:** All accent colors work for text on dark.

---

## 🔘 Button Patterns

```css
/* Primary CTA (Orange - limited use) */
background: #FF6B35;
color: #030102;

/* Secondary CTA (Yellow) */
background: #FFD826;
color: #030102;

/* Text-Only Actions (what I see in your dashboards) */
.approve { color: #10B981; }  /* Green text, no background */
.reject { color: #EF4444; }   /* Red text, no background */

/* Outline */
border: 2px solid #030102;
color: #030102;
background: transparent;
```

---

## 📦 Component Patterns (From Your Dashboards)

### Status Tags
```css
/* Active/Status indicators */
.status-active {
  color: #10B981;      /* Green */
  font-size: 12px;
  text-transform: lowercase;
}

.status-draft {
  color: #8B8B8B;      /* Gray dark */
  font-size: 12px;
}
```

### Cards
```css
/* Card containers */
.card {
  background: var(--bg-card);  /* White (light) or dark gray (dark) */
  border-radius: 8px;
  padding: 16px;
  /* Subtle shadow or spacing-based separation */
}
```

### Metrics/KPIs
```css
.metric-value {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Geist Mono', monospace;
  color: var(--text-primary);
}

.metric-label {
  font-size: 12px;
  color: var(--gray-dark);
  text-transform: uppercase;
}
```

### Workflow Steps
```css
/* Linear workflow visualization */
.workflow-step {
  display: flex;
  align-items: center;
  gap: 12px;
}

.workflow-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--gray-light);
  /* Icon inside */
}

.workflow-step.complete .workflow-icon {
  border-color: #10B981;  /* Green */
  background: #10B981;
}
```

### Lists with Actions
```css
/* List items with action buttons (like your pending approvals) */
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.list-actions {
  display: flex;
  gap: 16px;
}

.list-actions .approve {
  color: #10B981;  /* Green text */
  cursor: pointer;
}

.list-actions .reject {
  color: #EF4444;  /* Red text */
  cursor: pointer;
}
```

---

## ✅ Brand Stability Checklist

Before shipping any UI, verify:

### Colors
- [ ] Max 3 brand colors per screen/composition?
- [ ] Orange only used for CTAs (if at all)?
- [ ] No yellow text on white backgrounds?
- [ ] Semantic colors (green/red) used consistently for status?
- [ ] Gray scale used for secondary text/borders?

### Typography
- [ ] Scandia font family applied?
- [ ] Geist Mono only for data/metrics/code?
- [ ] Sentence case (not ALL CAPS)?
- [ ] Proper size/weight hierarchy?

### Components
- [ ] Status indicators use semantic colors (green=active, gray=draft)?
- [ ] Buttons follow color rules (orange=yellow for CTAs)?
- [ ] Cards have consistent spacing/border radius (8px)?
- [ ] Metrics use mono font and are prominent (48px)?

### Theme
- [ ] Light mode: All text black, colors for decoration?
- [ ] Dark mode: Text white/yellow, accents work for text?
- [ ] Consistent background colors (white or #030102)?

---

## 🚀 Quick Setup for New Project

### 1. Copy these CSS variables:
```css
:root {
  /* Brand Colors */
  --white: #FFFFFF;
  --black: #030102;
  --yellow: #FFD826;
  --blue: #3988FF;
  --violet: #B4A7FA;
  --orange: #FF6B35;
  
  /* Grays */
  --gray-light: #E8E8E8;
  --gray-dark: #8B8B8B;
  
  /* Semantic */
  --success: #10B981;
  --error: #EF4444;
  --warning: #F59E0B;
  --info: #3B82F6;
  
  /* Typography */
  --font-primary: 'Scandia', 'Inter', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Monaco', monospace;
}
```

### 2. Reference file:
Keep this checklist open while designing → `Brand/BRAND_STABILITY_CHECKLIST.md`

### 3. When in doubt:
- Check `Brand/ai-huevos-brand/CHEATSHEET.md` for full reference
- Check `Brand/ai-huevos-brand/references/design-tokens.json` for exact values

---

**Version:** 2.1.0  
**Last Updated:** 2025-01-16  
**Source:** `Brand/ai-huevos-brand/references/design-tokens.json`
