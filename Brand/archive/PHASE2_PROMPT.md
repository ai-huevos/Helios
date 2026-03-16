# Phase 2: Strategic Alignment & Bilingual Consolidation
## Prompt for Brand Book Consolidation

---

## Context

Phase 1 audit identified conflicts and duplicates. Founder decisions resolved:

✅ **Target Audience:** 500+ employees (enterprise-only)  
✅ **Positioning:** Enterprise-only (not SMB-friendly)  
✅ **Value Promise:** $1.5M USD minimum (depending on complexity)  
✅ **Mission Source:** Use Strategic DNA mission from `tone_of_voice.md` / `strategic_dna.md`

---

## Your Task

Consolidate all brand files into a bilingual brand book following the template structure in `BILINGUAL_TEMPLATE.md`.

### Step 1: Resolve Strategic Conflicts

Using founder decisions above, update all conflicting content:

1. **Target Audience:** Change "100+ employees" → "500+ employees" everywhere
2. **Positioning:** Remove "SMB-friendly" language, emphasize "enterprise-only"
3. **Value Promise:** Update "$15M+ in opportunities" → "$1.5M+ minimum (depending on complexity)"
4. **Mission Statement:** Replace operational description with Strategic DNA mission:
   - **English:** "We translate technology into practical tools that drive real results for enterprises across Latin America, enabling them to achieve operational excellence through intelligent automation and strategic systems—built sustainably, validated in real environments, and demonstrated with tangible showcases."
   - **Español:** "Traducimos la tecnología en herramientas prácticas que impulsan resultados reales para empresas en América Latina, permitiéndoles lograr la excelencia operativa a través de automatización inteligente y sistemas estratégicos—construidos de forma sostenible, validados en entornos reales y demostrados con showcases tangibles."

### Step 2: Align Values with Strategic DNA

Separate "Brand Personality" (how we communicate) from "Company Values" (how we operate):

