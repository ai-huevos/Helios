# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos is a brand management repository with documentation, design systems, and a React-based InvestorRoom application. Spanish-first content — never translate Spanish to English, always use `ensure_ascii=False` in JSON operations.

## Development Commands

### InvestorRoom (React/Vite App)
```bash
cd InvestorRoom
npm install                                    # Install dependencies
npm run dev                                    # Dev server (http://localhost:5173)
npm run build                                  # Production build
npm run preview                                # Preview production build
npm run test                                   # Run all tests (vitest)
npm run test -- --watch                        # Watch mode (interactive)
npm run test -- src/__tests__/InvestorRoom.test.jsx  # Single test file
```

Key file locations:
- **Design system CSS**: `src/styles/design-system.css` (brand tokens as CSS variables)
- **Test setup**: `src/setupTests.js` (vitest + @testing-library/react)
- **UI primitives**: `src/components/ui/` (shadcn/ui components)

## Critical Rules

### File Placement — NO FILES IN ROOT
Never create `.md` files in repository root (except README.md, CHANGELOG.md, CONTRIBUTING.md, SETUP.md).

| Content Type | Location |
|--------------|----------|
| Architecture decisions | `docs/architecture/` |
| Workflow documentation | `docs/workflows/` |
| Research outputs | `research/[category]/` |
| Agent specifications | `research/agent-specifications/` |
| Brand guidelines | `Brand/` |
| Templates | `templates/` |

### Branch Strategy
```
production ← main ← development ← feature/*
                                ← hotfix/* (urgent fixes, merge to main + backport)
                                ← research/* (experimental, may not merge)
```
**ALWAYS branch from `development`**, never work directly on `main` or `production`.

### Conventional Commits
Format: `<type>(<scope>): <subject>`

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scopes**: `brand`, `workflow`, `research`, `automation`, `docs`, `agent`, `investor-room`

## Architecture

### Key Directories
- **Brand/ai-huevos-brand/** — Design system, tokens, logos, brand guidelines
- **InvestorRoom/** — React/Vite investor presentation app (shadcn/ui, Tailwind v4)
- **research/** — User personas, market analysis, agent specifications
- **workflows/** — User research, automation pipelines, agent deployment
- **.claude/skills/** — Claude skills (MCP wrappers and utilities)

### Skills

**Claude skills** (in `.claude/skills/`):
| Skill | Purpose |
|-------|---------|
| `reports` | Client reports, diagnostic findings, executive summaries |
| `internal-comms` | Status updates, stakeholder emails, newsletters |
| `writing-review` | Edit, proofread, and polish written content |
| `org-archaeology` | Extract business intelligence from Spanish interviews |
| `proposal-builder` | SOWs, pricing documents, engagement letters |
| `frontend-design` | Production-grade frontend interfaces with brand |

**MCP wrapper skills**:
| Skill | MCP Server | Purpose |
|-------|-----------|---------|
| `web-research` | context7 | Official library docs, API references |
| `meeting-intelligence` | fireflies | Transcript analysis from Fireflies |
| `ui-components` | magic | React/Next.js component generation |
| `browser-testing` | playwright | UI testing, screenshots |

### InvestorRoom Architecture
React/Vite app with multi-persona layouts (shadcn/ui + Tailwind v4):

**Routing** (react-router-dom):
- `/` → `pages/Homepage.jsx` (landing page with Hero, Problem, Solution, HowItWorks, Team, Pricing)
- `/inversionistas` → `pages/InvestorRoom.jsx` (investor presentation)

**Persona layouts** (in `src/`):
- `AppVisionary.jsx` — vision-focused narrative
- `AppOperator.jsx` — metrics-heavy dashboard
- `AppPolish.jsx` — balanced presentation
- `AppSwitcher.jsx` — runtime persona switching

**Shared components** (`src/components/`):
- Investor: `SynthesisHero`, `SynthesisGrid`, `OpportunityExplorer`, `PitchSection`, `SuccessCases`
- Homepage: `homepage/Hero`, `homepage/Problem`, `homepage/Solution`, `homepage/HowItWorks`, `homepage/Team`, `homepage/Pricing`
- Context: `LanguageContext.jsx` for ES/EN support

**UI stack**: 24 shadcn/ui primitives, React Flow (graphs), Recharts (analytics), Framer Motion (animations)

### Co-CEO Agent System
Strategic artifacts for the Co-CEO AI agent:
- **Artifacts**: `research/agent-specifications/co-ceo/artifacts/` (11 strategic documents)
- **Discovery workflow**: `workflows/agent-deployment/co-ceo/CO_CEO_DISCOVERY_PROMPT.md`
- **Skill**: `/co-ceo-artifacts` loads relevant context based on query type

### Research Outputs
- **Fireflies transcripts**: `research/fireflies-extraction/transcripts/` (by category: customer, founding-team, advisors, prospects, partners)
- **Synthesis**: `research/fireflies-extraction/FINAL_SYNTHESIS_REPORT.md`

### Brand System

**Dashboard**: Open `Brand/design-system-review.html` for central navigation to all brand resources.

| Resource | Path |
|----------|------|
| Brand guidelines | `Brand/ai-huevos-brand/SKILL.md` |
| Quick reference | `Brand/ai-huevos-brand/CHEATSHEET.md` |
| Design tokens | `Brand/ai-huevos-brand/references/design-tokens.json` |
| Official logos | `Brand/ai-huevos-brand/assets/logos/` |
| Portability guide | `Brand/ai-huevos-brand/PORT_TO_NEW_REPO.md` |

**Critical rules (always apply):**
- Max 3 colors per composition
- Orange = CTAs only (never background)
- Yellow text on white = FORBIDDEN (fails WCAG)
- Always use official SVG logos — never CSS shapes or emoji
- Scandia font, sentence case only (never ALL CAPS)

**Porting brand to another repo**: Run `Brand/ai-huevos-brand/COPY_MINIMAL.sh` (3 files) or `COPY_COMPLETE.sh` (full docs).

## Content Language

- **User-facing content**: Spanish (never translate)
- **Code/config**: English acceptable
- **Brand messages**: Always Spanish
- **Key tagline**: "Pa' emprender se necesitan huevos"

## Serena Project Memory

Check memories at session start if relevant:
```
mcp__serena__list_memories → mcp__serena__read_memory
```

Write memories for: brand decisions, workflow patterns, architecture choices.

## Additional Resources

See `README.md` for full branch strategy, `CONTRIBUTING.md` for PR process and code standards.
