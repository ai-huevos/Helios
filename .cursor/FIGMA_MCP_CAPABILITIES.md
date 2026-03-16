# What You Can Do with Figma MCP 🎨

Comprehensive guide to Figma MCP capabilities for AI Huevos workflows.

---

## 🎯 Core Capabilities

### 1. **Access Design Files** 📄

**What you can do:**
- Get file metadata (name, URL, last modified, etc.)
- Fetch complete file structure and hierarchy
- Read design file content (nodes, layers, components)
- Access file information without opening Figma web

**Example queries:**
```
"What files are in my Figma workspace?"
"Get the structure of [Figma file URL]"
"What components are in this design file?"
```

**Use cases:**
- Audit design files without opening Figma
- Generate documentation from Figma files
- Extract design system structure
- Track design file changes

---

### 2. **Extract Design Variables** 🎨

**What you can do:**
- Get **color tokens** (brand colors, semantic colors, themes)
- Extract **typography** (font families, sizes, weights, line heights)
- Read **spacing values** (padding, margins, gaps)
- Get **border radius** values
- Extract **shadows** and effects
- Pull **design tokens** for code generation

**Example queries:**
```
"Extract all color tokens from [Figma file URL]"
"Get the typography scale from the AI Huevos brand file"
"What spacing values are defined in this file?"
"Convert Figma variables to Tailwind config"
```

