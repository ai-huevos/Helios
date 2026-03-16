# PRD: AI Huevos Growth Marketplace

> **Product Requirement Document**
> Version: 1.0 | Fecha: 2026-02-13
> Autor: Daniel Cardona / AI Huevos
> Status: Draft — Pendiente validación

---

## 1. Resumen Ejecutivo

### Qué es

Un **marketplace de plugins para Claude Code** que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables. Cualquier empresa B2B instala el marketplace y su Claude Code se convierte en una máquina de crecimiento con metodologías probadas.

### Por qué ahora

1. **No existe competencia directa**: No hay ningún marketplace de Claude Code enfocado en B2B growth. Todos los marketplaces existentes son herramientas de desarrollo (linting, testing, deployment).
2. **El ecosistema está temprano**: El sistema de plugins de Claude Code se lanzó a mediados de 2025 y se estandarizó a finales de 2025. La ventaja de primer movimiento es real.
3. **El concepto de "methodology-as-code" es nuevo**: Nadie ha convertido frameworks de consultoría B2B en plugins instalables. SAP Joule y McKinsey Lilli son internos.
4. **El mercado LATAM de AI crece al 22% CAGR**: $5.79B (2025) → $34.6B (2034). La discusión pasó de "si usaremos AI" a "cómo operacionalizar AI".
5. **Los assets ya existen**: 45K palabras de sales blueprints, 50K+ patrones de copywriting, 11 skills existentes, 17 agentes, 29 comandos.

### Para quién

**Primary**: El "Fragile Giant" — empresas familiares LATAM ($50M-175M revenue, 500+ empleados) con operaciones frágiles. Ejecutivos de segunda generación que buscan "Blindaje" (armor), no "Growth Hacking".

**Secondary**: Consultores y agencias B2B que quieran usar metodologías probadas con Claude Code para servir a sus clientes.

**Tertiary**: Equipos de ventas y marketing B2B en cualquier empresa que use Claude Code.

### Cómo se instala

```bash
# Añadir el marketplace
/plugin marketplace add ai-huevos/growth-marketplace

# Instalar un plugin específico
/plugin install sales-blueprint@growth-marketplace

# O instalar todos los plugins gratuitos
/plugin install growth-foundations@growth-marketplace
```

---

## 2. Análisis Competitivo

### Marketplaces de Claude Code Existentes

| Marketplace | Plugins | Enfoque | Modelo |
|-------------|---------|---------|--------|
| **anthropics/claude-plugins-official** | ~28 | Dev tools, LSPs, integrations | Gratis |
| **anthropics/claude-code** | ~14 | Core plugins (hookify, code-review, etc.) | Gratis |
| **jmanhype/claude-code-plugins** | 19 | Trading, swarm, GitHub | Gratis |
| **ananddtyagi/claude-code-marketplace** | ~10 | Community commands | Gratis |
| **ai-huevos/growth-marketplace** | **0 → 3-7** | **B2B growth, sales, marketing** | **Freemium** |

### Herramientas B2B AI (No son plugins de Claude Code)

| Herramienta | Qué hace | Pricing | Gap vs. nuestro marketplace |
|-------------|----------|---------|---------------------------|
| Clay | Data enrichment + GTM workflows | $500M valuation, usage-based | No es plugin de Claude Code, no tiene metodologías |
| Apollo.io | Sales intelligence | $49-149/seat/mo | Base de datos, no frameworks de ejecución |
| Salesforce Agentforce | CRM + AI agents | Enterprise pricing | Locked to Salesforce ecosystem |
| HubSpot Breeze | Inbound + AI agents | $45-3,600/mo | General purpose, no B2B methodology |
| Gong | Revenue intelligence | Enterprise | Conversation analytics, no playbooks |
| ClaudeKit Marketing | 32 agents, 68 skills | Unknown | Marketing-only, no sales/ops |

### Nuestro diferencial

**Nadie combina**:
1. Metodologías B2B documentadas (45K+ palabras de playbooks) +
2. Agentes AI especializados por función (SDR, copywriter, strategist) +
3. Distribución como plugin instalable de Claude Code +
4. Enfoque LATAM (español-first, WhatsApp, contexto local)

---

## 3. Arquitectura del Marketplace

### 3.1 Estructura del Repositorio

