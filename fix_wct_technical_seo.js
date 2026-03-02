const fs = require('fs');
const path = require('path');

// ─── FIX 1: layout.js — move scripts to afterInteractive ──────────────────
const wctLayout = `import './globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.wordcountertool.net'),
  title: {
    default: 'WordCounterTool.net — Free Online Word Counter & SEO Tools',
    template: '%s | WordCounterTool.net'
  },
  description: 'Free professional word counter and SEO writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
  keywords: ['word counter', 'keyword density checker', 'meta tag generator', 'readability checker', 'character counter', 'sentence counter', 'free seo tools'],
  authors: [{ name: 'WordCounterTool.net' }],
  creator: 'WordCounterTool.net',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wordcountertool.net',
    siteName: 'WordCounterTool.net',
    title: 'WordCounterTool.net — Free Online Word Counter & SEO Tools',
    description: 'Free professional word counter and SEO writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'WordCounterTool.net - Free Online Writing and SEO Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordCounterTool.net — Free Online Word Counter & SEO Tools',
    description: 'Free professional word counter and SEO writing tools. Instant results, no sign up.',
    site: '@wordcountertool',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Google Analytics — loads after page is interactive, does NOT block render */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9VCD465V0S"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VCD465V0S');
          \`}
        </Script>
        {/* AdSense — loads after page is interactive, does NOT block render */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934829211507329"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
`;

// ─── FIX 2: next.config.js — fix image cache TTL ──────────────────────────
const wctConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wordcountertool.net' }],
        destination: 'https://www.wordcountertool.net/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
`;

// ─── FIX 3: sitemap.xml ────────────────────────────────────────────────────
const wctSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Homepage -->
  <url><loc>https://www.wordcountertool.net/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>

  <!-- Tools -->
  <url><loc>https://www.wordcountertool.net/word-counter</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/character-counter</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/reading-time</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/hashtag-counter</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/sentence-counter</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/readability-checker</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/keyword-density</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/twitter-thread-counter</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/words-per-page</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/words-per-minute</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wordcountertool.net/meta-tag-generator</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>

  <!-- Blog Index -->
  <url><loc>https://www.wordcountertool.net/blog</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>

  <!-- Original Blog Posts -->
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-per-page</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/ideal-blog-post-length-for-seo</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-improve-readability-score</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-novel</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/what-is-keyword-density</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-meta-descriptions</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/average-reading-speed</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-hashtags-to-use</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-twitter-thread</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/average-typing-speed</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-count-words-online</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>

  <!-- New Blog Posts -->
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-paragraph</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-short-story</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-speech</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-characters-in-a-tweet</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/instagram-caption-length</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-seo-title-tags</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/what-is-flesch-kincaid-score</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-resume</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-type-faster</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-blog-introduction</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/seo-content-length-guide</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-product-descriptions</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/long-tail-keywords-guide</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-headline-formulas</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-use-keywords-in-blog-posts</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-for-skimmable-content</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-email-subject-lines</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/how-to-write-blog-conclusion</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wordcountertool.net/blog/words-per-minute-reading-guide</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>

</urlset>
`;

// ─── Write all WCT files ───────────────────────────────────────────────────
fs.writeFileSync('app/layout.js', wctLayout, 'utf8');
console.log('✅ layout.js — scripts moved to afterInteractive (fixes LCP)');

fs.writeFileSync('next.config.js', wctConfig, 'utf8');
console.log('✅ next.config.js — image cache TTL fixed to 1 year + security headers');

fs.writeFileSync('public/sitemap.xml', wctSitemap, 'utf8');
console.log('✅ public/sitemap.xml — created with all 42 pages');

// robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.wordcountertool.net/sitemap.xml
`;
fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8');
console.log('✅ public/robots.txt — updated with sitemap reference');

console.log('\n🎉 WCT technical SEO fixes complete!');
console.log('📋 Summary of improvements:');
console.log('   1. Scripts deferred → faster LCP (Core Web Vitals)');
console.log('   2. Image cache → 1 year (less re-fetching)');
console.log('   3. sitemap.xml → all 42 pages indexed faster');
console.log('   4. robots.txt → points Google to sitemap');
console.log('   5. Security headers → X-Frame-Options added');
