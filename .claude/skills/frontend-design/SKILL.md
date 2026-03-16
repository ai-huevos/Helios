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

## Figma Brandbook Integration 🎨

**Official Figma Brandbook:** https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK

### When Figma MCP is Available

**ALWAYS prefer Figma MCP as the source of truth** for brand tokens:
- Extract design variables from Figma Brandbook
- Sync tokens from Figma Variables to code
- Validate designs match Figma specifications
- Generate components from Figma designs

**Figma MCP Workflow:**
1. Ask: "Extract design tokens from [Figma Brandbook URL]"
2. Compare extracted tokens with local `brand-tokens.json`
3. Update local tokens if Figma has newer values
4. Use Figma tokens for generation/validation

**Without Figma MCP:**
- Use `references/brand-tokens.json` as fallback
- Local tokens should match Figma Brandbook
- When in doubt, refer to Figma directly

---

## Workflow

### Phase 0: Sync with Figma (If MCP Available)

**If Figma MCP server is connected:**

1. **Extract latest tokens from Figma Brandbook:**
   ```
   "Extract all design tokens from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
   ```

2. **Compare with local tokens:**
   - Compare Figma Variables with `brand-tokens.json`
   - Update local file if Figma has newer/changed values
   - Document any discrepancies

3. **Validate brand compliance:**
   ```
   "Check if this design follows AI Huevos brand guidelines from Figma"
   ```

### Phase 1: Read Brand Tokens

**Primary source (if Figma MCP available):** Extract from Figma Brandbook
**Fallback source:** `references/brand-tokens.json`

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

**Use Figma MCP for Design Context (Recommended):**

If Figma MCP is available and designs exist in Figma:
1. **Extract component styles from Figma:**
   ```
   "Get component structure and styles from [Figma frame/component URL]"
   ```

2. **Generate code from Figma design:**
   ```
   "Convert this Figma component to React with shadcn/ui and AI Huevos brand colors"
   ```

3. **Validate against Figma Brandbook:**
   ```
   "Check if this component matches AI Huevos brand guidelines from Figma"
   ```

**Use Magic MCP (21st.dev) if available:**

| Tool | When |
|------|------|
| `mcp__magic__21st_magic_component_builder` | Creating new components without Figma designs |
| `mcp__magic__21st_magic_component_inspiration` | Exploring design patterns |
| `mcp__magic__21st_magic_component_refiner` | Improving existing components |

**Component Builder:**
```javascript
mcp__magic__21st_magic_component_builder({
  message: "Full user request",
  searchQuery: "hero section",  // 2-4 words
  absolutePathToCurrentFile: "/path/to/component.jsx",
  absolutePathToProjectDirectory: "/path/to/project",
  standaloneRequestQuery: "Detailed requirements with AI Huevos brand colors from Figma"
})
```

**Priority Order:**
1. **Figma MCP** (if designs exist) → Extract from Figma Brandbook
2. **Magic MCP** (for generation) → Use with Figma token context
3. **Manual coding** → Following brand-tokens.json

### Phase 4: Apply Brand

**After generating, ALWAYS verify:**

**Brand Compliance:**
```
✅ Colors from Figma Brandbook or brand-tokens.json
✅ Orange only on CTA buttons
✅ Black text on light backgrounds
✅ Typography uses Scandia/Inter
✅ Contrast passes WCAG AA
✅ Max 3 colors per composition
✅ Sentence case (no ALL CAPS)
```

**Figma Validation (if MCP available):**
```
"Validate this component matches AI Huevos brand guidelines from Figma Brandbook"
```

**Contrast Verification:**
- Black on White: 20.9:1 ✅ AAA
- White on Black: 20.9:1 ✅ AAA
- Yellow on Black: 13.9:1 ✅ AAA
- Yellow on White: 1.5:1 ❌ FORBIDDEN
- Violet on White: 2.3:1 ❌ FORBIDDEN

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

### Example 1: Sync Design Tokens from Figma
**User:** "Sync brand colors from Figma Brandbook"

**Workflow:**
1. Use Figma MCP: "Extract all color tokens from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
2. Compare extracted colors with `brand-tokens.json`
3. Update `tailwind.config.js` with Figma values
4. Update CSS variables in `css-variables.css`
5. Commit updated tokens

**Result:** Brand tokens stay in sync with Figma source of truth

---

### Example 2: Generate Component from Figma Design
**User:** "Create hero section from Figma design"

