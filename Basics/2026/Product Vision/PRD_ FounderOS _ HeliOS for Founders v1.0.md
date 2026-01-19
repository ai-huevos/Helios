### PRD: FounderOS / HeliOS for Founders v1.0

#### 1\. Product Overview: The AI-Augmented Control Tower

In high-growth startups, the primary bottleneck to scale is the "founder brain"—a centralized, non-indexed repository of strategy, tribal knowledge, and decision-making logic. FounderOS transforms the static management principles of Matt Mochary’s  *The Great CEO Within*  into a machine-readable, AI-augmented control tower. By codifying organizational logic into version-controlled markdown specs and structured data schemas, FounderOS moves the company from "founder-led chaos" to a high-velocity "machine" where every function is measurable, every owner is identified, and every process is automated.**Product Summary**  FounderOS is an internal operating system that automates the three pillars of organizational excellence: Infrastructure, Collaboration, and Individual Habits. It utilizes a GitHub-backed markdown repository as the Single Source of Truth, NotebookLM as the conversational "Librarian," and Claude Code as the automated "Artifact Generator."**Problem Statement**  Founders often operate in a state of reactive firefighting, leading to high decision latency, Single Points of Failure (SPOF), and the "tragedy of the commons" where critical functions lack clear ownership. Traditional PM tools solve for tasks but fail to preserve institutional knowledge or enforce leadership cadences.**Primary Users**

* **Founder/CEO:**  High-level vision, Top Goal execution, and leadership alignment.  
* **Co-founder/COO/Ops:**  System architecture, SPOF auditing, and process documentation.  
* **Managers:**  Team OKR execution, 1:1 cadences, and continuous feedback loops.**Product Vision**  
* **From Heads to Markdown:**  Codify all tribal knowledge into version-controlled, machine-readable markdown files.  
* **Knowledge Preservation:**  Eliminate SPOFs through documented processes and 1-DRI-plus-1-Backup coverage for every function.  
* **AI-Driven Governance:**  Deploy AI to automate weekly status reporting, audit process freshness, and provide 24/7 coaching on company workflows.  
* **Objective Measurement:**  Replace "gut-feel" management with a real-time KPI dashboard featuring mandatory counter-metric pairing to prevent perverse optimization.The success of FounderOS is measured by organizational velocity—the speed at which a company makes high-quality decisions and executes them without founder intervention.

#### 2\. Strategic Goals & Non-Goals

FounderOS is not a task manager; it is an execution engine. Defining strict boundaries prevents the OS from becoming a generic project tool and ensures focus on the compounding effect of high-velocity decision-making.

##### Strategic Goals

