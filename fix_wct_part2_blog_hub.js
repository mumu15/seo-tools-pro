const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║  PART 2: BLOG HUB REDESIGN + LANGUAGE POST NOINDEX     ║');
console.log('║  Categories, Cards, Pagination, Architecture Fix        ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log('');

let fixes = 0;

// ═══════════════════════════════════════════════════════════════════════
// FIX 1: NOINDEX all 90 language blog posts
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 1: Noindex 90 language blog posts ──');

const LANG_SLUGS = [
  'arabic', 'chinese', 'dutch', 'french', 'german', 'hindi',
  'italian', 'japanese', 'korean', 'polish', 'portuguese',
  'russian', 'spanish', 'swedish', 'turkish'
];

const blogDir = path.join(APP, 'blog');
let noindexCount = 0;

if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir).forEach(slug => {
    const isLangPost = LANG_SLUGS.some(lang => slug.includes(lang));
    if (!isLangPost) return;

    const pagePath = path.join(blogDir, slug, 'page.js');
    if (!fs.existsSync(pagePath)) return;

    let content = fs.readFileSync(pagePath, 'utf8');

    // Add noindex to metadata if it has generateMetadata or export const metadata
    if (content.includes('export const metadata') && !content.includes('noindex')) {
      content = content.replace(
        /export const metadata\s*=\s*\{/,
        `export const metadata = {\n  robots: { index: false, follow: true },`
      );
      fs.writeFileSync(pagePath, content, 'utf8');
      noindexCount++;
    } else if (content.includes('generateMetadata') && !content.includes('noindex')) {
      // For dynamic metadata, add robots field
      content = content.replace(
        /return\s*\{/,
        `return {\n    robots: { index: false, follow: true },`
      );
      fs.writeFileSync(pagePath, content, 'utf8');
      noindexCount++;
    } else if (!content.includes('noindex') && !content.includes('metadata')) {
      // No metadata at all — wrap with metadata export at top
      const noindexMeta = `\nexport const metadata = {\n  robots: { index: false, follow: true },\n};\n\n`;
      // Insert after imports
      const lastImport = content.lastIndexOf('import ');
      if (lastImport > -1) {
        const endOfImportLine = content.indexOf('\n', content.indexOf('\n', lastImport) + 1);
        content = content.slice(0, endOfImportLine) + noindexMeta + content.slice(endOfImportLine);
      } else {
        content = noindexMeta + content;
      }
      fs.writeFileSync(pagePath, content, 'utf8');
      noindexCount++;
    }
  });
}
console.log(`  ✅ Added noindex to ${noindexCount} language blog posts`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 2: Define blog categories
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 2: Create category system ──');

const CATEGORIES = {
  'word-count-guides': {
    name: 'Word count guides',
    desc: 'How many words for essays, novels, resumes, dissertations, and every document type.',
    slugs: [
      'how-many-words-in-a-novel', 'how-many-words-in-a-short-story',
      'how-many-words-in-a-speech', 'how-many-words-in-a-cover-letter',
      'how-many-words-in-a-resume', 'how-many-words-in-a-paragraph',
      'how-many-words-per-page', 'how-many-words-in-a-college-essay',
      'how-many-words-in-a-dissertation', 'how-many-words-in-a-grant-proposal',
      'how-many-words-in-a-personal-statement', 'how-many-words-in-a-blog-post',
      'how-many-words-in-a-podcast-episode', 'ebook-word-count-guide',
    ],
  },
  'seo-writing': {
    name: 'SEO & content strategy',
    desc: 'Keyword density, meta descriptions, content length, and ranking strategies.',
    slugs: [
      'ideal-blog-post-length-for-seo', 'seo-content-length-guide',
      'what-is-keyword-density', 'how-to-write-meta-descriptions',
      'how-to-write-seo-title-tags', 'how-to-use-keywords-in-blog-posts',
      'long-tail-keywords-guide', 'how-to-write-product-descriptions',
      'what-is-flesch-kincaid-score', 'how-to-improve-readability-score',
    ],
  },
  'social-media': {
    name: 'Social media writing',
    desc: 'Character limits, caption lengths, and hashtag strategies for every platform.',
    slugs: [
      'how-many-characters-in-a-tweet', 'twitter-character-limit-2026',
      'instagram-caption-length', 'ideal-linkedin-post-length',
      'tiktok-caption-length-guide', 'reddit-post-length',
      'how-many-hashtags-to-use', 'how-to-write-twitter-thread',
      'how-to-write-email-subject-lines', 'email-length-best-practices',
      'substack-newsletter-length', 'google-ads-character-limits',
      'chatgpt-prompt-length',
    ],
  },
  'writing-craft': {
    name: 'Writing craft & technique',
    desc: 'Introductions, conclusions, headlines, readability, and writing skills.',
    slugs: [
      'how-to-write-blog-introduction', 'how-to-write-blog-conclusion',
      'how-to-write-headline-formulas', 'how-to-write-for-skimmable-content',
      'how-to-count-words-online', 'how-to-write-wedding-speech',
      'how-long-should-a-youtube-script-be',
    ],
  },
  'productivity': {
    name: 'Speed & productivity',
    desc: 'Typing speed, reading speed, writing faster, and productivity tools.',
    slugs: [
      'average-reading-speed', 'average-typing-speed',
      'words-per-minute-reading-guide', 'how-to-type-faster',
      'how-to-write-faster', 'best-ai-writing-tools-2026',
      'best-free-writing-tools-2026',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════
// FIX 3: Generate blog data file for the hub
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 3: Generate blog data config ──');

// Scan actual blog folders for metadata
const blogPosts = [];
if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir).forEach(slug => {
    const pagePath = path.join(blogDir, slug, 'page.js');
    if (!fs.existsSync(pagePath)) return;
    if (slug === '[slug]') return;

    // Skip language posts
    const isLangPost = LANG_SLUGS.some(lang => slug.includes(lang));
    if (isLangPost) return;

    const content = fs.readFileSync(pagePath, 'utf8');

    // Extract title from metadata
    let title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (titleMatch) title = titleMatch[1].replace(/ \| WordCounterTool\.net/g, '');

    // Extract description
    let desc = '';
    const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch) desc = descMatch[1];

    // Estimate word count from content
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\{[^}]*\}/g, ' ');
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 3).length;
    const readingTime = Math.max(3, Math.round(wordCount / 200));

    // Find category
    let category = 'general';
    for (const [catSlug, catData] of Object.entries(CATEGORIES)) {
      if (catData.slugs.includes(slug)) {
        category = catSlug;
        break;
      }
    }

    blogPosts.push({ slug, title, desc, category, readingTime });
  });
}

