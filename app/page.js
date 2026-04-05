import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdUnit from 'components/AdUnit'

const writingTools = [
  { title: 'Word Counter', desc: 'Count words, characters, sentences, paragraphs and reading time instantly.', href: '/word-counter', gradient: 'from-emerald-500 to-teal-600' },
  { title: 'Character Counter', desc: 'Count characters for Twitter, Instagram, SMS, meta tags and more.', href: '/character-counter', gradient: 'from-blue-500 to-cyan-600' },
  { title: 'Sentence Counter', desc: 'Analyze sentence structure and average sentence length.', href: '/sentence-counter', gradient: 'from-violet-500 to-purple-600' },
  { title: 'Readability Checker', desc: 'Check your Flesch-Kincaid score and grade level.', href: '/readability-checker', gradient: 'from-amber-500 to-orange-600' },
  { title: 'Reading Time', desc: 'Calculate how long it takes to read any text.', href: '/reading-time', gradient: 'from-cyan-500 to-blue-600' },
  { title: 'Words Per Minute', desc: 'Test your reading speed or typing speed in WPM.', href: '/words-per-minute', gradient: 'from-green-500 to-emerald-600' },
]

const seoTools = [
  { title: 'Keyword Density', desc: 'Analyze keyword frequency and density for SEO.', href: '/keyword-density', gradient: 'from-rose-500 to-pink-600' },
  { title: 'Meta Tag Generator', desc: 'Generate perfect meta tags for Google and social media.', href: '/meta-tag-generator', gradient: 'from-purple-500 to-indigo-600' },
  { title: 'Hashtag Counter', desc: 'Count and optimize hashtags for Instagram and Twitter.', href: '/hashtag-counter', gradient: 'from-pink-500 to-rose-600' },
  { title: 'Thread Counter', desc: 'Plan and split Twitter/X threads before posting.', href: '/twitter-thread-counter', gradient: 'from-slate-500 to-zinc-600' },
]

const converters = [
  { title: 'Words to Pages', desc: 'Convert any word count to pages instantly.', href: '/words-to-pages', count: '22 converters' },
  { title: 'Words Per Page', desc: 'Calculate words per page for any font and spacing.', href: '/words-per-page', count: 'All formats' },
  { title: 'Character Limits', desc: 'Character limits for every social media platform.', href: '/character-limits', count: '21 platforms' },
  { title: 'Speech Calculator', desc: 'How many words for any speech length.', href: '/words-per-minute/speech', count: '20 durations' },
]

const guides = [
  { title: 'Word Count Guides', desc: 'How many words for essays, resumes, dissertations and 45+ document types.', href: '/word-count/for', count: '48 guides' },
  { title: 'Language Counters', desc: 'Word counter for Spanish, French, German, Chinese, Japanese and 10 more.', href: '/word-counter/language', count: '15 languages' },
  { title: 'Reading Time Guide', desc: 'How long to read 100 to 100,000 words at any speed.', href: '/reading-time/for', count: '37 calculations' },
  { title: 'Writing Blog', desc: 'SEO tips, word count guides, writing advice updated for 2026.', href: '/blog', count: '51 articles' },
]