```
growth-marketplace/                          # Git repo = marketplace
├── .claude-plugin/
│   └── marketplace.json                     # Registry de todos los plugins
├── plugins/
│   ├── growth-foundations/                   # 🆓 Plugin gratuito — Tier 0
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json
│   │   ├── skills/
│   │   │   ├── icp-analysis/
│   │   │   │   ├── SKILL.md                 # < 500 líneas
│   │   │   │   ├── frameworks/
│   │   │   │   │   └── scoring-model.md
│   │   │   │   └── templates/
│   │   │   │       └── icp-worksheet.md
│   │   │   ├── positioning/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── frameworks/
│   │   │   │       └── value-prop-canvas.md
│   │   │   └── competitive-analysis/
│   │   │       └── SKILL.md
│   │   ├── commands/
│   │   │   ├── diagnostico.md               # /diagnostico — ClarQ assessment
│   │   │   └── icp.md                       # /icp — ICP workshop
│   │   └── README.md
│   │
│   ├── sales-blueprint/                      # 💰 Plugin core — Tier 1
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json
│   │   ├── skills/
│   │   │   ├── discovery-mastery/
│   │   │   │   ├── SKILL.md
│   │   │   │   ├── spiced-framework.md
│   │   │   │   ├── question-bank.md
│   │   │   │   └── objection-handling.md
│   │   │   ├── pipeline-management/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── scoring-criteria.md
│   │   │   ├── proposal-generation/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── templates/
│   │   │   │       ├── enterprise.md
│   │   │   │       └── mid-market.md
│   │   │   └── coaching-cadence/
│   │   │       ├── SKILL.md
│   │   │       └── reks-framework.md
│   │   ├── agents/
│   │   │   ├── sdr-agent.md
│   │   │   └── deal-strategist.md
│   │   ├── commands/
│   │   │   ├── discovery.md                  # /discovery — Prep for discovery call
│   │   │   ├── propuesta.md                  # /propuesta — Generate proposal
│   │   │   ├── pipeline.md                   # /pipeline — Pipeline review
│   │   │   └── coaching.md                   # /coaching — 1:1 coaching prep
│   │   └── README.md
│   │
│   ├── copywriting-engine/                    # 💰 Plugin core — Tier 1
│   │   ├── .claude-plugin/
│   │   │   └── plugin.json
│   │   ├── skills/
│   │   │   ├── headline-mastery/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── patterns/
│   │   │   │       ├── power-headlines.md     # Top patterns from 38K headlines
│   │   │   │       └── formulas.md
│   │   │   ├── email-sequences/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── templates/
│   │   │   │       ├── cold-outreach.md
│   │   │   │       ├── nurture.md
│   │   │   │       └── reactivation.md
│   │   │   ├── landing-pages/
│   │   │   │   ├── SKILL.md
│   │   │   │   └── frameworks/
│   │   │   │       └── conversion-architecture.md
│   │   │   └── psychological-triggers/
│   │   │       ├── SKILL.md
│   │   │       └── trigger-library.md          # 4,129 triggers categorized
│   │   ├── agents/
│   │   │   ├── research-agent.md
│   │   │   ├── insight-agent.md
│   │   │   ├── ideation-agent.md
│   │   │   └── copy-output-agent.md
│   │   ├── commands/
│   │   │   ├── copy.md                         # /copy — Generate copy
│   │   │   ├── headline.md                     # /headline — Generate headlines
│   │   │   └── email-sequence.md               # /email-sequence — Build sequence
│   │   └── README.md
│   │
│   └── [future plugins...]
│       ├── funnel-architect/                    # RADAR/ESCALA/FLUJO/IMÁN
│       ├── growth-diagnostics/                  # ClarQ diagnostic framework
│       ├── latam-growth-kit/                    # LATAM-specific playbooks
│       └── revops-intelligence/                 # RevOps analytics
│
└── README.md                                    # Marketplace overview + install guide
```

### 3.2 Marketplace Manifest

```json
// .claude-plugin/marketplace.json
{
  "name": "growth-marketplace",
  "owner": {
    "name": "AI Huevos",
    "email": "hola@huevos.ai"
  },
  "plugins": [
    {
      "name": "growth-foundations",
      "source": "./plugins/growth-foundations",
      "description": "Frameworks fundamentales de B2B growth: ICP, positioning, competitive analysis",
      "version": "1.0.0"
    },
    {
      "name": "sales-blueprint",
      "source": "./plugins/sales-blueprint",
      "description": "31 blueprints de ventas B2B: SPICED, discovery, proposals, coaching, pipeline",
      "version": "1.0.0"
    },
    {
      "name": "copywriting-engine",
      "source": "./plugins/copywriting-engine",
      "description": "Motor de copywriting con 50K+ patrones: headlines, emails, landing pages, triggers psicológicos",
      "version": "1.0.0"
    }
  ]
}
```

