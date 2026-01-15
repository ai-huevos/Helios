# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos Brand Guidelines is a brand management and automation repository that centralizes brand identity, design systems, user research workflows, and AI agent deployment configurations. The project is designed for operation with Claude Skills and maintains all content in Spanish.

**Key Principle**: Spanish-first content — never translate Spanish content to English, always use `ensure_ascii=False` in JSON operations.

## 🚨 CRITICAL RULE: NO FILES IN ROOT

**NEVER create `.md` files in the repository root** (except README.md, CHANGELOG.md, CONTRIBUTING.md, SETUP.md).

All documentation MUST go in the appropriate directory:

| Content Type | Location | Examples |
|--------------|----------|----------|
| Architecture decisions | `docs/architecture/` | ADRs, structure docs, migration plans |
| Workflow documentation | `docs/workflows/` | How-to guides, process docs |
| API references | `docs/api-reference/` | API specs, endpoint docs |
| Research outputs | `research/[category]/` | Analysis, insights, findings |
| Agent specifications | `research/agent-specifications/` | Agent configs, discovery outputs |
| Templates | `templates/` | Reusable document templates |
| Brand guidelines | `Brand/` | Brand-specific docs |

**Why this matters**:
- ✅ Discoverability: Files are where users expect them
- ✅ Scalability: Structure doesn't degrade over time
- ✅ Consistency: Follows documented architecture
- ✅ Maintenance: Clear ownership and purpose

**Before creating ANY file**:
1. Ask: "What is the purpose of this file?"
2. Consult the table above
3. Create in the correct directory
4. NEVER use root as default

## Repository Architecture

### Core Components

1. **Brand System** (`Brand/`)
   - `Brand/ai-huevos-brand/` — Primary brand skill with design tokens, assets, and implementation files
   - `Brand/visual-identity/` — Logos, colors, typography specifications
   - `Brand/voice-tone/` — Voice and tone guidelines
   - `Brand/messaging/` — Brand messaging frameworks
   - `Brand/Pitch Deck/` — Investor presentation materials and market research

2. **Workflows** (`workflows/`)
   - `user-research/` — User research automation workflows
   - `channel-performance/` — Channel analytics and performance tracking
   - `automation-pipelines/` — General automation workflows
   - `agent-deployment/` — AI agent deployment configurations

3. **Research** (`research/`)
   - `user-personas/` — User persona definitions
   - `market-analysis/` — Market research and competitive analysis
   - `performance-reports/` — Channel and campaign performance data
   - `agent-specifications/` — AI agent discovery and specifications
   - `strategic-insights/` — Founding team, advisor, partner conversations (PLANNED)
   - `user-research/customer-interviews/` — Client interviews and feedback (PLANNED)
   - `market-intelligence/prospect-calls/` — Sales and prospect discovery (PLANNED)

4. **Documentation** (`docs/`)
   - `architecture/` — System architecture decisions, ADRs, structure documentation
   - `api-reference/` — API documentation
   - `workflows/` — Workflow documentation

5. **Business Context** (`Basics/`, `Sales/`, `Meeting Transcript/`)
   - Historical company documents and client work
   - Sales materials and client research
   - Meeting notes and business context
   - **NOTE**: `Meeting Transcript/` will be migrated to `research/` structure (see `docs/architecture/MEETING_TRANSCRIPTS_STRUCTURE.md`)

### Brand System Implementation

The brand system is production-ready with:
- **Design Tokens**: `Brand/ai-huevos-brand/references/design-tokens.json`
- **CSS Variables**: `Brand/ai-huevos-brand/references/css-variables.css`
- **Tailwind Config**: `Brand/ai-huevos-brand/references/tailwind-config.js`
- **Fonts**: `Brand/fonts/Scandia/` (primary) and `Brand/fonts/Geist_Mono/` (code/data)
- **Logo Assets**: `Brand/ai-huevos-brand/assets/logos/` (SVG variants for all backgrounds)

