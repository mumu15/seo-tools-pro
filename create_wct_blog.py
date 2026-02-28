import os

base = r"."

# ─── BLOG INDEX PAGE ───────────────────────────────────────────────────────────
blog_dir = os.path.join(base, "app", "blog")
os.makedirs(blog_dir, exist_ok=True)

posts = [
    { "slug": "how-many-words-per-page", "title": "How Many Words Per Page? Complete Guide (2024)", "description": "Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.", "date": "2024-01-15", "keyword": "how many words per page" },
    { "slug": "ideal-blog-post-length-for-seo", "title": "Ideal Blog Post Length for SEO in 2024", "description": "Discover the perfect blog post length for ranking on Google in 2024. Data driven analysis of word counts that rank on page 1.", "date": "2024-01-18", "keyword": "ideal blog post length for SEO" },
    { "slug": "how-to-improve-readability-score", "title": "How to Improve Your Readability Score (Flesch-Kincaid Guide)", "description": "Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier to read.", "date": "2024-01-20", "keyword": "how to improve readability score" },
    { "slug": "how-many-words-in-a-novel", "title": "How Many Words in a Novel? Word Counts for Every Genre", "description": "Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.", "date": "2024-01-22", "keyword": "how many words in a novel" },
    { "slug": "what-is-keyword-density", "title": "What is Keyword Density? The Complete SEO Guide (2024)", "description": "Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without keyword stuffing.", "date": "2024-01-25", "keyword": "what is keyword density" },
    { "slug": "how-to-write-meta-descriptions", "title": "How to Write Perfect Meta Descriptions That Get Clicks", "description": "Learn how to write compelling meta descriptions that improve your click through rate from Google search results.", "date": "2024-01-28", "keyword": "how to write meta descriptions" },
    { "slug": "average-reading-speed", "title": "Average Reading Speed: How Fast Do People Read?", "description": "Discover the average reading speed for adults, children and speed readers. Learn how to calculate and improve your reading speed.", "date": "2024-02-01", "keyword": "average reading speed" },
    { "slug": "how-many-hashtags-to-use", "title": "How Many Hashtags to Use on Instagram, Twitter and LinkedIn", "description": "Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement.", "date": "2024-02-05", "keyword": "how many hashtags to use" },
    { "slug": "how-to-write-twitter-thread", "title": "How to Write a Twitter Thread That Goes Viral", "description": "Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length and content.", "date": "2024-02-08", "keyword": "how to write a twitter thread" },
    { "slug": "average-typing-speed", "title": "Average Typing Speed: What is Good WPM in 2024?", "description": "Find out what the average typing speed is in words per minute and how your speed compares. Includes tips to type faster.", "date": "2024-02-10", "keyword": "average typing speed words per minute" },
    { "slug": "how-to-count-words-online", "title": "How to Count Words Online: The Complete Guide", "description": "Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools.", "date": "2024-02-12", "keyword": "how to count words online" },
]

blog_index = '''import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const posts = ''' + str(posts).replace("True", "true").replace("False", "false") + '''

export const metadata = {
  title: 'Blog – Writing & SEO Tips | WordCounterTool.net',
  description: 'Free guides and tips on word counts, SEO writing, readability, keyword density and more. Expert advice for bloggers and content writers.',
}

export default function Blog() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Writing & SEO Blog</h1>
          <p className="text-slate-400 text-lg">Expert guides on word counts, SEO writing, readability and more</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="result-box hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-xs text-emerald-400 mb-2">{post.date}</div>
              <h2 className="text-white font-display font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{post.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium">Read article →</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
'''

with open(os.path.join(blog_dir, "page.js"), "w", encoding="utf-8") as f:
    f.write(blog_index)
print("✅ Blog index created")

# ─── BLOG POST TEMPLATE HELPER ─────────────────────────────────────────────────
def create_post(slug, title, meta_desc, keyword, content_jsx):
    post_dir = os.path.join(base, "app", "blog", slug)
    os.makedirs(post_dir, exist_ok=True)
    page = f'''import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {{
  title: '{title}',
  description: '{meta_desc}',
}}

{content_jsx}
'''
    with open(os.path.join(post_dir, "page.js"), "w", encoding="utf-8") as f:
        f.write(page)
    print(f"✅ {slug} created")

