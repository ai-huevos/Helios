# UI Component Libraries Guide for AI Huevos

Complete product design systems with pre-built components and patterns.

## 🎨 Top Recommendations

### 1. **shadcn/ui** ⭐ **RECOMMENDED**

**Best for:** React/Next.js applications with full customization

**What it is:**
- Not a traditional library—components are copied into your codebase
- Built on Radix UI primitives + Tailwind CSS
- Fully customizable, beautiful, accessible (WCAG compliant)
- MIT licensed

**Key Features:**
- ✅ Copy-paste components (own your code)
- ✅ Fully customizable styling
- ✅ Built on Radix UI (accessible primitives)
- ✅ Dark mode support out of the box
- ✅ TypeScript support
- ✅ Zero runtime overhead

**Installation:**
```bash
# Next.js
npx shadcn-ui@latest init

# Or add to existing project
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

**Components include:**
- Buttons, Cards, Forms, Dialogs, Dropdowns
- Data Tables, Charts, Navigation
- Date Pickers, Select, Toast notifications
- Accordion, Tabs, Tooltips, Popovers
- And 40+ more components

**Why for AI Huevos:**
- Easy to customize with brand colors (`#FFD826`, `#3988FF`, etc.)
- Accessible by default (important for B2B)
- Works seamlessly with Tailwind (already in your design system)
- You own the code, so you can modify anything

**Links:**
- **Website:** https://ui.shadcn.com/
- **GitHub:** https://github.com/shadcn-ui/ui
- **Docs:** https://ui.shadcn.com/docs

**Integration with AI Huevos:**
1. Install shadcn/ui
2. Customize `tailwind.config.js` with AI Huevos colors (already have this!)
3. Import components and override styles with brand tokens
4. Use `--color-brand-yellow`, `--color-brand-blue` from your CSS variables

---

### 2. **v0.dev by Vercel** ⭐ **FOR RAPID PROTOTYPING**

**Best for:** AI-powered component generation and rapid prototyping

**What it is:**
- AI-generated React components
- Uses shadcn/ui + Tailwind + Framer Motion
- Generate from text prompts or screenshots
- Free tier available

**Key Features:**
- ✅ AI generates components from prompts
- ✅ Uses shadcn/ui components (compatible)
- ✅ Copy-paste code directly
- ✅ Rapid iteration and experimentation
- ✅ Previews before copying

**How to use:**
1. Go to https://v0.dev
2. Enter a prompt: "Create a pricing card component with yellow accent"
3. AI generates multiple variants
4. Copy code into your project
5. Customize with AI Huevos brand colors

**Why for AI Huevos:**
- Fast iteration for new components
- Uses same stack (shadcn/ui + Tailwind)
- Easy to customize after generation
- Great for landing pages, cards, forms

**Links:**
- **Website:** https://v0.dev
- **GitHub:** (Integrated with shadcn/ui ecosystem)

**Best workflow:**
1. Use v0.dev to generate initial component
2. Copy code into project
3. Apply AI Huevos brand tokens
4. Refine using shadcn/ui patterns

---

### 3. **Radix UI** (Primitives)

**Best for:** Building custom components with accessibility built-in

**What it is:**
- Headless UI primitives (no styling)
- Fully accessible (ARIA, keyboard navigation)
- Unstyled—you add your own design
- Used by shadcn/ui under the hood

**When to use:**
- Building completely custom components
- Need specific accessibility requirements
- Want full control over styling
- Building design system from scratch

**Links:**
- **Website:** https://www.radix-ui.com/
- **Components:** Dialog, Dropdown, Select, Popover, Tooltip, etc.

---

### 4. **Ant Design (antd)**

**Best for:** Enterprise dashboards and admin panels

**What it is:**
- Complete component library with built-in design
- Enterprise-focused (tables, forms, data viz)
- Less customizable than shadcn/ui
- More opinionated styling

**Use when:**
- Building internal dashboards
- Need complex data tables
- Want everything out of the box
- Less concerned with brand customization

**Links:**
- **Website:** https://ant.design/

**Note:** Harder to customize with AI Huevos brand than shadcn/ui

---

### 5. **Material UI (MUI)**

**Best for:** Google Material Design followers

**What it is:**
- Google's Material Design implementation
- Comprehensive component library
- Theming system built-in
- Large ecosystem

**Links:**
- **Website:** https://mui.com/

**Note:** Material Design aesthetic may clash with AI Huevos brand identity

