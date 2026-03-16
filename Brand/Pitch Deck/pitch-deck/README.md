# AI Huevos Pitch Deck

Brand-compliant pitch deck combining SF minimalist aesthetic with AI Huevos brand guidelines.

## 🎯 Current Status

**✅ Infrastructure Complete (Phase 1)**
- Base HTML structure with 5 sample slides
- Complete CSS design system
- Keyboard navigation controller
- Responsive layout system

**📋 Implemented Slides (5/14)**
1. ✅ Title Slide
2. ✅ The Problem
3. ✅ The Insight
4. ✅ The Wedge
5. ✅ The Product (Holy Shit Moment)

**⏳ Pending Slides (9/14)**
6. Director AI
7. The Vision
8. Business Model
9. Why Now
10. Traction
11. Shipping Velocity
12. Team
13. The Ask
14. Closing Vision

---

## 🚀 Quick Start

### View the Deck

1. **Open in browser:**
   ```bash
   open index.html
   ```
   Or double-click `index.html`

2. **Start presenting:**
   - Press `F` for fullscreen
   - Use arrow keys or spacebar to navigate
   - Press `ESC` to exit fullscreen

### Navigation Controls

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `1-9` | Jump to slide number |
| `F` | Toggle fullscreen |
| `ESC` | Exit fullscreen |

**Touch/Swipe:** Swipe left for next, right for previous

---

## 📁 Project Structure

```
pitch-deck/
├── index.html              # Main HTML with slide structure
├── css/
│   ├── reset.css          # CSS reset for consistency
│   ├── design-system.css  # Design tokens & components
│   └── slides.css         # Slide-specific layouts
├── js/
│   └── slide-controller.js # Navigation & keyboard controls
├── images/
│   └── logo-primary.svg   # AI Huevos logo (placeholder)
├── fonts/                 # (TO ADD: Scandia, Geist Mono)
└── README.md              # This file
```

---

## 🎨 Design System

### Brand Colors
- **Primary:** Yellow (#FFE03D), Blue (#4D9FFF)
- **Base:** Black (#000000), White (#FFFFFF)
- **Accents:** Purple (#B8A0FF), Red/Orange (#FF5C3D)

### Typography
- **Primary:** Scandia (Medium for headlines, Regular for body)
- **Mono:** Geist Mono (lowercase for CTAs)

### Type Scale
- Display: 130px
- H1: 100px
- H2: 75px
- H3: 60px
- H4: 48px
- Body: 24px
- Caption: 18px

### Layout Principles
- 60%+ white space per slide
- One concept per slide
- 1920×1080px (16:9 ratio)
- 80px side margins, 120px top, 80px bottom

---

## 🔧 Next Steps (To Complete Deck)

### Phase 2: Build Remaining Slides (9 slides)

**Required Actions:**
1. Add HTML structure for slides 6-14
2. Add CSS for each slide's unique layout
3. Source or create egg character illustrations
4. Create data visualizations (charts, diagrams)
5. Add Scandia & Geist Mono font files

### Font Installation

**Required fonts:**
- Scandia Medium & Regular
- Geist Mono Regular

**Installation:**
1. Copy font files to `fonts/Scandia/` and `fonts/Geist_Mono/`
2. Ensure .woff2 format (or .woff fallback)
3. Fonts will load automatically via design-system.css

---

## 📊 Slide-by-Slide Status

| # | Slide | Status | Notes |
|---|-------|--------|-------|
| 1 | Title | ✅ Complete | Logo needs final version |
| 2 | Problem | ✅ Complete | Egg character placeholder |
| 3 | Insight | ✅ Complete | Table working |
| 4 | Wedge | ✅ Complete | Flow icons need improvement |
| 5 | Product | ✅ Complete | Loop diagram working |
| 6 | Director AI | ⏳ Pending | Hub diagram needed |
| 7 | Vision | ⏳ Pending | 3-step visual needed |
| 8 | Business Model | ⏳ Pending | Table layout |
| 9 | Why Now | ⏳ Pending | 3 forces layout |
| 10 | Traction | ⏳ Pending | Big numbers layout |
| 11 | Shipping | ⏳ Pending | Timeline diagram |
| 12 | Team | ⏳ Pending | 2-column grid |
| 13 | The Ask | ⏳ Pending | Centered list |
| 14 | Vision | ⏳ Pending | Full-bleed visual |

---

## 🎯 Design Quality Checklist

Each slide should meet:
- [ ] 60%+ white space
- [ ] One concept only
- [ ] Typography follows scale
- [ ] Colors from brand palette
- [ ] Spanish-first content
- [ ] WCAG AA contrast ratios
- [ ] Egg characters (when appropriate)

---

## 📤 Export Options

### PDF Export
1. Open in Chrome/Edge
2. Print (Cmd/Ctrl + P)
3. Save as PDF
4. Slides will auto-paginate

### PNG Export
Use browser screenshot tools:
- Chrome DevTools
- Firefox Screenshot
- Third-party extensions

---

## 🐛 Known Issues

1. **Fonts not loading:** Need to add actual Scandia & Geist Mono font files
2. **Logo is placeholder:** Replace with final AI Huevos logo from Brand/
3. **Egg characters are CSS shapes:** Should be replaced with actual character illustrations
4. **No transitions between elements:** Can add if desired for live presentation

---

## 🛠️ Technical Details

### Browser Support
- ✅ Chrome/Edge (primary)
- ✅ Safari (Mac)
- ✅ Firefox
- ⚠️ Mobile (limited, not recommended for presentation)

### Performance
- Minimal JavaScript (vanilla, no frameworks)
- CSS Grid & Flexbox for layouts
- Web fonts with swap for fast loading
- No external dependencies

### Accessibility
- Semantic HTML5
- ARIA labels for navigation
- Keyboard navigation
- Screen reader announcements
- Focus indicators (yellow outline)
- High contrast text

---

## 📖 Reference Documents

- `DESIGN_SYSTEM.md` - Complete design system specs
- `SLIDE_SPECIFICATIONS.md` - Detailed slide-by-slide blueprints
- `Narrative_deck.md` - Content and storytelling structure
- `../brand_guidelines.md` - AI Huevos brand guidelines
- `../../Basics/2026/financial-model-analysis.md` - Financial data

---

## 🤝 Contributing

To complete the remaining slides:

1. Follow `SLIDE_SPECIFICATIONS.md` exactly
2. Use components from `design-system.css`
3. Test in browser after each slide
4. Maintain 60% white space minimum
5. Verify Spanish content accuracy
6. Check accessibility (keyboard nav, contrast)

---

## 📝 Version History

- **v0.1** (2026-01-15) - Initial infrastructure + 5 sample slides
- **v1.0** (Pending) - All 14 slides complete
- **v1.1** (Pending) - Final assets (fonts, characters, logo)

---

## 📞 Contact

For questions about brand compliance or design system:
- Review `Brand/brand_guidelines.md`
- Check `DESIGN_SYSTEM.md` for specs
- Reference `SLIDE_SPECIFICATIONS.md` for layouts

---

**🤖 Built with Claude Code + AI Huevos Brand Guidelines**

Status: Infrastructure Complete | Ready for Phase 2 (Remaining 9 Slides)
