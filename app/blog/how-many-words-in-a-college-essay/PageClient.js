'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export default function Post() {
  const st = {
    article: { maxWidth: 800, margin: '0 auto', padding: '32px 16px 64px' },
    h1: { fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 16, lineHeight: 1.15 },
    h2: { fontSize: 22, fontWeight: 700, color: '#f1f5f9', margin: '40px 0 16px' },
    h3: { fontSize: 18, fontWeight: 700, color: '#e2e8f0', margin: '28px 0 12px' },
    p: { fontSize: 16, color: '#94a3b8', lineHeight: 1.85, margin: '0 0 16px' },
    quick: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 16, padding: 24, marginBottom: 28 },
    box: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24, marginBottom: 24 },
    goldBox: { background: 'rgba(240,200,66,0.04)', border: '1px solid rgba(240,200,66,0.15)', borderRadius: 16, padding: 24, marginBottom: 24 },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
    th: { textAlign: 'left', padding: '10px 12px', color: '#34d399', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', borderBottom: '2px solid rgba(52,211,153,0.2)' },
    td: { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#94a3b8' },
    tdB: { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#e2e8f0', fontWeight: 600 },
    cta: { background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(16,185,129,0.05))', border: '1px solid rgba(52,211,153,0.3)', borderRadius: 16, padding: 28, textAlign: 'center', marginBottom: 28 },
    tag: { display: 'inline-block', padding: '6px 14px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 8, color: '#34d399', textDecoration: 'none', fontSize: 13, fontWeight: 600, margin: '0 8px 8px 0' },
    bar: { height: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 6, overflow: 'hidden', marginTop: 6, marginBottom: 16 },
    num: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', color: '#34d399', fontWeight: 800, fontSize: 14, marginRight: 12, flexShrink: 0 },
  }


  const [wordCount, setWordCount] = useState(500)
  const pages = (wordCount / 250).toFixed(1)
  const readMin = Math.ceil(wordCount / 200)

  const faqs = [
    { q: 'How many words is the Common App essay?', a: 'The Common App essay has a strict limit of 250-650 words. Most admissions officers recommend using at least 500 words to fully develop your story. Going under 400 words may signal lack of effort.' },
    { q: 'How many words are supplemental essays?', a: 'Supplemental essays vary by school. Most are 100-400 words. "Why This College" essays are typically 200-350 words. Short answer supplements can be as brief as 50-100 words.' },
    { q: 'Do colleges check word count?', a: 'Yes. The Common App automatically enforces the 650-word limit. Other applications may cut off text beyond the limit. Admissions officers can easily spot essays that are too short or padded.' },
    { q: 'Is 650 words too long for a college essay?', a: '650 words is the maximum for Common App and is perfectly acceptable. Many successful essays use 600-650 words. The key is that every word should serve a purpose — do not pad to reach the limit.' },
    { q: 'How many paragraphs should a college essay be?', a: 'A college essay is typically 4-7 paragraphs. There is no strict rule — focus on natural flow rather than paragraph count. Each paragraph should advance your story or reveal something new about you.' },
    { q: 'What happens if I go over the word limit?', a: 'The Common App will not let you submit over 650 words. For other applications, going over the stated limit signals that you cannot follow instructions — a red flag for admissions. Always stay within limits.' },
  ]

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main style={{minHeight:'100vh',background:'#0f1117',color:'#e2e8f0'}}>
        <div style={st.article}>
          <div style={{marginBottom:20}}><Link href="/blog" style={{color:'#34d399',fontSize:14,textDecoration:'none'}}>← Back to Blog</Link></div>
          <h1 style={st.h1}>How Many Words in a College Essay? Complete 2026 Guide</h1>
          <p style={{fontSize:14,color:'#64748b',marginBottom:32}}>Updated March 2026 · 9 min read</p>

          <div style={st.quick}>
            <p style={{color:'#34d399',fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:8}}>Quick Answer</p>
            <p style={{color:'#f1f5f9',fontSize:18,lineHeight:1.6,margin:0}}>The <strong>Common App essay</strong> is 250-650 words. <strong>Supplemental essays</strong> are 100-400 words. <strong>UC personal insight questions</strong> are 350 words each. Most successful college essays use 85-95% of the maximum word count.</p>
          </div>

          {/* Interactive Word Counter */}
          <div style={st.goldBox}>
            <h2 style={{fontSize:18,fontWeight:700,color:'#f0c842',marginBottom:12,marginTop:0}}>Essay Word Count Visualizer</h2>
            <p style={{fontSize:13,color:'#94a3b8',marginBottom:16}}>Drag the slider to see how your word count translates to pages and reading time:</p>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
              <span style={{fontSize:13,color:'#64748b'}}>Word Count</span>
              <span style={{fontSize:18,fontWeight:800,color:'#f0c842'}}>{wordCount} words</span>
            </div>
            <input type="range" min={100} max={1000} step={10} value={wordCount} onChange={e => setWordCount(+e.target.value)} style={{width:'100%',accentColor:'#34d399'}} />
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,marginTop:16}}>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:10,padding:12,textAlign:'center'}}>
                <div style={{fontSize:22,fontWeight:800,color:'#34d399'}}>{pages}</div>
                <div style={{fontSize:10,color:'#64748b',marginTop:4}}>Pages (double-spaced)</div>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:10,padding:12,textAlign:'center'}}>
                <div style={{fontSize:22,fontWeight:800,color:'#60a5fa'}}>{readMin} min</div>
                <div style={{fontSize:10,color:'#64748b',marginTop:4}}>Reading Time</div>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:10,padding:12,textAlign:'center'}}>
                <div style={{fontSize:22,fontWeight:800,color:'#f0c842'}}>{Math.round(wordCount/650*100)}%</div>
                <div style={{fontSize:10,color:'#64748b',marginTop:4}}>of Common App Max</div>
              </div>
            </div>
          </div>

          <h2 style={st.h2}>College Essay Word Counts — Every Application</h2>
          <div style={st.box}>
            <table style={st.table}>
              <thead><tr><th style={st.th}>Application</th><th style={st.th}>Essay Type</th><th style={st.th}>Word Limit</th></tr></thead>
              <tbody>
                {[
                  ['Common App','Personal Essay','250-650 words'],
                  ['Common App','Additional Info (optional)','650 words'],
                  ['Coalition App','Personal Essay','Up to 550 words'],
                  ['UC Application','Personal Insight (x4)','350 words each'],
                  ['ApplyTexas','Topic Essays','500-750 words'],
                  ['Georgetown','Multiple essays','~1 page each'],
                  ['MIT','Multiple short essays','100-250 words each'],
                  ['Stanford','Short answers + essays','50-250 words each'],
                  ['Ivy League Supplementals','Why Us / Activity','150-400 words'],
                  ['Scholarship Essays','Varies','250-1,000 words'],
                ].map((r,i) => (
                  <tr key={i}><td style={st.tdB}>{r[0]}</td><td style={st.td}>{r[1]}</td><td style={st.td}>{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 style={st.h2}>How to Hit the Perfect Word Count</h2>
          <p style={st.p}>The ideal college essay uses <strong style={{color:'#e2e8f0'}}>85-95% of the maximum word count</strong>. For the Common App, that means 550-620 words. Going under 500 words suggests you have not fully developed your ideas. Going over 630 risks having a rushed conclusion when you realize you are near the limit.</p>

          <h3 style={st.h3}>The 650-Word Structure That Works</h3>
          <p style={st.p}>The most successful Common App essays follow this approximate structure:</p>
          <div style={st.box}>
            {[
              ['Hook / Opening Scene','50-80 words — Start with a vivid moment, dialogue, or surprising statement that immediately grabs attention. Do NOT start with a dictionary definition or generic statement.'],
              ['Context / Background','80-120 words — Give the reader enough context to understand the situation. Who are you, what happened, and why does it matter?'],
              ['The Challenge or Turning Point','120-180 words — This is the heart of your essay. What conflict, challenge, realization, or moment of growth did you experience? Be specific and personal.'],
              ['Reflection / What You Learned','120-160 words — Show how this experience changed you. What did you learn about yourself? How do you think differently now? Admissions officers care most about this section.'],
              ['Connection to Future','80-120 words — Tie your story to who you are today and who you want to become. How does this connect to what you will bring to college?'],
            ].map((s, i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',padding:'12px 0',borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none'}}>
                <span style={st.num}>{i+1}</span>
                <div><div style={{fontWeight:700,color:'#e2e8f0',marginBottom:4}}>{s[0]}</div><div style={{fontSize:14,color:'#94a3b8',lineHeight:1.7}}>{s[1]}</div></div>
              </div>
            ))}
          </div>

          <h2 style={st.h2}>Common Mistakes That Kill College Essays</h2>
          <p style={st.p}><strong style={{color:'#ef4444'}}>Too short (under 400 words):</strong> Signals laziness or inability to develop ideas. Admissions officers read thousands of essays — a short one says you did not care enough to try. Even if your writing is excellent, 350 words cannot compete with a well-developed 600-word essay.</p>
          <p style={st.p}><strong style={{color:'#ef4444'}}>Too generic:</strong> "I learned teamwork from sports" or "traveling changed my perspective" are essays that every applicant writes. Be specific. Instead of "I learned leadership," describe the exact moment you had to make a difficult decision and what happened next.</p>
          <p style={st.p}><strong style={{color:'#ef4444'}}>Padded to hit the limit:</strong> Admissions officers can spot filler instantly. If your essay is naturally 500 words, that is fine. Do not add adjectives and adverbs to reach 650. A tight 550-word essay beats a padded 650-word one every time.</p>
          <p style={st.p}><strong style={{color:'#ef4444'}}>Starting too broadly:</strong> Do not open with "Throughout history..." or "In today\'s society..." Start with YOU. Your story, your moment, your voice. The first sentence should make the reader want to read the second.</p>

          <h2 style={st.h2}>Word Count Tips for Supplemental Essays</h2>
          <p style={st.p}>Supplemental essays are where most applicants lose points. Schools with 100-250 word limits are testing your ability to be concise and specific. Here is how to approach each common type:</p>
          <p style={st.p}><strong style={{color:'#e2e8f0'}}>"Why This School?" (150-350 words):</strong> Name specific programs, professors, clubs, or traditions that attract you. Generic answers like "great campus" or "diverse community" get skimmed and forgotten. Mention at least 2-3 details you could only know by researching the school.</p>
          <p style={st.p}><strong style={{color:'#e2e8f0'}}>"Activity/Extracurricular" (150-250 words):</strong> Do not list what you did — describe what it meant to you. What did you learn? How did you grow? One specific story is better than a summary of four years.</p>
          <p style={st.p}><strong style={{color:'#e2e8f0'}}>"Short Answer" (50-100 words):</strong> Be direct and memorable. These tiny responses should show personality. A witty, authentic 75-word answer stands out more than a formal 100-word paragraph.</p>

          <div style={st.cta}>
            <p style={{fontWeight:700,fontSize:18,color:'#f1f5f9',marginBottom:8}}>Check Your College Essay Word Count</p>
            <p style={{fontSize:14,color:'#94a3b8',marginBottom:16}}>Paste your essay and get instant word count, character count, reading time, and readability score.</p>
            <a href="/word-counter" style={{display:'inline-block',background:'#34d399',color:'#0f1117',fontWeight:700,padding:'12px 28px',borderRadius:12,textDecoration:'none',fontSize:14}}>Open Word Counter →</a>
          </div>

          <AdUnit slot="3763639977" />

          <h2 style={st.h2}>Frequently Asked Questions</h2>
          <div style={st.box}>
            {faqs.map((faq, i) => (
              <div key={i} style={i < faqs.length-1 ? {borderBottom:'1px solid rgba(255,255,255,0.04)',paddingBottom:16,marginBottom:16} : {paddingBottom:8}}>
                <h3 style={{fontSize:15,fontWeight:600,color:'#e2e8f0',marginBottom:8,marginTop:0}}>{faq.q}</h3>
                <p style={{fontSize:14,color:'#94a3b8',lineHeight:1.7,margin:0}}>{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {[['/word-counter','Word Counter'],['/character-counter','Character Counter'],['/readability-checker','Readability Checker'],['/word-count/for/essay','Essay Word Count Guide'],['/word-count/for/college-application-essay','Application Essay Guide'],['/word-count/for/scholarship-essay','Scholarship Essay Guide'],['/blog/how-to-write-blog-introduction','How to Write Introductions']].map(([href,lbl]) => (
              <a key={href} href={href} style={st.tag}>{lbl}</a>
            ))}
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Words in a College Essay? Complete 2026 Guide","author":{"@type":"Organization","name":"WordCounterTool.net"},"publisher":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21","dateModified":"2026-03-21","description":"The definitive guide to college essay word counts in 2026. Common App (650 words), supplementals (100-400), UC essays (350), and every major application format."})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"College Essay Word Count","item":"https://www.wordcountertool.net/blog/how-many-words-in-a-college-essay"}]})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/word-count/for/essay" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Essay Word Count</a>
            <a href="/word-count/for/college-application-essay" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">College Essay Guide</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
          </div>
        </div>

        <AdUnit slot="3248634657" />

      <Footer />
    </>
  )
}
