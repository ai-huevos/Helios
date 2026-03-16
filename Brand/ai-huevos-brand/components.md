# AI Huevos UI Components

React and Tailwind patterns for creating branded artifacts, dashboards, and interfaces.

## Tailwind Configuration

Add to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#030102',
          yellow: '#FFD826',
          blue: '#3988FF',
          violet: '#B4A7FA',
          orange: '#FF6B35',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        data: {
          1: '#FFD826',
          2: '#3988FF',
          3: '#B4A7FA',
          4: '#FF6B35',
          5: '#030102',
        },
      },
      fontFamily: {
        scandia: ['Scandia', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'Monaco', 'monospace'],
      },
    },
  },
};
```

---

## Component Patterns

### Button

```jsx
// Primary (Orange) - Main CTA
<button className="
  bg-brand-orange hover:bg-orange-600 
  text-white font-semibold 
  px-6 py-3 rounded-md
  transition-colors duration-150
">
  Get Started
</button>

// Secondary (Yellow)
<button className="
  bg-brand-yellow hover:bg-yellow-400 
  text-brand-black font-semibold 
  px-6 py-3 rounded-md
  transition-colors duration-150
">
  Learn More
</button>

// Outline
<button className="
  border-2 border-brand-blue text-brand-blue
  hover:bg-brand-blue hover:text-white
  font-semibold px-6 py-3 rounded-md
  transition-colors duration-150
">
  View Demo
</button>

// Ghost
<button className="
  text-brand-blue hover:bg-blue-50
  font-medium px-4 py-2 rounded-md
  transition-colors duration-150
">
  Cancel
</button>
```

---

### Card

```jsx
// Standard Card
<div className="
  bg-white rounded-lg border border-neutral-300
  shadow-sm p-6
">
  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
    Card Title
  </h3>
  <p className="text-sm text-neutral-600">
    Card content goes here with supporting details.
  </p>
</div>

// Metric Card
<div className="
  bg-white rounded-lg border border-neutral-300
  shadow-sm p-6 text-center
">
  <p className="
    font-mono text-4xl font-bold text-brand-yellow
    leading-none
  ">
    85%
  </p>
  <p className="text-sm text-neutral-800 mt-2">
    Efficiency Gain
  </p>
  <p className="text-xs text-neutral-500 mt-1">
    vs. manual process
  </p>
</div>

// Highlighted Card (Yellow accent)
<div className="
  bg-white rounded-lg border-l-4 border-l-brand-yellow
  border border-neutral-200 shadow-sm p-6
">
  <h3 className="font-semibold text-neutral-800">Key Insight</h3>
  <p className="text-sm text-neutral-600 mt-2">
    Important finding that needs emphasis.
  </p>
</div>
```

---

### Form Elements

```jsx
// Text Input
<div className="space-y-1">
  <label className="
    text-sm font-medium text-neutral-700
  ">
    Email
  </label>
  <input
    type="email"
    className="
      w-full px-4 py-2.5
      border-2 border-neutral-300 rounded-md
      focus:border-brand-blue focus:outline-none
      transition-colors duration-150
    "
    placeholder="you@company.com"
  />
</div>

// Select
<select className="
  w-full px-4 py-2.5
  border-2 border-neutral-300 rounded-md
  focus:border-brand-blue focus:outline-none
  bg-white
">
  <option>Select option...</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Checkbox
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="
      w-5 h-5 rounded
      border-2 border-neutral-300
      text-brand-blue
      focus:ring-brand-blue focus:ring-offset-0
    "
  />
  <span className="text-sm text-neutral-700">
    I agree to the terms
  </span>
</label>
```

---

### Navigation

```jsx
// Top Nav
<nav className="
  bg-white border-b border-neutral-200
  px-6 py-4 flex items-center justify-between
">
  <img src="/logo-yellow-black.svg" alt="AI Huevos" className="h-8" />
  <div className="flex items-center gap-6">
    <a href="#" className="text-sm font-medium text-neutral-600 hover:text-brand-blue">
      Dashboard
    </a>
    <a href="#" className="text-sm font-medium text-neutral-600 hover:text-brand-blue">
      Projects
    </a>
    <a href="#" className="text-sm font-medium text-neutral-600 hover:text-brand-blue">
      Settings
    </a>
  </div>
</nav>

// Sidebar Nav
<aside className="
  w-64 bg-brand-black text-white
  min-h-screen p-6
">
  <img src="/logo-yellow-white.svg" alt="AI Huevos" className="h-8 mb-8" />
  <nav className="space-y-2">
    <a href="#" className="
      block px-4 py-2.5 rounded-md
      bg-white/10 text-white font-medium
    ">
      Dashboard
    </a>
    <a href="#" className="
      block px-4 py-2.5 rounded-md
      text-neutral-400 hover:bg-white/5 hover:text-white
    ">
      Analytics
    </a>
  </nav>
