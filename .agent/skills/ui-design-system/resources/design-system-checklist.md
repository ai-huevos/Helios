# Design System Quality Checklist

> **Purpose:** Ensure every UI meets AI Huevos quality standards before shipping.

---

## Design System Compliance

### Colors
- [ ] All colors use CSS variables from `design-system.css`
- [ ] No hardcoded hex values in components
- [ ] Surface hierarchy used correctly (surface-0 → surface-3)
- [ ] Semantic tokens used (--text-primary, --bg-secondary, etc.)
- [ ] Brand colors used appropriately (--yellow for CTAs, --blue for data)

### Typography
- [ ] All font sizes use defined scale (--text-xs → --text-5xl)
- [ ] Font weights use semantic tokens (--weight-light → --weight-bold)
- [ ] Headlines use Scandia
- [ ] Data/UI elements use Geist Mono
- [ ] Line heights appropriate for readability (1.5-1.6 for body)
- [ ] Letter spacing used for headlines (-0.02em) and mono text (0.1em)

### Spacing
- [ ] All spacing uses token system (--space-xs → --space-5xl)
- [ ] Consistent padding/margin throughout
- [ ] No arbitrary values (e.g., `padding: 17px`)
- [ ] Grid gaps use --grid-gap for "Operator" style borders

### Components
- [ ] Follow naming conventions (.btn-primary, .card-operator, etc.)
- [ ] Reusable patterns documented
- [ ] No duplicate code (DRY principle)

---

## Interaction & Animation

### Hover States
- [ ] All interactive elements have hover states
- [ ] Hover includes visual feedback (color change, transform, shadow)
- [ ] Transition duration appropriate (0.15s - 0.5s)
- [ ] Cursor changes to pointer on interactive elements

### Active States
- [ ] Buttons have active state (e.g., `transform: translateY(0)`)
- [ ] Cards have active state if clickable
- [ ] Links have active state

### Focus States
- [ ] All interactive elements have focus-visible styles
- [ ] Focus outline uses --border-focus (yellow)
- [ ] Outline offset is 4px
- [ ] Focus styles visible for keyboard navigation

### Disabled States
- [ ] Disabled elements have opacity: 0.4
- [ ] Cursor changes to not-allowed
- [ ] Disabled elements don't respond to hover/active

### Animations
- [ ] `framer-motion` used for page transitions
- [ ] Animations have purpose (not decorative only)
- [ ] Animation duration < 0.5s (no long animations)
- [ ] Respects `prefers-reduced-motion`

---

## Accessibility

### Contrast
- [ ] WCAG AAA contrast ratios (21:1 for body text, 7:1 for large text)
- [ ] Text readable on all backgrounds
- [ ] Tested with contrast checker tool

### Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Tab order logical
- [ ] Focus visible at all times
- [ ] Skip links present for long pages

### Screen Readers
- [ ] Semantic HTML used (header, nav, main, footer, article, section)
- [ ] Images have alt text
- [ ] Buttons have descriptive labels
- [ ] ARIA labels used where needed
- [ ] No empty links or buttons

### Motion
- [ ] `prefers-reduced-motion` media query implemented
- [ ] Animations disabled when user prefers reduced motion
- [ ] Page still functional without animations

---

## Responsiveness

### Mobile (375px)
- [ ] Layout doesn't break
- [ ] Text readable (min 16px for body)
- [ ] Touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Images scale appropriately

### Tablet (768px)
- [ ] Grid layouts adjust (e.g., 2 columns instead of 3)
- [ ] Navigation appropriate for tablet
- [ ] Images scale appropriately

### Desktop (1440px+)
- [ ] Max-width container prevents line length issues
- [ ] Grid layouts use available space
- [ ] Images don't pixelate

### General
- [ ] Mobile-first approach used
- [ ] Breakpoints use min-width media queries
- [ ] Tested at 375px, 768px, 1024px, 1440px
- [ ] Responsive typography with clamp() where appropriate

---

## Performance

### Core Web Vitals
- [ ] No layout shift (CLS < 0.1)
- [ ] Fast interaction (FID < 100ms)
- [ ] Fast load (LCP < 2.5s)

### Assets
- [ ] Images optimized (WebP format preferred)
- [ ] Fonts subset if possible
- [ ] CSS minified for production
- [ ] No unused CSS

### Code Quality
- [ ] No console errors
- [ ] No console warnings
- [ ] Components properly memoized if needed
- [ ] No unnecessary re-renders

---

## Brand Consistency

### Visual Identity
- [ ] Logo used correctly (yellow on black for dark mode)
- [ ] Egg icon used where appropriate
- [ ] Brand colors used consistently
- [ ] Typography matches brand guidelines

### Voice & Tone
- [ ] Copy matches brand voice ("Pa' emprender se necesitan huevos")
- [ ] Emoji usage appropriate (🥚 for brand moments)
- [ ] Tone is bold, direct, confident

---

## Documentation

### Code Comments
- [ ] Complex logic explained
- [ ] Component props documented
- [ ] Magic numbers explained

### Design System
- [ ] New patterns added to DESIGN_SYSTEM.md
- [ ] New tokens added to design-system.css
- [ ] Examples provided for reusable components

### Changelog
- [ ] Changes documented in feedback-log.md
- [ ] Learnings captured
- [ ] Reusable patterns identified

---

## Final Checks

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### User Testing
- [ ] Meets success criteria from Vision Brief
- [ ] User can complete primary action
- [ ] User understands value proposition

### Handoff
- [ ] Code reviewed
- [ ] Design system updated
- [ ] Documentation complete
- [ ] Deployed to staging

---

**Checklist Version:** 1.0  
**Last Updated:** 2026-01-16
