const fs = require('fs');
const path = require('path');

// Fix: min-h-screen forces pages to fill viewport even when content is short
// This creates a big empty gap before the footer
// Solution: Override min-h-screen to use min-content instead

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

const fix = `
/* ═══════════════════════════════════════════════ */
/*  FIX: Remove forced min-height on short pages  */
/* ═══════════════════════════════════════════════ */

/* min-h-screen on <main> causes huge empty gaps on short pages.
   Let content determine its own height instead. */
main.min-h-screen,
.min-h-screen:not(html):not(body) {
  min-height: auto !important;
}

/* Ensure the page itself still fills viewport (no short page bounce) */
html, body {
  min-height: 100vh;
}

/* Use flexbox on body to push footer down naturally */
body {
  display: flex;
  flex-direction: column;
}

body > div, body > main, #__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

footer {
  margin-top: auto;
}
`;

globals += '\n' + fix;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ Fixed empty gap on short pages');
console.log('   - Removed forced min-h-screen on main elements');
console.log('   - Footer now sticks to bottom naturally via flexbox');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix empty white gap on short content pages" && git push origin master');