# ─── POST 1: HOW MANY WORDS PER PAGE ──────────────────────────────────────────
create_post(
    "how-many-words-per-page",
    "How Many Words Per Page? Complete Guide (2024)",
    "Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.",
    "how many words per page",
    '''const faqs = [
  { q: "How many words is a double spaced page?", a: "A double spaced page with 12pt Times New Roman font contains approximately 250-275 words. With 12pt Arial it is approximately 270-300 words." },
  { q: "How many pages is 1000 words double spaced?", a: "1000 words double spaced with 12pt Times New Roman is approximately 4 pages. With Arial or Calibri it may be slightly fewer pages." },
  { q: "How many words is a single spaced page?", a: "A single spaced page contains approximately 500-550 words with 12pt Times New Roman and standard 1 inch margins." },
  { q: "How many pages is 500 words?", a: "500 words is approximately 2 pages double spaced or 1 page single spaced with 12pt font and standard margins." },
  { q: "How many pages is 2000 words?", a: "2000 words is approximately 8 pages double spaced or 4 pages single spaced with 12pt font." },
]

export default function HowManyWordsPerPage() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link>
        </div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words Per Page? Complete Guide (2024)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 8 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard double spaced page contains <strong>250-275 words</strong> with 12pt Times New Roman. A single spaced page contains <strong>500-550 words</strong>.</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page by Font and Spacing</h2>
              <p className="text-slate-400 leading-relaxed">The number of words per page depends on four main factors: font type, font size, line spacing and margins. Here are the most common combinations used in academic and professional writing.</p>
              <div className="result-box mt-4">
                <h3 className="text-white font-bold mb-3">Double Spaced (Standard Essay Format)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Font</th><th className="text-left text-slate-400 py-2 pr-4">Size</th><th className="text-left text-emerald-400 py-2">Words Per Page</th></tr></thead>
                    <tbody>
                      {[["Times New Roman","12pt","250-275"],["Arial","12pt","270-300"],["Calibri","11pt","290-310"],["Courier New","12pt","220-240"],["Georgia","12pt","250-270"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-400 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="result-box mt-4">
                <h3 className="text-white font-bold mb-3">Single Spaced</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Font</th><th className="text-left text-slate-400 py-2 pr-4">Size</th><th className="text-left text-emerald-400 py-2">Words Per Page</th></tr></thead>
                    <tbody>
                      {[["Times New Roman","12pt","500-550"],["Arial","12pt","550-600"],["Calibri","11pt","580-620"],["Courier New","12pt","440-480"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-400 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count to Pages Conversion Table</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use this quick reference table to convert any word count to pages. These estimates are based on 12pt Times New Roman with standard 1 inch margins.</p>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Double Spaced</th><th className="text-left text-emerald-400 py-2">Single Spaced</th></tr></thead>
                    <tbody>
                      {[["250 words","1 page","½ page"],["500 words","2 pages","1 page"],["750 words","3 pages","1½ pages"],["1000 words","4 pages","2 pages"],["1500 words","6 pages","3 pages"],["2000 words","8 pages","4 pages"],["2500 words","10 pages","5 pages"],["3000 words","12 pages","6 pages"],["5000 words","20 pages","10 pages"],["10000 words","40 pages","20 pages"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Common Assignment Word Counts</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Here are common academic assignments and their approximate page counts.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {title:"High School Essay",words:"500-800 words",pages:"2-3 pages double spaced"},
                  {title:"College Essay",words:"1000-1500 words",pages:"4-6 pages double spaced"},
                  {title:"Research Paper",words:"3000-5000 words",pages:"12-20 pages double spaced"},
                  {title:"Master\'s Thesis",words:"15000-25000 words",pages:"60-100 pages"},
                  {title:"PhD Dissertation",words:"80000-100000 words",pages:"200-300 pages"},
                  {title:"Short Story",words:"1000-7500 words",pages:"4-30 pages"},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-emerald-400 text-sm">{item.words}</p>
                    <p className="text-slate-500 text-xs mt-1">{item.pages}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">What Affects Words Per Page?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Several factors affect how many words fit on a page. Understanding these will help you format your document correctly.</p>
              <div className="space-y-4">
                {[
                  {title:"Font Type",desc:"Serif fonts like Times New Roman are slightly more compact than sans-serif fonts like Arial. Monospace fonts like Courier New have the fewest words per page."},
                  {title:"Font Size",desc:"The standard academic font size is 12pt. Every point increase or decrease significantly changes the words per page. A 10pt font fits around 25% more words than 12pt."},
                  {title:"Line Spacing",desc:"Double spacing is standard for most academic papers. Single spacing fits twice as many words per page. 1.5 spacing falls in between."},
                  {title:"Margins",desc:"Standard margins are 1 inch on all sides. Wider margins mean fewer words per page. Some professors require 1.5 inch margins which significantly reduces the word count per page."},
                  {title:"Paragraph Spacing",desc:"Extra spacing between paragraphs reduces words per page. Some word processors add extra space after each paragraph by default."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Use Our Free Words Per Page Calculator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Instead of estimating, use our free calculator to get an exact word count to pages conversion based on your specific font, font size and spacing settings.</p>
              <Link href="/words-per-page" className="btn-primary inline-block px-6 py-3">Try the Words Per Page Calculator →</Link>
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
}'''
)

