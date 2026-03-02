const fs = require('fs');

const TOOL_SLOT = "3763639977";
const BLOG_SLOT = "3248634657";

const tools = [
  'word-counter',
  'character-counter',
  'reading-time',
  'hashtag-counter',
  'sentence-counter',
  'readability-checker',
  'keyword-density',
  'twitter-thread-counter',
  'words-per-page',
  'words-per-minute',
  'meta-tag-generator',
];

let success = 0;
let skipped = 0;

// Add ads to all tools
tools.forEach(tool => {
  const path = `app/${tool}/page.js`;
  if (!fs.existsSync(path)) { console.log(`⚠️  Not found: ${path}`); skipped++; return; }

  let f = fs.readFileSync(path, 'utf8');

  // Skip if already has AdUnit
  if (f.includes('AdUnit')) { console.log(`⏭️  Already has ad: ${tool}`); skipped++; return; }

  // Add import
  f = f.replace(`import BreadcrumbSchema`, `import AdUnit from '../../components/AdUnit'\nimport BreadcrumbSchema`);

  // Add ad before Internal Link section
  f = f.replace(`{/* Internal Link */}`, `<AdUnit slot="${TOOL_SLOT}" />\n\n        {/* Internal Link */}`);
  f = f.replace(`{/* Internal Link to Blog */}`, `<AdUnit slot="${TOOL_SLOT}" />\n\n        {/* Internal Link to Blog */}`);

  fs.writeFileSync(path, f, 'utf8');
  console.log(`✅ ${tool}`);
  success++;
});

// Add ad to blog
const blogPath = 'app/blog/[slug]/page.js';
if (fs.existsSync(blogPath)) {
  let f = fs.readFileSync(blogPath, 'utf8');
  if (f.includes('AdUnit')) {
    console.log(`⏭️  Blog already has ad`);
  } else {
    f = f.replace(`import BreadcrumbSchema`, `import AdUnit from '../../../components/AdUnit'\nimport BreadcrumbSchema`);
    f = f.replace(`{/* FAQ */}`, `<AdUnit slot="${BLOG_SLOT}" />\n\n        {/* FAQ */}`);
    fs.writeFileSync(blogPath, f, 'utf8');
    console.log(`✅ blog/[slug]`);
    success++;
  }
} else {
  console.log(`⚠️  Blog page not found`);
}

console.log(`\n🎉 Done! ${success} files updated, ${skipped} skipped.`);
