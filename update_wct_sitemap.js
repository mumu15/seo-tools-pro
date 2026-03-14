const fs = require('fs');

const BASE = 'https://www.wordcountertool.net';
const today = new Date().toISOString().split('T')[0];

// ─── All existing pages ───────────────────────────────────────────────────────
const staticPages = [
  '/',
  '/word-counter',
  '/character-counter',
  '/keyword-density',
  '/meta-tag-generator',
  '/readability-checker',
  '/sentence-counter',
  '/reading-time',
  '/words-per-minute',
  '/about',
  '/contact',
  '/privacy-policy',
  '/faq',
  '/blog',
];

// ─── Blog articles ────────────────────────────────────────────────────────────
const blogSlugs = [
  'how-many-words-per-page',
  'ideal-blog-post-length-for-seo',
  'how-to-improve-readability-score',
  'how-many-words-in-a-novel',
  'what-is-keyword-density',
  'how-to-write-meta-descriptions',
  'average-reading-speed',
  'how-many-hashtags-to-use',
  'how-to-write-twitter-thread',
  'average-typing-speed',
  'how-to-count-words-online',
  'how-many-words-in-a-paragraph',
  'how-many-words-in-a-short-story',
  'how-many-words-in-a-speech',
  'how-many-characters-in-a-tweet',
  'instagram-caption-length',
  'how-to-write-seo-title-tags',
  'what-is-flesch-kincaid-score',
  'how-many-words-in-a-resume',
  'how-to-type-faster',
  'how-to-write-blog-introduction',
  'seo-content-length-guide',
  'how-to-write-product-descriptions',
  'long-tail-keywords-guide',
  'how-to-write-headline-formulas',
  'how-to-use-keywords-in-blog-posts',
  'how-many-words-in-a-cover-letter',
  'how-to-write-for-skimmable-content',
  'how-to-write-email-subject-lines',
  'how-to-write-blog-conclusion',
  'words-per-minute-reading-guide',
];

// ─── Word counter by profession ───────────────────────────────────────────────
const professionSlugs = [
  'student', 'blogger', 'writer', 'journalist', 'lawyer',
  'copywriter', 'teacher', 'seo-specialist', 'social-media-manager',
  'content-marketer', 'academic', 'novelist', 'email-marketer',
  'screenwriter', 'hr-professional',
];

// ─── Reading time pages ───────────────────────────────────────────────────────
const readingTimeSlugs = [
  '100-words', '200-words', '300-words', '400-words', '500-words',
  '600-words', '700-words', '800-words', '900-words', '1000-words',
  '1200-words', '1500-words', '1700-words', '2000-words', '2500-words',
  '3000-words', '3500-words', '4000-words', '5000-words', '6000-words',
  '7000-words', '7500-words', '8000-words', '9000-words', '10000-words',
  '15000-words', '20000-words', '25000-words', '30000-words', '40000-words',
  '50000-words', '60000-words', '75000-words', '80000-words', '90000-words',
  '100000-words',
];

// ─── Character limit pages ────────────────────────────────────────────────────
const characterLimitSlugs = [
  'twitter', 'instagram', 'linkedin', 'facebook', 'tiktok',
  'youtube', 'pinterest', 'google-ads', 'meta-title',
  'meta-description', 'email-subject-line', 'sms',
];

// ─── Word count by document ───────────────────────────────────────────────────
const documentSlugs = [
  'essay', 'thesis', 'cover-letter', 'resume', 'blog-post',
  'research-paper', 'book', 'email', 'speech', 'press-release',
  'business-plan', 'short-story', 'linkedin-post',
  'product-description', 'grant-proposal',
];

// ─── Build all URLs ───────────────────────────────────────────────────────────
const allUrls = [
  ...staticPages,
  ...blogSlugs.map(s => '/blog/' + s),
  '/word-counter/for',
  ...professionSlugs.map(s => '/word-counter/for/' + s),
  '/reading-time/for',
  ...readingTimeSlugs.map(s => '/reading-time/for/' + s),
  '/character-limits',
  ...characterLimitSlugs.map(s => '/character-limits/' + s),
  '/word-count/for',
  ...documentSlugs.map(s => '/word-count/for/' + s),
];

// ─── Generate sitemap XML ─────────────────────────────────────────────────────
const urlEntries = allUrls.map(url => `  <url>
    <loc>${BASE}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url === '/' || url === '/word-counter' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.startsWith('/blog/') ? '0.7' : url === '/word-counter' ? '0.9' : '0.8'}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');

console.log('✅ sitemap.xml updated!');
console.log('   Total URLs: ' + allUrls.length);
console.log('   Saved to: public/sitemap.xml');
console.log('\nNext:');
console.log('  git add public/sitemap.xml');
console.log('  git commit -m "Update sitemap with all new pages"');
console.log('  git push origin master');
console.log('\nThen ping Google:');
console.log('  https://www.google.com/ping?sitemap=https://www.wordcountertool.net/sitemap.xml');
