# Figma Agent Prompt Cookbook

Here are the best prompts to use when interacting with the **Figma Design Agent** to manage your brand and artifacts.

## Goal 1: Update Brand & Sync to Figma
**Scenario**: You want to change a brand color or font in the documentation and have it immediately reflected in Figma.

**Copy/Paste this Prompt**:
> Act as the **Figma Design Agent**.
>
> 1.  **Update Brand**: Please edit `Brand/ai-huevos-brand/SKILL.md` to change [Describe Change, e.g., "The primary yellow to #FFD700"].
> 2.  **Sync**: Once updated, run the `brandbook-to-figma-library` workflow to update my Figma Design System with these new values.

## Goal 2: Create Presentation Templates
**Scenario**: You want to generate a fresh set of slide templates based on the current brand.

**Copy/Paste this Prompt**:
> Act as the **Figma Design Agent**.
>
> I need a new set of **Presentation Templates** in Figma. Use the `html-to-presentation` logic but apply it to create specific master slides:
> 1.  **Title Slide**: Large Display text, Dark background.
> 2.  **Content Slide**: Light background, Header + Bullet points.
> 3.  **Quote Slide**: Color background, Large centered italic text.
>
> Ensure all Auto Layouts are set to "Scale" for responsiveness.

## Goal 3: Generate a Deck from Content
**Scenario**: You have a text file or just an idea and want a deck.

**Copy/Paste this Prompt**:
> Act as the **Figma Design Agent**.
>
> Take this content:
> [PASTE CONTENT HERE]
>
> Transform this into a Figma presentation. Map each main point to a slide. Adhere strictly to the `Brand/brand_guidelines.md` for typography and color.

## Troubleshooting MCP
If the Agent says "Figma tool not found":
-   **Check Config**: Ensure `claude_desktop_config.json` has the correct `FIGMA_ACCESS_TOKEN`.
-   **Restart**: You must restart the AI interface (Claude Desktop) after changing config.
