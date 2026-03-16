# MCP to Skills Migration Guide

This guide explains how AI Huevos transformed raw MCP servers into organized, domain-specific Claude skills following Anthropic's official skill pattern.

## Why Skills > Direct MCP Access

| Aspect | Raw MCP Tools | Organized Skills |
|--------|--------------|------------------|
| **Discovery** | 87 tools in flat list | 4 domain skills with clear activation |
| **Context** | Generic tool descriptions | Workflow patterns, examples, integration guides |
| **Learning curve** | Must study each tool | Follow skill patterns, copy examples |
| **Token usage** | All tools loaded always | Skills activate on-demand |
| **Maintenance** | Update tool calls everywhere | Update skill patterns once |

## Architecture Overview

### Before: Direct MCP Access
```
User request → Claude scans 87 MCP tools → Guesses which to use → Calls tool
```

### After: Skill-Based Delegation
```
User request → Skill activates → Skill provides workflow → Delegates to MCP tools
```

## Skill Structure (Anthropic Pattern)

Every skill follows this structure:

```
skill-name/
├── SKILL.md              # Required - frontmatter + instructions
├── references/           # Optional - detailed docs
├── assets/               # Optional - templates, files
└── examples/             # Optional - code samples
```

### SKILL.md Template
```yaml
---
name: skill-identifier
description: When Claude should activate this skill
---

# Skill Name

What the skill does and why it exists.

## When to Use

Clear activation triggers.

## MCP Tool Delegation

Which MCP tools this skill wraps and when to use them.

## Workflow Patterns

Step-by-step processes with concrete examples.

## Integration with Other Skills

How this skill composes with others.

## Quality Standards

Checklists and validation criteria.
```

## Created Skills

### 1. `web-research` (Context7 MCP)

**Replaces:** Direct calls to `mcp__context7__*` tools

**Activation triggers:**
- "How do I use [library/framework]?"
- "Show me React Server Components pattern"
- "What's the Next.js API for..."

**Key patterns:**
```javascript
// Before (direct MCP)
mcp__context7__resolve-library-id("react")
mcp__context7__query-docs("/facebook/react", "hooks")

// After (skill-based)
User: "How do I use React hooks?"
→ web-research skill activates
→ Follows 2-step pattern: resolve → query
→ Returns official docs with version context
```

**Benefits:**
- 3-call limit to manage token usage
- Always resolves library ID first (unless user provides `/org/project`)
- Includes version info in responses
- Integration with coding workflows

---

### 2. `meeting-intelligence` (Fireflies MCP)

**Replaces:** Direct calls to `mcp__fireflies__*` tools

**Activation triggers:**
- "Find meetings about [topic]"
- "Extract action items from last week's calls"
- "Analyze founding team discussions"

**Key patterns:**

#### Pattern 1: Topic Discovery
```
Goal: Find all mentions of "automation"

Workflow:
1. Search with scope:sentences
2. Get transcript IDs
3. Fetch detailed transcripts
4. Extract quotes and context
```

#### Pattern 2: Org Archaeology Integration
```
Goal: Build knowledge graph from meetings

Workflow:
1. Search founding team meetings
2. For each meeting, extract entities (org-archaeology patterns)
3. Build consolidated view
4. Generate diagnostic report (reports skill)
```

**Benefits:**
- Spanish content preservation (never translates)
- Search grammar syntax reference
- Cross-meeting pattern analysis
- Integration with existing skills (org-archaeology, reports, proposals)

---

### 3. `ui-components` (Magic MCP)

**Replaces:** Direct calls to `mcp__magic__*` tools

**Activation triggers:**
- "Create a [component type]"
- "Show me card layout examples"
- "/ui improve the hero section"
- "/logo GitHub Discord"

**Key patterns:**

#### Component Builder Flow
```
User: "Create a contact form"

1. Generate searchQuery: "contact form" (2-4 words)
2. Call mcp__magic__21st_magic_component_builder
3. Receive component code
4. CRITICAL: Edit/Write to integrate snippet into InvestorRoom
5. Adjust colors to brand guidelines
6. Test in dev server
```

#### Refiner Flow
```
User: "/ui make the hero more modern"

1. Identify file: SynthesisHero.jsx
2. Extract context: "improve styling and layout"
3. Call component_refiner
4. Edit SynthesisHero.jsx with improved code
```

**Benefits:**
- Brand guidelines integration (AI Huevos colors, typography)
- InvestorRoom file structure guidance
- Quality checklists (accessibility, responsiveness)
- Post-generation adjustment patterns

---

### 4. `browser-testing` (Playwright + Chrome DevTools MCPs)

**Replaces:** Direct calls to `mcp__playwright__*` and `mcp__chrome-devtools__*` tools

**Activation triggers:**
- "Test the InvestorRoom contact form"
- "Take screenshots for documentation"
- "Check for console errors"
- "Test mobile responsiveness"

**Key patterns:**

#### Visual Regression Test
```
1. Navigate to page
2. Take baseline screenshot
3. Make code changes
4. Take comparison screenshot
5. Compare manually or with tool
```

#### Multi-Persona Layout Test (InvestorRoom-specific)
```
For each persona (/visionary, /operator, /polish):
1. Navigate to route
2. Take snapshot
3. Verify persona-specific components
4. Capture screenshots
```

**Benefits:**
- Playwright vs Chrome DevTools decision matrix
- InvestorRoom testing workflows
- Pre-deployment checklists
- Integration with ui-components skill (test generated components)

