# MCP Server Setup Options - Efficiency Guide

**Last Updated**: 2026-01-15

---

## Current Setup Analysis

Your current configuration uses **npx** which automatically runs the MCP server on-demand:

```json
{
  "figma": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-figma"],
    "env": {
      "FIGMA_ACCESS_TOKEN": "your_token"
    }
  }
}
```

**How it works**: Cursor calls `npx` → downloads package if needed → runs server → server handles requests → server stops when Cursor closes.

---

## Option 1: Figma Remote Server - ✅ MOST EFFICIENT (Recommended)

**Uses Figma's official hosted MCP server** - No npm package needed!

### Configuration
```json
{
  "figma": {
    "url": "https://mcp.figma.com/mcp"
  }
}
```

### Setup Steps
1. Add config above to `~/.cursor/mcp.json`
2. Restart Cursor
3. **First use**: Cursor will prompt for OAuth authentication with Figma
4. Authorize Cursor to access Figma
5. Done! No tokens needed, OAuth handles it

### Pros
- ✅ **Zero setup** - Just add URL, OAuth handles auth
- ✅ **Official** - Hosted by Figma, always up-to-date
- ✅ **No npm packages** - No downloads or installations
- ✅ **OAuth security** - More secure than tokens
- ✅ **Works everywhere** - Same config on any machine
- ✅ **No maintenance** - Figma maintains the server

### Cons
- ❌ **Requires internet** - Needs connection to Figma's servers
- ❌ **Link-based only** - Use Figma file/frame URLs for context

### Status
**✅ RECOMMENDED - This is the most efficient setup!**

---

## Option 2: Figma Desktop MCP Server - ⚡ BEST PERFORMANCE (Alternative)

### Setup
1. Open **Figma Desktop** app
2. Enable **Dev Mode** (`Shift+D`)
3. In Inspect panel → **MCP Server** → Toggle **ON**
4. Note URL: `http://127.0.0.1:3845/mcp`

