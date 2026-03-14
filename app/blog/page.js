import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const posts = [
  { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words Should a Paragraph Be? (The Complete Guide)', description: 'Learn the ideal paragraph length for blogs, essays, books and web content. Expert tips on paragraph structure for better readability and SEO.', date: '2026-03-02' },
  { slug: 'how-many-words-in-a-short-story', title: 'How Many Words in a Short Story? (Word Count Guide for Every Format)', description: 'Discover the exact word count for flash fiction, short stories, novellas and novels. Complete guide for writers submitting to magazines and publishers.', date: '2026-03-02' },
  { slug: 'how-many-words-in-a-speech', title: 'How Many Words in a 5, 10, 15 Minute Speech? (Word Count Calculator)', description: 'Find out exactly how many words you need for a 1, 5, 10, 15, 20 or 30 minute speech. Includes tips for pacing and delivery.', date: '2026-03-02' },
  { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)', description: 'Everything about Twitter X character limits in 2026. Standard tweets, replies, DMs, bios, display names and Twitter Blue/Premium limits explained.', date: '2026-03-02' },
  { slug: 'instagram-caption-length', title: 'Instagram Caption Length: How Long Should Your Caption Be? (2026)', description: 'The ideal Instagram caption length for maximum engagement in 2026. Data-backed guide for personal posts, business accounts and Reels.', date: '2026-03-02' },
  { slug: 'how-to-write-seo-title-tags', title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026 Guide)', description: 'Learn how to write perfect SEO title tags in 2026. Includes character limits, keyword placement, formulas and real examples that rank.', date: '2026-03-02' },
  { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch-Kincaid Score? (And How to Improve Yours)', description: 'Understand the Flesch-Kincaid readability score and how it affects your SEO and reader engagement. Includes formulas, benchmarks and tips.', date: '2026-03-02' },
  { slug: 'how-many-words-in-a-resume', title: 'How Many Words Should a Resume Be? (2026 Guide)', description: 'The ideal resume word count for every career level in 2026. Learn how long your resume should be and what hiring managers actually want.', date: '2026-03-02' },
  { slug: 'how-to-type-faster', title: 'How to Type Faster: 10 Proven Tips to Boost Your Typing Speed (2026)', description: 'Learn how to type faster with 10 science-backed techniques. From proper hand position to the best free typing tools, this guide covers everything.', date: '2026-03-02' },
  { slug: 'how-to-write-blog-introduction', title: 'How to Write a Blog Introduction That Hooks Readers (7 Proven Formulas)', description: 'Learn 7 proven blog introduction formulas used by top bloggers. Stop losing readers in the first paragraph with these simple writing techniques.', date: '2026-03-02' },
  { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide: How Long Should Every Page Be? (2026)', description: 'The definitive 2026 guide to SEO content length for every page type — blog posts, product pages, homepages, landing pages and more.', date: '2026-03-02' },
  { slug: 'how-to-write-product-descriptions', title: 'How to Write Product Descriptions That Sell (Complete Guide 2026)', description: 'Learn how to write product descriptions that convert browsers into buyers. Includes templates, examples and SEO best practices for 2026.', date: '2026-03-02' },
  { slug: 'long-tail-keywords-guide', title: "Long-Tail Keywords: The Complete Beginner's Guide (2026)", description: 'Learn what long-tail keywords are, why they drive more traffic than short keywords, and how to find and use them to rank faster on Google.', date: '2026-03-02' },
  { slug: 'how-to-write-headline-formulas', title: '15 Headline Formulas That Get Clicks (With Examples)', description: 'Master the 15 most powerful headline formulas used by top copywriters and bloggers. Includes real examples you can swipe and adapt for any content.', date: '2026-03-02' },
  { slug: 'how-to-use-keywords-in-blog-posts', title: 'How to Use Keywords in Blog Posts: The Right Way (2026)', description: 'Learn exactly how to use keywords in blog posts for maximum SEO impact in 2026. Includes placement strategy, density tips and common mistakes to avoid.', date: '2026-03-02' },
  { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words Should a Cover Letter Be? (2026 Guide)', description: 'The perfect cover letter length in 2026. Learn how many words, paragraphs and pages hiring managers want to see in your cover letter.', date: '2026-03-02' },
  { slug: 'how-to-write-for-skimmable-content', title: 'How to Write Skimmable Content That Readers Actually Finish', description: 'Most readers skim before they read. Learn how to write skimmable content that keeps people on the page and boosts your SEO in 2026.', date: '2026-03-02' },
  { slug: 'how-to-write-email-subject-lines', title: 'How to Write Email Subject Lines That Get Opened (2026)', description: 'Learn how to write email subject lines that boost open rates. Includes character limits, proven formulas and A/B testing tips for 2026.', date: '2026-03-02' },
  { slug: 'how-to-write-blog-conclusion', title: 'How to Write a Blog Post Conclusion That Keeps Readers Coming Back', description: 'Stop ending blog posts with "In conclusion...". Learn how to write powerful blog conclusions that drive shares, comments and return visits.', date: '2026-03-02' },
  { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading: Average Speeds and How to Read Faster (2026)', description: 'Discover average reading speeds by age and education level. Learn science-backed techniques to read faster without losing comprehension.', date: '2026-03-02' },
  { slug: 'how-many-words-per-page', title: 'How Many Words Per Page? Complete Guide (2026)', description: 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.', date: '2026-02-01' },
  { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length for SEO in 2026', description: 'Discover the perfect blog post length for ranking on Google in 2026. Data driven analysis of word counts that rank on page 1.', date: '2026-02-03' },
  { slug: 'how-to-improve-readability-score', title: 'How to Improve Your Readability Score (Flesch-Kincaid Guide)', description: 'Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier to read.', date: '2026-02-05' },
  { slug: 'how-many-words-in-a-novel', title: 'How Many Words in a Novel? Word Counts for Every Genre', description: 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.', date: '2026-02-07' },
  { slug: 'what-is-keyword-density', title: 'What is Keyword Density? The Complete SEO Guide (2026)', description: 'Learn what keyword density is, what the ideal percentage is, and how to optimize your content without keyword stuffing.', date: '2026-02-09' },
  { slug: 'how-to-write-meta-descriptions', title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)', description: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results.', date: '2026-02-11' },
  { slug: 'average-reading-speed', title: 'Average Reading Speed: How Fast Do People Read? (2026)', description: 'Discover the average reading speed for adults, children and speed readers. Learn how to improve your reading speed.', date: '2026-02-13' },
  { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)', description: 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement.', date: '2026-02-15' },
  { slug: 'how-to-write-twitter-thread', title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)', description: 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length and hooks.', date: '2026-02-17' },
  { slug: 'average-typing-speed', title: 'Average Typing Speed: What is Good WPM in 2026?', description: 'Find out what the average typing speed is in words per minute and how your speed compares. Includes tips to type faster.', date: '2026-02-19' },
  { slug: 'how-to-count-words-online', title: 'How to Count Words Online: The Complete Free Guide (2026)', description: 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools.', date: '2026-02-21' },
]

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  title: 'Blog — Writing & SEO Tips | WordCounterTool.net',
  description: 'Free guides and tips on word counts, SEO writing, readability, keyword density and more. Expert advice updated for 2026.',
}

export default function Blog() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Writing & SEO Blog</h1>
          <p className="text-slate-400 text-lg">Expert guides on word counts, SEO writing, readability and more — updated 2026</p>
          <p className="text-emerald-400 text-sm mt-2">{posts.length} free guides</p>
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
