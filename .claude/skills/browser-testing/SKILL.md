---
name: browser-testing
description: Automate browser testing and UI validation tasks. Activate when user mentions Playwright, Chrome DevTools, browser automation, screenshot capture, web testing, or UI interaction testing.
---

# Browser Testing Skill

Automate UI testing, screenshot capture, and browser interactions using Playwright and Chrome DevTools MCP servers.

## When to Use

- Testing InvestorRoom UI across different viewports
- Capturing screenshots for documentation
- Automated form testing
- Visual regression testing
- Debugging browser-specific issues
- Accessibility testing (snapshot analysis)

## Quick Start

```
User: "Test the InvestorRoom contact form on mobile viewport"

Process:
1. Launch Playwright browser at mobile size
2. Navigate to localhost:5173
3. Take snapshot of form
4. Fill form fields
5. Submit and verify success state
6. Capture screenshot of result
```

## MCP Tool Delegation

This skill wraps **TWO** MCP servers: **playwright** (preferred) and **chrome-devtools** (fallback).

### When to Use Which

| Scenario | Use Playwright | Use Chrome DevTools |
|----------|---------------|---------------------|
| Automated testing | ✅ Preferred | ❌ |
| Screenshot capture | ✅ | ✅ |
| Form interactions | ✅ | ✅ |
| Console monitoring | ❌ | ✅ Preferred |
| Network request inspection | ❌ | ✅ Preferred |
| Performance profiling | ❌ | ✅ Preferred |
| Multiple browser tabs | ✅ | ✅ |

**Default:** Use Playwright for testing, Chrome DevTools for debugging.

## Playwright Tools

### Navigation & Setup
```javascript
// Launch browser and navigate
mcp__playwright__browser_navigate({ url: "http://localhost:5173" })

// Resize viewport
mcp__playwright__browser_resize({ width: 375, height: 667 }) // iPhone SE

// Navigate back
mcp__playwright__browser_navigate_back()

// Close browser
mcp__playwright__browser_close()
```

### Snapshots & Screenshots
```javascript
// Take accessibility snapshot (preferred for understanding page)
mcp__playwright__browser_snapshot({ filename: "page-snapshot.md" })

// Take screenshot
mcp__playwright__browser_take_screenshot({
  filename: "contact-form.png",
  type: "png",
  fullPage: false  // true for full scrollable page
})

// Screenshot specific element
mcp__playwright__browser_take_screenshot({
  element: "Submit button",
  ref: "button[type='submit']",
  filename: "submit-button.png"
})
```

### Interactions
```javascript
// Click element
mcp__playwright__browser_click({
  element: "Submit button",
  ref: "button[type='submit']"
})

// Fill form
mcp__playwright__browser_fill_form({
  fields: [
    { name: "Name field", ref: "input[name='name']", type: "textbox", value: "Daniel García" },
    { name: "Email field", ref: "input[name='email']", type: "textbox", value: "daniel@aihuevos.com" },
    { name: "Message field", ref: "textarea[name='message']", type: "textbox", value: "Mensaje de prueba" }
  ]
})

// Type text (triggers key handlers)
mcp__playwright__browser_type({
  element: "Search input",
  ref: "input[type='search']",
  text: "automation opportunities",
  slowly: true,  // Type one character at a time
  submit: true   // Press Enter after typing
})

// Hover
mcp__playwright__browser_hover({
  element: "Pricing card",
  ref: ".pricing-card"
})

// Drag and drop
mcp__playwright__browser_drag({
  startElement: "Draggable item",
  startRef: ".drag-item",
  endElement: "Drop zone",
  endRef: ".drop-zone"
})
```

### Advanced
```javascript
// Execute custom Playwright code
mcp__playwright__browser_run_code({
  code: `async (page) => {
    await page.getByRole('button', { name: 'Submit' }).click();
    const title = await page.title();
    return title;
  }`
})

// Evaluate JavaScript
mcp__playwright__browser_evaluate({
  element: "Contact form",
  ref: "form#contact",
  function: "(element) => { return element.checkValidity(); }"
})
```

