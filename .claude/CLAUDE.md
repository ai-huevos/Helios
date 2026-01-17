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
npm run test                                   # Run all tests (vitest)
npm run test -- --watch                        # Watch mode
npm run test -- src/__tests__/SomeTest.jsx    # Single test file
npm run preview                                # Preview production build
```

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
```
**ALWAYS branch from `development`**, never work directly on `main` or `production`.

```bash
git checkout development && git pull
git checkout -b feature/descriptive-name
```

### Conventional Commits
Format: `<type>(<scope>): <subject>`

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scopes**: `brand`, `workflow`, `research`, `automation`, `docs`, `agent`, `investor-room`

## Architecture

### Key Directories
- **Brand/ai-huevos-brand/** — Design system, tokens, logos, brand guidelines
- **InvestorRoom/** — React/Vite investor presentation app
- **research/** — User personas, market analysis, agent specifications
- **workflows/** — User research, automation pipelines, agent deployment
- **.claude/skills/** — Claude skills (brand, reports, internal-comms)

### InvestorRoom Architecture
Multi-persona layout system targeting different investor types:
- **AppVisionary.jsx** — High-level vision, minimal data
- **AppOperator.jsx** — Detailed metrics, operational focus
- **AppPolish.jsx** — Refined presentation, balanced view
- **AppSwitcher.jsx** — Persona selector component

Key components: `SynthesisHero`, `SynthesisGrid`, `OpportunityExplorer`, `PitchSection`, `SuccessCases`

### Brand System
**Full guidelines:** Read `Brand/ai-huevos-brand/SKILL.md` before creating visual content.

| Resource | Path |
|----------|------|
| Brand guidelines | `Brand/ai-huevos-brand/SKILL.md` |
| Design tokens (source of truth) | `Brand/ai-huevos-brand/references/design-tokens.json` |
| Official logos | `Brand/ai-huevos-brand/assets/logos/` |

**Critical rules (always apply):**
- Max 3 colors per composition
- Orange = CTAs only (never background)
- Yellow text on white = FORBIDDEN (fails WCAG)
- Always use official SVG logos — never CSS shapes or emoji
- Scandia font, sentence case only (never ALL CAPS)

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
