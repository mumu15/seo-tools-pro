const fs = require('fs');
const path = require('path');

let fixed = 0;

function findPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findPages(full, results);
    else if (item === 'page.js') results.push(full);
  }
  return results;
}

const appDir = path.join(__dirname, 'app');
const pages = findPages(appDir);

for (const pg of pages) {
  let c = fs.readFileSync(pg, 'utf8');
  const before = c;

  // Calculate correct depth from app dir
  const rel = path.relative(appDir, path.dirname(pg)).replace(/\\/g, '/');
  const depth = rel === '' || rel === '.' ? 0 : rel.split('/').length;

  // Fix Header import
  const correctHeader = '../'.repeat(depth) + '../components/Header';
  const correctFooter = '../'.repeat(depth) + '../components/Footer';
  const correctFaq = '../'.repeat(depth) + '../components/FaqSchema';
  const correctAd = '../'.repeat(depth) + 'components/AdUnit';

  // Only fix if the file has wrong imports
  c = c.replace(/from ['"]\.\.\/[\.\/]*components\/Header['"]/g, "from '" + correctHeader + "'");
  c = c.replace(/from ['"]\.\.\/[\.\/]*components\/Footer['"]/g, "from '" + correctFooter + "'");
  c = c.replace(/from ['"]\.\.\/[\.\/]*components\/FaqSchema['"]/g, "from '" + correctFaq + "'");
  c = c.replace(/from ['"]\.\.\/[\.\/]*components\/AdUnit['"]/g, "from '" + correctAd + "'");

  if (c !== before) {
    fs.writeFileSync(pg, c, 'utf8');
    fixed++;
  }
}

console.log('Fixed imports in ' + fixed + ' files');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix import paths" && git push origin main');
