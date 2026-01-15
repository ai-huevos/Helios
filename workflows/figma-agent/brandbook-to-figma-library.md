---
description: Initialize a Figma Design System library based on the AI Huevos Brandbook.
---

# Workflow: Brandbook to Figma Library

This workflow configures a Figma file with the official Styles and Variables from `Brand/brand_guidelines.md`.

## Steps

### 1. Verification
1.  **Read Guidelines**: Confirm values in `Brand/brand_guidelines.md`.
2.  **Check Connection**: Verify `figma` MCP is responsive.

### 2. Color Styles
Iterate through the palette and create styles.

| Name | Hex | Description |
| :--- | :--- | :--- |
| `Primary/Yellow` | `#FFE03D` | Main Brand Color |
| `Primary/Blue` | `#4D9FFF` | Secondary Brand Color |
| `Primary/Black` | `#000000` | Text & Backgrounds |
| `Primary/White` | `#FFFFFF` | Text & Backgrounds |
| `Secondary/Purple`| `#B8A0FF` | Accents |
| `Secondary/Orange`| `#FF5C3D` | CTAs |

**Action**:
-   For each color, call `create_style` (Type: PAINT/FILL).
-   Description: "Imported from AI Huevos Brandbook".

### 3. Typography Styles
Create text styles for hierarchy.

| Name | Font | Size | Weight |
| :--- | :--- | :--- | :--- |
| `Display` | Scandia | 130 | Medium |
| `H1` | Scandia | 100 | Medium |
| `H2` | Scandia | 75 | Medium |
| `H3` | Scandia | 60 | Medium |
| `H4` | Scandia | 36 | Medium |
| `Body/Large` | Scandia | 32 | Regular |
| `Body/Regular`| Scandia | 24 | Regular |
| `CTA` | Geist Mono| 20 | Regular |

**Action**:
-   For each style, call `create_style` (Type: TEXT).
-   *Note*: If specific "Scandia" font family name differs in Figma (e.g., "Scandia Line"), request user verification.

### 4. Completion
1.  Notify user that the internal library is ready.
2.  Suggest running `html-to-presentation` to test the new styles.
