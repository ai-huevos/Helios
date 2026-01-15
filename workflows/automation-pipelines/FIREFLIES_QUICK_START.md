# Fireflies Extraction - Quick Start Guide

## 🚀 TL;DR

**Objetivo**: Extraer TODOS los transcripts de Fireflies → Categorizar → Analizar → Generar artifacts

**Método**: 4 waves de agentes paralelos (10x más rápido)

**Duración**: ~70-135 minutos (vs 10+ horas manual)

---

## 📋 Prompt para Cursor (Copy-Paste)

### Opción 1: Full Workflow (Recomendado)

```
Execute the complete Fireflies Transcript Extraction workflow.

Read the full instructions from:
workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Run all 4 waves sequentially (each wave runs agents in parallel):
- Wave 1: Discovery & Categorization (3 agents parallel)
- Wave 2: Transcript Extraction (4 agents parallel)
- Wave 3: Insights Analysis (4 agents parallel)
- Wave 4: Artifact Synthesis (1 agent sequential)

Save all outputs to research/fireflies-extraction/ per the documented structure.

Start execution now.
```

---

### Opción 2: Wave-by-Wave (Control Granular)

#### Wave 1: Discovery
```
Execute Wave 1 from workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Run 3 agents in parallel:
1. List all Fireflies meetings → save to research/fireflies-extraction/wave1_all_meetings.json
2. Extract metadata → save to research/fireflies-extraction/wave1_metadata_enriched.json
3. Categorize by type → save to research/fireflies-extraction/wave1_categorized.json

Use Fireflies MCP to access meetings.

Start now.
```

#### Wave 2: Extraction (After Wave 1 completes)
```
Execute Wave 2 from workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Read wave1_categorized.json

Run 4 agents in parallel (one per category):
1. Extract customer transcripts → research/fireflies-extraction/transcripts/customer/
2. Extract founding team transcripts → research/fireflies-extraction/transcripts/founding-team/
3. Extract advisor transcripts → research/fireflies-extraction/transcripts/advisors/
4. Extract prospect transcripts → research/fireflies-extraction/transcripts/prospects/

Use Fireflies MCP to get full transcripts.

Start now.
```

#### Wave 3: Analysis (After Wave 2 completes)
```
Execute Wave 3 from workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Read all transcripts from research/fireflies-extraction/transcripts/

Run 4 agents in parallel:
1. Customer insights → research/fireflies-extraction/insights/customer_insights.md
2. Founder DNA → research/fireflies-extraction/insights/founder_dna.md
3. Strategic insights → research/fireflies-extraction/insights/strategic_insights.md
4. GTM intelligence → research/fireflies-extraction/insights/gtm_intelligence.md

Follow extraction templates in the workflow doc.

Start now.
```

#### Wave 4: Synthesis (After Wave 3 completes)
```
Execute Wave 4 from workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Read all insights from research/fireflies-extraction/insights/

Generate 8 strategic artifacts:
1. strategic_dna.md
2. founder_profiles.md
3. customer_empathy_map.md
4. tone_of_voice.md
5. product_marketing_narrative.md
6. competitive_landscape.md
7. decision_frameworks.md
8. gtm_playbook.md

Save to: research/agent-specifications/co-ceo/artifacts/

Create final report: research/fireflies-extraction/FINAL_SYNTHESIS_REPORT.md

Start now.
```

---

## 🌊 Visual Workflow

