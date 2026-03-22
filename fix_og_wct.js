const fs = require('fs');
const path = require('path');

// Create OG image SVG
const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f1117"/>
  <rect x="0" y="0" width="1200" height="8" fill="#10b981"/>
  <rect x="80" y="180" width="80" height="80" rx="20" fill="#10b981"/>
  <text x="180" y="240" font-family="Arial,sans-serif" font-size="48" font-weight="bold" fill="#ffffff">WordCounterTool</text>
  <text x="80" y="330" font-family="Arial,sans-serif" font-size="56" font-weight="bold" fill="#ffffff">Free Word Counter</text>
  <text x="80" y="400" font-family="Arial,sans-serif" font-size="56" font-weight="bold" fill="#10b981">&amp; Writing Tools</text>
  <text x="80" y="470" font-family="Arial,sans-serif" font-size="24" fill="#94a3b8">Word Count • Character Count • Reading Time • SEO Tools</text>
  <text x="80" y="510" font-family="Arial,sans-serif" font-size="20" fill="#64748b">15+ Languages • 340+ Pages • 100% Free</text>
  <text x="80" y="570" font-family="Arial,sans-serif" font-size="18" fill="#64748b">www.wordcountertool.net</text>
</svg>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvg, 'utf8');
console.log('Created public/og-image.svg');

// Update layout.js
let layout = fs.readFileSync(path.join(__dirname, 'app', 'layout.js'), 'utf8');

if (!layout.includes('og-image')) {
  // Find openGraph and add images
  if (layout.includes('openGraph:')) {
    layout = layout.replace(
      /openGraph:\s*\{/,
      "openGraph: {\n    images: [{ url: 'https://www.wordcountertool.net/og-image.svg', width: 1200, height: 630, alt: 'WordCounterTool - Free Word Counter & Writing Tools' }],"
    );
  } else {
    // Add openGraph to metadata if missing
    layout = layout.replace(
      /export const metadata = \{/,
      "export const metadata = {\n  openGraph: {\n    images: [{ url: 'https://www.wordcountertool.net/og-image.svg', width: 1200, height: 630, alt: 'WordCounterTool - Free Word Counter & Writing Tools' }],\n    title: 'Free Word Counter & Writing Tools | WordCounterTool',\n    description: 'Free word counter, character counter, reading time calculator in 15+ languages. 340+ pages. No sign-up.',\n    url: 'https://www.wordcountertool.net',\n    siteName: 'WordCounterTool',\n    type: 'website',\n  },"
    );
  }

  // Add or update twitter card
  if (layout.includes('twitter:')) {
    layout = layout.replace(
      /twitter:\s*\{\s*card:\s*['"]summary['"]/,
      "twitter: {\n    card: 'summary_large_image',\n    images: ['https://www.wordcountertool.net/og-image.svg']"
    );
  } else if (layout.includes('openGraph:')) {
    layout = layout.replace(
      /openGraph:\s*\{/,
      "twitter: { card: 'summary_large_image', images: ['https://www.wordcountertool.net/og-image.svg'], title: 'Free Word Counter & Writing Tools', description: 'Word counter, character counter, reading time in 15+ languages. Free.' },\n  openGraph: {"
    );
  }

  fs.writeFileSync(path.join(__dirname, 'app', 'layout.js'), layout, 'utf8');
  console.log('Updated app/layout.js with og:image');
} else {
  console.log('layout.js already has og:image');
}

console.log('');
console.log('Done! Now run:');
console.log('  git add . && git commit -m "Add OG image for social previews" && git push origin master');
