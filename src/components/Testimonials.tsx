import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jea Jusga',
    title: '',
    quote: 'Tumarna makes it so easy to remember my medications. I love that it sends notifications at the right time',
    rating: 5,
  },
  {
    name: 'Genoveva Marentes',
    title: '',
    quote: 'I like the multi-user feature; I can manage my family\'s medications all in one app.',
    rating: 5,
  },
  {
    name: 'Maricel Coyoca',
    title: '',
    quote: 'Tracking my medications has never been this easy',
    rating: 5,
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gradient-subtle">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          From Our Early Users
        </p>
        <h2 className="text-foreground mb-4 mt-6">
          What our beta users are saying
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          During the beta phase, users shared how Tumarna made managing medications easier, safer, and stress-free.
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

      
    </div>
  </section>
);

export default Testimonials;