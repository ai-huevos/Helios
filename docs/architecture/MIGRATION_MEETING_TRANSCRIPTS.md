# Meeting Transcripts Migration Plan

## 🎯 Objetivo

Reorganizar meeting transcripts de `Meeting Transcript/` a estructura categorizada por propósito en `research/`.

## 📂 Nueva Estructura

```
research/
├── user-research/
│   └── customer-interviews/
│       ├── los-tajibos/
│       ├── bolivian-foods/
│       ├── comversa/
│       └── README.md
│
├── market-intelligence/
│   └── prospect-calls/
│       ├── 2024-Q3/
│       ├── 2024-Q4/
│       ├── 2025-Q1/
│       └── README.md
│
└── strategic-insights/
    ├── founding-team-meetings/
    ├── advisor-sessions/
    ├── partner-ecosystem/
    └── README.md
```

## 🗂️ Mapeo de Transcripts

### Founding Team Meetings → `research/strategic-insights/founding-team-meetings/`
```bash
Pedro-Dani-1787ffdb-1739.txt
Julian-Daniel-ce62f1e3-d63b.txt
Dani-Sergio-87e17813-a025.txt
Hablemos-Pedro-Daniel-7f2b0496-be78.txt
Conversemos-de-Growth-Winter-Huevos-ai-e2b5dedf-2c22.txt
```

### Advisor Sessions → `research/strategic-insights/advisor-sessions/`
```bash
Mentoria-Sr-Daniel-Cardona-9d52e210-8172.txt
```

### Partner Ecosystem → `research/strategic-insights/partner-ecosystem/`
```bash
AI-huevos-en-Fractal-9f315403-980b.txt
Hablemos-de-AI-con-Huevos-Juan-Francisco-Reyes-Mora-5c59300d-712f.txt
```

### Customer Interviews → `research/user-research/customer-interviews/`
```bash
# Clasificar por cliente:
# - Los Tajibos transcripts → los-tajibos/
# - Bolivian Foods transcripts → bolivian-foods/
# - Comversa transcripts → comversa/
```

### Prospect Calls → `research/market-intelligence/prospect-calls/`
```bash
# Clasificar por fecha/quarter:
# - 2024-Q3/
# - 2024-Q4/
# - 2025-Q1/
```

## 🚀 Pasos de Migración

### Paso 1: Crear Estructura de Directorios
```bash
# Crear directorios base
mkdir -p research/user-research/customer-interviews/{los-tajibos,bolivian-foods,comversa}
mkdir -p research/market-intelligence/prospect-calls/{2024-Q3,2024-Q4,2025-Q1}
mkdir -p research/strategic-insights/{founding-team-meetings,advisor-sessions,partner-ecosystem}
```

### Paso 2: Migrar Founding Team Meetings
```bash
mv "Meeting Transcript/Pedro-Dani-1787ffdb-1739.txt" \
   research/strategic-insights/founding-team-meetings/

mv "Meeting Transcript/Julian-Daniel-ce62f1e3-d63b.txt" \
   research/strategic-insights/founding-team-meetings/

mv "Meeting Transcript/Dani-Sergio-87e17813-a025.txt" \
   research/strategic-insights/founding-team-meetings/

mv "Meeting Transcript/Hablemos-Pedro-Daniel-7f2b0496-be78.txt" \
   research/strategic-insights/founding-team-meetings/

mv "Meeting Transcript/Conversemos-de-Growth-Winter-Huevos-ai-e2b5dedf-2c22.txt" \
   research/strategic-insights/founding-team-meetings/
```

### Paso 3: Migrar Advisor Sessions
```bash
mv "Meeting Transcript/Mentoria-Sr-Daniel-Cardona-9d52e210-8172.txt" \
   research/strategic-insights/advisor-sessions/
```

### Paso 4: Migrar Partner Ecosystem
```bash
mv "Meeting Transcript/AI-huevos-en-Fractal-9f315403-980b.txt" \
   research/strategic-insights/partner-ecosystem/

mv "Meeting Transcript/Hablemos-de-AI-con-Huevos-Juan-Francisco-Reyes-Mora-5c59300d-712f.txt" \
   research/strategic-insights/partner-ecosystem/
```

### Paso 5: Clasificar Customer Interviews
```bash
# Revisar transcripts restantes y clasificar por cliente
# Ejemplo:
# mv "Meeting Transcript/Los-Tajibos-Interview-*.txt" \
#    research/user-research/customer-interviews/los-tajibos/
```

