import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tools = [
  {
    href: '/word-counter',
    icon: '📝',
    title: 'Word Counter',
    description: 'Count words, characters, sentences and paragraphs instantly. Perfect for essays, articles and social media posts.',
    tags: ['Writing', 'Free'],
  },
  {
    href: '/keyword-density',
    icon: '🔍',
    title: 'Keyword Density Checker',
    description: 'Analyze keyword frequency and density in your content. Optimize your text for better SEO rankings.',
    tags: ['SEO', 'Free'],
  },
  {
    href: '/meta-tag-generator',
    icon: '🏷️',
    title: 'Meta Tag Generator',
    description: 'Generate perfect meta titles and descriptions for your web pages. Preview how they appear in Google search results.',
    tags: ['SEO', 'Free'],
  },
  {
    href: '/readability-checker',
    icon: '📖',
    title: 'Readability Checker',
    description: 'Check the readability score of your content using Flesch-Kincaid formula. Make your writing clearer.',
    tags: ['Writing', 'Free'],
  },
  {
    href: '/character-counter',
    icon: '🔤',
    title: 'Character Counter',
    description: 'Count characters with and without spaces. Essential for Twitter, Instagram bios, SMS and meta descriptions.',
    tags: ['Writing', 'Free'],
  },
  {
    href: '/sentence-counter',
    icon: '📊',
    title: 'Sentence Counter',
    description: 'Count sentences and analyze average sentence length. Improve your writing structure and flow.',
    tags: ['Writing', 'Free'],
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5"
              style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }} />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-800 border border-emerald-500 border-opacity-20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">100% Free — No Sign Up Required</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Free SEO &<br />
              <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Writing Tools
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional tools for bloggers, writers, and marketers. Analyze your content, optimize for SEO, and write better — completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/word-counter" className="btn-primary text-lg px-8 py-4 rounded-xl">
                Try Word Counter →
              </Link>
              <Link href="/keyword-density" className="btn-secondary text-lg px-8 py-4 rounded-xl">
                Keyword Density Tool
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '6+', label: 'Free Tools' },
              { value: '100%', label: 'No Sign Up' },
              { value: '∞', label: 'Unlimited Use' },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="text-3xl font-display font-bold text-emerald-400">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            All Free Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.href}>
                <div className="tool-card rounded-2xl p-6 h-full cursor-pointer">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {tool.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-emerald-500 bg-opacity-10 text-emerald-400 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why use section */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="result-box text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Why Use SEOToolsPro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'No loading screens. Results appear as you type.' },
                { icon: '🔒', title: 'Privacy First', desc: 'Your text never leaves your browser. 100% private.' },
                { icon: '📱', title: 'Works Everywhere', desc: 'Desktop, tablet, mobile — works on all devices.' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