### 3.3 Patrón de Diseño: Progressive Disclosure

El problema central es: ¿cómo convertir 45K palabras de playbooks en skills de <500 líneas?

**Respuesta**: Progressive Disclosure — SKILL.md es el overview y navegación. Material de referencia vive en subdirectorios.

```
skills/discovery-mastery/
├── SKILL.md                    # < 500 líneas: Overview, workflow, decision points
├── spiced-framework.md         # Reference: SPICED methodology completo
├── question-bank.md            # Reference: 200+ preguntas por vertical
├── objection-handling.md       # Reference: 50+ objeciones con respuestas
└── templates/
    └── call-prep-template.md   # Template: Claude llena antes de la llamada
```

Claude lee SKILL.md siempre. Solo lee los archivos de referencia cuando los necesita. Cero costo de contexto para archivos no leídos.

### 3.4 Principios de Diseño de Skills

| Principio | Implementación |
|-----------|---------------|
| **Assume intelligence** | Solo incluir lo que Claude NO sabe (nuestra metodología, no conceptos genéricos) |
| **Progressive disclosure** | SKILL.md < 500 líneas, referencia en subdirectorios |
| **Español-first** | Contenido en español, nombres de comandos en español cuando sea natural |
| **Actionable > theoretical** | Templates que Claude llena, no ensayos sobre teoría |
| **Observe-refine-test** | Claude A crea skill, Claude B prueba, iterar hasta que funcione |
| **Match freedom to fragility** | Alta libertad (estrategia), baja libertad (cálculos de scoring) |

---

## 4. Specs de Plugins: Primera Fase (MVP)

### 4.1 Plugin: `growth-foundations` (Gratuito)

**Propósito**: Punto de entrada. Demuestra valor y crea familiaridad con el marketplace. Incluye frameworks fundamentales que cualquier equipo B2B necesita.

**Source repos**: AI Huevos (brand system, research), Play to Win (ICP, positioning frameworks)

#### Skills

| Skill | Trigger | Qué hace |
|-------|---------|----------|
| `icp-analysis` | "analyze ICP", "ideal customer profile", "target market" | Framework de ICP scoring con criterios de calificación, worksheet para que Claude llene |
| `positioning` | "positioning", "value proposition", "messaging" | Canvas de propuesta de valor, diferenciación competitiva, messaging framework |
| `competitive-analysis` | "competitive analysis", "competitors", "market landscape" | Análisis de 5 Fuerzas + mapa competitivo + identificación de gaps |

#### Commands

| Command | Uso | Output |
|---------|-----|--------|
| `/diagnostico` | `/diagnostico [empresa]` | Assessment ClarQ simplificado: GTM, Revenue, Q2C, Capabilities. Heatmap rojo/amarillo/verde |
| `/icp` | `/icp [industria]` | Workshop interactivo para definir ICP con scoring model |

#### Plugin JSON

```json
{
  "name": "growth-foundations",
  "version": "1.0.0",
  "description": "B2B growth fundamentals: ICP analysis, positioning frameworks, competitive analysis, and ClarQ diagnostic. Free foundational toolkit for any B2B team.",
  "author": {
    "name": "AI Huevos",
    "email": "hola@huevos.ai"
  }
}
```

#### KPIs de éxito
- 50+ instalaciones en 90 días
- 3+ comandos ejecutados por usuario/semana
- NPS > 40 entre usuarios que lo prueban

---

### 4.2 Plugin: `sales-blueprint` (Core)

**Propósito**: El plugin estrella. Convierte 31 blueprints de ventas B2B (45K palabras) en skills actionables que ayudan a cerrar deals. Desde discovery calls hasta proposals.

**Source repos**: Play to Win (31 blueprints, SPICED, coaching), AI Huevos (agent patterns)

#### Skills

