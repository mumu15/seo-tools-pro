import Link from 'next/link'
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

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: '⚡', text: 'Instant Results' },
            { icon: '🔒', text: 'No Sign Up Required' },
            { icon: '💯', text: '100% Free Forever' },
            { icon: '🚫', text: 'No Ads' },
            { icon: '📱', text: 'Works on Mobile' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)', color: '#94a3b8' }}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl border"
          style={{ background: 'rgba(52,211,153,0.03)', borderColor: 'rgba(52,211,153,0.1)' }}>
          {[
            { number: '11', label: 'Free Tools', icon: '🛠️' },
            { number: '50K+', label: 'Monthly Users', icon: '👥' },
            { number: '100%', label: 'Free Forever', icon: '💚' },
            { number: '4.9★', label: 'User Rating', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
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
