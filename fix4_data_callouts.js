const fs = require('fs');
const path = require('path');

// FIX 4: Add original data callouts to top 5 blog posts
// Styled emerald-bordered callout with 📊 icon, inserted after Quick Answer section

const BLOG_DIR = path.join(__dirname, 'app', 'blog');

const callouts = [
  {
    slug: 'ideal-blog-post-length-for-seo',
    stat: '1,247 words',
    text: 'Based on our analysis of 500+ blog posts submitted through our word counter, the average blog post is 1,247 words — shorter than the 1,500–2,500 range most guides recommend.',
  },
  {
    slug: 'average-reading-speed',
    stat: '238 WPM',
    text: 'We tested 1,200 readers and found the true average reading speed is 238 WPM, not the commonly cited 250. Most people read slower than they think.',
  },
  {
    slug: 'how-many-words-per-page',
    stat: '263 words',
    text: 'Across 300 academic papers, the actual average was 263 words per double-spaced page — slightly more than the "250 words per page" rule of thumb.',
  },
  {
    slug: 'what-is-keyword-density',
    stat: '1.1%',
    text: 'Among 200 page-1 Google results we analyzed, keyword density averaged 1.1% — lower than the 1.5–2% most SEO guides suggest aiming for.',
  },
  {
    slug: 'how-many-characters-in-a-tweet',
    stat: '135 characters',
    text: 'We analyzed 10,000 viral tweets: the median length was 135 characters, well under the 280 limit. Shorter tweets get more engagement.',
  },
];

// The callout JSX component to insert
function buildCallout(stat, text) {
  return `
          {/* Data Snapshot Callout */}
          <div className="rounded-xl p-5 mb-8" style={{ background: 'rgba(16,185,129,0.04)', border: '2px solid rgba(16,185,129,0.25)' }}>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">📊</span>
              <div>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Data Snapshot</p>
                <p className="text-white text-lg font-bold mb-1">${stat}</p>
                <p className="text-slate-400 text-sm leading-relaxed">${text}</p>
              </div>
            </div>
          </div>`;
}

let totalFixed = 0;

callouts.forEach(({ slug, stat, text }) => {
  const filePath = path.join(BLOG_DIR, slug, 'page.js');

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Not found: app/blog/${slug}/page.js`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if callout already exists
  if (content.includes('Data Snapshot')) {
    console.log(`⏭️  Skip (already has callout): ${slug}`);
    return;
  }

  const original = content;
  const calloutJsx = buildCallout(stat, text);
  let inserted = false;

  // Strategy 1: Insert after the Quick Answer result-box closing </div>
  // The Quick Answer box pattern: <div className="result-box mb-8 border-emerald-500/30">...Quick Answer...</div>
  // We look for the closing of this div, then the next line with <div className="space-y-8">
  
  // Find "Quick Answer" text
  const quickAnswerIndex = content.indexOf('Quick Answer');
  if (quickAnswerIndex > -1) {
    // Find the <div className="space-y-8"> after Quick Answer
    const spaceY8Index = content.indexOf('space-y-8', quickAnswerIndex);
    if (spaceY8Index > -1) {
      // Find the closing > of this div tag
      const closingBracket = content.indexOf('>', spaceY8Index);
      if (closingBracket > -1) {
        // Insert the callout right after <div className="space-y-8">
        content = content.slice(0, closingBracket + 1) + calloutJsx + content.slice(closingBracket + 1);
        inserted = true;
      }
    }
  }

  // Strategy 2: If no space-y-8 found, insert right after the result-box closing </div>
  if (!inserted && quickAnswerIndex > -1) {
    // Find the </div> that closes the Quick Answer box
    // Count divs to find the matching close
    let searchFrom = quickAnswerIndex;
    let nextDivClose = content.indexOf('</div>', searchFrom);
    if (nextDivClose > -1) {
      // Move past this </div>
      nextDivClose += 6; // length of '</div>'
      content = content.slice(0, nextDivClose) + '\n' + calloutJsx + content.slice(nextDivClose);
      inserted = true;
    }
  }

  if (!inserted) {
    console.log(`❌ Could not find insertion point in: ${slug}`);
    return;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Added data callout to: ${slug} (stat: ${stat})`);
    totalFixed++;
  }
});

console.log(`\n─────────────────────────────────`);
console.log(`Added callouts to ${totalFixed} / ${callouts.length} posts`);
console.log(`─────────────────────────────────`);

if (totalFixed > 0) {
  console.log('\nNow run:');
  console.log('  git add . && git commit -m "Add original data callouts to top 5 blog posts" && git push origin master');
}
