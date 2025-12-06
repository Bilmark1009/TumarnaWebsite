const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#screenshots', label: 'Screenshots' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-12 bg-slate-950 py-16 text-white">
      <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-bold">Tumarna</span>
              <p className="mt-2 text-white/80">Medication peace of mind.</p>
            </div>
            <p className="text-white/70">
              Built with nurses, pharmacists, and caregivers to keep every medication plan aligned, safe, and shareable.
            </p>
            <div className="flex gap-3">
              {['X', 'in', 'IG'].map((icon) => (
                <span
                  key={icon}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wide text-white/80"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Explore</h4>
            <ul className="space-y-2 text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)} className="transition-colors hover:text-white">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Compliance</h4>
            <ul className="space-y-2 text-white/70">
              <li>HIPAA & GDPR ready</li>
              <li>Annual SOC 2 audit</li>
              <li>Zero-knowledge encryption</li>
              <li>Uptime status updated daily</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Stay in the loop</h4>
            <p className="mb-4 text-sm text-white/70">Monthly release notes plus medication safety tips.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="button"
                className="w-full rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Tumarna. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <button className="transition-colors hover:text-white">Privacy Policy</button>
            <button className="transition-colors hover:text-white">Terms of Service</button>
            <button className="transition-colors hover:text-white">Security Page</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;