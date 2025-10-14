import iconContact from "@/assets/icon-contact.png";
import iconSignup from "@/assets/icon-signup.png";
import iconCare from "@/assets/icon-care.png";

export const HowItWorks = () => {
  const steps = [
    {
      icon: iconContact,
      title: "Get in touch with us",
      description: "We invite you to reach out to us through email or phone to discuss your care needs and determine the best program for you.",
    },
    {
      icon: iconSignup,
      title: "Sign Up for Our Service",
      description: "Once you sign up, you'll have access to a range of high-quality services.",
    },
    {
      icon: iconCare,
      title: "Receive Exceptional Care",
      description: "Whether you need assistance with daily tasks or accommodation, we're here to help you with a smile.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it Works</h2>
          <p className="text-lg text-accent font-semibold">Your NDIS & Aged Care Provider</p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            It's easy to join one of our programs, here's how it's done in three easy steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-xl">
                  <img src={step.icon} alt={step.title} className="w-20 h-20" />
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
