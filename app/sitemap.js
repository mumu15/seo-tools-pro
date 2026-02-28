export default function sitemap() {
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
