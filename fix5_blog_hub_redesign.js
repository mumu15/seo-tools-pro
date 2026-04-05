const fs = require('fs');
const path = require('path');

// FIX 5: Redesign blog hub page with cards and categories
// - Show only English posts (hide noindexed language posts)
// - Group into 5 categories with quick-nav tabs
// - Each post as a card with title, excerpt, reading time, category tag
// - Fix title to remove double branding

const BLOG_DIR = path.join(__dirname, 'app', 'blog');

// Language keywords to filter out
const LANG_KEYS = [
  'arabic', 'chinese', 'dutch', 'french', 'german', 'hindi',
  'italian', 'japanese', 'korean', 'polish', 'portuguese',
  'russian', 'spanish', 'swedish', 'turkish'
];

// Scan all blog post folders
const allFolders = fs.readdirSync(BLOG_DIR).filter(f => {
  const fp = path.join(BLOG_DIR, f);
  return fs.statSync(fp).isDirectory() && fs.existsSync(path.join(fp, 'page.js'));
});

// Filter out language posts
const englishPosts = allFolders.filter(slug => {
  return !LANG_KEYS.some(lang => slug.includes(lang));
});

console.log(`Total blog folders: ${allFolders.length}`);
console.log(`English posts: ${englishPosts.length}`);
console.log(`Language posts (hidden): ${allFolders.length - englishPosts.length}`);

// Category definitions with slug patterns
const categories = [
  {
    id: 'word-count',
    name: 'Word Count Guides',
    emoji: '📝',
    desc: 'How many words for essays, blog posts, resumes, and more',
    patterns: ['how-many-words', 'word-count', 'words-per-page', 'words-in-a', 'blog-post-length', 'ideal-blog'],
  },
  {
    id: 'seo',
    name: 'SEO & Content Strategy',
    emoji: '🔍',
    desc: 'Keyword density, meta descriptions, and ranking tactics',
    patterns: ['seo', 'keyword', 'meta-description', 'meta-tag', 'content-length', 'content-strategy', 'backlink', 'google', 'search-engine', 'anchor-text', 'internal-link', 'content-audit', 'evergreen'],
  },
  {
    id: 'social',
    name: 'Social Media Writing',
    emoji: '📱',
    desc: 'Twitter, Instagram, LinkedIn, TikTok character limits and tips',
    patterns: ['twitter', 'tweet', 'instagram', 'linkedin', 'tiktok', 'hashtag', 'social-media', 'facebook', 'youtube', 'thread', 'caption', 'bio-'],
  },
  {
    id: 'writing',
    name: 'Writing Craft',
    emoji: '✍️',
    desc: 'Introductions, conclusions, headlines, and readability',
    patterns: ['introduction', 'conclusion', 'headline', 'readability', 'skimmable', 'grammar', 'paragraph', 'sentence-length', 'write-better', 'copywriting', 'product-description', 'email-subject', 'call-to-action', 'passive-voice', 'power-words', 'transition-words', 'how-to-write'],
  },
  {
    id: 'productivity',
    name: 'Speed & Productivity',
    emoji: '⚡',
    desc: 'Reading speed, typing speed, AI tools, and writing faster',
    patterns: ['reading-speed', 'typing-speed', 'reading-time', 'writing-faster', 'ai-tool', 'ai-writing', 'chatgpt', 'speed', 'wpm', 'words-per-minute', 'productivity'],
  },
];

// Helper: slug to readable title
function slugToTitle(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace(/Seo/g, 'SEO')
    .replace(/Ai /g, 'AI ')
    .replace(/Chatgpt/g, 'ChatGPT')
    .replace(/Linkedin/g, 'LinkedIn')
    .replace(/Tiktok/g, 'TikTok')
    .replace(/Youtube/g, 'YouTube')
    .replace(/Url/g, 'URL')
    .replace(/Wpm/g, 'WPM')
    .replace(/Faq/g, 'FAQ');
}

