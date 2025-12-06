import Footer from '../components/Footer';
import { useState } from 'react';
import { Shield, Lock, Server, AlertCircle, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'commitment', title: '1. Commitment to Data Protection' },
    { id: 'storage', title: '2. Data Storage and Encryption' },
    { id: 'device', title: '3. Device-Level Protections' },
    { id: 'third-party', title: '4. Third-Party Services' },
    { id: 'network', title: '5. Network Security' },
    { id: 'access', title: '6. Access Control' },
    { id: 'updates', title: '7. Regular Updates' },
    { id: 'responsibility', title: '8. User Responsibility' },
    { id: 'incident', title: '9. Incident Response' },
    { id: 'contact', title: '10. Contact Us' },
  ];

  return (
    <div className="min-h-screen">
      <main className="py-8 md:py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">Security</h1>
            </div>
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
                    At Tumarna, we recognize that the information you trust us with—your medications, health details, and personal data—deserves the highest level of protection. We take the security and confidentiality of your information seriously and have implemented comprehensive measures to safeguard your data. This Security Statement explains the security practices, protocols, and measures we employ to protect your information and maintain a secure, trustworthy environment for all users of the Tumarna Medication Management App.
                  </p>
                  <p className="text-base leading-8 text-justify text-white/85">
                    Security is not a one-time effort but an ongoing commitment. We continuously evaluate and improve our security measures to stay ahead of emerging threats and maintain your trust.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="commitment" className="scroll-mt-24">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <h2 className="text-3xl font-bold">1. Commitment to Data Protection</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-base leading-8 text-justify text-white/85">
                      Tumarna is architected from the ground up with privacy and security as core principles, not afterthoughts. Every design decision, from data storage to user authentication, prioritizes the protection of your sensitive medication and health information.
                    </p>

                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                      <p className="text-white/85 text-base leading-8">
                        <strong className="text-green-300">Our Security Philosophy:</strong> We follow industry-standard security practices and frameworks to ensure that your information remains confidential, accurate, and protected from unauthorized access, modification, or loss at all times.
                      </p>
                    </div>

                    <p className="text-base leading-8 text-justify text-white/85">
                      We are committed to maintaining the trust you place in us and continuously evolving our security measures to address emerging threats and vulnerabilities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="storage" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Server className="w-8 h-8 text-blue-400" />
                    <h2 className="text-3xl font-bold">2. Data Storage and Encryption</h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">2.1 Local Data Storage</h3>
                      <p className="text-base leading-8 text-justify text-white/85">
                        Your medication information is stored locally on your device, ensuring you retain complete control and ownership of your data. This approach minimizes the risk of unauthorized access from external sources and reduces your exposure to potential data breaches from centralized servers.
                      </p>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                        <p className="text-white/85 text-sm"><strong className="text-blue-300">Benefit:</strong> Local storage means your medication data never leaves your device unless you actively enable cloud features.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">2.2 Encryption</h3>
                      <p className="text-base leading-8 text-justify text-white/85 mb-4">
                        Where applicable, all data handled by the App or transmitted to third-party services is protected using industry-standard secure protocols:
                      </p>
                      <ul className="space-y-2 ml-6 mb-4">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>HTTPS/TLS Encryption:</strong> All network communications are encrypted to prevent interception</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>Device-Level Encryption:</strong> Leverages OS-native encryption features</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>Data-at-Rest Protection:</strong> Sensitive data is encrypted when stored locally</span>
                        </li>
                      </ul>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <p className="text-white/85 text-sm"><strong className="text-yellow-300">Note:</strong> Encryption strength depends on your device's security capabilities and settings.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="device" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">3. Device-Level Protections</h2>
                  
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    Your data benefits from multiple layers of security mechanisms built directly into your mobile device. Tumarna complements these protections without bypassing or weakening them:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-400" />
                        Operating System Sandboxing
                      </h4>
                      <p className="text-white/80 text-sm">Apps are isolated from each other, preventing unauthorized data access</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-400" />
                        Permission Controls
                      </h4>
                      <p className="text-white/80 text-sm">You control which permissions Tumarna can access on your device</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-400" />
                        OS-Level Encryption
                      </h4>
                      <p className="text-white/80 text-sm">Your device encrypts all data automatically at the system level</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-400" />
                        Biometric & Passcode
                      </h4>
                      <p className="text-white/80 text-sm">Use fingerprint or face recognition for additional security</p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-green-300">Best Practice:</strong> Enable device lock screen and biometric authentication for maximum security.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="third-party" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">4. Third-Party Services</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    Tumarna may integrate with carefully selected third-party services to enhance functionality and reliability:
                  </p>

                  <ul className="space-y-3 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Notification Services:</strong> For reliable reminder delivery</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Analytics (Optional):</strong> To improve app performance (only with your consent)</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Customer Support Systems:</strong> To assist you effectively</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Public Drug Information Sources:</strong> For medication verification and safety data</span>
                    </li>
                  </ul>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-blue-300">Security Standards:</strong> All third-party partners are contractually required to maintain security standards that meet or exceed our own. They receive only the minimum data necessary to perform their functions, and we do not share your medication details with any external provider.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="network" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">5. Network Security</h2>
                  
                  <div className="space-y-4">
                    <p className="text-base leading-8 text-justify text-white/85">
                      When the App connects to online services—such as checking for updates or retrieving drug information—all communication is encrypted and protected to prevent interception, tampering, or eavesdropping.
                    </p>

                    <div className="space-y-3 ml-6">
                      <div className="flex items-start">
                        <span className="text-blue-400 mr-3 font-bold">1.</span>
                        <span className="text-justify text-white/85"><strong>Encrypted Connections:</strong> All data transmitted between your device and our servers uses secure encryption protocols</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-400 mr-3 font-bold">2.</span>
                        <span className="text-justify text-white/85"><strong>No Medication Data Transmission:</strong> We do not transmit your medication information to external servers unless explicitly required for a feature you have enabled</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-400 mr-3 font-bold">3.</span>
                        <span className="text-justify text-white/85"><strong>Minimal Data Collection:</strong> We collect only essential data needed for app functionality and your experience</span>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-white/85 text-base"><strong className="text-yellow-300">Security Tip:</strong> Always use a secure, password-protected WiFi network when accessing online services in the App.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="access" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">6. Access Control</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-white/85 text-base">
                        <strong className="text-green-300">You Are in Control:</strong> Only you have access to your medication entries and personal health information stored in the App.
                      </p>
                    </div>

                    <ul className="space-y-3 ml-6">
                      <li className="text-white/85 flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span><strong>No Staff Access:</strong> Tumarna staff do not have access to your personal medication data</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span><strong>Support Data:</strong> We only access information you voluntarily share for troubleshooting or support purposes</span>
                      </li>
                      <li className="text-white/85 flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span><strong>Strict Privacy:</strong> Even then, access is limited and logged for audit purposes</span>
                      </li>
                    </ul>

                    <p className="text-base leading-8 text-justify text-white/85 mt-4">
                      This principle of minimal access is fundamental to our security model and protects your information from both external threats and insider risks.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="updates" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">7. Regular Updates and Maintenance</h2>
                  
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    Security is not static—threats evolve, and so must our defenses. We continually improve the App's security through:
                  </p>

                  <ul className="space-y-3 ml-6 mb-6">
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Security Updates & Patches:</strong> Released promptly to address vulnerabilities</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Bug Fixes:</strong> Resolving security-related issues as they are discovered</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Dependency Monitoring:</strong> Regularly scanning frameworks and libraries for vulnerabilities</span>
                    </li>
                    <li className="text-white/85 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>OS Compatibility:</strong> Maintaining compatibility with the latest device security standards</span>
                    </li>
                  </ul>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-green-300">Important:</strong> We strongly encourage all users to keep the App updated to the latest version to benefit from the latest security enhancements.</p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="responsibility" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">8. User Responsibility</h2>
                  
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    Security is a shared responsibility. While we provide robust protections, you also play a crucial role in keeping your data safe:
                  </p>

                  <div className="space-y-3 ml-6 mb-6">
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">1.</span>
                      <span className="text-justify text-white/85"><strong>Strong Device Security:</strong> Use a strong, unique passcode for your device</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">2.</span>
                      <span className="text-justify text-white/85"><strong>Keep OS Updated:</strong> Regularly update your phone's operating system to receive security patches</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">3.</span>
                      <span className="text-justify text-white/85"><strong>Manage Permissions:</strong> Only grant the App permissions it genuinely needs</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">4.</span>
                      <span className="text-justify text-white/85"><strong>Avoid Screen Sharing:</strong> Be cautious about sharing screenshots or your screen with others</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">5.</span>
                      <span className="text-justify text-white/85"><strong>Report Concerns:</strong> If you notice suspicious activity, contact us immediately</span>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-yellow-300">Best Practices:</strong> These simple steps significantly enhance your overall security posture.</p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="incident" className="scroll-mt-24">
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                    <h2 className="text-3xl font-bold">9. Incident Response</h2>
                  </div>
                  
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    While we work diligently to prevent security incidents, we maintain comprehensive incident response procedures to act swiftly if an issue does occur:
                  </p>

                  <div className="space-y-4 ml-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Our Response Protocol</h4>
                      <ul className="space-y-2">
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>Immediate Investigation:</strong> We will promptly investigate any reported security issue</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>Corrective Measures:</strong> Take necessary technical and operational steps to remediate</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>User Notification:</strong> Notify affected users if required by law or if there is material risk</span>
                        </li>
                        <li className="text-white/85 flex items-start">
                          <span className="text-blue-400 mr-3">•</span>
                          <span><strong>Root Cause Analysis:</strong> Conduct a thorough analysis to prevent future occurrences</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-white/85 text-base"><strong className="text-red-300">Report a Vulnerability:</strong> If you discover a security vulnerability, please contact us immediately at <strong>security@tumarna.com</strong> instead of posting publicly.</p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="contact" className="scroll-mt-24">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold mb-6">10. Contact Us</h2>
                  <p className="text-base leading-8 text-justify text-white/85 mb-6">
                    If you have concerns about security, believe you have discovered a vulnerability, or have questions about our security practices, we encourage you to reach out. Our security team is here to help:
                  </p>

                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Security Concerns</p>
                      <p className="text-white text-lg font-semibold">security@tumarna.com</p>
                      <p className="text-white/70 text-sm mt-1">For vulnerabilities and security issues</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-1">General Support</p>
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
                  This Security Statement is effective as of December 2025 and was last updated on December 6, 2025. Tumarna is committed to maintaining the highest standards of security and data protection for all users.
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

export default SecurityPage;
