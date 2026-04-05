const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

const gridFix = `

/* Ensure inline grid layouts are not broken by flexbox rules */
[style*="grid-template-columns"],
[style*="gridTemplateColumns"] {
  display: grid !important;
}

/* Prevent flex-direction: column from cascading into content areas */
main * {
  flex-direction: initial;
}

main {
  display: block !important;
}
`;

globals += gridFix;
fs.writeFileSync(globalsPath, globals, 'utf8');

console.log('✅ Fixed Data & Reference grid layout');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix Data & Reference grid layout" && git push origin master');
