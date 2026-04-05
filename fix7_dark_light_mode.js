const fs = require('fs');
const path = require('path');

// FIX 7: Add dark/light mode toggle with LIGHT mode as default
// Strategy:
//   1. Create ThemeProvider.js (React context + localStorage)
//   2. Update globals.css with CSS custom properties + global overrides
//   3. Update layout.js to wrap with ThemeProvider
//   4. Update Header.js with sun/moon toggle
//   5. DO NOT change any URLs, metadata, ad placements, or functionality

const APP = path.join(__dirname, 'app');
const COMP_APP = path.join(APP, 'components');
const COMP_ROOT = path.join(__dirname, 'components');

// Determine where components live
const COMP = fs.existsSync(COMP_APP) ? COMP_APP : COMP_ROOT;
console.log(`Components directory: ${path.relative(__dirname, COMP)}`);

// ============================================================
// STEP 1: Create ThemeProvider.js
// ============================================================
console.log('\n--- Step 1: Creating ThemeProvider.js ---');

const themeProvider = `'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wct-theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('wct-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  // Prevent flash — render children immediately but with a class
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
`;

fs.writeFileSync(path.join(COMP, 'ThemeProvider.js'), themeProvider, 'utf8');
console.log('  ✅ ThemeProvider.js created');

// ============================================================
// STEP 2: Update globals.css with CSS custom properties
// ============================================================
console.log('\n--- Step 2: Updating globals.css ---');

