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
          {/* 90s Mode Badge as eyebrow copy */}
          <div className="inline-block px-4 py-2 bg-retro-neon-blue rounded-md shadow-neon-blue font-retro text-white uppercase text-xs mb-4">
            90s MODE ACTIVE
          </div>

          {/* Main heading with Kid Cosmo chrome style */}
          <h1 className="mb-6 relative">
            <div className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-tight">
              <div className="mb-4 kid-cosmo-text">IT'S NOT THE 90'S ANYMORE...</div>
              <div className="flex items-center kid-cosmo-text">STOP FOLLOWING UP LIKE IT <span className="ml-3 text-4xl text-retro-neon-blue neon-text animate-pulse">★</span></div>
            </div>
            {/* Angled line through headline - like the Kid Cosmo image */}
            <div className="absolute left-0 w-full h-[4px] bg-retro-neon-pink shadow-neon-pink transform -rotate-6 translate-y-[-60%]"></div>
          </h1>

          {/* Description card - More compact for above-the-fold visibility */}
          <div className="rounded-xl border border-retro-bright p-4 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-6">
            <p className="text-white text-lg">
              Get a personalized 15-day follow-up system that delivers custom scripts, emails, and texts proven to boost response rates by up to <span className="text-retro-neon-pink font-bold neon-text-sm">247%</span>.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              className="bg-retro-gradient-pink text-white px-8 py-6 font-bold uppercase rounded-lg shadow-neon-pink transition-all duration-300 transform hover:scale-105 text-lg"
              onClick={() => window.location.href = '#signup'}
            >
              <Star className="mr-2 h-6 w-6" /> GET YOUR FREE SEQUENCE
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
          {/* Gameboy Console */}
          <div className="gameboy-container">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl bg-retro-neon-blue opacity-30 blur-xl"></div>

            <div className="gameboy-body transform rotate-2 glow-container">
              <div className="gameboy-screen-area">
                <div className="gameboy-power-led"></div>
                <div className="gameboy-screen crt-screen">
                  {/* Terminal Content */}
                  <div className="font-retro text-xl h-full flex flex-col">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                      <span className="neon-text-primary">LEAD SYSTEM v1.0</span>
                      <span className="text-yellow-300 animate-blink">ONLINE</span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">NEW LEADS:</span>
                        <span className="text-yellow-300">12</span>
                      </div>
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">FOLLOW-UPS:</span>
                        <span className="text-yellow-300">24</span>
                      </div>
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">CONVERSIONS:</span>
                        <span className="text-yellow-300">8</span>
                      </div>
                      <div className="my-3 h-[1px] w-full bg-gray-700 opacity-30"></div>
                      <div className="flex items-center text-green-300">
                        <span className="animate-blink mr-2">▶</span>
                        <span>Ready for next command...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gameboy-controls">
                <div className="gameboy-dpad">
                  <div className="dpad-up"></div>
                  <div className="dpad-right"></div>
                  <div className="dpad-down"></div>
                  <div className="dpad-left"></div>
                  <div className="dpad-center"></div>
                </div>
                <div className="gameboy-buttons">
                  <div className="btn-a">A</div>
                  <div className="btn-b">B</div>
                </div>
              </div>

              <div className="gameboy-options">
                <div className="btn-select">SELECT</div>
                <div className="btn-start">START</div>
              </div>

              <div className="gameboy-speaker">
                <div className="speaker-line"></div>
                <div className="speaker-line"></div>
                <div className="speaker-line"></div>
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