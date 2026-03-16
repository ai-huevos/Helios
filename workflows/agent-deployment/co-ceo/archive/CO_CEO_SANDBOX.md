# Co-CEO AI Sandbox - Interactive Validation Environment

## 🎯 Purpose

This sandbox allows you to interact with the Co-CEO AI agent to:
- **Validate company information** against documented knowledge base
- **Test strategic alignment** of decisions or proposals
- **Generate brand-consistent content** (copy, messaging, pitches)
- **Get strategic counsel** grounded in founder frameworks
- **Check information accuracy** across all documentation

---

## 🚀 How to Use This Sandbox

### Option 1: Direct Chat (Recommended)

Simply start a conversation with the Co-CEO by saying:

```
I want to talk to the Co-CEO agent. Please load the system prompt from:
workflows/agent-deployment/co-ceo/CO_CEO_SYSTEM_PROMPT.md

And make all artifacts available from:
research/agent-specifications/co-ceo/artifacts/

Then I'll ask questions about the company.
```

### Option 2: Using This Prompt Template

Copy this prompt and customize:

```markdown
# Co-CEO Agent Activation

I need to validate company information and get strategic counsel from the Co-CEO AI.

**System Prompt**: Load from `workflows/agent-deployment/co-ceo/CO_CEO_SYSTEM_PROMPT.md`

**Knowledge Base**: Make available all artifacts from `research/agent-specifications/co-ceo/artifacts/`:
- strategic_dna.md
- founder_profiles.md
- tone_of_voice.md
- product_marketing_narrative.md
- customer_empathy_map.md
- competitive_landscape.md
- gtm_playbook.md
- decision_frameworks.md

**My Question/Request**: [YOUR QUESTION HERE]

**Context**: [OPTIONAL - provide any relevant context]
```

---

## 📋 Common Use Cases

### 1. Validate Information Accuracy

**Template**:
```
Co-CEO, I need to validate this information:

[STATEMENT TO VALIDATE]

Can you check this against the knowledge base and confirm if it's accurate? 
If it's incorrect, please provide the correct information with sources.
```

**Examples**:
- "Is our pricing model $5K for diagnosis and $899 per macroproceso?"
- "Do we target startups as customers?"
- "Is our current positioning fractional CMO services?"
- "What are our core values regarding bootstrap sustainability?"

---

### 2. Test Strategic Alignment

**Template**:
```
Co-CEO, I'm considering this decision/proposal:

[DESCRIBE DECISION/PROPOSAL]

Does this align with our core values and strategic DNA? 
What are the risks? What would the founders likely think?
```

**Examples**:
- "Should we raise VC funding now?"
- "Should we expand to target startups?"
- "Is this messaging on-brand?"
- "Does this partnership align with our values?"

---

### 3. Generate Brand-Consistent Content

**Template**:
```
Co-CEO, I need to create [CONTENT TYPE] for [AUDIENCE]:

[DESCRIBE CONTENT NEED]

Please draft this using our tone of voice and strategic DNA. 
Make sure it sounds like the founders, not generic AI.
```

**Examples**:
- "Draft a website hero message for enterprise customers"
- "Create an email to a family office prospect"
- "Write a pitch deck slide about our value proposition"
- "Generate social media post about our agent infrastructure"

---

### 4. Get Strategic Counsel

**Template**:
```
Co-CEO, I need strategic guidance on:

[STRATEGIC QUESTION]

Please use our decision frameworks and founder patterns to provide counsel. 
What would Daniel Cardona, Daniel Restrepo, or Tomas Shuk likely recommend?
```

**Examples**:
- "How should we prioritize these 5 opportunities?"
- "What's the best GTM approach for this vertical?"
- "How do we position against this competitor?"
- "What trade-offs should we consider here?"

---

### 5. Check Consistency Across Documents

**Template**:
```
Co-CEO, I found this information in [DOCUMENT]:

[QUOTE OR CLAIM]

Does this match what's documented in the knowledge base? 
Are there any contradictions I should know about?
```

**Examples**:
- "This pitch deck says X, but the financials say Y"
- "This customer research conflicts with our positioning"
- "This meeting transcript mentions something not in other docs"

---

## 🔍 Validation Checklist

When validating information, the Co-CEO will check:

