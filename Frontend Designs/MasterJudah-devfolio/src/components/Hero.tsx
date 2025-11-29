import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen p-10 flex items-center pt-16 mt-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-muted/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-muted-foreground font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to my Devfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Hello, I'm{" "}
              <span className="text-foreground">MasterJudah</span>
              <br />
              <span className="text-muted-foreground">UX/UI Designer</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I craft beautiful digital experiences that blend creativity with functionality. 
              Let's bring your vision to life with modern, user-centered design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Hire Me <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2" size={18} /> Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-transparent rounded-2xl blur-2xl transform scale-110" />
              <img
                src={profileImage}
                alt="David Corna - UX/UI Designer"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border border-border"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-xl shadow-lg animate-float">
                <p className="text-sm font-medium text-foreground">✨ Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
