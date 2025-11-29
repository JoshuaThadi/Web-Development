import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Company History", href: "#" },
    { label: "Latest Service", href: "#services" },
    { label: "Meet Our Team", href: "#" },
    { label: "Latest News", href: "#" },
  ];

  const supportLinks = [
    { label: "Need a Career?", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "My Account", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display font-bold text-2xl text-background mb-4 inline-block">
              Devfolio
            </a>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              Creating beautiful digital experiences that inspire and engage. Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background hover:text-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-background mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-background mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-background/60 mb-4">
              Subscribe to get more updates and news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-background/50"
              />
              <Button variant="default" size="icon" className="shrink-0 bg-background text-foreground hover:bg-background/90">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-sm text-background/60">
            Copyright © {new Date().getFullYear()} MasterJudah. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
