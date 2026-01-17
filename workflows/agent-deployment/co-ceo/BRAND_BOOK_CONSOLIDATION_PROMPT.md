# Brand Book Consolidation & Bilingual Documentation Prompt
## For Co-CEO Agent

---

## 🎯 Mission

You are tasked with consolidating all AI Huevos brand identity, foundations, assets, and brand manual content into a comprehensive, bilingual (English/Spanish) brand book. You must also fix Spanglish throughout the documentation and organize files according to repository structure rules.

---

## 📋 Task Breakdown

### Phase 1: Audit & Inventory

1. **Review all brand files** in `Brand/` directory:
   - `Brand/ai-huevos-brand/foundations/` (all 5 foundation files)
   - `Brand/ai-huevos-brand/brand-manual.md`
   - `Brand/ai-huevos-brand/CHEATSHEET.md`
   - `Brand/ai-huevos-brand/components.md`
   - `Brand/ai-huevos-brand/slides.md`
   - `Brand/brand_guidelines.md`
   - `Brand/ai-huevos-narrative-v2.md`
   - Any other brand-related markdown files

2. **Identify content gaps:**
   - What's in the brand book PDF that's missing from markdown files?
   - What's in markdown files that should be in the brand book?
   - What's duplicated across files?

3. **Identify Spanglish issues:**
   - Mixed English/Spanish in same sentence
   - Inconsistent language within sections
   - English terms that should be Spanish (or vice versa)
   - Code comments in wrong language

4. **Map current file structure** vs. **desired structure** (see File Organization Plan)

---

### Phase 2: Content Consolidation

1. **Create master brand book structure:**
   ```
   Brand/ai-huevos-brand/brand-book/
   ├── 00-introduction.md (bilingual)
   ├── 01-brand-philosophy.md (bilingual)
   ├── 02-brand-identity.md (bilingual)
   ├── 03-visual-identity/
   │   ├── logo-system.md (bilingual)
   │   ├── color-system.md (bilingual)
   │   ├── typography.md (bilingual)
   │   └── assets.md (bilingual)
   ├── 04-voice-tone.md (bilingual)
   ├── 05-messaging.md (bilingual)
   ├── 06-usage-guidelines.md (bilingual)
   └── 07-quick-reference.md (bilingual)
   ```

2. **For each file, create bilingual version using this format:**
   ```markdown
   # [Title in English] / [Título en Español]
   
   ## English
   
   [English content here]
   
   ---
   
   ## Español
   
   [Spanish content here]
   
   ---
   
   ## Shared Elements
   
   [Code examples, color codes, file paths that are language-agnostic]
   ```

3. **Reference the translations.js pattern** from `InvestorRoom/src/data/translations.js`:
   - Use consistent terminology
   - Maintain parallel structure between languages
   - Ensure technical terms are properly localized

---

### Phase 3: Language Standardization

1. **Fix Spanglish issues:**
   - **Rule:** Each sentence must be entirely in one language
   - **Exception:** Proper nouns, brand names, technical terms (AI, CRM, API) can remain in English
   - **Exception:** Code examples and file paths stay in English

2. **Language rules:**
   - **User-facing content:** Spanish (as per brand voice guidelines)
   - **Technical documentation:** Can be bilingual, but each section clearly marked
   - **Code comments:** English (standard practice)
   - **File names:** English (standard practice)

3. **Terminology consistency:**
   - Create a glossary of key terms with English/Spanish equivalents
   - Use consistent translations throughout
   - Reference `tone_of_voice.md` artifact for brand-specific terminology

---

### Phase 4: Content Enhancement

1. **Cross-reference with Co-CEO artifacts:**
   - `tone_of_voice.md` → Update voice & tone section
   - `strategic_dna.md` → Ensure brand identity aligns with strategic DNA
   - `product_marketing_narrative.md` → Integrate messaging framework
   - `customer_empathy_map.md` → Ensure target audience descriptions match

2. **Validate brand consistency:**
   - All messaging aligns with current positioning (agent infrastructure, NOT fractional CMO)
   - Pricing and deliverables are current (Dec 2025)
   - Examples and case studies are accurate

3. **Add missing content:**
   - Usage examples for each brand element
   - Do's and don'ts with visual examples (where possible)
   - Implementation guides for developers/designers

---

### Phase 5: File Organization

1. **Reorganize according to repo structure:**
   - Follow the structure outlined in `README.md`
   - Move files to appropriate directories
   - Update all internal links
   - Maintain backward compatibility where possible (use redirects/aliases)

2. **Create index files:**
   - `Brand/README.md` - Overview of brand directory
   - `Brand/ai-huevos-brand/README.md` - How to use the brand system
   - Update main `README.md` if needed

---

## 🔍 Quality Checklist

Before completing, verify:

- [ ] All files have bilingual versions (English + Spanish)
- [ ] No Spanglish (mixed languages in same sentence)
- [ ] Consistent terminology across all files
- [ ] All brand elements documented (logo, colors, typography, voice)
- [ ] Usage guidelines clear and actionable
- [ ] File structure follows repo rules
- [ ] All internal links work
- [ ] Code examples are correct and tested
- [ ] Brand messaging aligns with strategic DNA
- [ ] Current positioning reflected (agent infrastructure)
- [ ] Pricing and deliverables are current (Dec 2025)

---

## 📝 Output Format

For each consolidated file, provide:

1. **Bilingual content** (English + Spanish sections)
2. **Metadata header:**
   ```markdown
   ---
   title: [English Title] / [Spanish Title]
   version: 2.0.0
   last_updated: [Date]
   status: approved
   languages: [en, es]
   ---
   ```

3. **Change log** documenting:
   - What was consolidated
   - What was translated
   - What was fixed (Spanglish issues)
   - What was added/removed

---

## 🎯 Success Criteria

The brand book is complete when:

1. ✅ **Single source of truth:** All brand information in one organized structure
2. ✅ **Fully bilingual:** Every section has English and Spanish versions
3. ✅ **No Spanglish:** Clean language separation throughout
4. ✅ **Well organized:** Files follow repo structure rules
5. ✅ **Consistent:** Terminology and messaging aligned across all files
6. ✅ **Actionable:** Clear guidelines for implementation
7. ✅ **Current:** Reflects Dec 2025 positioning and deliverables

---

## 🚀 Execution Steps

1. **Start with audit:** List all brand files and their current state
2. **Create consolidation plan:** Map what goes where
3. **Process one section at a time:** Don't try to do everything at once
4. **Validate as you go:** Check against artifacts and strategic DNA
5. **Test links and structure:** Ensure everything works
6. **Create migration guide:** Document what moved where

---

## 📚 Reference Files

- `workflows/agent-deployment/co-ceo/CO_CEO_SYSTEM_PROMPT.md` - Your system prompt
- `research/agent-specifications/co-ceo/artifacts/tone_of_voice.md` - Voice guidelines
- `research/agent-specifications/co-ceo/artifacts/strategic_dna.md` - Strategic alignment
- `InvestorRoom/src/data/translations.js` - Bilingual pattern reference
- `README.md` - Repository structure rules
- `Brand/ai-huevos-brand/brand-manual.md` - Current brand manual

---

**Remember:** You are the Co-CEO. Maintain brand authenticity, preserve Spanish cultural nuance, and ensure all content sounds like the founding team—not generic AI. Use your knowledge of founder communication styles and brand voice to guide translations and content decisions.
