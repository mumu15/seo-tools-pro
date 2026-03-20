const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';

console.log('');
console.log('=====================================================');
console.log('  FIX: Sitemap + Metadata for WordCounterTool.net');
console.log('=====================================================');
console.log('');

// ============================================================
// STEP 1: Rebuild sitemap from all actual pages
// ============================================================
console.log('--- Step 1: Rebuild sitemap ---');

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

const allPages = findPages(APP);
const urls = [];

for (const pg of allPages) {
  const relToApp = path.relative(APP, path.dirname(pg)).replace(/\\/g, '/');
  if (relToApp.includes('[')) continue;
  const urlPath = relToApp === '' || relToApp === '.' ? '/' : '/' + relToApp;

  let priority = 0.8;
  let freq = 'monthly';
  if (urlPath === '/') { priority = 1.0; freq = 'weekly'; }
  else if (urlPath === '/word-counter') { priority = 0.9; freq = 'weekly'; }
  else if (['/character-counter','/keyword-density','/meta-tag-generator','/readability-checker','/sentence-counter','/reading-time','/words-per-minute','/words-per-page','/twitter-thread-counter','/hashtag-counter','/character-limits'].includes(urlPath)) { priority = 0.9; freq = 'weekly'; }
  else if (urlPath === '/blog') { priority = 0.8; freq = 'weekly'; }
  else if (urlPath.startsWith('/blog/')) { priority = 0.7; freq = 'monthly'; }
  else if (['/about','/contact','/privacy-policy'].includes(urlPath)) { priority = 0.3; freq = 'monthly'; }

  urls.push({ url: urlPath, priority, freq });
}

// Sort
urls.sort((a, b) => {
  if (a.url === '/') return -1;
  if (b.url === '/') return 1;
  if (a.priority !== b.priority) return b.priority - a.priority;
  return a.url.localeCompare(b.url);
});

const sitemap = `export default function sitemap() {
  const base = '${DOMAIN}';
  const today = new Date().toISOString().split('T')[0];

  return [
${urls.map(u => `    { url: "${u.url}", priority: ${u.priority}, freq: "${u.freq}" }`).join(',\n')}
  ].map(entry => ({
    url: base + entry.url,
    lastModified: today,
    changeFrequency: entry.freq,
    priority: entry.priority,
  }));
}
`;

fs.writeFileSync(path.join(APP, 'sitemap.js'), sitemap, 'utf8');
console.log('  ✅ Rebuilt sitemap with ' + urls.length + ' URLs (was 128)');

// ============================================================
// STEP 2: Add metadata to 12 core tool pages
// These are 'use client' pages — can't export metadata directly
// Need to check if they have a separate server page wrapper
// ============================================================
console.log('');
console.log('--- Step 2: Fix metadata on 12 core pages ---');

const corePagesNeedingMeta = [
  { path: 'character-counter', title: 'Free Character Counter Online', desc: 'Count characters, words, sentences and paragraphs instantly. Check character limits for Twitter, Instagram, LinkedIn and more. Free, no sign up.' },
  { path: 'contact', title: 'Contact Us', desc: 'Get in touch with WordCounterTool.net. Questions, feedback, or partnership inquiries welcome.' },
  { path: 'hashtag-counter', title: 'Free Hashtag Counter & Generator', desc: 'Count and analyze hashtags for Instagram, Twitter, TikTok and more. Free hashtag counter with trending suggestions.' },
  { path: 'keyword-density', title: 'Free Keyword Density Checker', desc: 'Check keyword density and frequency in your content. Optimize for SEO with our free keyword density analyzer. No sign up required.' },
  { path: 'meta-tag-generator', title: 'Free Meta Tag Generator', desc: 'Generate SEO-optimized meta titles and descriptions. Preview how your page looks in Google search results. Free meta tag tool.' },
  { path: 'readability-checker', title: 'Free Readability Checker', desc: 'Check your Flesch-Kincaid readability score, grade level, and reading ease. Improve your writing with our free readability tool.' },
  { path: 'reading-time', title: 'Reading Time Calculator', desc: 'Calculate how long it takes to read any text. Get reading time, speaking time, and word count instantly. Free reading time estimator.' },
  { path: 'sentence-counter', title: 'Free Sentence Counter Online', desc: 'Count sentences, words, paragraphs and average sentence length instantly. Free sentence counter for writers and students.' },
  { path: 'twitter-thread-counter', title: 'Twitter Thread Counter & Splitter', desc: 'Split long text into Twitter/X threads. Count characters per tweet, preview your thread, and copy individual tweets. Free thread tool.' },
  { path: 'word-counter', title: 'Free Word Counter Online', desc: 'Count words, characters, sentences and paragraphs instantly. Reading time, speaking time, and more. Free word counter, no sign up.' },
  { path: 'words-per-minute', title: 'Words Per Minute Calculator', desc: 'Calculate your reading speed and typing speed in words per minute. See how you compare to averages. Free WPM calculator.' },
  { path: 'words-per-page', title: 'Words Per Page Calculator', desc: 'Convert word count to pages. See how many pages your essay, paper, or book will be. Supports single and double spacing.' },
];

