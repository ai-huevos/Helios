# UI Iteration & Refinement - Skill Activation

This prompt is designed to help you iterate with Gemini (or any AI) to polish UI components until they meet "Premium Silicon Valley standards."

## 🚀 Activation Prompt

Copy and paste the block below to start a specialized UI iteration session.

```markdown
I need to run a **UI Optimization Loop** for [COMPONENT_NAME].

**Context**:
We are building the "AI Huevos Investor Room".
**Aesthetic Goal**: "Silicon Valley Operator" (Linear, Vercel, Stripe).
**Key Elements**:
- High Contrast (Black/White/Lime/Blue).
- Typography: Scandia (Headlines), Geist Mono (Data/UI).
- "Data Density" but with "Radical Whitespace".
- Micro-interactions are mandatory.

---

### Phase 1: The critique (Audit)
Analyze the provided code/screenshot of [COMPONENT_NAME].
Ruthlessly critique it against the aesthetic goal.
Identify:
1.  **Visual Weaknesses** (Spacing, typography, hierarchy).
2.  **UX Gaps** (Missing feedback, hover states, accessibility).
3.  **"Premium" Misses** (Where does it feel "default"?).

**Output**: A bulleted list of "The Ugly Truth".
**Stop here.**

---

### Phase 2: The Variants (Exploration)
Once Phase 1 is acknowledged, generate 3 distinct Code Concepts (React/Tailwind or CSS Modules):

**Option A: The Polish**
Fix the issues identified. Keep the layout, refine the execution. (Safe).

**Option B: The "Operator"**
Re-imagine the layout to be more "dense" and tool-like. Use grids, mono fonts, and borders. high utility.

**Option C: The "Visionary"**
Use bold typography, ample whitespace, and minimal lines. High impact. A "Hero" feel.

**Constraint**: All options must use the `App.jsx` theme variables (`--bg-primary`, etc.).

**Output**: 
- Description of each approach.
- **Full Code for Option B** (initially), or ask me which one to render.
**Stop here.**

---

### Phase 3: The Synthesis (Production)
I will select a winner (e.g., "Let's go with B but add the typography from C").
You will:
1.  Write the production-ready code.
2.  Include `framer-motion` animations.
3.  Ensure Mobile Responsiveness.

**Ready? Let's start with Phase 1. Here is the component code/context:**
[PASTE YOUR CODE OR SCREENSHOT HERE]
```

## How to use this
1.  **Select a Component**: Pick one thing (e.g., "The Opportunity Calculator" or "The Pricing Menu").
2.  **Paste the Prompt**: Copy the block above into the chat.
3.  **Iterate**: Follow the phases. The AI will force itself to stop and think before coding.
