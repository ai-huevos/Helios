---
name: meeting-intelligence
description: Extract insights from Fireflies meeting transcripts. Use when analyzing founding team meetings, client calls, or extracting action items from Spanish/English conversations. Delegates to Fireflies MCP for transcript retrieval and analysis.
---

# Meeting Intelligence Skill

Analyze Fireflies meeting transcripts to extract insights, action items, decisions, and patterns from recorded conversations.

## When to Use

- Analyzing founding team meetings (e.g., Founding Team Sync recordings)
- Extracting client call insights for proposals
- Finding specific topics across multiple meetings
- Building knowledge graphs from conversations
- Identifying recurring themes or problems

## Quick Start

```
User: "Find all meetings about the DRUO project in December"

Process:
1. Use mcp__fireflies__fireflies_search with query: 'keyword:"DRUO" from:2024-12-01 to:2024-12-31'
2. Review results, get transcript IDs
3. Use mcp__fireflies__fireflies_fetch for detailed transcripts
4. Summarize findings
```

## MCP Tool Delegation

This skill wraps the **fireflies** MCP server tools:

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `mcp__fireflies__fireflies_search` | Advanced search with grammar | Complex queries, date ranges, multiple filters |
| `mcp__fireflies__fireflies_get_transcripts` | List transcripts with filters | Simple queries, recent meetings |
| `mcp__fireflies__fireflies_fetch` | Get full transcript by ID | After search, to get detailed content |
| `mcp__fireflies__fireflies_get_summary` | Get meeting summary | Quick overview without full transcript |
| `mcp__fireflies__fireflies_get_user` | User account details | Account info, activity stats |
| `mcp__fireflies__fireflies_get_user_contacts` | Contact list | Finding frequent collaborators |

### Search Grammar Syntax

```
# Simple keyword search
"standup"

# Advanced filters
keyword:"performance" scope:sentences limit:20

# Date ranges
from:2025-01-01 to:2025-01-15

# Participant filtering
participants:daniel@aihuevos.com,maria@aihuevos.com

# Organizer filtering
organizers:tomas@aihuevos.com

# User's meetings only
mine:true

# Combined example
keyword:"automation opportunities" scope:all from:2024-12-01 participants:daniel@aihuevos.com limit:10
```

### Response Formats

Use `format` parameter with compatible tools:
- `toon` (default) — Token-efficient format
- `json` — Standard JSON
- `text` — Human-readable

## Workflow Patterns

### Pattern 1: Topic Discovery
```
Goal: Find all mentions of a specific topic

1. Search with scope:sentences for content search
   → mcp__fireflies__fireflies_search('keyword:"automation" scope:sentences')

2. Get transcript IDs from results

3. Fetch detailed transcripts
   → mcp__fireflies__fireflies_fetch(transcriptId)

4. Extract relevant quotes and context
```

### Pattern 2: Client Research
```
Goal: Prepare for client meeting by reviewing past conversations

1. Search by participant email
   → mcp__fireflies__fireflies_get_transcripts(participants:["client@example.com"])

2. Get summaries for quick overview
   → mcp__fireflies__fireflies_get_summary(transcriptId)

3. Extract:
   - Key decisions made
   - Open action items
   - Recurring concerns
   - Technical requirements
```

### Pattern 3: Organizational Archaeology
```
Goal: Build knowledge graph from founding team meetings

1. Get all founding team meetings
   → mcp__fireflies__fireflies_search('participants:daniel@aihuevos.com,tomas@aihuevos.com mine:false')

2. For each meeting, extract entities:
   → Use org-archaeology skill patterns
   → Extract: people mentioned, processes discussed, problems identified

3. Build consolidated view across meetings

4. Generate diagnostic report
   → Use reports skill for formatting
```

### Pattern 4: Action Item Tracking
```
Goal: Find outstanding action items from recent meetings

1. Get recent transcripts
   → mcp__fireflies__fireflies_get_transcripts(fromDate:"2025-01-01", limit:20)

2. For each meeting, get summary
   → mcp__fireflies__fireflies_get_summary(transcriptId)
   → Summaries include action_items field

3. Consolidate action items by assignee

4. Filter for incomplete items
```

