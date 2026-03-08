const fs = require('fs');
const path = require('path');

// Fix all files in app/word-counter/for/ recursively
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace smart/straight apostrophes inside JS strings and JSX attributes
  // Strategy: replace ' with &apos; only inside string contexts
  // Targeted replacements for known problem patterns:

  // 1. In metadata description strings (single-quoted JS strings)
  // 2. In dangerouslySetInnerHTML strings
  // 3. In hardcoded JSX text

  // Replace all ' (apostrophe in words like you're, it's, don't, court's etc)
  // inside single-quoted strings by converting to template literals or using &apos;

  // Safest fix: replace apostrophes in words (letter'letter) with &apos;
  content = content.replace(/([a-zA-Z])'([a-zA-Z])/g, "$1&apos;$2");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Fixed: ' + filePath);
  } else {
    console.log('⏭  No change: ' + filePath);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.log('❌ Directory not found: ' + dir);
    return;
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.js')) {
      fixFile(fullPath);
    }
  }
}

walkDir(path.join('app', 'word-counter', 'for'));
console.log('\n🎉 Done! Now run: git add . && git commit -m "Fix apostrophe errors" && git push origin master');
