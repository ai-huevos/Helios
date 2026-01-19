# Data Model

## Entities

### Contact
People external to the organization: prospects, customers, advisors, partners. Each contact may belong to an Account or exist independently (e.g., advisors, referral partners).

### Account
Companies or organizations AI Huevos works with or sells to. Represents the business relationship, not individual people. Tracks company-level information, engagement history, and financial relationship.

### Deal
A specific sales opportunity within an Account. Has a pipeline stage (Lead → Qualified → Proposal → Negotiation → Closed), expected value, and associated Product. One Account can have multiple Deals over time.

### Product
Services AI Huevos offers: Diagnóstico ($5K), Macroproceso ($899), Microproceso ($299), Agente IA ($500-2,500), Director AI ($8,500), Dashboard KPIs ($4K), CRM implementation ($2K), and recurring services (Support $2K/mo, Director AI access $20/user/mo).

### Employee
Internal team members at AI Huevos. Owns Areas of Responsibility (AORs), has OKRs, attends meetings, and participates in communications. Tracks role, skills, and organizational position.

### Supplier
External vendors, contractors, and service providers. Provides tools (MCPs, APIs, SaaS), professional services, or infrastructure. Tracks contracts, payment terms, and relationship status.

### Transaction
Financial movements: payments received from Accounts (revenue) or payments made to Suppliers (expenses). Links to bank API for real-time sync. Enables P&L tracking and cash flow visibility.

### Subscription
Recurring tools and services AI Huevos pays for: MCPs (Serena, Context7, Magic), APIs, SaaS tools (Fireflies, GitHub, Slack). Tracks cost, renewal dates, and usage metrics.

### Metric
Business KPIs and performance indicators: conversion rates by channel, revenue metrics, operational health scores. Supports counter-metric pairing (e.g., New ARR paired with Churn %) to prevent perverse optimization.

### Channel
Marketing and sales acquisition channels: website (Google Analytics), email campaigns, LinkedIn, referrals, partnerships. Each channel tracks its own conversion funnel and CAC.

### Meeting
Interactions captured via Fireflies: customer calls, prospect conversations, team syncs, advisor sessions. Contains transcript, attendees, and extracted insights. Categorized by type (customer, founding-team, advisors, prospects, partners).

### Message
Communications from Gmail (email) and Slack (chat). Links to Contact as sender/recipient. Provides communication history and context for relationship management.

### Insight
Intelligence extracted from Meetings and Messages: pain points, opportunities, decisions, action items. First-class entity enabling cross-source queries ("show all pricing objections" regardless of source).

### Skill
Claude skills and MCP integrations available in the system. Tracks capabilities, usage patterns, and effectiveness. Enables a "capabilities dashboard" for operational visibility.

### Brand Asset
Visual and messaging assets: logos (SVG), design tokens (colors, typography, spacing), brand guidelines, messaging frameworks. Source of truth for brand consistency across all applications.

### Persona
User research personas representing target customers: CEO/Founder (500+ employees, LatAm, complex operations), COO/Ops (system architecture focus), Manager (team execution focus). Guides product and marketing decisions.

### OKR
Objectives and Key Results following the 3-and-3 structure (3 Objectives, 3 KRs each). Tracks progress, ownership (Employee), and alignment with company Top Goal. Supports Red/Yellow/Green status reporting.

### AOR
Area of Responsibility with mandatory DRI (Directly Responsible Individual) + Backup assignment. Ensures no Single Points of Failure (SPOFs). Links to Employee for ownership tracking.

### Pipeline
Structured workflows for Fundraising (Target → Close), Recruiting (Role Definition → 90-day Roadmap), and Sales (Lead → Closed Won). Tracks stage, velocity, and conversion metrics.

