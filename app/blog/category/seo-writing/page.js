import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/category/seo-writing' },
  title: 'SEO & content strategy — Writing & SEO Guides | WordCounterTool.net',
  description: 'Keyword density, meta descriptions, content length, and ranking strategies. 10 free guides updated for 2026.',
  openGraph: {
    title: 'SEO & content strategy | WordCounterTool.net Blog',
    description: 'Keyword density, meta descriptions, content length, and ranking strategies.',
    url: 'https://www.wordcountertool.net/blog/category/seo-writing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
  { slug: 'how-to-improve-readability-score', title: 'How to Improve Your Readability Score (Flesch-Kincaid Guide)', desc: 'Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier to read and rank better on Goo', time: 3 },
  { slug: 'how-to-use-keywords-in-blog-posts', title: 'How to Use Keywords in Blog Posts: The Right Way (2026)', desc: 'Learn exactly how to use keywords in blog posts for maximum SEO impact in 2026. Includes placement strategy, density tips and common mistakes to avoid', time: 3 },
  { slug: 'how-to-write-meta-descriptions', title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)', desc: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Includes examples and templates.', time: 3 },
  { slug: 'how-to-write-product-descriptions', title: 'How to Write Product Descriptions That Sell (Complete Guide 2026)', desc: 'Learn how to write product descriptions that convert browsers into buyers. Includes templates, examples and SEO best practices for 2026.', time: 3 },
  { slug: 'how-to-write-seo-title-tags', title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026 Guide)', desc: 'Learn how to write perfect SEO title tags in 2026. Includes character limits, keyword placement, formulas and real examples that rank.', time: 3 },
  { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length for SEO in 2026', desc: 'Discover the perfect blog post length for ranking on Google in 2026. Data driven analysis of word counts that rank on page 1.', time: 3 },
  { slug: 'long-tail-keywords-guide', title: 'Long-Tail Keywords: The Complete Beginners Guide (2026)', desc: 'Learn what long-tail keywords are, why they drive more traffic than short keywords, and how to find and use them to rank faster on Google.', time: 3 },
  { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide: How Long Should Every Page Be? (2026)', desc: 'The definitive 2026 guide to SEO content length for every page type — blog posts, product pages, homepages, landing pages and more.', time: 3 },
  { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch-Kincaid Score? (And How to Improve Yours)', desc: 'Understand the Flesch-Kincaid readability score and how it affects your SEO and reader engagement. Includes formulas, benchmarks and tips.', time: 3 },
  { slug: 'what-is-keyword-density', title: 'What is Keyword Density? The Complete SEO Guide (2026)', desc: 'Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without keyword stuffing.', time: 3 }
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.wordcountertool.net' },
        { name: 'Blog', url: 'https://www.wordcountertool.net/blog' },
        { name: 'SEO & content strategy', url: 'https://www.wordcountertool.net/blog/category/seo-writing' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">🔍 SEO & content strategy</h1>
        <p className="text-lg text-slate-400 mb-8">Keyword density, meta descriptions, content length, and ranking strategies.</p>

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
