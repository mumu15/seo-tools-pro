'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'What is the ideal meta title length?', a: 'The ideal meta title length is 50 to 60 characters. Google typically displays the first 60 characters of a title tag. Titles longer than 60 characters may be cut off in search results.' },
  { q: 'What is the ideal meta description length?', a: 'The ideal meta description length is 150 to 160 characters. Google typically shows up to 160 characters in search results. A good meta description should summarize the page content and include a call to action.' },
  { q: 'What are Open Graph tags?', a: 'Open Graph tags control how your page appears when shared on Facebook, LinkedIn and other social media platforms. They let you set a custom title, description and image for social shares.' },
  { q: 'Do meta keywords still matter for SEO?', a: 'No, Google stopped using meta keywords as a ranking factor in 2009. However other search engines like Bing may still consider them. Focus on your meta title and description instead as these directly affect click-through rates.' },
  { q: 'Is this meta tag generator free?', a: 'Yes, completely free with no sign up required.' },
]

export default function MetaTagGenerator() {
  const [form, setForm] = useState({ title: '', description: '', keywords: '', author: '', url: '', ogImage: '' })
  const [copied, setCopied] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const titleLen = form.title.length
  const descLen = form.description.length
  const titleColor = titleLen === 0 ? 'text-slate-500' : titleLen <= 60 ? 'text-emerald-400' : 'text-red-400'
  const descColor = descLen === 0 ? 'text-slate-500' : descLen <= 160 ? 'text-emerald-400' : 'text-red-400'

  const generated = `<!-- Primary Meta Tags -->
<title>${form.title || 'Your Page Title'}</title>
<meta name="title" content="${form.title || 'Your Page Title'}">
<meta name="description" content="${form.description || 'Your page description'}">
${form.keywords ? `<meta name="keywords" content="${form.keywords}">` : ''}
${form.author ? `<meta name="author" content="${form.author}">` : ''}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${form.url || 'https://yoursite.com'}">
<meta property="og:title" content="${form.title || 'Your Page Title'}">
<meta property="og:description" content="${form.description || 'Your page description'}">
${form.ogImage ? `<meta property="og:image" content="${form.ogImage}">` : ''}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${form.url || 'https://yoursite.com'}">
<meta property="twitter:title" content="${form.title || 'Your Page Title'}">
<meta property="twitter:description" content="${form.description || 'Your page description'}">
${form.ogImage ? `<meta property="twitter:image" content="${form.ogImage}">` : ''}`

  const copyTags = () => {
    navigator.clipboard.writeText(generated)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Meta Tag Generator</h1>
          <p className="text-slate-400 text-lg">Generate perfect meta tags for SEO, Facebook and Twitter</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-white text-sm font-medium">Page Title *</label>
                <span className={`text-sm font-mono ${titleColor}`}>{titleLen}/60</span>
              </div>
              <input type="text" value={form.title} onChange={e => update('title', e.target.value)}
                placeholder="My Awesome Page Title"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }} />
              {titleLen > 60 && <p className="text-red-400 text-xs mt-1">⚠️ Title too long — Google may cut it off</p>}
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-white text-sm font-medium">Meta Description *</label>
                <span className={`text-sm font-mono ${descColor}`}>{descLen}/160</span>
              </div>
              <textarea value={form.description} onChange={e => update('description', e.target.value)}
                placeholder="A brief description of your page content..." rows={3} />
              {descLen > 160 && <p className="text-red-400 text-xs mt-1">⚠️ Description too long — Google may cut it off</p>}
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">Keywords (comma separated)</label>
              <input type="text" value={form.keywords} onChange={e => update('keywords', e.target.value)}
                placeholder="seo, marketing, tools"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">Author</label>
              <input type="text" value={form.author} onChange={e => update('author', e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">Page URL</label>
              <input type="text" value={form.url} onChange={e => update('url', e.target.value)}
                placeholder="https://yoursite.com/page"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">Social Image URL</label>
              <input type="text" value={form.ogImage} onChange={e => update('ogImage', e.target.value)}
                placeholder="https://yoursite.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            </div>
          </div>

          <div>
            <div className="result-box mb-4">
              <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Google Preview</h3>
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-700 text-lg font-medium truncate">{form.title || 'Your Page Title'}</p>
                <p className="text-green-700 text-sm">{form.url || 'https://yoursite.com'}</p>
                <p className="text-slate-600 text-sm mt-1 line-clamp-2">{form.description || 'Your page description will appear here.'}</p>
              </div>
            </div>
            <div className="result-box">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">Generated HTML</h3>
                <button onClick={copyTags} className="btn-primary text-sm px-4 py-2">{copied ? '✅ Copied!' : '📋 Copy All'}</button>
              </div>
              <pre className="text-xs text-slate-400 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed max-h-64 overflow-y-auto">{generated}</pre>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">What are Meta Tags?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Meta tags are snippets of HTML code that provide information about a web page to search engines and social media platforms. They are placed in the head section of your HTML and are not visible to visitors. Meta tags help search engines understand your page and influence how it appears in search results and social media shares.</p>
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
              <a href="/keyword-density" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Keyword Density</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Analyze keyword frequency in your content</p>
              </a>
              <a href="/word-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Word Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count words and characters instantly</p>
              </a>
              <a href="/readability-checker" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Readability Checker</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Check your content readability score</p>
              </a>
              <a href="/character-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">🔤</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Character Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count characters for meta tags</p>
              </a>
            </div>
          </div>
      </main>

          {/* Internal Link to Blog */}
          <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
            <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
            <a href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 font-semibold hover:underline">How to Write Perfect Meta Descriptions That Get Clicks (2026)</a>
          </div>
      <Footer />
    </>
  )
}