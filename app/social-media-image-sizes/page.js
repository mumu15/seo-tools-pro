import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Social Media Image Sizes 2026: Every Platform (Complete Cheat Sheet) | WordCounterTool',
  description: 'Definitive guide to social media image dimensions in 2026. Profile photos, cover images, post sizes, story dimensions, and ad sizes for every platform.',
  alternates: { canonical: 'https://www.wordcountertool.net/social-media-image-sizes' },
  openGraph: {
    title: 'Social Media Image Sizes 2026: Every Platform (Complete Cheat Sheet)',
    description: 'Definitive guide to social media image dimensions in 2026. Profile photos, cover images, post sizes, story dimensions, and ad sizes for every platform.',
    url: 'https://www.wordcountertool.net/social-media-image-sizes',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"What is the best Instagram post size?","a":"The best Instagram post size for engagement is 1080 x 1350 px (4:5 portrait ratio). Square posts (1080 x 1080) are also great. Stories and Reels use 1080 x 1920 (9:16)."},{"q":"What size should a YouTube thumbnail be?","a":"YouTube thumbnails should be 1280 x 720 pixels (16:9 ratio) with a minimum width of 640 pixels. File size should be under 2MB. JPG, PNG, or GIF format."},{"q":"What is the Facebook cover photo size?","a":"The Facebook cover photo is 820 x 312 pixels on desktop. On mobile, it displays at 640 x 360 pixels. Use 820 x 462 to look good on both."},{"q":"What size is a LinkedIn post image?","a":"The optimal LinkedIn post image is 1200 x 627 pixels (1.91:1 ratio). Profile photos should be 400 x 400 pixels."}]

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
          <span style={{color:'#94a3b8'}}>Social Media Image Sizes 2026</span>
        </nav>

        <h1 style={st.h1}>Social Media Image Sizes 2026: Every Platform (Complete Cheat Sheet)</h1>
        <p style={st.desc}>Definitive guide to social media image dimensions in 2026. Profile photos, cover images, post sizes, story dimensions, and ad sizes for every platform.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Instagram Image Sizes</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Profile Photo</td><td style={{...st.td}}>320 x 320 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Displays as circle</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Square Post</td><td style={{...st.td}}>1080 x 1080 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Most common format</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Portrait Post</td><td style={{...st.td}}>1080 x 1350 px</td><td style={{...st.td}}>4:5</td><td style={{...st.td}}>Best for engagement</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Landscape Post</td><td style={{...st.td}}>1080 x 566 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}>Least engagement</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Story / Reel</td><td style={{...st.td}}>1080 x 1920 px</td><td style={{...st.td}}>9:16</td><td style={{...st.td}}>Full screen vertical</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Carousel</td><td style={{...st.td}}>1080 x 1080 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Up to 10 slides</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>IGTV Cover</td><td style={{...st.td}}>420 x 654 px</td><td style={{...st.td}}>1:1.55</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Facebook Image Sizes</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Profile Photo</td><td style={{...st.td}}>180 x 180 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Displays at 170px</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Cover Photo</td><td style={{...st.td}}>820 x 312 px</td><td style={{...st.td}}>2.63:1</td><td style={{...st.td}}>Mobile: 640 x 360</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Shared Image Post</td><td style={{...st.td}}>1200 x 630 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}>Optimal for links</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Square Post</td><td style={{...st.td}}>1080 x 1080 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Story</td><td style={{...st.td}}>1080 x 1920 px</td><td style={{...st.td}}>9:16</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Event Cover</td><td style={{...st.td}}>1200 x 628 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Group Cover</td><td style={{...st.td}}>1640 x 856 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Ad Single Image</td><td style={{...st.td}}>1200 x 628 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}>Max 20% text</td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />
        <div style={st.box}>
          <h2 style={st.h2}>Twitter/X Image Sizes</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Profile Photo</td><td style={{...st.td}}>400 x 400 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Displays as circle</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Header/Banner</td><td style={{...st.td}}>1500 x 500 px</td><td style={{...st.td}}>3:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>In-Stream Image</td><td style={{...st.td}}>1600 x 900 px</td><td style={{...st.td}}>16:9</td><td style={{...st.td}}>Optimal for tweets</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Card Image</td><td style={{...st.td}}>1200 x 628 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}>For link previews</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>DM Image</td><td style={{...st.td}}>1200 x 675 px</td><td style={{...st.td}}>16:9</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>LinkedIn Image Sizes</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Profile Photo</td><td style={{...st.td}}>400 x 400 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}>Min 200 x 200</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Background Image</td><td style={{...st.td}}>1584 x 396 px</td><td style={{...st.td}}>4:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Post Image</td><td style={{...st.td}}>1200 x 627 px</td><td style={{...st.td}}>1.91:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Company Logo</td><td style={{...st.td}}>300 x 300 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Company Cover</td><td style={{...st.td}}>1128 x 191 px</td><td style={{...st.td}}>5.9:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Article Cover</td><td style={{...st.td}}>744 x 400 px</td><td style={{...st.td}}>1.86:1</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>YouTube Image Sizes</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Channel Art/Banner</td><td style={{...st.td}}>2560 x 1440 px</td><td style={{...st.td}}>16:9</td><td style={{...st.td}}>Safe area: 1546 x 423</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Profile Photo</td><td style={{...st.td}}>800 x 800 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Video Thumbnail</td><td style={{...st.td}}>1280 x 720 px</td><td style={{...st.td}}>16:9</td><td style={{...st.td}}>Min width 640px</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Watermark</td><td style={{...st.td}}>150 x 150 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>TikTok, Pinterest & Others</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Element</th><th style={st.th}>Dimensions</th><th style={st.th}>Aspect Ratio</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>TikTok Video</td><td style={{...st.td}}>1080 x 1920 px</td><td style={{...st.td}}>9:16</td><td style={{...st.td}}>Full screen vertical</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>TikTok Profile Photo</td><td style={{...st.td}}>200 x 200 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Pin</td><td style={{...st.td}}>1000 x 1500 px</td><td style={{...st.td}}>2:3</td><td style={{...st.td}}>Optimal for feed</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Profile</td><td style={{...st.td}}>165 x 165 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pinterest Board Cover</td><td style={{...st.td}}>222 x 150 px</td><td style={{...st.td}}>3:2</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Snapchat Story/Ad</td><td style={{...st.td}}>1080 x 1920 px</td><td style={{...st.td}}>9:16</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Threads Post Image</td><td style={{...st.td}}>1080 x 1080 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Discord Server Icon</td><td style={{...st.td}}>512 x 512 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>WhatsApp Profile</td><td style={{...st.td}}>500 x 500 px</td><td style={{...st.td}}>1:1</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/character-counter" style={st.toolLink}>character counter</a>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/blog/instagram-caption-length" style={st.blogLink}>instagram caption length</a>
            <a href="/blog/tiktok-caption-length-guide" style={st.blogLink}>tiktok caption length guide</a>
            <a href="/blog/google-ads-character-limits" style={st.blogLink}>google ads character limits</a>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Social Media Image Sizes 2026: Every Platform (Complete Cheat Sheet)","description":"Definitive guide to social media image dimensions in 2026. Profile photos, cover images, post sizes, story dimensions, and ad sizes for every platform.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/social-media-image-sizes"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Social Media Image Sizes 2026","item":"https://www.wordcountertool.net/social-media-image-sizes"}]})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </div>
  )
}
