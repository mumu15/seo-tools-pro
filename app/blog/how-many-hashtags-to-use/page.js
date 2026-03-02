import Header from '../../../components/Header'
import AdUnit from '../../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)',
  description: 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement in 2026.',
}

const faqs = [
  { q: 'How many hashtags should I use on Instagram?', a: 'Use 5-10 hashtags on Instagram for best results. Research consistently shows 5-10 highly relevant hashtags outperforms using all 30.' },
  { q: 'How many hashtags should I use on Twitter?', a: 'Use 1-2 hashtags per tweet. Tweets with more than 2 hashtags see a significant drop in engagement.' },
  { q: 'How many hashtags should I use on LinkedIn?', a: 'Use 3-5 hashtags on LinkedIn. More than 5 can reduce post visibility on the platform.' },
  { q: 'Do hashtags still work in 2026?', a: 'Yes but they work best when highly specific and relevant rather than broad and popular.' },
  { q: 'Should I use popular or niche hashtags?', a: 'Use a mix. Aim for 2-3 niche hashtags, 2-3 medium hashtags and 1-2 broad hashtags per post.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Hashtags to Use on Every Platform (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 7 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Instagram: <strong>5-10</strong> | Twitter: <strong>1-2</strong> | LinkedIn: <strong>3-5</strong> | TikTok: <strong>3-5</strong> | Facebook: <strong>2-3</strong></p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Hashtag Best Practices by Platform</h2>
              <div className="space-y-3">
                {[
                  {platform:'Instagram 📸',recommended:'5-10',tip:'Use niche and medium hashtags. Avoid banned hashtags which limit your reach.'},
                  {platform:'Twitter / X',recommended:'1-2',tip:'Research shows 1-2 hashtags gets 21% more engagement than more hashtags.'},
                  {platform:'LinkedIn 💼',recommended:'3-5',tip:'Use professional industry hashtags. Avoid lifestyle or personal tags.'},
                  {platform:'TikTok 🎵',recommended:'3-5',tip:'Always include #fyp. Use trending hashtags relevant to your content.'},
                  {platform:'Facebook 👤',recommended:'2-3',tip:'Hashtags are less important on Facebook. Use sparingly and only when highly relevant.'},
                ].map((item,i)=>(
                  <div key={i} className="result-box">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-bold">{item.platform}</h3>
                      <span className="text-emerald-400 font-bold text-sm">Best: {item.recommended}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.tip}</p>
                  </div>
                ))}
              </div>
            </section>
            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Hashtags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free hashtag counter to instantly count all hashtags in your post and check platform limits.</p>
              <Link href="/hashtag-counter" className="btn-primary inline-block px-6 py-3">Try the Hashtag Counter Free →</Link>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}