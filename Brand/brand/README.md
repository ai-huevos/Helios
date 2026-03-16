# AI Huevos Brand System

**Version:** 2.0.0  
**Last Updated:** 2025-01-27

---

## Quick Start

### English

Welcome to the AI Huevos brand system. This directory contains everything you need to create on-brand materials.

**New to the brand?** Start with [brand-book/00-introduction.md](brand-book/00-introduction.md)

**Need a quick reference?** See [brand-book/07-quick-reference.md](brand-book/07-quick-reference.md)

**Looking for assets?** Check [assets/](assets/) for logos, fonts, and illustrations

---

### Español

Bienvenido al sistema de marca de AI Huevos. Este directorio contiene todo lo que necesitas para crear materiales que reflejen la marca.

**¿Nuevo en la marca?** Empieza con [brand-book/00-introduction.md](brand-book/00-introduction.md)

**¿Necesitas una referencia rápida?** Mira [brand-book/07-quick-reference.md](brand-book/07-quick-reference.md)

**¿Buscas assets?** Revisa [assets/](assets/) para logos, fuentes e ilustraciones

---

## Directory Structure

```
brand/
├── README.md              # This file
├── brand-book/            # Complete brand book (bilingual)
│   ├── 00-introduction.md
│   ├── 01-brand-identity.md
│   ├── 02-brand-philosophy.md
│   ├── 03-visual-identity/
│   │   ├── logo-system.md
│   │   ├── color-system.md
│   │   └── typography.md
│   ├── 04-voice-tone.md
│   └── 07-quick-reference.md
├── assets/                # Brand assets
│   ├── logos/             # Official logo files
│   ├── fonts/             # Font files
│   └── illustrations/     # Character illustrations
└── references/            # Implementation files
    ├── css-variables.css
    ├── design-tokens.json
    └── tailwind-config.js
```

---

## Using the Brand System

### English

#### For Designers

1. **Colors:** See [brand-book/03-visual-identity/color-system.md](brand-book/03-visual-identity/color-system.md)
2. **Typography:** See [brand-book/03-visual-identity/typography.md](brand-book/03-visual-identity/typography.md)
3. **Logo:** See [brand-book/03-visual-identity/logo-system.md](brand-book/03-visual-identity/logo-system.md)
4. **Voice:** See [brand-book/04-voice-tone.md](brand-book/04-voice-tone.md)

#### For Developers

1. **CSS Variables:** Use [references/css-variables.css](references/css-variables.css)
2. **Design Tokens:** Import [references/design-tokens.json](references/design-tokens.json)
3. **Tailwind Config:** Use [references/tailwind-config.js](references/tailwind-config.js)

---

### Español

#### Para Diseñadores

1. **Colores:** Ve [brand-book/03-visual-identity/color-system.md](brand-book/03-visual-identity/color-system.md)
2. **Tipografía:** Ve [brand-book/03-visual-identity/typography.md](brand-book/03-visual-identity/typography.md)
3. **Logo:** Ve [brand-book/03-visual-identity/logo-system.md](brand-book/03-visual-identity/logo-system.md)
4. **Voz:** Ve [brand-book/04-voice-tone.md](brand-book/04-voice-tone.md)

#### Para Desarrolladores

1. **Variables CSS:** Usa [references/css-variables.css](references/css-variables.css)
2. **Design Tokens:** Importa [references/design-tokens.json](references/design-tokens.json)
3. **Configuración Tailwind:** Usa [references/tailwind-config.js](references/tailwind-config.js)

---

## Brand Colors

### Primary Colors

| Color | Hex | Use |
|-------|-----|-----|
| White | `#FFFFFF` | Backgrounds |
| Black | `#030102` | Text, wordmark |
| Yellow | `#FFD826` | Primary accent |
| Blue | `#3988FF` | Primary accent |

### Secondary Colors

| Color | Hex | Use |
|-------|-----|-----|
| Violet | `#B4A7FA` | Accents only |
| Orange | `#FF6B35` | CTAs only |

---

## Typography

- **Primary:** Scandia (for all text)
- **Monospace:** Geist Mono (for data/code only)

---

## Logo Files

Official logos are in [assets/logos/](assets/logos/):

- `logo-yellow-black.svg` - Light backgrounds
- `logo-yellow-white.svg` - Dark backgrounds
- `logo-blue-black.svg` - Light backgrounds (alternate)
- `logo-blue-white.svg` - Dark backgrounds (alternate)

**Minimum size:** 170px width (digital)

---

## Next Steps

### English

1. Read [brand-book/00-introduction.md](brand-book/00-introduction.md) for overview
2. Review [brand-book/01-brand-identity.md](brand-book/01-brand-identity.md) for mission and positioning
3. Check [brand-book/07-quick-reference.md](brand-book/07-quick-reference.md) for quick lookup
4. Download assets from [assets/](assets/) when ready to design

---

### Español

1. Lee [brand-book/00-introduction.md](brand-book/00-introduction.md) para resumen
2. Revisa [brand-book/01-brand-identity.md](brand-book/01-brand-identity.md) para misión y posicionamiento
3. Consulta [brand-book/07-quick-reference.md](brand-book/07-quick-reference.md) para búsqueda rápida
4. Descarga assets desde [assets/](assets/) cuando estés listo para diseñar

---

## Bilingual Content

### English

All brand book files are bilingual, with complete English and Español sections. Technical content (hex codes, file paths, code) is language-neutral and appears once.

---

### Español

Todos los archivos del brand book son bilingües, con secciones completas en English y Español. El contenido técnico (códigos hex, rutas de archivos, código) es neutral en idioma y aparece una vez.

---

**For questions, see the main [Brand/README.md](../README.md)**