### System
A tool, software, or platform used in operations. Examples: SAP, Excel spreadsheets, WhatsApp groups, custom databases, Google Sheets, internal apps. Categorized by three dimensions:
- **Integration status**: `integrated` (has API connections), `disconnected` (manual data transfer), `planned` (roadmap exists)
- **Criticality**: `core` (business stops without it), `support` (helpful but survivable), `legacy` (should be replaced)
- **Ownership**: `internal` (built by company), `external` (SaaS/vendor, links to Supplier), `shadow` (unofficial employee tools)

### API
Integration point between Systems. Represents how data flows between tools—REST endpoints, webhooks, file exports, or manual processes. Tracks connection health, data freshness, and error rates. Examples: Bank API, Fireflies API, Slack webhook, CSV export schedule.

### Process
A workflow or procedure that uses one or more Systems. Corresponds to Macroprocesos ($899) and Microprocesos ($299) deliverables. Documents the "how work gets done" reality (not the manual version). Links Systems to business outcomes.

### Task
A specific action within a Process, performed by an Employee. The atomic unit of work. Tracks frequency, time spent, and which Systems are touched. Enables "day in the life" analysis and automation opportunity identification.

## Relationships

### Core Business
- Account has many Contacts
- Account has many Deals
- Account has many Meetings
- Account has many Transactions (payments received)
- Deal belongs to Account
- Deal has one Product
- Deal belongs to Channel (acquisition source)
- Deal has many Meetings (sales conversations)
- Contact belongs to Account (or independent)
- Contact has many Meetings (as attendee)
- Contact has many Messages

### Financial
- Transaction belongs to Account (revenue) OR Supplier (expense)
- Transaction impacts Metric (revenue, expense tracking)
- Subscription belongs to Supplier
- Subscription has many Transactions (recurring payments)
- Supplier has many Subscriptions
- Supplier has many Transactions

### Operations
- Employee owns many AORs (as DRI or Backup)
- Employee has many OKRs
- Employee attends many Meetings
- Employee sends/receives many Messages
- Meeting has many Contacts (external attendees)
- Meeting has many Employees (internal attendees)
- Meeting belongs to Account (context)
- Meeting belongs to Deal (if sales-related)
- Meeting generates many Insights
- Message belongs to Contact or Employee (sender/recipient)
- Message generates many Insights

### Analytics
- Channel has many Deals (acquired through)
- Channel has many Metrics (conversion rates, CAC)
- Metric belongs to Channel OR Account OR Pipeline
- Pipeline has many Deals
- Pipeline has many Metrics (velocity, conversion)

### Identity & Product
- Brand Asset belongs to Product (product-specific assets)
- Persona informs Product (design decisions)
- Skill enables many workflows

### Systems & Operations (Operational Room)
- System belongs to Supplier (if external/ownership=external)
- System has many APIs (integration points)
- System is used by many Processes
- API connects two Systems (source → target)
- API belongs to System
- Process has many Tasks
- Process uses many Systems
- Process belongs to AOR (ownership)
- Process is a Product deliverable (Macroproceso/Microproceso)
- Task belongs to Process
- Task is performed by Employee
- Task uses System(s)
- Employee performs many Tasks
- Employee uses many Systems (derived from Tasks)

### User
Platform users who access Director AI, dashboards, and automations. Distinct from Employee (internal team) — these are your customers' team members using the product. Tracks activation status, engagement metrics, and retention.

### Session
A user's visit to the platform. Captures entry point (direct, Slack, WhatsApp, email), duration, and device type. Contains all events and agent executions during the visit.

### Event
A specific action taken by a user: navigation, interaction, creation, export, or error. The atomic unit of product analytics. Links to features, systems, and processes for context.

### AgentExecution
When an AI agent (skill) runs in response to a user request. Tracks input question, output response, success/failure, duration, and tokens used. Enables agent performance optimization and usage analytics.

### AutomationRun
When an automation executes for a client. Tracks trigger type (scheduled, webhook, manual), status, records processed, and value saved. The key metric for proving ROI to clients.

### FeatureUsage
Aggregated metrics per feature per time period. Tracks unique users, total events, session duration, and adoption rate. Enables product decisions based on actual usage data.

