import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const englishPosts = [
  { slug: 'average-reading-speed', title: 'Average Reading Speed' },
    { slug: 'average-typing-speed', title: 'Average Typing Speed' },
    { slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools 2026' },
    { slug: 'best-free-writing-tools-2026', title: 'Best Free Writing Tools 2026' },
    { slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length' },
    { slug: 'ebook-word-count-guide', title: 'Ebook Word Count Guide' },
    { slug: 'email-length-best-practices', title: 'Email Length Best Practices' },
    { slug: 'google-ads-character-limits', title: 'Google Ads Character Limits' },
    { slug: 'how-long-should-a-youtube-script-be', title: 'How Long Should A YouTube Script Be' },
    { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters In A Tweet' },
    { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags To Use' },
    { slug: 'how-many-words-in-a-blog-post', title: 'How Many Words In A Blog Post' },
    { slug: 'how-many-words-in-a-college-essay', title: 'How Many Words In A College Essay' },
    { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words In A Cover Letter' },
    { slug: 'how-many-words-in-a-dissertation', title: 'How Many Words In A Dissertation' },
    { slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words In A Grant Proposal' },
    { slug: 'how-many-words-in-a-novel', title: 'How Many Words In A Novel' },
    { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words In A Paragraph' },
    { slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words In A Personal Statement' },
    { slug: 'how-many-words-in-a-podcast-episode', title: 'How Many Words In A Podcast Episode' },
    { slug: 'how-many-words-in-a-resume', title: 'How Many Words In A Resume' },
    { slug: 'how-many-words-in-a-short-story', title: 'How Many Words In A Short Story' },
    { slug: 'how-many-words-in-a-speech', title: 'How Many Words In A Speech' },
    { slug: 'how-many-words-per-page', title: 'How Many Words Per Page' },
    { slug: 'how-to-count-words-online', title: 'How To Count Words Online' },
    { slug: 'how-to-improve-readability-score', title: 'How To Improve Readability Score' },
    { slug: 'how-to-type-faster', title: 'How To Type Faster' },
    { slug: 'how-to-use-keywords-in-blog-posts', title: 'How To Use Keywords In Blog Posts' },
    { slug: 'how-to-write-blog-conclusion', title: 'How To Write Blog Conclusion' },
    { slug: 'how-to-write-blog-introduction', title: 'How To Write Blog Introduction' },
    { slug: 'how-to-write-email-subject-lines', title: 'How To Write Email Subject Lines' },
    { slug: 'how-to-write-faster', title: 'How To Write Faster' },
    { slug: 'how-to-write-for-skimmable-content', title: 'How To Write For Skimmable Content' },
    { slug: 'how-to-write-headline-formulas', title: 'How To Write Headline Formulas' },
    { slug: 'how-to-write-meta-descriptions', title: 'How To Write Meta Descriptions' },
    { slug: 'how-to-write-product-descriptions', title: 'How To Write Product Descriptions' },
    { slug: 'how-to-write-seo-title-tags', title: 'How To Write SEO Title Tags' },
    { slug: 'how-to-write-twitter-thread', title: 'How To Write Twitter Thread' },
    { slug: 'how-to-write-wedding-speech', title: 'How To Write Wedding Speech' },
    { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length For SEO' },
    { slug: 'ideal-linkedin-post-length', title: 'Ideal LinkedIn Post Length' },
    { slug: 'instagram-caption-length', title: 'Instagram Caption Length' },
    { slug: 'long-tail-keywords-guide', title: 'Long Tail Keywords Guide' },
    { slug: 'reddit-post-length', title: 'Reddit Post Length' },
    { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide' },
    { slug: 'substack-newsletter-length', title: 'Substack Newsletter Length' },
    { slug: 'tiktok-caption-length-guide', title: 'TikTok Caption Length Guide' },
    { slug: 'twitter-character-limit-2026', title: 'Twitter Character Limit 2026' },
    { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch Kincaid Score' },
    { slug: 'what-is-keyword-density', title: 'What Is Keyword Density' },
    { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading Guide' }
]

const langSections = [
  { key: 'arabic', name: 'Arabic', native: 'العربية', flag: 'AR', tool: '/word-counter/language/arabic', posts: [
    { slug: 'arabic-character-count-guide', title: 'Arabic Character Count Guide' },
    { slug: 'arabic-content-length-guide', title: 'Arabic Content Length Guide' },
    { slug: 'arabic-seo-content-strategy', title: 'Arabic SEO Content Strategy' },
    { slug: 'arabic-writing-tips-for-better-content', title: 'Arabic Writing Tips For Better Content' },
    { slug: 'common-arabic-writing-mistakes', title: 'Common Arabic Writing Mistakes' },
    { slug: 'how-to-count-words-in-arabic', title: 'How To Count Words In Arabic' }
  ]},
  { key: 'chinese', name: 'Chinese', native: '中文', flag: 'ZH', tool: '/word-counter/language/chinese', posts: [
    { slug: 'chinese-character-count-guide', title: 'Chinese Character Count Guide' },
    { slug: 'chinese-content-length-guide', title: 'Chinese Content Length Guide' },
    { slug: 'chinese-seo-content-strategy', title: 'Chinese SEO Content Strategy' },
    { slug: 'chinese-writing-tips-for-better-content', title: 'Chinese Writing Tips For Better Content' },
    { slug: 'common-chinese-writing-mistakes', title: 'Common Chinese Writing Mistakes' },
    { slug: 'how-to-count-words-in-chinese', title: 'How To Count Words In Chinese' }
  ]},
  { key: 'dutch', name: 'Dutch', native: 'Nederlands', flag: 'NL', tool: '/word-counter/language/dutch', posts: [
    { slug: 'common-dutch-writing-mistakes', title: 'Common Dutch Writing Mistakes' },
    { slug: 'dutch-character-count-guide', title: 'Dutch Character Count Guide' },
    { slug: 'dutch-content-length-guide', title: 'Dutch Content Length Guide' },
    { slug: 'dutch-seo-content-strategy', title: 'Dutch SEO Content Strategy' },
    { slug: 'dutch-writing-tips-for-better-content', title: 'Dutch Writing Tips For Better Content' },
    { slug: 'how-to-count-words-in-dutch', title: 'How To Count Words In Dutch' }
  ]},
  { key: 'french', name: 'French', native: 'Français', flag: 'FR', tool: '/word-counter/language/french', posts: [
    { slug: 'common-french-writing-mistakes', title: 'Common French Writing Mistakes' },
    { slug: 'french-character-count-guide', title: 'French Character Count Guide' },
    { slug: 'french-content-length-guide', title: 'French Content Length Guide' },
    { slug: 'french-seo-content-strategy', title: 'French SEO Content Strategy' },
    { slug: 'french-writing-tips-for-better-content', title: 'French Writing Tips For Better Content' },
    { slug: 'how-to-count-words-in-french', title: 'How To Count Words In French' }
  ]},
  { key: 'german', name: 'German', native: 'Deutsch', flag: 'DE', tool: '/word-counter/language/german', posts: [
    { slug: 'common-german-writing-mistakes', title: 'Common German Writing Mistakes' },
    { slug: 'german-character-count-guide', title: 'German Character Count Guide' },
    { slug: 'german-content-length-guide', title: 'German Content Length Guide' },
    { slug: 'german-seo-content-strategy', title: 'German SEO Content Strategy' },
    { slug: 'german-writing-tips-for-better-content', title: 'German Writing Tips For Better Content' },
    { slug: 'how-to-count-words-in-german', title: 'How To Count Words In German' }
  ]},
  { key: 'hindi', name: 'Hindi', native: 'हिन्दी', flag: 'HI', tool: '/word-counter/language/hindi', posts: [
    { slug: 'common-hindi-writing-mistakes', title: 'Common Hindi Writing Mistakes' },
    { slug: 'hindi-character-count-guide', title: 'Hindi Character Count Guide' },
    { slug: 'hindi-content-length-guide', title: 'Hindi Content Length Guide' },
    { slug: 'hindi-seo-content-strategy', title: 'Hindi SEO Content Strategy' },
    { slug: 'hindi-writing-tips-for-better-content', title: 'Hindi Writing Tips For Better Content' },
    { slug: 'how-to-count-words-in-hindi', title: 'How To Count Words In Hindi' }
  ]},
  { key: 'italian', name: 'Italian', native: 'Italiano', flag: 'IT', tool: '/word-counter/language/italian', posts: [
    { slug: 'common-italian-writing-mistakes', title: 'Common Italian Writing Mistakes' },
    { slug: 'how-to-count-words-in-italian', title: 'How To Count Words In Italian' },
    { slug: 'italian-character-count-guide', title: 'Italian Character Count Guide' },
    { slug: 'italian-content-length-guide', title: 'Italian Content Length Guide' },
    { slug: 'italian-seo-content-strategy', title: 'Italian SEO Content Strategy' },
    { slug: 'italian-writing-tips-for-better-content', title: 'Italian Writing Tips For Better Content' }
  ]},
  { key: 'japanese', name: 'Japanese', native: '日本語', flag: 'JA', tool: '/word-counter/language/japanese', posts: [
    { slug: 'common-japanese-writing-mistakes', title: 'Common Japanese Writing Mistakes' },
    { slug: 'how-to-count-words-in-japanese', title: 'How To Count Words In Japanese' },
    { slug: 'japanese-character-count-guide', title: 'Japanese Character Count Guide' },
    { slug: 'japanese-content-length-guide', title: 'Japanese Content Length Guide' },
    { slug: 'japanese-seo-content-strategy', title: 'Japanese SEO Content Strategy' },
    { slug: 'japanese-writing-tips-for-better-content', title: 'Japanese Writing Tips For Better Content' }
  ]},
  { key: 'korean', name: 'Korean', native: '한국어', flag: 'KO', tool: '/word-counter/language/korean', posts: [
    { slug: 'common-korean-writing-mistakes', title: 'Common Korean Writing Mistakes' },
    { slug: 'how-to-count-words-in-korean', title: 'How To Count Words In Korean' },
    { slug: 'korean-character-count-guide', title: 'Korean Character Count Guide' },
    { slug: 'korean-content-length-guide', title: 'Korean Content Length Guide' },
    { slug: 'korean-seo-content-strategy', title: 'Korean SEO Content Strategy' },
    { slug: 'korean-writing-tips-for-better-content', title: 'Korean Writing Tips For Better Content' }
  ]},
  { key: 'polish', name: 'Polish', native: 'Polski', flag: 'PL', tool: '/word-counter/language/polish', posts: [
    { slug: 'common-polish-writing-mistakes', title: 'Common Polish Writing Mistakes' },
    { slug: 'how-to-count-words-in-polish', title: 'How To Count Words In Polish' },
    { slug: 'polish-character-count-guide', title: 'Polish Character Count Guide' },
    { slug: 'polish-content-length-guide', title: 'Polish Content Length Guide' },
    { slug: 'polish-seo-content-strategy', title: 'Polish SEO Content Strategy' },
    { slug: 'polish-writing-tips-for-better-content', title: 'Polish Writing Tips For Better Content' }
  ]},
  { key: 'portuguese', name: 'Portuguese', native: 'Português', flag: 'PT', tool: '/word-counter/language/portuguese', posts: [
    { slug: 'common-portuguese-writing-mistakes', title: 'Common Portuguese Writing Mistakes' },
    { slug: 'how-to-count-words-in-portuguese', title: 'How To Count Words In Portuguese' },
    { slug: 'portuguese-character-count-guide', title: 'Portuguese Character Count Guide' },
    { slug: 'portuguese-content-length-guide', title: 'Portuguese Content Length Guide' },
    { slug: 'portuguese-seo-content-strategy', title: 'Portuguese SEO Content Strategy' },
    { slug: 'portuguese-writing-tips-for-better-content', title: 'Portuguese Writing Tips For Better Content' }
  ]},
  { key: 'russian', name: 'Russian', native: 'Русский', flag: 'RU', tool: '/word-counter/language/russian', posts: [
    { slug: 'common-russian-writing-mistakes', title: 'Common Russian Writing Mistakes' },
    { slug: 'how-to-count-words-in-russian', title: 'How To Count Words In Russian' },
    { slug: 'russian-character-count-guide', title: 'Russian Character Count Guide' },
    { slug: 'russian-content-length-guide', title: 'Russian Content Length Guide' },
    { slug: 'russian-seo-content-strategy', title: 'Russian SEO Content Strategy' },
    { slug: 'russian-writing-tips-for-better-content', title: 'Russian Writing Tips For Better Content' }
  ]},
  { key: 'spanish', name: 'Spanish', native: 'Español', flag: 'ES', tool: '/word-counter/language/spanish', posts: [
    { slug: 'common-spanish-writing-mistakes', title: 'Common Spanish Writing Mistakes' },
    { slug: 'how-to-count-words-in-spanish', title: 'How To Count Words In Spanish' },
    { slug: 'spanish-character-count-guide', title: 'Spanish Character Count Guide' },
    { slug: 'spanish-content-length-guide', title: 'Spanish Content Length Guide' },
    { slug: 'spanish-seo-content-strategy', title: 'Spanish SEO Content Strategy' },
    { slug: 'spanish-writing-tips-for-better-content', title: 'Spanish Writing Tips For Better Content' }
  ]},
  { key: 'swedish', name: 'Swedish', native: 'Svenska', flag: 'SV', tool: '/word-counter/language/swedish', posts: [
    { slug: 'common-swedish-writing-mistakes', title: 'Common Swedish Writing Mistakes' },
    { slug: 'how-to-count-words-in-swedish', title: 'How To Count Words In Swedish' },
    { slug: 'swedish-character-count-guide', title: 'Swedish Character Count Guide' },
    { slug: 'swedish-content-length-guide', title: 'Swedish Content Length Guide' },
    { slug: 'swedish-seo-content-strategy', title: 'Swedish SEO Content Strategy' },
    { slug: 'swedish-writing-tips-for-better-content', title: 'Swedish Writing Tips For Better Content' }
  ]},
  { key: 'turkish', name: 'Turkish', native: 'Türkçe', flag: 'TR', tool: '/word-counter/language/turkish', posts: [
    { slug: 'common-turkish-writing-mistakes', title: 'Common Turkish Writing Mistakes' },
    { slug: 'how-to-count-words-in-turkish', title: 'How To Count Words In Turkish' },
    { slug: 'turkish-character-count-guide', title: 'Turkish Character Count Guide' },
    { slug: 'turkish-content-length-guide', title: 'Turkish Content Length Guide' },
    { slug: 'turkish-seo-content-strategy', title: 'Turkish SEO Content Strategy' },
    { slug: 'turkish-writing-tips-for-better-content', title: 'Turkish Writing Tips For Better Content' }
  ]}
]

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  title: 'Blog - 141 Writing, SEO & Language Guides | WordCounterTool',
  description: '141 free guides on word counting, SEO writing, readability, and content optimization in 15+ languages. Expert advice updated for 2026.',
  openGraph: {
    title: 'Blog - 141 Writing & Language Guides | WordCounterTool',
    description: '141 free guides on word counting, SEO, and writing in 15+ languages.',
    url: 'https://www.wordcountertool.net/blog',
    siteName: 'WordCounterTool',
    type: 'website',
  },
}

export default function Blog() {
  return (
    <>
      <Header />
      <main style={{maxWidth:1100,margin:'0 auto',padding:'48px 16px 64px'}}>

        {/* Hero */}
        <div style={{textAlign:'center',marginBottom:48}}>
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontWeight:900,color:'#fff',margin:'0 0 12px'}}>Writing, SEO & Language Blog</h1>
          <p style={{fontSize:16,color:'#94a3b8',margin:'0 0 8px'}}>Expert guides on word counting, content optimization, and writing in 15+ languages</p>
          <div style={{display:'flex',justifyContent:'center',gap:24,marginTop:16,flexWrap:'wrap'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#10b981'}}>141</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Free Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#f0c842'}}>16</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Languages</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#60a5fa'}}>51</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>English Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#a78bfa'}}>90</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Language Guides</div>
            </div>
          </div>
        </div>

        {/* Quick Jump Nav */}
        <div style={{display:'flex',flexWrap:'wrap',gap:8,justifyContent:'center',marginBottom:40}}>
          <a href="#english" style={{padding:'6px 16px',borderRadius:8,background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.25)',color:'#10b981',fontSize:13,fontWeight:700,textDecoration:'none'}}>English ({englishPosts.length})</a>
          {langSections.map(l => (
            <a key={l.key} href={'#' + l.key} style={{padding:'6px 16px',borderRadius:8,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',color:'#94a3b8',fontSize:13,fontWeight:600,textDecoration:'none'}}>{l.flag} {l.name} ({l.posts.length})</a>
          ))}
        </div>

        {/* English Section */}
        <section id="english" style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <h2 style={{fontSize:24,fontWeight:800,color:'#10b981',margin:0}}>English Guides</h2>
            <span style={{fontSize:13,color:'#64748b',background:'rgba(16,185,129,0.1)',padding:'4px 12px',borderRadius:20,fontWeight:700}}>{englishPosts.length} posts</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gap:12}}>
            {englishPosts.map(post => (
              <Link key={post.slug} href={'/blog/' + post.slug} style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',textDecoration:'none',transition:'all 0.15s'}}>
                <div style={{fontSize:14,fontWeight:600,color:'#e2e8f0',lineHeight:1.4}} className="hover-gold">{post.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Language Sections */}
        {langSections.map(lang => (
          <section key={lang.key} id={lang.key} style={{marginBottom:48}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
              <h2 style={{fontSize:22,fontWeight:800,color:'#f0c842',margin:0}}>{lang.name} <span style={{color:'#64748b',fontWeight:400,fontSize:14}}>({lang.native})</span></h2>
              <span style={{fontSize:13,color:'#64748b',background:'rgba(240,200,66,0.1)',padding:'4px 12px',borderRadius:20,fontWeight:700}}>{lang.posts.length} posts</span>
              <a href={lang.tool} style={{fontSize:12,fontWeight:700,color:'#10b981',textDecoration:'none',padding:'4px 12px',borderRadius:8,background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.2)'}}>
                {lang.name} Word Counter Tool
              </a>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gap:10}}>
              {lang.posts.map(post => (
                <Link key={post.slug} href={'/blog/' + post.slug} style={{display:'block',padding:'14px 18px',borderRadius:12,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',textDecoration:'none',transition:'all 0.15s'}}>
                  <div style={{fontSize:13,fontWeight:600,color:'#cbd5e1',lineHeight:1.4}} className="hover-gold">{post.title}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div style={{textAlign:'center',padding:'40px 24px',borderRadius:20,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',marginTop:32}}>
          <h2 style={{fontSize:22,fontWeight:800,color:'#fff',margin:'0 0 8px'}}>Try Our Free Tools</h2>
          <p style={{fontSize:14,color:'#94a3b8',margin:'0 0 20px'}}>Word counter, character counter, reading time, and more in 15+ languages</p>
          <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="/word-counter" style={{padding:'10px 24px',borderRadius:12,background:'#10b981',color:'#fff',fontWeight:700,fontSize:14,textDecoration:'none'}}>Word Counter</a>
            <a href="/character-counter" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Character Counter</a>
            <a href="/reading-time" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Reading Time</a>
          </div>
        </div>
      </main>

      <style>{`
        .hover-gold:hover { color: #10b981 !important; }
        a:hover .hover-gold { color: #10b981 !important; }
        section a:hover { border-color: rgba(16,185,129,0.3) !important; background: rgba(16,185,129,0.04) !important; transform: translateY(-1px); }
      `}</style>

      <Footer />
    </>
  )
}
