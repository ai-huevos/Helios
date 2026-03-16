# AI Huevos Skills Library

Skills are modular instruction sets that extend Claude's capabilities for specific tasks.

## Skills Registry

### Core Business Skills
| Skill | Purpose | Status |
|-------|---------|--------|
| `ai-huevos-brand` | Brand guidelines, colors, typography, logos | ✅ Active |
| `reports` | Client reports, diagnostics, presentations | ✅ Active |
| `internal-comms` | Status updates, newsletters, stakeholder comms | ✅ Active |
| `writing-review` | Edit, refine, proofread content | ✅ Active |
| `org-archaeology` | Interview extraction, knowledge graphs, entity mapping | ✅ Active |
| `proposal-builder` | Client proposals, SOWs, pricing docs | ✅ Active |

### MCP Wrapper Skills
| Skill | MCP Server | Purpose | Status |
|-------|-----------|---------|--------|
| `web-research` | context7 | Official library docs, API references | ✅ Active |
| `meeting-intelligence` | fireflies | Transcript analysis, action items, insights | ✅ Active |
| `ui-components` | magic | React/Next.js component generation | ✅ Active |
| `browser-testing` | playwright + chrome-devtools | UI testing, screenshots, automation | ✅ Active |

## Location Strategy

```
.claude/skills/           ← Claude Code loads from here
├── README.md             ← This file
├── templates/            ← Blank skill templates
├── ai-huevos-brand/      → Symlink to Brand/ai-huevos-brand/
├── reports/
├── internal-comms/
├── writing-review/
├── org-archaeology/
└── proposal-builder/
```

## Creating a New Skill

```bash
# Copy template
cp -r templates/skill-template my-new-skill

# Edit SKILL.md with:
# 1. name: lowercase-hyphenated
# 2. description: when Claude should use this
# 3. Instructions in markdown
```

## Skill Structure (Official Anthropic Pattern)

```
my-skill/
├── SKILL.md              # Required - frontmatter + instructions
├── references/           # Optional - detailed docs Claude reads on-demand
├── assets/               # Optional - templates, images, files
└── scripts/              # Optional - executable helpers
```

## Activating Skills

Skills in `.claude/skills/` are auto-loaded by Claude Code.

To use a skill, just mention it:
- "Use the brand skill to create a presentation"
- "Apply the reports skill to format this analysis"

## Maintenance

- Keep skills focused (single responsibility)
- Update skills when workflows change
- Test skills by asking Claude to use them
