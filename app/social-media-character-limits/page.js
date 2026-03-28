import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Social Media Character Limits 2026: Every Platform (Complete Guide) | WordCounterTool',
  description: 'Complete character limits for every social media platform in 2026. Twitter/X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Snapchat, Pinterest, and more.',
  alternates: { canonical: 'https://www.wordcountertool.net/social-media-character-limits' },
  openGraph: {
    title: 'Social Media Character Limits 2026: Every Platform (Complete Guide)',
    description: 'Complete character limits for every social media platform in 2026. Twitter/X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Snapchat, Pinterest, and more.',
    url: 'https://www.wordcountertool.net/social-media-character-limits',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"What is the Twitter/X character limit in 2026?","a":"Free Twitter/X users have a 280-character limit per tweet. X Premium subscribers can post up to 25,000 characters."},{"q":"What is the Instagram caption limit?","a":"Instagram captions can be up to 2,200 characters. However, only the first 125 characters show in the feed before "more" is clicked."},{"q":"What is the LinkedIn post limit?","a":"LinkedIn posts can be up to 3,000 characters. The optimal length for engagement is 1,300-2,000 characters."},{"q":"What is the TikTok caption limit?","a":"TikTok captions can be up to 4,000 characters in 2026, expanded from the original 150-character limit."}]

