import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import GameBoyConsole from './GameBoyConsole';

const DesktopHeroSection = () => {
  return (
    <section id="hero-desktop" className="pt-8 pb-16 px-4 relative overflow-hidden bg-retro-dark-purple">
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

      <div className="container mx-auto flex flex-row items-start justify-between relative z-10 pt-6">
        {/* Left Column - Headline and CTA */}
        <div className="w-5/12 mb-0">
          {/* Eyebrow copy badge */}
          <div className="inline-block mb-5 free-ai-tool pill-headline eyebrow-container">
            <div className="px-4 py-2 bg-retro-bright rounded-full shadow-neon-blue font-bold uppercase text-xs sm:text-sm text-retro-dark text-center cyan-pill">
              FREE AI TOOL FOR MODERN AGENTS
            </div>
          </div>

          {/* Clean heading */}
          <h1 className="mb-2 relative hero-headline">
            <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-wide">
              <div className="text-retro-neon-green neon-text-sm text-shadow-neon-green mb-1">STILL CHASING LEADS LIKE IT'S 1995?</div>
              <div>
                Get 15 Days of <span className="text-retro-neon-pink text-shadow-neon-pink">FREE</span> Custom Texts, Emails & Call Scripts in 3 Minutes! <span className="ml-1 text-2xl text-retro-neon-blue neon-text animate-pulse">★</span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <div className="rounded-xl border border-retro-bright p-3 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-4 hero-subheadline">
            <p className="text-white text-lg leading-relaxed">
              Tell us how you meet your leads <span className="text-retro-neon-green font-semibold">(online, referral, etc)</span> and in just <span className="text-retro-neon-pink font-bold">3 minutes</span>, our AI tool <span className="text-retro-neon-yellow font-semibold">"LeadBoy"</span> creates follow-up messages that sound like you wrote them - <span className="text-retro-bright font-semibold">ready to use</span> <span className="text-retro-neon-pink font-bold text-shadow-neon-pink">immediately!</span>
            </p>
          </div>

          {/* Call to action button */}
          <div className="flex flex-col mb-1 mt-1">
            <div className="w-full mb-1">
              <Button 
                className="cta-button bg-retro-gradient-pink text-white px-4 py-3 md:px-6 md:py-5 text-sm md:text-base font-bold uppercase rounded-full shadow-neon-pink transition-all duration-300 transform hover:scale-105 whitespace-normal text-center w-full"
                onClick={() => {
                  window.location.href = '/form.html';
                  // Only track PageView, not Lead
                  if (typeof window.fbq !== 'undefined') {
                    window.fbq('track', 'PageView');
                  }
                }}
              >
                <Star className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-retro-neon-blue" /> 
                <span className="text-sm md:text-base">CREATE FREE SCRIPTS NOW</span>
              </Button>
            </div>
            <div className="text-center w-full mb-1">
              <span className="text-retro-bright text-xs font-medium inline-flex items-center">
                <span className="mr-1 text-retro-neon-green animate-pulse">✓</span> No Credit Card Required
              </span>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 trust-container mb-6">
            {/* Trusted by */}
            <div className="flex items-center trust-item">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-purple"></div>
                <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-pink"></div>
                <div className="w-12 h-12 rounded-full border-2 border-retro-bright bg-retro-gradient-blue"></div>
              </div>
              <div className="ml-4 font-bold text-white px-4 py-2 border border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm">
                Trusted by <span className="stat-highlight">2,500+</span> real estate agents
              </div>
            </div>
            
            {/* Response rate badge */}
            <div className="flex items-center trust-item">
              <div className="px-4 py-3 border-2 border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green">
                <div className="flex items-center">
                  <div className="text-retro-neon-green text-2xl mr-2 animate-pulse">★</div>
                  <div>
                    <span className="font-bold text-white">Proven to increase response rates by up to </span>
                    <span className="stat-highlight text-xl">247%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Modern GameBoy Console */}
        <div className="w-6/12 relative md:mt-0">
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

export default DesktopHeroSection;