import React from 'react';
import heroVideo from "@/assets/video/111.mp4";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Green animated blobs */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-[120px] animate-pulse top-[10%] left-[5%]"></div>
        <div className="absolute w-[600px] h-[600px] bg-green-400/20 rounded-full blur-[150px] animate-pulse animation-delay-1000 bottom-[15%] right-[10%]"></div>
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/25 rounded-full blur-[100px] animate-pulse animation-delay-2000 top-[50%] right-[20%]"></div>
        <div className="absolute w-[450px] h-[450px] bg-green-300/15 rounded-full blur-[130px] animate-pulse animation-delay-3000 bottom-[30%] left-[15%]"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-emerald-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-800/5 via-transparent to-green-900/5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-[787px] mx-auto mb-16">
        <h1 
          className="text-[48px] font-semibold text-[#F2F2F2] tracking-[-0.96px] uppercase leading-[120%] font-montserrat text-center"
          style={{
            WebkitTextStroke: '1px #E6FBED',
            fontStyle: 'normal'
          }}
        >
          <span className="not-italic">EMPOWERING INDEPENDENT</span>
          <br />
          <span className="italic">ARTISTS ON A GLOBAL STAGE</span>
        </h1>
        <p className="text-[#E3E3E3] text-base font-normal leading-[160%] font-montserrat text-center">
          At OneIsOne Entertainment, we empower artists worldwide, creating unforgettable stories through music.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <video
            className="w-full h-[60vh] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;