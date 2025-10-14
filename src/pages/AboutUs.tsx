import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Heart, Target, Users } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";
import missionImage from "@/assets/mission-vision.jpg";
import teamImage from "@/assets/our-team.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We care deeply about every individual we serve, treating everyone with dignity and respect."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, ensuring quality care and support."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster an inclusive environment where everyone feels valued and supported."
    }
  ];

  const teamMembers = [
    {
      name: "Mary Polat",
      role: "Service Manager",
      description: "Dedicated Service Manager who devotes her energy to making individuals smile and taken care of. Her vibrant presence and high standards enable her to exceed client expectations and provide the best experience possible.",
      details: "Mary oversees workflows and ensures employees understand their duties and delegated tasks, including supervising and coaching which results with customer satisfaction."
    },
    {
      name: "Sera Yildirim",
      role: "Plan Manager",
      description: "Sera has over 25 years of experience in finance. She provides high-quality service by maintaining highest standards of ethical behaviour and integrity.",
      details: "Sera enjoys assisting participants with managing their NDIS plan funds and is proud to be an intermediary of the enhancement of the independence, spiritual fulfilment and enjoyment of the life of people."
    },
    {
      name: "Hazal Alsan",
      role: "Support Coordinator",
      description: "Hazal is a compassionate Support Coordinator at Care Remedy, known for her caring and outgoing attitude, and her passion for helping clients achieve their goals.",
      details: "She is an excellent listener and communicator, always putting the needs of her clients first. She builds strong, positive relationships with her clients and their families, committed to providing the highest standard of care."
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
            alt="About Care Remedy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light">
              Caring For Those You Care About
            </p>
            <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
              We are an NDIS Provider whose mission is to provide a service that puts you and your family first. We began as community volunteers, serving those with disabilities. As the community grew, so did our desire to help, that's when we came together under the roof of Care Remedy.
            </p>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Care Remedy's services combine quality and effectiveness. We understand the physical and mental challenges people face on a daily basis. As a result, we assist and guide our community to provide them with better comfort and peace of mind.
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src={missionImage} 
                alt="Mission and Vision" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mission & <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are a community of expert support workers, nurses and carers that love what we do. Our mission is to foster an environment where our participants are excited to receive care. At Care Remedy, you come first.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                All of our programs are centred around helping participants achieve their goals and live their best quality of life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team understands how important it is for family members to be confident their loved ones are in the right hands. All of our carers are chosen for qualities such as empathy, patience and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do at Care Remedy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-primary/30 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who <span className="text-primary">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Care Remedy, our mission is to provide exceptional NDIS care services that put our clients' needs first.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We began our journey as a provider of community volunteer services to people with disabilities, and have since come together under one roof to provide care and support to those in need of assistance to remain safe and independent in their own homes and to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We pride ourselves on delivering high-quality, effective services that address the physical and mental challenges our clients face on a daily basis. Our dedicated team works closely with clients and their loved ones to provide comfort, peace of mind, and the support needed to achieve their goals.
              </p>
            </div>
            
            <div className="animate-fade-in order-1 md:order-2">
              <img 
                src={teamImage} 
                alt="Who We Are" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated professionals are here to support you every step of the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-center text-primary">{member.name}</h3>
                  <p className="text-accent text-center font-semibold mb-4">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Contact us today to learn more about how we can support you or your loved ones
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="hero" className="text-lg bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2" />
                02 7256 4646
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
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

export default AboutUs;
