# Design OS

## Description
Design OS is AI Huevos' internal design system and monorepo infrastructure that houses the brand system, public website, and investor room. It ensures brand consistency across all AI Huevos applications while enabling rapid deployment of new branded experiences using React, Vite, and the AI Huevos design tokens (Scandia typography, yellow/orange/black color system, max 3 colors per composition).

## Problems & Solutions

### Problem 1: Brand Inconsistency Across Multiple Apps
When companies build multiple applications (public website, investor room, operational tools), brand identity fragments across repos, leading to inconsistent colors, typography, and component patterns.

**Solution:** Design OS centralizes the AI Huevos brand system (design tokens, components, logos, guidelines) in a single monorepo, ensuring every app uses the same Scandia font, yellow/orange/black palette, and brand rules.

### Problem 2: Slow Time-to-Market for New Branded Pages
Creating new marketing pages or investor materials from scratch takes weeks, especially when adhering to brand guidelines and ensuring top-notch design quality.

**Solution:** Design OS provides pre-built, branded React components and page templates (Hero sections, pricing cards, team bios) that can be composed into new pages in hours, not weeks, while maintaining brand consistency.

### Problem 3: Duplication of Design Assets Across Projects
Teams waste time recreating logos, color variables, and component patterns for each new project, leading to version drift and maintenance nightmares.

**Solution:** The monorepo architecture allows multiple apps (website, investor room, operational room) to share the same design system, components, and assets from a single source of truth.

## Key Features
- **Centralized Brand System** - Design tokens (colors, typography, spacing) defined once, used everywhere
- **AI Huevos Component Library** - Pre-built React components (Hero, Problem, Solution, Team, Pricing, etc.) following brand guidelines
- **Multi-App Monorepo** - Public website + investor room + operational room (future) in one repository
- **React + Vite Stack** - Fast development with hot reload, Framer Motion animations, React Router
- **Brand Enforcement** - Max 3 colors per composition, orange CTAs only, Scandia font, official SVG logos
- **Password-Protected Routes** - Simple authentication for investor room and internal tools
- **Responsive Design** - Mobile-first components that work across all screen sizes
