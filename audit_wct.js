const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';
const MAX_CONCURRENT = 5;
const TIMEOUT = 15000;

// ============================================================
// PART 1: LOCAL AUDIT
// ============================================================

function findPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === 'components') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findPages(full, results);
    else if (item === 'page.js' || item === 'page.tsx') results.push(full);
  }
  return results;
}

function findClientFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findClientFiles(full, results);
    else if ((item.endsWith('Client.js') || item.endsWith('Client.tsx') || item.endsWith('.js')) && item !== 'layout.js' && item !== 'sitemap.js' && item !== 'robots.js') {
      results.push(full);
    }
  }
  return results;
}

console.log('');
console.log('==========================================================');
console.log('  FULL AUDIT — wordcountertool.net');
console.log('==========================================================');
console.log('');

const allPages = findPages(APP);
console.log('📄 Total page.js files: ' + allPages.length);
console.log('');

// Metadata check
let withMeta = 0, withCanonical = 0, withAds = 0, withSchema = 0;
let missingMeta = [], missingCanonical = [], missingAds = [];

for (const pg of allPages) {
  const content = fs.readFileSync(pg, 'utf8');
  const rel = path.relative(BASE, pg).replace(/\\/g, '/');
  const hasMeta = content.includes('generateMetadata') || content.includes('export const metadata');
  const hasCanonical = content.includes('canonical');
  if (hasMeta) withMeta++; else missingMeta.push(rel);
  if (hasCanonical) withCanonical++; else missingCanonical.push(rel);
}

console.log('--- METADATA ---');
console.log('  Pages WITH metadata:    ' + withMeta + '/' + allPages.length);
console.log('  Pages WITHOUT metadata: ' + (allPages.length - withMeta));
if (missingMeta.length > 0) missingMeta.slice(0, 15).forEach(p => console.log('     → ' + p));
console.log('');
console.log('--- CANONICAL ---');
console.log('  Pages WITH canonical:    ' + withCanonical + '/' + allPages.length);
console.log('  Pages WITHOUT canonical: ' + (allPages.length - withCanonical));
if (missingCanonical.length > 0) missingCanonical.slice(0, 15).forEach(p => console.log('     → ' + p));
console.log('');

// Ads check
let adFiles = 0, noAdFiles = [];
function findJSInApp(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findJSInApp(full, results);
    else if (item.endsWith('.js') && item !== 'layout.js' && item !== 'sitemap.js' && item !== 'robots.js' && item !== 'globals.css') {
      results.push(full);
    }
  }
  return results;
}
const allJS = findJSInApp(APP);
for (const f of allJS) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('AdUnit') || c.includes('adsbygoogle') || c.includes('ad-slot')) {
    adFiles++;
  }
}
console.log('--- ADS ---');
console.log('  Files with ad placements: ' + adFiles);
console.log('');

// Schema check
let schemaCount = 0;
for (const f of allJS) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('application/ld+json') || c.includes('SchemaMarkup') || c.includes('StructuredData')) {
    schemaCount++;
  }
}
console.log('--- STRUCTURED DATA ---');
console.log('  Files with schema: ' + schemaCount);
console.log('');

// Encoding check
let encodingIssues = 0;
for (const f of allJS) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('ΓÇö') || c.includes('ΓÇ║')) encodingIssues++;
}
console.log('--- ENCODING ---');
console.log('  Files with encoding issues: ' + encodingIssues);
console.log('');