---

## Skill Composition Examples

### Example 1: Complete Feature Development
```
Task: Add a new "Success Cases" section to InvestorRoom

Skills used:
1. ui-components → Generate testimonial cards
2. browser-testing → Test responsiveness
3. [Implied] AI Huevos brand → Verify color compliance
```

### Example 2: Client Research → Proposal
```
Task: Prepare proposal for new client

Skills used:
1. meeting-intelligence → Search past client calls
2. org-archaeology → Extract pain points and processes
3. proposal-builder → Draft SOW addressing specific needs
4. writing-review → Proofread before sending
```

### Example 3: Founding Team Sync → Status Update
```
Task: Send weekly update to investors

Skills used:
1. meeting-intelligence → Analyze last week's team meetings
2. org-archaeology → Extract key decisions and patterns
3. internal-comms → Draft investor update email
4. writing-review → Polish tone and clarity
```

## Migration Checklist

When converting MCP tools to skills:

- [ ] **Clear activation description** — When should Claude use this skill?
- [ ] **Tool delegation table** — Which MCP tools map to which use cases?
- [ ] **Workflow patterns** — Step-by-step processes with examples
- [ ] **Integration points** — How does this compose with other skills?
- [ ] **Quality standards** — Validation checklists
- [ ] **Limitations** — What can't this skill do?
- [ ] **Project-specific context** (if applicable) — InvestorRoom structure, brand guidelines, etc.

## Best Practices

### 1. Start with Activation Triggers
```yaml
# Good
description: Extract business intelligence from Spanish interviews to build knowledge graphs and identify automation opportunities. AI Huevos core methodology. Use when processing interview transcripts, building entity maps, or conducting organizational diagnostics.

# Bad
description: Process interviews
```

### 2. Provide Concrete Examples
```markdown
## Examples

### Example 1: Creating a Pricing Table
[Full workflow with code snippets]

### Example 2: Refining Existing Component
[Full workflow with before/after]
```

### 3. Include Integration Patterns
```markdown
## Integration with Other Skills

### With `org-archaeology`
1. Fetch meeting transcripts (meeting-intelligence)
2. Extract entities using org-archaeology patterns
3. Build knowledge graph
4. Generate diagnostic report (reports skill)
```

### 4. Add Quality Checklists
```markdown
## Quality Standards

- [ ] Spanish content preserved (never translated)
- [ ] Action items linked to speakers
- [ ] Cross-referenced across multiple meetings
- [ ] Confidence levels assigned
```

### 5. Document Limitations
```markdown
## Limitations

- **Requires Fireflies API access** — must be configured in MCP settings
- **Search accuracy** — keyword matching may miss semantic variations
- **Language detection** — may mis-transcribe Spanish/English code-switching
```

## Context Optimization Impact

### Before Skills
- MCP tools: 63.8k tokens (31.9%)
- chrome-devtools: ~22k tokens (rarely used)
- playwright: ~17k tokens (rarely used)
- Total usage: 130k/200k (65%)

### After Skills (Recommended MCP Cleanup)
Remove chrome-devtools and playwright from MCP config (browser-testing skill activates on-demand):
- MCP tools: ~24.8k tokens (12.4%)
- Total usage: ~91k/200k (46%)
- **Savings: 39k tokens (19.5%)**

### How to Disable MCP Servers
```bash
claude mcp

# In MCP settings UI:
# 1. Disable chrome-devtools server
# 2. Disable playwright server
# 3. Keep browser-testing skill active
# 4. Skill will activate Playwright only when needed
```

## Skill Activation Flow

```
User: "Test the InvestorRoom on mobile"
                ↓
Claude checks skill descriptions
                ↓
"browser-testing" matches: "mobile", "testing", "InvestorRoom"
                ↓
Skill activates → Loads SKILL.md into context
                ↓
Claude follows "Pattern 3: Responsive Design Test" workflow
                ↓
Delegates to mcp__playwright__browser_* tools
                ↓
Returns results to user
```

## Troubleshooting

### Skill Not Activating
```
Problem: Claude doesn't use the skill when expected

Solutions:
1. Check description field — does it match user intent?
2. Add more activation keywords
3. Explicitly mention skill: "Use the browser-testing skill to..."
```

### Multiple Skills Overlap
```
Problem: Two skills could handle the same task

Solution: Define clear boundaries in descriptions

Example:
- ui-components: "Generate React components" (creation)
- browser-testing: "Test UI components" (validation)
```

### MCP Tools Still Cluttering Context
```
Problem: Even with skills, all MCP tools load

Solution: Disable unused MCP servers in config
- Keep servers that skills delegate to
- Remove servers without corresponding skills
- This is why we recommend disabling chrome-devtools/playwright
```

## Next Steps

1. **Test the skills** — Ask Claude to use them and verify workflows
2. **Optimize MCP config** — Disable chrome-devtools and playwright servers
3. **Create more skills** — Identify other MCP tool clusters to organize
4. **Update README** — Document new skill library in .claude/skills/README.md
5. **Share patterns** — These skills are templates for future skill creation

## Resources

- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [AI Huevos Skills README](.claude/skills/README.md)
- [Existing Skills](.claude/skills/) — org-archaeology, reports, internal-comms, proposal-builder, writing-review

---

**Created:** 2025-01-17
**Author:** Claude Code (with AI Huevos team guidance)
**Status:** Active — Skills ready for use
