const fs = require('fs');
const path = require('path');

// Fix: The cleanup script left broken CSS fragments
// Solution: Rewrite globals.css from scratch with ONLY Tailwind + theme

const globalsPath = path.join(__dirname, 'app', 'globals.css');

// Read current file to extract any Tailwind directives
const current = fs.readFileSync(globalsPath, 'utf8');

// Extract Tailwind directives
const tailwindLines = [];
const lines = current.split('\n');
for (const line of lines) {
  if (line.trim().startsWith('@tailwind') || line.trim().startsWith('@import')) {
    tailwindLines.push(line);
  }
}

// If no Tailwind directives found, add defaults
if (tailwindLines.length === 0) {
  tailwindLines.push('@tailwind base;');
  tailwindLines.push('@tailwind components;');
  tailwindLines.push('@tailwind utilities;');
}

const cleanGlobals = tailwindLines.join('\n') + `

/* ═══════════════════════════════════════════════════════════════
   MASTER THEME SYSTEM — Light (default) & Dark mode
   ═══════════════════════════════════════════════════════════════ */

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-card: #f1f5f9;
  --bg-card-hover: #e2e8f0;
  --bg-input: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #1e293b;
  --text-body: #334155;
  --text-muted: #475569;
  --text-faint: #64748b;
  --border-color: #e2e8f0;
  --border-subtle: #f1f5f9;
  --accent: #059669;
  --accent-text: #047857;
  --accent-bg: rgba(5, 150, 105, 0.06);
  --accent-border: rgba(5, 150, 105, 0.15);
  --header-bg: rgba(255, 255, 255, 0.95);
  --header-border: #e2e8f0;
  --code-bg: #f1f5f9;
}

[data-theme="dark"] {
  --bg-primary: #0a0d14;
  --bg-secondary: #0f1117;
  --bg-card: rgba(255, 255, 255, 0.03);
  --bg-card-hover: rgba(255, 255, 255, 0.06);
  --bg-input: rgba(255, 255, 255, 0.05);
  --text-primary: #f1f5f9;
  --text-secondary: #e2e8f0;
  --text-body: #cbd5e1;
  --text-muted: #94a3b8;
  --text-faint: #64748b;
  --border-color: rgba(255, 255, 255, 0.08);
  --border-subtle: rgba(255, 255, 255, 0.04);
  --accent: #34d399;
  --accent-text: #34d399;
  --accent-bg: rgba(16, 185, 129, 0.06);
  --accent-border: rgba(16, 185, 129, 0.2);
  --header-bg: rgba(10, 13, 20, 0.95);
  --header-border: rgba(52, 211, 153, 0.1);
  --code-bg: rgba(255, 255, 255, 0.05);
}

html[data-theme] body {
  transition: background 0.15s ease, color 0.15s ease;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary) !important;
  color: var(--text-body) !important;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body > div, #__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  background: var(--bg-primary) !important;
}

main.min-h-screen,
.min-h-screen:not(html):not(body) {
  min-height: auto !important;
}

footer {
  margin-top: auto;
}

/* Typography */
h1, h2, h3, h4, h5, h6 { color: var(--text-primary) !important; }
p { color: var(--text-body) !important; }
li { color: var(--text-body) !important; }
strong, b { color: var(--text-primary) !important; }
a { color: var(--accent-text) !important; }
a:hover { opacity: 0.85; }

/* Keep white text on gradient buttons */
a[style*="linear-gradient"],
button[style*="linear-gradient"] {
  color: #ffffff !important;
}

/* Tailwind overrides */
.text-white { color: var(--text-primary) !important; }
.text-slate-300 { color: var(--text-secondary) !important; }
.text-slate-400 { color: var(--text-muted) !important; }
.text-slate-500 { color: var(--text-faint) !important; }
.text-slate-600 { color: var(--text-faint) !important; }
.text-emerald-400 { color: var(--accent) !important; }
.text-emerald-500 { color: var(--accent) !important; }
.bg-slate-950 { background: var(--bg-primary) !important; }
.bg-slate-900 { background: var(--bg-card) !important; }
.bg-slate-800 { background: var(--bg-card) !important; }
.border-slate-700 { border-color: var(--border-color) !important; }
.border-slate-800 { border-color: var(--border-color) !important; }

/* Header & Footer */
header {
  background: var(--header-bg) !important;
  border-color: var(--header-border) !important;
  backdrop-filter: blur(20px);
}

header a { color: var(--text-muted) !important; }
header a:hover { color: var(--text-primary) !important; opacity: 1; }
header .font-bold { color: var(--text-primary) !important; }

footer { background: var(--bg-primary) !important; border-color: var(--border-color) !important; }
footer a { color: var(--text-faint) !important; }
footer a:hover { color: var(--accent) !important; }
footer h3 { color: var(--text-primary) !important; }
footer p, footer span { color: var(--text-faint) !important; }

/* Inputs */
textarea, input[type="text"], input[type="email"], input[type="url"], select {
  background: var(--bg-input) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
}

/* Tables */
th { color: var(--accent) !important; }
td { color: var(--text-muted) !important; border-color: var(--border-subtle) !important; }

/* Result boxes */
.result-box {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
}

.result-box h3 { color: var(--text-primary) !important; }
.result-box p { color: var(--text-muted) !important; }

/* Code */
code, pre { background: var(--code-bg) !important; color: var(--text-primary) !important; }

/* Tool link pills */
a[class*="bg-slate-800"] {
  background: var(--bg-card) !important;
  color: var(--accent) !important;
}

/* Blog cards */
a.group h3, a.group h2 { color: var(--text-primary) !important; }
a.group:hover h3, a.group:hover h2 { color: var(--accent) !important; }

/* Theme toggle */
button[aria-label*="mode"] { color: var(--text-muted) !important; }
button[aria-label*="mode"]:hover { color: var(--text-primary) !important; }

/* Ads */
ins.adsbygoogle { max-width: 100% !important; overflow: hidden !important; }

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */

@media (max-width: 639px) {
  h1 { font-size: clamp(28px, 7vw, 48px) !important; line-height: 1.1 !important; }
  h2 { font-size: clamp(20px, 5vw, 28px) !important; }
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
  footer .grid { grid-template-columns: 1fr !important; gap: 24px !important; }
  textarea { min-height: 200px !important; font-size: 16px !important; }
  input[type="text"], input[type="email"], select { font-size: 16px !important; }
  .pt-16 { padding-top: 32px !important; }
  .mb-14 { margin-bottom: 24px !important; }
}

@media (min-width: 640px) and (max-width: 1023px) {
  footer .grid { grid-template-columns: repeat(2, 1fr) !important; }
}

@media (hover: none) and (pointer: coarse) {
  a, button { min-height: 44px; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

@media print {
  header, footer, .adsbygoogle { display: none !important; }
  body, main { background: white !important; color: black !important; }
}
`;

fs.writeFileSync(globalsPath, cleanGlobals, 'utf8');
console.log('✅ globals.css rewritten from scratch — no syntax errors');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix globals.css syntax error - clean rewrite" && git push origin master');