| Skill | Trigger | Qué hace | Source |
|-------|---------|----------|--------|
| `discovery-mastery` | "discovery call", "SPICED", "qualification" | Prep de discovery calls: preguntas por vertical, SPICED framework, manejo de objeciones | Play to Win: SPICED + Perfect Discovery |
| `pipeline-management` | "pipeline review", "deal scoring", "forecast" | Scoring de deals, health check de pipeline, identificación de deals en riesgo | Play to Win: CS Operating Model |
| `proposal-generation` | "proposal", "propuesta", "SOW" | Generación de propuestas usando templates enterprise y mid-market | Play to Win: SaaS Sales Method |
| `coaching-cadence` | "coaching", "1:1", "team development" | Prep de sesiones 1:1 con framework REKS | Play to Win: REKS + Coaching Cadence |

#### Agents

| Agent | Cuándo se invoca | Qué hace |
|-------|-----------------|----------|
| `sdr-agent` | "outbound", "prospecting", "SDR workflow" | Combina research + ICP scoring + outreach sequence para un target account |
| `deal-strategist` | "deal strategy", "how do I win this deal" | Analiza un deal específico, identifica riesgos, sugiere next steps basado en SPICED |

#### Commands

| Command | Uso | Output |
|---------|-----|--------|
| `/discovery [empresa]` | Prepara discovery call | Documento de prep con research, preguntas SPICED, objeciones probables |
| `/propuesta [cliente]` | Genera propuesta | Documento SOW con pricing, scope, timeline basado en templates |
| `/pipeline` | Revisa pipeline | Health check con scoring, deals en riesgo, acciones recomendadas |
| `/coaching [nombre]` | Prep de 1:1 | Agenda REKS con temas, preguntas, development goals |

#### Ejemplo de SKILL.md: `discovery-mastery`

```yaml
---
name: discovery-mastery
description: Use when preparing for B2B discovery calls, qualifying prospects with SPICED framework, handling objections, or coaching sales reps on discovery methodology. Activates for "discovery call", "SPICED", "qualification questions", "objection handling", or "sales discovery prep".
version: 1.0.0
---
```

```markdown
# Discovery Mastery

Framework de descubrimiento B2B basado en la metodología SPICED para calificar
oportunidades y preparar llamadas de discovery que cierran deals.

## Workflow

### 1. Pre-Call Research
- Leer `spiced-framework.md` para el framework completo
- Usar research del prospect (LinkedIn, website, news) para personalizar preguntas
- Generar documento de prep usando template en `templates/call-prep-template.md`

### 2. SPICED Qualification
El framework SPICED califica oportunidades en 5 dimensiones:

| Dimensión | Pregunta clave | Score 1-5 |
|-----------|---------------|-----------|
| **S**ituation | ¿Cuál es el contexto actual del prospect? | |
| **P**ain | ¿Cuál es el dolor principal? ¿Cuánto cuesta? | |
| **I**mpact | ¿Qué pasa si no resuelven? ¿Cuál es el upside? | |
| **C**ritical Event | ¿Hay urgencia? ¿Deadline? ¿Evento trigger? | |
| **E**nd State | ¿Cómo se ve el éxito para ellos? | |
| **D**ecision | ¿Quién decide? ¿Proceso? ¿Presupuesto? | |

Score total < 15 = No calificado. 15-22 = Nurture. 23-30 = Oportunidad activa.

### 3. Question Bank
Para preguntas específicas por industria y vertical, leer `question-bank.md`.
Incluye 200+ preguntas organizadas por:
- Industria (SaaS, Logistics, Manufacturing, Food, Hospitality)
- Fase del funnel (Awareness, Consideration, Decision)
- Stakeholder (CEO, CFO, VP Sales, IT Director)

### 4. Objection Handling
Para respuestas a objeciones comunes, leer `objection-handling.md`.
Las 10 objeciones más frecuentes en LATAM B2B:
1. "Ya tenemos un ERP / ya invertimos en SAP"
2. "No tenemos presupuesto para esto ahora"
3. "Necesito consultar con [persona]"
4. "¿Pueden empezar con un piloto pequeño?"
5. "¿Cómo se diferencia esto de [competidor]?"
...

### 5. Post-Call
- Actualizar SPICED score
- Documentar next steps
- Si score > 22: generar propuesta con `/propuesta`
- Si score 15-22: crear secuencia de nurture
- Si score < 15: descalificar con nota de razón
```

