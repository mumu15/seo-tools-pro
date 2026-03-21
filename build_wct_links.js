const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
let modified = 0;

console.log('');
console.log('=====================================================');
console.log('  BUILD INTERNAL LINK WEB — WordCounterTool.net');
console.log('=====================================================');
console.log('');

// ============================================================
// LINK MAPS
// ============================================================

// Blog → Tools links
const BLOG_TO_TOOLS = {
  'how-many-words-per-page': ['/word-counter','/words-per-page','/reading-time','/character-counter'],
  'ideal-blog-post-length-for-seo': ['/word-counter','/keyword-density','/readability-checker','/reading-time'],
  'how-to-improve-readability-score': ['/readability-checker','/word-counter','/sentence-counter','/reading-time'],
  'how-many-words-in-a-novel': ['/word-counter','/words-per-page','/reading-time','/word-count/for/book'],
  'what-is-keyword-density': ['/keyword-density','/word-counter','/meta-tag-generator','/readability-checker'],
  'how-to-write-meta-descriptions': ['/meta-tag-generator','/character-counter','/keyword-density','/word-counter'],
  'average-reading-speed': ['/reading-time','/words-per-minute','/word-counter'],
  'how-many-hashtags-to-use': ['/hashtag-counter','/character-counter','/word-counter','/character-limits/instagram'],
  'how-to-write-twitter-thread': ['/twitter-thread-counter','/character-counter','/character-limits/twitter','/word-counter'],
  'average-typing-speed': ['/words-per-minute','/word-counter','/reading-time'],
  'how-to-count-words-online': ['/word-counter','/character-counter','/sentence-counter','/reading-time'],
  'how-many-words-in-a-paragraph': ['/word-counter','/sentence-counter','/readability-checker'],
  'how-many-words-in-a-short-story': ['/word-counter','/word-count/for/short-story','/reading-time','/words-per-page'],
  'how-many-words-in-a-speech': ['/word-counter','/words-per-minute','/reading-time','/word-count/for/speech'],
  'how-many-characters-in-a-tweet': ['/character-counter','/twitter-thread-counter','/character-limits/twitter','/word-counter'],
  'instagram-caption-length': ['/character-counter','/hashtag-counter','/character-limits/instagram','/word-counter'],
  'how-to-write-seo-title-tags': ['/meta-tag-generator','/character-counter','/keyword-density'],
  'what-is-flesch-kincaid-score': ['/readability-checker','/word-counter','/sentence-counter'],
  'how-many-words-in-a-resume': ['/word-counter','/word-count/for/resume','/character-counter'],
  'how-to-type-faster': ['/words-per-minute','/word-counter'],
  'how-to-write-blog-introduction': ['/word-counter','/readability-checker','/reading-time'],
  'seo-content-length-guide': ['/word-counter','/keyword-density','/readability-checker','/meta-tag-generator','/reading-time'],
  'how-to-write-product-descriptions': ['/word-counter','/keyword-density','/readability-checker','/word-count/for/product-description'],
  'long-tail-keywords-guide': ['/keyword-density','/word-counter','/meta-tag-generator'],
  'how-to-write-headline-formulas': ['/character-counter','/meta-tag-generator','/word-counter'],
  'how-to-use-keywords-in-blog-posts': ['/keyword-density','/word-counter','/readability-checker','/meta-tag-generator'],
  'how-many-words-in-a-cover-letter': ['/word-counter','/word-count/for/cover-letter','/reading-time'],
  'how-to-write-for-skimmable-content': ['/readability-checker','/word-counter','/sentence-counter'],
  'how-to-write-email-subject-lines': ['/character-counter','/word-counter','/character-limits/email-subject-line'],
  'how-to-write-blog-conclusion': ['/word-counter','/readability-checker','/reading-time'],
  'words-per-minute-reading-guide': ['/words-per-minute','/reading-time','/word-counter'],
  'how-many-words-in-a-college-essay': ['/word-counter','/word-count/for/essay','/word-count/for/college-application-essay','/readability-checker'],
  'ideal-linkedin-post-length': ['/character-counter','/word-counter','/character-limits/linkedin'],
  'tiktok-caption-length-guide': ['/character-counter','/character-limits/tiktok','/hashtag-counter'],
  'how-many-words-in-a-dissertation': ['/word-counter','/word-count/for/dissertation','/reading-time','/words-per-page'],
  'email-length-best-practices': ['/word-counter','/character-counter','/word-count/for/email','/character-limits/email-subject-line'],
  'how-long-should-a-youtube-script-be': ['/word-counter','/reading-time','/words-per-minute'],
  'how-many-words-in-a-podcast-episode': ['/word-counter','/reading-time','/words-per-minute'],
  'google-ads-character-limits': ['/character-counter','/character-limits/google-ads','/meta-tag-generator'],
  'how-to-write-faster': ['/word-counter','/words-per-minute','/reading-time'],
  'best-free-writing-tools-2026': ['/word-counter','/character-counter','/readability-checker','/keyword-density','/meta-tag-generator','/reading-time'],
};

