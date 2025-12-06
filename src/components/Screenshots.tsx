import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import screenshot1 from '../assets/app-screenshot-1.jpg';
import screenshot2 from '../assets/app-screenshot-2.jpg';
import screenshot3 from '../assets/app-screenshot-3.jpg';

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      image: screenshot1,
      caption: 'Track your meds effortlessly',
      description: 'Simple and intuitive medication tracking interface'
    },
    {
      image: screenshot2,
      caption: 'Stay safe with alerts',
      description: 'Real-time safety checks and drug interaction warnings'
    },
    {
      image: screenshot3,
      caption: 'Never miss a dose',
      description: 'Smart reminders and notification management'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Product tour
          </p>
          <h2 className="mt-6 text-foreground">See Tumarna in action</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            From refill tracking to escalation playbooks, here’s how the mobile experience guides every decision.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            <div className="rounded-3xl border border-border bg-gradient-to-b from-muted to-card p-8 shadow-lg">
              <div className="mx-auto w-64 rounded-[28px] border border-border bg-white p-3 shadow-2xl">
                <img
                  src={screenshots[currentSlide].image}
                  alt={screenshots[currentSlide].caption}
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{screenshots[currentSlide].caption}</h3>
                <p className="text-muted-foreground">{screenshots[currentSlide].description}</p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:-translate-y-1/2 hover:shadow-xl"
            >
              <ChevronLeft size={20} className="text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:-translate-y-1/2 hover:shadow-xl"
            >
              <ChevronRight size={20} className="text-primary" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? 'bg-primary' : 'bg-muted'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="rounded-[32px] border border-border bg-card/80 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="relative mx-auto max-w-[260px]">
                <div className="rounded-[34px] border border-border bg-white p-4 shadow-inner">
                  <img src={screenshot.image} alt={screenshot.caption} className="w-full rounded-[22px]" />
                </div>
                <div className="absolute inset-x-6 bottom-3 rounded-full bg-muted px-4 py-1 text-center text-xs font-medium text-muted-foreground">
                  {screenshot.caption}
                </div>
              </div>
              <p className="mt-8 text-muted-foreground text-center">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;