#### KPIs de éxito
- 30+ instalaciones en 90 días
- Reducción de 50% en tiempo de prep de discovery calls
- 5+ propuestas generadas por usuario/mes
- Feedback cualitativo positivo de equipos de ventas

---

### 4.3 Plugin: `copywriting-engine` (Core)

**Propósito**: Motor de copywriting alimentado por 50K+ patrones analizados. Genera copy de alto rendimiento para emails, landing pages, headlines, y secuencias — con psychological triggers documentados.

**Source repos**: Machina Copywriting Swipe File (patrones, agentes, análisis framework)

#### Skills

| Skill | Trigger | Qué hace | Source |
|-------|---------|----------|--------|
| `headline-mastery` | "headline", "titulo", "subject line" | Genera headlines usando los patrones top de 38K analizados | Machina: patterns/headlines/ |
| `email-sequences` | "email sequence", "outreach email", "nurture sequence" | Diseña secuencias de email con templates probados | Machina: agent_protocols/email |
| `landing-pages` | "landing page", "conversion", "sales page" | Framework de arquitectura de conversión para landing pages | Machina: agent_protocols/landing-pages |
| `psychological-triggers` | "persuasion", "psychological trigger", "influence" | Biblioteca de 4,129 triggers categorizados para usar en copy | Machina: patterns/psychological_triggers/ |

#### Agents

| Agent | Cuándo se invoca | Qué hace |
|-------|-----------------|----------|
| `research-agent` | Fase 1 del workflow de copy | Market intelligence: investiga competidores, audiencia, pain points |
| `insight-agent` | Fase 2 | Análisis estratégico: identifica ángulos, hooks, oportunidades |
| `ideation-agent` | Fase 3 | Generación de conceptos: múltiples variaciones de copy |
| `copy-output-agent` | Fase 4 | Output final: copy optimizado para el medio específico |

#### Commands

| Command | Uso | Output |
|---------|-----|--------|
| `/copy [brief]` | Genera copy completo | 4-phase analysis: research → insight → ideation → output |
| `/headline [tema]` | Genera headlines | 10+ variaciones basadas en patrones top + scoring |
| `/email-sequence [objetivo]` | Crea secuencia | 5-7 emails con subject lines, body copy, CTAs |

#### Ejemplo de SKILL.md: `headline-mastery`

```yaml
---
name: headline-mastery
description: Use when generating headlines, subject lines, titles, or hooks. Activates for "headline", "titulo", "subject line", "hook", "attention grabber". Powered by analysis of 38,737 headlines with documented conversion patterns.
version: 1.0.0
---
```

```markdown
# Headline Mastery

Motor de generación de headlines basado en el análisis de 38,737 headlines
de los mejores copywriters del mundo. No genera headlines genéricos — usa
fórmulas probadas con patrones de conversión documentados.

## Proceso

### 1. Clasificación del objetivo
Determinar el tipo de headline necesario:
- **Curiosity Gap**: "The [X] That [Unexpected Result]"
- **Power Promise**: "[Specific Result] in [Timeframe] Without [Pain]"
- **Social Proof**: "[Number] [Audience] Already [Benefit]"
- **Fear/Loss**: "Are You Making These [Number] [Mistakes] That [Consequence]?"
- **Contrarian**: "Why [Common Belief] Is [Wrong/Outdated]"

### 2. Selección de fórmulas
Para fórmulas completas y variaciones, leer `patterns/power-headlines.md`.
Incluye las 50 fórmulas de mayor conversión con ejemplos y scoring.

### 3. Psychological Amplifiers
Para triggers psicológicos que amplifican headlines, leer `patterns/formulas.md`.
Principales amplificadores:
- Specificity (números exactos > rangos)
- Urgency (temporal > permanente)
- Social proof (nombres > "experts")
- Loss aversion (2x más potente que gain framing)

### 4. Output
Generar mínimo 10 variaciones:
- 3 usando Curiosity Gap
- 3 usando Power Promise
- 2 usando Social Proof
- 2 usando Contrarian/Fear

Scoring: Cada headline se evalúa en Clarity (1-10), Curiosity (1-10),
Specificity (1-10), Emotional Impact (1-10). Mostrar scoring al usuario.

### 5. Refinamiento
Preguntar al usuario cuáles resuenan más. Iterar con variaciones
del top 3 seleccionado.
```

