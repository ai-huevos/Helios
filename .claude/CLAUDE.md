# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Huevos is a brand management repository with documentation, design systems, and two React applications:
- **InvestorRoom** - Investor presentation app with multi-persona layouts
- **design-os** - Product planning and design tool that exports implementation packages

Spanish-first content — never translate Spanish to English, always use `ensure_ascii=False` in JSON operations.

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

### design-os (React/Vite/TypeScript App)
```bash
cd design-os
npm install                                    # Install dependencies
npm run dev                                    # Dev server (http://localhost:5174)
npm run build                                  # TypeScript compile + production build
npm run lint                                   # ESLint check
npm run preview                                # Preview production build
```

**Important**: design-os is a product planning/design tool. See `design-os/agents.md` for complete agent directives. Key points:
- Two contexts: Design OS UI (stone/lime, DM Sans) vs. Product Designs (use product tokens)
- Tailwind CSS v4 only (no tailwind.config.js)
- Planning flow: Product Vision → Roadmap → Data Model → Design System → Shell → Sections → Export
- Screen designs go to `src/sections/[section-name]/`, exports to `product-plan/`

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
- **Scopes**: `brand`, `workflow`, `research`, `automation`, `docs`, `agent`, `investor-room`, `design-os`

## Architecture

### Key Directories
- **Brand/ai-huevos-brand/** — Design system, tokens, logos, brand guidelines
- **InvestorRoom/** — React/Vite investor presentation app (shadcn/ui, Tailwind v4)
- **design-os/** — React/Vite/TypeScript product planning/design tool (separate codebase)
- **research/** — User personas, market analysis, agent specifications
- **workflows/** — User research, automation pipelines, agent deployment
- **.claude/skills/** — Claude skills (MCP wrappers and utilities)

### Two React Applications
This repository contains two independent React applications:

1. **InvestorRoom** - AI Huevos investor presentation with multi-persona layouts
2. **design-os** - Product planning and design tool (exports component packages)

They share brand guidelines but have separate dev servers, dependencies, and purposes.

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

### design-os Architecture
Product planning and design tool that outputs implementation-ready packages:

**Planning Flow**:
1. Product Vision (`/product-vision`) → `product/product-overview.md`
2. Product Roadmap (`/product-roadmap`) → `product/product-roadmap.md`
3. Data Model (`/data-model`) → `product/data-model/data-model.md`
4. Design System (`/design-tokens`) → `product/design-system/{colors,typography}.json`
5. Shell Design (`/design-shell`) → `src/shell/components/`
6. Section Design (`/shape-section`, `/sample-data`, `/design-screen`) → `src/sections/[name]/`
7. Export (`/export-product`) → `product-plan/` (handoff package)

**Key Files**:
- `design-os/agents.md` - Complete agent directives and design requirements
- `product/` - Product definition (specs, data model, design tokens)
- `src/shell/` - Application shell components
- `src/sections/` - Section screen designs and components
- `product-plan/` - Generated export package with prompts and instructions

**Critical Rules**:
- Tailwind CSS v4 only (no tailwind.config.js)
- Design OS UI uses stone/lime + DM Sans
- Product designs use product-defined tokens
- All components accept data via props (no direct imports)
- Mobile responsive + light/dark mode required

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