export const metadata = {
  title: 'Free Word Counter & SEO Writing Tools | WordCounterTool.net',
  description: 'Free online word counter, character counter, readability checker, keyword density analyzer, and 250+ writing tools. No sign up required. Instant results.',
  alternates: { canonical: 'https://www.wordcountertool.net' },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16,185,129,0.08), transparent)' }} />
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide"
                style={{ background: 'rgba(52,211,153,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.15)' }}>
                250+ FREE TOOLS &amp; GUIDES
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Write Better.<br />
                <span style={{ background: 'linear-gradient(135deg, #34d399, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rank Higher.</span>
              </h1>
              <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed mb-6">
                Free word counter, SEO analyzer, readability checker and 250+ writing tools. No sign up. No limits. Instant results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/word-counter"
                  className="px-8 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  Open Word Counter
                </Link>
                <Link href="/blog"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                  Read the Blog
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {[
                ['250+', 'Free Pages'],
                ['11', 'Pro Tools'],
                ['15', 'Languages'],
                ['4.9/5', 'User Rating'],
              ].map(([num, label], i) => (
                <div key={i} className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-xl md:text-2xl font-extrabold text-emerald-400">{num}</div>
                  <div className="text-slate-500 text-[11px] mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AdUnit slot="3763639977" />


        {/* WRITING TOOLS */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Writing Tools</h2>
              <p className="text-slate-500 text-sm mt-1">Count, analyze, and improve your writing</p>
            </div>
            <Link href="/word-counter" className="text-emerald-400 text-sm font-semibold hover:underline hidden sm:block">View all tools</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {writingTools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit slot="3248634657" />


        {/* SEO TOOLS */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">SEO Tools</h2>
              <p className="text-slate-500 text-sm mt-1">Optimize your content for search engines</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoTools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CONVERTERS */}
        <section className="py-14" style={{ background: 'rgba(52,211,153,0.02)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Converters & Calculators</h2>
              <p className="text-slate-500 text-sm mt-2">Instantly convert between words, pages, minutes, and characters</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {converters.map(c => (
                <Link key={c.href} href={c.href}
                  className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(52,211,153,0.1)' }}>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{c.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: 'rgba(52,211,153,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.15)' }}>
                    {c.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AdUnit slot="3763639977" />


        {/* GUIDES & RESOURCES */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Guides & Resources</h2>
            <p className="text-slate-500 text-sm mt-2">In-depth word count guides, language tools, and writing tips</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guides.map(g => (
              <Link key={g.href} href={g.href}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">{g.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{g.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.15)' }}>
                  {g.count}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <div className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(5,150,105,0.04))', border: '1px solid rgba(52,211,153,0.15)' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Start Counting Words Free</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of writers, students, and SEO professionals who use our free tools every day. No sign up, no limits, no cost.
            </p>
            <Link href="/word-counter"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              Open Word Counter
            </Link>
          </div>
        </section>

        <AdUnit slot="3248634657" />

      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"WordCounterTool.net","applicationCategory":"UtilityApplication","operatingSystem":"Web","url":"https://www.wordcountertool.net","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"}]})}} />
      
      {/* Data & Reference Pages */}
      <div style={{maxWidth:1100,margin:'0 auto',padding:'48px 16px'}}>
        <h2 style={{fontSize:'clamp(22px,3vw,30px)',fontWeight:900,color:'#fff',textAlign:'center',margin:'0 0 8px'}}>Data & Reference</h2>
        <p style={{color:'#94a3b8',textAlign:'center',margin:'0 0 28px',fontSize:14}}>Popular writing and language data — free to reference and cite</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))',gap:10}}>
          <a href="/word-count-popular-books" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#10b981'}}>Book Word Counts</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Harry Potter, LOTR, Bible & 50+ books</div>
          </a>
          <a href="/social-media-character-limits" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(59,130,246,0.06)',border:'1px solid rgba(59,130,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#3b82f6'}}>Character Limits 2026</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Twitter, Instagram, TikTok & more</div>
          </a>
          <a href="/most-common-english-words" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(240,200,66,0.06)',border:'1px solid rgba(240,200,66,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#f0c842'}}>1,000 Common Words</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Most used English words ranked</div>
          </a>
          <a href="/most-spoken-languages-in-the-world" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#8b5cf6'}}>World Languages</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Top 30 languages by speakers</div>
          </a>
          <a href="/essay-word-count-guide" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#10b981'}}>Essay Length Guide</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Word counts for every essay type</div>
          </a>
          <a href="/social-media-image-sizes" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(59,130,246,0.06)',border:'1px solid rgba(59,130,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#3b82f6'}}>Image Sizes 2026</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Every platform dimensions</div>
          </a>
          <a href="/average-reading-speed-by-age" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(240,200,66,0.06)',border:'1px solid rgba(240,200,66,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#f0c842'}}>Reading Speed Data</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>WPM by age, grade & education</div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
