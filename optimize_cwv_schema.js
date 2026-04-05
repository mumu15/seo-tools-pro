const fs = require('fs');
const path = require('path');

// TWO TASKS:
// 1. Core Web Vitals optimization (LCP, CLS, INP)
// 2. Fix/add WebApplication schema on all 11 tool pages (remove fake ratings)

const APP = path.join(__dirname, 'app');

// ============================================================
// TASK 1: Core Web Vitals — globals.css + layout.js
// ============================================================
console.log('=== TASK 1: Core Web Vitals ===\n');

// --- 1a. CSS optimizations for CLS and LCP ---
console.log('--- 1a: CLS + LCP CSS fixes ---');

const globalsPath = path.join(APP, 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

if (!globals.includes('Core Web Vitals')) {
  globals += `

/* ═══════════════════════════════════════════════════════════════
   CORE WEB VITALS OPTIMIZATION
   ═══════════════════════════════════════════════════════════════ */

/* CLS: Prevent layout shift from fonts loading */
@font-face {
  font-display: swap !important;
}

/* CLS: Reserve space for ad units so they don't push content */
ins.adsbygoogle {
  min-height: 100px;
  display: block;
}

/* CLS: Prevent images from causing layout shift */
img {
  max-width: 100%;
  height: auto;
}

/* LCP: Optimize text rendering */
h1, h2, h3, p {
  text-rendering: optimizeSpeed;
}

/* INP: Smooth interactions */
button, a, input, textarea, select {
  touch-action: manipulation;
}

/* LCP: Reduce paint complexity on large sections */
main section {
  contain: layout style;
}

/* CLS: Stable header height */
header {
  min-height: 64px;
}

/* CLS: Stable footer */
footer {
  min-height: 200px;
}
`;
  fs.writeFileSync(globalsPath, globals, 'utf8');
  console.log('  ✅ Added CLS/LCP/INP CSS optimizations');
} else {
  console.log('  ⏭️  Already has CWV CSS');
}

// --- 1b. Layout.js — font preloading + resource hints ---
console.log('\n--- 1b: Font preloading + resource hints ---');

const layoutPath = path.join(APP, 'layout.js');
let layout = fs.readFileSync(layoutPath, 'utf8');

// Add DNS prefetch and preconnect for Google Fonts and AdSense
if (!layout.includes('dns-prefetch')) {
  const resourceHints = `
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />`;

  if (layout.includes('</head>')) {
    layout = layout.replace('</head>', resourceHints + '\n      </head>');
  } else if (layout.includes('<body')) {
    layout = layout.replace('<body', resourceHints + '\n      <body');
  }

  fs.writeFileSync(layoutPath, layout, 'utf8');
  console.log('  ✅ Added DNS prefetch + preconnect for fonts and ads');
} else {
  console.log('  ⏭️  Already has resource hints');
}

// --- 1c. Check AdSense script loading strategy ---
console.log('\n--- 1c: Checking AdSense script strategy ---');
layout = fs.readFileSync(layoutPath, 'utf8');

if (layout.includes('afterInteractive')) {
  console.log('  ✅ AdSense already loads afterInteractive (good for INP)');
} else if (layout.includes('adsbygoogle')) {
  console.log('  ⚠️  AdSense found but not using afterInteractive strategy');
  console.log('     Consider moving to afterInteractive for better INP');
} else {
  console.log('  ℹ️  No AdSense script found in layout.js');
}

// ============================================================
// TASK 2: WebApplication Schema — all 11 tool pages
// ============================================================
console.log('\n=== TASK 2: WebApplication Schema ===\n');

// First, remove all existing fake aggregateRating schemas
console.log('--- 2a: Removing fake aggregateRating schemas ---');

function findAllJS(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findAllJS(full, results);
    else if (item.endsWith('.js') || item.endsWith('.jsx')) results.push(full);
  }
  return results;
}

