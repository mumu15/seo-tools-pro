const fs = require('fs');
const path = require('path');

// SCRIPT 1/4: Beef up hub pages — 1500+ words each
// Fresh data from: Orbit Media 2025, Wix 2025, Backlinko, Ahrefs, HubSpot
// Writing style: humanizer rules — no filler, specific numbers, opinions, varied rhythm

const APP = path.join(__dirname, 'app');
let beefed = 0;

// ============================================================
// 1. /word-count/for (Guides hub)
// ============================================================
console.log('--- Beefing up: /word-count/for ---');

const guidesPath = path.join(APP, 'word-count', 'for', 'page.js');
if (fs.existsSync(guidesPath)) {
  let g = fs.readFileSync(guidesPath, 'utf8');
  if (g.includes('Word Count Trends')) {
    console.log('  Already beefed up, skipping');
  } else {
    const guidesContent = `
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-16 px-4 space-y-12">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Word Count Trends in 2026</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The average blog post hit 1,333 words in 2025. That number comes from Orbit Media's annual survey of 808 content marketers, and it represents a slight dip from 1,416 words the previous year. The decade-long race to write ever-longer "ultimate guides" appears to be reversing.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>But here is the part most people miss. Only 9% of bloggers write posts over 2,000 words. That tiny group is nearly twice as likely to report strong results compared to the average. Longer content still works. Most people just gave up on it too early.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The real shift is happening at Google. AI Overviews now appear on roughly 13% of US desktop searches, up from 6.5% earlier in 2025. When Google pulls a concise answer directly into the search results, users stop clicking through. Some publishers report traffic drops of 20-40% on affected pages. The takeaway is simple: if your content can be summarized in two sentences, expect less traffic from it over time.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Writing to a specific word count was always a proxy for depth. Google does not count your words. John Mueller has said this explicitly. What Google measures is whether the content satisfies the query. Sometimes that takes 400 words. Sometimes it takes 4,000. The guides on this page give you specific word count ranges for 33+ document types — not as rules, but as calibration points so you know when you are in the right zone.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>The Real Numbers Behind Content Length</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>There are roughly 600 million active blogs worldwide as of 2025. About 7 million new posts go live every single day. In that ocean of content, length alone does not help you stand out. But it correlates with the things that do: backlinks, topic coverage, and time on page.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Backlinko analyzed 11.8 million Google results and found the average first-page result contains 1,447 words. Ahrefs found that content over 2,000 words gets 2.5 times more backlinks than shorter posts. Articles over 3,000 words receive an average of 11.07 shares and links, compared to 3.47 for articles under 1,000 words.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>These numbers do not mean you should pad every article to 2,000 words. They mean that when a topic genuinely requires depth, going deep gets rewarded. A 500-word product description does not need to be 2,000 words. A guide comparing 15 project management tools probably does.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>The average time to write a blog post in 2025 was 3 hours and 28 minutes, according to Orbit Media. Bloggers who spend 6+ hours per post are significantly more likely to report strong results. There is no shortcut. The content that ranks took time to research, write, and edit. That has not changed despite AI tools now being used by 95% of content marketers in some capacity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>How to Decide the Right Length for Any Document</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The method is the same whether you are writing a college essay or a sales page. Look at what already works. For essays, check the assignment rubric — most have explicit ranges. For web content, search your target keyword and study the top three results. Note their word counts. That is your baseline.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>You do not need to be longer than the competition. You need to be more useful. A 1,200-word article that answers every question directly will outperform a 3,000-word piece that buries the answer under twelve paragraphs of setup. Readers skim — 73% of them, according to recent data. Your structure matters as much as your length.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>For academic writing, the rules are more rigid. A Common App essay has a strict 650-word maximum. Go over and the system cuts you off. A PhD dissertation in the humanities typically runs 80,000 to 100,000 words. In the sciences, 40,000 to 80,000 is more common. These are not suggestions. They are institutional requirements.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Professional documents fall somewhere in between. Resumes should be 400-600 words (one page) for anyone with fewer than 10 years of experience. Two pages for senior roles. Cover letters: 250-400 words. Press releases: 400-600. The ranges exist because recruiters, editors, and hiring managers have limited time. Respecting their time is part of good writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Word Count Quick Reference Table</h2>
            <div className="overflow-x-auto rounded-xl" style={{border:'1px solid var(--border-color)'}}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{background:'var(--accent-bg)'}}>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Document</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Typical Range</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Pages</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Tweet / X post','1-280 characters','N/A'],
                    ['Email subject line','6-10 words','N/A'],
                    ['Product description','100-300 words','< 1'],
                    ['Cover letter','250-400 words','1'],
                    ['Resume','400-600 words','1-2'],
                    ['Press release','400-600 words','1-2'],
                    ['LinkedIn post','100-1,300 characters','N/A'],
                    ['College essay (Common App)','250-650 words','1-2'],
                    ['Blog post (casual)','800-1,200 words','3-5'],
                    ['Blog post (SEO)','1,500-2,500 words','6-10'],
                    ['Short story','1,500-7,500 words','6-30'],
                    ['White paper','3,000-5,000 words','12-20'],
                    ['Research paper','4,000-10,000 words','16-40'],
                    ["Master's thesis",'15,000-50,000 words','60-200'],
                    ['Novel','80,000-100,000 words','320-400'],
                    ['PhD dissertation','60,000-100,000 words','240-400'],
                  ].map(([doc, words, pages], i) => (
                    <tr key={i} style={{borderBottom:'1px solid var(--border-subtle)'}}>
                      <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>{doc}</td>
                      <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>{words}</td>
                      <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>{pages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2" style={{color:'var(--text-faint)'}}>Page counts based on 250 words per page, 12pt Times New Roman, double-spaced, 1-inch margins.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>What AI Means for Word Count in 2026</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>AI has not made word counts irrelevant. If anything, it has raised the bar. 95% of content marketers now use AI in some capacity, according to Orbit Media's 2025 survey. But only 10% use it to write complete articles. Most use it for outlines, editing, or brainstorming.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The content that AI produces tends to hit a comfortable middle length — 1,000 to 1,500 words of generic coverage. That is exactly what Google is getting better at detecting and devaluing. The 2024-2025 Helpful Content Update specifically targets sites that publish large volumes of shallow content.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>What works is using AI as a starting point, then adding original data, personal experience, and specific examples that a language model cannot fabricate. A 2,000-word article with three original data points and a genuine opinion is worth more than a 5,000-word AI-generated guide that says nothing new.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>The bottom line: word count is a planning tool, not a goal. Use the guides on this page to understand what your audience expects. Then write exactly as many words as it takes to be genuinely helpful. Not one word more.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Writing Productivity Benchmarks</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>How fast should you write? Professional copywriters typically produce 1,000-2,000 polished words per day. Journalists on deadline can hit 1,500-3,000. Academic writers average 500-1,000 words of new draft per day. Novelists doing NaNoWriMo aim for 1,667 words per day to hit 50,000 in a month.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>If you are writing a 2,000-word blog post and it takes you under 2 hours, you are probably not doing enough research. If it takes you over 8 hours, you might be overthinking it. The sweet spot for most content marketers is 3-4 hours per article, including research, drafting, and one round of editing.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Typing speed matters less than thinking speed. The average person types at 40 words per minute. At that pace, 2,000 words of raw draft takes 50 minutes. The other 2-3 hours go into figuring out what to say, finding data to support it, and cutting the parts that do not earn their place.</p>
          </section>

        </div>
`;

    const result = insertBeforeFooter(g, guidesContent);
    if (result) {
      fs.writeFileSync(guidesPath, result, 'utf8');
      console.log('  ✅ Guides hub beefed up (~1600 words added)');
      beefed++;
    } else {
      console.log('  ❌ Could not find insertion point');
    }
  }
} else {
  console.log('  ❌ File not found');
}