## Entity Count Summary

| Section | Entities |
|---------|----------|
| Core Business | Contact, Account, Deal, Product |
| People | Employee, Supplier |
| Financial | Transaction, Subscription |
| Analytics | Metric, Channel, Pipeline |
| Communications | Meeting, Message, Insight |
| Operational Room | System, API, Process, Task |
| Capabilities | Skill |
| Identity | Brand Asset, Persona |
| FounderOS | OKR, AOR |
| **Product Analytics (PLG)** | **User, Session, Event, AgentExecution, AutomationRun, FeatureUsage** |

**Total: 28 entities**

## Operational Room Architecture

The Operational Room enables end-to-end traceability from people to outcomes:

```
┌─────────────────────────────────────────────────────────────────┐
│                      OPERATIONAL ROOM                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Employee ──performs──► Task ──belongs to──► Process           │
│       │                    │                      │             │
│       │                    │                      │             │
│       ▼                    ▼                      ▼             │
│   has AOR              uses System          uses System(s)      │
│   has OKR                  │                      │             │
│                            │                      │             │
│                            ▼                      │             │
│                    System ◄───────────────────────┘             │
│                        │                                        │
│                        │ has                                    │
│                        ▼                                        │
│                       API ────connects────► System              │
│                        │                       │                │
│                        │                       │                │
│                        ▼                       ▼                │
│              (integration_status)      belongs to Supplier      │
│              - integrated                                       │
│              - disconnected ← "142 sistemas desconectados"      │
│              - planned                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key Queries Enabled:**
- "What systems does [Employee] use?" → Employee → Tasks → Systems
- "What processes depend on [System]?" → System → Processes
- "Which systems are disconnected?" → Systems where integration_status = disconnected
- "Who is the SPOF for [System]?" → System → Processes → AOR → Employee (DRI)
- "What's the automation opportunity for [Process]?" → Process → Tasks (manual) → Systems (disconnected)

## Product Analytics Architecture (PLG)

The Product Analytics layer tracks user behavior, agent performance, and automation ROI:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PRODUCT ANALYTICS (PLG)                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   User ──starts──► Session ──contains──► Event(s)                           │
│     │                 │                     │                                │
│     │                 │                     ├── clicked_feature              │
│     │                 │                     ├── asked_question               │
│     │                 │                     ├── ran_automation               │
│     │                 │                     └── exported_report              │
│     │                 │                                                      │
│     │                 └──triggers──► AgentExecution                          │
│     │                                    │                                   │
│     │                                    ├── skill: "meeting-intelligence"   │
│     │                                    ├── success: true/false             │
│     │                                    └── duration_ms, tokens_used        │
│     │                                                                        │
│     └──belongs to──► Account                                                 │
│                          │                                                   │
│                          └──has──► AutomationRun                             │
│                                        │                                     │
│                                        ├── process: "Invoice reconcile"      │
│                                        ├── records_processed: 142            │
│                                        └── value_saved: $2,340               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**PLG Metrics Enabled:**
- **Activation funnel:** Signup → Onboarding → First Query → First Automation → Power User
- **Engagement:** DAU/WAU/MAU, session duration, feature adoption rates
- **Agent performance:** Success rate, response time, top skills, error patterns
- **Automation ROI:** Value saved per client, hours recovered, cost per automation
- **Retention cohorts:** Week 1, Week 4, Month 3 retention by signup cohort
- **Revenue:** MRR, ARPU, expansion revenue (if applicable)

**Key PLG Queries:**
- "Which users are at risk of churning?" → Users where status = ACTIVATED and lastActiveAt > 14 days ago
- "What's the activation rate by channel?" → Users grouped by signup channel → % who reached ACTIVATED
- "Which agent skills have the highest success rate?" → AgentExecutions grouped by skill
- "What's the ROI for [Account]?" → AutomationRuns for account → sum(valueSaved) / subscription cost
- "What questions do users ask most?" → AgentExecutions → group by input patterns
