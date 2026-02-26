import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us – WordCounterTool.net',
  description: 'About WordCounterTool.net — free professional word counter and SEO writing tools.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-white mb-4">About Us</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>WordCounterTool.net provides free professional writing and SEO tools for bloggers, writers, students and marketers.</p>
          <p>All tools work instantly in your browser with no sign up required. Your text never leaves your device.</p>
          <p>Contact us at: <a href="/contact" className="text-emerald-400">contact page</a></p>
        </div>
      </main>
      <Footer />
    </>
  )
} 