# ─── POST 2: IDEAL BLOG POST LENGTH ───────────────────────────────────────────
create_post(
    "ideal-blog-post-length-for-seo",
    "Ideal Blog Post Length for SEO in 2024",
    "Discover the perfect blog post length for ranking on Google in 2024. Data driven analysis of word counts that rank on page 1.",
    "ideal blog post length for SEO",
    '''const faqs = [
  { q: "What is the ideal blog post length for SEO?", a: "The ideal blog post length for SEO is 1500-2500 words for most topics. Competitive topics may require 3000+ words to rank on page 1 of Google." },
  { q: "Do longer blog posts rank better on Google?", a: "Generally yes. Studies show that the average page 1 Google result contains around 1900 words. However length alone does not guarantee rankings — quality and relevance matter more." },
  { q: "Is 500 words enough for a blog post?", a: "500 words is rarely enough to rank for competitive keywords. Short posts of 300-500 words can rank for very low competition keywords but most topics need at least 1000-1500 words." },
  { q: "How long should a blog post title be?", a: "Blog post titles should be 50-60 characters long for best SEO results. This ensures the title is not cut off in Google search results." },
  { q: "How often should I publish blog posts?", a: "Quality beats quantity. Publishing 1-2 high quality posts per week is better than publishing daily low quality content. Consistency matters more than frequency." },
]

export default function IdealBlogPostLength() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Ideal Blog Post Length for SEO in 2024</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 9 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The ideal blog post length for SEO is <strong>1500-2500 words</strong>. The average page 1 Google result contains around <strong>1900 words</strong>.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">What the Data Says About Blog Post Length</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Multiple studies have analyzed the relationship between content length and Google rankings. Here is what the data consistently shows.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {stat:"1900 words",desc:"Average word count of page 1 Google results"},
                  {stat:"2000-2500",desc:"Optimal range for most competitive keywords"},
                  {stat:"3x more",desc:"Long form content gets 3x more backlinks than short content"},
                ].map((item,i) => (
                  <div key={i} className="stat-card text-center">
                    <div className="text-2xl font-display font-bold text-emerald-400 mb-2">{item.stat}</div>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Recommended Word Counts by Content Type</h2>
              <div className="space-y-3">
                {[
                  {type:"News articles",range:"300-500 words",note:"Timely, concise, factual"},
                  {type:"Product pages",range:"500-1000 words",note:"Enough to answer buyer questions"},
                  {type:"Standard blog posts",range:"1000-1500 words",note:"Good for low competition keywords"},
                  {type:"SEO focused blog posts",range:"1500-2500 words",note:"Ideal for most keywords"},
                  {type:"Pillar content / guides",range:"3000-5000 words",note:"For competitive head terms"},
                  {type:"Ultimate guides",range:"5000-10000 words",note:"For highest competition keywords"},
                ].map((item,i) => (
                  <div key={i} className="result-box flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold">{item.type}</h3>
                      <p className="text-slate-500 text-xs mt-1">{item.note}</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm">{item.range}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Why Longer Content Ranks Better</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Longer content tends to rank better for several reasons that align with what Google values.</p>
              <div className="space-y-3">
                {[
                  {title:"Covers topics more comprehensively",desc:"Google rewards content that fully answers a search query. Longer posts have more room to cover subtopics, answer follow up questions and provide more value."},
                  {title:"Attracts more backlinks",desc:"Comprehensive guides and long form content naturally attract more backlinks from other websites because they serve as authoritative references."},
                  {title:"Keeps readers on page longer",desc:"Longer posts increase time on page and reduce bounce rate, both of which are positive signals to Google that your content is engaging and valuable."},
                  {title:"Targets more keywords naturally",desc:"A 2000 word article naturally includes more semantic keywords and related terms than a 500 word post, helping you rank for more search queries."},
                  {title:"Performs better on social media",desc:"Long form content gets shared significantly more on social media than short posts, increasing your content reach and potential for backlinks."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Quality vs Quantity — What Really Matters</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Length alone will not get you to page 1. Google has become very good at identifying thin or padded content that is long but not actually useful. Here is what truly matters for ranking.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {title:"Search intent match",desc:"Your content must match what the searcher is actually looking for. If someone searches for a quick answer, a 5000 word essay may hurt your rankings."},
                  {title:"Expertise and accuracy",desc:"Google rewards content written by people who demonstrate expertise on a topic. Accurate, well researched content outperforms vague or inaccurate content."},
                  {title:"User experience",desc:"Easy to read formatting, clear headings, bullet points and images keep readers engaged. A poorly formatted 3000 word post performs worse than a well formatted 1500 word post."},
                  {title:"Freshness",desc:"Keeping content updated with current information signals to Google that your content is maintained and accurate. Update your top posts every 6-12 months."},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Check Your Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free word counter to instantly check the word count of any blog post before publishing. You can paste your content and see your word count, reading time, readability score and more.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Check Your Word Count Free →</Link>
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
}'''
)