// ============================================================
// 2. /words-to-pages (Words to Pages hub)
// ============================================================
console.log('\n--- Beefing up: /words-to-pages ---');

const wtpPath = path.join(APP, 'words-to-pages', 'page.js');
if (fs.existsSync(wtpPath)) {
  let w = fs.readFileSync(wtpPath, 'utf8');
  if (w.includes('Understanding Page Counts')) {
    console.log('  Already beefed up, skipping');
  } else {
    const wtpContent = `
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-16 px-4 space-y-12">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Understanding Page Counts in 2026</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The "250 words per page" rule has been the standard since typewriters. It still holds — but only under specific conditions: 12-point Times New Roman, double-spaced, with 1-inch margins on US Letter paper. Change any one of those variables and the count shifts, sometimes dramatically.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Garamond fits roughly 275 words per double-spaced page. Verdana squeezes in about 190. Courier New, the monospaced font still required by some screenwriting and legal submissions, manages only 137 words per double-spaced page. If your professor says "5 pages" and you use Courier, you are writing 685 words. If you use Garamond, you need 1,375. Same page count, double the work.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>This is why most academic institutions have moved toward word count requirements instead of page count requirements. Word counts remove the font variable entirely. The Common App essay is "250-650 words," not "1-2 pages." Graduate programs specify "10,000-15,000 words," not "40-60 pages." If you are given a page count, always ask which font and spacing are expected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Why Formatting Choices Change Your Page Count</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Four factors determine how many words fit on a page. Font type is the biggest. Serif fonts like Times New Roman and Garamond have compact letter shapes that pack more text per line. Sans-serif fonts like Arial and Verdana have wider letter spacing and take up more room.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Font size is the second factor. The standard is 12 point for most academic and business writing. Dropping to 11 point adds roughly 10-15% more words per page. Going up to 14 point — sometimes used in presentations or children's books — cuts your words per page by about 25%.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Line spacing is third. Double spacing is standard for academic papers because it leaves room for handwritten comments from professors. Single spacing doubles your words per page. 1.5 spacing, common in many European universities, lands somewhere in between at roughly 375 words per page with Times New Roman.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Margins are the fourth factor. Standard is 1 inch on all sides. Some students try adjusting to 0.9 inches to fit more text — most professors notice. APA format specifically requires 1-inch margins. MLA is the same. If you are using a non-standard format, the words-per-page calculation changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Words Per Page by Format: Complete Breakdown</h2>
            <div className="overflow-x-auto rounded-xl" style={{border:'1px solid var(--border-color)'}}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{background:'var(--accent-bg)'}}>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Format</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Single Spaced</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>1.5 Spaced</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Double Spaced</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Times New Roman 12pt','500','375','250'],
                    ['Arial 12pt','450','338','225'],
                    ['Calibri 11pt','475','356','238'],
                    ['Garamond 12pt','550','413','275'],
                    ['Georgia 12pt','420','315','210'],
                    ['Verdana 12pt','380','285','190'],
                    ['Courier New 12pt','275','206','137'],
                    ['Tahoma 12pt','400','300','200'],
                    ['Palatino 12pt','470','353','235'],
                    ['Handwritten (average)','175','N/A','N/A'],
                  ].map(([font, single, one5, double], i) => (
                    <tr key={i} style={{borderBottom:'1px solid var(--border-subtle)'}}>
                      <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>{font}</td>
                      <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>{single}</td>
                      <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>{one5}</td>
                      <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>{double}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2" style={{color:'var(--text-faint)'}}>All figures assume US Letter paper (8.5 x 11 inches) with 1-inch margins.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Common Page Count Questions by Document Type</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Students ask "how many pages is 1,000 words" more than almost any other writing question. The answer depends on formatting, but the quick version: 4 pages double-spaced, 2 pages single-spaced. That covers a standard college assignment.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>For a 5-page essay (double-spaced), you need roughly 1,250 words. A 10-page paper is about 2,500. A 20-page research paper is 5,000 words. These are the assignments that make up most undergraduate coursework, and the word-to-page ratio stays remarkably consistent as long as you stick to standard formatting.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Longer documents get trickier. A master's thesis at 20,000 words is about 80 double-spaced pages, but with a title page, abstract, table of contents, bibliography, and appendices, the final document might run 100-110 pages. A novel at 80,000 words is roughly 320 double-spaced manuscript pages, but a printed paperback has different margins and smaller font, so it comes out to about 280-320 printed pages depending on the publisher.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Blog posts and web content do not really have "pages" in the traditional sense. A 1,500-word blog post fills about 6 double-spaced manuscript pages but displays as a single scrollable webpage. For web content, reading time is a more useful metric than page count. At the average reading speed of 238 words per minute, a 1,500-word article takes about 6 minutes to read.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Page Count by Academic Style Guide</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Different style guides have slightly different formatting rules, which affects words per page. APA (7th edition) requires 12-point Times New Roman or 11-point Calibri, double-spaced, with 1-inch margins. This gives you roughly 250 words per page with Times New Roman or 238 with Calibri.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>MLA format uses 12-point Times New Roman, double-spaced, 1-inch margins — almost identical to APA in terms of words per page. The main difference is the header: MLA uses a running header with your last name and page number, while APA has a shortened title.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Chicago style is more flexible. It allows multiple fonts and does not mandate a specific size, though 12-point is standard. Footnotes in Chicago style can add significant length to a paper without adding to the word count, which is why a 5,000-word Chicago paper might run longer than an APA paper with the same word count.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>If you are writing for a specific class or publication, the style guide determines everything. When in doubt, use 12-point Times New Roman, double-spaced, 1-inch margins. That is the default that every professor, editor, and submission system expects.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Digital vs. Print: Why Page Counts Are Fading</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>The shift from page counts to word counts is accelerating. Google Docs, the platform most students now use, defaults to word count in its toolbar (Ctrl+Shift+C). Microsoft Word shows word count in the status bar. Both make it easy to track words in real time. Page count is just a byproduct of formatting.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Most online submission portals — university systems, journal submission tools, grant application forms — now specify word count limits rather than page limits. The Common App uses a word counter built into its text field. UCAS personal statements use a character limit (4,000 characters). Graduate school applications specify word ranges.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Even book publishing has shifted. Literary agents request word count in query letters, not page count. Publisher submission guidelines list word count ranges by genre. A literary agent shared on X recently that middle-grade fiction should be 30,000-60,000 words, YA 50,000-80,000, and adult fiction 70,000-120,000. No mention of pages.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>That said, page counts still matter in specific contexts. Legal briefs often have strict page limits. Screenplays use a one-page-per-minute rule (in Courier New, which gives roughly 250 words per page). Academic conference presentations are often structured as "a 10-page paper," meaning about 2,500 words double-spaced. If you are given a page limit, the converter table above is your quickest way to figure out the word count target.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Tips for Hitting Your Target Length</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>If you are under the word count, do not pad with adjectives. Look for gaps in your argument. Ask yourself: "What question would a skeptical reader ask at this point?" Then answer it. That adds substance, not fluff.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>If you are over the word count, start by cutting adverbs and filler phrases. "In order to" becomes "to." "Due to the fact that" becomes "because." "It is important to note that" becomes nothing — just state the thing. These mechanical cuts can shave 10-15% without losing any meaning.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>For the exact word count of any text, paste it into our free word counter. It shows words, characters, sentences, paragraphs, and reading time instantly. No signup, no limits.</p>
          </section>

        </div>
`;

    const result = insertBeforeFooter(w, wtpContent);
    if (result) {
      fs.writeFileSync(wtpPath, result, 'utf8');
      console.log('  ✅ Words to Pages hub beefed up (~1700 words added)');
      beefed++;
    } else {
      console.log('  ❌ Could not find insertion point');
    }
  }
} else {
  console.log('  ❌ File not found');
}

// ============================================================
// Helper function
// ============================================================
function insertBeforeFooter(content, newSection) {
  const footerIdx = content.lastIndexOf('<Footer');
  if (footerIdx > -1) {
    return content.slice(0, footerIdx) + newSection + '\n      ' + content.slice(footerIdx);
  }
  const mainClose = content.lastIndexOf('</main>');
  if (mainClose > -1) {
    return content.slice(0, mainClose) + newSection + '\n      ' + content.slice(mainClose);
  }
  return null;
}

// ============================================================
// DONE
// ============================================================
console.log('\\n═══════════════════════════════════');
console.log('  Script 1/4 complete: ' + beefed + ' hub pages beefed up');
console.log('═══════════════════════════════════');
console.log('\\nNow run:');
console.log('  git add . && git commit -m "Beef up Guides and Words to Pages hubs with 1500+ words each" && git push origin master');
console.log('\\nNext: Script 2 will handle all /word-count/for/ sub-pages (33 pages)');
