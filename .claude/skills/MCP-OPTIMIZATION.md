# MCP Context Optimization Guide

Free up 39k tokens (19.5% of total context) by disabling redundant MCP servers that are now wrapped in on-demand skills.

## Current MCP Servers

```bash
✓ morphllm-fast-apply   # Keep - no skill replacement
✗ tavily                # Failed to connect - can disable
✓ magic                 # CANDIDATE: Wrapped by ui-components skill
✓ chrome-devtools       # CANDIDATE: Wrapped by browser-testing skill (22k tokens!)
✓ context7              # CANDIDATE: Wrapped by web-research skill
✓ sequential-thinking   # Keep - complex reasoning, frequently used
✓ playwright            # CANDIDATE: Wrapped by browser-testing skill (17k tokens!)
✓ serena                # Keep - core semantic code operations
✓ fireflies             # CANDIDATE: Wrapped by meeting-intelligence skill
```

## Optimization Strategy

### Phase 1: Safe Removals (Immediate - 39k tokens saved)

**Remove these heavy, rarely-used servers:**

| Server | Tokens | Reason | Skill Replacement |
|--------|--------|--------|-------------------|
| `chrome-devtools` | ~22k | Rarely used for AI Huevos brand work | `browser-testing` skill |
| `playwright` | ~17k | Rarely used, redundant with chrome-devtools | `browser-testing` skill |
| `tavily` | ~1k | Failed to connect, not functional | None (web search available) |

**Total savings: ~40k tokens → Usage drops from 65% to 46%**

### Phase 2: Conditional Removals (Evaluate usage)

**Consider removing these if you use skills instead:**

| Server | Tokens | Decision | Notes |
|--------|--------|----------|-------|
| `magic` | ~3.5k | **Keep for now** | ui-components skill needs real-time 21st.dev access |
| `context7` | ~2k | **Keep for now** | web-research skill needs real-time docs lookup |
| `fireflies` | ~6k | **Keep for now** | meeting-intelligence skill needs API access |

**Rationale:** These servers provide dynamic data (component library, docs, transcripts). Skills are wrappers, not replacements. Removing them breaks functionality.

### Servers to Always Keep

| Server | Tokens | Why Critical |
|--------|--------|-------------|
| `serena` | ~28k | Core semantic code operations, project memory, can't be wrapped in a skill |
| `sequential-thinking` | ~1.6k | Complex reasoning, frequently used, minimal overhead |
| `morphllm-fast-apply` | ~1k | Specialized tool, no overhead concern |

---

## How to Disable MCP Servers

### Option 1: CLI (Recommended)
```bash
# Open MCP settings
claude mcp

# In the MCP UI:
# 1. Find "chrome-devtools" → Click "Disable" or "Remove"
# 2. Find "playwright" → Click "Disable" or "Remove"
# 3. Find "tavily" → Click "Remove" (already failed)
# 4. Save changes
# 5. Restart Claude Code session
```

### Option 2: Edit Config File Directly
```bash
# Find your MCP config location
# macOS: ~/.config/claude-code/mcp.json
# Linux: ~/.config/claude-code/mcp.json
# Windows: %APPDATA%\claude-code\mcp.json

# Edit the file and remove these entries:
{
  "mcpServers": {
    // Remove or comment out these:
    // "chrome-devtools": {...},
    // "playwright": {...},
    // "tavily": {...}
  }
}

# Save and restart Claude Code
```

### Option 3: Temporary Disable (Test Before Committing)
```bash
# Rename servers to disable them without deleting config
# In mcp.json:
{
  "mcpServers": {
    "_disabled_chrome-devtools": {...},  // Add "_disabled_" prefix
    "_disabled_playwright": {...},
    "_disabled_tavily": {...}
  }
}
```

---

## Verification Checklist

After disabling servers, verify skills still work:

