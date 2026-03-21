const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';
let created = 0;

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

console.log('');
console.log('=====================================================');
console.log('  BUILD: More Speech Pages + 10 Long-Tail Blogs');
console.log('=====================================================');
console.log('');

// ============================================================
// SHARED BUILDERS
// ============================================================
function buildSpeechPage(sp) {
  const slug = sp.min + '-minute-speech';
  const dir = path.join(APP, 'words-per-minute', 'speech', slug);
  if (fs.existsSync(dir)) return false;
  ensureDir(dir);

  const content = `import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import FaqSchema from '../../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a ${sp.min} Minute Speech? (2026) | WordCounterTool.net',
  description: 'A ${sp.min} minute speech is ${sp.words} words at average speaking pace. See word counts for slow, average and fast speakers. Free speech word counter.',
  alternates: { canonical: '${DOMAIN}/words-per-minute/speech/${slug}' },
}

const faqs = [
  { q: 'How many words is a ${sp.min} minute speech?', a: 'A ${sp.min}-minute speech is approximately ${sp.words} words at the average speaking rate of 130 words per minute. Slower speakers (100 wpm) need about ${sp.slow.toLocaleString()} words, while faster speakers (160 wpm) need about ${sp.fast.toLocaleString()} words.' },
  { q: 'How many pages is a ${sp.min} minute speech?', a: 'A ${sp.min}-minute speech (${sp.words} words) is approximately ${Math.max(1, Math.round(sp.avg / 250))}-${Math.max(1, Math.round(sp.avg / 200))} pages double-spaced or ${Math.max(1, Math.round(sp.avg / 500))}-${Math.max(1, Math.round(sp.avg / 400))} pages single-spaced in 12pt Times New Roman font.' },
  { q: 'How do I time my speech to exactly ${sp.min} minutes?', a: 'Write your speech aiming for ${sp.avg} words. Practice reading it aloud with a timer at least 3 times. Most people speak faster when nervous, so aim for slightly fewer words than the maximum. Leave 10-15% buffer for pauses and audience reactions.' },
]

export default function Page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/words-per-minute" className="hover:text-emerald-400 transition-colors">Words Per Minute</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">${sp.min}-Minute Speech</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Words in a ${sp.min}-Minute Speech?</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A ${sp.min}-minute speech is approximately ${sp.words} words at the average speaking rate of 130 words per minute. At a slower pace (100 wpm), aim for ${sp.slow.toLocaleString()} words. At a faster pace (160 wpm), you need about ${sp.fast.toLocaleString()} words. This length is common for ${sp.context}.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">${sp.min}-Minute Speech Word Count by Speed</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Speaking Speed</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Words Per Minute</th><th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Words in ${sp.min} Min</th></tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white font-medium py-3 pr-4">Slow (deliberate)</td><td className="text-slate-300 py-3 pr-4">100 wpm</td><td className="text-slate-300 py-3">${sp.slow.toLocaleString()} words</td></tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white font-medium py-3 pr-4">Average (conversational)</td><td className="text-slate-300 py-3 pr-4">130 wpm</td><td className="text-slate-300 py-3">${sp.avg.toLocaleString()} words</td></tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white font-medium py-3 pr-4">Fast (energetic)</td><td className="text-slate-300 py-3 pr-4">160 wpm</td><td className="text-slate-300 py-3">${sp.fast.toLocaleString()} words</td></tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white font-medium py-3 pr-4">Very Fast</td><td className="text-slate-300 py-3 pr-4">200 wpm</td><td className="text-slate-300 py-3">${(sp.min * 200).toLocaleString()} words</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Write a ${sp.min}-Minute Speech</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">A ${sp.min}-minute speech requires approximately <strong className="text-emerald-400">${sp.words} words</strong>. The exact count depends on your natural speaking pace, pauses for emphasis, and audience interaction. Most speakers average 130 words per minute in a prepared speech setting.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Tip for timing:</strong> Practice with a timer at least 3 times before your actual speech. Most people speak faster when nervous, so aim for slightly fewer words than the maximum. Leave 10-15% buffer time for natural pauses, audience laughter, or applause.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Structure suggestion:</strong> ${sp.min <= 5 ? 'Keep it simple with one main point, a brief intro, and a memorable closing. Every word counts at this length.' : sp.min <= 15 ? 'Use a strong opening hook (10%), 2-3 main points with examples (75%), and a memorable close with call to action (15%).' : 'Divide into clear sections with natural breaks. Include stories, data, audience interaction, and visual aids. Plan 2-3 key takeaways and reinforce them throughout.'}</p>
              <p className="text-slate-300 text-sm leading-relaxed">Common uses for a ${sp.min}-minute speech: ${sp.context}. Use our <a href="/word-counter" className="text-emerald-400 hover:underline">free word counter</a> to check your speech length before practicing.</p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Speech Word Count</p>
            <p className="text-slate-400 text-sm mb-4">Paste your speech and get instant word count, speaking time, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Speech Lengths</h2>
            <div className="flex flex-wrap gap-2">
              ${[1,2,3,4,5,7,8,10,12,15,20,25,30,45,60,90].filter(m => m !== sp.min).map(m => `<a href="/words-per-minute/speech/${m}-minute-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">${m}-Min Speech</a>`).join('\n              ')}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Words Per Minute","item":"${DOMAIN}/words-per-minute"},{"@type":"ListItem","position":3,"name":"${sp.min}-Minute Speech","item":"${DOMAIN}/words-per-minute/speech/${slug}"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"${sp.min}-Minute Speech Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), content);
  return true;
}

// ============================================================
// 1. MORE SPEECH PAGES (8 new durations)
// ============================================================
console.log('--- Building More Speech Duration Pages ---');

const newSpeeches = [
  { min: 4, words: '520-600', slow: 400, avg: 520, fast: 640, context: 'a maid of honor speech, quick business update, or classroom presentation' },
  { min: 8, words: '1,040-1,200', slow: 800, avg: 1040, fast: 1280, context: 'a YouTube video script, detailed product demo, or TED-style talk' },
  { min: 12, words: '1,560-1,800', slow: 1200, avg: 1560, fast: 1920, context: 'a conference talk, detailed keynote segment, or training module' },
  { min: 35, words: '4,550-5,250', slow: 3500, avg: 4550, fast: 5600, context: 'a full lecture, extended workshop segment, or long keynote' },
  { min: 40, words: '5,200-6,000', slow: 4000, avg: 5200, fast: 6400, context: 'a university lecture, full training session, or conference keynote' },
  { min: 50, words: '6,500-7,500', slow: 5000, avg: 6500, fast: 8000, context: 'a detailed lecture, long workshop, or corporate training' },
  { min: 75, words: '9,750-11,250', slow: 7500, avg: 9750, fast: 12000, context: 'a masterclass, extended seminar, or full workshop session' },
  { min: 90, words: '11,700-13,500', slow: 9000, avg: 11700, fast: 14400, context: 'a full seminar, extended lecture, or half-day workshop segment' },
];

for (const sp of newSpeeches) {
  if (buildSpeechPage(sp)) {
    created++;
    console.log('  ✅ ' + sp.min + '-minute speech');
  } else {
    console.log('  ⏭️  Skip ' + sp.min + '-minute (exists)');
  }
}

// ============================================================
// 2. 10 LONG-TAIL BLOG POSTS
// ============================================================
console.log('');
console.log('--- Building 10 Long-Tail Blog Posts ---');

function buildBlog(post) {
  const dir = path.join(APP, 'blog', post.slug);
  if (fs.existsSync(dir)) return false;
  ensureDir(dir);

  const faqsStr = JSON.stringify(post.faqs);

  const content = `import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: '${post.title.replace(/'/g, "'")} | WordCounterTool.net',
  description: '${post.desc.replace(/'/g, "'")}',
  alternates: { canonical: '${DOMAIN}/blog/${post.slug}' },
}

