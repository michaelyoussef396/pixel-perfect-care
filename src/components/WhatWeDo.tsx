export const WhatWeDo = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 h-full flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary">Care & Support</h3>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
            <p className="text-lg text-accent font-semibold">Your NDIS & Age Care Provider</p>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                At our company, we are dedicated to providing personalised NDIS and aged care services 
                to individuals and families in Sydney. We create tailored care plans to meet the unique 
                needs of each person. Our in-home NDIS services include assistance with daily tasks, 
                cleaning, and meal preparation.
              </p>
              
              <p>
                We also provide specialised aged care services, working closely with seniors and their 
                families to provide comfort and support around the clock. Our goal is to ensure that our 
                clients feel comfortable, safe, and supported in their own homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
