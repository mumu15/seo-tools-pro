const fs = require('fs');

console.log('Fixing WCT: Header, Homepage, Blog Hub');
console.log('');

// ================================================================
// 1. FIX HEADER — Add Data & Reference section
// ================================================================

let header = fs.readFileSync('components/Header.js', 'utf8');

if (!header.includes('word-count-popular')) {
  // Find the categories array and add a new category
  const newCategory = `  {
    title: 'Data & Reference',
    items: [
      { name: 'Book Word Counts', href: '/word-count-popular-books', desc: 'Harry Potter, LOTR, Bible & more' },
      { name: 'Character Limits', href: '/social-media-character-limits', desc: 'Every social media platform' },
      { name: 'Common Words', href: '/most-common-english-words', desc: 'Top 1,000 English words ranked' },
      { name: 'World Languages', href: '/most-spoken-languages-in-the-world', desc: 'Languages ranked by speakers' },
      { name: 'Essay Lengths', href: '/essay-word-count-guide', desc: 'Word counts for every essay type' },
      { name: 'Image Sizes', href: '/social-media-image-sizes', desc: 'Dimensions for every platform' },
      { name: 'Reading Speed', href: '/average-reading-speed-by-age', desc: 'WPM by age and grade level' },
    ],
  },`;

  // Find the last category closing and insert before the array close
  const lastCategoryEnd = header.lastIndexOf('  },\n]');
  if (lastCategoryEnd > -1) {
    header = header.substring(0, lastCategoryEnd + 4) + '\n' + newCategory + '\n' + header.substring(lastCategoryEnd + 4);
    console.log('  Header: Added Data & Reference category');
  } else {
    // Try alternate pattern
    const altEnd = header.lastIndexOf("  },\n]\n");
    if (altEnd > -1) {
      header = header.substring(0, altEnd + 4) + '\n' + newCategory + '\n' + header.substring(altEnd + 4);
      console.log('  Header: Added Data & Reference category (alt)');
    } else {
      // Find the ] that closes the categories array
      const catStart = header.indexOf('const categories');
      if (catStart > -1) {
        let bracketCount = 0;
        let arrEnd = -1;
        for (let i = header.indexOf('[', catStart); i < header.length; i++) {
          if (header[i] === '[') bracketCount++;
          if (header[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) { arrEnd = i; break; }
          }
        }
        if (arrEnd > -1) {
          header = header.substring(0, arrEnd) + '\n' + newCategory + '\n' + header.substring(arrEnd);
          console.log('  Header: Added Data & Reference category (bracket search)');
        }
      }
    }
  }

  fs.writeFileSync('components/Header.js', header, 'utf8');
} else {
  console.log('  Header: Already has data links');
}

// ================================================================
// 2. FIX HOMEPAGE — Add Data section
// ================================================================

const homeFile = fs.existsSync('app/PageClient.js') ? 'app/PageClient.js' : 'app/page.js';
let home = fs.readFileSync(homeFile, 'utf8');