const faqs = ${faqsStr}

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${post.title.replace(/'/g, "'")}</h1>
          <p className="text-slate-500 text-sm mb-8">Updated ${post.date} · ${post.readMin} min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">${post.quick.replace(/'/g, "'")}</p>
          </div>

          ${post.table ? `<h2 className="text-2xl font-bold text-white mb-4 mt-10">${post.tableTitle}</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                ${post.table[0].map(h => '<th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">' + h + '</th>').join('')}
              </tr></thead>
              <tbody>
                ${post.table.slice(1).map(r => '<tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}>' + r.map((c, j) => j === 0 ? '<td className="text-white font-medium py-3 pr-4 text-sm">' + c + '</td>' : '<td className="text-slate-300 py-3 pr-4 text-sm">' + c + '</td>').join('') + '</tr>').join('\n                ')}
              </tbody>
            </table>
          </div>` : ''}

          <AdUnit slot="3248634657" />

          ${post.sections.map(s => `<h2 className="text-2xl font-bold text-white mb-4 mt-10">${s.title}</h2>
          ${s.paras.map(p => `<p className="text-slate-400 text-base leading-relaxed mb-4">${p.replace(/'/g, "'")}</p>`).join('\n          ')}`).join('\n\n          ')}

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Try It Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text for instant word count, reading time, and readability score</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          <AdUnit slot="3763639977" />

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
          <div className="flex flex-wrap gap-2">
            ${post.links.map(([href, lbl]) => '<a href="' + href + '" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">' + lbl + '</a>').join('\n            ')}
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"${post.title.replace(/'/g, "'")}","author":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"${post.date}"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Blog","item":"${DOMAIN}/blog"},{"@type":"ListItem","position":3,"name":"${post.title.split(':')[0].replace(/'/g, "'")}","item":"${DOMAIN}/blog/${post.slug}"}]})}} />
      <Footer />
    </>
  )
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), content);
  return true;
}

