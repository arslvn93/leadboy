import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero bg-[#051736] min-h-screen relative overflow-hidden">
      <div className="hero-container flex flex-col justify-center h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <div className="logo-container mb-8">
              <div className="pixel-border inline-block p-2 bg-[#051736] border-4 border-[#00ffff]">
                <span className="font-press-start text-2xl text-[#00ffff]">LEAD<span className="text-[#5affbc]">BOY</span></span>
                <p className="text-xs text-white mt-1 text-right">by salesgenius</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-press-start text-white leading-tight">
              It's not the 90s anymore...<br/>
              stop following up like it
            </h1>

            <div className="mt-10">
              <Button
                className="bg-retro-gradient-pink text-white px-8 py-6 font-bold uppercase rounded-lg shadow-neon-pink transition-all duration-300 transform hover:scale-105 text-lg"
                onClick={() => window.location.href = '#signup'}
              >
                <Star className="mr-2 h-6 w-6" /> CLICK HERE TO BUILD YOUR FREE SEQUENCE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;