#### KPIs de éxito
- 25+ instalaciones en 90 días
- 50+ headlines generados por usuario/mes
- 10+ secuencias de email creadas por usuario/mes
- Mejora medible en open rates y conversión (user-reported)

---

## 5. Asset Map: Qué viene de dónde

### Mapeo de repos a plugins

| Repo | → Plugin | Qué se extrae | Esfuerzo |
|------|----------|---------------|----------|
| **Play to Win** | `sales-blueprint` | 31 blueprints (SPICED, discovery, coaching, pipeline) | 1-2 semanas |
| **Play to Win** + **AI Huevos** | `growth-foundations` | ICP framework, positioning, ClarQ diagnostic | 1 semana |
| **Machina Copywriting** | `copywriting-engine` | Agent protocols, pattern library, psychological triggers | 2-3 semanas |
| **DotComSecrets-Playbook** | `funnel-architect` (futuro) | RADAR/ESCALA/FLUJO/IMÁN frameworks | 3-4 semanas |
| **growth-product-design-repo** | Reference material | Octalysis, behavioral psych para enriquecer otros plugins | N/A |
| **Quiz_Funnel_Saas** | `quiz-builder` (futuro) | ASK Method, bucketing algorithms | 2-3 semanas |
| **MarketingPlaybooksHub** | Architecture reference | Agent orchestration patterns | N/A |
| **GLT** | Reference only | BCG Matrix methodology para diagnostics | N/A |
| **glt-revops-analysis** | Patterns para `revops-intelligence` (futuro) | Health score calculation, data cleaning pipeline | 3-4 semanas |

### Qué NO se convierte en plugin

| Repo/Asset | Razón |
|------------|-------|
| InvestorRoom React app | Producto separado, no es un plugin |
| Brand system (logos, tokens, typography) | Específico de AI Huevos |
| Fireflies transcripts | Data privada, no distribuible |
| GLT revenue analysis | Específico del cliente |
| GLT RevOps scripts | Específico de freight logistics |

---

## 6. Roadmap

### Fase 1: Foundation (Semanas 1-4)

**Objetivo**: Lanzar marketplace con 3 plugins. Validar product-market fit.

| Semana | Entregable |
|--------|-----------|
| 1 | Crear repo `growth-marketplace`. Configurar `marketplace.json`. Estructura de directorios |
| 1-2 | **`growth-foundations`** (gratuito): 3 skills + 2 commands. Extraer de Play to Win + AI Huevos |
| 2-3 | **`sales-blueprint`**: 4 skills + 2 agents + 4 commands. Extraer y condensar 31 blueprints |
| 3-4 | **`copywriting-engine`**: 4 skills + 4 agents + 3 commands. Adaptar agent protocols de Machina |
| 4 | Testing, documentation, README del marketplace |

**Criterio de éxito de Fase 1**: 3 plugins instalables, funcionando, con documentation completa.

### Fase 2: Expansion (Meses 2-3)

| Plugin | Source | Nuevo |
|--------|--------|-------|
| `funnel-architect` | DotComSecrets-Playbook | RADAR/ESCALA/FLUJO/IMÁN como skills |
| `growth-diagnostics` | AI Huevos + ClarQ | ClarQ diagnostic completo como skill interactivo |
| MCP integrations | Nuevo | Conectar con HubSpot, Apollo, Pipedrive APIs |

### Fase 3: Premium + LATAM (Meses 4-6)

| Plugin | Source | Nuevo |
|--------|--------|-------|
| `latam-growth-kit` | Nuevo + research | Playbooks LATAM-specific: WhatsApp-first, pricing local |
| `quiz-builder` | Quiz_Funnel_Saas | ASK Method como skill interactivo |
| `revops-intelligence` | glt-revops-analysis patterns | Health scoring genérico, pipeline analytics |
| Enterprise features | Nuevo | Custom methodology encoding, private MCP |

---

## 7. Modelo de Negocio

### Pricing

| Tier | Precio | Qué incluye |
|------|--------|-------------|
| **Free** | $0 | `growth-foundations` (ICP, positioning, competitive analysis, ClarQ lite) |
| **Professional** | $49-99/seat/mes | `sales-blueprint` + `copywriting-engine` + future core plugins |
| **Enterprise** | $199-499/seat/mes | Todo + MCP integrations + custom methodology encoding + SLA |
| **Consulting** | Custom | Transformación completa de metodologías del cliente en plugins |

### Revenue Projection (Conservative)

