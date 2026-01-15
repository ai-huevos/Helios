# Brand Designer Skill - Optimal Activation Prompt

## Prompt Structure (Chain of Thought + Context Engineering)

### Phase 1: Context Loading (< 30% context budget)
```
I need to create [CREATIVE_TYPE] for AI Huevos.

Phase 1 - Load Brand Context:
1. Read brand_guidelines.md (colors, typography, character rules only)
2. Identify relevant sections for [CREATIVE_TYPE]:
   - Landing page: Colors, Typography, Characters, Photography
   - Pitch deck: Colors, Typography, Characters, Type Hierarchy
   - Social post: Colors, Typography, Characters, Content Themes
   - Ad campaign: Colors, Typography, Characters, Key Messages

Stop after Phase 1 and confirm brand context loaded.
```

### Phase 2: Content Analysis (< 30% context budget)
```
Phase 2 - Analyze Content:
Given this content:
[PASTE_YOUR_CONTENT_HERE]

1. Identify structure:
   - For pitch deck: Number of slides, slide types (hero, content, closing)
   - For landing page: Sections needed (hero, features, CTA)
   - For social posts: Number of posts, platforms, dimensions
   - For ads: Ad formats, placements, sizes

2. Map content to brand values:
   - Which egg characters fit each section? (Claridad, Ingenio, Curiosidad, etc.)
   - Which colors emphasize key messages?
   - What tone matches the content?

Stop after Phase 2 and show me the structure plan.
```

### Phase 3: Generation (< 30% context budget per piece)
```
Phase 3 - Generate Creative:
For each piece (one at a time):

1. Apply brand guidelines:
   - Typography: Scandia for headlines, Geist Mono for CTAs
   - Colors: Primary palette only
   - Characters: Match emotion to content
   - Layouts: Clean, simple, ample white space

2. Generate component code

3. Validate compliance:
   - ✓ Colors in approved palette?
   - ✓ Typography correct (Scandia sentence case, Geist Mono lowercase)?
   - ✓ Characters used appropriately?
   - ✓ Layout clean and readable?

Generate piece #[N] now.
```

---

## Ready-to-Use Prompts by Creative Type

### For Pitch Deck (Recommended)
```
I need to create a brand-compliant pitch deck for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on: Colors, Typography (Scandia + Geist Mono), Character values, Type Hierarchy

Confirm when loaded. Do NOT proceed to Phase 2 yet.
```

**Then after confirmation:**
```
Phase 2 - Analyze Pitch Deck Structure:
Here's my pitch deck content:

[SLIDE 1 TITLE]
[SLIDE 1 CONTENT]

[SLIDE 2 TITLE]
[SLIDE 2 CONTENT]

... (paste all slides)

Analyze and show me:
1. Slide count and types (hero, content, data, closing)
2. Which egg character fits each slide theme
3. Color palette recommendation per slide
4. Layout structure proposal

Stop and wait for my approval before generating.
```

**Then for generation:**
```
Phase 3 - Generate Slides:
Generate slide #1 as a React component.
Apply brand guidelines strictly.
Validate compliance before showing code.

Generate one slide at a time, waiting for my review between each.
```

---

### For Landing Page
```
I need to create a brand-compliant landing page hero section for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on: Colors, Typography, Characters, Photography Guidelines

Confirm when loaded. Stop here.
```

**Then:**
```
Phase 2 - Analyze Landing Page Requirements:
Target: [YOUR_AUDIENCE]
Message: [YOUR_KEY_MESSAGE]
CTA: [YOUR_CALL_TO_ACTION]
Sections needed: Hero, [OTHER_SECTIONS]

Propose:
1. Photo style (based on Photography Guidelines)
2. Egg character placement and emotions
3. Color scheme for sections
4. Typography hierarchy

Wait for approval before generating.
```

**Then:**
```
Phase 3 - Generate Hero Section:
Create React component using hero-with-photo.tsx as base.
Apply brand guidelines.
Validate compliance.

Show code and explain brand decisions.
```

---

### For Social Media Posts
```
I need to create brand-compliant social posts for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on: Colors, Typography, Characters, Content Themes, Key Messages

Confirm when loaded. Stop here.
```

**Then:**
```
Phase 2 - Analyze Social Campaign:
Platform: [Instagram/LinkedIn/Twitter]
Number of posts: [N]
Campaign theme: [YOUR_THEME]
Messages:
1. [POST 1 MESSAGE]
2. [POST 2 MESSAGE]
...

Propose:
1. Dimensions per platform
2. Color palette per post
3. Egg characters per post (with emotions)
4. Text hierarchy

Wait for approval before generating.
```

