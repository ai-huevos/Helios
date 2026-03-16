# Setting up the Figma MCP Server

To enable the Figma Agent, you need to configure your local MCP client (e.g., Claude Desktop) to communicate with the Figma API.

## Prerequisites
1.  **Node.js**: Ensure you have Node.js installed to run the server.
2.  **Figma API Token**:
    -   Go to **Figma** -> **Settings**.
    -   Scroll to **Personal Access Tokens**.
    -   Click **Generate new token**.
    -   Copy the token string.

## Configuration

Add the following to your MCP configuration file (typically `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-figma"
      ],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_TOKEN_HERE"
      }
    }
  }
}
```

## Verifying

1.  Restart your MCP Client (Claude Desktop).
2.  Look for the `figma` server in the available resources list.
3.  Once active, the `figma-design-agent` will automatically have access to tools like `figma.create_node`, `figma.get_file`, etc.

## Troubleshooting
-   **"Command not found"**: Ensure `npx` is in your system PATH.
-   **"Unauthorized"**: Double-check your `FIGMA_ACCESS_TOKEN`.
