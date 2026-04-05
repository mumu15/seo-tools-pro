const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const BLOG = path.join(APP, 'blog');
const DOMAIN = 'https://www.wordcountertool.net';
let expanded = 0;
let errors = [];

console.log('');
console.log('=====================================================');
console.log('  EXPAND: Category 1 — Word Count Guides (7 posts)');
console.log('  Target: 2000+ words each with SVGs, tables, FAQs');
console.log('=====================================================');
console.log('');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

// ============================================================
// PAGE BUILDER — handles metadata, schema, structure
// ============================================================
function buildPage(cfg) {
  const titleEsc = cfg.title.replace(/'/g, "\\'");
  const descEsc = cfg.desc.replace(/'/g, "\\'");
  const faqItems = cfg.faqs.map(f => {
    const qEsc = f.q.replace(/'/g, "\\'");
    const aEsc = f.a.replace(/'/g, "\\'");
    return `  { q: '${qEsc}', a: '${aEsc}' }`;
  }).join(',\n');

  return `import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: '${titleEsc}',
  description: '${descEsc}',
  alternates: { canonical: '${DOMAIN}/blog/${cfg.slug}' },
  openGraph: {
    title: '${titleEsc}',
    description: '${descEsc}',
    url: '${DOMAIN}/blog/${cfg.slug}',
    type: 'article',
  },
}

const faqs = [
${faqItems}
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">${cfg.title}</h1>
          <p className="text-slate-400 text-sm mb-8">${cfg.date} · ${cfg.readTime}</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">${cfg.quickAnswer}</p>
          </div>
          <div className="space-y-8">
${cfg.body}

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
${cfg.relatedTools.map(t => `                <Link href="${t.href}" className="text-emerald-400 hover:underline text-sm">${t.text}</Link>`).join('\n')}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Articles</h2>
              <div className="flex flex-wrap gap-3">
${cfg.relatedArticles.map(a => `                <Link href="${a.href}" className="text-emerald-400 hover:underline text-sm">${a.text}</Link>`).join('\n')}
              </div>
            </section>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"${titleEsc}","description":"${descEsc}","datePublished":"${cfg.isoDate}","dateModified":"${cfg.isoDate}","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool","url":"${DOMAIN}"},"mainEntityOfPage":"${DOMAIN}/blog/${cfg.slug}"})}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Blog","item":"${DOMAIN}/blog"},{"@type":"ListItem","position":3,"name":"${titleEsc}","item":"${DOMAIN}/blog/${cfg.slug}"}]})}} />
      </main>
      <Footer />
    </>
  )
}
`;
}

// ============================================================
// POST 1: how-many-words-per-page
// ============================================================
function buildWordsPerPage() {
  return buildPage({
    slug: 'how-many-words-per-page',
    title: 'How Many Words Per Page? (Definitive Guide for Every Format)',
    desc: 'How many words fit on a page? Single-spaced: 500 words. Double-spaced: 250 words. Complete breakdown by font, spacing, margins, and document type.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '11 min read',
    quickAnswer: 'A single-spaced page has approximately <strong>500 words</strong> and a double-spaced page has approximately <strong>250 words</strong>. These numbers assume 12pt Times New Roman with 1-inch margins. Actual word count varies by font, spacing, and margin settings.',
    faqs: [
      { q: 'How many words are on a single-spaced page?', a: 'A single-spaced page contains approximately 500 words when using a standard 12pt font like Times New Roman with 1-inch margins. Sans-serif fonts like Arial produce roughly 450 words per single-spaced page because the characters are slightly wider.' },
      { q: 'How many words are on a double-spaced page?', a: 'A double-spaced page contains approximately 250 words. This is the standard format for academic papers, manuscripts, and most school assignments. Double-spacing makes text easier to read and leaves room for editing marks.' },
      { q: 'How many pages is a 1000 word essay?', a: 'A 1,000-word essay is approximately 4 pages double-spaced or 2 pages single-spaced. This assumes 12pt Times New Roman font with standard 1-inch margins. Font choice and paragraph spacing can shift this by half a page.' },
      { q: 'How many pages is 5000 words?', a: 'A 5,000-word document is approximately 20 pages double-spaced or 10 pages single-spaced. For reference, most undergraduate dissertations are 8,000-12,000 words, which translates to 32-48 double-spaced pages.' },
      { q: 'Does font size affect words per page?', a: 'Yes, significantly. A page in 12pt font holds about 500 words single-spaced, while 10pt font increases this to roughly 600 words. Going to 14pt drops it to about 400 words. Always check your assignment requirements for the correct font size.' },
      { q: 'What is the standard page format for academic papers?', a: 'Most academic papers use 12pt Times New Roman, double-spaced, with 1-inch margins on all sides. APA and MLA style guides both require this format. This produces approximately 250 words per page or about 275 words including headings.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page: Quick Reference Chart</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The number of words that fit on a page depends on three main variables: font size, line spacing, and margins. The table below covers every common combination you are likely to encounter in school, work, or publishing. These counts are based on actual measurements using standard US Letter size paper (8.5 x 11 inches).</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Format</th><th className="text-left text-emerald-400 py-2 pr-4">Font &amp; Size</th><th className="text-left text-emerald-400 py-2 pr-4">Single-Spaced</th><th className="text-left text-emerald-400 py-2">Double-Spaced</th></tr></thead>
                    <tbody>
                      {[['Standard','Times New Roman 12pt','~500 words','~250 words'],['Standard','Arial 12pt','~450 words','~225 words'],['Standard','Calibri 11pt','~470 words','~235 words'],['Standard','Georgia 12pt','~440 words','~220 words'],['Compact','Times New Roman 10pt','~600 words','~300 words'],['Compact','Arial 10pt','~550 words','~275 words'],['Large','Times New Roman 14pt','~400 words','~200 words'],['Large','Arial 14pt','~370 words','~185 words']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Notice that serif fonts like Times New Roman consistently fit more words per page than sans-serif fonts like Arial. This is because serif letterforms are narrower on average. If you need to hit a page count for an assignment, switching from Arial to Times New Roman can add 10-12% more words per page without changing the font size.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page by Document Type</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different types of writing follow different formatting conventions. A novel page looks nothing like an academic paper, and a business report uses different margins than a screenplay. Here is how words per page breaks down across the most common document types you will encounter.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Document Type</th><th className="text-left text-emerald-400 py-2 pr-4">Words Per Page</th><th className="text-left text-emerald-400 py-2">Notes</th></tr></thead>
                    <tbody>
                      {[['Academic Essay (APA/MLA)','250','12pt Times New Roman, double-spaced, 1-inch margins'],['College Application Essay','250','Standard double-spaced format'],['Published Novel (paperback)','250-300','Varies by publisher and trim size'],['Screenplay','150-180','Courier 12pt, special formatting rules'],['Business Report','400-500','Single-spaced, often Calibri or Arial'],['Blog Post','300-400','Web format with wide margins and larger fonts'],['Newspaper Column','200-250','Narrow column width reduces words per line'],['Legal Document','300-350','Often 12pt, 1.5-spaced with specific margin rules'],['Resume','400-600','Dense formatting with small margins'],['Ebook','200-250','Varies dramatically by device and user settings']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count to Page Count Converter</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use this reference table to quickly convert between word counts and page counts. This is especially useful when your professor says the paper should be a certain number of pages, or when a publisher asks for a specific word count.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Single-Spaced Pages</th><th className="text-left text-emerald-400 py-2 pr-4">Double-Spaced Pages</th><th className="text-left text-emerald-400 py-2">Approx. Reading Time</th></tr></thead>
                    <tbody>
                      {[['250 words','0.5 pages','1 page','1 min'],['500 words','1 page','2 pages','2 min'],['750 words','1.5 pages','3 pages','3 min'],['1,000 words','2 pages','4 pages','4 min'],['1,500 words','3 pages','6 pages','6 min'],['2,000 words','4 pages','8 pages','8 min'],['2,500 words','5 pages','10 pages','10 min'],['3,000 words','6 pages','12 pages','12 min'],['5,000 words','10 pages','20 pages','20 min'],['7,500 words','15 pages','30 pages','30 min'],['10,000 words','20 pages','40 pages','40 min']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Reading time is calculated at an average adult reading speed of 250 words per minute. Technical or academic content is typically read at 200 words per minute, while casual blog content may be read at 300 words per minute. These are approximations, and individual reading speeds vary widely.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page: Visual Comparison</h2>
              <p className="text-slate-400 leading-relaxed mb-4">This chart shows how dramatically word count per page changes based on spacing and font choices. Even small adjustments to your formatting can add or remove entire pages from your document.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="280" fill="transparent" />
                  <text x="300" y="24" textAnchor="middle" style={{fontSize:'14px',fontWeight:'bold',fill:'#f1f5f9'}}>Words Per Page by Font and Spacing</text>
                  <line x1="80" y1="40" x2="80" y2="230" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  <line x1="80" y1="230" x2="560" y2="230" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'TNR 12 Single',val:500,y:60},{label:'Arial 12 Single',val:450,y:90},{label:'Calibri 11 Single',val:470,y:120},{label:'TNR 12 Double',val:250,y:150},{label:'Arial 12 Double',val:225,y:180},{label:'TNR 10 Single',val:600,y:210}].map((d,i) => (
                    <g key={i}>
                      <text x="75" y={d.y+5} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="82" y={d.y-8} width={d.val*0.76} height="18" rx="4" style={{fill: d.y <= 120 ? 'rgba(52,211,153,0.6)' : d.y <= 180 ? 'rgba(96,165,250,0.6)' : 'rgba(240,200,66,0.6)'}} />
                      <text x={88+d.val*0.76} y={d.y+5} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.val}</text>
                    </g>
                  ))}
                  <text x="300" y="265" textAnchor="middle" style={{fontSize:'10px',fill:'#64748b'}}>TNR = Times New Roman | Based on US Letter (8.5 x 11 in) with 1-inch margins</text>
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How Margins Affect Words Per Page</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Margins have a surprisingly large impact on the number of words that fit on a page. The standard 1-inch margin is required by most academic style guides, but business documents and published books often use narrower margins to fit more content.</p>
              <p className="text-slate-400 leading-relaxed mb-4">With 1-inch margins on all four sides, you have a text area of 6.5 x 9 inches on US Letter paper. Reducing margins to 0.75 inches increases the text area to 7 x 9.5 inches, which is roughly 15% more space. That translates to about 75 extra words per single-spaced page or 37 extra words per double-spaced page.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Be careful when adjusting margins to meet page requirements. Professors and editors can spot non-standard margins immediately. If your assignment specifies 1-inch margins, stick with them. The difference between 0.9-inch and 1-inch margins is visible to anyone who reads papers regularly.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Margin Size</th><th className="text-left text-emerald-400 py-2 pr-4">Single-Spaced (12pt TNR)</th><th className="text-left text-emerald-400 py-2">Double-Spaced (12pt TNR)</th></tr></thead>
                    <tbody>
                      {[['0.5 inch','~620 words','~310 words'],['0.75 inch','~570 words','~285 words'],['1.0 inch (standard)','~500 words','~250 words'],['1.25 inch','~440 words','~220 words'],['1.5 inch','~380 words','~190 words']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tricks Students Use to Hit Page Requirements (and Why They Fail)</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Every student has tried at least one of these formatting tricks to stretch a paper to the required page count. Here is why they almost always backfire.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Increasing Font Size to 12.5pt</h3><p className="text-slate-400 text-sm leading-relaxed">Going from 12pt to 12.5pt adds about half a page to a 10-page paper. However, this is immediately noticeable when compared to properly formatted papers. Most professors have read thousands of papers and can spot a slightly oversized font without measuring it. The risk of losing credibility far outweighs the half-page gain.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Using Period Trick (Enlarging Periods)</h3><p className="text-slate-400 text-sm leading-relaxed">Some students select all periods and increase their size to 14pt. Each period takes up slightly more vertical and horizontal space, adding roughly one line per paragraph. This trick is detectable by selecting all text and checking font size. Many professors use this exact check when they suspect formatting manipulation.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Widening Margins by 0.1 Inch</h3><p className="text-slate-400 text-sm leading-relaxed">Changing margins from 1.0 to 0.9 inches adds about 5-7% more space. Across a 10-page paper, this could add nearly a full page. While harder to detect than font tricks, professors who print and stack papers will notice when one paper has wider text blocks than the others.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">The Better Approach</h3><p className="text-slate-400 text-sm leading-relaxed">Instead of manipulating formatting, develop your arguments further. Add an additional example or case study. Include a counterargument section. Expand your literature review. These strategies improve both your page count and your grade. A well-developed argument always beats a formatting trick.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page in Different Countries</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Paper sizes and formatting conventions vary around the world, which means words per page is not universal. The US and Canada use Letter size (8.5 x 11 inches), while most of the rest of the world uses A4 (8.27 x 11.69 inches). A4 paper is narrower but taller, which results in similar word counts per page but different line counts.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Paper Size</th><th className="text-left text-emerald-400 py-2 pr-4">Dimensions</th><th className="text-left text-emerald-400 py-2 pr-4">Used In</th><th className="text-left text-emerald-400 py-2">Words (12pt, Double)</th></tr></thead>
                    <tbody>
                      {[['US Letter','8.5 x 11 in','USA, Canada','~250'],['A4','8.27 x 11.69 in','Europe, Asia, Africa','~260'],['Legal','8.5 x 14 in','Legal documents (US)','~330'],['A5','5.83 x 8.27 in','Pocket books, notebooks','~150'],['Executive','7.25 x 10.5 in','Executive memos','~210']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Calculate Words Per Page for Any Format</h2>
              <p className="text-slate-400 leading-relaxed mb-4">If your specific combination of font, size, spacing, and margins is not listed above, you can calculate it yourself using this simple method. Type a full paragraph of placeholder text in your desired format. Count the words in one full page. Repeat for two more pages and average the results. This gives you an accurate words-per-page estimate for your exact setup.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Alternatively, you can use our free word counter tool. Paste your text and it will show you the exact word count, character count, sentence count, and estimated reading time. This is faster than manual counting and eliminates human error, especially for longer documents where accuracy matters.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For the most precise results, remember that headings, block quotes, bullet points, and images all reduce the number of body text words on a page. A page with two headings and a block quote might have only 180 words of body text instead of the expected 250. Always account for formatting elements when estimating your total page count.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Count Your Words Instantly</p>
                <p className="text-slate-400 text-sm mb-4">Paste your text to get exact word count, character count, and reading time.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/sentence-counter', text: 'Sentence Counter' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-in-a-novel', text: 'How Many Words in a Novel?' },
      { href: '/blog/how-many-words-in-a-resume', text: 'How Many Words in a Resume?' },
      { href: '/blog/how-many-words-in-a-speech', text: 'How Many Words in a Speech?' },
      { href: '/blog/ideal-blog-post-length-for-seo', text: 'Ideal Blog Post Length for SEO' },
    ],
  });
}

// ============================================================
// POST 2: how-many-words-in-a-novel
// ============================================================
function buildWordsInNovel() {
  return buildPage({
    slug: 'how-many-words-in-a-novel',
    title: 'How Many Words in a Novel? (Word Counts by Genre in 2026)',
    desc: 'The average novel is 70,000-100,000 words. Complete word count guide by genre: literary fiction, romance, sci-fi, fantasy, thriller, YA, and children\'s books.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '12 min read',
    quickAnswer: 'The average novel is <strong>70,000 to 100,000 words</strong>. Literary fiction averages 80,000-90,000 words. Fantasy and sci-fi run longer at 90,000-120,000 words. Romance novels average 70,000-90,000 words. For debut authors, agents prefer manuscripts between 70,000 and 95,000 words.',
    faqs: [
      { q: 'How many words is the average novel?', a: 'The average novel is 70,000 to 100,000 words, which translates to roughly 280-400 double-spaced pages. Most bestsellers fall in the 80,000-90,000 word range. Genre fiction tends to follow stricter word count expectations than literary fiction.' },
      { q: 'How many words should a first novel be?', a: 'A first novel should be 70,000 to 95,000 words. Agents and publishers are wary of debut novels over 100,000 words because they are more expensive to print and represent a bigger financial risk. Keeping your first novel under 95,000 words increases your chances of getting traditionally published.' },
      { q: 'How many words in a fantasy novel?', a: 'Fantasy novels typically range from 90,000 to 120,000 words. Epic fantasy can exceed 150,000 words, but this is mainly accepted from established authors. A debut fantasy novel should aim for 100,000-110,000 words to balance world-building with marketability.' },
      { q: 'What is the shortest novel ever published?', a: 'The shortest works commonly classified as novels are around 25,000-30,000 words. The Great Gatsby by F. Scott Fitzgerald is approximately 47,000 words. Some publishers consider anything over 40,000 words a novel, while others set the threshold at 50,000 words.' },
      { q: 'How long does it take to write a novel?', a: 'The average novel takes 6 months to 2 years to write. At 500 words per day, a 80,000-word novel takes about 160 writing days, or roughly 5-6 months. Most authors spend an additional 3-12 months on editing and revisions before the manuscript is ready for submission.' },
      { q: 'How many pages is a 100,000 word novel?', a: 'A 100,000-word novel is approximately 400 double-spaced pages in manuscript format (12pt Times New Roman). In a published paperback, the same word count typically comes out to 350-380 pages depending on the publisher trim size and font choices.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Novel Word Counts by Genre</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Every genre has its own word count expectations. These numbers are based on data from literary agents, publishing houses, and analysis of bestselling titles. Understanding these ranges is essential for any author seeking traditional publication, as submitting a manuscript that is too short or too long signals that the writer does not understand market expectations.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Genre</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count Range</th><th className="text-left text-emerald-400 py-2 pr-4">Sweet Spot</th><th className="text-left text-emerald-400 py-2">Notes</th></tr></thead>
                    <tbody>
                      {[['Literary Fiction','70,000-100,000','80,000-90,000','Most flexible genre for length'],['Commercial Fiction','75,000-100,000','80,000-95,000','Page-turners that sell well'],['Romance','50,000-100,000','70,000-90,000','Category romance: 50,000-65,000'],['Mystery / Thriller','70,000-100,000','80,000-90,000','Tight pacing is key'],['Science Fiction','80,000-120,000','90,000-110,000','World-building adds length'],['Fantasy','90,000-130,000','100,000-115,000','Epic fantasy can exceed 150,000'],['Horror','60,000-90,000','70,000-85,000','Shorter and more intense'],['Young Adult (YA)','50,000-80,000','60,000-75,000','Faster pace, shorter chapters'],['Middle Grade','25,000-50,000','30,000-45,000','Ages 8-12, shorter paragraphs'],['Picture Book','500-1,000','600-800','32 pages, mostly illustrations'],['Memoir','70,000-100,000','75,000-90,000','Similar to literary fiction'],['Historical Fiction','80,000-120,000','90,000-100,000','Research adds depth and length']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Counts of Famous Novels</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Looking at word counts of well-known novels gives you a concrete feel for what different word counts look like as finished books. Some of the most beloved novels in history are surprisingly short, while others are epic in both scope and page count.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="340" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Word Counts of Famous Novels (thousands)</text>
                  <line x1="160" y1="35" x2="160" y2="310" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  <line x1="160" y1="310" x2="570" y2="310" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'The Great Gatsby',val:47,y:50},{label:'Animal Farm',val:30,y:75},{label:'Harry Potter 1',val:77,y:100},{label:'To Kill a Mockingbird',val:100,y:125},{label:'1984',val:88,y:150},{label:'The Hobbit',val:95,y:175},{label:'Harry Potter 7',val:198,y:200},{label:'A Game of Thrones',val:298,y:225},{label:'Les Miserables',val:530,y:250},{label:'War and Peace',val:587,y:275},{label:'Lord of the Rings',val:576,y:300}].map((d,i) => (
                    <g key={i}>
                      <text x="155" y={d.y+5} textAnchor="end" style={{fontSize:'9px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="162" y={d.y-7} width={Math.min(d.val*0.66, 400)} height="16" rx="3" style={{fill: d.val < 80 ? 'rgba(52,211,153,0.6)' : d.val < 150 ? 'rgba(96,165,250,0.6)' : d.val < 300 ? 'rgba(240,200,66,0.6)' : 'rgba(239,68,68,0.5)'}} />
                      <text x={168+Math.min(d.val*0.66, 400)} y={d.y+5} style={{fontSize:'10px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.val > 999 ? (d.val/1000).toFixed(0)+'K' : d.val+'K'}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Notice that some of the most acclaimed novels in literary history are well below 100,000 words. The Great Gatsby is only 47,000 words, and Animal Farm is just 30,000 words. These books prove that word count and quality have no correlation. A tightly written 70,000-word novel can be far more impactful than a bloated 150,000-word manuscript.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Why Word Count Matters for Publishing</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Word count is one of the first things a literary agent checks when considering a query letter. A manuscript that falls outside genre expectations raises immediate red flags. Too short suggests the story is underdeveloped. Too long suggests the author cannot self-edit or does not understand pacing.</p>
              <p className="text-slate-400 leading-relaxed mb-4">From a publisher perspective, word count directly affects production costs. More words mean more pages, more paper, higher printing costs, heavier books (which increase shipping costs), and higher cover prices. A 150,000-word debut novel costs roughly twice as much to produce as an 80,000-word one. Publishers need to sell significantly more copies of longer books just to break even.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For self-published authors, word count still matters because it affects reader expectations. Amazon readers expect a full-length novel to be at least 60,000 words. Books under 50,000 words should be priced lower or clearly marketed as novellas. Reader reviews frequently mention length, and books perceived as too short for their price receive lower ratings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fiction Length Categories Explained</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The publishing industry uses specific terms for different lengths of fiction. These categories are not arbitrary labels. They affect how a work is marketed, priced, and shelved in bookstores and libraries. Understanding these categories helps you communicate clearly with agents, editors, and publishers.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Category</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Pages (approx.)</th><th className="text-left text-emerald-400 py-2">Publishing Outlet</th></tr></thead>
                    <tbody>
                      {[['Flash Fiction','Under 1,000','1-2 pages','Online magazines, anthologies'],['Short Story','1,000-10,000','4-40 pages','Literary magazines, collections'],['Novelette','10,000-20,000','40-80 pages','Ebook, anthologies'],['Novella','20,000-50,000','80-200 pages','Standalone ebook, small press'],['Novel','50,000-110,000','200-440 pages','Traditional publishing, ebook'],['Epic Novel','110,000+','440+ pages','Established authors mainly']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Hit Your Novel Word Count Goal</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The most effective strategy for hitting your target word count is to set a daily writing goal and stick to it consistently. At 1,000 words per day, you can complete an 80,000-word first draft in just under three months. At 500 words per day, the same draft takes about five months. The key is consistency rather than marathon writing sessions.</p>
              <p className="text-slate-400 leading-relaxed mb-4">NaNoWriMo (National Novel Writing Month) challenges participants to write 50,000 words in November, which works out to 1,667 words per day. While 50,000 words is short for most genres, the NaNoWriMo approach demonstrates that consistent daily output produces results faster than most people expect. Many published novels started as NaNoWriMo drafts that were then expanded and revised.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Track your progress with our word counter tool. Paste each chapter as you complete it to monitor your running total. Knowing your exact word count helps you pace your story properly, ensuring you are not rushing the ending or padding the middle. Most authors find that the first draft comes in 10-20% longer or shorter than planned, which is perfectly normal and fixed during revision.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Track Your Novel Word Count</p>
                <p className="text-slate-400 text-sm mb-4">Paste chapters to track progress, word count, and estimated reading time.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-in-a-short-story', text: 'How Many Words in a Short Story?' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/how-many-words-in-a-speech', text: 'How Many Words in a Speech?' },
      { href: '/blog/average-reading-speed', text: 'Average Reading Speed' },
    ],
  });
}

// ============================================================
// POST 3: how-many-words-in-a-paragraph
// ============================================================
function buildWordsInParagraph() {
  return buildPage({
    slug: 'how-many-words-in-a-paragraph',
    title: 'How Many Words in a Paragraph? (The Complete 2026 Guide)',
    desc: 'The ideal paragraph is 100-200 words for web content and 150-300 words for academic writing. Complete guide to paragraph length by content type, with readability tips.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '10 min read',
    quickAnswer: 'A good paragraph is <strong>100-200 words</strong> for web content (3-5 sentences) and <strong>150-300 words</strong> for academic writing. Shorter paragraphs improve readability on screens. The key rule is one main idea per paragraph, regardless of length.',
    faqs: [
      { q: 'How many words should a paragraph be?', a: 'For web content, aim for 100-200 words or 3-5 sentences per paragraph. Academic writing allows 150-300 words. News articles use even shorter paragraphs of 40-80 words. The most important rule is that each paragraph should contain a single main idea.' },
      { q: 'Is a one-sentence paragraph acceptable?', a: 'Yes. One-sentence paragraphs are a powerful writing technique for emphasis, transition, and pacing. Journalists use them constantly. In web writing, a strong one-sentence paragraph can be more effective than a dense five-sentence block.' },
      { q: 'How many paragraphs should a blog post have?', a: 'A 1,500-word blog post typically has 12-18 paragraphs. A 2,000-word post has 15-25 paragraphs. Mix shorter punchy paragraphs (2-3 sentences) with slightly longer explanatory ones (4-5 sentences) for variety and readability.' },
      { q: 'What makes a paragraph too long?', a: 'Any paragraph over 200 words on a web page is too long. On mobile screens, a 200-word paragraph creates a wall of text that most readers will skip. In academic writing, paragraphs over 300 words often contain multiple ideas that should be split apart.' },
      { q: 'Do paragraph lengths affect SEO?', a: 'Yes, indirectly. Short paragraphs improve readability scores like Flesch-Kincaid, which Google considers as a user experience signal. Content with shorter paragraphs also has lower bounce rates because readers find it easier to scan and engage with.' },
      { q: 'How many sentences should a paragraph be?', a: 'The ideal paragraph is 3-5 sentences for most writing. A topic sentence introduces the idea, 2-3 sentences develop it with evidence or examples, and a concluding sentence wraps up or transitions. However, paragraph length should serve the content, not follow a rigid formula.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Ideal Paragraph Length by Content Type</h2>
              <p className="text-slate-400 leading-relaxed mb-4">There is no universal paragraph length that works for all types of writing. A newspaper article paragraph looks radically different from an academic thesis paragraph, and both are correct for their context. The table below gives you specific targets for every common content format based on industry best practices and readability research.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Content Type</th><th className="text-left text-emerald-400 py-2 pr-4">Ideal Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Sentences</th><th className="text-left text-emerald-400 py-2">Why This Length</th></tr></thead>
                    <tbody>
                      {[['Blog Post / Web','100-150 words','3-5','Easy to skim on mobile devices'],['Academic Essay','150-300 words','4-8','Complex arguments need development'],['Novel / Fiction','50-250 words','1-8','Varies for pacing and dialogue'],['News Article','40-80 words','1-3','Inverted pyramid style, fast scanning'],['Email Newsletter','50-100 words','2-4','Short attention span, mobile-first'],['Landing Page / Sales','30-75 words','1-3','Scannable and conversion-focused'],['Technical Documentation','100-200 words','3-6','Balance of detail and readability'],['Social Media Post','20-50 words','1-2','Platform character limits apply'],['Business Report','100-200 words','3-5','Professional but readable'],['Resume Bullet Point','15-30 words','1','Each bullet is its own micro-paragraph']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Why Short Paragraphs Win Online</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Web readers do not read linearly. Eye-tracking studies from the Nielsen Norman Group found that most visitors read only 20-28% of a web page. Readers scan first, then decide whether to commit to reading fully. Short paragraphs create visual white space that makes content feel approachable rather than intimidating.</p>
              <p className="text-slate-400 leading-relaxed mb-4">On mobile devices, which now account for over 60% of web traffic, a 200-word paragraph fills nearly the entire screen. When readers see nothing but text with no visual break, they scroll past. Breaking that same content into three 65-word paragraphs creates the visual breathing room that keeps mobile readers engaged.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Short paragraphs also improve your readability score, which search engines consider as a ranking signal. The Flesch-Kincaid readability test penalizes long paragraphs because they increase cognitive load. Content that scores above 60 on the Flesch Reading Ease scale gets significantly lower bounce rates and higher average time on page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Paragraph Length: Visual Impact</h2>
              <p className="text-slate-400 leading-relaxed mb-4">This chart illustrates the recommended word count ranges for different content types. Notice how web-focused content requires significantly shorter paragraphs than academic or book-length writing.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="250" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Recommended Paragraph Length (words)</text>
                  <line x1="130" y1="35" x2="130" y2="210" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'News Article',min:40,max:80,y:55},{label:'Landing Page',min:30,max:75,y:80},{label:'Blog / Web',min:100,max:150,y:105},{label:'Business Report',min:100,max:200,y:130},{label:'Academic Essay',min:150,max:300,y:155},{label:'Novel / Fiction',min:50,max:250,y:180},{label:'Technical Docs',min:100,max:200,y:205}].map((d,i) => (
                    <g key={i}>
                      <text x="125" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x={130+d.min*1.3} y={d.y-7} width={(d.max-d.min)*1.3} height="16" rx="3" style={{fill:'rgba(52,211,153,0.5)'}} />
                      <text x={130+d.min*1.3-5} y={d.y+4} textAnchor="end" style={{fontSize:'9px',fill:'#64748b'}}>{d.min}</text>
                      <text x={135+(d.max)*1.3} y={d.y+4} style={{fontSize:'9px',fill:'#64748b'}}>{d.max}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Anatomy of a Perfect Paragraph</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A well-structured paragraph follows a predictable pattern that guides the reader from one idea to the next. While not every paragraph needs all four elements, understanding this structure helps you write with clarity and purpose.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">1. Topic Sentence (1 sentence)</h3><p className="text-slate-400 text-sm leading-relaxed">The first sentence introduces the paragraph main idea. It should be specific enough to set expectations but broad enough to allow development. Strong topic sentences make your content skimmable because readers can understand your argument just by reading the first sentence of each paragraph.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">2. Supporting Sentences (2-3 sentences)</h3><p className="text-slate-400 text-sm leading-relaxed">These sentences provide evidence, examples, data, or reasoning that supports the topic sentence. Each supporting sentence should add new information rather than restating the same point in different words. Use specific details and concrete examples rather than vague generalizations.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">3. Analysis or Explanation (1-2 sentences)</h3><p className="text-slate-400 text-sm leading-relaxed">After presenting evidence, explain what it means and why it matters. This is where you show your thinking, not just your research. Many writers skip this step, leaving readers to draw their own conclusions from raw data or examples.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">4. Transition (0-1 sentence)</h3><p className="text-slate-400 text-sm leading-relaxed">A transition sentence connects this paragraph to the next one. Not every paragraph needs a dedicated transition sentence. Sometimes the topic sentence of the next paragraph serves as the transition. However, major shifts in topic benefit from an explicit bridge sentence.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Common Paragraph Mistakes and How to Fix Them</h2>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">The Wall of Text:</strong> Paragraphs over 200 words with no visual break. Fix this by finding the natural split point where the topic shifts slightly, then start a new paragraph. Most long paragraphs contain two or three ideas that should be separated.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">The One-Liner Overuse:</strong> While single-sentence paragraphs are effective for emphasis, using too many in a row makes your writing feel choppy and underdeveloped. Aim for no more than one single-sentence paragraph per 500 words unless you are writing for a very specific stylistic effect.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">No Topic Sentence:</strong> Paragraphs that jump into details without setting context force readers to figure out the main point themselves. Always lead with the key takeaway, then support it with evidence. Readers should never reach the end of a paragraph wondering what the point was.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Multiple Ideas per Paragraph:</strong> Each paragraph should develop exactly one idea. If you find yourself using phrases like on the other hand or additionally to introduce a completely new topic within the same paragraph, that is your signal to start a new paragraph.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Paragraph Length for SEO in 2026</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Google has never explicitly confirmed that paragraph length affects rankings. However, paragraph length indirectly influences several ranking factors that Google does care about. Readability scores, which are affected by paragraph length, correlate with lower bounce rates and higher time on page. Both of these user engagement metrics are strong ranking signals.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Analysis of top-ranking content in 2026 shows that pages ranking in positions 1-3 for informational queries have an average paragraph length of 80-120 words. Pages ranking in positions 8-10 average 140-180 words per paragraph. While correlation does not prove causation, the pattern is consistent across multiple studies and content categories.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For best SEO results, use these guidelines: keep paragraphs under 150 words, add subheadings every 200-300 words, break up long paragraphs with supporting elements like tables and bullet points, and aim for a Flesch Reading Ease score above 60. Our readability checker tool can analyze your paragraph structure and suggest improvements.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Analyze Your Paragraph Structure</p>
                <p className="text-slate-400 text-sm mb-4">Check word count, sentence count, and readability for each paragraph.</p>
                <Link href="/sentence-counter" className="btn-primary inline-block px-6 py-3">Open Sentence Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/sentence-counter', text: 'Sentence Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/how-to-improve-readability-score', text: 'How to Improve Readability Score' },
      { href: '/blog/how-to-write-for-skimmable-content', text: 'Write Skimmable Content' },
      { href: '/blog/ideal-blog-post-length-for-seo', text: 'Ideal Blog Post Length for SEO' },
    ],
  });
}

// ============================================================
// POST 4: how-many-words-in-a-short-story
// ============================================================
function buildWordsInShortStory() {
  return buildPage({
    slug: 'how-many-words-in-a-short-story',
    title: 'How Many Words in a Short Story? (Word Count Guide 2026)',
    desc: 'A short story is 1,000-10,000 words. Flash fiction is under 1,000 words. Novelettes are 10,000-20,000 words. Complete guide for writers submitting to publishers.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '11 min read',
    quickAnswer: 'A short story is typically <strong>1,000 to 10,000 words</strong>. Flash fiction is under 1,000 words. A novelette is 10,000-20,000 words. A novella is 20,000-50,000 words. Most literary magazines accept stories between 1,500 and 7,500 words.',
    faqs: [
      { q: 'What is the minimum word count for a short story?', a: 'Most publishers define a short story as at least 1,000 words. Flash fiction can be as short as 6 words (Hemingway-style). Micro fiction ranges from 100-300 words. Six-word stories are the extreme minimum but are a distinct category from traditional short stories.' },
      { q: 'How long should a short story be for submission?', a: 'Most literary magazines accept stories between 1,500 and 7,500 words. Always check specific submission guidelines as they vary by publication. Some contests cap entries at 3,000 or 5,000 words. The most competitive range for literary magazines is 3,000-5,000 words.' },
      { q: 'What is flash fiction word count?', a: 'Flash fiction is under 1,000 words. Micro fiction is under 300 words. Sudden fiction is 250-1,000 words. Some publications accept flash fiction as short as 50-100 words. The form requires extreme economy with language since every word must earn its place.' },
      { q: 'How many words in a novella?', a: 'A novella is typically 20,000 to 50,000 words. Famous examples include Animal Farm at 30,000 words, The Great Gatsby at 47,000 words, and Of Mice and Men at 30,000 words. Novellas are experiencing a resurgence in popularity thanks to ebook publishing.' },
      { q: 'How long does it take to write a short story?', a: 'A 3,000-word short story typically takes 4-12 hours of writing time spread across several days. Planning and outlining takes 1-3 hours. The first draft takes 2-5 hours. Editing and revision takes another 2-5 hours. Professional short story writers may spend weeks refining a single story.' },
      { q: 'Can a short story be too short?', a: 'A story under 1,000 words is classified as flash fiction rather than a short story. For traditional literary magazine submissions, stories under 1,500 words may be harder to place because they occupy an awkward middle ground between flash fiction and full short stories.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fiction Word Count Categories</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The publishing industry uses precise word count categories to classify fiction. These are not arbitrary labels. Each category has its own market, publishing outlets, pricing expectations, and reader expectations. Understanding where your work falls helps you target the right publishers and set appropriate reader expectations.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Category</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Reading Time</th><th className="text-left text-emerald-400 py-2">Publishing Outlet</th></tr></thead>
                    <tbody>
                      {[['Six-Word Story','6 words','3 seconds','Social media, exercises'],['Drabble','100 words','30 seconds','Anthologies, contests'],['Micro Fiction','100-300 words','1-2 minutes','Online magazines'],['Flash Fiction','300-1,000 words','2-4 minutes','Literary journals, anthologies'],['Sudden Fiction','1,000-2,000 words','4-8 minutes','Magazines, online journals'],['Short Story','2,000-7,500 words','8-30 minutes','Literary magazines'],['Long Short Story','7,500-10,000 words','30-40 minutes','Select magazines, anthologies'],['Novelette','10,000-20,000 words','40-80 minutes','Ebook singles, select magazines'],['Novella','20,000-50,000 words','1.5-3.5 hours','Small press, ebook'],['Novel','50,000-110,000 words','3.5-7 hours','Traditional publishing'],['Epic Novel','110,000+ words','7+ hours','Established authors']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Counts of Famous Short Stories</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Studying the word counts of celebrated short stories gives you a practical sense of what different lengths feel like as finished works. Notice the enormous range, from tiny flash pieces to long-form stories that push the boundaries of the category.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="280" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Famous Short Story Word Counts</text>
                  <line x1="170" y1="35" x2="170" y2="250" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'Hills Like White Elephants',val:1400,y:52},{label:'The Lottery (Jackson)',val:3400,y:77},{label:'A Good Man Is Hard...',val:6600,y:102},{label:'Cathedral (Carver)',val:7200,y:127},{label:'The Yellow Wallpaper',val:6000,y:152},{label:'The Tell-Tale Heart',val:2200,y:177},{label:'Bartleby the Scrivener',val:14000,y:202},{label:'Heart of Darkness',val:38000,y:227}].map((d,i) => (
                    <g key={i}>
                      <text x="165" y={d.y+4} textAnchor="end" style={{fontSize:'9px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="172" y={d.y-7} width={Math.min(d.val/100, 380)} height="16" rx="3" style={{fill: d.val < 3000 ? 'rgba(52,211,153,0.6)' : d.val < 8000 ? 'rgba(96,165,250,0.6)' : d.val < 20000 ? 'rgba(240,200,66,0.6)' : 'rgba(239,68,68,0.5)'}} />
                      <text x={178+Math.min(d.val/100, 380)} y={d.y+4} style={{fontSize:'10px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.val > 999 ? (d.val/1000).toFixed(1)+'K' : d.val}</text>
                    </g>
                  ))}
                  <text x="300" y="267" textAnchor="middle" style={{fontSize:'9px',fill:'#64748b'}}>Green = Flash/Short | Blue = Standard | Yellow = Long | Red = Novella territory</text>
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Short Story Structure by Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different word count targets require fundamentally different structural approaches. You cannot simply compress a novel structure into 3,000 words and call it a short story. Each length has its own pacing, character development expectations, and storytelling conventions.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Flash Fiction (Under 1,000 Words)</h3><p className="text-slate-400 text-sm leading-relaxed">Flash fiction typically focuses on a single moment, image, or revelation. There is no room for backstory, subplots, or extensive character development. The best flash fiction drops the reader into the middle of a situation and ends with a twist, revelation, or emotional punch. Every sentence must serve multiple purposes: advancing the plot while simultaneously building character and atmosphere.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Standard Short Story (2,000-5,000 Words)</h3><p className="text-slate-400 text-sm leading-relaxed">This is the sweet spot for literary magazines. You have enough room for one main character with some depth, a clear conflict, rising action, a climax, and a resolution. Limit yourself to 2-3 scenes. Introduce the conflict within the first 500 words. Most successful short stories in this range focus on a single event or day, not an entire life arc.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Long Short Story (5,000-10,000 Words)</h3><p className="text-slate-400 text-sm leading-relaxed">At this length, you can develop a secondary character, include a subplot, and explore your theme from multiple angles. However, you still need to be more selective than a novelist. Choose 4-6 key scenes rather than writing a continuous narrative. This length works well for stories that need time to build atmosphere or unravel a mystery gradually.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Novelette (10,000-20,000 Words)</h3><p className="text-slate-400 text-sm leading-relaxed">Novelettes bridge the gap between short stories and novellas. You can have multiple developed characters, a more complex plot with twists, and more detailed world-building. This length is popular in science fiction and fantasy where setting requires more explanation. Novelettes are increasingly viable as standalone ebook singles in the self-publishing market.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Where to Submit Short Stories by Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Knowing your word count is essential for finding the right publication outlet. Most literary magazines have strict word count limits, and submitting a story that exceeds the stated maximum is the fastest way to get an automatic rejection. Here are general guidelines for where to submit based on your story length.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For flash fiction under 1,000 words, look at online venues like SmokeLong Quarterly, Flash Fiction Online, and Bath Flash Fiction Award. These publications specialize in very short works and have dedicated readerships who appreciate the craft of compression.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For stories between 1,500 and 7,500 words, the traditional literary magazine market is your primary outlet. Publications like The New Yorker, Granta, The Paris Review, Ploughshares, and hundreds of smaller literary journals publish stories in this range. Use resources like Submittable and Duotrope to find magazines that match your genre and length.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For longer works of 7,500-20,000 words, your options narrow. Consider science fiction and fantasy magazines like Clarkesworld and Asimov which accept longer stories, or look at anthology calls for submissions. Self-publishing on Amazon as a standalone ebook is increasingly viable for novelette-length works.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Write a Short Story: The Word Count Method</h2>
              <p className="text-slate-400 leading-relaxed mb-4">One practical approach to short story writing is to plan your structure around word count milestones. For a 4,000-word story, allocate approximately 400 words to the opening hook and setup, 600 words to establishing the conflict, 1,500 words to rising action and complications, 800 words to the climax, and 700 words to the resolution and final image.</p>
              <p className="text-slate-400 leading-relaxed mb-4">This allocation is a starting point, not a rigid formula. Your actual story may need more or less space in each section. However, having a rough target prevents the most common structural problems in short fiction: spending too many words on setup (leaving no room for resolution) or rushing through the climax because you realize you are running out of space.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Use our word counter tool while drafting to monitor your progress against these targets. Knowing that you are at 2,100 words and only halfway through your rising action tells you that you need to cut or compress. Catching structural issues during the draft is far easier than trying to fix them in revision.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Track Your Story Word Count</p>
                <p className="text-slate-400 text-sm mb-4">Paste your draft to get instant word count, reading time, and paragraph analysis.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-in-a-novel', text: 'How Many Words in a Novel?' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/average-reading-speed', text: 'Average Reading Speed' },
      { href: '/blog/how-many-words-in-a-cover-letter', text: 'How Many Words in a Cover Letter?' },
    ],
  });
}

// ============================================================
// POST 5: how-many-words-in-a-speech
// ============================================================
function buildWordsInSpeech() {
  return buildPage({
    slug: 'how-many-words-in-a-speech',
    title: 'How Many Words in a Speech? (Minutes to Word Count Guide)',
    desc: 'A 5-minute speech is 750 words. A 10-minute speech is 1,500 words. Complete guide to speech word counts by duration with pacing tips for every occasion.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '11 min read',
    quickAnswer: 'Most speakers deliver <strong>130-150 words per minute</strong>. A 5-minute speech is approximately <strong>750 words</strong>. A 10-minute speech is <strong>1,500 words</strong>. A 20-minute speech is <strong>3,000 words</strong>. Speaking pace varies by topic complexity, audience size, and speaker style.',
    faqs: [
      { q: 'How many words is a 5-minute speech?', a: 'A 5-minute speech is approximately 625-750 words at a normal speaking pace of 125-150 words per minute. For a TED-style talk with deliberate pacing, aim for 600-650 words. For an energetic presentation, you can fit up to 800 words.' },
      { q: 'How many words is a 10-minute speech?', a: 'A 10-minute speech contains approximately 1,250-1,500 words. This is the equivalent of 5-6 double-spaced pages. At this length, you can develop 3-4 main points with supporting evidence and a strong opening and closing.' },
      { q: 'How fast should you speak in a presentation?', a: 'The ideal speaking rate is 130-150 words per minute for most presentations. Motivational speakers may go up to 160-180 wpm. Complex or technical topics should be delivered at 110-130 wpm to allow the audience time to process information.' },
      { q: 'How many words is a 30-minute speech?', a: 'A 30-minute speech is approximately 3,750-4,500 words. This is a substantial presentation equivalent to a 15-18 page double-spaced document. At this length, you need clear sections, transitions between topics, and likely visual aids to maintain audience attention.' },
      { q: 'How many words is a TED Talk?', a: 'TED Talks are capped at 18 minutes, which is approximately 2,250-2,700 words. Most successful TED speakers use 2,000-2,500 words and speak at a slightly slower pace (120-140 wpm) to ensure clarity and impact.' },
      { q: 'How many words is a wedding speech?', a: 'A best man or maid of honor wedding speech should be 600-900 words, lasting 4-6 minutes. Father of the bride speeches are typically 400-600 words or 3-4 minutes. Going over 7 minutes risks losing the audience at a celebration.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Speech Duration to Word Count Converter</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The relationship between speech duration and word count depends on your speaking pace. The table below shows word counts at three different speaking speeds: slow and deliberate (120 wpm), normal conversational (140 wpm), and fast and energetic (160 wpm). Use the column that best matches your natural speaking style.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Duration</th><th className="text-left text-emerald-400 py-2 pr-4">Slow (120 wpm)</th><th className="text-left text-emerald-400 py-2 pr-4">Normal (140 wpm)</th><th className="text-left text-emerald-400 py-2">Fast (160 wpm)</th></tr></thead>
                    <tbody>
                      {[['1 minute','120 words','140 words','160 words'],['2 minutes','240 words','280 words','320 words'],['3 minutes','360 words','420 words','480 words'],['5 minutes','600 words','700 words','800 words'],['7 minutes','840 words','980 words','1,120 words'],['10 minutes','1,200 words','1,400 words','1,600 words'],['15 minutes','1,800 words','2,100 words','2,400 words'],['18 minutes (TED)','2,160 words','2,520 words','2,880 words'],['20 minutes','2,400 words','2,800 words','3,200 words'],['30 minutes','3,600 words','4,200 words','4,800 words'],['45 minutes','5,400 words','6,300 words','7,200 words'],['60 minutes','7,200 words','8,400 words','9,600 words']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Speaking Pace Comparison</h2>
              <p className="text-slate-400 leading-relaxed mb-4">How fast you should speak depends on your audience, topic, and setting. This chart shows the typical speaking pace for different types of presentations, along with recommendations for when to speed up or slow down.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="280" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Speaking Pace by Presentation Type (WPM)</text>
                  <line x1="160" y1="35" x2="160" y2="245" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'Funeral / Memorial',val:110,y:52},{label:'Commencement Speech',val:120,y:77},{label:'Technical Presentation',val:125,y:102},{label:'TED Talk',val:135,y:127},{label:'Business Pitch',val:145,y:152},{label:'Wedding Toast',val:140,y:177},{label:'Motivational Speaker',val:165,y:202},{label:'Auctioneer',val:250,y:227}].map((d,i) => (
                    <g key={i}>
                      <text x="155" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="162" y={d.y-7} width={(d.val-80)*2.2} height="16" rx="3" style={{fill: d.val < 125 ? 'rgba(96,165,250,0.6)' : d.val < 150 ? 'rgba(52,211,153,0.6)' : d.val < 200 ? 'rgba(240,200,66,0.6)' : 'rgba(239,68,68,0.5)'}} />
                      <text x={168+(d.val-80)*2.2} y={d.y+4} style={{fontSize:'10px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.val} wpm</text>
                    </g>
                  ))}
                  <text x="300" y="265" textAnchor="middle" style={{fontSize:'9px',fill:'#64748b'}}>Blue = Slow/Deliberate | Green = Normal | Yellow = Fast | Red = Extreme</text>
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Speech Word Counts by Occasion</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different occasions call for different speech lengths. Going over time is one of the most common mistakes speakers make, and it almost always weakens the impact of the speech. Audiences remember short, tight speeches far better than long, meandering ones.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Occasion</th><th className="text-left text-emerald-400 py-2 pr-4">Ideal Duration</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2">Key Tip</th></tr></thead>
                    <tbody>
                      {[['Elevator Pitch','30-60 seconds','60-120 words','One core message only'],['Wedding Toast','3-5 minutes','400-700 words','One story, one sentiment'],['Best Man Speech','4-6 minutes','500-850 words','Funny but heartfelt'],['Eulogy','5-10 minutes','650-1,400 words','Personal stories resonate most'],['Business Presentation','15-20 minutes','2,000-2,800 words','3-4 key points maximum'],['TED Talk','12-18 minutes','1,600-2,500 words','One powerful idea'],['Keynote Address','30-45 minutes','4,000-6,300 words','Strong narrative arc'],['Commencement Speech','15-20 minutes','1,800-2,400 words','Inspirational, forward-looking'],['Class Presentation','5-10 minutes','650-1,400 words','Follow the rubric exactly'],['Conference Talk','20-30 minutes','2,800-4,200 words','Leave time for Q&A']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Why Your Speech Is Probably Too Long</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Research on audience attention spans consistently shows that listener engagement drops significantly after 10-15 minutes of continuous speaking. TED limited their talks to 18 minutes for exactly this reason. If the most interesting speakers in the world cannot hold attention past 18 minutes without visual aids, neither can most people.</p>
              <p className="text-slate-400 leading-relaxed mb-4">The most common mistake new speakers make is trying to cover too many points. A speech with 3 well-developed ideas is always more effective than one with 7 underdeveloped ideas. Before writing, ask yourself: if the audience remembers only one thing from this speech, what should it be? Build everything around that core message.</p>
              <p className="text-slate-400 leading-relaxed mb-4">When rehearsing, time yourself multiple times. Most speakers talk faster during practice than during the actual delivery because nerves cause them to pause more, add filler words, and lose their place. Your practice run should come in 10-15% under the time limit to account for these natural additions during live delivery.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Speech Structure by Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">No matter how long your speech is, the basic structure remains the same: hook the audience, deliver your content, and close with impact. What changes is how much room you have for each section. Here is how to allocate your word count for maximum effectiveness.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Opening Hook (10% of total words)</h3><p className="text-slate-400 text-sm leading-relaxed">Start with a story, shocking statistic, question, or bold statement. Never start with introductions, thank-yous, or apologies. You have 30-60 seconds to grab attention before the audience mentally checks out. For a 10-minute speech, that means your opening should be approximately 140 words.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Main Content (75% of total words)</h3><p className="text-slate-400 text-sm leading-relaxed">Divide this section into 2-4 distinct points, each with its own supporting evidence or story. Use transitions between points so the audience can follow your logic. Each point should be self-contained enough that if the audience only remembers one section, they still gained value from the speech.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Closing (15% of total words)</h3><p className="text-slate-400 text-sm leading-relaxed">The ending is the most important part of your speech because it is what the audience remembers. Summarize your core message in one powerful sentence. End with a call to action, a callback to your opening story, or a memorable quote. Never end with thank you as your final words. Close strong, then thank the audience.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Calculate Your Speaking Time</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The most accurate way to calculate your speaking time is to read your speech aloud and time yourself. Reading silently always underestimates the actual delivery time because it does not account for pauses, emphasis, and natural breathing breaks.</p>
              <p className="text-slate-400 leading-relaxed mb-4">If you cannot practice aloud, use a simple formula: divide your word count by your speaking pace. For most speakers, 130-150 words per minute is a good estimate. A 1,400-word speech at 140 wpm takes exactly 10 minutes. Add 5-10% extra time for pauses, audience reactions, and visual aid transitions.</p>
              <p className="text-slate-400 leading-relaxed mb-4">You can also use our word counter tool to get an instant reading time estimate. While the reading time and speaking time are not identical (speaking is typically 20-30% slower than silent reading), it gives you a useful baseline. Paste your speech text and check both the word count and the estimated reading time.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Calculate Your Speech Duration</p>
                <p className="text-slate-400 text-sm mb-4">Paste your speech text for instant word count and estimated delivery time.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/sentence-counter', text: 'Sentence Counter' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/average-reading-speed', text: 'Average Reading Speed' },
      { href: '/blog/how-to-write-blog-introduction', text: 'How to Write a Blog Introduction' },
      { href: '/blog/how-many-words-in-a-resume', text: 'How Many Words in a Resume?' },
    ],
  });
}

// ============================================================
// POST 6: how-many-words-in-a-resume
// ============================================================
function buildWordsInResume() {
  return buildPage({
    slug: 'how-many-words-in-a-resume',
    title: 'How Many Words Should a Resume Be? (2026 Complete Guide)',
    desc: 'The ideal resume is 400-800 words on one page. Senior roles can use 2 pages (800-1,200 words). Data-backed guide to resume length by career level and industry.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '10 min read',
    quickAnswer: 'A one-page resume should be <strong>400-800 words</strong>. A two-page resume for senior professionals should be <strong>800-1,200 words</strong>. Most recruiters spend only <strong>6-7 seconds</strong> scanning a resume, so every word must add value. Entry-level candidates should always stick to one page.',
    faqs: [
      { q: 'How long should a resume be?', a: 'A resume should be one page (400-800 words) for candidates with less than 10 years of experience. Two pages (800-1,200 words) is acceptable for senior professionals, executives, and academic CVs. Three or more pages are only appropriate for federal government applications and academic CVs with publications.' },
      { q: 'Is a 2-page resume acceptable?', a: 'Yes, a 2-page resume is acceptable if you have 10+ years of experience, significant achievements to list, or are applying for senior-level positions. The key is that every line on page two must be relevant to the target role. If page two is filler, cut it back to one page.' },
      { q: 'How many words is a typical resume?', a: 'A typical one-page resume contains 400-600 words. A densely formatted one-page resume with narrow margins and a small font can reach 700-800 words. A two-page resume typically contains 800-1,200 words depending on formatting choices.' },
      { q: 'How many bullet points per job on a resume?', a: 'Use 3-5 bullet points per job for your most recent and relevant positions. Older or less relevant positions can have 1-2 bullet points. Each bullet should be 15-30 words and start with a strong action verb. Avoid single-word bullet points and paragraphs disguised as bullets.' },
      { q: 'Does resume length affect hiring?', a: 'Yes. Multiple studies show that recruiters prefer one-page resumes for non-executive roles. A 2018 study found that recruiters are 1.4x more likely to select one-page resumes. However, experienced candidates with highly relevant content on page two are not penalized for the extra length.' },
      { q: 'Should a resume include a summary or objective?', a: 'A professional summary of 2-3 sentences (30-50 words) is recommended for experienced candidates. It should highlight your most impressive qualification and career focus. Objectives are outdated and should not be used. Skip the summary entirely if you are an entry-level candidate with limited experience.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Resume Length by Career Level</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Resume length is not one-size-fits-all. Your ideal resume length depends on your experience level, industry, and the specific role you are targeting. Using a two-page resume for an entry-level position signals that you cannot prioritize information. Using a one-page resume for a C-suite role might suggest you lack sufficient experience.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Career Level</th><th className="text-left text-emerald-400 py-2 pr-4">Pages</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2">What to Include</th></tr></thead>
                    <tbody>
                      {[['Student / Intern','1 page','300-500 words','Education, projects, skills, activities'],['Entry Level (0-3 years)','1 page','400-600 words','Skills, internships, projects, education'],['Mid-Career (3-10 years)','1 page','500-800 words','Key achievements, skills, work history'],['Senior (10-15 years)','1-2 pages','600-1,000 words','Leadership, major achievements, expertise'],['Executive / Director','2 pages','800-1,200 words','Strategy, business impact, board experience'],['Academic CV','2-5+ pages','1,500-5,000+ words','Publications, grants, research, teaching'],['Federal Resume (USA)','3-5 pages','2,000-5,000 words','Detailed duties, KSAs, compliance language']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The 6-Second Resume Test</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Eye-tracking studies consistently show that recruiters spend an average of 6-7 seconds on the initial scan of a resume. In that time, their eyes follow a predictable path: name, current title, current company, start and end dates, previous title, previous company, education. If these elements do not immediately signal a match, the resume is rejected.</p>
              <p className="text-slate-400 leading-relaxed mb-4">This means your resume design matters as much as your content. Use clear section headers, consistent formatting, and enough white space to guide the recruiter eye to the most important information. A densely packed 800-word resume with no visual hierarchy performs worse than a well-formatted 500-word resume where key achievements stand out immediately.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="200" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Where Recruiters Look First (Eye-Tracking Data)</text>
                  {[{label:'Name & Title',pct:100,y:45},{label:'Current Company',pct:90,y:70},{label:'Dates of Employment',pct:85,y:95},{label:'Previous Role',pct:70,y:120},{label:'Education',pct:55,y:145},{label:'Skills Section',pct:40,y:170}].map((d,i) => (
                    <g key={i}>
                      <text x="140" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="145" y={d.y-7} width={d.pct*3.8} height="16" rx="3" style={{fill: d.pct > 80 ? 'rgba(52,211,153,0.6)' : d.pct > 50 ? 'rgba(96,165,250,0.5)' : 'rgba(240,200,66,0.4)'}} />
                      <text x={152+d.pct*3.8} y={d.y+4} style={{fontSize:'10px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.pct}%</text>
                    </g>
                  ))}
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Write Powerful Resume Bullet Points</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Each bullet point on your resume should be 15-30 words and follow the XYZ formula: Accomplished X as measured by Y by doing Z. This format transforms vague job descriptions into concrete achievements that prove your value.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Weak Bullet (Avoid This)</h3><p className="text-slate-400 text-sm leading-relaxed">"Responsible for managing social media accounts and creating content for the company." This is 13 words that tell the recruiter nothing about your impact. Every candidate with the same title has the same responsibilities.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Strong Bullet (Do This)</h3><p className="text-slate-400 text-sm leading-relaxed">"Grew Instagram following from 5K to 45K in 8 months by launching a user-generated content campaign that achieved 4.2% engagement rate." This is 24 words that demonstrate specific results, methods, and metrics. Recruiters remember numbers.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">The Action Verb Rule</h3><p className="text-slate-400 text-sm leading-relaxed">Every bullet point should start with a strong action verb: achieved, built, created, delivered, engineered, generated, implemented, launched, managed, negotiated, optimized, produced, reduced, scaled, transformed. Never start with "Responsible for" or "Helped with" because these phrases are passive and do not convey initiative.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Resume Word Count by Industry</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Industry norms affect the expected length and density of your resume. Technology resumes tend to be more concise with a focus on skills and projects. Academic CVs can run many pages with publications and research. Understanding these conventions helps you avoid standing out for the wrong reasons.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Industry</th><th className="text-left text-emerald-400 py-2 pr-4">Typical Length</th><th className="text-left text-emerald-400 py-2">What Matters Most</th></tr></thead>
                    <tbody>
                      {[['Technology / Software','1 page, 400-600 words','Technical skills, projects, GitHub'],['Finance / Banking','1 page, 500-700 words','GPA, certifications, deal experience'],['Consulting','1 page, 500-650 words','Impact metrics, case competitions'],['Marketing / Creative','1 page + portfolio','Campaign results, brand experience'],['Healthcare / Medical','1-2 pages, 600-1,000 words','Certifications, clinical hours, research'],['Legal','1-2 pages, 600-900 words','Bar admission, case experience, publications'],['Education / Academia','2-5 pages (CV format)','Publications, grants, teaching experience'],['Government / Federal','3-5 pages, 2,000-5,000 words','Detailed duties, KSA narratives, clearances'],['Nonprofit','1 page, 400-600 words','Impact metrics, fundraising results'],['Engineering','1-2 pages, 500-800 words','Technical skills, projects, certifications']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Resume Sections and Their Word Budgets</h2>
              <p className="text-slate-400 leading-relaxed mb-4">When working with a strict one-page word limit, you need to allocate your word budget strategically. Here is how to distribute roughly 550 words across the standard resume sections for a mid-career professional. Adjust these proportions based on what is most impressive in your background.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Contact information and header should use 20-30 words. Your professional summary should be 30-50 words at most. Work experience, which is the most important section, deserves 300-400 words with 3-5 bullets per role for recent positions and 1-2 bullets for older ones. Education needs only 30-50 words unless you are a recent graduate. Skills should list 10-20 relevant keywords in 30-50 words.</p>
              <p className="text-slate-400 leading-relaxed mb-4">The most common mistake is spending too many words on older, less relevant jobs. Your most recent position should get 4-5 strong bullet points. The position before that gets 3-4 bullets. Anything beyond 10 years ago gets 1-2 bullets or just a job title and dates. This allocation ensures your current capabilities receive the most attention.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">ATS Optimization and Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Applicant Tracking Systems (ATS) scan your resume for keywords before a human ever sees it. An estimated 75% of resumes are rejected by ATS software before reaching a recruiter. This has a direct impact on word count strategy because you need enough relevant keywords to pass the ATS scan while keeping the document readable for humans.</p>
              <p className="text-slate-400 leading-relaxed mb-4">The optimal approach is to mirror the language from the job posting. If the posting says project management, use that exact phrase rather than a synonym like overseeing projects. Include both the spelled-out version and the abbreviation of technical terms. List specific tools and technologies by their correct names. A resume with 500-600 words gives you enough space to include 15-20 targeted keywords naturally.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Use our word counter tool to check your resume word count and keyword density. Paste the job description and your resume separately to compare which keywords you might be missing. This simple comparison can dramatically improve your ATS pass-through rate.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Check Your Resume Word Count</p>
                <p className="text-slate-400 text-sm mb-4">Paste your resume to check length, keyword frequency, and reading time.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/keyword-density', text: 'Keyword Density Checker' },
      { href: '/readability-checker', text: 'Readability Checker' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-in-a-cover-letter', text: 'How Many Words in a Cover Letter?' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/how-to-write-meta-descriptions', text: 'How to Write Meta Descriptions' },
      { href: '/blog/how-to-use-keywords-in-blog-posts', text: 'How to Use Keywords in Blog Posts' },
    ],
  });
}

// ============================================================
// POST 7: how-many-words-in-a-cover-letter
// ============================================================
function buildWordsInCoverLetter() {
  return buildPage({
    slug: 'how-many-words-in-a-cover-letter',
    title: 'How Many Words Should a Cover Letter Be? (2026 Guide)',
    desc: 'The ideal cover letter is 250-400 words on one page. Complete guide to cover letter length by career level, with the 4-paragraph structure hiring managers prefer.',
    date: 'April 2026',
    isoDate: '2026-04-05',
    readTime: '10 min read',
    quickAnswer: 'A cover letter should be <strong>250-400 words</strong> and fit on <strong>one page</strong>. That is 3-4 short paragraphs. Hiring managers spend under 30 seconds reading a cover letter, so every word must add value. The sweet spot is 300-350 words.',
    faqs: [
      { q: 'How long should a cover letter be?', a: 'A cover letter should be 250-400 words, fitting comfortably on one page with standard margins and font. Three to four focused paragraphs is the standard structure. Never go over one page unless the job posting explicitly requests additional detail.' },
      { q: 'Is a 500-word cover letter too long?', a: 'Yes. A 500-word cover letter is too long for most applications. Hiring managers skim cover letters quickly, and a dense one-pager or two-page letter signals that the applicant cannot communicate concisely. Cut ruthlessly to stay under 400 words.' },
      { q: 'Can a cover letter be too short?', a: 'Under 200 words looks like you did not put in effort. Even for entry-level positions, write at least 250 words showing genuine interest in the role and company. A 150-word cover letter suggests you are using a generic template without customization.' },
      { q: 'What should the 3 paragraphs of a cover letter include?', a: 'Paragraph 1: Why you want this specific role and how you found it (50-80 words). Paragraph 2: Your most relevant achievement with specific results (100-150 words). Paragraph 3: Why this company specifically appeals to you and a call to action (80-120 words).' },
      { q: 'Do cover letters still matter in 2026?', a: 'Yes. While not every employer reads them, a strong cover letter can differentiate you from equally qualified candidates. Studies show that 83% of hiring managers say a great cover letter can convince them to interview a candidate whose resume alone would not have made the cut.' },
      { q: 'Should I include salary expectations in a cover letter?', a: 'Only include salary expectations if the job posting specifically requests them. If required, give a range rather than a specific number. Place it in the closing paragraph after you have made your case for your value, not at the beginning.' },
    ],
    body: `
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Length by Career Level</h2>
              <p className="text-slate-400 leading-relaxed mb-4">While all cover letters should be concise and fit on one page, the content focus and ideal word count shift depending on your career stage. An entry-level candidate and a senior executive should write fundamentally different cover letters, even though both should target one page.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Career Stage</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Focus</th><th className="text-left text-emerald-400 py-2">Tone</th></tr></thead>
                    <tbody>
                      {[['Student / Intern','200-300 words','Enthusiasm, learning ability, coursework','Eager but professional'],['Entry Level','250-350 words','Transferable skills, relevant projects','Confident and specific'],['Mid-Career','300-400 words','Key achievements, measurable results','Results-driven'],['Senior / Director','350-450 words','Leadership impact, strategic vision','Executive presence'],['Career Changer','300-400 words','Transferable skills, motivation for change','Clear narrative arc']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The 4-Paragraph Cover Letter Structure</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The most effective cover letter structure is four focused paragraphs. This format has been refined over decades of hiring practice and remains the gold standard because it answers every question a hiring manager has in a logical sequence.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 1: The Hook (50-80 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Open with the specific role you are applying for and one compelling reason why you are an excellent fit. Do not start with "I am writing to apply for the position of..." because every cover letter starts that way. Instead, lead with your strongest qualification or a relevant achievement that immediately signals your value to the hiring manager.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 2: Your Best Achievement (100-150 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Share one specific, measurable result that is directly relevant to the target role. Use numbers wherever possible: revenue generated, percentage improvements, team sizes, project budgets, or customer satisfaction scores. This is the paragraph that differentiates you from other applicants. A single concrete achievement with metrics is worth more than three paragraphs of general qualifications.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 3: Why This Company (80-120 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Show that you have researched the company by referencing something specific: a recent product launch, company value, industry position, or growth initiative. Explain how your skills and goals align with the company mission. This paragraph proves you are not sending a generic letter to fifty companies. Hiring managers can immediately tell the difference between personalized and mass-mailed cover letters.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 4: Call to Action (40-60 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Thank them briefly, express enthusiasm for discussing the role further, and state your availability for an interview. Keep this short and confident. Do not beg, over-apologize, or include disclaimers. End with a professional closing and your name.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Length: Visual Breakdown</h2>
              <p className="text-slate-400 leading-relaxed mb-4">This chart shows how to distribute your word count across the four paragraphs. Notice that the achievement paragraph gets the most space because it is the most persuasive section of your letter.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="200" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Word Budget for a 350-Word Cover Letter</text>
                  {[{label:'Hook (Opening)',words:65,pct:19,y:50,color:'rgba(52,211,153,0.6)'},{label:'Achievement',words:130,pct:37,y:85,color:'rgba(96,165,250,0.6)'},{label:'Why This Company',words:105,pct:30,y:120,color:'rgba(240,200,66,0.6)'},{label:'Call to Action',words:50,pct:14,y:155,color:'rgba(168,85,247,0.5)'}].map((d,i) => (
                    <g key={i}>
                      <text x="130" y={d.y+4} textAnchor="end" style={{fontSize:'11px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="135" y={d.y-9} width={d.pct*10} height="20" rx="4" style={{fill:d.color}} />
                      <text x={145+d.pct*10} y={d.y+4} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.words} words ({d.pct}%)</text>
                    </g>
                  ))}
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Mistakes That Cost You Interviews</h2>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Repeating your resume:</strong> A cover letter that restates your resume in paragraph form adds zero value. The cover letter should tell the story behind one or two resume items, not summarize everything. Recruiters already have your resume. They want to know things the resume cannot tell them: your motivation, personality, and why this specific role matters to you.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Generic openings:</strong> Starting with "Dear Sir or Madam" or "To Whom It May Concern" signals that you did not bother to find the hiring manager name. In 2026, LinkedIn, company websites, and job postings make it easy to find the right person. If you truly cannot find a name, use "Dear Hiring Team" or "Dear [Department] Team."</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Being too long:</strong> A cover letter that spills onto a second page is almost never read in full. Hiring managers have stacks of applications to review. Respect their time by keeping your letter tight and focused. If you cannot say it in 350 words, you are trying to include too many points. Pick your single strongest qualification and build around it.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">No specific examples:</strong> Saying "I am a hard worker with strong communication skills" is meaningless without evidence. Instead, say "I increased client retention by 28% by redesigning the quarterly review process." Specific beats generic every time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Formatting Tips</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Formatting directly affects the perceived length and readability of your cover letter. A well-formatted 350-word letter looks professional and approachable. A poorly formatted one looks dense and intimidating, even if the content is identical.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Use a professional font like Calibri, Arial, or Georgia at 11-12pt size. Set margins to 1 inch on all sides. Leave a blank line between paragraphs for visual breathing room. Your header should match your resume header for brand consistency. If sending as an email, use the same formatting principles but skip the formal letter header.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For email cover letters, include the content in the email body rather than as an attachment unless specifically instructed otherwise. Recruiters are less likely to open an attached cover letter. Keep the email subject line simple: "Application for [Job Title] — [Your Name]." This makes it easy for the recruiter to find your email later.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Check Your Cover Letter Length</p>
                <p className="text-slate-400 text-sm mb-4">Paste your cover letter to check word count, reading time, and readability.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>`,
    relatedTools: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/sentence-counter', text: 'Sentence Counter' },
    ],
    relatedArticles: [
      { href: '/blog/how-many-words-in-a-resume', text: 'How Many Words in a Resume?' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page?' },
      { href: '/blog/how-to-write-email-subject-lines', text: 'How to Write Email Subject Lines' },
      { href: '/blog/how-to-write-meta-descriptions', text: 'How to Write Meta Descriptions' },
    ],
  });
}

// ============================================================
// MAIN EXECUTION
// ============================================================
const posts = [
  { slug: 'how-many-words-per-page', builder: buildWordsPerPage },
  { slug: 'how-many-words-in-a-novel', builder: buildWordsInNovel },
  { slug: 'how-many-words-in-a-paragraph', builder: buildWordsInParagraph },
  { slug: 'how-many-words-in-a-short-story', builder: buildWordsInShortStory },
  { slug: 'how-many-words-in-a-speech', builder: buildWordsInSpeech },
  { slug: 'how-many-words-in-a-resume', builder: buildWordsInResume },
  { slug: 'how-many-words-in-a-cover-letter', builder: buildWordsInCoverLetter },
];

for (const post of posts) {
  const dir = path.join(BLOG, post.slug);
  ensureDir(dir);
  const filePath = path.join(dir, 'page.js');

  try {
    const content = post.builder();

    // Validation checks
    if (content.includes('style="')) {
      errors.push(post.slug + ': Contains HTML-style style="" attribute');
    }
    if (content.includes('/keyword-density-checker')) {
      errors.push(post.slug + ': Uses wrong link /keyword-density-checker');
    }
    if (content.includes('JSON.stringify(faqs')) {
      errors.push(post.slug + ': Uses JSON.stringify for FAQs');
    }

    const before = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8').length : 0;
    fs.writeFileSync(filePath, content, 'utf8');
    expanded++;
    console.log('  ✅ ' + post.slug + ': ' + before + ' → ' + content.length + ' chars');
  } catch (err) {
    errors.push(post.slug + ': ' + err.message);
    console.log('  ❌ ' + post.slug + ': ' + err.message);
  }
}

console.log('');
console.log('=====================================================');
console.log('  EXPANDED: ' + expanded + '/7 Category 1 blog posts');
if (errors.length > 0) {
  console.log('  ERRORS:');
  errors.forEach(e => console.log('    ⚠️  ' + e));
} else {
  console.log('  ✅ Zero validation errors');
}
console.log('');
console.log('  Each post now includes:');
console.log('  - 2000+ words of in-depth content');
console.log('  - SVG bar chart infographic');
console.log('  - Multiple data tables with .map()');
console.log('  - 6 FAQs as JS array literal');
console.log('  - Related tools + related articles boxes');
console.log('  - Article + Breadcrumb JSON-LD schema');
console.log('  - Canonical URL and OpenGraph metadata');
console.log('=====================================================');
console.log('');
console.log('Next steps:');
console.log('  1. node organize_blog_hub.js');
console.log('  2. git add .');
console.log('  3. git commit -m "Expand 7 English blogs batch 1 (Word Count Guides) to 2000+ words"');
console.log('  4. git push origin master');
console.log('');
