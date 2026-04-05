const fs = require('fs');
const path = require('path');

// FIX 2: Fix remaining double title tags
// Problem: Some pages have titles like "Title | WordCounterTool | WordCounterTool.net"
// or "Title | WordCounterTool.net | WordCounterTool.net"
// The layout.js template is already '%s' (no auto-append), so the fix is
// removing duplicate branding from page-level title strings.
//
// Strategy: Each page title should end with AT MOST one "| WordCounterTool.net"
// If it has two brand suffixes, remove the extra one.
// Also normalize: "| WordCounterTool" (without .net) to "| WordCounterTool.net"

const APP_DIR = path.join(__dirname, 'app');
let totalFixed = 0;
let filesScanned = 0;

function findPageFiles(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Skip node_modules and .next
      if (item.name === 'node_modules' || item.name === '.next') continue;
      results.push(...findPageFiles(fullPath));
    } else if (item.name === 'page.js' || item.name === 'page.jsx') {
      results.push(fullPath);
    }
  }
  return results;
}

const pageFiles = findPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} page files to scan\n`);

pageFiles.forEach(file => {
  filesScanned++;
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  const relPath = path.relative(__dirname, file);

  // Pattern 1: "Title | WordCounterTool | WordCounterTool.net"
  // Fix: "Title | WordCounterTool.net"
  content = content.replace(
    /(\| WordCounterTool)\s*\|\s*WordCounterTool\.net/g,
    '| WordCounterTool.net'
  );

  // Pattern 2: "Title | WordCounterTool.net | WordCounterTool.net"
  // Fix: "Title | WordCounterTool.net"
  content = content.replace(
    /\| WordCounterTool\.net\s*\|\s*WordCounterTool\.net/g,
    '| WordCounterTool.net'
  );

  // Pattern 3: "Title | WordCounterTool' (without .net, in metadata title)
  // Normalize to "| WordCounterTool.net" BUT only if it's at the end of a string
  // Be careful not to match partial strings
  content = content.replace(
    /\| WordCounterTool(['"`])/g,
    (match, quote) => `| WordCounterTool.net${quote}`
  );

  // Pattern 4: Double branding in openGraph titles too
  content = content.replace(
    /\| WordCounterTool\.net\s*\|\s*WordCounterTool/g,
    '| WordCounterTool.net'
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ FIXED: ${relPath}`);
    totalFixed++;
  }
});

console.log(`\n─────────────────────────────────`);
console.log(`Scanned: ${filesScanned} files`);
console.log(`Fixed:   ${totalFixed} files`);
console.log(`─────────────────────────────────`);

if (totalFixed === 0) {
  console.log('\n⚠️  No double titles found. They may have already been fixed.');
} else {
  console.log('\nNow run:');
  console.log('  git add . && git commit -m "Fix double title tags across all pages" && git push origin master');
}