console.log(`  ✅ Found ${blogPosts.length} English blog posts`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 4: Create blog category data file
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 4: Create blog data file ──');

const blogDataFile = `// Auto-generated blog data — do not edit manually
export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

export const POSTS = ${JSON.stringify(blogPosts, null, 2)};
`;

ensureDir(path.join(APP, 'blog'));
fs.writeFileSync(path.join(APP, 'blog', 'blogData.js'), blogDataFile, 'utf8');
console.log('  ✅ blogData.js created');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 5: Redesign blog hub page with cards + categories + excerpts
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 5: Redesign blog hub page ──');

const slugToTitle = (s) => s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  .replace(/Seo/g, 'SEO').replace(/Ai/g, 'AI').replace(/Wpm/g, 'WPM')
  .replace(/ In /g, ' in ').replace(/ A /g, ' a ').replace(/ For /g, ' for ')
  .replace(/ Of /g, ' of ').replace(/ The /g, ' the ').replace(/ To /g, ' to ')
  .replace(/ Is /g, ' is ').replace(/ And /g, ' and ').replace(/ Or /g, ' or ');

const categoryIcons = {
  'word-count-guides': '📝',
  'seo-writing': '🔍',
  'social-media': '📱',
  'writing-craft': '✍️',
  'productivity': '⚡',
};

const categoryColors = {
  'word-count-guides': 'emerald',
  'seo-writing': 'blue',
  'social-media': 'purple',
  'writing-craft': 'amber',
  'productivity': 'cyan',
};

// Build posts array for each category
function buildCategoryPosts(catSlug) {
  return blogPosts
    .filter(p => p.category === catSlug)
    .map(p => `    { slug: '${p.slug}', title: '${p.title.replace(/'/g, "\\'")}', desc: '${(p.desc || '').slice(0, 120).replace(/'/g, "\\'")}', time: ${p.readingTime} }`)
    .join(',\n');
}

const newBlogHub = `import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'

export const metadata = {
  alternates: { canonical: '${DOMAIN}/blog' },
  title: 'Writing & SEO Blog — Guides, Tips & Data | WordCounterTool.net',
  description: '${blogPosts.length} free guides on word counting, SEO writing, readability, and content optimization. Expert advice backed by data, updated for 2026.',
  openGraph: {
    title: 'Writing & SEO Blog | WordCounterTool.net',
    description: '${blogPosts.length} free guides on word counting, SEO, and writing.',
    url: '${DOMAIN}/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const categories = [
${Object.entries(CATEGORIES).map(([slug, cat]) => {
  return `  {
    slug: '${slug}',
    name: '${cat.name}',
    desc: '${cat.desc}',
    icon: '${categoryIcons[slug] || '📄'}',
    posts: [\n${buildCategoryPosts(slug)}\n    ]
  }`;
}).join(',\n')}
]

// Posts not in any category
const uncategorized = [
${blogPosts
  .filter(p => p.category === 'general')
  .map(p => `  { slug: '${p.slug}', title: '${p.title.replace(/'/g, "\\'")}', desc: '${(p.desc || '').slice(0, 120).replace(/'/g, "\\'")}', time: ${p.readingTime} }`)
  .join(',\n')}
]