// Helper: generate a short excerpt from slug
function slugToExcerpt(slug) {
  const title = slugToTitle(slug).toLowerCase();
  if (slug.includes('how-many-words')) return 'Complete word count guide with ranges by type and purpose.';
  if (slug.includes('how-many-characters')) return 'Character limits and best practices for optimal engagement.';
  if (slug.includes('ideal-blog')) return 'Data-backed analysis of the word counts that rank on page 1.';
  if (slug.includes('reading-speed')) return 'Average WPM by age, tips to read faster, and speed benchmarks.';
  if (slug.includes('keyword-density')) return 'What density to aim for, how to check it, and common mistakes.';
  if (slug.includes('readability')) return 'Flesch-Kincaid scores explained with tips to improve yours.';
  if (slug.includes('hashtag')) return 'How many hashtags to use and which ones actually work.';
  if (slug.includes('tweet') || slug.includes('twitter')) return 'Character limits, thread tips, and engagement strategies.';
  if (slug.includes('instagram')) return 'Caption lengths, hashtag counts, and bio optimization.';
  if (slug.includes('linkedin')) return 'Post lengths, article tips, and profile optimization.';
  if (slug.includes('tiktok')) return 'Caption limits, hashtag strategies, and description tips.';
  if (slug.includes('meta-description') || slug.includes('meta-tag')) return 'Write meta tags that improve click-through rates from search.';
  if (slug.includes('headline')) return 'Formulas and examples for headlines that get clicks.';
  if (slug.includes('introduction')) return 'Hook readers in the first 3 sentences with these techniques.';
  if (slug.includes('conclusion')) return 'End strong with conclusions that drive action.';
  if (slug.includes('seo')) return 'Practical SEO tactics for writers and content creators.';
  if (slug.includes('typing')) return 'Test and improve your typing speed with proven methods.';
  if (slug.includes('ai-')) return 'How AI tools fit into a modern writing workflow.';
  if (slug.includes('email')) return 'Subject lines and email copy that get opened and read.';
  if (slug.includes('resume')) return 'Word counts and formatting for resumes that get interviews.';
  if (slug.includes('essay')) return 'Word count targets for every essay type and academic level.';
  if (slug.includes('passive-voice')) return 'When to use it, when to avoid it, and how to fix it.';
  if (slug.includes('paragraph')) return 'Ideal paragraph lengths for web, academic, and business writing.';
  if (slug.includes('copywriting')) return 'Write copy that converts with proven frameworks and examples.';
  // Generic fallback
  return 'Practical guide with examples, benchmarks, and actionable tips.';
}

// Helper: estimate reading time from slug context
function estimateReadTime(slug) {
  if (slug.includes('guide') || slug.includes('ideal') || slug.includes('complete')) return '9 min';
  if (slug.includes('how-many') || slug.includes('what-is')) return '5 min';
  if (slug.includes('tips') || slug.includes('tools') || slug.includes('best')) return '7 min';
  if (slug.includes('vs') || slug.includes('comparison')) return '6 min';
  return '6 min';
}

// Categorize each post
const categorized = {};
categories.forEach(cat => { categorized[cat.id] = []; });
const uncategorized = [];

englishPosts.forEach(slug => {
  let matched = false;
  for (const cat of categories) {
    if (cat.patterns.some(p => slug.includes(p))) {
      categorized[cat.id].push(slug);
      matched = true;
      break;
    }
  }
  if (!matched) {
    uncategorized.push(slug);
  }
});

// Put uncategorized into "Writing Craft" as default
uncategorized.forEach(slug => {
  categorized['writing'].push(slug);
});

// Log categories
categories.forEach(cat => {
  console.log(`${cat.emoji} ${cat.name}: ${categorized[cat.id].length} posts`);
});
if (uncategorized.length > 0) {
  console.log(`(${uncategorized.length} uncategorized → added to Writing Craft)`);
}

// Build the posts data for each category
function buildPostsData(catId) {
  return categorized[catId].map(slug => {
    const title = slugToTitle(slug);
    const excerpt = slugToExcerpt(slug);
    const readTime = estimateReadTime(slug);
    return `    { slug: '${slug}', title: '${title.replace(/'/g, "\\'")}', excerpt: '${excerpt.replace(/'/g, "\\'")}', readTime: '${readTime}' }`;
  }).join(',\n');
}

