const fs = require('fs');
const path = require('path');

// AdSense info from transcripts
const AD_PUBLISHER = 'ca-pub-8934829211507329';
const AD_SLOT = '3248634657';

const professions = [
  {
    slug: 'student',
    label: 'Students',
    title: 'Word Counter for Students',
    description: 'Free word counter for students. Check essay, assignment and thesis word counts instantly. See reading time, character count and sentence count.',
    h1: 'Word Counter for Students',
    intro: 'Struggling to hit your essay word count or stay within a limit? This free word counter is built for students writing essays, assignments, dissertations and exam answers.',
    quickAnswer: 'Most student essays are <strong>500 to 2,000 words</strong>. A standard university essay is 1,500 words. A dissertation is 10,000 to 15,000 words. Use the word counter above to track your progress instantly.',
    wordCountTable: [
      ['Assignment Type', 'Typical Word Count'],
      ['Short essay', '500 words'],
      ['Standard essay', '1,000-1,500 words'],
      ['Extended essay', '2,000-3,000 words'],
      ['Dissertation', '10,000-15,000 words'],
      ['Thesis', '20,000-80,000 words'],
      ['Exam answer (short)', '150-300 words'],
      ['Exam answer (extended)', '500-800 words'],
    ],
    tips: [
      'Paste your essay in the counter above to see your exact word count in real time',
      'Turn off spell check in Word before pasting to get a clean count without autocorrect changes',
      'Check the character count too as some platforms like university portals have character not word limits',
      'Use the reading time estimate to check if your essay reads at the right pace before submitting',
      'If you are over the word limit focus on cutting adverbs and redundant phrases first',
    ],
    faqs: [
      { q: 'Do citations count in word count for essays?', a: 'It depends on your institution. Most universities do not count in-text citations or reference lists in the word count. Always check your specific assignment guidelines.' },
      { q: 'Do footnotes count in essay word count?', a: 'Usually no. Footnotes and endnotes are typically excluded from word counts in academic writing. However some lecturers do count them so check your guidelines.' },
      { q: 'What happens if my essay is 10% over the word limit?', a: 'Most universities have a 10% tolerance above and below the word limit. Going over by more than 10% can result in mark deductions. Always stay within the stated range.' },
      { q: 'How do I count words in Google Docs?', a: 'In Google Docs go to Tools then Word Count or press Ctrl+Shift+C on Windows or Cmd+Shift+C on Mac. It shows word count, character count, and page count.' },
      { q: 'Does the title count in essay word count?', a: 'Usually no. Titles, subtitles and headers are typically excluded from academic word counts. Again your specific guidelines should confirm this.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page' },
    ],
  },
  {
    slug: 'blogger',
    label: 'Bloggers',
    title: 'Word Counter for Bloggers',
    description: 'Free word counter for bloggers. Check blog post length, reading time and SEO word count targets. Find the perfect blog post length for Google rankings.',
    h1: 'Word Counter for Bloggers',
    intro: 'Every blogger knows the word count dilemma. Too short and you won\'t rank. Too long and readers bounce. This free word counter helps you hit the SEO sweet spot every time.',
    quickAnswer: 'The ideal blog post length for SEO is <strong>1,500 to 2,500 words</strong>. Competitive topics need 2,000 to 3,500 words. Short how-to posts can rank at 800 to 1,200 words. Use the counter above to track your draft in real time.',
    wordCountTable: [
      ['Blog Post Type', 'Ideal Word Count'],
      ['Quick tip or listicle', '800-1,200 words'],
      ['Standard blog post', '1,500-2,000 words'],
      ['In-depth guide', '2,000-3,500 words'],
      ['Pillar content', '3,500-7,000 words'],
      ['Ultimate guide', '5,000-10,000 words'],
    ],
    tips: [
      'Paste your draft in the counter above and check reading time as well as word count',
      'Aim for 1,500+ words on any post you want to rank on Google page 1',
      'Check the top 3 Google results for your keyword and match or beat their word count',
      'Short introductions under 150 words reduce bounce rate so keep intros tight',
      'Use the character counter to check your headline and meta description lengths before publishing',
    ],
    faqs: [
      { q: 'What is the ideal word count for a blog post for SEO?', a: 'Studies consistently show 1,500 to 2,500 words performs best for most topics. Competitive or broad topics benefit from 3,000 or more words. The key is covering the topic comprehensively not hitting an arbitrary number.' },
      { q: 'Does word count affect Google ranking?', a: 'Not directly but longer content tends to be more comprehensive which earns more backlinks and dwell time. These signals indirectly improve rankings. Quality always beats quantity.' },
      { q: 'What is the minimum word count for a blog post to rank?', a: 'Google can rank any length content if it answers the query well. However under 300 words rarely ranks for competitive topics. Aim for at least 800 words for any post you want search traffic from.' },
      { q: 'How long should a blog post introduction be?', a: 'A blog introduction should be 75 to 150 words. Get to the point fast. Readers decide in the first few seconds whether to continue.' },
      { q: 'How do I know if my blog post is long enough?', a: 'Search your target keyword on Google. Look at the top 3 results and estimate their word count using our tool. Your post should be equally comprehensive or more so.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/keyword-density', text: 'Keyword Density Checker' },
      { href: '/blog/ideal-blog-post-length-for-seo', text: 'Ideal Blog Post Length for SEO' },
    ],
  },
  {
    slug: 'writer',
    label: 'Writers',
    title: 'Word Counter for Writers',
    description: 'Free word counter for writers. Track daily word counts, manuscript length, chapter word counts and submission requirements for publishers and literary magazines.',
    h1: 'Word Counter for Writers',
    intro: 'Whether you\'re writing a novel, short story or submitting to literary magazines, word count is everything. Track your manuscript progress with this free word counter built for serious writers.',
    quickAnswer: 'A novel is typically <strong>70,000 to 100,000 words</strong>. A short story is 1,000 to 10,000 words. Flash fiction is under 1,000 words. Most debut authors should target 80,000 to 90,000 words for their first novel.',
    wordCountTable: [
      ['Format', 'Word Count Range'],
      ['Flash fiction', '100-1,000 words'],
      ['Short story', '1,000-10,000 words'],
      ['Novelette', '10,000-20,000 words'],
      ['Novella', '20,000-50,000 words'],
      ['Novel (debut)', '70,000-100,000 words'],
      ['Epic fantasy / sci-fi', '100,000-150,000 words'],
      ['Children\'s picture book', '500-1,000 words'],
      ['Middle grade novel', '20,000-50,000 words'],
      ['YA novel', '50,000-80,000 words'],
    ],
    tips: [
      'Set a daily word count target of 500 to 1,000 words and use the counter to track your daily output',
      'Track chapter lengths individually to maintain consistent pacing throughout your manuscript',
      'Check submission guidelines for literary magazines before submitting as word limits vary significantly',
      'Romance novels typically run 50,000 to 100,000 words while mystery novels average 70,000 to 90,000 words',
      'Use the reading time calculator to estimate how long your book will take to read',
    ],
    faqs: [
      { q: 'How many words per day should a writer write?', a: 'Stephen King recommends 2,000 words per day. Many professional writers aim for 1,000 to 1,500 words daily. For beginners 500 words per day is a sustainable starting goal.' },
      { q: 'How many words are in a chapter?', a: 'Most novel chapters are 2,000 to 5,000 words. Thrillers and YA novels tend toward shorter chapters of 1,500 to 3,000 words. Literary fiction chapters are often 4,000 to 8,000 words.' },
      { q: 'What word count do publishers want for a first novel?', a: 'Most traditional publishers want debut fiction at 80,000 to 100,000 words. Genre fiction varies: romance 50,000 to 100,000, thriller 70,000 to 90,000, fantasy 90,000 to 120,000.' },
      { q: 'Can a novel be too long?', a: 'Yes. Debut novels over 120,000 words are very difficult to sell to traditional publishers. Self-published authors have more flexibility but very long books can deter readers.' },
      { q: 'How do I track my word count across multiple writing sessions?', a: 'Use our word counter daily by pasting your new writing. Keep a simple spreadsheet with your daily word count and running total. Many writers also use tools like Scrivener for full manuscript tracking.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/blog/how-many-words-in-a-novel', text: 'How Many Words in a Novel' },
      { href: '/blog/how-many-words-in-a-short-story', text: 'How Many Words in a Short Story' },
    ],
  },
  {
    slug: 'journalist',
    label: 'Journalists',
    title: 'Word Counter for Journalists',
    description: 'Free word counter for journalists and reporters. Check article length against word limits for print, online and broadcast scripts.',
    h1: 'Word Counter for Journalists',
    intro: 'Journalism has strict word limits. Whether you\'re writing for print, digital or broadcast, hitting your exact word count is professional. Use this free tool to check your story length instantly.',
    quickAnswer: 'A standard news article is <strong>300 to 800 words</strong>. Feature articles run 800 to 2,000 words. Long-form investigative pieces are 2,000 to 10,000 words. Print newspapers average 600 to 750 words per column inch.',
    wordCountTable: [
      ['Journalism Format', 'Typical Word Count'],
      ['News brief', '100-200 words'],
      ['Standard news article', '300-600 words'],
      ['Feature article', '800-2,000 words'],
      ['Long-form feature', '2,000-5,000 words'],
      ['Investigative piece', '3,000-10,000 words'],
      ['Radio script (1 min)', '150-160 words'],
      ['TV broadcast (1 min)', '120-140 words'],
      ['Op-ed / column', '600-800 words'],
    ],
    tips: [
      'Paste your article in the counter and check against your editor\'s word limit before submitting',
      'Broadcast scripts use a different rule: 150 words per minute for radio, 130 words per minute for TV',
      'Online articles need a minimum of 300 words to be indexed properly by Google',
      'Inverted pyramid structure means your most important facts appear in the first 150 words',
      'Use the character counter to check headline lengths for SEO and print layout requirements',
    ],
    faqs: [
      { q: 'How long should a news article be?', a: 'A standard news article for online is 300 to 600 words. Print newspaper articles run 400 to 750 words. Digital-first publications often run 500 to 800 words to balance readability and SEO.' },
      { q: 'How many words per minute for a radio script?', a: 'The standard broadcast rate is 150 to 160 words per minute for radio. For a 60 second slot write 150 to 160 words. Television scripts run slightly slower at 120 to 140 words per minute.' },
      { q: 'What is the ideal length for an opinion piece?', a: 'Op-eds and opinion columns are typically 600 to 800 words for newspapers. Online opinion pieces can run up to 1,200 words. The New York Times accepts op-eds of 800 to 1,000 words.' },
      { q: 'How long should a magazine feature article be?', a: 'Consumer magazine features run 1,500 to 3,500 words. Trade publications often want 1,000 to 2,000 words. Long-form magazines like The Atlantic or New Yorker publish pieces of 5,000 to 20,000 words.' },
      { q: 'Do headers and captions count in a journalism word count?', a: 'It depends on the publication\'s style guide. Most count only body copy. Headlines, subheads, captions and pull quotes are usually excluded. Always confirm with your editor.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/blog/seo-content-length-guide', text: 'SEO Content Length Guide' },
    ],
  },
  {
    slug: 'lawyer',
    label: 'Lawyers',
    title: 'Word Counter for Lawyers',
    description: 'Free word counter for lawyers and legal professionals. Check briefs, contracts and legal documents against court word limits and page limits.',
    h1: 'Word Counter for Lawyers',
    intro: 'Court filings, briefs and legal documents have strict word and page limits. Exceeding them can result in rejection. This free word counter helps you stay within court rules and filing requirements.',
    quickAnswer: 'US Supreme Court briefs are limited to <strong>15,000 words</strong> for opening briefs and 9,000 words for reply briefs. Federal Court of Appeals briefs are limited to 13,000 words. Always check the specific court\'s local rules.',
    wordCountTable: [
      ['Legal Document', 'Typical Word Limit'],
      ['US Supreme Court opening brief', '15,000 words'],
      ['US Supreme Court reply brief', '9,000 words'],
      ['Federal Court of Appeals brief', '13,000 words'],
      ['Federal reply brief', '6,500 words'],
      ['Certiorari petition', '9,000 words'],
      ['Contract (simple)', '1,000-3,000 words'],
      ['Contract (commercial)', '5,000-20,000 words'],
    ],
    tips: [
      'Always verify the specific court\'s local rules as word limits vary by jurisdiction and court level',
      'Most court word counts exclude footnotes, certificates of compliance and table of contents',
      'Use the word counter to check your brief against limits before finalizing',
      'FRCP Rule 7 motions in federal district courts are typically limited to 10 pages or 3,500 words',
      'Track character counts as some jurisdictions use character limits not word limits for certain filings',
    ],
    faqs: [
      { q: 'Does the table of contents count in a legal brief word limit?', a: 'Under FRAP Rule 32, the table of contents, table of citations, disclosure statement, statement of the case, and certificates are excluded from word counts. Always check local rules.' },
      { q: 'How long should a legal contract be?', a: 'A simple services contract is 1,000 to 3,000 words. A commercial lease is 5,000 to 15,000 words. An employment agreement is 3,000 to 8,000 words. Length should match complexity of the transaction.' },
      { q: 'Are footnotes counted in legal brief word limits?', a: 'Under federal rules, footnotes count toward the word limit. Some local rules exclude footnotes. Check the specific court\'s local rules as they vary significantly.' },
      { q: 'What is the word limit for a motion to dismiss?', a: 'In federal district courts, most motions are limited to 25 pages or approximately 7,000 words under local rules. Some courts limit supporting briefs to 10 pages or 3,500 words. Check local rules for your district.' },
      { q: 'How do I count words in a PDF legal document?', a: 'Open the PDF in Adobe Acrobat, go to File then Properties then Description to see word count. Alternatively copy the text and paste into our free word counter for an instant count.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
    ],
  },
  {
    slug: 'copywriter',
    label: 'Copywriters',
    title: 'Word Counter for Copywriters',
    description: 'Free word counter for copywriters. Check ad copy, landing page, email and social media copy against platform limits and client briefs.',
    h1: 'Word Counter for Copywriters',
    intro: 'Every character counts in copywriting. From Google Ads headlines to landing page body copy, staying within limits is non-negotiable. This free tool keeps your copy tight and on spec.',
    quickAnswer: 'Google Ads headlines are limited to <strong>30 characters</strong>. Facebook ad primary text is 125 characters (before truncation). Email subject lines should be under 50 characters. Landing page headlines are ideally 8 to 12 words.',
    wordCountTable: [
      ['Copy Format', 'Character or Word Limit'],
      ['Google Ads headline', '30 characters'],
      ['Google Ads description', '90 characters'],
      ['Facebook ad primary text', '125 chars (before cutoff)'],
      ['Facebook ad headline', '27 characters'],
      ['Email subject line', '50 characters (safe zone)'],
      ['Meta title tag', '55-60 characters'],
      ['Meta description', '155-160 characters'],
      ['Twitter post', '280 characters'],
    ],
    tips: [
      'Always check character counts not just word counts for ad copy as platforms use character limits',
      'Google Ads truncates headlines on mobile at around 25 characters so front-load your key message',
      'Email subject lines over 60 characters are cut off on most mobile email clients',
      'Landing page above-the-fold copy should be under 50 words to avoid overwhelming visitors',
      'Use the meta tag generator on this site to preview how your ad copy appears in Google search results',
    ],
    faqs: [
      { q: 'How long should a landing page be?', a: 'A landing page should be as long as it needs to be to convert. Short landing pages of 300 to 500 words work for simple offers. Complex or high-price offers benefit from long-form pages of 1,000 to 3,000 words.' },
      { q: 'What is the ideal length for an email newsletter?', a: 'The ideal email newsletter is 200 to 500 words. Highly engaged audiences can handle 800 to 1,200 words. Transactional emails should be under 200 words. Always have one clear call to action.' },
      { q: 'How many words should a product description be?', a: 'Most product descriptions should be 150 to 300 words. Complex or premium products benefit from 300 to 600 words. Always write benefits not just features and include a clear call to action.' },
      { q: 'How long should a Google Ads description be?', a: 'Google Ads descriptions have a 90 character limit. Always use the full 90 characters. Include your primary keyword and at least one specific benefit or call to action.' },
      { q: 'What is the ideal length for a Facebook ad?', a: 'Facebook primary text should be 125 characters or less before the See More truncation. The headline should be 5 to 10 words or under 27 characters. Keep the description under 30 characters.' },
    ],
    internalLinks: [
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/meta-tag-generator', text: 'Meta Tag Generator' },
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/blog/how-to-write-seo-title-tags', text: 'How to Write SEO Title Tags' },
    ],
  },
  {
    slug: 'teacher',
    label: 'Teachers',
    title: 'Word Counter for Teachers',
    description: 'Free word counter for teachers and educators. Check student assignment lengths, lesson plan word counts and educational content readability.',
    h1: 'Word Counter for Teachers',
    intro: 'Teachers set word limits for a reason. Whether you\'re checking student submissions, writing lesson plans or creating educational content, this free word counter saves you time.',
    quickAnswer: 'Elementary school writing assignments are typically <strong>100 to 500 words</strong>. Middle school essays are 500 to 1,000 words. High school essays are 1,000 to 2,500 words. College-level essays are 1,500 to 5,000 words.',
    wordCountTable: [
      ['Grade Level', 'Typical Assignment Length'],
      ['Elementary (K-5)', '100-400 words'],
      ['Middle School (6-8)', '400-800 words'],
      ['High School (9-12)', '800-2,000 words'],
      ['College freshman', '1,000-2,500 words'],
      ['Upper college', '2,000-5,000 words'],
      ['Graduate level', '5,000-15,000 words'],
      ['Lesson plan', '500-1,500 words'],
    ],
    tips: [
      'Paste student submissions into the counter to verify word counts quickly without relying on student-reported numbers',
      'Use the readability checker to verify that classroom materials are appropriate for your students\' reading level',
      'The Flesch-Kincaid grade level score helps you verify reading level of texts you assign',
      'For rubric purposes define whether headers, titles and citations count toward the word limit',
      'Check your own lesson plans and worksheets for consistent length and reading level',
    ],
    faqs: [
      { q: 'How do I verify a student\'s word count?', a: 'Paste the student\'s submitted text into our free word counter for an instant independent count. This is more reliable than accepting the student\'s own reported count.' },
      { q: 'What reading level is appropriate for different grades?', a: 'Flesch-Kincaid grade level scores correspond to US school grades. A score of 5 means 5th grade reading level. Most middle school texts aim for grade 6-8. High school texts grade 9-12.' },
      { q: 'How long should a lesson plan be?', a: 'A single lesson plan is typically 500 to 1,000 words including objectives, materials, procedure and assessment. Unit plans covering multiple lessons run 2,000 to 5,000 words.' },
      { q: 'How many words per page for student essays?', a: 'A standard double-spaced page in Times New Roman 12pt is approximately 275 words. Single-spaced is about 550 words per page. So a 5 page double-spaced essay is roughly 1,375 words.' },
      { q: 'Should teachers count headers and titles in word limits?', a: 'Best practice is to exclude titles, headers and bibliography from word limits and state this clearly in assignment guidelines. This avoids disputes and helps students focus on substantive writing.' },
    ],
    internalLinks: [
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page' },
      { href: '/blog/what-is-flesch-kincaid-score', text: 'Flesch-Kincaid Reading Score' },
    ],
  },
  {
    slug: 'seo-specialist',
    label: 'SEO Specialists',
    title: 'Word Counter for SEO Specialists',
    description: 'Free word counter for SEO specialists. Check content length, keyword density and readability scores for pages you\'re optimizing for Google.',
    h1: 'Word Counter for SEO Specialists',
    intro: 'SEO content requires precise word counts. Whether you\'re auditing thin content or writing new pages to outrank competitors, this tool gives you the word count data you need fast.',
    quickAnswer: 'Blog posts ranking on Google page 1 average <strong>1,447 words</strong> (HubSpot data). Pillar pages and topic clusters perform best at 3,000 to 10,000 words. Meta titles should be 50 to 60 characters. Meta descriptions 155 to 160 characters.',
    wordCountTable: [
      ['SEO Content Type', 'Recommended Length'],
      ['Blog post (informational)', '1,500-2,500 words'],
      ['Blog post (how-to)', '2,000-3,500 words'],
      ['Pillar page', '3,000-8,000 words'],
      ['Product page', '300-500 words'],
      ['Category page', '200-400 words'],
      ['FAQ page', '1,000-3,000 words'],
      ['Meta title', '50-60 characters'],
      ['Meta description', '150-160 characters'],
    ],
    tips: [
      'Run competitor content through the word counter to benchmark length before writing new pages',
      'Pages with under 300 words are considered thin content and may be penalized by Google',
      'Use the keyword density checker to ensure primary keywords appear at 1-2% density',
      'Check readability scores with the readability checker as Google uses engagement metrics that correlate with readability',
      'Count words on your highest-traffic pages and compare to competitors\' equivalent pages to find gaps',
    ],
    faqs: [
      { q: 'What word count should I target for a blog post to rank on Google?', a: '1,500 to 2,500 words is the sweet spot for most blog posts. For highly competitive keywords target 2,500 to 4,000 words. Always match or exceed the length of the current top-ranking pages.' },
      { q: 'Does word count directly affect Google rankings?', a: 'Not directly. Google has confirmed word count alone is not a ranking factor. However comprehensive content that earns backlinks and keeps readers engaged performs better in rankings as a result of those signals.' },
      { q: 'What is thin content and how do I fix it?', a: 'Thin content is typically under 300 words and does not fully answer the user\'s query. Fix it by expanding with relevant sections, FAQs, data tables and internal links. Target at least 500 to 800 words minimum.' },
      { q: 'How do I find the word count of a competitor\'s page?', a: 'Open the page, select all text (Ctrl+A), copy it, then paste into our free word counter. This gives you an accurate count of the body content. Alternatively use browser extensions like Word Count Plus.' },
      { q: 'How long should a meta description be for SEO?', a: 'Google displays meta descriptions up to about 155 to 160 characters on desktop (920 pixels). On mobile it is slightly more. The safe range is 150 to 160 characters. Always include your primary keyword.' },
    ],
    internalLinks: [
      { href: '/keyword-density', text: 'Keyword Density Checker' },
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/meta-tag-generator', text: 'Meta Tag Generator' },
      { href: '/blog/seo-content-length-guide', text: 'SEO Content Length Guide' },
    ],
  },
  {
    slug: 'social-media-manager',
    label: 'Social Media Managers',
    title: 'Word Counter for Social Media Managers',
    description: 'Free character and word counter for social media managers. Check post lengths for Twitter X, Instagram, Facebook, LinkedIn and TikTok.',
    h1: 'Word Counter for Social Media Managers',
    intro: 'Every social media platform has different character limits. Get it wrong and your copy gets cut off mid-sentence. This free counter helps social media managers check all platforms instantly.',
    quickAnswer: 'Twitter/X posts are limited to <strong>280 characters</strong>. Instagram captions are 2,200 characters. LinkedIn posts are 3,000 characters. Facebook posts are 63,206 characters. TikTok captions are 2,200 characters.',
    wordCountTable: [
      ['Platform', 'Character Limit'],
      ['Twitter/X (standard)', '280 characters'],
      ['Twitter/X Premium', '25,000 characters'],
      ['Instagram caption', '2,200 characters'],
      ['Instagram bio', '150 characters'],
      ['LinkedIn post', '3,000 characters'],
      ['LinkedIn article', '125,000 characters'],
      ['Facebook post', '63,206 characters'],
      ['TikTok caption', '2,200 characters'],
      ['Pinterest description', '500 characters'],
      ['YouTube description', '5,000 characters'],
    ],
    tips: [
      'Use the character counter above to check your copy against any platform limit before scheduling',
      'Instagram shows only the first 125 characters before the See More button so front-load your key message',
      'LinkedIn posts with 1,300 to 2,000 characters get the most engagement according to platform data',
      'Twitter/X posts at 71 to 100 characters get the highest retweet rates',
      'Always check YouTube video descriptions as they truncate after 200 characters in search results',
    ],
    faqs: [
      { q: 'How many characters does Instagram show before the See More button?', a: 'Instagram shows approximately 125 characters of your caption before adding the See More button on mobile. On desktop it is slightly more at around 180 characters. Your most important message must be in the first 125 characters.' },
      { q: 'How long should a LinkedIn post be?', a: 'LinkedIn posts of 1,000 to 1,300 characters get strong engagement. Posts that use the See More feature at 215 characters and run to 1,300 to 3,000 characters often perform best for reach.' },
      { q: 'What is the character limit for a Pinterest pin description?', a: 'Pinterest pin descriptions can be up to 500 characters. However only the first 50 to 60 characters show in the feed. The full description is visible when users click through to the pin.' },
      { q: 'How long should a YouTube description be for SEO?', a: 'YouTube descriptions can be up to 5,000 characters. For SEO include your primary keyword in the first 150 characters as that is what shows in search results. Aim for 300 to 500 words total for the best ranking results.' },
      { q: 'Do hashtags count in Instagram\'s character limit?', a: 'Yes. Hashtags count toward Instagram\'s 2,200 character limit. However most creators put hashtags at the end after the main caption or in the first comment to keep the caption clean.' },
    ],
    internalLinks: [
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/blog/how-many-characters-in-a-tweet', text: 'Twitter Character Limits' },
      { href: '/blog/instagram-caption-length', text: 'Instagram Caption Length Guide' },
    ],
  },
  {
    slug: 'content-marketer',
    label: 'Content Marketers',
    title: 'Word Counter for Content Marketers',
    description: 'Free word counter for content marketers. Track content length for blog posts, whitepapers, case studies, email campaigns and social copy.',
    h1: 'Word Counter for Content Marketers',
    intro: 'Content marketing success requires the right length for every format. This free word counter helps content marketers check blog posts, whitepapers and email copy against industry benchmarks.',
    quickAnswer: 'Blog posts should be <strong>1,500 to 2,500 words</strong> for SEO. Whitepapers are 2,000 to 10,000 words. Case studies are 500 to 1,500 words. Email newsletters are 200 to 500 words for best click-through rates.',
    wordCountTable: [
      ['Content Format', 'Recommended Length'],
      ['Blog post', '1,500-2,500 words'],
      ['Long-form guide', '3,000-8,000 words'],
      ['Whitepaper', '2,000-10,000 words'],
      ['Case study', '500-1,500 words'],
      ['Email newsletter', '200-500 words'],
      ['Press release', '400-600 words'],
      ['LinkedIn article', '1,500-2,000 words'],
      ['Infographic copy', '200-400 words'],
    ],
    tips: [
      'Check the reading time of long-form content as conversion rates drop when reading time exceeds 10 minutes',
      'Case studies perform best at 800 to 1,200 words with a clear problem-solution-result structure',
      'Email newsletters over 600 words see significant drop-off in click-through rates',
      'Whitepapers for B2B audiences can be 5,000 to 10,000 words as readers are highly motivated',
      'Use the keyword density checker to ensure your primary topic keyword appears at 1-2% in blog posts',
    ],
    faqs: [
      { q: 'How long should a whitepaper be?', a: 'A typical B2B whitepaper is 2,000 to 6,000 words or 6 to 20 pages. Technical whitepapers can run longer at 8,000 to 10,000 words. They should be comprehensive enough to justify a gated download.' },
      { q: 'What is the ideal length for a case study?', a: 'Most effective case studies are 500 to 1,500 words. They follow a problem, solution, result structure. Include specific metrics and quotes from the customer. Longer case studies work for complex enterprise sales.' },
      { q: 'How long should a press release be?', a: 'A press release should be 400 to 600 words and fit on a single page. Journalists receive hundreds of press releases. Concise well-structured releases get more coverage than long ones.' },
      { q: 'What email newsletter length gets the best click-through rate?', a: 'Research from Constant Contact and Mailchimp shows emails of 200 to 500 words get the highest click-through rates. Longer newsletters can work for highly engaged subscriber lists that expect detailed content.' },
      { q: 'How long should a LinkedIn article be?', a: 'LinkedIn articles that perform best are 1,500 to 2,000 words according to LinkedIn\'s own data. They should have a strong hook in the first 150 characters which shows before the See More cutoff.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/keyword-density', text: 'Keyword Density Checker' },
      { href: '/blog/ideal-blog-post-length-for-seo', text: 'Ideal Blog Post Length for SEO' },
    ],
  },
  {
    slug: 'academic',
    label: 'Academic Researchers',
    title: 'Word Counter for Academic Researchers',
    description: 'Free word counter for academic researchers. Check journal article, abstract, literature review and thesis word counts against publication requirements.',
    h1: 'Word Counter for Academic Researchers',
    intro: 'Academic publishing has strict word limits that vary by journal, conference and institution. This free tool helps researchers check their manuscripts against submission requirements instantly.',
    quickAnswer: 'Academic journal articles are typically <strong>5,000 to 8,000 words</strong>. Conference papers are 3,000 to 6,000 words. Abstracts are 150 to 300 words. A PhD thesis is typically 70,000 to 100,000 words.',
    wordCountTable: [
      ['Academic Format', 'Typical Word Count'],
      ['Abstract', '150-300 words'],
      ['Conference paper', '3,000-6,000 words'],
      ['Journal article', '5,000-8,000 words'],
      ['Literature review', '3,000-12,000 words'],
      ['Master\'s thesis', '15,000-50,000 words'],
      ['PhD thesis', '70,000-100,000 words'],
      ['Research proposal', '1,500-3,000 words'],
      ['Grant application', '2,000-5,000 words'],
    ],
    tips: [
      'Always check the target journal\'s author guidelines as word limits vary significantly between publications',
      'Most journal word counts exclude references, tables, figure captions and supplementary materials',
      'Abstract word limits are strictly enforced by submission systems so check yours carefully',
      'Use the readability checker to ensure your writing scores above 30 on the Flesch scale which is standard for academic writing',
      'Grant applications often have very strict word limits per section so check each section individually',
    ],
    faqs: [
      { q: 'Do references count in academic word limits?', a: 'Usually no. Most journals and universities exclude the reference list, bibliography, tables, figures and their captions from word counts. Check each publication\'s specific guidelines as policies vary.' },
      { q: 'How long should a research paper abstract be?', a: 'Most journal abstracts are 150 to 300 words. Structured abstracts with mandatory sections like background, methods, results and conclusions run 250 to 350 words. Conference abstracts are often 250 to 500 words.' },
      { q: 'What is the ideal length for a PhD thesis?', a: 'PhD thesis length varies by discipline and institution. Humanities theses are typically 80,000 to 100,000 words. Science and engineering theses run 50,000 to 80,000 words. Always check your institution\'s regulations.' },
      { q: 'How long should a literature review be?', a: 'A standalone literature review article is typically 8,000 to 12,000 words. A literature review chapter in a thesis is 3,000 to 8,000 words. A literature review for a journal article is usually 500 to 2,000 words within the manuscript.' },
      { q: 'How do I count words in a LaTeX document?', a: 'Use the texcount command line tool for accurate word counts in LaTeX. Alternatively compile to PDF and paste the text into our free word counter. For rough counts you can also use the detex command to strip formatting before counting.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/blog/what-is-flesch-kincaid-score', text: 'Flesch-Kincaid Score Guide' },
    ],
  },
  {
    slug: 'novelist',
    label: 'Novelists',
    title: 'Word Counter for Novelists',
    description: 'Free word counter for novelists. Track manuscript progress, chapter lengths and daily word count goals. See word count benchmarks for every novel genre.',
    h1: 'Word Counter for Novelists',
    intro: 'Writing a novel is a marathon. Track every word. This free word counter helps novelists monitor daily output, chapter lengths and overall manuscript progress toward their target word count.',
    quickAnswer: 'A commercially publishable novel is <strong>70,000 to 100,000 words</strong>. Romance novels can be 50,000 words. Fantasy and sci-fi often run 100,000 to 150,000 words. Debut authors should target 80,000 to 90,000 words.',
    wordCountTable: [
      ['Novel Genre', 'Target Word Count'],
      ['Literary fiction', '70,000-100,000 words'],
      ['Mystery / thriller', '70,000-90,000 words'],
      ['Romance (category)', '50,000-60,000 words'],
      ['Romance (single title)', '80,000-100,000 words'],
      ['Fantasy', '90,000-120,000 words'],
      ['Epic fantasy', '100,000-180,000 words'],
      ['Science fiction', '80,000-120,000 words'],
      ['Horror', '70,000-90,000 words'],
      ['Historical fiction', '80,000-120,000 words'],
      ['YA fiction', '50,000-80,000 words'],
    ],
    tips: [
      'Track daily word counts by pasting your new writing into the counter and recording your progress in a spreadsheet',
      'Aim for chapters of 2,000 to 5,000 words for optimal pacing in commercial fiction',
      'Use the reading time calculator to estimate how long your completed manuscript will take to read',
      'First drafts are always longer than final drafts so do not worry about being over your target during drafting',
      'NaNoWriMo requires 50,000 words in November which is about 1,667 words per day',
    ],
    faqs: [
      { q: 'How many words per day should a novelist write?', a: 'Stephen King writes 2,000 words every day. Many published novelists aim for 1,000 to 1,500 words per day. Writing 500 words daily will produce a first draft novel in 6 months. Consistency beats volume.' },
      { q: 'Can a first novel be too long?', a: 'Yes. Most literary agents and publishers are reluctant to acquire debut novels over 120,000 words as production costs are higher. Exceptions exist in epic fantasy. Aim for 80,000 to 100,000 words for your debut.' },
      { q: 'How long does it take to read a 90,000 word novel?', a: 'At the average reading speed of 250 words per minute a 90,000 word novel takes approximately 6 hours to read. Most paperback novels are read over 3 to 7 reading sessions.' },
      { q: 'How many pages is 80,000 words?', a: 'An 80,000 word manuscript in standard format (Times New Roman 12pt double spaced with 1 inch margins) is approximately 320 pages. Published paperbacks average 250 to 300 words per page so a 80,000 word novel is typically 266 to 320 printed pages.' },
      { q: 'What is a good daily word count for writing a novel?', a: 'Writing 500 words per day produces a first draft in roughly 6 months. At 1,000 words per day you finish a first draft in 3 months. At 2,000 words per day it takes 6 weeks. Set a target that fits your schedule and stick to it every day.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/blog/how-many-words-in-a-novel', text: 'How Many Words in a Novel' },
      { href: '/blog/how-many-words-in-a-short-story', text: 'How Many Words in a Short Story' },
    ],
  },
  {
    slug: 'email-marketer',
    label: 'Email Marketers',
    title: 'Word Counter for Email Marketers',
    description: 'Free word counter for email marketers. Check subject line length, email body word count and preview text against best practices for open rates and clicks.',
    h1: 'Word Counter for Email Marketers',
    intro: 'Email length directly impacts open rates, click-through rates and unsubscribes. This free tool helps email marketers hit the optimal word count for every campaign type.',
    quickAnswer: 'The ideal email length is <strong>50 to 125 words</strong> for transactional emails and <strong>200 to 500 words</strong> for newsletters. Subject lines should be 30 to 50 characters. Preview text should be 40 to 90 characters.',
    wordCountTable: [
      ['Email Type', 'Ideal Length'],
      ['Cold outreach email', '50-125 words'],
      ['Transactional email', '50-150 words'],
      ['Newsletter', '200-500 words'],
      ['Promotional email', '100-200 words'],
      ['Welcome email', '200-350 words'],
      ['Subject line (safe zone)', '30-50 characters'],
      ['Preview text', '40-90 characters'],
    ],
    tips: [
      'Subject lines under 50 characters are fully visible on all mobile email clients',
      'Preview text is the second line readers see in their inbox so make it complement the subject line',
      'Emails over 600 words see significant drop in click-through rates according to Mailchimp data',
      'Cold outreach emails perform best at 50 to 100 words as brevity signals respect for the recipient\'s time',
      'Always check your unsubscribe link and legal footer do not bloat your word count significantly',
    ],
    faqs: [
      { q: 'What is the ideal email subject line length?', a: 'The ideal subject line is 30 to 50 characters. Longer subject lines get cut off on mobile which accounts for over 50% of email opens. The most important words should appear in the first 30 characters.' },
      { q: 'How long should an email newsletter be?', a: 'Marketing emails of 200 to 500 words get the best click-through rates according to multiple email platform studies. For highly engaged subscribers 500 to 1,000 words can work well. Always have one clear call to action.' },
      { q: 'Does email length affect spam filters?', a: 'Yes. Very short emails under 20 words can trigger spam filters as they resemble phishing attempts. Very long emails with many links can also trigger filters. Keep promotional emails between 100 and 500 words for best deliverability.' },
      { q: 'How long should a cold email be?', a: 'Cold sales emails perform best at 50 to 125 words. Research from Boomerang found that emails of 50 to 125 words receive the highest response rates at 50%. Longer cold emails see significantly lower response rates.' },
      { q: 'What is email preview text and how long should it be?', a: 'Preview text is the snippet of text shown after the subject line in the inbox. It should be 40 to 90 characters. On iPhone it shows up to 90 characters. Gmail shows up to 110 characters. Always write it intentionally.' },
    ],
    internalLinks: [
      { href: '/character-counter', text: 'Character Counter' },
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/blog/how-to-write-email-subject-lines', text: 'Email Subject Line Guide' },
      { href: '/blog/how-to-write-headline-formulas', text: 'Headline Formulas That Get Clicks' },
    ],
  },
  {
    slug: 'screenwriter',
    label: 'Screenwriters',
    title: 'Word Counter for Screenwriters',
    description: 'Free word counter for screenwriters. Check script page count, word count and scene length for feature films, TV pilots and short films.',
    h1: 'Word Counter for Screenwriters',
    intro: 'In screenwriting, one page equals one minute of screen time. Hitting the right page count is essential for professional script submissions. This free word counter helps you track your screenplay length.',
    quickAnswer: 'A feature film screenplay is <strong>95 to 115 pages</strong> which equals roughly 15,000 to 20,000 words. A 30-minute TV episode is 25 to 35 pages. A 60-minute TV episode is 45 to 60 pages. One screenplay page averages 150 to 200 words.',
    wordCountTable: [
      ['Script Format', 'Page Count', 'Word Count Approx'],
      ['Short film (under 10 min)', '5-10 pages', '750-1,500 words'],
      ['Short film (10-20 min)', '10-20 pages', '1,500-3,000 words'],
      ['TV sitcom (30 min)', '22-32 pages', '3,300-4,800 words'],
      ['TV drama (60 min)', '45-60 pages', '6,750-9,000 words'],
      ['Feature film (drama)', '90-110 pages', '13,500-16,500 words'],
      ['Feature film (action)', '100-120 pages', '15,000-18,000 words'],
      ['Feature film (comedy)', '88-102 pages', '13,200-15,300 words'],
    ],
    tips: [
      'One formatted screenplay page in Courier 12pt equals approximately one minute of screen time',
      'A standard screenplay has about 150 to 200 words per page due to white space from action lines and dialogue',
      'Feature film specs from major studios typically call for 90 to 110 pages',
      'TV pilot specs vary by network: broadcast dramas 45-55 pages, premium cable 55-65 pages',
      'Over-length scripts signal amateur work to agents and executives so hit your target range',
    ],
    faqs: [
      { q: 'How many words are in a feature film screenplay?', a: 'A feature film screenplay is typically 90 to 120 pages. At an average of 150 to 200 words per formatted page that equals 13,500 to 24,000 words. Most specs call for 95 to 110 pages.' },
      { q: 'How many words per page in a screenplay?', a: 'Standard screenplay format in Courier 12pt with standard margins averages 150 to 200 words per page. This is less than prose due to the white space created by dialogue, action lines and scene headings.' },
      { q: 'Does the one page equals one minute rule still apply?', a: 'Yes. The one page per minute rule is still the standard industry benchmark. It is an approximation: action-heavy scenes can run slower than a page per minute, dialogue-heavy scenes faster.' },
      { q: 'How long should a TV pilot script be?', a: 'A broadcast TV drama pilot is 45 to 55 pages. A premium cable or streaming pilot is 55 to 70 pages. A single-camera comedy pilot is 25 to 35 pages. A multi-camera sitcom pilot is 35 to 50 pages.' },
      { q: 'How long should a short film script be?', a: 'Film festival short films are typically 5 to 15 minutes which equals 5 to 15 pages. Shorts over 40 pages (40 minutes) are too long for most festival programs and are considered featurettes.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/reading-time', text: 'Reading Time Calculator' },
      { href: '/blog/how-many-words-in-a-paragraph', text: 'How Many Words in a Paragraph' },
      { href: '/blog/how-many-words-per-page', text: 'How Many Words Per Page' },
    ],
  },
  {
    slug: 'hr-professional',
    label: 'HR Professionals',
    title: 'Word Counter for HR Professionals',
    description: 'Free word counter for HR professionals. Check job descriptions, HR policies, performance reviews and employment contracts against best-practice word counts.',
    h1: 'Word Counter for HR Professionals',
    intro: 'From job descriptions to employee handbooks, HR professionals deal with documents that have to be precise. This free word counter helps you hit the right length every time.',
    quickAnswer: 'A job description should be <strong>400 to 800 words</strong>. A performance review is 300 to 600 words. An employee handbook is 10,000 to 30,000 words. An HR policy document is 500 to 2,000 words per policy.',
    wordCountTable: [
      ['HR Document', 'Recommended Length'],
      ['Job description', '400-800 words'],
      ['Interview question set', '500-1,000 words'],
      ['Performance review', '300-600 words'],
      ['HR policy', '500-2,000 words'],
      ['Employment contract', '2,000-8,000 words'],
      ['Employee handbook', '10,000-30,000 words'],
      ['Termination letter', '200-400 words'],
      ['Offer letter', '300-500 words'],
    ],
    tips: [
      'Job descriptions over 900 words see significantly lower application rates according to Indeed data',
      'Use the readability checker to ensure HR policies score at least 60 on Flesch Reading Ease',
      'Performance reviews of 300 to 500 words strike the right balance between thoroughness and respect for time',
      'Employment contracts should be reviewed by legal counsel regardless of length',
      'Use the word counter to ensure consistency in job description length across similar roles',
    ],
    faqs: [
      { q: 'How long should a job description be?', a: 'The ideal job description is 400 to 800 words. According to Indeed research jobs with descriptions of 700 to 2,000 characters (roughly 100 to 300 words of bullet points) receive the most applications. Descriptions over 2,000 words see sharply lower application rates.' },
      { q: 'How long should a performance review be?', a: 'A written performance review should be 300 to 600 words. Long enough to cover key achievements, development areas and goals but short enough that managers and employees will actually read it carefully.' },
      { q: 'How long is a typical employment contract?', a: 'A standard employment contract for a professional role is 2,000 to 5,000 words or 4 to 10 pages. Senior executive contracts can be 8,000 to 15,000 words. Simple part-time contracts can be as short as 1,000 to 2,000 words.' },
      { q: 'How long should an employee handbook be?', a: 'An employee handbook covering all legal requirements, company policies and procedures is typically 10,000 to 30,000 words or 40 to 100 pages. A small startup handbook might be 5,000 to 10,000 words. Larger companies with complex policies may need 50,000 words or more.' },
      { q: 'What is the ideal length for a cover letter?', a: 'A cover letter should be 250 to 400 words fitting on one page. Three to four short paragraphs. Hiring managers spend under 30 seconds on cover letters so brevity and impact matter more than comprehensiveness.' },
    ],
    internalLinks: [
      { href: '/word-counter', text: 'Word Counter' },
      { href: '/readability-checker', text: 'Readability Checker' },
      { href: '/blog/how-many-words-in-a-cover-letter', text: 'Cover Letter Word Count Guide' },
      { href: '/blog/how-many-words-in-a-resume', text: 'Resume Word Count Guide' },
    ],
  },
];

// ─── Generate page for each profession ───────────────────────────────────────
function buildTableJsx(tableData) {
  if (!tableData || !tableData.length) return '';
  const headers = tableData[0];
  const rows = tableData.slice(1);
  return `
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      ${headers.map(h => `<th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${h}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map(row => `<tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      ${row.map((cell, i) => `<td className="${i === 0 ? 'text-white font-medium' : 'text-slate-300'} py-3 pr-4">${cell}</td>`).join('')}
                    </tr>`).join('\n                    ')}
                  </tbody>
                </table>
              </div>`;
}

function generatePage(p) {
  const tableJsx = buildTableJsx(p.wordCountTable);
  const tipsJsx = p.tips.map(t => `<li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>${t}</span></li>`).join('\n              ');
  const faqsJsx = p.faqs.map((f, i) => `
            <div key={${i}} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">${f.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${f.a}</p>
            </div>`).join('');
  const linksJsx = p.internalLinks.map(l => `<a href="${l.href}" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">${l.text}</a>`).join('\n              ');

  return `import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: '${p.title} | WordCounterTool.net',
  description: '${p.description}',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/${p.slug}' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/word-counter" className="hover:text-emerald-400 transition-colors">Word Counter</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">For ${p.label}</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${p.h1}</h1>
            <p className="text-slate-400 text-lg leading-relaxed">${p.intro}</p>
          </div>

          {/* Embedded tool CTA */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Use the Free Word Counter Now</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text above on our main tool or click below to open it</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          {/* Quick Answer */}
          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: '${p.quickAnswer}'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for ${p.label}</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              ${tableJsx}
            </div>
          </section>

          <AdUnit slot="${AD_SLOT}" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for ${p.label}</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              ${tipsJsx}
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              ${faqsJsx}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              ${linksJsx}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

// ─── Write files ──────────────────────────────────────────────────────────────
let created = 0;
professions.forEach(p => {
  const dir = path.join('app', 'word-counter', 'for', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'page.js');
  if (fs.existsSync(filePath)) {
    console.log(`⏭  Already exists: ${p.slug}`);
    return;
  }
  fs.writeFileSync(filePath, generatePage(p), 'utf8');
  console.log(`✅ ${p.slug}`);
  created++;
});

// ─── Index page for /word-counter/for ────────────────────────────────────────
const indexContent = `import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Word Counter by Profession and Use Case | WordCounterTool.net',
  description: 'Free word counter guides for students, bloggers, lawyers, journalists, writers and more. Find word count benchmarks for every profession and document type.',
};

const professions = [
${professions.map(p => `  { slug: '${p.slug}', label: '${p.label}', description: '${p.description}' }`).join(',\n')}
];

export default function ForIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Word Counter by Profession</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Word count guides and benchmarks tailored to your profession and document type.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professions.map(p => (
              <a key={p.slug} href={'/word-counter/for/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{p.label}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;

const indexDir = path.join('app', 'word-counter', 'for');
fs.mkdirSync(indexDir, { recursive: true });
fs.writeFileSync(path.join(indexDir, 'page.js'), indexContent, 'utf8');
console.log('✅ /word-counter/for/page.js (index)');

console.log(`\n🎉 Done! ${created} profession pages created + 1 index page.`);
console.log('\nPages created:');
professions.forEach(p => console.log(`  https://www.wordcountertool.net/word-counter/for/${p.slug}`));
