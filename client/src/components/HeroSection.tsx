import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { smoothScrollTo } from '../lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="hero" className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 relative overflow-hidden bg-retro-dark">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:40px_40px] opacity-30"></div>

      {/* Diagonal neon lines - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-1 bg-retro-purple shadow-neon-purple"></div>
      <div className="hidden md:block absolute -top-20 right-40 w-[800px] h-[2px] bg-retro-neon-blue transform rotate-45 shadow-neon-blue opacity-50"></div>
      <div className="hidden md:block absolute bottom-0 -right-20 w-[400px] h-[2px] bg-retro-neon-pink transform -rotate-45 shadow-neon-pink opacity-60"></div>

      {/* VHS distortion lines - horizontal scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-retro-neon-blue opacity-5 animate-scan-line"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Column - Headline and CTA */}
        <div className="md:w-5/12 mb-8 md:mb-0">
          {/* Eyebrow copy badge - pill style for mobile */}
          <div className="inline-block px-4 py-2 bg-retro-bright rounded-full shadow-neon-blue font-bold uppercase text-xs sm:text-sm mb-4 text-retro-dark">
            FREE AI TOOL FOR MODERN AGENTS
          </div>

          {/* Clean heading with adjusted size - more compact */}
          <h1 className="mb-4 md:mb-6 relative">
            <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-wide">
              <div>IT'S NOT THE</div>
              <div>90'S ANYMORE...</div>
              <div className="flex flex-wrap items-center">
                <span>STOP FOLLOWING </span>
                <span>UP LIKE IT...</span>
                <span className="ml-1 text-2xl text-retro-neon-blue neon-text animate-pulse">★</span>
              </div>
            </div>
          </h1>

          {/* Condensed description - Simplified for mobile, with key highlights only */}
          {isMobile ? (
            <div className="rounded-xl border border-retro-bright p-3 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-5">
              <p className="text-white text-base leading-relaxed">
                Try <span className="text-retro-neon-green font-bold">LeadBoy</span> for <span className="text-retro-neon-pink font-bold">FREE!</span> Our <span className="text-retro-neon-yellow font-bold">Brand NEW</span> AI Tool builds <span className="italic">personalized 15-day nurture campaigns</span> with automated texts, emails, and call scripts.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-retro-bright p-4 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-6">
              <p className="text-white text-lg leading-relaxed">
                Try <span className="text-retro-neon-green font-bold text-xl">LeadBoy</span> for <span className="text-retro-neon-pink font-bold">FREE!</span> Our <span className="text-retro-neon-yellow italic font-semibold">Brand NEW</span> AI Tool builds <span className="italic">personalized 15-day nurture campaigns</span> for your real estate leads. <span className="text-retro-bright font-semibold">Stop wasting time</span> on manual follow-ups and <span className="text-retro-neon-blue italic font-semibold">start closing more deals</span> with automated texts, emails, and call scripts.
              </p>
            </div>
          )}

          {/* Call to action button - larger and more prominent */}
          <div className="flex flex-col mb-6">
            <div className="w-full mb-1">
              <Button 
                className="bg-retro-gradient-pink text-white px-6 py-5 font-bold uppercase rounded-full shadow-neon-pink transition-all duration-300 transform hover:scale-105 text-lg md:text-xl whitespace-normal text-center w-full"
                onClick={() => smoothScrollTo('signup')}
              >
                <Star className="mr-2 h-5 w-5 flex-shrink-0" /> 
                <span>TRY LEADBOY FOR FREE</span>
              </Button>
            </div>
            <div className="text-center w-full mb-3">
              <span className="text-retro-bright text-xs font-medium inline-flex items-center">
                <span className="mr-1 text-retro-neon-green">✓</span> No Credit Card Required
              </span>
            </div>
          </div>

          {/* Social proof - simplified for mobile */}
          {isMobile ? (
            <div className="flex flex-col gap-3">
              {/* Trusted by - simplified */}
              <div className="flex items-center justify-center">
                <div className="px-4 py-2 border border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm text-center">
                  <span className="font-bold text-white text-sm">Trusted by <span className="text-retro-neon-pink neon-text-sm">2,500+</span> agents</span>
                </div>
              </div>
              
              {/* Response rate badge - simplified */}
              <div className="flex items-center justify-center">
                <div className="px-4 py-2 border border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green text-center">
                  <span className="text-white text-sm">Response rates <span className="text-retro-neon-pink font-bold">↑</span> by up to <span className="text-retro-neon-pink font-black">247%</span></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Trusted by */}
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
              
              {/* Response rate badge */}
              <div className="flex items-center">
                <div className="px-4 py-3 border-2 border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green">
                  <div className="flex items-center">
                    <div className="text-retro-neon-green text-2xl mr-2 animate-pulse">★</div>
                    <div>
                      <span className="font-bold text-white">Proven to increase response rates by up to </span>
                      <span className="text-retro-neon-pink font-black neon-text-sm text-xl">247%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Gameboy Terminal - Hidden on small screens, simplified on medium */}
        <div className="md:w-6/12 w-full relative md:mt-0 hidden md:block">
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
                      <span className="neon-text-green">LEADBOY AI v1.0</span>
                      <span className="text-yellow-300 animate-blink">ONLINE</span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">NEW LEADS:</span>
                        <span className="text-yellow-300">12</span>
                      </div>
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">SEQUENCES:</span>
                        <span className="text-yellow-300">15</span>
                      </div>
                      <div className="mb-3 flex justify-between">
                        <span className="text-green-400">CONVERSIONS:</span>
                        <span className="text-yellow-300">8</span>
                      </div>
                      <div className="my-3 h-[1px] w-full bg-gray-700 opacity-30"></div>
                      <div className="flex items-center text-green-300">
                        <span className="animate-blink mr-2">▶</span>
                        <span>AI Assistant ready...</span>
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