// Generate the new blog hub page
const pageContent = `import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'

const categories = [
${categories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    emoji: '${cat.emoji}',
    desc: '${cat.desc}',
    posts: [
${buildPostsData(cat.id)}
    ],
  }`).join(',\n')}
]

export const metadata = {
  title: 'Writing & SEO Blog | WordCounterTool.net',
  description: '${englishPosts.length} free guides on word counting, SEO writing, readability, and content optimization. Expert advice updated for 2026.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  openGraph: {
    title: 'Writing & SEO Blog | WordCounterTool.net',
    description: '${englishPosts.length} free guides on writing, SEO, and content strategy.',
    url: 'https://www.wordcountertool.net/blog',
    siteName: 'WordCounterTool.net',
    type: 'website',
  },
}

export default function BlogHub() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: '#0a0d14' }}>
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Writing & SEO Blog</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">${englishPosts.length} practical guides on word count, SEO, social media, writing craft, and productivity. No fluff.</p>
          </div>

          {/* Category Quick-Nav Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <a key={cat.id} href={'#' + cat.id}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', color: '#10b981', textDecoration: 'none' }}>
                {cat.emoji} {cat.name} ({cat.posts.length})
              </a>
            ))}
          </div>

          <AdUnit slot="3248634657" />

          {/* Category Sections */}
          {categories.map((cat, ci) => (
            <section key={cat.id} id={cat.id} className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{cat.emoji}</span>
                <h2 className="text-2xl font-extrabold text-white">{cat.name}</h2>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  {cat.posts.length}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-6 ml-10">{cat.desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.posts.map(post => (
                  <Link key={post.slug} href={'/blog/' + post.slug}
                    className="group block rounded-xl p-5 transition-all hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-bold text-sm leading-snug group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{post.excerpt}</p>
                  </Link>
                ))}
              </div>

              {ci === 1 && <div className="mt-6"><AdUnit slot="3248634657" /></div>}
            </section>
          ))}

          {/* Bottom CTA */}
          <div className="text-center rounded-2xl p-8 mt-4" style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <h2 className="text-xl font-extrabold text-white mb-2">Try Our Free Tools</h2>
            <p className="text-slate-500 text-sm mb-5">Word counter, character counter, reading time, and more</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/word-counter" className="px-6 py-2.5 rounded-xl text-white text-sm font-bold" style={{ background: '#10b981' }}>
                Word Counter
              </Link>
              <Link href="/character-counter" className="px-6 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }}>
                Character Counter
              </Link>
              <Link href="/reading-time" className="px-6 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }}>
                Reading Time
              </Link>
            </div>
          </div>

        </div>
      </main>

      <style>{\`
        section a:hover { border-color: rgba(16,185,129,0.3) !important; background: rgba(16,185,129,0.04) !important; }
      \`}</style>

      <Footer />
    </>
  )
}
`;

// Write the new blog hub page
const blogPagePath = path.join(BLOG_DIR, 'page.js');

// Backup existing
const backupPath = path.join(BLOG_DIR, 'page.js.backup');
if (fs.existsSync(blogPagePath)) {
  fs.copyFileSync(blogPagePath, backupPath);
  console.log(`\nBacked up existing blog hub to: app/blog/page.js.backup`);
}

fs.writeFileSync(blogPagePath, pageContent, 'utf8');

console.log(`\n✅ FIX 5 DONE: Blog hub redesigned`);
console.log(`   - ${englishPosts.length} English posts shown as cards`);
console.log(`   - ${allFolders.length - englishPosts.length} language posts hidden`);
console.log(`   - 5 category sections with quick-nav tabs`);
console.log(`   - Title fixed to "Writing & SEO Blog | WordCounterTool.net"`);
console.log(`   - Cards show title, excerpt, and reading time`);
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Redesign blog hub with category cards and excerpts" && git push origin master');
