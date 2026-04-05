const fs = require('fs');
const path = require('path');

// NUCLEAR THEME FIX: Clean slate approach
// 1. Strip ALL previous theme overrides from globals.css
// 2. Write ONE comprehensive theme system
// 3. Update ThemeProvider.js with runtime DOM fixer for inline styles
// 4. Result: perfect light/dark mode on every page

const APP = path.join(__dirname, 'app');
const COMP_APP = path.join(APP, 'components');
const COMP_ROOT = path.join(__dirname, 'components');
const COMP = fs.existsSync(path.join(COMP_APP, 'Header.js')) ? COMP_APP : COMP_ROOT;

// ============================================================
// STEP 1: Clean globals.css — remove all old theme overrides
// ============================================================
console.log('--- Step 1: Cleaning globals.css ---');

const globalsPath = path.join(APP, 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// Remove all previous theme-related blocks
const markers = [
  'THEME: Light',
  'GLOBAL THEME OVERRIDES',
  'LIGHT MODE CONTRAST FIXES',
  'RESPONSIVE OPTIMIZATION',
  'FIX: Remove forced min-height',
  'data-theme',
  'var(--bg-',
  'var(--text-',
  'var(--accent',
  'var(--border',
  'var(--header',
  'var(--shadow',
  'var(--code',
  'var(--result',
];

// Strategy: Keep only the original Tailwind imports and base styles
// Find the Tailwind directives and any non-theme CSS
const lines = globals.split('\n');
const cleanLines = [];
let inThemeBlock = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Detect start of theme blocks
  if (markers.some(m => line.includes(m)) && !inThemeBlock) {
    // Check if this is inside a comment or a rule
    if (line.includes('/*') || line.includes(':root') || line.includes('[data-theme') || 
        line.includes('html:not') || line.includes('@media') || line.includes('body') ||
        line.includes('.text-white') || line.includes('.text-slate') || line.includes('.bg-slate') ||
        line.includes('.min-h-screen') || line.includes('main.min-h') || line.includes('footer') ||
        line.includes('header') || line.includes('textarea') || line.includes('table') ||
        line.includes('.border-slate') || line.includes('strong') || line.includes('code') ||
        line.includes('.text-emerald') || line.includes('.hover\\\\') || line.includes('.result-box') ||
        line.includes('@supports') || line.includes('ins.adsbygoogle') || line.includes('.flex-wrap')) {
      inThemeBlock = true;
      braceCount = 0;
      continue;
    }
  }

  if (inThemeBlock) {
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    if (braceCount <= 0 && (line.includes('}') || line.trim() === '' || line.includes('/*'))) {
      if (braceCount <= 0) {
        inThemeBlock = false;
        braceCount = 0;
      }
    }
    continue;
  }

  cleanLines.push(line);
}

// Keep only Tailwind directives and any truly original styles
let cleanCSS = cleanLines.join('\n');

// Further cleanup: remove empty comment blocks and excessive newlines
cleanCSS = cleanCSS.replace(/\/\*[\s\S]*?\*\//g, (match) => {
  if (match.includes('THEME') || match.includes('CONTRAST') || match.includes('RESPONSIVE') || 
      match.includes('LIGHT MODE') || match.includes('FIX:') || match.includes('GLOBAL THEME')) {
    return '';
  }
  return match;
});
cleanCSS = cleanCSS.replace(/\n{4,}/g, '\n\n');

console.log('  Cleaned old theme CSS');

// ============================================================
// STEP 2: Write comprehensive theme CSS
// ============================================================
console.log('--- Step 2: Writing comprehensive theme CSS ---');

