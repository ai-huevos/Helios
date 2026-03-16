---
name: org-archaeology
description: Extract business intelligence from Spanish interviews to build knowledge graphs and identify automation opportunities. AI Huevos core methodology. Use when processing interview transcripts, building entity maps, or conducting organizational diagnostics.
---

# Organizational Archaeology Skill

Extract actionable intelligence from organizational interviews to map processes, identify inefficiencies, and surface automation opportunities.

## Quick Start

| Task | Process |
|------|---------|
| **Interview Processing** | Transcript → Entities → Relationships |
| **Knowledge Graph Building** | Entities → Neo4j → Visualization |
| **Diagnostic Analysis** | Patterns → Findings → Recommendations |
| **Automation Discovery** | Processes → Pain Points → Opportunities |

## Core Methodology

### Phase 1: Extraction (Per Interview)

**Input:** Spanish interview transcript
**Output:** Structured entity data

#### Entity Categories
```yaml
People:
  - name, role, department, tenure
  - reports_to, manages
  - expertise, responsibilities

Processes:
  - name, description
  - owner, frequency
  - inputs, outputs
  - tools_used
  - pain_points

Tools/Systems:
  - name, type, vendor
  - users, purpose
  - integrations
  - issues

Problems:
  - description, severity
  - affected_people, affected_processes
  - current_workaround
  - impact (time, cost, quality)

Opportunities:
  - description, type (automation/optimization/elimination)
  - estimated_impact
  - complexity
  - dependencies
```

#### Extraction Prompt Pattern
```
Analyze this interview transcript and extract:

1. PEOPLE mentioned (name, role, department)
2. PROCESSES described (name, steps, owner, frequency)
3. TOOLS/SYSTEMS used (name, purpose, issues)
4. PROBLEMS identified (description, impact, workaround)
5. OPPORTUNITIES for improvement

For each entity:
- Quote the exact source text
- Assign confidence (high/medium/low)
- Note relationships to other entities

Output as JSON.
```

### Phase 2: Relationship Mapping

**Input:** Extracted entities from multiple interviews
**Output:** Knowledge graph structure

#### Core Relationships
```cypher
// People relationships
(:Person)-[:REPORTS_TO]->(:Person)
(:Person)-[:MANAGES]->(:Person)
(:Person)-[:OWNS]->(:Process)
(:Person)-[:USES]->(:Tool)

// Process relationships
(:Process)-[:DEPENDS_ON]->(:Process)
(:Process)-[:PRODUCES]->(:Output)
(:Process)-[:USES]->(:Tool)
(:Process)-[:HAS_PROBLEM]->(:Problem)

// Problem relationships
(:Problem)-[:AFFECTS]->(:Process)
(:Problem)-[:AFFECTS]->(:Person)
(:Problem)-[:ENABLES]->(:Opportunity)
```

### Phase 3: Pattern Analysis

**Input:** Knowledge graph
**Output:** Diagnostic findings

#### Pattern Categories

**Organizational**
- Reporting ambiguity (multiple bosses, unclear ownership)
- Information silos (same data in multiple places)
- Tribal knowledge (single points of failure)

**Process**
- Duplicate processes across departments
- Manual handoffs between systems
- Approval bottlenecks
- Data re-entry points

**Technical**
- Tool proliferation (many tools, same purpose)
- Integration gaps
- Shadow IT

**Cultural**
- Resistance patterns
- Communication breakdowns
- Decision paralysis

### Phase 4: Opportunity Scoring

**Input:** Problems and patterns
**Output:** Prioritized automation opportunities

#### Scoring Matrix

| Factor | Weight | Scale |
|--------|--------|-------|
| Time savings | 30% | Hours/week saved |
| Error reduction | 20% | Current error rate |
| Strategic value | 20% | Alignment with goals |
| Implementation ease | 15% | Technical complexity |
| Adoption likelihood | 15% | Change resistance |

#### Priority Formula
```
Priority Score = (Impact × 0.5) + (Feasibility × 0.3) + (Urgency × 0.2)

Impact = (Time savings + Error reduction + Strategic value) / 3
Feasibility = (Technical ease + Budget fit + Team capacity) / 3
Urgency = (Pain level + Executive sponsorship + Quick win potential) / 3
```

## Output Formats

### Entity JSON (Per Interview)
```json
{
  "source": {
    "interview_id": "COM-001",
    "interviewee": "María García",
    "role": "Operations Manager",
    "date": "2025-01-15"
  },
  "entities": {
    "people": [...],
    "processes": [...],
    "tools": [...],
    "problems": [...],
    "opportunities": [...]
  },
  "relationships": [...],
  "quotes": [...]
}
```

### Knowledge Graph Schema (Neo4j)
```cypher
// Node constraints
CREATE CONSTRAINT person_id FOR (p:Person) REQUIRE p.id IS UNIQUE;
CREATE CONSTRAINT process_id FOR (pr:Process) REQUIRE pr.id IS UNIQUE;
CREATE CONSTRAINT tool_id FOR (t:Tool) REQUIRE t.id IS UNIQUE;

// Example data load
MERGE (p:Person {id: "maria-garcia"})
SET p.name = "María García",
    p.role = "Operations Manager",
    p.department = "Operations"
```

### Diagnostic Report Structure
See `reports` skill for formatting.

## Quality Standards

### Extraction Accuracy
- [ ] Every entity has source quote
- [ ] Confidence levels assigned
- [ ] No duplicate entities
- [ ] Relationships verified

### Graph Completeness
- [ ] All interviews processed
- [ ] Cross-interview entities merged
- [ ] Relationship directions correct
- [ ] No orphan nodes

### Analysis Validity
- [ ] Patterns supported by multiple sources
- [ ] Quantification where possible
- [ ] Counter-evidence noted
- [ ] Assumptions explicit

## Integration

- **Use `reports`** for presenting findings
- **Use `proposal-builder`** for automation proposals
- **Use `writing-review`** before delivery
