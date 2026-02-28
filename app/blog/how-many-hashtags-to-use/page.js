import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)',
  description: 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement in 2024.',
}

const faqs = [
  { q: "How many hashtags should I use on Instagram?", a: "Use 5-10 hashtags on Instagram for best results. While Instagram allows 30 hashtags, research consistently shows that 5-10 highly relevant hashtags outperforms using all 30." },
  { q: "How many hashtags should I use on Twitter?", a: "Use 1-2 hashtags per tweet on Twitter. Tweets with more than 2 hashtags see a significant drop in engagement according to Twitter's own research." },
  { q: "How many hashtags should I use on LinkedIn?", a: "Use 3-5 hashtags on LinkedIn posts. LinkedIn recommends this range for maximum reach. More than 5 hashtags can reduce post visibility on LinkedIn." },
  { q: "Do hashtags still work in 2024?", a: "Yes but their importance has evolved. Instagram and LinkedIn have shifted toward interest-based algorithms. Hashtags now work best when they are highly specific and relevant rather than broad and popular." },
  { q: "Should I use popular or niche hashtags?", a: "Use a mix of both. Popular hashtags have more competition but more reach. Niche hashtags have less competition and more targeted audiences. A good strategy is 2-3 niche hashtags, 2-3 medium hashtags and 1-2 broad hashtags." },
]

export default function HowManyHashtagsToUse() {
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
            <p className="text-white">Instagram: <strong>5-10 hashtags</strong> | Twitter: <strong>1-2 hashtags</strong> | LinkedIn: <strong>3-5 hashtags</strong> | TikTok: <strong>3-5 hashtags</strong> | Facebook: <strong>2-3 hashtags</strong></p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Hashtag Best Practices by Platform</h2>
              <div className="space-y-4">
                {[
                  {platform:"Instagram",icon:"📸",limit:"30 max",recommended:"5-10",tips:["Use a mix of niche and medium sized hashtags","Avoid banned hashtags as they can limit your reach","Research hashtags before using them — check if they are active","Create a branded hashtag for your business","Place hashtags at end of caption or in first comment"]},
                  {platform:"Twitter / X",icon:"𝕏",limit:"No official limit",recommended:"1-2",tips:["Twitter research shows 1-2 hashtags gets 21% more engagement","Place hashtags within the tweet text naturally when possible","Use trending hashtags to join conversations","Avoid hashtag hijacking — only use relevant trending tags","Branded hashtags work well for Twitter chats"]},
                  {platform:"LinkedIn",icon:"💼",limit:"30 max",recommended:"3-5",tips:["Use highly relevant professional hashtags","Mix broad industry tags with niche topic tags","LinkedIn suggests hashtags based on your content","Follow hashtags in your industry to find opportunities","Avoid personal or lifestyle hashtags on LinkedIn"]},
                  {platform:"TikTok",icon:"🎵",limit:"No official limit",recommended:"3-5",tips:["Always include #fyp or #foryou to target the For You page","Use trending hashtags relevant to your content","Niche hashtags help reach your specific target audience","Avoid irrelevant trending hashtags as TikTok penalizes this","Create challenge hashtags to encourage user generated content"]},
                  {platform:"Facebook",icon:"👤",limit:"No official limit",recommended:"2-3",tips:["Hashtags are less important on Facebook than other platforms","Use them sparingly and only when highly relevant","Facebook page posts benefit more from hashtags than personal posts","Follow hashtag conversations to find content opportunities","Group posts with relevant hashtags get more discovery"]},
                ].map((p,i) => (
                  <div key={i} className="result-box">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <h3 className="text-white font-bold">{p.platform}</h3>
                        <p className="text-slate-500 text-xs">Max: {p.limit} | Recommended: <span className="text-emerald-400 font-bold">{p.recommended}</span></p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {p.tips.map((tip,j) => (
                        <li key={j} className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Choose the Right Hashtags</h2>
              <div className="space-y-3">
                {[
                  {title:"Use the 3 tier strategy",desc:"Use a mix of large hashtags (1M+ posts), medium hashtags (100K-1M posts) and small hashtags (10K-100K posts). This maximizes your chances of being seen by both large and targeted audiences."},
                  {title:"Check hashtag size before using",desc:"Very large hashtags like #love (2B+ posts on Instagram) have too much competition. Your post disappears in seconds. Aim for hashtags with 10K-500K posts for the best balance of reach and competition."},
                  {title:"Avoid banned hashtags",desc:"Instagram bans certain hashtags that have been associated with spam or inappropriate content. Using banned hashtags limits the reach of your entire post. Always check if a hashtag is active before using it."},
                  {title:"Research competitor hashtags",desc:"Look at the hashtags your most successful competitors use on each platform. This gives you proven hashtags that work in your niche."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Hashtags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free hashtag counter to instantly count all hashtags in your post and check whether you are within the recommended limits for each platform.</p>
              <Link href="/hashtag-counter" className="btn-primary inline-block px-6 py-3">Try the Hashtag Counter Free →</Link>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
