import HashtagCounter from './PageClient'

export const metadata = {
  title: 'Free Hashtag Counter & Generator | WordCounterTool.net',
  description: 'Count and analyze hashtags for Instagram, Twitter, TikTok and more. Free hashtag counter with trending suggestions.',
  alternates: { canonical: 'https://www.wordcountertool.net/hashtag-counter' },
}

export default function Page() {
  return <HashtagCounter />
}