### Monitoring
```javascript
// Get console messages
mcp__playwright__browser_console_messages({
  level: "error"  // "error" | "warning" | "info" | "debug"
})

// Get network requests
mcp__playwright__browser_network_requests({
  includeStatic: false  // Exclude images, fonts, scripts
})

// Wait for text
mcp__playwright__browser_wait_for({
  text: "Submission successful"  // Wait for text to appear
})
```

## Chrome DevTools Tools

### Navigation & Setup
```javascript
// Navigate
mcp__chrome-devtools__navigate_page({
  type: "url",
  url: "http://localhost:5173"
})

// Resize
mcp__chrome-devtools__resize_page({ width: 1920, height: 1080 })

// Multiple pages
mcp__chrome-devtools__list_pages()
mcp__chrome-devtools__new_page({ url: "http://localhost:5173/about" })
mcp__chrome-devtools__select_page({ pageId: 1, bringToFront: true })
mcp__chrome-devtools__close_page({ pageId: 2 })
```

### Snapshots & Screenshots
```javascript
// Take snapshot
mcp__chrome-devtools__take_snapshot({ verbose: false })

// Screenshot
mcp__chrome-devtools__take_screenshot({
  format: "png",  // "png" | "jpeg" | "webp"
  quality: 90,    // For JPEG/WebP only
  fullPage: true
})
```

### Network & Performance
```javascript
// List network requests
mcp__chrome-devtools__list_network_requests({
  resourceTypes: ["xhr", "fetch"],  // Filter by type
  pageSize: 50,
  includePreservedRequests: false
})

// Get specific request details
mcp__chrome-devtools__get_network_request({ reqid: 123 })

// Performance trace
mcp__chrome-devtools__performance_start_trace({
  reload: true,
  autoStop: true
})

mcp__chrome-devtools__performance_stop_trace({
  filePath: "trace.json.gz"
})
```

### Console
```javascript
// List console messages
mcp__chrome-devtools__list_console_messages({
  types: ["error", "warn"],
  includePreservedMessages: true
})

// Get specific message
mcp__chrome-devtools__get_console_message({ msgid: 5 })
```

## Testing Patterns

### Pattern 1: Visual Regression Test
```
Goal: Verify UI hasn't changed unexpectedly

1. Navigate to page
   → mcp__playwright__browser_navigate({ url: "http://localhost:5173" })

2. Take baseline screenshot
   → mcp__playwright__browser_take_screenshot({ filename: "baseline.png" })

3. Make code changes

4. Take comparison screenshot
   → mcp__playwright__browser_take_screenshot({ filename: "after-changes.png" })

5. Compare screenshots (manual or use external tool)
```

### Pattern 2: Form Validation Test
```
Goal: Test form validation and submission

1. Navigate to form page

2. Take snapshot to understand structure
   → mcp__playwright__browser_snapshot()

3. Fill form with invalid data
   → mcp__playwright__browser_fill_form({ fields: [...] })

4. Submit
   → mcp__playwright__browser_click({ element: "Submit", ref: "button[type='submit']" })

5. Verify error messages appear
   → mcp__playwright__browser_snapshot()
   → Check for error text in snapshot

6. Fill form with valid data

7. Submit and verify success
   → mcp__playwright__browser_wait_for({ text: "Success" })
```

### Pattern 3: Responsive Design Test
```
Goal: Test layout across viewports

Viewports to test:
- Mobile: 375×667 (iPhone SE)
- Tablet: 768×1024 (iPad)
- Desktop: 1920×1080 (Full HD)

For each viewport:
1. Resize browser
   → mcp__playwright__browser_resize({ width, height })

2. Navigate to page

3. Take screenshot
   → mcp__playwright__browser_take_screenshot({ filename: `page-${width}x${height}.png` })

4. Check for layout issues in snapshot
   → mcp__playwright__browser_snapshot()
```

