const fs = require('fs');
const path = require('path');

console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  FIX IMPORTS — Repair all broken component import paths  ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('');

const appDir = path.join(__dirname, 'app');
let fixed = 0;
let scanned = 0;

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

// Components can be in two places:
// 1. /components/  (project root)
// 2. /app/components/  (inside app dir)
//
// For a page at app/blog/some-post/page.js:
//   depth from app = 2 (blog/some-post)
//   to reach /components/ → go up (depth+1) levels: ../../../components/X
//   to reach /app/components/ → go up (depth) levels: ../../components/X

const pages = findPages(appDir);
console.log(`Found ${pages.length} page.js files\n`);

for (const pg of pages) {
  let c = fs.readFileSync(pg, 'utf8');
  const before = c;
  scanned++;

  // Calculate depth from app dir
  const relFromApp = path.relative(appDir, path.dirname(pg)).replace(/\\/g, '/');
  const depth = (relFromApp === '' || relFromApp === '.') ? 0 : relFromApp.split('/').length;

  // Components that live at /components/ (one level above app/)
  // From app/blog/slug/page.js (depth=2): need ../../../components/ (depth+1 = 3 levels up)
  const rootComponentPrefix = '../'.repeat(depth + 1);

  // Components that live at /app/components/ (inside app dir)  
  // From app/blog/slug/page.js (depth=2): need ../../components/ (depth levels up)
  const appComponentPrefix = '../'.repeat(depth);

  // Known root-level components: Header, Footer, FaqSchema, BreadcrumbSchema, WebAppSchema
  const rootComponents = ['Header', 'Footer', 'FaqSchema', 'BreadcrumbSchema', 'WebAppSchema'];

  // Known app/components: AdUnit, AuthorSchema, HreflangTags  
  const appComponents = ['AdUnit', 'AuthorSchema', 'HreflangTags'];

  // Fix ANY broken import path for root components
  // Match patterns like: './././components/X', '././components/X', './components/X',
  // '../../components/X' (wrong depth), etc.
  rootComponents.forEach(comp => {
    // Match any import of this component with any path
    const importRegex = new RegExp(
      `(import\\s+(?:\\{[^}]*\\}|\\w+)\\s+from\\s+['"])([^'"]*\\/?${comp})(['"])`,
      'g'
    );
    c = c.replace(importRegex, (match, prefix, importPath, suffix) => {
      const correctPath = `${rootComponentPrefix}components/${comp}`;
      if (importPath !== correctPath) {
        return `${prefix}${correctPath}${suffix}`;
      }
      return match;
    });
  });

  // Fix app-level component imports
  appComponents.forEach(comp => {
    const importRegex = new RegExp(
      `(import\\s+(?:\\{[^}]*\\}|\\w+)\\s+from\\s+['"])([^'"]*\\/?${comp})(['"])`,
      'g'
    );
    c = c.replace(importRegex, (match, prefix, importPath, suffix) => {
      // Try app/components path first
      const appPath = `${appComponentPrefix}components/${comp}`;
      // If the component also exists at root level, keep whatever is closer
      const correctPath = appPath;
      if (importPath !== correctPath) {
        return `${prefix}${correctPath}${suffix}`;
      }
      return match;
    });
  });

  // Also fix ArticleSchema import (it's exported from AuthorSchema)
  const articleRegex = /import\s+\{[^}]*ArticleSchema[^}]*\}\s+from\s+['"]([^'"]+)['"]/g;
  c = c.replace(articleRegex, (match, importPath) => {
    const correctPath = `${appComponentPrefix}components/AuthorSchema`;
    return match.replace(importPath, correctPath);
  });

  // Fix next/link and next/image (should never have relative paths)
  c = c.replace(/from ['"][^'"]*\/(next\/link)['"]/g, "from 'next/link'");
  c = c.replace(/from ['"][^'"]*\/(next\/image)['"]/g, "from 'next/image'");

  // Clean up any double-dot artifacts: ././ → ../  or ././ → ./
  c = c.replace(/['"]\.\/\.\//g, (m) => m.replace('././', '../'));

  if (c !== before) {
    fs.writeFileSync(pg, c, 'utf8');
    const rel = path.relative(__dirname, pg).replace(/\\/g, '/');
    console.log(`  ✅ Fixed: ${rel}`);
    fixed++;
  }
}

console.log(`\nScanned ${scanned} files, fixed ${fixed}`);

// ── Also check for common issues ──
console.log('\n── Checking for remaining issues ──');

let issues = 0;
for (const pg of pages) {
  const c = fs.readFileSync(pg, 'utf8');
  const rel = path.relative(__dirname, pg).replace(/\\/g, '/');
  
  // Check for ././ patterns
  if (c.includes("'././") || c.includes('"././')) {
    console.log(`  ⚠️  Still has ././ pattern: ${rel}`);
    issues++;
  }
  
  // Check for ./. patterns  
  if (/from ['"]\.\/\.['"]/g.test(c)) {
    console.log(`  ⚠️  Has ./ only import: ${rel}`);
    issues++;
  }
}

if (issues === 0) {
  console.log('  ✅ No remaining import issues found');
}

console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log(`║  DONE — ${fixed} files fixed, ${issues} remaining issues        ║`);
console.log('╠═══════════════════════════════════════════════════════════╣');
console.log('║  Run:                                                     ║');
console.log('║  git add . && git commit -m "Fix import paths" && git push║');
console.log('╚═══════════════════════════════════════════════════════════╝');
