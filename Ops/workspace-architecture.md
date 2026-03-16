# AI Huevos Operating System — Notion Architecture

## The Problem With Your Current Setup

```
Current: Scattered pages, duplicate EOS templates, no connection between strategy → execution → learning
```

## Design Philosophy

**PARA = How you organize everything**
**EOS = How you operate weekly/quarterly**
**Bussgang = How you run experiments inside Rocks**
**Blank = How you develop customers systematically**

---

## Architecture: PARA as Backbone

```
┌─────────────────────────────────────────────────────────────┐
│                    🏠 AI Huevos HQ                          │
│                   (Single Dashboard)                        │
├─────────────┬──────────────┬──────────────┬─────────────────┤
│  📦 PROJECTS │  🔄 AREAS    │  📚 RESOURCES │  🗄️ ARCHIVE    │
│  (Time-bound)│  (Ongoing)   │  (Reference)  │  (Done/Dead)   │
├─────────────┼──────────────┼──────────────┼─────────────────┤
│             │              │              │                 │
│ Q1 Rocks    │ Clients      │ Frameworks   │ Closed deals    │
│ Experiments │ Operations   │ Templates    │ Past quarters   │
│ Sprints     │ Product      │ Playbooks    │ Dead experiments│
│             │ Finance      │ Market Intel │ Old proposals   │
│             │ People       │ Learnings DB │                 │
└─────────────┴──────────────┴──────────────┴─────────────────┘
```

---

## How The 3 Methodologies Layer

```
LEVEL 1: VISION (EOS + Blank)
┌──────────────────────────────────────────────┐
│  VTO: 10yr → 3yr → 1yr → Quarterly Rocks    │
│  Business Model Canvas (living doc)          │
│  Customer Segments & Hypotheses              │
└──────────────────┬───────────────────────────┘
                   │
LEVEL 2: EXECUTION (EOS + Bussgang)            
┌──────────────────▼───────────────────────────┐
│  Rocks (quarterly goals)                     │
│    └─► Each Rock decomposes into:            │
│        ├─ Tasks (to-dos)                     │
│        └─ Experiments (hypothesis-driven)    │
│                                              │
│  Scorecard (weekly KPIs)                     │
│  Issues List (IDS process)                   │
└──────────────────┬───────────────────────────┘
                   │
LEVEL 3: LEARNING (Bussgang + Blank)           
┌──────────────────▼───────────────────────────┐
│  Experiment Log                              │
│    Hypothesis → Test → Result → Decision     │
│    (Pivot / Persevere / Kill)                │
│                                              │
│  Customer Discovery Notes                    │
│  Learnings Database (searchable insights)    │
└──────────────────────────────────────────────┘
```

---

## Notion Database Architecture

### Core Databases (6 total — everything connects)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   🪨 ROCKS   │────▶│ 🧪 EXPERIMENTS│────▶│ 📝 LEARNINGS │
│  (quarterly) │     │ (per rock)   │     │ (permanent)  │
│              │     │              │     │              │
│ Owner        │     │ Hypothesis   │     │ Insight      │
│ Status       │     │ Test method  │     │ Source       │
│ Quarter      │     │ Success crit │     │ Tags         │
│ % Complete   │     │ Result       │     │ Applies to   │
│ Area ──────────┐   │ Decision     │     │              │
└─────────────┘  │   │ Rock (rel)   │     └──────────────┘
                 │   │ Learning(rel)│
