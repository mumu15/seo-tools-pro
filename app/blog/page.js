import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const posts = [{'slug': 'how-many-words-per-page', 'title': 'How Many Words Per Page? Complete Guide (2026)', 'description': 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.', 'date': '2024-01-15', 'keyword': 'how many words per page'}, {'slug': 'ideal-blog-post-length-for-seo', 'title': 'Ideal Blog Post Length for SEO in 2024', 'description': 'Discover the perfect blog post length for ranking on Google in 2024. Data driven analysis of word counts that rank on page 1.', 'date': '2024-01-18', 'keyword': 'ideal blog post length for SEO'}, {'slug': 'how-to-improve-readability-score', 'title': 'How to Improve Your Readability Score (Flesch-Kincaid Guide)', 'description': 'Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier to read.', 'date': '2024-01-20', 'keyword': 'how to improve readability score'}, {'slug': 'how-many-words-in-a-novel', 'title': 'How Many Words in a Novel? Word Counts for Every Genre', 'description': 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.', 'date': '2024-01-22', 'keyword': 'how many words in a novel'}, {'slug': 'what-is-keyword-density', 'title': 'What is Keyword Density? The Complete SEO Guide (2026)', 'description': 'Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without keyword stuffing.', 'date': '2024-01-25', 'keyword': 'what is keyword density'}, {'slug': 'how-to-write-meta-descriptions', 'title': 'How to Write Perfect Meta Descriptions That Get Clicks', 'description': 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results.', 'date': '2024-01-28', 'keyword': 'how to write meta descriptions'}, {'slug': 'average-reading-speed', 'title': 'Average Reading Speed: How Fast Do People Read?', 'description': 'Discover the average reading speed for adults, children and speed readers. Learn how to calculate and improve your reading speed.', 'date': '2024-02-01', 'keyword': 'average reading speed'}, {'slug': 'how-many-hashtags-to-use', 'title': 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn', 'description': 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement.', 'date': '2024-02-05', 'keyword': 'how many hashtags to use'}, {'slug': 'how-to-write-twitter-thread', 'title': 'How to Write a Twitter Thread That Goes Viral', 'description': 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length and content.', 'date': '2024-02-08', 'keyword': 'how to write a twitter thread'}, {'slug': 'average-typing-speed', 'title': 'Average Typing Speed: What is Good WPM in 2024?', 'description': 'Find out what the average typing speed is in words per minute and how your speed compares. Includes tips to type faster.', 'date': '2024-02-10', 'keyword': 'average typing speed words per minute'}, {'slug': 'how-to-count-words-online', 'title': 'How to Count Words Online: The Complete Guide', 'description': 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools.', 'date': '2024-02-12', 'keyword': 'how to count words online'}]

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
