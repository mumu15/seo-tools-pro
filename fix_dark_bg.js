const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// Remove the old body block without !important
globals = globals.replace(/body\s*\{\s*background:\s*#0a0d14;\s*color:\s*#e2e8f0;\s*\}/g, '');

// Also remove any duplicate body blocks
globals = globals.replace(/body\s*\{\s*display:\s*flex;/g, 'body { background: #0a0d14 !important; color: #e2e8f0 !important; display: flex;');

// If that didn't match, just append a clean override at the end
if (!globals.includes('background: #0a0d14 !important')) {
  globals += `

/* Force dark background — must use !important to override Tailwind reset */
body {
  background: #0a0d14 !important;
  color: #e2e8f0 !important;
}
`;
}

fs.writeFileSync(globalsPath, globals, 'utf8');
console.log('✅ Fixed: body background now uses !important');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix dark background with !important" && git push origin master');
