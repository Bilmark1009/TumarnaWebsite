import { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import DownloadQRModal from './DownloadQRModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
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
      // Add a small offset to account for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  // Close mobile menu when a nav item is clicked
  const handleNavItemClick = (href: string) => {
    handleNavClick(href);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-[0_20px_45px_rgba(15,23,42,0.12)]'
          : 'bg-background/70 backdrop-blur-md',
        'border-b border-border/70',
        'py-3 md:py-2',
        'w-full'
      )}
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-bold text-gradient hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
              setIsOpen(false);
            }}
            aria-label="Tumarna - Home"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Tumarna
            </span>
          </a>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="md:hidden inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md text-white bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-200"
            >
              <Download className="mr-1.5 h-3 w-3" />
              Download
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
            'border-b border-border/50',
            'w-full' // Ensure full width
          )}
        >
          <div className="w-full px-4 py-2 space-y-1">
            <ul className="w-full list-none p-0 m-0">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <button
                    onClick={() => handleNavItemClick(item.href)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-bold text-gradient hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            aria-label="Tumarna - Home"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Tumarna
            </span>
          </a>

          <div className="flex items-center space-x-2">
            <ul className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative 
                               after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 
                               after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4 
                               hover:after:left-1/4 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:rounded"
                    aria-label={`Go to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:-translate-y-0.5 hover:bg-primary/20"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>
      </div>
      <DownloadQRModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;