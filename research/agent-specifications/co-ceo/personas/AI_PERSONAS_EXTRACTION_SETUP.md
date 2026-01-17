# AI Personas Extraction Setup
## Framework for Mining Customer Language from Transcripts

**Created:** January 17, 2026  
**Purpose:** Extract validated AI personas from meeting transcripts to:
1. Validate copywriting with real customer language
2. Generate sales content that resonates
3. Train AI agents to respond appropriately
4. Test messaging before deployment

---

## AVAILABLE DATA SOURCES

### Tier 1: Full Transcripts (Ready Now)

Located in: `research/fireflies-extraction/transcripts/archive/meeting-transcript-root/`

| File | Content Type | Persona Potential | Status |
|------|--------------|-------------------|--------|
| `Hablemos-Pedro-Daniel-7f2b0496-be78.txt` | Prospect/founder conversation | ⭐ HIGH - CEO/Founder persona | Ready |
| `AI-huevos-en-Fractal-9f315403-980b.txt` | Tech company meeting | ⭐ HIGH - Tech founder persona | Ready |
| `Conversemos-de-Growth-Winter-Huevos-ai.txt` | Growth discussion | Medium - Internal/Growth | Ready |
| `Dani-Sergio-87e17813-a025.txt` | Partner sync | Medium - Partner persona | Ready |
| `Julian-Daniel-ce62f1e3-d63b.txt` | Internal meeting | Low - Internal only | Skip |
| `Mentoria-Sr-Daniel-Cardona.txt` | Mentorship session | Medium - Advisor persona | Ready |
| `Pedro-Dani-1787ffdb-1739.txt` | Follow-up meeting | Medium - Continuation | Ready |

### Tier 2: Metadata + Summaries (Partial)

Located in: `research/fireflies-extraction/wave1_metadata_enriched.json`

- 50 meetings with summaries
- Participant emails (can identify roles)
- Duration and topics
- **Limitation:** No full dialogue, can't extract exact quotes

### Tier 3: Fireflies MCP (Fetch on Demand)

- Can fetch full transcripts via Fireflies MCP tool
- Requires: `fireflies_get_transcript` with meeting ID
- Priority: Customer and prospect meetings first

---

## EXTRACTION WORKFLOW

### Phase 1: Speaker Identification

For each transcript, create a speaker inventory:

```markdown
## Speakers in [Meeting Name]

| Speaker | Role | Company | Persona Candidate? |
|---------|------|---------|-------------------|
| Pedro Londono | CEO | Fractal | ✅ Yes - Founder/CEO |
| Daniel Cardona | Co-founder | AI Huevos | ❌ No - Internal |
```

### Phase 2: Quote Mining

Extract verbatim quotes into categories:

#### A. Pain Language
Statements expressing frustration, problems, challenges.

```markdown
## Pain Quotes

### System/Process Pain
- "Me fue tan mal con todas esas casas desarrollo" - Pedro Londono
- "[Quote 2]"

### Vendor Pain  
- "Me pareció el servicio tan malo" - Pedro Londono

### Operational Pain
- "[Quote]"
```

#### B. Value Language
What they want, aspire to, or value.

```markdown
## Value Quotes

### Efficiency
- "[Quote about wanting things faster/better]"

### Control
- "[Quote about wanting visibility/control]"

### Growth
- "[Quote about scaling/expanding]"
```

#### C. Decision Triggers
What events or moments prompted action.

```markdown
## Decision Triggers

### The Breaking Point
- "Esto no puede ser" - Pedro Londono (repeated frustration)

### The Opportunity
- "Montamos una compañía que ayude un poquito" - Pedro Londono
```

#### D. Objection Language
Pushback, concerns, hesitations.

```markdown
## Objection Quotes

### Price Concerns
- "[Quote]"

### Risk Concerns
- "[Quote]"

### Capability Concerns
- "[Quote]"
```

### Phase 3: Pattern Recognition

Identify communication patterns:

```markdown
## Communication Patterns

### Formality Level
- Informal: Uses "parce", "weón", colloquial language
- Formal: Uses titles, structured sentences

### Pace
- Fast: Interrupts, short sentences, high energy
- Measured: Complete thoughts, pauses

### Decision Style
- Direct: "Dale, hagámoslo" - immediate action
- Analytical: Asks multiple clarifying questions

### Storytelling
- High: Shares origin stories, examples naturally
- Low: Focuses on specifics, data
```

### Phase 4: Persona Synthesis

Combine findings into structured persona:

