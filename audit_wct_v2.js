const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';
const MAX_CONCURRENT = 5;

function findPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === 'components') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findPages(full, results);
    else if (item === 'page.js') results.push(full);
  }
  return results;
}

function findAllJS(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findAllJS(full, results);
    else if (item.endsWith('.js') && !['layout.js','sitemap.js','robots.js'].includes(item)) results.push(full);
  }
  return results;
}

console.log('');
console.log('==========================================================');
console.log('  FULL AUDIT — wordcountertool.net');
console.log('==========================================================');

const allPages = findPages(APP);
console.log('📄 Total page.js files: ' + allPages.length);

let withMeta = 0, withCanonical = 0;
const missingMeta = [], missingCanonical = [];
for (const pg of allPages) {
  const c = fs.readFileSync(pg, 'utf8');
  const rel = path.relative(BASE, pg).replace(/\\/g, '/');
  if (c.includes('generateMetadata') || c.includes('export const metadata')) withMeta++;
  else missingMeta.push(rel);
  if (c.includes('canonical')) withCanonical++;
  else missingCanonical.push(rel);
}

console.log('--- METADATA ---');
console.log('  Pages WITH metadata:    ' + withMeta + '/' + allPages.length);
console.log('  Pages WITHOUT metadata: ' + missingMeta.length);
missingMeta.slice(0, 10).forEach(p => console.log('     → ' + p));

console.log('--- CANONICAL ---');
console.log('  Pages WITH canonical:    ' + withCanonical + '/' + allPages.length);
console.log('  Pages WITHOUT canonical: ' + missingCanonical.length);
missingCanonical.slice(0, 10).forEach(p => console.log('     → ' + p));

const allJS = findAllJS(APP);
let adFiles = 0, schemaCount = 0, encodingIssues = 0;
for (const f of allJS) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('AdUnit') || c.includes('adsbygoogle')) adFiles++;
  if (c.includes('application/ld+json')) schemaCount++;
  if (c.includes('ΓÇö') || c.includes('ΓÇ║')) encodingIssues++;
}

console.log('--- ADS ---');
console.log('  Files with ad placements: ' + adFiles);
console.log('--- STRUCTURED DATA ---');
console.log('  Files with schema: ' + schemaCount);
console.log('--- ENCODING ---');
console.log('  Files with encoding issues: ' + encodingIssues);

// Parse sitemap - new format
const smContent = fs.readFileSync(path.join(APP, 'sitemap.js'), 'utf8');
const urlMatches = smContent.match(/url:\s*"([^"]+)"/g) || [];
const smUrls = urlMatches.map(m => m.match(/"([^"]+)"/)[1]).filter(u => u.startsWith('/'));

console.log('--- SITEMAP ---');
console.log('  URLs in sitemap: ' + smUrls.length);
console.log('  Actual page.js files: ' + allPages.length);

// LIVE CHECK
const results = { ok: [], redirect: [], notFound: [], serverError: [], timeout: [], other: [] };
let checked = 0;

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    const fullUrl = DOMAIN + urlPath;
    const start = Date.now();
    const req = https.get(fullUrl, { timeout: 15000 }, (res) => {
      const elapsed = Date.now() - start;
      res.resume();
      const entry = { url: urlPath, status: res.statusCode, elapsed };
      if (res.statusCode >= 200 && res.statusCode < 300) results.ok.push(entry);
      else if (res.statusCode >= 300 && res.statusCode < 400) { entry.location = res.headers.location; results.redirect.push(entry); }
      else if (res.statusCode === 404) results.notFound.push(entry);
      else if (res.statusCode >= 500) results.serverError.push(entry);
      else results.other.push(entry);
      checked++;
      process.stdout.write('\r  Checking: ' + checked + '/' + smUrls.length + ' (' + Math.round(checked / smUrls.length * 100) + '%)');
      resolve();
    });
    req.on('timeout', () => { req.destroy(); results.timeout.push({ url: urlPath }); checked++; resolve(); });
    req.on('error', () => { results.other.push({ url: urlPath }); checked++; resolve(); });
  });
}

async function run() {
  console.log('');
  console.log('==========================================================');
  console.log('  LIVE SITE CHECK — www.wordcountertool.net');
  console.log('==========================================================');
  console.log('  Testing ' + smUrls.length + ' URLs');

  const queue = [...smUrls];
  const workers = [];
  for (let i = 0; i < MAX_CONCURRENT; i++) {
    workers.push((async () => { while (queue.length) await checkUrl(queue.shift()); })());
  }
  await Promise.all(workers);

  const avgTime = results.ok.length > 0 ? (results.ok.reduce((a, r) => a + r.elapsed, 0) / results.ok.length / 1000).toFixed(2) : 'N/A';

  console.log('\n');
  console.log('==========================================================');
  console.log('  LIVE RESULTS');
  console.log('==========================================================');
  console.log('  OK (200):         ' + results.ok.length);
  console.log('  Redirects (3xx):  ' + results.redirect.length);
  console.log('  Not Found (404):  ' + results.notFound.length);
  console.log('  Server Error:     ' + results.serverError.length);
  console.log('  Timeouts:         ' + results.timeout.length);

  if (results.notFound.length > 0) {
    console.log('  404 PAGES:');
    results.notFound.slice(0, 20).forEach(r => console.log('    ' + DOMAIN + r.url));
  }
  if (results.redirect.length > 0) {
    console.log('  REDIRECTS:');
    results.redirect.slice(0, 10).forEach(r => console.log('    ' + r.url + ' → ' + r.location));
  }

  console.log('');
  console.log('==========================================================');
  console.log('  ADSENSE READINESS CHECK');
  console.log('==========================================================');

  const checks = [
    { pass: results.notFound.length === 0, msg: results.notFound.length === 0 ? 'No 404 pages' : results.notFound.length + ' pages return 404' },
    { pass: results.serverError.length === 0, msg: results.serverError.length === 0 ? 'No server errors' : results.serverError.length + ' server errors' },
    { pass: results.ok.length >= 20, msg: results.ok.length + ' live pages' },
    { pass: avgTime !== 'N/A' && parseFloat(avgTime) < 3, msg: 'Average load: ' + avgTime + 's' },
    { pass: results.timeout.length === 0, msg: results.timeout.length === 0 ? 'No timeouts' : results.timeout.length + ' timeouts' },
    { pass: results.redirect.length < smUrls.length * 0.1, msg: 'Redirect ratio: ' + (results.redirect.length / smUrls.length * 100).toFixed(1) + '%' },
  ];

  checks.forEach(c => console.log('  ' + (c.pass ? '✅' : '❌') + ' ' + c.msg));
  const passCount = checks.filter(c => c.pass).length;
  console.log('');
  console.log('  SCORE: ' + passCount + '/' + checks.length);
  console.log(passCount === checks.length ? '  🎉 YOUR SITE IS READY FOR ADSENSE!' : '  ⚠️  Fix issues above before applying');
  console.log('');
}

run().catch(err => { console.error(err); process.exit(1); });