function PostCard({ slug, title, desc, time, cat }) {
  const colors = {
    'word-count-guides': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'seo-writing': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'social-media': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'writing-craft': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'productivity': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };
  const catNames = {
    'word-count-guides': 'Word count',
    'seo-writing': 'SEO',
    'social-media': 'Social media',
    'writing-craft': 'Writing',
    'productivity': 'Productivity',
  };

  return (
    <Link href={\'/blog/\' + slug} className="group block rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-emerald-500/30 hover:bg-slate-800/50">
      <div className="flex items-center gap-2 mb-3">
        {cat && catNames[cat] && (
          <span className={\`text-xs font-medium px-2 py-0.5 rounded-full border \${colors[cat] || 'bg-slate-800 text-slate-400 border-slate-700'}\`}>
            {catNames[cat]}
          </span>
        )}
        <span className="text-xs text-slate-500">{time} min read</span>
      </div>
      <h3 className="font-display font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 text-base leading-snug">{title}</h3>
      {desc && <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{desc}</p>}
    </Link>
  );
}

export default function BlogPage() {
  const allPosts = categories.flatMap(c => c.posts.map(p => ({ ...p, cat: c.slug })));
  const allWithUncat = [...allPosts, ...uncategorized.map(p => ({ ...p, cat: 'general' }))];

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Writing & SEO Blog</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {allWithUncat.length} free guides on word counting, content optimization, and writing craft. Backed by data, not fluff.
          </p>
        </div>

        {/* Category quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <a key={cat.slug} href={'#' + cat.slug} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-xs text-slate-500 ml-1">{cat.posts.length}</span>
            </a>
          ))}
        </div>

        <AdUnit slot="3333333333" />

        {/* Category sections */}
        {categories.map(cat => (
          <section key={cat.slug} id={cat.slug} className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl font-display font-bold text-white">{cat.name}</h2>
              <span className="text-sm text-slate-500">({cat.posts.length} guides)</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">{cat.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.posts.map(post => (
                <PostCard key={post.slug} {...post} cat={cat.slug} />
              ))}
            </div>
          </section>
        ))}

        {uncategorized.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-6">More guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uncategorized.map(post => (
                <PostCard key={post.slug} {...post} cat="general" />
              ))}
            </div>
          </section>
        )}

        <AdUnit slot="4444444444" />
      </main>
      <Footer />
    </>
  );
}
`;

fs.writeFileSync(path.join(blogDir, 'page.js'), newBlogHub, 'utf8');
console.log('  ✅ Blog hub page redesigned with cards + categories');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 6: Create individual category pages
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 6: Create category pages ──');

let catPages = 0;
Object.entries(CATEGORIES).forEach(([catSlug, catData]) => {
  const catDir = path.join(blogDir, 'category', catSlug);
  ensureDir(catDir);

  const catPosts = blogPosts.filter(p => p.category === catSlug);

  const catPage = `import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: '${DOMAIN}/blog/category/${catSlug}' },
  title: '${catData.name} — Writing & SEO Guides | WordCounterTool.net',
  description: '${catData.desc} ${catPosts.length} free guides updated for 2026.',
  openGraph: {
    title: '${catData.name} | WordCounterTool.net Blog',
    description: '${catData.desc}',
    url: '${DOMAIN}/blog/category/${catSlug}',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
${catPosts.map(p => `  { slug: '${p.slug}', title: '${p.title.replace(/'/g, "\\'")}', desc: '${(p.desc || '').slice(0, 150).replace(/'/g, "\\'")}', time: ${p.readingTime} }`).join(',\n')}
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '${DOMAIN}' },
        { name: 'Blog', url: '${DOMAIN}/blog' },
        { name: '${catData.name}', url: '${DOMAIN}/blog/category/${catSlug}' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">${categoryIcons[catSlug] || '📄'} ${catData.name}</h1>
        <p className="text-lg text-slate-400 mb-8">${catData.desc}</p>

        <AdUnit slot="3333333333" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {posts.map(post => (
            <Link key={post.slug} href={'/blog/' + post.slug} className="group block rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-emerald-500/30 hover:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-slate-500">{post.time} min read</span>
              </div>
              <h2 className="font-display font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h2>
              {post.desc && <p className="text-sm text-slate-400 leading-relaxed">{post.desc}</p>}
            </Link>
          ))}
        </div>

        <AdUnit slot="4444444444" />
      </main>
      <Footer />
    </>
  );
}
`;

  fs.writeFileSync(path.join(catDir, 'page.js'), catPage, 'utf8');
  catPages++;
});
console.log(`  ✅ Created ${catPages} category pages`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 7: Update sitemap to include category pages
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 7: Update sitemap with categories ──');

const sitemapPath = path.join(APP, 'sitemap.js');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');

  // Add category URLs if not present
  const catUrls = Object.keys(CATEGORIES).map(s => `/blog/category/${s}`);
  let addedCats = 0;
  catUrls.forEach(url => {
    if (!sitemap.includes(url)) {
      sitemap = sitemap.replace(
        /return \[/,
        `return [\n    { url: "${url}", priority: 0.6, freq: "weekly" },`
      );
      addedCats++;
    }
  });

  // Remove language blog posts from sitemap
  LANG_SLUGS.forEach(lang => {
    const patterns = [
      `how-to-count-words-in-${lang}`,
      `${lang}-character-count-guide`,
      `${lang}-seo-content-strategy`,
      `${lang}-writing-tips`,
      `common-${lang}-writing-mistakes`,
      `${lang}-content-length-guide`,
    ];
    patterns.forEach(p => {
      const regex = new RegExp(`\\s*\\{\\s*url:\\s*"/blog/${p}"[^}]*\\},?`, 'g');
      sitemap = sitemap.replace(regex, '');
    });
  });

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`  ✅ Added ${addedCats} category URLs, removed language blog URLs from sitemap`);
  fixes++;
}

// ═══════════════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════════════
console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log(`║  PART 2 COMPLETE — ${fixes} fixes applied                    ║`);
console.log('╠══════════════════════════════════════════════════════════╣');
console.log('║  ✅ ${noindexCount} language posts noindexed                      ║');
console.log('║  ✅ Blog hub redesigned with cards + categories         ║');
console.log('║  ✅ ${catPages} category pages created                        ║');
console.log('║  ✅ Sitemap updated                                     ║');
console.log('║  Next: node fix_wct_part3_humanize_blogs.js             ║');
console.log('╚══════════════════════════════════════════════════════════╝');
