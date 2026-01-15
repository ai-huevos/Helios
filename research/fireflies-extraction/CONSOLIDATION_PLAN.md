# Consolidation Plan: v2 Files → Final Artifacts

**Date**: 2026-01-15  
**Objective**: Replace v1 files with corrected v2 content, apply essentialism, maintain clean repository structure

---

## Current State

### Duplicate Files Created:
- **Insights**: `customer_insights.md` (v1, incomplete) + `customer_insights_v2.md` (v2, complete)
- **Artifacts**: `strategic_dna.md` (v1, advisor-contaminated) + `strategic_dna_v2.md` (v2, pure founder DNA)

### Why v2 Files Were Created:
- Preserve v1 for comparison during review
- v2 has 95% accuracy vs. 40% in v1
- v2 includes corrected categorization (Vistage, Hotel LTH, partner insights)

---

## Consolidation Strategy

### Step 1: Replace v1 with v2 Content
**Action**: Copy v2 content → v1 files (remove v2 suffix)

**Files to Replace**:
1. `insights/customer_insights.md` ← `insights/customer_insights_v2.md`
2. `insights/gtm_intelligence.md` ← `insights/gtm_intelligence_v2.md`
3. `insights/strategic_insights.md` ← `insights/strategic_insights_v2.md`
4. `artifacts/strategic_dna.md` ← `artifacts/strategic_dna_v2.md`
5. `artifacts/founder_profiles.md` ← `artifacts/founder_profiles_v2.md`
6. `artifacts/customer_empathy_map.md` ← `artifacts/customer_empathy_map_v2.md`
7. `artifacts/tone_of_voice.md` ← `artifacts/tone_of_voice_v2.md`
8. `artifacts/product_marketing_narrative.md` ← `artifacts/product_marketing_narrative_v2.md`
9. `artifacts/competitive_landscape.md` ← `artifacts/competitive_landscape_v2.md`
10. `artifacts/decision_frameworks.md` ← `artifacts/decision_frameworks_v2.md`
11. `artifacts/gtm_playbook.md` ← `artifacts/gtm_playbook_v2.md`

### Step 2: Archive v2 Files
**Action**: Move v2 files to archive or delete after verification

**Option A**: Archive in `research/fireflies-extraction/archive/v2_files/`
**Option B**: Delete after confirming v1 files are updated correctly

### Step 3: Apply Essentialism
**Action**: Review each file and remove:
- Redundant sections
- Over-detailed examples that don't add value
- Duplicate information across files
- Historical context that's no longer relevant

**Essentialism Principles**:
- Keep only actionable insights
- Remove redundant examples
- Consolidate cross-references
- Maintain clear structure

---

## File Locations (According to Architecture)

### Insights (Raw Research Outputs)
**Location**: `/research/fireflies-extraction/insights/`
- `customer_insights.md` (final, from v2)
- `gtm_intelligence.md` (final, from v2)
- `strategic_insights.md` (final, from v2)
- `founder_dna_v2.md` (keep as-is, already v2)
- `partner_insights.md` (keep as-is, already correct)

### Artifacts (Co-CEO Agent Specifications)
**Location**: `/research/agent-specifications/co-ceo/artifacts/`
- `strategic_dna.md` (final, from v2)
- `founder_profiles.md` (final, from v2)
- `customer_empathy_map.md` (final, from v2)
- `tone_of_voice.md` (final, from v2)
- `product_marketing_narrative.md` (final, from v2)
- `competitive_landscape.md` (final, from v2)
- `decision_frameworks.md` (final, from v2)
- `gtm_playbook.md` (final, from v2)

---

## Workflow for Future Updates

### When Updating Documents:
1. **Edit the main file directly** (no v2 suffix)
2. **Version control** through git commits
3. **Document changes** in file header (Last Updated date)
4. **Cross-reference** related files if needed

### When Major Corrections Needed:
1. **Create backup** (git branch or archive folder)
2. **Update main file** with corrections
3. **Update version number** in file header if significant change
4. **Document what changed** in file header or CHANGELOG

---

## Next Steps

1. ✅ **Review v2 files** for accuracy
2. ✅ **Replace v1 files** with v2 content
3. ✅ **Archive v2 files** to `/research/fireflies-extraction/archive/v2_files/`
4. ⏳ **Apply essentialism** (remove redundancy) - Future phase
5. ✅ **Update cross-references** between files
6. ✅ **Verify file locations** match architecture

**Status**: ✅ Consolidation complete. See `CONSOLIDATION_COMPLETE.md` for details.

---

## Questions to Resolve

1. **Archive vs. Delete**: Should we archive v2 files or delete them after consolidation?
2. **Essentialism Scope**: How aggressive should we be in removing content?
3. **Version Tracking**: Should we use git tags or file headers for versioning?
4. **Cross-References**: Should we update all cross-references to remove v2 mentions?
