import { Card } from "@/components/ui/card";
import { Zap, Users, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Automation",
      description: "Deflect repetitive inquiries with AI workflows that connect to your data and tools.",
    },
    {
      icon: Users,
      title: "Agent Assist",
      description: "Suggested notes, summaries, and insights right where your agents work.",
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Guardrails, approvals, and analytics so you stay safe, accurate, and compliant.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span>AI</span>
            <span className="text-muted-foreground">/ AI Support</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            A complete AI support platform
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate repetitive tickets, assist agents in real time, and ensure every response is compliant and on-brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lg transition-shadow border-border"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
