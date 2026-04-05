const fs = require('fs');
const path = require('path');

// FIX 3: Thicken word counter tool page content
// Add 600+ words below the tool on the main money page
// Uses humanizer skill rules: no AI filler, varied rhythm, specific numbers, opinions

const possibleFiles = [
  path.join(__dirname, 'app', 'word-counter', 'page.js'),
  path.join(__dirname, 'app', 'word-counter', 'PageClient.js'),
];

let targetFile = null;
for (const f of possibleFiles) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    // We want the file that renders the page content (not just metadata)
    if (content.includes('Footer') || content.includes('</main>') || content.includes('</div>')) {
      targetFile = f;
      // Prefer PageClient.js if it has the actual rendered content
      if (f.includes('PageClient')) break;
    }
  }
}

if (!targetFile) {
  console.error('❌ Could not find word counter page file.');
  console.error('   Checked: app/word-counter/page.js, app/word-counter/PageClient.js');
  process.exit(1);
}

console.log(`Found target file: ${path.relative(__dirname, targetFile)}`);

let content = fs.readFileSync(targetFile, 'utf8');
const original = content;

// The new content section to add below the tool
const newContentSection = `
          {/* Content Section - Word Counter Guide */}
          <div className="max-w-4xl mx-auto mt-16 space-y-12 text-slate-400 leading-relaxed">

            {/* How to Use */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Use the Word Counter</h2>
              <p className="mb-3">Paste or type your text into the box above. The counter updates instantly. You get word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. No buttons to click, no waiting.</p>
              <p>Works with any text. Essays, blog drafts, social media posts, cover letters, product descriptions. If you can paste it, the tool can count it.</p>
            </section>

            {/* Word Count Requirements Table */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Word Count Requirements by Document Type</h2>
              <p className="mb-4">Every document type has a sweet spot. Go too short and you look unprepared. Go too long and nobody finishes reading. Here are the ranges that actually work:</p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(16,185,129,0.06)' }}>
                      <th className="text-left py-3 px-4 text-emerald-400 font-semibold text-xs uppercase tracking-wide">Document Type</th>
                      <th className="text-left py-3 px-4 text-emerald-400 font-semibold text-xs uppercase tracking-wide">Word Count</th>
                      <th className="text-left py-3 px-4 text-emerald-400 font-semibold text-xs uppercase tracking-wide">Pages (Double-Spaced)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400">
                    {[
                      ['College essay', '1,500 - 2,500', '6 - 10'],
                      ['Blog post (SEO)', '1,500 - 2,500', '6 - 10'],
                      ['Blog post (casual)', '800 - 1,200', '3 - 5'],
                      ['Resume', '400 - 600', '1 - 2'],
                      ['Cover letter', '250 - 400', '1'],
                      ['Short story', '1,500 - 7,500', '6 - 30'],
                      ['Novel', '80,000 - 100,000', '320 - 400'],
                      ['Master\\u2019s thesis', '15,000 - 50,000', '60 - 200'],
                      ['PhD dissertation', '60,000 - 100,000', '240 - 400'],
                      ['Product description', '100 - 300', 'Less than 1'],
                      ['Meta description', '150 - 160 characters', 'N/A'],
                      ['Tweet / X post', '70 - 280 characters', 'N/A'],
                      ['LinkedIn post', '1,200 - 1,500 characters', 'N/A'],
                      ['Press release', '400 - 600', '1 - 2'],
                      ['White paper', '3,000 - 5,000', '12 - 20'],
                    ].map(([type, words, pages], i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td className="py-2.5 px-4 text-white font-medium">{type}</td>
                        <td className="py-2.5 px-4">{words}</td>
                        <td className="py-2.5 px-4">{pages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-3">Page counts based on 250 words per page, 12pt Times New Roman, 1-inch margins.</p>
            </section>

            {/* Why Word Count Matters for SEO */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Word Count Matters for SEO</h2>
              <p className="mb-3">Google does not have a minimum word count requirement. They have said this many times. But when you look at what actually ranks, a pattern shows up anyway.</p>
              <p className="mb-3">The average first-page result on Google contains about 1,447 words, according to Backlinko's analysis of 11.8 million search results. That does not mean 1,447 words is a magic number. It means the kind of content that answers a search query well tends to need at least that many words to cover the topic properly.</p>
              <p className="mb-3">Short content can rank. A 200-word page answering "what time is it in Tokyo" does not need 1,500 words. But for competitive keywords where multiple sites are fighting for position, longer content tends to win because it covers more subtopics, earns more backlinks, and keeps readers on the page longer.</p>
              <p className="mb-3">The real metric is not word count but search intent match. A 3,000-word article that rambles will lose to a 1,200-word article that nails the answer. Word count is a proxy for depth, not a goal in itself.</p>
              <p>That said, if your competitor's page has 2,000 words of useful content and yours has 400, you are probably not covering the topic well enough. Check their page. Check yours. Fill the gaps with information your reader actually needs.</p>
            </section>

            {/* Comparison */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Word Count Tools Compared</h2>
              <p className="mb-3">Most word processors have a built-in word counter. Microsoft Word shows it in the bottom status bar. Google Docs puts it under Tools &gt; Word count (or Ctrl+Shift+C). Both work fine for documents you are actively writing.</p>
              <p className="mb-3">Online word counters like this one are useful when you need to check text from other sources. Pasting an email, checking a competitor's article, counting characters for a tweet, or quickly testing whether a paragraph fits a character limit. No file to open, no software to launch.</p>
              <p>Browser-based counters also tend to show more stats at a glance. Reading time, speaking time, character counts with and without spaces, paragraph counts. If you need those numbers regularly, a dedicated tool saves time.</p>
            </section>

          </div>`;

