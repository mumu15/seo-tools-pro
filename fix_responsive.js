const fs = require('fs');
const path = require('path');

// RESPONSIVE FIX: Optimize layout across mobile, tablet, desktop
// Strategy: Add global CSS media queries to globals.css
// This catches all 300+ pages without editing each file

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

const responsiveCSS = `
/* ═══════════════════════════════════════════════ */
/*  RESPONSIVE OPTIMIZATION                        */
/*  Mobile-first fixes for all screen sizes        */
/* ═══════════════════════════════════════════════ */

/* ── BASE: Smooth text rendering ────────────── */
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

/* ── MOBILE: 0-639px ────────────────────────── */
@media (max-width: 639px) {

  /* Hero heading smaller on mobile */
  h1 {
    font-size: clamp(28px, 7vw, 48px) !important;
    line-height: 1.1 !important;
  }

  h2 {
    font-size: clamp(20px, 5vw, 28px) !important;
  }

  h3 {
    font-size: clamp(16px, 4vw, 20px) !important;
  }

  /* Tighter padding on mobile */
  .max-w-6xl, .max-w-5xl, .max-w-4xl {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  /* Stats bar: 2 columns on mobile */
  .grid-cols-4, .grid.grid-cols-4 {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 8px !important;
  }

  /* Tool cards: single column on mobile */
  .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3,
  .lg\\:grid-cols-3 {
    grid-template-columns: 1fr !important;
  }

  /* Blog cards: single column */
  .md\\:grid-cols-2.lg\\:grid-cols-3 {
    grid-template-columns: 1fr !important;
  }

  /* 2-col grids → 1 col on mobile */
  .md\\:grid-cols-2 {
    grid-template-columns: 1fr !important;
  }

  /* Inline style grids with gridTemplateColumns */
  [style*="gridTemplateColumns"] {
    grid-template-columns: 1fr !important;
  }

  /* Buttons stack vertically */
  .flex-col.sm\\:flex-row {
    flex-direction: column !important;
    align-items: stretch !important;
  }

  /* CTA buttons full width on mobile */
  .flex-col.sm\\:flex-row a,
  .flex-col.sm\\:flex-row button {
    width: 100% !important;
    text-align: center !important;
  }

  /* Tables: horizontal scroll */
  table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }

  thead, tbody, tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  table {
    min-width: 500px;
  }

  /* Wrap table container */
  .overflow-x-auto {
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    margin: 0 -16px;
    padding: 0 16px;
  }

  /* Footer: stack columns */
  footer .grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  footer .md\\:col-span-1 {
    text-align: center;
  }

  /* Footer bottom bar stack */
  footer .flex.flex-col.md\\:flex-row {
    text-align: center;
    gap: 12px;
  }

  /* Textarea full width */
  textarea {
    min-height: 200px !important;
    font-size: 16px !important; /* Prevents iOS zoom on focus */
  }

  /* Input fields: prevent iOS zoom */
  input[type="text"], input[type="email"], input[type="url"], select {
    font-size: 16px !important;
  }

  /* Category nav tabs: scroll horizontally */
  .flex-wrap.justify-center {
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    justify-content: flex-start !important;
    padding-bottom: 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .flex-wrap.justify-center::-webkit-scrollbar {
    display: none;
  }

  /* Blog hub category tabs */
  .flex-wrap.justify-center a {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }

  /* Hero section tighter spacing */
  .pt-16 {
    padding-top: 32px !important;
  }

  .pb-14 {
    padding-bottom: 24px !important;
  }

  .mb-14 {
    margin-bottom: 24px !important;
  }

  /* Mega menu: full width on mobile */
  [style*="backdropFilter"] {
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    max-height: 80vh;
    overflow-y: auto;
  }

  /* Data reference grid */
  [style*="minmax(240px"] {
    grid-template-columns: 1fr !important;
  }

  /* Reading time / word count tool content */
  .space-y-12 {
    gap: 32px !important;
  }

  /* Ad units: constrain to viewport */
  ins.adsbygoogle {
    max-width: 100% !important;
    overflow: hidden !important;
  }
}

/* ── TABLET: 640px-1023px ───────────────────── */
@media (min-width: 640px) and (max-width: 1023px) {

  h1 {
    font-size: clamp(36px, 5vw, 56px) !important;
  }

  /* 2 columns for most grids */
  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Footer: 2 columns */
  footer .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Inline style grids: 2 columns max */
  [style*="minmax(300px"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* ── DESKTOP: 1024px+ ───────────────────────── */
@media (min-width: 1024px) {

  /* Hover effects only on desktop */
  a:hover {
    transition: all 0.15s ease;
  }

  /* Smooth card hover lift */
  .hover\\:-translate-y-0\\.5:hover,
  .hover\\:-translate-y-1:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
}

/* ── TOUCH DEVICE OPTIMIZATIONS ─────────────── */
@media (hover: none) and (pointer: coarse) {

  /* Larger tap targets on touch */
  a, button {
    min-height: 44px;
    min-width: 44px;
  }

  /* Remove hover effects on touch (prevents sticky hover) */
  .hover\\:-translate-y-0\\.5:hover,
  .hover\\:-translate-y-1:hover {
    transform: none !important;
  }

  /* Disable dropdown hover, use click only */
  .group:hover .group-hover\\:text-emerald-400 {
    color: inherit;
  }
}

/* ── PRINT STYLES ───────────────────────────── */
@media print {
  header, footer, .adsbygoogle, nav {
    display: none !important;
  }

  body, main {
    background: white !important;
    color: black !important;
  }

  a {
    color: black !important;
    text-decoration: underline !important;
  }
}

/* ── WIDE SCREEN: 1440px+ ───────────────────── */
@media (min-width: 1440px) {
  .max-w-6xl {
    max-width: 1200px;
  }
}

/* ── REDUCED MOTION ─────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ── SAFE AREA (notched phones) ─────────────── */
@supports (padding: max(0px)) {
  body {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }

  .sticky.top-0 {
    padding-top: max(0px, env(safe-area-inset-top));
  }
}
`;

globals += '\n' + responsiveCSS;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ RESPONSIVE FIX DONE');
console.log('');
console.log('Added optimizations for:');
console.log('  📱 Mobile (0-639px): Single columns, smaller type, horizontal table scroll, full-width buttons');
console.log('  📱 Tablet (640-1023px): 2-column grids, balanced layouts');
console.log('  💻 Desktop (1024px+): Hover effects, smooth animations');
console.log('  👆 Touch devices: 44px tap targets, no sticky hover');
console.log('  📐 Notched phones: Safe area insets');
console.log('  🖨️  Print: Clean output, no nav/footer/ads');
console.log('  ♿ Reduced motion: Respects user preference');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Add responsive optimization for all screen sizes" && git push origin master');
