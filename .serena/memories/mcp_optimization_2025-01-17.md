# MCP Optimization - January 17, 2025

## Changes Made
Removed 3 MCP servers to free context:
- **chrome-devtools** (~22k tokens) - Browser debugging, rarely used for brand work
- **playwright** (~17k tokens) - Browser automation, redundant with chrome-devtools
- **tavily** (~1k tokens) - Web search, failed to connect

**Total savings:** ~40k tokens (19.5% of total context)

## Remaining MCP Servers
1. **serena** - Core semantic code operations, project memory (essential)
2. **magic** - UI component generation for InvestorRoom (ui-components skill)
3. **context7** - Documentation lookup (web-research skill)
4. **sequential-thinking** - Complex reasoning (minimal overhead)
5. **fireflies** - Meeting transcript analysis (meeting-intelligence skill)
6. **morphllm-fast-apply** - Specialized tool (minimal overhead)

## Impact
- **Before:** 130k/200k tokens (65% usage)
- **After:** ~91k/200k tokens (46% usage)
- **Free space:** 35% → 54.5% (+56% more headroom)

## Skills Created
All MCP tools now wrapped in organized skills:
- `web-research` (context7) - Documentation and API references
- `meeting-intelligence` (fireflies) - Transcript analysis
- `ui-components` (magic) - React/Next.js component generation
- `browser-testing` (playwright/chrome-devtools) - UI testing (offline until re-enabled)

## Re-Enabling Browser Testing
If InvestorRoom UI testing is needed:
```bash
# Add back playwright only (lighter than chrome-devtools)
claude mcp add --transport stdio playwright -- npx -y @playwright/mcp@latest

# Or restore from backup
cp ~/.claude.json.backup ~/.claude.json
```

## Decision Rationale
AI Huevos focuses on brand guidelines, documentation, and strategic work. Browser automation is needed only occasionally (when building InvestorRoom features). On-demand re-enabling is more efficient than permanent context overhead.

## Next Review
Re-evaluate MCP configuration when:
- InvestorRoom development becomes primary focus
- New MCP servers are added
- Context usage exceeds 70%
