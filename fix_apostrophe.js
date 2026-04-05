const fs = require('fs');
const path = require('path');

console.log('\n=====================================================');
console.log('  FIX: SWC apostrophe bug in flesch-kincaid post');
console.log('=====================================================\n');

const file = path.join(__dirname, 'app', 'blog', 'what-is-flesch-kincaid-score', 'page.js');

if (!fs.existsSync(file)) {
  console.log('  ❌ File not found');
  process.exit(1);
}

let c = fs.readFileSync(file, 'utf8');

// Fix the unescaped apostrophe in the array literal
c = c.replace("children's books", "kids books");

fs.writeFileSync(file, c, 'utf8');
console.log('  ✅ Fixed: children\'s → kids books');
console.log('\nDeploy:');
console.log('  git add .');
console.log('  git commit -m "Fix apostrophe SWC bug in flesch-kincaid post"');
console.log('  git push origin master\n');
