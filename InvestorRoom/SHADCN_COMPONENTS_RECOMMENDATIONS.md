# shadcn/ui Component Recommendations for Analytics Dashboards

Based on analytics/reporting dashboards (like diagnostic reports, process databases, executive summaries), here are the essential components to install:

## 🎯 Priority 1: Essential for Data Visualization

### 1. **Table** ⭐ CRITICAL
**Why:** Core component for displaying structured data, processes, pain points, metrics
- Sortable columns
- Filterable rows
- Pagination for large datasets
- Export capabilities

```bash
npx shadcn@latest add table
```

**Use cases from your reports:**
- Process databases with sorting/filtering
- Pain point matrices by area/company
- System inventories
- Top 10 lists (people, processes, bottlenecks)

---

### 2. **Tabs** ⭐ CRITICAL
**Why:** Navigate between sections (Overview, Details, Analysis, Recommendations)
- Multiple content sections
- URL-based routing
- Tab indicators

```bash
npx shadcn@latest add tabs
```

**Use cases:**
- Report sections (Executive Summary, Analysis, Recommendations, Anexos)
- Dashboard views (Overview, Company A, Company B, Company C)
- Time periods (Q1, Q2, Q3, Q4)

---

### 3. **Badge** ⭐ CRITICAL
**Why:** Status indicators, severity levels, categories
- Color-coded statuses
- Counts/metrics
- Priority labels

```bash
npx shadcn@latest add badge
```

**Use cases:**
- Severity levels: 🔴 Crítico, 🟡 Alto, 🟢 Medio, ⚪ Bajo
- Status badges: ✅ Completed, ⚠️ Warning, ❌ Failed
- Process counts: "258 Procesos", "277 Pain Points"
- Category tags: "Finanzas", "Operaciones", "Comercial"

---

### 4. **Progress** ⭐ HIGH PRIORITY
**Why:** Show completion, progress bars, percentage indicators
- Visual progress tracking
- Percentage displays
- Animated states

```bash
npx shadcn@latest add progress
```

**Use cases:**
- Project completion: "42% Documentación", "78% Implementación"
- Risk levels with visual bars
- ROI progress indicators
- Timeline progress for implementations

---

### 5. **Alert** ⭐ HIGH PRIORITY
**Why:** Key insights, warnings, callout boxes
- Information alerts
- Warning messages
- Success indicators
- Destructive alerts

```bash
npx shadcn@latest add alert
```

**Use cases:**
- 🧠 "Insight Clave" boxes
- ⚠️ "Riesgo de Continuidad" warnings
- ✅ "Lo que el Grupo Gana" sections
- 💡 Key takeaways

---

## 🎯 Priority 2: Data Filtering & Input

### 6. **Select** ⭐ HIGH PRIORITY
**Why:** Dropdown filters (company, department, category, date range)
- Multi-select options
- Searchable dropdowns
- Filter controls

```bash
npx shadcn@latest add select
```

**Use cases:**
- Filter by company: "Los Tajibos", "Bolivian Foods", "Comversa"
- Filter by area: "Finanzas", "Operaciones", "Comercial"
- Filter by severity: "Crítico", "Alto", "Medio", "Bajo"

---

### 7. **Input** ⭐ HIGH PRIORITY
**Why:** Search, filter text, numeric inputs
- Text search
- Number inputs
- Date inputs (with calendar)

```bash
npx shadcn@latest add input
```

**Use cases:**
- Search processes by name
- Filter pain points by keyword
- Date range inputs
- Metric thresholds

---

### 8. **Calendar** / **Date Picker** ⭐ HIGH PRIORITY
**Why:** Date range selection, time period filters
- Date selection
- Range picking
- Time period filters

```bash
npx shadcn@latest add calendar popover
```

**Use cases:**
- Filter by date range: "Q1 2025", "Enero-Marzo"
- Timeline filtering
- Implementation dates
- Deadline tracking

---

## 🎯 Priority 3: Navigation & Organization

