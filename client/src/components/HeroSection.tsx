import { Button } from '@/components/ui/button';
import { Star, ChevronRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 pb-24 px-4 relative overflow-hidden bg-retro-dark">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:40px_40px] opacity-30"></div>
      
      {/* Neon lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-retro-purple shadow-neon-purple"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-retro-blue shadow-neon-blue"></div>
      <div className="absolute top-1/3 -left-20 w-[500px] h-[2px] bg-retro-neon-pink transform rotate-45 shadow-neon-pink opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[2px] bg-retro-neon-blue transform -rotate-45 shadow-neon-blue opacity-50"></div>
      
      {/* Animated stars */}
      <div className="absolute top-10 left-10 text-retro-neon-yellow text-xl animate-pulse">★</div>
      <div className="absolute top-20 right-20 text-retro-neon-pink text-2xl animate-pulse-strong">★</div>
      <div className="absolute bottom-20 left-1/4 text-retro-neon-blue text-xl animate-pulse">★</div>
      <div className="absolute top-1/3 right-1/4 text-retro-neon-green text-2xl animate-pulse-strong">★</div>
      
      {/* Animated circles */}
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border-2 border-retro-bright opacity-10 animate-pulse-strong"></div>
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full border border-retro-pink-light opacity-10 animate-float"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-16 md:mb-0">
          {/* Retro badge */}
          <div className="inline-block mb-8 px-3 py-2 bg-retro-blue rounded shadow-neon-blue animate-pulse-strong">
            <span className="text-white font-retro text-sm uppercase tracking-widest">New 90s Edition</span>
          </div>
          
          {/* Main heading with retro styling */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            <span className="block mb-2 text-white">AUTOMATE</span>
            <span className="block mb-2 text-retro-pink-light neon-text">REAL ESTATE</span>
            <span className="block text-retro-neon-blue neon-text">LEADS <span className="inline-block animate-pulse">★</span></span>
          </h1>
          
          <div className="retro-card mb-8 group hover:shadow-neon-purple transition-all duration-500">
            <p className="text-white text-lg mb-0">
              Stop chasing leads manually! LeadQuest helps real estate professionals set up <span className="text-retro-neon-pink font-bold neon-text-sm">totally radical</span> follow-up sequences that convert more prospects into clients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-retro-gradient-pink text-white px-8 py-4 font-bold uppercase rounded shadow-neon-pink transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '#signup'}
            >
              <Star className="mr-2 h-5 w-5" /> Start Your Quest
            </Button>
            <Button 
              className="bg-retro-gradient-blue text-white px-8 py-4 font-bold uppercase rounded shadow-neon-blue transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
          
          <div className="mt-10 flex items-center">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border border-retro-bright bg-retro-gradient-purple"></div>
              <div className="w-10 h-10 rounded-full border border-retro-bright bg-retro-gradient-pink"></div>
              <div className="w-10 h-10 rounded-full border border-retro-bright bg-retro-gradient-blue"></div>
            </div>
            <p className="ml-3 font-bold text-white px-3 py-1 bg-retro-card border border-retro-bright rounded">
              Trusted by <span className="text-retro-neon-pink neon-text-sm">2,500+</span> rad agents!
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          {/* Game console with retro design */}
          <div className="relative bg-retro-card border border-retro-bright p-6 rounded-lg shadow-neon-blue">
            {/* Scan line effect */}
            <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
              <div className="w-full h-2 bg-retro-teal opacity-10 animate-scan-line"></div>
            </div>
            
            {/* Header bar */}
            <div className="bg-retro-gradient-purple rounded-t-lg p-2 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-retro-neon-pink mr-2"></div>
                <span className="font-retro text-white text-sm">LEADQUEST.EXE</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-retro-bright"></div>
                <div className="w-3 h-3 rounded-full bg-retro-bright"></div>
              </div>
            </div>
            
            {/* Game screen */}
            <div className="bg-retro-dark-blue p-4 rounded mb-4 border border-retro-bright">
              {/* Screen elements */}
              <div className="flex justify-between items-center mb-6 border-b border-retro-bright pb-3">
                <span className="font-retro text-retro-neon-green">LEAD SYSTEM v1.0</span>
                <span className="font-retro text-retro-neon-yellow animate-blink">ONLINE</span>
              </div>
              
              <div className="font-retro text-retro-bright mb-6">
                <div className="mb-2 flex justify-between">
                  <span className="text-retro-neon-green">NEW LEADS:</span>
                  <span className="text-retro-neon-yellow">12</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-retro-neon-green">FOLLOW-UPS:</span>
                  <span className="text-retro-neon-yellow">24</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-retro-neon-green">CONVERSIONS:</span>
                  <span className="text-retro-neon-yellow">8</span>
                </div>
                <div className="h-1 w-full bg-retro-bright opacity-20 my-3"></div>
                <div className="flex items-center">
                  <span className="animate-blink mr-2">▶</span>
                  <span className="typing-effect text-retro-teal">Ready for next command...</span>
                </div>
              </div>
            </div>
            
            {/* Control panel */}
            <div className="flex items-center justify-between">
              <div className="px-3 py-2 bg-retro-gradient-teal rounded text-white font-retro text-xs animate-pulse-strong neon-text-sm">
                <span>90s MODE ACTIVE</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-retro-purple border border-retro-bright flex items-center justify-center text-white">A</button>
                <button className="w-8 h-8 rounded-full bg-retro-pink border border-retro-bright flex items-center justify-center text-white">B</button>
              </div>
            </div>
          </div>
          
          {/* Retro decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-2 bg-retro-neon-pink rounded-full shadow-neon-pink transform rotate-45"></div>
          <div className="absolute -top-4 -left-4 w-24 h-2 bg-retro-neon-blue rounded-full shadow-neon-blue transform -rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
