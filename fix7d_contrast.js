const fs = require('fs');
const path = require('path');

// FIX 7d: Strengthen light mode text contrast
// Problem: Headings nearly invisible, body text too washed out
// Cause: Inline JSX styles like style={{ color: '#f1f5f9' }} use different
// quote patterns than CSS attribute selectors can match.
// Solution: Use element-level CSS overrides with !important

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

const contrastFixes = `
/* ═══════════════════════════════════════════════ */
/*  LIGHT MODE CONTRAST FIXES                     */
/*  Force dark text on light backgrounds           */
/* ═══════════════════════════════════════════════ */

/* Force ALL headings to be dark in light mode */
:root h1, :root h2, :root h3, :root h4, :root h5, :root h6 {
  color: #0f172a !important;
}
[data-theme="dark"] h1, [data-theme="dark"] h2, [data-theme="dark"] h3,
[data-theme="dark"] h4, [data-theme="dark"] h5, [data-theme="dark"] h6 {
  color: #f1f5f9 !important;
}

/* Force paragraph and body text darker in light mode */
:root p, :root li, :root span, :root div {
  --tw-text-opacity: 1;
}

:root main p {
  color: #334155 !important;
}
[data-theme="dark"] main p {
  color: #94a3b8 !important;
}

/* Article/blog content */
:root article p, :root article li {
  color: #334155 !important;
}
[data-theme="dark"] article p, [data-theme="dark"] article li {
  color: #94a3b8 !important;
}

/* Strong/bold text in content */
:root strong, :root b {
  color: #0f172a !important;
}
[data-theme="dark"] strong, [data-theme="dark"] b {
  color: #f1f5f9 !important;
}

/* Card text - descriptions inside cards/links */
:root a > div, :root a > p, :root a div, :root a p {
  color: #475569 !important;
}
:root a h2, :root a h3, :root a > div:first-child {
  color: #0f172a !important;
}
[data-theme="dark"] a > div, [data-theme="dark"] a > p,
[data-theme="dark"] a div, [data-theme="dark"] a p {
  color: #94a3b8 !important;
}
[data-theme="dark"] a h2, [data-theme="dark"] a h3,
[data-theme="dark"] a > div:first-child {
  color: #e2e8f0 !important;
}

/* Navigation link text */
:root nav a, :root header a {
  color: #334155 !important;
}
:root nav a:hover, :root header a:hover {
  color: #0f172a !important;
}
[data-theme="dark"] nav a, [data-theme="dark"] header a {
  color: #94a3b8 !important;
}
[data-theme="dark"] nav a:hover, [data-theme="dark"] header a:hover {
  color: #ffffff !important;
}

/* Keep emerald accent visible in both modes */
:root .text-emerald-400, :root .text-emerald-500,
:root [style*="color: #10b981"], :root [style*="color: #34d399"],
:root [style*="color:'#10b981'"], :root [style*="color:'#34d399'"] {
  color: #059669 !important;
}
[data-theme="dark"] .text-emerald-400, [data-theme="dark"] .text-emerald-500,
[data-theme="dark"] [style*="color: #10b981"], [data-theme="dark"] [style*="color: #34d399"],
[data-theme="dark"] [style*="color:'#10b981'"], [data-theme="dark"] [style*="color:'#34d399'"] {
  color: #34d399 !important;
}

/* Logo text override */
:root header .font-bold {
  color: #0f172a !important;
}
:root header .text-emerald-400, :root header span[class*="emerald"] {
  color: #059669 !important;
}
[data-theme="dark"] header .font-bold {
  color: #ffffff !important;
}
[data-theme="dark"] header .text-emerald-400, [data-theme="dark"] header span[class*="emerald"] {
  color: #34d399 !important;
}

/* Gradient text (hero "Rank Higher.") stays emerald in both modes */
:root [style*="WebkitBackgroundClip"], [data-theme="dark"] [style*="WebkitBackgroundClip"] {
  /* Don't override gradient text */
}

/* Card backgrounds in light mode — lighter and with better contrast */
:root .bg-slate-800\\/40, :root .bg-slate-800\\/50,
:root [style*="rgba(255,255,255,0.03)"],
:root [style*="rgba(255,255,255,0.04)"],
:root [style*="rgba(255,255,255,0.05)"],
:root [style*="rgba(255,255,255,0.06)"] {
  background: #f1f5f9 !important;
  border-color: #e2e8f0 !important;
}
[data-theme="dark"] [style*="rgba(255,255,255,0.03)"],
[data-theme="dark"] [style*="rgba(255,255,255,0.04)"],
[data-theme="dark"] [style*="rgba(255,255,255,0.05)"],
[data-theme="dark"] [style*="rgba(255,255,255,0.06)"] {
  background: rgba(255,255,255,0.03) !important;
}

/* Result box / Quick Answer boxes in light mode */
:root .result-box, :root [class*="result-box"] {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}
[data-theme="dark"] .result-box, [data-theme="dark"] [class*="result-box"] {
  background: rgba(255,255,255,0.03) !important;
  border: 1px solid rgba(255,255,255,0.07) !important;
}

/* FAQ question text */
:root .result-box h3, :root [class*="result-box"] h3 {
  color: #0f172a !important;
}
[data-theme="dark"] .result-box h3, [data-theme="dark"] [class*="result-box"] h3 {
  color: #f1f5f9 !important;
}

/* Footer text */
:root footer p, :root footer span, :root footer a {
  color: #64748b !important;
}
:root footer h3 {
  color: #0f172a !important;
}
:root footer a:hover {
  color: #059669 !important;
}
[data-theme="dark"] footer p, [data-theme="dark"] footer span, [data-theme="dark"] footer a {
  color: #64748b !important;
}
[data-theme="dark"] footer h3 {
  color: #ffffff !important;
}
[data-theme="dark"] footer a:hover {
  color: #34d399 !important;
}

/* Dropdown/mega menu */
:root [style*="backdropFilter"], :root [style*="backdrop-filter"] {
  background: rgba(255,255,255,0.97) !important;
  border-color: #e2e8f0 !important;
}
[data-theme="dark"] [style*="backdropFilter"], [data-theme="dark"] [style*="backdrop-filter"] {
  background: rgba(10,15,30,0.98) !important;
  border-color: rgba(52,211,153,0.2) !important;
}

/* "Try Free" button — keep green in both modes */
:root [style*="linear-gradient(135deg, #10b981"], 
[data-theme="dark"] [style*="linear-gradient(135deg, #10b981"] {
  color: white !important;
}

/* Blog category tabs and badges */
:root [style*="rgba(16,185,129"] {
  color: #059669 !important;
}
[data-theme="dark"] [style*="rgba(16,185,129"] {
  color: #34d399 !important;
}

/* Data snapshot callout */
:root [style*="border: 2px solid rgba(16,185,129"] p {
  color: #334155 !important;
}
:root [style*="border: 2px solid rgba(16,185,129"] .text-lg {
  color: #0f172a !important;
}
[data-theme="dark"] [style*="border: 2px solid rgba(16,185,129"] p {
  color: #94a3b8 !important;
}
[data-theme="dark"] [style*="border: 2px solid rgba(16,185,129"] .text-lg {
  color: #ffffff !important;
}

/* Breadcrumb nav text */
:root nav.text-sm, :root nav[class*="text-sm"] {
  color: #64748b !important;
}
:root nav.text-sm a, :root nav[class*="text-sm"] a {
  color: #059669 !important;
}
`;

// Append the fixes to globals.css
globals += '\n' + contrastFixes;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ FIX 7d DONE: Light mode contrast strengthened');
console.log('   - Headings forced to #0f172a (near black)');
console.log('   - Body text forced to #334155 (dark slate)');
console.log('   - Card text improved contrast');
console.log('   - Emerald accent adjusted for light bg (#059669)');
console.log('   - All dark mode colors preserved');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix light mode text contrast - darker headings and body text" && git push origin master');
