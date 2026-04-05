import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for' },
  title: 'Word Count by Document Type | WordCounterTool.net',
  description: 'How many words should every document be? Complete word count guides for essays, resumes, blog posts, speeches, books and more.',
};

const documents = [
  { slug: 'essay', name: 'Essay', description: 'How many words should an essay be? Complete guide to essay word counts for high school, college and university assignments in 2026.' },
  { slug: 'thesis', name: 'Thesis', description: 'How many words is a thesis? Complete guide to thesis and dissertation word counts for undergraduate, master and PhD levels in 2026.' },
  { slug: 'cover-letter', name: 'Cover Letter', description: 'How many words should a cover letter be? The ideal cover letter length for job applications in 2026, by career level and industry.' },
  { slug: 'resume', name: 'Resume', description: 'How many words should a resume be? The ideal resume length and word count by career level and experience in 2026.' },
  { slug: 'blog-post', name: 'Blog Post', description: 'How many words should a blog post be? The ideal blog post length for SEO and reader engagement in 2026, by content type.' },
  { slug: 'research-paper', name: 'Research Paper', description: 'How many words is a research paper? Ideal word counts for college, university and academic journal research papers in 2026.' },
  { slug: 'book', name: 'Book', description: 'How many words is a book? Average word counts for every book genre and format in 2026, from novellas to epic fantasy.' },
  { slug: 'email', name: 'Email', description: 'How long should an email be? Ideal email word counts for different email types including newsletters, cold outreach, follow-ups and formal business emails.' },
  { slug: 'speech', name: 'Speech', description: 'How many words is a speech? Exact word counts for 1, 5, 10, 15, 20 and 30 minute speeches at different speaking speeds.' },
  { slug: 'press-release', name: 'Press Release', description: 'How long should a press release be? The ideal press release word count and format for maximum media pickup in 2026.' },
  { slug: 'business-plan', name: 'Business Plan', description: 'How long should a business plan be? Ideal word counts for startup, investor and internal business plans in 2026.' },
  { slug: 'short-story', name: 'Short Story', description: 'How many words is a short story? Word count ranges for flash fiction, short stories, novelettes and novellas in 2026.' },
  { slug: 'linkedin-post', name: 'LinkedIn Post', description: 'How long should a LinkedIn post be? The ideal LinkedIn post word count and character count for maximum reach and engagement in 2026.' },
  { slug: 'product-description', name: 'Product Description', description: 'How many words should a product description be? Ideal word counts for ecommerce product descriptions by product type and price point.' },
  { slug: 'grant-proposal', name: 'Grant Proposal', description: 'How long should a grant proposal be? Typical word counts for research grants, nonprofit grants and government grant applications.' }
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Word Count by Document Type</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Find the ideal word count for every document type from essays to novels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map(d => (
              <a key={d.slug} href={'/word-count/for/' + d.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold mb-1 group-hover:text-emerald-400 transition-colors">{d.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Count Guide","item":"https://www.wordcountertool.net/word-count"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Count Guide","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  );
}