**Use cases for AI Huevos:**
- ✅ **Sync Figma colors → Tailwind config** (`tailwind.config.js`)
- ✅ **Extract AI Huevos brand tokens** (yellow #FFD826, blue #3988FF, etc.)
- ✅ **Generate CSS variables** from Figma Variables
- ✅ **Update design tokens JSON** from Figma
- ✅ **Validate brand colors** match Figma design system

---

### 3. **Work with Components** 🧩

**What you can do:**
- Get component hierarchy and structure
- Read component properties (variants, props, states)
- Extract component styles (colors, typography, spacing)
- Understand component relationships
- Generate component documentation

**Example queries:**
```
"What components are in this file?"
"Get the structure of the [Component Name] component"
"What variants does this button component have?"
"Show me all button styles from this design system"
```

**Use cases:**
- Generate React/Vue components from Figma components
- Create component libraries (shadcn/ui style)
- Document component usage and props
- Validate components match design system

---

### 4. **Extract Brand Assets** 🖼️

**What you can do:**
- Get logos and brand assets
- Extract icon libraries
- Read image assets and exports
- Get asset URLs and metadata

**Example queries:**
```
"Get all logos from the AI Huevos brand file"
"What icons are available in this file?"
"Extract brand assets for web use"
```

**Use cases:**
- Auto-generate logo kits
- Extract icons for icon libraries
- Generate asset manifests
- Validate brand asset usage

---

### 5. **Selection-Based Context** 🎯 (Desktop Server Only)

**What you can do:**
- Select elements in Figma Desktop → Get context in Cursor
- Ask questions about selected frames/components
- Extract styles from selected elements
- Convert selected elements to code

**Example workflow:**
1. Select a frame/component in Figma Desktop
2. In Cursor, ask: "Get design tokens for the selected element"
3. MCP extracts colors, typography, spacing from selection
4. Use tokens to generate code

**Use cases:**
- Design-to-code workflows
- Style extraction from specific elements
- Component generation from selections
- Quick design token extraction

---

## 🚀 Practical Workflows for AI Huevos

### Workflow 1: Design Token Sync 🔄

**Goal**: Keep Tailwind config in sync with Figma Variables

**Steps:**
1. Designer updates colors in Figma Variables
2. In Cursor: "Extract color tokens from [AI Huevos brand file URL]"
3. MCP returns color values
4. Cursor generates updated `tailwind.config.js`
5. Commit updated config

**Result**: Brand colors always match between Figma and code

---

### Workflow 2: Component Generation 🧩

**Goal**: Generate React components from Figma designs

**Steps:**
1. Designer creates component in Figma with AI Huevos brand styles
2. In Cursor: "Get component structure and styles from [Figma URL]"
3. MCP extracts:
   - Component hierarchy
   - Colors (from brand tokens)
   - Typography (Scandia font)
   - Spacing values
4. Cursor generates React component with shadcn/ui + Tailwind
5. Component uses AI Huevos brand colors automatically

**Result**: Components match design 1:1 with brand styling

---

### Workflow 3: Design System Validation ✅

**Goal**: Ensure designs follow AI Huevos brand guidelines

**Steps:**
1. Designer creates new design in Figma
2. In Cursor: "Check if this design follows AI Huevos brand guidelines"
3. Cursor uses MCP to:
   - Extract colors from design
   - Compare with brand tokens (yellow #FFD826, blue #3988FF, etc.)
   - Validate typography (Scandia font)
   - Check spacing against brand scale
4. Report violations or confirm compliance

**Result**: Designs always match brand standards

---

### Workflow 4: Design Documentation 📚

**Goal**: Auto-generate design system documentation

**Steps:**
1. In Cursor: "Extract all design tokens from [Figma file URL]"
2. MCP returns:
   - Color palette with hex codes
   - Typography scale (h1, h2, body, etc.)
   - Spacing system (xs, sm, md, lg, xl, etc.)
   - Component library structure
3. Cursor generates Markdown documentation
4. Update `Brand/ai-huevos-brand/` docs automatically

**Result**: Design system docs stay in sync with Figma

---

### Workflow 5: Brand Asset Extraction 🎨

**Goal**: Generate logo kits and asset packages

**Steps:**
1. In Cursor: "Extract all brand assets from AI Huevos brand file"
2. MCP finds:
   - Logo variations (yellow, blue, black/white)
   - Egg character assets
   - Icon sets
   - Brand illustrations
3. Cursor generates asset manifest
4. Auto-download or document asset locations

**Result**: Complete brand asset library documented

---

### Workflow 6: Design-to-Code Translation 💻

**Goal**: Convert Figma frames to React/HTML components

**Steps:**
1. Designer creates landing page section in Figma
2. Select element in Figma Desktop
3. In Cursor: "Convert selected element to React component with AI Huevos brand styling"
4. MCP extracts:
   - Layout structure
   - Colors (from brand tokens)
   - Typography
   - Spacing
5. Cursor generates React component:
   - Uses shadcn/ui components
   - Applies AI Huevos brand colors
   - Uses Scandia font
   - Responsive Tailwind classes

**Result**: Pixel-perfect component matching Figma design

---

## 📋 Example Queries You Can Try

### Design Token Extraction

```
"Extract all color tokens from [Figma file URL] and convert to Tailwind config format"
```

```
"Get typography scale from AI Huevos brand file - font sizes, weights, line heights"
```

```
"What spacing values are defined in the design system? Convert to Tailwind spacing scale"
```

---

### Component Analysis

```
"What components are available in the AI Huevos design system?"
```

```
"Get the structure and variants of the button component from Figma"
```

```
"Show me all card component styles and their properties"
```

---

### Brand Validation

```
"Check if colors in this design file match AI Huevos brand colors (yellow #FFD826, blue #3988FF, etc.)"
```

```
"Validate that all text uses Scandia font in this design"
```

```
"Check if spacing values follow the AI Huevos design system scale"
```

---

### Code Generation

```
"Convert the hero section from [Figma URL] to React component with shadcn/ui and AI Huevos brand colors"
```

```
"Generate HTML from this Figma frame using AI Huevos brand styling"
```

```
"Create a Tailwind config from Figma variables in this file"
```

---

### Asset Extraction

```
"Get all logos from the AI Huevos brand file - list variations and export formats"
```

```
"What icons are available in the design system? Extract icon names and styles"
```

---

## 🎨 AI Huevos Specific Use Cases

### 1. **Sync Brand Colors**
```bash
# Query: "Extract brand colors from Figma and update tailwind.config.js"
# Result: Colors #FFD826, #3988FF, #B4A7FA, #FF6B35 synced to config
```

### 2. **Validate Brand Compliance**
```bash
# Query: "Check if this design uses only AI Huevos brand colors"
# Result: Report of color violations or compliance confirmation
```

### 3. **Generate Branded Components**
```bash
# Query: "Create button component from Figma with AI Huevos yellow #FFD826"
# Result: React component with correct brand styling
```

### 4. **Extract Design Tokens JSON**
```bash
# Query: "Export design tokens from Figma to design-tokens.json format"
# Result: JSON file matching Brand/ai-huevos-brand/references/design-tokens.json
```

### 5. **Document Component Library**
```bash
# Query: "Generate component documentation from Figma design system"
# Result: Markdown docs for components/ directory
```

---

## 🔧 Technical Capabilities

### Supported Data Types

- ✅ **Colors**: Hex, RGB, RGBA values
- ✅ **Typography**: Font families, sizes, weights, line heights, letter spacing
- ✅ **Spacing**: Padding, margins, gaps (all directions)
- ✅ **Borders**: Width, radius, styles
- ✅ **Shadows**: Box shadows, text shadows
- ✅ **Layout**: Flex, Grid properties
- ✅ **Components**: Variants, properties, states
- ✅ **Assets**: Images, vectors, exports

### Output Formats

- **Tailwind Config**: `tailwind.config.js` format
- **CSS Variables**: `:root` CSS custom properties
- **Design Tokens JSON**: JSON format compatible with style-dictionary
- **TypeScript Types**: Typed design tokens
- **Component Code**: React, Vue, HTML/CSS
- **Documentation**: Markdown, HTML

---

## 🚦 How to Use (Quick Start)

### Step 1: Ensure Figma MCP is Connected

1. **Figma Desktop** must be running
2. **Dev Mode** must be enabled (`Shift+D`)
3. **MCP Server** must be ON in Inspect panel
4. **Cursor** must be restarted after config change

### Step 2: Ask Questions

Simply ask Claude in Cursor about Figma designs:

```
"What Figma resources are available?"
"Get design tokens from [Figma file URL]"
"Extract colors from the AI Huevos brand file"
```

### Step 3: Use Results

Claude can:
- Update your code files (Tailwind config, CSS, etc.)
- Generate components
- Create documentation
- Validate brand compliance

---

## 📚 Integration with Your Stack

### Tailwind CSS
- ✅ Extract colors → Update `tailwind.config.js`
- ✅ Extract spacing → Update spacing scale
- ✅ Extract typography → Update font config

### shadcn/ui Components
- ✅ Get component styles from Figma
- ✅ Generate branded components
- ✅ Sync component variants

### React/Next.js
- ✅ Generate React components from Figma
- ✅ Extract TypeScript types
- ✅ Create component stories

### Design System Docs
- ✅ Update `Brand/ai-huevos-brand/` docs
- ✅ Sync `design-tokens.json`
- ✅ Update CSS variables

---

## 💡 Pro Tips

### 1. Use Figma File URLs
When asking about specific files, include the Figma file URL:
```
"Extract colors from https://www.figma.com/file/[file-id]/..."
```

### 2. Selection-Based (Desktop Server)
Select elements in Figma Desktop for faster context:
- Select frame → Ask: "Get styles for selected element"
- Select component → Ask: "Convert selected component to code"

### 3. Batch Operations
Ask for multiple things at once:
```
"Extract all colors, typography, and spacing from this file and generate Tailwind config"
```

### 4. Brand Validation
Regularly check compliance:
```
"Validate that all colors in this design match AI Huevos brand palette"
```

---

## 🎯 Next Steps

1. **Test the connection**: Ask "What Figma resources are available?"
2. **Try a simple query**: "Extract brand colors from [your Figma file URL]"
3. **Generate something**: "Create Tailwind config from Figma variables"
4. **Validate designs**: "Check brand compliance of this design file"

---

**Ready to use!** Just ask Claude about your Figma designs and watch it extract, convert, and generate code with AI Huevos brand styling. 🚀
