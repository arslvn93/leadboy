import { Button } from '@/components/ui/button';
import { Star, Play, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 pb-24 px-4 relative overflow-hidden bg-retro-dark">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:40px_40px] opacity-30"></div>
      
      {/* Diagonal neon lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-retro-purple shadow-neon-purple"></div>
      <div className="absolute -top-20 right-40 w-[800px] h-[2px] bg-retro-neon-blue transform rotate-45 shadow-neon-blue opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-[400px] h-[2px] bg-retro-neon-pink transform -rotate-45 shadow-neon-pink opacity-60"></div>
      
      {/* VHS distortion lines - horizontal scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-retro-neon-blue opacity-5 animate-scan-line"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Column - Headline and CTA */}
        <div className="md:w-5/12 mb-16 md:mb-0">
          {/* Main heading with Kid Cosmo chrome style */}
          <h1 className="mb-10 relative">
            <div className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-2 kid-cosmo-text">
              AUTOMATE
            </div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-2 kid-cosmo-text">
              REAL ESTATE
            </div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-display font-black kid-cosmo-text flex items-center">
              LEADS <span className="ml-3 text-5xl text-retro-neon-blue neon-text animate-pulse">★</span>
            </div>
            {/* Angled line through headline - like the Kid Cosmo image */}
            <div className="absolute left-0 w-full h-[4px] bg-retro-neon-pink shadow-neon-pink transform -rotate-6 translate-y-[-60%]"></div>
          </h1>
          
          {/* Description card */}
          <div className="rounded-xl border border-retro-bright p-6 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-10">
            <p className="text-white text-lg">
              Stop chasing leads manually! LeadQuest helps real estate professionals set up <span className="text-retro-neon-pink font-bold neon-text-sm">totally radical</span> follow-up sequences that convert more prospects into clients.
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              className="bg-retro-gradient-pink text-white px-8 py-6 font-bold uppercase rounded-lg shadow-neon-pink transition-all duration-300 transform hover:scale-105 text-lg"
              onClick={() => window.location.href = '#signup'}
            >
              <Star className="mr-2 h-6 w-6" /> Start Your Quest
            </Button>
            <Button 
              className="bg-retro-neon-blue text-white px-8 py-6 font-bold uppercase rounded-lg shadow-neon-blue transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Play className="mr-2 h-6 w-6" /> Watch Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-purple"></div>
              <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-pink"></div>
              <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-blue"></div>
            </div>
            <div className="ml-4 font-bold text-white px-4 py-2 border border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm">
              Trusted by <span className="text-retro-neon-pink neon-text-sm">2,500+</span> real estate agents
            </div>
          </div>
        </div>
        
        {/* Right Column - Gameboy Terminal */}
        <div className="md:w-6/12 w-full relative md:mt-0 mt-12">
          {/* Game console with exact design from screenshot */}
          <div className="relative max-w-md mx-auto transform rotate-2">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl bg-retro-neon-blue opacity-30 blur-xl"></div>
            
            {/* Console body */}
            <div className="relative rounded-2xl bg-retro-dark border-2 border-retro-neon-blue shadow-neon-blue overflow-hidden">
              {/* Header bar */}
              <div className="bg-retro-gradient-purple p-3 flex justify-between items-center">
                <div className="font-retro text-white uppercase tracking-wide">
                  LEADQUEST.EXE
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-retro-neon-blue"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-neon-blue"></div>
                </div>
              </div>
              
              {/* Game screen - based exactly on screenshot */}
              <div className="p-6">
                <div className="bg-retro-dark-blue border border-retro-bright p-6 rounded-lg">
                  {/* Screen elements */}
                  <div className="flex justify-between items-center mb-6 border-b border-retro-bright pb-3">
                    <span className="font-retro text-retro-neon-green text-lg">LEAD SYSTEM v1.0</span>
                    <span className="font-retro text-retro-neon-yellow text-lg animate-blink">ONLINE</span>
                  </div>
                  
                  <div className="font-retro text-xl">
                    <div className="mb-4 flex justify-between">
                      <span className="text-retro-neon-green">NEW LEADS:</span>
                      <span className="text-retro-neon-yellow">12</span>
                    </div>
                    <div className="mb-4 flex justify-between">
                      <span className="text-retro-neon-green">FOLLOW-UPS:</span>
                      <span className="text-retro-neon-yellow">24</span>
                    </div>
                    <div className="mb-4 flex justify-between">
                      <span className="text-retro-neon-green">CONVERSIONS:</span>
                      <span className="text-retro-neon-yellow">8</span>
                    </div>
                    <div className="h-[1px] w-full bg-retro-bright opacity-30 my-4"></div>
                    <div className="flex items-center text-retro-teal">
                      <span className="animate-blink mr-2">▶</span>
                      <span>Ready for next command...</span>
                    </div>
                  </div>
                </div>
                
                {/* Control panel with buttons */}
                <div className="flex items-center justify-between mt-4">
                  <div className="px-4 py-3 bg-retro-neon-blue rounded-md shadow-neon-blue font-retro text-white uppercase text-sm">
                    90s MODE ACTIVE
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 rounded-full bg-[#8A2BE2] border-2 border-white flex items-center justify-center text-white font-bold shadow-neon-purple">A</button>
                    <button className="w-10 h-10 rounded-full bg-[#FF1493] border-2 border-white flex items-center justify-center text-white font-bold shadow-neon-pink">B</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Diagonal neon light beams */}
            <div className="absolute -bottom-8 -right-8 w-40 h-3 bg-retro-neon-pink rounded-full blur-sm transform rotate-45"></div>
            <div className="absolute -top-8 -left-8 w-40 h-3 bg-retro-neon-blue rounded-full blur-sm transform -rotate-45"></div>
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute -bottom-20 left-20 text-4xl text-retro-neon-yellow animate-float">★</div>
          <div className="absolute top-0 right-10 w-16 h-16 rounded-full border-2 border-retro-neon-pink opacity-50 animate-pulse-strong"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
