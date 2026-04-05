import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/category/writing-craft' },
  title: 'Writing craft & technique — Writing & SEO Guides | WordCounterTool.net',
  description: 'Introductions, conclusions, headlines, readability, and writing skills. 7 free guides updated for 2026.',
  openGraph: {
    title: 'Writing craft & technique | WordCounterTool.net Blog',
    description: 'Introductions, conclusions, headlines, readability, and writing skills.',
    url: 'https://www.wordcountertool.net/blog/category/writing-craft',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
  { slug: 'how-long-should-a-youtube-script-be', title: 'How Long Should a YouTube Script Be? Word Count by Video Length', desc: 'Convert video length to script word count. A 10-minute YouTube video needs ~1,500 words. Full breakdown for 1-60 minute videos with pacing tips.', time: 3 },
  { slug: 'how-to-count-words-online', title: 'How to Count Words Online: The Complete Free Guide (2026)', desc: 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools and tips.', time: 3 },
  { slug: 'how-to-write-blog-conclusion', title: 'How to Write a Blog Post Conclusion That Keeps Readers Coming Back', desc: 'Stop ending blog posts with ', time: 3 },
  { slug: 'how-to-write-blog-introduction', title: 'How to Write a Blog Introduction That Hooks Readers (7 Proven Formulas)', desc: 'Learn 7 proven blog introduction formulas used by top bloggers. Stop losing readers in the first paragraph with these simple writing techniques.', time: 3 },
  { slug: 'how-to-write-for-skimmable-content', title: 'How to Write Skimmable Content That Readers Actually Finish', desc: 'Most readers skim before they read. Learn how to write skimmable content that keeps people on the page and boosts your SEO in 2026.', time: 3 },
  { slug: 'how-to-write-headline-formulas', title: '15 Headline Formulas That Get Clicks (With Examples)', desc: 'Master the 15 most powerful headline formulas used by top copywriters and bloggers. Includes real examples you can swipe and adapt for any content.', time: 3 },
  { slug: 'how-to-write-wedding-speech', title: 'How to Write a Wedding Speech: Word Count, Structure, and Tips (2026)', desc: 'Wedding speech guide: Best man 500-800 words, maid of honor 400-700, father of the bride 400-650. Structure templates and timing tips.', time: 3 }
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.wordcountertool.net' },
        { name: 'Blog', url: 'https://www.wordcountertool.net/blog' },
        { name: 'Writing craft & technique', url: 'https://www.wordcountertool.net/blog/category/writing-craft' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">✍️ Writing craft & technique</h1>
        <p className="text-lg text-slate-400 mb-8">Introductions, conclusions, headlines, readability, and writing skills.</p>

        <AdUnit slot="3763639977" />

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

        <AdUnit slot="3248634657" />
      </main>

        <AdUnit slot="3248634657" />

      <Footer />
    </>
  );
}
