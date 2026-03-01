const fs = require('fs');

const links = [
  {
    file: 'app/word-counter/page.js',
    slug: 'how-to-count-words-online',
    title: 'How to Count Words Online: The Complete Free Guide (2026)',
  },
  {
    file: 'app/keyword-density/page.js',
    slug: 'what-is-keyword-density',
    title: 'What is Keyword Density? The Complete SEO Guide (2026)',
  },
  {
    file: 'app/meta-tag-generator/page.js',
    slug: 'how-to-write-meta-descriptions',
    title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)',
  },
  {
    file: 'app/readability-checker/page.js',
    slug: 'how-to-improve-readability-score',
    title: 'How to Improve Your Readability Score (Flesch-Kincaid Guide)',
  },
  {
    file: 'app/character-counter/page.js',
    slug: 'how-to-count-words-online',
    title: 'How to Count Words Online: The Complete Free Guide (2026)',
  },
  {
    file: 'app/sentence-counter/page.js',
    slug: 'ideal-blog-post-length-for-seo',
    title: 'Ideal Blog Post Length for SEO in 2026',
  },
  {
    file: 'app/words-per-page/page.js',
    slug: 'how-many-words-per-page',
    title: 'How Many Words Per Page? Complete Guide (2026)',
  },
  {
    file: 'app/hashtag-counter/page.js',
    slug: 'how-many-hashtags-to-use',
    title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)',
  },
  {
    file: 'app/twitter-thread-counter/page.js',
    slug: 'how-to-write-twitter-thread',
    title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)',
  },
  {
    file: 'app/reading-time/page.js',
    slug: 'average-reading-speed',
    title: 'Average Reading Speed: How Fast Do People Read? (2026)',
  },
  {
    file: 'app/words-per-minute/page.js',
    slug: 'average-typing-speed',
    title: 'Average Typing Speed: What is Good WPM in 2026?',
  },
];

const linkBlock = (slug, title) => `
          {/* Internal Link to Blog */}
          <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
            <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
            <a href="/blog/${slug}" className="text-emerald-400 font-semibold hover:underline">${title}</a>
          </div>`;

let fixed = 0;
let skipped = 0;

links.forEach(({ file, slug, title }) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Not found: ${file}`);
    skipped++;
    return;
  }
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(`/blog/${slug}`)) {
    console.log(`⏭️  Already has link: ${file}`);
    skipped++;
    return;
  }
  content = content.replace(
    '      <Footer />',
    `${linkBlock(slug, title)}\n      <Footer />`
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ Added link to: ${file}`);
  fixed++;
});

console.log(`\n🎉 Done! ${fixed} files updated, ${skipped} skipped.`);
console.log('Run: git add . && git commit -m "Add internal links from tools to blog articles" && git push');
