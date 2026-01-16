# Figma MCP Test: Create Presentation Templates

## Quick Test Instructions

**Copy and paste this prompt to test your Figma MCP connection:**

```
I need to create presentation templates in my brandbook Figma file.

Please:
1. First, list any Figma files I have access to (or ask me for the brandbook file URL)
2. Once we have the file, create master slide templates following the specifications in Brand/Pitch Deck/SLIDE_SPECIFICATIONS.md
3. Apply the AI Huevos brand guidelines from Brand/ai-huevos-brand/SKILL.md

Create these master templates:
- Title Slide (centered, white background)
- Content Slide (header + bullets, white background)  
- Quote Slide (color background, centered text)
- Data/Table Slide (with table structure)
- Section Divider Slide

Each template should:
- Be 1920x1080px frames
- Use Auto Layout (scale mode)
- Follow brand colors (Yellow #FFD826, Blue #3988FF, Black #121212, White #FFFFFF)
- Use Scandia font (Medium for headers, Regular for body)
- Have proper spacing and padding as specified

If you need the Figma file URL, I'll provide it. Otherwise, create these templates in my brandbook file.
```

---

## Detailed Test: Step by Step

### Step 1: Provide File URL
Share your brandbook Figma file URL. It should look like:
```
https://www.figma.com/file/[FILE_KEY]/[FILE_NAME]
```

Or just the file key: `[FILE_KEY]`

### Step 2: Create Master Templates

Once we have the file, I'll create:

#### Template 1: Title Slide Master
- **Frame**: 1920x1080px, Auto Layout Vertical
- **Background**: White (#FFFFFF)
- **Padding**: 120px top, 80px sides, 80px bottom
- **Content**:
  - Logo placeholder (200px wide, centered)
  - Gap: 64px
  - Headline: 100px, Scandia Medium, Black (#121212)
  - Gap: 32px
  - Tagline: 24px, Scandia Regular, Black
  - Gap: 16px
  - Subline: 18px, Scandia Regular, Gray (#8B8B8B)

#### Template 2: Content Slide Master
- **Frame**: 1920x1080px, Auto Layout Vertical
- **Background**: White (#FFFFFF)
- **Padding**: 80px all sides
- **Content**:
  - Header: 75px, Scandia Medium, Black, left-aligned
  - Gap: 40px
  - Body container: Auto Layout Vertical
    - Bullet points: 24px, Scandia Regular, Black
    - Bullet accent: Blue (#3988FF) dash
  - Optional: Egg character placeholder (80px, top-right)

#### Template 3: Quote Slide Master
- **Frame**: 1920x1080px, Auto Layout Vertical, centered
- **Background**: Yellow (#FFD826) or Blue (#3988FF)
- **Padding**: 200px all sides
- **Content**:
  - Quote text: 75px, Scandia Medium, Black (on yellow) or White (on blue)
  - Gap: 32px
  - Attribution: 24px, Scandia Regular, Black or White

#### Template 4: Data/Table Slide Master
- **Frame**: 1920x1080px, Auto Layout Vertical
- **Background**: White (#FFFFFF)
- **Padding**: 80px all sides
- **Content**:
  - Header: 75px, Scandia Medium, Black
  - Gap: 40px
  - Table structure: Auto Layout Grid
    - Header row: 32px, Scandia Medium, Black, borders
    - Data rows: 24px, Scandia Regular, Black, light borders

#### Template 5: Section Divider Master
- **Frame**: 1920x1080px, Auto Layout Vertical
- **Background**: Black (#121212)
- **Padding**: 200px all sides
- **Content**:
  - Large number/text: 130px, Scandia Medium, Yellow (#FFD826)
  - Gap: 32px
  - Title: 75px, Scandia Medium, White
  - Gap: 24px
  - Description: 32px, Scandia Regular, Gray (#8B8B8B)

---

## What to Expect

After running the test, you should see:
- ✅ 5 master slide templates created in your Figma file
- ✅ All following AI Huevos brand guidelines
- ✅ Proper Auto Layout structures
- ✅ Brand colors applied correctly
- ✅ Typography matching specifications

---

## Troubleshooting

### If MCP tools aren't available:
1. Check that Figma MCP is properly configured in `~/.cursor/mcp.json`
2. Restart Cursor completely
3. Verify OAuth authentication completed (if using remote server)
4. Check Figma Desktop MCP server is running (if using desktop server)

### If file access fails:
1. Ensure you have edit access to the Figma file
2. Verify the file URL/key is correct
3. Check that your Figma account has proper permissions

---

**Ready to test?** Copy the Quick Test prompt above and paste it here, or provide your brandbook Figma file URL to proceed!