// Sitemap URL count
const smFile = path.join(APP, 'sitemap.js');
let smUrls = 0;
if (fs.existsSync(smFile)) {
  // Run sitemap function to count
  const smContent = fs.readFileSync(smFile, 'utf8');
  const urlMatches = smContent.match(/url:\s*base\s*\+\s*['"][^'"]+['"]/g);
  const urlMatches2 = smContent.match(/url:\s*base\s*\+\s*'\/[^']*'/g);
  const slugArrays = smContent.match(/Slugs\s*=\s*\[([^\]]+)\]/g);
  
  // Count static pages
  const staticMatch = smContent.match(/staticPages\s*=\s*\[([^\]]+)\]/);
  const staticCount = staticMatch ? (staticMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Count blog slugs
  const blogMatch = smContent.match(/blogSlugs\s*=\s*\[([^\]]+)\]/);
  const blogCount = blogMatch ? (blogMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Count profession slugs
  const profMatch = smContent.match(/professionSlugs\s*=\s*\[([^\]]+)\]/);
  const profCount = profMatch ? (profMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Count reading time slugs
  const rtMatch = smContent.match(/readingTimeSlugs\s*=\s*\[([^\]]+)\]/);
  const rtCount = rtMatch ? (rtMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Count character limit slugs
  const clMatch = smContent.match(/characterLimitSlugs\s*=\s*\[([^\]]+)\]/);
  const clCount = clMatch ? (clMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Count document slugs
  const docMatch = smContent.match(/documentSlugs\s*=\s*\[([^\]]+)\]/);
  const docCount = docMatch ? (docMatch[1].match(/"/g) || []).length / 2 : 0;
  
  // Add hub pages
  smUrls = staticCount + blogCount + profCount + rtCount + clCount + docCount + 4; // +4 for hub pages
}

console.log('--- SITEMAP ---');
console.log('  Estimated URLs in sitemap: ~' + smUrls);
console.log('  Actual page.js files: ' + allPages.length);
console.log('');

// ============================================================
// PART 2: LIVE SITE CHECK
// ============================================================

const results = { ok: [], redirect: [], notFound: [], serverError: [], timeout: [], other: [] };
let checked = 0;
let total = 0;

function buildUrlList() {
  const smContent = fs.readFileSync(smFile, 'utf8');
  
  // Extract all URL paths from the sitemap
  const urls = [];
  
  // Static pages
  const staticMatch = smContent.match(/staticPages\s*=\s*\[([^\]]+)\]/);
  if (staticMatch) {
    const matches = staticMatch[1].match(/"([^"]+)"/g);
    if (matches) matches.forEach(m => urls.push(m.replace(/"/g, '')));
  }
  
  // Blog slugs
  const blogMatch = smContent.match(/blogSlugs\s*=\s*\[([^\]]+)\]/);
  if (blogMatch) {
    const matches = blogMatch[1].match(/"([^"]+)"/g);
    if (matches) matches.forEach(m => urls.push('/blog/' + m.replace(/"/g, '')));
  }
  
  // Profession slugs
  const profMatch = smContent.match(/professionSlugs\s*=\s*\[([^\]]+)\]/);
  if (profMatch) {
    const matches = profMatch[1].match(/"([^"]+)"/g);
    if (matches) {
      urls.push('/word-counter/for');
      matches.forEach(m => urls.push('/word-counter/for/' + m.replace(/"/g, '')));
    }
  }
  
  // Reading time slugs
  const rtMatch = smContent.match(/readingTimeSlugs\s*=\s*\[([^\]]+)\]/);
  if (rtMatch) {
    const matches = rtMatch[1].match(/"([^"]+)"/g);
    if (matches) {
      urls.push('/reading-time/for');
      matches.forEach(m => urls.push('/reading-time/for/' + m.replace(/"/g, '')));
    }
  }
  
  // Character limit slugs
  const clMatch = smContent.match(/characterLimitSlugs\s*=\s*\[([^\]]+)\]/);
  if (clMatch) {
    const matches = clMatch[1].match(/"([^"]+)"/g);
    if (matches) {
      urls.push('/character-limits');
      matches.forEach(m => urls.push('/character-limits/' + m.replace(/"/g, '')));
    }
  }
  
  // Document slugs
  const docMatch = smContent.match(/documentSlugs\s*=\s*\[([^\]]+)\]/);
  if (docMatch) {
    const matches = docMatch[1].match(/"([^"]+)"/g);
    if (matches) {
      urls.push('/word-count/for');
      matches.forEach(m => urls.push('/word-count/for/' + m.replace(/"/g, '')));
    }
  }
  
  return urls;
}

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    const fullUrl = DOMAIN + urlPath;
    const startTime = Date.now();
    const req = https.get(fullUrl, { timeout: TIMEOUT }, (res) => {
      const elapsed = Date.now() - startTime;
      const status = res.statusCode;
      res.resume();
      const entry = { url: urlPath, status, elapsed };
      if (status >= 200 && status < 300) results.ok.push(entry);
      else if (status >= 300 && status < 400) { entry.location = res.headers.location || '?'; results.redirect.push(entry); }
      else if (status === 404) results.notFound.push(entry);
      else if (status >= 500) results.serverError.push(entry);
      else results.other.push(entry);
      checked++;
      process.stdout.write('\r  Checking: ' + checked + '/' + total + ' (' + Math.round(checked/total*100) + '%)');
      resolve();
    });
    req.on('timeout', () => { req.destroy(); results.timeout.push({ url: urlPath }); checked++; resolve(); });
    req.on('error', () => { results.other.push({ url: urlPath }); checked++; resolve(); });
  });
}

async function processUrls(urls) {
  const queue = [...urls];
  const workers = [];
  for (let i = 0; i < MAX_CONCURRENT; i++) {
    workers.push((async () => { while (queue.length > 0) { await checkUrl(queue.shift()); } })());
  }
  await Promise.all(workers);
}

async function main() {
  console.log('==========================================================');
  console.log('  LIVE SITE CHECK — www.wordcountertool.net');
  console.log('==========================================================');
  console.log('');
  
  const urls = buildUrlList();
  total = urls.length;
  console.log('  Testing ' + total + ' URLs');
  console.log('');
  
  const start = Date.now();
  await processUrls(urls);
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  
  console.log('\n');
  console.log('==========================================================');
  console.log('  LIVE RESULTS');
  console.log('==========================================================');
  console.log('');
  console.log('  OK (200):         ' + results.ok.length);
  console.log('  Redirects (3xx):  ' + results.redirect.length);
  console.log('  Not Found (404):  ' + results.notFound.length);
  console.log('  Server Error:     ' + results.serverError.length);
  console.log('  Timeouts:         ' + results.timeout.length);
  console.log('  Total time:       ' + elapsed + 's');
  console.log('');
  
  if (results.notFound.length > 0) {
    console.log('  404 PAGES:');
    results.notFound.slice(0, 30).forEach(r => console.log('    ' + DOMAIN + r.url));
    if (results.notFound.length > 30) console.log('    ... and ' + (results.notFound.length - 30) + ' more');
    console.log('');
  }
  if (results.redirect.length > 0) {
    console.log('  REDIRECTS:');
    results.redirect.slice(0, 15).forEach(r => console.log('    ' + r.url + ' -> ' + r.location));
    if (results.redirect.length > 15) console.log('    ... and ' + (results.redirect.length - 15) + ' more');
    console.log('');
  }
  
  const avgTime = results.ok.length > 0 ? (results.ok.reduce((a, r) => a + r.elapsed, 0) / results.ok.length / 1000).toFixed(2) : 'N/A';
  
  console.log('==========================================================');
  console.log('  ADSENSE READINESS CHECK');
  console.log('==========================================================');
  console.log('');
  
  const checks = [];
  checks.push({ pass: results.notFound.length === 0, msg: results.notFound.length === 0 ? 'No 404 pages' : results.notFound.length + ' pages return 404' });
  checks.push({ pass: results.serverError.length === 0, msg: results.serverError.length === 0 ? 'No server errors' : results.serverError.length + ' server errors' });
  checks.push({ pass: (results.ok.length + results.redirect.length) >= 20, msg: (results.ok.length) + ' live pages' });
  checks.push({ pass: avgTime !== 'N/A' && parseFloat(avgTime) < 3, msg: 'Average load: ' + avgTime + 's' });
  checks.push({ pass: results.timeout.length === 0, msg: results.timeout.length === 0 ? 'No timeouts' : results.timeout.length + ' timeouts' });
  checks.push({ pass: results.redirect.length < total * 0.1, msg: 'Redirect ratio: ' + (results.redirect.length / total * 100).toFixed(1) + '%' });
  
  checks.forEach(c => console.log('  ' + (c.pass ? '✅' : '❌') + ' ' + c.msg));
  const passCount = checks.filter(c => c.pass).length;
  console.log('');
  console.log('  SCORE: ' + passCount + '/' + checks.length);
  console.log(passCount === checks.length ? '  🎉 YOUR SITE IS READY FOR ADSENSE!' : '  ⚠️  Fix issues above before applying');
  console.log('');
}

main().catch(err => { console.error(err); process.exit(1); });
