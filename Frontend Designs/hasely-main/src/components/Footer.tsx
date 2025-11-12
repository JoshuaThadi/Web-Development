import { Button } from "@/components/ui/button";
import caselyIcon from "@/assets/casely-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={caselyIcon} alt="Hasely" className="h-8 w-8" />
              <span className="text-xl font-semibold">Hasely</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automate complex operations with trusted AI Agents.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-accent transition-colors">Solutions</a></li>
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#customers" className="text-sm text-muted-foreground hover:text-accent transition-colors">Customers</a></li>
              <li><a href="#trust" className="text-sm text-muted-foreground hover:text-accent transition-colors">Trust</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Hasely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
