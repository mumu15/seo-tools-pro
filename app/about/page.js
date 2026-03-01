import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | WordCounterTool.net',
  description: 'Learn about WordCounterTool.net — free online writing and SEO tools for bloggers, students, writers and content creators.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About WordCounterTool.net</h1>
          <p className="text-slate-400 text-lg">Free writing and SEO tools for everyone</p>
        </div>

        <div className="space-y-8">
          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">WordCounterTool.net was built with one simple goal: give writers, bloggers, students and content creators access to professional writing and SEO tools completely free — no sign up, no credit card, no limits.</p>
            <p className="text-slate-400 leading-relaxed mt-3">We believe that great tools should be accessible to everyone. Whether you are a student checking your essay word count, a blogger optimizing content for SEO or a professional writer tracking your daily output — our tools are here to help.</p>
          </div>

          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '📝', title: 'Word Counter', desc: 'Instant word, character and sentence counting' },
                { icon: '🔍', title: 'Keyword Density', desc: 'SEO keyword analysis and optimization' },
                { icon: '🏷️', title: 'Meta Tag Generator', desc: 'Perfect meta titles and descriptions' },
                { icon: '📖', title: 'Readability Checker', desc: 'Flesch-Kincaid readability scoring' },
                { icon: '⏱️', title: 'Reading Time', desc: 'Estimate reading time for any content' },
                { icon: '⌨️', title: 'WPM Test', desc: 'Test and improve your typing speed' },
                { icon: '#️⃣', title: 'Hashtag Counter', desc: 'Count hashtags for all social platforms' },
                { icon: '🧵', title: 'Thread Counter', desc: 'Plan Twitter threads character by character' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{background:'rgba(52,211,153,0.05)'}}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="space-y-3">
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'All tools work in real time as you type. No waiting, no loading.' },
                { icon: '🔒', title: 'No Sign Up Required', desc: 'Use every tool without creating an account or providing any personal information.' },
                { icon: '💯', title: '100% Free Forever', desc: 'Every tool on our site is completely free. We do not have paid plans or premium tiers.' },
                { icon: '📱', title: 'Works Everywhere', desc: 'Our tools work on desktop, tablet and mobile. No app download required.' },
                { icon: '🛡️', title: 'Privacy Focused', desc: 'We do not store or share your text. Everything is processed in your browser.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-box text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-6">Have a suggestion, found a bug or want to request a new tool? We would love to hear from you.</p>
            <Link href="/contact" className="btn-primary inline-block px-6 py-3">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