---

## 🚀 Recommended Setup for AI Huevos

### Stack:
1. **shadcn/ui** as primary component library
2. **v0.dev** for rapid prototyping
3. **Radix UI** for custom/unique components

### Implementation Steps:

#### Step 1: Install shadcn/ui
```bash
npx shadcn-ui@latest init
```

#### Step 2: Configure with AI Huevos Brand
Update `tailwind.config.js` (you already have this in `Brand/ai-huevos-brand/references/tailwind-config.js`):

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#030102',
          yellow: '#FFD826',
          blue: '#3988FF',
          violet: '#B4A7FA',
          orange: '#FF6B35',
        }
      }
    }
  }
}
```

#### Step 3: Customize shadcn/ui Components
After adding components, override default colors:

```tsx
// Example: Button with AI Huevos brand
<Button className="bg-brand-yellow text-brand-black hover:bg-brand-blue hover:text-white">
  CTA Button
</Button>
```

#### Step 4: Use v0.dev for New Components
1. Prompt: "Create a hero section with yellow accent, black text, modern design"
2. Copy generated code
3. Replace generic colors with `brand-yellow`, `brand-black`
4. Apply Scandia font from your design system

---

## 📦 Component Checklist for Complete Design System

### Essential Components (from shadcn/ui):

**Forms & Inputs:**
- [ ] Button (primary, secondary, outline)
- [ ] Input, Textarea, Select
- [ ] Checkbox, Radio, Switch
- [ ] Form validation
- [ ] Date picker

**Layout & Navigation:**
- [ ] Card
- [ ] Tabs
- [ ] Accordion
- [ ] Sidebar
- [ ] Navigation menu

**Feedback:**
- [ ] Toast notifications
- [ ] Dialog/Modal
- [ ] Alert
- [ ] Loading spinner
- [ ] Progress bar

**Data Display:**
- [ ] Table
- [ ] Data table (with sorting/filtering)
- [ ] Charts (use Recharts with shadcn/ui)
- [ ] Badge
- [ ] Avatar

**Overlays:**
- [ ] Tooltip
- [ ] Popover
- [ ] Dropdown menu
- [ ] Command palette

---

## 🎨 Integrating with AI Huevos Brand

### Color System Integration:

```tsx
// components/ui/button.tsx (customized shadcn/ui button)
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Button = ({ variant, className, ...props }) => {
  return (
    <ShadcnButton
      className={cn(
        variant === "brand-primary" && "bg-brand-yellow text-brand-black hover:bg-brand-blue hover:text-white",
        variant === "brand-cta" && "bg-brand-orange text-brand-black hover:bg-brand-yellow",
        className
      )}
      {...props}
    />
  )
}
```

### Typography Integration:

```tsx
// Use Scandia for all text (already in your CSS variables)
className="font-scandia" // Maps to your --font-primary
```

---

## 🔗 Quick Links

### shadcn/ui
- **Documentation:** https://ui.shadcn.com/docs
- **Components:** https://ui.shadcn.com/docs/components
- **Examples:** https://ui.shadcn.com/examples

### v0.dev
- **Website:** https://v0.dev
- **Prompt guide:** https://v0.dev/docs

### Your Brand Tokens
- **CSS Variables:** `Brand/ai-huevos-brand/references/css-variables.css`
- **Tailwind Config:** `Brand/ai-huevos-brand/references/tailwind-config.js`
- **Design Tokens JSON:** `Brand/ai-huevos-brand/references/design-tokens.json`

---

## 💡 Next Steps

1. **Install shadcn/ui** in your React/Next.js project
2. **Add essential components** (Button, Card, Dialog, Form inputs)
3. **Create brand wrapper components** that apply AI Huevos colors
4. **Use v0.dev** to generate landing page components
5. **Build component library** in `components/ui/` following shadcn/ui patterns

---

## 📝 Example: Complete Landing Page Component

Using shadcn/ui + v0.dev + AI Huevos brand:

```bash
# 1. Generate with v0.dev
Prompt: "Create a modern hero section with CTA button, dark mode support"

# 2. Copy code
# 3. Apply brand colors:
#    - Primary button: bg-brand-yellow text-brand-black
#    - Accent text: text-brand-blue
#    - Use font-scandia

# 4. Add to your component library
```

---

**Recommended starting point:** Begin with shadcn/ui + v0.dev combination for fastest iteration while maintaining brand consistency.