**Then:**
```
Phase 3 - Generate Post #1:
Platform: [PLATFORM]
Dimensions: [WxH]
Message: [MESSAGE]

Create component with:
- Brand colors
- Scandia typography
- Appropriate egg character
- Clean layout

Validate compliance and show code.

Generate ONE post at a time.
```

---

### For Ad Campaign
```
I need to create brand-compliant ads for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on: Colors, Typography, Characters, Key Messages, Photography

Confirm when loaded. Stop here.
```

**Then:**
```
Phase 2 - Analyze Ad Campaign:
Format: [Display/Print/Video]
Sizes: [DIMENSIONS]
Target audience: [AUDIENCE]
Key message: [MESSAGE]
CTA: [CALL_TO_ACTION]

Propose:
1. Visual approach (photo vs solid color)
2. Headline in Scandia
3. CTA in Geist Mono
4. Egg character selection
5. Color scheme

Wait for approval before generating.
```

**Then:**
```
Phase 3 - Generate Ad #1:
Size: [DIMENSIONS]
Format: [FORMAT]

Create component with brand compliance.
Validate before showing code.

Generate ONE ad at a time.
```

---

## Context Engineering Principles Applied

### 1. Phased Execution
- **Phase 1**: Load ONLY relevant brand guidelines (not entire file)
- **Phase 2**: Analyze content structure (no generation yet)
- **Phase 3**: Generate ONE piece at a time

### 2. Explicit Stop Points
- Each phase ends with "Stop here" or "Wait for approval"
- Prevents context overflow from generating everything at once
- Allows user validation between phases

### 3. Scoped Context Loading
- Load ONLY sections needed for creative type
- Example: Pitch deck doesn't need Photography Guidelines
- Reduces context usage by 40-60%

### 4. Sequential Generation
- Generate one slide/post/ad at a time
- Clear previous context between pieces
- Validate compliance per piece (not batch)

### 5. Validation Checkpoints
- After loading: Confirm brand context
- After analysis: Confirm structure plan
- After generation: Validate compliance
- Prevents expensive regeneration

---

## Example: Full Pitch Deck Workflow

### Message 1 (User):
```
I need to create a brand-compliant pitch deck for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on: Colors, Typography, Character values, Type Hierarchy

Confirm when loaded. Do NOT proceed to Phase 2 yet.
```

### Message 2 (Claude confirms, User continues):
```
Phase 2 - Analyze Pitch Deck Structure:
Here's my content:

SLIDE 1: AI tastes better with eggs
Subheadline: Soluciones fáciles al alcance de tu mano

SLIDE 2: El problema
Las empresas no pueden escalar sin automatización

SLIDE 3: Nuestra solución
AI integral que se adapta a tu negocio

SLIDE 4: Casos de éxito
3 clientes con 300% ROI

SLIDE 5: Contacto
¿Listo para empezar?

Analyze and propose structure. Stop before generating.
```

### Message 3 (Claude proposes, User approves):
```
Phase 3 - Generate Slides:
Generate slide #1 (hero) now.
One slide only. Wait for my review after.
```

### Messages 4-8:
```
Generate slide #2 now.
```
(Repeat for each slide)

---

## Token Budget Calculation

Using this approach:
- **Phase 1**: ~8K tokens (guidelines subset)
- **Phase 2**: ~5K tokens (content analysis)
- **Phase 3**: ~10K tokens per piece (generation + validation)

**Total per piece**: ~23K tokens (< 30% of 200K limit)

**For 5-slide deck**: 5 separate Phase 3 executions = Safe within context

---

## Anti-Patterns to Avoid

❌ **Don't do this:**
```
Create a complete 10-slide pitch deck with all content for AI Huevos.
[Pastes entire deck content]
[Expects all 10 slides generated at once]
```
**Why**: Exceeds context budget, generates non-compliant code, requires expensive regeneration

✅ **Do this instead:**
```
Phase 1: Load brand context (focused)
Phase 2: Analyze 10-slide structure (no generation)
Phase 3: Generate slide 1 (validate)
Phase 4: Generate slide 2 (validate)
... (continue sequentially)
```

---

## Quick Start Template

Copy this to start a new conversation:

```
I need to create [pitch deck/landing page/social posts/ads] for AI Huevos.

Phase 1 - Load Brand Context:
Read /Users/tatooine/Documents/Development/AI huevos/brand_guidelines.md
Focus on sections relevant to [CREATIVE_TYPE]

Confirm when loaded. Stop here.

---

[After confirmation, I'll share my content in Phase 2]
```

This ensures optimal skill activation with minimal context usage and maximum compliance.
