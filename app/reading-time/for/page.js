import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdUnit from '../../components/AdUnit'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/reading-time/for' },
  title: 'Reading Time by Word Count | WordCounterTool.net',
  description: 'How long does it take to read any number of words? Find reading times for 100 to 100,000 words at slow, average and fast reading speeds.',
};

const pages = [
  { slug: '100-words', label: '100 Words' },
  { slug: '200-words', label: '200 Words' },
  { slug: '300-words', label: '300 Words' },
  { slug: '400-words', label: '400 Words' },
  { slug: '500-words', label: '500 Words' },
  { slug: '600-words', label: '600 Words' },
  { slug: '700-words', label: '700 Words' },
  { slug: '800-words', label: '800 Words' },
  { slug: '900-words', label: '900 Words' },
  { slug: '1000-words', label: '1 000 Words' },
  { slug: '1200-words', label: '1 200 Words' },
  { slug: '1500-words', label: '1 500 Words' },
  { slug: '1700-words', label: '1 700 Words' },
  { slug: '2000-words', label: '2 000 Words' },
  { slug: '2500-words', label: '2 500 Words' },
  { slug: '3000-words', label: '3 000 Words' },
  { slug: '3500-words', label: '3 500 Words' },
  { slug: '4000-words', label: '4 000 Words' },
  { slug: '5000-words', label: '5 000 Words' },
  { slug: '6000-words', label: '6 000 Words' },
  { slug: '7000-words', label: '7 000 Words' },
  { slug: '7500-words', label: '7 500 Words' },
  { slug: '8000-words', label: '8 000 Words' },
  { slug: '9000-words', label: '9 000 Words' },
  { slug: '10000-words', label: '10 000 Words' },
  { slug: '15000-words', label: '15 000 Words' },
  { slug: '20000-words', label: '20 000 Words' },
  { slug: '25000-words', label: '25 000 Words' },
  { slug: '30000-words', label: '30 000 Words' },
  { slug: '40000-words', label: '40 000 Words' },
  { slug: '50000-words', label: '50 000 Words' },
  { slug: '60000-words', label: '60 000 Words' },
  { slug: '75000-words', label: '75 000 Words' },
  { slug: '80000-words', label: '80 000 Words' },
  { slug: '90000-words', label: '90 000 Words' },
  { slug: '100000-words', label: '100 000 Words' }
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Reading Time by Word Count</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Find out exactly how long it takes to read any number of words.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {pages.map(p => (
              <a key={p.slug} href={'/reading-time/for/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-4 text-center transition-all group">
                <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">{p.label}</p>
                <p className="text-slate-500 text-xs mt-1">Reading time</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Reading Time Calculator","item":"https://www.wordcountertool.net/reading-time"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Reading Time Calculator","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </>
  );
}