**Workflow:**
1. Get Figma frame URL for hero section
2. Use Figma MCP: "Get component structure and styles from [Figma URL]"
3. Extract:
   - Layout structure
   - Colors (from Figma Variables)
   - Typography (Scandia font, sizes, weights)
   - Spacing values
4. Generate React component with:
   - shadcn/ui components
   - AI Huevos brand colors from Figma
   - Tailwind classes
   - Responsive design
5. Validate against Figma Brandbook

**Result:** Pixel-perfect component matching Figma design

---

### Example 3: Improve Overall Design
**User:** "Improve the design of my React app with AI Huevos brand"

**Workflow:**
1. **If Figma MCP available:** Extract latest tokens from Figma Brandbook
   **Else:** Read `references/brand-tokens.json`
2. Audit `src/components/` for color inconsistencies
3. List components to improve (Hero, Cards, Nav)
4. For each component:
   - Use Figma MCP to check against brand guidelines (if available)
   - Use `component_refiner` with brand context
   - Apply colors from Figma tokens (or local tokens)
   - Verify WCAG compliance
5. Test in browser

**Result:** Brand-compliant components aligned with Figma Brandbook

### Example 4: Create Hero Section (Without Figma)
**User:** "Create a hero section for the landing page"

**Workflow:**
1. **If Figma MCP available:** Extract hero patterns from Figma Brandbook
   **Else:** Read `brand-tokens.json`
2. Generate with:
   ```
   searchQuery: "hero section"
   standaloneRequestQuery: "Modern hero with headline,
   subtext, and primary CTA using AI Huevos brand colors
   (yellow #FFD826, blue #3988FF, orange #FF6B35 for CTAs)"
   ```
3. Apply brand colors from Figma (or tokens):
   - Background: White `#FFFFFF`
   - Headline: Black `#030102`
   - CTA: Orange `#FF6B35` with black text
   - Accents: Yellow `#FFD826` or Blue `#3988FF`
4. Validate against Figma Brandbook (if MCP available)
5. Save to `src/components/Hero.jsx`

### Example 5: Redesign Card Component
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
- [ ] **Colors sync with Figma Brandbook** (if MCP available) OR match `brand-tokens.json`
- [ ] Max 3 colors per composition
- [ ] Orange only on CTAs (never background)
- [ ] Violet only as accents (never dominant)
- [ ] No yellow/violet text on white (WCAG fails)
- [ ] Sentence case for all headings
- [ ] No ALL CAPS (except acronyms)
- [ ] Official logo SVG used (never CSS shapes or emoji)

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
    ├── brand-tokens.json       # Complete AI Huevos tokens (sync with Figma)
    ├── color-system.md         # Color usage guide
    └── typography.md           # Type scale guide
```

## Figma Brandbook Reference

**Official Figma Brandbook:** https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK

**Use Figma MCP to:**
- Extract latest design tokens
- Validate brand compliance
- Generate components from designs
- Sync tokens between Figma and code

**Figma MCP Queries:**
```
"Extract all design tokens from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
"Check if this design matches AI Huevos brand guidelines from Figma"
"Get component styles from [Figma frame URL]"
"Convert Figma component to React with AI Huevos brand colors"
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

## Integration Priority

**Best Practice Workflow:**

1. **Figma MCP First** (if available):
   - Extract tokens from Figma Brandbook
   - Validate designs against Figma
   - Generate from Figma designs

2. **Magic MCP Second** (for generation):
   - Use with Figma token context
   - Generate components when Figma designs don't exist

3. **Manual Fallback**:
   - Read `brand-tokens.json`
   - Write code following guidelines
   - Apply quality checklist

**If Figma MCP Not Available:**
- Use `references/brand-tokens.json` as source of truth
- Tokens should match Figma Brandbook
- Validate manually against Figma when possible

**If Magic MCP Not Available:**
- Write code manually following brand guidelines
- Use Figma MCP tokens for context
- Apply quality checklist manually

---

## 📚 Additional Resources

**Figma Integration Guide:** [FIGMA_INTEGRATION.md](FIGMA_INTEGRATION.md)
- Complete workflow for syncing tokens from Figma
- Component generation from Figma designs
- Brand compliance validation using Figma MCP

**Figma Brandbook:** https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK
- Single source of truth for all design tokens
- Variables, components, and brand guidelines
- Access via Figma MCP server
