import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Elena Cruz',
    title: 'Clinical Pharmacist, Mercy General',
    quote:
      'We replaced paper med sheets with Tumarna and saw adherence jump to 97%. Nurses now act on proactive alerts instead of scrambling after a missed dose.',
    rating: 5
  },
  {
    name: 'Marcus Bell',
    title: 'Primary caregiver for his dad',
    quote:
      'The shared timeline lets my siblings help from different cities. Refill reminders and interaction alerts removed 90% of my anxiety.',
    rating: 5
  },
  {
    name: 'Jessamine Yao',
    title: 'Director of Patient Experience, VitaCare',
    quote:
      'Auditable logs made it easy to prove compliance during our last accreditation. The team responds to every feature request with empathy.',
    rating: 5
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gradient-subtle">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Voices from the field
        </p>
        <h2 className="text-foreground mb-4 mt-6">
          What caregivers say
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Designed alongside pharmacists, nurses, and caregivers to make every medication moment calmer.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="relative flex h-full flex-col rounded-3xl border border-border/70 bg-card/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
          >
            <Quote className="absolute right-8 top-8 h-10 w-10 text-primary/30" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                {testimonial.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>

            <p className="mt-6 text-lg text-foreground/90 leading-relaxed">“{testimonial.quote}”</p>

            <div className="mt-6 flex items-center gap-1 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} size={18} className="fill-current" />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-border/70 bg-white px-8 py-6 shadow-lg">
        <div className="flex items-center gap-2 text-foreground">
          <Star size={20} className="text-yellow-400 fill-current" />
          <span className="font-semibold">4.9 / 5 average care team rating</span>
        </div>
        <span className="hidden h-6 w-px bg-border md:block" />
        <p className="text-muted-foreground">10,000+ medication plans powered every month</p>
        <span className="hidden h-6 w-px bg-border md:block" />
        <p className="text-muted-foreground">Live in 42 cities and counting</p>
      </div>
    </div>
  </section>
);

export default Testimonials;