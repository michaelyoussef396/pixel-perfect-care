import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40,60%,92%)] to-[hsl(50,70%,88%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Everyone <span className="text-accent italic">Can</span>
              <br />
              make a difference
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Care Remedy is one of Sydney's leading aged care and NDIS providers. 
              All of our programs are centred around helping participants achieve their goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-base">
                NDIS Services
              </Button>
              <Button variant="hero" size="lg" className="text-base">
                Aged Care Services
              </Button>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
              <img 
                src={heroImage} 
                alt="Care Remedy - Quality healthcare services" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