| Métrica | Mes 3 | Mes 6 | Mes 12 |
|---------|-------|-------|--------|
| Free installs | 50 | 200 | 500 |
| Pro conversions (5%) | 3 | 10 | 25 |
| Pro MRR ($75 avg) | $225 | $750 | $1,875 |
| Enterprise | 0 | 1 | 3 |
| Enterprise MRR ($349 avg) | $0 | $349 | $1,047 |
| **Total MRR** | **$225** | **$1,099** | **$2,922** |

**Nota**: Revenue comes after validation. El objetivo de Fase 1 es probar que el modelo funciona, no generar revenue.

### Moat

1. **Profundidad de metodología**: 45K+ palabras de playbooks encodados — difícil de replicar
2. **Progressive knowledge**: Skills mejoran via observe-refine-test con data real de clientes
3. **LATAM specialization**: Contexto local, español-first, WhatsApp, pricing local
4. **Ecosystem lock-in**: MCP integrations con CRMs de clientes = switching cost
5. **Network effects**: Equipos adoptan = shared skills, workflows, knowledge base
6. **First-mover en B2B growth × Claude Code**: No hay competencia directa

---

## 8. Distribución y Go-to-Market

### Fase 1: Developer-led

1. **GitHub público**: El marketplace es un repo público, descubrible via GitHub search
2. **README optimizado**: Keywords de B2B growth + Claude Code para SEO
3. **Awesome lists**: Submission a awesome-claude-code, awesome-claude-plugins
4. **Community posts**: Anthropic community, Reddit r/ClaudeAI, Twitter/X threads
5. **claudemarketplaces.com**: Listing en directorios de plugins

### Fase 2: Content-led

6. **Blog posts**: "How we turned 45K words of sales playbooks into Claude Code plugins"
7. **Demo videos**: Screen recordings de los plugins en acción
8. **Case studies**: Resultados reales de equipos usando los plugins

### Fase 3: Sales-led

9. **Direct outreach**: A empresas LATAM usando Claude Code
10. **Partner program**: Consultores B2B que instalen marketplace para sus clientes
11. **Webinars**: "B2B Growth with AI" targeting LATAM enterprises
12. **Conference presence**: SaaStr LATAM, eventos de tech empresarial

### Señales del comprador (Fragile Giant)

| Señal | Canal | Plugin sugerido |
|-------|-------|----------------|
| "Mi comercial se fue y perdimos clientes" | Discovery call | `sales-blueprint` (pipeline + coaching) |
| "Nuestro ERP no nos da visibilidad" | Diagnostic | `growth-diagnostics` (ClarQ) |
| "Hacemos todo en Excel" | Audit | `growth-foundations` + `sales-blueprint` |
| "Necesitamos más leads" | Marketing | `copywriting-engine` + `growth-foundations` |
| "No sabemos cuánto estamos perdiendo" | CFO meeting | `growth-diagnostics` (ROI del status quo) |

---

## 9. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Claude Code plugin API cambia | Media | Alto | Seguir changelog, diseñar para la spec actual, minimal dependencies |
| Pocos usuarios de Claude Code en LATAM | Alta | Alto | Plugin es language-agnostic, targeting global + LATAM |
| Competidor copia el concepto | Media | Medio | Profundidad de metodología es el moat, no la estructura |
| Skills no funcionan bien con Haiku | Media | Medio | Testear en todos los modelos, diseñar para el mínimo |
| Revenue tarda más de lo esperado | Alta | Bajo | Revenue comes after validation; enfoque en PMF primero |
| Content too long for context window | Baja | Alto | Progressive disclosure + chunking por design |

---

## 10. Métricas de Éxito

### Fase 1 (Mes 1-2) — Validación

| Métrica | Target | Cómo medir |
|---------|--------|-----------|
| Marketplace funcional | 3 plugins instalables | Manual test |
| Plugins que funcionan | 100% de skills y commands ejecutan sin error | Test suite |
| Documentación completa | README + SKILL.md para cada plugin | Checklist |
| Primera instalación externa | 1+ usuario fuera del equipo | GitHub analytics |
| Feedback cualitativo | "Esto me ahorró tiempo" de 3+ usuarios | Entrevistas |

### Fase 2 (Mes 3-6) — Tracción

