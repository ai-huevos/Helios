# Figma Brandbook Integration Guide

## 🎨 Official Figma Brandbook

**Brandbook URL:** https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK

This is the **single source of truth** for AI Huevos brand design tokens.

---

## 🔄 Design Token Sync Workflow

### Step 1: Extract from Figma

**Query to Figma MCP:**
```
"Extract all design tokens from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
```

**What to extract:**
- Color tokens (Variables)
- Typography scale (font families, sizes, weights)
- Spacing system (padding, margins, gaps)
- Border radius values
- Shadow definitions
- Component tokens

### Step 2: Compare with Local Tokens

**Compare extracted tokens with:**
- `references/brand-tokens.json`
- `Brand/ai-huevos-brand/references/design-tokens.json`
- `tailwind.config.js` (InvestorRoom)

### Step 3: Update Local Files

**If Figma has newer/changed values:**

1. **Update `brand-tokens.json`:**
   - Replace color values
   - Update typography scale
   - Sync spacing values

2. **Update `tailwind.config.js`:**
   - Update color palette
   - Sync spacing scale
   - Update font config

3. **Update `css-variables.css`:**
   - Sync CSS custom properties
   - Update design tokens

### Step 4: Commit Changes

**Commit message:**
```
chore: sync design tokens from Figma Brandbook

- Updated colors from Figma Variables
- Synced typography scale
- Aligned spacing system with Figma
```

---

## ✅ Brand Compliance Validation

### Validate Component Against Figma

**Query:**
```
"Check if this component follows AI Huevos brand guidelines from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
```

**What gets validated:**
- ✅ Colors match Figma Variables
- ✅ Typography uses Scandia font
- ✅ Spacing follows Figma scale
- ✅ Max 3 colors per composition
- ✅ Orange only on CTAs
- ✅ No yellow/violet text on white

---

## 🧩 Component Generation from Figma

### Generate React Component from Figma Design

**Workflow:**

1. **Get Figma Component URL:**
   - Copy frame/component URL from Figma
   - Example: `https://www.figma.com/design/.../...?node-id=123-456`

2. **Extract Component Styles:**
   ```
   "Get component structure and styles from [Figma URL]"
   ```

3. **Generate Code:**
   ```
   "Convert this Figma component to React with shadcn/ui and AI Huevos brand colors"
   ```

4. **MCP Extracts:**
   - Component hierarchy
   - Colors (from Figma Variables)
   - Typography (Scandia font, sizes, weights)
   - Spacing values
   - Border radius
   - Shadows

5. **Generate React Component:**
   - Uses shadcn/ui components
   - Applies AI Huevos brand colors
   - Uses Scandia font
   - Responsive Tailwind classes
   - Matches Figma design 1:1

**Result:** Pixel-perfect component matching Figma design

---

## 📊 Design Token Extraction Examples

### Extract Colors Only

```
"Extract all color tokens from Figma Brandbook and update tailwind.config.js"
```

**Expected Output:**
- Brand colors: #FFD826, #3988FF, #B4A7FA, #FF6B35
- Semantic colors: success, warning, error, info
- Neutral scale: 50-900

### Extract Typography

```
"Get typography scale from Figma Brandbook - font sizes, weights, line heights"
```

**Expected Output:**
- Font family: Scandia (primary), Geist Mono (data)
- UI scale: h1 (32px), h2 (28px), body (14px), etc.
- Presentation scale: display (130px), h1 (100px), etc.

### Extract Spacing

```
"What spacing values are defined in Figma Brandbook? Convert to Tailwind spacing scale"
```

**Expected Output:**
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- etc.

---

## 🎯 Best Practices

### 1. Figma as Source of Truth

**Always prioritize Figma Brandbook:**
- Figma Variables → Local tokens
- Design updates in Figma → Sync to code
- New components in Figma → Generate from Figma

### 2. Regular Sync

**Sync frequency:**
- **Before major releases**: Extract latest tokens
- **When Figma updates**: Sync immediately
- **Weekly check**: Verify tokens match

### 3. Validation

**Always validate:**
- Components match Figma designs
- Colors match Figma Variables
- Typography matches Figma scale
- Spacing matches Figma system

---

## 🔧 Troubleshooting

### Figma MCP Not Connected

**If Figma MCP is not available:**
1. Use `references/brand-tokens.json` as fallback
2. Tokens should match Figma Brandbook
3. When MCP available again, sync tokens

### Tokens Don't Match Figma

**If local tokens differ from Figma:**
1. Extract fresh tokens from Figma
2. Compare with local files
3. Update local files to match Figma
4. Document why local differs (if intentional)

### Can't Access Figma File

**If Figma Brandbook is private:**
1. Ensure Figma Desktop MCP server is running
2. Verify Dev Mode is enabled
3. Check you have access to the file
4. Use file URL for remote MCP

---

## 📚 Related Files

### Local Token Files
- `.claude/skills/frontend-design/references/brand-tokens.json`
- `Brand/ai-huevos-brand/references/design-tokens.json`
- `Brand/ai-huevos-brand/references/css-variables.css`
- `InvestorRoom/tailwind.config.js`

### Brand Guidelines
- `Brand/ai-huevos-brand/SKILL.md`
- `Brand/ai-huevos-brand/CHEATSHEET.md`
- `Brand/ai-huevos-brand/brand-manual.md`

### Figma MCP Docs
- `.cursor/FIGMA_MCP_SETUP.md`
- `.cursor/FIGMA_MCP_CAPABILITIES.md`
- `.cursor/FIGMA_MCP_LOCAL_SETUP.md`

---

## 🚀 Quick Start

### Sync Tokens Now

1. **Extract from Figma:**
   ```
   "Extract all design tokens from https://www.figma.com/design/Z2oWxiu7yyEJFy9TbwIQyZ/AIHUEVOS_BRANDBOOK"
   ```

2. **Compare and update:**
   - Check differences with local tokens
   - Update if Figma has newer values

3. **Validate:**
   ```
   "Validate that all components match AI Huevos brand guidelines from Figma"
   ```

---

**Remember:** Figma Brandbook is the source of truth. Always sync tokens from Figma before generating components or validating brand compliance.
