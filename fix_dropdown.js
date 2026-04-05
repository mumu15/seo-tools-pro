const fs = require('fs');
const path = require('path');

// Fix: All Tools dropdown keeps dark background in light mode
// The CSS attribute selector [style*="backdropFilter"] caused a syntax error before
// because PostCSS doesn't support attribute selectors with camelCase style properties
// Solution: Target the dropdown by its position and structure instead

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

const dropdownFix = `

/* ═══════════════════════════════════════════════════════════════
   DROPDOWN / MEGA MENU FIX
   Target the mega menu dropdown that uses inline dark styles
   ═══════════════════════════════════════════════════════════════ */

/* Desktop dropdown panel - absolute positioned inside header */
header .absolute {
  background: var(--header-bg) !important;
  border-color: var(--border-color) !important;
}

/* All links inside the dropdown */
header .absolute a {
  color: var(--text-muted) !important;
}

header .absolute a:hover {
  color: var(--accent) !important;
  background: var(--accent-bg) !important;
}

/* Category headings inside dropdown */
header .absolute div[class*="emerald"],
header .absolute div[class*="uppercase"],
header .absolute .text-emerald-400 {
  color: var(--accent) !important;
}

/* Tool names inside dropdown */
header .absolute .text-white,
header .absolute div[class*="font-medium"],
header .absolute div[class*="font-semibold"] {
  color: var(--text-primary) !important;
}

/* Tool descriptions inside dropdown */
header .absolute div[class*="text-slate"],
header .absolute span[class*="text-slate"],
header .absolute div[class*="text-xs"] {
  color: var(--text-faint) !important;
}

/* Bottom bar of mega menu */
header .absolute div[class*="border-t"] {
  border-color: var(--border-color) !important;
  background: var(--accent-bg) !important;
}

header .absolute div[class*="border-t"] span {
  color: var(--text-faint) !important;
}

/* Mobile menu panel */
header div[class*="lg:hidden"],
header div[class*="md:hidden"] {
  background: var(--bg-primary) !important;
  border-color: var(--border-color) !important;
}

header div[class*="lg:hidden"] a,
header div[class*="md:hidden"] a {
  color: var(--text-muted) !important;
}

header div[class*="lg:hidden"] a:hover,
header div[class*="md:hidden"] a:hover {
  color: var(--text-primary) !important;
}

/* Dropdown shadow for light mode */
header .absolute {
  box-shadow: var(--shadow, 0 4px 20px rgba(0,0,0,0.1));
}

[data-theme="dark"] header .absolute {
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
`;

globals += dropdownFix;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ Fixed dropdown/mega menu for light mode');
console.log('   - Light background on dropdown panel');
console.log('   - Dark text for tool names');
console.log('   - Proper hover colors');
console.log('   - Mobile menu also fixed');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix All Tools dropdown for light mode" && git push origin master');
