# shadcn/ui Setup Guide for AI Huevos

## ✅ Installation Complete!

shadcn/ui has been successfully installed and configured with AI Huevos brand colors.

## What Was Installed

1. **Tailwind CSS** - Utility-first CSS framework
2. **PostCSS & Autoprefixer** - CSS processing
3. **shadcn/ui dependencies:**
   - `class-variance-authority` - For component variants
   - `clsx` & `tailwind-merge` - For class utilities
   - `@radix-ui/react-slot` - For component composition
4. **Components installed:**
   - ✅ Button (`src/components/ui/button.jsx`)
   - ✅ Card (`src/components/ui/card.jsx`)
   - ✅ Dialog (`src/components/ui/dialog.jsx`)

## Configuration Files

### `tailwind.config.js`
- Pre-configured with AI Huevos brand colors
- All brand tokens available: `brand-yellow`, `brand-blue`, `brand-violet`, `brand-orange`, etc.
- Typography: `font-scandia` and `font-mono`

### `components.json`
- shadcn/ui configuration file
- Path aliases set up: `@/components`, `@/lib/utils`, etc.

### `jsconfig.json`
- Path aliases for `@/*` imports

### `src/lib/utils.js`
- `cn()` utility function for merging Tailwind classes

## How to Use

### Adding More Components

```bash
# Add any shadcn/ui component
npx shadcn@latest add [component-name]

# Examples:
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add toast
npx shadcn@latest add table
```

### Using Components with AI Huevos Brand

#### Button Example

```jsx
import { Button } from "@/components/ui/button"

// Using AI Huevos brand colors
<Button className="bg-brand-yellow text-brand-black hover:bg-brand-blue hover:text-white">
  Primary CTA
</Button>

// Orange CTA (for primary actions)
<Button className="bg-brand-orange text-brand-black hover:bg-brand-yellow">
  Call to Action
</Button>

// Outlined button
<Button variant="outline" className="border-brand-blue text-brand-blue">
  Secondary Action
</Button>
```

#### Card Example

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card className="border-brand-yellow">
  <CardHeader>
    <CardTitle className="text-brand-black">Card Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Customizing Components for AI Huevos Brand

You can override component styles directly or create wrapper components:

```jsx
// src/components/ui/button-brand.jsx
import { Button } from "./button"
import { cn } from "@/lib/utils"

export function BrandButton({ variant = "primary", className, ...props }) {
  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-brand-blue hover:text-white",
    cta: "bg-brand-orange text-brand-black hover:bg-brand-yellow",
    outline: "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  }
  
  return (
    <Button 
      className={cn(variants[variant], className)} 
      {...props} 
    />
  )
}
```

## Available Brand Colors in Tailwind

All AI Huevos brand colors are available as Tailwind classes:

```jsx
// Brand Colors
bg-brand-white / text-brand-white
bg-brand-black / text-brand-black
bg-brand-yellow / text-brand-yellow
bg-brand-blue / text-brand-blue
bg-brand-violet / text-brand-violet
bg-brand-orange / text-brand-orange

// Semantic Colors
bg-semantic-success / text-semantic-success
bg-semantic-warning / text-semantic-warning
bg-semantic-error / text-semantic-error
bg-semantic-info / text-semantic-info

// Neutral Scale
bg-neutral-50 through bg-neutral-900
text-neutral-50 through text-neutral-900
```

## Typography

Use Scandia font (already in Tailwind config):

```jsx
<h1 className="font-scandia text-h1">Heading</h1>
<p className="font-scandia text-body">Body text</p>

// Or apply globally (already done in global.css)
```

## Dark Mode

shadcn/ui components support dark mode out of the box when configured. To enable:

1. Add dark mode config to `tailwind.config.js`:
```js
module.exports = {
  darkMode: ["class"], // or "media"
  // ... rest of config
}
```

2. Toggle dark mode on the `<html>` element:
```jsx
document.documentElement.classList.toggle('dark')
```

## Adding More Components

Browse all available components at: https://ui.shadcn.com/docs/components

Common components to add:
- `input` - Form inputs
- `textarea` - Multi-line text inputs
- `select` - Dropdown selects
- `checkbox` / `radio` - Form controls
- `form` - Form wrapper with validation
- `toast` - Notification toasts
- `table` - Data tables
- `tabs` - Tab navigation
- `dialog` / `sheet` - Modals
- `dropdown-menu` - Dropdown menus
- `tooltip` - Tooltips
- `popover` - Popovers

## Quick Reference

### File Structure
```
InvestorRoom/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.js     # cn() utility
│   └── styles/
│       └── global.css   # Tailwind directives
├── tailwind.config.js   # Tailwind config with AI Huevos colors
├── postcss.config.js    # PostCSS config
├── components.json      # shadcn/ui config
└── jsconfig.json        # Path aliases
```

### Import Pattern

```jsx
// Always use @ alias for imports
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
```

### Utility Function

```jsx
import { cn } from "@/lib/utils"

// Merge Tailwind classes
<div className={cn("base-class", condition && "conditional-class", className)} />
```

## Next Steps

1. **Add more components** as needed: `npx shadcn@latest add [component]`
2. **Customize components** for AI Huevos brand colors
3. **Create wrapper components** for common brand patterns
4. **Use v0.dev** for rapid prototyping, then customize with brand colors

## Resources

- **shadcn/ui Docs:** https://ui.shadcn.com/docs
- **Component Gallery:** https://ui.shadcn.com/docs/components
- **v0.dev:** https://v0.dev (for rapid prototyping)
- **AI Huevos Brand Tokens:** `Brand/ai-huevos-brand/references/`

---

**Note:** No Python virtual environment needed! This is a Node.js/npm project. All dependencies are managed through `package.json`.
