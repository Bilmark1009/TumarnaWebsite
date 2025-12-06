import { Bell, AlertTriangle, Users, Sparkles, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Bell,
    title: 'Smart, Accurate Medication Reminders',
    description: 'Never miss a dose with customizable alerts that adapt to your schedule.',
    number: '01',
    highlight: true,
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: AlertTriangle,
    title: 'Side Effects & Safety Info Powered by OpenFDA',
    description: 'Get real-time drug details and safety warnings pulled from trusted medical data.',
    number: '02',
    color: null,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Users,
    title: 'Multi-User Medication Management',
    description: 'Keep track of medications for yourself, parents, or kids in one organized app.',
    number: '03',
    color: null,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Lock,
    title: 'Offline-Ready With Secure On-Device Storage',
    description: 'Your data stays safe on your device and works even without internet.',
    number: '04',
    color: null,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<{ [key: string]: boolean }>(() => {
    // Make all feature cards visible by default to avoid them being hidden
    // when IntersectionObserver doesn't trigger for some viewports.
    return features.reduce((acc, f) => ({ ...acc, [f.number]: true }), {} as { [key: string]: boolean });
  });
  const cardsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = (entry.target as HTMLElement).dataset.key;
            if (key) {
              setVisibleCards((prev) => ({ ...prev, [key]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.values(cardsRef.current).forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      Object.values(cardsRef.current).forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const FeatureCard = ({ feature, index }: { feature: (typeof features)[0]; index: number }) => {
    const isVisible = visibleCards[feature.number];
    const animationDelay = index * 100;

    return (
      <div
        ref={(el) => {
          if (el) cardsRef.current[feature.number] = el;
        }}
        data-key={feature.number}
        className={`group relative flex flex-col gap-6 rounded-3xl border border-border/70 bg-card/90 p-8 text-foreground shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: isVisible ? `${animationDelay}ms` : '0ms',
        }}
      >
        {/* Accent line on top (consistent across all cards) */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

        {/* Background accent blur (same for all cards) */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Number badge */}
        <div className={`absolute top-4 right-4 text-sm font-bold opacity-20 group-hover:opacity-30 transition-opacity text-muted-foreground`}>
          {feature.number}
        </div>

        {/* Icon container with consistent hover effect */}
        <div className={`rounded-2xl p-4 w-fit transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.iconBg} group-hover:shadow-lg`}>
          <feature.icon className={`h-8 w-8 transition-all duration-300 group-hover:scale-125 ${feature.iconColor}`} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h3 className={`text-lg font-semibold transition-all duration-300 text-foreground group-hover:text-primary`}>
            {feature.title}
          </h3>
          <p className={`mt-3 text-base leading-relaxed transition-colors duration-300 text-muted-foreground group-hover:text-foreground`}>
            {feature.description}
          </p>
        </div>

        {/* Bottom accent border */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
      </div>
    );
  };

  return (
    <section id="features" className="relative bg-gradient-subtle py-24 overflow-hidden">
      {/* Animated background blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:bg-primary/15 transition-colors duration-300">
            Key Features
          </p>
          <h2 className="mt-6 text-foreground">Everything you need for medication management</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tumarna combines smart reminders, safety information, and ease of use to help you manage medications confidently.
          </p>
        </div>

        <div className="grid gap-6 max-w-7xl mx-auto">
          {/* All 4 features in one row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.number} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;