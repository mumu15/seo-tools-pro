import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import BreadcrumbSchema from '../../../../components/BreadcrumbSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/category/word-count-guides' },
  title: 'Word count guides — Writing & SEO Guides | WordCounterTool.net',
  description: 'How many words for essays, novels, resumes, dissertations, and every document type. 14 free guides updated for 2026.',
  openGraph: {
    title: 'Word count guides | WordCounterTool.net Blog',
    description: 'How many words for essays, novels, resumes, dissertations, and every document type.',
    url: 'https://www.wordcountertool.net/blog/category/word-count-guides',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const posts = [
  { slug: 'ebook-word-count-guide', title: 'Ebook Word Count: How Long Should Your Ebook Be? (2026)', desc: 'A short ebook is 5,000-10,000 words. A standard ebook is 10,000-30,000 words. A long ebook is 30,000-50,000 words. Complete guide.', time: 3 },
  { slug: 'how-many-words-in-a-blog-post', title: 'How Many Words Should a Blog Post Be? (2026 SEO Data)', desc: 'The ideal blog post is 1,500-2,500 words for SEO. Page 1 results average 1,447 words. Complete guide with data.', time: 3 },
  { slug: 'how-many-words-in-a-college-essay', title: 'How Many Words in a College Essay? Complete 2026 Guide', desc: 'The definitive guide to college essay word counts in 2026. Common App 650 words, supplementals 100-400, UC essays 350.', time: 3 },
  { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words Should a Cover Letter Be? (2026 Guide)', desc: 'The perfect cover letter length in 2026. Learn how many words, paragraphs and pages hiring managers want to see in your cover letter.', time: 3 },
  { slug: 'how-many-words-in-a-dissertation', title: 'How Many Words in a Dissertation? (PhD & Masters Guide 2026)', desc: 'Complete guide to dissertation word counts by degree level and field. PhD: 80,000-100,000. Masters: 15,000-25,000. Chapter breakdowns and tips include', time: 3 },
  { slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words in a Grant Proposal? (Complete 2026 Guide)', desc: 'Grant proposals are typically 5-25 pages. NIH R01: 12 pages. NSF: 15 pages. Complete word counts by funder and section.', time: 3 },
  { slug: 'how-many-words-in-a-novel', title: 'How Many Words in a Novel? Word Counts for Every Genre', desc: 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.', time: 3 },
  { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words Should a Paragraph Be? (The Complete Guide)', desc: 'Learn the ideal paragraph length for blogs, essays, books and web content. Expert tips on paragraph structure for better readability and SEO.', time: 3 },
  { slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words in a Personal Statement? (2026 Guide)', desc: 'UCAS personal statements: 4,000 characters. Graduate school: 500-1,000 words. Medical school: 5,300 characters. Complete guide.', time: 3 },
  { slug: 'how-many-words-in-a-podcast-episode', title: 'How Many Words in a Podcast Episode? (Word Count Calculator)', desc: 'A 30-minute podcast is ~4,500 words. A 60-minute episode is ~9,000 words. Full guide to podcast word counts, scripting, and show notes.', time: 3 },
  { slug: 'how-many-words-in-a-resume', title: 'How Many Words Should a Resume Be? (2026 Guide)', desc: 'The ideal resume word count for every career level in 2026. Learn how long your resume should be and what hiring managers actually want.', time: 3 },
  { slug: 'how-many-words-in-a-short-story', title: 'How Many Words in a Short Story? (Word Count Guide for Every Format)', desc: 'Discover the exact word count for flash fiction, short stories, novellas and novels. Complete guide for writers submitting to magazines and publishers', time: 3 },
  { slug: 'how-many-words-in-a-speech', title: 'How Many Words in a 5, 10, 15 Minute Speech? (Word Count Calculator)', desc: 'Find out exactly how many words you need for a 1, 5, 10, 15, 20 or 30 minute speech. Includes tips for pacing and delivery.', time: 3 },
  { slug: 'how-many-words-per-page', title: 'How Many Words Per Page? Complete Guide (2026)', desc: 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.', time: 3 }
]

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.wordcountertool.net' },
        { name: 'Blog', url: 'https://www.wordcountertool.net/blog' },
        { name: 'Word count guides', url: 'https://www.wordcountertool.net/blog/category/word-count-guides' },
      ]} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300">← Back to Blog</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">📝 Word count guides</h1>
        <p className="text-lg text-slate-400 mb-8">How many words for essays, novels, resumes, dissertations, and every document type.</p>

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
