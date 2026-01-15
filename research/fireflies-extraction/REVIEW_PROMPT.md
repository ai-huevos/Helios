# Review Prompt for Parallel Model Analysis

**Use this prompt with another AI model to review the Fireflies transcript extraction workflow for misalignments, gaps, and improvements.**

---

## Prompt to Copy-Paste

```
I need you to perform a comprehensive review of a parallel workflow execution that extracted and analyzed 50 meeting transcripts from Fireflies.ai. Your task is to identify misalignments, inconsistencies, gaps, and opportunities for improvement across all generated artifacts.

## Context

A 4-wave parallel execution workflow was completed:
- Wave 1: Discovery & Categorization (50 meetings extracted, enriched, categorized)
- Wave 2: Transcript Extraction (structure created with summaries)
- Wave 3: Insights Analysis (4 insight documents created)
- Wave 4: Artifact Synthesis (8 strategic artifacts generated)

## Files to Review

### Wave 1 Outputs
- `research/fireflies-extraction/wave1_all_meetings.json` (50 meetings with metadata)
- `research/fireflies-extraction/wave1_metadata_enriched.json` (enriched with topics, companies, meeting types)
- `research/fireflies-extraction/wave1_categorized.json` (meetings organized by: customer, founding_team, advisor, prospect, partner)

### Wave 2 Outputs
- `research/fireflies-extraction/transcripts/` (50 transcript files organized by category)
- Each category has INDEX.md files

### Wave 3 Outputs (Insights)
- `research/fireflies-extraction/insights/customer_insights.md`
- `research/fireflies-extraction/insights/founder_dna.md`
- `research/fireflies-extraction/insights/strategic_insights.md`
- `research/fireflies-extraction/insights/gtm_intelligence.md`

### Wave 4 Outputs (Strategic Artifacts)
- `research/agent-specifications/co-ceo/artifacts/strategic_dna.md`
- `research/agent-specifications/co-ceo/artifacts/founder_profiles.md`
- `research/agent-specifications/co-ceo/artifacts/customer_empathy_map.md`
- `research/agent-specifications/co-ceo/artifacts/tone_of_voice.md`
- `research/agent-specifications/co-ceo/artifacts/product_marketing_narrative.md`
- `research/agent-specifications/co-ceo/artifacts/competitive_landscape.md`
- `research/agent-specifications/co-ceo/artifacts/decision_frameworks.md`
- `research/agent-specifications/co-ceo/artifacts/gtm_playbook.md`

### Summary Documents
- `research/fireflies-extraction/EXECUTION_STATUS.md`
- `research/fireflies-extraction/FINAL_SYNTHESIS_REPORT.md`

## Review Tasks

### 1. Cross-Reference Consistency Check
For each artifact, verify:
- Do values/principles in `strategic_dna.md` align with `founder_profiles.md`?
- Do customer insights in `customer_empathy_map.md` match details in `customer_insights.md`?
- Does `tone_of_voice.md` reflect communication patterns from `founder_profiles.md`?
- Do decision frameworks align with values stated in `strategic_dna.md`?
- Does `gtm_playbook.md` reference insights from `gtm_intelligence.md` accurately?
- Do metrics/numbers appear consistently across documents ($134K, $1.5M, 2-3 weeks, etc.)?

### 2. Data Source Alignment
Check if artifacts accurately reference source data:
- Are quotes/evidence traceable to actual meetings?
- Do customer pain points match meeting summaries in wave1 files?
- Are founder statements consistent with founding team meetings?
- Do strategic insights align with advisor meeting content?

### 3. Completeness Gaps
Identify missing elements:
- Are all 8 artifacts fully developed per their templates?
- Do insight documents cover all meeting categories adequately?
- Are there customer/client mentions that weren't captured in customer_insights?
- Are there advisor recommendations not reflected in strategic_insights?
- Are prospect objections fully represented in gtm_playbook?

### 4. Accuracy Verification
Validate claims against source data:
- Verify categorization accuracy (are meetings in correct categories?)
- Check if extracted values/principles have sufficient evidence
- Confirm metrics are accurate (meeting counts, percentages)
- Validate that insights are supported by meeting content

### 5. Logical Consistency
Check for contradictions:
- Do principles contradict each other?
- Are there competing values or approaches?
- Do decision frameworks align with stated values?
- Are trade-offs properly explained?

### 6. Quality Assessment
Evaluate:
- Depth of insights (are they surface-level or substantive?)
- Usefulness of artifacts (will they actually help Co-CEO agent?)
- Completeness of analysis (what's missing?)
- Actionability (can these be directly used?)

### 7. Strategic Coherence
Assess overall alignment:
- Do all artifacts tell a cohesive story?
- Is the positioning consistent across documents?
- Are there strategic gaps between vision and execution?
- Does the narrative flow logically?

### 8. Improvement Opportunities
Suggest specific enhancements:
- What insights could be deeper or more specific?
- What examples/quotes should be added?
- What patterns might have been missed?
- What artifacts need more detail?
- What connections between insights are missing?

## Output Format

Please provide:

1. **Executive Summary** (2-3 paragraphs): Overall assessment of quality, alignment, and key issues

2. **Misalignment Report** (structured):
   - Critical misalignments (contradictions, inconsistencies)
   - Moderate misalignments (minor inconsistencies, gaps)
   - Potential misalignments (areas needing verification)

3. **Gap Analysis**:
   - Missing information
   - Underdeveloped sections
   - Incomplete insights
   - Opportunities for deeper analysis

4. **Accuracy Check**:
   - Verified accurate claims
   - Claims needing verification
   - Potentially inaccurate information

5. **Improvement Recommendations** (prioritized):
   - High priority fixes (must address)
   - Medium priority enhancements (should address)
   - Low priority optimizations (nice to have)

6. **Specific Action Items**:
   - File-by-file improvements needed
   - Cross-document alignment fixes
   - Missing content to add
   - Refinements to existing content

## Focus Areas

Pay particular attention to:
- **Consistency**: Same information presented differently across documents
- **Completeness**: Critical insights potentially missed from 50 meetings
- **Depth**: Surface-level vs. substantive analysis
- **Evidence**: Claims without sufficient support from source data
- **Usability**: Whether artifacts can actually guide Co-CEO agent behavior

Begin your review now.
```

