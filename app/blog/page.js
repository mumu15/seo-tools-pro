import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const englishPosts = [
  { slug: 'average-reading-speed', title: 'Average Reading Speed: How Fast Do People Read? (2026 Data)' },
    { slug: 'average-typing-speed', title: 'Average Typing Speed: How Fast Should You Type? (2026 Guide)' },
    { slug: 'best-ai-writing-tools-2026', title: 'Best AI Writing Tools in 2026: Complete Comparison | WordCounterTool.net' },
    { slug: 'best-free-writing-tools-2026', title: 'Best Free Writing Tools in 2026: The Complete List | WordCounterTool.net' },
    { slug: 'chatgpt-prompt-length', title: 'ChatGPT Prompt Length: How Long Should Your Prompts Be? (2026) | WordCounterTool.net' },
    { slug: 'ebook-word-count-guide', title: 'Ebook Word Count: How Long Should Your Ebook Be? (2026) | WordCounterTool.net' },
    { slug: 'email-length-best-practices', title: 'Email Length Best Practices: How Long Should an Email Be? (2026) | WordCounterTool.net' },
    { slug: 'google-ads-character-limits', title: 'Google Ads Character Limits 2026: Every Ad Type Explained | WordCounterTool.net' },
    { slug: 'how-long-should-a-youtube-script-be', title: 'How Long Should a YouTube Script Be? Word Count by Video Length | WordCounterTool.net' },
    { slug: 'how-many-characters-in-a-tweet', title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)' },
    { slug: 'how-many-hashtags-to-use', title: 'How Many Hashtags Should You Use? (2026 Platform Guide)' },
    { slug: 'how-many-words-in-a-blog-post', title: 'How Many Words Should a Blog Post Be? (2026 SEO Data) | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-college-essay', title: 'How Many Words in a College Essay? Complete 2026 Guide | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-cover-letter', title: 'How Many Words Should a Cover Letter Be? (2026 Guide)' },
    { slug: 'how-many-words-in-a-dissertation', title: 'How Many Words in a Dissertation? (PhD & Masters Guide 2026) | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-grant-proposal', title: 'How Many Words in a Grant Proposal? (Complete 2026 Guide) | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-novel', title: 'How Many Words in a Novel? (Word Counts by Genre in 2026)' },
    { slug: 'how-many-words-in-a-paragraph', title: 'How Many Words in a Paragraph? (The Complete 2026 Guide)' },
    { slug: 'how-many-words-in-a-personal-statement', title: 'How Many Words in a Personal Statement? (2026 Guide) | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-podcast-episode', title: 'How Many Words in a Podcast Episode? (Word Count Calculator) | WordCounterTool.net' },
    { slug: 'how-many-words-in-a-resume', title: 'How Many Words Should a Resume Be? (2026 Complete Guide)' },
    { slug: 'how-many-words-in-a-short-story', title: 'How Many Words in a Short Story? (Word Count Guide 2026)' },
    { slug: 'how-many-words-in-a-speech', title: 'How Many Words in a Speech? (Minutes to Word Count Guide)' },
    { slug: 'how-many-words-per-page', title: 'How Many Words Per Page? (Definitive Guide for Every Format)' },
    { slug: 'how-to-count-words-online', title: 'How to Count Words Online: Free Tools and Methods (2026)' },
    { slug: 'how-to-improve-readability-score', title: 'How to Improve Your Readability Score (10 Proven Techniques)' },
    { slug: 'how-to-type-faster', title: 'How to Type Faster: 10 Proven Tips to Boost Your Typing Speed (2026)' },
    { slug: 'how-to-use-keywords-in-blog-posts', title: 'How to Use Keywords in Blog Posts the Right Way (2026 SEO Guide)' },
    { slug: 'how-to-write-blog-conclusion', title: 'How to Write a Blog Conclusion That Drives Action (2026 Guide)' },
    { slug: 'how-to-write-blog-introduction', title: 'How to Write a Blog Introduction That Hooks Readers (2026)' },
    { slug: 'how-to-write-email-subject-lines', title: 'How to Write Email Subject Lines That Get Opened (2026 Guide)' },
    { slug: 'how-to-write-faster', title: 'How to Write Faster: 12 Proven Techniques to Double Your Speed | WordCounterTool.net' },
    { slug: 'how-to-write-for-skimmable-content', title: 'How to Write Skimmable Content That Readers Actually Finish (2026)' },
    { slug: 'how-to-write-headline-formulas', title: '10 Headline Formulas That Get Clicks (Proven Templates 2026)' },
    { slug: 'how-to-write-meta-descriptions', title: 'How to Write Meta Descriptions That Get Clicks (2026 Guide)' },
    { slug: 'how-to-write-product-descriptions', title: 'How to Write Product Descriptions That Sell (2026 Guide)' },
    { slug: 'how-to-write-seo-title-tags', title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026)' },
    { slug: 'how-to-write-twitter-thread', title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)' },
    { slug: 'how-to-write-wedding-speech', title: 'How to Write a Wedding Speech: Word Count, Structure, and Tips (2026) | WordCounterTool.net' },
    { slug: 'ideal-blog-post-length-for-seo', title: 'Ideal Blog Post Length for SEO in 2026 (Data-Backed Guide)' },
    { slug: 'ideal-linkedin-post-length', title: 'The Ideal LinkedIn Post Length for Maximum Engagement (2026 Data) | WordCounterTool.net' },
    { slug: 'instagram-caption-length', title: 'Instagram Caption Length: How Long Should Your Caption Be? (2026)' },
    { slug: 'long-tail-keywords-guide', title: 'Long-Tail Keywords: The Complete Guide to Finding and Using Them (2026)' },
    { slug: 'reddit-post-length', title: 'Ideal Reddit Post Length for Maximum Upvotes (2026) | WordCounterTool.net' },
    { slug: 'seo-content-length-guide', title: 'SEO Content Length Guide: How Long Should Your Content Be? (2026)' },
    { slug: 'substack-newsletter-length', title: 'Ideal Substack Newsletter Length (2026 Data) | WordCounterTool.net' },
    { slug: 'tiktok-caption-length-guide', title: 'TikTok Caption Length: The Complete Guide (2026) | WordCounterTool.net' },
    { slug: 'twitter-character-limit-2026', title: 'Twitter/X Character Limit 2026: Everything You Need to Know | WordCounterTool.net' },
    { slug: 'what-is-flesch-kincaid-score', title: 'What Is Flesch-Kincaid Score? (And How to Improve Yours in 2026)' },
    { slug: 'what-is-keyword-density', title: 'What Is Keyword Density? (And What Should Yours Be in 2026)' },
    { slug: 'words-per-minute-reading-guide', title: 'Words Per Minute Reading Guide: How to Measure Your Speed (2026)' }
]