# ─── POST 3: HOW TO IMPROVE READABILITY ───────────────────────────────────────
create_post(
    "how-to-improve-readability-score",
    "How to Improve Your Readability Score (Flesch-Kincaid Guide)",
    "Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier to read and rank better on Google.",
    "how to improve readability score",
    '''const faqs = [
  { q: "What is a good Flesch-Kincaid readability score?", a: "For most web content and blog posts, aim for a Flesch-Kincaid Reading Ease score of 60-70. This is readable by 7th to 8th graders and the widest possible audience." },
  { q: "How do I check my readability score?", a: "Use a free online readability checker tool. Paste your text and instantly get your Flesch-Kincaid Reading Ease score along with grade level and suggestions for improvement." },
  { q: "Does readability affect SEO?", a: "Yes. Google uses engagement signals like time on page and bounce rate to assess content quality. Easier to read content keeps readers on page longer which improves your SEO performance." },
  { q: "What makes content hard to read?", a: "Long sentences, complex words, large blocks of text, passive voice, technical jargon and poor formatting all make content harder to read and lower your readability score." },
  { q: "What reading level should I write for?", a: "For general web content write at a 6th to 8th grade reading level. This does not mean dumbing down your content — it means expressing ideas clearly and simply." },
]

export default function HowToImproveReadabilityScore() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Improve Your Readability Score</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 10 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Improve your readability score by using <strong>shorter sentences</strong>, <strong>simpler words</strong>, <strong>active voice</strong>, and <strong>clear paragraph breaks</strong>. Aim for a Flesch-Kincaid score of <strong>60-70</strong>.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Understanding Flesch-Kincaid Scores</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The Flesch-Kincaid Reading Ease formula scores content on a scale of 0 to 100. Higher scores mean easier to read content.</p>
              <div className="result-box">
                <div className="space-y-2">
                  {[
                    {range:"90-100",level:"Very Easy",example:"5th grade, comic books"},
                    {range:"70-90",level:"Easy",example:"6th grade, popular fiction"},
                    {range:"60-70",level:"Standard",example:"7th-8th grade, ideal for web"},
                    {range:"50-60",level:"Fairly Difficult",example:"High school level"},
                    {range:"30-50",level:"Difficult",example:"College level"},
                    {range:"0-30",level:"Very Difficult",example:"Academic journals"},
                  ].map((item,i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}>
                      <span className="text-emerald-400 font-mono text-sm">{item.range}</span>
                      <span className="text-white font-medium text-sm">{item.level}</span>
                      <span className="text-slate-500 text-xs">{item.example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">10 Proven Ways to Improve Your Readability Score</h2>
              <div className="space-y-4">
                {[
                  {num:"1",title:"Use Shorter Sentences",desc:"The single biggest factor in readability is sentence length. Aim for an average of 15-20 words per sentence. Vary your sentence length — mix short punchy sentences with slightly longer ones — but keep the average under 20 words.",tip:"Tip: If a sentence has more than 25 words, split it into two sentences."},
                  {num:"2",title:"Choose Simpler Words",desc:"Replace complex words with simpler alternatives. Say 'use' instead of 'utilize'. Say 'help' instead of 'facilitate'. Say 'show' instead of 'demonstrate'. Your readers will understand you better and your score will improve.",tip:"Tip: If you can replace a long word with a shorter one without losing meaning, always do it."},
                  {num:"3",title:"Write in Active Voice",desc:"Active voice is easier to read than passive voice. Active: 'Google ranks your content.' Passive: 'Your content is ranked by Google.' Active voice is more direct, engaging and easier to understand.",tip:"Tip: Look for sentences containing 'is', 'was', 'were', 'been' — these often indicate passive voice."},
                  {num:"4",title:"Break Up Long Paragraphs",desc:"Keep paragraphs to 3-4 sentences maximum for web content. Large blocks of text are visually intimidating and cause readers to skim or leave. Short paragraphs with white space between them are much easier to read.",tip:"Tip: Every paragraph should cover exactly one idea."},
                  {num:"5",title:"Use Bullet Points and Lists",desc:"Lists are much easier to read than sentences packed with multiple items. Instead of writing 'You need to improve sentence length, word choice, paragraph structure, and formatting' — use a bulleted list.",tip:"Tip: Any time you list 3 or more items, use a bullet point list."},
                  {num:"6",title:"Add Clear Headings",desc:"Headings break your content into scannable sections. Most readers scan content before deciding whether to read it. Clear descriptive headings help readers find what they need quickly and keep them on your page longer.",tip:"Tip: Use H2 for main sections and H3 for subsections. Make headings descriptive not clever."},
                  {num:"7",title:"Avoid Jargon and Technical Terms",desc:"Unless your audience is experts in your field, avoid technical jargon. When you must use a technical term, explain it in simple language immediately after.",tip:"Tip: Write as if you are explaining the topic to a smart friend who is not an expert."},
                  {num:"8",title:"Use Transition Words",desc:"Transition words like 'however', 'therefore', 'in addition', 'for example' help readers follow your logic and make your content flow more smoothly.",tip:"Tip: Aim for transition words in at least 30% of your sentences."},
                  {num:"9",title:"Read Your Content Aloud",desc:"Reading your content aloud is one of the best editing techniques. If you stumble over a sentence when reading it aloud, your readers will too. Rewrite any sentence that feels awkward to speak.",tip:"Tip: Record yourself reading and listen back. Problem sentences become very obvious."},
                  {num:"10",title:"Use Contractions",desc:"Contractions make your writing feel more natural and conversational. Write 'it's' instead of 'it is'. Write 'you'll' instead of 'you will'. This reduces word complexity and improves your readability score.",tip:"Tip: Avoid contractions only in very formal writing like legal or academic documents."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                      <div>
                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-2">{item.desc}</p>
                        <p className="text-emerald-400 text-xs italic">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Readability Score for Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free readability checker to instantly analyze your content and get your Flesch-Kincaid score along with specific recommendations to improve it.</p>
              <Link href="/readability-checker" className="btn-primary inline-block px-6 py-3">Check Readability Score Free →</Link>
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
}'''
)

