import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Us – WordCounterTool.net',
  description: 'Contact WordCounterTool.net — get in touch for feedback or suggestions.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Contact Us</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>Have a suggestion for a new tool? Found a bug? We would love to hear from you!</p>
          <p>📧 Email us at: <span className="text-emerald-400">contact@wordcountertool.net</span></p>
          <h2 className="text-xl font-bold text-white mt-8">FAQ</h2>
          <p><strong className="text-white">Are the tools free?</strong><br/>Yes! All tools are 100% free with no sign up required.</p>
          <p><strong className="text-white">Is my text stored?</strong><br/>No. All processing happens in your browser. We never store your text.</p>
          <p><strong className="text-white">Can I suggest a new tool?</strong><br/>Yes! Send us an email and we will consider adding it.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}