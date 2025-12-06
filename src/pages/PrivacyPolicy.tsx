import Footer from '../components/Footer';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'collect', title: '1. Information We Collect' },
    { id: 'use', title: '2. How We Use Your Information' },
    { id: 'storage', title: '3. Data Storage and Security' },
    { id: 'third-party', title: '4. Third-Party Services' },
    { id: 'children', title: '5. Children\'s Privacy' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'retention', title: '7. Data Retention' },
    { id: 'changes', title: '8. Changes to This Policy' },
    { id: 'contact', title: '9. Contact Us' },
  ];

  return (
    <div className="min-h-screen">
      <main className="py-8 md:py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-white/60">Effective Date: December 2025</p>
              <p className="text-white/60 text-sm mt-2 sm:mt-0">Last updated: December 2025</p>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`block text-sm py-2 px-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-500'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 space-y-12 text-white">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-24">
                <div className="prose prose-invert max-w-none space-y-4">
                  <p className="text-base leading-8 text-justify text-white/85">
                    Tumarna ("the App," "we," "our," or "us") is a mobile medication management application designed to help users manage and track their medications with confidence and ease. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly and securely. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our App.
                  </p>
                  <p className="text-base leading-8 text-justify text-white/85">
                    By accessing and using Tumarna, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with our privacy practices, please do not use our App.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="collect" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">1. Information We Collect</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">1.1 Information You Provide</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-4">We collect information that you voluntarily enter into the App to provide you with the best possible experience. This includes:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Medication names, dosages, schedules, and reminder preferences</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Personal notes related to your medication plan</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">User profile details (name, age, contact information if applicable)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">1.2 Automatically Collected Information</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-4">Depending on your device settings and permissions, the App may automatically collect certain information to improve functionality:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Device information (model, operating system version, device identifier)</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">App performance data and crash reports for debugging purposes</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Anonymous usage analytics (if you opt in to data sharing)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-white">1.3 What We Do NOT Collect</h3>
                      <p className="text-base text-white/85 mb-4">We prioritize your privacy and deliberately avoid collecting sensitive information:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Location data or GPS coordinates</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Biometric data (fingerprints, facial recognition)</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Payment or financial information</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Contact lists or address books</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Photos, videos, or media files</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="use" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">2. How We Use Your Information</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">We use your information exclusively for legitimate purposes directly related to providing, improving, and securing our App services. Specifically:</p>
                  <ul className="space-y-3 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span className="text-justify"><strong>Managing and displaying</strong> your medication schedule and history</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span className="text-justify"><strong>Sending timely reminders</strong> and notifications for medication adherence</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span className="text-justify"><strong>Improving</strong> app performance, reliability, and overall user experience</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span className="text-justify"><strong>Providing customer support</strong> and addressing your inquiries</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span className="text-justify"><strong>Ensuring the security and stability</strong> of the App and your data</span>
                    </li>
                  </ul>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-green-300">Our Commitment:</strong> We do <strong>not</strong> sell, trade, or share your personal data with third-party advertisers or marketers. Your information remains your own.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="storage" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">3. Data Storage and Security</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">3.1 Local Data Storage</h3>
                      <p className="text-base leading-8 text-justify text-white/85">
                        Your medication data is stored primarily on your device locally, ensuring you maintain control and ownership. This approach protects your sensitive health information from external breaches. We only store data on our servers when you explicitly choose features that require cloud synchronization or backup services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">3.2 Security Measures</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-4">We implement comprehensive administrative, technical, and physical safeguards to protect your data:</p>
                      <ul className="space-y-2 ml-6 mb-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Secure local storage with encryption protocols</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Restricted and monitored access to user data</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Industry-standard encryption where applicable</span>
                        </li>
                      </ul>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <p className="text-white/85 text-base"><strong className="text-yellow-300">Important Disclaimer:</strong> While we take reasonable and appropriate measures to protect your information, no method of electronic storage is completely secure. We cannot guarantee absolute security against sophisticated attacks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="third-party" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">4. Third-Party Services</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">To provide enhanced functionality and reliability, we may partner with trusted third-party service providers:</p>
                  <ul className="space-y-3 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Email and support services</strong> for customer assistance and communication</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Analytics tools</strong> to understand user behavior and improve functionality</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Push notification services</strong> for timely medication reminders</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Public drug information sources</strong> (e.g., OpenFDA) for drug interaction checks</span>
                    </li>
                  </ul>
                  <p className="text-base leading-8 text-justify text-white/85 mb-4">All third-party service providers are contractually obligated to receive only the minimum data necessary and must comply with strict privacy and security standards that match or exceed our own.</p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-blue-300">Medication Data Protection:</strong> We do <strong>not</strong> share your specific medication details, dosages, or medical history with any third-party provider.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="children" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">5. Children's Privacy</h2>
                  <p className="text-base leading-8 text-justify text-white/85">
                    Tumarna is designed and intended for adults and caregivers managing their own or others' medications. The App is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13 years of age. If we become aware that personal information from a child under 13 has been collected, we will immediately delete such information and notify the parent or guardian.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="rights" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">6. Your Rights</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">Depending on your geographic location and applicable privacy laws, you may have the following rights regarding your personal data:</p>
                  <ul className="space-y-3 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Access:</strong> Request and receive a copy of all personal data we hold about you</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Export:</strong> Receive your data in a portable format</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Opt-out:</strong> Opt out of analytics, marketing communications, or certain data processing</span>
                    </li>
                  </ul>
                  <p className="text-base leading-8 text-justify text-white/85">To exercise any of these rights, please contact us using the details provided in the Contact Us section below.</p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="retention" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">7. Data Retention</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">We retain your information only as long as necessary to provide the App's services and fulfill the purposes outlined in this Privacy Policy:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Medication data</strong> remains stored until you manually delete it or uninstall the App</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Diagnostic logs and analytics</strong> may be retained for a limited period (typically 30-90 days) for troubleshooting and performance optimization</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Account information</strong> is retained as long as your account is active</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section id="changes" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">8. Changes to This Privacy Policy</h2>
                  <p className="text-base leading-8 text-justify text-white/85">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. If we make significant changes that materially affect how we handle your personal information, we will notify you through the App interface or via email notification. We will also update the "Last updated" date at the top of this policy. Your continued use of the App after any changes are posted constitutes your acceptance of the revised Privacy Policy. We recommend reviewing this policy periodically to stay informed about how we protect your data.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="contact" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">9. Contact Us</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    If you have questions, concerns, or requests related to your privacy, our data practices, or this Privacy Policy, we encourage you to reach out. Our dedicated privacy team is here to assist you:
                  </p>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white text-lg font-semibold">support@tumarna.com</p>
                      <p className="text-white/70 text-sm mt-1">Average response time: 24-48 hours</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Website</p>
                      <p className="text-white text-lg font-semibold">www.tumarna.com</p>
                      <p className="text-white/70 text-sm mt-1">For general inquiries and additional information</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Note */}
              <div className="border-t border-white/20 pt-12 mt-12">
                <p className="text-white/60 text-sm text-center">
                  This Privacy Policy is effective as of December 2025 and was last updated on December 6, 2025. Tumarna is committed to your privacy and data protection.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