// Strategy: Insert the new content before the Footer component
// Try multiple patterns to find the right insertion point

let inserted = false;

// Pattern 1: Before <Footer /> or <Footer/> 
if (!inserted && content.includes('<Footer')) {
  // Find the last closing div or section before Footer
  const footerIndex = content.lastIndexOf('<Footer');
  
  // Insert before Footer
  content = content.slice(0, footerIndex) + newContentSection + '\n\n          ' + content.slice(footerIndex);
  inserted = true;
}

// Pattern 2: Before closing </main>
if (!inserted && content.includes('</main>')) {
  const mainCloseIndex = content.lastIndexOf('</main>');
  content = content.slice(0, mainCloseIndex) + newContentSection + '\n        ' + content.slice(mainCloseIndex);
  inserted = true;
}

// Pattern 3: Before the last closing fragment </> or last </div>
if (!inserted) {
  // Find the AdUnit or related tools section near the bottom
  const adIndex = content.lastIndexOf('AdUnit');
  if (adIndex > -1) {
    // Find the next closing tag after the ad
    const afterAd = content.indexOf('>', adIndex);
    const nextClose = content.indexOf('\n', afterAd);
    content = content.slice(0, nextClose + 1) + '\n' + newContentSection + content.slice(nextClose + 1);
    inserted = true;
  }
}

if (!inserted) {
  console.error('❌ Could not find insertion point. Please manually add the content.');
  console.error('   Look for the Footer component or </main> tag in:', path.relative(__dirname, targetFile));
  process.exit(1);
}

if (content === original) {
  console.log('⚠️  No changes made. Content may already exist.');
} else {
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('✅ FIX 3 DONE: Added 600+ words of content to word counter page');
  console.log('   Sections added:');
  console.log('   - How to Use the Word Counter');
  console.log('   - Word Count Requirements by Document Type (15-row table)');
  console.log('   - Why Word Count Matters for SEO');
  console.log('   - Word Count Tools Compared');
  console.log('');
  console.log('Now run:');
  console.log('  git add . && git commit -m "Add content sections below word counter tool" && git push origin master');
}
