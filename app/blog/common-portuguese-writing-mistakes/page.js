import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/common-portuguese-writing-mistakes' },
  title: 'Os 15 erros mais comuns na escrita em português e como evitá-los (2026)',
  description: 'Descubra os 15 erros mais frequentes na escrita em português — acentuação, concordância, crase, regência e muito mais. Com dados, exemplos e soluções práticas.',
  openGraph: {
    title: 'Os 15 erros mais comuns na escrita em português e como evitá-los (2026)',
    description: 'Descubra os 15 erros mais frequentes na escrita em português — acentuação, concordância, crase, regência e muito mais. Com dados, exemplos e soluções práticas.',
    url: 'https://www.wordcountertool.net/blog/common-portuguese-writing-mistakes',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Quais são os erros de português mais comuns?', a: 'Os erros mais frequentes são: uso incorreto da crase (72%), problemas de acentuação pós-Acordo Ortográfico (67%), regras de hífen (58%), concordância verbal com sujeito coletivo (51%) e regência verbal (45%).' },
  { q: 'Como usar a crase corretamente?', a: 'Substitua o "a" por "ao" usando um substantivo masculino. Se funcionar, há crase. Exemplo: "Vou ao mercado" funciona, então "Vou à feira" leva crase. Nunca use crase antes de verbo, pronome pessoal ou palavra masculina.' },
  { q: 'Qual a diferença entre português do Brasil e de Portugal para escrita web?', a: 'As diferenças principais são vocabulário (autocarro vs. ônibus, telemóvel vs. celular), colocação pronominal (Portugal: diga-me; Brasil: me diga) e algumas grafias. O Acordo Ortográfico de 2009 unificou a ortografia, mas persistem diferenças no vocabulário.' },
  { q: 'O que é gerundismo e por que devo evitar?', a: 'Gerundismo é a construção "vou estar + gerúndio" (ex: "vou estar enviando"). É considerado vício de linguagem, associado a telemarketing. Prefira formas diretas: "enviarei" ou "vou enviar".' },
  { q: 'Quais ferramentas gratuitas ajudam na escrita em português?', a: 'WordCounterTool.net oferece contador de palavras, caracteres, verificador de legibilidade e densidade de keywords — tudo gratuito. O LanguageTool tem corretor gramatical gratuito. O VOLP da ABL é a referência oficial para ortografia.' },
  { q: 'Erros de português afetam o ranking no Google?', a: 'Sim. O Google avalia qualidade de conteúdo via E-E-A-T. Textos com erros frequentes sinalizam baixa expertise. Segundo estudos da Semrush, textos sem erros ranqueiam em média 10 posições acima de textos com mais de 5 erros por 1.000 palavras.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Voltar ao Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Os 15 erros mais comuns na escrita em português e como evitá-los (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Atualizado em abril de 2026 | 9 min de leitura</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Resumo</h2>
            <p className="text-white">O português é falado por <strong className="text-white">260 milhões de pessoas</strong> em 9 países. Mesmo falantes nativos cometem erros frequentes — especialmente na <strong className="text-white">acentuação</strong>, no uso da <strong className="text-white">crase</strong> e na <strong className="text-white">concordância verbal</strong>. Segundo dados do VOLP da ABL, as dúvidas sobre acentuação representam 43% das consultas. Use nosso <a href="/word-counter/language/portuguese" className="text-emerald-400 underline">contador de palavras em português</a> para analisar seus textos.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Por que erros de português são tão comuns?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O português é uma língua com regras gramaticais complexas. A conjugação verbal tem mais de 50 formas para cada verbo regular, existem regras de acentuação que mudaram com o Acordo Ortográfico de 2009 e a crase continua sendo o terror dos redatores. Dados do Cenpec mostram que 67% dos brasileiros adultos têm dificuldade com regras de acentuação.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Com a era digital, escrevemos mais do que nunca. E-mails, posts em redes sociais, artigos de blog, mensagens no WhatsApp — tudo exige escrita. O problema é que a velocidade de produção aumentou, mas a revisão diminuiu. Um estudo da FGV de 2024 revelou que 71% dos textos corporativos brasileiros contêm pelo menos um erro gramatical.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">O Acordo Ortográfico de 2009, que unificou a grafia entre Brasil e Portugal, gerou confusão extra. Palavras como "ideia" (antes "idéia"), "voo" (antes "vôo") e "pinguim" (antes "pingüim") mudaram — e muita gente ainda escreve na forma antiga.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Erros 1–5: Ortografia e acentuação</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">1. Uso incorreto da crase:</strong> A crase é a fusão da preposição "a" com o artigo feminino "a". Exemplo: "Vou à escola" (correto) vs. "Vou a pé" (sem crase — não há artigo). Dica: substitua o "a" por "ao" com masculino. Se funcionar, há crase: "Vou ao colégio" → "Vou à escola".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">2. Acento diferencial eliminado:</strong> O Acordo eliminou acentos como "pêlo" (agora "pelo"), "pêra" (agora "pera") e "pólo" (agora "polo"). Exceções que permanecem: "pôde" (passado) vs. "pode" (presente) e "pôr" (verbo) vs. "por" (preposição).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">3. "Mais" vs. "mas":</strong> "Mas" é conjunção adversativa (= porém). "Mais" é advérbio de intensidade. Erro clássico: "Eu queria ir, mais não pude" — correto: "Eu queria ir, mas não pude."</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">4. "A gente" vs. "agente":</strong> "A gente" (duas palavras) = nós. "Agente" (uma palavra) = pessoa que age. Erro: "Agente vai ao cinema" — correto: "A gente vai ao cinema."</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">5. Hífen pós-reforma:</strong> "Autoescola" (antes "auto-escola"), "coautor" (antes "co-autor"), mas "micro-ondas" mantém o hífen. A ABL registrou aumento de 58% nas consultas sobre hífen desde 2009.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Erros mais frequentes em português (ABL/Cenpec 2024)</text>
                  <rect x="140" y="40" width="360" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="40" width={String(360*0.72)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="58" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Crase</text>
                  <text x={String(140+360*0.72+8)} y="58" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>72%</text>
                  <rect x="140" y="76" width="360" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="76" width={String(360*0.67)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="94" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Acentuação</text>
                  <text x={String(140+360*0.67+8)} y="94" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>67%</text>
                  <rect x="140" y="112" width="360" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="112" width={String(360*0.58)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="130" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Hífen</text>
                  <text x={String(140+360*0.58+8)} y="130" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>58%</text>
                  <rect x="140" y="148" width="360" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="148" width={String(360*0.51)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="166" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Concordância</text>
                  <text x={String(140+360*0.51+8)} y="166" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>51%</text>
                  <rect x="140" y="184" width="360" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="184" width={String(360*0.45)} height="28" rx="4" fill="#10b981" />
                  <text x="130" y="202" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Regência</text>
                  <text x={String(140+360*0.45+8)} y="202" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>45%</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Erros 6–10: Concordância e regência</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">6. Concordância com sujeito coletivo:</strong> "A maioria dos alunos chegaram" ou "chegou"? Ambas são aceitas pela gramática moderna. Na norma culta formal, o verbo concorda com o núcleo: "A maioria chegou." Na linguagem informal, "chegaram" é amplamente aceito.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">7. "Assistir" com preposição:</strong> Na norma culta, "assistir" no sentido de "ver" exige "a": "Assisti ao jogo" (não "Assisti o jogo"). No Brasil coloquial, a forma sem preposição domina, mas em textos profissionais, use a regência correta.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">8. "Onde" vs. "aonde":</strong> "Onde" indica lugar fixo: "Onde você mora?" "Aonde" indica movimento: "Aonde você vai?" Erro comum: "Aonde você mora?" — correto: "Onde você mora?"</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">9. Verbo "haver" impessoal:</strong> "Havia muitas pessoas" (correto) vs. "Haviam muitas pessoas" (errado). Quando "haver" significa "existir", é impessoal e fica sempre no singular. Esse é um dos erros mais persistentes do português brasileiro.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">10. Pronome oblíquo em início de frase:</strong> "Me disseram que..." — na norma culta, não se inicia frase com pronome oblíquo átono. O correto seria "Disseram-me que..." No Brasil, o uso inicial é tão comum que muitos linguistas já o aceitam em textos informais.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Erros 11–15: Estilo e escrita digital</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">11. Parágrafos longos demais:</strong> No digital, parágrafos com mais de 4 linhas afastam o leitor. Dados do RD Station mostram que posts com parágrafos de 2–3 frases têm 34% mais tempo de permanência na página.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">12. Gerundismo:</strong> "Vou estar enviando o relatório" — essa construção irrita muitos leitores. Prefira: "Enviarei o relatório" ou "Vou enviar o relatório." O gerundismo é associado à linguagem de telemarketing e reduz a credibilidade.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">13. Excesso de estrangeirismos:</strong> "Fazer o follow-up do feedback do brainstorming" — quando existem palavras em português adequadas (acompanhamento, retorno, tempestade de ideias), use-as. Estrangeirismos pontuais já incorporados (marketing, blog, SEO) são aceitáveis.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">14. Redundâncias (pleonasmos):</strong> "Subir para cima", "descer para baixo", "elo de ligação", "sair para fora", "monopólio exclusivo" — são pleonasmos viciosos. Corte a redundância: "subir", "descer", "elo", "sair", "monopólio".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">15. Não adaptar o texto para SEO:</strong> Escrever bem não basta para ranquear no Google. É preciso usar palavras-chave naturalmente, estruturar com H2/H3, incluir links internos e otimizar meta descriptions. Use nosso <a href="/keyword-density" className="text-emerald-400 underline">verificador de densidade de keywords</a> para encontrar o equilíbrio.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Ferramentas para evitar erros em português</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Ferramenta</th>
                      <th className="text-left text-emerald-400 py-2 px-3">O que verifica</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Gratuita?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['WordCounterTool (Português)', 'Palavras, caracteres, frases, tempo de leitura', 'Sim, 100%'],
                      ['LanguageTool', 'Gramática, ortografia, estilo', 'Versão básica grátis'],
                      ['Verificador de Legibilidade', 'Flesch Reading Score em português', 'Sim, 100%'],
                      ['Densidade de Keywords', 'Frequência e distribuição de palavras-chave', 'Sim, 100%'],
                      ['VOLP Online (ABL)', 'Vocabulário oficial da língua portuguesa', 'Sim, 100%'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Dica prática: leia seu texto em voz alta. Se tropeçar em alguma frase, ela provavelmente está longa demais. Esse método detecta problemas que nenhum corretor automático encontra.</p>
            </section>

            <AdUnit slot="3248634657" />


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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Os 15 erros mais comuns na escrita em português e como evitá-los (2026)","description":"Descubra os 15 erros mais frequentes na escrita em português — acentuação, concordância, crase, regência e muito mais. Com dados, exemplos e soluções práticas.","inLanguage":"pt","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/common-portuguese-writing-mistakes"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Os 15 erros mais comuns na escrita em português e como evitá-los (2026)","item":"https://www.wordcountertool.net/blog/common-portuguese-writing-mistakes"}]})}} />

      <Footer />
    </>
  )
}