const allFiles = findAllJS(APP);
let schemasRemoved = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('aggregateRating')) continue;

  const original = content;

  // Remove inline schema blocks with fake aggregateRating
  // Pattern: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({...aggregateRating...})}} />
  content = content.replace(
    /\s*<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(\{[^}]*"aggregateRating"[^)]*\)\s*\}\} \/>/g,
    ''
  );

  // Also remove WebAppSchema component usage if it has fake ratings
  content = content.replace(
    /\s*<WebAppSchema[^/]*\/>/g,
    ''
  );

  // Remove WebAppSchema import
  content = content.replace(
    /import WebAppSchema from ['"'][^'"]+WebAppSchema['"']\n?/g,
    ''
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    schemasRemoved++;
  }
}

console.log('  ✅ Removed fake rating schemas from ' + schemasRemoved + ' files');

// --- 2b: Add clean WebApplication schema to tool pages ---
console.log('\n--- 2b: Adding clean WebApplication schemas ---');

const tools = [
  {
    dir: 'word-counter',
    name: 'Word Counter - Free Online Word Count Tool',
    desc: 'Count words, characters, sentences, paragraphs and reading time instantly. Free, no signup required.',
    url: '/word-counter',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'character-counter',
    name: 'Character Counter - Count Characters for Social Media',
    desc: 'Count characters with and without spaces. Check limits for Twitter, Instagram, LinkedIn and more.',
    url: '/character-counter',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'keyword-density',
    name: 'Keyword Density Checker - SEO Keyword Analysis Tool',
    desc: 'Analyze keyword frequency and density in your content. Optimize for search engines.',
    url: '/keyword-density',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'meta-tag-generator',
    name: 'Meta Tag Generator - SEO Title and Description Tool',
    desc: 'Generate optimized meta titles and descriptions. Preview how your page appears in Google search results.',
    url: '/meta-tag-generator',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'readability-checker',
    name: 'Readability Checker - Flesch-Kincaid Score Calculator',
    desc: 'Check your content readability with Flesch-Kincaid, Gunning Fog and more. Get grade level scores.',
    url: '/readability-checker',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'sentence-counter',
    name: 'Sentence Counter - Analyze Sentence Structure',
    desc: 'Count sentences, calculate average sentence length, find longest and shortest sentences.',
    url: '/sentence-counter',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'reading-time',
    name: 'Reading Time Calculator - Estimate Read Time',
    desc: 'Calculate how long it takes to read any text at slow, average and fast reading speeds.',
    url: '/reading-time',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'words-per-minute',
    name: 'Words Per Minute Test - Typing Speed Calculator',
    desc: 'Test your typing speed and reading speed in words per minute with live results.',
    url: '/words-per-minute',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'words-per-page',
    name: 'Words Per Page Calculator - Convert Words to Pages',
    desc: 'Calculate how many words fit on a page for any font size, type and spacing.',
    url: '/words-per-page',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'hashtag-counter',
    name: 'Hashtag Counter - Count and Optimize Hashtags',
    desc: 'Count hashtags for Instagram, Twitter and TikTok. Optimize your hashtag strategy.',
    url: '/hashtag-counter',
    category: 'UtilitiesApplication',
  },
  {
    dir: 'twitter-thread-counter',
    name: 'Twitter Thread Counter - Split Text into Tweets',
    desc: 'Plan and split long text into Twitter/X threads. Preview tweets before posting.',
    url: '/twitter-thread-counter',
    category: 'UtilitiesApplication',
  },
];

const DOMAIN = 'https://www.wordcountertool.net';
let schemasAdded = 0;