# ─── POST 4: HOW MANY WORDS IN A NOVEL ────────────────────────────────────────
create_post(
    "how-many-words-in-a-novel",
    "How Many Words in a Novel? Word Counts for Every Genre",
    "Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.",
    "how many words in a novel",
    '''const faqs = [
  { q: "How many words is a novel?", a: "A standard novel is 70,000-100,000 words. Literary fiction tends to run longer at 80,000-110,000 words while genre fiction like thrillers and romance are typically 70,000-90,000 words." },
  { q: "How many words is a short story?", a: "A short story is typically 1,000-7,500 words. Flash fiction is under 1,000 words. A novelette is 7,500-17,500 words and a novella is 17,500-40,000 words." },
  { q: "How many words is Harry Potter?", a: "Harry Potter and the Philosopher\'s Stone is approximately 77,000 words. The entire Harry Potter series is over 1 million words with The Order of the Phoenix being the longest at around 257,000 words." },
  { q: "How long does it take to write a novel?", a: "Most authors take 6 months to 2 years to write a first draft. At 1000 words per day it would take approximately 70-100 days to write a first draft of a standard novel." },
  { q: "What is the minimum word count for a novel?", a: "Publishers generally consider anything over 40,000 words a novel, though most require at least 50,000-60,000 words. The standard minimum for most major publishers is 70,000 words." },
]

export default function HowManyWordsInANovel() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words in a Novel? Word Counts for Every Genre</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 8 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard novel is <strong>70,000-100,000 words</strong>. Short stories are <strong>1,000-7,500 words</strong>. Novellas are <strong>17,500-40,000 words</strong>.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Fiction Format</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Format</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[
                        ["Flash Fiction","Under 1,000 words"],
                        ["Short Story","1,000 – 7,500 words"],
                        ["Novelette","7,500 – 17,500 words"],
                        ["Novella","17,500 – 40,000 words"],
                        ["Short Novel","40,000 – 70,000 words"],
                        ["Standard Novel","70,000 – 100,000 words"],
                        ["Long Novel","100,000 – 150,000 words"],
                        ["Epic Novel","150,000+ words"],
                      ].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Genre</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different genres have different expected word counts. Publishing industry standards vary by genre and knowing the right range is important if you are submitting to agents or publishers.</p>
              <div className="space-y-3">
                {[
                  {genre:"Literary Fiction",range:"80,000 – 110,000 words",note:"Can run longer if the prose justifies it"},
                  {genre:"Mystery / Thriller",range:"70,000 – 90,000 words",note:"Pacing is key — keep it tight"},
                  {genre:"Romance",range:"70,000 – 90,000 words",note:"Category romance 50,000-60,000 words"},
                  {genre:"Science Fiction / Fantasy",range:"90,000 – 120,000 words",note:"World building requires more words"},
                  {genre:"Young Adult (YA)",range:"60,000 – 90,000 words",note:"Upper YA can reach 100,000 words"},
                  {genre:"Middle Grade",range:"20,000 – 55,000 words",note:"Ages 8-12, shorter is better"},
                  {genre:"Children\'s Picture Books",range:"500 – 1,000 words",note:"Less is more for young readers"},
                  {genre:"Horror",range:"70,000 – 100,000 words",note:"Atmosphere requires space to build"},
                  {genre:"Historical Fiction",range:"90,000 – 110,000 words",note:"Research and detail add length"},
                  {genre:"Non-Fiction",range:"50,000 – 80,000 words",note:"Depends heavily on subject matter"},
                ].map((item,i) => (
                  <div key={i} className="result-box flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold">{item.genre}</h3>
                      <p className="text-slate-500 text-xs mt-1">{item.note}</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm text-right">{item.range}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Famous Novel Word Counts</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Novel</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[
                        ["The Great Gatsby","47,094"],
                        ["The Hunger Games","99,750"],
                        ["Harry Potter and the Philosopher\'s Stone","77,325"],
                        ["Lord of the Rings (full trilogy)","576,459"],
                        ["Gone with the Wind","418,053"],
                        ["War and Peace","580,000"],
                        ["Crime and Punishment","211,591"],
                        ["To Kill a Mockingbird","100,388"],
                      ].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How Long Does It Take to Write a Novel?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">At a consistent daily writing pace here is how long it would take to complete a first draft.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {pace:"500 words/day",time80k:"160 days (5.3 months)",time100k:"200 days (6.7 months)"},
                  {pace:"1000 words/day",time80k:"80 days (2.7 months)",time100k:"100 days (3.3 months)"},
                  {pace:"2000 words/day",time80k:"40 days (1.3 months)",time100k:"50 days (1.7 months)"},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <div className="text-emerald-400 font-bold mb-2">{item.pace}</div>
                    <p className="text-slate-400 text-xs">80k novel: {item.time80k}</p>
                    <p className="text-slate-400 text-xs">100k novel: {item.time100k}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Track Your Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free word counter to track your daily writing progress and see how close you are to your novel word count goal.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Count Your Words Free →</Link>
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
}'''
)

