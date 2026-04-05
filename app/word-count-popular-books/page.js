import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Word Count of Popular Books: Harry Potter, Lord of the Rings & More (2026) | WordCounterTool.net',
  description: 'Exact word counts for the most popular books and series. Harry Potter, Lord of the Rings, Bible, Game of Thrones, and 50+ more books with page counts and reading times.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count-popular-books' },
  openGraph: {
    title: 'Word Count of Popular Books: Harry Potter, Lord of the Rings & More (2026)',
    description: 'Exact word counts for the most popular books and series. Harry Potter, Lord of the Rings, Bible, Game of Thrones, and 50+ more books with page counts and reading times.',
    url: 'https://www.wordcountertool.net/word-count-popular-books',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"How many words are in Harry Potter?","a":"The entire Harry Potter series has 1,084,170 words across 7 books. The longest book is Order of the Phoenix at 257,045 words. The shortest is Philosopher\'s Stone at 77,325 words."},{"q":"How many words are in the Bible?","a":"The King James Bible has approximately 783,137 words. It would take about 52 hours to read at average reading speed (250 WPM)."},{"q":"How many words are in Lord of the Rings?","a":"The Lord of the Rings trilogy has 481,103 words. Including The Hobbit, the total is 576,459 words."},{"q":"What is the average novel word count?","a":"The average novel is 70,000-100,000 words (280-400 pages). Genre matters: romance averages 50,000-90,000 words while epic fantasy can exceed 200,000 words."}]

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
          <span style={{color:'#94a3b8'}}>Word Count of Popular Books</span>
        </nav>

        <h1 style={st.h1}>Word Count of Popular Books: Harry Potter, Lord of the Rings & More (2026)</h1>
        <p style={st.desc}>Exact word counts for the most popular books and series. Harry Potter, Lord of the Rings, Bible, Game of Thrones, and 50+ more books with page counts and reading times.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Harry Potter Series Word Count</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Book</th><th style={st.th}>Word Count</th><th style={st.th}>Pages</th><th style={st.th}>Reading Time</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Philosopher's Stone</td><td style={{...st.td}}>77,325</td><td style={{...st.td}}>309</td><td style={{...st.td}}>5 hr 9 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Chamber of Secrets</td><td style={{...st.td}}>84,799</td><td style={{...st.td}}>341</td><td style={{...st.td}}>5 hr 39 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Prisoner of Azkaban</td><td style={{...st.td}}>107,253</td><td style={{...st.td}}>435</td><td style={{...st.td}}>7 hr 9 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Goblet of Fire</td><td style={{...st.td}}>190,637</td><td style={{...st.td}}>734</td><td style={{...st.td}}>12 hr 42 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Order of the Phoenix</td><td style={{...st.td}}>257,045</td><td style={{...st.td}}>870</td><td style={{...st.td}}>17 hr 8 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Half-Blood Prince</td><td style={{...st.td}}>168,923</td><td style={{...st.td}}>652</td><td style={{...st.td}}>11 hr 16 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Harry Potter and the Deathly Hallows</td><td style={{...st.td}}>198,227</td><td style={{...st.td}}>759</td><td style={{...st.td}}>13 hr 13 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Total Harry Potter Series</td><td style={{...st.td}}>1,084,170</td><td style={{...st.td}}>4,100</td><td style={{...st.td}}>72 hr 14 min</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Lord of the Rings Word Count</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Book</th><th style={st.th}>Word Count</th><th style={st.th}>Pages</th><th style={st.th}>Reading Time</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Hobbit</td><td style={{...st.td}}>95,356</td><td style={{...st.td}}>310</td><td style={{...st.td}}>6 hr 21 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Fellowship of the Ring</td><td style={{...st.td}}>187,790</td><td style={{...st.td}}>432</td><td style={{...st.td}}>12 hr 31 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Two Towers</td><td style={{...st.td}}>156,198</td><td style={{...st.td}}>352</td><td style={{...st.td}}>10 hr 25 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Return of the King</td><td style={{...st.td}}>137,115</td><td style={{...st.td}}>416</td><td style={{...st.td}}>9 hr 8 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Total LOTR Trilogy</td><td style={{...st.td}}>481,103</td><td style={{...st.td}}>1,200</td><td style={{...st.td}}>32 hr 4 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Total with The Hobbit</td><td style={{...st.td}}>576,459</td><td style={{...st.td}}>1,510</td><td style={{...st.td}}>38 hr 26 min</td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />
        <div style={st.box}>
          <h2 style={st.h2}>Other Popular Books & Series</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Book/Series</th><th style={st.th}>Word Count</th><th style={st.th}>Pages</th><th style={st.th}>Reading Time</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Bible (King James)</td><td style={{...st.td}}>783,137</td><td style={{...st.td}}>1,200</td><td style={{...st.td}}>52 hr 13 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>A Game of Thrones</td><td style={{...st.td}}>298,000</td><td style={{...st.td}}>694</td><td style={{...st.td}}>19 hr 52 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>A Song of Ice and Fire (5 books)</td><td style={{...st.td}}>1,770,000</td><td style={{...st.td}}>4,228</td><td style={{...st.td}}>118 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Great Gatsby</td><td style={{...st.td}}>47,094</td><td style={{...st.td}}>180</td><td style={{...st.td}}>3 hr 8 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>To Kill a Mockingbird</td><td style={{...st.td}}>100,388</td><td style={{...st.td}}>336</td><td style={{...st.td}}>6 hr 41 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>1984</td><td style={{...st.td}}>88,942</td><td style={{...st.td}}>328</td><td style={{...st.td}}>5 hr 56 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Pride and Prejudice</td><td style={{...st.td}}>122,189</td><td style={{...st.td}}>432</td><td style={{...st.td}}>8 hr 9 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Hunger Games</td><td style={{...st.td}}>99,750</td><td style={{...st.td}}>374</td><td style={{...st.td}}>6 hr 39 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Hunger Games Trilogy</td><td style={{...st.td}}>301,583</td><td style={{...st.td}}>1,155</td><td style={{...st.td}}>20 hr 6 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Twilight</td><td style={{...st.td}}>118,975</td><td style={{...st.td}}>498</td><td style={{...st.td}}>7 hr 56 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Twilight Saga (4 books)</td><td style={{...st.td}}>484,830</td><td style={{...st.td}}>2,444</td><td style={{...st.td}}>32 hr 19 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Da Vinci Code</td><td style={{...st.td}}>138,952</td><td style={{...st.td}}>597</td><td style={{...st.td}}>9 hr 16 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Fifty Shades of Grey</td><td style={{...st.td}}>149,965</td><td style={{...st.td}}>514</td><td style={{...st.td}}>10 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Gone Girl</td><td style={{...st.td}}>145,719</td><td style={{...st.td}}>432</td><td style={{...st.td}}>9 hr 43 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Dune</td><td style={{...st.td}}>188,000</td><td style={{...st.td}}>412</td><td style={{...st.td}}>12 hr 32 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Catcher in the Rye</td><td style={{...st.td}}>73,404</td><td style={{...st.td}}>234</td><td style={{...st.td}}>4 hr 53 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Animal Farm</td><td style={{...st.td}}>29,966</td><td style={{...st.td}}>112</td><td style={{...st.td}}>2 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Brave New World</td><td style={{...st.td}}>63,766</td><td style={{...st.td}}>288</td><td style={{...st.td}}>4 hr 15 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Alchemist</td><td style={{...st.td}}>39,000</td><td style={{...st.td}}>197</td><td style={{...st.td}}>2 hr 36 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>War and Peace</td><td style={{...st.td}}>587,287</td><td style={{...st.td}}>1,225</td><td style={{...st.td}}>39 hr 9 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Les Miserables</td><td style={{...st.td}}>530,982</td><td style={{...st.td}}>1,462</td><td style={{...st.td}}>35 hr 24 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Moby Dick</td><td style={{...st.td}}>206,052</td><td style={{...st.td}}>720</td><td style={{...st.td}}>13 hr 44 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Crime and Punishment</td><td style={{...st.td}}>211,591</td><td style={{...st.td}}>671</td><td style={{...st.td}}>14 hr 6 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>The Stand (Stephen King)</td><td style={{...st.td}}>471,485</td><td style={{...st.td}}>1,153</td><td style={{...st.td}}>31 hr 26 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>It (Stephen King)</td><td style={{...st.td}}>445,134</td><td style={{...st.td}}>1,138</td><td style={{...st.td}}>29 hr 40 min</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Average Word Count by Genre</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Genre</th><th style={st.th}>Word Count</th><th style={st.th}>Pages</th><th style={st.th}>Reading Time</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Flash Fiction</td><td style={{...st.td}}>100 - 1,000</td><td style={{...st.td}}>1-4</td><td style={{...st.td}}>Under 5 min</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Short Story</td><td style={{...st.td}}>1,000 - 7,500</td><td style={{...st.td}}>4-30</td><td style={{...st.td}}>5-30 min</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Novella</td><td style={{...st.td}}>17,500 - 40,000</td><td style={{...st.td}}>70-160</td><td style={{...st.td}}>1-3 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Novel (General)</td><td style={{...st.td}}>70,000 - 100,000</td><td style={{...st.td}}>280-400</td><td style={{...st.td}}>5-7 hr</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Romance</td><td style={{...st.td}}>50,000 - 90,000</td><td style={{...st.td}}>200-360</td><td style={{...st.td}}>3-6 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Mystery/Thriller</td><td style={{...st.td}}>70,000 - 90,000</td><td style={{...st.td}}>280-360</td><td style={{...st.td}}>5-6 hr</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Science Fiction</td><td style={{...st.td}}>90,000 - 120,000</td><td style={{...st.td}}>360-480</td><td style={{...st.td}}>6-8 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Fantasy</td><td style={{...st.td}}>90,000 - 150,000</td><td style={{...st.td}}>360-600</td><td style={{...st.td}}>6-10 hr</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Epic Fantasy</td><td style={{...st.td}}>120,000 - 200,000+</td><td style={{...st.td}}>480-800+</td><td style={{...st.td}}>8-14 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Young Adult</td><td style={{...st.td}}>50,000 - 80,000</td><td style={{...st.td}}>200-320</td><td style={{...st.td}}>3-5 hr</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Middle Grade</td><td style={{...st.td}}>20,000 - 55,000</td><td style={{...st.td}}>80-220</td><td style={{...st.td}}>1-4 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Memoir</td><td style={{...st.td}}>60,000 - 90,000</td><td style={{...st.td}}>240-360</td><td style={{...st.td}}>4-6 hr</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Self-Help</td><td style={{...st.td}}>40,000 - 60,000</td><td style={{...st.td}}>160-240</td><td style={{...st.td}}>3-4 hr</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Picture Book</td><td style={{...st.td}}>500 - 1,000</td><td style={{...st.td}}>32</td><td style={{...st.td}}>5 min</td></tr>
          </tbody></table></div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/reading-time" style={st.toolLink}>reading time</a>
            <a href="/words-per-minute" style={st.toolLink}>words per minute</a>
            <a href="/blog/how-many-words-in-a-novel" style={st.blogLink}>how many words in a novel</a>
            <a href="/blog/how-many-words-in-a-short-story" style={st.blogLink}>how many words in a short story</a>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Word Count of Popular Books: Harry Potter, Lord of the Rings & More (2026)","description":"Exact word counts for the most popular books and series. Harry Potter, Lord of the Rings, Bible, Game of Thrones, and 50+ more books with page counts and reading times.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/word-count-popular-books"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Count of Popular Books","item":"https://www.wordcountertool.net/word-count-popular-books"}]})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </div>
  )
}
