import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import Security from '../components/Security';
import Screenshots from '../components/Screenshots';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import DownloadBanner from '../components/DownloadBanner';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Security />
        <Screenshots />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