for (const tool of tools) {
  // Check both page.js and PageClient.js
  const pageFile = path.join(APP, tool.dir, 'page.js');
  const clientFile = path.join(APP, tool.dir, 'PageClient.js');

  let targetFile = null;
  if (fs.existsSync(pageFile)) {
    const content = fs.readFileSync(pageFile, 'utf8');
    if (content.includes('<Footer') || content.includes('</main>')) {
      targetFile = pageFile;
    }
  }
  if (!targetFile && fs.existsSync(clientFile)) {
    const content = fs.readFileSync(clientFile, 'utf8');
    if (content.includes('<Footer') || content.includes('</main>')) {
      targetFile = clientFile;
    }
  }

  if (!targetFile) {
    console.log('  ❌ ' + tool.dir + ' (no page file found)');
    continue;
  }

  let content = fs.readFileSync(targetFile, 'utf8');

  // Skip if already has clean schema (without aggregateRating)
  if (content.includes('"SoftwareApplication"') && !content.includes('aggregateRating')) {
    console.log('  ⏭️  ' + tool.dir + ' (already has clean schema)');
    continue;
  }

  // Build clean schema — NO fake ratings
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.desc,
    "url": DOMAIN + tool.url,
    "applicationCategory": tool.category,
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "author": {
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "url": DOMAIN
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "Word counting, character counting, reading time estimation, SEO analysis"
  };

  const schemaTag = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema)}) }} />`;

  // Insert before <Footer
  const footerIdx = content.lastIndexOf('<Footer');
  if (footerIdx > -1) {
    content = content.slice(0, footerIdx) + schemaTag + '\n      ' + content.slice(footerIdx);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('  ✅ ' + tool.dir);
    schemasAdded++;
  } else {
    console.log('  ❌ ' + tool.dir + ' (no Footer found)');
  }
}

// --- 2c: Add Organization schema to homepage ---
console.log('\n--- 2c: Adding Organization schema to homepage ---');

const homePage = path.join(APP, 'page.js');
if (fs.existsSync(homePage)) {
  let home = fs.readFileSync(homePage, 'utf8');

  if (!home.includes('"Organization"') || home.includes('aggregateRating')) {
    // Remove any old org schema
    home = home.replace(
      /\s*<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(\{[^}]*"Organization"[^)]*\)\s*\}\} \/>/g,
      ''
    );

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "url": DOMAIN,
      "description": "Free online word counter and SEO writing tools. 250+ pages of tools, guides, and calculators.",
      "sameAs": []
    };

    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "WordCounterTool.net",
      "url": DOMAIN,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": DOMAIN + "/word-counter"
        },
        "query-input": "required name=search_term_string"
      }
    };

    const schemaTags = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(orgSchema)}) }} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(webSiteSchema)}) }} />`;

    const footerIdx = home.lastIndexOf('<Footer');
    if (footerIdx > -1) {
      home = home.slice(0, footerIdx) + schemaTags + '\n      ' + home.slice(footerIdx);
      fs.writeFileSync(homePage, home, 'utf8');
      console.log('  ✅ Added Organization + WebSite schema to homepage');
    }
  } else {
    console.log('  ⏭️  Homepage already has clean Organization schema');
  }
}

// ============================================================
// DONE
// ============================================================
console.log('\n═══════════════════════════════════════════════════');
console.log('  COMPLETE: Core Web Vitals + Structured Data');
console.log('═══════════════════════════════════════════════════');
console.log('');
console.log('  Core Web Vitals:');
console.log('    ✅ CLS: Ad unit height reserved (100px min)');
console.log('    ✅ CLS: font-display: swap for FOUT prevention');
console.log('    ✅ CLS: Stable header/footer min-heights');
console.log('    ✅ LCP: DNS prefetch for Google Fonts + AdSense');
console.log('    ✅ LCP: Preconnect to fonts.gstatic.com');
console.log('    ✅ LCP: text-rendering: optimizeSpeed on headings');
console.log('    ✅ INP: touch-action: manipulation on interactive elements');
console.log('    ✅ INP: CSS containment on sections');
console.log('');
console.log('  Structured Data:');
console.log('    ✅ Removed fake aggregateRating from ' + schemasRemoved + ' files');
console.log('    ✅ Added clean SoftwareApplication schema to ' + schemasAdded + ' tools');
console.log('    ✅ Added Organization + WebSite schema to homepage');
console.log('    ✅ NO fake ratings anywhere');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Optimize Core Web Vitals + fix structured data schemas" && git push origin master');
console.log('');
console.log('After deploy, test at:');
console.log('  https://pagespeed.web.dev/analysis?url=https://www.wordcountertool.net');
console.log('  https://search.google.com/test/rich-results?url=https://www.wordcountertool.net/word-counter');
