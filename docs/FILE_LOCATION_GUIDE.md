# File Location Guide - Quick Reference

## 🚨 GOLDEN RULE

**NEVER create `.md` files in repository root** (except README.md, CHANGELOG.md, CONTRIBUTING.md, SETUP.md)

## 📂 Decision Tree: Where Should This File Go?

```
┌─ Creating a new file? ────────────────────────────────────┐
│                                                            │
│  1. What is the PURPOSE of this file?                     │
│                                                            │
│  ┌─ Architecture decision / ADR / Structure doc?          │
│  │  → docs/architecture/                                  │
│  │                                                         │
│  ┌─ Workflow how-to / Process documentation?              │
│  │  → docs/workflows/                                     │
│  │                                                         │
│  ┌─ API specification / Endpoint documentation?           │
│  │  → docs/api-reference/                                 │
│  │                                                         │
│  ┌─ Research analysis / Insights / Findings?              │
│  │  → research/[appropriate-category]/                    │
│  │                                                         │
│  ┌─ Agent specification / Discovery output?               │
│  │  → research/agent-specifications/[agent-name]/         │
│  │                                                         │
│  ┌─ Reusable template?                                    │
│  │  → templates/                                          │
│  │                                                         │
│  ┌─ Brand guideline / Design system doc?                  │
│  │  → Brand/                                              │
│  │                                                         │
│  ┌─ Agent deployment workflow / Config?                   │
│  │  → workflows/agent-deployment/[agent-name]/            │
│  │                                                         │
│  └─ Still unsure? ASK BEFORE CREATING                     │
│     Don't default to root!                                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

## 📋 Quick Reference Table

| Content Type | Location | Examples |
|--------------|----------|----------|
| **Architecture** | | |
| ADRs, structure docs, migration plans | `docs/architecture/` | `MEETING_TRANSCRIPTS_STRUCTURE.md`, `MIGRATION_PLAN.md` |
| Architecture decisions | `docs/architecture/` | `ADR-001-database-choice.md` |
| **Documentation** | | |
| Workflow guides | `docs/workflows/` | `how-to-deploy-agent.md` |
| API specs | `docs/api-reference/` | `director-ai-api.md` |
| How-to guides | `docs/workflows/` | `user-research-workflow.md` |
| **Research** | | |
| User research analysis | `research/user-research/` | `customer-pain-analysis.md` |
| Market intelligence | `research/market-intelligence/` | `competitive-landscape-2025.md` |
| Strategic insights | `research/strategic-insights/` | `q1-strategic-review.md` |
| Agent specifications | `research/agent-specifications/[agent]/` | `co-ceo/strategic_dna.md` |
| **Workflows** | | |
| Agent deployment | `workflows/agent-deployment/[agent]/` | `co-ceo/DISCOVERY_PROMPT.md` |
| Automation pipelines | `workflows/automation-pipelines/` | `channel-performance.md` |
| **Templates** | | |
| Document templates | `templates/` | `agent-discovery-template.md` |
| Workflow templates | `templates/` | `research-template.md` |
| **Brand** | | |
| Brand guidelines | `Brand/` | `brand_guidelines.md` |
| Design system | `Brand/visual-identity/` | `color-system.md` |

## 🎯 Examples of Correct Placement

### ✅ Good Examples

| File | Correct Location | Why |
|------|------------------|-----|
| `MEETING_TRANSCRIPTS_STRUCTURE.md` | `docs/architecture/` | Architecture decision about organizing transcripts |
| `MIGRATION_MEETING_TRANSCRIPTS.md` | `docs/architecture/` | Migration plan (architecture change) |
| `CO_CEO_DISCOVERY_PROMPT.md` | `workflows/agent-deployment/co-ceo/` | Workflow for executing discovery |
| `strategic_dna.md` | `research/agent-specifications/co-ceo/` | Research output from analysis |
| `user-research-workflow.md` | `docs/workflows/` | How-to guide for a workflow |

### ❌ Bad Examples (What NOT to Do)

| File | Wrong Location | Should Be |
|------|----------------|-----------|
| `CO_CEO_DISCOVERY_PROMPT.md` | **ROOT** ❌ | `workflows/agent-deployment/co-ceo/` |
| `analysis-results.md` | **ROOT** ❌ | `research/[category]/` |
| `migration-plan.md` | **ROOT** ❌ | `docs/architecture/` |
| `new-feature-spec.md` | **ROOT** ❌ | `docs/architecture/` or `docs/workflows/` |

## 🔍 Common Scenarios

### Scenario 1: Creating Analysis/Research Document
**Question**: "I did an analysis of customer pain points. Where do I save it?"

**Answer**:
```
research/user-research/customer-pain-analysis-2025-Q1.md
```

**Why**: It's research output (goes in `research/`), specifically user research

---

### Scenario 2: Creating Workflow Documentation
**Question**: "I want to document how to deploy a new agent. Where?"

**Answer**:
```
docs/workflows/agent-deployment-guide.md
```

**Why**: It's documentation (goes in `docs/`), specifically workflow documentation

---

### Scenario 3: Creating Agent Specification
**Question**: "I'm creating specs for a new Co-CFO agent. Where?"

**Answer**:
```
research/agent-specifications/co-cfo/README.md
research/agent-specifications/co-cfo/strategic_dna.md
[etc.]
```

**Why**: Agent specs are research outputs that inform deployment

---

### Scenario 4: Creating Architecture Decision
**Question**: "I'm documenting why we chose Neo4j over PostgreSQL. Where?"

**Answer**:
```
docs/architecture/ADR-001-database-choice.md
```

**Why**: Architecture decisions go in `docs/architecture/` as ADRs

---

### Scenario 5: Creating Migration Plan
**Question**: "I'm planning to reorganize meeting transcripts. Where do I document the plan?"

**Answer**:
```
docs/architecture/MIGRATION_MEETING_TRANSCRIPTS.md
```

**Why**: Migration plans are architecture changes

---

## 🚀 Before Creating ANY File

**Checklist**:
1. ✅ I know the PURPOSE of this file
2. ✅ I consulted the decision tree above
3. ✅ I identified the correct directory
4. ✅ I am NOT creating this in root (unless it's README/CHANGELOG/CONTRIBUTING/SETUP)
5. ✅ I will create the file in the proper location

## 🛡️ Enforcement

This rule is enforced by:
1. **`.claude/CLAUDE.md`** - Project instructions for Claude Code
2. **This document** - Quick reference guide
3. **Code reviews** - Team members check file locations in PRs

## 📖 See Also

- `.claude/CLAUDE.md` - Full project instructions
- `README.md` - Repository structure overview
- `docs/architecture/` - All architecture decisions

---

**Last Updated**: 2026-01-15
**Maintained By**: Dev Team
**Status**: 🟢 Active rule, enforced in all work
