import Footer from '../components/Footer';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'use', title: '1. Use of the App' },
    { id: 'medical', title: '2. Not Medical Advice' },
    { id: 'responsibilities', title: '3. User Responsibilities' },
    { id: 'accounts', title: '4. Accounts' },
    { id: 'privacy', title: '5. Privacy' },
    { id: 'third-party', title: '6. Third-Party Services' },
    { id: 'intellectual', title: '7. Intellectual Property' },
    { id: 'liability', title: '8. Limitations of Liability' },
    { id: 'availability', title: '9. Availability and Updates' },
    { id: 'termination', title: '10. Termination' },
    { id: 'changes', title: '11. Changes to These Terms' },
    { id: 'governing', title: '12. Governing Law' },
    { id: 'contact', title: '13. Contact Us' },
  ];

  return (
    <div className="min-h-screen">
      <main className="py-8 md:py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Terms and Conditions</h1>
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
                    Welcome to Tumarna ("the App," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of the Tumarna mobile medication management application and any related services. By installing, accessing, or using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the App.
                  </p>
                  <p className="text-base leading-8 text-justify text-white/85">
                    We reserve the right to modify these Terms at any time. Your continued use of the App after such modifications constitutes your acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="use" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">1. Use of the App</h2>
                  
                  <div className="space-y-4">
                    <p className="text-base leading-8 text-justify text-white/85">
                      Tumarna is a medication management and reminder tool designed to help users organize, track, and manage their medication schedules with ease and confidence.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Permitted Use</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-3">You agree to use the App only for:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Personal medication tracking and management</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Receiving medication reminders and notifications</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span className="text-justify">Organizing and scheduling medication information</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Prohibited Use</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-3">You must not use the App in any way that:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Violates applicable laws or regulations</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Harms, disrupts, or overloads the App or its services</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Attempts to gain unauthorized access to systems or data</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-red-400 mr-3">✗</span>
                          <span>Transmits malware, viruses, or harmful code</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="medical" className="scroll-mt-24">
                <div className="border-l-4 border-red-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">2. Not Medical Advice</h2>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                    <p className="text-base leading-8 text-white/85 mb-4">
                      <strong className="text-red-300">IMPORTANT DISCLAIMER:</strong> Tumarna is a medication management tool and does NOT provide medical or professional healthcare advice. The App is designed for organization and reminder purposes only.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-3 ml-6">
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">The App does <strong>not diagnose, treat, cure, or prevent</strong> any medical condition</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">Information provided by the App does <strong>not substitute</strong> for professional medical guidance</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">Always consult licensed healthcare professionals for medical decisions, concerns, or questions</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">In case of emergency or serious health concerns, seek immediate medical attention</span>
                      </li>
                    </ul>

                    <p className="text-base leading-8 text-justify text-white/85 mt-6">
                      You assume full responsibility for how you use the information, reminders, and features provided by the App. Tumarna is not responsible for any medical outcomes or consequences resulting from your use of the application.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="responsibilities" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">3. User Responsibilities</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">By using the App, you agree to the following responsibilities:</p>
                  
                  <ul className="space-y-4 ml-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">1.</span>
                      <span className="text-justify"><strong>Accuracy of Information:</strong> All medication information you enter into the App must be accurate, complete, and truthful</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">2.</span>
                      <span className="text-justify"><strong>Active Management:</strong> You are responsible for regularly managing, reviewing, and updating your medication schedule</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">3.</span>
                      <span className="text-justify"><strong>Device Permissions:</strong> You acknowledge that reminder delivery depends on device settings, notification permissions, and operating system behavior</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">4.</span>
                      <span className="text-justify"><strong>Notification Settings:</strong> Failure to enable required permissions (such as notifications) may significantly affect the App's functionality</span>
                    </li>
                  </ul>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                    <p className="text-white/85 text-base"><strong className="text-yellow-300">Note:</strong> We cannot guarantee reminder delivery if notifications are disabled or blocked by your device settings.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="accounts" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">4. Accounts and User Data</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">If the App allows account creation, multi-user features, or cloud synchronization, the following terms apply:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Account Security</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>You must keep your login credentials confidential and secure</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>You are responsible for all activity and access under your account</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>You agree to notify us immediately of any unauthorized account use</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Account Termination</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-3">We may suspend or terminate accounts that:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Violate these Terms and Conditions</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Engage in prohibited or harmful behavior</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span>Show patterns of abuse or misuse of the App</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="privacy" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">5. Privacy</h2>
                  <p className="text-base leading-8 text-justify text-white/85">
                    Your privacy is extremely important to us. Our comprehensive <strong>Privacy Policy</strong> explains in detail how we collect, use, store, and protect your personal information and medical data. By using Tumarna, you also agree to all practices and terms described in our Privacy Policy. Please review it carefully to understand our data handling practices.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="third-party" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">6. Third-Party Services</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">The App may integrate with or rely on third-party services, including:</p>
                  
                  <ul className="space-y-2 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Push notification and reminder services</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Analytics and performance monitoring tools</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Email and customer support systems</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Public drug information databases (e.g., OpenFDA)</span>
                    </li>
                  </ul>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-blue-300">Disclaimer:</strong> Tumarna is not responsible for the availability, accuracy, performance, or practices of third-party services. Your use of these services is governed by their respective terms and policies.</p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="intellectual" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">7. Intellectual Property Rights</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    All trademarks, logos, content, features, functionality, and materials provided within Tumarna are owned by Tumarna or its licensors and are protected by international intellectual property laws.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">What You Cannot Do</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="text-white/85 flex items-start">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>Copy, reproduce, or distribute any part of the App or its content</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>Modify, adapt, translate, or create derivative works based on the App</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>Reverse-engineer, decompile, or attempt to extract source code</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>Use the App's content or functionality for commercial purposes without permission</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>Remove or obscure any proprietary notices or labels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="liability" className="scroll-mt-24">
                <div className="border-l-4 border-red-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">8. Limitations of Liability</h2>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                    <p className="text-base text-white/85 leading-8">
                      <strong className="text-red-300">To the fullest extent permitted by applicable law:</strong> Tumarna is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties, representations, or guarantees of any kind.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-3 ml-6">
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">We do not guarantee uninterrupted, error-free, or secure operation of the App</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">We are not liable for missed reminders, delayed notifications, or inaccurate medication entries</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">We are not liable for device malfunctions, software issues, or operating system problems</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">We are not liable for any health-related consequences or medical outcomes from using the App</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-justify">We are not liable for data loss, corruption, or unauthorized access due to security breaches</span>
                      </li>
                    </ul>

                    <p className="text-base leading-8 text-justify text-white/85 mt-6">
                      <strong>You use the App at your own risk.</strong> You assume full responsibility for any damages, losses, or harm resulting from your use or inability to use Tumarna.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="availability" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">9. Availability and Updates</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    We may update, modify, enhance, or discontinue parts of the App at any time without prior notice. Updates may include:
                  </p>

                  <ul className="space-y-2 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Performance improvements and optimization</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Bug fixes and security patches</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>New features and functionality</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Interface redesigns and user experience enhancements</span>
                    </li>
                  </ul>

                  <p className="text-base leading-8 text-justify text-white/85">
                    Your continued use of the App after any updates or changes constitutes your acceptance of those modifications. We recommend keeping your App updated to ensure optimal performance and security.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="termination" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">10. Termination of Access</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    We reserve the right to suspend or terminate your access to the App immediately and without liability if:
                  </p>

                  <ul className="space-y-2 ml-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>You violate these Terms and Conditions</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>You engage in misuse, abuse, or harmful behavior</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>Required systems or services become unavailable</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>We decide to discontinue the App or related services</span>
                    </li>
                  </ul>

                  <p className="text-base leading-8 text-justify text-white/85 mt-6">
                    Upon termination, your right to use the App ceases immediately. All provisions of these Terms that should continue after termination will remain in effect.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="changes" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">11. Changes to These Terms</h2>
                  <p className="text-base leading-8 text-justify text-white/85">
                    We may revise these Terms and Conditions from time to time to reflect changes in our practices, legal requirements, or other factors. When we make significant changes, we will update the version and post a new effective date on this page. In some cases, we may notify you through the App or via email about material changes.
                  </p>
                  <p className="text-base leading-8 text-justify text-white/85 mt-4">
                    Your continued use of Tumarna after any modifications indicates your acceptance of the revised Terms. We recommend reviewing these Terms periodically to stay informed about your rights and obligations.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="governing" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">12. Governing Law and Jurisdiction</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-4">
                    These Terms and Conditions are governed by and construed in accordance with the laws of the Philippines, without regard to its conflicts of law provisions.
                  </p>
                  <p className="text-base leading-8 text-justify text-white/85">
                    Any disputes, claims, or legal proceedings arising from or relating to your use of Tumarna or these Terms shall be resolved in the courts of the Philippines. You agree to submit to the exclusive jurisdiction of these courts and waive any objections to venue or inconvenient forum.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="contact" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">13. Contact Us</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    If you have questions, concerns, or inquiries regarding these Terms and Conditions or your use of Tumarna, please feel free to contact us. Our team is here to help:
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
                  These Terms and Conditions are effective as of December 2025 and were last updated on December 6, 2025. Tumarna is committed to transparent and fair terms for all users.
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

export default TermsAndConditions;
