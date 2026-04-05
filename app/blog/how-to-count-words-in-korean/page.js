import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-korean' },
  title: '한국어 글자수 세기: 완벽 가이드 (2026년 최신판)',
  description: '한국어 글자수, 단어수, 바이트수의 정확한 계산 방법. 한글 음절 구조, 플랫폼별 제한, 무료 글자수 세기 도구 사용법을 상세히 설명합니다.',
  openGraph: {
    title: '한국어 글자수 세기: 완벽 가이드 (2026년 최신판)',
    description: '한국어 글자수, 단어수, 바이트수의 정확한 계산 방법. 한글 음절 구조, 플랫폼별 제한, 무료 글자수 세기 도구 사용법을 상세히 설명합니다.',
    url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-korean',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: '한국어 글자수는 어떻게 세나요?', a: 'WordCounterTool.net의 한국어 글자수 세기 도구를 사용하세요. 텍스트를 붙여넣으면 글자수(공백 포함/제외), 단어수, 문장수, 읽기 시간이 바로 표시됩니다. 한글, 영문, 숫자 모두 정확하게 세어줍니다.' },
  { q: '한국어 텍스트는 영어보다 길어지나요?', a: '네. 영어를 한국어로 번역하면 글자수가 약 1.5~2배 늘어납니다. 이는 조사, 어미, 존댓말 등 한국어 고유의 문법 요소 때문입니다. 영어 1,000단어 ≈ 한국어 1,500~2,000자입니다.' },
  { q: '한국어 읽기 속도는 얼마나 되나요?', a: '한국어 모국어 사용자는 일반 텍스트를 분당 400~600자로 읽습니다. 소설은 500~700자/분, 학술 텍스트는 250~400자/분입니다. 당 도구는 분당 500자 기준으로 읽기 시간을 계산합니다.' },
  { q: '공백 포함과 공백 제외 중 어느 것을 사용해야 하나요?', a: 'SNS, 네이버 블로그, 카카오톡 등 대부분의 플랫폼은 공백 포함 기준입니다. 학술 논문이나 원고료 계산은 공백 제외를 사용하는 경우가 많습니다. 당 도구는 두 가지를 동시에 표시합니다.' },
  { q: '한국어 블로그 글은 몇 자 써야 하나요?', a: 'SEO를 위해 3,000~5,000자를 권장합니다. 네이버와 구글 검색 상위 10위 글의 평균 글자수는 약 4,000자입니다. 네이버 블로그는 2,000~3,500자가 최적입니다.' },
  { q: 'UTF-8에서 한글 1자는 몇 바이트인가요?', a: '한글 1자는 UTF-8에서 3바이트를 차지합니다. 영문 1자는 1바이트입니다. 따라서 1,000자의 한국어 텍스트는 약 3KB의 저장 공간을 사용합니다.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">블로그로 돌아가기</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">한국어 글자수 세기: 완벽 가이드 (2026년 최신판)</h1>
          <p className="text-slate-400 text-sm mb-8">2026년 4월 업데이트 | 읽기 시간 8분</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">요약</h2>
            <p className="text-white">한국어에서는 <strong className="text-white">"글자수"</strong>가 표준 단위입니다. 한글은 자음과 모음의 조합으로 <strong className="text-white">11,172개의 음절</strong>을 만들 수 있습니다. 한국어 텍스트는 같은 정보를 담은 영어 텍스트보다 <strong className="text-white">글자수로 약 1.5~2배</strong> 많습니다. <a href="/word-counter/language/korean" className="text-emerald-400 underline">한국어 글자수 세기 도구</a>로 정확하게 세어보세요.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">한국어 글자수 세기가 특별한 이유</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한글은 세계에서 가장 과학적으로 설계된 문자 체계 중 하나입니다. 자음 14자와 모음 10자를 조합하여 초성, 중성, 종성으로 구성된 음절을 만듭니다. "한"이라는 글자는 ㅎ(초성) + ㅏ(중성) + ㄴ(종성)으로 이루어져 있습니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한국어에서 "글자수"는 공백을 포함하거나 포함하지 않는 두 가지 방식으로 셉니다. 대부분의 플랫폼(카카오톡, 네이버 블로그, 인스타그램)은 "공백 포함" 기준을 사용합니다. 반면, 학술 논문이나 원고료 계산은 "공백 제외" 기준을 사용하는 경우가 많습니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">영어 텍스트를 한국어로 번역하면 글자수가 약 1.5~2배로 늘어납니다. 이는 한국어의 조사("을/를", "이/가", "은/는")와 어미("-습니다", "-했습니다") 때문입니다. 1,000개의 영어 단어는 한국어로 약 1,500~2,000자에 해당합니다.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">글자수, 단어수, 바이트수의 차이</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">측정 방법</th>
                      <th className="text-left text-emerald-400 py-2 px-3">정의</th>
                      <th className="text-left text-emerald-400 py-2 px-3">예시 ("서울은 아름다운 도시입니다")</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['글자수 (공백 포함)', '모든 문자 + 공백', '13자'],
                      ['글자수 (공백 제외)', '공백을 제외한 문자만', '11자'],
                      ['단어수', '띄어쓰기 기준 단어 수', '4단어'],
                      ['바이트수 (UTF-8)', '저장 용량', '33바이트 (한글 1자=3바이트)'],
                    ].map((row, i) => (
                      <tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}>
                        <td className="text-white py-2 px-3 font-medium">{row[0]}</td>
                        <td className="text-slate-400 py-2 px-3">{row[1]}</td>
                        <td className="text-slate-400 py-2 px-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한국의 대부분의 플랫폼과 기관에서는 "글자수"를 기준으로 합니다. 네이버 블로그의 글자수 제한, 대학교 과제의 분량 요구, 원고료 산정 등 모두 글자수 기준입니다. 당 사이트의 도구는 글자수(공백 포함/제외)와 단어수를 동시에 표시합니다.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">한국어 글자수 세는 방법</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">1단계:</strong> <a href="/word-counter/language/korean" className="text-emerald-400 underline">한국어 글자수 세기 도구</a>를 엽니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">2단계:</strong> 한국어 텍스트를 붙여넣습니다. 도구가 한글, 영문, 숫자, 특수문자를 자동으로 인식하여 정확하게 카운트합니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">3단계:</strong> 결과를 확인합니다 — 글자수(공백 포함/제외), 단어수, 문장수, 단락수, 예상 읽기 시간이 표시됩니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">4단계:</strong> 용도에 맞게 활용합니다. SNS는 글자수(공백 포함), 논문은 글자수(공백 제외), SEO는 둘 다 참고하세요.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한국어 읽기 속도는 분당 약 400~600자(일반 텍스트)입니다. 소설은 약 500~700자/분, 학술 텍스트는 약 250~400자/분입니다. 당 도구는 분당 500자 기준으로 읽기 시간을 자동 계산합니다.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">한국어 콘텐츠의 권장 글자수</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 280" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>한국어 콘텐츠 유형별 권장 글자수</text>
                  <rect x="170" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="45" width={String(340*0.75)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>블로그 글</text>
                  <text x={String(170+340*0.75+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3,000~5,000자</text>
                  <rect x="170" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="81" width={String(340*0.50)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>네이버 블로그</text>
                  <text x={String(170+340*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2,000~3,500자</text>
                  <rect x="170" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="117" width={String(340*0.30)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>상품 설명</text>
                  <text x={String(170+340*0.30+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>800~1,500자</text>
                  <rect x="170" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="153" width={String(340*0.12)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>트위터/X</text>
                  <text x={String(170+340*0.12+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>140자(전각)</text>
                  <rect x="170" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="189" width={String(340*0.08)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>메타 설명</text>
                  <text x={String(170+340*0.08+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>80~120자</text>
                  <rect x="170" y="225" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="170" y="225" width={String(340*1.0)} height="28" rx="4" fill="#10b981" />
                  <text x="160" y="243" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>졸업논문</text>
                  <text x={String(170+340*1.0-100)} y="243" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>20,000~50,000자</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">참고: 한국어 글자수와 영어 단어수는 직접 환산할 수 없습니다. 한국어 3,000자는 영어 약 1,500~2,000단어의 정보량에 해당합니다. SEO 경쟁 분석에서는 한국어 사이트의 글자수를 직접 비교하세요.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">자주 묻는 질문</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">한국어 글쓰기 도구</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/korean" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">한국어 글자수 세기</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">글자수 카운터</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">문자수 체크</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">읽기 시간 계산기</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">가독성 검사기</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">키워드 밀도 검사기</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"한국어 글자수 세기: 완벽 가이드 (2026년 최신판)","description":"한국어 글자수, 단어수, 바이트수의 정확한 계산 방법. 한글 음절 구조, 플랫폼별 제한, 무료 글자수 세기 도구 사용법을 상세히 설명합니다.","inLanguage":"ko","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-korean"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"한국어 글자수 세기: 완벽 가이드 (2026년 최신판)","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-korean"}]})}} />

      <Footer />
    </>
  )
}
