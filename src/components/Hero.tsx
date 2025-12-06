import { Download, Play, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/hero-illustration.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const benefits = [
    { label: 'Smart refill reminders', icon: Clock },
    { label: 'AI interaction alerts', icon: Sparkles },
    { label: 'Care-team sharing', icon: ShieldCheck },
  ];
  const stats = [
    { value: '98%', label: 'med adherence after week 2' },
    { value: '2.4h', label: 'saved per caregiver weekly' },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none">
        <div className="absolute top-8 sm:top-10 md:top-20 left-2 sm:left-4 md:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-16 sm:top-20 md:top-40 right-2 sm:right-4 md:right-20 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-40 left-2 sm:left-4 md:left-20 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-20 right-2 sm:right-4 md:right-10 w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in px-2 xs:px-4 sm:px-0">
            <h1 className="mb-3 sm:mb-5 md:mb-6 leading-tight">
              <a 
                href="#home" 
                className="block text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105 inline-block"
              >
                Tumarna
              </a>
              <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/95 drop-shadow-md px-2 sm:px-0">
                Making every medication convenient
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 text-justify">
              Take control of your health with confidence. Manage medications safely, 
              get timely reminders, and stay protected with our comprehensive safety features.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4 w-full xs:w-auto">
              {isMobile ? (
                <a
                  href="https://github.com/Bilmark1009/Tumarna.apk/releases/download/v1.2.0/application-b8b104d0-7cff-41d6-8fd1-60d0ec991ec4.apk"
                  download="Tumarna.apk"
                  className="btn-hero flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 w-full xs:w-auto"
                >
                  <Download size={16} className="flex-shrink-0" />
                  <span>Download APK</span>
                </a>
              ) : (
                <div 
                  className="btn-hero flex items-center justify-center gap-2 bg-primary/50 text-white cursor-not-allowed text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium w-full xs:w-auto"
                  title="APK download is only available on mobile devices"
                >
                  <Download size={16} className="flex-shrink-0" />
                  <span>Download APK</span>
                </div>
              )}
              
              <a 
                href="#features" 
                className="btn-hero flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base w-full xs:w-auto"
              >
                <Play size={16} className="flex-shrink-0 fill-current" />
                <span>Learn More</span>
              </a>
            </div>


            
            {/* Secondary CTA for larger screens */}
          
          </div>

          {/* Hero Image */}
          <div className="relative z-10 animate-float px-2 xs:px-4 sm:px-0 mt-6 sm:mt-8 lg:mt-0">
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <img 
                  src={heroImage} 
                  alt="Tumarna App Preview" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                  width={600}
                  height={600}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    aspectRatio: '1/1',
                  }}
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -right-3 sm:-right-4 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-primary/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
              <div className="absolute -top-3 sm:-top-4 md:-top-6 -left-3 sm:-left-4 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-blue-400/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;