const globalsPath = path.join(APP, 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// CSS variable block to prepend
const cssVariables = `
/* ═══════════════════════════════════════════════ */
/*  THEME: Light (default) & Dark mode variables  */
/* ═══════════════════════════════════════════════ */

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-card: #f1f5f9;
  --bg-card-hover: #e2e8f0;
  --bg-input: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --text-faint: #94a3b8;
  --border-color: #e2e8f0;
  --border-subtle: #f1f5f9;
  --accent: #059669;
  --accent-light: #10b981;
  --accent-bg: rgba(5, 150, 105, 0.06);
  --accent-border: rgba(5, 150, 105, 0.2);
  --header-bg: rgba(255, 255, 255, 0.92);
  --header-border: #e2e8f0;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
  --code-bg: #f1f5f9;
  --result-bg: #f8fafc;
  --result-border: #e2e8f0;
}

[data-theme="dark"] {
  --bg-primary: #0a0d14;
  --bg-secondary: #0f1117;
  --bg-card: rgba(255,255,255,0.03);
  --bg-card-hover: rgba(255,255,255,0.06);
  --bg-input: rgba(255,255,255,0.05);
  --text-primary: #f1f5f9;
  --text-secondary: #e2e8f0;
  --text-muted: #94a3b8;
  --text-faint: #64748b;
  --border-color: rgba(255,255,255,0.08);
  --border-subtle: rgba(255,255,255,0.04);
  --accent: #34d399;
  --accent-light: #10b981;
  --accent-bg: rgba(16,185,129,0.06);
  --accent-border: rgba(16,185,129,0.2);
  --header-bg: rgba(10,13,20,0.92);
  --header-border: rgba(52,211,153,0.1);
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --code-bg: rgba(255,255,255,0.05);
  --result-bg: rgba(255,255,255,0.03);
  --result-border: rgba(255,255,255,0.07);
}

/* ═══════════════════════════════════════════════ */
/*  GLOBAL THEME OVERRIDES                        */
/*  These override hardcoded dark colors across   */
/*  all pages without editing each file            */
/* ═══════════════════════════════════════════════ */

/* Body and main containers */
body {
  background: var(--bg-primary) !important;
  color: var(--text-primary) !important;
  transition: background 0.2s ease, color 0.2s ease;
}

/* Override dark backgrounds on main, sections */
main, main > div {
  background: var(--bg-primary) !important;
}

/* All section-level backgrounds */
main section,
main article {
  color: var(--text-secondary);
}

/* Override .min-h-screen elements that set dark bg */
.min-h-screen {
  background: var(--bg-primary) !important;
}

/* White text → primary text */
.text-white {
  color: var(--text-primary) !important;
}

/* Slate text colors */
.text-slate-300 { color: var(--text-secondary) !important; }
.text-slate-400 { color: var(--text-muted) !important; }
.text-slate-500 { color: var(--text-faint) !important; }
.text-slate-600 { color: var(--text-faint) !important; }

/* Emerald accent — keep consistent */
.text-emerald-400 { color: var(--accent) !important; }

/* Background overrides */
.bg-slate-950, .bg-slate-900, .bg-slate-800 {
  background: var(--bg-card) !important;
}

/* Border overrides */
.border-slate-700, .border-slate-800 {
  border-color: var(--border-color) !important;
}

/* Card-like elements with inline dark styles */
[style*="background: #0f1117"],
[style*="background: '#0f1117'"],
[style*="background: #0a0d14"],
[style*="background:'#0a0d14'"],
[style*="background:#0a0d14"],
[style*="background: rgb(10, 13, 20)"] {
  background: var(--bg-primary) !important;
}

[style*="background: rgba(255,255,255,0.03)"],
[style*="background: rgba(255,255,255,0.04)"],
[style*="background:'rgba(255,255,255,0.03)'"],
[style*="background:'rgba(255,255,255,0.04)'"] {
  background: var(--bg-card) !important;
}

[style*="color: #e2e8f0"],
[style*="color: '#e2e8f0'"],
[style*="color:'#e2e8f0'"],
[style*="color: #f1f5f9"],
[style*="color:'#f1f5f9'"] {
  color: var(--text-primary) !important;
}

[style*="color: #94a3b8"],
[style*="color:'#94a3b8'"],
[style*="color: #64748b"],
[style*="color:'#64748b'"] {
  color: var(--text-muted) !important;
}

/* Headers and footers */
header {
  background: var(--header-bg) !important;
  border-color: var(--header-border) !important;
  backdrop-filter: blur(20px);
}

footer {
  background: var(--bg-primary) !important;
  border-color: var(--border-color) !important;
}

/* Input/textarea in tools */
textarea, input[type="text"], input[type="email"], input[type="url"] {
  background: var(--bg-input) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-color) !important;
}

/* Result boxes */
.result-box {
  background: var(--result-bg) !important;
  border-color: var(--result-border) !important;
}

/* Tables */
table {
  color: var(--text-secondary);
}

th {
  color: var(--accent) !important;
}

td {
  color: var(--text-muted) !important;
  border-color: var(--border-subtle) !important;
}

/* Links in dark cards */
a[style*="textDecoration: 'none'"],
a[style*="text-decoration:none"] {
  transition: all 0.15s;
}

/* Dropdown / mega menu backgrounds */
[style*="backdrop-filter: blur"],
[style*="backdropFilter"] {
  background: var(--header-bg) !important;
}

/* Code blocks */
code, pre {
  background: var(--code-bg) !important;
  color: var(--text-primary) !important;
}

/* Prevent flash of wrong theme */
html {
  transition: none;
}

html[data-theme] body {
  transition: background 0.2s ease, color 0.2s ease;
}

`;

// Prepend variables before existing content
globals = cssVariables + '\n' + globals;
fs.writeFileSync(globalsPath, globals, 'utf8');
console.log('  ✅ globals.css updated with CSS variables + global overrides');

// ============================================================
// STEP 3: Update layout.js to wrap with ThemeProvider
// ============================================================
console.log('\n--- Step 3: Updating layout.js ---');

const layoutPath = path.join(APP, 'layout.js');
let layout = fs.readFileSync(layoutPath, 'utf8');

if (!layout.includes('ThemeProvider')) {
  // Determine import path based on component location
  const themeImportPath = COMP === COMP_APP ? './components/ThemeProvider' : '../components/ThemeProvider';

  // Add ThemeProvider import
  if (layout.includes("import './globals.css'")) {
    layout = layout.replace(
      "import './globals.css'",
      "import './globals.css'\nimport ThemeProvider from '" + themeImportPath + "'"
    );
  } else {
    // Add at top after first import
    const firstImportEnd = layout.indexOf('\n');
    layout = layout.slice(0, firstImportEnd + 1) + "import ThemeProvider from '" + themeImportPath + "'\n" + layout.slice(firstImportEnd + 1);
  }

  // Wrap {children} with <ThemeProvider>
  // Pattern: <body ...>{children}</body> or <body ...>\n{children}\n</body>
  layout = layout.replace(
    /(\{children\})/,
    '<ThemeProvider>{children}</ThemeProvider>'
  );

  // Also add suppressHydrationWarning to <html> tag to prevent mismatch from data-theme
  layout = layout.replace(
    /<html\s/,
    '<html suppressHydrationWarning '
  );

  fs.writeFileSync(layoutPath, layout, 'utf8');
  console.log('  ✅ layout.js updated with ThemeProvider wrapper');
} else {
  console.log('  ⏭️  layout.js already has ThemeProvider');
}

// ============================================================
// STEP 4: Update Header.js with theme toggle button
// ============================================================
console.log('\n--- Step 4: Adding theme toggle to Header ---');

const headerPath = path.join(COMP, 'Header.js');

if (!fs.existsSync(headerPath)) {
  // Try alternate location
  const altHeader = path.join(COMP === COMP_APP ? COMP_ROOT : COMP_APP, 'Header.js');
  if (fs.existsSync(altHeader)) {
    console.log('  Found Header at alternate location:', path.relative(__dirname, altHeader));
  } else {
    console.log('  ❌ Header.js not found at either location');
  }
}

if (fs.existsSync(headerPath)) {
  let header = fs.readFileSync(headerPath, 'utf8');

  if (!header.includes('toggleTheme')) {
    // Add useTheme import
    if (header.includes("'use client'")) {
      header = header.replace(
        "'use client'",
        "'use client'\nimport { useTheme } from './ThemeProvider'"
      );
    } else {
      header = "'use client'\nimport { useTheme } from './ThemeProvider'\n" + header;
    }

    // Add theme destructuring inside the component function
    // Find the function body opening
    const funcMatch = header.match(/export default function \w+\(\)\s*\{/);
    if (funcMatch) {
      const funcIdx = header.indexOf(funcMatch[0]) + funcMatch[0].length;
      header = header.slice(0, funcIdx) + '\n  const { theme, toggleTheme } = useTheme()' + header.slice(funcIdx);
    }

    // Add toggle button before the mobile menu button
    // Look for the mobile hamburger button
    const mobileButtonPattern = /<button\s+onClick=\{.*setMobileOpen/;
    const mobileMatch = header.match(mobileButtonPattern);

    const toggleButton = `
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

`;

    if (mobileMatch) {
      const mobileIdx = header.indexOf(mobileMatch[0]);
      header = header.slice(0, mobileIdx) + toggleButton + '            ' + header.slice(mobileIdx);
    } else {
      // Try inserting before </nav> or before the last Link in nav
      const navClose = header.lastIndexOf('</nav>');
      if (navClose > -1) {
        header = header.slice(0, navClose) + toggleButton + '          ' + header.slice(navClose);
      }
    }

    fs.writeFileSync(headerPath, header, 'utf8');
    console.log('  ✅ Header.js updated with theme toggle');
  } else {
    console.log('  ⏭️  Header.js already has theme toggle');
  }
}

// ============================================================
// STEP 5: Add anti-flash script to prevent FOUC
// ============================================================
console.log('\n--- Step 5: Adding anti-flash inline script ---');

let layoutFinal = fs.readFileSync(layoutPath, 'utf8');

if (!layoutFinal.includes('wct-theme')) {
  // Add an inline script in <head> to set data-theme before paint
  const antiFlash = `
        <script dangerouslySetInnerHTML={{ __html: \`
          (function() {
            var t = localStorage.getItem('wct-theme');
            if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
          })()
        \` }} />`;

  // Insert before </head> or inside <head>
  if (layoutFinal.includes('</head>')) {
    layoutFinal = layoutFinal.replace('</head>', antiFlash + '\n      </head>');
  } else if (layoutFinal.includes('<body')) {
    // No explicit <head>, add before <body>
    layoutFinal = layoutFinal.replace('<body', antiFlash + '\n      <body');
  }

  fs.writeFileSync(layoutPath, layoutFinal, 'utf8');
  console.log('  ✅ Anti-flash script added to prevent theme flicker');
} else {
  console.log('  ⏭️  Anti-flash script already exists');
}

// ============================================================
// DONE
// ============================================================
console.log('\n═════════════════════════════════════════');
console.log('  FIX 7 DONE: Dark/Light mode toggle');
console.log('═════════════════════════════════════════');
console.log('  ✅ ThemeProvider.js created');
console.log('  ✅ globals.css — CSS variables + global overrides');
console.log('  ✅ layout.js — ThemeProvider wrapper + anti-flash');
console.log('  ✅ Header.js — sun/moon toggle button');
console.log('  📌 Default: LIGHT mode');
console.log('  📌 Dark mode: preserved via [data-theme="dark"]');
console.log('');
console.log('  NOTE: The CSS overrides handle most pages automatically.');
console.log('  Some inline styles on deeply nested elements may need');
console.log('  manual tweaking after visual testing.');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Add dark/light mode toggle, default to light" && git push origin master');
console.log('');
console.log('After deploy, test:');
console.log('  1. Site should load in LIGHT mode by default');
console.log('  2. Click moon icon in header → switches to dark');
console.log('  3. Refresh page → dark mode persists');
console.log('  4. Click sun icon → back to light');
console.log('  5. Check all tools still work (no functionality changes)');