const themeCSS = `
/* ═══════════════════════════════════════════════════════════════
   MASTER THEME SYSTEM — Light (default) & Dark mode
   This is the ONLY theme CSS block. Do not add others.
   ═══════════════════════════════════════════════════════════════ */

/* --- CSS Custom Properties --- */
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

/* --- Transition --- */
html[data-theme] body { transition: background 0.15s ease, color 0.15s ease; }

/* --- Base --- */
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body {
  background: var(--bg-primary) !important;
  color: var(--text-body) !important;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body > div, #__next { flex: 1; display: flex; flex-direction: column; }
main { flex: 1; background: var(--bg-primary) !important; }
footer { margin-top: auto; }

/* --- Remove forced min-height gap --- */
main.min-h-screen, .min-h-screen:not(html):not(body) { min-height: auto !important; }

/* --- Typography --- */
h1, h2, h3, h4, h5, h6 { color: var(--text-primary) !important; }
p { color: var(--text-body) !important; }
li { color: var(--text-body) !important; }
strong, b { color: var(--text-primary) !important; }
a { color: var(--accent-text) !important; }
a:hover { opacity: 0.85; }

/* Preserve white text on green buttons */
a[style*="linear-gradient"], button[style*="linear-gradient"],
[style*="background: linear-gradient"] { color: #ffffff !important; }
a[style*="linear-gradient"] *, button[style*="linear-gradient"] * { color: #ffffff !important; }

/* --- Tailwind class overrides --- */
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
.bg-slate-800\\/40, .bg-slate-800\\/50 { background: var(--bg-card) !important; }
.border-slate-700 { border-color: var(--border-color) !important; }
.border-slate-800 { border-color: var(--border-color) !important; }

/* --- Header & Footer --- */
header {
  background: var(--header-bg) !important;
  border-color: var(--header-border) !important;
  backdrop-filter: blur(20px);
}
header a { color: var(--text-muted) !important; }
header a:hover { color: var(--text-primary) !important; opacity: 1; }
header .font-bold, header [class*="font-bold"] { color: var(--text-primary) !important; }
header [class*="emerald"] { color: var(--accent) !important; }

footer { background: var(--bg-primary) !important; border-color: var(--border-color) !important; }
footer a { color: var(--text-faint) !important; }
footer a:hover { color: var(--accent) !important; }
footer h3, footer [class*="font-bold"] { color: var(--text-primary) !important; }
footer p, footer span { color: var(--text-faint) !important; }

/* --- Navigation dropdowns --- */
header [style*="blur"], header [style*="Blur"],
nav [style*="blur"], nav [style*="Blur"] {
  background: var(--header-bg) !important;
  border-color: var(--border-color) !important;
}

/* --- Inputs --- */
textarea, input[type="text"], input[type="email"], input[type="url"], input[type="search"], select {
  background: var(--bg-input) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
}

/* --- Tables --- */
table { color: var(--text-body); }
th { color: var(--accent) !important; border-color: var(--accent-border) !important; }
td { color: var(--text-muted) !important; border-color: var(--border-subtle) !important; }
td.font-medium, td [class*="font-medium"] { color: var(--text-primary) !important; }

/* --- Cards and boxes --- */
.result-box {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
}
.result-box h3, .result-box h2 { color: var(--text-primary) !important; }
.result-box p { color: var(--text-muted) !important; }

/* --- Code --- */
code, pre { background: var(--code-bg) !important; color: var(--text-primary) !important; }

/* --- Breadcrumbs --- */
nav.text-sm a, nav[class*="text-sm"] a { color: var(--accent) !important; }
nav.text-sm span, nav[class*="text-sm"] span { color: var(--text-faint) !important; }

/* --- Tool link pills --- */
a[class*="bg-slate-800"] {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--accent) !important;
}
a[class*="bg-slate-800"]:hover {
  background: var(--bg-card-hover) !important;
}

/* --- Blog cards --- */
a.group .font-bold, a.group [class*="font-bold"],
a.group h3, a.group h2 { color: var(--text-primary) !important; }
a.group:hover .font-bold, a.group:hover [class*="font-bold"],
a.group:hover h3, a.group:hover h2 { color: var(--accent) !important; }

/* --- Theme toggle button --- */
button[aria-label*="mode"] { color: var(--text-muted) !important; }
button[aria-label*="mode"]:hover { color: var(--text-primary) !important; }

/* --- Ads --- */
ins.adsbygoogle { max-width: 100% !important; overflow: hidden !important; }

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */

@media (max-width: 639px) {
  h1 { font-size: clamp(28px, 7vw, 48px) !important; line-height: 1.1 !important; }
  h2 { font-size: clamp(20px, 5vw, 28px) !important; }
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
  [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
  footer .grid { grid-template-columns: 1fr !important; gap: 24px !important; }
  textarea { min-height: 200px !important; font-size: 16px !important; }
  input[type="text"], input[type="email"], select { font-size: 16px !important; }
  .overflow-x-auto { -webkit-overflow-scrolling: touch; }
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

@supports (padding: max(0px)) {
  body { padding-left: max(0px, env(safe-area-inset-left)); padding-right: max(0px, env(safe-area-inset-right)); }
}

@media print {
  header, footer, .adsbygoogle, nav { display: none !important; }
  body, main { background: white !important; color: black !important; }
}
`;

