---
description: AI Huevos UI Design System - Iterative design workflow for premium interfaces
---

# AI Huevos UI Design System Skill

## Purpose
Execute high-quality UI design iterations using the **"Vision Brief → Critique → Variants → Synthesis → Learning"** loop. This skill ensures consistent, premium design execution aligned with the AI Huevos brand aesthetic.

## When to Use
- Building new landing pages or marketing sites
- Redesigning existing UIs
- Creating design system components
- Iterating on user-facing interfaces

## Core Philosophy
**"Visionary Aesthetics, Operator Functionality"**
- Dark Mode default with high contrast
- Data density with radical whitespace
- Micro-interactions are mandatory
- WCAG AAA accessibility compliance

---

## Workflow

### Phase 1: Vision Capture
**Goal:** Understand what the user wants before writing code.

1. **User fills `templates/vision-brief.md`**
   - Emotional goal (the "vibe")
   - Reference URLs (inspiration)
   - Content hierarchy
   - Must-have interactions
   - Success criteria

2. **Agent analyzes references**
   - Extract color palettes
   - Identify interaction patterns
   - Note typography choices
   - Document layout structures

3. **Create `implementation_plan.md`**
   - Propose technical approach
   - List files to create/modify
   - Define verification steps
   - Request user approval

**Output:** Approved implementation plan

---

### Phase 2: Critique (Optional)
**Goal:** Identify gaps between current state and vision.

**When to use:** If redesigning an existing UI.

1. **Analyze current implementation**
   - Visual weaknesses (spacing, typography, colors)
   - UX gaps (missing interactions, unclear hierarchy)
   - "Premium" misses (generic patterns, lack of polish)

2. **Document in structured format**
   - Use bullet points and screenshots
   - Be specific about what's wrong and why
   - Reference design system violations

3. **Get user approval on critique**

**Output:** "The Ugly Truth" document (approved)

---

### Phase 3: Variants
**Goal:** Explore design directions before committing.

1. **Generate 3 distinct concepts:**
   - **Option A: The Polish** - Refine existing, safe execution
   - **Option B: The "Operator"** - Dense, grid-based, utility-focused
   - **Option C: The "Visionary"** - Bold, minimal, emotional

2. **Code at least 1 variant fully**
   - Implement with real components
   - Use design system tokens
   - Include basic interactions

3. **Present with visual comparisons**
   - Browser screenshots or recordings
   - Side-by-side if possible
   - Highlight key differences

**Output:** 3 concepts presented, 1+ fully coded

---

### Phase 4: Synthesis
**Goal:** Implement the chosen direction with production quality.

1. **Implement chosen variant**
   - Build all components
   - Apply design system
   - Add `framer-motion` animations

2. **Iterate 2x on refinements:**
   - **Iteration 1:** Structure & Hierarchy (colors, typography weights)
   - **Iteration 2:** Polish & Interaction (states, accessibility)

3. **Update Design System**
   - Document new patterns in `DESIGN_SYSTEM.md`
   - Add tokens to `design-system.css`
   - Create reusable components

**Output:** Production-ready implementation + updated design system

---

### Phase 5: Learning
**Goal:** Capture what worked and what didn't for future iterations.

1. **Update `feedback-log.md`**
   - ✅ What worked (design decisions user loved)
   - ❌ What didn't (misses, wrong assumptions)
   - 🔄 Iterations (how we refined)

2. **Capture reusable patterns**
   - Add to `resources/design-system-checklist.md`
   - Document in `examples/` if significant

**Output:** Updated feedback log and knowledge base

---

## Templates

### For Users to Fill
- **`templates/vision-brief.md`** - Start here for every new project

### For Agent to Maintain
- **`templates/feedback-log.md`** - Learning tracker
- **`templates/implementation-plan.md`** - Standard plan format

---

## Quality Gates

Every UI must pass these checks before completion:

### Design System Compliance
- [ ] All colors use CSS variables (no hardcoded hex)
- [ ] Typography uses defined scale (no arbitrary sizes)
- [ ] Spacing uses token system (--space-*)
- [ ] Components follow naming conventions

### Interaction & Animation
- [ ] Hover states on all interactive elements
- [ ] Focus states for keyboard navigation
- [ ] `framer-motion` used for page transitions
- [ ] Respects `prefers-reduced-motion`

### Accessibility
- [ ] WCAG AAA contrast ratios (21:1 for body text)
- [ ] Keyboard navigable
- [ ] Screen reader friendly (semantic HTML)
- [ ] Skip links present

### Responsiveness
- [ ] Mobile-first approach
- [ ] Tested at 375px, 768px, 1440px
- [ ] No horizontal scroll
- [ ] Touch targets ≥44px

### Performance
- [ ] No layout shift (CLS < 0.1)
- [ ] Fast interaction (FID < 100ms)
- [ ] Optimized assets (images, fonts)

---

## Brand Assets Reference

### Logos
- Yellow on Black: `/Brand/ai-huevos-brand/assets/logos/logo-yellow-black.svg`
- Blue on White: `/Brand/ai-huevos-brand/assets/logos/logo-blue-white.svg`

### Color Palette
```css
--yellow: #FFD826;  /* Brand Signal */
--blue: #3988FF;    /* Data/Trust */
--violet: #B4A7FA;  /* Accent */
--orange: #FF6B35;  /* Action */
--black: #030102;   /* Deep Black */
```

### Typography
- **Headlines:** Scandia (weights: 300-700)
- **Data/UI:** Geist Mono (weights: 500-700)

---

## Examples

See `examples/` for case studies:
- **`investor-room-case-study.md`** - Complete UI optimization loop

---

## Tips for Success

1. **Start with the Vision Brief** - Don't skip this step
2. **Show, don't tell** - Use browser recordings to demonstrate
3. **Iterate in public** - Share work-in-progress for faster feedback
4. **Document learnings** - Update feedback log after every project
5. **Reuse patterns** - Check examples before reinventing

---

**Version:** 1.0  
**Last Updated:** 2026-01-16  
**Maintained by:** AI Huevos Design Team
