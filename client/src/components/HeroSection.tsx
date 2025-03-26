import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { smoothScrollTo } from '../lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import GameBoyConsole from './GameBoyConsole';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="hero" className="pt-2 pb-4 md:pt-8 md:pb-16 px-4 relative overflow-hidden bg-retro-dark-purple -mt-4 md:mt-0">
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

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between relative z-10 pt-0 md:pt-6">
        {/* Left Column - Headline and CTA */}
        <div className="md:w-5/12 mb-0 md:mb-0 mt-0 pt-0">
          {/* Eyebrow copy badge - pill style for mobile */}
          <div className={`${isMobile ? 'flex justify-center w-full' : 'inline-block'} ${isMobile ? 'mb-3 mt-3' : 'mb-5'} free-ai-tool pill-headline eyebrow-container`}>
            <div className={`${isMobile ? 'px-5 py-1.5' : 'px-4 py-2'} bg-retro-bright rounded-full shadow-neon-blue font-bold uppercase ${isMobile ? 'text-[11px]' : 'text-xs sm:text-sm'} text-retro-dark text-center cyan-pill`}>
              FREE AI TOOL FOR MODERN AGENTS
            </div>
          </div>

          {/* Clean heading with adjusted size - more compact and cohesive */}
          <h1 className="mb-1 md:mb-2 relative hero-headline">
            {isMobile ? (
              <div className="flex flex-col text-[1.6rem] font-bold text-white leading-tight tracking-wide text-center">
                <div className="text-retro-neon-green neon-text-sm text-shadow-neon-green mb-0">STILL CHASING LEADS LIKE IT'S 1995?</div>
                <div className="text-white">
                  Get 15 Days of <span className="text-retro-neon-pink text-shadow-neon-pink">FREE</span> Custom Texts, Emails & Call Scripts from Our AI Tool in 60 Seconds <span className="text-xl text-retro-neon-blue neon-text animate-pulse align-middle">★</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-wide">
                <div className="text-retro-neon-green neon-text-sm text-shadow-neon-green mb-1">STILL CHASING LEADS LIKE IT'S 1995?</div>
                <div>
                  Get 15 Days of <span className="text-retro-neon-pink text-shadow-neon-pink">FREE</span> Custom Texts, Emails & Call Scripts
                </div>
                <div>
                  From Our AI Tool - in 60 Seconds! <span className="ml-1 text-2xl text-retro-neon-blue neon-text animate-pulse">★</span>
                </div>
              </div>
            )}
          </h1>

          {/* Condensed description - More compact for mobile */}
          {isMobile ? (
            <div className="rounded-lg border-2 border-retro-bright p-2 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-2 hero-subheadline shadow-neon-blue">
              <p className="text-white text-[0.85rem] leading-tight text-center">
                Tell us how you met your lead <span className="text-retro-neon-green font-semibold">(open house, online, referral)</span> and in just <span className="text-retro-neon-pink font-bold">3 minutes</span>, get <span className="text-retro-neon-yellow font-bold">15 days</span> of ready-to-use texts, emails, and call scripts that sound like you wrote them - all for <span className="text-retro-neon-pink font-bold text-shadow-neon-pink">FREE!</span>
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-retro-bright p-3 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-4 hero-subheadline">
              <p className="text-white text-lg leading-relaxed">
                Tell us how you met your lead <span className="text-retro-neon-green font-semibold">(open house, online, referral)</span> and in just <span className="text-retro-neon-pink font-bold">3 minutes</span>, get <span className="text-retro-neon-yellow font-semibold">15 days</span> of <span className="italic">ready-to-use texts, emails, and call scripts</span> that sound like you wrote them - <span className="text-retro-bright font-semibold">all for</span> <span className="text-retro-neon-pink font-bold text-shadow-neon-pink">FREE!</span>
              </p>
            </div>
          )}

          {/* Call to action button - better sized for mobile now that we have more space */}
          <div className="flex flex-col mb-1 mt-1">
            <div className="w-full mb-1">
              <Button 
                className={`cta-button bg-retro-gradient-pink text-white ${isMobile ? 'px-4 py-3 text-base' : 'px-4 py-3 md:px-6 md:py-5 text-base md:text-xl'} font-bold uppercase rounded-full shadow-neon-pink transition-all duration-300 transform hover:scale-105 whitespace-normal text-center w-full`}
                onClick={() => smoothScrollTo('signup')}
              >
                <Star className={`${isMobile ? 'mr-2 h-4 w-4 animate-pulse' : 'mr-2 h-4 w-4 md:h-5 md:w-5'} flex-shrink-0 text-retro-neon-blue`} /> 
                <span className={isMobile ? 'text-shadow-neon-pink' : ''}>{isMobile ? 'TRY FREE' : 'TRY LEADBOY FOR FREE'}</span>
              </Button>
            </div>
            <div className="text-center w-full mb-1">
              <span className={`text-retro-bright ${isMobile ? 'text-[11px]' : 'text-xs'} font-medium ${isMobile ? 'flex justify-center' : 'inline-flex'} items-center`}>
                <span className="mr-1 text-retro-neon-green animate-pulse">✓</span> No Credit Card Required
              </span>
            </div>
          </div>

          {/* Social proof - simplified for mobile but slightly larger since we have more space */}
          {isMobile ? (
            <div className="flex flex-col items-center justify-center gap-0 trust-container mb-1">
              {/* Trusted by - simplified */}
              <div className="flex items-center justify-center trust-item trusted-by-container">
                <div className="px-3 py-1 border-2 border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm text-center shadow-neon-blue">
                  <span className="font-bold text-white text-[12px]">Trusted by <span className="text-retro-neon-pink text-shadow-neon-pink animate-pulse">2,500+</span> agents</span>
                </div>
              </div>
              
              {/* Response rate badge - simplified */}
              <div className="flex items-center justify-center trust-item response-container mt-[-15px]">
                <div className="px-3 py-1 border-2 border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green text-center">
                  <span className="text-white text-[12px]">Response rates <span className="text-retro-neon-pink font-bold">↑</span> by up to <span className="text-retro-neon-pink font-black text-shadow-neon-pink animate-pulse">247%</span></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 trust-container mb-6">
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

        {/* Right Column - Modern GameBoy Console - improved positioning for mobile */}
        <div className={`md:w-6/12 w-full relative ${isMobile ? 'mt-0 pt-0' : 'md:mt-0'}`}>
          {/* Star decorations - hidden on mobile */}
          {!isMobile && (
            <>
              <div className="absolute -bottom-16 left-12 text-3xl text-retro-neon-yellow animate-float z-20">★</div>
              <div className="absolute top-0 right-8 w-12 h-12 rounded-full border-2 border-retro-neon-pink opacity-50 animate-pulse-strong z-20"></div>
            </>
          )}
          
          {/* GameBoy Component with reduced bottom margin on mobile and moved up more */}
          <div className={isMobile ? 'transform -translate-y-14' : ''}>
            <GameBoyConsole leads={12} sequences={15} conversions={8} />
          </div>
          
          {/* Diagonal neon light beams - reduced on mobile */}
          <div className={`absolute -bottom-8 -right-8 ${isMobile ? 'w-20' : 'w-40'} h-2 bg-retro-neon-pink rounded-full blur-md transform rotate-45 opacity-50 z-10`}></div>
          <div className={`absolute -top-8 -left-8 ${isMobile ? 'w-20' : 'w-40'} h-2 bg-retro-neon-blue rounded-full blur-md transform -rotate-45 opacity-50 z-10`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;