# AI Huevos Growth Marketplace — Brief

## Qué es esto

Un **marketplace de plugins para Claude Code** que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables. Cualquier empresa B2B instala el marketplace y su Claude Code se convierte en una máquina de crecimiento.

**Comando de instalación**: `/plugin marketplace add ai-huevos/growth-marketplace`

## El comprador: The Fragile Giant

Empresas familiares LATAM con revenue masivo pero operaciones frágiles. Ejecutivos de segunda generación corriendo empresas de $50-175M sobre conocimiento tribal, Excel y hero-dependency.

- **Pain**: "Dependencia" (hero-dependency), "Caja Negra" (black box), "Barbacha" (leakage operativo)
- **Want**: "Blindaje" (armor), "Dashboard of Truth", "Seguro Operacional"
- **Don't want**: "Growth hacking", disruption, "leads"
- **Casos**: OPL ($175M, 18K conductores), Huevos Kikes (55M huevos/día), Bolivian Foods (BK/Subway)

Ver: `personas/fragile-giant.md` (340 líneas, documento completo)

## Arquitectura de Plugin (Claude Code)

Un marketplace es un **repo Git** con estructura:

```
growth-marketplace/
├── .claude-plugin/
│   └── plugin.json          # Metadata del marketplace
├── plugins/
│   ├── sales-methodology/   # Plugin individual
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json
│   │   ├── commands/        # Slash commands (/ventas, /discovery, etc.)
│   │   ├── skills/          # Model-invoked (SKILL.md con frontmatter)
│   │   ├── agents/          # Agent definitions para Task tool
│   │   ├── hooks/           # Pre/Post tool use hooks
│   │   ├── .mcp.json        # MCP server config (opcional)
│   │   └── README.md
│   ├── copywriting-engine/
│   ├── growth-diagnostics/
│   └── ...
└── README.md
```

**Registro**: Se añade a `~/.claude/plugins/known_marketplaces.json`
**Instalación por plugin**: `/plugin install sales-methodology@growth-marketplace`

## Repos disponibles (9)

### Tier 1: Production-Ready
| Repo | Contenido | Potencial |
|------|-----------|-----------|
| AI huevos | 11 skills, 17 agents, 29 commands, brand system, 50 transcripts Fireflies | Fundación del marketplace |
| Machina Copywriting | 50K+ patterns, 38K headlines, 10 agentes de copy | Alto — plugin de copywriting |
| Play to win | 31 blueprints de ventas B2B (45K palabras), SPICED, Hormozi | Alto — plugin de metodología de ventas |

### Tier 2: Frameworks documentados
| Repo | Contenido | Potencial |
|------|-----------|-----------|
| MarketingPlaybooksHub | 4 agentes de marketing AI, orquestador, pricing SaaS | Referencia de arquitectura |
| DotComSecrets-Playbook | RADAR/ESCALA/FLUJO/IMÁN funnels, pricing LATAM | Framework library — funnels |
| growth-product-design-repo | Psicología conductual, Octalysis, network effects | Prompts de research + templates |
| Quiz_Funnel_Saas | ASK Method, bucketing, segmentación de leads | Framework de lead gen |

### Tier 3: Trabajo de cliente / referencia
| Repo | Contenido | Potencial |
|------|-----------|-----------|
| GLT | Revenue analysis, BCG matrix, 6 revenue levers | Solo referencia |
| glt-revops-analysis | Health scores, lane optimization, Python analytics | Patrones RevOps generalizables |

## Preguntas clave

1. **Primeros plugins**: ¿Cuáles 2-3 demuestran más valor con menos esfuerzo?
2. **De framework a plugin**: ¿Cómo se convierte un playbook de 45K palabras en un skill que ayude a cerrar deals?
3. **Distribución**: ¿Cómo descubren y adoptan empresas B2B un marketplace de Claude Code?
4. **Organización**: ¿Por función (ventas/marketing/ops)? ¿Por metodología? ¿Por workflow stage?

## Entregable

→ `marketplace/PRD.md` — PRD del marketplace + specs de los primeros 2-3 plugins