- **Brand Personality:** Keep tactical voice attributes (Direct, Warm, Smart, Confident)
- **Company Values:** Use Strategic DNA values (Bootstrap Sustainability, Validation Before Scale, Show Don't Tell, Customer Profile Precision, Small Team High Leverage, Partner Collaboration)

Create two distinct sections with clear labels.

### Step 3: Create Bilingual Structure

For each file, convert to bilingual format:

1. **Start with English section** (complete, self-contained)
2. **Then Español section** (complete, self-contained)
3. **Technical content** (language-neutral: hex codes, file paths, code)

Follow `BILINGUAL_TEMPLATE.md` format exactly.

### Step 4: Consolidate Duplicates

**Brand Identity:**
- **Source:** `ai-huevos-brand/foundations/01-brand-identity.md`
- **Archive:** `brand_guidelines.md` (has incorrect color values, outdated content)
- **Merge:** Strategic DNA mission/vision into brand identity
- **Output:** `brand/brand-book/01-brand-identity.md` (bilingual)

**Color System:**
- **Source:** `ai-huevos-brand/foundations/03-color-system.md` (correct hex values)
- **Archive:** `brand_guidelines.md` (has wrong colors: `#000000`, `#FFE03D`, `#4D9FFF`)
- **Output:** `brand/brand-book/03-visual-identity/color-system.md` (bilingual)

**Voice & Tone:**
- **Sources:** 
  - `ai-huevos-brand/foundations/05-voice-tone.md` (tactical voice guidelines)
  - `research/agent-specifications/co-ceo/artifacts/tone_of_voice.md` (strategic voice)
- **Consolidate:** Merge tactical guidelines with strategic principles
- **Output:** `brand/brand-book/04-voice-tone.md` (bilingual)

**Logo System:**
- **Source:** `ai-huevos-brand/foundations/02-logo-system.md`
- **Output:** `brand/brand-book/03-visual-identity/logo-system.md` (bilingual)

**Typography:**
- **Source:** `ai-huevos-brand/foundations/04-typography.md`
- **Output:** `brand/brand-book/03-visual-identity/typography.md` (bilingual)

### Step 5: Create New File Structure

Following `FILE_ORGANIZATION_PLAN.md`:

```
Brand/
├── README.md                          # Bilingual directory overview
│
├── brand/                             # Main brand identity
│   ├── README.md                      # Bilingual quick start
│   │
│   ├── brand-book/                    # Complete brand book (bilingual)
│   │   ├── 00-introduction.md
│   │   ├── 01-brand-identity.md
│   │   ├── 02-brand-philosophy.md
│   │   ├── 03-visual-identity/
│   │   │   ├── logo-system.md
│   │   │   ├── color-system.md
│   │   │   └── typography.md
│   │   ├── 04-voice-tone.md
│   │   ├── 05-messaging.md
│   │   ├── 06-usage-guidelines.md
│   │   └── 07-quick-reference.md
│   │
│   ├── assets/                        # All brand assets (consolidated)
│   │   ├── logos/
│   │   ├── fonts/
│   │   └── illustrations/
│   │
│   └── references/                    # Implementation files
│       ├── css-variables.css
│       ├── design-tokens.json
│       └── tailwind-config.js
│
├── guidelines/                        # Operational guidelines
│   ├── design-system/
│   │   ├── components.md
│   │   └── slides.md
│   └── content-guidelines/
│       └── writing-guide.md
│
├── templates/                         # Brand templates
│   └── presentations/
│
└── archive/                           # Deprecated files
    ├── brand_guidelines.md
    ├── ai-huevos-narrative-v2.md
    └── [other archived files]
```

### Step 6: Clean Language Separation

For every file, ensure:

- ✅ **No Spanglish:** Complete English sections, complete Spanish sections
- ✅ **No mixed sentences:** "La paleta balancea profesionalismo" → full Spanish, then full English
- ✅ **Proper translations:** Not literal word-for-word, but meaning-preserving
- ✅ **Technical content neutral:** Hex codes, file paths, code examples work in both

---

## Files to Create/Update

### Priority 1: Core Brand Book (Bilingual)

1. `brand/brand-book/00-introduction.md`
   - Source: `ai-huevos-brand/brand-manual.md`
   - Convert to bilingual
   - Add overview of brand system

2. `brand/brand-book/01-brand-identity.md`
   - Source: `ai-huevos-brand/foundations/01-brand-identity.md`
   - Merge: Strategic DNA mission/vision
   - Update: Target audience (500+), positioning (enterprise-only)
   - Update: Value promise ($1.5M+ minimum)
   - Separate: Brand Personality vs Company Values
   - Convert to bilingual

3. `brand/brand-book/02-brand-philosophy.md`
   - Source: `01-brand-identity.md` (Brand Philosophy section)
   - Expand with Strategic DNA principles
   - Convert to bilingual

4. `brand/brand-book/03-visual-identity/logo-system.md`
   - Source: `ai-huevos-brand/foundations/02-logo-system.md`
   - Convert to bilingual
   - Keep technical specs language-neutral

5. `brand/brand-book/03-visual-identity/color-system.md`
   - Source: `ai-huevos-brand/foundations/03-color-system.md` (correct hex values)
   - Convert to bilingual
   - Keep hex codes, RGB values language-neutral

6. `brand/brand-book/03-visual-identity/typography.md`
   - Source: `ai-huevos-brand/foundations/04-typography.md`
   - Convert to bilingual
   - Keep font names, sizes, technical specs language-neutral

7. `brand/brand-book/04-voice-tone.md`
   - Sources: 
     - `ai-huevos-brand/foundations/05-voice-tone.md` (tactical)
     - `research/agent-specifications/co-ceo/artifacts/tone_of_voice.md` (strategic)
   - Consolidate both
   - Convert to bilingual

8. `brand/brand-book/07-quick-reference.md`
   - Source: `ai-huevos-brand/CHEATSHEET.md`
   - Convert to bilingual
   - Update all values to match consolidated brand book

### Priority 2: Guidelines (Bilingual)

9. `guidelines/design-system/components.md`
   - Source: `ai-huevos-brand/components.md`
   - Convert comments/examples to bilingual where needed

10. `guidelines/design-system/slides.md`
    - Source: `ai-huevos-brand/slides.md`
    - Convert comments/examples to bilingual where needed

### Priority 3: Supporting Files

11. `Brand/README.md`
    - Bilingual directory overview
    - Navigation guide

12. `brand/README.md`
    - Bilingual quick start guide
    - How to use brand system

---

## Validation Checklist

After Phase 2, verify:

- [ ] All conflicts resolved (500+ employees, enterprise-only, $1.5M+, Strategic DNA mission)
- [ ] Values clearly separated (Brand Personality vs Company Values)
- [ ] All files follow bilingual template structure
- [ ] No Spanglish in any file
- [ ] Color values correct (`#030102`, `#FFD826`, `#3988FF`)
- [ ] All technical content (hex codes, file paths) is language-neutral
- [ ] Mission statement matches Strategic DNA version
- [ ] Target audience updated to 500+ everywhere
- [ ] Positioning updated to enterprise-only
- [ ] Value promise updated to $1.5M+ minimum
- [ ] Internal links updated to new structure
- [ ] Old files archived (not deleted, moved to `archive/`)

---

## Success Criteria

Phase 2 is complete when:

1. ✅ All strategic conflicts resolved
2. ✅ All core brand book files are bilingual
3. ✅ No Spanglish in any file
4. ✅ All values align with Strategic DNA
5. ✅ New file structure created
6. ✅ Old files archived (not deleted)
7. ✅ All internal links work

---

## Next Steps After Phase 2

**Phase 3:** Asset consolidation (fonts, logos)  
**Phase 4:** Update all references (components, slides, InvestorRoom)  
**Phase 5:** Final validation against Co-CEO artifacts

---

**Use this prompt to execute Phase 2 consolidation.**
