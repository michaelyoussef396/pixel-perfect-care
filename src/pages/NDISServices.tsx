import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/services-hero.jpg";
import planManagementIcon from "@/assets/icon-plan-management.png";
import therapeuticIcon from "@/assets/icon-therapeutic.png";
import communityIcon from "@/assets/icon-community.png";
import dailyLivingIcon from "@/assets/icon-daily-living.png";
import personalCareIcon from "@/assets/icon-personal-care.png";
import nursingIcon from "@/assets/icon-nursing.png";
import householdIcon from "@/assets/icon-household.png";
import accommodationIcon from "@/assets/icon-accommodation.png";
import alliedHealthIcon from "@/assets/icon-allied-health.png";

const NDISServices = () => {
  const services = [
    {
      icon: planManagementIcon,
      title: "Plan Management",
      description: "Expert guidance to manage your NDIS budget and payments, ensuring you get the most from your plan.",
      features: ["Budget tracking", "Invoice processing", "Financial reporting", "Provider payments"]
    },
    {
      icon: planManagementIcon,
      title: "Support Coordination",
      description: "Navigate your NDIS journey with personalized coordination to connect you with the right services.",
      features: ["Service provider connections", "Plan implementation", "Goal setting support", "Plan reviews"]
    },
    {
      icon: therapeuticIcon,
      title: "Therapeutic Supports",
      description: "Access specialized therapies designed to enhance your wellbeing and achieve your goals.",
      features: ["Occupational therapy", "Physiotherapy", "Speech therapy", "Psychology services"]
    },
    {
      icon: communityIcon,
      title: "Community & Social Activities",
      description: "Join inclusive activities that help you connect with your community and build lasting friendships.",
      features: ["Group outings", "Social clubs", "Recreation programs", "Skill-building workshops"]
    },
    {
      icon: dailyLivingIcon,
      title: "Development of Daily Living & Life Skills",
      description: "Build independence through personalized training in essential life skills.",
      features: ["Cooking classes", "Budget management", "Public transport training", "Employment readiness"]
    },
    {
      icon: personalCareIcon,
      title: "Personal Activities",
      description: "Receive compassionate assistance with personal care tasks to maintain dignity and independence.",
      features: ["Bathing assistance", "Dressing support", "Hygiene care", "Grooming help"]
    },
    {
      icon: nursingIcon,
      title: "Community Nursing Care",
      description: "Professional nursing support delivered in the comfort of your home or community.",
      features: ["Medication management", "Wound care", "Health monitoring", "Clinical assessments"]
    },
    {
      icon: householdIcon,
      title: "Household Tasks",
      description: "Keep your home clean and comfortable with assistance in daily household activities.",
      features: ["Cleaning services", "Meal preparation", "Laundry assistance", "Shopping support"]
    },
    {
      icon: accommodationIcon,
      title: "Short Term Accommodation",
      description: "Safe and supportive temporary accommodation when you need respite or transition support.",
      features: ["Respite stays", "24/7 support", "Comfortable facilities", "Flexible duration"]
    },
    {
      icon: alliedHealthIcon,
      title: "Allied Health",
      description: "Comprehensive health services from qualified professionals to support your overall wellbeing.",
      features: ["Dietetics", "Exercise physiology", "Podiatry", "Audiology"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="NDIS Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              NDIS Services
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light">
              We support people living with disabilities through community, accommodation, and kindness.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Our NDIS programs are designed to help you reach your goals whatever they may be. Whether you'd like to gain employment, make new friends, or learn a new hobby, our team is here to support you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero" className="text-lg">
                <Phone className="mr-2" />
                02 7256 4646
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Care Remedy?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Finding the right care for you or your loved ones can be extremely difficult. Friends, family, and community support all play a role in a happy and healthy life. However, you can't be with your loved ones 24/7 and sometimes, people need a little extra care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Care Remedy offers tailored plans to provide the highest standard of care possible based on your family's needs. From social programs to daily living, our programs help your loved ones live full and active lives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <img src={service.icon} alt={service.title} className="w-12 h-12" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Apply Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Can Help You Apply to NDIS
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              If you'd like to receive care from Care Remedy and are eligible to become an NDIS registered participant, we can help you apply and receive a care plan. We'll make sure that your goals and needs align with our services.
            </p>
            <p className="text-lg mb-8">
              For more information, give our friendly team a call
            </p>
            <Button size="lg" variant="hero" className="text-lg bg-white text-primary hover:bg-white/90">
              <Phone className="mr-2" />
              02 7256 4646
            </Button>
          </div>
        </div>
      </section>

      {/* New Type of Care Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A New Type of <span className="text-primary">NDIS Care</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Care Remedy is a team of highly skilled and trained support workers who can offer the highest quality of NDIS care and services. Our number one goal is to provide for the safety and well-being of all individuals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our community is inclusive and energetic, we want to help you to feel like you are living your life to the fullest. With a multicultural and multilingual team, you'll get care tailored to your background, so you can communicate and operate with ease.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About Our Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions regarding our services or your specific needs, please contact us
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Phone className="mr-2" />
                02 7256 4646
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Mail className="mr-2" />
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NDISServices;
