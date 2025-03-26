import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { smoothScrollTo } from '../lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import GameBoyConsole from './GameBoyConsole';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="hero" className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 relative overflow-hidden bg-retro-dark-purple">
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
          <div className="inline-block px-4 py-2 bg-retro-bright rounded-full shadow-neon-blue font-bold uppercase text-xs sm:text-sm mb-6 text-retro-dark">
            FREE AI TOOL FOR MODERN AGENTS
          </div>

          {/* Clean heading with adjusted size - more compact */}
          <h1 className="mb-5 md:mb-6 relative hero-headline">
            {isMobile ? (
              <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-wide">
                <div className="text-retro-neon-green neon-text-sm">IT'S NOT THE 90'S,</div>
                <div className="flex flex-wrap items-center mt-1">
                  <span>STOP FOLLOWING UP LIKE IT...</span>
                  <span className="ml-1 text-2xl text-retro-neon-blue neon-text animate-pulse">★</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-wide">
                <div>IT'S NOT THE</div>
                <div>90'S ANYMORE...</div>
                <div className="flex flex-wrap items-center">
                  <span>STOP FOLLOWING </span>
                  <span>UP LIKE IT...</span>
                  <span className="ml-1 text-2xl text-retro-neon-blue neon-text animate-pulse">★</span>
                </div>
              </div>
            )}
          </h1>

          {/* Condensed description - Simplified for mobile, with key highlights only */}
          {isMobile ? (
            <div className="rounded-xl border border-retro-bright p-3 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-5 hero-subheadline">
              <p className="text-white text-base leading-relaxed">
                Try <span className="text-retro-neon-green font-bold">LeadBoy</span> for <span className="text-retro-neon-pink font-bold">FREE!</span> Our <span className="text-retro-neon-yellow font-bold">Brand NEW</span> AI Tool builds <span className="italic">personalized 15-day nurture campaigns</span> with automated texts, emails, and call scripts.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-retro-bright p-4 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-6 hero-subheadline">
              <p className="text-white text-lg leading-relaxed">
                Try <span className="text-retro-neon-green font-bold text-xl">LeadBoy</span> for <span className="text-retro-neon-pink font-bold">FREE!</span> Our <span className="text-retro-neon-yellow italic font-semibold">Brand NEW</span> AI Tool builds <span className="italic">personalized 15-day nurture campaigns</span> for your real estate leads. <span className="text-retro-bright font-semibold">Stop wasting time</span> on manual follow-ups and <span className="text-retro-neon-blue italic font-semibold">start closing more deals</span> with automated texts, emails, and call scripts.
              </p>
            </div>
          )}

          {/* Call to action button - larger and more prominent */}
          <div className="flex flex-col mb-6">
            <div className="w-full mb-1">
              <Button 
                className="cta-button bg-retro-gradient-pink text-white px-4 py-3 md:px-6 md:py-5 font-bold uppercase rounded-full shadow-neon-pink transition-all duration-300 transform hover:scale-105 text-base md:text-xl whitespace-normal text-center w-full"
                onClick={() => smoothScrollTo('signup')}
              >
                <Star className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /> 
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
            <div className="flex flex-col gap-3 trust-container">
              {/* Trusted by - simplified */}
              <div className="flex items-center justify-center trust-item">
                <div className="px-4 py-2 border border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm text-center">
                  <span className="font-bold text-white text-sm">Trusted by <span className="text-retro-neon-pink neon-text-sm">2,500+</span> agents</span>
                </div>
              </div>
              
              {/* Response rate badge - simplified */}
              <div className="flex items-center justify-center trust-item">
                <div className="px-4 py-2 border border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green text-center">
                  <span className="text-white text-sm">Response rates <span className="text-retro-neon-pink font-bold">↑</span> by up to <span className="text-retro-neon-pink font-black">247%</span></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 trust-container">
              {/* Trusted by */}
              <div className="flex items-center trust-item">
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
              <div className="flex items-center trust-item">
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

        {/* Right Column - Modern GameBoy Console */}
        <div className="md:w-6/12 w-full relative md:mt-0 mt-8">
          {/* Star decorations */}
          <div className="absolute -bottom-16 left-12 text-3xl text-retro-neon-yellow animate-float z-20">★</div>
          <div className="absolute top-0 right-8 w-12 h-12 rounded-full border-2 border-retro-neon-pink opacity-50 animate-pulse-strong z-20"></div>
          
          {/* GameBoy Component */}
          <GameBoyConsole leads={12} sequences={15} conversions={8} />
          
          {/* Diagonal neon light beams */}
          <div className="absolute -bottom-8 -right-8 w-40 h-2 bg-retro-neon-pink rounded-full blur-md transform rotate-45 opacity-50 z-10"></div>
          <div className="absolute -top-8 -left-8 w-40 h-2 bg-retro-neon-blue rounded-full blur-md transform -rotate-45 opacity-50 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;