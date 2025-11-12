import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, BookOpen, MessageSquare } from "lucide-react";
import aiHeadBottom from "@/assets/ai-head-bottom.png";

const SubFeatures = () => {
  const subFeatures = [
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Trigger actions in Zendesk, Intercom, Slack, and more to fully close the loop.",
      link: "View Docs"
    },
    {
      icon: BookOpen,
      title: "Knowledge-grounded Answers",
      description: "Rooted in your docs, tickets, and CRMs always up to date.",
      link: "View Docs"
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {subFeatures.map((feature, index) => (
            <Card key={index} className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-accent font-medium">Learning resources</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Button variant="ghost" className="group px-0 text-foreground hover:text-accent">
                {feature.link}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        <Card className="p-12 border-border relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-accent" />
                <span className="text-sm text-accent font-medium">On-brand Responses</span>
              </div>
              
              <h3 className="text-3xl font-semibold mb-4">On-brand Responses</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Customize tone and policy enforcement with customizable style guides.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm mb-6">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-accent">▸</span>
                  <span>Brand | Privacy Policy | Terms of Service</span>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-accent">▸</span>
                  <span>Copyrights, Refund, Return...</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Security Warranty</span>
                </div>
              </div>
              
              <Button variant="ghost" className="group px-0 text-foreground hover:text-accent">
                View Docs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent blur-3xl" />
              <img 
                src={aiHeadBottom} 
                alt="AI Agent" 
                className="relative w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SubFeatures;
