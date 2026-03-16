# Bilingual Content Template
## Standard Format for All Brand Book Files

This template shows the structure for creating bilingual brand content. All brand book files should follow this format.

---

## Template Structure

```markdown
# [Document Title]

<!-- Metadata -->
**Version:** [version number]  
**Last Updated:** [date]  
**Status:** [draft/approved]

---

## [Section Title]

<!-- English Section -->
### English

[Complete English content here. No Spanish mixed in.]

---

### Español

[Complete Spanish content here. No English mixed in.]

---

## [Next Section]

### English

[Content...]

---

### Español

[Content...]

---

## Notes / Implementation

[Language-neutral technical details, code examples, file paths, etc.]
```

---

## Example: Brand Philosophy

```markdown
## Brand Philosophy

### English

> "Pa' emprender se necesitan huevos"  
> — Entrepreneurship and transformation takes courage.

AI Huevos is born from the conviction that transformation requires courage. It's not just wordplay—it's our core philosophy. Every brand decision reflects this bold yet accessible attitude.

---

### Español

> "Pa' emprender se necesitan huevos"  
> — Para emprender y transformar se necesita coraje.

AI Huevos nace de la convicción de que transformar requiere coraje. No es solo un juego de palabras—es nuestra filosofía central. Cada decisión de marca refleja esta actitud audaz pero accesible.

---
```

---

## Example: Mission Statement

```markdown
## Mission

### English

**We translate technology into practical tools that drive real results for enterprises across Latin America, enabling them to achieve operational excellence through intelligent automation and strategic systems—built sustainably, validated in real environments, and demonstrated with tangible showcases.**

---

### Español

**Traducimos la tecnología en herramientas prácticas que impulsan resultados reales para empresas en América Latina, permitiéndoles lograr la excelencia operativa a través de automatización inteligente y sistemas estratégicos—construidos de forma sostenible, validados en entornos reales y demostrados con showcases tangibles.**

---
```

---

## Example: Values (Bilingual Table)

```markdown
## Values

### English

| Value | Description | In Practice |
|-------|-------------|-------------|
| **Bootstrap Sustainability First** | Design for profitability first, leverage second, funding as optional strategic fuel | Anti-typical VC mentality—profitability before growth-at-all-costs |
| **Validation Before Scale** | Test in real environments first, validate then expand | Prevents premature optimization, ensures every effort grounded in actual customer problems |
| **Show, Don't Tell** | Sell tangible, working prototypes rather than promises | Competitive advantage through tangible proof, not sales narratives |
| **Customer Profile Precision** | Target enterprises with complex operations and high willingness to pay, not startups | Enterprise-only approach avoids building for customers who can't pay enterprise prices |
| **Small Team, High Leverage** | Lean teams using AI and automation to achieve enterprise-scale impact | High margins, fast pivots, technical depth over organizational breadth |
| **Partner Collaboration Philosophy** | Strategic collaborators with clear roles, weekly syncs, maximum 3 concurrent initiatives | Partners are strategic collaborators, not just contractors |

---

### Español

| Valor | Descripción | En la Práctica |
|-------|-------------|----------------|
| **Sostenibilidad Bootstrap Primero** | Diseñar para rentabilidad primero, leverage segundo, funding como combustible estratégico opcional | Mentalidad anti-VC típica—rentabilidad antes de crecimiento a cualquier costo |
| **Validación Antes de Escalar** | Probar en entornos reales primero, validar luego expandir | Previene optimización prematura, asegura que cada esfuerzo esté fundamentado en problemas reales del cliente |
| **Mostrar, No Decir** | Vender prototipos tangibles y funcionales en lugar de promesas | Ventaja competitiva a través de pruebas tangibles, no narrativas de ventas |
| **Precisión de Perfil de Cliente** | Dirigirse a empresas con operaciones complejas y alta disposición a pagar, no startups | Enfoque solo enterprise evita construir para clientes que no pueden pagar precios enterprise |
| **Equipo Pequeño, Alto Leverage** | Equipos lean usando IA y automatización para lograr impacto a escala enterprise | Altos márgenes, pivots rápidos, profundidad técnica sobre amplitud organizacional |
| **Filosofía de Colaboración con Socios** | Colaboradores estratégicos con roles claros, syncs semanales, máximo 3 iniciativas concurrentes | Los socios son colaboradores estratégicos, no solo contratistas |

---
```

