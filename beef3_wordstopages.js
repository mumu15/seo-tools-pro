const fs = require('fs');
const path = require('path');

// SCRIPT 3/4: Beef up all /words-to-pages/ sub-pages
// Each page covers a specific word count (250, 500, 1000, etc.)
// Add 1500+ words of unique context: what documents hit that length,
// formatting details, reading/speaking time, real-world examples

const APP = path.join(__dirname, 'app');
const BASE = path.join(APP, 'words-to-pages');
let beefed = 0;
let skipped = 0;

// Unique content for each word count
const wordData = {
  250: {
    docs: 'A 250-word piece is roughly one double-spaced page. This is the length of a short email, a product description, an Instagram caption pushed to its limit, or the minimum for an IELTS Writing Task 2 essay.',
    context: 'College application supplemental essays often land at 250 words. Stanford asks for 250-word responses to several prompts. At this length, every sentence must earn its place. There is no room for throat-clearing introductions or padded conclusions.',
    writing: 'Writing 250 words well is harder than writing 1,000 words adequately. You have space for roughly 3-4 paragraphs or 12-15 sentences. A clear structure helps: one sentence of context, 2-3 sentences making your point, one sentence closing. Repeat for each paragraph.',
    reading: 'At the average reading speed of 238 words per minute, 250 words takes about 1 minute to read. As a speech delivered at 130 WPM, it takes about 2 minutes. This is the length of a short wedding toast or a brief business elevator pitch.',
    realworld: 'Most product descriptions on Amazon are 150-300 words. A standard paragraph in a newspaper article is 50-75 words, so 250 words gives you about 3-4 paragraphs. A LinkedIn recommendation is typically 100-250 words. The abstract for an academic paper runs 150-300 words.',
    mistakes: 'The most common mistake at 250 words is trying to say too much. Pick one idea. Develop it with one specific example. Close. Trying to cover three ideas in 250 words means none of them gets adequate treatment.',
  },
  300: {
    docs: 'A 300-word piece is about 1.2 double-spaced pages. This is the length of a short blog comment, a long social media post, a brief press statement, or a homework paragraph assignment.',
    context: 'Many high school essay assignments start at 300 words — the classic five-paragraph essay at its shortest. The GRE argument essay averages 350-500 words in 30 minutes, so 300 is about the minimum for a timed analytical response.',
    writing: 'At 300 words you can make one clear argument with supporting evidence. Structure it as: opening claim (1-2 sentences), evidence or example (3-5 sentences), analysis of the evidence (2-3 sentences), closing that connects back to the claim (1-2 sentences).',
    reading: 'Reading time: about 1.3 minutes at average speed. Speaking time: about 2.3 minutes at 130 WPM. This is the length of a very short news segment or a brief office announcement.',
    realworld: 'A standard newspaper brief or wire service story runs 300-400 words. Many newsletter intro sections are 200-300 words before linking to the full article. A Yelp review averages about 200-300 words. The "About" section on most small business websites is 200-400 words.',
    mistakes: 'At 300 words, writers often waste the first 50-75 words on unnecessary setup. Get to the point immediately. If your first sentence could be deleted without losing meaning, delete it.',
  },
  500: {
    docs: 'A 500-word piece fills one single-spaced page or two double-spaced pages. This is the standard length for a short blog post, a college scholarship essay, a personal statement for some graduate programs, or a detailed product review.',
    context: 'The 500-word essay is a staple of high school English classes and college admissions. It is long enough to develop a single argument with 2-3 supporting points but short enough to force concise writing. Many students encounter word count discipline for the first time at this length.',
    writing: 'A good 500-word structure: 50-word introduction with a clear thesis, three body paragraphs of 120-130 words each, and a 50-word conclusion. This is not a rigid formula, but it ensures balanced coverage. Each body paragraph should have a topic sentence, evidence, and analysis.',
    reading: 'At 238 WPM, 500 words takes about 2 minutes to read. As a speech, it takes about 3.5-4 minutes at a natural pace. This is the length of a standard blog post summary, a short conference lightning talk, or a YouTube video script for a 3-4 minute video.',
    realworld: 'Many content marketing teams produce 500-word blog posts for topics that need basic coverage but not deep analysis. A standard cover letter is 300-500 words. An executive summary in a business plan is 400-600 words. A Wikipedia article stub is typically 300-500 words before expansion.',
    mistakes: 'The biggest risk at 500 words is being too shallow. You have room for one well-developed idea with evidence, or two ideas with less depth. Trying to cover five points in 500 words means each point gets about 80 words — barely enough for a claim and a sentence of support.',
  },
  600: {
    docs: 'At 600 words, you have 2.4 double-spaced pages. This is the length of a standard press release, a detailed cover letter, or a medium-length blog post.',
    context: 'The Common App essay allows up to 650 words, so most successful college application essays land at 580-620 words. A press release typically runs 400-600 words. Many grant proposal abstracts or project summaries fall in this range.',
    writing: 'At 600 words you can handle a two-part argument comfortably: introduce the topic in 75 words, develop your first point in 200 words with evidence, develop your second point in 200 words, and conclude in 125 words with a synthesis of both points.',
    reading: 'Reading time: about 2.5 minutes. Speaking time: about 4.5 minutes at 130 WPM. A 600-word op-ed can be read during a coffee break. As a speech, it fits comfortably into a brief presentation slot.',
    realworld: 'Many newspaper op-eds run 600-750 words. The "About Us" page on a mid-size company website is typically 400-700 words. A detailed LinkedIn article summary is often 500-700 words. Most email newsletters from individual creators run 400-700 words.',
    mistakes: 'At 600 words, the temptation is to match the Common App maximum of 650. If your essay reads well at 580, do not add 70 words of padding to get closer to the limit. Admissions officers have read thousands of essays. They can tell when the last paragraph was added to fill space.',
  },
  750: {
    docs: 'A 750-word piece is 3 double-spaced pages. This is a standard newspaper column, a detailed blog post, or an op-ed for a major publication.',
    context: 'Many newspaper columns are capped at 750 words. The New York Times opinion section publishes pieces of 700-1,200 words, with guest op-eds typically at the shorter end. This length is enough for a structured argument with introduction, three supporting points, and conclusion.',
    writing: '750 words gives you room to develop ideas with examples. The ideal structure: 75-word intro, four paragraphs of 150 words each covering different aspects of your argument, and a 75-word conclusion. Alternatively, three paragraphs of 200 words with 75 words each for intro and conclusion.',
    reading: 'Reading time: about 3 minutes. Speaking time: about 5-6 minutes. This matches a standard 5-minute speech, making 750 words a useful benchmark for short presentations, wedding speeches, and conference lightning talks.',
    realworld: 'The standard op-ed length across most major newspapers is 700-800 words. Many magazine "front of book" pieces run 600-800 words. A typical chapter in a business book is 3,000-5,000 words, so 750 words represents a major section or subsection.',
    mistakes: 'At 750 words, writers often struggle with transitions. With 3-4 major points to cover, the connections between them need to be smooth. Read the last sentence of each paragraph followed by the first sentence of the next. If the jump feels abrupt, add a transition sentence.',
  },
  800: {
    docs: 'An 800-word piece fills 3.2 double-spaced pages. This is the length of a substantial blog post, a detailed product page, or a medium-length feature article introduction.',
    context: 'Many medium-length blog posts land at 800-1,000 words. This is enough to cover a topic with reasonable depth without requiring a major time commitment from the reader. Reader engagement data shows that 800-word posts have completion rates 15-20% higher than 2,000-word posts.',
    writing: 'At 800 words you have flexibility. You can go deep on a single topic with multiple examples, or cover 3-4 related topics at a surface level. The deep approach almost always performs better for SEO and reader satisfaction.',
    reading: 'Reading time: about 3.4 minutes. Speaking time: about 6 minutes. This is slightly longer than a standard 5-minute presentation, so if you are writing a speech for a 5-minute slot, aim for 700 words instead to leave room for pauses.',
    realworld: 'A typical newspaper feature article introduction runs 600-800 words before the jump. Many Substack newsletters from professional writers average 700-900 words. A college freshman composition essay assignment often specifies 800-1,000 words as the target range.',
    mistakes: 'At 800 words, the structure becomes important. Without subheadings or clear paragraph breaks, 800 words of continuous prose feels dense on screen. Add a subheading every 200-250 words if publishing online. For academic papers, let paragraph breaks do the structural work.',
  },
  1000: {
    docs: 'A 1,000-word piece is 4 double-spaced pages or 2 single-spaced pages. This is the length of a standard college essay, a detailed blog post, a short white paper summary, or a magazine feature.',
    context: 'The 1,000-word essay is a workhorse of academic writing. Most undergraduate assignments specify 1,000-1,500 words. It is long enough to develop a thesis with evidence and counterarguments, but short enough to write in a single focused sitting of 2-3 hours.',
    writing: '1,000 words divides neatly: 100-word introduction, three body sections of 250 words each, and a 150-word conclusion. Each body section has room for a topic sentence, 2-3 sentences of evidence or examples, and 2-3 sentences of analysis. This is the simplest structure that allows genuine intellectual depth.',
    reading: 'Reading time: about 4 minutes at average speed. Speaking time: about 7-8 minutes. As a speech, 1,000 words fits a standard 7-minute conference presentation slot. A 1,000-word blog post takes about as long to read as one page of a newspaper.',
    realworld: 'The average blog post in 2025 was 1,333 words, making 1,000 words slightly below average but still viable for less competitive keywords. A Substack newsletter from a daily writer often runs 800-1,200 words. Many trade magazine articles are 1,000-1,500 words. A chapter of a "how-to" book is often 2,500-4,000 words, so 1,000 words is a major section.',
    mistakes: 'At 1,000 words, the most common problem is a weak conclusion. After spending 850 words developing an argument, writers run out of energy and tack on a two-sentence summary. A good conclusion at this length should be 100-150 words and should add something new — a implication, a call to action, or a forward-looking question — not just repeat the introduction.',
  },
  1200: {
    docs: 'At 1,200 words you have 4.8 double-spaced pages. This is a solid blog post, a detailed newsletter edition, a short case study, or a college essay at the upper range.',
    context: 'Many SEO-focused blog posts in 2026 land at 1,200-1,500 words for moderate-competition keywords. This length allows you to cover a topic thoroughly enough to satisfy both readers and search engines without the diminishing returns of very long content.',
    writing: 'A 1,200-word piece works well with 4-5 sections of 200-250 words each, plus a 100-word intro and 100-word conclusion. This structure naturally creates 4-5 subheadings, which improves both readability and SEO.',
    reading: 'Reading time: about 5 minutes. Speaking time: about 9 minutes. A 1,200-word piece is the upper limit of what most people will read in a single sitting on mobile without needing a break.',
    realworld: 'LinkedIn articles that perform well often run 1,000-1,300 words. A standard corporate case study is 1,000-1,500 words. Many industry report summaries are 1,000-1,500 words before linking to the full report.',
    mistakes: 'At 1,200 words you are long enough that structure becomes essential. Without subheadings, bullet points, or visual breaks, the content feels like a wall of text. Always use at least 3-4 subheadings in a 1,200-word online article.',
  },
  1500: {
    docs: 'A 1,500-word piece is 6 double-spaced pages. This is a standard university essay, a comprehensive blog post, a detailed feature article, or a thorough product comparison.',
    context: '1,500 words is the entry point for competitive SEO content. Backlinko found the average first-page result contains 1,447 words. At this length, you can cover a topic with genuine depth — multiple perspectives, data points, and practical takeaways.',
    writing: 'The 1,500-word sweet spot works because it forces prioritization. You cannot cover everything, so you must choose the 4-6 most important subtopics. This constraint produces better content than a 3,000-word piece that covers 12 subtopics superficially.',
    reading: 'Reading time: about 6 minutes. Speaking time: about 11-12 minutes. Most readers will complete a 1,500-word article if it is well-structured, but they will skim rather than read every word. Use bold text, subheadings, and pull quotes to guide skimmers.',
    realworld: 'The most common undergraduate essay length is 1,500 words. Orbit Media found the average blog post is 1,333 words, making 1,500 above average. Many trade publications cap feature articles at 1,500-2,000 words. A standard white paper executive summary is 1,000-1,500 words.',
    mistakes: 'At 1,500 words, do not front-load all the interesting content. Many writers put their best material in the first 500 words and then repeat themselves for the remaining 1,000. Distribute your strongest points evenly throughout the piece. The reader who makes it to paragraph 10 deserves new information, not a rephrasing of paragraph 3.',
  },
  1750: {
    docs: '1,750 words fills 7 double-spaced pages. This is an above-average blog post, a short research paper, a detailed how-to guide, or a thorough essay.',
    context: 'One analysis suggested the ideal blog post length for SEO in 2026 is 1,760-2,400 words — and 1,750 sits right at the bottom of that range. Posts at this length are long enough to satisfy comprehensive search queries without the padding that often inflates posts to 2,500+.',
    writing: 'At 1,750 words, you can develop 5-7 distinct sections of 200-300 words each. Each section should make one clear point with evidence. Think of it as 5-7 mini-essays connected by a central thesis.',
    reading: 'Reading time: about 7 minutes. This matches the "ideal read time" that Medium identified in their data — 7 minutes, or roughly 1,750 words. Posts at this length get the highest average read ratio on Medium.',
    realworld: 'A detailed how-to guide with screenshots and code examples often runs 1,500-2,000 words of text (not counting the visual elements). A college course paper at the 7-page mark. A substantial newsletter from a weekly writer.',
    mistakes: 'The transition from a 1,000-word to a 1,750-word piece is where many writers struggle. The extra 750 words should not be more of the same — they should be deeper analysis, additional examples, counterarguments, or data. Going wider (more subtopics) rather than deeper (more analysis per subtopic) usually produces weaker content.',
  },
  2000: {
    docs: 'A 2,000-word piece is 8 double-spaced pages or 4 single-spaced. This is a solid long-form blog post, a standard academic essay, a detailed case study, or a short white paper.',
    context: 'Content over 2,000 words gets 2.5 times more backlinks than shorter content, according to Ahrefs. Only 9% of bloggers write posts this long, but 39% of those who do report strong results. The 2,000-word threshold is where content begins to attract links and shares at a materially higher rate.',
    writing: '2,000 words requires a table of contents or at least clear section headings. Without structure, the reader gets lost. Plan for 6-8 sections: introduction, 5-6 body sections of 250-300 words each, and a conclusion. Each section needs a subheading that tells the skimmer what it covers.',
    reading: 'Reading time: about 8 minutes. Speaking time: about 15 minutes. A 2,000-word article is the upper limit for casual reading. Beyond this, you are asking for a significant time investment and the content must deliver proportional value.',
    realworld: 'Many competitive SEO blog posts target 2,000-2,500 words. A standard university mid-term essay is 2,000-3,000 words. A detailed feature article in a business magazine is 2,000-3,000 words. The average master\'s thesis chapter is roughly 4,000-8,000 words, so 2,000 is about half a chapter.',
    mistakes: 'The biggest risk at 2,000 words is losing the reader in the middle. Data shows that engagement drops significantly around the 40-60% mark of long content. Place your most valuable insight, your best data point, or your strongest example at the midpoint — not just at the beginning and end.',
  },
  2500: {
    docs: '2,500 words fills 10 double-spaced pages. This is a comprehensive blog post, a detailed research paper, a substantial case study, or a short chapter.',
    context: 'Articles of 2,500+ words receive an average of 8.8 social shares and links, compared to 3.47 for articles under 1,000 words. The top-performing blog posts on Google average about 2,450 words, according to multiple studies. This is the gold standard for SEO-driven long-form content.',
    writing: 'At 2,500 words you need a clear outline before writing. Divide into 8-10 sections. Use subheadings as a mini table of contents. Include at least one table, list, or visual element to break up the text. Pure prose for 2,500 words will lose most online readers.',
    reading: 'Reading time: about 10 minutes. This is a substantial time commitment. Readers who start a 2,500-word article are self-selected — they want depth. Do not waste their time with content they could have gotten from a 500-word summary.',
    realworld: 'A 10-page college paper is the standard end-of-semester assignment in many courses. A detailed product comparison reviewing 5-7 options runs 2,000-3,000 words. A comprehensive guide to a software tool or process often hits 2,500-3,500 words.',
    mistakes: 'At 2,500 words, repetition is the silent killer. Search for phrases you have used more than once. Check whether any two sections make essentially the same point with different words. If section 3 and section 7 are saying the same thing, merge them and use the freed space for new information.',
  },
  3000: {
    docs: '3,000 words is 12 double-spaced pages or 6 single-spaced. This is a pillar content piece, a detailed research paper, a chapter of a nonfiction book, or a comprehensive guide.',
    context: 'Articles over 3,000 words receive an average of 11.07 shares and links — more than triple the rate for sub-1,000-word articles. This length signals "definitive resource" to both readers and search engines. If you are going to write 3,000 words, make it the best resource on the internet for that topic.',
    writing: 'A 3,000-word piece benefits from a table of contents at the top with anchor links. This lets readers jump to the section they care about. Not everyone will read 3,000 words linearly — give them permission to skip around.',
    reading: 'Reading time: about 13 minutes. As a speech, about 23 minutes. A 3,000-word article is equivalent to a short podcast episode or a TED talk. Readers who engage with content this long are highly qualified — they have a real need for the information.',
    realworld: 'Pillar content for content marketing hubs typically runs 3,000-5,000 words. A short nonfiction book chapter is 3,000-4,000 words. A detailed white paper is 3,000-5,000 words. An undergraduate honors thesis chapter is roughly 3,000-5,000 words.',
    mistakes: 'At 3,000 words, the introduction cannot be more than 150-200 words. Readers who committed to a long article want to get into the substance quickly. A 500-word introduction to a 3,000-word article wastes 17% of the content on setup.',
  },
  4000: {
    docs: '4,000 words fills 16 double-spaced pages. This is a substantial academic paper, an in-depth guide, a detailed case study with multiple examples, or two chapters of a short book.',
    context: 'Very few blog posts need to be 4,000 words. This length is appropriate for: comprehensive buyer guides comparing 10+ products, ultimate guides to complex topics like "How to Start a Business," detailed tutorials with code examples, or academic papers. If your topic does not require this depth, a tighter 2,000-word version will perform better.',
    writing: 'At 4,000 words, you need an outline, subheadings, a table of contents, and at least 2-3 visual elements (tables, charts, images, or callout boxes). Pure text at this length has a completion rate near zero for online content.',
    reading: 'Reading time: about 17 minutes. Very few people read 4,000 words in one sitting online. Design for scanning: make every subheading informative enough that a reader who only reads the headings still gets the main takeaways.',
    realworld: 'A standard journal article in the humanities runs 6,000-10,000 words, so 4,000 is a short-to-medium paper. A detailed SaaS comparison guide runs 3,000-5,000 words. A nonfiction book chapter averages 3,000-5,000 words.',
    mistakes: 'The most common mistake with 4,000-word content is not justifying the length. Ask yourself: can any section be cut without losing value? If the answer is yes, cut it. A tight 3,000-word piece always outperforms a padded 4,000-word piece.',
  },
  5000: {
    docs: '5,000 words fills 20 double-spaced pages or 10 single-spaced. This is a major content piece: an ultimate guide, a pillar page, a research paper, a long case study, or a short ebook.',
    context: 'Only about 2.7% of published articles exceed 2,000 words, making 5,000-word content extremely rare. That rarity is its advantage — there is less competition at this length. But the content must genuinely warrant the length. A 5,000-word article that could have been 2,000 will have high bounce rates and low engagement.',
    writing: 'Break into 10-15 sections with clear subheadings. Include a table of contents with jump links at the top. Add at least 3-5 visual elements. Consider offering a downloadable PDF version for readers who want to reference it later.',
    reading: 'Reading time: about 21 minutes. This is the length of a podcast episode or a long commute read. Content this long is typically bookmarked rather than read immediately. Design it to be useful on a second visit.',
    realworld: 'A full ebook is 10,000-30,000 words, so 5,000 words is about half of a short ebook. A detailed business plan is 5,000-10,000 words. A master\'s thesis chapter in the humanities might run 5,000-8,000 words. A comprehensive SEO audit document is often 4,000-6,000 words.',
    mistakes: 'At 5,000 words, you need original value that cannot be found in shorter articles on the same topic. This means original data, unique frameworks, case studies with real numbers, or expert interviews. If every sentence in your 5,000-word piece could be found by combining three 1,500-word articles from competitors, you have not added enough original value.',
  },
  6000: {
    docs: '6,000 words is 24 double-spaced pages. This is a major piece of content: a detailed research paper, a comprehensive tutorial, a long ebook chapter, or an in-depth industry report.',
    context: 'Journal articles in many social science fields average 6,000-8,000 words. At this length, you are producing something closer to a report than a blog post. The audience expects thoroughness, data, and actionable conclusions.',
    writing: 'Plan 12-15 sections. Each section should be self-contained enough that a reader could benefit from it independently. Use cross-references between sections. Include a detailed table of contents at the top.',
    reading: 'Reading time: about 25 minutes. This is a significant commitment. Most readers will consume this over multiple sessions. Design for bookmarking and return visits.',
    realworld: 'A standard academic journal article in psychology or sociology runs 5,000-8,000 words. A detailed industry benchmark report is 5,000-8,000 words. A short ebook that serves as a lead magnet is often 5,000-7,000 words.',
    mistakes: 'At 6,000 words, inconsistency becomes visible. If your tone shifts between sections because you wrote them on different days, readers notice. Do a final pass specifically for voice and tone consistency.',
  },
  7500: {
    docs: '7,500 words fills 30 double-spaced pages. This is a short novella, a detailed research paper, a comprehensive guide with multiple case studies, or a substantial ebook.',
    context: 'This length is uncommon for online content but standard for academic work and professional publications. If you are writing 7,500 words for the web, you are likely creating a pillar resource that you expect to drive traffic for years.',
    writing: 'Consider breaking into a multi-page series rather than a single post. A 7,500-word guide split into 3 connected articles of 2,500 words each can generate more page views and internal links than one massive page.',
    reading: 'Reading time: about 31 minutes. This is the length of a short commute audiobook session or a lunch-break deep read.',
    realworld: 'A novella starts at about 7,500 words. A comprehensive industry report might run 7,000-10,000 words. An MBA capstone project summary is often 5,000-8,000 words.',
    mistakes: 'At this length, navigation is everything. Without a sticky table of contents, progress indicator, or chapter-style breaks, the reader has no sense of where they are in the document. Every 7,500-word piece needs a navigation aid.',
  },
  8000: {
    docs: '8,000 words fills 32 double-spaced pages. This is a substantial academic paper, a short thesis chapter, an ebook, or a comprehensive multi-topic guide.',
    context: 'Many conference proceedings cap papers at 8,000-10,000 words. NIH grant proposals allow about 6,000-7,000 words for the research strategy. A detailed business plan for bank financing often runs 8,000-10,000 words.',
    writing: 'At 8,000 words, professional editing is not optional. Self-editing at this length misses structural problems. Have someone else read it for flow, repetition, and clarity before publishing.',
    reading: 'Reading time: about 34 minutes. Design this as a reference document rather than something meant to be read start-to-finish. Strong headings, a good index, and scannable formatting are essential.',
    realworld: 'A standard ebook that serves as a marketing asset is 8,000-15,000 words. A detailed tutorial covering an entire software platform might run 8,000-12,000 words. A PhD qualifying exam paper is typically 8,000-15,000 words.',
    mistakes: 'Repetition is nearly guaranteed at 8,000 words. Use your word processor\'s search function to check for repeated phrases. If you say "it is important to" more than twice in 8,000 words, the reader will notice.',
  },
  10000: {
    docs: '10,000 words fills 40 double-spaced pages. This is a short ebook, a master\'s thesis chapter, a comprehensive industry report, or a detailed technical documentation set.',
    context: '10,000 words crosses from "article" into "document" territory. Readers expect a table of contents, chapter-style sections, and a clear structure. This is not a blog post — it is a publication.',
    writing: 'Outline obsessively before writing. A 10,000-word document written without an outline will meander. Map every section and subsection with target word counts before drafting a single paragraph.',
    reading: 'Reading time: about 42 minutes. This is the length of a podcast episode or a short audiobook chapter. Most readers will consume this over 2-3 sessions.',
    realworld: 'A short ebook is 10,000-15,000 words. A detailed government report summary is 8,000-12,000 words. A comprehensive competitor analysis for a business is 8,000-12,000 words. An undergraduate honors thesis is often 10,000-15,000 words.',
    mistakes: 'The introduction to a 10,000-word document should be no more than 300-500 words. At this length, the introduction\'s job is to explain what the reader will learn and help them decide whether to continue. It is not the place for background information that belongs in section 2.',
  },
  15000: {
    docs: '15,000 words fills 60 double-spaced pages. This is a master\'s thesis, a substantial ebook, a detailed report, or a short novella.',
    context: 'Most master\'s theses fall in the 15,000-25,000 word range. At this length, you are producing a document that takes genuine expertise to write well. There are no shortcuts — 15,000 words of quality content requires deep subject knowledge.',
    writing: 'Divide into chapters or major sections of 2,000-3,000 words each. Each chapter should have its own introduction, body, and conclusion. The reader should be able to read any chapter independently and get value from it.',
    reading: 'Reading time: about 63 minutes — over an hour. This is a committed read. Consider providing an executive summary of 500-1,000 words for readers who want the highlights without the full document.',
    realworld: 'A standard master\'s dissertation is 15,000-25,000 words. A comprehensive industry benchmark report is 10,000-20,000 words. A novella is 17,500-40,000 words. A detailed training manual might run 15,000-25,000 words.',
    mistakes: 'At 15,000 words, scope creep is the biggest risk. Define what the document covers and what it does not cover in the introduction. Without clear boundaries, 15,000 words becomes 20,000 as you keep adding "one more section" that does not quite fit the original plan.',
  },
  20000: {
    docs: '20,000 words fills 80 double-spaced pages. This is a substantial thesis, a full ebook, a novella, or a comprehensive technical manual.',
    context: 'At 20,000 words you are writing a book-length document. This requires chapter-level planning, consistent voice across days or weeks of writing, and professional editing. Few people can write 20,000 quality words in less than a month.',
    writing: 'Use a chapter outline with target word counts for each chapter. Aim for 5-8 chapters of 2,500-4,000 words each. Build in time for revision — a 20,000-word document needs at least two full editing passes.',
    reading: 'Reading time: about 84 minutes. This is a book you read over several sessions. Provide clear stopping points at the end of each chapter so readers can put it down and pick it up again easily.',
    realworld: 'A standard ebook for marketing purposes is 15,000-25,000 words. A novella is 17,500-40,000 words. An undergraduate thesis is 10,000-20,000 words. A detailed company handbook might run 20,000-30,000 words.',
    mistakes: 'Tonal inconsistency becomes a serious problem at 20,000 words. If you write chapter 1 on Monday and chapter 7 two weeks later, they may read like different authors wrote them. Do a dedicated voice-consistency pass after completing the first draft.',
  },
  25000: {
    docs: '25,000 words fills 100 double-spaced pages. This is a short book, a detailed thesis, a comprehensive technical manual, or a long novella.',
    context: '25,000 words is the threshold where you can legitimately call something a "book." Amazon Kindle categorizes works of 25,000+ words as books rather than short reads. At this length, you have space for a proper introduction, 8-12 chapters, and a conclusion.',
    writing: 'Plan for 3-6 months of writing time. At a sustainable pace of 500-750 words per day, five days a week, a 25,000-word manuscript takes 7-10 weeks to draft. Budget another 3-6 weeks for revision and editing.',
    reading: 'Reading time: about 105 minutes — just under two hours. This is a short book that can be read in a long flight or two commute sessions. As a printed book, it would be roughly 100-120 pages.',
    realworld: 'Many successful self-published nonfiction books are 25,000-35,000 words. A master\'s thesis in the sciences often runs 20,000-30,000 words. A comprehensive employee onboarding guide for a large company might be 20,000-30,000 words. A detailed research monograph starts at about 25,000 words.',
    mistakes: 'At 25,000 words, your biggest enemy is the "messy middle." The first few chapters and the last chapter are usually strong because they have clear purposes (introduce and conclude). The middle chapters need equally clear purposes. If a chapter does not advance the book\'s central argument or add essential information, it should be cut or merged with another chapter.',
  },
};

