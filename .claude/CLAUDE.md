# AI Huevos Brand Guidelines - Claude Instructions

## Project Context

Este es el repositorio oficial de **AI Huevos Brand Guidelines**, que centraliza:
- Identidad de marca y design system
- Workflows automatizados con Claude Skills
- User research y análisis de mercado
- Automatización de canales y performance
- Deployment de AI agents

## Core Directives

### Operación Principal
- **Spanish-first**: Todo el contenido es en español (ensure_ascii=False)
- **Brand consistency**: Mantener consistencia con guidelines de marca
- **Workflow automation**: Aprovechar Claude Skills para automatización
- **Evidence-based**: Decisiones basadas en data y research

### Quality Gates
1. **Understand**: Verificar contexto de marca y guidelines existentes
2. **Plan**: TodoWrite para tareas >3 pasos, considerar impacto de marca
3. **Execute**: Implementar con consistencia de marca
4. **Validate**: Verificar adherencia a brand guidelines

## Branch Strategy

### CRITICAL: Branch Protection
- **NEVER** work on `main` directly
- **NEVER** work on `production` directly
- **ALWAYS** create feature branches from `development`

### Branch Workflow
```
production (estable, producción)
    ↑
main (releases verificados)
    ↑
development (base de trabajo) ← WORK HERE
    ↑
feature/* (tus cambios)
```

### Creating Branches
```bash
# Feature branch
git checkout development
git pull origin development
git checkout -b feature/descriptive-name

# Research branch
git checkout -b research/topic-name

# Hotfix (urgent only)
git checkout -b hotfix/critical-fix
```

## Tool Preferences

### Primary Tools
1. **Serena**: Semantic code operations, project memory
   - Usar para navegación de código
   - Mantener memoria del proyecto
   - Ediciones semánticas

2. **Context7**: Official documentation
   - Consultar docs de frameworks
   - Verificar best practices

3. **Sequential Thinking**: Complex reasoning
   - Decisiones arquitectónicas
   - Análisis de workflows complejos

### File Operations
- **Read**: Verificar contenido antes de editar
- **Edit**: Modificar archivos existentes
- **Write**: SOLO para archivos nuevos necesarios
- **Paths**: SIEMPRE usar absolute paths

## Project-Specific Protocols

### Brand Consistency
1. **Color System**: Verificar con `brand/visual-identity/colors/`
2. **Typography**: Seguir `brand/visual-identity/typography/`
3. **Voice & Tone**: Adherir a `brand/voice-tone/`
4. **Messaging**: Consistente con `brand/messaging/`

### Workflows
- User research: `workflows/user-research/`
- Channel performance: `workflows/channel-performance/`
- Automation: `workflows/automation-pipelines/`
- Agent deployment: `workflows/agent-deployment/`

### Documentation
- Architecture decisions: `docs/architecture/`
- API reference: `docs/api-reference/`
- Workflow docs: `docs/workflows/`

## Claude Skills Integration

### Available Skills
- `/sc:design` - Design system y brand operations
- `/sc:research` - User research y market analysis
- `/sc:workflow` - Workflow automation generation
- `/sc:implement` - Feature implementation
- `/sc:analyze` - Performance analysis

### Custom Commands (cuando implementados)
- `/brand-check` - Validar brand consistency
- `/deploy-agent` - Deploy AI agents
- `/channel-report` - Generate performance reports
- `/user-research` - Execute research workflows

## Workflow Pattern

### Starting Work
```bash
# 1. Check status
git status

# 2. Ensure on development
git checkout development
git pull origin development

# 3. Create feature branch
git checkout -b feature/your-task

# 4. Load project context (if needed)
# Read relevant brand guidelines
# Check existing workflows
```

### During Work
1. **TodoWrite**: Track progress for >3 steps
2. **Read First**: Always read before Write/Edit
3. **Brand Check**: Verify consistency with guidelines
4. **Parallel Work**: Independent tasks in parallel
5. **Validate**: Test before marking complete

### Ending Work
```bash
# 1. Stage changes
git add .

# 2. Commit (conventional commits)
git commit -m "feat(scope): descripción

- Detalle cambio 1
- Detalle cambio 2

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# 3. Push
git push origin feature/your-task

# 4. Create PR to development (not main!)
```

## Commit Conventions

### Format
```
<type>(<scope>): <subject>

[body]

[footer]
```

### Types
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato (no código)
- `refactor`: Refactorización
- `test`: Tests
- `chore`: Mantenimiento

### Scopes
- `brand`: Visual identity, messaging
- `workflow`: Automation workflows
- `research`: User research
- `automation`: Scripts, CI/CD
- `docs`: Documentation
- `agent`: AI agent deployment

### Examples
```bash
feat(brand): añadir color tokens system
fix(workflow): corregir automation pipeline error
docs(research): actualizar user personas
refactor(automation): optimizar deploy script
```

## Safety & Quality

### Critical Rules
1. **No Secrets**: NEVER commit API keys, tokens, credentials
2. **Test First**: Run tests before PR
3. **Read Docs**: Check brand guidelines before changes
4. **Ask When Unsure**: Better to clarify than assume

### Quality Checklist
- [ ] Follows brand guidelines
- [ ] Conventional commits used
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] No secrets committed
- [ ] Feature branch (not main)
- [ ] Spanish content (when applicable)

## Session Lifecycle

### Session Start
1. Check git status
2. Verify on correct branch (development or feature/*)
3. Load relevant brand context
4. Check existing memories (Serena)

### During Session
- TodoWrite for complex tasks
- Checkpoint every 30min
- Validate against brand guidelines
- Parallel execution when possible

### Session End
- Complete todos
- Clean workspace
- Commit changes
- Update documentation if needed

## Special Considerations

### AI Agent Workflows
- Document in `workflows/agent-deployment/`
- Follow deployment protocols
- Track performance metrics
- Maintain agent configs

### User Research
- Store personas in `research/user-personas/`
- Document methodology
- Track insights
- Link to workflows

### Channel Performance
- Analytics in `research/performance-reports/`
- Automation in `workflows/channel-performance/`
- Regular reporting cadence

### Design System
- Tokens in `brand/visual-identity/`
- Components documented
- Usage examples provided
- Consistency validation

## Memory Management

### Project Memories (Serena)
- **Brand guidelines**: Core identity, colors, typography
- **Workflows**: Common automation patterns
- **Research insights**: Key user findings
- **Architecture**: System design decisions

### When to Write Memory
- New brand guidelines established
- Workflow patterns discovered
- Research insights uncovered
- Architecture decisions made

## Error Prevention

### Common Mistakes to Avoid
1. ❌ Working directly on `main` or `production`
2. ❌ Committing without conventional format
3. ❌ Creating files without reading first
4. ❌ Ignoring brand consistency
5. ❌ Not using TodoWrite for complex tasks
6. ❌ Translating Spanish content to English
7. ❌ Committing secrets or credentials

### Correct Approach
1. ✅ Always feature branches from `development`
2. ✅ Conventional commits with scope
3. ✅ Read before Write/Edit
4. ✅ Verify brand guidelines
5. ✅ TodoWrite for planning
6. ✅ Maintain Spanish content
7. ✅ Check .gitignore for secrets

## Resources

### Internal
- README.md - Repository overview
- CONTRIBUTING.md - Contribution guidelines
- CHANGELOG.md - Version history
- Brand guidelines in `brand/`

### External
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Keep a Changelog](https://keepachangelog.com/)

---

**🤖 Optimizado para Claude Code**

Este proyecto está diseñado para máxima eficiencia con Claude Skills y automatización IA.

Última actualización: 2026-01-14