</aside>
```

---

### Tables

```jsx
<table className="w-full">
  <thead>
    <tr className="border-b-2 border-brand-black">
      <th className="
        text-left text-xs font-semibold uppercase tracking-wide
        text-neutral-500 pb-3
      ">
        Process
      </th>
      <th className="text-left text-xs font-semibold uppercase tracking-wide text-neutral-500 pb-3">
        Status
      </th>
      <th className="text-right text-xs font-semibold uppercase tracking-wide text-neutral-500 pb-3">
        Time Saved
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-neutral-200">
    <tr>
      <td className="py-4 font-medium text-neutral-800">Invoice Processing</td>
      <td className="py-4">
        <span className="
          inline-flex items-center px-2.5 py-0.5 rounded-full
          text-xs font-medium
          bg-green-100 text-green-800
        ">
          Active
        </span>
      </td>
      <td className="py-4 text-right font-mono text-brand-blue">4.2 hrs/week</td>
    </tr>
  </tbody>
</table>
```

---

### Status Badges

```jsx
// Success
<span className="
  inline-flex items-center px-2.5 py-1 rounded-full
  text-xs font-medium bg-green-100 text-green-800
">
  Completed
</span>

// Warning
<span className="
  inline-flex items-center px-2.5 py-1 rounded-full
  text-xs font-medium bg-yellow-100 text-yellow-800
">
  Pending
</span>

// Error
<span className="
  inline-flex items-center px-2.5 py-1 rounded-full
  text-xs font-medium bg-red-100 text-red-800
">
  Failed
</span>

// Info (Brand Blue)
<span className="
  inline-flex items-center px-2.5 py-1 rounded-full
  text-xs font-medium bg-blue-100 text-brand-blue
">
  In Progress
</span>
```

---

### Egg Character (CSS Shape)

```jsx
// Decorative Egg
<div className="
  w-16 h-20
  bg-brand-yellow
  rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]
  flex items-center justify-center
">
  {/* Optional: Add face */}
</div>

// With Face (using emoji placeholder)
<div className="
  w-20 h-24
  bg-brand-blue
  rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]
  flex items-center justify-center
  text-2xl
">
  😊
</div>
```

---

## Layout Patterns

### Dashboard Grid

```jsx
<div className="min-h-screen bg-neutral-50">
  {/* Top Nav */}
  <header className="bg-white border-b border-neutral-200 px-6 py-4">
    <img src="/logo-yellow-black.svg" alt="AI Huevos" className="h-8" />
  </header>
  
  {/* Main Content */}
  <main className="p-6">
    {/* Metric Cards Row */}
    <div className="grid grid-cols-4 gap-6 mb-6">
      {/* Metric cards here */}
    </div>
    
    {/* Two Column Layout */}
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white rounded-lg border border-neutral-300 p-6">
        {/* Chart or main content */}
      </div>
      <div className="bg-white rounded-lg border border-neutral-300 p-6">
        {/* Sidebar content */}
      </div>
    </div>
  </main>
</div>
```

---

### Report Layout

```jsx
<div className="max-w-4xl mx-auto py-12 px-8 bg-white">
  {/* Header */}
  <header className="mb-12">
    <img src="/logo-yellow-black.svg" alt="AI Huevos" className="h-10 mb-8" />
    <h1 className="text-3xl font-bold text-brand-black mb-4">
      Organizational Assessment Report
    </h1>
    <div className="flex items-center gap-4 text-sm text-neutral-500">
      <span>Comversa Bolivia</span>
      <span>•</span>
      <span>January 2026</span>
    </div>
    <div className="w-20 h-1 bg-brand-yellow mt-6"></div>
  </header>
  
  {/* Content sections */}
  <section className="mb-12">
    <h2 className="text-xl font-semibold text-brand-black mb-4">
      Executive Summary
    </h2>
    <p className="text-neutral-700 leading-relaxed">
      Content here...
    </p>
  </section>
</div>
```

---

## Data Visualization Colors

Use these colors for charts (in order of preference):

```javascript
const chartColors = {
  primary: '#FFD826',   // Yellow - first series
  secondary: '#3988FF', // Blue - second series
  tertiary: '#B4A7FA',  // Violet - third series
  quaternary: '#FF6B35',// Orange - fourth (use sparingly)
  quinary: '#030102',   // Black - fifth (for contrast)
};

// For Recharts
<LineChart>
  <Line dataKey="revenue" stroke="#FFD826" strokeWidth={2} />
  <Line dataKey="costs" stroke="#3988FF" strokeWidth={2} />
</LineChart>

// For Chart.js
const chartConfig = {
  datasets: [{
    backgroundColor: ['#FFD826', '#3988FF', '#B4A7FA', '#FF6B35'],
  }]
};
```

---

## Dark Mode Variants

When building dark interfaces:

```jsx
// Dark Card
<div className="
  bg-brand-black rounded-lg border border-neutral-700
  p-6
">
  <h3 className="text-lg font-semibold text-white mb-2">
    Card Title
  </h3>
  <p className="text-sm text-neutral-400">
    Supporting text.
  </p>
</div>

// Yellow accent on dark
<span className="text-brand-yellow">Highlighted text</span>

// Metric on dark
<p className="font-mono text-4xl font-bold text-brand-yellow">
  $2.4M
</p>
```
