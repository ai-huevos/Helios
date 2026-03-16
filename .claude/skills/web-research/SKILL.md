---
name: web-research
description: Advanced web research with semantic code context from official documentation. Use when you need up-to-date library docs, framework patterns, or API references. Delegates to Context7 MCP for documentation lookup.
---

# Web Research Skill

Retrieve official, up-to-date documentation and code examples for libraries, frameworks, and APIs using the Context7 MCP server.

## When to Use

- Looking up official library documentation
- Finding current API patterns (React, Vue, Next.js, etc.)
- Verifying syntax for specific framework features
- Getting code examples from official sources
- Checking migration guides or changelogs

## Quick Start

```
User: "How do I use React Server Components in Next.js 15?"

Process:
1. Use mcp__context7__resolve-library-id to find Next.js
2. Use mcp__context7__query-docs with the library ID
3. Return official patterns with code examples
```

## MCP Tool Delegation

This skill wraps the **context7** MCP server tools:

| Tool | Purpose | Usage |
|------|---------|-------|
| `mcp__context7__resolve-library-id` | Find library ID from name | Always call first unless user provides `/org/project` format |
| `mcp__context7__query-docs` | Query documentation | Use library ID from resolve step |

### Tool Flow Pattern

```
Step 1: Resolve library ID
→ mcp__context7__resolve-library-id(libraryName, query)
→ Returns: {libraryId: "/vercel/next.js/v15.0.0", ...}

Step 2: Query documentation
→ mcp__context7__query-docs(libraryId, query)
→ Returns: Official docs, code examples, API references
```

## Critical Rules

1. **Always resolve first** unless user provides explicit library ID format (`/org/project` or `/org/project/version`)
2. **Max 3 calls per question** — if not found after 3 attempts, use best available info
3. **Prefer official sources** — Context7 provides verified documentation, not web scraping
4. **Include version info** when showing code examples

## Examples

### Example 1: Framework Feature Lookup
```
User: "Show me how to handle form actions in Next.js"

Skill execution:
1. mcp__context7__resolve-library-id("next.js", "form actions server actions")
   → libraryId: "/vercel/next.js"

2. mcp__context7__query-docs("/vercel/next.js", "server actions form handling")
   → Returns official Next.js Server Actions patterns

3. Present code example with version context
```

### Example 2: Migration Guidance
```
User: "What changed in React 19 hooks?"

Skill execution:
1. mcp__context7__resolve-library-id("react", "React 19 hooks changes")
   → libraryId: "/facebook/react/v19.0.0"

2. mcp__context7__query-docs("/facebook/react/v19.0.0", "hooks API changes migration")
   → Returns migration guide and breaking changes
```

### Example 3: API Reference
```
User: "How do I configure Vite for React?"

Skill execution:
1. mcp__context7__resolve-library-id("vite", "React configuration")
   → libraryId: "/vitejs/vite"

2. mcp__context7__query-docs("/vitejs/vite", "React plugin configuration options")
   → Returns official Vite + React setup patterns
```

## Integration with Other Skills

- **Use with `InvestorRoom` development** — Look up React/Vite patterns
- **Combine with `coding-assistant`** — Verify syntax before implementing
- **Reference in documentation** — Include official docs links

## Quality Standards

- [ ] Always cite library version
- [ ] Provide official documentation links when available
- [ ] Include code examples from official sources
- [ ] Mention breaking changes if relevant
- [ ] Note deprecated patterns

## Limitations

- **Only for libraries indexed by Context7** — not all packages available
- **No real-time web scraping** — relies on Context7's curated index
- **3-call limit** to manage context usage
- **Best for popular frameworks** — coverage varies by library popularity
