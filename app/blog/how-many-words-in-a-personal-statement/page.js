import Link from 'next/link'
import { ArticleSchema } from '../../../components/AuthorSchema'
import Header from './././components/Header'
import Footer from './././components/Footer'
import AdUnit from '././components/AdUnit'
import FaqSchema from './././components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Personal Statement? (2026 Guide) | WordCounterTool.net',
  description: 'UCAS personal statements: 4,000 characters. Graduate school: 500-1,000 words. Medical school: 5,300 characters. Complete guide.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-personal-statement' },
}

const faqs = [{"q":"How long is a UCAS personal statement?","a":"A UCAS personal statement must be under 4,000 characters (including spaces) and 47 lines. This is approximately 550-650 words. Both limits are hard — UCAS will cut off anything beyond."},{"q":"How long should a graduate school personal statement be?","a":"Most US graduate programs want 500-1,000 words (2-3 pages double-spaced). When no limit is specified, aim for 750-800 words. Always check the specific program requirements."},{"q":"Should I use the full word limit?","a":"Aim for 85-95% of the maximum. Going noticeably under suggests you have not fully developed your ideas. Using every last word or character risks a rushed conclusion."},{"q":"What is the difference between a personal statement and statement of purpose?","a":"A personal statement focuses on your story, motivations, and personal qualities. A statement of purpose focuses on your research interests, academic goals, and fit with the program. Some programs use the terms interchangeably."}]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Words in a Personal Statement? (2026 Guide)</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 8 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A UCAS personal statement must be under 4,000 characters (47 lines). Graduate school personal statements are 500-1,000 words. Medical school (AMCAS) allows 5,300 characters. Law school: 2 pages. MBA: 500-750 words.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Personal Statement Word Counts by Application</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Application</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Length</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">UCAS (UK universities)</td><td className="text-slate-300 py-3 pr-4 text-sm">4,000 characters / 47 lines</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Graduate school (US)</td><td className="text-slate-300 py-3 pr-4 text-sm">500-1,000 words</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Medical school (AMCAS)</td><td className="text-slate-300 py-3 pr-4 text-sm">5,300 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Law school (LSAC)</td><td className="text-slate-300 py-3 pr-4 text-sm">2 pages / ~750 words</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">MBA programs</td><td className="text-slate-300 py-3 pr-4 text-sm">500-750 words</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">PhD programs</td><td className="text-slate-300 py-3 pr-4 text-sm">1,000-1,500 words</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Scholarship applications</td><td className="text-slate-300 py-3 pr-4 text-sm">400-600 words</td></tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">UCAS Personal Statement (UK Universities)</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">The UCAS personal statement is unique because it uses a character limit (4,000 characters including spaces) rather than a word count. This translates to approximately 550-650 words depending on your writing style. You also cannot exceed 47 lines, which can be the tighter constraint if you use short paragraphs with line breaks.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Every character counts. Abbreviations like "I have" save 1 character over "I have." But do not sacrifice clarity for brevity. Admissions tutors read thousands of statements — clear, engaging writing stands out more than clever character-saving tricks. Focus 75% on academic motivation and 25% on extracurricular activities.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">The biggest UCAS mistake is being too generic. "I have always been passionate about biology" appears in thousands of statements. Instead, describe a specific moment that sparked your interest: a book, experiment, lecture, or experience that made you think differently about the subject.</p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Graduate School Personal Statements (US)</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">US graduate programs typically want 500-1,000 words (2-3 double-spaced pages). Some programs specify exact limits; others give vague guidance like "approximately two pages." When no limit is specified, aim for 750-800 words — long enough to develop your narrative, short enough to hold the reader attention.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Structure your statement around a clear narrative arc: what sparked your interest (1-2 paragraphs), what you have done to pursue it (2-3 paragraphs), and what you want to do next and why this program is the right fit (1-2 paragraphs). Every paragraph should advance your story toward the conclusion that you belong in this program.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Avoid summarizing your resume. The admissions committee already has your CV. Instead, tell the story behind the bullet points. What did you learn from your research experience? How did a specific challenge change your perspective? What drives your curiosity in this field? Personal statements that read like narrative essays outperform those that read like expanded resumes.</p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">How to Edit a Personal Statement for Length</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">First drafts are always too long. Write freely without worrying about the word limit, then cut ruthlessly. Target cutting 15-20% from your first draft. Read each sentence and ask: does this tell the reader something new? If two sentences make the same point, combine them or cut one.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Replace generic phrases with specific details. "I gained valuable experience" (4 words, zero information) becomes "I analyzed 200 patient samples using CRISPR" (8 words, maximum information). Specific details are more compelling AND often more concise than vague statements.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Read your statement aloud. If you stumble over a sentence, it is too long or too complex. Personal statements should sound natural and confident, not academic or forced. Use our word counter to track your progress toward the target length as you edit.</p>

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
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/word-count/for/personal-statement" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Personal Statement Guide</a>
            <a href="/word-count/for/college-application-essay" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">College Application Essay</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Words in a Personal Statement? (2026 Guide)","author":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How Many Words in a Personal Statement? (2026 Guide)","item":"https://www.wordcountertool.net/blog/how-many-words-in-a-personal-statement"}]})}} />
      <Footer />
    </>
  )
}
