# Figma Desktop MCP Server - Setup Completo ✅

## ✅ Configuración Aplicada

Tu servidor MCP de Figma Desktop está ahora configurado y corriendo.

### Estado Actual

- ✅ **Servidor local activo**: `http://127.0.0.1:3845/mcp`
- ✅ **Puerto en uso**: Puerto 3845 activo (proceso detectado)
- ✅ **Configuración actualizada**: `~/.cursor/mcp.json` configurado con URL local

---

## 📋 Configuración en `~/.cursor/mcp.json`

```json
{
  "mcpServers": {
    "fireflies": {
      "url": "https://api.fireflies.ai/mcp",
      "headers": {
        "Authorization": "Bearer a77c6f43-bbca-48e4-a56a-832324a49956"
      }
    },
    "figma": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

---

## ✅ Pasos para Completar el Setup

### 1. Verificar Figma Desktop

**Asegúrate de que:**
- ✅ Figma Desktop app está **corriendo**
- ✅ Dev Mode está **habilitado** (`Shift+D` o click en Dev Mode)
- ✅ MCP Server está **activado** en el panel Inspect

**Cómo verificar Dev Mode:**
1. Abre Figma Desktop
2. Presiona `Shift+D` o click en "Dev Mode" en la toolbar
3. Verifica que el panel Inspect esté visible

**Cómo activar MCP Server:**
1. En el panel Inspect (derecha)
2. Busca la sección **"MCP Server"**
3. Toggle **ON** el servidor
4. Verifica que muestra: `http://127.0.0.1:3845/mcp`

---

### 2. Reiniciar Cursor

**Importante**: Después de cambiar `mcp.json`, debes:

1. **Cerrar completamente Cursor**
   - No solo cerrar ventanas, sino salir de la app
   - En Mac: `Cmd+Q` o Cursor → Quit Cursor

2. **Reabrir Cursor**

3. **Verificar la conexión**:
   - Abre el chat de Claude
   - Pregunta: "What Figma resources are available?"
   - Deberías ver recursos de Figma disponibles

---

## 🧪 Verificar que el Servidor Está Corriendo

### Verificar Puerto

```bash
# Verificar que el puerto 3845 está en uso
lsof -ti:3845

# Debería mostrar un número de proceso (PID)
```

### Probar Conexión

```bash
# Probar conexión básica al servidor
curl http://127.0.0.1:3845/mcp

# Si responde (aunque con error de sessionId), el servidor está activo
# El error es normal - significa que el servidor está escuchando
```

---

## 🎯 Uso del Servidor Local

### Ventajas del Servidor Local

- ⚡ **Más rápido** - Conexión local, sin latencia de red
- 🔒 **Más seguro** - No necesita tokens, autenticación automática
- 🎨 **Selection-based** - Selecciona elementos en Figma para contexto
- 📴 **Funciona offline** - Con archivos ya cargados en Figma

### Cómo Usar

**1. Selección basada en contexto:**
- Abre un archivo en Figma Desktop
- Selecciona un elemento (frame, componente, etc.)
- En Cursor, pregunta: "Get the design context for the selected element"

**2. Trabajar con archivos abiertos:**
- Abre un archivo en Figma Desktop
- En Cursor, pregunta: "What components are in this Figma file?"

**3. Extraer tokens de diseño:**
- Abre el archivo de diseño en Figma
- Pregunta: "Get design variables from this file"
- MCP extraerá colores, tipografía, spacing, etc.

---

## ⚠️ Troubleshooting

### El servidor no responde

**Síntoma**: Cursor no puede conectar con Figma MCP

**Soluciones**:
1. **Verificar Figma Desktop está corriendo**
   ```bash
   ps aux | grep -i figma
   ```

2. **Verificar Dev Mode está activo**
   - Presiona `Shift+D` en Figma Desktop
   - Verifica que el panel Inspect esté visible

3. **Verificar MCP Server está ON**
   - Panel Inspect → MCP Server → Toggle ON
   - Debe mostrar: `http://127.0.0.1:3845/mcp`

4. **Reiniciar Figma Desktop**
   - Cierra completamente Figma
   - Reabre y activa Dev Mode + MCP Server

5. **Reiniciar Cursor**
   - Cierra completamente Cursor (`Cmd+Q`)
   - Reabre Cursor

### Puerto ya en uso

**Síntoma**: Error de puerto ocupado

**Solución**:
```bash
# Ver qué proceso usa el puerto
lsof -ti:3845

# Si es Figma, está bien. Si no, puede haber conflicto
# Reinicia Figma Desktop
```

### Cursor no reconoce cambios

**Síntoma**: Cursor sigue usando servidor remoto

**Solución**:
1. **Cierra completamente Cursor** (`Cmd+Q`)
2. **Verifica el archivo** `~/.cursor/mcp.json` tiene la URL local
3. **Reabre Cursor**
4. **Prueba la conexión** con una pregunta a Figma MCP

---

## 🔄 Alternativa: Servidor Remoto

Si prefieres usar el servidor remoto oficial de Figma (OAuth, sin necesidad de Figma Desktop):

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Ventajas**:
- ✅ No requiere Figma Desktop
- ✅ OAuth automático (no necesitas token)
- ✅ Funciona desde cualquier máquina

**Desventajas**:
- ❌ Requiere internet
- ❌ No hay selección basada en contexto
- ❌ Un poco más lento

---

## 📚 Recursos Adicionales

- **Documentación Figma MCP**: https://developers.figma.com/docs/figma-mcp-server/
- **Guía completa**: `.cursor/FIGMA_MCP_SETUP.md`
- **Opciones de servidores**: `.cursor/MCP_SERVER_OPTIONS.md`

---

## ✅ Checklist Final

- [x] Configuración `mcp.json` actualizada con URL local
- [ ] Figma Desktop está corriendo
- [ ] Dev Mode activado (`Shift+D`)
- [ ] MCP Server activado en panel Inspect
- [ ] Cursor reiniciado completamente
- [ ] Conexión verificada con pregunta a Figma MCP

---

**Estado**: ✅ Servidor local configurado en `http://127.0.0.1:3845/mcp`

**Próximo paso**: Reinicia Cursor y prueba con: "What Figma resources are available?"
