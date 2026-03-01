const fs = require('fs');

const relatedTools = {
  'app/word-counter/page.js': [
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for Twitter, Instagram and more' },
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate how long your content takes to read' },
    { name: 'Readability Checker', href: '/readability-checker', icon: '📖', desc: 'Check your Flesch-Kincaid readability score' },
    { name: 'Words Per Page', href: '/words-per-page', icon: '📄', desc: 'Convert word count to number of pages' },
  ],
  'app/keyword-density/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Meta Tag Generator', href: '/meta-tag-generator', icon: '🏷️', desc: 'Generate perfect SEO meta tags' },
    { name: 'Readability Checker', href: '/readability-checker', icon: '📖', desc: 'Check your content readability score' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
  ],
  'app/meta-tag-generator/page.js': [
    { name: 'Keyword Density', href: '/keyword-density', icon: '🔍', desc: 'Analyze keyword frequency in your content' },
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Readability Checker', href: '/readability-checker', icon: '📖', desc: 'Check your content readability score' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for meta tags' },
  ],
  'app/readability-checker/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Keyword Density', href: '/keyword-density', icon: '🔍', desc: 'Analyze keyword frequency in your content' },
    { name: 'Sentence Counter', href: '/sentence-counter', icon: '📋', desc: 'Count sentences and analyze structure' },
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate reading time for your content' },
  ],
  'app/character-counter/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Twitter Thread Counter', href: '/twitter-thread-counter', icon: '🧵', desc: 'Plan your Twitter threads' },
    { name: 'Hashtag Counter', href: '/hashtag-counter', icon: '#️⃣', desc: 'Count hashtags for social media' },
    { name: 'Sentence Counter', href: '/sentence-counter', icon: '📋', desc: 'Count sentences in your text' },
  ],
  'app/sentence-counter/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Readability Checker', href: '/readability-checker', icon: '📖', desc: 'Check your content readability score' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate reading time for your content' },
  ],
  'app/words-per-page/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate reading time for your content' },
    { name: 'Words Per Minute', href: '/words-per-minute', icon: '⌨️', desc: 'Test your typing speed in WPM' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
  ],
  'app/reading-time/page.js': [
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Words Per Minute', href: '/words-per-minute', icon: '⌨️', desc: 'Test your typing speed in WPM' },
    { name: 'Words Per Page', href: '/words-per-page', icon: '📄', desc: 'Convert word count to pages' },
    { name: 'Readability Checker', href: '/readability-checker', icon: '📖', desc: 'Check your content readability score' },
  ],
  'app/words-per-minute/page.js': [
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate reading time for your content' },
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Words Per Page', href: '/words-per-page', icon: '📄', desc: 'Convert word count to pages' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
  ],
  'app/hashtag-counter/page.js': [
    { name: 'Twitter Thread Counter', href: '/twitter-thread-counter', icon: '🧵', desc: 'Plan your Twitter threads' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Meta Tag Generator', href: '/meta-tag-generator', icon: '🏷️', desc: 'Generate perfect SEO meta tags' },
  ],
  'app/twitter-thread-counter/page.js': [
    { name: 'Hashtag Counter', href: '/hashtag-counter', icon: '#️⃣', desc: 'Count hashtags for social media' },
    { name: 'Character Counter', href: '/character-counter', icon: '🔤', desc: 'Count characters for any platform' },
    { name: 'Word Counter', href: '/word-counter', icon: '📝', desc: 'Count words and characters instantly' },
    { name: 'Reading Time', href: '/reading-time', icon: '⏱️', desc: 'Estimate reading time for your content' },
  ],
};

const relatedSection = (tools) => `
          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${tools.map(tool => `<a href="${tool.href}" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">${tool.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">${tool.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">${tool.desc}</p>
              </a>`).join('\n              ')}
            </div>
          </div>`;

let fixed = 0;
let skipped = 0;

Object.entries(relatedTools).forEach(([file, tools]) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Not found: ${file}`);
    skipped++;
    return;
  }
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('You Might Also Like')) {
    console.log(`⏭️  Already has related tools: ${file}`);
    skipped++;
    return;
  }
  // Insert before closing </main>
  content = content.replace(
    '      </main>',
    relatedSection(tools) + '\n      </main>'
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ Added related tools to: ${file}`);
  fixed++;
});

console.log(`\n🎉 Done! ${fixed} files updated, ${skipped} skipped.`);
console.log('Run: git add . && git commit -m "Add related tools section to all tool pages" && git push');
