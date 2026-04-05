import Header from '../../../components/Header'
import { ArticleSchema } from '../../components/AuthorSchema'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter' },
  title: 'How Many Words Should a Cover Letter Be? (2026 Guide)',
  description: 'The perfect cover letter length in 2026. Learn how many words, paragraphs and pages hiring managers want to see in your cover letter.',
}

const faqs = [
  {
    "q": "How long should a cover letter be?",
    "a": "A cover letter should be 250-400 words fitting on one page. Three to four short paragraphs is the standard structure. Never go over one page."
  },
  {
    "q": "What should the 3 paragraphs of a cover letter include?",
    "a": "Paragraph 1: Why you want this specific role and company. Paragraph 2: Your most relevant achievement or skill with a specific example. Paragraph 3: Call to action — request an interview and state your availability."
  },
  {
    "q": "Is a 500 word cover letter too long?",
    "a": "Yes. 500 words is too long for most cover letters. Hiring managers may not read past the first paragraph. Cut ruthlessly to stay under 400 words."
  },
  {
    "q": "Can a cover letter be too short?",
    "a": "Under 200 words looks like you did not try. Even if you are applying for an entry-level position write at least 250 words showing genuine interest in the role."
  },
  {
    "q": "Should I include a subject line in my cover letter?",
    "a": "Yes. For email applications include the job title and your name in the subject line. For formal letters use a professional heading with the date and job reference number."
  }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words Should a Cover Letter Be? (2026 Guide)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 5 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A cover letter should be <strong>250–400 words</strong> and fit on <strong>one page</strong>. That is 3–4 short paragraphs. Hiring managers spend under 30 seconds on cover letters so every word must count.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Length by Career Level</h2>
              <p className="text-slate-400 leading-relaxed mb-4">While all cover letters should be concise the content focus changes at different career stages.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Career Stage</th><th className="text-left text-slate-400 py-2 pr-4">Word Count</th><th className="text-left text-slate-400 py-2 pr-4">Focus</th></tr></thead>
                    <tbody>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Student / Intern</td><td className="text-slate-300 py-2 pr-4">200–300 words</td><td className="text-slate-300 py-2 pr-4">Enthusiasm and learning ability</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Entry Level</td><td className="text-slate-300 py-2 pr-4">250–350 words</td><td className="text-slate-300 py-2 pr-4">Skills and relevant coursework</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Mid Career</td><td className="text-slate-300 py-2 pr-4">300–400 words</td><td className="text-slate-300 py-2 pr-4">Specific achievements and results</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Senior / Director</td><td className="text-slate-300 py-2 pr-4">350–450 words</td><td className="text-slate-300 py-2 pr-4">Leadership and business impact</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Executive</td><td className="text-slate-300 py-2 pr-4">400–500 words</td><td className="text-slate-300 py-2 pr-4">Strategic vision and board experience</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-many-words-in-a-cover-letter.svg" alt="How Many Words In A Cover Letter — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The 4-Paragraph Cover Letter Structure</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Paragraph 1 — The Hook. Open with the specific role and one compelling reason why you are the right person. Do not start with "I am applying for the position of..". Paragraph 2 — Your Best Achievement. Share one specific measurable result that is directly relevant. Use numbers where possible. Paragraph 3 — Why This Company. Show you have researched the company. Reference something specific — their mission, a recent product launch or a company value that resonates with you. Paragraph 4 — Call to Action. Thank them, express enthusiasm and request an interview. Keep it under two sentences.</p>
            </section>

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Cover Letter Length Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Paste your cover letter into our free word counter to check length and reading time before sending.</p>
              <a href="/word-counter" className="btn-primary inline-block px-6 py-3">Check Cover Letter Length Free →</a>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
            <Link href="/blog/how-many-words-in-a-resume" className="text-emerald-400 hover:underline text-sm">How Many Words in a Resume</Link>
            <Link href="/readability-checker" className="text-emerald-400 hover:underline text-sm">Readability Checker</Link>
              </div>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Real-world word count data</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">We looked at published examples across the web and pulled the actual numbers. Here is what the data looks like in practice — not what style guides say, but what people actually write and publish.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">The range matters more than any single number. A cover letter that feels right at 280 words would feel padded at 400. Context drives everything. The format, the audience, the stakes — they all shift the target. Anyone who gives you a single number is oversimplifying.</p>
            <p className="text-slate-400 text-sm leading-relaxed">One pattern we noticed: shorter content tends to get more engagement online, but longer content ranks better in search. The tension between those two goals is real, and there is no clean resolution. Pick the one that matters more for your situation.</p>
          </section>
</section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/word-count/for/cover-letter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Cover Letter Guide</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
