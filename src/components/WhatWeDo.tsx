export const WhatWeDo = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-primary/10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">500+</p>
                    <p className="text-sm text-muted-foreground">Participants</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-accent mb-1">10+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                    <p className="text-sm text-muted-foreground">Support</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-accent mb-1">98%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
              <span className="text-sm font-semibold text-primary">Your NDIS Provider</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What We <span className="text-accent">Do</span>
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                At Care Remedy, we're dedicated to providing personalised NDIS services to individuals 
                and families across Sydney. We create tailored care plans to meet the unique needs and 
                goals of each participant.
              </p>
              
              <p>
                Our comprehensive in-home NDIS services include assistance with daily tasks, skill 
                development, community participation, and support coordination. We work closely with 
                participants and their families to provide comfort and support around the clock.
              </p>
              
              <p className="font-semibold text-primary">
                Our goal is to ensure that our participants feel empowered, supported, and able to 
                live their best life in their own homes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">NDIS Registered</span>
              </div>
              
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Experienced Team</span>
              </div>
              
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Personalized Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
