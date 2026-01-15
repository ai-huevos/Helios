# Setup Guide - AI Huevos Brand Guidelines

## 🎉 ¡Repositorio Configurado!

El repositorio "AI Huevos Brand Guidelines" ha sido inicializado con la siguiente estructura:

### ✅ Completado

#### 1. **Estructura de Branches**
```
* eafe22b (HEAD -> main, production, development)
```

- ✅ **main** - Branch principal para releases verificados
- ✅ **development** - Branch de integración continua (default para trabajo)
- ✅ **production** - Branch de producción estable

#### 2. **Documentación Core**
- ✅ `README.md` - Guía completa del repositorio
- ✅ `CONTRIBUTING.md` - Guías de contribución
- ✅ `CHANGELOG.md` - Historial de versiones
- ✅ `.gitignore` - Exclusiones comprehensivas
- ✅ `.claude/CLAUDE.md` - Instrucciones para Claude Code

#### 3. **Estructura de Directorios**
```
AI-Huevos-Brand-Guidelines/
├── .claude/              ← Claude Code config
├── brand/               ← Identidad de marca
│   ├── visual-identity/
│   ├── voice-tone/
│   └── messaging/
├── workflows/           ← Workflows automatizados
│   ├── user-research/
│   ├── channel-performance/
│   ├── automation-pipelines/
│   └── agent-deployment/
├── research/            ← Investigación y análisis
│   ├── user-personas/
│   ├── market-analysis/
│   └── performance-reports/
├── automation/          ← Scripts y automatización
│   ├── claude-skills/
│   ├── mcp-servers/
│   └── ci-cd/
├── docs/               ← Documentación técnica
├── guidelines/         ← Guías operacionales
└── templates/          ← Templates reutilizables
```

## 🚀 Próximos Pasos

### Opción A: Conectar a Repositorio Remoto (GitHub/GitLab)

#### 1. Crear repositorio en GitHub/GitLab
```bash
# En GitHub: Crear nuevo repo "AI-Huevos-Brand-Guidelines"
# NO inicializar con README, .gitignore, o licencia
```

#### 2. Conectar repositorio local
```bash
# GitHub
git remote add origin git@github.com:tu-usuario/AI-Huevos-Brand-Guidelines.git

# GitLab
git remote add origin git@gitlab.com:tu-usuario/AI-Huevos-Brand-Guidelines.git
```

#### 3. Push initial commit y branches
```bash
# Push main branch
git push -u origin main

# Push development branch
git push -u origin development

# Push production branch
git push -u origin production
```

#### 4. Configurar branch protection en GitHub/GitLab

**Main Branch Protection:**
- ✅ Require pull request reviews (mínimo 1)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ❌ Allow force pushes

**Production Branch Protection:**
- ✅ Require pull request reviews (mínimo 2)
- ✅ Require status checks to pass
- ✅ Require signed commits (opcional)
- ❌ Allow force pushes
- ❌ Allow deletions

**Development Branch:**
- ✅ Default branch for development
- ✅ Require pull requests for merges (opcional)

### Opción B: Trabajar Localmente

#### 1. Cambiar a development branch
```bash
git checkout development
```

#### 2. Crear feature branch
```bash
git checkout -b feature/initial-brand-setup
```

#### 3. Comenzar a trabajar
```bash
# Añadir contenido a brand/, workflows/, etc.
# Hacer commits con conventional commits
# Merge a development cuando esté listo
```

## 📝 Workflow Recomendado

### Desarrollo Diario

```bash
# 1. Asegurar que estás en development
git checkout development
git pull origin development  # Si hay remoto

# 2. Crear feature branch
git checkout -b feature/nombre-descriptivo

# 3. Hacer cambios y commits
git add .
git commit -m "feat(scope): descripción

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push y crear PR
git push origin feature/nombre-descriptivo
# Crear PR hacia development en GitHub/GitLab
```

### Release Process

```bash
# Development → Main
# 1. Verificar que development está estable
# 2. Crear PR: development → main
# 3. Review y merge
# 4. Tag release
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release v1.0.0: Descripción"
git push origin v1.0.0

# Main → Production
# 1. Verificar main en staging
# 2. Crear PR: main → production
# 3. Review (2+ approvals) y merge
```

## 🤖 Claude Code Integration

### Comandos Disponibles
```bash
/sc:git         # Git operations con smart commits
/sc:design      # Design system operations
/sc:implement   # Implementar features
/sc:workflow    # Generar workflows
/sc:research    # Análisis de research
```

### Workflow con Claude
1. **Planear**: `TodoWrite` para tasks complejos
2. **Implementar**: Usar Claude Skills para automatización
3. **Validar**: Verificar brand consistency
4. **Commit**: Conventional commits automáticos

## 📚 Recursos

### Documentación Interna
- `README.md` - Overview del repositorio
- `CONTRIBUTING.md` - Cómo contribuir
- `.claude/CLAUDE.md` - Instrucciones Claude
- `brand/README.md` - Guías de marca
- `workflows/README.md` - Workflows disponibles

### Referencias Externas
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Semantic Versioning](https://semver.org/)

## ⚠️ Recordatorios Importantes

### ❌ NO Hacer
- Trabajar directamente en `main` o `production`
- Commitear secrets, API keys, credentials
- Push --force a branches protegidos
- Ignorar conventional commit format

### ✅ SÍ Hacer
- Siempre crear feature branches desde `development`
- Usar conventional commits
- Revisar brand guidelines antes de cambios
- Testear antes de PR
- Documentar cambios en CHANGELOG.md

## 🎯 Quick Start Commands

```bash
# Ver estado actual
git status
git branch -a
git log --oneline --graph --all

# Cambiar a development (branch de trabajo)
git checkout development

# Crear feature branch
git checkout -b feature/mi-primer-feature

# Ver archivos existentes
ls -la
tree -L 2  # Si tienes tree instalado

# Explorar documentación
cat README.md
cat CONTRIBUTING.md
cat .claude/CLAUDE.md
```

## 🆘 Soporte

Si necesitas ayuda:
1. Consultar `README.md` y `CONTRIBUTING.md`
2. Usar Claude Code: `/sc:help`
3. Revisar `.claude/CLAUDE.md` para instrucciones específicas
4. Contactar al equipo de desarrollo

---

**🎊 ¡Todo listo para comenzar!**

El repositorio está completamente configurado siguiendo best practices de Git, optimizado para Claude Code, y listo para gestionar la identidad de marca y workflows de AI Huevos.

**Próximo paso recomendado:**
```bash
git checkout development
git checkout -b feature/initial-brand-assets
# Comenzar a añadir logos, colores, y brand guidelines
```

---

📅 Configurado: 2026-01-14
🤖 Generado con: Claude Code
📝 Versión: 0.1.0
