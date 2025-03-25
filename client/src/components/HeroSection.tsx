import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="py-12 md:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-gameboy-gray-dark mb-6 leading-relaxed">
            <span className="block">AUTOMATE YOUR</span>
            <span className="block text-gameboy-green">REAL ESTATE</span>
            <span className="block">LEAD FOLLOW-UPS</span>
          </h1>
          
          <p className="text-gameboy-gray-dark mb-8 max-w-lg">
            Stop chasing leads manually. LeadQuest helps real estate professionals set up automated, personalized follow-up sequences that convert more prospects into clients.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="pixel-button bg-purple-primary text-white px-6 py-3 border-b-4 border-r-4 border-purple-dark hover:border-b-2 hover:border-r-2 transition-all font-bold rounded-none"
              onClick={() => window.location.href = '#signup'}
            >
              Start Your Quest
            </Button>
            <Button 
              className="pixel-button bg-white text-gameboy-gray-dark px-6 py-3 border-b-4 border-r-4 border-gameboy-gray hover:border-b-2 hover:border-r-2 transition-all rounded-none"
              variant="outline"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gameboy-green-light"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-200"></div>
            </div>
            <p className="ml-2 text-sm text-gameboy-gray-dark">Trusted by <span className="font-bold">2,500+</span> real estate pros</p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="gameboy-console p-6 md:p-10 max-w-md mx-auto">
            <div className="gameboy-screen p-4 mb-6">
              <div className="bg-gameboy-green-light p-4 h-48 overflow-hidden">
                <div className="font-pixel text-xs text-gameboy-gray-dark">
                  <p className="mb-2">WELCOME AGENT!</p>
                  <p className="mb-2">NEW LEADS: <span className="text-gameboy-green-dark">12</span></p>
                  <p className="mb-2">FOLLOW-UPS: <span className="text-gameboy-green-dark">24</span></p>
                  <p className="mb-2">CONVERSIONS: <span className="text-gameboy-green-dark">8</span></p>
                  <p className="animate-[blink_1s_steps(2)_infinite] inline-block">▶</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="d-pad"></div>
              
              <div className="flex space-x-4">
                <button className="w-12 h-12 rounded-full bg-gameboy-gray-dark transform rotate-45 relative">
                  <span className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-bold">A</span>
                </button>
                <button className="w-12 h-12 rounded-full bg-gameboy-gray-dark transform rotate-45 relative">
                  <span className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-bold">B</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
