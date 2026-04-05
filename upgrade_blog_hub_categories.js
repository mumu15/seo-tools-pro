const fs = require('fs');
const path = require('path');

const BLOG = path.join(__dirname, 'app', 'blog');

console.log('\n=====================================================');
console.log('  UPGRADE BLOG HUB: Categorized English Posts');
console.log('  + Scan for short posts needing expansion');
console.log('=====================================================\n');

// ============================================================
// STEP 1: Scan ALL blog directories and measure content size
// ============================================================
const dirs = fs.readdirSync(BLOG).filter(d => {
  const p = path.join(BLOG, d, 'page.js');
  return fs.statSync(path.join(BLOG, d)).isDirectory() && fs.existsSync(p);
});

console.log('  Total blog directories found: ' + dirs.length);

// Separate English from language blogs
const langPrefixes = ['arabic','chinese','dutch','french','german','hindi','italian','japanese','korean','polish','portuguese','russian','spanish','swedish','turkish'];
const isLang = (slug) => langPrefixes.some(l => slug.startsWith(l + '-') || slug.startsWith('common-' + l));

const englishSlugs = dirs.filter(d => !isLang(d));
const langSlugs = dirs.filter(d => isLang(d));

console.log('  English blogs: ' + englishSlugs.length);
console.log('  Language blogs: ' + langSlugs.length);

// Check sizes
const shortPosts = [];
const allEnglish = [];

for (const slug of englishSlugs) {
  const file = path.join(BLOG, slug, 'page.js');
  const content = fs.readFileSync(file, 'utf8');
  const size = content.length;
  
  // Extract title from metadata or h1
  let title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) title = titleMatch[1];
  
  allEnglish.push({ slug, title, size });
  
  if (size < 10000) {
    shortPosts.push({ slug, title, size });
  }
}

console.log('\n  Posts under 10K chars (may need expansion):');
if (shortPosts.length === 0) {
  console.log('    ✅ None — all posts are 10K+ chars');
} else {
  shortPosts.sort((a, b) => a.size - b.size);
  shortPosts.forEach(p => console.log('    ⚠️  ' + p.slug + ' (' + p.size + ' chars)'));
}

// ============================================================
// STEP 2: Categorize English posts
// ============================================================
const categories = {
  'Word Count Guides': [
    'how-many-words-per-page','how-many-words-in-a-novel','how-many-words-in-a-paragraph',
    'how-many-words-in-a-short-story','how-many-words-in-a-speech','how-many-words-in-a-resume',
    'how-many-words-in-a-cover-letter','how-many-words-in-a-college-essay','how-many-words-in-a-dissertation',
    'how-many-words-in-a-blog-post','how-many-words-in-a-podcast-episode','how-many-words-in-a-personal-statement',
    'how-many-words-in-a-grant-proposal','ebook-word-count-guide',
  ],
  'Writing How-Tos': [
    'how-to-write-meta-descriptions','how-to-write-twitter-thread','how-to-write-blog-introduction',
    'how-to-write-product-descriptions','how-to-write-headline-formulas','how-to-use-keywords-in-blog-posts',
    'how-to-write-for-skimmable-content','how-to-write-email-subject-lines','how-to-write-blog-conclusion',
    'how-to-write-seo-title-tags','how-to-write-faster','how-to-write-wedding-speech',
  ],
  'SEO & Content Strategy': [
    'ideal-blog-post-length-for-seo','what-is-keyword-density','seo-content-length-guide',
    'long-tail-keywords-guide','how-to-improve-readability-score','what-is-flesch-kincaid-score',
  ],
  'Platform & Social Media': [
    'how-many-characters-in-a-tweet','instagram-caption-length','how-many-hashtags-to-use',
    'ideal-linkedin-post-length','tiktok-caption-length-guide','email-length-best-practices',
    'google-ads-character-limits','how-long-should-a-youtube-script-be','reddit-post-length',
    'substack-newsletter-length','chatgpt-prompt-length','twitter-character-limit-2026',
  ],
  'Reading & Writing Speed': [
    'average-reading-speed','average-typing-speed','how-to-type-faster',
    'words-per-minute-reading-guide','how-to-count-words-online',
  ],
  'Best Tools & Resources': [
    'best-free-writing-tools-2026','best-ai-writing-tools-2026',
  ],
};

