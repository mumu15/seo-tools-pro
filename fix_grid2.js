const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// Remove ALL broken layout rules added previously
globals = globals.replace(/\/\* Ensure inline grid[\s\S]*?block !important;\s*\}/g, '');
globals = globals.replace(/\[style\*="grid-template-columns"\][\s\S]*?\}/g, '');
globals = globals.replace(/\[style\*="gridTemplateColumns"\][\s\S]*?\}/g, '');
globals = globals.replace(/main \* \{[^}]*flex-direction[^}]*\}/g, '');
globals = globals.replace(/main \{[^}]*display: block[^}]*\}/g, '');
globals = globals.replace(/body > div, #__next \{[^}]*\}/g, '');
globals = globals.replace(/\/\* Prevent flex-direction[\s\S]*?\}/g, '');
globals = globals.replace(/main \{\s*flex: 1;\s*\}/g, '');

// Clean up excessive newlines
globals = globals.replace(/\n{4,}/g, '\n\n');

// Rewrite the sticky footer approach without breaking grids
const stickyFooterFix = `

/* Sticky footer without breaking grid layouts */
#__next {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
  width: 100%;
}

footer {
  margin-top: auto;
  flex-shrink: 0;
}
`;

globals += stickyFooterFix;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ Fixed grid layout + sticky footer');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix grid layout - proper sticky footer without breaking grids" && git push origin master');
