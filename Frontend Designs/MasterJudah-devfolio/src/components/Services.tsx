import { Search, Code, BarChart3, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Design Research",
      description:
        "Deep dive into user behavior and market trends to create data-driven design solutions that resonate with your audience.",
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description:
        "Boost your online visibility with strategic SEO implementation that drives organic traffic and improves rankings.",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Transform designs into pixel-perfect, responsive websites with clean code and optimal performance.",
    },
    {
      icon: MessageSquare,
      title: "IT Consultations",
      description:
        "Strategic guidance to align your technology investments with business goals for maximum ROI.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-medium mb-4 tracking-wide uppercase text-sm">
            What I Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Services I Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-muted group-hover:bg-foreground/5 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