```markdown
# PERSONA: [Archetype Name]

## Identity
- **Archetype:** [e.g., "The Frustrated Founder"]
- **Based On:** [Real person(s) from transcripts]
- **Role:** [CEO, COO, CFO, etc.]
- **Company Type:** [Enterprise, mid-market, etc.]

## Core Problem
[One sentence describing their main challenge]

## Language Bank

### Pain Expressions (Use in problem-focused copy)
- "[Exact quote 1]"
- "[Exact quote 2]"

### Value Expressions (Use in benefit-focused copy)
- "[Exact quote 1]"
- "[Exact quote 2]"

### Decision Triggers (Use in CTA copy)
- "[What made them act]"

## Communication Preferences

### Do's
- Match their [informal/formal] tone
- Use [short/detailed] explanations
- Reference [specific examples/data]

### Don'ts
- Don't use [corporate jargon/overly casual language]
- Don't assume [X knowledge/context]

## Copywriting Applications

### Headlines That Would Resonate
- "[Headline using their language]"

### Value Props That Match
- "[Value prop in their words]"

### CTAs That Would Work
- "[CTA matching decision style]"
```

---

## PERSONA TEMPLATES

### Template A: Buyer Persona (Role-Based)

```markdown
# BUYER PERSONA: [Role]

## Demographics
- **Title:** [CEO, COO, CFO, VP Operations]
- **Company Size:** [# employees]
- **Industry:** [Hospitality, F&B, Multi-business]
- **Decision Authority:** [Final, Influencer, User]

## Psychographics
- **Primary Goal:** [What they're trying to achieve]
- **Primary Fear:** [What keeps them up at night]
- **Success Metric:** [How they measure success]

## Buying Behavior
- **Trigger Event:** [What makes them start looking]
- **Research Style:** [Referral, search, events]
- **Decision Timeline:** [Days, weeks, months]
- **Key Objections:** [Top 3 concerns]

## Language Profile
- **Vocabulary:** [Industry terms they use]
- **Pain Language:** [How they describe problems]
- **Value Language:** [How they describe solutions]

## Content Preferences
- **Format:** [Deck, doc, demo, conversation]
- **Length:** [Brief, detailed, comprehensive]
- **Proof Type:** [Case studies, metrics, references]
```

### Template B: Customer Language Bank

```markdown
# CUSTOMER LANGUAGE BANK

## Problem Descriptions

### System Fragmentation
| Customer Said | We Could Say |
|---------------|--------------|
| "142 sistemas creando 277 fricciones" | "Your systems don't talk to each other" |
| "Esto no puede ser" | "You've felt this frustration too" |

### Vendor Frustration
| Customer Said | We Could Say |
|---------------|--------------|
| "Me fue tan mal con casas desarrollo" | "Other vendors have let you down" |
| "El servicio tan malo" | "You deserve better than what you've gotten" |

## Value Descriptions

### Efficiency
| Customer Said | We Could Say |
|---------------|--------------|
| "Ayudar a invertir en tecnología" | "Make your tech investment work" |

## Decision Triggers

| Event | Language |
|-------|----------|
| Repeated failure | "Esto no puede ser" (x3) = breaking point |
| Opportunity seen | "Montamos una compañía" = action |

## Objection Language

| Objection | Their Words | Our Response |
|-----------|-------------|--------------|
| [Objection] | "[Quote]" | "[Response]" |
```

---

## IMMEDIATE NEXT STEPS

### Step 1: Process Archive Transcripts

```bash
# Files to process (in order of priority)
1. Hablemos-Pedro-Daniel-7f2b0496-be78.txt → CEO/Founder persona
2. AI-huevos-en-Fractal-9f315403-980b.txt → Tech company persona
3. Conversemos-de-Growth-Winter-Huevos.txt → Growth/Marketing persona
```

### Step 2: Fetch Priority Transcripts via Fireflies MCP

```markdown
## Priority Customer Meetings (need full transcripts)

| Meeting ID | Title | Category | Why Priority |
|------------|-------|----------|--------------|
| 01KCMFNTMZGNDPDPEQ3MVD1BBN | Comversa - Entregables | Customer | Active client, real feedback |
| 01KD8D7DEKMFB5TR508V4AJAX5 | Proyecto IA | Customer | Implementation language |
| 01KD3KMJFJY5DENNPQ54S381R5 | Reunión con Luis N | Customer | Stakeholder perspective |
```

### Step 3: Build Initial Personas

Target: 5-8 distinct personas covering:

| Persona | Source | Status |
|---------|--------|--------|
| Frustrated Founder | Pedro Londono transcript | 🟡 In Progress |
| Enterprise CFO | Customer meetings | ⬜ Pending |
| Operations Leader | Comversa meetings | ⬜ Pending |
| IT Decision Maker | Implementation meetings | ⬜ Pending |
| Advisor/Mentor | Mentorship transcripts | ⬜ Pending |

### Step 4: Validate Against Copywriting

Once personas built:
1. Audit `ai-huevos-narrative-v2.md` against customer language
2. Check `VTO` value props against persona language
3. Validate pitch deck messaging

---

## OUTPUT FILES

This framework will produce:

```
/research/agent-specifications/co-ceo/personas/
├── AI_PERSONAS_EXTRACTION_SETUP.md     # This document
├── buyer_personas.md                   # Role-based personas
├── customer_language_bank.md           # Validated quotes by use case
└── copywriting_validation_report.md    # Audit of current copy
```

---

*Framework ready for execution | January 17, 2026*