// Tool → Blog links (reverse + curated)
const TOOL_TO_BLOGS = {
  'word-counter': ['how-to-count-words-online','ideal-blog-post-length-for-seo','seo-content-length-guide','how-to-write-faster'],
  'character-counter': ['how-many-characters-in-a-tweet','instagram-caption-length','how-to-write-email-subject-lines','google-ads-character-limits'],
  'keyword-density': ['what-is-keyword-density','how-to-use-keywords-in-blog-posts','long-tail-keywords-guide','ideal-blog-post-length-for-seo'],
  'meta-tag-generator': ['how-to-write-meta-descriptions','how-to-write-seo-title-tags','what-is-keyword-density'],
  'readability-checker': ['how-to-improve-readability-score','what-is-flesch-kincaid-score','how-to-write-for-skimmable-content'],
  'sentence-counter': ['how-many-words-in-a-paragraph','how-to-improve-readability-score','how-to-write-for-skimmable-content'],
  'reading-time': ['average-reading-speed','words-per-minute-reading-guide','how-many-words-in-a-speech'],
  'words-per-minute': ['average-typing-speed','average-reading-speed','words-per-minute-reading-guide','how-to-type-faster'],
  'words-per-page': ['how-many-words-per-page','how-many-words-in-a-novel','seo-content-length-guide'],
  'twitter-thread-counter': ['how-to-write-twitter-thread','how-many-characters-in-a-tweet'],
  'hashtag-counter': ['how-many-hashtags-to-use','instagram-caption-length'],
};

// Cross-tool links
const CROSS_TOOLS = {
  'word-counter': ['/character-counter','/readability-checker','/keyword-density','/reading-time','/sentence-counter'],
  'character-counter': ['/word-counter','/twitter-thread-counter','/character-limits','/hashtag-counter'],
  'keyword-density': ['/word-counter','/readability-checker','/meta-tag-generator','/reading-time'],
  'meta-tag-generator': ['/keyword-density','/character-counter','/word-counter','/readability-checker'],
  'readability-checker': ['/word-counter','/sentence-counter','/reading-time','/keyword-density'],
  'sentence-counter': ['/word-counter','/readability-checker','/reading-time','/character-counter'],
  'reading-time': ['/word-counter','/words-per-minute','/words-per-page','/readability-checker'],
  'words-per-minute': ['/reading-time','/word-counter','/words-per-page'],
  'words-per-page': ['/word-counter','/reading-time','/words-per-minute'],
  'twitter-thread-counter': ['/character-counter','/word-counter','/character-limits/twitter'],
  'hashtag-counter': ['/character-counter','/word-counter','/character-limits/instagram'],
};

