import MetaTagGenerator from './PageClient'

export const metadata = {
  title: 'Free Meta Tag Generator | WordCounterTool.net',
  description: 'Generate SEO-optimized meta titles and descriptions. Preview how your page looks in Google search results. Free meta tag tool.',
  alternates: { canonical: 'https://www.wordcountertool.net/meta-tag-generator' },
}

export default function Page() {
  return <MetaTagGenerator />
}
