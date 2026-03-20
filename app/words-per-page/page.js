import WordsPerPage from './PageClient'

export const metadata = {
  title: 'Words Per Page Calculator | WordCounterTool.net',
  description: 'Convert word count to pages. See how many pages your essay, paper, or book will be. Supports single and double spacing.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-per-page' },
}

export default function Page() {
  return <WordsPerPage />
}
