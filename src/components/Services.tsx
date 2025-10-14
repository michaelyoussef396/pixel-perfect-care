import { Card } from "@/components/ui/card";
import disabilityIcon from "@/assets/service-disability.png";
import agedCareIcon from "@/assets/service-aged-care.png";

export const Services = () => {
  const services = [
    {
      icon: disabilityIcon,
      title: "Support Coordination",
      description: "Expert guidance to help you navigate and maximize your NDIS plan",
      color: "primary"
    },
    {
      icon: disabilityIcon,
      title: "Daily Living Support",
      description: "Assistance with household tasks, meal prep, and personal care",
      color: "accent"
    },
    {
      icon: disabilityIcon,
      title: "Community Access",
      description: "Connect with your community through social activities and outings",
      color: "primary"
    },
    {
      icon: disabilityIcon,
      title: "Skill Development",
      description: "Build independence through life skills training and development",
      color: "accent"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1ODRkOGMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">At Care Remedy</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            You come <span className="text-primary">first.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive NDIS services tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <img src={service.icon} alt={service.title} className="w-10 h-10" />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 text-${service.color}`}>{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