const TOOL_NAMES = {
  '/word-counter': 'Word Counter',
  '/character-counter': 'Character Counter',
  '/keyword-density': 'Keyword Density',
  '/meta-tag-generator': 'Meta Tag Generator',
  '/readability-checker': 'Readability Checker',
  '/sentence-counter': 'Sentence Counter',
  '/reading-time': 'Reading Time',
  '/words-per-minute': 'Words Per Minute',
  '/words-per-page': 'Words Per Page',
  '/twitter-thread-counter': 'Thread Counter',
  '/hashtag-counter': 'Hashtag Counter',
  '/character-limits': 'Character Limits',
  '/character-limits/twitter': 'Twitter Limits',
  '/character-limits/instagram': 'Instagram Limits',
  '/character-limits/linkedin': 'LinkedIn Limits',
  '/character-limits/tiktok': 'TikTok Limits',
  '/character-limits/email-subject-line': 'Email Subject Limits',
  '/character-limits/google-ads': 'Google Ads Limits',
  '/word-count/for/essay': 'Essay Word Count',
  '/word-count/for/resume': 'Resume Word Count',
  '/word-count/for/cover-letter': 'Cover Letter Guide',
  '/word-count/for/book': 'Book Word Count',
  '/word-count/for/short-story': 'Short Story Guide',
  '/word-count/for/speech': 'Speech Word Count',
  '/word-count/for/dissertation': 'Dissertation Guide',
  '/word-count/for/college-application-essay': 'College Essay Guide',
  '/word-count/for/product-description': 'Product Description',
  '/word-count/for/email': 'Email Word Count',
};

const BLOG_TITLES = {
  'how-to-count-words-online': 'How to Count Words Online',
  'ideal-blog-post-length-for-seo': 'Ideal Blog Post Length for SEO',
  'how-to-improve-readability-score': 'How to Improve Readability',
  'how-many-words-in-a-novel': 'Words in a Novel',
  'what-is-keyword-density': 'What Is Keyword Density?',
  'how-to-write-meta-descriptions': 'Write Meta Descriptions',
  'average-reading-speed': 'Average Reading Speed',
  'how-many-hashtags-to-use': 'How Many Hashtags?',
  'how-to-write-twitter-thread': 'Write Twitter Threads',
  'average-typing-speed': 'Average Typing Speed',
  'how-many-words-in-a-paragraph': 'Words in a Paragraph',
  'how-many-words-in-a-short-story': 'Words in a Short Story',
  'how-many-words-in-a-speech': 'Words in a Speech',
  'how-many-characters-in-a-tweet': 'Characters in a Tweet',
  'instagram-caption-length': 'Instagram Caption Length',
  'how-to-write-seo-title-tags': 'SEO Title Tags',
  'what-is-flesch-kincaid-score': 'Flesch-Kincaid Score',
  'how-many-words-in-a-resume': 'Resume Word Count',
  'how-to-type-faster': 'How to Type Faster',
  'seo-content-length-guide': 'SEO Content Length Guide',
  'how-to-write-for-skimmable-content': 'Skimmable Content',
  'how-to-write-email-subject-lines': 'Email Subject Lines',
  'words-per-minute-reading-guide': 'WPM Reading Guide',
  'long-tail-keywords-guide': 'Long-Tail Keywords',
  'how-to-write-headline-formulas': 'Headline Formulas',
  'how-to-use-keywords-in-blog-posts': 'Keywords in Blog Posts',
  'how-to-write-faster': 'How to Write Faster',
  'google-ads-character-limits': 'Google Ads Limits',
  'how-many-words-in-a-college-essay': 'College Essay Word Count',
  'best-free-writing-tools-2026': 'Best Writing Tools 2026',
};

// ============================================================
// STEP 1: Add tool links to blog posts
// ============================================================
console.log('--- Step 1: Add tool links to blog posts ---');
let blogToolLinks = 0;

for (const [blogSlug, tools] of Object.entries(BLOG_TO_TOOLS)) {
  const files = [
    path.join(APP, 'blog', blogSlug, 'page.js'),
    path.join(APP, 'blog', blogSlug, 'PageClient.js'),
  ];
  
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let c = fs.readFileSync(file, 'utf8');
    if (c.includes('Try These Tools') || c.includes('Recommended Tools')) continue;
    if (!c.includes('<Footer') && !c.includes('</main>')) continue;

    const section = `
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
${tools.map(t => `            <a href="${t}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">${TOOL_NAMES[t] || t.split('/').pop().replace(/-/g,' ')}</a>`).join('\n')}
          </div>
        </div>
`;

    let idx = c.lastIndexOf('<Footer');
    if (idx === -1) idx = c.lastIndexOf('</main>');
    if (idx === -1) continue;

    c = c.slice(0, idx) + section + '      ' + c.slice(idx);
    fs.writeFileSync(file, c, 'utf8');
    blogToolLinks++;
    break; // Only modify one file per blog
  }
}
console.log('  ✅ Added tool links to ' + blogToolLinks + ' blog posts');