export default function Page() {
  const st = {
    page: { minHeight: '100vh', background: '#0f1117', color: '#e2e8f0' },
    wrap: { maxWidth: 1000, margin: '0 auto', padding: '32px 16px 64px' },
    h1: { fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 900, color: '#f1f5f9', margin: '0 0 12px', lineHeight: 1.15 },
    desc: { fontSize: 15, color: '#94a3b8', lineHeight: 1.7, margin: '0 0 8px' },
    vol: { fontSize: 12, color: '#10b981', fontWeight: 700, margin: '0 0 28px' },
    box: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24, marginBottom: 24 },
    h2: { fontSize: 20, fontWeight: 700, color: '#f1f5f9', margin: '0 0 16px' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: 13 },
    th: { padding: '10px 12px', textAlign: 'left', color: '#10b981', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid rgba(16,185,129,0.2)' },
    td: { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8' },
    toolLink: { display: 'inline-block', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', margin: '0 8px 8px 0', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' },
    blogLink: { display: 'inline-block', padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, textDecoration: 'none', margin: '0 6px 8px 0', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', color: '#60a5fa' },
  }

  return (
    <div style={st.page}>
      <Header />
      <FaqSchema faqs={faqs} />
      <AdUnit slot="7405024590" />
      <div style={st.wrap}>
        <nav style={{fontSize:13,color:'#64748b',marginBottom:20,display:'flex',gap:6,flexWrap:'wrap'}}>
          <a href="/" style={{color:'#64748b',textDecoration:'none'}}>Home</a>
          <span style={{color:'#475569'}}>\u203a</span>
          <span style={{color:'#94a3b8'}}>Social Media Character Limits 2026</span>
        </nav>

        <h1 style={st.h1}>Social Media Character Limits 2026: Every Platform (Complete Guide)</h1>
        <p style={st.desc}>Complete character limits for every social media platform in 2026. Twitter/X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Snapchat, Pinterest, and more.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Twitter / X Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Tweet (Free)</td><td style={{...st.td}}>280 characters</td><td style={{...st.td}}>Main post limit</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Tweet (Premium)</td><td style={{...st.td}}>25,000 characters</td><td style={{...st.td}}>X Premium subscribers</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Display Name</td><td style={{...st.td}}>50 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Username (@handle)</td><td style={{...st.td}}>15 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Bio</td><td style={{...st.td}}>160 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>DM (Direct Message)</td><td style={{...st.td}}>10,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Alt Text (Images)</td><td style={{...st.td}}>1,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>List Name</td><td style={{...st.td}}>25 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>List Description</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Instagram Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Caption</td><td style={{...st.td}}>2,200 characters</td><td style={{...st.td}}>First 125 shown in feed</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Bio</td><td style={{...st.td}}>150 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Username</td><td style={{...st.td}}>30 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Hashtags per Post</td><td style={{...st.td}}>30 max</td><td style={{...st.td}}>3-5 recommended for reach</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Comment</td><td style={{...st.td}}>2,200 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Reel Caption</td><td style={{...st.td}}>2,200 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Story Text</td><td style={{...st.td}}>No official limit</td><td style={{...st.td}}>Keep under 200 chars</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Alt Text</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>DM</td><td style={{...st.td}}>1,000 characters</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />
        <div style={st.box}>
          <h2 style={st.h2}>Facebook Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Post</td><td style={{...st.td}}>63,206 characters</td><td style={{...st.td}}>Optimal: 40-80 chars</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Comment</td><td style={{...st.td}}>8,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Ad Headline</td><td style={{...st.td}}>40 characters</td><td style={{...st.td}}>Recommended</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Ad Primary Text</td><td style={{...st.td}}>125 characters</td><td style={{...st.td}}>Before "See More"</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Ad Description</td><td style={{...st.td}}>30 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Page Name</td><td style={{...st.td}}>75 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Page Description</td><td style={{...st.td}}>255 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Group Name</td><td style={{...st.td}}>75 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Username</td><td style={{...st.td}}>50 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Messenger</td><td style={{...st.td}}>20,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Event Name</td><td style={{...st.td}}>64 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Event Description</td><td style={{...st.td}}>50,000 characters</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>LinkedIn Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Post</td><td style={{...st.td}}>3,000 characters</td><td style={{...st.td}}>Optimal: 1,300-2,000</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Article</td><td style={{...st.td}}>125,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Article Title</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Comment</td><td style={{...st.td}}>1,250 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Headline</td><td style={{...st.td}}>220 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Summary/About</td><td style={{...st.td}}>2,600 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Company Page About</td><td style={{...st.td}}>2,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Connection Request Note</td><td style={{...st.td}}>300 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>InMail Subject</td><td style={{...st.td}}>200 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>InMail Body</td><td style={{...st.td}}>1,900 characters</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>TikTok Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Caption</td><td style={{...st.td}}>4,000 characters</td><td style={{...st.td}}>Was 150, expanded 2023</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Bio</td><td style={{...st.td}}>80 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Username</td><td style={{...st.td}}>24 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Comment</td><td style={{...st.td}}>150 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>DM</td><td style={{...st.td}}>500 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Video Description</td><td style={{...st.td}}>4,000 characters</td><td style={{...st.td}}>Including hashtags</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>YouTube Character Limits</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Video Title</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}>Optimal: 60-70 chars</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Video Description</td><td style={{...st.td}}>5,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Comment</td><td style={{...st.td}}>10,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Channel Name</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Channel Description</td><td style={{...st.td}}>1,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Playlist Title</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Playlist Description</td><td style={{...st.td}}>5,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Short Title</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Other Platforms</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Platform / Element</th><th style={st.th}>Limit</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Threads Post</td><td style={{...st.td}}>500 characters</td><td style={{...st.td}}>Meta/Instagram Threads</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Threads Bio</td><td style={{...st.td}}>150 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Pin Title</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Description</td><td style={{...st.td}}>500 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Board Name</td><td style={{...st.td}}>50 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Snapchat Caption</td><td style={{...st.td}}>80 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Reddit Title</td><td style={{...st.td}}>300 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Reddit Post (text)</td><td style={{...st.td}}>40,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Reddit Comment</td><td style={{...st.td}}>10,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>WhatsApp Status</td><td style={{...st.td}}>700 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>WhatsApp Message</td><td style={{...st.td}}>65,536 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Discord Message</td><td style={{...st.td}}>2,000 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Discord Server Name</td><td style={{...st.td}}>100 characters</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Substack Post</td><td style={{...st.td}}>No limit</td><td style={{...st.td}}>Recommended: 1,000-2,000 words</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Medium Article</td><td style={{...st.td}}>No limit</td><td style={{...st.td}}>Recommended: 1,600-2,400 words</td></tr>
          </tbody></table></div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/character-counter" style={st.toolLink}>character counter</a>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/blog/twitter-character-limit-2026" style={st.blogLink}>twitter character limit 2026</a>
            <a href="/blog/instagram-caption-length" style={st.blogLink}>instagram caption length</a>
            <a href="/blog/tiktok-caption-length-guide" style={st.blogLink}>tiktok caption length guide</a>
            <a href="/blog/ideal-linkedin-post-length" style={st.blogLink}>ideal linkedin post length</a>
          </div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={i < faqs.length - 1 ? {borderBottom:'1px solid rgba(255,255,255,0.05)',paddingBottom:16,marginBottom:16} : {paddingBottom:8}}>
              <h3 style={{fontSize:14,fontWeight:600,color:'#e2e8f0',marginBottom:6,marginTop:0}}>{faq.q}</h3>
              <p style={{fontSize:13,color:'#94a3b8',lineHeight:1.7,margin:0}}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Social Media Character Limits 2026: Every Platform (Complete Guide)","description":"Complete character limits for every social media platform in 2026. Twitter/X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Snapchat, Pinterest, and more.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/social-media-character-limits"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Social Media Character Limits 2026","item":"https://www.wordcountertool.net/social-media-character-limits"}]})}} />
      <Footer />
    </div>
  )
}
