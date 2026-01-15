# Fireflies Transcript Extraction & Analysis Workflow

## 🎯 Objetivo

Extraer y analizar **TODOS** los meeting transcripts de Fireflies usando agentes paralelos para:
1. Categorizar meetings por tipo (customer, founding team, advisors, prospects)
2. Extraer transcripts completos
3. Analizar insights por categoría
4. Generar artefactos estratégicos

## 📊 Contexto

**Fireflies MCP disponible** con acceso a:
- ✅ Customer meetings (Comversa, Los Tajibos, Bolivian Foods)
- ✅ Founding team calls (Tomas, Daniel Restrepo, Daniel Cardona)
- ✅ Advisor sessions
- ✅ Prospect calls
- ✅ Partner conversations

**Objetivo**: Procesar 10x más rápido usando **ejecución paralela en waves**.

---

## 🌊 Wave-Based Parallel Execution Strategy

### Wave 1: Discovery & Categorization (Parallel)
**Duration**: ~5 minutes
**Agents**: 3 agents running in parallel

```
Agent 1: List All Meetings    ┐
Agent 2: Extract Metadata      ├─→ All run in parallel
Agent 3: Categorize by Type    ┘
```

### Wave 2: Transcript Extraction (Parallel by Category)
**Duration**: ~15-30 minutes (depends on # of meetings)
**Agents**: 4 agents running in parallel (one per category)

```
Agent 4: Extract Customer Meetings     ┐
Agent 5: Extract Founding Team         ├─→ All run in parallel
Agent 6: Extract Advisor Sessions      │
Agent 7: Extract Prospect Calls        ┘
```

### Wave 3: Insights Analysis (Parallel by Type)
**Duration**: ~20-40 minutes
**Agents**: 4 agents running in parallel

```
Agent 8:  Customer Insights Extraction    ┐
Agent 9:  Founder DNA Extraction          ├─→ All run in parallel
Agent 10: Strategic Insights Extraction   │
Agent 11: GTM Intelligence Extraction     ┘
```

### Wave 4: Artifact Synthesis (Sequential)
**Duration**: ~30-60 minutes
**Agents**: 1 agent (uses all previous outputs)

```
Agent 12: Consolidate & Generate Artifacts
```

**Total Duration**: ~70-135 minutes (vs 10+ hours sequential)

---

## 🤖 Cursor Prompt: Complete Workflow

### Master Prompt (Copy-Paste to Cursor)

```markdown
# Fireflies Transcript Extraction & Analysis - Multi-Wave Parallel Execution

## Context
Repository: AI Huevos Brand Guidelines
Fireflies MCP: Available and configured
Goal: Extract ALL meeting transcripts, categorize, analyze, and generate strategic artifacts

## Architecture Awareness
- Output locations MUST follow repo architecture (see .claude/CLAUDE.md)
- NO files in root (except core docs)
- Use proper directories: research/, docs/architecture/, etc.

---

## WAVE 1: Discovery & Categorization (RUN IN PARALLEL)

### Agent 1: List All Meetings
**Task**: Use Fireflies MCP to list ALL meetings

**Instructions**:
1. Call Fireflies MCP API to list all meetings
2. Retrieve: meeting_id, title, date, participants, duration
3. Save to: `research/fireflies-extraction/wave1_all_meetings.json`
4. Format: JSON array with all meeting metadata

**Output**:
```json
[
  {
    "meeting_id": "abc123",
    "title": "Los Tajibos - Service Desk Review",
    "date": "2024-11-15",
    "participants": ["Daniel Restrepo", "Juan GM"],
    "duration_minutes": 45,
    "fireflies_url": "..."
  },
  ...
]
```

---

### Agent 2: Extract Metadata
**Task**: Enrich metadata for each meeting

**Instructions**:
1. Read `wave1_all_meetings.json`
2. For each meeting, extract:
   - Topics discussed (from title/summary)
   - Company/client mentioned
   - Meeting type indicators (discovery, feedback, strategy, etc.)
3. Save to: `research/fireflies-extraction/wave1_metadata_enriched.json`

**Output**: Enhanced JSON with topic tags

---

### Agent 3: Categorize by Type
**Task**: Categorize meetings into 4 types

**Instructions**:
1. Read `wave1_metadata_enriched.json`
2. Categorize each meeting using logic below
3. Save to: `research/fireflies-extraction/wave1_categorized.json`

**Categorization Logic**:

| Category | Participants Include | Examples |
|----------|---------------------|----------|
| `customer` | Comversa, Los Tajibos, Bolivian Foods contacts | "Los Tajibos - Service Desk Review" |
| `founding_team` | Tomas + Daniel Restrepo + Daniel Cardona (any 2+) | "Growth Strategy - Tomas & Daniel" |
| `advisor` | Bambos, external mentors | "Mentoria Sr Daniel Cardona" |
| `prospect` | Unknown contacts, demo/discovery keywords | "Discovery Call - Fintech Colombia" |
| `partner` | Fractal, ecosystem partners | "AI Huevos en Fractal" |

**Output**:
```json
{
  "customer": ["meeting_id_1", "meeting_id_2", ...],
  "founding_team": ["meeting_id_10", ...],
  "advisor": ["meeting_id_20", ...],
  "prospect": ["meeting_id_30", ...],
  "partner": ["meeting_id_40", ...]
}
```

---

## ⏸️ CHECKPOINT: Wait for Wave 1 to Complete

Verify:
- ✅ `wave1_all_meetings.json` exists
- ✅ `wave1_metadata_enriched.json` exists
- ✅ `wave1_categorized.json` exists

---

## WAVE 2: Transcript Extraction (RUN IN PARALLEL)

### Agent 4: Extract Customer Meeting Transcripts
**Task**: Extract all customer meeting transcripts

**Instructions**:
1. Read `wave1_categorized.json` → get `customer` meeting IDs
2. For each meeting ID:
   - Call Fireflies MCP to get full transcript
   - Save to: `research/fireflies-extraction/transcripts/customer/[meeting_id].txt`
   - Include metadata header (date, participants, duration)
3. Create index: `research/fireflies-extraction/transcripts/customer/INDEX.md`

**Output**: Individual transcript files + INDEX.md

---

### Agent 5: Extract Founding Team Transcripts
**Task**: Extract founding team meeting transcripts

**Instructions**: Same as Agent 4, but for `founding_team` category
**Output**: `research/fireflies-extraction/transcripts/founding-team/`

---

### Agent 6: Extract Advisor Session Transcripts
**Task**: Extract advisor session transcripts

**Instructions**: Same as Agent 4, but for `advisor` category
**Output**: `research/fireflies-extraction/transcripts/advisors/`

---

### Agent 7: Extract Prospect Call Transcripts
**Task**: Extract prospect call transcripts

**Instructions**: Same as Agent 4, but for `prospect` category
**Output**: `research/fireflies-extraction/transcripts/prospects/`

---

## ⏸️ CHECKPOINT: Wait for Wave 2 to Complete

Verify:
- ✅ All transcripts extracted to `research/fireflies-extraction/transcripts/[category]/`
- ✅ Each category has INDEX.md

---

## WAVE 3: Insights Analysis (RUN IN PARALLEL)

### Agent 8: Customer Insights Extraction
**Task**: Analyze ALL customer transcripts for insights

**Instructions**:
1. Read all files in `transcripts/customer/`
2. Extract:
   - Pain points mentioned (with quotes)
   - Solution validation moments
   - Feature requests
   - Value realization statements
   - ROI mentions
   - Objections/concerns
3. Organize by client (Los Tajibos, Bolivian Foods, Comversa)
4. Save to: `research/fireflies-extraction/insights/customer_insights.md`

**Template**:
```markdown
# Customer Insights

## Los Tajibos

### Pain Points
- [Pain 1] - Source: [Meeting Date]
  - Quote: "..."

### Solution Validation
- [Validation 1] - Source: [Meeting Date]
  - Quote: "..."

### Feature Requests
...

## Bolivian Foods
...

## Comversa
...

## Cross-Client Patterns
- Common pain: ...
- Common validation: ...
```

---

### Agent 9: Founder DNA Extraction
**Task**: Analyze founding team transcripts for strategic DNA

**Instructions**:
1. Read all files in `transcripts/founding-team/`
2. Extract:
   - Core values (with supporting quotes)
   - Vision statements
   - Decision-making examples
   - Strategic pivots
   - Founder language fingerprints (recurring phrases)
   - Disagreements & resolutions
3. Organize by theme
4. Save to: `research/fireflies-extraction/insights/founder_dna.md`

**Template**:
```markdown
# Founder DNA

## Core Values

### Value 1: [Name]
- Evidence:
  - Quote: "..." - [Date, Participants]
  - Quote: "..." - [Date, Participants]

## Vision Evolution

### Early Vision (2024-Q3)
- Quote: "..."

### Current Vision (2025-Q1)
- Quote: "..."

## Decision-Making Patterns

### Example 1: [Decision]
- Context: ...
- Trade-offs discussed: ...
- Resolution: ...
- Source: [Meeting]

## Language Fingerprints

### Daniel Restrepo
- Recurring phrases: "...", "...", "..."

### Tomas
- Recurring phrases: "...", "...", "..."

### Daniel Cardona
- Recurring phrases: "...", "...", "..."
```

---

### Agent 10: Strategic Insights Extraction
**Task**: Analyze advisor sessions for strategic guidance

**Instructions**:
1. Read all files in `transcripts/advisors/`
2. Extract:
   - Strategic recommendations
   - Expertise injections (GTM, logistics, etc.)
   - Blind spots identified
   - Validation/challenges
   - Network intelligence
3. Organize by advisor
4. Save to: `research/fireflies-extraction/insights/strategic_insights.md`

**Template**:
```markdown
# Strategic Insights (Advisors)

## Daniel Cardona (Mentor)

### Key Recommendations
- [Recommendation] - [Date]
  - Context: ...
  - Quote: "..."

### Blind Spots Identified
...

## Bambos Kaisharis (Ex-Google, GTM)

### GTM Guidance
...

## Cross-Advisor Themes
- Common theme 1: ...
```

---

### Agent 11: GTM Intelligence Extraction
**Task**: Analyze prospect calls for GTM insights

**Instructions**:
1. Read all files in `transcripts/prospects/`
2. Extract:
   - Objections raised
   - Messaging that resonated
   - Competitive mentions
   - Pricing discussions
   - Decision criteria
   - Win/loss patterns
3. Save to: `research/fireflies-extraction/insights/gtm_intelligence.md`

**Template**:
```markdown
# GTM Intelligence (Prospect Calls)

## Objections Analysis

### Objection 1: [Theme]
- Frequency: X times
- Examples:
  - Quote: "..." - [Prospect, Date]

## Messaging That Resonated

### Message 1: [Theme]
- Examples:
  - Quote: "..." - [Prospect, Date]

## Competitive Intel

### Competitor Mentions
- [Competitor]: Mentioned X times
  - Context: ...

## Decision Criteria

### What Prospects Care About
1. [Criteria 1] - Frequency: X
2. [Criteria 2] - Frequency: Y

## Win/Loss Patterns
...
```

---

## ⏸️ CHECKPOINT: Wait for Wave 3 to Complete

Verify:
- ✅ `insights/customer_insights.md` exists
- ✅ `insights/founder_dna.md` exists
- ✅ `insights/strategic_insights.md` exists
- ✅ `insights/gtm_intelligence.md` exists

---

## WAVE 4: Artifact Synthesis (SEQUENTIAL)

### Agent 12: Consolidate & Generate Artifacts
**Task**: Synthesize all insights into Co-CEO discovery artifacts

**Instructions**:
1. Read ALL insights from Wave 3:
   - `customer_insights.md`
   - `founder_dna.md`
   - `strategic_insights.md`
   - `gtm_intelligence.md`

2. Generate the following artifacts in `research/agent-specifications/co-ceo/artifacts/`:

   - **strategic_dna.md**
     - Core values (from `founder_dna.md`)
     - Mission statement
     - Vision statement
     - Positioning statement

   - **founder_profiles.md**
     - Per founder: background, communication style, decision patterns
     - Language fingerprints
     - Strengths

   - **customer_empathy_map.md**
     - Customer archetypes (Los Tajibos, Bolivian Foods, Comversa)
     - Jobs To Be Done (from `customer_insights.md`)
     - Pain intensity map
     - Value realization patterns

   - **tone_of_voice.md**
     - Personality traits (from founder language)
     - Voice principles
     - Dos & Don'ts (20+ examples)

   - **product_marketing_narrative.md**
     - Story arc (problem → solution → transformation)
     - Feature-benefit translations (from customer feedback)
     - Proof points (traction, case studies)

   - **competitive_landscape.md**
     - Competitive map (from GTM intelligence)
     - Differentiation matrix
     - Battle cards

   - **decision_frameworks.md**
     - Strategic prioritization (from founder DNA)
     - Trade-off principles
     - Investment criteria

   - **gtm_playbook.md** (NEW)
     - Objection handling (from GTM intelligence)
     - Messaging that works
     - Decision criteria
     - Win patterns

3. Create summary: `research/fireflies-extraction/FINAL_SYNTHESIS_REPORT.md`

**Output**: 8+ strategic artifacts ready for Co-CEO deployment

---

## 📂 Output Structure

```
research/
├── fireflies-extraction/
│   ├── wave1_all_meetings.json
│   ├── wave1_metadata_enriched.json
│   ├── wave1_categorized.json
│   │
│   ├── transcripts/
│   │   ├── customer/
│   │   │   ├── INDEX.md
│   │   │   ├── [meeting_id_1].txt
│   │   │   └── [meeting_id_2].txt
│   │   ├── founding-team/
│   │   ├── advisors/
│   │   ├── prospects/
│   │   └── partners/
│   │
│   ├── insights/
│   │   ├── customer_insights.md
│   │   ├── founder_dna.md
│   │   ├── strategic_insights.md
│   │   └── gtm_intelligence.md
│   │
│   └── FINAL_SYNTHESIS_REPORT.md
│
└── agent-specifications/
    └── co-ceo/
        └── artifacts/
            ├── strategic_dna.md
            ├── founder_profiles.md
            ├── customer_empathy_map.md
            ├── tone_of_voice.md
            ├── product_marketing_narrative.md
            ├── competitive_landscape.md
            ├── decision_frameworks.md
            └── gtm_playbook.md
```

---

## 🚀 Execution Instructions for Cursor

### Step 1: Launch Wave 1 (Parallel)
```
Run 3 agents in parallel:
- Agent 1: List all Fireflies meetings
- Agent 2: Extract metadata
- Agent 3: Categorize by type

Wait for all 3 to complete before proceeding.
```

### Step 2: Launch Wave 2 (Parallel)
```
Run 4 agents in parallel:
- Agent 4: Extract customer transcripts
- Agent 5: Extract founding team transcripts
- Agent 6: Extract advisor transcripts
- Agent 7: Extract prospect transcripts

Wait for all 4 to complete before proceeding.
```

### Step 3: Launch Wave 3 (Parallel)
```
Run 4 agents in parallel:
- Agent 8: Customer insights extraction
- Agent 9: Founder DNA extraction
- Agent 10: Strategic insights extraction
- Agent 11: GTM intelligence extraction

Wait for all 4 to complete before proceeding.
```

### Step 4: Launch Wave 4 (Sequential)
```
Run 1 agent:
- Agent 12: Consolidate & generate artifacts
```

---

## ✅ Success Criteria

After execution:
- ✅ All Fireflies meetings categorized
- ✅ All transcripts extracted to proper locations
- ✅ 4 insights documents created (customer, founder, strategic, GTM)
- ✅ 8 strategic artifacts generated
- ✅ Final synthesis report completed
- ✅ Co-CEO has comprehensive strategic DNA

---

## 📊 Expected Impact

**Before**:
- Manual transcript review: 10+ hours
- Sequential processing: slow, error-prone
- Incomplete insights extraction

**After**:
- Automated extraction: ~70-135 minutes
- Parallel processing: 10x faster
- Comprehensive insights: 4 documents + 8 artifacts
- Co-CEO ready for deployment

---

**Status**: 🟢 Ready for execution
**Owner**: Dev Team
**Timeline**: ~2-3 hours total execution time
**Dependencies**: Fireflies MCP configured
```

---

## 🎯 Quick Start for Cursor

Copy-paste this to Cursor:

```
Execute the Fireflies Transcript Extraction workflow from:
workflows/automation-pipelines/FIREFLIES_TRANSCRIPT_EXTRACTION.md

Run in 4 waves:
- Wave 1: Discovery (3 agents in parallel)
- Wave 2: Extraction (4 agents in parallel)
- Wave 3: Analysis (4 agents in parallel)
- Wave 4: Synthesis (1 agent sequential)

Follow the master prompt exactly.
Save all outputs to research/fireflies-extraction/ per the structure.

Start with Wave 1 now.
```

---

**Last Updated**: 2026-01-15
**Maintained By**: AI Huevos Dev Team