### Paso 6: Clasificar Prospect Calls
```bash
# Revisar transcripts restantes y clasificar por fecha
# Ejemplo:
# mv "Meeting Transcript/Prospect-Call-2024-09-*.txt" \
#    research/market-intelligence/prospect-calls/2024-Q3/
```

### Paso 7: Crear READMEs
```bash
# Ver siguiente sección para templates
```

### Paso 8: Verificar y Limpiar
```bash
# Verificar que Meeting Transcript/ esté vacío
ls -la "Meeting Transcript/"

# Si está vacío, eliminar directorio
rmdir "Meeting Transcript/"
```

## 📝 README Templates

### research/strategic-insights/README.md
```markdown
# Strategic Insights

## Propósito
Capturar decisiones estratégicas, guidance externa, y conversaciones de ecosystem building.

## Contenido

### founding-team-meetings/
Internal strategic discussions entre founders.
- Vision/mission alignment
- Strategic pivots
- Decision-making processes
- Values clarification

### advisor-sessions/
Mentorship y guidance de advisors externos.
- Daniel Cardona (mentor)
- Bambos Kaisharis (ex-Google, GTM expert)
- Tomas Shuk (logistics/trade finance)

### partner-ecosystem/
Partnership exploration y ecosystem building.
- Fractal conversations
- Network building
- Collaboration opportunities

## Uso
Estos transcripts son inputs críticos para:
- Co-CEO discovery analysis
- Strategic decision documentation
- Institutional knowledge preservation
- Founder DNA extraction
```

### research/user-research/customer-interviews/README.md
```markdown
# Customer Interviews

## Propósito
User research con clientes actuales para:
- Pain discovery
- Solution validation
- Value realization tracking
- Product feedback

## Estructura
Organized by client:
- los-tajibos/ (Marriott franchise)
- bolivian-foods/ (Burger King franchise)
- comversa/ (Construction)

## Análisis
Estos interviews informan:
- User personas
- Jobs To Be Done
- Pain intensity mapping
- Value proposition refinement
```

### research/market-intelligence/prospect-calls/README.md
```markdown
# Prospect Calls

## Propósito
Sales intelligence y market validation:
- Discovery calls
- Demo sessions
- Pitch presentations
- Objection handling

## Estructura
Organized by quarter:
- 2024-Q3/
- 2024-Q4/
- 2025-Q1/

## Análisis
Estos calls informan:
- GTM strategy
- Messaging validation
- Market patterns
- Sales playbook
- Competitive intel
```

## ⚠️ Consideraciones

### Antes de Migrar:
1. ✅ Crear feature branch: `feature/reorganize-meeting-transcripts`
2. ✅ Revisar cada transcript para clasificación correcta
3. ✅ Backup del directorio original (por si acaso)
4. ✅ Actualizar referencias en Co-CEO discovery prompt

### Después de Migrar:
1. ✅ Actualizar paths en `workflows/agent-deployment/co-ceo/CO_CEO_DISCOVERY_PROMPT.md`
2. ✅ Crear PR con descripción de cambios
3. ✅ Documentar nueva estructura en README.md principal
4. ✅ Comunicar cambio al equipo

## 🔄 Actualización de Referencias

### En CO_CEO_DISCOVERY_PROMPT.md:

Cambiar:
```markdown
Meeting Transcript/ (16 founding team meetings)
```

Por:
```markdown
research/strategic-insights/founding-team-meetings/ (founding team)
research/strategic-insights/advisor-sessions/ (mentors/advisors)
research/user-research/customer-interviews/ (client interviews)
research/market-intelligence/prospect-calls/ (sales discovery)
```

## 📊 Beneficios

1. **Discoverability**: Fácil encontrar transcripts por propósito
2. **Context**: Categorización clara (user research vs strategy vs sales)
3. **Scalability**: Estructura crece naturalmente con más transcripts
4. **Integration**: Se alinea con análisis Co-CEO y otras workflows
5. **Maintenance**: Cada categoría puede tener sus propios READMEs y guidelines

---

**Status**: 📋 Plan ready for execution
**Owner**: Dev Team
**Timeline**: 1-2 horas de trabajo
**Risk**: Low (pure reorganization, no content changes)