# ─── POST 5: WHAT IS KEYWORD DENSITY ──────────────────────────────────────────
create_post(
    "what-is-keyword-density",
    "What is Keyword Density? The Complete SEO Guide (2024)",
    "Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without keyword stuffing.",
    "what is keyword density",
    '''const faqs = [
  { q: "What is keyword density?", a: "Keyword density is the percentage of times a keyword appears in your content compared to the total word count. It is calculated by dividing keyword occurrences by total words and multiplying by 100." },
  { q: "What is the ideal keyword density?", a: "The ideal keyword density is 1-2% for your primary keyword. Going above 3% risks being flagged for keyword stuffing by Google which can hurt your rankings." },
  { q: "Does keyword density still matter for SEO?", a: "Keyword density matters less than it did 10 years ago. Modern Google uses semantic understanding and context rather than simple keyword frequency. Focus on natural usage and topical relevance rather than hitting a specific percentage." },
  { q: "What is keyword stuffing?", a: "Keyword stuffing is the practice of unnaturally overloading a page with keywords to manipulate rankings. Google penalizes keyword stuffing. Signs include awkward repetition, keywords in unnatural places and lists of keywords without context." },
  { q: "How do I check keyword density?", a: "Use a free keyword density checker tool. Paste your content and enter your target keyword to instantly see how many times it appears and what percentage of your total word count it represents." },
]

export default function WhatIsKeywordDensity() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What is Keyword Density? The Complete SEO Guide (2024)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 9 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Keyword density is the percentage of times your keyword appears in your content. The ideal keyword density is <strong>1-2%</strong>. Anything above 3% risks keyword stuffing penalties.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Calculate Keyword Density</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The formula for keyword density is simple.</p>
              <div className="result-box text-center">
                <p className="text-emerald-400 font-mono text-lg font-bold">Keyword Density = (Keyword Occurrences ÷ Total Words) × 100</p>
              </div>
              <p className="text-slate-400 leading-relaxed mt-4 mb-4">For example: If your article is 1000 words and your keyword appears 15 times, your keyword density is 15 ÷ 1000 × 100 = <strong className="text-white">1.5%</strong>.</p>
              <div className="result-box">
                <h3 className="text-white font-bold mb-3">Quick Reference</h3>
                <div className="space-y-2">
                  {[
                    {density:"0.5% or less","500w":"2-3 times","1000w":"5 times","2000w":"10 times",status:"Too Low"},
                    {density:"1-2%","500w":"5-10 times","1000w":"10-20 times","2000w":"20-40 times",status:"Ideal"},
                    {density:"2-3%","500w":"10-15 times","1000w":"20-30 times","2000w":"40-60 times",status:"Acceptable"},
                    {density:"3%+","500w":"15+ times","1000w":"30+ times","2000w":"60+ times",status:"Too High"},
                  ].map((row,i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b text-sm" style={{borderColor:"rgba(52,211,153,0.05)"}}>
                      <span className="text-emerald-400 font-bold">{row.density}</span>
                      <span className={`font-medium ${row.status==="Ideal"?"text-emerald-400":row.status==="Too High"?"text-red-400":"text-yellow-400"}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Keyword Density in 2024 — What Really Matters</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Google has moved far beyond simple keyword counting. Here is what modern SEO keyword strategy looks like.</p>
              <div className="space-y-4">
                {[
                  {title:"Semantic Keywords",desc:"Google understands related terms and synonyms. Instead of repeating your exact keyword, use related words and phrases. If your keyword is 'mortgage calculator', also use 'home loan payment', 'monthly mortgage', 'mortgage rates'."},
                  {title:"Topical Coverage",desc:"Google rewards content that comprehensively covers a topic. Cover related subtopics, answer follow up questions and provide context rather than just stuffing your primary keyword."},
                  {title:"Natural Language",desc:"Write for humans first, search engines second. If your keyword appears naturally in the flow of writing at 1-2%, that is perfect. Never force keywords into sentences where they sound unnatural."},
                  {title:"Keyword Placement",desc:"Where your keyword appears matters as much as how often. Include it in your title, H1, first 100 words, at least one H2, and naturally throughout the body. These placements signal relevance to Google."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Signs of Keyword Stuffing to Avoid</h2>
              <div className="space-y-2">
                {[
                  "Repeating the same keyword in every sentence",
                  "Using keywords in sentences where they sound unnatural",
                  "Adding keyword lists or keyword blocks in footers",
                  "Using invisible text with keywords (black text on black background)",
                  "Adding keywords in meta keywords tags excessively",
                  "Using the same keyword in alt text for every image",
                  "Creating multiple pages targeting the same keyword",
                ].map((item,i) => (
                  <div key={i} className="result-box flex items-center gap-3">
                    <span className="text-red-400 text-lg">✗</span>
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Keyword Density Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free keyword density checker to analyze your content and see exactly how your keywords are distributed throughout your text.</p>
              <Link href="/keyword-density" className="btn-primary inline-block px-6 py-3">Check Keyword Density Free →</Link>
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
}'''
)

