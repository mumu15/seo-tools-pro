const fs = require('fs');
const path = require('path');

function findAll(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findAll(full, results);
    else if (item === 'page.js') results.push(full);
  }
  return results;
}

let fixed = 0;
const files = findAll(path.join(__dirname, 'app'));

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;

  // Fix "Word Count > For" and similar > in JSX text
  c = c.replace(/transition-colors">([^<]*?)>([^<]*?)<\/a>/g, (match, before2, after) => {
    return match.replace('>' + after, ' / ' + after);
  });

  // Also fix any remaining bare > in link text
  c = c.replace(/>Word Count > For</g, '>Word Count / For<');
  c = c.replace(/>Words Per Minute > Speech</g, '>Words Per Minute / Speech<');
  c = c.replace(/>Character Limits > /g, '>Character Limits / ');

  if (c !== before) {
    fs.writeFileSync(f, c, 'utf8');
    fixed++;
  }
}

console.log('Fixed ' + fixed + ' files');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix JSX breadcrumb syntax" && git push origin main');
