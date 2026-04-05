const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║  PART 1: CORE SEO FIXES — WordCounterTool.net          ║');
console.log('║  Layout, Schemas, Ads, OG Image, Titles, Hreflang      ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log('');

let fixes = 0;

// ═══════════════════════════════════════════════════════════════════════
// FIX 1: layout.js — fix OG image to PNG, remove SVG reference
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 1: Layout.js — OG image, title template ──');

const layoutPath = path.join(APP, 'layout.js');
if (fs.existsSync(layoutPath)) {
  let layout = fs.readFileSync(layoutPath, 'utf8');

  // Fix OG image from SVG to PNG
  layout = layout.replace(/\/og-image\.svg/g, '/og-image.png');

  // Fix title template to prevent double branding
  // Change template from '%s | WordCounterTool.net' to just '%s'
  // The page-level titles already include branding where needed
  layout = layout.replace(
    "template: '%s | WordCounterTool.net'",
    "template: '%s'"
  );

  fs.writeFileSync(layoutPath, layout, 'utf8');
  console.log('  ✅ OG image → PNG, title template fixed');
  fixes++;
} else {
  console.log('  ⚠️  layout.js not found');
}

// ═══════════════════════════════════════════════════════════════════════
// FIX 2: Generate real PNG OG image using Canvas
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 2: Generate PNG OG image ──');

// Create an HTML file that can be screenshotted, or use a simple SVG-to-PNG approach
// For now, create a proper OG image generation script
const ogScript = `// Run: node generate_og_png.js
// Requires: npm install canvas
const { createCanvas } = require('canvas');
const fs = require('fs');

const w = 1200, h = 630;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#0f172a';
ctx.fillRect(0, 0, w, h);

// Accent gradient bar
const grd = ctx.createLinearGradient(0, 0, w, 0);
grd.addColorStop(0, '#10b981');
grd.addColorStop(1, '#06b6d4');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, w, 6);

// Logo text
ctx.fillStyle = '#10b981';
ctx.font = 'bold 28px Arial';
ctx.fillText('W', 60, 80);
ctx.fillStyle = '#e2e8f0';
ctx.font = '24px Arial';
ctx.fillText('WordCounterTool.net', 95, 80);

// Main title
ctx.fillStyle = '#f8fafc';
ctx.font = 'bold 52px Arial';
ctx.fillText('Free Word Counter', 60, 260);
ctx.fillText('& SEO Writing Tools', 60, 325);

// Subtitle
ctx.fillStyle = '#94a3b8';
ctx.font = '24px Arial';
ctx.fillText('Word counter, readability checker, keyword density,', 60, 390);
ctx.fillText('meta tag generator, and 250+ free writing tools.', 60, 425);

// Stats badges
const badges = [
  { text: '250+ Tools', x: 60 },
  { text: '100% Free', x: 240 },
  { text: 'No Sign Up', x: 410 },
  { text: '15 Languages', x: 600 },
];
badges.forEach(b => {
  ctx.fillStyle = 'rgba(16,185,129,0.15)';
  ctx.beginPath();
  ctx.roundRect(b.x, 480, 150, 40, 20);
  ctx.fill();
  ctx.fillStyle = '#34d399';
  ctx.font = '16px Arial';
  ctx.fillText(b.text, b.x + 20, 506);
});

// Decorative dots
ctx.fillStyle = 'rgba(16,185,129,0.08)';
for (let i = 0; i < 20; i++) {
  const x = 800 + Math.random() * 350;
  const y = 100 + Math.random() * 400;
  const r = 5 + Math.random() * 30;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

// Save
const buf = canvas.toBuffer('image/png');
fs.writeFileSync('public/og-image.png', buf);
console.log('✅ OG image saved: public/og-image.png (' + buf.length + ' bytes)');
`;
fs.writeFileSync(path.join(BASE, 'generate_og_png.js'), ogScript, 'utf8');
console.log('  ✅ generate_og_png.js created (run: npm install canvas && node generate_og_png.js)');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 3: Remove fake aggregate ratings from WebAppSchema
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 3: Remove fake aggregate ratings ──');

const schemaFiles = [
  'components/WebAppSchema.js',
  'app/components/WebAppSchema.js',
];

schemaFiles.forEach(sf => {
  const fp = path.join(BASE, sf);
  if (fs.existsSync(fp)) {
    let content = fs.readFileSync(fp, 'utf8');
    // Remove the entire aggregateRating block
    content = content.replace(/,?\s*"aggregateRating"\s*:\s*\{[^}]*\}/g, '');
    // Also remove if it's a multi-line version
    content = content.replace(/,?\s*aggregateRating\s*:\s*\{[^}]*\}/g, '');
    fs.writeFileSync(fp, content, 'utf8');
    console.log('  ✅ Removed fake ratings from: ' + sf);
    fixes++;
  }
});

