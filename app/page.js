import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tools = [
  {
    title: 'Word Counter',
    description: 'Count words, characters, sentences, paragraphs and reading time instantly.',
    href: '/word-counter',
    icon: '📝',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Keyword Density Checker',
    description: 'Analyze keyword frequency and density to optimize your content for SEO.',
    href: '/keyword-density',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Meta Tag Generator',
    description: 'Generate perfect meta tags for SEO, Facebook and Twitter sharing.',
    href: '/meta-tag-generator',
    icon: '🏷️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Readability Checker',
    description: 'Check your content readability score using the Flesch-Kincaid formula.',
    href: '/readability-checker',
    icon: '📖',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Character Counter',
    description: 'Count characters for Twitter, Instagram, SMS, meta tags and more.',
    href: '/character-counter',
    icon: '🔢',
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Sentence Counter',
    description: 'Count sentences and analyze your writing structure and sentence length.',
    href: '/sentence-counter',
    icon: '📊',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Words Per Page Calculator',
    description: 'Convert word counts to pages or pages to words for any font and spacing.',
    href: '/words-per-page',
    icon: '📄',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Reading Time Calculator',
    description: 'Calculate how long it takes to read any article or text instantly.',
    href: '/reading-time',
    icon: '⏱️',
    color: 'from-cyan-500 to-blue-500',
  },
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
              <h2 className="text-white font-display font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                {tool.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-20 result-box text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Free SEO & Writing Tools</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mx-auto">
            WordCounterTool.net provides free professional writing and SEO tools for students, bloggers, content writers, social media managers and SEO professionals. All tools work instantly in your browser with no sign up, no downloads and no usage limits. Count words, check keyword density, generate meta tags, analyze readability, count characters and more — all completely free.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}