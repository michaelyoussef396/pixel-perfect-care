import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/contact-hero.jpg";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = formSchema.parse(formData);
      
      // Encode data for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `New Contact Form Submission\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nSubject: ${validatedData.subject}\nMessage: ${validatedData.message || "N/A"}`
      );
      
      // Open WhatsApp in new tab
      window.open(`https://wa.me/61272564646?text=${whatsappMessage}`, "_blank");
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      
      toast({
        title: "Error",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Call Us, Write Us, or Knock on Our Door
            </p>
            <p className="text-lg opacity-90">
              If you have any questions, concerns, or feedback, we're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Come Say <span className="text-primary">Hi!</span></h2>
              <p className="text-lg text-muted-foreground">
                Give us a call or send us an email. Our exceptional staff will be able to answer any questions regarding your individual needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What can we help you with?"
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your needs..."
                        className={errors.message ? "border-destructive" : ""}
                        rows={4}
                      />
                      {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's Meet</h3>
                
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-primary">Give Us A Call</h4>
                      <a href="tel:0272564646" className="text-lg hover:text-primary transition-colors">
                        02 7256 4646
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-primary">We're On The Map</h4>
                      <p className="text-lg text-muted-foreground">
                        171 Merrylands Road,<br />
                        Merrylands NSW 2160
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-primary">Send Us A Message</h4>
                      <a href="mailto:info@careremedy.com.au" className="text-lg hover:text-primary transition-colors">
                        info@careremedy.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
