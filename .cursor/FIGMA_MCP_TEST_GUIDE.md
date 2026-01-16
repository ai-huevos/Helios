# Figma MCP Testing Guide

**Last Updated**: 2026-01-15  
**Purpose**: Test and verify Figma MCP functionality

---

## Quick Connection Test

Try these in Cursor chat to verify the connection:

### Test 1: List Available Tools
```
What Figma tools and resources are available through the MCP server?
```

### Test 2: Check Server Status
```
Can you access the Figma MCP server? List any available Figma resources or tools.
```

---

## Basic Functionality Tests

### Test 3: Get File Metadata
**Requires**: A Figma file URL (e.g., `https://www.figma.com/file/ABC123...`)

```
Get metadata for this Figma file: [paste Figma file URL]
```

**Expected**: File name, last modified date, page count, etc.

---

### Test 4: Extract Design Variables
**Requires**: Figma file with Variables defined

```
Extract all design variables (colors, typography, spacing) from: [Figma file URL]
```

**Expected**: JSON or structured list of variables matching your brand tokens

---

### Test 5: Get Component Information
**Requires**: Figma file with components

```
List all components in this Figma file: [Figma file URL]
```

**Expected**: Component names, properties, variants

---

## Brand-Specific Tests

### Test 6: Validate Brand Colors
**Requires**: AI Huevos brand file in Figma

```
Extract color variables from [Figma file URL] and compare them with AI Huevos brand colors:
- Yellow: #FFD826
- Blue: #3988FF
- Black: #121212
- White: #FFFFFF
- Violet: #B4A7FA
- Orange: #FF6B35

Are all brand colors present and matching?
```

---

### Test 7: Extract Typography Tokens
**Requires**: Figma file with typography styles

```
Extract typography variables from [Figma file URL]. I'm looking for:
- Font families (Scandia, Geist Mono)
- Font sizes
- Font weights
- Line heights

Format as CSS variables similar to our brand guidelines.
```

---

### Test 8: Get Node/Layer Information
**Requires**: Specific Figma frame or layer URL (with node-id)

```
Get detailed information about this Figma layer: [Figma URL with node-id]
Include: dimensions, styles, children, layout properties
```

---

### Test 9: Extract Layout Structure
**Requires**: Figma frame URL

```
Analyze the layout structure of this Figma frame: [frame URL]
Describe the layout, spacing, and component hierarchy.
```

---

## Advanced Tests

### Test 10: Design-to-Code Conversion
**Requires**: A Figma frame/component

```
Convert this Figma design to React/TypeScript component code: [frame URL]
Use AI Huevos brand guidelines:
- Colors from brand palette
- Typography: Scandia for text, Geist Mono for data
- Follow spacing and layout rules
```

---

### Test 11: Brand Compliance Check
**Requires**: Figma file URL

```
Check this Figma design against AI Huevos brand guidelines:
- Verify colors match brand palette
- Check typography (Scandia, Geist Mono)
- Validate spacing and layout
- Ensure logo usage follows guidelines

Report any violations.
```

---

### Test 12: Generate Design Tokens
**Requires**: Figma file with Variables

```
Extract design tokens from [Figma file URL] and generate:
1. CSS custom properties (for css-variables.css)
2. Tailwind config format (for tailwind-config.js)
3. JSON format (for design-tokens.json)

Ensure tokens match AI Huevos brand specifications.
```

---

## Example Figma URL Formats

### File URL
```
https://www.figma.com/file/[FILE_KEY]/[FILE_NAME]
```

### Frame/Layer URL (with node-id)
```
https://www.figma.com/file/[FILE_KEY]/[FILE_NAME]?node-id=[NODE_ID]
```

### Example (you'll need your actual file)
```
https://www.figma.com/file/ABC123xyz/AI-Huevos-Brand?node-id=1%3A2
```

---

## What to Expect

### ✅ Successful Connection
- MCP server responds with available tools
- Can list Figma resources
- Can fetch file metadata
- Can extract variables/components

### ❌ Connection Issues
- "Server not found" → Restart Cursor, check config
- "Unauthorized" → Complete OAuth authentication
- "File not found" → Check file URL and permissions
- "Rate limit" → Wait a moment, try again

---

## Troubleshooting Tests

### If MCP Not Connecting

1. **Check Configuration**:
   ```bash
   cat ~/.cursor/mcp.json
   ```
   Should show:
   ```json
   {
     "mcpServers": {
       "figma": {
         "url": "https://mcp.figma.com/mcp"
       }
     }
   }
   ```

2. **Verify OAuth**:
   - Try using Figma MCP in Cursor
   - If prompted, complete OAuth flow
   - Browser should open for authentication

3. **Restart Cursor**:
   - Fully quit Cursor
   - Reopen and test again

---

## Test Checklist

After running tests, verify:

- [ ] MCP server connection established
- [ ] Can list available tools/resources
- [ ] Can fetch file metadata
- [ ] Can extract design variables
- [ ] Can get component information
- [ ] Can access node/layer details
- [ ] Brand colors extract correctly
- [ ] Typography tokens extracted
- [ ] Design-to-code conversion works
- [ ] Brand compliance checking works

---

## Real-World Usage Examples

### Example 1: Sync Brand Tokens
```
Extract all color and typography variables from [AI Huevos brand file URL],
then update our design-tokens.json file to match.
```

### Example 2: Generate Component
```
Get the design specs for [component URL] and create a React component
that follows AI Huevos brand guidelines and uses our Tailwind config.
```

### Example 3: Validate Design
```
Check [new design file URL] against AI Huevos brand guidelines.
Verify colors, typography, spacing, and logo usage are compliant.
```

---

## Next Steps After Testing

Once tests pass:

1. **Integrate with Brand Workflow**:
   - Use Figma MCP to extract tokens automatically
   - Sync with design-tokens.json
   - Update Tailwind config

2. **Set Up Automation**:
   - Script to pull tokens from Figma
   - Validate designs against brand guidelines
   - Generate components from Figma frames

3. **Document Your Figma Files**:
   - Note which files contain brand tokens
   - Document component libraries
   - Share file URLs with team

---

**Start Testing**: Copy any test above and paste into Cursor chat with your Figma file URLs!
