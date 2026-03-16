# Fireflies MCP Server Setup

This guide explains how to configure the Fireflies MCP server to access meeting transcripts and brand assets within Claude Code (Cursor).

## What is Fireflies MCP?

The Fireflies MCP (Model Context Protocol) server allows Claude Code to securely access:
- **Meeting transcripts** - All your AI Huevos venture meetings
- **Meeting summaries** - AI-generated summaries and insights
- **Brand context** - Solid base of brand knowledge from meetings

## Configuration

The Fireflies MCP server is configured in `~/.cursor/mcp.json`. The configuration has been created with the following structure:

```json
{
  "mcpServers": {
    "fireflies": {
      "url": "https://api.fireflies.ai/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_FIREFLIES_API_KEY_HERE"
      }
    }
  }
}
```

**Note**: This uses Fireflies' hosted MCP server, which is the recommended approach. The server URL is `https://api.fireflies.ai/mcp`.

## Getting Your Fireflies API Key

1. **Log in to Fireflies.ai**
   - Go to https://fireflies.ai
   - Sign in to your account

2. **Navigate to Developer Settings**
   - Click on your profile/settings
   - Go to **Settings → Developer** (or **Integrations → Developer**)

3. **Generate API Key**
   - Look for "API Key" or "Developer API Key"
   - Click "Generate" or "Create API Key"
   - Copy the API key (it will look like: `ff_xxxxx...`)

4. **Add API Key to Configuration**
   - Open `~/.cursor/mcp.json` in a text editor
   - Replace `YOUR_FIREFLIES_API_KEY_HERE` with your actual API key (keep the "Bearer " prefix)
   - Save the file

   Example:
   ```json
   {
     "mcpServers": {
       "fireflies": {
         "url": "https://api.fireflies.ai/mcp",
         "headers": {
           "Authorization": "Bearer ff_abc123def456..."
         }
       }
     }
   }
   ```

5. **Restart Cursor**
   - Close and reopen Cursor completely for the MCP server to connect

## Verification

After restarting Cursor, you can verify the connection by:

1. Opening Claude Code chat in Cursor
2. Asking: "What meeting transcripts are available from Fireflies?"
3. The MCP server should respond with available resources

## Usage

Once configured, you can:

- **Access meeting transcripts**: Ask Claude to retrieve specific meeting transcripts
- **Search meetings**: Query meetings by date, participants, or topics
- **Get summaries**: Request AI-generated summaries of meetings
- **Brand context**: Access brand knowledge captured in meetings

### Example Queries

- "Show me the transcript from the last meeting about brand strategy"
- "What was discussed in meetings with Daniel about the co-CEO role?"
- "Get all meeting summaries from this month"
- "What brand guidelines were discussed in recent meetings?"

## Troubleshooting

### MCP Server Not Connecting

1. **Check API Key**: Ensure the API key is correctly set in `~/.cursor/mcp.json`
2. **Check Node.js**: Ensure Node.js is installed (`node --version`)
3. **Check Network**: Ensure you have internet connection (npx downloads the package)
4. **Restart Cursor**: Fully quit and restart Cursor after configuration changes

### Connection Errors

If you see connection errors:
- Verify the URL `https://api.fireflies.ai/mcp` is accessible
- Check that your API key is correctly formatted with "Bearer " prefix
- Ensure your Fireflies account has API access enabled

### Permission Issues

If you see permission errors:
- Ensure you have read/write access to `~/.cursor/` directory
- Check that the Fireflies API key has proper permissions in your Fireflies account

## Security Notes

⚠️ **Important**: 
- Never commit `~/.cursor/mcp.json` to version control
- The API key provides access to all your Fireflies data
- If the key is compromised, revoke it immediately in Fireflies settings
- The `.gitignore` already excludes `.cursor/` directories

## Alternative: Using npx Command-Based Setup

If the URL-based approach doesn't work with your Cursor version, you can use the command-based approach:

1. Update `~/.cursor/mcp.json`:
   ```json
   {
     "mcpServers": {
       "fireflies": {
         "command": "npx",
         "args": [
           "-y",
           "mcp-remote",
           "https://api.fireflies.ai/mcp",
           "--header",
           "Authorization: Bearer YOUR_FIREFLIES_API_KEY_HERE"
         ]
       }
     }
   }
   ```

2. Replace `YOUR_FIREFLIES_API_KEY_HERE` with your actual API key
3. Restart Cursor

**Note**: The URL-based approach (current configuration) is recommended and simpler.

## Additional Resources

- [Fireflies MCP Documentation](https://docs.fireflies.ai/getting-started/mcp-configuration)
- [Fireflies API Documentation](https://docs.fireflies.ai/)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)

---

**Last Updated**: 2026-01-14
**Maintained by**: AI Huevos Dev Team