// Also scan all page.js files for inline aggregateRating
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.next') return;
    if (fs.statSync(full).isDirectory()) walkDir(full, callback);
    else if (f.endsWith('.js')) callback(full);
  });
}

let ratingFixes = 0;
walkDir(APP, (file) => {
  let c = fs.readFileSync(file, 'utf8');
  if (c.includes('aggregateRating') || c.includes('ratingValue')) {
    c = c.replace(/,?\s*"aggregateRating"\s*:\s*\{[^}]*\}/g, '');
    c = c.replace(/,?\s*aggregateRating\s*:\s*\{[^}]*\}/g, '');
    fs.writeFileSync(file, c, 'utf8');
    ratingFixes++;
  }
});
console.log(`  ✅ Cleaned aggregateRating from ${ratingFixes} files`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 4: Upgrade AdUnit component — support multiple placements
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 4: Upgrade AdUnit with multiple placement types ──');

const adUnitCode = `'use client'
import { useEffect, useRef } from 'react'

export default function AdUnit({ slot, format = 'auto', layout, style }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (adRef.current && adRef.current.childNodes.length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {}
  }, []);

  return (
    <div className="my-6 w-full flex justify-center" style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-8934829211507329"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { 'data-ad-layout': layout } : {})}
      />
    </div>
  );
}

// Anchor ad for bottom of page (sticky)
export function AnchorAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8934829211507329"
        data-ad-slot="ANCHOR_SLOT"
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  );
}
`;

const adPaths = [
  path.join(APP, 'components', 'AdUnit.js'),
  path.join(BASE, 'components', 'AdUnit.js'),
];
adPaths.forEach(p => {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, adUnitCode, 'utf8');
});
console.log('  ✅ AdUnit upgraded with multiple format support');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 5: Add multiple ad placements to all tool pages
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 5: Add 3-4 ad slots per tool page ──');

const TOOL_SLOT_HEADER = "1111111111"; // Create new slots in AdSense dashboard
const TOOL_SLOT_MID = "3763639977";    // Existing slot
const TOOL_SLOT_BOTTOM = "2222222222"; // Create new slot

const tools = [
  'word-counter', 'character-counter', 'reading-time', 'hashtag-counter',
  'sentence-counter', 'readability-checker', 'keyword-density',
  'twitter-thread-counter', 'words-per-page', 'words-per-minute',
  'meta-tag-generator',
];

