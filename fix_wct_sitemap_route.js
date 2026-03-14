const fs = require('fs');
const path = require('path');

const BASE = 'https://www.wordcountertool.net';
const today = new Date().toISOString().split('T')[0];

// ─── All pages ────────────────────────────────────────────────────────────────
const staticPages = ['/','/word-counter','/character-counter','/keyword-density','/meta-tag-generator','/readability-checker','/sentence-counter','/reading-time','/words-per-minute','/words-per-page','/twitter-thread-counter','/about','/contact','/privacy-policy','/faq','/blog'];

const blogSlugs = ['how-many-words-per-page','ideal-blog-post-length-for-seo','how-to-improve-readability-score','how-many-words-in-a-novel','what-is-keyword-density','how-to-write-meta-descriptions','average-reading-speed','how-many-hashtags-to-use','how-to-write-twitter-thread','average-typing-speed','how-to-count-words-online','how-many-words-in-a-paragraph','how-many-words-in-a-short-story','how-many-words-in-a-speech','how-many-characters-in-a-tweet','instagram-caption-length','how-to-write-seo-title-tags','what-is-flesch-kincaid-score','how-many-words-in-a-resume','how-to-type-faster','how-to-write-blog-introduction','seo-content-length-guide','how-to-write-product-descriptions','long-tail-keywords-guide','how-to-write-headline-formulas','how-to-use-keywords-in-blog-posts','how-many-words-in-a-cover-letter','how-to-write-for-skimmable-content','how-to-write-email-subject-lines','how-to-write-blog-conclusion','words-per-minute-reading-guide'];

const professionSlugs = ['student','blogger','writer','journalist','lawyer','copywriter','teacher','seo-specialist','social-media-manager','content-marketer','academic','novelist','email-marketer','screenwriter','hr-professional'];

const readingTimeSlugs = ['100-words','200-words','300-words','400-words','500-words','600-words','700-words','800-words','900-words','1000-words','1200-words','1500-words','1700-words','2000-words','2500-words','3000-words','3500-words','4000-words','5000-words','6000-words','7000-words','7500-words','8000-words','9000-words','10000-words','15000-words','20000-words','25000-words','30000-words','40000-words','50000-words','60000-words','75000-words','80000-words','90000-words','100000-words'];

const characterLimitSlugs = ['twitter','instagram','linkedin','facebook','tiktok','youtube','pinterest','google-ads','meta-title','meta-description','email-subject-line','sms'];

const documentSlugs = ['essay','thesis','cover-letter','resume','blog-post','research-paper','book','email','speech','press-release','business-plan','short-story','linkedin-post','product-description','grant-proposal'];

// ─── Build all URL entries ────────────────────────────────────────────────────
const allUrls = [
  ...staticPages.map(u => ({ url: u, priority: u === '/' ? '1.0' : u === '/word-counter' ? '0.9' : '0.8', freq: 'weekly' })),
  ...blogSlugs.map(s => ({ url: '/blog/' + s, priority: '0.7', freq: 'monthly' })),
  { url: '/word-counter/for', priority: '0.8', freq: 'monthly' },
  ...professionSlugs.map(s => ({ url: '/word-counter/for/' + s, priority: '0.8', freq: 'monthly' })),
  { url: '/reading-time/for', priority: '0.8', freq: 'monthly' },
  ...readingTimeSlugs.map(s => ({ url: '/reading-time/for/' + s, priority: '0.8', freq: 'monthly' })),
  { url: '/character-limits', priority: '0.8', freq: 'monthly' },
  ...characterLimitSlugs.map(s => ({ url: '/character-limits/' + s, priority: '0.8', freq: 'monthly' })),
  { url: '/word-count/for', priority: '0.8', freq: 'monthly' },
  ...documentSlugs.map(s => ({ url: '/word-count/for/' + s, priority: '0.8', freq: 'monthly' })),
];

// ─── 1. Create app/sitemap.js (Next.js App Router native sitemap) ─────────────
const sitemapRouteContent = `export default function sitemap() {
  const base = '${BASE}';
  const today = '${today}';

  const staticPages = ${JSON.stringify(staticPages)};
  const blogSlugs = ${JSON.stringify(blogSlugs)};
  const professionSlugs = ${JSON.stringify(professionSlugs)};
  const readingTimeSlugs = ${JSON.stringify(readingTimeSlugs)};
  const characterLimitSlugs = ${JSON.stringify(characterLimitSlugs)};
  const documentSlugs = ${JSON.stringify(documentSlugs)};

  const entries = [
    ...staticPages.map(u => ({
      url: base + u,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: u === '/' ? 1.0 : u === '/word-counter' ? 0.9 : 0.8,
    })),
    ...blogSlugs.map(s => ({
      url: base + '/blog/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    {
      url: base + '/word-counter/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...professionSlugs.map(s => ({
      url: base + '/word-counter/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/reading-time/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...readingTimeSlugs.map(s => ({
      url: base + '/reading-time/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/character-limits',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...characterLimitSlugs.map(s => ({
      url: base + '/character-limits/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/word-count/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...documentSlugs.map(s => ({
      url: base + '/word-count/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  return entries;
}
`;

// ─── 2. Write app/sitemap.js ──────────────────────────────────────────────────
const appDir = path.join('app');
fs.mkdirSync(appDir, { recursive: true });
fs.writeFileSync(path.join(appDir, 'sitemap.js'), sitemapRouteContent, 'utf8');
console.log('✅ Created app/sitemap.js (' + allUrls.length + ' URLs)');

// ─── 3. Delete old public/sitemap.xml if it exists ───────────────────────────
const oldSitemap = path.join('public', 'sitemap.xml');
if (fs.existsSync(oldSitemap)) {
  fs.unlinkSync(oldSitemap);
  console.log('🗑️  Deleted old public/sitemap.xml (was causing conflict)');
} else {
  console.log('ℹ️  No public/sitemap.xml found (already clean)');
}

console.log('\n🎉 Done! ' + allUrls.length + ' URLs in sitemap');
console.log('\nNext steps:');
console.log('  git add app/sitemap.js');
console.log('  git rm public/sitemap.xml   (only if it existed)');
console.log('  git commit -m "Fix sitemap: use Next.js app/sitemap.js route"');
console.log('  git push origin master');
console.log('\nThen test live at:');
console.log('  https://www.wordcountertool.net/sitemap.xml');
console.log('\nThen resubmit in Google Search Console → Sitemaps → Resubmit');
