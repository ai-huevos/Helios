# AI Huevos Brand Guidelines

🥚 **Repositorio oficial de directrices de marca para AI Huevos**

## 🎯 Propósito

Este repositorio centraliza todas las directrices de marca, estándares de diseño, y documentación estratégica para AI Huevos, una empresa impulsada por IA que utiliza Claude Skills para automatizar workflows desde investigación de usuarios hasta despliegue de agentes.

## 🌳 Estructura de Branches

### Branch Strategy (GitFlow Adaptado)

```
production (producción estable)
    ↑
main (releases verificados)
    ↑
development (integración continua)
    ↑
feature/* (nuevas características)
hotfix/* (correcciones urgentes)
research/* (investigación y experimentación)
```

#### **production**
- 🔒 Código en producción activa
- Solo merges desde `main` después de QA completo
- Requiere aprobación de al menos 2 reviewers
- Tagged con versiones semánticas (v1.0.0)

#### **main**
- 🛡️ Código estable listo para release
- Merges desde `development` con PR reviews
- CI/CD completo debe pasar
- Requiere aprobación de al menos 1 reviewer

#### **development**
- 🔧 Integración continua de features
- Base para nuevas features
- Testeo automatizado en cada commit
- Branch por defecto para desarrollo

#### **feature/***
- 💡 Nuevas características y mejoras
- Naming: `feature/user-research-automation`
- Merge a `development` vía PR

#### **hotfix/***
- 🚨 Correcciones urgentes
- Naming: `hotfix/critical-brand-color-fix`
- Merge directo a `main` y backport a `development`

#### **research/***
- 🔬 Experimentación y análisis
- Naming: `research/ai-agent-workflow-optimization`
- Opcional merge, pueden archivarse

## 📁 Estructura del Repositorio

```
AI-Huevos-Brand-Guidelines/
├── .claude/                      # Claude Code configuración
│   ├── commands/                 # Slash commands personalizados
│   ├── skills/                   # Claude Skills
│   └── CLAUDE.md                 # Instrucciones del proyecto
│
├── brand/                        # Identidad de marca
│   ├── visual-identity/
│   │   ├── logo/
│   │   ├── colors/
│   │   ├── typography/
│   │   └── assets/
│   ├── voice-tone/
│   └── messaging/
│
├── guidelines/                   # Directrices operacionales
│   ├── design-system/
│   ├── content-guidelines/
│   └── ai-agent-protocols/
│
├── workflows/                    # Flujos de trabajo Claude
│   ├── user-research/
│   ├── channel-performance/
│   ├── automation-pipelines/
│   └── agent-deployment/
│
├── research/                     # User research y análisis
│   ├── user-personas/
│   ├── market-analysis/
│   └── performance-reports/
│
├── automation/                   # Scripts y configuraciones
│   ├── claude-skills/
│   ├── mcp-servers/
│   └── ci-cd/
│
├── docs/                        # Documentación técnica
│   ├── architecture/
│   ├── api-reference/
│   └── workflows/
│
└── templates/                   # Templates reutilizables
    ├── brand-templates/
    ├── document-templates/
    └── workflow-templates/
```

## 🤖 Claude Skills Integration

Este repositorio está optimizado para operarse con Claude Code:

### Skills Disponibles
- `/sc:design` - Operaciones de diseño y sistema de marca
- `/sc:research` - Análisis de mercado y user research
- `/sc:workflow` - Generación de workflows automatizados
- `/sc:implement` - Implementación de features
- `/sc:analyze` - Análisis de performance de canales

### Comandos Personalizados
```bash
/brand-check      # Validar consistencia de marca
/deploy-agent     # Deploy de AI agents
/channel-report   # Generar reporte de performance
/user-research    # Ejecutar workflow de investigación
```

## 🚀 Workflow de Desarrollo

### 1. **Crear Feature Branch**
```bash
git checkout development
git pull origin development
git checkout -b feature/nombre-descriptivo
```

### 2. **Desarrollo y Commits**
```bash
git add .
git commit -m "feat(scope): descripción clara

- Cambio específico 1
- Cambio específico 2

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 3. **Pull Request a Development**
```bash
git push origin feature/nombre-descriptivo
# Crear PR en GitHub/GitLab hacia development
```

### 4. **Release a Main**
```bash
# Después de QA en development
git checkout main
git merge development --no-ff
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin main --tags
```

### 5. **Deploy a Production**
```bash
# Después de verificación en main
git checkout production
git merge main --no-ff
git push origin production
```

## 📋 Conventional Commits

Seguimos el estándar de [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan código)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Scopes (ejemplos)
- `brand`: Identidad de marca
- `workflow`: Flujos de trabajo
- `research`: User research
- `automation`: Scripts y automatización
- `docs`: Documentación

## 🛡️ Protección de Branches

### Main Branch
- ✅ Require PR reviews (mínimo 1)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ❌ Allow force pushes

### Production Branch
- ✅ Require PR reviews (mínimo 2)
- ✅ Require status checks to pass
- ✅ Require signed commits
- ✅ Include administrators
- ❌ Allow force pushes
- ❌ Allow deletions

## 🔐 Seguridad

- **Secrets**: Nunca commitear API keys, tokens, o credenciales
- **Environment Variables**: Usar `.env` (incluido en `.gitignore`)
- **Sensitive Data**: Usar herramientas de encriptación para datos sensibles

## 📊 CI/CD Pipeline

```yaml
On Push to Development:
  - Lint & Format Check
  - Run Tests
  - Build Validation
  - Deploy to Staging

On Merge to Main:
  - Full Test Suite
  - Security Scan
  - Build & Tag Release
  - Deploy to Pre-production

On Merge to Production:
  - Final Validation
  - Deploy to Production
  - Notification to Team
```

## 👥 Contribución

1. Fork el repositorio
2. Crear feature branch desde `development`
3. Implementar cambios con commits convencionales
4. Asegurar que tests pasan
5. Crear PR hacia `development`
6. Esperar code review y aprobación

## 📝 Changelog

Ver [CHANGELOG.md](CHANGELOG.md) para historial de versiones y cambios.

## 📄 Licencia

Propiedad de AI Huevos. Uso interno únicamente.

## 📞 Contacto

Para preguntas o soporte:
- **Equipo**: AI Huevos Dev Team
- **Repository**: Este repositorio
- **Claude Skills**: Usar comandos `/sc:*` para asistencia automatizada

---

**🤖 Este repositorio es gestionado y optimizado por Claude Code**

Última actualización: 2026-01-14
