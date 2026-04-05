import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/korean-character-count-guide' },
  title: '한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)',
  description: '한국어 글자수 카운트 방법과 플랫폼별 제한 — 네이버, 카카오톡, 인스타그램, 구글, 트위터/X. 무료 글자수 체크 도구 포함.',
  openGraph: {
    title: '한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)',
    description: '한국어 글자수 카운트 방법과 플랫폼별 제한 — 네이버, 카카오톡, 인스타그램, 구글, 트위터/X. 무료 글자수 체크 도구 포함.',
    url: 'https://www.wordcountertool.net/blog/korean-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: '한국어 글자수는 어떻게 체크하나요?', a: 'WordCounterTool.net의 무료 글자수 체크 도구를 사용하세요. 한글, 영문, 숫자를 모두 정확하게 구분하여 카운트합니다. 공백 포함/제외 글자수를 동시에 표시합니다.' },
  { q: '한글 1자는 몇 바이트인가요?', a: 'UTF-8에서 한글 1자는 3바이트입니다. 영문 1자는 1바이트. SMS에서는 EUC-KR 기준으로 한글 1자=2바이트이며, SMS 1건 한도는 한글 40자(80바이트)입니다.' },
  { q: '네이버와 구글의 타이틀 글자수 차이는?', a: '구글은 약 30~32자, 네이버는 약 35~40자를 표시합니다. 두 플랫폼 모두에서 잘리지 않게 하려면 30자 이내로 작성하는 것이 안전합니다.' },
  { q: '카카오톡 메시지의 글자수 제한은?', a: '카카오톡 일반 메시지는 사실상 제한이 없습니다(매우 긴 텍스트도 전송 가능). 하지만 읽기 편한 메시지는 300자 이내입니다. 카카오톡 채널 메시지는 1,000자 제한이 있습니다.' },
  { q: '공백 포함과 공백 제외 중 무엇을 사용해야 하나요?', a: '대부분의 한국 플랫폼(네이버, 카카오, 인스타그램)은 공백 포함 기준입니다. 학술 논문과 출판 원고료는 공백 제외를 사용하는 경우가 많습니다. 당 도구는 두 가지를 동시에 표시합니다.' },
  { q: '한글은 몇 개의 음절을 만들 수 있나요?', a: '한글은 자음 14자와 모음 10자의 조합으로 총 11,172개의 완성형 음절을 만들 수 있습니다. 이는 유니코드 범위 U+AC00~U+D7A3에 등록되어 있습니다.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">블로그로 돌아가기</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">2026년 4월 업데이트 | 읽기 시간 8분</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">요약</h2>
            <p className="text-white">한글은 <strong className="text-white">자음 14자 + 모음 10자</strong>의 조합으로 <strong className="text-white">11,172개</strong>의 음절을 만듭니다. 플랫폼별 글자수 제한이 다릅니다: 트위터/X <strong className="text-white">140자(전각)</strong>, 네이버 블로그 제목 <strong className="text-white">100자</strong>, 구글 타이틀 <strong className="text-white">약 30자</strong>. <a href="/character-counter" className="text-emerald-400 underline">무료 글자수 체크 도구</a>로 확인하세요.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">한글의 문자 체계</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한글은 1443년 세종대왕이 창제한 문자입니다. 자음 14자(ㄱ~ㅎ)와 모음 10자(ㅏ~ㅣ)를 조합하여 초성·중성·종성 구조의 음절을 만듭니다. 총 11,172개의 완성형 음절이 유니코드에 등록되어 있습니다(U+AC00 ~ U+D7A3).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한글의 글자수 세기에서 가장 중요한 구분은 "공백 포함"과 "공백 제외"입니다. 네이버와 카카오 등 한국의 주요 플랫폼은 공백을 포함하여 글자수를 계산합니다. 하지만 출판업계의 원고료 산정에서는 공백을 제외하는 경우가 많습니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">당 사이트의 글자수 체크 도구는 한글, 영문, 숫자, 특수문자, 공백을 모두 정확하게 구분하여 카운트합니다. 공백 포함/제외 글자수를 동시에 표시하므로 어떤 용도에도 활용할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">플랫폼별 글자수 제한</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">플랫폼</th>
                      <th className="text-left text-emerald-400 py-2 px-3">글자수 제한</th>
                      <th className="text-left text-emerald-400 py-2 px-3">한국어 팁</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['트위터/X', '전각 140자 (반각 280자)', '한국어 정보 밀도 높아 140자로도 충분'],
                      ['네이버 블로그 제목', '100자', '핵심 키워드를 앞 30자에 배치'],
                      ['네이버 블로그 본문', '제한 없음', 'SEO 추천: 2,000~3,500자'],
                      ['카카오톡 메시지', '제한 없음 (실용적 한계 있음)', '300자 이내가 읽기 편함'],
                      ['인스타그램 캡션', '2,200자', '첫 40자가 피드에서 보임'],
                      ['구글 타이틀 태그', '약 30~32자 (전각)', '네이버보다 짧으므로 핵심만'],
                      ['구글 메타 설명', '약 80~120자 (전각)', '첫 60자에 핵심 가치 제안'],
                      ['네이버 검색 타이틀', '약 35~40자', '구글보다 여유 있음'],
                      ['유튜브 제목', '100자', '이상적: 30~50자'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">한국 시장에서는 네이버와 구글 두 플랫폼을 모두 고려해야 합니다. 네이버의 타이틀 표시 글자수(약 35~40자)와 구글의 타이틀 표시 글자수(약 30~32자)가 다르므로, 구글 기준(짧은 쪽)에 맞추는 것이 안전합니다.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8과 한글</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8 인코딩: 문자 종류별 바이트 수</text>
                  <rect x="160" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="45" width={String(340*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>영문/숫자</text>
                  <text x={String(160+340*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1바이트</text>
                  <rect x="160" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="81" width={String(340*0.75)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>한글</text>
                  <text x={String(160+340*0.75+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3바이트</text>
                  <rect x="160" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="117" width={String(340*0.75)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>한글 자모</text>
                  <text x={String(160+340*0.75+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3바이트</text>
                  <rect x="160" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="153" width={String(340*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="150" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>이모지</text>
                  <text x={String(160+340*1.0-60)} y="171" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4바이트</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">UTF-8에서 한글 1자는 3바이트를 차지합니다. 1,000자의 한국어 텍스트는 약 3KB의 저장 공간을 사용합니다. 데이터베이스나 API에서 바이트 기준 제한이 있는 경우 이를 고려해야 합니다.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SMS에서는 한글이 EUC-KR 인코딩을 사용하여 1자당 2바이트를 차지합니다. SMS 1건의 한도는 80바이트(한글 40자)이며, 이를 초과하면 장문 메시지(LMS)로 전환됩니다.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">한국어 SEO에서의 글자수 최적화</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">타이틀 태그:</strong> 구글은 약 30~32자, 네이버는 약 35~40자를 표시합니다. 두 플랫폼 모두에서 잘리지 않으려면 30자 이내가 안전합니다. 핵심 키워드를 첫 15자에 배치하세요.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">메타 설명:</strong> 구글은 약 80~120자, 네이버는 약 100~150자를 표시합니다. 핵심 키워드와 가치 제안을 첫 60자에 넣고, 나머지에서 CTA를 전달하세요. <a href="/character-counter" className="text-emerald-400 underline">글자수 체크 도구</a>로 길이를 확인하세요.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">소제목 (H2/H3):</strong> 한국어 소제목은 15~25자가 읽기 편합니다. 키워드를 포함하면서도 구체적인 이점을 전달하는 소제목이 이상적입니다.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)","description":"한국어 글자수 카운트 방법과 플랫폼별 제한 — 네이버, 카카오톡, 인스타그램, 구글, 트위터/X. 무료 글자수 체크 도구 포함.","inLanguage":"ko","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/korean-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)","item":"https://www.wordcountertool.net/blog/korean-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
