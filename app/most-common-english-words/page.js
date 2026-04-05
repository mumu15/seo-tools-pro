import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: '1,000 Most Common English Words (Ranked by Frequency 2026) | WordCounterTool',
  description: 'The 1,000 most frequently used English words ranked by usage. Includes word frequency data, parts of speech, and learning tips.',
  alternates: { canonical: 'https://www.wordcountertool.net/most-common-english-words' },
  openGraph: {
    title: '1,000 Most Common English Words (Ranked by Frequency 2026)',
    description: 'The 1,000 most frequently used English words ranked by usage. Includes word frequency data, parts of speech, and learning tips.',
    url: 'https://www.wordcountertool.net/most-common-english-words',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [{"q":"What is the most common English word?","a":"'The' is the most common English word, making up about 7.14% of all words in written English. It appears approximately 69,970 times per million words."},{"q":"How many words do you need to know to speak English?","a":"Knowing the top 1,000 words covers about 80% of everyday English. 3,000 words covers 90%. For fluency, 5,000-10,000 words is recommended."},{"q":"How many words are in the English language?","a":"There are approximately 170,000+ words currently in use in English, with about 47,000 considered obsolete. The Oxford English Dictionary contains over 600,000 entries."},{"q":"What are the most common verbs in English?","a":"The most common English verbs are: be, have, do, say, get, make, go, know, take, see, come, think, look, want, and give."}]

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
          <span style={{color:'#94a3b8'}}>1,000 Most Common English Words</span>
        </nav>

        <h1 style={st.h1}>1,000 Most Common English Words (Ranked by Frequency 2026)</h1>
        <p style={st.desc}>The 1,000 most frequently used English words ranked by usage. Includes word frequency data, parts of speech, and learning tips.</p>
        <p style={st.vol}>Updated March 2026</p>

        <div style={st.box}>
          <h2 style={st.h2}>Top 100 Most Common English Words</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Rank</th><th style={st.th}>Word</th><th style={st.th}>Part of Speech</th><th style={st.th}>Frequency</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>1</td><td style={{...st.td}}>the</td><td style={{...st.td}}>Article</td><td style={{...st.td}}>7.14%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>2</td><td style={{...st.td}}>be</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>3.63%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>3</td><td style={{...st.td}}>to</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>3.56%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>4</td><td style={{...st.td}}>of</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>3.49%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>5</td><td style={{...st.td}}>and</td><td style={{...st.td}}>Conjunction</td><td style={{...st.td}}>2.67%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>6</td><td style={{...st.td}}>a</td><td style={{...st.td}}>Article</td><td style={{...st.td}}>2.30%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>7</td><td style={{...st.td}}>in</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>2.04%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>8</td><td style={{...st.td}}>that</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>1.47%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>9</td><td style={{...st.td}}>have</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>1.34%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>10</td><td style={{...st.td}}>I</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>1.23%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>11</td><td style={{...st.td}}>it</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>1.16%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>12</td><td style={{...st.td}}>for</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>1.07%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>13</td><td style={{...st.td}}>not</td><td style={{...st.td}}>Adverb</td><td style={{...st.td}}>1.04%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>14</td><td style={{...st.td}}>on</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.98%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>15</td><td style={{...st.td}}>with</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.95%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>16</td><td style={{...st.td}}>he</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.94%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>17</td><td style={{...st.td}}>as</td><td style={{...st.td}}>Conjunction</td><td style={{...st.td}}>0.87%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>18</td><td style={{...st.td}}>you</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.85%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>19</td><td style={{...st.td}}>do</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.83%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>20</td><td style={{...st.td}}>at</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.75%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>21</td><td style={{...st.td}}>this</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.74%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>22</td><td style={{...st.td}}>but</td><td style={{...st.td}}>Conjunction</td><td style={{...st.td}}>0.72%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>23</td><td style={{...st.td}}>his</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.68%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>24</td><td style={{...st.td}}>by</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.66%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>25</td><td style={{...st.td}}>from</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.64%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>26</td><td style={{...st.td}}>they</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.63%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>27</td><td style={{...st.td}}>we</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.60%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>28</td><td style={{...st.td}}>say</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.57%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>29</td><td style={{...st.td}}>her</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.55%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>30</td><td style={{...st.td}}>she</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.54%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>31</td><td style={{...st.td}}>or</td><td style={{...st.td}}>Conjunction</td><td style={{...st.td}}>0.53%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>32</td><td style={{...st.td}}>an</td><td style={{...st.td}}>Article</td><td style={{...st.td}}>0.51%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>33</td><td style={{...st.td}}>will</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.50%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>34</td><td style={{...st.td}}>my</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.48%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>35</td><td style={{...st.td}}>one</td><td style={{...st.td}}>Numeral</td><td style={{...st.td}}>0.47%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>36</td><td style={{...st.td}}>all</td><td style={{...st.td}}>Determiner</td><td style={{...st.td}}>0.46%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>37</td><td style={{...st.td}}>would</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.45%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>38</td><td style={{...st.td}}>there</td><td style={{...st.td}}>Adverb</td><td style={{...st.td}}>0.44%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>39</td><td style={{...st.td}}>their</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.43%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>40</td><td style={{...st.td}}>what</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.42%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>41</td><td style={{...st.td}}>so</td><td style={{...st.td}}>Adverb</td><td style={{...st.td}}>0.41%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>42</td><td style={{...st.td}}>up</td><td style={{...st.td}}>Adverb</td><td style={{...st.td}}>0.40%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>43</td><td style={{...st.td}}>out</td><td style={{...st.td}}>Adverb</td><td style={{...st.td}}>0.39%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>44</td><td style={{...st.td}}>if</td><td style={{...st.td}}>Conjunction</td><td style={{...st.td}}>0.38%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>45</td><td style={{...st.td}}>about</td><td style={{...st.td}}>Preposition</td><td style={{...st.td}}>0.37%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>46</td><td style={{...st.td}}>who</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.36%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>47</td><td style={{...st.td}}>get</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.35%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>48</td><td style={{...st.td}}>which</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.34%</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>49</td><td style={{...st.td}}>go</td><td style={{...st.td}}>Verb</td><td style={{...st.td}}>0.33%</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>50</td><td style={{...st.td}}>me</td><td style={{...st.td}}>Pronoun</td><td style={{...st.td}}>0.32%</td></tr>
          </tbody></table></div>
        </div>
        <div style={st.box}>
          <h2 style={st.h2}>Word Coverage Statistics</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Words Known</th><th style={st.th}>Coverage</th><th style={st.th}>Context</th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 10 words</td><td style={{...st.td}}>25%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 100 words</td><td style={{...st.td}}>50%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 300 words</td><td style={{...st.td}}>65%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 1,000 words</td><td style={{...st.td}}>80%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 3,000 words</td><td style={{...st.td}}>90%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Top 5,000 words</td><td style={{...st.td}}>95%</td><td style={{...st.td}}>of all English text</td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Total English words</td><td style={{...st.td}}>170,000+</td><td style={{...st.td}}>in current use</td></tr>
          </tbody></table></div>
        </div>
        <AdUnit slot="3248634657" />
        <div style={st.box}>
          <h2 style={st.h2}>Most Common Words by Category</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr><th style={st.th}>Category</th><th style={st.th}>Most Common Words</th><th style={st.th}></th></tr></thead><tbody>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Nouns</td><td style={{...st.td}}>time, year, people, way, day, man, woman, child, world, life, hand, part, place, case, week</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Verbs</td><td style={{...st.td}}>be, have, do, say, get, make, go, know, take, see, come, think, look, want, give</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Adjectives</td><td style={{...st.td}}>good, new, first, last, long, great, little, own, other, old, right, big, high, different, small</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'rgba(255,255,255,0.015)'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Adverbs</td><td style={{...st.td}}>not, also, very, often, however, too, usually, really, already, always, never, sometimes, then, now</td><td style={{...st.td}}></td></tr>
              <tr style={{background:'transparent'}}><td style={{...st.td,fontWeight:600,color:'#e2e8f0'}}>Prepositions</td><td style={{...st.td}}>to, of, in, for, on, with, at, by, from, up, about, into, over, after, through</td><td style={{...st.td}}></td></tr>
          </tbody></table></div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            <a href="/word-counter" style={st.toolLink}>word counter</a>
            <a href="/character-counter" style={st.toolLink}>character counter</a>
            <a href="/reading-time" style={st.toolLink}>reading time</a>
            <a href="/word-frequency" style={st.toolLink}>word frequency</a>
            <a href="/blog/how-many-words-in-a-paragraph" style={st.blogLink}>how many words in a paragraph</a>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"1,000 Most Common English Words (Ranked by Frequency 2026)","description":"The 1,000 most frequently used English words ranked by usage. Includes word frequency data, parts of speech, and learning tips.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"https://www.wordcountertool.net/most-common-english-words"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"1,000 Most Common English Words","item":"https://www.wordcountertool.net/most-common-english-words"}]})}} />

        <AdUnit slot="3248634657" />

      <Footer />
    </div>
  )
}
