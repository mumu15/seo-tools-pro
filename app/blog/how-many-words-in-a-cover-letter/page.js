import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words Should a Cover Letter Be? (2026 Guide)',
  description: 'The ideal cover letter is 250-400 words on one page. Complete guide to cover letter length by career level, with the 4-paragraph structure hiring managers prefer.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter' },
  openGraph: {
    title: 'How Many Words Should a Cover Letter Be? (2026 Guide)',
    description: 'The ideal cover letter is 250-400 words on one page. Complete guide to cover letter length by career level, with the 4-paragraph structure hiring managers prefer.',
    url: 'https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter',
    type: 'article',
  },
}

const faqs = [
  { q: 'How long should a cover letter be?', a: 'A cover letter should be 250-400 words, fitting comfortably on one page with standard margins and font. Three to four focused paragraphs is the standard structure. Never go over one page unless the job posting explicitly requests additional detail.' },
  { q: 'Is a 500-word cover letter too long?', a: 'Yes. A 500-word cover letter is too long for most applications. Hiring managers skim cover letters quickly, and a dense one-pager or two-page letter signals that the applicant cannot communicate concisely. Cut ruthlessly to stay under 400 words.' },
  { q: 'Can a cover letter be too short?', a: 'Under 200 words looks like you did not put in effort. Even for entry-level positions, write at least 250 words showing genuine interest in the role and company. A 150-word cover letter suggests you are using a generic template without customization.' },
  { q: 'What should the 3 paragraphs of a cover letter include?', a: 'Paragraph 1: Why you want this specific role and how you found it (50-80 words). Paragraph 2: Your most relevant achievement with specific results (100-150 words). Paragraph 3: Why this company specifically appeals to you and a call to action (80-120 words).' },
  { q: 'Do cover letters still matter in 2026?', a: 'Yes. While not every employer reads them, a strong cover letter can differentiate you from equally qualified candidates. Studies show that 83% of hiring managers say a great cover letter can convince them to interview a candidate whose resume alone would not have made the cut.' },
  { q: 'Should I include salary expectations in a cover letter?', a: 'Only include salary expectations if the job posting specifically requests them. If required, give a range rather than a specific number. Place it in the closing paragraph after you have made your case for your value, not at the beginning.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words Should a Cover Letter Be? (2026 Guide)</h1>
          <p className="text-slate-400 text-sm mb-8">April 2026 · 10 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A cover letter should be <strong>250-400 words</strong> and fit on <strong>one page</strong>. That is 3-4 short paragraphs. Hiring managers spend under 30 seconds reading a cover letter, so every word must add value. The sweet spot is 300-350 words.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Length by Career Level</h2>
              <p className="text-slate-400 leading-relaxed mb-4">While all cover letters should be concise and fit on one page, the content focus and ideal word count shift depending on your career stage. An entry-level candidate and a senior executive should write fundamentally different cover letters, even though both should target one page.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Career Stage</th><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Focus</th><th className="text-left text-emerald-400 py-2">Tone</th></tr></thead>
                    <tbody>
                      {[['Student / Intern','200-300 words','Enthusiasm, learning ability, coursework','Eager but professional'],['Entry Level','250-350 words','Transferable skills, relevant projects','Confident and specific'],['Mid-Career','300-400 words','Key achievements, measurable results','Results-driven'],['Senior / Director','350-450 words','Leadership impact, strategic vision','Executive presence'],['Career Changer','300-400 words','Transferable skills, motivation for change','Clear narrative arc']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The 4-Paragraph Cover Letter Structure</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The most effective cover letter structure is four focused paragraphs. This format has been refined over decades of hiring practice and remains the gold standard because it answers every question a hiring manager has in a logical sequence.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 1: The Hook (50-80 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Open with the specific role you are applying for and one compelling reason why you are an excellent fit. Do not start with "I am writing to apply for the position of..." because every cover letter starts that way. Instead, lead with your strongest qualification or a relevant achievement that immediately signals your value to the hiring manager.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 2: Your Best Achievement (100-150 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Share one specific, measurable result that is directly relevant to the target role. Use numbers wherever possible: revenue generated, percentage improvements, team sizes, project budgets, or customer satisfaction scores. This is the paragraph that differentiates you from other applicants. A single concrete achievement with metrics is worth more than three paragraphs of general qualifications.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 3: Why This Company (80-120 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Show that you have researched the company by referencing something specific: a recent product launch, company value, industry position, or growth initiative. Explain how your skills and goals align with the company mission. This paragraph proves you are not sending a generic letter to fifty companies. Hiring managers can immediately tell the difference between personalized and mass-mailed cover letters.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Paragraph 4: Call to Action (40-60 words)</h3><p className="text-slate-400 text-sm leading-relaxed">Thank them briefly, express enthusiasm for discussing the role further, and state your availability for an interview. Keep this short and confident. Do not beg, over-apologize, or include disclaimers. End with a professional closing and your name.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Length: Visual Breakdown</h2>
              <p className="text-slate-400 leading-relaxed mb-4">This chart shows how to distribute your word count across the four paragraphs. Notice that the achievement paragraph gets the most space because it is the most persuasive section of your letter.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="200" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Word Budget for a 350-Word Cover Letter</text>
                  {[{label:'Hook (Opening)',words:65,pct:19,y:50,color:'rgba(52,211,153,0.6)'},{label:'Achievement',words:130,pct:37,y:85,color:'rgba(96,165,250,0.6)'},{label:'Why This Company',words:105,pct:30,y:120,color:'rgba(240,200,66,0.6)'},{label:'Call to Action',words:50,pct:14,y:155,color:'rgba(168,85,247,0.5)'}].map((d,i) => (
                    <g key={i}>
                      <text x="130" y={d.y+4} textAnchor="end" style={{fontSize:'11px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="135" y={d.y-9} width={d.pct*10} height="20" rx="4" style={{fill:d.color}} />
                      <text x={145+d.pct*10} y={d.y+4} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.words} words ({d.pct}%)</text>
                    </g>
                  ))}
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Mistakes That Cost You Interviews</h2>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Repeating your resume:</strong> A cover letter that restates your resume in paragraph form adds zero value. The cover letter should tell the story behind one or two resume items, not summarize everything. Recruiters already have your resume. They want to know things the resume cannot tell them: your motivation, personality, and why this specific role matters to you.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Generic openings:</strong> Starting with "Dear Sir or Madam" or "To Whom It May Concern" signals that you did not bother to find the hiring manager name. In 2026, LinkedIn, company websites, and job postings make it easy to find the right person. If you truly cannot find a name, use "Dear Hiring Team" or "Dear [Department] Team."</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Being too long:</strong> A cover letter that spills onto a second page is almost never read in full. Hiring managers have stacks of applications to review. Respect their time by keeping your letter tight and focused. If you cannot say it in 350 words, you are trying to include too many points. Pick your single strongest qualification and build around it.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">No specific examples:</strong> Saying "I am a hard worker with strong communication skills" is meaningless without evidence. Instead, say "I increased client retention by 28% by redesigning the quarterly review process." Specific beats generic every time.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Cover Letter Formatting Tips</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Formatting directly affects the perceived length and readability of your cover letter. A well-formatted 350-word letter looks professional and approachable. A poorly formatted one looks dense and intimidating, even if the content is identical.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Use a professional font like Calibri, Arial, or Georgia at 11-12pt size. Set margins to 1 inch on all sides. Leave a blank line between paragraphs for visual breathing room. Your header should match your resume header for brand consistency. If sending as an email, use the same formatting principles but skip the formal letter header.</p>
              <p className="text-slate-400 leading-relaxed mb-4">For email cover letters, include the content in the email body rather than as an attachment unless specifically instructed otherwise. Recruiters are less likely to open an attached cover letter. Keep the email subject line simple: "Application for [Job Title] — [Your Name]." This makes it easy for the recruiter to find your email later.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Check Your Cover Letter Length</p>
                <p className="text-slate-400 text-sm mb-4">Paste your cover letter to check word count, reading time, and readability.</p>
                <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Open Word Counter →</Link>
              </div>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
                <Link href="/character-counter" className="text-emerald-400 hover:underline text-sm">Character Counter</Link>
                <Link href="/readability-checker" className="text-emerald-400 hover:underline text-sm">Readability Checker</Link>
                <Link href="/sentence-counter" className="text-emerald-400 hover:underline text-sm">Sentence Counter</Link>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Articles</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-many-words-in-a-resume" className="text-emerald-400 hover:underline text-sm">How Many Words in a Resume?</Link>
                <Link href="/blog/how-many-words-per-page" className="text-emerald-400 hover:underline text-sm">How Many Words Per Page?</Link>
                <Link href="/blog/how-to-write-email-subject-lines" className="text-emerald-400 hover:underline text-sm">How to Write Email Subject Lines</Link>
                <Link href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 hover:underline text-sm">How to Write Meta Descriptions</Link>
              </div>
            </section>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Words Should a Cover Letter Be? (2026 Guide)","description":"The ideal cover letter is 250-400 words on one page. Complete guide to cover letter length by career level, with the 4-paragraph structure hiring managers prefer.","datePublished":"2026-04-05","dateModified":"2026-04-05","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool","url":"https://www.wordcountertool.net"},"mainEntityOfPage":"https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter"})}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How Many Words Should a Cover Letter Be? (2026 Guide)","item":"https://www.wordcountertool.net/blog/how-many-words-in-a-cover-letter"}]})}} />
      </main>
      <Footer />
    </>
  )
}
