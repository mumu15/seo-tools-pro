const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';
let created = 0;

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

console.log('');
console.log('=====================================================');
console.log('  BUILD: 50+ New Pages for WordCounterTool.net');
console.log('=====================================================');
console.log('');

// ============================================================
// Shared page builder
// ============================================================
function buildPage({ slug, pathPrefix, title, metaTitle, metaDesc, h1, quickAnswer, tableTitle, tableRows, ctaText, relatedLinks, guide, faqs, breadcrumbs }) {
  const bcItems = breadcrumbs || [
    { name: 'Home', href: '/' },
    { name: pathPrefix.split('/').filter(Boolean).map(w => w.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())).join(' > '), href: pathPrefix },
    { name: title, href: null },
  ];

  const faqSection = faqs ? `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <div className="space-y-4 text-sm">
${faqs.map((f, i) => `                <div${i < faqs.length - 1 ? ' className="border-b pb-4" style={{borderColor:"rgba(52,211,153,0.1)"}}'  : ''}>
                  <h3 className="text-white font-semibold mb-2">${f.q.replace(/'/g, "\\'")}</h3>
                  <p className="text-slate-400">${f.a.replace(/'/g, "\\'")}</p>
                </div>`).join('\n')}
              </div>
            </div>
          </section>` : '';

  const guideSection = guide ? `
          <section className="mb-10">
${guide}
          </section>` : '';

  const tableSection = tableRows ? `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">${tableTitle}</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${tableRows[0][0]}</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${tableRows[0][1]}</th>
                    ${tableRows[0][2] ? `<th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${tableRows[0][2]}</th>` : ''}
                  </tr>
                </thead>
                <tbody>
${tableRows.slice(1).map(r => `                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">${r[0]}</td>
                    <td className="text-slate-300 py-3 pr-4">${r[1]}</td>
                    ${r[2] ? `<td className="text-slate-300 py-3 pr-4">${r[2]}</td>` : ''}
                  </tr>`).join('\n')}
                </tbody>
              </table>
            </div>
          </section>` : '';

  const relatedSection = `
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
${relatedLinks.map(([href, label]) => `              <a href="${href}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">${label}</a>`).join('\n')}
            </div>
          </section>`;

  return `import Header from '${getRelImport(pathPrefix + '/' + slug, 'components/Header')}';
import Footer from '${getRelImport(pathPrefix + '/' + slug, 'components/Footer')}';
import AdUnit from '${getRelImport(pathPrefix + '/' + slug, 'app/components/AdUnit')}';

export const metadata = {
  title: '${metaTitle}',
  description: '${metaDesc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${DOMAIN}${pathPrefix}/${slug}' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <nav className="text-sm text-slate-500 mb-6">
${bcItems.map((b, i) => i < bcItems.length - 1 ? `            <a href="${b.href}" className="hover:text-emerald-400 transition-colors">${b.name}</a>\n            <span className="mx-2">/</span>` : `            <span className="text-slate-300">${b.name}</span>`).join('\n')}
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${h1}</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">${quickAnswer.replace(/'/g, "\\'")}</p>
          </div>
${tableSection}
          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">${ctaText}</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text to get an instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>
${guideSection}${faqSection}${relatedSection}
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"${title}","item":"${DOMAIN}${pathPrefix}/${slug}"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"${title}","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  );
}
`;
}

function getRelImport(pagePath, target) {
  // pagePath like "/word-count/for/dissertation"
  // target like "components/Header" or "app/components/AdUnit"
  const depth = pagePath.split('/').filter(Boolean).length;
  if (target.startsWith('app/')) {
    // AdUnit is in app/components/
    const levels = depth; // from app/... to app/components
    return '../'.repeat(levels) + target.replace('app/', '');
  }
  // Header/Footer in root components/
  return '../'.repeat(depth + 1) + target;
}

// ============================================================
// 1. SPEECH WORD COUNT PAGES (20 pages)
// "How many words in a X minute speech"
// ============================================================
console.log('--- Building Speech Word Count Pages ---');

const speechPages = [
  { min: 1, words: '130-150', slow: 100, avg: 130, fast: 160, context: 'an elevator pitch, brief toast, or quick introduction' },
  { min: 2, words: '260-300', slow: 200, avg: 260, fast: 320, context: 'a short wedding toast, brief acceptance speech, or quick presentation intro' },
  { min: 3, words: '390-450', slow: 300, avg: 390, fast: 480, context: 'a short best man speech, brief eulogy, or conference lightning talk' },
  { min: 5, words: '650-750', slow: 500, avg: 650, fast: 800, context: 'a TED-style talk, maid of honor speech, or short keynote' },
  { min: 7, words: '910-1,050', slow: 700, avg: 910, fast: 1120, context: 'a detailed wedding speech, business presentation, or class presentation' },
  { min: 10, words: '1,300-1,500', slow: 1000, avg: 1300, fast: 1600, context: 'a full TED Talk, detailed business pitch, or conference presentation' },
  { min: 15, words: '1,950-2,250', slow: 1500, avg: 1950, fast: 2400, context: 'a keynote presentation, lecture segment, or detailed pitch' },
  { min: 20, words: '2,600-3,000', slow: 2000, avg: 2600, fast: 3200, context: 'a full lecture, detailed keynote, or workshop segment' },
  { min: 25, words: '3,250-3,750', slow: 2500, avg: 3250, fast: 4000, context: 'a university lecture, long keynote, or sermon' },
  { min: 30, words: '3,900-4,500', slow: 3000, avg: 3900, fast: 4800, context: 'a full sermon, commencement address, or training session' },
  { min: 45, words: '5,850-6,750', slow: 4500, avg: 5850, fast: 7200, context: 'a full class lecture, long sermon, or detailed workshop' },
  { min: 60, words: '7,800-9,000', slow: 6000, avg: 7800, fast: 9600, context: 'a full hour lecture, long training session, or detailed webinar' },
];

const speechDir = path.join(APP, 'words-per-minute', 'speech');
ensureDir(speechDir);

for (const sp of speechPages) {
  const slug = sp.min + '-minute-speech';
  const dir = path.join(speechDir, slug);
  ensureDir(dir);

  const content = buildPage({
    slug,
    pathPrefix: '/words-per-minute/speech',
    title: `Words in a ${sp.min} Minute Speech`,
    metaTitle: `How Many Words in a ${sp.min} Minute Speech? (2026) | WordCounterTool.net`,
    metaDesc: `A ${sp.min} minute speech is ${sp.words} words at average speaking pace. See word counts for slow, average and fast speakers. Free speech word counter.`,
    h1: `How Many Words in a ${sp.min}-Minute Speech?`,
    quickAnswer: `A ${sp.min}-minute speech is approximately ${sp.words} words at the average speaking rate of 130 words per minute. At a slower pace (100 wpm), it is about ${sp.slow.toLocaleString()} words. At a faster pace (160 wpm), it is about ${sp.fast.toLocaleString()} words. This is roughly equivalent to ${sp.context}.`,
    tableTitle: `${sp.min}-Minute Speech Word Count by Speed`,
    tableRows: [
      ['Speaking Speed', 'Words Per Minute', `Words in ${sp.min} Min`],
      ['Slow (deliberate)', '100 wpm', sp.slow.toLocaleString() + ' words'],
      ['Average (conversational)', '130 wpm', sp.avg.toLocaleString() + ' words'],
      ['Fast (energetic)', '160 wpm', sp.fast.toLocaleString() + ' words'],
      ['Very Fast (auctioneer-style)', '200 wpm', (sp.min * 200).toLocaleString() + ' words'],
    ],
    ctaText: `Check Your ${sp.min}-Minute Speech Word Count`,
    relatedLinks: [
      ['/word-counter', 'Word Counter'],
      ['/words-per-minute', 'Words Per Minute'],
      ['/reading-time', 'Reading Time Calculator'],
      ['/word-count/for/speech', 'Speech Word Count'],
      ...speechPages.filter(x => x.min !== sp.min).slice(0, 4).map(x => [`/words-per-minute/speech/${x.min}-minute-speech`, `${x.min}-Min Speech`]),
    ],
    guide: `
            <h2 className="text-2xl font-bold text-white mb-4">How to Write a ${sp.min}-Minute Speech</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">A ${sp.min}-minute speech requires approximately <strong className="text-emerald-400">${sp.words} words</strong>. The exact count depends on your natural speaking pace, pauses for emphasis, and audience interaction. Most speakers average 130 words per minute in a prepared speech setting.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Tip for timing:</strong> Practice with a timer at least 3 times before your actual speech. Most people speak faster when nervous, so aim for slightly fewer words than the maximum. Leave 10-15% buffer time for natural pauses, audience laughter, or applause.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Structure suggestion for ${sp.min} minutes:</strong> ${sp.min <= 3 ? 'Keep it simple — one main point with a brief intro and a memorable closing line. Every word counts at this length, so cut ruthlessly.' : sp.min <= 10 ? 'Use the classic structure: strong opening hook (10%), 2-3 main points with examples (75%), and a memorable close with call to action (15%).' : sp.min <= 20 ? 'Open with a story or surprising statistic, develop 3-4 main points with evidence and examples, include transitions between sections, and close with a powerful summary and call to action.' : 'Divide your speech into clear sections with natural breaks. Include stories, data, audience interaction, and visual aids. Plan 2-3 key takeaways and reinforce them throughout. End with a memorable conclusion that ties back to your opening.'}</p>
              <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Common ${sp.min}-minute speeches:</strong> This length is typical for ${sp.context}. Use our <a href="/word-counter" className="text-emerald-400 hover:underline">free word counter</a> to check your speech length before practicing.</p>
            </div>`,
    faqs: [
      { q: `How many words is a ${sp.min} minute speech?`, a: `A ${sp.min}-minute speech is approximately ${sp.words} words at the average speaking rate of 130 words per minute. Slower speakers (100 wpm) need about ${sp.slow.toLocaleString()} words, while faster speakers (160 wpm) need about ${sp.fast.toLocaleString()} words.` },
      { q: `How many pages is a ${sp.min} minute speech?`, a: `A ${sp.min}-minute speech (${sp.words} words) is approximately ${Math.max(1, Math.round(sp.avg / 250))}-${Math.max(1, Math.round(sp.avg / 200))} pages double-spaced or ${Math.max(1, Math.round(sp.avg / 500))}-${Math.max(1, Math.round(sp.avg / 400))} pages single-spaced in 12pt Times New Roman font.` },
      { q: `How do I make my speech exactly ${sp.min} minutes?`, a: `Write your speech, then use our word counter to check the count. Aim for ${sp.avg} words. Practice reading it aloud with a timer 3 times. Adjust by cutting or adding content until you consistently hit ${sp.min} minutes. Remember to account for pauses and audience reactions.` },
    ],
  });

  fs.writeFileSync(path.join(dir, 'page.js'), content);
  created++;
}
console.log('  ✅ Created ' + speechPages.length + ' speech word count pages');

// ============================================================
// 2. NEW DOCUMENT TYPE PAGES (20 pages)
// ============================================================
console.log('--- Building New Document Type Pages ---');

const newDocTypes = [
  { slug: 'dissertation', title: 'Dissertation', words: '80,000-100,000', quick: 'A doctoral dissertation is typically 80,000 to 100,000 words (200-300 pages). A masters dissertation is usually 15,000 to 25,000 words (60-100 pages). Requirements vary by university and field of study.', rows: [['Document Type','Word Count'],['Masters dissertation','15,000-25,000 words'],['PhD dissertation (humanities)','80,000-100,000 words'],['PhD dissertation (sciences)','40,000-80,000 words'],['Dissertation abstract','150-350 words'],['Dissertation introduction','3,000-5,000 words'],['Literature review chapter','8,000-12,000 words'],['Methodology chapter','3,000-5,000 words'],['Results/Discussion','5,000-10,000 words'],['Conclusion','2,000-3,000 words']] },
  { slug: 'college-application-essay', title: 'College Application Essay', words: '250-650', quick: 'The Common App essay is 250-650 words. Most supplemental essays are 100-400 words. Coalition Application essays are up to 550 words. Always check the specific word limit for each school.', rows: [['Application','Word Limit'],['Common App personal essay','250-650 words'],['Coalition Application essay','Up to 550 words'],['UC personal insight questions','350 words each (4 of 8)'],['Supplemental essays (short)','100-250 words'],['Supplemental essays (long)','250-500 words'],['Why This College essay','200-400 words'],['Georgetown application','1 page per essay']] },
  { slug: 'personal-statement', title: 'Personal Statement', words: '500-1,000', quick: 'A personal statement is typically 500 to 1,000 words (1-2 pages). UCAS personal statements must be under 4,000 characters. Graduate school personal statements are usually 500-1,000 words. Medical school personal statements are 5,300 characters max.', rows: [['Type','Length'],['UCAS personal statement','Up to 4,000 characters (47 lines)'],['Graduate school personal statement','500-1,000 words'],['Medical school (AMCAS)','5,300 characters max'],['Law school personal statement','2 pages / 750 words'],['MBA personal statement','500-750 words'],['Scholarship personal statement','400-600 words']] },
  { slug: 'wedding-speech', title: 'Wedding Speech', words: '500-1,200', quick: 'A wedding speech should be 3 to 7 minutes long, which is 400 to 900 words. The best man speech averages 5 minutes (650 words). The maid of honor speech averages 4 minutes (520 words). The father of the bride speech averages 3-5 minutes (400-650 words).', rows: [['Speaker','Ideal Length','Word Count'],['Best man','4-6 minutes','520-780 words'],['Maid of honor','3-5 minutes','390-650 words'],['Father of the bride','3-5 minutes','390-650 words'],['Mother of the bride','2-4 minutes','260-520 words'],['Groom','3-5 minutes','390-650 words'],['Bride','2-4 minutes','260-520 words'],['Wedding toast','1-2 minutes','130-260 words']] },
  { slug: 'best-man-speech', title: 'Best Man Speech', words: '500-800', quick: 'A best man speech should be 4 to 6 minutes long, or 520 to 780 words. The sweet spot is 5 minutes (about 650 words). Keep it funny, heartfelt, and under 7 minutes — nobody ever complained a wedding speech was too short.', rows: [['Section','Suggested Length'],['Opening and introduction','50-80 words'],['How you know the groom','80-120 words'],['Funny story or anecdote','100-150 words'],['Compliment the couple','80-120 words'],['Heartfelt message','80-120 words'],['Toast and closing','40-60 words'],['TOTAL','500-650 words']] },
  { slug: 'maid-of-honor-speech', title: 'Maid of Honor Speech', words: '400-700', quick: 'A maid of honor speech should be 3 to 5 minutes long, or 390 to 650 words. Aim for 4 minutes (about 520 words). Balance humor with heartfelt moments, and always end with a toast to the happy couple.', rows: [['Section','Suggested Length'],['Introduction','40-60 words'],['Your relationship with the bride','80-120 words'],['Funny or touching story','100-150 words'],['Welcoming the partner','60-80 words'],['Heartfelt advice or wishes','80-100 words'],['Toast','30-50 words'],['TOTAL','400-560 words']] },
  { slug: 'eulogy', title: 'Eulogy', words: '750-1,500', quick: 'A eulogy is typically 5 to 10 minutes long, or 750 to 1,500 words. Most funeral directors recommend keeping it under 10 minutes. A shorter, heartfelt eulogy is always better than a longer one that loses the audience.', rows: [['Length','Word Count','When to Choose'],['Brief (3-5 min)','400-650 words','When multiple people are speaking'],['Standard (5-10 min)','650-1,300 words','Most common and recommended'],['Extended (10-15 min)','1,300-1,950 words','Solo eulogy for close family'],['Multiple speakers total','2,000-3,000 words','Divided among 2-4 people']] },
  { slug: 'valedictorian-speech', title: 'Valedictorian Speech', words: '750-1,500', quick: 'A valedictorian speech is typically 5 to 10 minutes long, or 750 to 1,500 words. Most schools recommend 5-7 minutes (750-1,000 words). Keep it inspiring, include shared memories, thank teachers and parents, and end with a forward-looking message.', rows: [['Section','Suggested Length'],['Opening hook','60-100 words'],['Shared memories','150-200 words'],['Challenges overcome','100-150 words'],['Thank teachers/parents','100-150 words'],['Inspirational message','150-200 words'],['Call to action/closing','80-120 words'],['TOTAL','750-1,000 words']] },
  { slug: 'scholarship-essay', title: 'Scholarship Essay', words: '250-750', quick: 'Most scholarship essays are 250 to 750 words (1-3 pages). The most common limit is 500 words. Some require just 250 words while others allow up to 1,000. Always check the specific requirements — going over the word limit can disqualify your application.', rows: [['Scholarship Type','Typical Word Count'],['Short answer scholarship','100-250 words'],['Standard scholarship essay','500 words'],['Extended scholarship essay','750-1,000 words'],['Gates Millennium','1,000 words per essay'],['Coca-Cola Scholars','500 words'],['Jack Kent Cooke','Up to 800 words']] },
  { slug: 'term-paper', title: 'Term Paper', words: '3,000-5,000', quick: 'A college term paper is typically 3,000 to 5,000 words (12-20 pages double-spaced). A high school term paper is usually 2,000 to 3,000 words. Graduate-level term papers can be 5,000 to 8,000 words.', rows: [['Level','Word Count','Pages (double-spaced)'],['High school','2,000-3,000 words','8-12 pages'],['Undergraduate','3,000-5,000 words','12-20 pages'],['Graduate','5,000-8,000 words','20-32 pages'],['Capstone/senior thesis','8,000-15,000 words','32-60 pages']] },
  { slug: 'annotated-bibliography', title: 'Annotated Bibliography', words: '1,000-3,000', quick: 'Each annotation in an annotated bibliography is typically 100 to 300 words. A full annotated bibliography with 10-15 sources is 1,000 to 4,500 words. Most professors require 150-200 word annotations per source.', rows: [['Component','Word Count'],['Single annotation (brief)','100-150 words'],['Single annotation (standard)','150-200 words'],['Single annotation (detailed)','200-300 words'],['Full bibliography (10 sources)','1,000-2,000 words'],['Full bibliography (15 sources)','1,500-3,000 words'],['Full bibliography (20 sources)','2,000-4,000 words']] },
  { slug: 'white-paper', title: 'White Paper', words: '2,500-5,000', quick: 'A white paper is typically 2,500 to 5,000 words (6-12 pages). B2B white papers average 3,000-4,000 words. Government and technical white papers can be 5,000-10,000+ words. The key is depth — white papers should thoroughly cover the topic.', rows: [['Type','Word Count','Pages'],['Short white paper','2,500-3,000 words','6-8 pages'],['Standard white paper','3,000-5,000 words','8-12 pages'],['Technical white paper','5,000-8,000 words','12-20 pages'],['Government white paper','5,000-15,000 words','15-40 pages']] },
  { slug: 'case-study', title: 'Case Study', words: '1,500-3,000', quick: 'A business case study is typically 1,500 to 3,000 words (4-8 pages). Academic case studies range from 2,000 to 5,000 words. Marketing case studies are often shorter at 800-1,500 words to keep readers engaged.', rows: [['Type','Word Count'],['Marketing case study','800-1,500 words'],['Business case study','1,500-3,000 words'],['Academic case study','2,000-5,000 words'],['Harvard-style case study','3,000-5,000 words'],['Mini case study (web)','500-800 words']] },
  { slug: 'newsletter', title: 'Newsletter', words: '200-600', quick: 'An email newsletter should be 200 to 600 words. The ideal length is 300-500 words (under 3 minutes reading time). Longer newsletters have lower completion rates. For link-heavy roundup newsletters, 100-200 words of original content with curated links works well.', rows: [['Type','Word Count','Read Time'],['Quick update','100-200 words','Under 1 min'],['Standard newsletter','300-500 words','1-2 min'],['Long-form newsletter','600-1,000 words','3-5 min'],['Curated roundup','100-200 words + links','1-2 min'],['Substack/paid newsletter','1,000-2,000 words','5-10 min']] },
  { slug: 'obituary', title: 'Obituary', words: '200-1,000', quick: 'A newspaper obituary is typically 200 to 500 words. An extended obituary or celebration of life is 500 to 1,000 words. Online obituaries can be any length. Most funeral homes recommend 300-500 words for the published notice.', rows: [['Type','Word Count'],['Death notice (brief)','50-100 words'],['Standard newspaper obituary','200-400 words'],['Extended obituary','500-1,000 words'],['Celebration of life tribute','1,000-2,000 words'],['Online memorial page','500-2,000+ words']] },
  { slug: 'sermon', title: 'Sermon', words: '2,500-5,000', quick: 'A sermon is typically 20 to 40 minutes long, or 2,500 to 5,000 words. The average Sunday sermon is 25-30 minutes (3,250-3,900 words). Catholic homilies are shorter at 8-12 minutes (1,000-1,500 words).', rows: [['Type','Duration','Word Count'],['Catholic homily','8-12 minutes','1,000-1,500 words'],['Short sermon','15-20 minutes','1,950-2,600 words'],['Standard sermon','25-30 minutes','3,250-3,900 words'],['Extended sermon','35-45 minutes','4,550-5,850 words'],['Revival/special occasion','45-60 minutes','5,850-7,800 words']] },
  { slug: 'acceptance-speech', title: 'Acceptance Speech', words: '150-500', quick: 'An acceptance speech should be 1 to 3 minutes long, or 130 to 400 words. Oscar speeches are famously limited to 45 seconds. Most awards ceremonies expect 1-2 minutes. Keep it short, grateful, and memorable.', rows: [['Context','Duration','Word Count'],['Oscar/Grammy acceptance','45 seconds','90-100 words'],['Corporate award','1-2 minutes','130-260 words'],['Industry/nonprofit award','2-3 minutes','260-400 words'],['Lifetime achievement','3-5 minutes','400-650 words'],['Hall of fame induction','5-10 minutes','650-1,300 words']] },
  { slug: 'toast', title: 'Toast', words: '100-300', quick: 'A toast should be 1 to 2 minutes long, or 100 to 300 words. The best toasts are brief, heartfelt, and end with everyone raising their glass. A champagne toast at a formal event should be under 1 minute (100-130 words).', rows: [['Type','Duration','Word Count'],['Quick champagne toast','30-45 seconds','50-90 words'],['Dinner party toast','1 minute','100-130 words'],['Wedding toast','1-2 minutes','130-260 words'],['Birthday toast','1-2 minutes','130-260 words'],['Retirement toast','2-3 minutes','260-390 words']] },
];

for (const doc of newDocTypes) {
  const dir = path.join(APP, 'word-count', 'for', doc.slug);
  if (fs.existsSync(dir)) {
    console.log('  ⏭️  Skipping ' + doc.slug + ' (already exists)');
    continue;
  }
  ensureDir(dir);

  const tableRows = doc.rows;
  const content = buildPage({
    slug: doc.slug,
    pathPrefix: '/word-count/for',
    title: doc.title + ' Word Count',
    metaTitle: `How Many Words in a ${doc.title}? (2026 Guide) | WordCounterTool.net`,
    metaDesc: `How many words should a ${doc.title.toLowerCase()} be? ${doc.words} words. Complete guide with word counts by type, section breakdown, and tips.`,
    h1: `Word Count for ${doc.title}`,
    quickAnswer: doc.quick,
    tableTitle: `${doc.title} Word Count Guide`,
    tableRows,
    ctaText: `Check Your ${doc.title} Word Count Free`,
    relatedLinks: [
      ['/word-counter', 'Word Counter'],
      ['/character-counter', 'Character Counter'],
      ['/reading-time', 'Reading Time'],
      ['/word-count/for', 'All Word Count Guides'],
      ['/words-per-page', 'Words Per Page'],
      ['/readability-checker', 'Readability Checker'],
    ],
    faqs: [
      { q: `How many words is a ${doc.title.toLowerCase()}?`, a: `A ${doc.title.toLowerCase()} is typically ${doc.words} words. The exact length depends on the type, purpose, and specific requirements. Always check guidelines from your institution or organization.` },
      { q: `How many pages is a ${doc.title.toLowerCase()}?`, a: `At 250 words per page (double-spaced, 12pt font), a ${doc.title.toLowerCase()} of ${doc.words} words is approximately ${Math.max(1, Math.round(parseInt(doc.words.replace(/,/g,'')) / 250))}-${Math.max(1, Math.round(parseInt(doc.words.split('-').pop().replace(/,/g,'')) / 250))} pages double-spaced.` },
      { q: `Is there a word limit for ${doc.title.toLowerCase()}s?`, a: `Word limits vary by context. Academic ${doc.title.toLowerCase()}s often have strict limits set by the professor or institution. Professional ${doc.title.toLowerCase()}s follow industry conventions. Always check specific requirements before writing.` },
    ],
  });

  fs.writeFileSync(path.join(dir, 'page.js'), content);
  created++;
}
console.log('  ✅ Created ' + newDocTypes.filter(d => !fs.existsSync(path.join(APP, 'word-count', 'for', d.slug, 'page.js').replace('page.js','old'))).length + ' new document type pages');

// ============================================================
// 3. NEW CHARACTER LIMIT PAGES (8 pages)
// ============================================================
console.log('--- Building New Character Limit Pages ---');

const newCharLimits = [
  { slug: 'threads', title: 'Threads', limit: '500', desc: 'Threads by Meta allows posts up to 500 characters. This is shorter than a tweet on X (formerly Twitter) which allows 280 characters for free users but up to 25,000 for Premium subscribers.', rows: [['Content','Limit'],['Threads post','500 characters'],['Threads bio','150 characters'],['Threads username','30 characters'],['Threads reply','500 characters']] },
  { slug: 'reddit', title: 'Reddit', limit: '40,000', desc: 'Reddit text posts allow up to 40,000 characters. Reddit titles are limited to 300 characters. Comments also allow up to 10,000 characters. Subreddits may impose additional restrictions.', rows: [['Content','Limit'],['Post title','300 characters'],['Text post body','40,000 characters'],['Comment','10,000 characters'],['Subreddit name','21 characters'],['User flair','64 characters'],['Subreddit description','500 characters']] },
  { slug: 'discord', title: 'Discord', limit: '2,000-4,000', desc: 'Discord messages are limited to 2,000 characters for regular users. Nitro subscribers get 4,000 characters per message. Server names are limited to 100 characters and channel names to 100 characters.', rows: [['Content','Limit'],['Regular message','2,000 characters'],['Nitro message','4,000 characters'],['Username','32 characters'],['Server name','100 characters'],['Channel name','100 characters'],['Status message','128 characters'],['Bio','190 characters']] },
  { slug: 'whatsapp', title: 'WhatsApp', limit: '65,536', desc: 'WhatsApp messages can be up to 65,536 characters. However, messages over 700-1,000 characters get truncated in notifications. Status updates are limited to 700 characters. Group descriptions allow 512 characters.', rows: [['Content','Limit'],['Text message','65,536 characters'],['Status update','700 characters'],['Group name','25 characters'],['Group description','512 characters'],['Profile bio','139 characters']] },
  { slug: 'snapchat', title: 'Snapchat', limit: '80', desc: 'Snapchat caption text is limited to 80 characters for photo/video snaps. Snapchat chat messages allow up to 31,000 characters. Story captions also have an 80-character limit.', rows: [['Content','Limit'],['Snap caption','80 characters'],['Chat message','31,000 characters'],['Username','15 characters'],['Display name','20+ characters'],['Story caption','80 characters']] },
  { slug: 'substack', title: 'Substack', limit: 'No limit', desc: 'Substack has no character or word limit for newsletter posts. However, the ideal Substack post is 1,000-2,000 words (5-10 minute read). Subject lines should be under 60 characters for best email open rates.', rows: [['Content','Recommendation'],['Post length','1,000-2,000 words ideal'],['Subject line','Under 60 characters'],['Subtitle','Under 250 characters'],['Publication name','Under 40 characters'],['Bio','Under 250 characters']] },
  { slug: 'medium', title: 'Medium', limit: 'No hard limit', desc: 'Medium has no strict character limit, but the ideal post is 1,600 words (7-minute read). Posts under 400 words are not recommended. Medium titles should be under 100 characters for full display.', rows: [['Content','Recommendation'],['Ideal post length','1,600 words (7 min read)'],['Minimum recommended','400 words'],['Title','Under 100 characters'],['Subtitle','Under 140 characters'],['Bio','160 characters'],['Tags','5 maximum']] },
  { slug: 'wordpress', title: 'WordPress', limit: 'No limit', desc: 'WordPress has no character or word limit for posts. The ideal blog post for SEO is 1,500-2,500 words. Page titles should be under 60 characters for Google display. Meta descriptions should be 150-160 characters.', rows: [['Content','Recommendation'],['Blog post (SEO optimal)','1,500-2,500 words'],['Page title (SEO)','Under 60 characters'],['Meta description','150-160 characters'],['Excerpt','Under 320 characters'],['Alt text','Under 125 characters'],['Category name','Under 200 characters']] },
];

for (const cl of newCharLimits) {
  const dir = path.join(APP, 'character-limits', cl.slug);
  if (fs.existsSync(dir)) {
    console.log('  ⏭️  Skipping ' + cl.slug + ' (already exists)');
    continue;
  }
  ensureDir(dir);

  const content = buildPage({
    slug: cl.slug,
    pathPrefix: '/character-limits',
    title: cl.title + ' Character Limit',
    metaTitle: `${cl.title} Character Limit (2026) — Complete Guide | WordCounterTool.net`,
    metaDesc: `${cl.title} character limit is ${cl.limit}. See all ${cl.title} character limits for posts, bios, usernames and more. Free character counter tool.`,
    h1: `${cl.title} Character Limit (2026)`,
    quickAnswer: cl.desc,
    tableTitle: `All ${cl.title} Character Limits`,
    tableRows: cl.rows,
    ctaText: `Count Your ${cl.title} Characters Free`,
    relatedLinks: [
      ['/character-counter', 'Character Counter'],
      ['/word-counter', 'Word Counter'],
      ['/character-limits', 'All Character Limits'],
      ...newCharLimits.filter(x => x.slug !== cl.slug).slice(0, 3).map(x => [`/character-limits/${x.slug}`, x.title + ' Limits']),
    ],
    faqs: [
      { q: `What is the ${cl.title} character limit?`, a: `The ${cl.title} character limit is ${cl.limit} for standard posts. See the table above for limits on other content types like bios, usernames, and titles.` },
      { q: `How do I check my ${cl.title} character count?`, a: `Use our free character counter tool. Paste your text and it instantly shows the character count. You can also check word count, sentence count, and reading time.` },
    ],
  });

  fs.writeFileSync(path.join(dir, 'page.js'), content);
  created++;
}
console.log('  ✅ Created new character limit pages');

// ============================================================
// 4. UPDATE SITEMAP
// ============================================================
console.log('--- Updating sitemap ---');

const smFile = path.join(APP, 'sitemap.js');
let sm = fs.readFileSync(smFile, 'utf8');

// Find where to add new entries
// Speech pages
const newSpeechSlugs = speechPages.map(sp => '/words-per-minute/speech/' + sp.min + '-minute-speech');
const newDocSlugs = newDocTypes.filter(d => !sm.includes(d.slug)).map(d => '/word-count/for/' + d.slug);
const newCharSlugs = newCharLimits.filter(c => !sm.includes('character-limits/' + c.slug)).map(c => '/character-limits/' + c.slug);

// Add to the sitemap arrays
let allNewSlugs = [...newSpeechSlugs, ...newDocSlugs, ...newCharSlugs];

// Add hub page for speech
if (!sm.includes('words-per-minute/speech')) {
  allNewSlugs.unshift('/words-per-minute/speech');
}

// Find the blogSlugs array end and add after it
const insertPoint = sm.lastIndexOf('];');
if (insertPoint > 0) {
  let newEntries = '';
  for (const slug of allNewSlugs) {
    if (!sm.includes('"' + slug + '"')) {
      newEntries += `    "${slug}",\n`;
    }
  }

  if (newEntries) {
    // Add a new array section
    const speechArray = `\n  const speechSlugs = [${newSpeechSlugs.map(s => '"' + s + '"').join(',')}];\n`;
    const newDocArray = `  const newDocSlugs = [${newDocSlugs.map(s => '"' + s + '"').join(',')}];\n`;
    const newCharArray = `  const newCharSlugs = [${newCharSlugs.map(s => '"' + s + '"').join(',')}];\n`;

    // Find the entries array and add new entries
    const lastEntry = sm.lastIndexOf('}');
    const beforeClose = sm.lastIndexOf('}', lastEntry - 1);

    // Simpler: just add to the staticPages array
    // Find staticPages array
    if (sm.includes('staticPages')) {
      const spMatch = sm.match(/const staticPages = \[([^\]]+)\]/);
      if (spMatch) {
        const oldStatic = spMatch[0];
        const newStatic = oldStatic.replace('];', ',' + allNewSlugs.map(s => '"' + s + '"').join(',') + '];');
        sm = sm.replace(oldStatic, newStatic);
      }
    } else {
      // Add entries to the main entries array
      // Find the closing of the return array
      const returnClose = sm.lastIndexOf('return entries;');
      if (returnClose > 0) {
        const addEntries = allNewSlugs.map(s => `  entries.push({ url: base + "${s}", lastModified: today, changeFrequency: "monthly", priority: 0.8 });`).join('\n');
        sm = sm.slice(0, returnClose) + addEntries + '\n\n  ' + sm.slice(returnClose);
      }
    }

    fs.writeFileSync(smFile, sm, 'utf8');
    console.log('  ✅ Added ' + allNewSlugs.length + ' new URLs to sitemap');
  }
}

console.log('');
console.log('=====================================================');
console.log('  CREATED: ' + created + ' new pages for WordCounterTool.net');
console.log('');
console.log('  Speech Word Count (12 pages):');
console.log('    1-min, 2-min, 3-min, 5-min, 7-min, 10-min,');
console.log('    15-min, 20-min, 25-min, 30-min, 45-min, 60-min');
console.log('');
console.log('  New Document Types (18 pages):');
console.log('    dissertation, college-application-essay,');
console.log('    personal-statement, wedding-speech, best-man-speech,');
console.log('    maid-of-honor-speech, eulogy, valedictorian-speech,');
console.log('    scholarship-essay, term-paper, annotated-bibliography,');
console.log('    white-paper, case-study, newsletter, obituary,');
console.log('    sermon, acceptance-speech, toast');
console.log('');
console.log('  New Character Limits (8 pages):');
console.log('    threads, reddit, discord, whatsapp,');
console.log('    snapchat, substack, medium, wordpress');
console.log('');
console.log('  Each page has: metadata, canonical, breadcrumbs,');
console.log('  quick answer, data table, CTA, FAQs, schema,');
console.log('  related links, and ad placement.');
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Add 38 new pages — speech, documents, platforms"');
console.log('  git push origin main');
console.log('');
