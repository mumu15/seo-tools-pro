const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, 'app');
const DOMAIN = 'https://www.wordcountertool.net';

console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  FIX: Add canonical URLs to pages missing them          ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('');

// Pages flagged by Google Search Console
const pagesToFix = [
  { path: 'blog/chinese-writing-tips-for-better-content', canonical: '/blog/chinese-writing-tips-for-better-content' },
  { path: 'blog/how-long-should-a-youtube-script-be', canonical: '/blog/how-long-should-a-youtube-script-be' },
  { path: 'word-counter/language', canonical: '/word-counter/language' },
  { path: 'words-to-pages/20000-words', canonical: '/words-to-pages/20000-words' },
  { path: 'readability-checker', canonical: '/readability-checker' },
];

let fixed = 0;

pagesToFix.forEach(({ path: pagePath, canonical }) => {
  const filePath = path.join(APP, pagePath, 'page.js');
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Not found: ${pagePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has canonical
  if (content.includes('canonical')) {
    console.log(`  ⏭️  Already has canonical: ${pagePath}`);
    return;
  }

  const fullCanonical = DOMAIN + canonical;

  // Case 1: Has export const metadata = {
  if (content.includes('export const metadata')) {
    content = content.replace(
      /export const metadata\s*=\s*\{/,
      `export const metadata = {\n  alternates: { canonical: '${fullCanonical}' },`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ ${pagePath}`);
    fixed++;
    return;
  }

  // Case 2: Has generateMetadata function
  if (content.includes('generateMetadata')) {
    content = content.replace(
      /return\s*\{/,
      `return {\n    alternates: { canonical: '${fullCanonical}' },`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ ${pagePath}`);
    fixed++;
    return;
  }

  // Case 3: No metadata at all — add it
  // Find the last import line and add metadata after it
  const lines = content.split('\n');
  let lastImportLine = -1;
  lines.forEach((line, i) => {
    if (line.trim().startsWith('import ')) lastImportLine = i;
  });

  const metaBlock = `\nexport const metadata = {\n  alternates: { canonical: '${fullCanonical}' },\n};\n`;

  if (lastImportLine > -1) {
    lines.splice(lastImportLine + 1, 0, metaBlock);
  } else {
    lines.unshift(metaBlock);
  }

  content = lines.join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ ${pagePath} (added new metadata block)`);
  fixed++;
});

// Also scan for ALL pages missing canonical and fix them
console.log('');
console.log('── Scanning all pages for missing canonicals ──');

let bulkFixed = 0;

function walkPages(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(item => {
    if (item === 'node_modules' || item === '.next' || item === 'components') return;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walkPages(full);
    else if (item === 'page.js') {
      let c = fs.readFileSync(full, 'utf8');
      if (c.includes('canonical')) return; // Already has one

      // Calculate URL path from file path
      const relPath = path.relative(APP, path.dirname(full)).replace(/\\/g, '/');
      const urlPath = '/' + relPath;
      
      // Skip dynamic routes like [slug]
      if (urlPath.includes('[')) return;
      
      const fullCanonical = DOMAIN + urlPath;

      if (c.includes('export const metadata')) {
        c = c.replace(
          /export const metadata\s*=\s*\{/,
          `export const metadata = {\n  alternates: { canonical: '${fullCanonical}' },`
        );
        fs.writeFileSync(full, c, 'utf8');
        bulkFixed++;
      }
    }
  });
}

walkPages(APP);
console.log(`  ✅ Added canonical to ${bulkFixed} additional pages`);

console.log('');
console.log(`Total: ${fixed + bulkFixed} pages fixed`);
console.log('');
console.log('Run:');
console.log('  git add . && git commit -m "Add canonical URLs to all pages" && git push origin master');
