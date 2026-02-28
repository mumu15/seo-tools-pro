import os

base = r"."

# ─── HASHTAG COUNTER ───────────────────────────────────────────────────────────
hashtag_dir = os.path.join(base, "app", "hashtag-counter")
os.makedirs(hashtag_dir, exist_ok=True)

hashtag_page = r"""'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'How many hashtags should I use on Instagram?', a: 'Instagram allows up to 30 hashtags per post. Research suggests using 5-10 highly relevant hashtags performs better than using all 30. Using too many hashtags can look spammy and may reduce engagement.' },
  { q: 'How many hashtags should I use on Twitter?', a: 'Twitter recommends using no more than 2 hashtags per tweet. Tweets with 1-2 hashtags get 21% more engagement than those with 3 or more.' },
  { q: 'How many hashtags should I use on LinkedIn?', a: 'LinkedIn recommends using 3-5 hashtags per post. Using more than 5 hashtags on LinkedIn can reduce the reach of your post.' },
  { q: 'Do hashtags still work in 2024?', a: 'Yes, hashtags still work in 2024. They help categorize content and make it discoverable to users who follow or search for specific topics. However their importance has decreased on some platforms as algorithms have improved.' },
  { q: 'Is this hashtag counter free?', a: 'Yes, completely free with no sign up required.' },
]

const LIMITS = [
  { platform: 'Instagram', limit: 30, recommended: '5-10', icon: '📸' },
  { platform: 'Twitter / X', limit: 2, recommended: '1-2', icon: '𝕏' },
  { platform: 'LinkedIn', limit: 30, recommended: '3-5', icon: '💼' },
  { platform: 'TikTok', limit: 100, recommended: '3-5', icon: '🎵' },
  { platform: 'Facebook', limit: 30, recommended: '2-3', icon: '👤' },
  { platform: 'YouTube', limit: 60, recommended: '3-5', icon: '▶️' },
]

export default function HashtagCounter() {
  const [text, setText] = useState('')

  const hashtags = text.match(/#[\w\u0590-\u05ff]+/gi) || []
  const uniqueHashtags = [...new Set(hashtags.map(h => h.toLowerCase()))]
  const count = hashtags.length

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Hashtag Counter</h1>
          <p className="text-slate-400 text-lg">Count hashtags and check platform limits instantly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="text-white font-medium block mb-3">Your Post or Caption</label>
            <textarea value={text} onChange={e => setText(e.target.value)}
              placeholder="Paste your social media post here including hashtags..."
              rows={10} />
            <button onClick={() => setText('')} className="btn-secondary mt-3 text-sm">Clear</button>

            {uniqueHashtags.length > 0 && (
              <div className="result-box mt-4">
                <h3 className="text-white font-medium mb-3 text-sm">Hashtags Found</h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueHashtags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{background:'rgba(52,211,153,0.1)', color:'#34d399', border:'1px solid rgba(52,211,153,0.2)'}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="stat-card text-center">
                <div className="text-4xl font-display font-bold text-emerald-400">{count}</div>
                <div className="text-slate-500 text-sm mt-1">Total Hashtags</div>
              </div>
              <div className="stat-card text-center">
                <div className="text-4xl font-display font-bold text-blue-400">{uniqueHashtags.length}</div>
                <div className="text-slate-500 text-sm mt-1">Unique Hashtags</div>
              </div>
            </div>

            <h3 className="text-white font-medium">Platform Limits</h3>
            {LIMITS.map((p, i) => {
              const over = count > p.limit
              const pct = Math.min(100, (count / p.limit) * 100)
              return (
                <div key={i} className="stat-card">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span className="text-white text-sm font-medium">{p.platform}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-mono font-bold ${over ? 'text-red-400' : 'text-emerald-400'}`}>{count}/{p.limit}</span>
                      <div className="text-slate-600 text-xs">Recommended: {p.recommended}</div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width:`${pct}%`, background: over ? 'linear-gradient(90deg,#ef4444,#dc2626)' : 'linear-gradient(90deg,#10b981,#34d399)'}} />
                  </div>
                  {over && <p className="text-red-400 text-xs mt-1">Over limit by {count - p.limit}</p>}
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Hashtag Counter Tool</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free hashtag counter instantly counts all hashtags in your social media post and shows you how many you have used compared to the limits and recommendations for each major platform including Instagram, Twitter, LinkedIn, TikTok, Facebook and YouTube. Paste your caption or post and instantly see your hashtag count.</p>
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
      </main>
      <Footer />
    </>
  )
}
"""

with open(os.path.join(hashtag_dir, "page.js"), "w", encoding="utf-8") as f:
    f.write(hashtag_page)
print("✅ Hashtag Counter created")

# ─── TWITTER THREAD COUNTER ────────────────────────────────────────────────────
twitter_dir = os.path.join(base, "app", "twitter-thread-counter")
os.makedirs(twitter_dir, exist_ok=True)

twitter_page = r"""'use client'
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
      </main>
      <Footer />
    </>
  )
}
"""

with open(os.path.join(twitter_dir, "page.js"), "w", encoding="utf-8") as f:
    f.write(twitter_page)
print("✅ Twitter Thread Counter created")

