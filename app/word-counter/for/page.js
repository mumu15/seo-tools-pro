import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Word Counter by Profession and Use Case | WordCounterTool.net',
  description: 'Free word counter guides for students, bloggers, lawyers, journalists, writers and more. Find word count benchmarks for every profession and document type.',
};

const professions = [
  { slug: 'student', label: 'Students', description: 'Free word counter for students. Check essay, assignment and thesis word counts instantly. See reading time, character count and sentence count.' },
  { slug: 'blogger', label: 'Bloggers', description: 'Free word counter for bloggers. Check blog post length, reading time and SEO word count targets. Find the perfect blog post length for Google rankings.' },
  { slug: 'writer', label: 'Writers', description: 'Free word counter for writers. Track daily word counts, manuscript length, chapter word counts and submission requirements for publishers and literary magazines.' },
  { slug: 'journalist', label: 'Journalists', description: 'Free word counter for journalists and reporters. Check article length against word limits for print, online and broadcast scripts.' },
  { slug: 'lawyer', label: 'Lawyers', description: 'Free word counter for lawyers and legal professionals. Check briefs, contracts and legal documents against court word limits and page limits.' },
  { slug: 'copywriter', label: 'Copywriters', description: 'Free word counter for copywriters. Check ad copy, landing page, email and social media copy against platform limits and client briefs.' },
  { slug: 'teacher', label: 'Teachers', description: 'Free word counter for teachers and educators. Check student assignment lengths, lesson plan word counts and educational content readability.' },
  { slug: 'seo-specialist', label: 'SEO Specialists', description: 'Free word counter for SEO specialists. Check content length, keyword density and readability scores for pages you're optimizing for Google.' },
  { slug: 'social-media-manager', label: 'Social Media Managers', description: 'Free character and word counter for social media managers. Check post lengths for Twitter X, Instagram, Facebook, LinkedIn and TikTok.' },
  { slug: 'content-marketer', label: 'Content Marketers', description: 'Free word counter for content marketers. Track content length for blog posts, whitepapers, case studies, email campaigns and social copy.' },
  { slug: 'academic', label: 'Academic Researchers', description: 'Free word counter for academic researchers. Check journal article, abstract, literature review and thesis word counts against publication requirements.' },
  { slug: 'novelist', label: 'Novelists', description: 'Free word counter for novelists. Track manuscript progress, chapter lengths and daily word count goals. See word count benchmarks for every novel genre.' },
  { slug: 'email-marketer', label: 'Email Marketers', description: 'Free word counter for email marketers. Check subject line length, email body word count and preview text against best practices for open rates and clicks.' },
  { slug: 'screenwriter', label: 'Screenwriters', description: 'Free word counter for screenwriters. Check script page count, word count and scene length for feature films, TV pilots and short films.' },
  { slug: 'hr-professional', label: 'HR Professionals', description: 'Free word counter for HR professionals. Check job descriptions, HR policies, performance reviews and employment contracts against best-practice word counts.' }
];

export default function ForIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Word Counter by Profession</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Word count guides and benchmarks tailored to your profession and document type.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professions.map(p => (
              <a key={p.slug} href={'/word-counter/for/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{p.label}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