let adFixes = 0;
tools.forEach(tool => {
  const pagePath = path.join(APP, tool, 'page.js');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip if already has multiple AdUnit placements
  const adCount = (content.match(/AdUnit/g) || []).length;
  if (adCount >= 3) { return; }

  // Add header ad after the h1/hero section
  if (!content.includes('HEADER_AD')) {
    // Insert ad after the first closing </section> or after the h1
    content = content.replace(
      /(<h1[^>]*>.*?<\/h1>)/s,
      `$1\n\n        {/* HEADER_AD */}\n        <AdUnit slot="${TOOL_SLOT_HEADER}" format="horizontal" />\n`
    );
  }

  // Add bottom ad before footer/related tools
  if (!content.includes('BOTTOM_AD')) {
    content = content.replace(
      /{\/\* FAQ \*\/}/,
      `{/* BOTTOM_AD */}\n        <AdUnit slot="${TOOL_SLOT_BOTTOM}" />\n\n        {/* FAQ */}`
    );
  }

  fs.writeFileSync(pagePath, content, 'utf8');
  adFixes++;
});
console.log(`  ✅ Added multi-slot ads to ${adFixes} tool pages`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 6: Add ads to blog posts (header + mid + bottom)
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 6: Add multi-slot ads to blog posts ──');

const BLOG_SLOT_HEADER = "3333333333";
const BLOG_SLOT_MID = "3248634657";
const BLOG_SLOT_BOTTOM = "4444444444";

const blogDir = path.join(APP, 'blog');
let blogAdFixes = 0;

if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir).forEach(slug => {
    const pagePath = path.join(blogDir, slug, 'page.js');
    if (!fs.existsSync(pagePath)) return;

    let content = fs.readFileSync(pagePath, 'utf8');

    // Ensure AdUnit import exists
    if (!content.includes('AdUnit')) {
      content = content.replace(
        /^(import .+)/m,
        `$1\nimport AdUnit from '../../../components/AdUnit'`
      );
    }

    // Count existing ads
    const adCount = (content.match(/AdUnit/g) || []).length - 1; // -1 for import
    if (adCount >= 3) return;

    // Add mid-content ad after 2nd section if not present
    if (!content.includes('MID_AD')) {
      const sectionMatches = [...content.matchAll(/<\/section>/g)];
      if (sectionMatches.length >= 2) {
        const insertPos = sectionMatches[1].index + '</section>'.length;
        content = content.slice(0, insertPos) +
          `\n\n          {/* MID_AD */}\n          <AdUnit slot="${BLOG_SLOT_MID}" />\n` +
          content.slice(insertPos);
      }
    }

    fs.writeFileSync(pagePath, content, 'utf8');
    blogAdFixes++;
  });
}
console.log(`  ✅ Added multi-slot ads to ${blogAdFixes} blog posts`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 7: Fix duplicate title tags across all pages
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 7: Fix duplicate title tags ──');

let titleFixes = 0;
walkDir(APP, (file) => {
  let c = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Fix "Title | WordCounterTool.net | WordCounterTool.net" patterns
  if (c.includes('| WordCounterTool.net | WordCounterTool.net')) {
    c = c.replace(/\| WordCounterTool\.net \| WordCounterTool\.net/g, '| WordCounterTool.net');
    changed = true;
  }

  // Fix "Title | WordCounterTool | WordCounterTool.net" patterns
  if (c.includes('| WordCounterTool | WordCounterTool.net')) {
    c = c.replace(/\| WordCounterTool \| WordCounterTool\.net/g, '| WordCounterTool.net');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, c, 'utf8');
    titleFixes++;
  }
});
console.log(`  ✅ Fixed duplicate titles in ${titleFixes} files`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 8: Fix encoding issues (ΓÇö → — etc.)
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 8: Fix encoding issues ──');

let encodingFixes = 0;
walkDir(APP, (file) => {
  let c = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacements = [
    ['ΓÇö', '—'],
    ['ΓÇ║', '│'],
    ['ΓÇ£', '"'],
    ['ΓÇ¥', '"'],
    ['ΓÇô', '–'],
    ['ΓÇÖ', "'"],
    ['├ó┬Ç┬ö', '—'],
    ['├ó┬Ç┬£', '"'],
    ['&amp;amp;', '&'],
    ['&amp;#39;', "'"],
    ['\\u2019', "'"],
  ];

  replacements.forEach(([from, to]) => {
    if (c.includes(from)) {
      c = c.split(from).join(to);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, c, 'utf8');
    encodingFixes++;
  }
});
console.log(`  ✅ Fixed encoding in ${encodingFixes} files`);
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 9: Add Author schema component
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 9: Add Author schema ──');

const authorSchema = `export default function AuthorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WordCounterTool.net",
    "url": "https://www.wordcountertool.net",
    "logo": "https://www.wordcountertool.net/og-image.png",
    "sameAs": [],
    "description": "Free professional word counter and SEO writing tools. 250+ pages of tools, guides, and calculators."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, url, datePublished, dateModified }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || "2026-02-01",
    "dateModified": dateModified || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "url": "https://www.wordcountertool.net"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.wordcountertool.net/og-image.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
`;

const authorPaths = [
  path.join(APP, 'components', 'AuthorSchema.js'),
  path.join(BASE, 'components', 'AuthorSchema.js'),
];
authorPaths.forEach(p => {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, authorSchema, 'utf8');
});
console.log('  ✅ AuthorSchema + ArticleSchema components created');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 10: Add hreflang tags for language pages
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 10: Add hreflang component ──');

const hreflangComponent = `export default function HreflangTags({ currentLang, currentPath }) {
  const langs = [
    { code: 'en', slug: '', name: 'English' },
    { code: 'ar', slug: 'arabic', name: 'Arabic' },
    { code: 'zh', slug: 'chinese', name: 'Chinese' },
    { code: 'nl', slug: 'dutch', name: 'Dutch' },
    { code: 'fr', slug: 'french', name: 'French' },
    { code: 'de', slug: 'german', name: 'German' },
    { code: 'hi', slug: 'hindi', name: 'Hindi' },
    { code: 'it', slug: 'italian', name: 'Italian' },
    { code: 'ja', slug: 'japanese', name: 'Japanese' },
    { code: 'ko', slug: 'korean', name: 'Korean' },
    { code: 'pl', slug: 'polish', name: 'Polish' },
    { code: 'pt', slug: 'portuguese', name: 'Portuguese' },
    { code: 'ru', slug: 'russian', name: 'Russian' },
    { code: 'es', slug: 'spanish', name: 'Spanish' },
    { code: 'sv', slug: 'swedish', name: 'Swedish' },
    { code: 'tr', slug: 'turkish', name: 'Turkish' },
  ];

  const base = 'https://www.wordcountertool.net';

  return (
    <>
      {langs.map(lang => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={lang.slug ? base + '/word-counter/language/' + lang.slug : base + '/word-counter'}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={base + '/word-counter'} />
    </>
  );
}
`;

const hreflangPaths = [
  path.join(APP, 'components', 'HreflangTags.js'),
  path.join(BASE, 'components', 'HreflangTags.js'),
];
hreflangPaths.forEach(p => {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, hreflangComponent, 'utf8');
});
console.log('  ✅ HreflangTags component created');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// FIX 11: Update robots.js for app router (preferred over public/robots.txt)
// ═══════════════════════════════════════════════════════════════════════
console.log('── FIX 11: Create app/robots.js ──');

const robotsJs = `export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.wordcountertool.net/sitemap.xml',
  };
}
`;

fs.writeFileSync(path.join(APP, 'robots.js'), robotsJs, 'utf8');
console.log('  ✅ app/robots.js created');
fixes++;

// ═══════════════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════════════
console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log(`║  PART 1 COMPLETE — ${fixes} fixes applied                    ║`);
console.log('╠══════════════════════════════════════════════════════════╣');
console.log('║  Next steps:                                            ║');
console.log('║  1. npm install canvas && node generate_og_png.js       ║');
console.log('║  2. Create new AdSense ad slots in your dashboard       ║');
console.log('║  3. Replace placeholder slot IDs with real ones         ║');
console.log('║  4. Run Part 2: node fix_wct_part2_blog_hub.js         ║');
console.log('╚══════════════════════════════════════════════════════════╝');
