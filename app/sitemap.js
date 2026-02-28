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
    '/about',
    '/contact',
    '/privacy-policy',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}