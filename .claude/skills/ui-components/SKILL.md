---
name: ui-components
description: Generate React and Next.js UI components using 21st.dev component library. Activate when user requests buttons, forms, dialogs, cards, tables, modals, or any UI component creation. Delegates to Magic MCP for component generation.
---

# UI Components Skill

Generate production-ready React/Next.js components using the 21st.dev component library via Magic MCP.

## When to Use

- Building new UI components for InvestorRoom
- Creating forms, buttons, dialogs, modals
- Need pre-styled, accessible components
- Want to see component examples before implementing
- Refining existing UI components

## Quick Start

```
User: "Create a contact form with name, email, and message fields"

Process:
1. Use mcp__magic__21st_magic_component_builder
2. Provide searchQuery: "contact form"
3. Get generated component code
4. Integrate into InvestorRoom codebase
```

## MCP Tool Delegation

This skill wraps the **magic** MCP server tools:

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `mcp__magic__21st_magic_component_builder` | Generate new component | User asks to create/build UI component |
| `mcp__magic__21st_magic_component_inspiration` | Browse existing components | User wants to see examples, explore options |
| `mcp__magic__21st_magic_component_refiner` | Improve existing component | User asks to redesign/refine/improve UI |
| `mcp__magic__logo_search` | Get company logos | User needs brand logos (Discord, GitHub, etc.) |

### Tool Selection Logic

```
User intent → Tool choice

"Create a..." → component_builder
"Build a..." → component_builder
"Show me examples of..." → component_inspiration
"Improve this..." → component_refiner
"Redesign the..." → component_refiner
"Add [Company] logo" → logo_search
"/logo [Company]" → logo_search
```

## Component Builder Pattern

### Parameters
```typescript
{
  message: string;              // Full user message
  searchQuery: string;          // 2-4 words max (e.g., "contact form", "pricing table")
  absolutePathToCurrentFile: string;
  absolutePathToProjectDirectory: string;
  standaloneRequestQuery: string; // What component to create, based on context
}
```

### Workflow
```
1. Analyze user request
2. Generate searchQuery (2-4 words, component type)
3. Call mcp__magic__21st_magic_component_builder
4. Receive component code snippet
5. IMPORTANT: Edit or add files to integrate snippet into codebase
6. Test component in InvestorRoom
```

### Example: Creating a Pricing Table
```javascript
// User: "Add a pricing table with 3 tiers to the InvestorRoom"

// Step 1: Call component builder
mcp__magic__21st_magic_component_builder({
  message: "Add a pricing table with 3 tiers to the InvestorRoom",
  searchQuery: "pricing table",  // 2 words
  absolutePathToCurrentFile: "/Users/.../AI huevos/InvestorRoom/src/components/PricingSection.jsx",
  absolutePathToProjectDirectory: "/Users/.../AI huevos/InvestorRoom",
  standaloneRequestQuery: "Create a pricing table component with 3 pricing tiers for investor presentation"
})

// Step 2: Tool returns component snippet
// Step 3: Edit PricingSection.jsx to add the component
// Step 4: Import and use in AppPolish.jsx
```

## Component Inspiration Pattern

Use when user wants to **explore options** before deciding.

```
User: "Show me different card layouts for case studies"

Process:
1. mcp__magic__21st_magic_component_inspiration({
     message: "Show me different card layouts for case studies",
     searchQuery: "card layouts"
   })

2. Tool returns JSON with multiple component previews

3. Present options to user

4. User selects preferred style

5. Use component_builder to implement selected option
```

## Component Refiner Pattern

Use to **improve existing components** with /ui or /21 commands.

### Parameters
```typescript
{
  userMessage: string;               // User's refinement request
  absolutePathToRefiningFile: string; // File to refine
  context: string;                   // Specific UI elements to improve
}
```

### Workflow
```
User: "/ui make the hero section more modern"

1. Identify file: InvestorRoom/src/components/SynthesisHero.jsx

2. Extract context:
   - User wants: "more modern" styling
   - Component: hero section
   - Aspects: styling, layout, visual hierarchy

3. Call component_refiner({
     userMessage: "/ui make the hero section more modern",
     absolutePathToRefiningFile: "/path/to/SynthesisHero.jsx",
     context: "Improve styling and layout of hero section component to achieve more modern visual design"
   })

4. Tool returns redesigned component

5. Edit SynthesisHero.jsx with improved code
```

## Logo Search Pattern

Get official company logos in JSX/TSX/SVG format.

