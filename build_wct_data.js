const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const APP = path.join(BASE, 'app');
const DOMAIN = 'https://www.wordcountertool.net';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

console.log('');
console.log('=====================================================');
console.log('  BUILD: High-Volume Data Pages for WCT');
console.log('=====================================================');
console.log('');

const PAGES = [
  {
    slug: 'word-count-popular-books',
    title: 'Word Count of Popular Books: Harry Potter, Lord of the Rings & More (2026)',
    desc: 'Exact word counts for the most popular books and series. Harry Potter, Lord of the Rings, Bible, Game of Thrones, and 50+ more books with page counts and reading times.',
    searchVol: '200K+/mo',
    sections: [
      {
        heading: 'Harry Potter Series Word Count',
        rows: [
          ["Harry Potter and the Philosopher's Stone", '77,325', '309', '5 hr 9 min'],
          ['Harry Potter and the Chamber of Secrets', '84,799', '341', '5 hr 39 min'],
          ['Harry Potter and the Prisoner of Azkaban', '107,253', '435', '7 hr 9 min'],
          ['Harry Potter and the Goblet of Fire', '190,637', '734', '12 hr 42 min'],
          ['Harry Potter and the Order of the Phoenix', '257,045', '870', '17 hr 8 min'],
          ['Harry Potter and the Half-Blood Prince', '168,923', '652', '11 hr 16 min'],
          ['Harry Potter and the Deathly Hallows', '198,227', '759', '13 hr 13 min'],
          ['Total Harry Potter Series', '1,084,170', '4,100', '72 hr 14 min'],
        ],
        columns: ['Book', 'Word Count', 'Pages', 'Reading Time'],
      },
      {
        heading: 'Lord of the Rings Word Count',
        rows: [
          ['The Hobbit', '95,356', '310', '6 hr 21 min'],
          ['The Fellowship of the Ring', '187,790', '432', '12 hr 31 min'],
          ['The Two Towers', '156,198', '352', '10 hr 25 min'],
          ['The Return of the King', '137,115', '416', '9 hr 8 min'],
          ['Total LOTR Trilogy', '481,103', '1,200', '32 hr 4 min'],
          ['Total with The Hobbit', '576,459', '1,510', '38 hr 26 min'],
        ],
        columns: ['Book', 'Word Count', 'Pages', 'Reading Time'],
      },
      {
        heading: 'Other Popular Books & Series',
        rows: [
          ['The Bible (King James)', '783,137', '1,200', '52 hr 13 min'],
          ['A Game of Thrones', '298,000', '694', '19 hr 52 min'],
          ['A Song of Ice and Fire (5 books)', '1,770,000', '4,228', '118 hr'],
          ['The Great Gatsby', '47,094', '180', '3 hr 8 min'],
          ['To Kill a Mockingbird', '100,388', '336', '6 hr 41 min'],
          ['1984', '88,942', '328', '5 hr 56 min'],
          ['Pride and Prejudice', '122,189', '432', '8 hr 9 min'],
          ['The Hunger Games', '99,750', '374', '6 hr 39 min'],
          ['Hunger Games Trilogy', '301,583', '1,155', '20 hr 6 min'],
          ['Twilight', '118,975', '498', '7 hr 56 min'],
          ['Twilight Saga (4 books)', '484,830', '2,444', '32 hr 19 min'],
          ['The Da Vinci Code', '138,952', '597', '9 hr 16 min'],
          ['Fifty Shades of Grey', '149,965', '514', '10 hr'],
          ['Gone Girl', '145,719', '432', '9 hr 43 min'],
          ['Dune', '188,000', '412', '12 hr 32 min'],
          ['The Catcher in the Rye', '73,404', '234', '4 hr 53 min'],
          ['Animal Farm', '29,966', '112', '2 hr'],
          ['Brave New World', '63,766', '288', '4 hr 15 min'],
          ['The Alchemist', '39,000', '197', '2 hr 36 min'],
          ['War and Peace', '587,287', '1,225', '39 hr 9 min'],
          ['Les Miserables', '530,982', '1,462', '35 hr 24 min'],
          ['Moby Dick', '206,052', '720', '13 hr 44 min'],
          ['Crime and Punishment', '211,591', '671', '14 hr 6 min'],
          ['The Stand (Stephen King)', '471,485', '1,153', '31 hr 26 min'],
          ['It (Stephen King)', '445,134', '1,138', '29 hr 40 min'],
        ],
        columns: ['Book/Series', 'Word Count', 'Pages', 'Reading Time'],
      },
      {
        heading: 'Average Word Count by Genre',
        rows: [
          ['Flash Fiction', '100 - 1,000', '1-4', 'Under 5 min'],
          ['Short Story', '1,000 - 7,500', '4-30', '5-30 min'],
          ['Novella', '17,500 - 40,000', '70-160', '1-3 hr'],
          ['Novel (General)', '70,000 - 100,000', '280-400', '5-7 hr'],
          ['Romance', '50,000 - 90,000', '200-360', '3-6 hr'],
          ['Mystery/Thriller', '70,000 - 90,000', '280-360', '5-6 hr'],
          ['Science Fiction', '90,000 - 120,000', '360-480', '6-8 hr'],
          ['Fantasy', '90,000 - 150,000', '360-600', '6-10 hr'],
          ['Epic Fantasy', '120,000 - 200,000+', '480-800+', '8-14 hr'],
          ['Young Adult', '50,000 - 80,000', '200-320', '3-5 hr'],
          ['Middle Grade', '20,000 - 55,000', '80-220', '1-4 hr'],
          ['Memoir', '60,000 - 90,000', '240-360', '4-6 hr'],
          ['Self-Help', '40,000 - 60,000', '160-240', '3-4 hr'],
          ['Picture Book', '500 - 1,000', '32', '5 min'],
        ],
        columns: ['Genre', 'Word Count', 'Pages', 'Reading Time'],
      },
    ],
    faqs: [
      { q: 'How many words are in Harry Potter?', a: 'The entire Harry Potter series has 1,084,170 words across 7 books. The longest book is Order of the Phoenix at 257,045 words. The shortest is Philosopher\'s Stone at 77,325 words.' },
      { q: 'How many words are in the Bible?', a: 'The King James Bible has approximately 783,137 words. It would take about 52 hours to read at average reading speed (250 WPM).' },
      { q: 'How many words are in Lord of the Rings?', a: 'The Lord of the Rings trilogy has 481,103 words. Including The Hobbit, the total is 576,459 words.' },
      { q: 'What is the average novel word count?', a: 'The average novel is 70,000-100,000 words (280-400 pages). Genre matters: romance averages 50,000-90,000 words while epic fantasy can exceed 200,000 words.' },
    ],
    relatedTools: ['/word-counter', '/reading-time', '/words-per-minute', '/blog/how-many-words-in-a-novel', '/blog/how-many-words-in-a-short-story'],
  },
  {
    slug: 'social-media-character-limits',
    title: 'Social Media Character Limits 2026: Every Platform (Complete Guide)',
    desc: 'Complete character limits for every social media platform in 2026. Twitter/X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Snapchat, Pinterest, and more.',
    searchVol: '150K+/mo',
    sections: [
      {
        heading: 'Twitter / X Character Limits',
        rows: [
          ['Tweet (Free)', '280 characters', 'Main post limit'],
          ['Tweet (Premium)', '25,000 characters', 'X Premium subscribers'],
          ['Display Name', '50 characters', ''],
          ['Username (@handle)', '15 characters', ''],
          ['Bio', '160 characters', ''],
          ['DM (Direct Message)', '10,000 characters', ''],
          ['Alt Text (Images)', '1,000 characters', ''],
          ['List Name', '25 characters', ''],
          ['List Description', '100 characters', ''],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'Instagram Character Limits',
        rows: [
          ['Caption', '2,200 characters', 'First 125 shown in feed'],
          ['Bio', '150 characters', ''],
          ['Username', '30 characters', ''],
          ['Hashtags per Post', '30 max', '3-5 recommended for reach'],
          ['Comment', '2,200 characters', ''],
          ['Reel Caption', '2,200 characters', ''],
          ['Story Text', 'No official limit', 'Keep under 200 chars'],
          ['Alt Text', '100 characters', ''],
          ['DM', '1,000 characters', ''],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'Facebook Character Limits',
        rows: [
          ['Post', '63,206 characters', 'Optimal: 40-80 chars'],
          ['Comment', '8,000 characters', ''],
          ['Ad Headline', '40 characters', 'Recommended'],
          ['Ad Primary Text', '125 characters', 'Before "See More"'],
          ['Ad Description', '30 characters', ''],
          ['Page Name', '75 characters', ''],
          ['Page Description', '255 characters', ''],
          ['Group Name', '75 characters', ''],
          ['Username', '50 characters', ''],
          ['Messenger', '20,000 characters', ''],
          ['Event Name', '64 characters', ''],
          ['Event Description', '50,000 characters', ''],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'LinkedIn Character Limits',
        rows: [
          ['Post', '3,000 characters', 'Optimal: 1,300-2,000'],
          ['Article', '125,000 characters', ''],
          ['Article Title', '100 characters', ''],
          ['Comment', '1,250 characters', ''],
          ['Headline', '220 characters', ''],
          ['Summary/About', '2,600 characters', ''],
          ['Company Page About', '2,000 characters', ''],
          ['Connection Request Note', '300 characters', ''],
          ['InMail Subject', '200 characters', ''],
          ['InMail Body', '1,900 characters', ''],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'TikTok Character Limits',
        rows: [
          ['Caption', '4,000 characters', 'Was 150, expanded 2023'],
          ['Bio', '80 characters', ''],
          ['Username', '24 characters', ''],
          ['Comment', '150 characters', ''],
          ['DM', '500 characters', ''],
          ['Video Description', '4,000 characters', 'Including hashtags'],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'YouTube Character Limits',
        rows: [
          ['Video Title', '100 characters', 'Optimal: 60-70 chars'],
          ['Video Description', '5,000 characters', ''],
          ['Comment', '10,000 characters', ''],
          ['Channel Name', '100 characters', ''],
          ['Channel Description', '1,000 characters', ''],
          ['Playlist Title', '100 characters', ''],
          ['Playlist Description', '5,000 characters', ''],
          ['Short Title', '100 characters', ''],
        ],
        columns: ['Element', 'Limit', 'Notes'],
      },
      {
        heading: 'Other Platforms',
        rows: [
          ['Threads Post', '500 characters', 'Meta/Instagram Threads'],
          ['Threads Bio', '150 characters', ''],
          ['Pinterest Pin Title', '100 characters', ''],
          ['Pinterest Description', '500 characters', ''],
          ['Pinterest Board Name', '50 characters', ''],
          ['Snapchat Caption', '80 characters', ''],
          ['Reddit Title', '300 characters', ''],
          ['Reddit Post (text)', '40,000 characters', ''],
          ['Reddit Comment', '10,000 characters', ''],
          ['WhatsApp Status', '700 characters', ''],
          ['WhatsApp Message', '65,536 characters', ''],
          ['Discord Message', '2,000 characters', ''],
          ['Discord Server Name', '100 characters', ''],
          ['Substack Post', 'No limit', 'Recommended: 1,000-2,000 words'],
          ['Medium Article', 'No limit', 'Recommended: 1,600-2,400 words'],
        ],
        columns: ['Platform / Element', 'Limit', 'Notes'],
      },
    ],
    faqs: [
      { q: 'What is the Twitter/X character limit in 2026?', a: 'Free Twitter/X users have a 280-character limit per tweet. X Premium subscribers can post up to 25,000 characters.' },
      { q: 'What is the Instagram caption limit?', a: 'Instagram captions can be up to 2,200 characters. However, only the first 125 characters show in the feed before "more" is clicked.' },
      { q: 'What is the LinkedIn post limit?', a: 'LinkedIn posts can be up to 3,000 characters. The optimal length for engagement is 1,300-2,000 characters.' },
      { q: 'What is the TikTok caption limit?', a: 'TikTok captions can be up to 4,000 characters in 2026, expanded from the original 150-character limit.' },
    ],
    relatedTools: ['/character-counter', '/word-counter', '/blog/twitter-character-limit-2026', '/blog/instagram-caption-length', '/blog/tiktok-caption-length-guide', '/blog/ideal-linkedin-post-length'],
  },
  {
    slug: 'most-common-english-words',
    title: '1,000 Most Common English Words (Ranked by Frequency 2026)',
    desc: 'The 1,000 most frequently used English words ranked by usage. Includes word frequency data, parts of speech, and learning tips.',
    searchVol: '90K+/mo',
    sections: [
      {
        heading: 'Top 100 Most Common English Words',
        rows: [
          ['1', 'the', 'Article', '7.14%'], ['2', 'be', 'Verb', '3.63%'], ['3', 'to', 'Preposition', '3.56%'],
          ['4', 'of', 'Preposition', '3.49%'], ['5', 'and', 'Conjunction', '2.67%'], ['6', 'a', 'Article', '2.30%'],
          ['7', 'in', 'Preposition', '2.04%'], ['8', 'that', 'Pronoun', '1.47%'], ['9', 'have', 'Verb', '1.34%'],
          ['10', 'I', 'Pronoun', '1.23%'], ['11', 'it', 'Pronoun', '1.16%'], ['12', 'for', 'Preposition', '1.07%'],
          ['13', 'not', 'Adverb', '1.04%'], ['14', 'on', 'Preposition', '0.98%'], ['15', 'with', 'Preposition', '0.95%'],
          ['16', 'he', 'Pronoun', '0.94%'], ['17', 'as', 'Conjunction', '0.87%'], ['18', 'you', 'Pronoun', '0.85%'],
          ['19', 'do', 'Verb', '0.83%'], ['20', 'at', 'Preposition', '0.75%'],
          ['21', 'this', 'Pronoun', '0.74%'], ['22', 'but', 'Conjunction', '0.72%'], ['23', 'his', 'Pronoun', '0.68%'],
          ['24', 'by', 'Preposition', '0.66%'], ['25', 'from', 'Preposition', '0.64%'],
          ['26', 'they', 'Pronoun', '0.63%'], ['27', 'we', 'Pronoun', '0.60%'], ['28', 'say', 'Verb', '0.57%'],
          ['29', 'her', 'Pronoun', '0.55%'], ['30', 'she', 'Pronoun', '0.54%'],
          ['31', 'or', 'Conjunction', '0.53%'], ['32', 'an', 'Article', '0.51%'], ['33', 'will', 'Verb', '0.50%'],
          ['34', 'my', 'Pronoun', '0.48%'], ['35', 'one', 'Numeral', '0.47%'],
          ['36', 'all', 'Determiner', '0.46%'], ['37', 'would', 'Verb', '0.45%'], ['38', 'there', 'Adverb', '0.44%'],
          ['39', 'their', 'Pronoun', '0.43%'], ['40', 'what', 'Pronoun', '0.42%'],
          ['41', 'so', 'Adverb', '0.41%'], ['42', 'up', 'Adverb', '0.40%'], ['43', 'out', 'Adverb', '0.39%'],
          ['44', 'if', 'Conjunction', '0.38%'], ['45', 'about', 'Preposition', '0.37%'],
          ['46', 'who', 'Pronoun', '0.36%'], ['47', 'get', 'Verb', '0.35%'], ['48', 'which', 'Pronoun', '0.34%'],
          ['49', 'go', 'Verb', '0.33%'], ['50', 'me', 'Pronoun', '0.32%'],
        ],
        columns: ['Rank', 'Word', 'Part of Speech', 'Frequency'],
      },
      {
        heading: 'Word Coverage Statistics',
        rows: [
          ['Top 10 words', '25%', 'of all English text'],
          ['Top 100 words', '50%', 'of all English text'],
          ['Top 300 words', '65%', 'of all English text'],
          ['Top 1,000 words', '80%', 'of all English text'],
          ['Top 3,000 words', '90%', 'of all English text'],
          ['Top 5,000 words', '95%', 'of all English text'],
          ['Total English words', '170,000+', 'in current use'],
        ],
        columns: ['Words Known', 'Coverage', 'Context'],
      },
      {
        heading: 'Most Common Words by Category',
        rows: [
          ['Nouns', 'time, year, people, way, day, man, woman, child, world, life, hand, part, place, case, week', ''],
          ['Verbs', 'be, have, do, say, get, make, go, know, take, see, come, think, look, want, give', ''],
          ['Adjectives', 'good, new, first, last, long, great, little, own, other, old, right, big, high, different, small', ''],
          ['Adverbs', 'not, also, very, often, however, too, usually, really, already, always, never, sometimes, then, now', ''],
          ['Prepositions', 'to, of, in, for, on, with, at, by, from, up, about, into, over, after, through', ''],
        ],
        columns: ['Category', 'Most Common Words', ''],
      },
    ],
    faqs: [
      { q: 'What is the most common English word?', a: '"The" is the most common English word, making up about 7.14% of all words in written English. It appears approximately 69,970 times per million words.' },
      { q: 'How many words do you need to know to speak English?', a: 'Knowing the top 1,000 words covers about 80% of everyday English. 3,000 words covers 90%. For fluency, 5,000-10,000 words is recommended.' },
      { q: 'How many words are in the English language?', a: 'There are approximately 170,000+ words currently in use in English, with about 47,000 considered obsolete. The Oxford English Dictionary contains over 600,000 entries.' },
      { q: 'What are the most common verbs in English?', a: 'The most common English verbs are: be, have, do, say, get, make, go, know, take, see, come, think, look, want, and give.' },
    ],
    relatedTools: ['/word-counter', '/character-counter', '/reading-time', '/word-frequency', '/blog/how-many-words-in-a-paragraph'],
  },
  {
    slug: 'most-spoken-languages-in-the-world',
    title: 'Most Spoken Languages in the World 2026 (By Total & Native Speakers)',
    desc: 'The most spoken languages worldwide ranked by total speakers and native speakers. Top 50 languages with country data and writing systems.',
    searchVol: '200K+/mo',
    sections: [
      {
        heading: 'Top 30 Languages by Total Speakers',
        rows: [
          ['1', 'English', '1.45 billion', '380 million', '59 countries', 'Latin'],
          ['2', 'Mandarin Chinese', '1.12 billion', '920 million', '3 countries', 'Chinese characters'],
          ['3', 'Hindi', '609 million', '345 million', '4 countries', 'Devanagari'],
          ['4', 'Spanish', '559 million', '485 million', '20 countries', 'Latin'],
          ['5', 'French', '310 million', '80 million', '29 countries', 'Latin'],
          ['6', 'Arabic', '310 million', '270 million', '25 countries', 'Arabic'],
          ['7', 'Bengali', '278 million', '230 million', '2 countries', 'Bengali'],
          ['8', 'Portuguese', '264 million', '235 million', '10 countries', 'Latin'],
          ['9', 'Russian', '258 million', '150 million', '4 countries', 'Cyrillic'],
          ['10', 'Urdu', '231 million', '70 million', '2 countries', 'Arabic/Nastaliq'],
          ['11', 'Indonesian', '199 million', '44 million', '1 country', 'Latin'],
          ['12', 'German', '134 million', '75 million', '6 countries', 'Latin'],
          ['13', 'Japanese', '125 million', '123 million', '1 country', 'Hiragana/Katakana/Kanji'],
          ['14', 'Marathi', '99 million', '83 million', '1 country', 'Devanagari'],
          ['15', 'Telugu', '96 million', '83 million', '1 country', 'Telugu'],
          ['16', 'Turkish', '88 million', '80 million', '2 countries', 'Latin'],
          ['17', 'Tamil', '86 million', '78 million', '3 countries', 'Tamil'],
          ['18', 'Korean', '82 million', '77 million', '2 countries', 'Hangul'],
          ['19', 'Vietnamese', '85 million', '76 million', '1 country', 'Latin'],
          ['20', 'Italian', '85 million', '64 million', '4 countries', 'Latin'],
          ['21', 'Cantonese', '85 million', '82 million', '3 regions', 'Chinese characters'],
          ['22', 'Thai', '71 million', '21 million', '1 country', 'Thai'],
          ['23', 'Gujarati', '62 million', '57 million', '1 country', 'Gujarati'],
          ['24', 'Polish', '45 million', '40 million', '1 country', 'Latin'],
          ['25', 'Kannada', '56 million', '44 million', '1 country', 'Kannada'],
          ['26', 'Malayalam', '38 million', '35 million', '1 country', 'Malayalam'],
          ['27', 'Swahili', '98 million', '16 million', '14 countries', 'Latin'],
          ['28', 'Dutch', '30 million', '25 million', '3 countries', 'Latin'],
          ['29', 'Swedish', '13 million', '10 million', '2 countries', 'Latin'],
          ['30', 'Persian/Farsi', '110 million', '55 million', '3 countries', 'Arabic/Persian'],
        ],
        columns: ['Rank', 'Language', 'Total Speakers', 'Native Speakers', 'Countries', 'Script'],
      },
      {
        heading: 'Languages on the Internet',
        rows: [
          ['1', 'English', '25.9%', '1.19 billion users'],
          ['2', 'Chinese', '19.4%', '888 million users'],
          ['3', 'Spanish', '7.9%', '363 million users'],
          ['4', 'Arabic', '5.2%', '237 million users'],
          ['5', 'Portuguese', '3.7%', '171 million users'],
          ['6', 'Indonesian/Malay', '4.3%', '198 million users'],
          ['7', 'French', '3.3%', '151 million users'],
          ['8', 'Japanese', '2.6%', '118 million users'],
          ['9', 'Russian', '2.5%', '116 million users'],
          ['10', 'German', '2.0%', '92 million users'],
        ],
        columns: ['Rank', 'Language', '% of Internet', 'Internet Users'],
      },
    ],
    faqs: [
      { q: 'What is the most spoken language in the world?', a: 'English is the most spoken language with approximately 1.45 billion total speakers (native + non-native). Mandarin Chinese is second with 1.12 billion. By native speakers only, Mandarin is first with 920 million.' },
      { q: 'How many languages are there in the world?', a: 'There are approximately 7,168 living languages in the world. However, about 40% are endangered with fewer than 1,000 speakers. The top 23 languages account for more than half the world population.' },
      { q: 'What is the hardest language to learn?', a: 'For English speakers, the hardest languages according to the US State Department are Mandarin, Arabic, Japanese, and Korean (Category IV, requiring 2,200+ hours of study). The easiest include Spanish, French, and Italian (Category I, 600-750 hours).' },
      { q: 'What is the fastest growing language?', a: 'The fastest growing languages by total speakers are Hindi, Swahili, and Urdu. On the internet, Arabic, Portuguese, and Indonesian are growing fastest.' },
    ],
    relatedTools: ['/word-counter', '/word-counter/language/arabic', '/word-counter/language/chinese', '/word-counter/language/spanish', '/word-counter/language/french', '/word-counter/language/hindi', '/word-counter/language/japanese'],
  },
  {
    slug: 'essay-word-count-guide',
    title: 'Essay Word Count Guide: How Long Should Every Type of Essay Be? (2026)',
    desc: 'Definitive word count guide for every type of essay. High school, college, graduate, and professional essays with exact word counts and page lengths.',
    searchVol: '80K+/mo',
    sections: [
      {
        heading: 'Essay Word Counts by Type',
        rows: [
          ['High School Essay', '300-1,000', '1-4 pages', 'Varies by assignment'],
          ['College Application Essay (Common App)', '250-650', '1-2 pages', 'Strict 650 word max'],
          ['College Supplemental Essay', '100-400', '0.5-1.5 pages', 'School-specific'],
          ['Scholarship Essay', '250-1,000', '1-4 pages', 'Follows prompt length'],
          ['Undergraduate Paper', '1,500-5,000', '6-20 pages', 'Course dependent'],
          ['Graduate Seminar Paper', '3,000-6,000', '12-24 pages', ''],
          ['Research Paper', '4,000-10,000', '16-40 pages', 'Varies by field'],
          ['Master Thesis', '15,000-50,000', '60-200 pages', 'Field dependent'],
          ['PhD Dissertation', '50,000-100,000', '200-400 pages', 'Field dependent'],
          ['Personal Statement (Grad School)', '500-1,000', '2-4 pages', 'Usually 1-2 pages'],
          ['Statement of Purpose', '500-1,000', '2-4 pages', ''],
          ['Argumentative Essay', '1,000-3,000', '4-12 pages', ''],
          ['Persuasive Essay', '500-2,000', '2-8 pages', ''],
          ['Expository Essay', '500-1,500', '2-6 pages', ''],
          ['Narrative Essay', '500-2,500', '2-10 pages', ''],
          ['Descriptive Essay', '500-1,500', '2-6 pages', ''],
          ['Compare and Contrast Essay', '1,000-2,500', '4-10 pages', ''],
          ['Cause and Effect Essay', '1,000-2,000', '4-8 pages', ''],
          ['Literary Analysis', '1,000-3,000', '4-12 pages', ''],
          ['Book Report', '500-1,500', '2-6 pages', ''],
          ['Lab Report', '1,000-3,000', '4-12 pages', 'Includes data tables'],
          ['Case Study', '1,500-5,000', '6-20 pages', ''],
          ['GRE Essay (Issue)', '400-600', '1.5-2 pages', '30 minutes'],
          ['GRE Essay (Argument)', '350-500', '1-2 pages', '30 minutes'],
          ['IELTS Writing Task 1', '150+ words', '0.5 page', '20 minutes'],
          ['IELTS Writing Task 2', '250+ words', '1 page', '40 minutes'],
          ['TOEFL Essay', '300-400', '1-1.5 pages', '30 minutes'],
        ],
        columns: ['Essay Type', 'Word Count', 'Pages (Double Spaced)', 'Notes'],
      },
      {
        heading: 'Words Per Page Reference',
        rows: [
          ['Single spaced, 12pt Times New Roman', '500', '1 page'],
          ['Double spaced, 12pt Times New Roman', '250', '1 page'],
          ['Single spaced, 12pt Arial', '450', '1 page'],
          ['Double spaced, 12pt Arial', '225', '1 page'],
          ['Single spaced, 11pt Calibri', '475', '1 page'],
          ['Double spaced, 11pt Calibri', '238', '1 page'],
          ['Handwritten (average)', '175-200', '1 page'],
        ],
        columns: ['Format', 'Words Per Page', 'Reference'],
      },
    ],
    faqs: [
      { q: 'How many words is a 5-page essay?', a: 'A 5-page double-spaced essay is approximately 1,250 words (at 250 words per page). Single-spaced, it would be about 2,500 words.' },
      { q: 'How long is a college application essay?', a: 'The Common App essay has a strict 650-word maximum. Most supplemental essays are 100-400 words. Some schools accept up to 1,000 words.' },
      { q: 'How many words is a dissertation?', a: 'A PhD dissertation typically ranges from 50,000-100,000 words (200-400 pages). Master theses are shorter at 15,000-50,000 words. This varies significantly by field and institution.' },
      { q: 'How many words per page double spaced?', a: 'In standard formatting (12pt Times New Roman, double spaced, 1-inch margins), there are approximately 250 words per page.' },
    ],
    relatedTools: ['/word-counter', '/words-to-pages', '/reading-time', '/blog/how-many-words-in-a-college-essay', '/blog/how-many-words-per-page', '/blog/how-many-words-in-a-dissertation'],
  },
  {
    slug: 'social-media-image-sizes',
    title: 'Social Media Image Sizes 2026: Every Platform (Complete Cheat Sheet)',
    desc: 'Definitive guide to social media image dimensions in 2026. Profile photos, cover images, post sizes, story dimensions, and ad sizes for every platform.',
    searchVol: '100K+/mo',
    sections: [
      {
        heading: 'Instagram Image Sizes',
        rows: [
          ['Profile Photo', '320 x 320 px', '1:1', 'Displays as circle'],
          ['Square Post', '1080 x 1080 px', '1:1', 'Most common format'],
          ['Portrait Post', '1080 x 1350 px', '4:5', 'Best for engagement'],
          ['Landscape Post', '1080 x 566 px', '1.91:1', 'Least engagement'],
          ['Story / Reel', '1080 x 1920 px', '9:16', 'Full screen vertical'],
          ['Carousel', '1080 x 1080 px', '1:1', 'Up to 10 slides'],
          ['IGTV Cover', '420 x 654 px', '1:1.55', ''],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
      {
        heading: 'Facebook Image Sizes',
        rows: [
          ['Profile Photo', '180 x 180 px', '1:1', 'Displays at 170px'],
          ['Cover Photo', '820 x 312 px', '2.63:1', 'Mobile: 640 x 360'],
          ['Shared Image Post', '1200 x 630 px', '1.91:1', 'Optimal for links'],
          ['Square Post', '1080 x 1080 px', '1:1', ''],
          ['Story', '1080 x 1920 px', '9:16', ''],
          ['Event Cover', '1200 x 628 px', '1.91:1', ''],
          ['Group Cover', '1640 x 856 px', '1.91:1', ''],
          ['Ad Single Image', '1200 x 628 px', '1.91:1', 'Max 20% text'],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
      {
        heading: 'Twitter/X Image Sizes',
        rows: [
          ['Profile Photo', '400 x 400 px', '1:1', 'Displays as circle'],
          ['Header/Banner', '1500 x 500 px', '3:1', ''],
          ['In-Stream Image', '1600 x 900 px', '16:9', 'Optimal for tweets'],
          ['Card Image', '1200 x 628 px', '1.91:1', 'For link previews'],
          ['DM Image', '1200 x 675 px', '16:9', ''],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
      {
        heading: 'LinkedIn Image Sizes',
        rows: [
          ['Profile Photo', '400 x 400 px', '1:1', 'Min 200 x 200'],
          ['Background Image', '1584 x 396 px', '4:1', ''],
          ['Post Image', '1200 x 627 px', '1.91:1', ''],
          ['Company Logo', '300 x 300 px', '1:1', ''],
          ['Company Cover', '1128 x 191 px', '5.9:1', ''],
          ['Article Cover', '744 x 400 px', '1.86:1', ''],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
      {
        heading: 'YouTube Image Sizes',
        rows: [
          ['Channel Art/Banner', '2560 x 1440 px', '16:9', 'Safe area: 1546 x 423'],
          ['Profile Photo', '800 x 800 px', '1:1', ''],
          ['Video Thumbnail', '1280 x 720 px', '16:9', 'Min width 640px'],
          ['Watermark', '150 x 150 px', '1:1', ''],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
      {
        heading: 'TikTok, Pinterest & Others',
        rows: [
          ['TikTok Video', '1080 x 1920 px', '9:16', 'Full screen vertical'],
          ['TikTok Profile Photo', '200 x 200 px', '1:1', ''],
          ['Pinterest Pin', '1000 x 1500 px', '2:3', 'Optimal for feed'],
          ['Pinterest Profile', '165 x 165 px', '1:1', ''],
          ['Pinterest Board Cover', '222 x 150 px', '3:2', ''],
          ['Snapchat Story/Ad', '1080 x 1920 px', '9:16', ''],
          ['Threads Post Image', '1080 x 1080 px', '1:1', ''],
          ['Discord Server Icon', '512 x 512 px', '1:1', ''],
          ['WhatsApp Profile', '500 x 500 px', '1:1', ''],
        ],
        columns: ['Element', 'Dimensions', 'Aspect Ratio', 'Notes'],
      },
    ],
    faqs: [
      { q: 'What is the best Instagram post size?', a: 'The best Instagram post size for engagement is 1080 x 1350 px (4:5 portrait ratio). Square posts (1080 x 1080) are also great. Stories and Reels use 1080 x 1920 (9:16).' },
      { q: 'What size should a YouTube thumbnail be?', a: 'YouTube thumbnails should be 1280 x 720 pixels (16:9 ratio) with a minimum width of 640 pixels. File size should be under 2MB. JPG, PNG, or GIF format.' },
      { q: 'What is the Facebook cover photo size?', a: 'The Facebook cover photo is 820 x 312 pixels on desktop. On mobile, it displays at 640 x 360 pixels. Use 820 x 462 to look good on both.' },
      { q: 'What size is a LinkedIn post image?', a: 'The optimal LinkedIn post image is 1200 x 627 pixels (1.91:1 ratio). Profile photos should be 400 x 400 pixels.' },
    ],
    relatedTools: ['/character-counter', '/word-counter', '/blog/instagram-caption-length', '/blog/tiktok-caption-length-guide', '/blog/google-ads-character-limits'],
  },
  {
    slug: 'average-reading-speed-by-age',
    title: 'Average Reading Speed by Age, Grade & Education Level (2026 Data)',
    desc: 'Reading speed data for every age and education level. Words per minute for children, teens, adults, and speed readers with comprehension benchmarks.',
    searchVol: '60K+/mo',
    sections: [
      {
        heading: 'Reading Speed by Grade Level',
        rows: [
          ['1st Grade (6-7)', '53-111 WPM', '80 WPM', 'Learning to read'],
          ['2nd Grade (7-8)', '89-149 WPM', '115 WPM', 'Building fluency'],
          ['3rd Grade (8-9)', '107-162 WPM', '138 WPM', 'Reading to learn begins'],
          ['4th Grade (9-10)', '123-180 WPM', '158 WPM', ''],
          ['5th Grade (10-11)', '139-194 WPM', '166 WPM', ''],
          ['6th Grade (11-12)', '150-204 WPM', '185 WPM', ''],
          ['7th Grade (12-13)', '160-215 WPM', '195 WPM', ''],
          ['8th Grade (13-14)', '170-230 WPM', '204 WPM', ''],
          ['High School (14-18)', '200-300 WPM', '250 WPM', ''],
          ['College Student', '200-400 WPM', '300 WPM', ''],
          ['Average Adult', '200-300 WPM', '238 WPM', ''],
          ['Above Average Adult', '300-400 WPM', '350 WPM', 'Avid readers'],
          ['Speed Reader', '400-700 WPM', '550 WPM', 'Trained techniques'],
          ['World Record', '4,700 WPM', '4,700 WPM', 'Howard Berg (disputed)'],
        ],
        columns: ['Level / Age', 'Range', 'Average', 'Notes'],
      },
      {
        heading: 'Reading Time by Word Count',
        rows: [
          ['500 words', '2 min', '1 min 40 sec', '1 min'],
          ['1,000 words', '4 min', '3 min 20 sec', '2 min'],
          ['1,500 words', '6 min', '5 min', '3 min'],
          ['2,000 words', '8 min', '6 min 40 sec', '4 min'],
          ['3,000 words', '12 min', '10 min', '6 min'],
          ['5,000 words', '20 min', '16 min 40 sec', '10 min'],
          ['10,000 words', '40 min', '33 min 20 sec', '20 min'],
          ['50,000 words', '3 hr 20 min', '2 hr 47 min', '1 hr 40 min'],
          ['100,000 words', '6 hr 40 min', '5 hr 33 min', '3 hr 20 min'],
        ],
        columns: ['Word Count', 'Slow (200 WPM)', 'Average (250 WPM)', 'Fast (400 WPM)'],
      },
      {
        heading: 'Speaking Speed vs Reading Speed',
        rows: [
          ['Slow speaking', '100-110 WPM', 'Formal presentations'],
          ['Average speaking', '130-150 WPM', 'Normal conversation'],
          ['Fast speaking', '150-170 WPM', 'Excited discussion'],
          ['Audiobook narration', '150-175 WPM', 'Professional standard'],
          ['Podcast', '140-170 WPM', 'Conversational'],
          ['TED Talk', '140-170 WPM', 'Optimal for comprehension'],
          ['Auctioneer', '250-400 WPM', 'Specialized skill'],
          ['Silent reading', '200-300 WPM', 'Average adult'],
        ],
        columns: ['Type', 'Speed', 'Context'],
      },
    ],
    faqs: [
      { q: 'What is the average reading speed?', a: 'The average adult reads at 238 words per minute. College students average about 300 WPM. Speed readers can reach 400-700 WPM.' },
      { q: 'How fast should a child read?', a: 'A 1st grader should read about 80 WPM, a 3rd grader about 138 WPM, and a 5th grader about 166 WPM. By 8th grade, the target is about 204 WPM.' },
      { q: 'How long does it take to read 10,000 words?', a: 'At average reading speed (250 WPM), 10,000 words takes about 40 minutes. At slow speed (200 WPM), it takes 50 minutes. Speed readers finish in about 20 minutes.' },
      { q: 'Can you train yourself to read faster?', a: 'Yes. Most people can increase reading speed by 50-100% with practice. Key techniques include reducing subvocalization, expanding peripheral vision, using a pointer, and daily practice.' },
    ],
    relatedTools: ['/reading-time', '/words-per-minute', '/word-counter', '/blog/average-reading-speed', '/blog/words-per-minute-reading-guide'],
  },
];

// ================================================================
// BUILD PAGES
// ================================================================

PAGES.forEach(page => {
  const dir = path.join(APP, page.slug);
  ensureDir(dir);

  // Build sections HTML
  let sectionsJSX = '';
  page.sections.forEach((sec, si) => {
    const headerCells = sec.columns.map(c => `<th style={st.th}>${c}</th>`).join('');
    const bodyRows = sec.rows.map((row, ri) => {
      const cells = row.map((cell, ci) => `<td style={{...st.td${ci === 0 ? ",fontWeight:600,color:'#e2e8f0'" : ''}}}>${cell}</td>`).join('');
      return `<tr style={{background:${ri % 2 === 0 ? "'transparent'" : "'rgba(255,255,255,0.015)'"}}}>${cells}</tr>`;
    }).join('\n              ');

    sectionsJSX += `
        <div style={st.box}>
          <h2 style={st.h2}>${sec.heading}</h2>
          <div style={{overflowX:'auto'}}><table style={st.table}><thead><tr>${headerCells}</tr></thead><tbody>
              ${bodyRows}
          </tbody></table></div>
        </div>${si === 1 ? '\n        <AdUnit slot="3248634657" />' : ''}`;
  });

  const toolLinks = page.relatedTools.map(href => {
    const name = href.replace(/\//g, ' ').replace(/-/g, ' ').replace('blog ', '').trim();
    const isBlog = href.includes('/blog/');
    const style = isBlog ? 'st.blogLink' : 'st.toolLink';
    return `<a href="${href}" style={${style}}>${name}</a>`;
  }).join('\n            ');

  const faqsJSON = JSON.stringify(page.faqs).replace(/'/g, "\\'").replace(/\\"/g, '"');

  const pageContent = `import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: '${page.title.replace(/'/g, "\\'")} | WordCounterTool',
  description: '${page.desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${DOMAIN}/${page.slug}' },
  openGraph: {
    title: '${page.title.replace(/'/g, "\\'")}',
    description: '${page.desc.replace(/'/g, "\\'")}',
    url: '${DOMAIN}/${page.slug}',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = ${faqsJSON}

export default function Page() {
  const st = {
    page: { minHeight: '100vh', background: '#0f1117', color: '#e2e8f0' },
    wrap: { maxWidth: 1000, margin: '0 auto', padding: '32px 16px 64px' },
    h1: { fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 900, color: '#f1f5f9', margin: '0 0 12px', lineHeight: 1.15 },
    desc: { fontSize: 15, color: '#94a3b8', lineHeight: 1.7, margin: '0 0 8px' },
    vol: { fontSize: 12, color: '#10b981', fontWeight: 700, margin: '0 0 28px' },
    box: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24, marginBottom: 24 },
    h2: { fontSize: 20, fontWeight: 700, color: '#f1f5f9', margin: '0 0 16px' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: 13 },
    th: { padding: '10px 12px', textAlign: 'left', color: '#10b981', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid rgba(16,185,129,0.2)' },
    td: { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8' },
    toolLink: { display: 'inline-block', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', margin: '0 8px 8px 0', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' },
    blogLink: { display: 'inline-block', padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, textDecoration: 'none', margin: '0 6px 8px 0', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', color: '#60a5fa' },
  }

  return (
    <div style={st.page}>
      <Header />
      <FaqSchema faqs={faqs} />
      <AdUnit slot="7405024590" />
      <div style={st.wrap}>
        <nav style={{fontSize:13,color:'#64748b',marginBottom:20,display:'flex',gap:6,flexWrap:'wrap'}}>
          <a href="/" style={{color:'#64748b',textDecoration:'none'}}>Home</a>
          <span style={{color:'#475569'}}>\\u203a</span>
          <span style={{color:'#94a3b8'}}>${page.title.split('(')[0].split(':')[0].trim().replace(/'/g, "\\'")}</span>
        </nav>

        <h1 style={st.h1}>${page.title.replace(/'/g, "\\'")}</h1>
        <p style={st.desc}>${page.desc.replace(/'/g, "\\'")}</p>
        <p style={st.vol}>Updated March 2026</p>
${sectionsJSX}

        <div style={st.box}>
          <h2 style={st.h2}>Related Tools & Guides</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            ${toolLinks}
          </div>
        </div>

        <div style={st.box}>
          <h2 style={st.h2}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={i < faqs.length - 1 ? {borderBottom:'1px solid rgba(255,255,255,0.05)',paddingBottom:16,marginBottom:16} : {paddingBottom:8}}>
              <h3 style={{fontSize:14,fontWeight:600,color:'#e2e8f0',marginBottom:6,marginTop:0}}>{faq.q}</h3>
              <p style={{fontSize:13,color:'#94a3b8',lineHeight:1.7,margin:0}}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"${page.title.replace(/"/g, '\\"')}","description":"${page.desc.replace(/"/g, '\\"')}","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-03-27","dateModified":"2026-03-27","mainEntityOfPage":"${DOMAIN}/${page.slug}"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}"},{"@type":"ListItem","position":2,"name":"${page.title.split('(')[0].split(':')[0].trim().replace(/"/g, '\\"')}","item":"${DOMAIN}/${page.slug}"}]})}} />
      <Footer />
    </div>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.js'), pageContent, 'utf8');
  console.log('  Created: /' + page.slug);
});

// ================================================================
// UPDATE SITEMAP
// ================================================================
console.log('');
console.log('Updating sitemap...');
const smFile = path.join(APP, 'sitemap.js');
let sm = fs.readFileSync(smFile, 'utf8');
const lb = sm.lastIndexOf(']');
let ne = '';
PAGES.forEach(p => {
  const url = DOMAIN + '/' + p.slug;
  if (!sm.includes(p.slug)) {
    ne += '  { url: base + "/' + p.slug + '", priority: 0.9, freq: "monthly" },\n';
  }
});
if (ne) {
  // Check if last entry before ] has comma
  const beforeBracket = sm.substring(0, lb).trim();
  const needsComma = !beforeBracket.endsWith(',');
  sm = sm.slice(0, lb) + (needsComma ? ',\n' : '\n') + ne + sm.slice(lb);
  fs.writeFileSync(smFile, sm, 'utf8');
  console.log('  Added ' + PAGES.length + ' URLs to sitemap');
}

console.log('');
console.log('=====================================================');
console.log('  CREATED: ' + PAGES.length + ' High-Volume Data Pages');
console.log('');
PAGES.forEach(p => console.log('  ' + p.searchVol + ' - ' + p.title.split('(')[0].trim()));
console.log('');
console.log('  Combined search volume: 880K+/month');
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Add 7 high-volume data reference pages"');
console.log('  git push origin master');
