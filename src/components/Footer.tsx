import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Care</span>
              <span className="text-accent">Remedy</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Care Remedy is one of Sydney's leading aged care and NDIS service provider.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "NDIS Services", "Aged Care", "About", "Contact", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary-foreground/80">
                  171 Merrylands Road,<br />
                  Merrylands NSW 2160
                </p>
              </div>
              
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:0272564646" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  02 7256 4646
                </a>
              </div>
              
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@careremedy.com.au" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@careremedy.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Care Remedy | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
