'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function MetaTagGenerator() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    url: '',
    ogImage: '',
  })
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
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Meta Tag Generator
          </h1>
          <p className="text-slate-400 text-lg">Generate perfect meta tags for SEO, Facebook and Twitter</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-white text-sm font-medium">Page Title *</label>
                <span className={`text-sm font-mono ${titleColor}`}>{titleLen}/60</span>
              </div>
              <input
                type="text"
                value={form.title}
                onChange={e => update('title', e.target.value)}
                placeholder="My Awesome Page Title"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none focus:ring-2 focus:ring-emerald-500"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }}
              />
              {titleLen > 60 && <p className="text-red-400 text-xs mt-1">⚠️ Title too long — Google may cut it off</p>}
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-white text-sm font-medium">Meta Description *</label>
                <span className={`text-sm font-mono ${descColor}`}>{descLen}/160</span>
              </div>
              <textarea
                value={form.description}
                onChange={e => update('description', e.target.value)}
                placeholder="A brief description of your page content..."
                rows={3}
              />
              {descLen > 160 && <p className="text-red-400 text-xs mt-1">⚠️ Description too long — Google may cut it off</p>}
            </div>

            <div>
              <label className="text-white text-sm font-medium block mb-1">Keywords (comma separated)</label>
              <input
                type="text"
                value={form.keywords}
                onChange={e => update('keywords', e.target.value)}
                placeholder="seo, marketing, tools"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }}
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium block mb-1">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={e => update('author', e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }}
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium block mb-1">Page URL</label>
              <input
                type="text"
                value={form.url}
                onChange={e => update('url', e.target.value)}
                placeholder="https://yoursite.com/page"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }}
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium block mb-1">Social Image URL (for og:image)</label>
              <input
                type="text"
                value={form.ogImage}
                onChange={e => update('ogImage', e.target.value)}
                placeholder="https://yoursite.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none"
                style={{ background: '#0f172a', border: '1px solid #1e293b' }}
              />
            </div>
          </div>

          {/* Preview & Output */}
          <div>
            {/* Google Preview */}
            <div className="result-box mb-4">
              <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Google Preview</h3>
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-700 text-lg font-medium truncate">
                  {form.title || 'Your Page Title'}
                </p>
                <p className="text-green-700 text-sm">{form.url || 'https://yoursite.com'}</p>
                <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                  {form.description || 'Your page description will appear here. Make it compelling to increase click-through rates from search results.'}
                </p>
              </div>
            </div>

            {/* Generated Code */}
            <div className="result-box">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">Generated HTML</h3>
                <button onClick={copyTags} className="btn-primary text-sm px-4 py-2">
                  {copied ? '✅ Copied!' : '📋 Copy All'}
                </button>
              </div>
              <pre className="text-xs text-slate-400 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed max-h-64 overflow-y-auto">
                {generated}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
