const fs = require('fs');
const path = require('path');

// character-limits/[slug]/page.js is 3 levels deep:
// app/character-limits/[slug]/page.js
// So: Header/Footer = ../../../components/  AdUnit = ../../components/
//
// reading-time/for/[slug]/page.js is 4 levels deep — already correct
// word-count/for/[slug]/page.js is 4 levels deep — already correct

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix Header and Footer (4 levels → 3 levels)
  content = content.replace(
    /from '\.\.\/\.\.\/\.\.\/\.\.\/components\/(Header|Footer)'/g,
    "from '../../../components/$1'"
  );

  // Fix AdUnit (3 levels → 2 levels)
  content = content.replace(
    /from '\.\.\/\.\.\/\.\.\/components\/AdUnit'/g,
    "from '../../components/AdUnit'"
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Fixed: ' + filePath);
  } else {
    console.log('⏭  No change: ' + filePath);
  }
}

// Only fix character-limits pages (reading-time and word-count are fine)
const baseDir = path.join('app', 'character-limits');

if (!fs.existsSync(baseDir)) {
  console.log('❌ Directory not found: ' + baseDir);
  process.exit(1);
}

const entries = fs.readdirSync(baseDir, { withFileTypes: true });
entries.forEach(entry => {
  if (entry.isDirectory()) {
    const pageFile = path.join(baseDir, entry.name, 'page.js');
    if (fs.existsSync(pageFile)) {
      fixFile(pageFile);
    }
  }
});

// Also fix the character-limits index page (2 levels deep)
const indexFile = path.join(baseDir, 'page.js');
if (fs.existsSync(indexFile)) {
  let content = fs.readFileSync(indexFile, 'utf8');
  const original = content;
  content = content.replace(
    /from '\.\.\/\.\.\/\.\.\/components\/(Header|Footer)'/g,
    "from '../../components/$1'"
  );
  if (content !== original) {
    fs.writeFileSync(indexFile, content, 'utf8');
    console.log('✅ Fixed index: ' + indexFile);
  }
}

console.log('\n🎉 Done! Now run:');
console.log('  git add .');
console.log('  git commit -m "Fix import paths in character-limits pages"');
console.log('  git push origin master');