---

## Example: Technical Specifications (Language-Neutral)

```markdown
## Color System - Technical Specifications

<!-- Language-neutral technical details -->

### Primary Colors

| Color | Hex | RGB | CSS Variable |
|-------|-----|-----|--------------|
| White | `#FFFFFF` | 255, 255, 255 | `--color-white` |
| Black | `#030102` | 3, 1, 2 | `--color-black` |
| Yellow | `#FFD826` | 255, 216, 38 | `--color-yellow` |
| Blue | `#3988FF` | 57, 136, 255 | `--color-blue` |

---

## Usage Rules

### English

[English explanation of usage rules...]

---

### Español

[Spanish explanation of usage rules...]

---

## Code Examples

<!-- Language-neutral code -->

```css
:root {
  --color-white: #FFFFFF;
  --color-black: #030102;
  --color-yellow: #FFD826;
  --color-blue: #3988FF;
}
```
```

---

## Rules for Bilingual Content

### ✅ DO

1. **Separate by language sections**: Always use `### English` and `### Español` subheadings
2. **Complete translations**: Each language section should be complete and self-contained
3. **Maintain structure**: Keep the same section structure in both languages
4. **Use language-neutral technical content**: Hex codes, file paths, code examples don't need translation
5. **Preserve formatting**: Tables, code blocks, lists should match structure in both languages
6. **Include both taglines**: If tagline is in Spanish, provide English translation, and vice versa

### ❌ DON'T

1. **Don't mix languages within a sentence**: ❌ "La paleta de AI Huevos balancea profesionalismo..." followed by English example
2. **Don't use Spanglish**: ❌ "We mapeamos reality, not org charts"
3. **Don't translate proper nouns**: AI Huevos, Director AI, Finkargo stay the same
4. **Don't translate brand taglines literally**: Translate meaning, not word-for-word
5. **Don't leave incomplete sections**: If English exists, Spanish must exist (and vice versa)

---

## Brand-Specific Translation Guidelines

### Taglines

**Original:** "Pa' emprender se necesitan huevos"

- ✅ **English:** "Entrepreneurship and transformation takes courage"
- ✅ **Español:** "Para emprender y transformar se necesita coraje"
- ❌ **Wrong:** "To start a business you need eggs" (literal, loses meaning)

### Key Phrases

**Original:** "Entrevistamos a tu gente, encontramos lo que está roto, lo arreglamos con tecnología, y nos quedamos para seguir mejorando"

- ✅ **English:** "We interview your people, find what's broken, fix it with technology, and stay to keep improving"
- ✅ **Español:** Keep original (this is customer-facing, Spanish-first)

### Technical Terms

- "Organizational Archaeology" → "Arqueología Organizacional"
- "Director AI" → "Director AI" (proper noun, no translation)
- "Showcases" → "Showcases" (in Spanish text: "mostramos showcases tangibles")

---

## Validation Checklist

Before finalizing a bilingual file:

- [ ] All major sections have both English and Español subsections
- [ ] No Spanglish (no mixed languages within sentences)
- [ ] Technical content (hex codes, file paths) is language-neutral
- [ ] Proper nouns (AI Huevos, Director AI) are not translated
- [ ] Taglines have proper translations (not literal)
- [ ] Tables match structure in both languages
- [ ] Code examples are language-neutral
- [ ] Both language versions are complete (no "TODO: translate this")

---

**This template is the standard for all brand book files.**
