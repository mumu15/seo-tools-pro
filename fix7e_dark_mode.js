const fs = require('fs');
const path = require('path');

// FIX 7e: Fix dark mode contrast
// Problem: Light mode CSS overrides used :root which applies in BOTH modes
// Solution: Replace :root with html:not([data-theme="dark"]) in the contrast fixes

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// Replace all :root selectors in the CONTRAST FIXES section with scoped selectors
// But DON'T touch the CSS custom property declarations at the top (those use :root correctly)

// Strategy: Find the contrast fixes section and replace :root references there
const contrastStart = globals.indexOf('LIGHT MODE CONTRAST FIXES');
if (contrastStart === -1) {
  console.error('❌ Could not find LIGHT MODE CONTRAST FIXES section in globals.css');
  process.exit(1);
}

// Split globals into: before contrast fixes, and contrast fixes section
const beforeContrast = globals.substring(0, contrastStart - 60); // include the comment opener
let contrastSection = globals.substring(contrastStart - 60);

// Replace :root (used as light mode selector) with html:not([data-theme="dark"])
// But be careful not to replace :root in CSS custom property blocks
contrastSection = contrastSection.replace(
  /:root\s+(?!{|\[)/g, 
  'html:not([data-theme="dark"]) '
);

// Also fix standalone :root at start of selectors like ":root h1"
contrastSection = contrastSection.replace(
  /:root\s+(h[1-6]|p|li|span|div|a|strong|b|main|article|nav|header|footer|table|th|td|code|pre)/g,
  'html:not([data-theme="dark"]) $1'
);

// Fix any remaining :root. patterns that should be light-only  
contrastSection = contrastSection.replace(
  /:root\s+\./g,
  'html:not([data-theme="dark"]) .'
);

contrastSection = contrastSection.replace(
  /:root\s+\[/g,
  'html:not([data-theme="dark"]) ['
);

globals = beforeContrast + contrastSection;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ FIX 7e DONE: Dark mode contrast fixed');
console.log('   Replaced :root → html:not([data-theme="dark"]) in contrast overrides');
console.log('   Light mode styles no longer bleed into dark mode');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix dark mode - scope light mode overrides correctly" && git push origin master');
