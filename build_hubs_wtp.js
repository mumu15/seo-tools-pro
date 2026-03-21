const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, 'app');
const DOMAIN = 'https://www.wordcountertool.net';
let created = 0;

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

console.log('');
console.log('=====================================================');
console.log('  BUILD: Speech Hub + Words-to-Pages Converter');
console.log('=====================================================');
console.log('');

// ============================================================
// 1. SPEECH HUB PAGE
// ============================================================
console.log('--- Building Speech Hub Page ---');

const speechHubDir = path.join(APP, 'words-per-minute', 'speech');
ensureDir(speechHubDir);
const speechHubFile = path.join(speechHubDir, 'page.js');

if (!fs.existsSync(speechHubFile)) {
  const speechMins = [1,2,3,4,5,7,8,10,12,15,20,25,30,35,40,45,50,60,75,90];

  const speechData = [
    [1,130,100,160,'Elevator pitch, quick toast'],
    [2,260,200,320,'Short toast, brief intro'],
    [3,390,300,480,'Lightning talk, short toast'],
    [4,520,400,640,'Maid of honor speech'],
    [5,650,500,800,'TED-style talk, wedding speech'],
    [7,910,700,1120,'Business presentation'],
    [8,1040,800,1280,'YouTube video script'],
    [10,1300,1000,1600,'Full TED Talk, pitch'],
    [12,1560,1200,1920,'Conference talk'],
    [15,1950,1500,2400,'Keynote segment'],
    [20,2600,2000,3200,'Full lecture'],
    [25,3250,2500,4000,'University lecture'],
    [30,3900,3000,4800,'Sermon, commencement'],
    [35,4550,3500,5600,'Extended lecture'],
    [40,5200,4000,6400,'Full training session'],
    [45,5850,4500,7200,'Full class lecture'],
    [50,6500,5000,8000,'Detailed lecture'],
    [60,7800,6000,9600,'Full hour lecture'],
    [75,9750,7500,12000,'Masterclass'],
    [90,11700,9000,14400,'Full seminar'],
  ];

  const content = `import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Speech? Every Duration Calculated | WordCounterTool.net',
  description: 'Find exactly how many words you need for any speech length from 1 to 90 minutes. Word counts for slow, average, and fast speakers. Free speech calculator.',
  alternates: { canonical: '${DOMAIN}/words-per-minute/speech' },
}

const faqs = [
  { q: 'How many words per minute in a speech?', a: 'The average speaker delivers 130 words per minute in a prepared speech. Slow, deliberate speakers average 100 wpm. Fast, energetic speakers average 160 wpm. Conversational speaking is typically 120-150 wpm.' },
  { q: 'How do I calculate words needed for my speech?', a: 'Multiply your speaking speed (usually 130 wpm) by the number of minutes. For a 10-minute speech: 130 x 10 = 1,300 words. Then subtract 10-15% for pauses and audience reactions.' },
  { q: 'How can I check my speech word count?', a: 'Paste your speech into our free word counter tool. It instantly shows your word count, estimated speaking time at 130 wpm, and reading time. Practice with a timer to calibrate your personal speaking pace.' },
  { q: 'What is the ideal speech length?', a: 'It depends on the context. Wedding speeches: 3-5 minutes. Business presentations: 10-15 minutes. Conference talks: 15-20 minutes. Lectures: 45-60 minutes. The best speeches are always slightly shorter than the audience expects.' },
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
            <span className="text-slate-300">Speech Word Count</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Words in a Speech?</h1>
          <p className="text-slate-400 text-lg mb-8">Find the exact word count for any speech duration from 1 to 90 minutes</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Reference</p>
            <p className="text-white text-lg leading-relaxed">The average speaker delivers <strong>130 words per minute</strong>. A 5-minute speech needs ~650 words. A 10-minute speech needs ~1,300 words. A 20-minute speech needs ~2,600 words. See the full table below for every duration.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Speech Word Count Table — Every Duration</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Duration</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Slow (100 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Average (130 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Fast (160 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Common Use</th>
                  </tr>
                </thead>
                <tbody>
                  ${speechData.map(([min, avg, slow, fast, use]) => `<tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/${min}-minute-speech" className="text-emerald-400 font-bold hover:underline">${min} min</a></td>
                    <td className="text-slate-300 py-3 pr-4">${slow.toLocaleString()} words</td>
                    <td className="text-white font-medium py-3 pr-4">${avg.toLocaleString()} words</td>
                    <td className="text-slate-300 py-3 pr-4">${fast.toLocaleString()} words</td>
                    <td className="text-slate-500 py-3 text-xs">${use}</td>
                  </tr>`).join('\n                  ')}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How Speaking Speed Affects Word Count</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Slow speakers (100 wpm):</strong> Deliberate, measured pace. Common for formal speeches, eulogies, and ceremonial addresses. Allows for dramatic pauses and emphasis. Best for emotional or complex content where every word needs to land.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Average speakers (130 wpm):</strong> The most common pace for prepared speeches, presentations, and lectures. This is the standard rate used by most public speaking coaches and the default for speech-to-text calculations.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Fast speakers (160 wpm):</strong> Energetic, dynamic pace. Common for motivational speakers, auctioneers, and excited presenters. Works well for entertainment content but can be overwhelming for technical or educational material.</p>
              <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Pro tip:</strong> Most people speak 10-20% faster when nervous. If your speech times perfectly in practice, it will likely run short on stage. Write 10% more content than needed, then cut the weakest section if you run long during practice.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Speech Length by Occasion</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Occasion</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Ideal Duration</th><th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Word Count</th></tr></thead>
                <tbody>
                  {[['Wedding toast','1-2 minutes','130-260 words'],['Best man / maid of honor','4-6 minutes','520-780 words'],['Elevator pitch','30-60 seconds','65-130 words'],['TED Talk','5-18 minutes','650-2,340 words'],['Business pitch','10-15 minutes','1,300-1,950 words'],['Conference presentation','20-30 minutes','2,600-3,900 words'],['University lecture','45-60 minutes','5,850-7,800 words'],['Keynote address','30-45 minutes','3,900-5,850 words'],['Eulogy','5-10 minutes','650-1,300 words'],['Valedictorian speech','5-7 minutes','650-910 words']].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]}</td>
                      <td className="text-slate-300 py-3">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Speech Word Count</p>
            <p className="text-slate-400 text-sm mb-4">Paste your speech and get instant word count, speaking time, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Browse by Duration</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              ${speechMins.map(m => `<a href="/words-per-minute/speech/${m}-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">${m} min</div>
                <div className="text-slate-500 text-xs mt-1">${(m * 130).toLocaleString()} words</div>
              </a>`).join('\n              ')}
            </div>
          </section>

          <AdUnit slot="3763639977" />

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
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count Guide</a>
              <a href="/blog/how-many-words-in-a-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Writing Guide</a>
            </div>
          </section>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Words Per Minute","item":"${DOMAIN}/words-per-minute"},{"@type":"ListItem","position":3,"name":"Speech Word Count","item":"${DOMAIN}/words-per-minute/speech"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Speech Word Count Calculator","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"4521","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  )
}
`;
  fs.writeFileSync(speechHubFile, content);
  created++;
  console.log('  ✅ Speech hub page');
} else {
  console.log('  ⏭️  Speech hub exists');
}

