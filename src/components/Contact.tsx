import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MessageCircle, Send, CalendarClock, FileDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setErrorMsg('Email service is not configured.');
        setSending(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        publicKey
      );

      setSuccessMsg('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 xs:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you. 
            Our team is here to help you make the most of Tumarna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 xs:px-4 sm:px-0">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            {/* onboarding blocks removed per request */}
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-200">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-white w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-medium text-foreground">Email Us</h4>
                  <a 
                    href="mailto:support@tumarna.com" 
                    className="text-xs xs:text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    support@tumarna.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-200">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-white w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-medium text-foreground">Call Us</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-xs xs:text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-200">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle size={18} className="text-white w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-medium text-foreground">Live Chat</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">
                    Chat with our support team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5" data-emailjs-recaptcha="true">
              {successMsg && (
                <div className="text-green-600 bg-green-50 border border-green-200 rounded-md px-3 py-2 text-sm mb-2">{successMsg}</div>
              )}
              {errorMsg && (
                <div className="text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 text-sm mb-2">{errorMsg}</div>
              )}
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-muted-foreground mb-1">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={sending}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs xs:text-sm sm:text-base rounded-lg border border-border/50 bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-muted-foreground mb-1">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={sending}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs xs:text-sm sm:text-base rounded-lg border border-border/50 bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-muted-foreground mb-1">
                  Your Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  disabled={sending}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs xs:text-sm sm:text-base rounded-lg border border-border/50 bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-1" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
