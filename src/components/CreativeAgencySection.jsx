import React from 'react';

const CreativeAgencySection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden" 
             style={{
               background: `linear-gradient(135deg, 
                 #FF4500 0%,
                 #FF6B35 15%,
                 #E91E63 35%,
                 #C2185B 45%,
                 #9C27B0 60%,
                 #673AB7 75%,
                 #5E35B1 85%,
                 #7B1FA2 100%
               )`
             }}>
      
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M0,200 C300,50 600,350 900,200 C1200,50 1440,300 1440,200 L1440,0 L0,0 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
        </svg>
        
        <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M1440,600 C1140,750 840,450 540,600 C240,750 0,500 0,600 L0,800 L1440,800 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
        </svg>
        
        <svg className="absolute top-1/4 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M0,400 C360,300 720,500 1080,400 C1260,350 1440,450 1440,400"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
          />
        </svg>
        
        <svg className="absolute bottom-1/4 right-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path 
            d="M1440,300 C1080,400 720,200 360,300 C180,350 0,250 0,300"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-light leading-tight">
            We're a full suite <span className="font-normal">creative communication</span>
            <br />
            and <span className="font-normal">performance marketing agency</span>
            <br />
            loaded with <span className="font-normal">creative ideas</span>, that drive
            <br />
            results with <span className="font-normal">purpose focused messaging</span>.
          </h1>
        </div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/10"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 rounded-full border border-white/10"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full border border-white/10"></div>
    </section>
  );
};

export default CreativeAgencySection;