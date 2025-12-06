const TrustBar = () => {
  const stats = [
    '5k+ active users',
    'HIPAA compliant',
    '5-star caregiver reviews',
    '24/7 support ready',
  ];

  return (
    <section
      id="trust"
      className="bg-background/60 backdrop-blur-sm border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
        {stats.map((label) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse-soft" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;