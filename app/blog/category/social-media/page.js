import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/category/social-media' },
  title: 'Social media writing — Writing & SEO Guides | WordCounterTool.net',
  description: 'Character limits, caption lengths, and hashtag strategies for every platform. 13 free guides updated for 2026.',
  openGraph: {
    title: 'Social media writing | WordCounterTool.net Blog',
    description: 'Character limits, caption lengths, and hashtag strategies for every platform.',
    url: 'https://www.wordcountertool.net/blog/category/social-media',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
  { slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length: How Long Should Your Prompts Be? (2026)', desc: 'ChatGPT input limit is ~128,000 tokens. The optimal prompt is 50-500 words. Complete guide to prompt length and structure.', time: 3 },
  { slug: 'email-length-best-practices', title: 'Email Length Best Practices: How Long Should an Email Be? (2026)', desc: 'The ideal email length for business, marketing, cold outreach, and follow-ups. Data shows 50-125 words get the best response rates.', time: 3 },
  { slug: 'google-ads-character-limits', title: 'Google Ads Character Limits 2026: Every Ad Type Explained', desc: 'Complete guide to Google Ads character limits in 2026. Headlines (30 chars), descriptions (90 chars), responsive ads, display ads, and Performance Max', time: 3 },
  { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)', desc: 'Everything about Twitter X character limits in 2026. Standard tweets, replies, DMs, bios, display names and Twitter Blue/Premium limits explained.', time: 3 },
  { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)', desc: 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement in 2026.', time: 3 },
  { slug: 'how-to-write-email-subject-lines', title: 'How to Write Email Subject Lines That Get Opened (2026)', desc: 'Learn how to write email subject lines that boost open rates. Includes character limits, proven formulas and A/B testing tips for 2026.', time: 3 },
  { slug: 'how-to-write-twitter-thread', title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)', desc: 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length, hooks and content strategy.', time: 3 },
  { slug: 'ideal-linkedin-post-length', title: 'The Ideal LinkedIn Post Length for Maximum Engagement (2026 Data)', desc: 'Data-backed guide to LinkedIn post length in 2026. See the optimal character count for posts, articles, headlines and comments that get the most engag', time: 3 },
  { slug: 'instagram-caption-length', title: 'Instagram Caption Length: How Long Should Your Caption Be? (2026)', desc: 'The ideal Instagram caption length for maximum engagement in 2026. Data-backed guide for personal posts, business accounts and Reels.', time: 3 },
  { slug: 'reddit-post-length', title: 'Ideal Reddit Post Length for Maximum Upvotes (2026)', desc: 'Reddit posts with 100-300 words get the most upvotes. Titles under 120 characters. Comments: 50-150 words. Complete guide.', time: 3 },
  { slug: 'substack-newsletter-length', title: 'Ideal Substack Newsletter Length (2026 Data)', desc: 'The ideal Substack newsletter is 1,000-2,000 words (5-10 min read). Free vs paid length strategies. Complete guide.', time: 3 },
  { slug: 'tiktok-caption-length-guide', title: 'TikTok Caption Length: The Complete Guide (2026)', desc: 'Everything about TikTok caption character limits in 2026. How long should your TikTok caption be? Optimal length, hashtag strategy, and viral caption ', time: 3 },
  { slug: 'twitter-character-limit-2026', title: 'Twitter/X Character Limit 2026: Everything You Need to Know', desc: 'Twitter/X character limit is 280 for free users, 25,000 for Premium. Complete guide to all Twitter limits in 2026.', time: 3 }
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.wordcountertool.net' },
        { name: 'Blog', url: 'https://www.wordcountertool.net/blog' },
        { name: 'Social media writing', url: 'https://www.wordcountertool.net/blog/category/social-media' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">📱 Social media writing</h1>
        <p className="text-lg text-slate-400 mb-8">Character limits, caption lengths, and hashtag strategies for every platform.</p>

        <AdUnit slot="3333333333" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {posts.map(post => (
            <Link key={post.slug} href={'/blog/' + post.slug} className="group block rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-emerald-500/30 hover:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-slate-500">{post.time} min read</span>
              </div>
              <h2 className="font-display font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h2>
              {post.desc && <p className="text-sm text-slate-400 leading-relaxed">{post.desc}</p>}
            </Link>
          ))}
        </div>

        <AdUnit slot="4444444444" />
      </main>
      <Footer />
    </>
  );
}
