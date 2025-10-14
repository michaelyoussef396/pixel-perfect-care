import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-primary">Care</span>
            <span className="text-accent">Remedy</span>
          </div>
          <p className="hidden sm:block text-xs text-muted-foreground">NDIS Provider</p>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            HOME
          </a>
          <a href="/ndis-services" className="text-sm font-medium hover:text-primary transition-colors">
            NDIS SERVICES
          </a>
          <a href="/about-us" className="text-sm font-medium hover:text-primary transition-colors">
            ABOUT
          </a>
          <a href="/#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            CONTACT
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:0272564646" className="hidden sm:flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            02 7256 4646
          </a>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
