# Application Shell Specification

## Overview
HeliOS uses a sidebar navigation pattern optimized for dashboard-style applications with 7 major sections. The shell provides persistent access to all sections while keeping the content area maximized. User menu is anchored at the bottom of the sidebar for easy access.

## Navigation Structure

| Nav Item | Route | Icon | Description |
|----------|-------|------|-------------|
| Machine-Readable Specs | `/specs` | FileText | Version-controlled YAML/CSV infrastructure |
| CEO Operating System | `/ceo-os` | Target | **Default home** — 6-block execution framework |
| Director AI | `/director` | Brain | Conversational company brain interface |
| Team & Resources | `/team` | Users | Unified profiles for humans and agents |
| Automation Agents | `/agents` | Cog | FIND/FIX/IMPROVE workflow engine |
| Admin & Settings | `/admin` | Settings | Multi-tenant config, integrations |
| The Loop | `/loop` | RefreshCcw | <48h improvement cycles |

## Layout Pattern

### Sidebar Navigation (264px fixed width)

```
┌─────────────────────────────────────────────────────────┐
│ [Logo] HeliOS                                           │
│        Company OS                                       │
├─────────────────────────────────────────────────────────┤
│                           │                             │
│  ┌───────────────────┐   │                             │
│  │ 📄 M-R Specs      │   │                             │
│  │ 🎯 CEO OS     ◄── │   │      Content Area           │
│  │ 🧠 Director AI    │   │                             │
│  │ 👥 Team & Res     │   │      (Section renders here) │
│  │ ⚙️ Agents         │   │                             │
│  │ 🔧 Admin          │   │                             │
│  │ 🔄 The Loop       │   │                             │
│  └───────────────────┘   │                             │
│                           │                             │
│  ┌───────────────────┐   │                             │
│  │ [Avatar] María G  │   │                             │
│  │ Tech Startup LATAM│   │                             │
│  └───────────────────┘   │                             │
└─────────────────────────────────────────────────────────┘
```

## User Menu
- **Location:** Bottom of sidebar
- **Contents:** Avatar (initials or image), user name, company name
- **Interaction:** Click to expand popup menu with "Cerrar sesión" (logout)
- **Style:** Expandable with ChevronUp indicator

## Responsive Behavior

### Desktop (≥768px)
- Fixed sidebar (264px) on left
- Content area fills remaining width
- User menu always visible at bottom of sidebar

### Mobile (<768px)
- Sidebar hidden, replaced by header with hamburger menu
- Header: Logo + HeliOS brand + hamburger button (56px height)
- Hamburger triggers slide-out drawer from left
- Drawer includes full navigation + user menu
- Backdrop overlay when drawer is open
- Content area scrolls independently

## Design Tokens Applied

### Colors (Tailwind)
- **Primary accent:** `amber-600` / `amber-400` (dark mode)
- **Active nav item:** `amber-50` background with `amber-200` border (dark: `amber-950/30` + `amber-800/50`)
- **Backgrounds:** `slate-50` (light) / `slate-950` (dark)
- **Sidebar background:** `white` (light) / `slate-900` (dark)
- **Borders:** `slate-200` (light) / `slate-800` (dark)
- **Text:** `slate-900` / `slate-100` (dark mode)

### Typography
- **Logo:** Bold, `text-lg`
- **Subtitle:** `text-xs`, slate-500
- **Nav items:** `text-sm`, medium weight
- **User name:** `text-sm`, medium weight
- **Company:** `text-xs`, slate-500

### Icons (lucide-react)
- FileText, Target, Brain, Users, Cog, Settings, RefreshCcw
- Menu (hamburger), X (close), ChevronUp, LogOut

## Accessibility
- `aria-current="page"` on active nav item
- `aria-label` on icon-only buttons
- `aria-expanded` on dropdown triggers
- Focus visible states on all interactive elements
- Keyboard navigation support

## Implementation Notes
- `AppShell` wraps content with sidebar layout (flex horizontal)
- `Sidebar` handles both desktop (fixed) and mobile (drawer) layouts
- `UserMenu` supports `variant="sidebar"` for bottom placement
- Mobile uses fixed header + slide-out drawer pattern
- Backdrop overlay closes drawer on click
- TopNav component kept for backwards compatibility

## Advantages of Sidebar Design
- ✅ **Scales to 7 sections** — No horizontal crowding
- ✅ **Persistent navigation** — Always visible during work
- ✅ **Clear visual hierarchy** — Icons + labels for quick scanning
- ✅ **User menu placement** — Bottom anchored, easy to access
- ✅ **Mobile-friendly** — Hamburger + drawer pattern is familiar
