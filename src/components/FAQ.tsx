import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "I'm eligible for NDIS, how can I access your services?",
      answer: "We can help you apply to NDIS if you need some assistance with the process. Otherwise, you will need to call NDIS on 1800 800 110 to receive an Access Request Form. This form collects doctors' and medical records to support your application. The sooner you return the form to NDIS for processing the sooner you'll be able to participate in our programs.",
    },
    {
      question: "How do I know if my NDIS application has been processed?",
      answer: "Someone from the NDIS will be in contact with you once your application has been processed. The next step is to arrange a meeting to plan the type of support you need. We are happy to help you with this process if you would like advice on what's best for your needs.",
    },
    {
      question: "Can you help me apply to NDIS?",
      answer: "Yes, we can help you through the whole process. Give one of our friendly staff a call on 02 7256 4646 and they'll walk you through the whole process.",
    },
    {
      question: "What services do you offer for NDIS participants?",
      answer: "We offer a comprehensive range of NDIS services including: Plan Management, Support Coordination, Therapeutic Supports, Community and Social Activities, Personal Activities, Development of Daily Living & Life Skills, Community Nursing Care, Household Tasks, Short-Term Accommodation, and Supported Independent Living.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-lg text-muted-foreground mb-4">Frequently Asked Questions</p>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Learn more about our services and what we can offer you. If you have any further questions, 
            don't hesitate to call us at <a href="tel:0272564646" className="text-primary font-semibold hover:underline">02 7256 4646</a>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card rounded-lg px-6 shadow-md border-2 border-transparent hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
