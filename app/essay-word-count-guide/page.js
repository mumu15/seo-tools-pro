import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Essay Word Count Guide: How Long Should Every Type of Essay Be? (2026) | WordCounterTool',
  description: 'Definitive word count guide for every type of essay. High school, college, graduate, and professional essays with exact word counts and page lengths.',
  alternates: { canonical: 'https://www.wordcountertool.net/essay-word-count-guide' },
  openGraph: {
    title: 'Essay Word Count Guide: How Long Should Every Type of Essay Be? (2026)',
    description: 'Definitive word count guide for every type of essay. High school, college, graduate, and professional essays with exact word counts and page lengths.',
    url: 'https://www.wordcountertool.net/essay-word-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"How many words is a 5-page essay?","a":"A 5-page double-spaced essay is approximately 1,250 words (at 250 words per page). Single-spaced, it would be about 2,500 words."},{"q":"How long is a college application essay?","a":"The Common App essay has a strict 650-word maximum. Most supplemental essays are 100-400 words. Some schools accept up to 1,000 words."},{"q":"How many words is a dissertation?","a":"A PhD dissertation typically ranges from 50,000-100,000 words (200-400 pages). Master theses are shorter at 15,000-50,000 words. This varies significantly by field and institution."},{"q":"How many words per page double spaced?","a":"In standard formatting (12pt Times New Roman, double spaced, 1-inch margins), there are approximately 250 words per page."}]

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
          <span style={{color:'#94a3b8'}}>Essay Word Count Guide</span>
        </nav>

        <h1 style={st.h1}>Essay Word Count Guide: How Long Should Every Type of Essay Be? (2026)</h1>
        <p style={st.desc}>Definitive word count guide for every type of essay. High school, college, graduate, and professional essays with exact word counts and page lengths.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Essay Word Counts by Type</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Essay Type</th><th style={st.th}>Word Count</th><th style={st.th}>Pages (Double Spaced)</th><th style={st.th}>Notes</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>High School Essay</td><td style={{...st.td}}>300-1,000</td><td style={{...st.td}}>1-4 pages</td><td style={{...st.td}}>Varies by assignment</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>College Application Essay (Common App)</td><td style={{...st.td}}>250-650</td><td style={{...st.td}}>1-2 pages</td><td style={{...st.td}}>Strict 650 word max</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>College Supplemental Essay</td><td style={{...st.td}}>100-400</td><td style={{...st.td}}>0.5-1.5 pages</td><td style={{...st.td}}>School-specific</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Scholarship Essay</td><td style={{...st.td}}>250-1,000</td><td style={{...st.td}}>1-4 pages</td><td style={{...st.td}}>Follows prompt length</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Undergraduate Paper</td><td style={{...st.td}}>1,500-5,000</td><td style={{...st.td}}>6-20 pages</td><td style={{...st.td}}>Course dependent</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Graduate Seminar Paper</td><td style={{...st.td}}>3,000-6,000</td><td style={{...st.td}}>12-24 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Research Paper</td><td style={{...st.td}}>4,000-10,000</td><td style={{...st.td}}>16-40 pages</td><td style={{...st.td}}>Varies by field</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Master Thesis</td><td style={{...st.td}}>15,000-50,000</td><td style={{...st.td}}>60-200 pages</td><td style={{...st.td}}>Field dependent</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>PhD Dissertation</td><td style={{...st.td}}>50,000-100,000</td><td style={{...st.td}}>200-400 pages</td><td style={{...st.td}}>Field dependent</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Personal Statement (Grad School)</td><td style={{...st.td}}>500-1,000</td><td style={{...st.td}}>2-4 pages</td><td style={{...st.td}}>Usually 1-2 pages</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Statement of Purpose</td><td style={{...st.td}}>500-1,000</td><td style={{...st.td}}>2-4 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Argumentative Essay</td><td style={{...st.td}}>1,000-3,000</td><td style={{...st.td}}>4-12 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Persuasive Essay</td><td style={{...st.td}}>500-2,000</td><td style={{...st.td}}>2-8 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Expository Essay</td><td style={{...st.td}}>500-1,500</td><td style={{...st.td}}>2-6 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Narrative Essay</td><td style={{...st.td}}>500-2,500</td><td style={{...st.td}}>2-10 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Descriptive Essay</td><td style={{...st.td}}>500-1,500</td><td style={{...st.td}}>2-6 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Compare and Contrast Essay</td><td style={{...st.td}}>1,000-2,500</td><td style={{...st.td}}>4-10 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Cause and Effect Essay</td><td style={{...st.td}}>1,000-2,000</td><td style={{...st.td}}>4-8 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Literary Analysis</td><td style={{...st.td}}>1,000-3,000</td><td style={{...st.td}}>4-12 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Book Report</td><td style={{...st.td}}>500-1,500</td><td style={{...st.td}}>2-6 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Lab Report</td><td style={{...st.td}}>1,000-3,000</td><td style={{...st.td}}>4-12 pages</td><td style={{...st.td}}>Includes data tables</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Case Study</td><td style={{...st.td}}>1,500-5,000</td><td style={{...st.td}}>6-20 pages</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>GRE Essay (Issue)</td><td style={{...st.td}}>400-600</td><td style={{...st.td}}>1.5-2 pages</td><td style={{...st.td}}>30 minutes</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>GRE Essay (Argument)</td><td style={{...st.td}}>350-500</td><td style={{...st.td}}>1-2 pages</td><td style={{...st.td}}>30 minutes</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>IELTS Writing Task 1</td><td style={{...st.td}}>150+ words</td><td style={{...st.td}}>0.5 page</td><td style={{...st.td}}>20 minutes</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>IELTS Writing Task 2</td><td style={{...st.td}}>250+ words</td><td style={{...st.td}}>1 page</td><td style={{...st.td}}>40 minutes</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>TOEFL Essay</td><td style={{...st.td}}>300-400</td><td style={{...st.td}}>1-1.5 pages</td><td style={{...st.td}}>30 minutes</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Words Per Page Reference</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Format</th><th style={st.th}>Words Per Page</th><th style={st.th}>Reference</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Single spaced, 12pt Times New Roman</td><td style={{...st.td}}>500</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Double spaced, 12pt Times New Roman</td><td style={{...st.td}}>250</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Single spaced, 12pt Arial</td><td style={{...st.td}}>450</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Double spaced, 12pt Arial</td><td style={{...st.td}}>225</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Single spaced, 11pt Calibri</td><td style={{...st.td}}>475</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Double spaced, 11pt Calibri</td><td style={{...st.td}}>238</td><td style={{...st.td}}>1 page</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Handwritten (average)</td><td style={{...st.td}}>175-200</td><td style={{...st.td}}>1 page</td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/words-to-pages" style={st.toolLink}>words to pages</a>
            <a href="/reading-time" style={st.toolLink}>reading time</a>
            <a href="/blog/how-many-words-in-a-college-essay" style={st.blogLink}>how many words in a college essay</a>
            <a href="/blog/how-many-words-per-page" style={st.blogLink}>how many words per page</a>
            <a href="/blog/how-many-words-in-a-dissertation" style={st.blogLink}>how many words in a dissertation</a>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Essay Word Count Guide: How Long Should Every Type of Essay Be? (2026)","description":"Definitive word count guide for every type of essay. High school, college, graduate, and professional essays with exact word counts and page lengths.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/essay-word-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Essay Word Count Guide","item":"https://www.wordcountertool.net/essay-word-count-guide"}]})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </div>
  )
}
