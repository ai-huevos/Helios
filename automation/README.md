# Automation - Scripts y Configuraciones

Scripts de automatización, Claude Skills, MCP servers, y configuraciones CI/CD.

## Directorios

### `/claude-skills/`
Claude Skills personalizados:
- Skill definitions
- Workflows automatizados
- Integration scripts
- Custom commands

### `/mcp-servers/`
MCP (Model Context Protocol) servers:
- Server configurations
- Custom tools
- Integration configs
- Documentation

### `/ci-cd/`
Configuraciones de CI/CD:
- GitHub Actions / GitLab CI
- Build pipelines
- Deployment scripts
- Testing automation

## Claude Skills

### Estructura de Skill
```
skill-name/
├── README.md           # Documentación del skill
├── config.json         # Configuración
├── prompts/           # System prompts
├── tools/             # Herramientas personalizadas
└── tests/             # Tests del skill
```

### Desarrollo de Skills
1. **Design**: Definir propósito y alcance
2. **Implement**: Desarrollar skill y tools
3. **Test**: Validar funcionamiento
4. **Document**: Documentar uso y ejemplos
5. **Deploy**: Integrar en .claude/skills/

## MCP Servers

### Tipos de Servers
- **Data**: Acceso a bases de datos y APIs
- **Tools**: Herramientas especializadas
- **Integration**: Integración con servicios externos
- **Analysis**: Análisis y procesamiento de data

### Configuration
```json
{
  "name": "server-name",
  "type": "tool|data|integration",
  "config": {
    "endpoint": "...",
    "auth": "..."
  }
}
```

## CI/CD Pipelines

### Development Pipeline
```yaml
on: push to development
  - Lint & format check
  - Run tests
  - Build validation
  - Deploy to staging
```

### Production Pipeline
```yaml
on: merge to production
  - Full test suite
  - Security scan
  - Build & package
  - Deploy to production
  - Notify team
```

## Comandos

```bash
/sc:implement       # Implementar nuevas automations
/sc:build          # Build y deploy automation
/deploy-agent      # Deploy AI agent
```

## Best Practices

### Scripts
- **Idempotent**: Pueden ejecutarse múltiples veces
- **Documented**: Comentarios claros
- **Error handling**: Manejo robusto de errores
- **Logging**: Logging apropiado

### Security
- **Secrets**: Usar variables de entorno
- **Credentials**: Nunca hardcodear
- **Permissions**: Mínimos necesarios
- **Audit**: Log de operaciones críticas

### Testing
- **Unit tests**: Para funciones individuales
- **Integration tests**: Para workflows completos
- **E2E tests**: Para pipelines end-to-end
- **Validation**: Verificar outputs esperados
