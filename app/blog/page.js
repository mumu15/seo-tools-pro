import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  title: 'Writing & SEO Blog — Guides, Tips & Data | WordCounterTool.net',
  description: '51 free guides on word counting, SEO writing, readability, and content optimization. Expert advice backed by data, updated for 2026.',
  openGraph: {
    title: 'Writing & SEO Blog | WordCounterTool.net',
    description: '51 free guides on word counting, SEO, and writing.',
    url: 'https://www.wordcountertool.net/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const categories = [
  {
    slug: 'word-count-guides',
    name: 'Word count guides',
    desc: 'How many words for essays, novels, resumes, dissertations, and every document type.',
    icon: '📝',
    posts: [
    { slug: 'ebook-word-count-guide', title: 'Ebook Word Count: How Long Should Your Ebook Be? (2026)', desc: 'A short ebook is 5,000-10,000 words. A standard ebook is 10,000-30,000 words. A long ebook is 30,000-50,000 words. Compl', time: 3 },
    { slug: 'how-many-words-in-a-blog-post', title: 'How Many Words Should a Blog Post Be? (2026 SEO Data)', desc: 'The ideal blog post is 1,500-2,500 words for SEO. Page 1 results average 1,447 words. Complete guide with data.', time: 3 },
    { slug: 'how-many-words-in-a-college-essay', title: 'How Many Words in a College Essay? Complete 2026 Guide', desc: 'The definitive guide to college essay word counts in 2026. Common App 650 words, supplementals 100-400, UC essays 350.', time: 3 },
    { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words Should a Cover Letter Be? (2026 Guide)', desc: 'The perfect cover letter length in 2026. Learn how many words, paragraphs and pages hiring managers want to see in your ', time: 3 },
    { slug: 'how-many-words-in-a-dissertation', title: 'How Many Words in a Dissertation? (PhD & Masters Guide 2026)', desc: 'Complete guide to dissertation word counts by degree level and field. PhD: 80,000-100,000. Masters: 15,000-25,000. Chapt', time: 3 },
    { slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words in a Grant Proposal? (Complete 2026 Guide)', desc: 'Grant proposals are typically 5-25 pages. NIH R01: 12 pages. NSF: 15 pages. Complete word counts by funder and section.', time: 3 },
    { slug: 'how-many-words-in-a-novel', title: 'How Many Words in a Novel? Word Counts for Every Genre', desc: 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every ge', time: 3 },
    { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words Should a Paragraph Be? (The Complete Guide)', desc: 'Learn the ideal paragraph length for blogs, essays, books and web content. Expert tips on paragraph structure for better', time: 3 },
    { slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words in a Personal Statement? (2026 Guide)', desc: 'UCAS personal statements: 4,000 characters. Graduate school: 500-1,000 words. Medical school: 5,300 characters. Complete', time: 3 },
    { slug: 'how-many-words-in-a-podcast-episode', title: 'How Many Words in a Podcast Episode? (Word Count Calculator)', desc: 'A 30-minute podcast is ~4,500 words. A 60-minute episode is ~9,000 words. Full guide to podcast word counts, scripting, ', time: 3 },
    { slug: 'how-many-words-in-a-resume', title: 'How Many Words Should a Resume Be? (2026 Guide)', desc: 'The ideal resume word count for every career level in 2026. Learn how long your resume should be and what hiring manager', time: 3 },
    { slug: 'how-many-words-in-a-short-story', title: 'How Many Words in a Short Story? (Word Count Guide for Every Format)', desc: 'Discover the exact word count for flash fiction, short stories, novellas and novels. Complete guide for writers submitti', time: 3 },
    { slug: 'how-many-words-in-a-speech', title: 'How Many Words in a 5, 10, 15 Minute Speech? (Word Count Calculator)', desc: 'Find out exactly how many words you need for a 1, 5, 10, 15, 20 or 30 minute speech. Includes tips for pacing and delive', time: 3 },
    { slug: 'how-many-words-per-page', title: 'How Many Words Per Page? Complete Guide (2026)', desc: 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and ', time: 3 }
    ]
  },
  {
    slug: 'seo-writing',
    name: 'SEO & content strategy',
    desc: 'Keyword density, meta descriptions, content length, and ranking strategies.',
    icon: '🔍',
    posts: [
    { slug: 'how-to-improve-readability-score', title: 'How to Improve Your Readability Score (Flesch-Kincaid Guide)', desc: 'Learn exactly how to improve your Flesch-Kincaid readability score with proven techniques that make your content easier ', time: 3 },
    { slug: 'how-to-use-keywords-in-blog-posts', title: 'How to Use Keywords in Blog Posts: The Right Way (2026)', desc: 'Learn exactly how to use keywords in blog posts for maximum SEO impact in 2026. Includes placement strategy, density tip', time: 3 },
    { slug: 'how-to-write-meta-descriptions', title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)', desc: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Include', time: 3 },
    { slug: 'how-to-write-product-descriptions', title: 'How to Write Product Descriptions That Sell (Complete Guide 2026)', desc: 'Learn how to write product descriptions that convert browsers into buyers. Includes templates, examples and SEO best pra', time: 3 },
    { slug: 'how-to-write-seo-title-tags', title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026 Guide)', desc: 'Learn how to write perfect SEO title tags in 2026. Includes character limits, keyword placement, formulas and real examp', time: 3 },
    { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length for SEO in 2026', desc: 'Discover the perfect blog post length for ranking on Google in 2026. Data driven analysis of word counts that rank on pa', time: 3 },
    { slug: 'long-tail-keywords-guide', title: 'Long-Tail Keywords: The Complete Beginners Guide (2026)', desc: 'Learn what long-tail keywords are, why they drive more traffic than short keywords, and how to find and use them to rank', time: 3 },
    { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide: How Long Should Every Page Be? (2026)', desc: 'The definitive 2026 guide to SEO content length for every page type — blog posts, product pages, homepages, landing page', time: 3 },
    { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch-Kincaid Score? (And How to Improve Yours)', desc: 'Understand the Flesch-Kincaid readability score and how it affects your SEO and reader engagement. Includes formulas, be', time: 3 },
    { slug: 'what-is-keyword-density', title: 'What is Keyword Density? The Complete SEO Guide (2026)', desc: 'Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without', time: 3 }
    ]
  },
  {
    slug: 'social-media',
    name: 'Social media writing',
    desc: 'Character limits, caption lengths, and hashtag strategies for every platform.',
    icon: '📱',
    posts: [
    { slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length: How Long Should Your Prompts Be? (2026)', desc: 'ChatGPT input limit is ~128,000 tokens. The optimal prompt is 50-500 words. Complete guide to prompt length and structur', time: 3 },
    { slug: 'email-length-best-practices', title: 'Email Length Best Practices: How Long Should an Email Be? (2026)', desc: 'The ideal email length for business, marketing, cold outreach, and follow-ups. Data shows 50-125 words get the best resp', time: 3 },
    { slug: 'google-ads-character-limits', title: 'Google Ads Character Limits 2026: Every Ad Type Explained', desc: 'Complete guide to Google Ads character limits in 2026. Headlines (30 chars), descriptions (90 chars), responsive ads, di', time: 3 },
    { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)', desc: 'Everything about Twitter X character limits in 2026. Standard tweets, replies, DMs, bios, display names and Twitter Blue', time: 3 },
    { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)', desc: 'Find out the optimal number of hashtags to use on every social media platform to maximize reach and engagement in 2026.', time: 3 },
    { slug: 'how-to-write-email-subject-lines', title: 'How to Write Email Subject Lines That Get Opened (2026)', desc: 'Learn how to write email subject lines that boost open rates. Includes character limits, proven formulas and A/B testing', time: 3 },
    { slug: 'how-to-write-twitter-thread', title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)', desc: 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length, hooks and ', time: 3 },
    { slug: 'ideal-linkedin-post-length', title: 'The Ideal LinkedIn Post Length for Maximum Engagement (2026 Data)', desc: 'Data-backed guide to LinkedIn post length in 2026. See the optimal character count for posts, articles, headlines and co', time: 3 },
    { slug: 'instagram-caption-length', title: 'Instagram Caption Length: How Long Should Your Caption Be? (2026)', desc: 'The ideal Instagram caption length for maximum engagement in 2026. Data-backed guide for personal posts, business accoun', time: 3 },
    { slug: 'reddit-post-length', title: 'Ideal Reddit Post Length for Maximum Upvotes (2026)', desc: 'Reddit posts with 100-300 words get the most upvotes. Titles under 120 characters. Comments: 50-150 words. Complete guid', time: 3 },
    { slug: 'substack-newsletter-length', title: 'Ideal Substack Newsletter Length (2026 Data)', desc: 'The ideal Substack newsletter is 1,000-2,000 words (5-10 min read). Free vs paid length strategies. Complete guide.', time: 3 },
    { slug: 'tiktok-caption-length-guide', title: 'TikTok Caption Length: The Complete Guide (2026)', desc: 'Everything about TikTok caption character limits in 2026. How long should your TikTok caption be? Optimal length, hashta', time: 3 },
    { slug: 'twitter-character-limit-2026', title: 'Twitter/X Character Limit 2026: Everything You Need to Know', desc: 'Twitter/X character limit is 280 for free users, 25,000 for Premium. Complete guide to all Twitter limits in 2026.', time: 3 }
    ]
  },
  {
    slug: 'writing-craft',
    name: 'Writing craft & technique',
    desc: 'Introductions, conclusions, headlines, readability, and writing skills.',
    icon: '✍️',
    posts: [
    { slug: 'how-long-should-a-youtube-script-be', title: 'How Long Should a YouTube Script Be? Word Count by Video Length', desc: 'Convert video length to script word count. A 10-minute YouTube video needs ~1,500 words. Full breakdown for 1-60 minute ', time: 3 },
    { slug: 'how-to-count-words-online', title: 'How to Count Words Online: The Complete Free Guide (2026)', desc: 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tool', time: 3 },
    { slug: 'how-to-write-blog-conclusion', title: 'How to Write a Blog Post Conclusion That Keeps Readers Coming Back', desc: 'Stop ending blog posts with ', time: 3 },
    { slug: 'how-to-write-blog-introduction', title: 'How to Write a Blog Introduction That Hooks Readers (7 Proven Formulas)', desc: 'Learn 7 proven blog introduction formulas used by top bloggers. Stop losing readers in the first paragraph with these si', time: 3 },
    { slug: 'how-to-write-for-skimmable-content', title: 'How to Write Skimmable Content That Readers Actually Finish', desc: 'Most readers skim before they read. Learn how to write skimmable content that keeps people on the page and boosts your S', time: 3 },
    { slug: 'how-to-write-headline-formulas', title: '15 Headline Formulas That Get Clicks (With Examples)', desc: 'Master the 15 most powerful headline formulas used by top copywriters and bloggers. Includes real examples you can swipe', time: 3 },
    { slug: 'how-to-write-wedding-speech', title: 'How to Write a Wedding Speech: Word Count, Structure, and Tips (2026)', desc: 'Wedding speech guide: Best man 500-800 words, maid of honor 400-700, father of the bride 400-650. Structure templates an', time: 3 }
    ]
  },
  {
    slug: 'productivity',
    name: 'Speed & productivity',
    desc: 'Typing speed, reading speed, writing faster, and productivity tools.',
    icon: '⚡',
    posts: [
    { slug: 'average-reading-speed', title: 'Average Reading Speed: How Fast Do People Read? (2026)', desc: 'Discover the average reading speed for adults, children and speed readers. Learn how to calculate and improve your readi', time: 3 },
    { slug: 'average-typing-speed', title: 'Average Typing Speed: What is Good WPM in 2026?', desc: 'Find out what the average typing speed is in words per minute and how your speed compares. Includes tips to type faster ', time: 3 },
    { slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools in 2026: Complete Comparison', desc: 'Compare the top AI writing tools in 2026. ChatGPT, Claude, Gemini, Jasper, and more. Pricing, features, and which is bes', time: 3 },
    { slug: 'best-free-writing-tools-2026', title: 'Best Free Writing Tools in 2026: The Complete List', desc: 'The 20 best free writing tools in 2026 for word counting, grammar checking, readability, SEO optimization, plagiarism de', time: 3 },
    { slug: 'how-to-type-faster', title: 'How to Type Faster: 10 Proven Tips to Boost Your Typing Speed (2026)', desc: 'Learn how to type faster with 10 science-backed techniques. From proper hand position to the best free typing tools, thi', time: 3 },
    { slug: 'how-to-write-faster', title: 'How to Write Faster: 12 Proven Techniques to Double Your Speed', desc: 'Write 2x faster with these 12 science-backed writing speed techniques. From outlining to dictation, these methods work f', time: 3 },
    { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading: Average Speeds and How to Read Faster (2026)', desc: 'Discover average reading speeds by age and education level. Learn science-backed techniques to read faster without losin', time: 3 }
    ]
  }
]

// Posts not in any category
const uncategorized = [

]

function PostCard({ slug, title, desc, time, cat }) {
  const colors = {
    'word-count-guides': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'seo-writing': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'social-media': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'writing-craft': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'productivity': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };
  const catNames = {
    'word-count-guides': 'Word count',
    'seo-writing': 'SEO',
    'social-media': 'Social media',
    'writing-craft': 'Writing',
    'productivity': 'Productivity',
  };

  return (
    <Link href={'/blog/' + slug} className="group block rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-emerald-500/30 hover:bg-slate-800/50">
      <div className="flex items-center gap-2 mb-3">
        {cat && catNames[cat] && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${colors[cat] || 'bg-slate-800 text-slate-400 border-slate-700'}`}>
            {catNames[cat]}
          </span>
        )}
        <span className="text-xs text-slate-500">{time} min read</span>
      </div>
      <h3 className="font-display font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 text-base leading-snug">{title}</h3>
      {desc && <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{desc}</p>}
    </Link>
  );
}

export default function BlogPage() {
  const allPosts = categories.flatMap(c => c.posts.map(p => ({ ...p, cat: c.slug })));
  const allWithUncat = [...allPosts, ...uncategorized.map(p => ({ ...p, cat: 'general' }))];

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Writing & SEO Blog</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {allWithUncat.length} free guides on word counting, content optimization, and writing craft. Backed by data, not fluff.
          </p>
        </div>

        {/* Category quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <a key={cat.slug} href={'#' + cat.slug} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-xs text-slate-500 ml-1">{cat.posts.length}</span>
            </a>
          ))}
        </div>

        <AdUnit slot="3333333333" />

        {/* Category sections */}
        {categories.map(cat => (
          <section key={cat.slug} id={cat.slug} className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl font-display font-bold text-white">{cat.name}</h2>
              <span className="text-sm text-slate-500">({cat.posts.length} guides)</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">{cat.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.posts.map(post => (
                <PostCard key={post.slug} {...post} cat={cat.slug} />
              ))}
            </div>
          </section>
        ))}

        {uncategorized.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-6">More guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uncategorized.map(post => (
                <PostCard key={post.slug} {...post} cat="general" />
              ))}
            </div>
          </section>
        )}

        <AdUnit slot="4444444444" />
      </main>
      <Footer />
    </>
  );
}
