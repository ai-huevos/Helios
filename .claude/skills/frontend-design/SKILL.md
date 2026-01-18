---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

# AI Huevos Frontend Design Skill

> "Pa' emprender se necesitan huevos"

Transform frontends from generic to distinctive using AI Huevos brand tokens, intelligent UI generation, and design excellence.

## Quick Start for Co-Developers

**Your brand tokens are ready at:** [references/brand-tokens.json](references/brand-tokens.json)

| Task | Action |
|------|--------|
| **Improve existing frontend** | Tell Claude: "Use frontend-design to improve my UI" |
| **Create new component** | Tell Claude: "Create a hero section with AI Huevos brand" |
| **Redesign component** | Tell Claude: "Redesign this component with brand colors" |

## When This Skill Activates

- "Improve the overall design"
- "Apply brand colors"
- "Make this more professional"
- "Create a landing page"
- "Redesign this component"
- "/frontend-design [request]"

---

## AI Huevos Brand at a Glance

### Colors
```
PRIMARY (use equally)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White   #FFFFFF   │   Black   #030102
Yellow  #FFD826   │   Blue    #3988FF

SECONDARY (use sparingly)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Violet  #B4A7FA   │   Orange  #FF6B35 (CTAs ONLY)
```

### Typography
```
Scandia      → All text (headlines, body, UI)
Geist Mono   → Data, metrics, code only
```

### Critical Rules
```
✅ Max 3 colors per composition
✅ Orange = CTA buttons ONLY
✅ Violet = accents ONLY
✅ Sentence case always

❌ NEVER yellow text on white (fails WCAG)
❌ NEVER orange as background
❌ NEVER ALL CAPS (except acronyms)
❌ NEVER use 🥚 emoji or CSS shapes as logo
```

---

## Workflow

### Phase 1: Read Brand Tokens

**ALWAYS start by reading:** `references/brand-tokens.json`

This file contains:
- All brand colors with usage rules
- Typography scale and fonts
- Spacing, shadows, border radius
- Button styles (primary, secondary, outline)
- Forbidden color combinations

### Phase 2: Audit or Create

**For existing frontends:**
1. Identify framework (React, Next.js, Vue, etc.)
2. Find component directory
3. Check current colors against brand tokens
4. List components to improve

**For new components:**
1. Determine component type (hero, card, form, etc.)
2. Plan color usage (max 3 per composition)
3. Decide typography hierarchy

### Phase 3: Generate or Refine

**Use Magic MCP (21st.dev) if available:**

| Tool | When |
|------|------|
| `mcp__magic__21st_magic_component_builder` | Creating new components |
| `mcp__magic__21st_magic_component_inspiration` | Exploring design patterns |
| `mcp__magic__21st_magic_component_refiner` | Improving existing components |

**Component Builder:**
```javascript
mcp__magic__21st_magic_component_builder({
  message: "Full user request",
  searchQuery: "hero section",  // 2-4 words
  absolutePathToCurrentFile: "/path/to/component.jsx",
  absolutePathToProjectDirectory: "/path/to/project",
  standaloneRequestQuery: "Detailed requirements"
})
```

### Phase 4: Apply Brand

**After generating, ALWAYS verify:**

```
✅ Colors from brand-tokens.json
✅ Orange only on CTA buttons
✅ Black text on light backgrounds
✅ Typography uses Scandia/Inter
✅ Contrast passes WCAG AA
```

**Post-generation fix example:**
```jsx
// Generated (generic blue)
<button className="bg-blue-500 text-white">Sign up</button>

// Fixed (AI Huevos brand)
<button className="bg-[#FF6B35] text-[#030102] hover:bg-[#E55A2B]">
  Sign up
</button>
```

---

## Button Styles

```jsx
// Primary CTA (Orange)
<button className="bg-[#FF6B35] text-[#030102] hover:bg-[#E55A2B]">
  Call to action
</button>

// Secondary (Yellow)
<button className="bg-[#FFD826] text-[#030102] hover:bg-[#E5C222]">
  Secondary action
</button>

// Outline
<button className="border-2 border-[#030102] text-[#030102] hover:bg-[#F3F4F6]">
  Outline action
</button>
```

---

## Light Mode vs Dark Mode

### Light Mode (White background)
| Element | Color |
|---------|-------|
| Background | White `#FFFFFF` |
| Text | Black `#030102` |
| Headlines | Black only |
| Accents | Yellow/Blue (icons, borders) |
| CTA | Yellow bg + Black text |

### Dark Mode (Black background)
| Element | Color |
|---------|-------|
| Background | Black `#030102` |
| Text | White `#FFFFFF` |
| Headlines | White or Yellow |
| Links | Blue or Violet |
| CTA | Yellow bg + Black text |

---

## Examples

### Example 1: Improve Overall Design
**User:** "Improve the design of my React app with AI Huevos brand"

**Workflow:**
1. Read `references/brand-tokens.json`
2. Audit `src/components/` for color inconsistencies
3. List components to improve (Hero, Cards, Nav)
4. For each component:
   - Use `component_refiner` with brand context
   - Apply colors from tokens
   - Verify WCAG compliance
5. Test in browser

### Example 2: Create Hero Section
**User:** "Create a hero section for the landing page"

**Workflow:**
1. Read brand tokens
2. Generate with:
   ```
   searchQuery: "hero section"
   standaloneRequestQuery: "Modern hero with headline,
   subtext, and primary CTA using AI Huevos brand colors"
   ```
3. Apply brand colors:
   - Background: White `#FFFFFF`
   - Headline: Black `#030102`
   - CTA: Orange `#FF6B35` with black text
4. Save to `src/components/Hero.jsx`

### Example 3: Redesign Card Component
**User:** "Redesign the pricing cards to look more professional"

**Workflow:**
1. Read current component
2. Use `component_refiner` with context:
   "Redesign with AI Huevos brand: max 3 colors,
   orange CTA only, sentence case headings"
3. Apply brand tokens
4. Verify no yellow text on white

---

## Quality Checklist

### Brand Compliance
- [ ] All colors from brand-tokens.json
- [ ] Max 3 colors per composition
- [ ] Orange only on CTAs
- [ ] No yellow/violet text on white
- [ ] Sentence case for all headings
- [ ] No ALL CAPS (except acronyms)

### Design Quality
- [ ] Clear typography hierarchy
- [ ] Consistent spacing (use spacing tokens)
- [ ] Mobile responsive
- [ ] WCAG AA contrast (4.5:1 for text)
- [ ] No generic "AI look"

### Technical
- [ ] Valid JSX/TSX syntax
- [ ] Tailwind classes used
- [ ] Accessible (ARIA attributes)
- [ ] Props documented
- [ ] Tested in browser

---

## File Structure

```
frontend-design/
├── SKILL.md                    # This file
└── references/
    ├── brand-tokens.json       # Complete AI Huevos tokens
    ├── color-system.md         # Color usage guide
    └── typography.md           # Type scale guide
```

---

## CSS Quick Reference

```css
:root {
  --white: #FFFFFF;
  --black: #030102;
  --yellow: #FFD826;
  --blue: #3988FF;
  --violet: #B4A7FA;
  --orange: #FF6B35;

  --font-primary: 'Scandia', system-ui, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  --radius-egg: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

---

## Without Magic MCP

If Magic MCP is not available, this skill still works:
- Read brand tokens manually
- Write components following brand guidelines
- Use the color/typography references
- Apply quality checklist

Just skip the MCP tool calls and write code directly.