### Pattern 4: Multi-Persona Layout Test
```
Goal: Test InvestorRoom persona layouts (Visionary, Operator, Polish)

For each persona (/visionary, /operator, /polish):
1. Navigate to persona route

2. Take snapshot
   → mcp__playwright__browser_snapshot({ filename: `snapshot-${persona}.md` })

3. Verify persona-specific components render
   - Visionary: High-level vision, minimal data
   - Operator: Detailed metrics, operational focus
   - Polish: Balanced, refined presentation

4. Capture screenshots for documentation
```

### Pattern 5: Console Error Monitoring
```
Goal: Detect JavaScript errors during interaction flow

1. Navigate to page
   → mcp__chrome-devtools__navigate_page({ type: "url", url: "..." })

2. Perform user actions (click, type, navigate)

3. Check console for errors
   → mcp__chrome-devtools__list_console_messages({ types: ["error"] })

4. If errors found:
   - Get error details
   - Identify source file and line number
   - Fix and re-test
```

## InvestorRoom Testing Workflows

### Workflow 1: Pre-Deployment Checklist
```bash
# Start dev server
cd InvestorRoom && npm run dev

# Test checklist
1. Visual regression (all personas)
2. Form validation (contact form)
3. Console error check
4. Mobile responsiveness (375px width)
5. Screenshot capture for docs
```

### Workflow 2: Component Development
```
When building new component:

1. Implement component in src/components/

2. Import into layout (AppPolish.jsx, etc.)

3. Test in browser:
   → Launch Playwright
   → Navigate to localhost:5173
   → Take snapshot to verify component renders
   → Interact with component
   → Verify behavior

4. Capture screenshot for documentation
```

## Integration with Other Skills

### With `ui-components`
```
1. Generate component (ui-components skill)
2. Add to InvestorRoom
3. Test with browser-testing skill
4. Iterate based on test results
```

### With AI Huevos Brand Guidelines
```
After generating UI components:

1. Take screenshot of new component
2. Verify brand compliance:
   - Max 3 colors
   - Orange for CTAs only
   - No yellow text on white
   - Scandia font
   - Sentence case

3. Adjust if non-compliant
4. Re-test and capture final screenshot
```

## Quality Standards

### Before Testing
- [ ] InvestorRoom dev server running (npm run dev)
- [ ] Clear test objective defined
- [ ] Expected behavior documented

### During Testing
- [ ] Take snapshot before interactions (understand page structure)
- [ ] Use semantic selectors (data-testid, aria labels)
- [ ] Wait for async operations (wait_for tool)
- [ ] Monitor console for errors

### After Testing
- [ ] Screenshots saved with descriptive names
- [ ] Test results documented
- [ ] Issues filed if bugs found
- [ ] Browser closed (clean up resources)

## Troubleshooting

### Browser Not Launching
```
Error: Browser not installed

Solution:
mcp__playwright__browser_install()
```

### Element Not Found
```
Error: Element not found: "Submit button"

Solutions:
1. Take snapshot first to see actual page structure
2. Use more specific selector (data-testid, unique ID)
3. Wait for element to appear (wait_for tool)
4. Check if element is in shadow DOM or iframe
```

### Viewport Issues
```
Problem: Layout looks broken in screenshot

Solutions:
1. Verify viewport size matches target device
2. Check if page has meta viewport tag
3. Test with fullPage: true to see full scrollable area
4. Disable browser caching if testing CSS changes
```

## Limitations

- **Requires running server** — InvestorRoom must be served (npm run dev)
- **Local testing only** — MCP servers run locally, can't test prod without tunneling
- **No cross-browser** — Playwright uses Chromium by default (can configure Firefox/WebKit)
- **Performance overhead** — Browser automation is resource-intensive
