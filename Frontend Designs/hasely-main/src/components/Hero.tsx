import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="rounded-full gap-2 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium">Your Future AI +</span>
          </Badge>
          
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Automate complex operations
            <br />
            <span className="text-accent">with trusted AI Agents.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Hasely pairs powerful AI with governance, security, and workflow integrations so your team can automate support without losing your voice.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full px-8">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
