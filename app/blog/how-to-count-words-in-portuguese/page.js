import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-portuguese' },
  title: 'Como contar palavras em português: guia completo para 2026',
  description: 'Aprenda a contar palavras, caracteres e frases em português corretamente. Com diferenças PT-BR vs PT-PT, tempos de leitura e ferramentas gratuitas.',
  openGraph: {
    title: 'Como contar palavras em português: guia completo para 2026',
    description: 'Aprenda a contar palavras, caracteres e frases em português corretamente. Com diferenças PT-BR vs PT-PT, tempos de leitura e ferramentas gratuitas.',
    url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-portuguese',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Como contar palavras em um texto em português?', a: 'Use o contador gratuito em WordCounterTool.net. Cole seu texto e veja palavras, caracteres, frases, parágrafos e tempo de leitura. A ferramenta reconhece todos os caracteres do português (acentos, ç, ã, õ).' },
  { q: 'Textos em português são mais longos que em inglês?', a: 'Sim. Traduções para português brasileiro ficam 10% mais longas em média. Para português europeu, o aumento é de 8%. Isso se deve a artigos contraídos, construções verbais e sintaxe mais elaborada.' },
  { q: 'Qual a velocidade de leitura em português?', a: 'Nativos leem textos informativos a 230–260 palavras por minuto. Ficção é lida a 260–300 PPM. Textos técnicos mais devagar (180–220 PPM). O contador calcula o tempo automaticamente.' },
  { q: 'O contador funciona para português de Portugal?', a: 'Sim. Funciona para qualquer variante — brasileiro, europeu, africano ou asiático. A contagem é baseada em espaços entre palavras, que funciona igualmente em todas as variantes.' },
  { q: 'Contrações contam como uma ou duas palavras?', a: 'Contrações como "do" (de+o), "na" (em+a), "pelo" (por+o) são contadas como uma única palavra. Isso é linguisticamente correto — elas são escritas como uma só palavra.' },
  { q: 'Quantas palavras preciso para um blog post em português?', a: 'Para SEO, recomendamos 1.500–2.500 palavras. Os resultados na primeira página do Google.com.br têm em média 1.950 palavras. Posts mais longos ranqueiam melhor e atraem mais backlinks.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Voltar ao Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Como contar palavras em português: guia completo para 2026</h1>
          <p className="text-slate-400 text-sm mb-8">Atualizado em abril de 2026 | 8 min de leitura</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Resumo</h2>
            <p className="text-white">Textos em português têm, em média, <strong className="text-white">8–12% mais palavras</strong> que os equivalentes em inglês. A velocidade de leitura média é de <strong className="text-white">230–260 palavras por minuto</strong> para textos informativos. Use nosso <a href="/word-counter/language/portuguese" className="text-emerald-400 underline">contador de palavras em português</a> para resultados precisos.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Por que a contagem de palavras em português é diferente</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O português é uma língua românica com características que afetam a contagem de palavras. Ao contrário do inglês, tem artigos contraídos (do, na, pelo, à), pronomes cliticizados (diga-me, fá-lo-ia) e uma tendência a construções mais longas. Isso faz com que textos em português sejam mais longos em número de palavras.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Dados da SDL/RWS Translation Memory de 2024 mostram que traduções do inglês para o português brasileiro são, em média, 10% mais longas. Para o português europeu, o aumento é de cerca de 8%, pois Portugal tende a usar construções mais compactas.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Contrações como "do" (de + o), "na" (em + a), "pelo" (por + o) são contadas como uma palavra cada — e isso é o correto. O português não faz elisões escritas como o francês, o que torna a contagem mais previsível.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Diferenças entre português brasileiro e europeu</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Aspecto</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Português Brasileiro</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Português Europeu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Gerúndio vs. infinitivo', '"Estou fazendo" (2 palavras)', '"Estou a fazer" (3 palavras)'],
                      ['Colocação pronominal', '"Me diga" (antes do verbo)', '"Diga-me" (depois do verbo)'],
                      ['Vocabulário', '"Ônibus, celular, trem"', '"Autocarro, telemóvel, comboio"'],
                      ['Tamanho médio de texto', '10% mais longo que EN', '8% mais longo que EN'],
                      ['Uso de "você"', 'Universal e neutro', 'Formal, preferem "tu"'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O português europeu usa "estar a + infinitivo" (3 palavras) enquanto o brasileiro usa gerúndio (2 palavras). Em um texto longo, isso pode representar uma diferença de 3–5% na contagem total de palavras.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Passo a passo: contar palavras em português</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Passo 1:</strong> Acesse o <a href="/word-counter/language/portuguese" className="text-emerald-400 underline">contador de palavras em português</a> no WordCounterTool.net.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Passo 2:</strong> Cole seu texto. A ferramenta reconhece automaticamente caracteres acentuados (á, é, í, ó, ú, ã, õ, â, ê, ô, ç) e os conta corretamente.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Passo 3:</strong> Confira os resultados: palavras, caracteres (com e sem espaços), frases, parágrafos e tempo estimado de leitura.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Passo 4:</strong> Use a contagem de caracteres para posts em redes sociais e a contagem de palavras para artigos, trabalhos acadêmicos e textos de SEO.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">A velocidade de leitura em português brasileiro é de 230–260 palavras por minuto para textos informativos e 260–300 PPM para ficção. O contador calcula o tempo de leitura com base nesses valores.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Contagem de palavras por tipo de conteúdo</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 260" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Palavras recomendadas por formato (português)</text>
                  <rect x="180" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="45" width={String(340*0.85)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Blog post</text>
                  <text x={String(180+340*0.85+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.500–2.500</text>
                  <rect x="180" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="81" width={String(340*0.50)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Landing page</text>
                  <text x={String(180+340*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>800–1.200</text>
                  <rect x="180" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="117" width={String(340*0.35)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Produto</text>
                  <text x={String(180+340*0.35+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>400–700</text>
                  <rect x="180" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="153" width={String(340*0.22)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Newsletter</text>
                  <text x={String(180+340*0.22+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>300–500</text>
                  <rect x="180" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="189" width={String(340*1.0)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>TCC/Monografia</text>
                  <text x={String(180+340*1.0-100)} y="207" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>10.000–15.000</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Textos em português são naturalmente mais longos que em inglês. Se traduz conteúdo, espere 8–12% mais palavras. Isso não é excesso — é a natureza da língua.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">O mercado lusófono em números</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 260" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Falantes de português por país (2024)</text>
                  <rect x="140" y="45" width="370" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="45" width={String(370*0.82)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Brasil</text>
                  <text x={String(140+370*0.82+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>214M</text>
                  <rect x="140" y="81" width="370" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="81" width={String(370*0.13)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Moçambique</text>
                  <text x={String(140+370*0.13+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>33M</text>
                  <rect x="140" y="117" width="370" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="117" width={String(370*0.12)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Angola</text>
                  <text x={String(140+370*0.12+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>30M</text>
                  <rect x="140" y="153" width="370" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="153" width={String(370*0.04)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Portugal</text>
                  <text x={String(140+370*0.04+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>10,3M</text>
                  <rect x="140" y="189" width="370" height="28" rx="4" fill="rgba(240,200,66,0.15)" />
                  <rect x="140" y="189" width={String(370*1.0)} height="28" rx="4" fill="#f0c842" fillOpacity="0.6" />
                  <text x="130" y="207" textAnchor="end" fill="#f0c842" style={{fontSize:'12px',fontWeight:'700'}}>Total</text>
                  <text x={String(140+370*1.0-80)} y="207" fill="#1e293b" style={{fontSize:'13px',fontWeight:'700'}}>260M+ falantes</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O português é a 6ª língua mais falada do mundo e a língua europeia mais falada no hemisfério sul. O Brasil domina o mercado digital lusófono com 84% dos internautas de língua portuguesa.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Ferramentas de Escrita em Português</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/portuguese" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contador de Palavras Português</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contador de Palavras</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contador de Caracteres</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Calculadora de Tempo de Leitura</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Verificador de Legibilidade</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Densidade de Keywords</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Como contar palavras em português: guia completo para 2026","description":"Aprenda a contar palavras, caracteres e frases em português corretamente. Com diferenças PT-BR vs PT-PT, tempos de leitura e ferramentas gratuitas.","inLanguage":"pt","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-portuguese"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Como contar palavras em português: guia completo para 2026","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-portuguese"}]})}} />

      <Footer />
    </>
  )
}