const blogs = [
  {
    slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words in a Personal Statement? (2026 Guide)', desc: 'UCAS personal statements: 4,000 characters. Graduate school: 500-1,000 words. Medical school: 5,300 characters. Complete guide.', date: '2026-03-21', readMin: 8,
    quick: 'A UCAS personal statement must be under 4,000 characters (47 lines). Graduate school personal statements are 500-1,000 words. Medical school (AMCAS) allows 5,300 characters. Law school: 2 pages. MBA: 500-750 words.',
    tableTitle: 'Personal Statement Word Counts by Application',
    table: [['Application','Length'],['UCAS (UK universities)','4,000 characters / 47 lines'],['Graduate school (US)','500-1,000 words'],['Medical school (AMCAS)','5,300 characters'],['Law school (LSAC)','2 pages / ~750 words'],['MBA programs','500-750 words'],['PhD programs','1,000-1,500 words'],['Scholarship applications','400-600 words']],
    sections: [
      { title: 'UCAS Personal Statement (UK Universities)', paras: ['The UCAS personal statement is unique because it uses a character limit (4,000 characters including spaces) rather than a word count. This translates to approximately 550-650 words depending on your writing style. You also cannot exceed 47 lines, which can be the tighter constraint if you use short paragraphs with line breaks.','Every character counts. Abbreviations like "I have" save 1 character over "I have." But do not sacrifice clarity for brevity. Admissions tutors read thousands of statements — clear, engaging writing stands out more than clever character-saving tricks. Focus 75% on academic motivation and 25% on extracurricular activities.','The biggest UCAS mistake is being too generic. "I have always been passionate about biology" appears in thousands of statements. Instead, describe a specific moment that sparked your interest: a book, experiment, lecture, or experience that made you think differently about the subject.'] },
      { title: 'Graduate School Personal Statements (US)', paras: ['US graduate programs typically want 500-1,000 words (2-3 double-spaced pages). Some programs specify exact limits; others give vague guidance like "approximately two pages." When no limit is specified, aim for 750-800 words — long enough to develop your narrative, short enough to hold the reader attention.','Structure your statement around a clear narrative arc: what sparked your interest (1-2 paragraphs), what you have done to pursue it (2-3 paragraphs), and what you want to do next and why this program is the right fit (1-2 paragraphs). Every paragraph should advance your story toward the conclusion that you belong in this program.','Avoid summarizing your resume. The admissions committee already has your CV. Instead, tell the story behind the bullet points. What did you learn from your research experience? How did a specific challenge change your perspective? What drives your curiosity in this field? Personal statements that read like narrative essays outperform those that read like expanded resumes.'] },
      { title: 'How to Edit a Personal Statement for Length', paras: ['First drafts are always too long. Write freely without worrying about the word limit, then cut ruthlessly. Target cutting 15-20% from your first draft. Read each sentence and ask: does this tell the reader something new? If two sentences make the same point, combine them or cut one.','Replace generic phrases with specific details. "I gained valuable experience" (4 words, zero information) becomes "I analyzed 200 patient samples using CRISPR" (8 words, maximum information). Specific details are more compelling AND often more concise than vague statements.','Read your statement aloud. If you stumble over a sentence, it is too long or too complex. Personal statements should sound natural and confident, not academic or forced. Use our word counter to track your progress toward the target length as you edit.'] },
    ],
    faqs: [
      { q: 'How long is a UCAS personal statement?', a: 'A UCAS personal statement must be under 4,000 characters (including spaces) and 47 lines. This is approximately 550-650 words. Both limits are hard — UCAS will cut off anything beyond.' },
      { q: 'How long should a graduate school personal statement be?', a: 'Most US graduate programs want 500-1,000 words (2-3 pages double-spaced). When no limit is specified, aim for 750-800 words. Always check the specific program requirements.' },
      { q: 'Should I use the full word limit?', a: 'Aim for 85-95% of the maximum. Going significantly under suggests you have not fully developed your ideas. Using every last word or character risks a rushed conclusion.' },
      { q: 'What is the difference between a personal statement and statement of purpose?', a: 'A personal statement focuses on your story, motivations, and personal qualities. A statement of purpose focuses on your research interests, academic goals, and fit with the program. Some programs use the terms interchangeably.' },
    ],
    links: [['/word-counter','Word Counter'],['/character-counter','Character Counter'],['/word-count/for/personal-statement','Personal Statement Guide'],['/word-count/for/college-application-essay','College Application Essay'],['/readability-checker','Readability Checker']],
  },
  {
    slug: 'how-many-words-in-a-blog-post', title: 'How Many Words Should a Blog Post Be? (2026 SEO Data)', desc: 'The ideal blog post is 1,500-2,500 words for SEO. Page 1 results average 1,447 words. Complete guide with data.', date: '2026-03-21', readMin: 10,
    quick: 'The ideal blog post for SEO is 1,500-2,500 words. The average word count of a Google page 1 result is 1,447 words. Long-form posts (2,000+ words) earn 3x more traffic and 3.5x more backlinks than short posts.',
    tableTitle: 'Blog Post Length by Type',
    table: [['Blog Post Type','Ideal Length','Why'],['SEO blog post','1,500-2,500 words','Comprehensive coverage ranks higher'],['Listicle','1,500-3,000 words','More items = more value'],['How-to guide','1,200-2,500 words','Step-by-step depth'],['News/trending','600-1,000 words','Speed over depth'],['Pillar content','3,000-5,000 words','Topical authority'],['Guest post','1,000-1,500 words','Match host blog style'],['Product review','1,500-2,500 words','Thorough evaluation']],
    sections: [
      { title: 'What the Data Says About Blog Post Length', paras: ['Multiple studies from Backlinko, HubSpot, and Ahrefs consistently find that longer content correlates with higher rankings. Backlinko analyzed 11.8 million Google search results and found the average first-page result contains 1,447 words. HubSpot found that posts over 2,500 words earn the most organic traffic.','However, correlation is not causation. Long posts rank well because they tend to be more comprehensive, answer more questions, and earn more backlinks. A padded 3,000-word post will not outrank a focused 1,500-word post that perfectly answers the search query. Quality per word matters more than total word count.','The real insight is intent matching. For informational queries like "how to start investing," comprehensive 2,000-3,000 word guides dominate. For quick-answer queries like "what is GDP," a focused 500-800 word answer wins. Google rewards the content that best satisfies what the searcher actually wants.'] },
      { title: 'How to Determine the Right Length for Your Post', paras: ['Search your target keyword on Google and analyze the top 5 results. Note their word counts (use our word counter tool). The average length of top-ranking content is your baseline. Aim to be equal or slightly longer while adding more value — not just more words.','Consider your audience attention span. B2B audiences reading industry content tolerate longer posts (2,000-3,000 words). Consumer audiences on lifestyle blogs prefer shorter posts (1,000-1,500 words). Data from Medium shows the ideal read time is 7 minutes, which corresponds to approximately 1,750 words.','Never pad content to hit a word count target. Every paragraph should earn its place. If you have covered the topic thoroughly in 1,200 words, publish it at 1,200 words. Adding 800 words of filler to reach 2,000 hurts user engagement metrics (bounce rate, time on page) which in turn hurts rankings.'] },
      { title: 'Blog Length Strategy for New Blogs', paras: ['New blogs should focus on long-tail keywords with less competition, where 1,500-word posts can rank. Targeting "best credit cards 2026" (extremely competitive) requires 5,000+ word mega-guides. Targeting "best credit cards for gas station purchases" (long-tail) can rank with a focused 1,500-word review.','Publish 2-3 high-quality posts per week rather than 7 thin posts. Google Helpful Content Update (2024-2025) specifically targets sites that publish large volumes of low-quality content. A consistent schedule of valuable content builds domain authority faster than content mills.','Use content clusters: one pillar post (3,000-5,000 words) surrounded by 5-10 supporting posts (1,500-2,000 words each) all internally linked. This structure signals topical expertise to Google and keeps readers on your site longer, improving engagement metrics across the board.'] },
    ],
    faqs: [
      { q: 'How many words should a blog post be for SEO?', a: 'The ideal SEO blog post is 1,500-2,500 words. The average Google page 1 result is 1,447 words. However, length should match search intent — some topics need 3,000+ words while others only need 800.' },
      { q: 'Is a 500-word blog post too short?', a: 'For competitive SEO keywords, yes. But 500 words is fine for news updates, quick tips, or personal blog entries where SEO is not the primary goal. Many successful newsletters are 300-500 words.' },
      { q: 'How long does it take to write a 2,000-word blog post?', a: 'An experienced writer can produce a 2,000-word blog post in 2-4 hours including research, writing, and editing. Beginners may need 4-8 hours. Using an outline cuts writing time by 30-50%.' },
      { q: 'Does Google count blog post word count?', a: 'Google does not use word count as a direct ranking factor. However, longer content tends to be more comprehensive, earn more backlinks, and better match informational search intent — all of which indirectly improve rankings.' },
    ],
    links: [['/word-counter','Word Counter'],['/keyword-density','Keyword Density'],['/readability-checker','Readability Checker'],['/reading-time','Reading Time'],['/blog/ideal-blog-post-length-for-seo','SEO Content Length Guide'],['/blog/seo-content-length-guide','Content Length Guide']],
  },
  {
    slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools in 2026: Complete Comparison', desc: 'Compare the top AI writing tools in 2026. ChatGPT, Claude, Gemini, Jasper, and more. Pricing, features, and which is best for your needs.', date: '2026-03-21', readMin: 9,
    quick: 'The best AI writing tools in 2026 are ChatGPT (best all-around), Claude (best for long-form), Gemini (best free option), Jasper (best for marketing), and Grammarly (best for editing). Prices range from free to $99/month.',
    tableTitle: 'AI Writing Tools Comparison (2026)',
    table: [['Tool','Best For','Price'],['ChatGPT','General writing, brainstorming','Free / $20/mo Plus'],['Claude','Long-form, analysis, research','Free / $20/mo Pro'],['Gemini','Research, Google integration','Free / $20/mo Advanced'],['Jasper','Marketing copy, ads','$49-$99/mo'],['Copy.ai','Short-form marketing','Free / $49/mo'],['Writesonic','SEO blog posts','Free / $19/mo'],['Grammarly','Grammar, editing, tone','Free / $12/mo'],['Hemingway','Readability improvement','Free (web)'],['Surfer SEO','SEO content optimization','$89/mo'],['WordCounterTool.net','Word count, readability, SEO','100% Free']],
    sections: [
      { title: 'AI Writing Tools vs Human Writing', paras: ['AI writing tools have transformed content creation, but they work best as assistants, not replacements. The most effective workflow is: use AI for first drafts, outlines, and research, then edit heavily with your own voice and expertise. Googles Helpful Content guidelines specifically target low-effort AI-generated content that lacks original insight.','The key advantage of AI tools is speed. A 2,000-word first draft that might take 3 hours to write manually can be generated in 5 minutes. But the editing phase — adding personal experience, checking facts, improving flow, and adding original analysis — still takes 1-2 hours. Net time savings: 30-50%, not 90%.','Always run AI-generated content through a word counter and readability checker before publishing. AI tends to produce verbose, repetitive text at a college reading level. The best content reads at a 6th-8th grade level. Our free readability checker scores your text instantly and suggests improvements.'] },
      { title: 'How to Choose the Right AI Tool', paras: ['For blog posts and long-form content: Claude and ChatGPT excel at generating well-structured articles. Claude handles longer context windows, making it better for editing entire articles at once. ChatGPT has more plugins and integrations.','For marketing and ad copy: Jasper and Copy.ai are purpose-built for marketing. They include templates for email subject lines, ad headlines, social media posts, and product descriptions. The ROI is clearest for marketing teams producing high volumes of short-form copy.','For SEO optimization: Surfer SEO and Clearscope analyze top-ranking content and suggest keywords, headings, and content length. They work alongside AI writers — generate the draft with ChatGPT, then optimize with Surfer. This combination produces content that ranks.'] },
      { title: 'Free Tools Every Writer Needs', paras: ['You do not need to spend $100/month on writing tools. The best free stack: WordCounterTool.net for word counting, readability scoring, and keyword density analysis. Grammarly Free for grammar and spelling. Hemingway Editor for readability. Google Docs for writing. This combination covers 90% of what paid tools offer.','Our word counter provides instant metrics that AI tools do not: exact word count, character count, sentence count, reading time, speaking time, keyword density, and readability score. These metrics are essential for meeting content requirements whether you are writing for a client, school, or your own blog.'] },
    ],
    faqs: [
      { q: 'What is the best free AI writing tool?', a: 'ChatGPT (free tier) and Gemini are the best free AI writing tools. For non-AI writing tools, WordCounterTool.net, Grammarly Free, and Hemingway Editor form a powerful free stack.' },
      { q: 'Can Google detect AI-written content?', a: 'Google says it does not penalize AI content specifically, but it does penalize low-quality, unhelpful content regardless of how it was created. AI content that is edited, fact-checked, and enhanced with original insight performs well.' },
      { q: 'Should I use AI to write blog posts?', a: 'AI is excellent for first drafts, outlines, and overcoming writers block. But always edit heavily, add your own expertise, and fact-check everything. The best content combines AI efficiency with human insight and experience.' },
    ],
    links: [['/word-counter','Word Counter'],['/readability-checker','Readability Checker'],['/keyword-density','Keyword Density'],['/blog/best-free-writing-tools-2026','Free Writing Tools'],['/blog/how-to-write-faster','How to Write Faster']],
  },
  {
    slug: 'how-to-write-wedding-speech', title: 'How to Write a Wedding Speech: Word Count, Structure, and Tips (2026)', desc: 'Wedding speech guide: Best man 500-800 words, maid of honor 400-700, father of the bride 400-650. Structure templates and timing tips.', date: '2026-03-21', readMin: 9,
    quick: 'A best man speech should be 500-800 words (4-6 minutes). A maid of honor speech: 400-700 words (3-5 minutes). Father of the bride: 400-650 words (3-5 minutes). Keep it under 7 minutes. The best wedding speeches are heartfelt, funny, and SHORT.',
    tableTitle: 'Wedding Speech Word Counts',
    table: [['Speaker','Word Count','Duration'],['Best man','500-800 words','4-6 minutes'],['Maid of honor','400-700 words','3-5 minutes'],['Father of bride','400-650 words','3-5 minutes'],['Mother of bride','250-500 words','2-4 minutes'],['Groom','400-650 words','3-5 minutes'],['Bride','250-500 words','2-4 minutes'],['Wedding toast','100-250 words','1-2 minutes'],['Officiant remarks','500-1,000 words','4-8 minutes']],
    sections: [
      { title: 'The Best Man Speech Formula', paras: ['The best best man speeches follow a proven structure: introduce yourself and how you know the groom (50-80 words), tell one or two funny stories (150-250 words), compliment the couple and welcome the partner (100-150 words), share heartfelt wishes (80-120 words), and close with a toast (30-50 words). Total: 500-650 words.','Keep funny stories PG-rated. Never mention exes, embarrassing secrets, or inside jokes that only you understand. The audience includes grandparents, children, and people meeting you for the first time. A story that kills at poker night might bomb at a wedding reception with 150 guests.','Practice your speech at least 5 times out loud. Time yourself each time. Nervous speakers rush — your 5-minute speech might take only 3 minutes if you speed through it. Mark pause points in your script to force yourself to slow down. Make eye contact with the couple during heartfelt moments.'] },
      { title: 'Common Wedding Speech Mistakes', paras: ['Going too long is the number one mistake. Nobody in the history of weddings has complained that a speech was too short. Aim for 4-5 minutes. After 7 minutes, guests start checking phones and looking for the bar. The best speeches leave the audience wanting more, not less.','Getting too drunk before speaking is number two. Have one drink for courage if needed, but save the celebration for after your speech. Slurred words, forgotten lines, and inappropriate comments have ruined countless wedding speeches. You are performing for an audience — treat it that way.','Reading directly from your phone kills the emotional connection. Use brief notes or index cards with bullet points, not a full script on a screen. Glancing down at notes is natural; staring at a phone screen for 5 minutes is not. Practice enough that you only need the notes as safety anchors.'] },
    ],
    faqs: [
      { q: 'How long should a wedding speech be?', a: 'A wedding speech should be 3-6 minutes (400-800 words). The sweet spot is 4-5 minutes. Never exceed 7 minutes. Short and heartfelt always beats long and rambling.' },
      { q: 'How many words is a 5-minute wedding speech?', a: 'A 5-minute wedding speech is approximately 650 words at the average speaking rate of 130 words per minute. Account for pauses, laughter, and emotional moments.' },
      { q: 'Should I memorize my wedding speech?', a: 'Memorize the opening and closing lines, but use note cards for the middle. Fully memorized speeches risk going blank. Note cards with bullet points feel more natural and give you a safety net.' },
    ],
    links: [['/word-counter','Word Counter'],['/word-count/for/wedding-speech','Wedding Speech Guide'],['/word-count/for/best-man-speech','Best Man Speech'],['/word-count/for/maid-of-honor-speech','Maid of Honor Speech'],['/words-per-minute/speech/5-minute-speech','5-Minute Speech']],
  },
  {
    slug: 'substack-newsletter-length', title: 'Ideal Substack Newsletter Length (2026 Data)', desc: 'The ideal Substack newsletter is 1,000-2,000 words (5-10 min read). Free vs paid length strategies. Complete guide.', date: '2026-03-21', readMin: 8,
    quick: 'The ideal Substack newsletter is 1,000-2,000 words (5-10 minute read). Free newsletters can be shorter (500-1,000 words). Paid newsletters should deliver more value at 1,500-3,000 words. The top-earning Substacks average 1,200-1,800 words per issue.',
    tableTitle: 'Newsletter Length by Type', table: [['Newsletter Type','Ideal Length','Frequency'],['Free Substack','500-1,200 words','2-3x per week'],['Paid Substack','1,200-2,500 words','1-2x per week'],['Curated roundup','300-600 words + links','Weekly'],['Long-form essay','2,000-4,000 words','Weekly or biweekly'],['Industry briefing','600-1,000 words','Daily or 3x/week'],['Personal newsletter','500-1,500 words','Weekly']],
    sections: [
      { title: 'Why Newsletter Length Matters', paras: ['Newsletter length directly impacts open rates, read rates, and subscriber retention. Data from Substack shows that newsletters taking 5-10 minutes to read have the highest engagement. Under 3 minutes feels like a tweet thread — subscribers question the value. Over 15 minutes leads to "save for later" behavior, where most readers never return.','For paid newsletters, length signals value. Subscribers paying $5-15/month expect substantial content. A 300-word paid newsletter feels like a rip-off. The most successful paid Substacks deliver 1,500-2,500 words of original analysis, reporting, or insight that cannot be found elsewhere for free.','Consistency matters more than any single issue length. Subscribers build habits around your newsletter. If you publish 1,500 words every Tuesday, readers expect 1,500 words every Tuesday. Dramatic length variation (500 words one week, 4,000 the next) disrupts the habit and increases unsubscribes.'] },
      { title: 'Free vs Paid Newsletter Strategy', paras: ['The most effective Substack model uses free posts as marketing for paid subscriptions. Free posts should be slightly shorter (800-1,200 words), demonstrate your expertise, and end with a teaser of what paid subscribers get. Paid posts should deliver premium value at 1,500-2,500 words with exclusive analysis, data, or access.','A common ratio is 60% free / 40% paid content. This gives free subscribers enough value to stay engaged while creating a clear upgrade path. Top Substack earners like Lenny Rachitsky, The Diff, and Stratechery all use this model — generous free content that hooks readers, premium content that converts them.'] },
    ],
    faqs: [
      { q: 'How long should a Substack newsletter be?', a: 'The ideal Substack newsletter is 1,000-2,000 words (5-10 minute read). Free newsletters can be shorter (500-1,200 words). Paid newsletters should be longer (1,500-2,500 words) to justify the subscription price.' },
      { q: 'How often should I publish on Substack?', a: 'Weekly is the most common and sustainable frequency. Daily newsletters work for news/curation formats. Biweekly is fine for long-form essays. Consistency matters more than frequency — pick a schedule you can maintain.' },
      { q: 'What is the ideal Substack subject line length?', a: 'Substack subject lines should be under 60 characters for full display in email clients. Front-load the most compelling words. Subject lines with numbers and specific promises get higher open rates.' },
    ],
    links: [['/word-counter','Word Counter'],['/character-counter','Character Counter'],['/reading-time','Reading Time'],['/character-limits/substack','Substack Limits'],['/blog/email-length-best-practices','Email Length Guide']],
  },
  {
    slug: 'reddit-post-length', title: 'Ideal Reddit Post Length for Maximum Upvotes (2026)', desc: 'Reddit posts with 100-300 words get the most upvotes. Titles under 120 characters. Comments: 50-150 words. Complete guide.', date: '2026-03-21', readMin: 7,
    quick: 'Reddit text posts perform best at 100-300 words for most subreddits. Titles under 120 characters get more clicks. Comments of 50-150 words get the most upvotes. Long-form posts (1,000+ words) work in specific subreddits like r/relationship_advice and r/tifu.',
    tableTitle: 'Reddit Content Length Guide', table: [['Content Type','Optimal Length'],['Post title','60-120 characters'],['Text post (most subs)','100-300 words'],['Long-form story subs','500-2,000 words'],['Comment','50-150 words'],['TLDR','1-2 sentences'],['Subreddit rules post','500-1,000 words']],
    sections: [
      { title: 'Why Shorter Posts Win on Reddit', paras: ['Reddit users scroll fast. The average Redditor spends 3-5 seconds deciding whether to read a post. Long walls of text get skipped. Posts of 100-300 words are long enough to provide context and value but short enough to be consumed in under 2 minutes. This sweet spot maximizes both read-through rate and upvotes.','Formatting matters enormously on Reddit. Use short paragraphs (2-3 sentences max), bold key points, and bullet lists for scanability. A well-formatted 300-word post outperforms a poorly-formatted 100-word post because readers can quickly identify the key information.','Always include a TLDR (Too Long, Did not Read) summary at the top or bottom of posts over 200 words. Reddit culture values accessibility. A one-sentence TLDR shows respect for readers time and often gets upvoted on its own.'] },
      { title: 'Reddit Title Optimization', paras: ['Reddit titles are everything. Unlike social media where the feed shows content previews, Reddit shows titles first. A compelling title determines 80% of your post engagement. Keep titles under 120 characters, be specific rather than vague, and use numbers when applicable.','Questions in titles drive comments. Statements drive upvotes. "Whats the best budgeting app?" generates discussion. "I tried 10 budgeting apps — heres the best one" generates clicks and upvotes. Choose your title format based on whether you want engagement (questions) or reach (statements).'] },
    ],
    faqs: [
      { q: 'How long should a Reddit post be?', a: 'Most Reddit posts perform best at 100-300 words. Story-based subreddits accept longer posts (500-2,000 words). Always match the culture of the specific subreddit.' },
      { q: 'How long should a Reddit title be?', a: 'Reddit titles should be under 120 characters. Titles between 60-120 characters get the most engagement. Be specific and compelling.' },
      { q: 'Should I include TLDR?', a: 'Yes, for any post over 200 words. Place it at the top or bottom. Reddit culture values brevity, and a good TLDR can earn upvotes even from people who do not read the full post.' },
    ],
    links: [['/word-counter','Word Counter'],['/character-counter','Character Counter'],['/character-limits/reddit','Reddit Limits'],['/readability-checker','Readability Checker']],
  },
  {
    slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words in a Grant Proposal? (Complete 2026 Guide)', desc: 'Grant proposals are typically 5-25 pages. NIH R01: 12 pages. NSF: 15 pages. Complete word counts by funder and section.', date: '2026-03-21', readMin: 8,
    quick: 'Grant proposal length varies by funder: NIH R01 research strategy is 12 pages (~6,000 words). NSF proposals are 15 pages (~7,500 words). Private foundations typically want 5-10 pages. LOIs (Letters of Intent) are 1-3 pages. Always follow the funders specific page or word limits exactly.',
    tableTitle: 'Grant Proposal Length by Funder', table: [['Funder/Type','Length','Word Count (approx)'],['NIH R01 (research strategy)','12 pages','~6,000 words'],['NIH R21 (exploratory)','6 pages','~3,000 words'],['NSF standard proposal','15 pages','~7,500 words'],['Private foundation','5-10 pages','2,500-5,000 words'],['Letter of Intent (LOI)','1-3 pages','500-1,500 words'],['Corporate grant','3-10 pages','1,500-5,000 words'],['Government (federal)','15-25 pages','7,500-12,500 words']],
    sections: [
      { title: 'Grant Proposal Section Breakdown', paras: ['A typical NIH R01 research strategy (12 pages) breaks down approximately as: Specific Aims (1 page / 500 words), Significance (2-3 pages / 1,000-1,500 words), Innovation (1-2 pages / 500-1,000 words), and Approach (5-8 pages / 2,500-4,000 words). The Specific Aims page is the most important — reviewers often form their initial opinion based on this single page.','NSF proposals follow a different structure: Project Summary (1 page / 300 words), Project Description (15 pages / ~7,500 words), and References Cited (no page limit). The Project Description must include Results from Prior NSF Support, which takes 1-2 pages from your 15-page allowance.','For private foundations, proposals are typically much shorter. The Bill and Melinda Gates Foundation LOI is 2 pages. Ford Foundation proposals are 5-8 pages. Shorter is not easier — condensing complex research into 2,500 words requires extreme clarity and precision.'] },
      { title: 'Tips for Meeting Grant Page Limits', paras: ['Most funders specify page limits, not word limits. A "12-page proposal" in NIH format (11pt Arial, 0.5-inch margins) fits approximately 500 words per page. Using smaller margins or fonts to squeeze in more text is explicitly forbidden and can result in automatic rejection without review.','Write your first draft without worrying about length, then cut methodically. Start by eliminating redundant phrases, unnecessary background information, and excessive methodological detail. If reviewers need more detail, they will ask in the review process. Your proposal should be tight, clear, and compelling — not exhaustive.','Use figures, tables, and diagrams strategically. A well-designed figure can communicate in one-third of a page what would take a full page of text to explain. NIH and NSF allow figures within the page limit, and reviewers appreciate visual clarity. Use our word counter to track your text length as you write.'] },
    ],
    faqs: [
      { q: 'How long is an NIH grant proposal?', a: 'The NIH R01 research strategy section is 12 pages (~6,000 words). The R21 is 6 pages. Additional sections (Specific Aims, budget justification, biosketches) add 10-20 more pages to the total application.' },
      { q: 'How many words is a grant LOI?', a: 'A Letter of Intent (LOI) is typically 1-3 pages or 500-1,500 words. Some funders require as little as 300 words. The LOI should concisely describe the problem, your approach, and expected impact.' },
      { q: 'What happens if I exceed the page limit?', a: 'Most funders (NIH, NSF) will reject applications that exceed page limits without review. Some will truncate pages beyond the limit. Never risk exceeding the limit — have a colleague check formatting before submission.' },
    ],
    links: [['/word-counter','Word Counter'],['/word-count/for/grant-proposal','Grant Proposal Guide'],['/reading-time','Reading Time'],['/words-per-page','Words Per Page'],['/readability-checker','Readability Checker']],
  },
  {
    slug: 'twitter-character-limit-2026', title: 'Twitter/X Character Limit 2026: Everything You Need to Know', desc: 'Twitter/X character limit is 280 for free users, 25,000 for Premium. Complete guide to all Twitter limits in 2026.', date: '2026-03-21', readMin: 8,
    quick: 'Twitter/X allows 280 characters for free users and up to 25,000 characters for Premium subscribers. The optimal tweet length for engagement is 71-100 characters. DMs allow 10,000 characters. Usernames: 15 characters. Display names: 50 characters.',
    tableTitle: 'All Twitter/X Character Limits (2026)', table: [['Content','Free Users','Premium Users'],['Tweet','280 characters','25,000 characters'],['Reply','280 characters','25,000 characters'],['DM','10,000 characters','10,000 characters'],['Bio','160 characters','160 characters'],['Username','15 characters','15 characters'],['Display name','50 characters','50 characters'],['List name','25 characters','25 characters'],['List description','100 characters','100 characters']],
    sections: [
      { title: 'Optimal Tweet Length for Engagement', paras: ['Despite the 280-character limit, shorter tweets consistently outperform longer ones. Data from multiple studies shows that tweets between 71-100 characters get the highest engagement rates. This length is enough to make a complete point but short enough to be absorbed in a single glance while scrolling.','Tweets under 50 characters can feel incomplete or low-effort. Tweets over 200 characters see declining engagement because they require more mental processing. The exception is thread-starting tweets, where a compelling 200-280 character hook drives people to read the full thread.','For businesses and brands, tweets with a clear call to action perform best at 100-120 characters — enough for the message plus a link or hashtag. Leave room for others to quote-retweet with their own commentary by staying under 200 characters.'] },
      { title: 'Twitter Premium: Is 25,000 Characters Worth It?', paras: ['Twitter Premium (formerly Twitter Blue) expanded the character limit to 25,000 — essentially turning tweets into blog posts. However, most successful Premium users still keep individual tweets short and use the extended limit only for specific use cases: detailed analysis, thread alternatives, and long-form reactions.','The 25,000-character limit works best as a thread replacement. Instead of a 15-tweet thread, you can post a single long-form tweet. However, long tweets show a truncated preview with a "Show more" button — most users do not click. Threads still tend to get more engagement because each tweet in a thread is a separate engagement opportunity.','Use our character counter to optimize your tweet length before posting. Even with the expanded limit, concise writing wins on Twitter. Every character should earn its place.'] },
    ],
    faqs: [
      { q: 'What is the Twitter character limit in 2026?', a: 'Free Twitter/X users have a 280-character limit per tweet. Premium subscribers can post up to 25,000 characters. DMs allow 10,000 characters for all users.' },
      { q: 'What is the optimal tweet length?', a: 'The optimal tweet length for engagement is 71-100 characters. Shorter tweets get more retweets and likes because they are easier to consume while scrolling.' },
      { q: 'Do spaces and emojis count as characters?', a: 'Yes, spaces count as 1 character each. Most emojis count as 2 characters. URLs are automatically shortened to 23 characters regardless of actual length. Mentions (@username) count toward the character limit.' },
    ],
    links: [['/character-counter','Character Counter'],['/character-limits/twitter','Twitter Limits'],['/twitter-thread-counter','Thread Counter'],['/blog/how-many-characters-in-a-tweet','Characters in a Tweet'],['/blog/how-to-write-twitter-thread','Twitter Thread Guide']],
  },
  {
    slug: 'ebook-word-count-guide', title: 'Ebook Word Count: How Long Should Your Ebook Be? (2026)', desc: 'A short ebook is 5,000-10,000 words. A standard ebook is 10,000-30,000 words. A long ebook is 30,000-50,000 words. Complete guide.', date: '2026-03-21', readMin: 8,
    quick: 'A lead magnet ebook: 3,000-5,000 words. A short ebook: 5,000-10,000 words. A standard ebook: 10,000-30,000 words. A full-length ebook: 30,000-50,000 words. Amazon KDP recommends at least 2,500 words for paid ebooks. The sweet spot for most non-fiction ebooks is 10,000-20,000 words.',
    tableTitle: 'Ebook Word Count by Type', table: [['Ebook Type','Word Count','Pages (approx)'],['Lead magnet / freebie','3,000-5,000','12-20 pages'],['Short ebook','5,000-10,000','20-40 pages'],['Standard ebook','10,000-30,000','40-120 pages'],['Full-length ebook','30,000-50,000','120-200 pages'],['Kindle Single','5,000-30,000','20-120 pages'],['Course companion','5,000-15,000','20-60 pages']],
    sections: [
      { title: 'Ebook Length by Purpose', paras: ['Lead magnet ebooks (given away free to build email lists) should be 3,000-5,000 words — long enough to provide real value, short enough to be consumed in one sitting. A 50-page lead magnet overwhelms prospects. A 15-page guide that solves one specific problem converts much better.','Paid Amazon KDP ebooks should be at least 10,000 words for non-fiction. Readers who pay $4.99-$9.99 expect substantial content. Ebooks under 5,000 words frequently receive negative reviews about length. The sweet spot for most non-fiction niches is 15,000-25,000 words — comprehensive but focused.','Course companion ebooks (bundled with online courses) are typically 5,000-15,000 words and serve as reference material rather than standalone content. These can be shorter because they complement video lessons rather than standing alone.'] },
      { title: 'How to Plan Your Ebook Length', paras: ['Start with an outline of 8-15 chapters. For a 15,000-word ebook, each chapter should be 1,000-2,000 words. This structure keeps chapters digestible and gives readers natural stopping points. Chapters under 800 words feel insubstantial; over 3,000 words without subheadings feel overwhelming.','Research competing ebooks in your niche on Amazon. Check their page counts (visible in the product listing) and reviews. If readers consistently praise a competitor for being "comprehensive" at 200 pages, your ebook should be similar in length. If reviews mention "too long" or "padded," you have found the ceiling.','Use our word counter throughout the writing process to track your progress. Set chapter-level word count targets and check against them regularly. This prevents the common problem of spending 70% of your word count on the first three chapters and rushing through the rest.'] },
    ],
    faqs: [
      { q: 'How long should an ebook be?', a: 'It depends on the purpose. Free lead magnets: 3,000-5,000 words. Paid ebooks: 10,000-30,000 words. The sweet spot for most non-fiction topics is 15,000-25,000 words.' },
      { q: 'How many pages is a 10,000-word ebook?', a: 'A 10,000-word ebook is approximately 40 pages with standard formatting. With images, charts, and generous spacing (common in ebooks), it can be 50-60 pages.' },
      { q: 'What is the minimum word count for Amazon KDP?', a: 'Amazon KDP has no strict minimum, but ebooks under 2,500 words may be classified as "too short" and receive poor reviews. For paid non-fiction, aim for at least 10,000 words.' },
    ],
    links: [['/word-counter','Word Counter'],['/words-per-page','Words Per Page'],['/reading-time','Reading Time'],['/word-count/for/book','Book Word Count'],['/blog/how-many-words-in-a-novel','Novel Word Count']],
  },
  {
    slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length: How Long Should Your Prompts Be? (2026)', desc: 'ChatGPT input limit is ~128,000 tokens. The optimal prompt is 50-500 words. Complete guide to prompt length and structure.', date: '2026-03-21', readMin: 8,
    quick: 'ChatGPT-4o supports ~128,000 tokens of input (roughly 96,000 words). The optimal prompt length for most tasks is 50-500 words. Short prompts (under 20 words) get generic results. Detailed prompts (100-300 words) with context, examples, and constraints get the best outputs.',
    tableTitle: 'Prompt Length by Task', table: [['Task','Optimal Prompt Length'],['Quick question','10-30 words'],['Content generation','100-300 words'],['Code generation','50-200 words + code context'],['Analysis/research','100-500 words + source material'],['Creative writing','50-200 words'],['Editing/rewriting','50-100 words + full text'],['Translation','20-50 words + source text'],['Data extraction','50-150 words + data']],
    sections: [
      { title: 'Why Prompt Length Matters', paras: ['The length and detail of your prompt directly determines the quality of AI output. A prompt like "Write a blog post about investing" produces generic, unhelpful content. A prompt like "Write a 1,500-word blog post about index fund investing for beginners aged 25-35, covering: why index funds beat active management, how to choose between S&P 500 and total market funds, and how to set up automatic monthly contributions. Use a conversational tone, include specific examples, and end with a 3-step action plan" produces dramatically better results.','The sweet spot for most prompts is 100-300 words. Under 50 words, the AI lacks sufficient context to produce targeted output. Over 500 words, the prompt itself can become confusing and the AI may miss key instructions buried in the middle. If your prompt exceeds 300 words, consider breaking it into a system prompt (context and persona) and a user prompt (specific task).','Use our word counter to check your prompt length before submitting. This helps you calibrate the level of detail needed for different tasks and prevents both under-specified and over-specified prompts.'] },
      { title: 'Prompt Structure for Best Results', paras: ['The most effective prompts follow a consistent structure: Role (who the AI should be), Context (background information), Task (what you want), Format (how the output should look), and Constraints (what to avoid). This framework works for any prompt length from 50 to 500 words.','Example structure: "You are an experienced financial advisor writing for a personal finance blog. [Role] The audience is young professionals aged 25-35 who are new to investing. [Context] Write a 1,500-word guide on how to start investing with $100/month. [Task] Use short paragraphs, include a comparison table, and end with action steps. [Format] Do not recommend specific stocks or use complex jargon. [Constraints]"','For iterative tasks, start with a shorter prompt, review the output, then refine with follow-up prompts. This conversational approach often produces better results than trying to specify everything in a single massive prompt. The AI learns your preferences through the conversation.'] },
    ],
    faqs: [
      { q: 'What is the ChatGPT character limit?', a: 'ChatGPT-4o supports approximately 128,000 tokens of input, which is roughly 96,000 words or 500,000 characters. This is more than enough for most tasks including analyzing full documents.' },
      { q: 'How long should a ChatGPT prompt be?', a: 'The optimal prompt is 100-300 words for most content generation tasks. Quick questions need only 10-30 words. Complex analysis may need 300-500 words plus source material.' },
      { q: 'Do longer prompts give better results?', a: 'Up to a point. Prompts of 100-300 words significantly outperform short prompts. But beyond 500 words, quality plateaus and key instructions may get lost. Be detailed but concise.' },
    ],
    links: [['/word-counter','Word Counter'],['/character-counter','Character Counter'],['/blog/best-ai-writing-tools-2026','AI Writing Tools'],['/blog/how-to-write-faster','Write Faster'],['/readability-checker','Readability Checker']],
  },
];

