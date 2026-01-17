# Meetings to Fetch via Fireflies MCP

**Created:** January 17, 2026  
**Purpose:** Track high-priority meetings for full transcript extraction

---

## Priority 1: Customer Discovery Meetings (Comversa)

These meetings contain customer stakeholder language critical for copywriting validation.

| Meeting | Fireflies ID | URL | Expected Content |
|---------|--------------|-----|------------------|
| Grupo Comversa - AI huevos | `01K43KCN2YGR0W8CH2RX667YH6` | [Link](https://app.fireflies.ai/view/Grupo-Comversa-AI-huevos::01K43KCN2YGR0W8CH2RX667YH6) | Initial customer discovery, pain points, stakeholder perspectives |
| Reunion proyecto Huevos AI | `01K6BWCTJ0F5YX7WD8M90PE0NM` | [Link](https://app.fireflies.ai/view/Reunion-proyecto-Huevos-AI::01K6BWCTJ0F5YX7WD8M90PE0NM) | Project implementation discussions, technical requirements |
| Comversa Proyecto huevos AI | `01K70KR7EVV6T5Y1DPFNY9G5YY` | [Link](https://app.fireflies.ai/view/Comversa-Proyecto-huevos-AI::01K70KR7EVV6T5Y1DPFNY9G5YY) | Project feedback, stakeholder reactions |

### What to Extract

- [ ] Customer pain language (exact quotes)
- [ ] Decision-maker vocabulary
- [ ] Objection patterns
- [ ] Value expressions
- [ ] Communication style per stakeholder

---

## Priority 2: Pre-Founding Strategic Meeting

| Meeting | Fireflies ID | URL | Expected Content |
|---------|--------------|-----|------------------|
| Tomas | `01K4G5JS23ZG0H4HPH5EYP4TAZ` | [Link](https://app.fireflies.ai/view/Tomas::01K4G5JS23ZG0H4HPH5EYP4TAZ) | Pre-founding strategic discussion with Tomas Shuk |

### What to Extract

- [ ] Advisor/investor persona language
- [ ] Portfolio-level thinking patterns
- [ ] Risk assessment vocabulary
- [ ] Partnership evaluation criteria
- [ ] Founder DNA validation

---

## How to Fetch

### Option 1: Fireflies MCP (Preferred)

When MCP is connected:

```
Tool: fireflies_get_transcript
Parameter: meeting_id

IDs to fetch:
- 01K43KCN2YGR0W8CH2RX667YH6
- 01K6BWCTJ0F5YX7WD8M90PE0NM
- 01K70KR7EVV6T5Y1DPFNY9G5YY
- 01K4G5JS23ZG0H4HPH5EYP4TAZ
```

### Option 2: Manual Export

1. Go to each Fireflies URL
2. Export transcript as TXT
3. Save to `research/fireflies-extraction/transcripts/` with appropriate category

---

## Post-Fetch Processing

Once transcripts are available:

1. **Categorize** - Place in correct folder (customer/, founding-team/, advisor/)
2. **Extract Personas** - Use framework in `personas/AI_PERSONAS_EXTRACTION_SETUP.md`
3. **Update Language Bank** - Add quotes to `personas/customer_language_bank.md`
4. **Update Personas** - Enrich existing personas in `personas/buyer_personas.md`

---

## Current Status

| Meeting | Full Transcript? | Personas Extracted? | Language Banked? |
|---------|-----------------|---------------------|------------------|
| Grupo Comversa | ❌ No | ❌ No | ❌ No |
| Reunion proyecto | ❌ No | ❌ No | ❌ No |
| Comversa Proyecto | ❌ No | ❌ No | ❌ No |
| Tomas | ❌ No | ❌ No | ❌ No |

---

*Last Updated: January 17, 2026*
