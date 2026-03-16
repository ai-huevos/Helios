---
name: reports
description: Create professional client reports, diagnostic findings, strategic analyses, and executive summaries. Use for Comversa, DRUO, GLT deliverables, investor updates, and any structured business document.
---

# Reports Skill

Create professional, data-driven reports for AI Huevos clients and stakeholders.

## Quick Start

| Report Type | Use When |
|-------------|----------|
| **Diagnostic Report** | Presenting organizational archaeology findings |
| **Executive Summary** | Leadership needs 1-page overview |
| **Strategic Analysis** | Recommending automation opportunities |
| **Progress Report** | Updating clients on engagement status |
| **Investment Memo** | Presenting to investors/partners |

## Report Structure (Universal)

### 1. Executive Summary (1 page max)
```
• Key finding / recommendation (1 sentence)
• Business impact (quantified)
• Recommended action (specific)
• Timeline / urgency
```

### 2. Context
```
• Engagement scope
• Data sources analyzed
• Time period covered
```

### 3. Findings
```
• Organized by theme or priority
• Each finding: Observation → Impact → Evidence
• Use tables for quantitative data
• Use quotes for qualitative insights
```

### 4. Recommendations
```
• Prioritized (Quick Wins → Strategic Investments)
• Each: Action → Owner → Timeline → Expected ROI
```

### 5. Appendices
```
• Methodology
• Raw data tables
• Supporting evidence
```

## Formatting Rules

### Visual Hierarchy
```
✅ Use H1 only once (report title)
✅ H2 for main sections
✅ H3 for subsections
✅ Tables for comparisons (not bullets)
✅ Bold for key terms on first use
❌ NEVER walls of text (max 3 sentences per paragraph)
❌ NEVER bullet lists longer than 7 items
```

### Data Presentation
```
✅ Always include units ($, %, hours)
✅ Round to meaningful precision ($15M not $15,234,567)
✅ Compare to baseline (↑23% vs Q2)
✅ Use consistent number formatting
```

### Language (Spanish-First)
```
✅ Formal but accessible tone
✅ Active voice
✅ Quantify everything possible
✅ Avoid jargon unless defined
❌ NEVER translate Spanish content to English
```

## Report Templates

### Diagnostic Report
```markdown
# [Company] Diagnóstico Organizacional

## Resumen Ejecutivo
[1 paragraph: key finding + quantified impact + recommendation]

## Alcance del Análisis
- Entrevistas: [N] personas
- Departamentos: [list]
- Período: [dates]

## Hallazgos Principales

### 1. [Theme]
**Observación:** [what we found]
**Impacto:** [business consequence]
**Evidencia:** [data/quotes]

### 2. [Theme]
[repeat pattern]

## Oportunidades de Automatización

| Proceso | Ahorro Estimado | Complejidad | Prioridad |
|---------|-----------------|-------------|-----------|
| [name]  | $XXk/año        | Baja        | Alta      |

## Recomendaciones
1. **Inmediato (0-30 días):** [action]
2. **Corto plazo (30-90 días):** [action]
3. **Mediano plazo (90-180 días):** [action]

## Próximos Pasos
[specific actions with owners]
```

### Executive Summary (1-Pager)
```markdown
# [Topic] — Resumen Ejecutivo

**Fecha:** [date]
**Preparado para:** [audience]

## Contexto
[2-3 sentences max]

## Hallazgo Principal
> [Quote or key insight, prominently displayed]

## Impacto Cuantificado
| Métrica | Actual | Propuesto | Mejora |
|---------|--------|-----------|--------|
| [KPI]   | [X]    | [Y]       | [Z%]   |

## Recomendación
[1 clear action with timeline]

## Siguiente Paso
[Specific ask or decision needed]
```

## Quality Checklist

Before delivering any report:

- [ ] Executive summary fits on 1 page
- [ ] Every finding has quantified impact
- [ ] Recommendations have owners and timelines
- [ ] No spelling/grammar errors (Spanish)
- [ ] Data is consistent throughout
- [ ] Follows AI Huevos brand (if visual)
- [ ] Appendix contains methodology

## Output Formats

| Format | When |
|--------|------|
| **Markdown (.md)** | Draft review, collaboration |
| **PDF** | Final delivery, formal presentation |
| **PPTX** | Live presentation, workshop |
| **DOCX** | Client needs to edit/annotate |

## Integration with Other Skills

- **Use `ai-huevos-brand`** for visual reports
- **Use `org-archaeology`** for diagnostic findings
- **Use `writing-review`** before final delivery
