# AI Huevos Slide Patterns

CSS and HTML patterns for creating branded presentations using the html2pptx workflow.

## Setup

### 1. Base CSS Override
Save this as `ai-huevos-slides.css` and import in all HTML slides:

```css
/* AI Huevos Presentation Design System */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Brand Colors */
  --white: #FFFFFF;
  --black: #030102;
  --yellow: #FFD826;
  --blue: #3988FF;
  --violet: #B4A7FA;
  --orange: #FF6B35;
  --gray-dark: #8B8B8B;
  --gray-light: #E8E8E8;
  
  /* Typography - Scandia fallback to Inter */
  --font-primary: 'Scandia', 'Inter', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Monaco', monospace;
  
  /* Slide Typography Scale */
  --type-display: 130px;
  --type-h1: 100px;
  --type-h2: 75px;
  --type-h3: 60px;
  --type-h4: 48px;
  --type-body-lg: 32px;
  --type-body: 24px;
  --type-caption: 18px;
  --type-cta: 20px;
  
  /* Spacing */
  --margin: 80px;
  --gap-sm: 16px;
  --gap-md: 32px;
  --gap-lg: 64px;
  --gap-xl: 96px;
}

/* Base Slide */
body {
  width: 960px;
  height: 540px;
  margin: 0;
  font-family: var(--font-primary);
  color: var(--black);
  background: var(--white);
  overflow: hidden;
}

/* Typography Classes */
.display { font-size: 65px; font-weight: 500; line-height: 1.0; letter-spacing: -0.01em; }
.h1 { font-size: 50px; font-weight: 500; line-height: 1.1; letter-spacing: -0.01em; }
.h2 { font-size: 38px; font-weight: 500; line-height: 1.15; }
.h3 { font-size: 30px; font-weight: 500; line-height: 1.2; }
.h4 { font-size: 24px; font-weight: 500; line-height: 1.25; }
.body-lg { font-size: 16px; line-height: 1.4; }
.body { font-size: 12px; line-height: 1.5; }
.caption { font-size: 9px; color: var(--gray-dark); }
.mono { font-family: var(--font-mono); }

/* Color Utilities */
.text-white { color: var(--white); }
.text-black { color: var(--black); }
.text-yellow { color: var(--yellow); }
.text-blue { color: var(--blue); }
.text-violet { color: var(--violet); }
.text-gray { color: var(--gray-dark); }

.bg-white { background: var(--white); }
.bg-black { background: var(--black); }
.bg-yellow { background: var(--yellow); }
.bg-blue { background: var(--blue); }

/* Accent Bar (Yellow underline for emphasis) */
.accent-bar::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--yellow);
  margin-top: 16px;
}

/* Egg Shape */
.egg {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.egg-yellow { background: var(--yellow); color: var(--black); }
.egg-blue { background: var(--blue); color: var(--white); }
.egg-violet { background: var(--violet); color: var(--black); }

/* Bullet Lists */
ul.branded {
  list-style: none;
  padding-left: 0;
}
ul.branded li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
}
ul.branded li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--blue);
  font-weight: 500;
}
```

---

## Slide Type Patterns

### 1. Title Slide
Full-bleed title with logo. Use for deck opening.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 80px;
    }
    .logo {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 120px;
    }
    h1 {
      font-size: 50px;
      font-weight: 500;
      color: var(--white);
      line-height: 1.1;
      margin: 0;
    }
    h1 .accent { color: var(--yellow); }
    .tagline {
      font-family: var(--font-mono);
      font-size: 14px;
      color: var(--gray-dark);
      margin-top: 32px;
      text-transform: lowercase;
    }
  </style>
</head>
<body>
  <div class="slide">
    <img class="logo" src="logo-yellow-white.svg" alt="AI Huevos">
    <h1>Your headline goes here<br><span class="accent">with accent word</span></h1>
    <p class="tagline">subtitle or date goes here</p>
  </div>
</body>
</html>
```

---

### 2. Section Divider
Large text announcing a new section. Bold, minimal.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--yellow);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px;
    }
    h2 {
      font-size: 65px;
      font-weight: 500;
      color: var(--black);
      text-align: center;
      line-height: 1.1;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h2>Section Title</h2>
  </div>
</body>
</html>
```

---