# ─── UPDATE SITEMAP ────────────────────────────────────────────────────────────
sitemap = '''export default function sitemap() {
  const baseUrl = 'https://www.wordcountertool.net'
  const pages = [
    '',
    '/word-counter',
    '/keyword-density',
    '/meta-tag-generator',
    '/readability-checker',
    '/character-counter',
    '/sentence-counter',
    '/words-per-page',
    '/reading-time',
    '/words-per-minute',
    '/hashtag-counter',
    '/twitter-thread-counter',
    '/blog',
    '/blog/how-many-words-per-page',
    '/blog/ideal-blog-post-length-for-seo',
    '/blog/how-to-improve-readability-score',
    '/blog/how-many-words-in-a-novel',
    '/blog/what-is-keyword-density',
    '/blog/how-to-write-meta-descriptions',
    '/blog/average-reading-speed',
    '/blog/how-many-hashtags-to-use',
    '/blog/how-to-write-twitter-thread',
    '/blog/average-typing-speed',
    '/blog/how-to-count-words-online',
    '/about',
    '/contact',
    '/privacy-policy',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.startsWith('/blog') ? 0.7 : 0.8,
  }))
}
'''
with open(os.path.join(base, "app", "sitemap.js"), "w", encoding="utf-8") as f:
    f.write(sitemap)
