import { Button } from "@/components/ui/button";
import caselyIcon from "@/assets/casely-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={caselyIcon} alt="Hasely" className="h-8 w-8" />
            <span className="text-xl font-semibold">Hasely</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm text-foreground hover:text-accent transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-sm text-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#trust" className="text-sm text-foreground hover:text-accent transition-colors">
              Trust
            </a>
            <a href="#customers" className="text-sm text-foreground hover:text-accent transition-colors">
              Customers
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
          </div>
          
          <Button variant="default" size="sm" className="rounded-full px-6">
            Book a Demo
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