const langSections = [
  { key: 'arabic', name: 'Arabic', native: 'العربية', flag: '🇸🇦', tool: '/word-counter/language/arabic', posts: [
    { slug: 'arabic-character-count-guide', title: 'دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)' },
    { slug: 'arabic-content-length-guide', title: 'دليل طول المحتوى العربي: كم كلمة تحتاج لكل نوع؟ (2026)' },
    { slug: 'arabic-seo-content-strategy', title: 'استراتيجية SEO للمحتوى العربي: كيف تتصدر نتائج Google (2026)' },
    { slug: 'arabic-writing-tips-for-better-content', title: 'نصائح الكتابة العربية: 15 تقنية لمحتوى احترافي (2026)' },
    { slug: 'common-arabic-writing-mistakes', title: 'أخطاء الكتابة الشائعة في العربية: 15 خطأ وكيفية تصحيحها (2026)' },
    { slug: 'how-to-count-words-in-arabic', title: 'كيفية عد الكلمات في اللغة العربية: الدليل الشامل (2026)' }
  ]},
  { key: 'chinese', name: 'Chinese', native: '中文', flag: '🇨🇳', tool: '/word-counter/language/chinese', posts: [
    { slug: 'chinese-character-count-guide', title: '中文字符计数完整指南：汉字、标点与各平台限制（2026）' },
    { slug: 'chinese-content-length-guide', title: '中文内容的最佳长度：基于数据的写作指南（2026）' },
    { slug: 'chinese-seo-content-strategy', title: '中文SEO内容策略：百度与Google双平台优化指南（2026）' },
    { slug: 'chinese-writing-tips-for-better-content', title: '15个提升中文在线写作质量的实用技巧（2026）' },
    { slug: 'common-chinese-writing-mistakes', title: '中文写作中最常见的15个错误及纠正方法（2026年完整指南）' },
    { slug: 'how-to-count-words-in-chinese', title: '如何统计中文字数：字数、字符数与词数的完整指南（2026）' }
  ]},
  { key: 'dutch', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', tool: '/word-counter/language/dutch', posts: [
    { slug: 'common-dutch-writing-mistakes', title: 'De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)' },
    { slug: 'dutch-character-count-guide', title: 'Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)' },
    { slug: 'dutch-content-length-guide', title: 'De optimale tekstlengte in het Nederlands: datagedreven gids (2026)' },
    { slug: 'dutch-seo-content-strategy', title: 'SEO-contentstrategie voor de Nederlandse markt: complete gids (2026)' },
    { slug: 'dutch-writing-tips-for-better-content', title: '15 tips voor betere Nederlandse webteksten (2026)' },
    { slug: 'how-to-count-words-in-dutch', title: 'Woorden tellen in het Nederlands: complete gids (2026)' }
  ]},
  { key: 'french', name: 'French', native: 'Français', flag: '🇫🇷', tool: '/word-counter/language/french', posts: [
    { slug: 'common-french-writing-mistakes', title: 'Les 15 erreurs les plus courantes en français écrit et comment les corriger (2026)' },
    { slug: 'french-character-count-guide', title: 'Guide du comptage de caractères en français : réseaux sociaux et SEO (2026)' },
    { slug: 'french-content-length-guide', title: 'Guide de la longueur de contenu en français : combien de mots faut-il ? (2026)' },
    { slug: 'french-seo-content-strategy', title: 'Stratégie SEO en français : comment se positionner sur Google (2026)' },
    { slug: 'french-writing-tips-for-better-content', title: '15 conseils pour mieux écrire en français : guide du contenu professionnel (2026)' },
    { slug: 'how-to-count-words-in-french', title: 'Comment compter les mots en français : guide complet (2026)' }
  ]},
  { key: 'german', name: 'German', native: 'Deutsch', flag: '🇩🇪', tool: '/word-counter/language/german', posts: [
    { slug: 'common-german-writing-mistakes', title: 'Die 15 häufigsten deutschen Schreibfehler und wie du sie vermeidest (2026)' },
    { slug: 'german-character-count-guide', title: 'Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)' },
    { slug: 'german-content-length-guide', title: 'Die optimale Textlänge auf Deutsch: Datenbasierter Guide für 2026' },
    { slug: 'german-seo-content-strategy', title: 'SEO-Content-Strategie für den deutschen Markt: Datenbasierter Guide (2026)' },
    { slug: 'german-writing-tips-for-better-content', title: '15 Schreibtipps für bessere deutsche Online-Texte (2026)' },
    { slug: 'how-to-count-words-in-german', title: 'Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026' }
  ]},
  { key: 'hindi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', tool: '/word-counter/language/hindi', posts: [
    { slug: 'common-hindi-writing-mistakes', title: 'हिंदी लेखन की 15 सबसे आम गलतियां और उन्हें कैसे सुधारें (2026)' },
    { slug: 'hindi-character-count-guide', title: 'हिंदी अक्षर गणना गाइड: सोशल मीडिया और SEO (2026)' },
    { slug: 'hindi-content-length-guide', title: 'हिंदी कंटेंट की सही लंबाई: हर फॉर्मेट के लिए गाइड (2026)' },
    { slug: 'hindi-seo-content-strategy', title: 'हिंदी SEO स्ट्रैटेजी: Google में रैंक कैसे करें (2026)' },
    { slug: 'hindi-writing-tips-for-better-content', title: 'हिंदी लेखन के 15 टिप्स: बेहतर कंटेंट लिखने की कला (2026)' },
    { slug: 'how-to-count-words-in-hindi', title: 'हिंदी में शब्द कैसे गिनें: संपूर्ण गाइड (2026)' }
  ]},
  { key: 'italian', name: 'Italian', native: 'Italiano', flag: '🇮🇹', tool: '/word-counter/language/italian', posts: [
    { slug: 'common-italian-writing-mistakes', title: 'I 15 errori più comuni nella scrittura in italiano e come evitarli (2026)' },
    { slug: 'how-to-count-words-in-italian', title: 'Come contare le parole in italiano: guida completa (2026)' },
    { slug: 'italian-character-count-guide', title: 'Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)' },
    { slug: 'italian-content-length-guide', title: 'La lunghezza ideale dei testi in italiano: guida basata sui dati (2026)' },
    { slug: 'italian-seo-content-strategy', title: 'Strategia SEO per contenuti in italiano: guida completa (2026)' },
    { slug: 'italian-writing-tips-for-better-content', title: '15 consigli per scrivere meglio in italiano sul web (2026)' }
  ]},
  { key: 'japanese', name: 'Japanese', native: '日本語', flag: '🇯🇵', tool: '/word-counter/language/japanese', posts: [
    { slug: 'common-japanese-writing-mistakes', title: '日本語ライティングでよくある15の間違いと改善方法（2026年版）' },
    { slug: 'how-to-count-words-in-japanese', title: '日本語の文字数カウント方法：完全ガイド（2026年版）' },
    { slug: 'japanese-character-count-guide', title: '日本語の文字数チェック完全ガイド：プラットフォーム別制限一覧（2026）' },
    { slug: 'japanese-content-length-guide', title: '日本語コンテンツの最適な文字数：データに基づく完全ガイド（2026）' },
    { slug: 'japanese-seo-content-strategy', title: '日本語SEOコンテンツ戦略：Google＆Yahoo!最適化ガイド（2026）' },
    { slug: 'japanese-writing-tips-for-better-content', title: 'より良い日本語Webライティングのための15のコツ（2026年版）' }
  ]},
  { key: 'korean', name: 'Korean', native: '한국어', flag: '🇰🇷', tool: '/word-counter/language/korean', posts: [
    { slug: 'common-korean-writing-mistakes', title: '한국어 글쓰기에서 가장 흔한 15가지 실수와 교정 방법 (2026년 가이드)' },
    { slug: 'how-to-count-words-in-korean', title: '한국어 글자수 세기: 완벽 가이드 (2026년 최신판)' },
    { slug: 'korean-character-count-guide', title: '한국어 글자수 체크 완벽 가이드: 플랫폼별 제한 총정리 (2026)' },
    { slug: 'korean-content-length-guide', title: '한국어 콘텐츠 최적 길이: 데이터 기반 가이드 (2026)' },
    { slug: 'korean-seo-content-strategy', title: '한국어 SEO 콘텐츠 전략: 네이버 + 구글 동시 최적화 (2026)' },
    { slug: 'korean-writing-tips-for-better-content', title: '더 나은 한국어 웹 글쓰기를 위한 15가지 팁 (2026년판)' }
  ]},
  { key: 'polish', name: 'Polish', native: 'Polski', flag: '🇵🇱', tool: '/word-counter/language/polish', posts: [
    { slug: 'common-polish-writing-mistakes', title: '15 najczęstszych błędów w pisaniu po polsku i jak ich unikać (2026)' },
    { slug: 'how-to-count-words-in-polish', title: 'Jak liczyć słowa po polsku: kompletny przewodnik (2026)' },
    { slug: 'polish-character-count-guide', title: 'Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)' },
    { slug: 'polish-content-length-guide', title: 'Optymalna długość tekstu po polsku: przewodnik oparty na danych (2026)' },
    { slug: 'polish-seo-content-strategy', title: 'Strategia SEO dla polskich treści: kompletny przewodnik (2026)' },
    { slug: 'polish-writing-tips-for-better-content', title: '15 porad na lepsze polskie teksty internetowe (2026)' }
  ]},
  { key: 'portuguese', name: 'Portuguese', native: 'Português', flag: '🇧🇷', tool: '/word-counter/language/portuguese', posts: [
    { slug: 'common-portuguese-writing-mistakes', title: 'Os 15 erros mais comuns na escrita em português e como evitá-los (2026)' },
    { slug: 'how-to-count-words-in-portuguese', title: 'Como contar palavras em português: guia completo para 2026' },
    { slug: 'portuguese-character-count-guide', title: 'Contagem de caracteres em português: guia com limites de plataformas (2026)' },
    { slug: 'portuguese-content-length-guide', title: 'Tamanho ideal de texto em português: guia com dados reais (2026)' },
    { slug: 'portuguese-seo-content-strategy', title: 'Estratégia de SEO para conteúdo em português: guia completo (2026)' },
    { slug: 'portuguese-writing-tips-for-better-content', title: '15 dicas para escrever melhor em português na web (2026)' }
  ]},
  { key: 'russian', name: 'Russian', native: 'Русский', flag: '🇷🇺', tool: '/word-counter/language/russian', posts: [
    { slug: 'common-russian-writing-mistakes', title: '15 самых частых ошибок в русском языке и как их избежать (2026)' },
    { slug: 'how-to-count-words-in-russian', title: 'Как считать слова в русском тексте: полное руководство (2026)' },
    { slug: 'russian-character-count-guide', title: 'Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)' },
    { slug: 'russian-content-length-guide', title: 'Оптимальная длина текста на русском: руководство с данными (2026)' },
    { slug: 'russian-seo-content-strategy', title: 'SEO-стратегия для русскоязычного контента: Яндекс + Google (2026)' },
    { slug: 'russian-writing-tips-for-better-content', title: '15 советов по улучшению русского веб-текста (2026)' }
  ]},
  { key: 'spanish', name: 'Spanish', native: 'Español', flag: '🇪🇸', tool: '/word-counter/language/spanish', posts: [
    { slug: 'common-spanish-writing-mistakes', title: 'Errores Comunes al Escribir en Español: Guía Completa (2026)' },
    { slug: 'how-to-count-words-in-spanish', title: 'Cómo Contar Palabras en Español: Guía Definitiva (2026)' },
    { slug: 'spanish-character-count-guide', title: 'Conteo de Caracteres en Español: Guía Completa para Redes y SEO (2026)' },
    { slug: 'spanish-content-length-guide', title: 'Longitud de Contenido en Español: ¿Cuántas Palabras Necesitas? (2026)' },
    { slug: 'spanish-seo-content-strategy', title: 'Estrategia SEO en Español: Cómo Posicionar Contenido en Google (2026)' },
    { slug: 'spanish-writing-tips-for-better-content', title: 'Consejos de Escritura en Español: 15 Técnicas para Contenido Profesional (2026)' }
  ]},
  { key: 'swedish', name: 'Swedish', native: 'Svenska', flag: '🇸🇪', tool: '/word-counter/language/swedish', posts: [
    { slug: 'common-swedish-writing-mistakes', title: 'De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)' },
    { slug: 'how-to-count-words-in-swedish', title: 'Räkna ord på svenska: komplett guide (2026)' },
    { slug: 'swedish-character-count-guide', title: 'Räkna tecken på svenska: guide med plattformsgränser (2026)' },
    { slug: 'swedish-content-length-guide', title: 'Optimal textlängd på svenska: datadriven guide (2026)' },
    { slug: 'swedish-seo-content-strategy', title: 'SEO-innehållsstrategi för den svenska marknaden (2026)' },
    { slug: 'swedish-writing-tips-for-better-content', title: '15 tips för bättre svenska webbtexter (2026)' }
  ]},
  { key: 'turkish', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', tool: '/word-counter/language/turkish', posts: [
    { slug: 'common-turkish-writing-mistakes', title: 'Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)' },
    { slug: 'how-to-count-words-in-turkish', title: 'Türkçe kelime sayma: eksiksiz rehber (2026)' },
    { slug: 'turkish-character-count-guide', title: 'Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)' },
    { slug: 'turkish-content-length-guide', title: 'Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)' },
    { slug: 'turkish-seo-content-strategy', title: 'Türkçe SEO içerik stratejisi: Google.com.tr optimizasyon rehberi (2026)' },
    { slug: 'turkish-writing-tips-for-better-content', title: 'Daha iyi Türkçe web içerikleri için 15 ipucu (2026)' }
  ]}
]

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  title: 'Blog - 141 Writing, SEO & Language Guides | WordCounterTool',
  description: '141 free guides on word counting, SEO writing, readability, and content optimization in 16 languages. Expert advice updated for 2026.',
  openGraph: {
    title: 'Blog - 141 Writing & Language Guides | WordCounterTool',
    description: '141 free guides on word counting, SEO, and writing in 16 languages.',
    url: 'https://www.wordcountertool.net/blog',
    siteName: 'WordCounterTool',
    type: 'website',
  },
}

