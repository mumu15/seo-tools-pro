const fs = require('fs');

const newThreadCounter = `'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'How many characters are allowed per tweet?', a: 'Twitter (X) allows 280 characters per tweet. Links are shortened to 23 characters regardless of their actual length. Images do not count toward the character limit.' },
  { q: 'How many tweets can a thread have?', a: 'Twitter does not have an official limit on thread length but very long threads tend to lose reader engagement. Most successful threads have 5-15 tweets.' },
  { q: 'How do I write a good Twitter thread?', a: 'Start with a strong hook tweet, use numbers (1/, 2/ etc), keep each tweet focused on one point, end with a call to action and make each tweet valuable on its own.' },
  { q: 'Do Twitter threads get more engagement?', a: 'Yes, threads typically get more engagement than single tweets because they encourage people to read multiple tweets and spend more time on your content.' },
  { q: 'What is the best length for a Twitter thread?', a: 'Threads of 5-10 tweets tend to perform best. The first tweet (hook) is the most important and should immediately capture attention to make people want to read more.' },
]

const LIMIT = 280

export default function TwitterThreadCounter() {
  const [text, setText] = useState('')
  const [threads, setThreads] = useState([])
  const [showThreads, setShowThreads] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const chars = text.length
  const remaining = LIMIT - chars
  const isOver = remaining < 0
  const pct = Math.min(100, (chars / LIMIT) * 100)

  const splitIntoTweets = () => {
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text]
    const tweets = []
    let current = ''
    sentences.forEach(sentence => {
      const s = sentence.trim()
      if ((current + ' ' + s).trim().length <= LIMIT) {
        current = (current + ' ' + s).trim()
      } else {
        if (current) tweets.push(current)
        current = s.length <= LIMIT ? s : s.slice(0, LIMIT)
      }
    })
    if (current) tweets.push(current)
    setThreads(tweets)
    setShowThreads(true)
  }

  const copyTweet = (tweet, index) => {
    navigator.clipboard.writeText(tweet).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  const copyAll = () => {
    const all = threads.map((t, i) => \`\${i + 1}/\${threads.length} \${t}\`).join('\\n\\n')
    navigator.clipboard.writeText(all)
  }

  const getBarColor = () => {
    if (pct < 70) return '#34d399'
    if (pct < 90) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Twitter Thread Counter","url":"https://www.wordcountertool.net/twitter-thread-counter"}]} />
      <WebAppSchema name="Twitter Thread Counter" description="Plan Twitter threads and count characters per tweet. Free Twitter thread counter with auto-split feature." url="https://www.wordcountertool.net/twitter-thread-counter" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Twitter Thread Counter</h1>
          <p className="text-slate-400 text-lg">Plan your Twitter threads — count characters and auto-split into tweets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-3 justify-end">
              <button onClick={() => { setText(''); setShowThreads(false); setThreads([]) }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
                🗑️ Clear
              </button>
              <button onClick={splitIntoTweets}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background:'rgba(52,211,153,0.15)',border:'1px solid rgba(52,211,153,0.4)',color:'#34d399'}}>
                🧵 Auto-Split into Tweets
              </button>
            </div>

            <textarea
              value={text}
              onChange={e => { setText(e.target.value); setShowThreads(false) }}
              placeholder="Write your tweet or paste your thread content here..."
              className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-3 leading-relaxed"
              style={{background:'rgba(255,255,255,0.03)',border:\`1px solid \${isOver ? 'rgba(239,68,68,0.4)' : 'rgba(52,211,153,0.15)'}\`,boxShadow: text.length > 0 ? \`0 0 0 2px \${isOver ? 'rgba(239,68,68,0.15)' : 'rgba(52,211,153,0.15)'}\` : 'none',transition:'all 0.3s ease'}}
            />

            {/* Character Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-500">{chars} characters</span>
                <span className={\`font-bold \${isOver ? 'text-red-400' : 'text-slate-400'}\`}>
                  {isOver ? \`\${Math.abs(remaining)} over limit\` : \`\${remaining} remaining\`}
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.05)'}}>
                <div className="h-full rounded-full transition-all duration-300"
                  style={{width:\`\${pct}%\`, background: getBarColor()}}/>
              </div>
            </div>

            {/* Thread Splits */}
            {showThreads && threads.length > 0 && (
              <div className="result-box">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-bold">Thread Split ({threads.length} tweets)</h3>
                  <button onClick={copyAll}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.3)',color:'#34d399'}}>
                    📋 Copy All
                  </button>
                </div>
                <div className="space-y-3">
                  {threads.map((tweet, i) => (
                    <div key={i} className="p-3 rounded-xl" style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-emerald-400 text-xs font-bold">{i+1}/{threads.length}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 text-xs">{tweet.length}/{LIMIT}</span>
                          <button onClick={() => copyTweet(tweet, i)}
                            className="text-xs px-2 py-0.5 rounded"
                            style={{background: copiedIndex === i ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.05)', color: copiedIndex === i ? '#34d399' : '#64748b'}}>
                            {copiedIndex === i ? '✅' : '📋'}
                          </button>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{tweet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            <div className="result-box text-center py-6">
              <div className="text-5xl font-bold mb-2" style={{color: getBarColor()}}>{chars}</div>
              <div className="text-slate-400 text-sm">of {LIMIT} characters</div>
              <div className="mt-3 text-2xl font-bold" style={{color: isOver ? '#ef4444' : '#34d399'}}>
                {isOver ? \`⚠️ \${Math.abs(remaining)} over\` : \`✅ \${remaining} left\`}
              </div>
            </div>

            <div className="result-box">
              <h3 className="text-white font-bold text-sm mb-3">Thread Tips</h3>
              <div className="space-y-2 text-xs text-slate-400">
                <p>🎯 Start with a strong hook</p>
                <p>🔢 Number tweets (1/5, 2/5...)</p>
                <p>📌 Each tweet = one idea</p>
                <p>📣 End with a call to action</p>
                <p>🔗 Links count as 23 chars</p>
                <p>🖼️ Images don't count</p>
              </div>
            </div>

            <div className="result-box">
              <h3 className="text-white font-bold text-sm mb-3">Best Thread Lengths</h3>
              <div className="space-y-1.5 text-xs">
                {[
                  { tweets: '1 tweet', label: 'Quick tip', color: '#34d399' },
                  { tweets: '3-5 tweets', label: 'Mini thread', color: '#60a5fa' },
                  { tweets: '5-10 tweets', label: 'Best for engagement', color: '#818cf8' },
                  { tweets: '10+ tweets', label: 'Deep dive', color: '#f59e0b' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span style={{color:item.color}}>{item.tweets}</span>
                    <span className="text-slate-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Internal Link */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/how-to-write-twitter-thread" className="text-emerald-400 font-semibold hover:underline">How to Write a Twitter Thread That Goes Viral (2026 Guide)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/hashtag-counter',icon:'#️⃣',name:'Hashtag Counter',desc:'Count hashtags for social media'},
              {href:'/character-counter',icon:'🔤',name:'Character Counter',desc:'Count characters for any platform'},
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/reading-time',icon:'⏱️',name:'Reading Time',desc:'Estimate reading time for your content'},
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

fs.writeFileSync('app/twitter-thread-counter/page.js', newThreadCounter, 'utf8');
console.log('✅ Twitter thread counter upgraded with auto-split feature!');
console.log('Run: git add . && git commit -m "Upgrade twitter thread counter with auto-split" && git push');