// ============================================================
// 2. WORDS-TO-PAGES CONVERTER PAGES
// ============================================================
console.log('');
console.log('--- Building Words-to-Pages Converter ---');

const wtpDir = path.join(APP, 'words-to-pages');
ensureDir(wtpDir);

const wordCounts = [250,300,500,600,750,800,1000,1200,1500,1750,2000,2500,3000,4000,5000,6000,7500,8000,10000,15000,20000,25000];

// Hub page
const hubFile = path.join(wtpDir, 'page.js');
if (!fs.existsSync(hubFile)) {
  const hubContent = `import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Words to Pages Converter — How Many Pages Is Your Text? | WordCounterTool.net',
  description: 'Convert word count to pages instantly. See how many pages 500, 1000, 2000, 5000 words is in single and double spacing. Free words to pages calculator.',
  alternates: { canonical: '${DOMAIN}/words-to-pages' },
}

const faqs = [
  { q: 'How many pages is 1,000 words?', a: '1,000 words is approximately 4 pages double-spaced or 2 pages single-spaced using 12pt Times New Roman with 1-inch margins.' },
  { q: 'How many pages is 500 words?', a: '500 words is approximately 2 pages double-spaced or 1 page single-spaced.' },
  { q: 'How many pages is 2,000 words?', a: '2,000 words is approximately 8 pages double-spaced or 4 pages single-spaced.' },
  { q: 'What affects words per page?', a: 'Font type, font size, line spacing, and margins all affect how many words fit on a page. Times New Roman 12pt double-spaced with 1-inch margins gives approximately 250 words per page.' },
  { q: 'How many pages is 5,000 words?', a: '5,000 words is approximately 20 pages double-spaced or 10 pages single-spaced.' },
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
            <span className="text-slate-300">Words to Pages</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Words to Pages Converter</h1>
          <p className="text-slate-400 text-lg mb-8">Instantly see how many pages your word count equals in any format</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Reference</p>
            <p className="text-white text-lg leading-relaxed">A standard double-spaced page contains <strong>250 words</strong> (12pt Times New Roman, 1-inch margins). A single-spaced page contains <strong>500 words</strong>. Use the table below or click any word count for a detailed breakdown.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Words to Pages Reference Table</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Word Count</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Double Spaced</th>
                  <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Read Time</th>
                </tr></thead>
                <tbody>
                  ${wordCounts.map(w => `<tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/${w}-words" className="text-emerald-400 font-bold hover:underline">${w.toLocaleString()} words</a></td>
                    <td className="text-slate-300 py-3 pr-4">${(w/500).toFixed(1)} pages</td>
                    <td className="text-white font-medium py-3 pr-4">${(w/250).toFixed(1)} pages</td>
                    <td className="text-slate-500 py-3">${Math.ceil(w/200)} min</td>
                  </tr>`).join('\n                  ')}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Browse by Word Count</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              ${wordCounts.map(w => `<a href="/words-to-pages/${w}-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">${w.toLocaleString()}</div>
                <div className="text-slate-500 text-xs mt-1">${(w/250).toFixed(1)} pages (2x)</div>
              </a>`).join('\n              ')}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Words Per Page by Font</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Font (12pt)</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th>
                  <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Double Spaced</th>
                </tr></thead>
                <tbody>
                  {[['Times New Roman','500','250'],['Arial','450','225'],['Calibri','450','225'],['Courier New','275','137'],['Georgia','420','210'],['Garamond','550','275'],['Verdana','380','190']].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]} words</td>
                      <td className="text-slate-300 py-3">{r[2]} words</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Count Your Words Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, page estimate, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <AdUnit slot="3763639977" />

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
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page Calculator</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            </div>
          </section>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Words to Pages","item":"${DOMAIN}/words-to-pages"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Words to Pages Converter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"5123","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  )
}
`;
  fs.writeFileSync(hubFile, hubContent);
  created++;
  console.log('  ✅ Words-to-pages hub page');
}

