import { Card } from "@/components/ui/card";
import disabilityIcon from "@/assets/service-disability.png";
import agedCareIcon from "@/assets/service-aged-care.png";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">At Care Remedy</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            You come <span className="text-primary">first.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group cursor-pointer overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 animate-slide-up">
            <a href="#disability" className="block p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={disabilityIcon} alt="Disability Services" className="w-20 h-20" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Disability</h3>
              <p className="text-muted-foreground">
                Comprehensive NDIS services tailored to your unique needs
              </p>
            </a>
          </Card>
          
          <Card className="group cursor-pointer overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <a href="#aged-care" className="block p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={agedCareIcon} alt="Aged Care Services" className="w-20 h-20" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">Aged Care</h3>
              <p className="text-muted-foreground">
                Compassionate care services for seniors in their own homes
              </p>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
