import Link from 'next/link'
import { ArticleSchema } from '../../components/AuthorSchema'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Podcast Episode? (Word Count Calculator) | WordCounterTool.net',
  description: 'A 30-minute podcast is ~4,500 words. A 60-minute episode is ~9,000 words. Full guide to podcast word counts, scripting, and show notes.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-podcast-episode' },
}

const faqs = [{"q":"How many words is a 30-minute podcast?","a":"A 30-minute podcast contains approximately 3,900-4,500 words at the average podcast speaking rate of 130-150 words per minute. Scripted podcasts tend to have higher word counts than conversational ones."},{"q":"How long should a podcast episode be?","a":"Solo educational podcasts work best at 15-25 minutes. Interview podcasts perform well at 30-60 minutes. The ideal length is wherever your analytics show listeners start dropping off — trim to that point."},{"q":"Should I script my entire podcast?","a":"It depends on your format. News and storytelling podcasts benefit from full scripts. Educational and interview podcasts work better with detailed outlines. Fully scripted shows sound polished but can feel stiff without practice."},{"q":"How many words are podcast show notes?","a":"Podcast show notes should be 200-400 words. Include a 2-3 sentence summary, timestamps for key topics, links mentioned, and a call to action. Show notes are critical for podcast SEO."}]

export default function Post() {
  const st = {
    h2: 'text-2xl font-bold text-white mb-4 mt-10',
    h3: 'text-lg font-bold text-white mb-3 mt-8',
    p: 'text-slate-400 text-base leading-relaxed mb-4',
    th: 'text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase',
    td: 'text-slate-300 py-3 pr-4 text-sm',
    tdB: 'text-white font-medium py-3 pr-4 text-sm',
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Words in a Podcast Episode? (Word Count Calculator)</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 10 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A <strong>30-minute podcast</strong> contains approximately <strong>4,500 words</strong>. A <strong>60-minute podcast</strong> is about <strong>9,000 words</strong>. The average speaking rate in podcasts is 150 words per minute for scripted shows and 130-140 wpm for conversational interviews.</p>
          </div>

          <h2 className={st.h2}>Podcast Word Count by Duration</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className={st.th}>Duration</th><th className={st.th}>Word Count</th><th className={st.th}>Best For</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>5 minutes</td><td className={st.td}>650-750 words</td><td className={st.td}>News briefs, daily tips</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>15 minutes</td><td className={st.td}>1,950-2,250 words</td><td className={st.td}>Focused topic, solo episodes</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>30 minutes</td><td className={st.td}>3,900-4,500 words</td><td className={st.td}>Standard interview, tutorial</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>45 minutes</td><td className={st.td}>5,850-6,750 words</td><td className={st.td}>In-depth interview</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>60 minutes</td><td className={st.td}>7,800-9,000 words</td><td className={st.td}>Long-form conversation</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>90 minutes</td><td className={st.td}>11,700-13,500 words</td><td className={st.td}>Deep-dive, Joe Rogan style</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>120 minutes</td><td className={st.td}>15,600-18,000 words</td><td className={st.td}>Extended interviews, panels</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className={st.h2}>The Ideal Podcast Length in 2026</h2>
          <p className={st.p}>Podcast consumption data from Edison Research shows the average podcast episode is 38 minutes. However, the ideal length depends entirely on your format. Solo educational podcasts perform best at 15-25 minutes. Interview podcasts work best at 30-60 minutes. Conversational podcasts (like Joe Rogan) can sustain 2-3 hours because listeners tune in for the relationship, not just information.</p>
          <p className={st.p}>The key metric is completion rate, not length. A 20-minute episode that 80% of listeners finish is more valuable (to advertisers and your audience) than a 60-minute episode that only 30% complete. Use your podcast hosting analytics to find your drop-off point and trim future episodes to match.</p>

          <h2 className={st.h2}>How to Script a Podcast Episode</h2>
          <p className={st.p}>Most successful podcasts use one of three scripting approaches: <strong style={{color:'#e2e8f0'}}>Full script</strong> (news podcasts, storytelling shows like Serial), <strong style={{color:'#e2e8f0'}}>Detailed outline</strong> (educational podcasts, topic-based shows), or <strong style={{color:'#e2e8f0'}}>Question list</strong> (interview podcasts). Full scripts require 120-150 words per minute of content. Outlines typically have 30-50% of the final word count.</p>
          <p className={st.p}>For show notes and descriptions, aim for 200-400 words. Include timestamps for key topics, links mentioned, and a 2-3 sentence summary. Show notes are your podcast SEO — Google indexes them, and they help new listeners decide whether to press play.</p>

          <h2 className={st.h2}>Podcast Transcription and SEO</h2>
          <p className={st.p}>Transcribing your podcast episodes is one of the highest-ROI content strategies available. A 30-minute episode generates ~4,500 words of content that can be repurposed into blog posts, social media snippets, email newsletters, and YouTube descriptions. Google cannot listen to audio — transcripts make your content searchable.</p>
          <p className={st.p}>Use our word counter to check transcript length and readability. Clean up filler words ("um", "like", "you know") and format with headers for scanability. A well-formatted transcript can rank on Google for the same keywords your podcast targets, essentially giving you two ranking opportunities for every episode.</p>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Try It Free — No Sign Up</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, reading time, and readability score.</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          <AdUnit slot="3763639977" />

          <h2 className={st.h2}>Frequently Asked Questions</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length-1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className={st.h2}>Related Tools & Guides</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
            <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
            <a href="/blog/how-long-should-a-youtube-script-be" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">YouTube Script Length</a>
            <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count</a>
            <a href="/words-per-minute/speech/30-minute-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">30-Minute Speech</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Words in a Podcast Episode? (Word Count Calculator)","author":{"@type":"Organization","name":"WordCounterTool.net"},"publisher":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21","dateModified":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How Many Words in a Podcast Episode? (Word Count Calculator)","item":"https://www.wordcountertool.net/blog/how-many-words-in-a-podcast-episode"}]})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
            <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
          </div>
        </div>

        <AdUnit slot="3248634657" />

      <Footer />
    </>
  )
}
