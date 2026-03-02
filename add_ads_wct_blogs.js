const fs = require('fs');

const BLOG_SLOT = "3248634657";

const blogs = [
  'average-reading-speed',
  'average-typing-speed',
  'how-many-hashtags-to-use',
  'how-many-words-in-a-novel',
  'how-many-words-per-page',
  'how-to-count-words-online',
  'how-to-improve-readability-score',
  'how-to-write-meta-descriptions',
  'how-to-write-twitter-thread',
  'ideal-blog-post-length-for-seo',
  'what-is-keyword-density',
];

let success = 0;
let skipped = 0;

blogs.forEach(blog => {
  const path = `app/blog/${blog}/page.js`;
  if (!fs.existsSync(path)) { console.log(`⚠️  Not found: ${path}`); skipped++; return; }

  let f = fs.readFileSync(path, 'utf8');

  if (f.includes('AdUnit')) { console.log(`⏭️  Already has ad: ${blog}`); skipped++; return; }

  // Add import after first import line
  f = f.replace(/^(import .+)/m, `$1\nimport AdUnit from '../../../components/AdUnit'`);

  // Try inserting before FAQ section, or before the closing of main content div
  if (f.includes('{/* FAQ */}')) {
    f = f.replace(`{/* FAQ */}`, `<AdUnit slot="${BLOG_SLOT}" />\n\n      {/* FAQ */}`);
  } else if (f.includes('<section') && f.indexOf('<section', f.indexOf('<section') + 1) > -1) {
    // Insert before second <section tag (after intro)
    const firstSection = f.indexOf('<section');
    const secondSection = f.indexOf('<section', firstSection + 1);
    f = f.slice(0, secondSection) + `<AdUnit slot="${BLOG_SLOT}" />\n\n      ` + f.slice(secondSection);
  } else {
    // Fallback: insert before </article> or </main>
    f = f.replace(`</article>`, `<AdUnit slot="${BLOG_SLOT}" />\n\n      </article>`);
  }

  fs.writeFileSync(path, f, 'utf8');
  console.log(`✅ ${blog}`);
  success++;
});

console.log(`\n🎉 Done! ${success} blog articles updated, ${skipped} skipped.`);