- [ ] **Strategic Alignment** - Aligns with core values and mission?
- [ ] **Brand Consistency** - Matches tone of voice and messaging?
- [ ] **Product Accuracy** - Correctly describes deliverables and pricing?
- [ ] **Market Positioning** - Aligns with current positioning (agent infrastructure)?
- [ ] **Founder Voice** - Sounds like the founding team?
- [ ] **Timeline Accuracy** - Is it current (Dec 2025) or outdated?
- [ ] **Source Cross-Reference** - Consistent across multiple artifacts?

---

## 📊 Expected Response Format

The Co-CEO will respond with:

1. **Direct Answer** - Clear yes/no or answer to your question
2. **Evidence** - Quotes from relevant artifacts
3. **Source References** - Which artifacts support the answer
4. **Context** - Strategic implications or considerations
5. **Actionable Guidance** - What to do next (if applicable)
6. **Flagged Uncertainties** - What needs founder clarification (if any)

---

## 🎨 Example Conversations

### Example 1: Validation

**You**: "Is it true that we charge $5,000 for organizational archaeology diagnosis?"

**Co-CEO**: 
✅ **Yes, that's accurate.**

**Source**: Current deliverables catalog (referenced in system prompt)

**Evidence**: From Dec 2025 financial structure:
- Diagnóstico: $5,000 per empresa
- Macroprocesos: $899 each
- Microprocesos: $299 each
- Agents/Automations: $500-$2,500 each
- Director AI: $8,500 setup + $20/user/month

**Context**: This is part of the Trojan Horse strategy - workflows prove ROI, then 30-40% convert to infrastructure.

---

### Example 2: Strategic Alignment

**You**: "We're thinking of launching a fractional CMO service. Should we?"

**Co-CEO**:
❌ **No, this conflicts with our strategic evolution.**

**Issue**: We evolved FROM fractional CMO positioning TO agent infrastructure (Dec 2025).

**Current Positioning**: Agent infrastructure for enterprises - Organizational Archaeology → Process Mapping → Agent Deployment

**Strategic DNA**: From `strategic_dna.md`:
- Current model: Agent infrastructure, not consulting services
- Customer profile: Family offices with 3+ business models
- Deliverables: Agents, automations, infrastructure - not fractional services

**Recommendation**: Focus on vertical replication of existing agent infrastructure model, not reverting to old positioning.

---

### Example 3: Content Generation

**You**: "Draft a hero message for our website homepage for enterprise prospects."

**Co-CEO**:

[Generated content using tone_of_voice.md and strategic_dna.md]

**"Transforma el caos operativo en sistemas inteligentes"**

[More content following brand guidelines...]

**Voice Check**: ✅ Claro, sencillo, directo, humano (not corporate)
**Strategic Alignment**: ✅ Reflects agent infrastructure positioning
**Customer Language**: ✅ Uses pain language from customer empathy map

---

## ⚠️ Limitations & Notes

### What the Co-CEO Can Do:
- ✅ Validate information against documented knowledge
- ✅ Provide strategic counsel using founder frameworks
- ✅ Generate brand-consistent content
- ✅ Flag contradictions or inconsistencies
- ✅ Apply decision frameworks to evaluate opportunities

### What the Co-CEO Cannot Do:
- ❌ Access real-time company data or external APIs
- ❌ Make decisions (only provides counsel)
- ❌ Know information not in artifacts
- ❌ Replace founder judgment for critical strategic decisions

### When to Escalate:
- **Major strategic pivots** → Consult founders directly
- **Financial commitments** → Require founder approval
- **Partnership decisions** → Require founder review
- **Information not in artifacts** → Flag for documentation update

---

## 🔄 Continuous Improvement

As you use the sandbox:

1. **Document gaps** - What information is missing from artifacts?
2. **Flag contradictions** - What conflicts did you find?
3. **Refine responses** - What worked well? What didn't?
4. **Update artifacts** - Keep knowledge base current

The Co-CEO improves as artifacts are refined and updated.

---

## 📖 Quick Reference

**System Prompt Location**: `workflows/agent-deployment/co-ceo/CO_CEO_SYSTEM_PROMPT.md`

**Artifacts Location**: `research/agent-specifications/co-ceo/artifacts/`

**Discovery Prompt** (for reference): `workflows/agent-deployment/co-ceo/CO_CEO_DISCOVERY_PROMPT.md`

---

## 🚀 Getting Started

1. **Load the system prompt** from `CO_CEO_SYSTEM_PROMPT.md`
2. **Make artifacts available** from `artifacts/` directory
3. **Start your conversation** using the templates above
4. **Iterate** based on responses and refine questions

**Ready to validate? Start your conversation now!** 🥚
