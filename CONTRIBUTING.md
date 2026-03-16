# Guía de Contribución

¡Gracias por contribuir a AI Huevos Brand Guidelines! 🥚

## 📋 Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [¿Cómo Contribuir?](#cómo-contribuir)
3. [Branch Strategy](#branch-strategy)
4. [Commit Guidelines](#commit-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Estándares de Código](#estándares-de-código)
7. [Testing](#testing)

## 📜 Código de Conducta

- **Respeto**: Trata a todos con respeto y profesionalismo
- **Colaboración**: Trabaja en equipo, comparte conocimiento
- **Calidad**: Mantén altos estándares en todo el trabajo
- **Transparencia**: Comunica claramente tus intenciones y cambios

## 🤝 ¿Cómo Contribuir?

### Reportar Bugs

1. Busca si el bug ya fue reportado en Issues
2. Si no existe, crea un nuevo Issue usando el template
3. Incluye:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Versión/branch afectado

### Proponer Features

1. Crea un Issue con el label `enhancement`
2. Describe:
   - Problema que resuelve
   - Solución propuesta
   - Alternativas consideradas
   - Impacto en usuarios/sistema

### Mejorar Documentación

- La documentación es tan importante como el código
- Sigue el mismo proceso de PR
- Verifica ortografía y gramática
- Asegura claridad y concisión

## 🌳 Branch Strategy

### Crear Nueva Branch

```bash
# Actualizar development
git checkout development
git pull origin development

# Crear feature branch
git checkout -b feature/nombre-descriptivo

# Crear research branch
git checkout -b research/tema-investigacion

# Crear hotfix
git checkout -b hotfix/descripcion-fix
```

### Naming Conventions

#### Features
```
feature/user-research-automation
feature/brand-color-system
feature/claude-skill-deployment
```

#### Hotfixes
```
hotfix/critical-logo-rendering
hotfix/broken-workflow-link
```

#### Research
```
research/ai-agent-performance
research/user-persona-validation
```

### Mantener Branch Actualizado

```bash
# Actualizar con development regularmente
git checkout development
git pull origin development
git checkout feature/tu-branch
git merge development

# O usar rebase (si prefieres historial lineal)
git rebase development
```

## 📝 Commit Guidelines

### Formato de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Solo documentación
- **style**: Formato, puntos y comas, etc (no código)
- **refactor**: Refactorización sin cambio funcional
- **perf**: Mejora de performance
- **test**: Añadir/corregir tests
- **chore**: Mantenimiento, dependencias, etc

### Scopes

- `brand`: Identidad de marca
- `workflow`: Flujos de trabajo
- `research`: User research
- `automation`: Scripts y automatización
- `docs`: Documentación
- `ci`: CI/CD
- `deps`: Dependencias

### Ejemplos

```bash
# Feature
git commit -m "feat(brand): añadir sistema de color tokens

- Implementar tokens de color primarios y secundarios
- Crear documentación de uso
- Añadir ejemplos visuales"

# Fix
git commit -m "fix(workflow): corregir error en pipeline de research

Resuelve #123"

# Documentation
git commit -m "docs(readme): actualizar instrucciones de setup

- Añadir pasos para Claude Code
- Clarificar requisitos de sistema"

# Refactor
git commit -m "refactor(automation): optimizar script de deploy

Mejora performance en 40%"
```

### Commits con Claude Code

Cuando uses Claude Code para commits:

```bash
# Claude genera automáticamente commits convencionales
# Incluye footer estándar:

feat(scope): descripción

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🔄 Pull Request Process

### 1. Preparar PR

```bash
# Asegurar que branch está actualizado
git checkout development
git pull origin development
git checkout feature/tu-branch
git merge development

# Resolver conflictos si existen
# Ejecutar tests
# Hacer push
git push origin feature/tu-branch
```

### 2. Crear PR

En GitHub/GitLab:

1. **Title**: Mismo formato que commits
   ```
   feat(brand): implementar design tokens
   ```

2. **Description**: Usar template
   ```markdown
   ## Descripción
   Breve descripción de los cambios

   ## Tipo de Cambio
   - [ ] Bug fix
   - [x] Nueva feature
   - [ ] Breaking change
   - [ ] Documentación

   ## ¿Cómo ha sido testeado?
   Describir tests realizados

   ## Checklist
   - [x] Mi código sigue los estándares del proyecto
   - [x] He realizado self-review
   - [x] He comentado código complejo
   - [x] He actualizado documentación
   - [x] Mis cambios no generan warnings
   - [x] He añadido tests
   - [x] Tests nuevos y existentes pasan
   ```

3. **Reviewers**: Asignar al menos 1 reviewer
4. **Labels**: Añadir labels apropiados
5. **Linked Issues**: Referenciar issues relacionados

### 3. Code Review

- Responde a comentarios constructivamente
- Realiza cambios solicitados
- Push updates al mismo branch
- Re-request review cuando esté listo

### 4. Merge

**Development Branch:**
- Squash and merge (preferido para features pequeños)
- Merge commit (preferido para features grandes)

**Main Branch:**
- Siempre merge commit
- No squash para mantener historial

**Production Branch:**
- Merge commit obligatorio
- Requires 2 approvals

## 💻 Estándares de Código

### General

- **Nombres descriptivos**: Variables, funciones, archivos
- **Comentarios**: Explica "por qué", no "qué"
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **Consistencia**: Sigue patrones existentes

### Documentación

- **Archivos**: Incluir comentarios header
- **Funciones**: Documentar parámetros y returns
- **Complejos**: Explicar lógica no obvia

### Estructura

```
# Buen ejemplo de estructura de archivo
/**
 * Nombre del módulo
 *
 * Descripción breve de propósito
 *
 * @author Tu Nombre
 * @created 2026-01-14
 */

// Imports

// Constants

// Main functionality

// Exports
```

## 🧪 Testing

### Antes de PR

```bash
# Ejecutar todos los tests
npm test  # o comando apropiado

# Verificar linting
npm run lint

# Verificar formato
npm run format:check
```

### Tipos de Tests

1. **Unit Tests**: Funciones individuales
2. **Integration Tests**: Módulos combinados
3. **E2E Tests**: Workflows completos
4. **Visual Tests**: Componentes UI (si aplica)

### Coverage

- Mantener coverage > 80%
- Critical paths: 100%
- Tests significativos, no por coverage

## 🚀 Release Process

### Development → Main

```bash
# 1. Asegurar development está estable
# 2. Crear PR development → main
# 3. Esperar CI/CD green
# 4. 1+ approval required
# 5. Merge con merge commit
# 6. Tag release
git tag -a v1.0.0 -m "Release v1.0.0: Descripción"
git push origin v1.0.0
```

### Main → Production

```bash
# 1. Verificar main en staging
# 2. Crear PR main → production
# 3. 2+ approvals required
# 4. Merge con merge commit
# 5. Monitor deployment
```

## 📞 ¿Necesitas Ayuda?

- **Issues**: Para bugs y features
- **Discussions**: Para preguntas generales
- **Claude Skills**: `/sc:help` para comandos disponibles
- **Team**: Contacta al equipo de desarrollo

## 🙏 Gracias

Cada contribución, por pequeña que sea, es valiosa. ¡Gracias por ayudar a mejorar AI Huevos!

---

🤖 **Claude Code Integration**: Muchos de estos procesos pueden automatizarse con `/sc:git`, `/sc:implement`, y otros comandos.