## Integration with Other Skills

### With `org-archaeology`
```
1. Fetch meeting transcripts (meeting-intelligence)
2. Extract entities using org-archaeology patterns
3. Build knowledge graph
4. Generate diagnostic report (reports skill)
```

### With `proposal-builder`
```
1. Search client meetings (meeting-intelligence)
2. Extract requirements and pain points
3. Draft proposal addressing specific needs (proposal-builder)
```

### With `internal-comms`
```
1. Analyze recent team meetings (meeting-intelligence)
2. Extract key decisions and updates
3. Draft stakeholder update email (internal-comms)
```

## Spanish Content Handling

**CRITICAL:** Fireflies transcripts may contain Spanish content. Never translate Spanish to English.

```json
// Good — preserve Spanish
{
  "quote": "Necesitamos automatizar el proceso de facturación",
  "speaker": "María García",
  "topic": "automation_opportunities"
}

// Bad — don't translate
{
  "quote": "We need to automate the billing process",  // ❌ WRONG
  "speaker": "María García",
  "topic": "automation_opportunities"
}
```

## Quality Standards

- [ ] Always cite meeting date and participants
- [ ] Preserve exact quotes (especially Spanish content)
- [ ] Link action items to specific speakers
- [ ] Note confidence level for extracted insights
- [ ] Cross-reference across multiple meetings when claiming patterns

## Output Examples

### Example 1: Meeting Summary
```markdown
## Founding Team Sync — 2025-01-15

**Participants:** Daniel, Tomás, María
**Duration:** 45 minutes
**Key Topics:** DRUO automation, brand guidelines, investor deck

### Decisions Made
1. Prioritize DRUO chatbot integration over new features
2. Finalize brand colors by EOW
3. Target Feb 1 for investor deck v1

### Action Items
- [ ] Daniel: Draft DRUO technical spec (Due: Jan 20)
- [ ] Tomás: Review brand color palette (Due: Jan 18)
- [ ] María: Research investor presentation templates (Due: Jan 22)

### Key Quotes
> "Pa' emprender se necesitan huevos, pero también se necesita un buen proceso."
> — Tomás (discussing automation philosophy)

### Next Meeting: Jan 22, 2025
```

### Example 2: Cross-Meeting Pattern Analysis
```markdown
## Automation Opportunities (Last 30 Days)

**Meetings Analyzed:** 12 founding team syncs
**Date Range:** Dec 15, 2024 - Jan 15, 2025

### Recurring Themes
1. **Manual Data Entry** (mentioned in 8/12 meetings)
   - Invoice processing (DRUO)
   - Customer onboarding (Comversa)
   - Meeting notes consolidation

2. **Tool Fragmentation** (mentioned in 6/12 meetings)
   - WhatsApp, Slack, Email for client comms
   - Multiple calendaring systems
   - Disconnected CRM and project tools

3. **Reporting Overhead** (mentioned in 5/12 meetings)
   - Weekly status reports (3 hours/week)
   - Client dashboards (manual updates)

### Priority Score
Based on frequency + estimated time savings + strategic value
1. Invoice processing automation (Score: 8.5/10)
2. Unified comms platform (Score: 7.2/10)
3. Automated status reports (Score: 6.8/10)
```

## Error Handling

### No Results Found
```
If search returns no results:
1. Broaden scope (scope:all instead of scope:sentences)
2. Remove date filters
3. Try alternate keywords
4. Suggest checking participant email spelling
```

### Transcript Not Available
```
If fetch fails:
1. Verify transcript ID from search results
2. Check user permissions (mine:true filter)
3. Try getting summary instead (may be available when full transcript isn't)
```

## Limitations

- **Requires Fireflies API access** — must be configured in MCP settings
- **Transcript availability** — depends on Fireflies retention policy
- **Search accuracy** — keyword matching may miss semantic variations
- **Language detection** — Fireflies may mis-transcribe Spanish/English code-switching
