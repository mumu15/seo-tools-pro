export default function sitemap() {
  const baseUrl = 'https://wordcountertool.net'
  const pages = [
    '',
    '/word-counter',
    '/keyword-density',
    '/meta-tag-generator',
    '/readability-checker',
    '/character-counter',
    '/sentence-counter',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}