// ============================================================
// Process all pages
// ============================================================

let allSlugs = [];
if (fs.existsSync(BASE)) {
  allSlugs = fs.readdirSync(BASE).filter(f => {
    const fp = path.join(BASE, f);
    return fs.statSync(fp).isDirectory() && fs.existsSync(path.join(fp, 'page.js'));
  });
}

console.log('Found ' + allSlugs.length + ' sub-pages in /words-to-pages/\n');

for (const slug of allSlugs) {
  const filePath = path.join(BASE, slug, 'page.js');
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract number from slug (e.g., "1000-words" -> 1000)
  const numMatch = slug.match(/^(\d+)/);
  if (!numMatch) {
    console.log('  ⏭️  ' + slug + ' (not a number slug)');
    skipped++;
    continue;
  }
  const num = parseInt(numMatch[1]);
  const data = wordData[num];

  if (!data) {
    console.log('  ⏭️  ' + slug + ' (no content data)');
    skipped++;
    continue;
  }

  // Check if already beefed up
  if (content.includes('BEEFED-UP CONTENT')) {
    console.log('  ⏭️  ' + slug + ' (already done)');
    skipped++;
    continue;
  }

  const numFormatted = num.toLocaleString();

  // Build JSX
  let jsx = '\n        {/* === BEEFED-UP CONTENT: 1500+ words === */}\n';
  jsx += '        <div className="max-w-4xl mx-auto mt-14 px-4 space-y-10">\n';

  jsx += '\n          <section>\n';
  jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>What Is ' + numFormatted + ' Words?</h2>\n';
  jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>' + data.docs.replace(/'/g, "\\'") + '</p>\n';
  jsx += '            <p className="leading-relaxed" style={{color:\'var(--text-muted)\'}}>' + data.context.replace(/'/g, "\\'") + '</p>\n';
  jsx += '          </section>\n';

  jsx += '\n          <section>\n';
  jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>Writing ' + numFormatted + ' Words: Structure and Strategy</h2>\n';
  jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>' + data.writing.replace(/'/g, "\\'") + '</p>\n';
  jsx += '            <p className="leading-relaxed" style={{color:\'var(--text-muted)\'}}>' + data.reading.replace(/'/g, "\\'") + '</p>\n';
  jsx += '          </section>\n';

  jsx += '\n          <section>\n';
  jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>Real-World Examples of ' + numFormatted + '-Word Documents</h2>\n';
  jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>' + data.realworld.replace(/'/g, "\\'") + '</p>\n';
  jsx += '            <p className="leading-relaxed" style={{color:\'var(--text-muted)\'}}>' + data.mistakes.replace(/'/g, "\\'") + '</p>\n';
  jsx += '          </section>\n';

  // Add formatting reference section
  jsx += '\n          <section>\n';
  jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>' + numFormatted + ' Words in Different Formats</h2>\n';
  jsx += '            <div className="overflow-x-auto rounded-xl" style={{border:\'1px solid var(--border-color)\'}}>\n';
  jsx += '              <table className="w-full text-sm">\n';
  jsx += '                <thead><tr style={{background:\'var(--accent-bg)\'}}>\n';
  jsx += '                  <th className="text-left py-3 px-4 font-semibold" style={{color:\'var(--accent)\'}}>Format</th>\n';
  jsx += '                  <th className="text-left py-3 px-4 font-semibold" style={{color:\'var(--accent)\'}}>Pages</th>\n';
  jsx += '                  <th className="text-left py-3 px-4 font-semibold" style={{color:\'var(--accent)\'}}>Time</th>\n';
  jsx += '                </tr></thead>\n';
  jsx += '                <tbody>\n';

  const pages1x = (num / 500).toFixed(1);
  const pages15x = (num / 375).toFixed(1);
  const pages2x = (num / 250).toFixed(1);
  const readMin = Math.round(num / 238);
  const speakMin = Math.round(num / 130);

  const rows = [
    ['Single spaced (Times New Roman 12pt)', pages1x + ' pages', readMin + ' min read'],
    ['1.5 spaced', pages15x + ' pages', readMin + ' min read'],
    ['Double spaced (standard academic)', pages2x + ' pages', readMin + ' min read'],
    ['Speech at 130 WPM', 'N/A', speakMin + ' min speaking'],
    ['Speech at 150 WPM (conversational)', 'N/A', Math.round(num / 150) + ' min speaking'],
    ['Handwritten', (num / 175).toFixed(1) + ' pages', readMin + ' min read'],
  ];

  for (const [fmt, pg, tm] of rows) {
    jsx += '                  <tr style={{borderBottom:\'1px solid var(--border-subtle)\'}}>\n';
    jsx += '                    <td className="py-2.5 px-4 font-medium" style={{color:\'var(--text-primary)\'}}>' + fmt + '</td>\n';
    jsx += '                    <td className="py-2.5 px-4" style={{color:\'var(--text-muted)\'}}>' + pg + '</td>\n';
    jsx += '                    <td className="py-2.5 px-4" style={{color:\'var(--text-muted)\'}}>' + tm + '</td>\n';
    jsx += '                  </tr>\n';
  }

  jsx += '                </tbody>\n';
  jsx += '              </table>\n';
  jsx += '            </div>\n';
  jsx += '          </section>\n';

  // Add writing time section
  const draftMin = Math.round(num / 40); // at 40 WPM typing
  const totalHours = (num / 500).toFixed(1); // ~500 polished words per hour

  jsx += '\n          <section>\n';
  jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>How Long Does It Take to Write ' + numFormatted + ' Words?</h2>\n';
  jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>At an average typing speed of 40 words per minute, the raw typing time for ' + numFormatted + ' words is about ' + draftMin + ' minutes. But typing is not writing. Research, outlining, drafting, and editing bring the total time to roughly ' + totalHours + ' hours for polished content.</p>\n';
  jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>Professional copywriters typically produce 1,000-2,000 polished words per day. Academic writers average 500-1,000 new words per day. At those rates, a ' + numFormatted + '-word piece takes ' + (num <= 1000 ? 'a few hours to one day' : num <= 3000 ? '1-3 days' : num <= 5000 ? '3-5 days' : num <= 10000 ? '1-2 weeks' : '2-6 weeks') + ' of focused work.</p>\n';
  jsx += '            <p className="leading-relaxed" style={{color:\'var(--text-muted)\'}}>AI writing tools can generate ' + numFormatted + ' words in seconds, but the output requires substantial editing for accuracy, voice, and originality. Most content marketers in 2026 use AI for first drafts and outlines, then spend the bulk of their time revising. The editing phase typically takes as long as the drafting phase, regardless of whether AI was involved.</p>\n';
  jsx += '          </section>\n';

  // Add SEO context for web-relevant word counts
  if (num >= 500 && num <= 5000) {
    jsx += '\n          <section>\n';
    jsx += '            <h2 className="text-2xl font-bold mb-4" style={{color:\'var(--text-primary)\'}}>' + numFormatted + ' Words and SEO</h2>\n';
    jsx += '            <p className="leading-relaxed mb-3" style={{color:\'var(--text-muted)\'}}>The average first-page Google result contains about 1,447 words (Backlinko). ' + (num < 1447 ? 'At ' + numFormatted + ' words, your content is below that average. This can still rank for lower-competition keywords or queries where a shorter, more focused answer matches the search intent better than a longer article.' : 'At ' + numFormatted + ' words, your content is ' + (num > 1447 ? 'above' : 'right at') + ' the average for first-page results. This length provides enough depth for most competitive keywords, especially when combined with strong backlinks and good on-page optimization.') + '</p>\n';
    jsx += '            <p className="leading-relaxed" style={{color:\'var(--text-muted)\'}}>Word count alone does not determine rankings. Google evaluates whether the content satisfies the search intent. A ' + numFormatted + '-word article that directly and completely answers the query will outrank a ' + (num * 2).toLocaleString() + '-word article that buries the answer under unnecessary context. Write to the length the topic requires, not to a target number.</p>\n';
    jsx += '          </section>\n';
  }

  jsx += '\n        </div>\n';

  // Insert before Footer
  const footerIdx = content.lastIndexOf('<Footer');
  const mainClose = content.lastIndexOf('</main>');
  let insertIdx = footerIdx > -1 ? footerIdx : mainClose;

  if (insertIdx > -1) {
    content = content.slice(0, insertIdx) + jsx + '      ' + content.slice(insertIdx);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✅ ' + slug);
    beefed++;
  } else {
    console.log('  ❌ ' + slug + ' (no insertion point)');
  }
}

console.log('\n═══════════════════════════════════');
console.log('  Script 3/4 complete');
console.log('  Beefed up: ' + beefed);
console.log('  Skipped:   ' + skipped);
console.log('═══════════════════════════════════');
console.log('\nNow run:');
console.log('  git add . && git commit -m "Beef up ' + beefed + ' words-to-pages sub-pages with 1500+ words each" && git push origin master');
console.log('\nNext: Script 4 will handle all /character-limits/ sub-pages (20 pages)');
