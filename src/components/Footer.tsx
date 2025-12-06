import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const location = useLocation(); // To check current path

  const quickLinks = [
    { to: '#home', label: 'Home' },
    { to: '#features', label: 'Features' },
    { to: '#screenshots', label: 'Screenshots' },
    { to: '#about', label: 'About' },
    { to: '#testimonials', label: 'Reviews' },
    { to: '#faq', label: 'FAQ' },
    { to: '#contact', label: 'Contact' },
  ];

  // Handles scrolling to homepage sections
  const handleNavClick = (to: string) => {
    if (location.pathname !== '/') {
      // Navigate to homepage first if not already there
      window.location.href = '/';
      setTimeout(() => {
        const element = document.querySelector(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to allow page load
    } else {
      const element = document.querySelector(to);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    setSubscribing(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwvkspL4KLY2I6qKv_Ubp-Ji49qNwB_gsLUnv_lUMKr9uksquOCf6VlHdOz6vdETHt5/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams({
            user_email: email,
            user_name: 'Subscriber',
          }),
        }
      );

      if (response.ok || response.type === 'opaque') {
        setSuccessMsg('Successfully subscribed! Check your email for confirmation.');
        setEmail('');
        setTimeout(() => setSuccessMsg(''), 5000);
      } else {
        setErrorMsg('Failed to subscribe. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to subscribe. Please try again later.');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer role="contentinfo" className="mt-12 bg-slate-950 py-16 text-white">
      <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Branding */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-stretch">
          <div className="space-y-4 h-full">
            <div>
              <span className="text-2xl font-bold">Tumarna</span>
              <p className="mt-2 text-white/80">Medication peace of mind.</p>
            </div>
            <p className="text-white/70">
              Made to simplify schedules, prevent missed doses, and keep your day on track.
            </p>
          </div>

          {/* Quick links */}
          <div className="h-full">
            <h4 className="mb-4 font-semibold">Explore</h4>
            <ul className="space-y-2 text-white/70">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="h-full">
            <h4 className="mb-4 font-semibold">Stay in the loop</h4>
            <p className="mb-4 text-sm text-white/70 text-justify">
              Receive monthly release notes, tips for safe and effective medication management, 
              and early announcements about new features. Keep your medication routine on track 
              and never miss important updates.
            </p>

            <form className="space-y-3" onSubmit={handleSubscribe}>
              {successMsg && (
                <div className="text-green-600 bg-green-50/10 border border-green-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm mb-2">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="text-red-400 bg-red-50/10 border border-red-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm mb-2">
                  {errorMsg}
                </div>
              )}
              <label htmlFor="subscribe-email" className="sr-only">Email</label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                disabled={subscribing}
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="w-full rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Tumarna. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/security" onClick={() => window.scrollTo(0, 0)} className="transition-colors hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
