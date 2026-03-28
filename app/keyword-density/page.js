import KeywordDensity from './PageClient'

export const metadata = {
  title: 'Keyword Density Checker — Is Your SEO On Point?',
  description: 'Analyze keyword frequency and density in your content. Find overused words, check ideal 1-2% density, and optimize for Google rankings.',
  alternates: { canonical: 'https://www.wordcountertool.net/keyword-density' },
}

export default function Page() {
  return <KeywordDensity />
}