globals = cleanCSS + '\n' + themeCSS;
fs.writeFileSync(globalsPath, globals, 'utf8');
console.log('  ✅ globals.css rewritten with clean theme system');

// ============================================================
// STEP 3: Rewrite ThemeProvider with runtime DOM fixer
// ============================================================
console.log('\n--- Step 3: Rewriting ThemeProvider.js ---');

const themeProviderCode = `'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

// Color mappings: dark-mode color → light-mode replacement
const LIGHT_COLORS = {
  // Backgrounds
  '#0f1117': 'var(--bg-primary)',
  '#0a0d14': 'var(--bg-primary)',
  '#0a0f1e': 'var(--bg-primary)',
  '#030712': 'var(--bg-primary)',
  'rgb(10, 13, 20)': 'var(--bg-primary)',
  'rgb(15, 17, 23)': 'var(--bg-primary)',
  // Text - light colors that need to go dark
  '#f1f5f9': 'var(--text-primary)',
  '#e2e8f0': 'var(--text-secondary)',
  '#cbd5e1': 'var(--text-body)',
  '#94a3b8': 'var(--text-muted)',
  '#64748b': 'var(--text-faint)',
  '#fff': 'var(--text-primary)',
  '#ffffff': 'var(--text-primary)',
  'white': 'var(--text-primary)',
  // Accents
  '#34d399': 'var(--accent)',
  '#10b981': 'var(--accent)',
}

const DARK_COLORS = {
  '#0f1117': '#0f1117',
  '#0a0d14': '#0a0d14',
  '#f1f5f9': '#f1f5f9',
  '#e2e8f0': '#e2e8f0',
  '#cbd5e1': '#cbd5e1',
  '#94a3b8': '#94a3b8',
  '#64748b': '#64748b',
  '#fff': '#ffffff',
  '#ffffff': '#ffffff',
  'white': '#ffffff',
  '#34d399': '#34d399',
  '#10b981': '#10b981',
}

function applyThemeToDOM(theme) {
  const isLight = theme === 'light'
  const colorMap = isLight ? LIGHT_COLORS : DARK_COLORS

  // Fix inline style colors on all elements
  const allElements = document.querySelectorAll('[style]')
  allElements.forEach(el => {
    const style = el.getAttribute('style')
    if (!style) return

    // Skip gradient buttons (keep white text on green)
    if (style.includes('linear-gradient')) return

    let newStyle = style

    // Replace color values
    Object.entries(colorMap).forEach(([from, to]) => {
      // Match color property values
      const patterns = [
        new RegExp('color:\\\\s*' + from.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\\\$&') + '(?![0-9a-f])', 'gi'),
      ]
      patterns.forEach(pat => {
        if (newStyle.match(pat)) {
          newStyle = newStyle.replace(pat, 'color: ' + to)
        }
      })
    })

    // Replace background colors (but not gradients or rgba with opacity)
    if (isLight) {
      // Dark bg → light bg
      newStyle = newStyle.replace(/background:\s*#0[a-f0-9]{5}/gi, 'background: var(--bg-primary)')
      newStyle = newStyle.replace(/background:\s*rgb\(1[0-5],\s*1[0-7],\s*[12][0-9]\)/gi, 'background: var(--bg-primary)')
      // Semi-transparent white → light card
      newStyle = newStyle.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.0[2-6]\)/gi, 'background: var(--bg-card)')
      // Border colors
      newStyle = newStyle.replace(/border-color:\s*rgba\(255,\s*255,\s*255,\s*0\.0[3-9]\)/gi, 'border-color: var(--border-color)')
      newStyle = newStyle.replace(/border:\s*1px solid rgba\(255,\s*255,\s*255,\s*0\.0[3-9]\)/gi, 'border: 1px solid var(--border-color)')
      // Emerald borders stay
      // Text colors - light to dark
      newStyle = newStyle.replace(/color:\s*#f[0-9a-f]f[0-9a-f]f[0-9a-f]/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:\s*#e[0-9a-f]e[0-9a-f]f[0-9a-f]/gi, 'color: var(--text-secondary)')
      newStyle = newStyle.replace(/color:\s*#cbd5e1/gi, 'color: var(--text-body)')
      newStyle = newStyle.replace(/color:\s*#94a3b8/gi, 'color: var(--text-muted)')
      newStyle = newStyle.replace(/color:\s*#64748b/gi, 'color: var(--text-faint)')
      newStyle = newStyle.replace(/color:\s*white/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:\s*#fff(?![0-9a-f])/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:\s*#ffffff/gi, 'color: var(--text-primary)')
      // Emerald accent
      newStyle = newStyle.replace(/color:\s*#34d399/gi, 'color: var(--accent)')
      newStyle = newStyle.replace(/color:\s*#10b981/gi, 'color: var(--accent)')
    }

    if (newStyle !== style) {
      el.setAttribute('style', newStyle)
    }
  })
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  const applyTheme = useCallback((t) => {
    document.documentElement.setAttribute('data-theme', t)
    // Small delay to let CSS variables apply first, then fix inline styles
    requestAnimationFrame(() => {
      applyThemeToDOM(t)
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wct-theme')
    const initial = (saved === 'dark') ? 'dark' : 'light'
    setTheme(initial)
    applyTheme(initial)

    // Re-apply on route changes (Next.js client navigation)
    const observer = new MutationObserver(() => {
      const current = localStorage.getItem('wct-theme') || 'light'
      applyThemeToDOM(current)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Cleanup after initial heavy fix
    const cleanup = setTimeout(() => {
      const current = localStorage.getItem('wct-theme') || 'light'
      applyThemeToDOM(current)
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(cleanup)
    }
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('wct-theme', next)
    applyTheme(next)
    // Double-apply to catch any lazy-loaded content
    setTimeout(() => applyThemeToDOM(next), 100)
    setTimeout(() => applyThemeToDOM(next), 500)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
`;