print("✅ Sitemap updated")

# ─── UPDATE HEADER WITH BLOG LINK ─────────────────────────────────────────────
header = '''\'use client\'
import { useState } from \'react\'
import Link from \'next/link\'

const tools = [
  { name: \'Word Counter\', href: \'/word-counter\' },
  { name: \'Keyword Density\', href: \'/keyword-density\' },
  { name: \'Meta Tags\', href: \'/meta-tag-generator\' },
  { name: \'Readability\', href: \'/readability-checker\' },
  { name: \'Character Counter\', href: \'/character-counter\' },
  { name: \'Sentence Counter\', href: \'/sentence-counter\' },
  { name: \'Words Per Page\', href: \'/words-per-page\' },
  { name: \'Reading Time\', href: \'/reading-time\' },
  { name: \'WPM Test\', href: \'/words-per-minute\' },
  { name: \'Hashtag Counter\', href: \'/hashtag-counter\' },
  { name: \'Thread Counter\', href: \'/twitter-thread-counter\' },
  { name: \'Blog\', href: \'/blog\' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 z-50" style={{ borderColor: \'rgba(52,211,153,0.1)\', background: \'rgba(3,7,18,0.95)\', backdropFilter: \'blur(10px)\' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xs"
              style={{ background: \'linear-gradient(135deg, #10b981, #34d399)\' }}>W</div>
            <span className="font-display font-bold text-white">WordCounter<span className="text-emerald-400">Tool</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 overflow-x-auto max-w-3xl">
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="text-slate-400 hover:text-white text-xs px-2 py-2 rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap">
                {tool.name}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: \'rgba(52,211,153,0.1)\' }}>
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href} onClick={() => setOpen(false)}
                className="block text-slate-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                {tool.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
'''
with open(os.path.join(base, "components", "Header.js"), "w", encoding="utf-8") as f:
    f.write(header)
print("✅ Header updated with Blog link")

print("\n🎉 All done! Run: git add . && git commit -m 'Add blog section with 5 SEO articles' && git push")