┌─────────────┐  │   └─────────────┘
│ 📏 SCORECARD │  │
│  (weekly)    │  │   ┌─────────────┐     ┌─────────────┐
│              │  │   │ ⚠️ ISSUES    │     │ ✅ TASKS     │
│ Metric       │  └──▶│  (IDS)      │     │ (action items│
│ Owner        │      │              │     │              │
│ Goal         │      │ Priority     │     │ Owner        │
│ Actual       │      │ Who          │     │ Due date     │
│ On track?    │      │ Status       │     │ Rock (rel)   │
│ Area         │      │ Area         │     │ Status       │
└─────────────┘      └─────────────┘     └──────────────┘
```

### Key Relations

```
Rock ──has many──▶ Experiments
Rock ──has many──▶ Tasks  
Experiment ──produces──▶ Learnings
Issues ──can link to──▶ Rocks
All databases ──tagged by──▶ Area (Client/Product/Ops/Finance)
```

---

## PARA Mapping to Notion Structure

### 📦 PROJECTS (sidebar section)

```
📦 Projects/
├── Q1 2026 Rocks          ← Filtered view of Rocks DB (current quarter)
├── 🧪 Active Experiments  ← Filtered view of Experiments DB (in-progress)
├── Comversa Q1 Sprint     ← Project page with embedded tasks
├── GLT Contract Close      
├── Tendery Proposal       
└── System0 v2 Migration   
```

### 🔄 AREAS (ongoing responsibilities — never "done")

```
🔄 Areas/
├── 👥 Clients/
│   ├── Comversa           ← All context, contacts, notes, proposals
│   ├── GLT
│   ├── Konfie
│   └── Kompass
├── 🏗️ Product (system0)/
│   ├── Architecture docs
│   ├── Roadmap
│   └── Technical decisions
├── 💰 Finance/
│   ├── Revenue tracking
│   ├── Cash flow
│   └── Pricing
├── 👤 People/
│   ├── Daniel Restrepo
│   ├── Tomás Shuk
│   └── Sebastian Montoya
└── 📣 Marketing/
    ├── Content calendar
    └── LinkedIn strategy
```

### 📚 RESOURCES (reference material)

```
📚 Resources/
├── Frameworks/
│   ├── EOS Reference
│   ├── Bussgang Experimentation
│   ├── Steve Blank Customer Dev
│   └── AI Huevos Methodology
├── Templates/
│   ├── Proposal template
│   ├── Experiment template
│   └── Interview guide
├── Market Intelligence/
│   ├── LATAM automation landscape
│   └── Competitor analysis
└── 📝 Learnings DB          ← Database of all validated insights
```

### 🗄️ ARCHIVE (completed/dead)

```
🗄️ Archive/
├── Q4 2025/
├── Dead experiments/
├── Lost deals (DRUO, Vistage)/
└── Old proposals/
```

---

## Weekly Operating Rhythm (EOS L10 + Experiments)

```
MONDAY: L10 Meeting (90 min)
┌────────────────────────────────────────┐
│  1. Good news (5 min)                  │
│  2. Scorecard review (5 min)           │
│  3. Rock review + Experiment check (10)│
│  4. Customer/Employee news (5 min)     │
│  5. To-do review (5 min)              │
│  6. IDS — Issues (60 min)             │
│  7. Conclude — new to-dos (5 min)      │
└────────────────────────────────────────┘

FRIDAY: Experiment Review (30 min)
┌────────────────────────────────────────┐
│  1. Running experiments status          │
│  2. Results from completed experiments  │
│  3. New hypotheses from the week        │
│  4. Kill/Pivot/Persevere decisions      │
│  5. Update Learnings DB                 │
└────────────────────────────────────────┘
```

---

## Experiment Template (Bussgang Machine)

Each experiment in the database follows this structure:

```
┌──────────────────────────────────────────┐
│ 🧪 EXPERIMENT: [Name]                    │
├──────────────────────────────────────────┤
│ Rock:        [linked to Rock]            │
│ Area:        [Client/Product/Marketing]  │
│ Owner:       [Danny/Daniel/Tomás]        │
│ Status:      [Queued/Running/Done/Killed]│
├──────────────────────────────────────────┤
│ HYPOTHESIS                               │
│ We believe [action]                      │
│ will result in [outcome]                 │
│ for [customer segment]                   │
├──────────────────────────────────────────┤
│ TEST                                     │
│ Method: [what we'll do]                  │
│ Duration: [timebox]                      │
│ Cost: [budget/time investment]           │
│ Sample: [who/how many]                   │
├──────────────────────────────────────────┤
│ SUCCESS CRITERIA (define BEFORE running) │
│ Signal:  [what metric moves]             │
│ Target:  [specific number]               │
│ Kill if: [what means stop]               │
├──────────────────────────────────────────┤
│ RESULT                                   │
│ Outcome: [what happened]                 │
│ Data:    [evidence]                      │
│ Decision: Pivot / Persevere / Kill       │
├──────────────────────────────────────────┤
│ LEARNING → [linked to Learnings DB]      │
│ What did we learn that's reusable?       │
└──────────────────────────────────────────┘
```

---

## Build Order (Ship Fast)

```
Phase 1: Foundation (TODAY — 2 hours)
├── Create HQ dashboard page
├── Create 6 core databases with relations
├── Migrate existing Rocks data
└── Set up Area tags

Phase 2: Operating Rhythm (THIS WEEK)
├── Create L10 meeting template
├── Set up Scorecard with current KPIs
├── Create first 3 experiments from current Rocks
└── Build filtered views (My Tasks, Active Experiments)

Phase 3: Knowledge System (NEXT WEEK)
├── Set up Learnings DB
├── Create client area pages (Comversa, GLT, etc.)
├── Build Resource templates
└── Archive old/dead content

Phase 4: Polish (WHEN DANIEL JOINS)
├── Onboarding view for Daniel R.
├── Permission structure
└── Automations (Notion → Slack notifications)
```
