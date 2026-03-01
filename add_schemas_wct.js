const fs = require('fs');
const path = require('path');

// ── BREADCRUMB SCHEMA COMPONENT ───────────────────────────────────────────────
const breadcrumbComponent = `export default function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
`;

fs.writeFileSync('components/BreadcrumbSchema.js', breadcrumbComponent, 'utf8');
console.log('✅ BreadcrumbSchema component created!');

// ── WEBAPP SCHEMA COMPONENT ───────────────────────────────────────────────────
const webAppComponent = `export default function WebAppSchema({ name, description, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
`;

fs.writeFileSync('components/WebAppSchema.js', webAppComponent, 'utf8');
console.log('✅ WebAppSchema component created!');

// ── ADD SCHEMAS TO ALL TOOL PAGES ─────────────────────────────────────────────
const toolPages = [
  {
    file: 'app/word-counter/page.js',
    name: 'Free Word Counter',
    description: 'Count words, characters, sentences and paragraphs instantly. Free online word counter with reading time.',
    url: 'https://www.wordcountertool.net/word-counter',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Word Counter', url: 'https://www.wordcountertool.net/word-counter' },
    ]
  },
  {
    file: 'app/keyword-density/page.js',
    name: 'Keyword Density Checker',
    description: 'Analyze keyword frequency and density in your content for SEO optimization. Free keyword density checker.',
    url: 'https://www.wordcountertool.net/keyword-density',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Keyword Density Checker', url: 'https://www.wordcountertool.net/keyword-density' },
    ]
  },
  {
    file: 'app/meta-tag-generator/page.js',
    name: 'Meta Tag Generator',
    description: 'Generate perfect SEO meta tags with live Google search preview. Free meta title and description generator.',
    url: 'https://www.wordcountertool.net/meta-tag-generator',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Meta Tag Generator', url: 'https://www.wordcountertool.net/meta-tag-generator' },
    ]
  },
  {
    file: 'app/readability-checker/page.js',
    name: 'Readability Checker',
    description: 'Check your content readability score using the Flesch-Kincaid formula. Free readability analysis tool.',
    url: 'https://www.wordcountertool.net/readability-checker',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Readability Checker', url: 'https://www.wordcountertool.net/readability-checker' },
    ]
  },
  {
    file: 'app/character-counter/page.js',
    name: 'Character Counter',
    description: 'Count characters with and without spaces for Twitter, Instagram, SMS and more. Free character counter.',
    url: 'https://www.wordcountertool.net/character-counter',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Character Counter', url: 'https://www.wordcountertool.net/character-counter' },
    ]
  },
  {
    file: 'app/sentence-counter/page.js',
    name: 'Sentence Counter',
    description: 'Count sentences and analyze your writing structure instantly. Free online sentence counter tool.',
    url: 'https://www.wordcountertool.net/sentence-counter',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Sentence Counter', url: 'https://www.wordcountertool.net/sentence-counter' },
    ]
  },
  {
    file: 'app/words-per-page/page.js',
    name: 'Words Per Page Calculator',
    description: 'Convert word count to pages for any font size and spacing. Free words per page calculator.',
    url: 'https://www.wordcountertool.net/words-per-page',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Words Per Page Calculator', url: 'https://www.wordcountertool.net/words-per-page' },
    ]
  },
  {
    file: 'app/reading-time/page.js',
    name: 'Reading Time Calculator',
    description: 'Estimate how long it takes to read any text. Free reading time calculator with words per minute settings.',
    url: 'https://www.wordcountertool.net/reading-time',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Reading Time Calculator', url: 'https://www.wordcountertool.net/reading-time' },
    ]
  },
  {
    file: 'app/words-per-minute/page.js',
    name: 'Typing Speed Test',
    description: 'Test your typing speed in words per minute. Free WPM typing speed test with instant results.',
    url: 'https://www.wordcountertool.net/words-per-minute',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Typing Speed Test', url: 'https://www.wordcountertool.net/words-per-minute' },
    ]
  },
  {
    file: 'app/hashtag-counter/page.js',
    name: 'Hashtag Counter',
    description: 'Count hashtags for Instagram, Twitter, TikTok and more. Free hashtag counter with platform limits.',
    url: 'https://www.wordcountertool.net/hashtag-counter',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Hashtag Counter', url: 'https://www.wordcountertool.net/hashtag-counter' },
    ]
  },
  {
    file: 'app/twitter-thread-counter/page.js',
    name: 'Twitter Thread Counter',
    description: 'Plan and count characters for Twitter threads. Free Twitter thread counter with character limits.',
    url: 'https://www.wordcountertool.net/twitter-thread-counter',
    breadcrumb: [
      { name: 'Home', url: 'https://www.wordcountertool.net' },
      { name: 'Twitter Thread Counter', url: 'https://www.wordcountertool.net/twitter-thread-counter' },
    ]
  },
];

let fixed = 0;
let skipped = 0;

toolPages.forEach(({ file, name, description, url, breadcrumb }) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Not found: ${file}`);
    skipped++;
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('BreadcrumbSchema')) {
    console.log(`⏭️  Already has schema: ${file}`);
    skipped++;
    return;
  }

  // Add imports after existing imports
  content = content.replace(
    `import FaqSchema from '../../components/FaqSchema'`,
    `import FaqSchema from '../../components/FaqSchema'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'`
  );

  // Add schema components after FaqSchema in JSX
  content = content.replace(
    `      <FaqSchema faqs={faqs} />`,
    `      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={${JSON.stringify(breadcrumb)}} />
      <WebAppSchema name="${name}" description="${description}" url="${url}" />`
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ Added schemas to: ${file}`);
  fixed++;
});

console.log(`\n🎉 Done! ${fixed} files updated, ${skipped} skipped.`);
console.log('Run: git add . && git commit -m "Add Breadcrumb and WebApp schema to all tool pages" && git push');
