import Link from 'next/link'
import { ArticleSchema } from '../../components/AuthorSchema'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Long Should a YouTube Script Be? Word Count by Video Length | WordCounterTool.net',
  description: 'Convert video length to script word count. A 10-minute YouTube video needs ~1,500 words. Full breakdown for 1-60 minute videos with pacing tips.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-long-should-a-youtube-script-be' },
}

const faqs = [{"q":"How many words is a 10-minute YouTube script?","a":"A 10-minute YouTube video requires approximately 1,500 words of script at the average speaking pace of 150 words per minute. Account for pauses, b-roll, and visual segments which may add 1-2 minutes."},{"q":"How long should a YouTube video be?","a":"For most channels, 10-15 minutes is optimal. This allows mid-roll ads (8+ minutes required) and provides enough value to rank in search. Short-form content (under 60 seconds) works for YouTube Shorts."},{"q":"Should I fully script my YouTube videos?","a":"It depends on your style. Fully scripted videos are tighter but can sound robotic. Bullet-point outlines feel more natural but risk rambling. Most successful YouTubers use detailed outlines with scripted hooks and closes."},{"q":"How many words per minute do YouTubers speak?","a":"Most YouTubers speak at 130-170 words per minute. The average is about 150 wpm. Educational content tends to be slower (130 wpm) while entertainment content is faster (160+ wpm). Use our reading time tool to check."}]

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Long Should a YouTube Script Be? Word Count by Video Length</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 10 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A <strong>10-minute YouTube video</strong> needs approximately <strong>1,500 words</strong> of script. The average YouTuber speaks at 150 words per minute. A 5-minute video is ~750 words, a 15-minute video is ~2,250 words, and a 20-minute video is ~3,000 words.</p>
          </div>

          <h2 className={st.h2}>YouTube Script Word Count by Video Length</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className={st.th}>Video Length</th><th className={st.th}>Script Words</th><th className={st.th}>Script Pages</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>1 minute</td><td className={st.td}>150 words</td><td className={st.td}>~0.5 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>3 minutes</td><td className={st.td}>450 words</td><td className={st.td}>~1.5 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>5 minutes</td><td className={st.td}>750 words</td><td className={st.td}>~2.5 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>8 minutes</td><td className={st.td}>1,200 words</td><td className={st.td}>~4 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>10 minutes</td><td className={st.td}>1,500 words</td><td className={st.td}>~5 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>12 minutes</td><td className={st.td}>1,800 words</td><td className={st.td}>~6 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>15 minutes</td><td className={st.td}>2,250 words</td><td className={st.td}>~7.5 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>20 minutes</td><td className={st.td}>3,000 words</td><td className={st.td}>~10 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>30 minutes</td><td className={st.td}>4,500 words</td><td className={st.td}>~15 pages</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>60 minutes</td><td className={st.td}>9,000 words</td><td className={st.td}>~30 pages</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className={st.h2}>Why 10-15 Minutes Is the YouTube Sweet Spot</h2>
          <p className={st.p}>YouTube algorithm data consistently shows that videos between 10-15 minutes perform best for most channels. This length allows for mid-roll ads (available on 8+ minute videos since 2023), which noticeably increases revenue. A 10-minute video with 2 mid-roll ads can earn 3x more than a 5-minute video with only pre-roll.</p>
          <p className={st.p}>From a viewer perspective, 10-15 minutes is long enough to provide real value but short enough to hold attention. YouTube analytics show that average view duration for most channels is 40-60% of total length — so a 10-minute video retains viewers for 4-6 minutes on average, while a 30-minute video might retain for only 8-10 minutes.</p>

          <h2 className={st.h2}>How to Script a YouTube Video</h2>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>The Hook (first 30 seconds / 75 words):</strong> You have 30 seconds before viewers click away. Open with the value proposition: "In this video, I will show you exactly how to [result] in [timeframe]." Do NOT start with an intro, logo animation, or "Hey guys, welcome to my channel." Get to the point immediately.</p>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>The Content (80% of video):</strong> Structure your script with clear sections and transitions. Use bullet points in your script for key points you want to hit, but do not read word-for-word — that sounds robotic. Write in a conversational tone, as if explaining to a friend.</p>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>The Close (last 30-60 seconds):</strong> Summarize key takeaways, give a clear call to action ("Subscribe and hit the bell"), and tease the next video. YouTube measures how many viewers watch to the end — a strong close improves your retention metrics.</p>

          <h2 className={st.h2}>Pacing Your Script</h2>
          <p className={st.p}>Not every word in your script will be spoken at the same pace. Factor in pauses for emphasis (2-3 seconds), b-roll segments where you are not talking (10-20% of video), and visual demonstrations. A 1,500-word script might actually fill a 12-minute video once you add natural pauses and visual breaks.</p>
          <p className={st.p}>Pro tip: Record yourself reading the script aloud with a timer before filming. This gives you an accurate runtime and helps identify sections that feel rushed or drag. Most YouTubers find their script is 10-15% too long on the first draft.</p>

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
            <a href="/blog/how-many-words-in-a-podcast-episode" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Podcast Word Counts</a>
            <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count</a>
            <a href="/words-per-minute/speech/10-minute-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">10-Minute Speech</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Long Should a YouTube Script Be? Word Count by Video Length","author":{"@type":"Organization","name":"WordCounterTool.net"},"publisher":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21","dateModified":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How Long Should a YouTube Script Be? Word Count by Video Length","item":"https://www.wordcountertool.net/blog/how-long-should-a-youtube-script-be"}]})}} />
      
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