**Brand Colors** (use these exact hex values):
- Primary: White (#FFFFFF), Black (#121212), Yellow (#FFD826), Blue (#3988FF)
- Secondary: Violet (#B4A7FA), Orange (#FF6B35 — CTAs only)
- Web Extended: Gray Dark (#8B8B8B), Gray Light (#E8E8E8)

**Typography**:
- Primary: Scandia (Medium for headlines, Regular for body) — always sentence case
- Code/Data: Geist Mono

**Key Brand Message**: "Pa' emprender se necesitan huevos" (Entrepreneurship takes courage)

## Branch Strategy (CRITICAL)

**GitFlow-based workflow** with three protected branches:

```
production (stable, production-ready)
    ↑ merge from main (requires 2 approvals)
main (verified releases)
    ↑ merge from development (requires 1 approval)
development (integration, base for work) ← ALWAYS START HERE
    ↑ branch from here
feature/* (your changes)
research/* (experimental work)
hotfix/* (urgent fixes only)
```

**NEVER work directly on `main` or `production`**. Always create feature branches from `development`:

```bash
git checkout development
git pull origin development
git checkout -b feature/descriptive-name
```

## Conventional Commits (Required)

Format: `<type>(<scope>): <subject>`

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scopes**: `brand`, `workflow`, `research`, `automation`, `docs`, `agent`

**Examples**:
```bash
feat(brand): añadir sistema de color tokens
fix(workflow): corregir error en pipeline de research
docs(research): actualizar user personas
refactor(automation): optimizar deploy script
```

All commits generated by Claude Code will include the footer:
```
🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

## Development Workflow

### Starting Work
1. Verify current branch: `git status`
2. Ensure on `development`: `git checkout development && git pull`
3. Create feature branch: `git checkout -b feature/task-name`
4. Load project context if needed (check brand guidelines, existing workflows)

### During Work
- **TodoWrite**: Use for tasks with >3 steps
- **Read First**: Always read files before Write/Edit
- **Brand Consistency**: Verify against `Brand/ai-huevos-brand/SKILL.md` before creating visual content
- **Parallel Execution**: Run independent tasks in parallel
- **Spanish Content**: Maintain Spanish for all user-facing content

### Completing Work
```bash
git add .
git commit -m "feat(scope): descripción

- Detalle cambio 1
- Detalle cambio 2

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin feature/task-name
# Create PR to development (not main!)
```

## Key Files Reference

| File | Purpose |
|------|---------|
| `README.md` | Repository overview, branch strategy, development workflow |
| `CONTRIBUTING.md` | Contribution guidelines, PR process, code standards |
| `CHANGELOG.md` | Version history (Keep a Changelog format) |
| `.claude/CLAUDE.md` | Project-specific Claude instructions (this file's parent) |
| `Brand/ai-huevos-brand/SKILL.md` | Complete brand guidelines and design system |
| `Brand/ai-huevos-brand/references/design-tokens.json` | Programmatic design tokens |

## Tool Usage Patterns

### Primary MCP Tools
1. **Serena** — Semantic code operations, project memory, session persistence
2. **Context7** — Official library documentation lookups
3. **Sequential Thinking** — Complex multi-step reasoning, architectural decisions

### File Operations
- Always use **absolute paths** starting with `/Users/tatooine/Documents/Development/AI huevos/`
- **Read** before Write/Edit (never edit blind)
- **Edit** for modifying existing files (preferred over Write)
- **Write** only for new files that are necessary

### Brand Workflow
When creating any visual content, presentations, dashboards, or branded materials:
1. Read `Brand/ai-huevos-brand/SKILL.md` for current brand guidelines
2. Reference design tokens from `Brand/ai-huevos-brand/references/design-tokens.json`
3. Use logo assets from `Brand/ai-huevos-brand/assets/logos/`
4. Maintain color usage rules (primary colors in similar proportions, orange minimal)
5. Use Scandia font (sentence case) for text, Geist Mono for code/data

## Special Considerations

### Content Language
- **All user-facing content**: Spanish
- **Code/configuration**: English is acceptable
- **Documentation**: Spanish preferred
- **Brand messages**: Always Spanish
- **JSON operations**: Use `ensure_ascii=False`

### Security
- Never commit secrets (API keys, tokens, credentials)
- `.env` files are gitignored
- Check `.gitignore` before committing sensitive data
- `secrets/` directory is blocked

### Claude Skills Integration
The repository is optimized for Claude Skills operation:
- `/sc:design` — Design system and brand operations
- `/sc:research` — User research and market analysis
- `/sc:workflow` — Workflow automation generation
- `/sc:implement` — Feature implementation
- `/sc:analyze` — Performance analysis

Custom commands (when implemented):
- `/brand-check` — Validate brand consistency
- `/deploy-agent` — Deploy AI agents
- `/channel-report` — Generate performance reports
- `/user-research` — Execute research workflows

### AI Agent Workflows
- Document configurations in `workflows/agent-deployment/`
- Track performance metrics
- Maintain agent configs as code
- Link to research insights from `research/`

### User Research Protocols
- Store personas in `research/user-personas/`
- Document methodology
- Link workflows to `workflows/user-research/`
- Track insights systematically

## Project Context Memory

When starting new sessions, key memories to check (via Serena):
- **Brand guidelines**: Core identity, design system tokens
- **Workflow patterns**: Common automation patterns
- **Research insights**: User personas, market analysis
- **Architecture decisions**: System design choices

Write memories when:
- New brand guidelines are established
- Workflow patterns are discovered
- Research insights are uncovered
- Architecture decisions are made

## Quality Checklist

Before completing work:
- [ ] Follows brand guidelines (if applicable)
- [ ] Uses conventional commits format
- [ ] Spanish content maintained (not translated)
- [ ] No secrets or credentials committed
- [ ] Working on feature branch (not main/production)
- [ ] Documentation updated if needed
- [ ] Read files before editing them

## Common Pitfalls to Avoid

1. Working directly on `main` or `production` branches
2. Translating Spanish content to English
3. Committing without conventional commit format
4. Creating files without reading existing ones first
5. Using orange color as protagonist (it's accent-only)
6. Ignoring brand consistency requirements
7. Not using TodoWrite for complex multi-step tasks
8. Committing secrets or API keys

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- Internal: See `README.md`, `CONTRIBUTING.md`, `Brand/ai-huevos-brand/SKILL.md`
