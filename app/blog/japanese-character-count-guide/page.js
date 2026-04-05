import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/japanese-character-count-guide' },
  title: '日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）',
  description: '日本語の文字数カウント方法とプラットフォーム別の制限——Twitter/X、Google、Yahoo!、LINE、Instagram。無料チェッカー付き。',
  openGraph: {
    title: '日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）',
    description: '日本語の文字数カウント方法とプラットフォーム別の制限——Twitter/X、Google、Yahoo!、LINE、Instagram。無料チェッカー付き。',
    url: 'https://www.wordcountertool.net/blog/japanese-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: '日本語の文字数をカウントするには？', a: 'WordCounterTool.netの日本語文字カウンターを使用してください。テキストを貼り付けるだけで文字数（全角・半角別）、単語数、文数、読了時間が表示されます。ひらがな、カタカナ、漢字、英数字すべて正確にカウントします。' },
  { q: '全角と半角の違いは何ですか？', a: '全角文字（ひらがな、カタカナ、漢字）は半角文字（英数字）の2倍の幅を占めます。Twitter/Xでは全角1文字=2カウント、半角1文字=1カウントです。Google広告では全角1文字=半角2文字としてカウントされます。' },
  { q: 'Googleタイトルは何文字まで表示されますか？', a: 'Googleは約30〜32全角文字を表示します。Yahoo! JAPANは約28文字とやや短いです。両方で切れないようにするには28文字以内が安全です。ピクセル幅で測定されるため、文字種によって多少変動します。' },
  { q: 'LINE公式のメッセージ文字数制限は？', a: 'LINEの公式アカウントメッセージは500文字が上限です。データによると、300文字以内のメッセージが開封率・クリック率ともに最高です。重要な情報を最初の100文字に入れましょう。' },
  { q: '日本語のメタディスクリプションの最適な長さは？', a: 'Googleは約120全角文字、Yahoo!は約110文字を表示します。100文字前後が安全な長さです。最初の60文字に検索意図に応える要約を入れ、残りでCTAを伝えましょう。' },
  { q: 'UTF-8で日本語1文字は何バイトですか？', a: 'ひらがな、カタカナ、漢字はそれぞれ3バイトです。半角英数字は1バイト。絵文字は4バイト。1,000文字の日本語テキストは約3KBのストレージを使用します。' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">ブログに戻る</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）</h1>
          <p className="text-slate-400 text-sm mb-8">2026年4月更新 | 読了時間8分</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">まとめ</h2>
            <p className="text-white">日本語は<strong className="text-white">ひらがな46字、カタカナ46字、常用漢字2,136字</strong>で構成されます。各プラットフォームの文字制限が異なるため、正確なカウントが不可欠です。Twitter/Xは<strong className="text-white">全角140字</strong>、Googleタイトルは<strong className="text-white">約30〜32字</strong>、Yahoo!は<strong className="text-white">約28字</strong>。当サイトの<a href="/character-counter" className="text-emerald-400 underline">無料文字数チェッカー</a>で確認できます。</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">日本語の文字体系</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">日本語は世界で唯一、3つの文字体系を同時に使用する言語です。ひらがな（あ〜ん、46文字）は和語や文法要素に、カタカナ（ア〜ン、46文字）は外来語や擬音語に、漢字は意味を持つ表意文字として使われます。この3つの使い分けは文字数カウントには影響しませんが、文章の質に大きく関わります。</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">全角文字と半角文字の区別も重要です。日本語のひらがな、カタカナ、漢字は全角文字で、1文字が英語のアルファベット（半角）の2倍の幅を占めます。プラットフォームによって「文字数」の数え方が全角基準か半角基準かが異なり、これが混乱の原因になっています。</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">当サイトの文字数チェッカーは、全角・半角を正しく区別してカウントします。日本語テキストを貼り付けるだけで、文字数（全角・半角別）、単語数、文数、読了時間が即座に表示されます。</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">プラットフォーム別文字数制限</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">プラットフォーム</th>
                      <th className="text-left text-emerald-400 py-2 px-3">制限</th>
                      <th className="text-left text-emerald-400 py-2 px-3">日本語のコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '全角140字（280半角）', '日本語は情報密度が高く140字でも伝わる'],
                      ['Googleタイトル', '約30〜32全角文字', 'キーワードを最初の15文字に入れる'],
                      ['Yahoo!タイトル', '約28全角文字', 'Googleより短い——より簡潔に'],
                      ['メタディスクリプション', '約80〜120全角文字', '最初の60文字に要点を凝縮'],
                      ['Instagram', '2,200文字', '最初の40文字がプレビューに表示'],
                      ['LINE公式メッセージ', '500文字', '300文字以内が開封率・返信率最高'],
                      ['Google広告見出し', '全角15字（半角30字）', '日本語では極めて限られた文字数'],
                      ['Google広告説明文', '全角45字（半角90字）', 'ベネフィットとCTAを優先'],
                      ['note記事', '制限なし', 'SEO推奨：3,000〜5,000文字'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">特にGoogle広告の見出しは全角15字しかありません。英語の30文字に比べて情報量は同等ですが、日本語の表現力の高さを最大限に活用する必要があります。「無料ツール」（4文字）と「free tool」（9文字）——日本語の方が圧倒的に効率的です。</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8と日本語文字</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8エンコード：文字種別のバイト数</text>
                  <rect x="160" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="45" width={String(340*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>半角英数字</text>
                  <text x={String(160+340*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1バイト</text>
                  <rect x="160" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="81" width={String(340*0.75)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>ひらがな・カタカナ</text>
                  <text x={String(160+340*0.75+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3バイト</text>
                  <rect x="160" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="117" width={String(340*0.75)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>漢字</text>
                  <text x={String(160+340*0.75+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3バイト</text>
                  <rect x="160" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="153" width={String(340*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="150" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>絵文字</text>
                  <text x={String(160+340*1.0-60)} y="171" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4バイト</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">UTF-8では日本語の全角文字（ひらがな、カタカナ、漢字）はそれぞれ3バイトを占めます。1,000文字の日本語テキストは約3KBのストレージを使用します。データベースやAPIでバイト数制限がある場合は注意が必要です。</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">HTMLでは必ず<code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>を宣言してください。Shift-JISやEUC-JPなど旧式のエンコーディングは文字化けの原因になります。2025年現在、99%以上のWebサイトがUTF-8を使用しています。</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">日本語SEOでの文字数最適化</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">タイトルタグ：</strong>Googleは約30〜32全角文字を表示します。Yahoo! JAPANは約28文字とやや短い。両方で切れないタイトルにするなら28文字以内が安全です。最重要キーワードを最初の15文字に配置しましょう。</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">メタディスクリプション：</strong>Googleは約120文字、Yahoo!は約110文字を表示します。最初の60文字に検索意図に応える要約を入れ、残りでCTAと差別化ポイントを伝えましょう。当サイトの<a href="/character-counter" className="text-emerald-400 underline">文字数チェッカー</a>で長さを確認できます。</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">見出し（H2/H3）：</strong>日本語の見出しは15〜25文字が読みやすい長さです。キーワードを含めつつ、具体的なベネフィットを伝える見出しが理想的です。「文字数カウントの方法」より「3秒でできる文字数カウントの方法」の方がクリック率が高くなります。</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">よくある質問</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">日本語ライティングツール</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/japanese" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">日本語文字カウンター</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">文字数カウント</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">文字数チェッカー</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">読了時間計算</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">読みやすさチェック</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">キーワード密度チェック</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）","description":"日本語の文字数カウント方法とプラットフォーム別の制限——Twitter/X、Google、Yahoo!、LINE、Instagram。無料チェッカー付き。","inLanguage":"ja","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/japanese-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）","item":"https://www.wordcountertool.net/blog/japanese-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
