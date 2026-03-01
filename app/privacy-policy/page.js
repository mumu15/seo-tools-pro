import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy | WordCounterTool.net',
  description: 'Privacy policy for WordCounterTool.net. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: February 2026</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: '1. Information We Collect',
              content: 'WordCounterTool.net does not collect, store or transmit any text you enter into our tools. All text processing happens entirely in your browser. We do not have access to your content. We collect anonymous usage data through Google Analytics including page views, time on site and general location data to help us improve our tools.'
            },
            {
              title: '2. How We Use Information',
              content: 'Anonymous analytics data is used solely to understand how our tools are used and to improve the user experience. We do not sell, trade or transfer your information to third parties. We do not use your data for advertising targeting.'
            },
            {
              title: '3. Cookies',
              content: 'We use cookies through Google Analytics to track anonymous usage statistics. These cookies do not contain personally identifiable information. You can disable cookies in your browser settings at any time without affecting your ability to use our tools.'
            },
            {
              title: '4. Google AdSense',
              content: 'We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google Ad Settings.'
            },
            {
              title: '5. Your Text and Content',
              content: 'Any text you paste or type into our tools is processed locally in your browser. We do not store, transmit, analyze or have any access to the content you enter into our tools. Your content remains completely private.'
            },
            {
              title: '6. Third Party Links',
              content: 'Our website may contain links to third party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third party sites you visit.'
            },
            {
              title: '7. Changes to This Policy',
              content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our tools after changes constitutes acceptance of the updated policy.'
            },
            {
              title: '8. Contact Us',
              content: 'If you have questions about this privacy policy please contact us at contact@wordcountertool.net.'
            },
          ].map((section, i) => (
            <div key={i} className="result-box">
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
