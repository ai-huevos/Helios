# /feature - Implement GitHub Issue #5

## Issue Details
**Title:** [Design OS] Director AI - Section Design
**URL:** https://github.com/ai-huevos/Helios/issues/5

**Description:**
## Section: Director AI

Design the Director AI section for HeliOS using Design OS workflow.

### Context
- **Product**: HeliOS - Machine-readable company operating system for Latin American founders
- **Location**: `design-os/` directory
- **Product files**: `design-os/product/`

### Tasks
Following the Design OS workflow in `design-os/agents.md`:

1. **Shape Section** (`/shape-section`)
   - Create `product/sections/director-ai/spec.md`
   - Define conversational interface, company knowledge access, system integration

2. **Sample Data** (`/sample-data`)
   - Create `product/sections/director-ai/data.json`
   - Create `product/sections/director-ai/types.ts`
   - Generate sample conversations, queries, responses

3. **Design Screen** (`/design-screen`)
   - Create screen components in `src/sections/director-ai/`
   - Create preview wrapper
   - Follow design requirements: mobile responsive, light/dark mode, use design tokens
   - Props-based components

### Design Requirements
- Tailwind CSS v4 only
- Use product design tokens from `product/design-system/`
- Mobile responsive + light/dark mode
- Reference data model in `product/data-model/data-model.md`

See `design-os/agents.md` for complete Design OS directives.

## Execution Instructions

### Phase 1: Understand
1. Read the issue requirements completely
2. Identify which files/modules will be affected
3. Check existing patterns in the codebase for similar features

### Phase 2: Plan
1. Break the feature into 3-7 atomic implementation steps
2. List the files you'll create or modify
3. Define what "done" looks like

### Phase 3: Implement
1. Create feature branch: `git checkout -b feature/5-<short-desc>`
2. Implement step by step, committing after each logical unit
3. Follow existing code patterns and conventions
4. Add tests if test infrastructure exists

### Phase 4: Deliver
1. Run build/lint/test commands
2. Create PR with summary of changes
3. Reference this issue in the PR

## Constraints
- Create feature branch before any changes
- Commit incrementally (not one big commit)
- Follow existing codebase patterns
- Read before you write
