# Meeting Transcripts - Estructura Propuesta

## 🎯 Principio: Organizar por Propósito/Outcome

En lugar de un directorio genérico `Meeting Transcript/`, los transcripts se organizan según **qué insight generan** y **cómo se usan**.

---

## 📂 Estructura Visual

```
research/
│
├── user-research/
│   ├── customer-interviews/          🎤 Entrevistas con clientes
│   │   ├── los-tajibos/
│   │   │   ├── 2024-09-initial-discovery.txt
│   │   │   ├── 2024-10-pain-validation.txt
│   │   │   └── 2024-11-solution-feedback.txt
│   │   │
│   │   ├── bolivian-foods/
│   │   │   └── [interviews]
│   │   │
│   │   ├── comversa/
│   │   │   └── [interviews]
│   │   │
│   │   └── README.md
│   │
│   └── user-personas/               📊 Ya existe
│
├── market-intelligence/
│   ├── prospect-calls/              📞 Sales & discovery calls
│   │   ├── 2024-Q3/
│   │   ├── 2024-Q4/
│   │   ├── 2025-Q1/
│   │   └── README.md
│   │
│   └── market-analysis/             📈 Ya existe
│
├── strategic-insights/              🧠 NUEVO DIRECTORIO
│   ├── founding-team-meetings/      💡 Internal strategy
│   │   ├── pedro-dani/
│   │   ├── julian-daniel/
│   │   ├── dani-sergio/
│   │   ├── growth-sessions/
│   │   └── README.md
│   │
│   ├── advisor-sessions/            🎓 External guidance
│   │   ├── daniel-cardona/
│   │   ├── bambos-kaisharis/
│   │   ├── tomas-shuk/
│   │   └── README.md
│   │
│   ├── partner-ecosystem/           🤝 Partnerships
│   │   ├── fractal/
│   │   ├── network-conversations/
│   │   └── README.md
│   │
│   └── README.md
│
├── performance-reports/             📊 Ya existe
│
└── agent-specifications/            🤖 Ya creamos esto
    └── co-ceo/
```

---

## 🗂️ Categorías Explicadas

### 1️⃣ **user-research/customer-interviews/**
**🎯 Propósito**: Entender customers, validar product-market fit

**Qué va aquí**:
- Entrevistas con Los Tajibos, Bolivian Foods, Comversa
- Pain discovery sessions
- Solution validation
- Feature feedback
- Value realization conversations

**Cómo se usa**:
- Input para user personas
- Validación de value propositions
- Product roadmap prioritization
- Case study material

**Ejemplo**:
```
research/user-research/customer-interviews/los-tajibos/
├── 2024-09-14-initial-discovery.txt (68 interview summary)
├── 2024-10-22-pain-validation-hotel-ops.txt
└── 2024-11-15-agent-feedback-service-desk.txt
```

---

### 2️⃣ **market-intelligence/prospect-calls/**
**🎯 Propósito**: Sales intelligence, GTM validation

**Qué va aquí**:
- Discovery calls con prospects
- Demo presentations
- Pitch sessions
- Objection handling conversations
- Competitive displacement calls

**Cómo se usa**:
- GTM strategy refinement
- Messaging validation
- Sales playbook development
- Competitive intelligence
- Win/loss analysis

**Ejemplo**:
```
research/market-intelligence/prospect-calls/2025-Q1/
├── 2025-01-08-prospect-fintech-colombia-discovery.txt
├── 2025-01-12-demo-family-office-mexico.txt
└── 2025-01-15-pitch-construction-holding-bolivia.txt
```

---

### 3️⃣ **strategic-insights/founding-team-meetings/**
**🎯 Propósito**: Capturar strategic DNA, decision-making, founder values

**Qué va aquí**:
- Pedro-Dani strategy sessions
- Julian-Daniel technical discussions
- Dani-Sergio operational planning
- Growth/vision alignment conversations
- Strategic pivot discussions

**Cómo se usa**:
- **CRITICAL INPUT** para Co-CEO discovery
- Decision framework extraction
- Values identification
- Vision/mission evolution tracking
- Institutional knowledge preservation

**Ejemplo**:
```
research/strategic-insights/founding-team-meetings/
├── pedro-dani/
│   ├── 2024-08-15-vision-alignment.txt
│   └── 2024-10-03-positioning-pivot-discussion.txt
│
├── growth-sessions/
│   └── 2024-11-20-conversemos-de-growth-winter.txt
│
└── README.md
```

---

### 4️⃣ **strategic-insights/advisor-sessions/**
**🎯 Propósito**: External strategic guidance, expertise injection

**Qué va aquí**:
- Mentoria con Daniel Cardona
- Sessions con Bambos Kaisharis (ex-Google, GTM)
- Guidance de Tomas Shuk (logistics/trade finance)
- Other advisor/mentor conversations

**Cómo se usa**:
- Strategic validation
- Expertise injection (GTM, logistics, etc.)
- Network intelligence
- Decision-making input
- Blind spot identification

**Ejemplo**:
```
research/strategic-insights/advisor-sessions/
├── daniel-cardona/
│   └── 2024-09-10-mentoria-sr-daniel-cardona.txt
│
├── bambos-kaisharis/
│   └── 2024-12-05-gtm-strategy-review.txt
│
└── README.md
```

