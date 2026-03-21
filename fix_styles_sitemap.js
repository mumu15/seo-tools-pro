const fs = require('fs');
const path = require('path');

let fixed = 0;

// Fix 1: Remove inline style="color:..." from all pages
function findPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findPages(full, results);
    else if (item === 'page.js' || item === 'PageClient.js') results.push(full);
  }
  return results;
}

const appDir = path.join(__dirname, 'app');
const pages = findPages(appDir);

for (const pg of pages) {
  let c = fs.readFileSync(pg, 'utf8');
  const before = c;

  // Fix style="color:#xxx" → className with color
  c = c.replace(/style="color:#34d399;text-decoration:none"/g, 'className="text-emerald-400 hover:underline"');
  c = c.replace(/style="color:#34d399"/g, 'className="text-emerald-400"');
  c = c.replace(/style="color:(#[a-fA-F0-9]+)"/g, 'className="text-slate-300"');
  
  // Also fix any remaining style="..." (HTML string style props)
  // Match style="anything" that's NOT style={{
  c = c.replace(/style="([^"]+)"/g, (match, val) => {
    // Skip if it's already JSX style={{
    if (match.includes('{{')) return match;
    // Convert common patterns
    if (val.includes('color')) return 'className="text-emerald-400"';
    if (val.includes('text-decoration')) return '';
    return match;
  });

  if (c !== before) {
    fs.writeFileSync(pg, c, 'utf8');
    fixed++;
  }
}

console.log('Fixed style props in ' + fixed + ' files');

// Fix 2: Rebuild sitemap cleanly
console.log('');
console.log('Rebuilding sitemap...');

function findAllPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === 'components') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findAllPages(full, results);
    else if (item === 'page.js') results.push(full);
  }
  return results;
}

const allPages = findAllPages(appDir);
const urls = [];

for (const pg of allPages) {
  const relToApp = path.relative(appDir, path.dirname(pg)).replace(/\\/g, '/');
  if (relToApp.includes('[')) continue;
  const urlPath = relToApp === '' || relToApp === '.' ? '/' : '/' + relToApp;

  let priority = 0.8;
  let freq = 'monthly';
  if (urlPath === '/') { priority = 1.0; freq = 'weekly'; }
  else if (['/word-counter','/character-counter','/keyword-density','/meta-tag-generator','/readability-checker','/sentence-counter','/reading-time','/words-per-minute','/words-per-page','/twitter-thread-counter','/hashtag-counter','/character-limits'].includes(urlPath)) { priority = 0.9; freq = 'weekly'; }
  else if (urlPath === '/blog') { priority = 0.8; freq = 'weekly'; }
  else if (urlPath.startsWith('/blog/')) { priority = 0.7; freq = 'monthly'; }
  else if (['/about','/contact','/privacy-policy'].includes(urlPath)) { priority = 0.3; freq = 'monthly'; }

  urls.push({ url: urlPath, priority, freq });
}

urls.sort((a, b) => {
  if (a.url === '/') return -1;
  if (b.url === '/') return 1;
  return b.priority - a.priority || a.url.localeCompare(b.url);
});

const sitemap = `export default function sitemap() {
  const base = 'https://www.wordcountertool.net';
  const today = new Date().toISOString().split('T')[0];

  return [
${urls.map(u => `    { url: base + "${u.url}", lastModified: today, changeFrequency: "${u.freq}", priority: ${u.priority} }`).join(',\n')}
  ];
}
`;

fs.writeFileSync(path.join(appDir, 'sitemap.js'), sitemap, 'utf8');
console.log('Sitemap rebuilt with ' + urls.length + ' URLs');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix style props + rebuild sitemap" && git push origin main');