Goal,Target Metric,"""So What?"" (Impact)"  
Decision Velocity,Reduce decision latency to 3–5 days,Prevents founder-led chaos; compounds into massive competitive advantage over time.  
Accountability,\>85–90% Agreement Completion,"Enforces ""Impeccable Agreements""; builds a culture of trust and radical reliability."  
Resilience,100% DRI \+ Backup coverage for every function,Eliminates SPOFs; ensures the machine continues to run during key leader absences.  
Meeting Efficiency,\>80% time spent on Decisions vs. Updates,Recovers \~10%+ of payroll time currently wasted on non-productive syncs.  
KPI Integrity,100% Counter-metric pairing,"Prevents local optimization at the expense of global company health (e.g., Sales vs. Churn)."

##### Non-Goals

* **Not a Granular Task Tool:**  Will not replace Linear, Jira, or Asana for IC-level task tracking.  
* **Not a Public Portal:**  Strictly an internal "Company Brain"; not for external marketing or public-facing documentation.  
* **Not Fully Autonomous:**  AI assists and audits, but the "Human-in-the-Loop" (HITL) requirement remains absolute for strategic decisions and external communications.

#### 3\. User Personas & Jobs-to-Be-Done (JTBD)

Mapping features to specific "Jobs" ensures the system solves real operational friction rather than adding administrative overhead.

##### Founder / CEO

* **Job: Execute Top Goal.**  
* *Status Quo:*  Drowning in "fires" and reactive Slack threads.  
* *FounderOS Solution:*  Mandated 2-hour daily "Top Goal" blocks, tracked in YAML and validated by AI to ensure deep work alignment.  
* **Job: Ensure High-Level Alignment.**  
* *Status Quo:*  Repeating the vision constantly; team is "busy" but misaligned.  
* *FounderOS Solution:*  Machine-readable "3-and-3" OKR structure (3 Objectives, 3 KRs each) visible to all employees.  
* **Job: Radical Transparency.**  
* *Status Quo:*  Hiding issues until they become existential crises.  
* *FounderOS Solution:*  Automated Monday reports highlighting "Red/Yellow" OKRs and associated "Issue/Proposed Solution" documentation.

##### Co-founder / COO / Ops

* **Job: Eliminate Structural SPOFs.**  
* *Status Quo:*  Critical knowledge trapped in a few veterans' heads.  
* *FounderOS Solution:*  AOR (Areas of Responsibility) lookup with automated audits for functions lacking a trained backup.  
* **Job: Scalable Process Maintenance.**  
* *Status Quo:*  Documentation decays; processes are outdated within weeks.  
* *FounderOS Solution:*  "Documentation Sprint" workflow: "When you do it twice, write it down" with weekly AI-driven freshness checks.

##### Manager

* **Job: High-Performance Coaching.**  
* *Status Quo:*  1:1s are aimless status updates with no growth track.  
* *FounderOS Solution:*  Script-based feedback (Ask → Fact → Emotion → Request) integrated into standardized 1:1 templates.  
* **Job: Span of Control Management.**  
* *Status Quo:*  Managing too many people leads to manager burnout and report neglect.  
* *FounderOS Solution:*  Automated alerts for any manager exceeding the "Span of Control" sweet spot (4–8 reports).

#### 4\. Core Functional Requirements (The MVP)

The co-founders must "dogfood" these five pillars to establish the cultural standard for the organization.

##### 4.1. Command Center Dashboard

* **Details:**  Centralized view of the "3-and-3" OKR rule. Includes a KPI ticker with mandatory counter-metrics (e.g., "New ARR" must be paired with "Churn %").  
* **Span of Control Enforcement:**  The system must flag any manager with \>8 reports as a "Structural SPOF."  
* **AOR Lookup:**  Instant identification of the Primary DRI and Backup for any organizational function.  
* **Success Metric:**  100% AOR coverage for critical functions.

##### 4.2. Meeting Mode

* **Details:**  Interface for written-first pre-work (submitted 24h in advance), automated time-boxing, and a decision logger.  
* **Decision Architecture:**  Integrates the RAPID framework and "Impeccable Agreements" (Who, What, By When).  
* **Success Metric:**  \>80% of meeting time allocated to decision-making.

##### 4.3. Individual Habits Panel

* **Details:**  Personal cockpit for GTD (Next Actions, Waiting For) and daily Top Goal scheduling.  
* **Energy Audit Log:**  Mandated tracking of "Zone of Genius" vs. draining tasks to facilitate delegation.  
* **Success Metric:**  \>80% compliance with non-negotiable Top Goal blocks.

##### 4.4. AI Chief of Staff (Director AI)

* **Details:**  Natural language interface (via NotebookLM) for querying markdown specs. Example: "Who is the backup for payroll?" or "Give me the feedback script for a missed deadline."  
* **Success Metric:**  90% of process questions answered without founder intervention.

##### 4.5. Pipelines View

* **Fundraising:**  Tracks the 7-stage pipeline (Target → Close) using the "Triangulation Method" for warm intros.  
* **Hard Guardrail:**  Legal cost control threshold ( $13.6k–$ 15k per side) must be a required field in the "Documentation & Close" stage.  
* **Recruiting:**  Implements the Geoff Smart "Who" methodology (Role Definition → 90-day Roadmap).  
* **Success Metric:**  45–90 day time-to-close for Fundraising and Talent acquisition.

#### 5\. AI Integration & Data Orchestration

The system relies on the synergy between  **NotebookLM (The Librarian)**  and  **Claude Code (The Automator)** .

##### AI Roles

System,Role,Primary Functions  
NotebookLM,Librarian,"RAG-based Q\&A over process docs, summarizing feedback themes, answering ""Who owns X?""."  
Claude Code,Automator,"Validating schemas, generating markdown artifacts, performing SPOF audits, and batch-editing YAML/CSV files."

##### Data Orchestration & Hierarchy

The system requires a strict file hierarchy to remain machine-readable:

* **/data**  **:**  Contains all live state files (OKRs, KPIs, AORs) in YAML or CSV format.  
* **/templates**  **:**  Contains blank markdown templates for 1:1s, Hiring Scorecards, and Process Documentation.  
* **/wiki**  **:**  Contains the playbooks and "How-To" guides.

##### The AI Assistant Contract (Hard Constraints)

All AI operations are governed by a strict contract:

1. **Tier 1 (Internal):**  AI drafts internal templates; Manager reviews and approves.  
2. **Tier 2 (External):**  AI drafts investor/customer comms; CEO/Lead reviews exact text and recipient.  
3. **Prohibited Uses:**  AI is absolutely prohibited from making hiring/firing decisions, sending any external communication without human review, or modifying cap-table/equity terms.

#### 6\. Implementation Roadmap: The Phased Rollout

* **Phase 0: Foundation (First 24 Hours)**  
* *Deliverable:*  GitHub repo structure initialized with /data and /templates folders; 00\_README uploaded.  
* *Friction:*  Overcoming "blank page" syndrome.  
* **Phase 1: Assisted Operations (Weeks 1–4)**  
* *Deliverable:*  NotebookLM trained on foundational docs; Claude Code active for generating the first AOR and OKR lists.  
* *Focus:*  Setting the baseline for ownership and goals.  
* **Phase 2: The Documentation Sprint (Month 2\)**  
* *Deliverable:*  Adoption of the "When you do it twice, write it down" workflow. Managers document all critical processes.  
* *Friction:*  Middle-management adoption and documentation discipline.  
* **Phase 3: Full-Scale Automation (Month 3+)**  
* *Deliverable:*  Fully automated weekly reporting, quarterly SPOF audits, and automated KPI alert generation.  
* *Focus:*  Eliminating data decay and scaling from 25 to 250 people.

#### 7\. Risk Assessment & Future Evolution

##### Main Risks & Mitigation

* **Adoption Friction:**  If the OS feels like "work about work," leaders will revert to Slack.  
* *Mitigation:*  Ensure the system requires \<1% of total payroll time to maintain (\~2 hrs/week for CEO).  
* **Data Entropy:**  Outdated files lead to AI misinformation.  
* *Mitigation:*  Monthly "Process Freshness" audits run by Claude Code to flag un-updated files.  
* **AI Hallucination:**  Incorrect strategic suggestions.  
* *Mitigation:*  Strict  **Tier 1/2/3 Human-in-the-Loop**  approval workflows as mandated in the AI Assistant Contract.

##### Future Evolution

* **Agent Marketplace:**  Custom Claude Code scripts for specialized audits (e.g., Security, Compliance).  
* **Deeper Integrations:**  Real-time syncing with CRM/ATS to automate the "Pipeline View" without manual data entry.**Closing Statement**  HeliOS creates a durable competitive advantage by making the founder’s brain machine-readable. By requiring only \~1% of payroll time to maintain, it builds a resilient, high-velocity machine capable of scaling without imploding. FounderOS ensures that the company's organizational code is as robust and scalable as its software.