let metaFixed = 0;

for (const pg of corePagesNeedingMeta) {
  const pageFile = path.join(APP, pg.path, 'page.js');
  if (!fs.existsSync(pageFile)) continue;

  let content = fs.readFileSync(pageFile, 'utf8');

  // Skip if already has metadata export
  if (content.includes('export const metadata') || content.includes('generateMetadata')) continue;

  // These are 'use client' pages — we need to create a wrapper
  // Check if it's a client component
  if (content.includes("'use client'") || content.includes('"use client"')) {
    // Rename current page.js to PageClient.js
    const clientFile = path.join(APP, pg.path, 'PageClient.js');
    
    // Only rename if PageClient.js doesn't exist
    if (!fs.existsSync(clientFile)) {
      // Get the default export name
      const exportMatch = content.match(/export default function (\w+)/);
      const funcName = exportMatch ? exportMatch[1] : 'Page';

      // Write client file
      fs.writeFileSync(clientFile, content, 'utf8');

      // Create new server page.js with metadata
      const serverPage = `import ${funcName} from './PageClient'

export const metadata = {
  title: '${pg.title} | WordCounterTool.net',
  description: '${pg.desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${DOMAIN}/${pg.path}' },
}

export default function Page() {
  return <${funcName} />
}
`;
      fs.writeFileSync(pageFile, serverPage, 'utf8');
      metaFixed++;
      console.log('  ✅ Split ' + pg.path + ' → page.js + PageClient.js');
    } else {
      // PageClient.js already exists — just update page.js metadata
      let existingPage = fs.readFileSync(pageFile, 'utf8');
      if (!existingPage.includes('metadata')) {
        // This shouldn't be a client component if PageClient exists
        // Check if page.js imports PageClient
        if (existingPage.includes('PageClient')) {
          // Add metadata to existing server page
          const metaBlock = `\nexport const metadata = {
  title: '${pg.title} | WordCounterTool.net',
  description: '${pg.desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${DOMAIN}/${pg.path}' },
}\n`;
          existingPage = existingPage.replace(/^/, metaBlock);
          fs.writeFileSync(pageFile, existingPage, 'utf8');
          metaFixed++;
          console.log('  ✅ Added metadata to ' + pg.path);
        }
      }
    }
  }
}

console.log('  Total metadata fixes: ' + metaFixed);

// ============================================================
// STEP 3: Add canonical to pages missing it
// ============================================================
console.log('');
console.log('--- Step 3: Add missing canonicals ---');

let canonicalsAdded = 0;
for (const pg of allPages) {
  let content = fs.readFileSync(pg, 'utf8');
  if (content.includes('canonical')) continue;
  if (content.includes("'use client'")) continue; // Skip client components

  const relToApp = path.relative(APP, path.dirname(pg)).replace(/\\/g, '/');
  const urlPath = relToApp === '' || relToApp === '.' ? '' : '/' + relToApp;
  const canonical = DOMAIN + urlPath;

  if (content.includes('export const metadata')) {
    const metaMatch = content.match(/export const metadata\s*=\s*\{/);
    if (metaMatch) {
      const idx = content.indexOf(metaMatch[0]) + metaMatch[0].length;
      content = content.slice(0, idx) + `\n  alternates: { canonical: '${canonical}' },` + content.slice(idx);
      fs.writeFileSync(pg, content, 'utf8');
      canonicalsAdded++;
    }
  }
}
console.log('  Canonicals added: ' + canonicalsAdded);

console.log('');
console.log('=====================================================');
console.log('  SUMMARY:');
console.log('    Sitemap rebuilt: ' + urls.length + ' URLs');
console.log('    Metadata fixed: ' + metaFixed + ' core pages');
console.log('    Canonicals added: ' + canonicalsAdded);
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Fix sitemap + metadata + canonicals — all ' + urls.length + ' pages"');
console.log('  git push origin main');
console.log('');
console.log('Then re-run: node audit_wct.js');
