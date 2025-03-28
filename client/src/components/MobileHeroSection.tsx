import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import GameBoyConsole from "./GameBoyConsole";

const MobileHeroSection = () => {
  return (
    <section
      id="hero-mobile"
      className="pt-5 pb-4 px-4 relative overflow-hidden bg-retro-dark-purple -mt-4"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:40px_40px] opacity-30"></div>

      {/* VHS distortion lines - horizontal scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-retro-neon-blue opacity-5 animate-scan-line"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between relative z-10 pt-2">
        {/* SalesGenius Logo */}
        <div className="flex justify-center w-full">
          <a
            href="https://salesgenius.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/salesgenius.png"
              alt="SalesGenius"
              className="h-10 object-contain"
            />
          </a>
        </div>

        {/* Eyebrow copy badge - outline style for mobile to reduce visual prominence */}
        <div className="flex justify-center w-full mb-3 free-ai-tool pill-headline eyebrow-container">
          <div className="px-5 py-1.5 bg-transparent border border-retro-bright rounded-full font-bold uppercase text-[12px] text-retro-bright text-center">
            FREE AI TOOL FOR MODERN AGENTS
          </div>
        </div>

        {/* Clean heading with adjusted size - more compact and cohesive */}
        <h1 className="mb-1 relative hero-headline w-full">
          <div className="flex flex-col text-[1.8rem] font-bold text-white leading-tight tracking-wide text-center">
            <div
              className="text-retro-neon-green mb-1"
              style={{ textShadow: "none" }}
            >
              STILL CHASING LEADS LIKE IT'S 1995?
            </div>
            <div className="text-white">
              Get 15 Days of{" "}
              <span className="text-retro-neon-pink text-shadow-neon-pink">
                FREE
              </span>{" "}
              Custom Texts, Emails & Call Scripts in 3 Minutes!{" "}
              <span className="text-xl text-retro-neon-blue neon-text animate-pulse align-middle">
                ★
              </span>
            </div>
          </div>
        </h1>

        {/* Condensed description - More compact for mobile */}
        <div className="rounded-lg border-2 border-retro-bright p-2 bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm mb-2 hero-subheadline shadow-neon-blue w-full">
          <p className="text-white text-[0.85rem] leading-tight text-center">
            Tell us how you met your lead{" "}
            <span className="text-retro-neon-green font-semibold">
              (open house, online, referral)
            </span>{" "}
            and in just{" "}
            <span className="text-retro-neon-pink font-bold">3 minutes</span>,
            get{" "}
            <span className="text-retro-neon-yellow font-bold">15 days</span> of
            ready-to-use texts, emails, and call scripts that sound like you
            wrote them - all for{" "}
            <span className="text-retro-neon-pink font-bold text-shadow-neon-pink">
              FREE!
            </span>
          </p>
        </div>

        {/* Call to action button - enhanced with more spacing and glow effect */}
        <div className="flex flex-col mb-4 mt-4 w-full relative z-20">
          <div className="w-full mb-2 relative">
            <Button
              className="cta-button bg-retro-gradient-pink text-white px-4 py-4 text-sm font-bold uppercase rounded-full shadow-neon-pink transition-all duration-300 transform hover:scale-105 whitespace-normal text-center w-full animate-pulse-slow border-2 border-retro-neon-pink"
              onClick={() => {
                window.location.href = "/form.html";
                // Only track PageView, not Lead
                if (typeof window.fbq !== "undefined") {
                  window.fbq("track", "PageView");
                }
              }}
            >
              <Star className="mr-1 h-3 w-3 animate-pulse flex-shrink-0 text-retro-neon-blue" />
              <span className="text-shadow-neon-pink text-xs">
                CREATE FREE SCRIPTS
              </span>
            </Button>
            {/* Add subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-retro-neon-pink opacity-20 blur-md animate-pulse-slow -z-10"></div>
          </div>
          <div className="text-center w-full mb-1">
            <span className="text-retro-bright text-[11px] font-medium flex justify-center items-center">
              <span className="mr-1 text-retro-neon-green animate-pulse">
                ✓
              </span>{" "}
              No Credit Card Required
            </span>
          </div>
        </div>

        {/* Social proof - simplified for mobile but slightly larger since we have more space */}
        <div className="flex flex-col items-center justify-center gap-0 trust-container mb-1 w-full">
          {/* Trusted by - simplified */}
          <div className="flex items-center justify-center trust-item trusted-by-container w-full">
            <div className="px-3 py-1 border-2 border-retro-bright rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm text-center shadow-neon-blue">
              <span className="font-bold text-white text-[12px]">
                Trusted by{" "}
                <span className="stat-highlight animate-pulse">2,500+</span>{" "}
                agents
              </span>
            </div>
          </div>

          {/* Response rate badge - simplified */}
          <div className="flex items-center justify-center trust-item response-container mt-[-15px] w-full">
            <div className="px-3 py-1 border-2 border-retro-neon-green rounded-lg bg-retro-dark-blue bg-opacity-60 backdrop-blur-sm shadow-neon-green text-center">
              <span className="text-white text-[12px]">
                Response rates{" "}
                <span className="text-retro-neon-pink font-bold">↑</span> by up
                to <span className="stat-highlight animate-pulse">247%</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Modern GameBoy Console - improved positioning for mobile */}
        <div className="w-full relative mt-10 pt-4">
          {/* GameBoy Component with delayed glow effect */}
          <div className="transform translate-y-0">
            <GameBoyConsole leads={12} sequences={15} conversions={8} />
          </div>

          {/* No diagonal light beams on mobile initially - they would distract from CTA */}
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