### 3. Content - Left Title + Right Body
Standard content slide with clear hierarchy.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--white);
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 48px;
      padding: 60px 80px;
    }
    .left h2 {
      font-size: 32px;
      font-weight: 500;
      color: var(--black);
      line-height: 1.2;
      margin: 0 0 16px 0;
    }
    .left .bar {
      width: 60px;
      height: 4px;
      background: var(--yellow);
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .right p {
      font-size: 14px;
      line-height: 1.6;
      color: var(--black);
      margin: 0 0 16px 0;
    }
    .right ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .right li {
      font-size: 14px;
      line-height: 1.6;
      padding-left: 20px;
      margin-bottom: 12px;
      position: relative;
    }
    .right li::before {
      content: "—";
      position: absolute;
      left: 0;
      color: var(--blue);
    }
  </style>
</head>
<body>
  <div class="slide">
    <div class="left">
      <h2>Slide Title Goes Here</h2>
      <div class="bar"></div>
    </div>
    <div class="right">
      <p>Introduction paragraph explaining the key concept.</p>
      <ul>
        <li>First supporting point with detail</li>
        <li>Second supporting point with detail</li>
        <li>Third supporting point with detail</li>
      </ul>
    </div>
  </div>
</body>
</html>
```

---

### 4. Big Number / Metric
Impact statement with large data point.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--black);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px;
    }
    .metric {
      font-family: var(--font-mono);
      font-size: 120px;
      font-weight: 700;
      color: var(--yellow);
      line-height: 1;
      margin: 0;
    }
    .label {
      font-size: 24px;
      color: var(--white);
      margin-top: 24px;
    }
    .context {
      font-size: 14px;
      color: var(--gray-dark);
      margin-top: 16px;
      max-width: 600px;
    }
  </style>
</head>
<body>
  <div class="slide">
    <p class="metric">$2.4T</p>
    <p class="label">Market Opportunity</p>
    <p class="context">Latin America's enterprise automation gap represents massive untapped potential</p>
  </div>
</body>
</html>
```

---

### 5. Three Column Stats
Multiple metrics side by side.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--white);
      padding: 60px 80px;
    }
    h2 {
      font-size: 28px;
      font-weight: 500;
      color: var(--black);
      margin: 0 0 48px 0;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
    }
    .stat {
      text-align: center;
    }
    .stat .number {
      font-family: var(--font-mono);
      font-size: 56px;
      font-weight: 700;
      color: var(--yellow);
      line-height: 1;
    }
    .stat .label {
      font-size: 14px;
      color: var(--black);
      margin-top: 16px;
    }
    .stat .detail {
      font-size: 11px;
      color: var(--gray-dark);
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h2>Key Performance Indicators</h2>
    <div class="stats">
      <div class="stat">
        <p class="number">85%</p>
        <p class="label">Efficiency Gain</p>
        <p class="detail">Average improvement in process time</p>
      </div>
      <div class="stat">
        <p class="number">3.2x</p>
        <p class="label">ROI</p>
        <p class="detail">Return on automation investment</p>
      </div>
      <div class="stat">
        <p class="number">44</p>
        <p class="label">Interviews</p>
        <p class="detail">Deep organizational mapping</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### 6. Comparison Table
Before/After or competitive comparison.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--white);
      padding: 60px 80px;
    }
    h2 {
      font-size: 28px;
      font-weight: 500;
      margin: 0 0 32px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--gray-dark);
      text-align: left;
      padding: 12px 16px;
      border-bottom: 2px solid var(--black);
    }
    td {
      font-size: 13px;
      padding: 16px;
      border-bottom: 1px solid var(--gray-light);
    }
    td:first-child {
      font-weight: 500;
    }
    .highlight {
      background: var(--yellow);
      color: var(--black);
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h2>Before vs After</h2>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Before</th>
          <th>After</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Process Time</td>
          <td>4.5 hours</td>
          <td><span class="highlight">45 minutes</span></td>
        </tr>
        <tr>
          <td>Error Rate</td>
          <td>12%</td>
          <td><span class="highlight">2%</span></td>
        </tr>
        <tr>
          <td>Manual Steps</td>
          <td>23</td>
          <td><span class="highlight">4</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
```

---

### 7. Quote / Testimonial
Customer voice or insight highlight.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--blue);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 120px;
    }
    blockquote {
      font-size: 28px;
      font-weight: 400;
      color: var(--white);
      line-height: 1.4;
      margin: 0;
      font-style: italic;
    }
    blockquote::before {
      content: '"';
      font-size: 72px;
      color: var(--yellow);
      line-height: 0;
      vertical-align: -0.3em;
      margin-right: 8px;
    }
    .attribution {
      font-size: 14px;
      color: var(--white);
      margin-top: 32px;
      opacity: 0.8;
    }
    .attribution strong {
      display: block;
      font-weight: 500;
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="slide">
    <blockquote>The knowledge graph showed us problems we didn't know we had.</blockquote>
    <p class="attribution">
      <strong>Carlos Méndez</strong>
      COO, Comversa Bolivia
    </p>
  </div>
</body>
</html>
```

---

### 8. Closing / CTA Slide
Final slide with next steps.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="ai-huevos-slides.css">
  <style>
    .slide {
      width: 960px; height: 540px;
      background: var(--black);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px;
    }
    .logo {
      width: 200px;
      margin-bottom: 48px;
    }
    h2 {
      font-size: 36px;
      font-weight: 500;
      color: var(--white);
      margin: 0 0 24px 0;
    }
    h2 .accent { color: var(--yellow); }
    .contact {
      font-family: var(--font-mono);
      font-size: 16px;
      color: var(--gray-dark);
    }
    .contact a {
      color: var(--blue);
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="slide">
    <img class="logo" src="logo-yellow-white.svg" alt="AI Huevos">
    <h2>Ready to <span class="accent">transform</span>?</h2>
    <p class="contact">
      <a href="mailto:danny@aihuevos.com">danny@aihuevos.com</a>
    </p>
  </div>
</body>
</html>
```

---

## Chart Placeholder Pattern

For slides with data visualization, use placeholder divs:

```html
<div id="chart-placeholder" style="width: 400px; height: 300px; background: var(--gray-light);"></div>
```

Then in the JS generation script:
```javascript
const { slide, placeholders } = await html2pptx("slide.html", pptx);
slide.addChart(pptx.charts.BAR, chartData, {
  ...placeholders[0],
  chartColors: ['FFD826', '3988FF', 'B4A7FA'] // Brand colors without #
});
```

---

## Logo Placement Rules

| Slide Type | Position | Size |
|------------|----------|------|
| Title | Top-left, 40px margin | 120px width |
| Content | Bottom-left, 40px margin | 80px width |
| Section | Hidden | — |
| Closing | Centered | 200px width |
