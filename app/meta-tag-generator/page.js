import MetaTagGenerator from './PageClient'

export const metadata = {
  title: 'Meta Tag Generator — Perfect SEO Titles & Descriptions',
  description: 'Generate optimized meta titles and descriptions for Google. See character count, pixel width preview, and SEO best practices. Free tool.',
  alternates: { canonical: 'https://www.wordcountertool.net/meta-tag-generator' },
}

export default function Page() {
  return <MetaTagGenerator />
}