---

### 5️⃣ **strategic-insights/partner-ecosystem/**
**🎯 Propósito**: Partnership exploration, ecosystem building

**Qué va aquí**:
- AI-huevos-en-Fractal
- Juan Francisco Reyes Mora conversations
- Partnership exploration calls
- Ecosystem collaboration discussions

**Cómo se usa**:
- Partnership strategy
- Ecosystem positioning
- Network effects identification
- Co-marketing opportunities
- Integration possibilities

**Ejemplo**:
```
research/strategic-insights/partner-ecosystem/
├── fractal/
│   └── 2024-10-15-ai-huevos-en-fractal.txt
│
├── network-conversations/
│   └── 2024-11-08-juan-francisco-reyes-mora.txt
│
└── README.md
```

---

## 🔄 Migración de Meeting Transcript/

### Mapeo Actual → Propuesto

| Transcript Actual | Nueva Ubicación | Categoría |
|-------------------|-----------------|-----------|
| `Pedro-Dani-1787ffdb-1739.txt` | `strategic-insights/founding-team-meetings/pedro-dani/` | Founder DNA |
| `Julian-Daniel-ce62f1e3-d63b.txt` | `strategic-insights/founding-team-meetings/julian-daniel/` | Founder DNA |
| `Dani-Sergio-87e17813-a025.txt` | `strategic-insights/founding-team-meetings/dani-sergio/` | Founder DNA |
| `Hablemos-Pedro-Daniel-*.txt` | `strategic-insights/founding-team-meetings/pedro-dani/` | Founder DNA |
| `Conversemos-de-Growth-Winter-*.txt` | `strategic-insights/founding-team-meetings/growth-sessions/` | Strategic planning |
| `Mentoria-Sr-Daniel-Cardona-*.txt` | `strategic-insights/advisor-sessions/daniel-cardona/` | Advisor guidance |
| `AI-huevos-en-Fractal-*.txt` | `strategic-insights/partner-ecosystem/fractal/` | Partnership |
| `Hablemos-de-AI-con-Huevos-JFR-*.txt` | `strategic-insights/partner-ecosystem/network-conversations/` | Ecosystem |
| [Customer interviews] | `user-research/customer-interviews/[client]/` | User research |
| [Prospect calls] | `market-intelligence/prospect-calls/[quarter]/` | Sales intel |

---

## ✨ Beneficios de la Nueva Estructura

### 1. **Discoverability** 🔍
- "¿Qué dicen los customers sobre pain points?" → `user-research/customer-interviews/`
- "¿Cómo evolucionó nuestra estrategia?" → `strategic-insights/founding-team-meetings/`
- "¿Qué objections enfrentamos en sales?" → `market-intelligence/prospect-calls/`

### 2. **Context Preservation** 📝
- Cada categoría tiene propósito claro
- READMEs explican qué va donde y por qué
- Fácil onboarding para nuevos team members

### 3. **Analysis-Ready** 📊
- Co-CEO discovery sabe exactamente dónde buscar founder DNA
- User research analysis tiene todos los customer interviews juntos
- Sales playbook se alimenta de prospect calls organizados

### 4. **Scalability** 📈
- Estructura crece naturalmente con más meetings
- Categorías claras para nuevos transcripts
- No hay "misc" o "otros" genéricos

### 5. **Integration** 🔗
- Se alinea con workflows existentes
- Compatible con agent specifications
- Facilita análisis cross-functional

---

## 🚀 Próximos Pasos

1. **Revisar propuesta** con founding team
2. **Clasificar transcripts** existentes (manual, requires context)
3. **Ejecutar migración** siguiendo `MIGRATION_MEETING_TRANSCRIPTS.md`
4. **Actualizar referencias** en Co-CEO discovery prompt
5. **Crear READMEs** para cada categoría
6. **Documentar convención** para transcripts futuros

---

## 📋 Convención para Transcripts Futuros

### Naming Convention:
```
YYYY-MM-DD-[tipo]-[participantes]-[tema].txt

Ejemplos:
2025-01-15-customer-los-tajibos-service-desk-feedback.txt
2025-01-16-prospect-fintech-colombia-discovery.txt
2025-01-17-founding-pedro-dani-q1-okrs.txt
2025-01-18-advisor-bambos-gtm-review.txt
2025-01-19-partner-fractal-integration-discussion.txt
```

### Metadata (al inicio del transcript):
```
---
date: 2025-01-15
type: customer-interview
client: Los Tajibos
participants: [Daniel Restrepo, Juan (GM Los Tajibos)]
topic: Service Desk Feedback
category: user-research
tags: [feedback, service-desk, hotel-operations]
---
```

---

## 📖 Ver También

- `MIGRATION_MEETING_TRANSCRIPTS.md` - Plan de migración detallado
- `workflows/agent-deployment/co-ceo/CO_CEO_DISCOVERY_PROMPT.md` - Usa estos transcripts
- `research/` - Directorio raíz para todos los insights

---

**🤖 Este es un living document. Se actualiza con feedback del equipo.**

**Last Updated**: 2026-01-15