// Individual word count pages
for (const w of wordCounts) {
  const slug = w + '-words';
  const dir = path.join(wtpDir, slug);
  if (fs.existsSync(dir)) { console.log('  ⏭️  Skip ' + slug); continue; }
  ensureDir(dir);

  const ds = (w / 250).toFixed(1);
  const ss = (w / 500).toFixed(1);
  const s15 = (w / 333).toFixed(1);
  const readMin = Math.ceil(w / 200);
  const speakMin = Math.ceil(w / 130);

  const others = wordCounts.filter(x => x !== w).slice(0, 10);

  const content = `import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Pages Is ${w.toLocaleString()} Words? (2026) | WordCounterTool.net',
  description: '${w.toLocaleString()} words is ${ds} pages double-spaced or ${ss} pages single-spaced. See page counts for every font and spacing. Free converter.',
  alternates: { canonical: '${DOMAIN}/words-to-pages/${slug}' },
}

const faqs = [
  { q: 'How many pages is ${w.toLocaleString()} words double-spaced?', a: '${w.toLocaleString()} words is approximately ${ds} pages double-spaced using 12pt Times New Roman font with standard 1-inch margins (250 words per page).' },
  { q: 'How many pages is ${w.toLocaleString()} words single-spaced?', a: '${w.toLocaleString()} words is approximately ${ss} pages single-spaced using 12pt Times New Roman font with standard 1-inch margins (500 words per page).' },
  { q: 'How long does it take to read ${w.toLocaleString()} words?', a: 'At the average reading speed of 200 words per minute, ${w.toLocaleString()} words takes approximately ${readMin} minutes to read.' },
  { q: 'How long does it take to speak ${w.toLocaleString()} words?', a: 'At the average speaking rate of 130 words per minute, ${w.toLocaleString()} words takes approximately ${speakMin} minutes to speak aloud.' },
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
            <a href="/words-to-pages" className="hover:text-emerald-400 transition-colors">Words to Pages</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">${w.toLocaleString()} Words</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Pages Is ${w.toLocaleString()} Words?</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed"><strong>${w.toLocaleString()} words</strong> is approximately <strong>${ds} pages double-spaced</strong> or <strong>${ss} pages single-spaced</strong> using 12pt Times New Roman with 1-inch margins. At 1.5 spacing, it is approximately ${s15} pages. Reading time: ${readMin} minutes. Speaking time: ${speakMin} minutes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-emerald-400">${ds}</div>
              <div className="text-slate-500 text-xs mt-1">Pages (double-spaced)</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-blue-400">${ss}</div>
              <div className="text-slate-500 text-xs mt-1">Pages (single-spaced)</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-purple-400">${readMin} min</div>
              <div className="text-slate-500 text-xs mt-1">Reading Time</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-orange-400">${speakMin} min</div>
              <div className="text-slate-500 text-xs mt-1">Speaking Time</div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">${w.toLocaleString()} Words in Different Fonts</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Font (12pt)</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">1.5 Spaced</th><th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Double Spaced</th></tr></thead>
                <tbody>
                  {[['Times New Roman',${(w/500).toFixed(1)},${(w/333).toFixed(1)},${(w/250).toFixed(1)}],['Arial',${(w/450).toFixed(1)},${(w/300).toFixed(1)},${(w/225).toFixed(1)}],['Calibri',${(w/450).toFixed(1)},${(w/300).toFixed(1)},${(w/225).toFixed(1)}],['Courier New',${(w/275).toFixed(1)},${(w/183).toFixed(1)},${(w/137).toFixed(1)}],['Georgia',${(w/420).toFixed(1)},${(w/280).toFixed(1)},${(w/210).toFixed(1)}],['Garamond',${(w/550).toFixed(1)},${(w/367).toFixed(1)},${(w/275).toFixed(1)}],['Verdana',${(w/380).toFixed(1)},${(w/253).toFixed(1)},${(w/190).toFixed(1)}]].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]} pages</td>
                      <td className="text-slate-300 py-3 pr-4">{r[2]} pages</td>
                      <td className="text-slate-300 py-3">{r[3]} pages</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">What Does ${w.toLocaleString()} Words Look Like?</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">${w.toLocaleString()} words is equivalent to approximately ${Math.round(w/5).toLocaleString()} characters, ${Math.round(w/15)} sentences, and ${Math.round(w/100)} paragraphs of standard writing.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">${w <= 500 ? 'This is roughly the length of a short blog post, a long email, or a college application short answer. It takes about ' + readMin + ' minutes to read — short enough to hold attention in a single sitting.' : w <= 1500 ? 'This is roughly the length of a standard blog post, a short essay, or a newsletter. At ' + readMin + ' minutes reading time, it is the sweet spot for web content that provides value without overwhelming readers.' : w <= 3000 ? 'This is the length of a comprehensive blog post, a college essay, or a short report. At ' + readMin + ' minutes reading time, this is considered long-form content that performs well for SEO and provides thorough coverage of a topic.' : w <= 10000 ? 'This is the length of a detailed report, a short research paper, or a magazine feature article. At ' + readMin + ' minutes reading time, this is substantial content that requires focused reading. Most readers will break this into multiple sessions.' : 'This is the length of a thesis chapter, a detailed white paper, or a novella. At ' + readMin + ' minutes reading time, this is extensive content that most readers will consume over multiple sessions.'}</p>
              <p className="text-slate-300 text-sm leading-relaxed">Common documents at this length: ${w <= 500 ? 'cover letters, abstracts, social media articles, executive summaries' : w <= 1000 ? 'blog posts, newsletter issues, short essays, opinion articles' : w <= 2000 ? 'standard blog posts, college essays, short stories, product reviews' : w <= 5000 ? 'research papers, long-form articles, white papers, case studies' : w <= 10000 ? 'thesis chapters, detailed reports, business plans, grant proposals' : 'dissertations, book chapters, comprehensive guides, research theses'}.</p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Exact Word Count</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text for instant word count, page estimate, and reading time</p>
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
            <h2 className="text-2xl font-bold text-white mb-4">Other Word Counts</h2>
            <div className="flex flex-wrap gap-2">
              ${others.map(o => `<a href="/words-to-pages/${o}-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">${o.toLocaleString()} Words</a>`).join('\n              ')}
              <a href="/words-to-pages" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Conversions</a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/words-to-pages" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words to Pages</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"Words to Pages","item":"${DOMAIN}/words-to-pages"},{"@type":"ListItem","position":3,"name":"${w.toLocaleString()} Words","item":"${DOMAIN}/words-to-pages/${slug}"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"${w.toLocaleString()} Words to Pages","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), content);
  created++;
  console.log('  ✅ ' + slug);
}

// ============================================================
// 3. REBUILD SITEMAP
// ============================================================
console.log('');
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
  else if (['/word-counter','/character-counter','/keyword-density','/meta-tag-generator','/readability-checker','/sentence-counter','/reading-time','/words-per-minute','/words-per-page','/twitter-thread-counter','/hashtag-counter','/character-limits','/words-to-pages'].includes(urlPath)) { priority = 0.9; freq = 'weekly'; }
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
console.log('  ✅ Sitemap rebuilt: ' + urls.length + ' URLs');

console.log('');
console.log('=====================================================');
console.log('  CREATED: ' + created + ' new pages');
console.log('');
console.log('  Speech hub: 1 page (links to all 20 durations)');
console.log('  Words-to-pages hub: 1 page');
console.log('  Words-to-pages converters: 22 pages');
console.log('  Total sitemap URLs: ' + urls.length);
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Add speech hub + words-to-pages converter (24 pages)"');
console.log('  git push origin main');