// ============================================================
// STEP 2: Add blog links to core tools
// ============================================================
console.log('--- Step 2: Add blog links to core tools ---');
let toolBlogLinks = 0;

for (const [toolSlug, blogs] of Object.entries(TOOL_TO_BLOGS)) {
  const clientFile = path.join(APP, toolSlug, 'PageClient.js');
  if (!fs.existsSync(clientFile)) continue;

  let c = fs.readFileSync(clientFile, 'utf8');
  if (c.includes('Recommended Reading') || c.includes('Related Guides')) continue;

  const section = `
        <div className="mt-8 p-5 rounded-xl" style={{background:'rgba(52,211,153,0.04)',border:'1px solid rgba(52,211,153,0.15)'}}>
          <h2 className="text-lg font-bold text-white mb-3">Recommended Reading</h2>
${blogs.slice(0, 4).map(b => `          <a href="/blog/${b}" className="block text-emerald-400 text-sm font-semibold py-1.5 hover:underline" style={{borderBottom:'1px solid rgba(255,255,255,0.04)'}}>${BLOG_TITLES[b] || b.replace(/-/g,' ')}</a>`).join('\n')}
        </div>
`;

  let idx = c.lastIndexOf('<Footer');
  if (idx === -1) idx = c.lastIndexOf('</main>');
  if (idx === -1) continue;

  c = c.slice(0, idx) + section + '      ' + c.slice(idx);
  fs.writeFileSync(clientFile, c, 'utf8');
  toolBlogLinks++;
}
console.log('  ✅ Added blog links to ' + toolBlogLinks + ' core tools');

// ============================================================
// STEP 3: Add cross-tool links
// ============================================================
console.log('--- Step 3: Add cross-tool links ---');
let crossLinks = 0;

for (const [toolSlug, links] of Object.entries(CROSS_TOOLS)) {
  const clientFile = path.join(APP, toolSlug, 'PageClient.js');
  if (!fs.existsSync(clientFile)) continue;

  let c = fs.readFileSync(clientFile, 'utf8');
  if (c.includes('Explore More Tools')) continue;

  const section = `
        <div className="mt-6 p-5 rounded-xl" style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)'}}>
          <h2 className="text-lg font-bold text-white mb-3">Explore More Tools</h2>
          <div className="flex flex-wrap gap-2">
${links.map(t => `            <a href="${t}" className="inline-block bg-slate-800/50 hover:bg-slate-700 text-slate-300 text-sm px-4 py-2 rounded-lg transition-colors">${TOOL_NAMES[t] || t.split('/').pop().replace(/-/g,' ')}</a>`).join('\n')}
          </div>
        </div>
`;

  let idx = c.lastIndexOf('<Footer');
  if (idx === -1) idx = c.lastIndexOf('</main>');
  if (idx === -1) continue;

  c = c.slice(0, idx) + section + '      ' + c.slice(idx);
  fs.writeFileSync(clientFile, c, 'utf8');
  crossLinks++;
}
console.log('  ✅ Added cross-tool links to ' + crossLinks + ' tools');

// ============================================================
// STEP 4: Add cross-links on word-count/for pages
// ============================================================
console.log('--- Step 4: Cross-links on document type pages ---');
let docLinks = 0;

