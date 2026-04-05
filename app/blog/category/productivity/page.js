import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/category/productivity' },
  title: 'Speed & productivity — Writing & SEO Guides | WordCounterTool.net',
  description: 'Typing speed, reading speed, writing faster, and productivity tools. 7 free guides updated for 2026.',
  openGraph: {
    title: 'Speed & productivity | WordCounterTool.net Blog',
    description: 'Typing speed, reading speed, writing faster, and productivity tools.',
    url: 'https://www.wordcountertool.net/blog/category/productivity',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
  { slug: 'average-reading-speed', title: 'Average Reading Speed: How Fast Do People Read? (2026)', desc: 'Discover the average reading speed for adults, children and speed readers. Learn how to calculate and improve your reading speed.', time: 3 },
  { slug: 'average-typing-speed', title: 'Average Typing Speed: What is Good WPM in 2026?', desc: 'Find out what the average typing speed is in words per minute and how your speed compares. Includes tips to type faster and improve accuracy.', time: 3 },
  { slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools in 2026: Complete Comparison', desc: 'Compare the top AI writing tools in 2026. ChatGPT, Claude, Gemini, Jasper, and more. Pricing, features, and which is best for your needs.', time: 3 },
  { slug: 'best-free-writing-tools-2026', title: 'Best Free Writing Tools in 2026: The Complete List', desc: 'The 20 best free writing tools in 2026 for word counting, grammar checking, readability, SEO optimization, plagiarism detection, and more.', time: 3 },
  { slug: 'how-to-type-faster', title: 'How to Type Faster: 10 Proven Tips to Boost Your Typing Speed (2026)', desc: 'Learn how to type faster with 10 science-backed techniques. From proper hand position to the best free typing tools, this guide covers everything.', time: 3 },
  { slug: 'how-to-write-faster', title: 'How to Write Faster: 12 Proven Techniques to Double Your Speed', desc: 'Write 2x faster with these 12 science-backed writing speed techniques. From outlining to dictation, these methods work for blogs, essays, and books.', time: 3 },
  { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading: Average Speeds and How to Read Faster (2026)', desc: 'Discover average reading speeds by age and education level. Learn science-backed techniques to read faster without losing comprehension.', time: 3 }
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.wordcountertool.net' },
        { name: 'Blog', url: 'https://www.wordcountertool.net/blog' },
        { name: 'Speed & productivity', url: 'https://www.wordcountertool.net/blog/category/productivity' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">⚡ Speed & productivity</h1>
        <p className="text-lg text-slate-400 mb-8">Typing speed, reading speed, writing faster, and productivity tools.</p>

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