### ✅ Test browser-testing skill
```
Task: "Test the InvestorRoom on mobile viewport"

Expected behavior:
- Skill activates
- Claude explains: "browser-testing skill requires Playwright MCP server"
- You can re-enable playwright if needed for specific testing tasks
```

**Alternative:** Keep Playwright disabled. Use manual testing or re-enable only when needed.

### ✅ Test ui-components skill
```
Task: "Create a contact form component"

Expected behavior:
- Skill activates
- Calls mcp__magic__21st_magic_component_builder
- Returns component code
```

**Status:** Should work fine (magic server still enabled)

### ✅ Test web-research skill
```
Task: "How do I use React Server Components?"

Expected behavior:
- Skill activates
- Calls mcp__context7__resolve-library-id
- Calls mcp__context7__query-docs
- Returns official Next.js patterns
```

**Status:** Should work fine (context7 server still enabled)

### ✅ Test meeting-intelligence skill
```
Task: "Find meetings about automation in December"

Expected behavior:
- Skill activates
- Calls mcp__fireflies__fireflies_search
- Returns meeting transcripts
```

**Status:** Should work fine (fireflies server still enabled)

---

## Browser Testing Alternative Approach

Since browser-testing skill requires heavy MCP servers (chrome-devtools + playwright), consider these alternatives:

### Option A: On-Demand Activation (Recommended)
```
Keep servers disabled by default.
When you need browser testing:
1. Re-enable playwright in MCP config
2. Restart Claude Code
3. Run tests
4. Disable again after testing session
```

### Option B: Manual Testing Workflow
```
For InvestorRoom development:
1. npm run dev
2. Open browser manually
3. Test UI manually
4. Take screenshots manually
5. Report issues to Claude for fixing

Pro: No MCP overhead
Con: More manual work
```

### Option C: External Testing Tools
```
Use dedicated testing setup:
1. Playwright test scripts in InvestorRoom/tests/
2. Run with: npx playwright test
3. Claude writes test files, you execute locally

Pro: Professional testing setup
Con: Requires test file maintenance
```

**Recommendation for AI Huevos:** Use **Option A** (on-demand). Browser testing isn't a daily task for brand/documentation work. Re-enable when building InvestorRoom features.

---

## Context Usage Projection

### Before Optimization
```
Total: 130k/200k (65%)
├─ MCP tools: 63.8k (31.9%)
│  ├─ chrome-devtools: ~22k
│  ├─ playwright: ~17k
│  ├─ serena: ~28k
│  ├─ fireflies: ~6k
│  ├─ magic: ~3.5k
│  └─ others: ~7.3k
├─ System tools: 16.5k (8.3%)
├─ System prompt: 2.6k (1.3%)
├─ Custom agents: 493 (0.2%)
├─ Memory files: 1.3k (0.7%)
└─ Messages: 749 (0.4%)

Free space: 70k (35%)
```

### After Phase 1 Optimization (Remove chrome-devtools, playwright, tavily)
```
Total: ~91k/200k (46%)
├─ MCP tools: ~24.8k (12.4%)  ← 61% reduction!
│  ├─ serena: ~28k
│  ├─ fireflies: ~6k
│  ├─ magic: ~3.5k
│  ├─ context7: ~2k
│  └─ others: ~5.3k
├─ System tools: 16.5k (8.3%)
├─ System prompt: 2.6k (1.3%)
├─ Custom agents: 493 (0.2%)
├─ Memory files: 1.3k (0.7%)
└─ Messages: 749 (0.4%)

Free space: 109k (54.5%)  ← 56% more headroom!
```

**Impact:**
- 39k tokens freed
- Context usage: 65% → 46%
- Free space: 35% → 54.5%
- Enough for 2.6x longer conversations or larger file reads

---

## When to Re-Enable Servers

### chrome-devtools
```
Scenarios:
- Need Chrome-specific debugging (console logs, network inspection)
- Performance profiling (trace recording)
- Testing browser-specific issues

Re-enable: Rarely (monthly or less for AI Huevos)
```

