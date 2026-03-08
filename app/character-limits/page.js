import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Character Limits by Platform: Complete 2026 Guide | WordCounterTool.net',
  description: 'Character limits for every major platform in 2026. Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube, Google Ads and more.',
};

const platforms = [
  { slug: 'twitter', name: 'Twitter / X' },
  { slug: 'instagram', name: 'Instagram' },
  { slug: 'linkedin', name: 'LinkedIn' },
  { slug: 'facebook', name: 'Facebook' },
  { slug: 'tiktok', name: 'TikTok' },
  { slug: 'youtube', name: 'YouTube' },
  { slug: 'pinterest', name: 'Pinterest' },
  { slug: 'google-ads', name: 'Google Ads' },
  { slug: 'meta-title', name: 'Meta Title (SEO)' },
  { slug: 'meta-description', name: 'Meta Description (SEO)' },
  { slug: 'email-subject-line', name: 'Email Subject Line' },
  { slug: 'sms', name: 'SMS Text Message' }
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Character Limits by Platform</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Up-to-date character limits for every major social media platform, ad network and content type.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map(p => (
              <a key={p.slug} href={'/character-limits/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold group-hover:text-emerald-400 transition-colors">{p.name}</h2>
                <p className="text-slate-500 text-sm mt-1">View all character limits</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
