import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Tumarna ensure my data is safe?",
      answer: "Tumarna follows HIPAA compliance standards and uses end-to-end encryption to protect your health data. We never share your personal information with third parties without your explicit consent."
    },
    {
      question: "Can I use Tumarna without an internet connection?",
      answer: "Yes! Tumarna works offline for basic medication tracking and reminders. However, an internet connection is required for drug interaction checks and syncing data across devices."
    },
    {
      question: "How accurate are the drug interaction alerts?",
      answer: "Our drug interaction database is sourced from leading pharmaceutical databases and is regularly updated. However, always consult with your healthcare provider for medical advice."
    },
    {
      question: "Is Tumarna free to use?",
      answer: "Tumarna offers a free tier with basic medication tracking. Premium features like advanced drug interaction monitoring and family sharing are available through our subscription plans."
    },
    {
      question: "How do I install the Android APK?",
      answer: "Tap the Download APK button from your Android device, approve installing from your trusted browser, and Tumarna guides you through enabling notifications within 30 seconds. No sideloading gymnastics."
    },
    {
      question: "Can I share my medication data with my doctor?",
      answer: "Absolutely! Tumarna allows you to generate comprehensive reports that you can easily share with your healthcare providers during appointments."
    },
    {
      question: "Does Tumarna work with all types of medications?",
      answer: "Yes, Tumarna supports prescription medications, over-the-counter drugs, vitamins, and supplements. Our database includes comprehensive information for safe medication management."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions about Tumarna? We've got answers to help you get started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between bg-card hover:bg-muted/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-primary" />
                  ) : (
                    <ChevronDown size={24} className="text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-muted/20">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-outline"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;