### playwright
```
Scenarios:
- Automated UI testing for InvestorRoom
- Screenshot capture for documentation
- Form validation testing
- Responsive design verification

Re-enable: Occasionally (when building UI features)
```

### tavily
```
Scenarios:
- Web search tasks (already have WebSearch tool built-in)

Re-enable: Never (failed to connect, redundant)
```

---

## FAQ

### Q: Will skills break if I disable their MCP servers?
**A:** Depends on the skill:
- **browser-testing** → Yes, requires playwright or chrome-devtools
- **ui-components** → No, still needs magic MCP for 21st.dev API
- **web-research** → No, still needs context7 MCP for docs API
- **meeting-intelligence** → No, still needs fireflies MCP for transcript API

**Strategy:** Only disable browser automation servers (chrome-devtools, playwright). Keep data-fetching servers (magic, context7, fireflies).

### Q: How do I know if a skill needs its MCP server?
**A:** Check the skill's "MCP Tool Delegation" section:
- If tools fetch external data (API calls) → Server required
- If tools perform local operations → Server could be optional

**browser-testing is unique:** It's purely operational (no external data), so it's safe to disable when not actively testing.

### Q: Can I disable serena MCP?
**A:** **No.** Serena provides core semantic code operations (symbol search, refactoring, project memory). It's not wrapped in a skill because it's foundational, not domain-specific.

### Q: What if I need browser testing urgently?
**A:**
1. Open MCP config: `claude mcp`
2. Re-enable playwright
3. Restart Claude Code (~30 seconds)
4. Run tests
5. Disable again after session

---

## Recommended Configuration

### Minimal Setup (AI Huevos Brand Work)
```json
{
  "mcpServers": {
    "serena": {...},           // Core code ops
    "context7": {...},         // Docs lookup
    "fireflies": {...},        // Meeting transcripts
    "magic": {...},            // UI components
    "sequential-thinking": {...} // Complex reasoning
  }
}
```

**Use case:** Daily brand work, documentation, proposal writing
**Context usage:** ~46%
**Free space:** 54.5%

### Extended Setup (InvestorRoom Development)
```json
{
  "mcpServers": {
    "serena": {...},
    "context7": {...},
    "fireflies": {...},
    "magic": {...},
    "sequential-thinking": {...},
    "playwright": {...}        // Add for UI testing
  }
}
```

**Use case:** Active InvestorRoom feature development
**Context usage:** ~54%
**Free space:** 46%

### Full Setup (Browser Debugging)
```json
{
  "mcpServers": {
    "serena": {...},
    "context7": {...},
    "fireflies": {...},
    "magic": {...},
    "sequential-thinking": {...},
    "playwright": {...},
    "chrome-devtools": {...}   // Add for deep debugging
  }
}
```

**Use case:** Troubleshooting browser-specific issues
**Context usage:** ~65%
**Free space:** 35%

---

## Next Steps

1. **Backup current MCP config** (just in case):
   ```bash
   cp ~/.config/claude-code/mcp.json ~/.config/claude-code/mcp.json.backup
   ```

2. **Disable chrome-devtools and playwright**:
   ```bash
   claude mcp
   # Disable both servers in UI
   ```

3. **Restart Claude Code session**:
   ```bash
   /clear  # Clear current session
   /context  # Check new context usage (should be ~46%)
   ```

4. **Test skills**:
   - "How do I use React hooks?" (web-research)
   - "Create a pricing table" (ui-components)
   - "Find meetings about DRUO" (meeting-intelligence)

5. **Document your decision** in project memory:
   ```bash
   # Claude will save this for you
   "MCP optimization: Disabled chrome-devtools and playwright.
   Re-enable playwright only when actively developing InvestorRoom UI."
   ```

---

**Created:** 2025-01-17
**Status:** Ready to implement
**Impact:** 39k tokens freed (19.5% reduction)