for (const post of blogs) {
  if (buildBlog(post)) {
    created++;
    console.log('  ✅ ' + post.slug);
  } else {
    console.log('  ⏭️  Skip ' + post.slug + ' (exists)');
  }
}

// ============================================================
// 3. UPDATE BLOG INDEX
// ============================================================
console.log('');
console.log('--- Updating blog index ---');
const blogIndexFile = path.join(APP, 'blog', 'page.js');
let blogIndex = fs.readFileSync(blogIndexFile, 'utf8');

const newEntries = blogs.filter(b => !blogIndex.includes(b.slug)).map(b =>
  `  { slug: '${b.slug}', title: '${b.title.replace(/'/g, "'")}', description: '${b.desc.replace(/'/g, "'")}', date: '${b.date}' },`
).join('\n');

if (newEntries) {
  blogIndex = blogIndex.replace('const posts = [', 'const posts = [\n' + newEntries);
  fs.writeFileSync(blogIndexFile, blogIndex, 'utf8');
  console.log('  ✅ Added ' + blogs.filter(b => !blogIndex.includes(b.slug)).length + ' blogs to index');
}

// ============================================================
// 4. REBUILD SITEMAP
// ============================================================
console.log('--- Rebuilding sitemap ---');

function findAllPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === 'components') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findAllPages(full, results);
    else if (item === 'page.js') results.push(full);
  }
  return results;
}