### Configuration
Update `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "fireflies": {
      "url": "https://api.fireflies.ai/mcp",
      "headers": {
        "Authorization": "Bearer your_token"
      }
    },
    "figma": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

**No token needed** - Desktop app handles authentication automatically.

### Pros
- ✅ **Fastest** - Local connection, no network latency
- ✅ **Offline capable** - Works with files already loaded
- ✅ **Selection-based** - Select elements in Figma for context
- ✅ **No downloads** - Server already running in desktop app

### Cons
- ❌ **Requires Figma Desktop** - Must keep app running
- ❌ **Dev Mode required** - Must enable Dev Mode
- ❌ **One machine only** - Tied to your local desktop

### When to Use
**Best for**: Heavy design-to-code work, frequent Figma usage, offline needs

---

## Option 3: Third-Party npm Package - 🔧 MORE CONTROL (Not Recommended)

**Note**: These are community packages, not official. Use with caution.

### Available Packages
- `figma-developer-mcp` (Framelink)
- `@jayarrowz/mcp-figma`
- `@imazhar101/mcp-figma-server`

### Example Setup (figma-developer-mcp)
```bash
npm install -g figma-developer-mcp
```

```json
{
  "figma": {
    "command": "npx",
    "args": [
      "-y",
      "figma-developer-mcp",
      "--stdio",
      "--figma-api-key=YOUR_TOKEN"
    ]
  }
}
```

### Pros
- ✅ More control over server behavior
- ✅ Can customize features

### Cons
- ❌ **Not official** - Community maintained
- ❌ **Security concerns** - Some packages had vulnerabilities
- ❌ **Less reliable** - May break with Figma updates
- ❌ **Extra setup** - Requires npm install

### Status
**⚠️ NOT RECOMMENDED** - Use official remote or desktop server instead.

### Setup
```bash
npm install -g @modelcontextprotocol/server-figma
```

### Configuration
Update `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "mcp-server-figma",
      "env": {
        "FIGMA_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

### Pros
- ✅ **Faster startup** - Package already installed
- ✅ **Version control** - Pin specific version if needed
- ✅ **Works offline** - No download needed after install

### Cons
- ❌ **Requires maintenance** - Manual updates needed
- ❌ **Global install** - Shared across projects
- ❌ **Extra step** - Must install first

### When to Use
**Best for**: Teams wanting version consistency, avoiding npx delays

---

## Option 4: Project-Local Installation - 🏗️ TEAM CONSISTENCY (Third-Party Only)

### Setup
```bash
cd "/Users/tatooine/Documents/Development/AI huevos"
npm init -y  # if package.json doesn't exist
npm install --save-dev @modelcontextprotocol/server-figma
```

### Configuration
Update `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "node",
      "args": [
        "node_modules/@modelcontextprotocol/server-figma/dist/index.js"
      ],
      "cwd": "/Users/tatooine/Documents/Development/AI huevos",
      "env": {
        "FIGMA_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

### Pros
- ✅ **Version locked** - Same version for all team members
- ✅ **Project-specific** - Different versions per project
- ✅ **Commit to repo** - Version tracked in package.json

### Cons
- ❌ **Most complex** - Requires Node.js project setup
- ❌ **Larger footprint** - Adds node_modules to project
- ❌ **Manual updates** - Must update package.json

### When to Use
**Best for**: Teams requiring exact version matching, multiple projects

---

## Recommendation: Choose Based on Your Needs

### 🎯 Quick Start (HIGHLY RECOMMENDED)
**Use Option 1 (Figma Remote Server)** - Official, secure, zero setup. Just add URL and authenticate via OAuth.

### ⚡ Best Performance
**Use Option 2 (Desktop Server)** - If you use Figma Desktop regularly and need selection-based context.

### ⚠️ Avoid Third-Party Packages
**Option 3 & 4** - Only use if you need specific features not available in official servers.

---

## Quick Test: Is npx Working?

Run this to verify npx can access the package:

```bash
npx -y @modelcontextprotocol/server-figma --help
```

If this works, your current setup should work fine!

---

## Troubleshooting npx Issues

### Issue: "Command not found" or "npx not available"

**Solution**: Ensure npx is in your PATH. Since you have Node.js v25.0.0 installed, this should work. Verify:
```bash
which npx  # Should show: /Users/tatooine/.nvm/versions/node/v25.0.0/bin/npx
```

If missing, ensure nvm is properly sourced in your shell config.

---

### Issue: Slow startup / downloads every time

**Solutions**:
1. **Use Desktop Server** (Option 2) - Fastest, no downloads
2. **Global install** (Option 3) - Package cached locally
3. **Keep Cursor open** - Server stays running while Cursor is open

---

### Issue: "Unauthorized" errors

**Solution**: 
1. Verify token in `~/.cursor/mcp.json`
2. Check token is valid in Figma Settings
3. Ensure token hasn't been revoked

---

## Efficiency Comparison

| Option | Setup Time | Startup Speed | Maintenance | Performance | Security | Best For |
|--------|------------|---------------|-------------|-------------|----------|----------|
| **Remote Server** | 1 min | Fast | None | Good | Best (OAuth) | Most users ⭐ |
| **Desktop Server** | 2 min | Fastest | None | Best | Good | Heavy Figma users |
| **Third-Party npm** | 5 min | Medium | Manual | Good | Variable | Avoid ⚠️ |

---

## Action Plan

### ✅ RECOMMENDED: Use Figma Remote Server (Option 1)
1. **Update config** to use `https://mcp.figma.com/mcp`
2. **Restart Cursor**
3. **First use**: OAuth will prompt - authenticate with Figma
4. **Done!** No tokens, no npm, no maintenance

### ⚡ Alternative: Desktop Server (Option 2)
If you need better performance and selection-based context:
1. Open Figma Desktop
2. Enable Dev Mode (`Shift+D`)
3. Enable MCP Server in Inspect panel
4. Update config to use `http://127.0.0.1:3845/mcp`
5. **No OAuth needed** - Desktop app handles auth

---

## Current Status Check

Your setup:
- ✅ Node.js installed (v25.0.0)
- ✅ npx available
- ✅ Figma token configured
- ✅ MCP config file exists

**Next Step**: Test if it's working!

```bash
# Test npx can access package
npx -y @modelcontextprotocol/server-figma --help

# Then restart Cursor and ask:
# "What Figma resources are available?"
```

---

**Key Insight**: For most users, **Figma Remote Server (Option 1) is the most efficient** - official, secure OAuth, zero maintenance, works everywhere. Desktop Server (Option 2) is best for performance and selection-based workflows.
