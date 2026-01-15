---
description: Convert HTML content (like an eBook) into a professional Figma Presentation using Brand Guidelines.
---

# Workflow: HTML to Figma Presentation

This workflow guides the `figma-design-agent` to transform structured HTML content into a slide deck.

## Prerequisites
- Active `figma` MCP server.
- File ID of a target Figma file (or create new).
- Input HTML file (e.g., `Brand/Pitch Deck/AI Huevos LatAm Operator Archetypes eBook.html`).

## Steps

### 1. Preparation
1.  **Read HTML**: Use `read_file` to ingest the HTML content.
2.  **Parse Structure**: Identify `section` tags. Each `<section>` or significant `<h2>` block equals one **Slide**.
3.  **Load Brand Assets**: Ensure you have the Hex codes from `Brand/brand_guidelines.md`.

### 2. Figma Setup
1.  **Create Page**: Call `create_page` with name "Generated Deck - [Date]".
2.  **Set Background**: Create a background rectangle or frame fill of White (`#FFFFFF`) or Black (`#000000`) depending on the section style.

### 3. Slide Generation Loop
For each Section found in HTML:

#### A. Create Slide Frame
-   **Tool**: `create_node`
-   **Type**: `FRAME`
-   **Name**: `Slide [N] - [Section Title]`
-   **Size**: 1920 x 1080
-   **Fills**: White (`#FFFFFF`) by default.
-   **LayoutMode**: `VERTICAL` (Auto Layout)
-   **Padding**: 80px (Horizontal), 120px (Top), 80px (Bottom).
-   **Spacing**: 40px (Item spacing).

#### B. Header Generation
-   **Extract**: Content of `<h2>`.
-   **Tool**: `create_node` (TEXT)
-   **Name**: `Header`
-   **Style**: Font "Scandia", Weight "Medium", Size 100 (H1 equivalent), Color Black or Brand Yellow.

#### C. Content Body Generation
-   **Extract**: Content of `<p>`, `<ul>`, etc.
-   **Tool**: `create_node` (TEXT)
-   **Name**: `Body Text`
-   **Style**: Font "Scandia", Weight "Regular", Size 32 (Body Large), Color Black/Dark Gray.
-   **Width**: Fill Container or Fixed (e.g., 1400px).

#### D. Visuals (If applicable)
-   If `metric-card` detected in HTML:
    -   Create a nested Auto Layout Frame (`Horizontal`).
    -   Add Text Node for Value (Geist Mono, Bold, 48px, Blue).
    -   Add Text Node for Label (Scandia, Regular, 24px, Gray).

### 4. Review & Notification
1.  **Summary**: Report how many slides were created.
2.  **Link**: Provide the Figma URL to the user.