// Write to both possible locations
const tpPaths = [
  path.join(COMP, 'ThemeProvider.js'),
];
// Also check alternate location
const altComp = COMP === COMP_APP ? COMP_ROOT : COMP_APP;
if (fs.existsSync(path.join(altComp, 'ThemeProvider.js'))) {
  tpPaths.push(path.join(altComp, 'ThemeProvider.js'));
}

tpPaths.forEach(tp => {
  fs.writeFileSync(tp, themeProviderCode, 'utf8');
  console.log('  ✅ ThemeProvider.js rewritten at: ' + path.relative(__dirname, tp));
});

// ============================================================
// STEP 4: Ensure anti-flash script is in layout.js
// ============================================================
console.log('\n--- Step 4: Checking layout.js ---');

const layoutPath = path.join(APP, 'layout.js');
let layout = fs.readFileSync(layoutPath, 'utf8');

if (!layout.includes('wct-theme')) {
  const antiFlash = `
        <script dangerouslySetInnerHTML={{ __html: \`
          (function() {
            var t = localStorage.getItem('wct-theme');
            if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
          })()
        \` }} />`;

  if (layout.includes('</head>')) {
    layout = layout.replace('</head>', antiFlash + '\n      </head>');
  } else if (layout.includes('<body')) {
    layout = layout.replace('<body', antiFlash + '\n      <body');
  }
  fs.writeFileSync(layoutPath, layout, 'utf8');
  console.log('  ✅ Anti-flash script added');
} else {
  console.log('  ✅ Anti-flash script already present');
}

// Ensure suppressHydrationWarning
if (!layout.includes('suppressHydrationWarning')) {
  layout = fs.readFileSync(layoutPath, 'utf8');
  layout = layout.replace(/<html\s/, '<html suppressHydrationWarning ');
  fs.writeFileSync(layoutPath, layout, 'utf8');
  console.log('  ✅ suppressHydrationWarning added');
}

// ============================================================
// DONE
// ============================================================
console.log('\n═══════════════════════════════════════════════');
console.log('  NUCLEAR THEME FIX COMPLETE');
console.log('═══════════════════════════════════════════════');
console.log('  ✅ globals.css: Clean theme system (no fragments)');
console.log('  ✅ ThemeProvider.js: Runtime DOM fixer for inline styles');
console.log('  ✅ layout.js: Anti-flash + hydration warning');
console.log('');
console.log('  How it works:');
console.log('  1. CSS variables handle Tailwind classes & standard elements');
console.log('  2. Runtime JS fixes inline styles that CSS cannot override');
console.log('  3. MutationObserver re-applies fixes on route changes');
console.log('  4. Double-apply on toggle catches lazy-loaded content');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Nuclear theme fix - clean dark/light mode on all pages" && git push origin master');
console.log('');
console.log('Test:');
console.log('  1. Open homepage in light mode — all text dark, bg white');
console.log('  2. Toggle to dark — original dark theme restored');
console.log('  3. Navigate to /word-count/for/resume — theme persists');
console.log('  4. Navigate to /blog — theme persists');
console.log('  5. Navigate to /character-limits/twitter — theme persists');
console.log('  6. Refresh — theme persists (localStorage)');