---

## Alternative: Focused Review Prompts

### For Quick Alignment Check

```
Review these 8 strategic artifacts for consistency:
[list all 8 artifact files]

Check:
1. Are values/principles consistent across documents?
2. Do customer insights align between customer_insights.md and customer_empathy_map.md?
3. Do founder profiles match strategic_dna values?
4. Are metrics/numbers consistent ($134K, $1.5M, 2-3 weeks)?

Report only critical misalignments and top 5 improvements needed.
```

### For Deep Data Accuracy Review

```
I extracted insights from 50 Fireflies meeting transcripts. Review the source data:
- wave1_all_meetings.json
- wave1_metadata_enriched.json
- wave1_categorized.json

Against the generated insights:
- customer_insights.md
- founder_dna.md
- strategic_insights.md
- gtm_intelligence.md

Verify:
1. Are insights accurately extracted from source data?
2. Are quotes/evidence traceable to actual meetings?
3. Is categorization correct?
4. Are there insights in source data not captured in documents?

Report accuracy issues and missing insights.
```

### For Strategic Coherence Review

```
Review the strategic artifacts for coherence:
[list all 8 artifacts]

Assess:
1. Do they tell a cohesive strategic story?
2. Are there contradictions between vision (strategic_dna) and execution (decision_frameworks)?
3. Does the GTM approach (gtm_playbook) align with positioning (competitive_landscape)?
4. Are customer insights (customer_empathy_map) reflected in messaging (product_marketing_narrative)?
5. Does tone_of_voice match founder communication styles?

Identify strategic gaps and inconsistencies.
```

---

## Tips for Using This Prompt

1. **Copy the full prompt** to another AI model (Claude, GPT-4, etc.)
2. **Provide file access** - share the files or give access to the directory
3. **Request specific format** - ask for actionable, prioritized recommendations
4. **Iterate** - use findings to improve artifacts, then review again

---

## Expected Outcomes

After running this review, you should get:
- ✅ List of misalignments to fix
- ✅ Gaps to fill with additional insights
- ✅ Inconsistencies to resolve
- ✅ Prioritized improvements
- ✅ Specific action items per file

This will help ensure the Co-CEO artifacts are accurate, complete, and strategically aligned.
