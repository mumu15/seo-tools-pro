import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/portuguese-character-count-guide' },
  title: 'Contagem de caracteres em português: guia com limites de plataformas (2026)',
  description: 'Tudo sobre contagem de caracteres em português — acentos, cedilha, til, limites do Twitter/X, Google, Instagram e WhatsApp. Com ferramenta gratuita.',
  openGraph: {
    title: 'Contagem de caracteres em português: guia com limites de plataformas (2026)',
    description: 'Tudo sobre contagem de caracteres em português — acentos, cedilha, til, limites do Twitter/X, Google, Instagram e WhatsApp. Com ferramenta gratuita.',
    url: 'https://www.wordcountertool.net/blog/portuguese-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Como contar caracteres em português?', a: 'Use o contador gratuito em WordCounterTool.net. Ele conta caracteres acentuados (á, ã, ç) corretamente como um único caractere. Mostra contagem com e sem espaços em tempo real.' },
  { q: 'Caracteres acentuados contam como 1 ou 2?', a: 'Contam como 1 caractere em todas as plataformas (Twitter, Instagram, Google). Em UTF-8, ocupam 2 bytes — isso só afeta bancos de dados e APIs que contam bytes.' },
  { q: 'Qual o limite de caracteres do WhatsApp?', a: 'Mensagens: 65.536 caracteres. Status: 700 caracteres. O WhatsApp é a plataforma mais usada no Brasil, com 120 milhões de usuários ativos diários.' },
  { q: 'Como otimizar títulos do Google em português?', a: 'Use abreviações, números em vez de palavras, e priorize o benefício. Teste a largura em pixels no simulador de SERP — letras largas podem cortar antes dos 60 caracteres.' },
  { q: 'SMS com acentos tem limite diferente?', a: 'Sim. SMS com acentos (á, ã, ç) muda de GSM-7 para UCS-2, reduzindo de 160 para 70 caracteres. Se precisa de 160, evite acentos — mas isso compromete a qualidade do texto.' },
  { q: 'Como funciona a cedilha na contagem de caracteres?', a: 'A cedilha (ç) é um único caractere, igual a qualquer outra letra. Nosso contador a processa corretamente. Em UTF-8, ç ocupa 2 bytes, mas conta como 1 caractere para todas as plataformas.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Voltar ao Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contagem de caracteres em português: guia com limites de plataformas (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Atualizado em abril de 2026 | 8 min de leitura</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Resumo</h2>
            <p className="text-white">O português usa <strong className="text-white">38 caracteres</strong> (26 letras + 12 acentuados: á, à, â, ã, é, ê, í, ó, ô, õ, ú, ç). Os limites de caracteres afetam redes sociais, Google Ads (30/90 caracteres) e meta descriptions (155 caracteres). Use nosso <a href="/character-counter" className="text-emerald-400 underline">contador de caracteres gratuito</a> para verificar seus textos.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">O sistema de caracteres do português</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O português utiliza 26 letras latinas base, mais 12 caracteres acentuados e especiais: á, à, â, ã, é, ê, í, ó, ô, õ, ú e ç (cedilha). Essas letras não são decorativas — "avó" (grandmother) e "avô" (grandfather) diferem apenas pelo acento.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">A cedilha (ç) transforma o som de "c" duro em "c" suave. Esquecer a cedilha muda o significado ou torna a palavra incorreta. O til (~) em "ã" e "õ" indica nasalização — "mão" (hand) vs. "mau" (bad) são palavras completamente diferentes.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Para contagem, cada letra acentuada conta como um único caractere. Nosso contador processa todos os caracteres do português corretamente — ao contrário de ferramentas antigas que contam bytes em vez de caracteres Unicode.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Limites de caracteres por plataforma</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Plataforma</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Limite</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Dica para português</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 caracteres', 'Espere 40–50 palavras em português por tweet'],
                      ['Google Title Tag', '50–60 caracteres', 'Acentos ocupam o mesmo espaço visual'],
                      ['Meta Description', '150–155 caracteres', 'Palavra-chave nos primeiros 120 caracteres'],
                      ['Instagram Caption', '2.200 caracteres', 'Primeiros 125 caracteres são os mais visíveis'],
                      ['WhatsApp Status', '700 caracteres', '120M de usuários ativos no Brasil'],
                      ['Google Ads título', '30 caracteres', 'Muito apertado em português — use abreviações'],
                      ['Google Ads descrição', '90 caracteres', 'Benefício principal + CTA'],
                      ['LinkedIn Post', '3.000 caracteres', '1.200–1.800 caracteres para melhor engajamento'],
                      ['YouTube título', '100 caracteres', 'Ideal: 60–70 para não cortar no mobile'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O WhatsApp é a plataforma mais usada no Brasil — 120 milhões de usuários ativos diários (Meta 2024). O status tem limite de 700 caracteres. Mensagens não têm limite prático (máximo técnico de 65.536 caracteres).</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 e caracteres portugueses</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Em UTF-8 (usado por 98,2% dos sites — W3Techs 2025), caracteres acentuados do português ocupam 2 bytes, enquanto letras sem acento ocupam 1 byte.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 180" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Bytes por caractere em UTF-8 (português)</text>
                  <rect x="150" y="45" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="45" width={String(350*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a–z, A–Z</text>
                  <text x={String(150+350*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 byte</text>
                  <rect x="150" y="81" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="81" width={String(350*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="140" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>á, ã, ç, é, ô</text>
                  <text x={String(150+350*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 bytes</text>
                  <rect x="150" y="117" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="117" width={String(350*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="140" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emojis</text>
                  <text x={String(150+350*1.0-60)} y="135" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 bytes</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SMS com caracteres acentuados muda de GSM-7 para UCS-2, reduzindo o limite de 160 para 70 caracteres por SMS. Isso afeta marketing por SMS no Brasil.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Sempre declare <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code> nas suas páginas. Sem isso, caracteres como ã, ç e ô aparecem como símbolos estranhos — problema ainda comum em sites brasileiros antigos.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Dicas práticas para limites de caracteres em português</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> Com 30 caracteres para o título, o português fica apertado. "Seguro de automóvel" já usa 20 caracteres. Use abreviações, números ("5 dicas" vs. "cinco dicas") e CTAs curtos ("Veja" vs. "Confira agora").</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO Title Tags:</strong> Google mede por pixels, não caracteres. Letras largas como "m" ocupam mais espaço. Um título com 55 caracteres pode ser cortado se tiver muitas letras largas. Teste no simulador de SERP.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Instagram:</strong> Os primeiros 125 caracteres aparecem no feed antes do "mais". Em português, isso equivale a 20–25 palavras. Coloque o gancho mais atrativo nesse espaço.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Use nosso <a href="/character-counter" className="text-emerald-400 underline">contador de caracteres</a> para verificar seus textos antes de publicar.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Contagem de caracteres em português: guia com limites de plataformas (2026)","description":"Tudo sobre contagem de caracteres em português — acentos, cedilha, til, limites do Twitter/X, Google, Instagram e WhatsApp. Com ferramenta gratuita.","inLanguage":"pt","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/portuguese-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Contagem de caracteres em português: guia com limites de plataformas (2026)","item":"https://www.wordcountertool.net/blog/portuguese-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