```
User: "/logo GitHub Discord Slack"

Process:
1. mcp__magic__logo_search({
     queries: ["github", "discord", "slack"],
     format: "TSX"  // or "JSX" or "SVG"
   })

2. Tool returns logo components

3. Save to InvestorRoom/src/components/icons/

4. Import and use: <GitHubIcon className="w-6 h-6" />
```

## Integration with InvestorRoom

### File Structure
```
InvestorRoom/
├── src/
│   ├── components/
│   │   ├── SynthesisHero.jsx       ← Refine these
│   │   ├── SynthesisGrid.jsx
│   │   ├── OpportunityExplorer.jsx
│   │   ├── PitchSection.jsx
│   │   └── [NewComponent].jsx      ← Add generated components here
│   ├── layouts/
│   │   ├── AppVisionary.jsx
│   │   ├── AppOperator.jsx
│   │   └── AppPolish.jsx
│   └── App.jsx
```

### Integration Steps
```
1. Generate component with component_builder
2. Save to appropriate directory:
   - Reusable components → src/components/
   - Layout-specific → src/layouts/
   - Icons/logos → src/components/icons/
3. Import in parent component
4. Test in dev server (npm run dev)
5. Verify in all persona layouts (Visionary, Operator, Polish)
```

## Brand Guidelines Integration

**CRITICAL:** Generated components must follow AI Huevos brand guidelines.

Before using generated component, verify:
- [ ] Colors match design-tokens.json
- [ ] Max 3 colors per composition
- [ ] Orange used for CTAs only (never background)
- [ ] No yellow text on white (WCAG fail)
- [ ] Scandia font applied
- [ ] Sentence case (never ALL CAPS)

### Post-Generation Adjustments
```javascript
// Generated component may use generic colors
<button className="bg-blue-500 text-white">...</button>

// Adjust to brand colors
<button className="bg-[#FF6B35] text-white">...</button>
// Orange (#FF6B35) from design-tokens.json
```

See `Brand/ai-huevos-brand/SKILL.md` for full brand guidelines.

## Quality Standards

### Generated Code
- [ ] TypeScript/JSX syntax valid
- [ ] Tailwind classes used (InvestorRoom uses Tailwind)
- [ ] Component is accessible (ARIA attributes)
- [ ] Responsive design included
- [ ] No hardcoded content (use props)

### Integration
- [ ] Component saved to correct directory
- [ ] Imports added to parent component
- [ ] Props documented (JSDoc or TypeScript)
- [ ] Tested in dev server
- [ ] Works in all 3 persona layouts (if applicable)

### Brand Compliance
- [ ] Colors match design tokens
- [ ] Typography follows brand guidelines
- [ ] Logos are official SVGs (not CSS shapes/emoji)
- [ ] Spanish content preserved (if applicable)

## Examples

### Example 1: Contact Form
```
User: "Add a contact form to the InvestorRoom"

1. Generate form component
   searchQuery: "contact form"

2. Receive component code with name, email, message fields

3. Save to: InvestorRoom/src/components/ContactForm.jsx

4. Import in AppPolish.jsx:
   import ContactForm from './components/ContactForm'

5. Use: <ContactForm onSubmit={handleSubmit} />

6. Adjust colors to brand palette
```

### Example 2: Success Case Cards
```
User: "Create cards to display success cases with logo, quote, and metrics"

1. Generate card component
   searchQuery: "testimonial card"

2. Customize for success cases:
   - Add metric displays
   - Include company logo slot
   - Quote styling

3. Save to: InvestorRoom/src/components/SuccessCaseCard.jsx

4. Use in SuccessCases.jsx:
   <SuccessCaseCard
     logo="/logos/druo.svg"
     quote="AI Huevos transformó nuestra atención al cliente"
     metrics={{ satisfaction: "+40%", time: "-60%" }}
   />
```

### Example 3: Refining Existing Component
```
User: "/ui improve the OpportunityExplorer layout for mobile"

1. Identify file: InvestorRoom/src/components/OpportunityExplorer.jsx

2. Call component_refiner with context:
   "Improve mobile responsiveness and layout of OpportunityExplorer component"

3. Receive redesigned component with better mobile layout

4. Edit OpportunityExplorer.jsx with new code

5. Test on mobile viewport (npm run dev, resize browser)
```

## Limitations

- **21st.dev library coverage** — not all component types available
- **Requires internet** — MCP server queries 21st.dev API
- **Generic styling** — must adjust to AI Huevos brand after generation
- **React/Next.js only** — not for Vue, Svelte, or other frameworks

## Tool Must Return Snippet Only

**IMPORTANT:** The Magic MCP tools ONLY return code snippets. After calling the tool:
1. You MUST use Edit or Write tools to integrate the snippet
2. Never assume the code is already in the codebase
3. Always show the user where you saved the component
