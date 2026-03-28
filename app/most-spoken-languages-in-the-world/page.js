import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Most Spoken Languages in the World 2026 (By Total & Native Speakers) | WordCounterTool',
  description: 'The most spoken languages worldwide ranked by total speakers and native speakers. Top 50 languages with country data and writing systems.',
  alternates: { canonical: 'https://www.wordcountertool.net/most-spoken-languages-in-the-world' },
  openGraph: {
    title: 'Most Spoken Languages in the World 2026 (By Total & Native Speakers)',
    description: 'The most spoken languages worldwide ranked by total speakers and native speakers. Top 50 languages with country data and writing systems.',
    url: 'https://www.wordcountertool.net/most-spoken-languages-in-the-world',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"What is the most spoken language in the world?","a":"English is the most spoken language with approximately 1.45 billion total speakers (native + non-native). Mandarin Chinese is second with 1.12 billion. By native speakers only, Mandarin is first with 920 million."},{"q":"How many languages are there in the world?","a":"There are approximately 7,168 living languages in the world. However, about 40% are endangered with fewer than 1,000 speakers. The top 23 languages account for more than half the world population."},{"q":"What is the hardest language to learn?","a":"For English speakers, the hardest languages according to the US State Department are Mandarin, Arabic, Japanese, and Korean (Category IV, requiring 2,200+ hours of study). The easiest include Spanish, French, and Italian (Category I, 600-750 hours)."},{"q":"What is the fastest growing language?","a":"The fastest growing languages by total speakers are Hindi, Swahili, and Urdu. On the internet, Arabic, Portuguese, and Indonesian are growing fastest."}]

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
          <span style={{color:'#94a3b8'}}>Most Spoken Languages in the World 2026</span>
        </nav>

        <h1 style={st.h1}>Most Spoken Languages in the World 2026 (By Total & Native Speakers)</h1>
        <p style={st.desc}>The most spoken languages worldwide ranked by total speakers and native speakers. Top 50 languages with country data and writing systems.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Top 30 Languages by Total Speakers</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Rank</th><th style={st.th}>Language</th><th style={st.th}>Total Speakers</th><th style={st.th}>Native Speakers</th><th style={st.th}>Countries</th><th style={st.th}>Script</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>1</td><td style={{...st.td}}>English</td><td style={{...st.td}}>1.45 billion</td><td style={{...st.td}}>380 million</td><td style={{...st.td}}>59 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>2</td><td style={{...st.td}}>Mandarin Chinese</td><td style={{...st.td}}>1.12 billion</td><td style={{...st.td}}>920 million</td><td style={{...st.td}}>3 countries</td><td style={{...st.td}}>Chinese characters</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>3</td><td style={{...st.td}}>Hindi</td><td style={{...st.td}}>609 million</td><td style={{...st.td}}>345 million</td><td style={{...st.td}}>4 countries</td><td style={{...st.td}}>Devanagari</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>4</td><td style={{...st.td}}>Spanish</td><td style={{...st.td}}>559 million</td><td style={{...st.td}}>485 million</td><td style={{...st.td}}>20 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>5</td><td style={{...st.td}}>French</td><td style={{...st.td}}>310 million</td><td style={{...st.td}}>80 million</td><td style={{...st.td}}>29 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>6</td><td style={{...st.td}}>Arabic</td><td style={{...st.td}}>310 million</td><td style={{...st.td}}>270 million</td><td style={{...st.td}}>25 countries</td><td style={{...st.td}}>Arabic</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>7</td><td style={{...st.td}}>Bengali</td><td style={{...st.td}}>278 million</td><td style={{...st.td}}>230 million</td><td style={{...st.td}}>2 countries</td><td style={{...st.td}}>Bengali</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>8</td><td style={{...st.td}}>Portuguese</td><td style={{...st.td}}>264 million</td><td style={{...st.td}}>235 million</td><td style={{...st.td}}>10 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>9</td><td style={{...st.td}}>Russian</td><td style={{...st.td}}>258 million</td><td style={{...st.td}}>150 million</td><td style={{...st.td}}>4 countries</td><td style={{...st.td}}>Cyrillic</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>10</td><td style={{...st.td}}>Urdu</td><td style={{...st.td}}>231 million</td><td style={{...st.td}}>70 million</td><td style={{...st.td}}>2 countries</td><td style={{...st.td}}>Arabic/Nastaliq</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>11</td><td style={{...st.td}}>Indonesian</td><td style={{...st.td}}>199 million</td><td style={{...st.td}}>44 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>12</td><td style={{...st.td}}>German</td><td style={{...st.td}}>134 million</td><td style={{...st.td}}>75 million</td><td style={{...st.td}}>6 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>13</td><td style={{...st.td}}>Japanese</td><td style={{...st.td}}>125 million</td><td style={{...st.td}}>123 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Hiragana/Katakana/Kanji</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>14</td><td style={{...st.td}}>Marathi</td><td style={{...st.td}}>99 million</td><td style={{...st.td}}>83 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Devanagari</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>15</td><td style={{...st.td}}>Telugu</td><td style={{...st.td}}>96 million</td><td style={{...st.td}}>83 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Telugu</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>16</td><td style={{...st.td}}>Turkish</td><td style={{...st.td}}>88 million</td><td style={{...st.td}}>80 million</td><td style={{...st.td}}>2 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>17</td><td style={{...st.td}}>Tamil</td><td style={{...st.td}}>86 million</td><td style={{...st.td}}>78 million</td><td style={{...st.td}}>3 countries</td><td style={{...st.td}}>Tamil</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>18</td><td style={{...st.td}}>Korean</td><td style={{...st.td}}>82 million</td><td style={{...st.td}}>77 million</td><td style={{...st.td}}>2 countries</td><td style={{...st.td}}>Hangul</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>19</td><td style={{...st.td}}>Vietnamese</td><td style={{...st.td}}>85 million</td><td style={{...st.td}}>76 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>20</td><td style={{...st.td}}>Italian</td><td style={{...st.td}}>85 million</td><td style={{...st.td}}>64 million</td><td style={{...st.td}}>4 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>21</td><td style={{...st.td}}>Cantonese</td><td style={{...st.td}}>85 million</td><td style={{...st.td}}>82 million</td><td style={{...st.td}}>3 regions</td><td style={{...st.td}}>Chinese characters</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>22</td><td style={{...st.td}}>Thai</td><td style={{...st.td}}>71 million</td><td style={{...st.td}}>21 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Thai</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>23</td><td style={{...st.td}}>Gujarati</td><td style={{...st.td}}>62 million</td><td style={{...st.td}}>57 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Gujarati</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>24</td><td style={{...st.td}}>Polish</td><td style={{...st.td}}>45 million</td><td style={{...st.td}}>40 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>25</td><td style={{...st.td}}>Kannada</td><td style={{...st.td}}>56 million</td><td style={{...st.td}}>44 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Kannada</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>26</td><td style={{...st.td}}>Malayalam</td><td style={{...st.td}}>38 million</td><td style={{...st.td}}>35 million</td><td style={{...st.td}}>1 country</td><td style={{...st.td}}>Malayalam</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>27</td><td style={{...st.td}}>Swahili</td><td style={{...st.td}}>98 million</td><td style={{...st.td}}>16 million</td><td style={{...st.td}}>14 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>28</td><td style={{...st.td}}>Dutch</td><td style={{...st.td}}>30 million</td><td style={{...st.td}}>25 million</td><td style={{...st.td}}>3 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>29</td><td style={{...st.td}}>Swedish</td><td style={{...st.td}}>13 million</td><td style={{...st.td}}>10 million</td><td style={{...st.td}}>2 countries</td><td style={{...st.td}}>Latin</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>30</td><td style={{...st.td}}>Persian/Farsi</td><td style={{...st.td}}>110 million</td><td style={{...st.td}}>55 million</td><td style={{...st.td}}>3 countries</td><td style={{...st.td}}>Arabic/Persian</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Languages on the Internet</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Rank</th><th style={st.th}>Language</th><th style={st.th}>% of Internet</th><th style={st.th}>Internet Users</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>1</td><td style={{...st.td}}>English</td><td style={{...st.td}}>25.9%</td><td style={{...st.td}}>1.19 billion users</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>2</td><td style={{...st.td}}>Chinese</td><td style={{...st.td}}>19.4%</td><td style={{...st.td}}>888 million users</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>3</td><td style={{...st.td}}>Spanish</td><td style={{...st.td}}>7.9%</td><td style={{...st.td}}>363 million users</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>4</td><td style={{...st.td}}>Arabic</td><td style={{...st.td}}>5.2%</td><td style={{...st.td}}>237 million users</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>5</td><td style={{...st.td}}>Portuguese</td><td style={{...st.td}}>3.7%</td><td style={{...st.td}}>171 million users</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>6</td><td style={{...st.td}}>Indonesian/Malay</td><td style={{...st.td}}>4.3%</td><td style={{...st.td}}>198 million users</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>7</td><td style={{...st.td}}>French</td><td style={{...st.td}}>3.3%</td><td style={{...st.td}}>151 million users</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>8</td><td style={{...st.td}}>Japanese</td><td style={{...st.td}}>2.6%</td><td style={{...st.td}}>118 million users</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>9</td><td style={{...st.td}}>Russian</td><td style={{...st.td}}>2.5%</td><td style={{...st.td}}>116 million users</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>10</td><td style={{...st.td}}>German</td><td style={{...st.td}}>2.0%</td><td style={{...st.td}}>92 million users</td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/word-counter/language/arabic" style={st.toolLink}>word counter language arabic</a>
            <a href="/word-counter/language/chinese" style={st.toolLink}>word counter language chinese</a>
            <a href="/word-counter/language/spanish" style={st.toolLink}>word counter language spanish</a>
            <a href="/word-counter/language/french" style={st.toolLink}>word counter language french</a>
            <a href="/word-counter/language/hindi" style={st.toolLink}>word counter language hindi</a>
            <a href="/word-counter/language/japanese" style={st.toolLink}>word counter language japanese</a>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Most Spoken Languages in the World 2026 (By Total & Native Speakers)","description":"The most spoken languages worldwide ranked by total speakers and native speakers. Top 50 languages with country data and writing systems.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/most-spoken-languages-in-the-world"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Most Spoken Languages in the World 2026","item":"https://www.wordcountertool.net/most-spoken-languages-in-the-world"}]})}} />
      <Footer />
    </div>
  )
}