if (!home.includes('word-count-popular')) {
  const dataSection = `
      {/* Data & Reference Pages */}
      <div style={{maxWidth:1100,margin:'0 auto',padding:'48px 16px'}}>
        <h2 style={{fontSize:'clamp(22px,3vw,30px)',fontWeight:900,color:'#fff',textAlign:'center',margin:'0 0 8px'}}>Data & Reference</h2>
        <p style={{color:'#94a3b8',textAlign:'center',margin:'0 0 28px',fontSize:14}}>Popular writing and language data — free to reference and cite</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))',gap:10}}>
          <a href="/word-count-popular-books" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#10b981'}}>Book Word Counts</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Harry Potter, LOTR, Bible & 50+ books</div>
          </a>
          <a href="/social-media-character-limits" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(59,130,246,0.06)',border:'1px solid rgba(59,130,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#3b82f6'}}>Character Limits 2026</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Twitter, Instagram, TikTok & more</div>
          </a>
          <a href="/most-common-english-words" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(240,200,66,0.06)',border:'1px solid rgba(240,200,66,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#f0c842'}}>1,000 Common Words</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Most used English words ranked</div>
          </a>
          <a href="/most-spoken-languages-in-the-world" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#8b5cf6'}}>World Languages</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Top 30 languages by speakers</div>
          </a>
          <a href="/essay-word-count-guide" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#10b981'}}>Essay Length Guide</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Word counts for every essay type</div>
          </a>
          <a href="/social-media-image-sizes" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(59,130,246,0.06)',border:'1px solid rgba(59,130,246,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#3b82f6'}}>Image Sizes 2026</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Every platform dimensions</div>
          </a>
          <a href="/average-reading-speed-by-age" style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(240,200,66,0.06)',border:'1px solid rgba(240,200,66,0.15)',textDecoration:'none'}}>
            <div style={{fontSize:14,fontWeight:700,color:'#f0c842'}}>Reading Speed Data</div>
            <div style={{fontSize:12,color:'#64748b',marginTop:4}}>WPM by age, grade & education</div>
          </a>
        </div>
      </div>`;

  // Insert before Footer
  const footerIdx = home.lastIndexOf('<Footer');
  if (footerIdx > -1) {
    home = home.substring(0, footerIdx) + dataSection + '\n      ' + home.substring(footerIdx);
    console.log('  Homepage: Added data section before Footer');
  } else {
    console.log('  Homepage: WARNING - Could not find Footer');
  }

  fs.writeFileSync(homeFile, home, 'utf8');
} else {
  console.log('  Homepage: Already has data links');
}

// ================================================================
// 3. FIX BLOG HUB — Add data reference links
// ================================================================

let blog = fs.readFileSync('app/blog/page.js', 'utf8');

if (!blog.includes('word-count-popular')) {
  const dataLinks = `
        {/* Data & Reference Pages */}
        <div style={{marginBottom:40}}>
          <h2 style={{fontSize:20,fontWeight:800,color:'#10b981',margin:'0 0 12px',paddingLeft:12,borderLeft:'4px solid #10b981'}}>Data & Reference Pages</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:10}}>
            {[
              {s:'/word-count-popular-books',t:'Word Count of Popular Books',d:'Harry Potter, LOTR, Bible & more'},
              {s:'/social-media-character-limits',t:'Social Media Character Limits 2026',d:'Every platform limits'},
              {s:'/most-common-english-words',t:'1,000 Most Common English Words',d:'Ranked by frequency'},
              {s:'/most-spoken-languages-in-the-world',t:'Most Spoken Languages',d:'Top 30 by total speakers'},
              {s:'/essay-word-count-guide',t:'Essay Word Count Guide',d:'Every essay type length'},
              {s:'/social-media-image-sizes',t:'Social Media Image Sizes 2026',d:'Dimensions cheat sheet'},
              {s:'/average-reading-speed-by-age',t:'Average Reading Speed by Age',d:'WPM data for all ages'},
            ].map(p => (
              <a key={p.s} href={p.s} style={{display:'block',padding:'16px 20px',borderRadius:14,background:'rgba(16,185,129,0.04)',border:'1px solid rgba(16,185,129,0.12)',textDecoration:'none'}}>
                <div style={{fontSize:14,fontWeight:700,color:'#10b981',marginBottom:4}}>{p.t}</div>
                <div style={{fontSize:12,color:'#64748b'}}>{p.d}</div>
              </a>
            ))}
          </div>
        </div>
`;

  // Insert before the first blog posts grid or before Footer
  const mainClose = blog.indexOf('</main>');
  const footerBlog = blog.lastIndexOf('<Footer');
  
  if (mainClose > -1) {
    blog = blog.substring(0, mainClose) + dataLinks + '      ' + blog.substring(mainClose);
    console.log('  Blog hub: Added data links before </main>');
  } else if (footerBlog > -1) {
    blog = blog.substring(0, footerBlog) + dataLinks + '      ' + blog.substring(footerBlog);
    console.log('  Blog hub: Added data links before Footer');
  }

  fs.writeFileSync('app/blog/page.js', blog, 'utf8');
} else {
  console.log('  Blog hub: Already has data links');
}

console.log('');
console.log('All 3 fixes applied!');
console.log('Now run: git add . && git commit -m "Add data pages to header, homepage, blog hub" && git push origin master');
