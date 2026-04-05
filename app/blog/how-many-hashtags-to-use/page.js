import Header from '../../../components/Header'
import { ArticleSchema } from '../../components/AuthorSchema'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-hashtags-to-use' },
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
          <p className="text-slate-400 text-sm mb-8">Published January 2026 · Updated April 2026 · 7 min read</p>
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
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-many-hashtags-to-use.svg" alt="How Many Hashtags To Use — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Hashtags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A hashtag counter can instantly count all hashtags in your post and check platform limits.</p>
              <Link href="/hashtag-counter" className="btn-primary inline-block px-6 py-3">Try the Hashtag Counter Free →</Link>
            </section>

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Hashtag Strategy by Platform (2026 Data)</h2>
            <div className="result-box">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Platform</th><th className="text-left text-emerald-400 py-2 pr-4">Max Allowed</th><th className="text-left text-emerald-400 py-2 pr-4">Optimal Number</th><th className="text-left text-emerald-400 py-2">Placement</th></tr></thead>
                  <tbody>
                    {[['Instagram','30','5-10','In caption or first comment'],['Twitter/X','No limit','1-2','Inline or at end'],['LinkedIn','No limit','3-5','At end of post'],['TikTok','No limit','3-5','In caption'],['Facebook','No limit','1-3','Sparingly'],['Pinterest','20','2-5','In description'],['YouTube','15 in tags','5-10','In description and tags'],['Threads','No limit','2-4','In post']].map((r,i) => (
                      <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">How to Find the Best Hashtags</h2>
            <div className="space-y-3">
              <div className="result-box"><h3 className="text-white font-bold mb-2">The 3-Tier Strategy</h3><p className="text-slate-400 text-sm leading-relaxed">Use a mix of three hashtag sizes: 1-2 large hashtags (1M+ posts) for discovery, 3-4 medium hashtags (100K-1M posts) for targeted reach, and 3-4 small niche hashtags (10K-100K posts) where you can actually rank and be seen. This layered approach maximizes both reach and visibility.</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Research Competitors</h3><p className="text-slate-400 text-sm leading-relaxed">Look at the hashtags used by top-performing accounts in your niche. Tools like Hashtagify and RiteTag can identify trending and related hashtags. Save sets of 10-15 hashtags for different content themes so you are not starting from scratch each time.</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Create a Branded Hashtag</h3><p className="text-slate-400 text-sm leading-relaxed">A unique branded hashtag builds community and makes your content trackable. Nike uses #JustDoIt, which has generated billions of impressions from user-generated content. Even small brands benefit — a branded hashtag creates a collection of all content related to your business.</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Avoid Banned and Spammy Hashtags</h3><p className="text-slate-400 text-sm leading-relaxed">Instagram regularly bans hashtags that are associated with spam or inappropriate content. Using a banned hashtag can shadowban your entire post, reducing reach to near zero. Check if a hashtag is active by searching it — if no recent posts appear, it may be banned. Also avoid generic tags like #followforfollow which attract bots, not real followers.</p></div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Hashtag Mistakes That Kill Reach</h2>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Using the same hashtags every post:</strong> Instagram algorithm treats this as spammy behavior. Rotate your hashtag sets and use different combinations for different content types. Keep 3-5 saved sets and alternate between them.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Only using mega-popular hashtags:</strong> A hashtag with 500M+ posts means your content is buried within seconds. Your post is competing against thousands of new posts per minute. Mix in smaller, more targeted hashtags where your content can actually be discovered.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Irrelevant hashtags:</strong> Using trending but unrelated hashtags might get initial impressions but destroys engagement rate. The algorithm notices when people see your post via a hashtag but do not engage — this trains the algorithm to show your content to fewer people over time.</p>
          </section>
          <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Platform limits change constantly</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">We check these numbers monthly because platforms update their limits without much fanfare. Twitter went from 140 to 280 characters. LinkedIn keeps adjusting what counts toward its limits. TikTok has expanded captions multiple times.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">The character limit is not the same as the ideal length. Instagram allows 2,200 characters in a caption, but the data shows captions between 138-150 characters get the highest engagement rate. The limit is a ceiling, not a target.</p>
            <p className="text-slate-400 text-sm leading-relaxed">One thing that does not change: the first line matters most. On every platform, some portion of your text gets truncated behind a "more" link. Front-load the hook.</p>
          </section>
</section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/hashtag-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Hashtag Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-limits/instagram" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Instagram Limits</a>
          </div>
        </div>
      <Footer />
    </>
  )
}