| Métrica | Target | Cómo medir |
|---------|--------|-----------|
| Instalaciones totales | 100+ | GitHub stars + install tracking |
| Weekly active users | 20+ | Command execution tracking (opt-in) |
| Pro conversions | 5% de free users | Payment tracking |
| Plugin quality score | 4.5+ / 5 | User reviews |
| Skills ejecutados/semana/usuario | 5+ | Usage analytics |

---

## 11. Decisiones Técnicas

| Decisión | Elección | Razón |
|----------|---------|-------|
| Plugin source | GitHub (public repo) | Mejor soporte, descubribilidad, PRs de comunidad |
| Knowledge encoding | Embedded in skills + progressive disclosure | Zero infra, zero latency, simple de mantener |
| MCP servers | Fase 2 (no MVP) | Complejidad innecesaria para validar el concepto |
| Hooks | Minimal en Fase 1 | Enfoque en skills y commands primero |
| Monetización enforcement | Honor system (Fase 1), license keys (Fase 2) | No over-engineer antes de tener PMF |
| Idioma del código | English (code) + Spanish (content) | Standard de la industria + audiencia LATAM |
| Testing | Manual + evaluations (Fase 1), automated (Fase 2) | Speed to market > coverage |
| Model support | Opus + Sonnet primary, Haiku secondary | Progressive detail en skills sirve para todos |

---

## 12. Próximos Pasos Inmediatos

1. **Crear repo** `ai-huevos/growth-marketplace` en GitHub
2. **Configurar** `marketplace.json` y estructura de directorios
3. **Extraer** contenido de Play to Win para `growth-foundations` y `sales-blueprint`
4. **Adaptar** agent protocols de Machina para `copywriting-engine`
5. **Escribir** SKILL.md para cada skill (< 500 líneas cada uno)
6. **Testear** instalación local: `claude --plugin-dir ./plugins/growth-foundations`
7. **Iterar** con el ciclo observe-refine-test
8. **Publicar** y documentar

---

## Apéndice A: Referencia de Arquitectura de Plugin

### Plugin JSON Schema

```json
{
  "name": "plugin-name",           // kebab-case, unique
  "version": "1.0.0",             // semver
  "description": "Description",    // max 1024 chars
  "author": {
    "name": "AI Huevos",
    "email": "hola@huevos.ai"
  }
}
```

### Skill YAML Frontmatter

```yaml
---
name: skill-name                   # max 64 chars, kebab-case
description: Trigger conditions    # max 1024 chars
version: 1.0.0                    # optional
---
```

### Command Frontmatter

```yaml
---
description: Short description     # shown in /help
argument-hint: <arg> [optional]    # argument hints
allowed-tools: [Read, Glob, Grep]  # pre-approved tools
model: sonnet                      # optional model override
---
```

### Scopes de Instalación

| Scope | Archivo | Uso |
|-------|---------|-----|
| `user` | `~/.claude/settings.json` | Personal, todos los proyectos |
| `project` | `.claude/settings.json` | Equipo, via git |
| `local` | `.claude/settings.local.json` | Proyecto específico, gitignored |
| `managed` | `managed-settings.json` | Org-managed (read-only) |

### Límites Técnicos

| Constraint | Limit |
|-----------|-------|
| Skill description | Max 1024 chars |
| Skill name | Max 64 chars, kebab-case |
| SKILL.md body | Recomendado < 500 líneas |
| Skill description budget | 2% de context window (~15K chars total) |
| MCP output | 25,000 tokens max |
| Plugin name | Kebab-case, único en marketplace |

---

## Apéndice B: Fuentes de Research

### Documentación Oficial
- [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)
- [Plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces)
- [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

### Ecosistema y Competencia
- [claudemarketplaces.com](https://claudemarketplaces.com/)
- [ClaudeKit Marketing](https://claudekit.cc/marketing) — 32 agents, 68 skills, 119 commands
- [awesome-claude-code-plugins](https://github.com/ccplugins/awesome-claude-code-plugins)

### B2B AI Landscape
- BCG: "How AI Agents Will Transform B2B Sales" (2025)
- Demand Gen Report: "AI Agents Revolutionized B2B Marketing" (2025)
- LATAM AI market: $5.79B (2025) → $34.6B (2034), CAGR 22%

### Persona
- `marketplace/personas/fragile-giant.md` — 340 líneas, caso completo

---

*Documento generado: 2026-02-13*
*Próxima revisión: Post-validación de Fase 1*