### 9. **Accordion** ⭐ MEDIUM PRIORITY
**Why:** Collapsible sections, expandable details
- Nested information
- Expandable content
- Space-efficient layouts

```bash
npx shadcn@latest add accordion
```

**Use cases:**
- Expandable process details
- Collapsible recommendations by category
- FAQ sections
- Anexos expandibles

---

### 10. **Tooltip** ⭐ MEDIUM PRIORITY
**Why:** Additional context on hover, explanations
- Contextual help
- Detailed explanations
- Hover information

```bash
npx shadcn@latest add tooltip
```

**Use cases:**
- Tooltips on metrics: "What does this mean?"
- Process explanations on hover
- System descriptions
- Abbreviation expansions (PMS, POS, ERP, CRM)

---

### 11. **Popover** ⭐ MEDIUM PRIORITY
**Why:** Filters, advanced search, contextual menus
- Filter panels
- Context menus
- Advanced search

```bash
npx shadcn@latest add popover
```

**Use cases:**
- Advanced filter panel
- Quick action menus
- Context-sensitive options
- Detail previews

---

### 12. **Sheet** ⭐ MEDIUM PRIORITY
**Why:** Mobile-friendly side panels, filters, details
- Slide-out panels
- Mobile navigation
- Side filters

```bash
npx shadcn@latest add sheet
```

**Use cases:**
- Mobile filter panel
- Detail view sidebar
- Mobile navigation menu
- Quick access panels

---

## 🎯 Priority 4: Data Display & Metrics

### 13. **Skeleton** ⭐ MEDIUM PRIORITY
**Why:** Loading states for data-heavy dashboards
- Loading placeholders
- Better UX during data fetch
- Perceived performance

```bash
npx shadcn@latest add skeleton
```

**Use cases:**
- Loading states for tables
- Chart placeholders
- Metric card placeholders

---

### 14. **Separator** ⭐ LOW PRIORITY
**Why:** Visual separation, section dividers
- Content separation
- Visual hierarchy
- Clean layouts

```bash
npx shadcn@latest add separator
```

**Use cases:**
- Section dividers
- List separators
- Visual organization

---

### 15. **Scroll Area** ⭐ LOW PRIORITY
**Why:** Custom scrollbars for long content, tables
- Styled scrollbars
- Better UX for long lists
- Custom scroll behavior

```bash
npx shadcn@latest add scroll-area
```

**Use cases:**
- Long process lists
- Scrollable tables
- Fixed headers with scrollable content

---

## 📊 Charts & Data Visualization

**Note:** shadcn/ui doesn't include chart components, but you'll need:

### Recommended Chart Libraries:

1. **Recharts** ⭐ RECOMMENDED
   - React-native, works great with shadcn/ui
   - Declarative API
   - Highly customizable

```bash
npm install recharts
```

2. **Chart.js with react-chartjs-2**
   - More features, steeper learning curve

3. **Victory** (if you need more advanced features)

**Chart types you'll need:**
- Bar charts (pain points by area, processes by company)
- Line charts (trends over time, ROI progression)
- Pie charts (distribution: pain points by company)
- Heatmaps (efficiency maps by department)
- Gantt charts (implementation timelines)
- Flowcharts (process flows: Actual vs. Ideal state)

---

## 🚀 Installation Command (Batch)

Install all Priority 1-2 components at once:

```bash
cd InvestorRoom

# Priority 1: Essential for Data Visualization
npx shadcn@latest add table tabs badge progress alert

# Priority 2: Data Filtering & Input
npx shadcn@latest add select input calendar popover

# Priority 3: Navigation & Organization
npx shadcn@latest add accordion tooltip sheet

# Priority 4: Data Display
npx shadcn@latest add skeleton separator scroll-area

# Charts (separate library)
npm install recharts
```

---

## 📋 Component Usage Examples for Your Reports

### Example 1: Process Database Table

```jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Process table with filters
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">Todos (258)</TabsTrigger>
    <TabsTrigger value="tajibos">Los Tajibos (125)</TabsTrigger>
    <TabsTrigger value="bolivian">Bolivian Foods (83)</TabsTrigger>
    <TabsTrigger value="comversa">Comversa (50)</TabsTrigger>
  </TabsList>
  
  <TabsContent value="all">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Proceso</TableHead>
          <TableHead>Área</TableHead>
          <TableHead>Severidad</TableHead>
          <TableHead>Empresa</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Conciliación Opera-SAP</TableCell>
          <TableCell>Finanzas</TableCell>
          <TableCell><Badge variant="destructive">Crítico</Badge></TableCell>
          <TableCell>Los Tajibos</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TabsContent>
</Tabs>
```

### Example 2: Pain Point Heatmap with Badges

```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

<Card>
  <CardHeader>
    <CardTitle>Mapa de Calor de Ineficiencias</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-2">
          <span>Finanzas & Contabilidad</span>
          <Badge variant="destructive">71 Crítico</Badge>
        </div>
        <Progress value={71} className="h-2" />
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span>General & Administración</span>
          <Badge variant="warning">45 Alto</Badge>
        </div>
        <Progress value={45} className="h-2" />
      </div>
    </div>
  </CardContent>
</Card>
```

### Example 3: Filter Panel with Select & Date Picker

```jsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<div className="flex gap-4">
  <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Empresa" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">Todas</SelectItem>
      <SelectItem value="tajibos">Los Tajibos</SelectItem>
      <SelectItem value="bolivian">Bolivian Foods</SelectItem>
      <SelectItem value="comversa">Comversa</SelectItem>
    </SelectContent>
  </Select>
  
  <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Área" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="finanzas">Finanzas</SelectItem>
      <SelectItem value="operaciones">Operaciones</SelectItem>
      <SelectItem value="comercial">Comercial</SelectItem>
    </SelectContent>
  </Select>
  
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Periodo</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Calendar mode="range" />
    </PopoverContent>
  </Popover>
</div>
```

### Example 4: Alert Box for Key Insights

```jsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert>
  <AlertTitle>🧠 Insight Clave</AlertTitle>
  <AlertDescription>
    Los Tajibos concentra el 41% de las fricciones (113 de 277) debido a su 
    complejidad operativa hotelera con múltiples puntos de contacto.
  </AlertDescription>
</Alert>
```

---

## 🎨 Customization with AI Huevos Brand

All components can be customized with your brand colors:

```jsx
// Example: Custom Badge variants
<Badge className="bg-brand-yellow text-brand-black">Crítico</Badge>
<Badge className="bg-brand-blue text-white">Alto</Badge>
<Badge className="bg-brand-violet text-white">Medio</Badge>

// Example: Custom Progress with brand colors
<Progress value={71} className="h-3 bg-brand-yellow" />

// Example: Custom Alert with brand styling
<Alert className="border-brand-yellow bg-brand-yellow/10">
  <AlertTitle className="text-brand-black">💡 Insight Clave</AlertTitle>
</Alert>
```

---

## 📦 Complete Component Checklist

### Already Installed ✅
- [x] Button
- [x] Card
- [x] Dialog

### Priority 1: Install First ⭐
- [ ] Table
- [ ] Tabs
- [ ] Badge
- [ ] Progress
- [ ] Alert

### Priority 2: Data Filtering
- [ ] Select
- [ ] Input
- [ ] Calendar
- [ ] Popover

### Priority 3: Navigation
- [ ] Accordion
- [ ] Tooltip
- [ ] Sheet

### Priority 4: Nice to Have
- [ ] Skeleton
- [ ] Separator
- [ ] Scroll Area

### External: Charts
- [ ] Recharts (npm install recharts)

---

## 🚀 Quick Start

```bash
cd InvestorRoom

# Install all essential components
npx shadcn@latest add table tabs badge progress alert select input calendar popover accordion tooltip

# Install charts library
npm install recharts

# Start building your dashboard!
npm run dev
```

---

**Recommended order:** Start with Priority 1 components (Table, Tabs, Badge, Progress, Alert) as these are core to any analytics dashboard. Then add filtering (Select, Input, Calendar) as needed.
