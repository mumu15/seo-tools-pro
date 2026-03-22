const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');

// Scan all blog post folders
const allFolders = fs.readdirSync(blogDir).filter(f => {
  const fp = path.join(blogDir, f);
  return fs.statSync(fp).isDirectory() && fs.existsSync(path.join(fp, 'page.js'));
});

console.log(`Found ${allFolders.length} blog posts`);

// Language slugs to detect
const LANGS = [
  { key: 'arabic', name: 'Arabic', native: 'العربية', flag: 'AR' },
  { key: 'chinese', name: 'Chinese', native: '中文', flag: 'ZH' },
  { key: 'dutch', name: 'Dutch', native: 'Nederlands', flag: 'NL' },
  { key: 'french', name: 'French', native: 'Français', flag: 'FR' },
  { key: 'german', name: 'German', native: 'Deutsch', flag: 'DE' },
  { key: 'hindi', name: 'Hindi', native: 'हिन्दी', flag: 'HI' },
  { key: 'italian', name: 'Italian', native: 'Italiano', flag: 'IT' },
  { key: 'japanese', name: 'Japanese', native: '日本語', flag: 'JA' },
  { key: 'korean', name: 'Korean', native: '한국어', flag: 'KO' },
  { key: 'polish', name: 'Polish', native: 'Polski', flag: 'PL' },
  { key: 'portuguese', name: 'Portuguese', native: 'Português', flag: 'PT' },
  { key: 'russian', name: 'Russian', native: 'Русский', flag: 'RU' },
  { key: 'spanish', name: 'Spanish', native: 'Español', flag: 'ES' },
  { key: 'swedish', name: 'Swedish', native: 'Svenska', flag: 'SV' },
  { key: 'turkish', name: 'Turkish', native: 'Türkçe', flag: 'TR' },
];

// Categorize posts
const langPosts = {};
LANGS.forEach(l => { langPosts[l.key] = []; });
const englishPosts = [];

allFolders.forEach(slug => {
  let matched = false;
  for (const lang of LANGS) {
    if (slug.includes(lang.key)) {
      langPosts[lang.key].push(slug);
      matched = true;
      break;
    }
  }
  if (!matched) {
    englishPosts.push(slug);
  }
});

console.log(`English posts: ${englishPosts.length}`);
LANGS.forEach(l => { console.log(`${l.name}: ${langPosts[l.key].length}`); });

// Helper to make title from slug
function slugToTitle(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace(/Seo/g, 'SEO')
    .replace(/Ai /g, 'AI ')
    .replace(/Chatgpt/g, 'ChatGPT')
    .replace(/Linkedin/g, 'LinkedIn')
    .replace(/Tiktok/g, 'TikTok')
    .replace(/Youtube/g, 'YouTube')
    .replace(/Url/g, 'URL')
    .replace(/Wpm/g, 'WPM');
}

// Build English posts array string
function buildPostEntries(slugs) {
  return slugs.map(s => {
    return `{ slug: '${s}', title: '${slugToTitle(s).replace(/'/g, "\\'")}' }`;
  }).join(',\n    ');
}

// Build lang sections data
function buildLangData() {
  return LANGS.map(l => {
    const posts = langPosts[l.key];
    if (posts.length === 0) return null;
    return `  { key: '${l.key}', name: '${l.name}', native: '${l.native}', flag: '${l.flag}', tool: '/word-counter/language/${l.key}', posts: [
    ${buildPostEntries(posts)}
  ]}`;
  }).filter(Boolean).join(',\n');
}

const pageContent = `import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const englishPosts = [
  ${buildPostEntries(englishPosts)}
]

const langSections = [
${buildLangData()}
]

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog' },
  title: 'Blog - ${allFolders.length} Writing, SEO & Language Guides | WordCounterTool',
  description: '${allFolders.length} free guides on word counting, SEO writing, readability, and content optimization in 15+ languages. Expert advice updated for 2026.',
  openGraph: {
    title: 'Blog - ${allFolders.length} Writing & Language Guides | WordCounterTool',
    description: '${allFolders.length} free guides on word counting, SEO, and writing in 15+ languages.',
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
          <p style={{fontSize:16,color:'#94a3b8',margin:'0 0 8px'}}>Expert guides on word counting, content optimization, and writing in 15+ languages</p>
          <div style={{display:'flex',justifyContent:'center',gap:24,marginTop:16,flexWrap:'wrap'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#10b981'}}>${allFolders.length}</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Free Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#f0c842'}}>16</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>Languages</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#60a5fa'}}>${englishPosts.length}</div>
              <div style={{fontSize:11,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em'}}>English Guides</div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:28,fontWeight:900,color:'#a78bfa'}}>${allFolders.length - englishPosts.length}</div>
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
              <h2 style={{fontSize:22,fontWeight:800,color:'#f0c842',margin:0}}>{lang.name} <span style={{color:'#64748b',fontWeight:400,fontSize:14}}>({lang.native})</span></h2>
              <span style={{fontSize:13,color:'#64748b',background:'rgba(240,200,66,0.1)',padding:'4px 12px',borderRadius:20,fontWeight:700}}>{lang.posts.length} posts</span>
              <a href={lang.tool} style={{fontSize:12,fontWeight:700,color:'#10b981',textDecoration:'none',padding:'4px 12px',borderRadius:8,background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.2)'}}>
                {lang.name} Word Counter Tool
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
          <p style={{fontSize:14,color:'#94a3b8',margin:'0 0 20px'}}>Word counter, character counter, reading time, and more in 15+ languages</p>
          <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="/word-counter" style={{padding:'10px 24px',borderRadius:12,background:'#10b981',color:'#fff',fontWeight:700,fontSize:14,textDecoration:'none'}}>Word Counter</a>
            <a href="/character-counter" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Character Counter</a>
            <a href="/reading-time" style={{padding:'10px 24px',borderRadius:12,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#e2e8f0',fontWeight:700,fontSize:14,textDecoration:'none'}}>Reading Time</a>
          </div>
        </div>
      </main>

      <style>{\`
        .hover-gold:hover { color: #10b981 !important; }
        a:hover .hover-gold { color: #10b981 !important; }
        section a:hover { border-color: rgba(16,185,129,0.3) !important; background: rgba(16,185,129,0.04) !important; transform: translateY(-1px); }
      \`}</style>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync(path.join(blogDir, 'page.js'), pageContent, 'utf8');
console.log('');
console.log('Blog hub page updated!');
console.log(`Total posts: ${allFolders.length}`);
console.log(`English: ${englishPosts.length}`);
console.log(`Language posts: ${allFolders.length - englishPosts.length} across ${LANGS.filter(l => langPosts[l.key].length > 0).length} languages`);
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Update blog hub - show all ' + allFolders.length + ' posts organized by language"');
console.log('  git push origin master');
