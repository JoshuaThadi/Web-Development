import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael T. Hardman",
      role: "CEO & Founder",
      content:
        "David's attention to detail and creative vision transformed our brand completely. The results exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Richard A. Sanders",
      role: "Web Designer",
      content:
        "Working with David was an incredible experience. His design expertise and professionalism made the entire process seamless.",
      rating: 5,
    },
    {
      name: "Benito T. Haskins",
      role: "CTO, TechStart",
      content:
        "Exceptional work! David delivered a stunning website that perfectly captures our brand identity and drives conversions.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-medium mb-4 tracking-wide uppercase text-sm">
            Client Feedback
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="font-display text-xl font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-foreground text-foreground"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