# ─── UPDATE HEADER ─────────────────────────────────────────────────────────────
header = r"""'use client'
import { useState } from 'react'
import Link from 'next/link'

const tools = [
  { name: 'Word Counter', href: '/word-counter' },
  { name: 'Keyword Density', href: '/keyword-density' },
  { name: 'Meta Tags', href: '/meta-tag-generator' },
  { name: 'Readability', href: '/readability-checker' },
  { name: 'Character Counter', href: '/character-counter' },
  { name: 'Sentence Counter', href: '/sentence-counter' },
  { name: 'Words Per Page', href: '/words-per-page' },
  { name: 'Reading Time', href: '/reading-time' },
  { name: 'WPM Test', href: '/words-per-minute' },
  { name: 'Hashtag Counter', href: '/hashtag-counter' },
  { name: 'Thread Counter', href: '/twitter-thread-counter' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 z-50" style={{ borderColor: 'rgba(52,211,153,0.1)', background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xs"
              style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>S</div>
            <span className="font-display font-bold text-white">SEOTools<span className="text-emerald-400">Pro</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 overflow-x-auto max-w-3xl">
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="text-slate-400 hover:text-white text-xs px-2 py-2 rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap">
                {tool.name}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href} onClick={() => setOpen(false)}
                className="block text-slate-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                {tool.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
"""

with open(os.path.join(base, "components", "Header.js"), "w", encoding="utf-8") as f:
    f.write(header)
print("✅ Header updated")

# ─── UPDATE SITEMAP ────────────────────────────────────────────────────────────
sitemap = r"""export default function sitemap() {
  const baseUrl = 'https://www.wordcountertool.net'
  const pages = [
    '',
    '/word-counter',
    '/keyword-density',
    '/meta-tag-generator',
    '/readability-checker',
    '/character-counter',
    '/sentence-counter',
    '/words-per-page',
    '/reading-time',
    '/words-per-minute',
    '/hashtag-counter',
    '/twitter-thread-counter',
    '/about',
    '/contact',
    '/privacy-policy',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}
"""

with open(os.path.join(base, "app", "sitemap.js"), "w", encoding="utf-8") as f:
    f.write(sitemap)
print("✅ Sitemap updated")

# ─── UPDATE HOMEPAGE ───────────────────────────────────────────────────────────
homepage = r"""import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tools = [
  { title: 'Word Counter', description: 'Count words, characters, sentences, paragraphs and reading time instantly.', href: '/word-counter', icon: '📝', color: 'from-emerald-500 to-teal-500' },
  { title: 'Keyword Density Checker', description: 'Analyze keyword frequency and density to optimize your content for SEO.', href: '/keyword-density', icon: '🔍', color: 'from-blue-500 to-cyan-500' },
  { title: 'Meta Tag Generator', description: 'Generate perfect meta tags for SEO, Facebook and Twitter sharing.', href: '/meta-tag-generator', icon: '🏷️', color: 'from-purple-500 to-pink-500' },
  { title: 'Readability Checker', description: 'Check your content readability score using the Flesch-Kincaid formula.', href: '/readability-checker', icon: '📖', color: 'from-yellow-500 to-orange-500' },
  { title: 'Character Counter', description: 'Count characters for Twitter, Instagram, SMS, meta tags and more.', href: '/character-counter', icon: '🔢', color: 'from-red-500 to-rose-500' },
  { title: 'Sentence Counter', description: 'Count sentences and analyze your writing structure and sentence length.', href: '/sentence-counter', icon: '📊', color: 'from-indigo-500 to-violet-500' },
  { title: 'Words Per Page Calculator', description: 'Convert word counts to pages or pages to words for any font and spacing.', href: '/words-per-page', icon: '📄', color: 'from-teal-500 to-emerald-500' },
  { title: 'Reading Time Calculator', description: 'Calculate how long it takes to read any article or text instantly.', href: '/reading-time', icon: '⏱️', color: 'from-cyan-500 to-blue-500' },
  { title: 'Words Per Minute Test', description: 'Test your typing speed or calculate your reading speed in WPM.', href: '/words-per-minute', icon: '⌨️', color: 'from-green-500 to-emerald-500' },
  { title: 'Hashtag Counter', description: 'Count hashtags and check platform limits for Instagram, Twitter and more.', href: '/hashtag-counter', icon: '#️⃣', color: 'from-pink-500 to-rose-500' },
  { title: 'Twitter Thread Counter', description: 'Plan and count characters for your Twitter threads before posting.', href: '/twitter-thread-counter', icon: '𝕏', color: 'from-slate-500 to-gray-500' },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>
            ✨ Free SEO Writing Tools — No Sign Up Required
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Free Online<br />
            <span className="text-emerald-400">Writing & SEO Tools</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Professional word counting, SEO analysis and writing tools — completely free, instant results, no sign up required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="group result-box hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h2 className="text-white font-display font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{tool.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-20 result-box text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Free SEO & Writing Tools</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mx-auto">
            WordCounterTool.net provides free professional writing and SEO tools for students, bloggers, content writers, social media managers and SEO professionals. All tools work instantly in your browser with no sign up, no downloads and no usage limits.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
"""

with open(os.path.join(base, "app", "page.js"), "w", encoding="utf-8") as f:
    f.write(homepage)
print("✅ Homepage updated")

print("\n🎉 All done! Now run: git add . && git commit -m 'Add hashtag and thread counter' && git push")