const allPages = findAllPages(APP);
const urls = [];
for (const pg of allPages) {
  const rel = path.relative(APP, path.dirname(pg)).replace(/\\/g, '/');
  if (rel.includes('[')) continue;
  const urlPath = rel === '' || rel === '.' ? '/' : '/' + rel;
  let priority = 0.8, freq = 'monthly';
  if (urlPath === '/') { priority = 1.0; freq = 'weekly'; }
  else if (['/word-counter','/character-counter','/keyword-density','/meta-tag-generator','/readability-checker','/sentence-counter','/reading-time','/words-per-minute','/words-per-page','/twitter-thread-counter','/hashtag-counter','/character-limits'].includes(urlPath)) { priority = 0.9; freq = 'weekly'; }
  else if (urlPath === '/blog') { priority = 0.8; freq = 'weekly'; }
  else if (urlPath.startsWith('/blog/')) { priority = 0.7; freq = 'monthly'; }
  else if (['/about','/contact','/privacy-policy'].includes(urlPath)) { priority = 0.3; freq = 'monthly'; }
  urls.push({ url: urlPath, priority, freq });
}
urls.sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));

const sitemap = `export default function sitemap() {
  const base = 'https://www.wordcountertool.net';
  const today = new Date().toISOString().split('T')[0];
  return [
${urls.map(u => `    { url: base + "${u.url}", lastModified: today, changeFrequency: "${u.freq}", priority: ${u.priority} }`).join(',\n')}
  ];
}
`;
fs.writeFileSync(path.join(APP, 'sitemap.js'), sitemap, 'utf8');
console.log('  ✅ Sitemap rebuilt with ' + urls.length + ' URLs');

console.log('');
console.log('=====================================================');
console.log('  CREATED: ' + created + ' new pages');
console.log('  Speech pages: 8 new durations');
console.log('  Blog posts: 10 long-tail SEO posts');
console.log('  Sitemap: ' + urls.length + ' total URLs');
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Add 18 pages — 8 speech + 10 blogs + sitemap rebuild"');
console.log('  git push origin main');
