const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const slugs = [
  'common-italian-writing-mistakes',
  'how-to-count-words-in-italian',
  'italian-character-count-guide',
  'italian-content-length-guide',
  'italian-seo-content-strategy',
  'italian-writing-tips-for-better-content',
];

console.log('Fixing Italian apostrophes in page.js files...');
console.log('');

let totalFixes = 0;

slugs.forEach(slug => {
  const filePath = path.join(blogDir, slug, 'page.js');
  if (!fs.existsSync(filePath)) { console.log(`  SKIP ${slug}`); return; }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix 1: Inside array literal strings ['...l'italiano...'] 
  // Pattern: lines that have ['  and contain letter'letter inside quotes
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect array element lines: start with whitespace + [' or contain ', '
    if ((line.includes("['") || line.includes("', '")) && !line.includes('className') && !line.includes('href=')) {
      // This is likely an array literal string line
      // Fix: escape any letter'letter patterns that are Italian contractions
      lines[i] = line.replace(/([a-zA-ZÀ-ÿ])'([a-zA-ZÀ-ÿ])/g, "$1\\'$2");
    }
  }
  content = lines.join('\n');
  
  if (content !== original) {
    const diffCount = content.split("\\'").length - original.split("\\'").length;
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixes += diffCount;
    console.log(`  ✅ ${slug}: fixed ${diffCount} apostrophe(s)`);
  } else {
    console.log(`  ✔️  ${slug}: no changes needed`);
  }
});

console.log('');
console.log(`Total fixes: ${totalFixes}`);
console.log('');
console.log('git add . && git commit -m "Fix Italian apostrophes" && git push origin master');
