import Link from 'next/link'
import { ArticleSchema } from '../../components/AuthorSchema'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write a Wedding Speech: Word Count, Structure, and Tips (2026) | WordCounterTool.net',
  description: 'Wedding speech guide: Best man 500-800 words, maid of honor 400-700, father of the bride 400-650. Structure templates and timing tips.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-wedding-speech' },
}

const faqs = [{"q":"How long should a wedding speech be?","a":"A wedding speech should be 3-6 minutes (400-800 words). The sweet spot is 4-5 minutes. Never exceed 7 minutes. Short and heartfelt always beats long and rambling."},{"q":"How many words is a 5-minute wedding speech?","a":"A 5-minute wedding speech is approximately 650 words at the average speaking rate of 130 words per minute. Account for pauses, laughter, and emotional moments."},{"q":"Should I memorize my wedding speech?","a":"Memorize the opening and closing lines, but use note cards for the middle. Fully memorized speeches risk going blank. Note cards with bullet points feel more natural and give you a safety net."}]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How to Write a Wedding Speech: Word Count, Structure, and Tips (2026)</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 9 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A best man speech should be 500-800 words (4-6 minutes). A maid of honor speech: 400-700 words (3-5 minutes). Father of the bride: 400-650 words (3-5 minutes). Keep it under 7 minutes. The best wedding speeches are heartfelt, funny, and SHORT.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Wedding Speech Word Counts</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Speaker</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Word Count</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Duration</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Best man</td><td className="text-slate-300 py-3 pr-4 text-sm">500-800 words</td><td className="text-slate-300 py-3 pr-4 text-sm">4-6 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Maid of honor</td><td className="text-slate-300 py-3 pr-4 text-sm">400-700 words</td><td className="text-slate-300 py-3 pr-4 text-sm">3-5 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Father of bride</td><td className="text-slate-300 py-3 pr-4 text-sm">400-650 words</td><td className="text-slate-300 py-3 pr-4 text-sm">3-5 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Mother of bride</td><td className="text-slate-300 py-3 pr-4 text-sm">250-500 words</td><td className="text-slate-300 py-3 pr-4 text-sm">2-4 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Groom</td><td className="text-slate-300 py-3 pr-4 text-sm">400-650 words</td><td className="text-slate-300 py-3 pr-4 text-sm">3-5 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Bride</td><td className="text-slate-300 py-3 pr-4 text-sm">250-500 words</td><td className="text-slate-300 py-3 pr-4 text-sm">2-4 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Wedding toast</td><td className="text-slate-300 py-3 pr-4 text-sm">100-250 words</td><td className="text-slate-300 py-3 pr-4 text-sm">1-2 minutes</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Officiant remarks</td><td className="text-slate-300 py-3 pr-4 text-sm">500-1,000 words</td><td className="text-slate-300 py-3 pr-4 text-sm">4-8 minutes</td></tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Best Man Speech Formula</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">The best best man speeches follow a proven structure: introduce yourself and how you know the groom (50-80 words), tell one or two funny stories (150-250 words), compliment the couple and welcome the partner (100-150 words), share heartfelt wishes (80-120 words), and close with a toast (30-50 words). Total: 500-650 words.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Keep funny stories PG-rated. Never mention exes, embarrassing secrets, or inside jokes that only you understand. The audience includes grandparents, children, and people meeting you for the first time. A story that kills at poker night might bomb at a wedding reception with 150 guests.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Practice your speech at least 5 times out loud. Time yourself each time. Nervous speakers rush — your 5-minute speech might take only 3 minutes if you speed through it. Mark pause points in your script to force yourself to slow down. Make eye contact with the couple during heartfelt moments.</p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Common Wedding Speech Mistakes</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Going too long is the number one mistake. Nobody in the history of weddings has complained that a speech was too short. Aim for 4-5 minutes. After 7 minutes, guests start checking phones and looking for the bar. The best speeches leave the audience wanting more, not less.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Getting too drunk before speaking is number two. Have one drink for courage if needed, but save the celebration for after your speech. Slurred words, forgotten lines, and inappropriate comments have ruined countless wedding speeches. You are performing for an audience — treat it that way.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Reading directly from your phone kills the emotional connection. Use brief notes or index cards with bullet points, not a full script on a screen. Glancing down at notes is natural; staring at a phone screen for 5 minutes is not. Practice enough that you only need the notes as safety anchors.</p>

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
            <a href="/word-count/for/wedding-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Wedding Speech Guide</a>
            <a href="/word-count/for/best-man-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Best Man Speech</a>
            <a href="/word-count/for/maid-of-honor-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Maid of Honor Speech</a>
            <a href="/words-per-minute/speech/5-minute-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">5-Minute Speech</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Write a Wedding Speech: Word Count, Structure, and Tips (2026)","author":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How to Write a Wedding Speech","item":"https://www.wordcountertool.net/blog/how-to-write-wedding-speech"}]})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </>
  )
}
