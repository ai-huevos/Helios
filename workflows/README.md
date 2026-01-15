# Workflows - Flujos de Trabajo Automatizados

Workflows automatizados con Claude Skills para operaciones clave de AI Huevos.

## Directorios

### `/user-research/`
Workflows de investigación de usuarios:
- Entrevistas automatizadas
- Análisis de feedback
- Generación de insights
- Actualización de personas

### `/channel-performance/`
Análisis de performance de canales:
- Métricas de engagement
- Análisis de conversión
- Reports automatizados
- Optimización de contenido

### `/automation-pipelines/`
Pipelines de automatización general:
- Content generation
- Data processing
- Integration workflows
- Batch operations

### `/agent-deployment/`
Deployment y gestión de AI agents:
- Agent configuration
- Deployment protocols
- Monitoring & logging
- Performance optimization

## Uso

Los workflows están diseñados para ser ejecutados vía Claude Skills:

```bash
/sc:workflow        # Generar nuevos workflows
/user-research      # Ejecutar workflow de investigación
/channel-report     # Generar reporte de canales
/deploy-agent       # Deploy de AI agent
```

## Estructura de Workflow

Cada workflow debe incluir:
1. **README.md** - Descripción y uso
2. **config.json** - Configuración
3. **steps/** - Pasos del workflow
4. **templates/** - Templates utilizados
5. **outputs/** - Directorio para outputs (gitignored)

## Desarrollo

Para crear nuevo workflow:
```bash
git checkout -b feature/workflow-nombre
# Desarrollar workflow
# Documentar en README
# Testear completamente
# PR a development
```