export default function Blog() {
  return (
    <>
      <Header />
      <main style={{maxWidth:1100,margin:'0 auto',padding:'48px 16px 64px'}}>

        {/* Hero */}
        <div style={{textAlign:'center',marginBottom:48}}>
          <h1 style={{fontSize:'clamp(28px, 5vw, 48px)',fontWeight:900,color:'#fff',margin:'0 0 12px'}}>Writing, SEO & Language Blog</h1>
          <p style={{fontSize:16,color:'#94a3b8',margin:'0 0 8px'}}>Expert guides on word counting, content optimization, and writing in 16 languages</p>
          <div style={{display:'flex',justifyContent:'center',gap:24,marginTop:16,flexWrap:'wrap'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#10b981'}}>141</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Free Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#f0c842'}}>16</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Languages</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#60a5fa'}}>51</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>English Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#a78bfa'}}>90</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Language Guides</div>
            </div>
          </div>
        </div>

        {/* Quick Jump Nav */}
        <div style={{display:'flex',flexWrap:'wrap',gap:8,justifyContent:'center',marginBottom:40}}>
          <a href="#english" style={{padding:'6px 16px',borderRadius:8,background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.25)',color:'#10b981',fontSize:13,fontWeight:700,textDecoration:'none'}}>English ({englishPosts.length})</a>
          {langSections.map(l => (
            <a key={l.key} href={'#' + l.key} style={{padding:'6px 16px',borderRadius:8,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',color:'#94a3b8',fontSize:13,fontWeight:600,textDecoration:'none'}}>{l.flag} {l.name} ({l.posts.length})</a>
          ))}
        </div>

        {/* English Section */}
        <section id="english" style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <h2 style={{fontSize:24,fontWeight:800,color:'#10b981',margin:0}}>English Guides</h2>
            <span style={{fontSize:13,color:'#64748b',background:'rgba(16,185,129,0.1)',padding:'4px 12px',borderRadius:20,fontWeight:700}}>{englishPosts.length} posts</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gap:12}}>
            {englishPosts.map(post => (
              <Link key={post.slug} href={'/blog/' + post.slug} style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',textDecoration:'none',transition:'all 0.15s'}}>
                <div style={{fontSize:14,fontWeight:600,color:'#e2e8f0',lineHeight:1.4}} className="hover-gold">{post.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Language Sections */}
        {langSections.map(lang => (
          <section key={lang.key} id={lang.key} style={{marginBottom:48}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
              <h2 style={{fontSize:22,fontWeight:800,color:'#f0c842',margin:0}}>{lang.flag} {lang.name} <span style={{color:'#64748b',fontWeight:400,fontSize:14}}>({lang.native})</span></h2>
              <span style={{fontSize:13,color:'#64748b',background:'rgba(240,200,66,0.1)',padding:'4px 12px',borderRadius:20,fontWeight:700}}>{lang.posts.length} posts</span>
              <a href={lang.tool} style={{fontSize:12,fontWeight:700,color:'#10b981',textDecoration:'none',padding:'4px 12px',borderRadius:8,background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.2)'}}>
                {lang.name} Word Counter →
              </a>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gap:10}}>
              {lang.posts.map(post => (
                <Link key={post.slug} href={'/blog/' + post.slug} style={{display:'block',padding:'14px 18px',borderRadius:12,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',textDecoration:'none',transition:'all 0.15s'}}>
                  <div style={{fontSize:13,fontWeight:600,color:'#cbd5e1',lineHeight:1.4}} className="hover-gold">{post.title}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div style={{textAlign:'center',padding:'40px 24px',borderRadius:20,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',marginTop:32}}>
          <h2 style={{fontSize:22,fontWeight:800,color:'#fff',margin:'0 0 8px'}}>Try Our Free Tools</h2>
          <p style={{fontSize:14,color:'#94a3b8',margin:'0 0 20px'}}>Word counter, character counter, reading time, and more — all free</p>
          <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="/word-counter" style={{padding:'10px 24px',borderRadius:12,background:'#10b981',color:'#fff',fontWeight:700,fontSize:14,textDecoration:'none'}}>Word Counter</a>
            <a href="/character-counter" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Character Counter</a>
            <a href="/reading-time" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Reading Time</a>
            <a href="/readability-checker" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Readability</a>
          </div>
        </div>
      </main>

      <style>{`
        .hover-gold:hover { color: #10b981 !important; }
        a:hover .hover-gold { color: #10b981 !important; }
        section a:hover { border-color: rgba(16,185,129,0.3) !important; background: rgba(16,185,129,0.04) !important; transform: translateY(-1px); }
      `}</style>

      <Footer />
    </>
  )
}
