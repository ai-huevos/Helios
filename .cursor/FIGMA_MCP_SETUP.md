# Figma MCP Server Setup

This guide explains how to configure the Figma MCP server to access design files, components, and brand assets within Claude Code (Cursor).

## What is Figma MCP?

The Figma MCP (Model Context Protocol) server allows Claude Code to securely access:
- **Design files** - Access Figma files and designs
- **Components** - Fetch component hierarchies and properties
- **Design variables** - Get color tokens, typography, and spacing
- **File metadata** - Retrieve design file information

## Configuration

The Figma MCP server is configured in `~/.cursor/mcp.json`. The configuration uses Figma's official hosted MCP server.

### Current Configuration (Recommended)

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Note**: This uses OAuth authentication - no token needed! Cursor will prompt you to authenticate on first use.

## Authentication (OAuth - No Token Needed!)

The remote server uses OAuth authentication - much more secure and convenient:

1. **Add the URL** to your `~/.cursor/mcp.json` (see configuration above)
2. **Restart Cursor**
3. **First use**: When you try to use Figma MCP, Cursor will open a browser window
4. **Authenticate**: Log in to Figma and authorize Cursor
5. **Done!** Cursor stores the OAuth token securely

**No manual token generation needed!**

## Alternative: Desktop MCP Server (Local)

If you prefer to use the local desktop server (better performance, offline support):

### Setup Desktop Server

1. **Enable Dev Mode in Figma Desktop**
   - Open Figma Desktop app
   - Press `Shift+D` or click Dev Mode in the toolbar

2. **Enable MCP Server**
   - In the Inspect panel, find the **MCP Server** section
   - Toggle it **ON**
   - Note the local server URL: `http://127.0.0.1:3845/mcp`

3. **Update Configuration**

   Replace the command-based config with URL-based:

   ```json
   {
     "mcpServers": {
       "figma": {
         "url": "http://127.0.0.1:3845/mcp"
       }
     }
   }
   ```

   **Note**: The desktop server requires Figma Desktop app to be running and in Dev Mode.

### When to Use Each

- **Remote Server (Official)**: 
  - ✅ **Official Figma server** - maintained by Figma
  - ✅ **OAuth authentication** - most secure, no tokens to manage
  - ✅ **No npm packages** - just add URL
  - ✅ Works with Figma web or desktop
  - ✅ No need to keep desktop app open
  - ❌ Requires internet connection
  - ❌ Link-based context (need to paste Figma URLs)

- **Desktop Server (local)**:
  - ✅ Faster performance
  - ✅ Works offline (once file is loaded)
  - ✅ Selection-based context (select elements in Figma)
  - ❌ Requires Figma Desktop app running
  - ❌ Must have Dev Mode enabled

## Verification

After restarting Cursor, you can verify the connection by:

1. Opening Claude Code chat in Cursor
2. Asking: "What Figma resources are available?"
3. The MCP server should respond with available tools and resources

## Usage

Once configured, you can:

### Access Design Files
- **Get file metadata**: Retrieve information about Figma files
- **Fetch file content**: Get node hierarchies and components
- **Read design variables**: Access color tokens, typography, spacing

### Work with Components
- **Get component hierarchy**: Understand component structure
- **Extract design tokens**: Pull brand colors, fonts, spacing
- **Generate code**: Convert Figma components to code

### Brand Design Workflows
- Access AI Huevos brand files
- Extract design tokens for Tailwind/CSS
- Validate designs against brand guidelines
- Generate branded components from Figma designs

### Example Queries

- "Get the design variables from [Figma file URL]"
- "Extract color tokens from the AI Huevos brand file"
- "What components are available in [file name]?"
- "Convert this Figma frame to React component code"

## Troubleshooting

### MCP Server Not Connecting

1. **Check Token**: Ensure the FigMA_ACCESS_TOKEN is correctly set in `~/.cursor/mcp.json`
2. **Check Node.js**: Ensure Node.js is installed (`node --version`)
3. **Check Network**: Ensure you have internet connection (for remote server)
4. **Restart Cursor**: Fully quit and restart Cursor after configuration changes

### Package Not Found

If you see errors about `@modelcontextprotocol/server-figma`:
- The package should automatically download via npx
- If issues persist, try: `npx @modelcontextprotocol/server-figma --version` in terminal
- Ensure npx is available: `which npx`

### Permission Issues

If you see permission errors:
- Verify the Figma access token has proper permissions
- Check that you have access to the files you're trying to read
- Ensure your Figma account has Dev Mode access (Professional plan)

### Desktop Server Not Available

If using desktop server and it's not connecting:
- Ensure Figma Desktop app is running
- Verify Dev Mode is enabled (`Shift+D`)
- Check that MCP Server is enabled in Inspect panel
- Verify the URL `http://127.0.0.1:3845/mcp` is accessible

## Security Notes

⚠️ **Important**: 
- Never commit `~/.cursor/mcp.json` to version control with tokens
- The Figma access token provides access to all your Figma files
- If the token is compromised, revoke it immediately in Figma Settings
- The `.gitignore` already excludes `.cursor/` directories

## Integration with AI Huevos Brand

The Figma MCP is particularly useful for:
- **Brand token extraction**: Pull design tokens from Figma Variables
- **Component generation**: Convert Figma components to branded React/Tailwind
- **Design validation**: Check designs against `Brand/ai-huevos-brand/SKILL.md`
- **Asset management**: Access logos, egg characters, and brand assets

### Example Workflow

1. **Designer creates** in Figma using AI Huevos brand library
2. **Developer requests** design tokens via MCP: "Get colors from [Figma file]"
3. **MCP extracts** tokens and formats for Tailwind config
4. **Developer validates** against brand guidelines
5. **Components generated** with correct brand styling

## Additional Resources

- [Figma MCP Documentation](https://developers.figma.com/docs/figma-mcp-server/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [AI Huevos Brand Guidelines](../Brand/ai-huevos-brand/SKILL.md)

---

**Last Updated**: 2026-01-15  
**Maintained by**: AI Huevos Dev Team