const docDir = path.join(APP, 'word-count', 'for');
if (fs.existsSync(docDir)) {
  const docs = fs.readdirSync(docDir).filter(d => 
    fs.statSync(path.join(docDir, d)).isDirectory()
  );

  for (const doc of docs) {
    const file = path.join(docDir, doc, 'page.js');
    if (!fs.existsSync(file)) continue;
    let c = fs.readFileSync(file, 'utf8');
    if (c.includes('More Word Count Guides')) continue;

    const otherDocs = docs.filter(d => d !== doc).slice(0, 8);
    const section = `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Word Count Guides</h2>
            <div className="flex flex-wrap gap-2">
${otherDocs.map(d => `              <a href="/word-count/for/${d}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">${d.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</a>`).join('\n')}
              <a href="/word-count/for" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Guides →</a>
            </div>
          </section>
`;

    let idx = c.lastIndexOf('</div>');
    const footerIdx = c.lastIndexOf('<Footer');
    const mainIdx = c.lastIndexOf('</main>');
    idx = footerIdx > 0 ? footerIdx : mainIdx > 0 ? mainIdx : idx;
    if (idx === -1) continue;

    c = c.slice(0, idx) + section + '        ' + c.slice(idx);
    fs.writeFileSync(file, c, 'utf8');
    docLinks++;
  }
}
console.log('  ✅ Added cross-links to ' + docLinks + ' document type pages');

// ============================================================
// STEP 5: Add cross-links on character-limits pages
// ============================================================
console.log('--- Step 5: Cross-links on character limit pages ---');
let charLinks = 0;

const charDir = path.join(APP, 'character-limits');
if (fs.existsSync(charDir)) {
  const platforms = fs.readdirSync(charDir).filter(d => 
    d !== 'page.js' && fs.statSync(path.join(charDir, d)).isDirectory()
  );

  for (const plat of platforms) {
    const file = path.join(charDir, plat, 'page.js');
    if (!fs.existsSync(file)) continue;
    let c = fs.readFileSync(file, 'utf8');
    if (c.includes('More Platform Limits')) continue;

    const others = platforms.filter(p => p !== plat).slice(0, 8);
    const section = `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Platform Limits</h2>
            <div className="flex flex-wrap gap-2">
${others.map(p => `              <a href="/character-limits/${p}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">${p.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</a>`).join('\n')}
              <a href="/character-limits" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Limits →</a>
            </div>
          </section>
`;

    let idx = c.lastIndexOf('<Footer');
    if (idx === -1) idx = c.lastIndexOf('</main>');
    if (idx === -1) continue;

    c = c.slice(0, idx) + section + '        ' + c.slice(idx);
    fs.writeFileSync(file, c, 'utf8');
    charLinks++;
  }
}
console.log('  ✅ Added cross-links to ' + charLinks + ' character limit pages');

// ============================================================
// STEP 6: Add cross-links on speech pages
// ============================================================
console.log('--- Step 6: Cross-links on speech pages ---');
let speechLinks = 0;

const speechDir = path.join(APP, 'words-per-minute', 'speech');
if (fs.existsSync(speechDir)) {
  const speeches = fs.readdirSync(speechDir).filter(d =>
    fs.statSync(path.join(speechDir, d)).isDirectory()
  );

  for (const sp of speeches) {
    const file = path.join(speechDir, sp, 'page.js');
    if (!fs.existsSync(file)) continue;
    let c = fs.readFileSync(file, 'utf8');
    if (c.includes('More Speech Lengths')) continue;

    const others = speeches.filter(s => s !== sp);
    const section = `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Speech Lengths</h2>
            <div className="flex flex-wrap gap-2">
${others.map(s => `              <a href="/words-per-minute/speech/${s}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">${s.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</a>`).join('\n')}
            </div>
          </section>
`;

    let idx = c.lastIndexOf('<Footer');
    if (idx === -1) idx = c.lastIndexOf('</main>');
    if (idx === -1) continue;

    c = c.slice(0, idx) + section + '        ' + c.slice(idx);
    fs.writeFileSync(file, c, 'utf8');
    speechLinks++;
  }
}
console.log('  ✅ Added cross-links to ' + speechLinks + ' speech pages');

modified = blogToolLinks + toolBlogLinks + crossLinks + docLinks + charLinks + speechLinks;

console.log('');
console.log('=====================================================');
console.log('  INTERNAL LINK WEB — COMPLETE');
console.log('');
console.log('  Tool links on blog posts:     ' + blogToolLinks);
console.log('  Blog links on core tools:     ' + toolBlogLinks);
console.log('  Cross-tool links:             ' + crossLinks);
console.log('  Document type cross-links:    ' + docLinks);
console.log('  Character limit cross-links:  ' + charLinks);
console.log('  Speech page cross-links:      ' + speechLinks);
console.log('  Total files modified:         ' + modified);
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Build internal link web across all WCT pages"');
console.log('  git push origin main');
console.log('');