// ============================================================
// STEP 3: Build the upgraded blog hub page
// ============================================================
const hubFile = path.join(BLOG, 'page.js');

// Build category sections for English posts
let englishSections = '';
for (const [catName, slugs] of Object.entries(categories)) {
  const posts = slugs
    .map(s => allEnglish.find(p => p.slug === s))
    .filter(Boolean);
  
  if (posts.length === 0) continue;
  
  englishSections += `
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                ${catName}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                ${posts.map(p => {
                  const titleEsc = p.title.replace(/'/g, "\\'").replace(/&/g, '&amp;');
                  return `<Link href="/blog/${p.slug}" className="result-box hover:border-emerald-500/30 transition-colors group">
                  <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors text-sm">${titleEsc}</h3>
                </Link>`;
                }).join('\n                ')}
              </div>
            </section>`;
}

// Build language sections
const langGroups = {};
for (const slug of langSlugs) {
  const lang = langPrefixes.find(l => slug.startsWith(l + '-') || slug.startsWith('common-' + l));
  if (!lang) continue;
  if (!langGroups[lang]) langGroups[lang] = [];
  const file = path.join(BLOG, slug, 'page.js');
  const content = fs.readFileSync(file, 'utf8');
  let title = slug;
  const m = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (m) title = m[1];
  langGroups[lang].push({ slug, title });
}

const langNames = {
  arabic:'Arabic',chinese:'Chinese',dutch:'Dutch',french:'French',german:'German',
  hindi:'Hindi',italian:'Italian',japanese:'Japanese',korean:'Korean',polish:'Polish',
  portuguese:'Portuguese',russian:'Russian',spanish:'Spanish',swedish:'Swedish',turkish:'Turkish'
};

let langSections = '';
for (const [lang, posts] of Object.entries(langGroups).sort()) {
  const name = langNames[lang] || lang;
  langSections += `
            <details className="result-box mb-3">
              <summary className="text-white font-bold cursor-pointer flex items-center justify-between">
                <span>${name} (${posts.length} articles)</span>
                <span className="text-emerald-400 text-xs">Click to expand</span>
              </summary>
              <div className="mt-4 grid gap-2">
                ${posts.map(p => {
                  const t = p.title.replace(/'/g, "\\'").replace(/&/g, '&amp;');
                  return `<Link href="/blog/${p.slug}" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">${t}</Link>`;
                }).join('\n                ')}
              </div>
            </details>`;
}

const hubContent = `import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Writing Guides, SEO Tips & Word Count Resources | WordCounterTool',
  description: 'Expert guides on word count, writing, SEO, readability, and content strategy. ${allEnglish.length}+ English articles plus guides in 15 languages.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
}

export default function BlogHub() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Blog</h1>
        <p className="text-slate-400 mb-12 max-w-2xl">Expert guides on word count, writing techniques, SEO content strategy, social media optimization, and readability. ${allEnglish.length}+ English articles and guides in 15 languages.</p>

        <div className="space-y-4">
${englishSections}

          <section className="mt-16 mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              International Guides (15 Languages)
            </h2>
            <p className="text-slate-400 text-sm mb-6">Writing guides and SEO tips in native languages — Arabic, Chinese, Dutch, French, German, Hindi, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Swedish, and Turkish.</p>
            <div className="space-y-0">
${langSections}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
`;

// Write the hub
fs.writeFileSync(hubFile, hubContent, 'utf8');
console.log('\n  ✅ Blog hub upgraded with category organization');
console.log('  ✅ ' + Object.keys(categories).length + ' English categories');
console.log('  ✅ ' + Object.keys(langGroups).length + ' language sections (collapsible)');
console.log('  ✅ ' + allEnglish.length + ' English posts organized');
console.log('  ✅ ' + langSlugs.length + ' language posts in expandable sections');

console.log('\n=====================================================');
console.log('  BLOG HUB UPGRADE COMPLETE');
console.log('=====================================================');
console.log('\nDeploy:');
console.log('  git add .');
console.log('  git commit -m "Upgrade blog hub with categorized English posts + collapsible language sections"');
console.log('  git push origin master\n');
