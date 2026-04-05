import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'

const categories = [
  {
    id: 'word-count',
    name: 'Word Count Guides',
    emoji: '📝',
    desc: 'How many words for essays, blog posts, resumes, and more',
    posts: [
    { slug: 'ebook-word-count-guide', title: 'Ebook Word Count Guide', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '9 min' },
    { slug: 'how-many-words-in-a-blog-post', title: 'How Many Words In A Blog Post', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-college-essay', title: 'How Many Words In A College Essay', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words In A Cover Letter', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-dissertation', title: 'How Many Words In A Dissertation', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words In A Grant Proposal', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-novel', title: 'How Many Words In A Novel', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words In A Paragraph', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words In A Personal Statement', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-podcast-episode', title: 'How Many Words In A Podcast Episode', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-resume', title: 'How Many Words In A Resume', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-short-story', title: 'How Many Words In A Short Story', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-in-a-speech', title: 'How Many Words In A Speech', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'how-many-words-per-page', title: 'How Many Words Per Page', excerpt: 'Complete word count guide with ranges by type and purpose.', readTime: '5 min' },
    { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length For SEO', excerpt: 'Data-backed analysis of the word counts that rank on page 1.', readTime: '9 min' }
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Content Strategy',
    emoji: '🔍',
    desc: 'Keyword density, meta descriptions, and ranking tactics',
    posts: [
    { slug: 'google-ads-character-limits', title: 'Google Ads Character Limits', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-use-keywords-in-blog-posts', title: 'How To Use Keywords In Blog Posts', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-write-meta-descriptions', title: 'How To Write Meta Descriptions', excerpt: 'Write meta tags that improve click-through rates from search.', readTime: '6 min' },
    { slug: 'how-to-write-seo-title-tags', title: 'How To Write SEO Title Tags', excerpt: 'Practical SEO tactics for writers and content creators.', readTime: '6 min' },
    { slug: 'long-tail-keywords-guide', title: 'Long Tail Keywords Guide', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '9 min' },
    { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide', excerpt: 'Practical SEO tactics for writers and content creators.', readTime: '9 min' },
    { slug: 'what-is-keyword-density', title: 'What Is Keyword Density', excerpt: 'What density to aim for, how to check it, and common mistakes.', readTime: '5 min' }
    ],
  },
  {
    id: 'social',
    name: 'Social Media Writing',
    emoji: '📱',
    desc: 'Twitter, Instagram, LinkedIn, TikTok character limits and tips',
    posts: [
    { slug: 'how-long-should-a-youtube-script-be', title: 'How Long Should A YouTube Script Be', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters In A Tweet', excerpt: 'Character limits and best practices for optimal engagement.', readTime: '5 min' },
    { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags To Use', excerpt: 'How many hashtags to use and which ones actually work.', readTime: '5 min' },
    { slug: 'how-to-write-twitter-thread', title: 'How To Write Twitter Thread', excerpt: 'Character limits, thread tips, and engagement strategies.', readTime: '6 min' },
    { slug: 'ideal-linkedin-post-length', title: 'Ideal LinkedIn Post Length', excerpt: 'Post lengths, article tips, and profile optimization.', readTime: '9 min' },
    { slug: 'instagram-caption-length', title: 'Instagram Caption Length', excerpt: 'Caption lengths, hashtag counts, and bio optimization.', readTime: '6 min' },
    { slug: 'tiktok-caption-length-guide', title: 'TikTok Caption Length Guide', excerpt: 'Caption limits, hashtag strategies, and description tips.', readTime: '9 min' },
    { slug: 'twitter-character-limit-2026', title: 'Twitter Character Limit 2026', excerpt: 'Character limits, thread tips, and engagement strategies.', readTime: '6 min' }
    ],
  },
  {
    id: 'writing',
    name: 'Writing Craft',
    emoji: '✍️',
    desc: 'Introductions, conclusions, headlines, and readability',
    posts: [
    { slug: 'how-to-improve-readability-score', title: 'How To Improve Readability Score', excerpt: 'Flesch-Kincaid scores explained with tips to improve yours.', readTime: '6 min' },
    { slug: 'how-to-write-blog-conclusion', title: 'How To Write Blog Conclusion', excerpt: 'End strong with conclusions that drive action.', readTime: '6 min' },
    { slug: 'how-to-write-blog-introduction', title: 'How To Write Blog Introduction', excerpt: 'Hook readers in the first 3 sentences with these techniques.', readTime: '6 min' },
    { slug: 'how-to-write-email-subject-lines', title: 'How To Write Email Subject Lines', excerpt: 'Subject lines and email copy that get opened and read.', readTime: '6 min' },
    { slug: 'how-to-write-faster', title: 'How To Write Faster', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-write-for-skimmable-content', title: 'How To Write For Skimmable Content', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-write-headline-formulas', title: 'How To Write Headline Formulas', excerpt: 'Formulas and examples for headlines that get clicks.', readTime: '6 min' },
    { slug: 'how-to-write-product-descriptions', title: 'How To Write Product Descriptions', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-write-wedding-speech', title: 'How To Write Wedding Speech', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'best-free-writing-tools-2026', title: 'Best Free Writing Tools 2026', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '7 min' },
    { slug: 'email-length-best-practices', title: 'Email Length Best Practices', excerpt: 'Subject lines and email copy that get opened and read.', readTime: '7 min' },
    { slug: 'how-to-count-words-online', title: 'How To Count Words Online', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'how-to-type-faster', title: 'How To Type Faster', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'reddit-post-length', title: 'Reddit Post Length', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'substack-newsletter-length', title: 'Substack Newsletter Length', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch Kincaid Score', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '5 min' }
    ],
  },
  {
    id: 'productivity',
    name: 'Speed & Productivity',
    emoji: '⚡',
    desc: 'Reading speed, typing speed, AI tools, and writing faster',
    posts: [
    { slug: 'average-reading-speed', title: 'Average Reading Speed', excerpt: 'Average WPM by age, tips to read faster, and speed benchmarks.', readTime: '6 min' },
    { slug: 'average-typing-speed', title: 'Average Typing Speed', excerpt: 'Test and improve your typing speed with proven methods.', readTime: '6 min' },
    { slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools 2026', excerpt: 'How AI tools fit into a modern writing workflow.', readTime: '7 min' },
    { slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '6 min' },
    { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading Guide', excerpt: 'Practical guide with examples, benchmarks, and actionable tips.', readTime: '9 min' }
    ],
  }
]

export const metadata = {
  title: 'Writing & SEO Blog | WordCounterTool.net',
  description: '51 free guides on word counting, SEO writing, readability, and content optimization. Expert advice updated for 2026.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  openGraph: {
    title: 'Writing & SEO Blog | WordCounterTool.net',
    description: '51 free guides on writing, SEO, and content strategy.',
    url: 'https://www.wordcountertool.net/blog',
    siteName: 'WordCounterTool.net',
    type: 'website',
  },
}

export default function BlogHub() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: '#0a0d14' }}>
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Writing & SEO Blog</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">51 practical guides on word count, SEO, social media, writing craft, and productivity. No fluff.</p>
          </div>

          {/* Category Quick-Nav Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <a key={cat.id} href={'#' + cat.id}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', color: '#10b981', textDecoration: 'none' }}>
                {cat.emoji} {cat.name} ({cat.posts.length})
              </a>
            ))}
          </div>

          <AdUnit slot="3248634657" />

          {/* Category Sections */}
          {categories.map((cat, ci) => (
            <section key={cat.id} id={cat.id} className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{cat.emoji}</span>
                <h2 className="text-2xl font-extrabold text-white">{cat.name}</h2>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  {cat.posts.length}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-6 ml-10">{cat.desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.posts.map(post => (
                  <Link key={post.slug} href={'/blog/' + post.slug}
                    className="group block rounded-xl p-5 transition-all hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-bold text-sm leading-snug group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{post.excerpt}</p>
                  </Link>
                ))}
              </div>

              {ci === 1 && <div className="mt-6"><AdUnit slot="3248634657" /></div>}
            </section>
          ))}

          {/* Bottom CTA */}
          <div className="text-center rounded-2xl p-8 mt-4" style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <h2 className="text-xl font-extrabold text-white mb-2">Try Our Free Tools</h2>
            <p className="text-slate-500 text-sm mb-5">Word counter, character counter, reading time, and more</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/word-counter" className="px-6 py-2.5 rounded-xl text-white text-sm font-bold" style={{ background: '#10b981' }}>
                Word Counter
              </Link>
              <Link href="/character-counter" className="px-6 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }}>
                Character Counter
              </Link>
              <Link href="/reading-time" className="px-6 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }}>
                Reading Time
              </Link>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        section a:hover { border-color: rgba(16,185,129,0.3) !important; background: rgba(16,185,129,0.04) !important; }
      `}</style>

      <Footer />
    </>
  )
}