```
┌─────────────────────────────────────────────────────────┐
│  WAVE 1: Discovery & Categorization (5 min)            │
│                                                         │
│  Agent 1: List Meetings    ┐                           │
│  Agent 2: Extract Metadata ├─→ Run in parallel         │
│  Agent 3: Categorize       ┘                           │
│                                                         │
│  Output: wave1_*.json                                  │
└─────────────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│  WAVE 2: Transcript Extraction (15-30 min)             │
│                                                         │
│  Agent 4: Customer transcripts     ┐                   │
│  Agent 5: Founding team transcripts├─→ Run in parallel │
│  Agent 6: Advisor transcripts      │                   │
│  Agent 7: Prospect transcripts     ┘                   │
│                                                         │
│  Output: transcripts/[category]/                       │
└─────────────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│  WAVE 3: Insights Analysis (20-40 min)                 │
│                                                         │
│  Agent 8:  Customer insights      ┐                    │
│  Agent 9:  Founder DNA            ├─→ Run in parallel  │
│  Agent 10: Strategic insights     │                    │
│  Agent 11: GTM intelligence       ┘                    │
│                                                         │
│  Output: insights/*.md                                 │
└─────────────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│  WAVE 4: Artifact Synthesis (30-60 min)                │
│                                                         │
│  Agent 12: Consolidate & Generate                      │
│                                                         │
│  Output: 8 strategic artifacts                         │
│          + Final synthesis report                      │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Expected Outputs

### Wave 1 Outputs
```
research/fireflies-extraction/
├── wave1_all_meetings.json          (list of all meetings)
├── wave1_metadata_enriched.json     (metadata + topics)
└── wave1_categorized.json           (meetings by category)
```

### Wave 2 Outputs
```
research/fireflies-extraction/transcripts/
├── customer/
│   ├── INDEX.md
│   ├── [meeting_id_1].txt
│   └── [meeting_id_2].txt
├── founding-team/
├── advisors/
└── prospects/
```

### Wave 3 Outputs
```
research/fireflies-extraction/insights/
├── customer_insights.md      (pains, validation, ROI)
├── founder_dna.md            (values, vision, decisions)
├── strategic_insights.md     (advisor guidance)
└── gtm_intelligence.md       (objections, messaging, wins)
```

### Wave 4 Outputs
```
research/agent-specifications/co-ceo/artifacts/
├── strategic_dna.md
├── founder_profiles.md
├── customer_empathy_map.md
├── tone_of_voice.md
├── product_marketing_narrative.md
├── competitive_landscape.md
├── decision_frameworks.md
└── gtm_playbook.md

research/fireflies-extraction/
└── FINAL_SYNTHESIS_REPORT.md
```

---

## ⚡ Why Parallel Execution?

### Sequential (Old Way)
```
Agent 1 → Agent 2 → Agent 3 → ... → Agent 12
[        10+ hours total        ]
```

### Parallel (New Way)
```
Wave 1: [Agent 1, 2, 3]        → 5 min
Wave 2: [Agent 4, 5, 6, 7]     → 30 min
Wave 3: [Agent 8, 9, 10, 11]   → 40 min
Wave 4: [Agent 12]             → 60 min
                        Total: ~135 min (10x faster)
```

---

## ✅ Success Checklist

After Wave 1:
- [ ] `wave1_all_meetings.json` exists (all Fireflies meetings listed)
- [ ] `wave1_metadata_enriched.json` exists (topics extracted)
- [ ] `wave1_categorized.json` exists (meetings categorized)

After Wave 2:
- [ ] Transcripts in `transcripts/customer/` (Los Tajibos, Bolivian Foods, Comversa)
- [ ] Transcripts in `transcripts/founding-team/` (Tomas, Daniel R, Daniel C)
- [ ] Transcripts in `transcripts/advisors/`
- [ ] Transcripts in `transcripts/prospects/`
- [ ] Each category has `INDEX.md`

After Wave 3:
- [ ] `insights/customer_insights.md` (pain points, validation)
- [ ] `insights/founder_dna.md` (values, vision, language)
- [ ] `insights/strategic_insights.md` (advisor guidance)
- [ ] `insights/gtm_intelligence.md` (objections, messaging)

After Wave 4:
- [ ] 8 artifacts in `research/agent-specifications/co-ceo/artifacts/`
- [ ] `FINAL_SYNTHESIS_REPORT.md` created
- [ ] Co-CEO ready for deployment

---

## 🚨 Troubleshooting

### Fireflies MCP not accessible
```
Check MCP configuration:
- Is Fireflies MCP installed?
- Are credentials configured?
- Can you list meetings manually?
```

### Agents not running in parallel
```
In Cursor:
- Explicitly say "run these N agents in parallel"
- Send all agent instructions in a single message
- Use parallel execution syntax
```

### Output files in wrong location
```
Remember:
- NO files in root
- Follow structure: research/fireflies-extraction/
- See .claude/CLAUDE.md for rules
```

---

## 📖 Full Documentation

For complete details, see:
**`workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md`**

Includes:
- Detailed agent instructions
- Extraction templates
- Categorization logic
- Output format specifications
- Synthesis guidelines

---

**Ready to 10x your transcript analysis?**
**Copy a prompt above and paste into Cursor.** 🚀🥚
