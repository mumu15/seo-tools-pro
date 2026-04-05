const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const slugs = [
  'common-german-writing-mistakes',
  'how-to-count-words-in-german',
  'german-character-count-guide',
  'german-content-length-guide',
  'german-seo-content-strategy',
  'german-writing-tips-for-better-content',
];

let fixed = 0;

slugs.forEach(slug => {
  const filePath = path.join(blogDir, slug, 'page.js');
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  ${slug}/page.js not found — skipping`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const count = (content.match(/\/keyword-density-checker/g) || []).length;
  if (count > 0) {
    content = content.replace(/\/keyword-density-checker/g, '/keyword-density');
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    console.log(`  ✅ ${slug} — replaced ${count} occurrence(s)`);
  } else {
    console.log(`  ✔️  ${slug} — no bad links found`);
  }
});

console.log('');
console.log(`Fixed ${fixed} files. All /keyword-density-checker → /keyword-density`);
console.log('');
console.log('Now push:');
console.log('  git add .');
console.log('  git commit -m "Fix keyword-density links in German blogs"');
console.log('  git push origin master');
