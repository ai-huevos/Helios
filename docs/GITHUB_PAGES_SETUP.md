# GitHub Pages Setup Guide

Esta guía explica cómo habilitar y configurar GitHub Pages para este repositorio.

## Pasos para Habilitar GitHub Pages

### 1. Verificar Estructura de Archivos

Asegúrate de que la estructura sea correcta:
```
/
├── docs/
│   ├── .nojekyll
│   ├── index.html (página principal)
│   ├── archetypes.html (eBook completo)
│   ├── README.md (documentación)
│   └── GITHUB_PAGES_SETUP.md (esta guía)
└── _config.yml (configuración de GitHub Pages)
```

### 2. Configurar GitHub Pages en el Repositorio

#### Opción A: Desde la Interfaz Web de GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral izquierdo, click en **Pages**
4. En la sección **Source** (Fuente):
   - Branch: Selecciona `main` (o `master`)
   - Folder: Selecciona `/docs`
5. Click en **Save**
6. Espera 1-2 minutos para que GitHub Pages se construya

#### Opción B: Desde la Línea de Comandos

Si tu repositorio ya está pusheado:

```bash
# GitHub Pages se habilitará automáticamente cuando detecte el directorio /docs
# Solo asegúrate de que los archivos estén en la rama main
git checkout main
git pull origin main
# GitHub detectará automáticamente la configuración
```

### 3. Verificar Despliegue

Una vez configurado, tu sitio estará disponible en:
```
https://[tu-usuario].github.io/[nombre-repositorio]/
```

Por ejemplo:
- Si tu usuario es `aihuevos` y el repo es `brand-guidelines`
- URL será: `https://aihuevos.github.io/brand-guidelines/`

### 4. Acceder a las Páginas

- **Página principal**: `https://[usuario].github.io/[repo]/`
- **eBook completo**: `https://[usuario].github.io/[repo]/archetypes.html`

## Estructura de la Presentación

### Página Principal (`index.html`)
Landing page unificada que incluye:
- Hero section con branding AI Huevos
- Problema: Los 4 desafíos críticos
- Solución: Enfoque freemium + phased deployment
- Casos de éxito: Resumen de Metro y Kikes
- Oportunidad de mercado y métricas
- Los 7 patrones de transformación
- CTA para diagnostic gratuito

### eBook de Arquetipos (`archetypes.html`)
Análisis detallado que incluye:
- Navegación interactiva con sidebar
- Portada con branding
- Introducción al reto de operadores LatAm
- **Metro**: Operador inmobiliario hotelero (análisis completo)
- **Kikes**: Productor agroindustrial integrado (análisis completo)
- Las 7 transformaciones críticas compartidas
- Soluciones con IA: Operating System para LatAm
- Contraportada con CTA

## Actualizaciones Futuras

Para actualizar el contenido:

```bash
# 1. Asegúrate de estar en la rama development
git checkout development
git pull origin development

# 2. Haz cambios en docs/index.html o docs/archetypes.html
# (Edita los archivos según necesites)

# 3. Commit los cambios
git add docs/
git commit -m "feat(docs): actualizar presentación para inversores

- Descripción de los cambios realizados

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push a development
git push origin development

# 5. Crear Pull Request a main
gh pr create --base main --head development --title "feat(docs): actualizar presentación" --body "Actualización de contenido para inversores"

# 6. Una vez merged a main, GitHub Pages se actualiza automáticamente (1-2 min)
```

## Personalización de Dominio (Opcional)

Si deseas usar un dominio personalizado (ej: `investors.aihuevos.com`):

1. Crea un archivo `CNAME` en el directorio `docs/`:
   ```
   investors.aihuevos.com
   ```

2. En tu proveedor de DNS, configura:
   - **Tipo**: CNAME
   - **Nombre**: investors (o el subdominio que prefieras)
   - **Valor**: `[usuario].github.io`

3. En GitHub Settings → Pages → Custom domain, ingresa: `investors.aihuevos.com`

4. Habilita "Enforce HTTPS" para seguridad

## Troubleshooting

### GitHub Pages no se actualiza
- Verifica que los cambios estén en la rama `main`
- Ve a Settings → Pages y verifica que la fuente sea `/docs`
- Espera 1-2 minutos (GitHub Pages toma tiempo en rebuilding)
- Revisa la pestaña **Actions** para ver el status del build

### Error 404 en la página
- Verifica que `index.html` exista en `/docs/`
- Verifica que el archivo `.nojekyll` esté presente
- Limpia la caché del navegador (Cmd+Shift+R en Mac)

### Estilos no se cargan
- Los estilos están inline en los HTML (no hay archivos CSS externos)
- Si agregaste CSS externo, asegúrate de que las rutas sean relativas

### Enlaces no funcionan
- Usa rutas relativas: `./archetypes.html` en lugar de `/archetypes.html`
- Verifica que los nombres de archivo coincidan exactamente (case-sensitive)

## Métricas y Analítica (Opcional)

Para trackear visitas, puedes agregar Google Analytics:

1. Crea una propiedad en Google Analytics
2. Obtén el código de tracking
3. Agrégalo antes del cierre de `</head>` en ambos HTML files

## Seguridad

- GitHub Pages es público por defecto
- No incluyas información confidencial en los HTML
- Para presentaciones privadas, considera usar:
  - GitHub Pages en repo privado (requiere GitHub Pro)
  - O compartir los HTML directamente por email
  - O usar plataformas como Notion/Google Sites con permisos

## Soporte

Si tienes problemas con la configuración:
- Revisa la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
- Verifica el status de GitHub: https://www.githubstatus.com/

---

**Última actualización**: 2026-01-15
**Mantenido por**: AI Huevos Team
