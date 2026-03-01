'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'What is the character limit on Twitter?', a: 'Twitter has a limit of 280 characters per tweet. This includes spaces, punctuation and emojis. URLs are shortened to 23 characters regardless of their actual length.' },
  { q: 'How long can a Twitter thread be?', a: 'There is no official limit on Twitter thread length. However threads longer than 10-15 tweets tend to see significant drop off in engagement. The practical limit is around 25 tweets for maintaining reader attention.' },
  { q: 'Do emojis count as characters on Twitter?', a: 'Yes, emojis count as characters on Twitter. Most emojis count as 2 characters due to Unicode encoding. This means a tweet with emojis will hit the 280 character limit faster than plain text.' },
  { q: 'How do I write a good Twitter thread?', a: 'Start with a strong hook tweet, keep each tweet focused on one idea, number your tweets so readers know the sequence, use line breaks for readability, end with a summary or call to action, and keep each tweet under 250 characters to leave room for replies.' },
  { q: 'Is this Twitter thread counter free?', a: 'Yes, completely free with no sign up required.' },
]

const CHAR_LIMIT = 280

export default function TwitterThreadCounter() {
  const [text, setText] = useState('')
  const [splitMode, setSplitMode] = useState(false)

  const tweets = text.split('\n\n').filter(t => t.trim())
  const totalChars = text.length
  const tweetCount = tweets.length

  const getTweetColor = (len) => {
    if (len > CHAR_LIMIT) return 'text-red-400'
    if (len > 240) return 'text-yellow-400'
    return 'text-emerald-400'
  }

  const getTweetBorder = (len) => {
    if (len > CHAR_LIMIT) return 'rgba(239,68,68,0.3)'
    if (len > 240) return 'rgba(251,191,36,0.3)'
    return 'rgba(52,211,153,0.1)'
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Twitter Thread Counter</h1>
          <p className="text-slate-400 text-lg">Count characters and plan your Twitter threads</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-medium">Your Thread</label>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Split by double enter</span>
                <button onClick={() => setSplitMode(!splitMode)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium ${splitMode ? 'btn-primary' : 'btn-secondary'}`}>
                  {splitMode ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
            <textarea value={text} onChange={e => setText(e.target.value)}
              placeholder={"Write your thread here...\n\nSeparate each tweet with a blank line to split into individual tweets.\n\nLike this — each paragraph becomes one tweet."}
              rows={14} />
            <button onClick={() => setText('')} className="btn-secondary mt-3 text-sm">Clear</button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="stat-card text-center">
                <div className="text-3xl font-display font-bold text-emerald-400">{tweetCount}</div>
                <div className="text-slate-500 text-xs mt-1">Tweets</div>
              </div>
              <div className="stat-card text-center">
                <div className="text-3xl font-display font-bold text-blue-400">{totalChars}</div>
                <div className="text-slate-500 text-xs mt-1">Total Chars</div>
              </div>
              <div className="stat-card text-center">
                <div className={`text-3xl font-display font-bold ${tweets.some(t => t.length > CHAR_LIMIT) ? 'text-red-400' : 'text-emerald-400'}`}>
                  {tweets.filter(t => t.length > CHAR_LIMIT).length === 0 ? '✓' : tweets.filter(t => t.length > CHAR_LIMIT).length}
                </div>
                <div className="text-slate-500 text-xs mt-1">{tweets.some(t => t.length > CHAR_LIMIT) ? 'Over Limit' : 'All Good'}</div>
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {tweets.map((tweet, i) => (
                <div key={i} className="result-box" style={{borderColor: getTweetBorder(tweet.length)}}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 text-xs">Tweet {i + 1}</span>
                    <span className={`text-sm font-mono font-bold ${getTweetColor(tweet.length)}`}>
                      {tweet.length}/{CHAR_LIMIT}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{tweet}</p>
                  {tweet.length > CHAR_LIMIT && (
                    <p className="text-red-400 text-xs mt-2">⚠️ {tweet.length - CHAR_LIMIT} characters over limit</p>
                  )}
                </div>
              ))}
              {tweets.length === 0 && (
                <div className="result-box text-center py-8">
                  <div className="text-4xl mb-3">𝕏</div>
                  <p className="text-slate-500 text-sm">Separate tweets with a blank line to preview</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Twitter Thread Counter</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free Twitter thread counter helps you plan and write Twitter threads. Separate each tweet with a blank line and instantly see how many tweets are in your thread, the character count for each tweet, and which tweets are over the 280 character limit. Plan your threads before posting to make sure every tweet is within the limit.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
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

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/hashtag-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">#️⃣</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Hashtag Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count hashtags for social media</p>
              </a>
              <a href="/character-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">🔤</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Character Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count characters for any platform</p>
              </a>
              <a href="/word-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Word Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count words and characters instantly</p>
              </a>
              <a href="/reading-time" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Reading Time</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Estimate reading time for your content</p>
              </a>
            </div>
          </div>
      </main>

          {/* Internal Link to Blog */}
          <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
            <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
            <a href="/blog/how-to-write-twitter-thread" className="text-emerald-400 font-semibold hover:underline">How to Write a Twitter Thread That Goes Viral (2026 Guide)</a>
          </div>
      <Footer />
    </>
  )
}
