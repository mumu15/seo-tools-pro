const fs = require('fs');

const newCharCounter = `'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'How many characters are allowed on Twitter?', a: 'Twitter (X) allows 280 characters per tweet. Links count as 23 characters regardless of their actual length.' },
  { q: 'How many characters are allowed in an Instagram caption?', a: 'Instagram allows up to 2,200 characters in a caption but only the first 125 characters show without clicking more.' },
  { q: 'How many characters should a meta description be?', a: 'Meta descriptions should be between 150-160 characters. Google truncates descriptions longer than 160 characters in search results.' },
  { q: 'How many characters are allowed in a YouTube title?', a: 'YouTube titles can be up to 100 characters but only the first 60-70 characters show in search results.' },
  { q: 'How many characters are in an SMS text message?', a: 'A standard SMS is 160 characters. Messages longer than 160 characters are split into multiple SMS messages which costs more.' },
]

const PLATFORMS = [
  { name: 'Twitter/X', limit: 280, color: '#1da1f2' },
  { name: 'Instagram Caption', limit: 2200, color: '#e1306c' },
  { name: 'Instagram Bio', limit: 150, color: '#833ab4' },
  { name: 'Facebook Post', limit: 63206, color: '#1877f2' },
  { name: 'LinkedIn Post', limit: 3000, color: '#0a66c2' },
  { name: 'YouTube Title', limit: 100, color: '#ff0000' },
  { name: 'Meta Description', limit: 160, color: '#34d399' },
  { name: 'SMS Message', limit: 160, color: '#f59e0b' },
  { name: 'TikTok Caption', limit: 2200, color: '#010101' },
]

export default function CharacterCounter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const chars = text.length
  const charsNoSpaces = text.replace(/\\s/g, '').length
  const words = text.trim() === '' ? 0 : text.trim().split(/\\s+/).length
  const lines = text.split('\\n').length

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Character Counter","url":"https://www.wordcountertool.net/character-counter"}]} />
      <WebAppSchema name="Free Character Counter" description="Count characters for Twitter, Instagram, SMS and more with visual platform limit bars." url="https://www.wordcountertool.net/character-counter" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Character Counter Online</h1>
          <p className="text-slate-400 text-lg">Count characters for Twitter, Instagram, SMS and meta tags — see platform limits in real time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Textarea */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-3 justify-end">
              <button onClick={() => setText('')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
                🗑️ Clear
              </button>
              <button onClick={copyText}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background: copied ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.3)', color: copied ? '#34d399' : '#94a3b8'}}>
                {copied ? '✅ Copied!' : '📋 Copy Text'}
              </button>
            </div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-4 leading-relaxed"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
            />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Characters', value: chars, color: 'text-emerald-400' },
                { label: 'No Spaces', value: charsNoSpaces, color: 'text-blue-400' },
                { label: 'Words', value: words, color: 'text-purple-400' },
                { label: 'Lines', value: lines, color: 'text-yellow-400' },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className={\`text-2xl font-display font-bold \${stat.color}\`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Platform Limits */}
          <div className="result-box">
            <h3 className="text-white font-bold mb-4">Platform Limits</h3>
            <div className="space-y-3">
              {PLATFORMS.map((platform, i) => {
                const pct = Math.min(100, (chars / platform.limit) * 100)
                const remaining = platform.limit - chars
                const over = remaining < 0
                return (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400 text-xs">{platform.name}</span>
                      <span className={\`text-xs font-bold \${over ? 'text-red-400' : 'text-slate-400'}\`}>
                        {over ? \`+\${Math.abs(remaining)} over\` : \`\${remaining} left\`}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.05)'}}>
                      <div className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: \`\${pct}%\`,
                          background: over ? '#ef4444' : pct > 80 ? '#f59e0b' : platform.color,
                        }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Internal Link */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/how-to-count-words-online" className="text-emerald-400 font-semibold hover:underline">How to Count Words Online: The Complete Free Guide (2026)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/twitter-thread-counter',icon:'🧵',name:'Thread Counter',desc:'Plan your Twitter threads'},
              {href:'/hashtag-counter',icon:'#️⃣',name:'Hashtag Counter',desc:'Count hashtags for social media'},
              {href:'/sentence-counter',icon:'📋',name:'Sentence Counter',desc:'Count sentences in your text'},
            ].map((tool,i) => (
              <a key={i} href={tool.href} className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="result-box">
            <div className="space-y-4 text-sm">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4" : "pb-4"} style={{borderColor:"rgba(52,211,153,0.1)"}}>
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
`;

fs.writeFileSync('app/character-counter/page.js', newCharCounter, 'utf8');
console.log('✅ Character counter upgraded with platform limit bars!');
console.log('Run: git add . && git commit -m "Upgrade character counter with platform limit bars" && git push');
