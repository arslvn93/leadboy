import { Button } from '@/components/ui/button';
import { Star, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#00FFFF] border-b-8 border-black">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0wIDBoMXY0MGgtMXpNMzkgMGgxdjQwaC0xek0wIDBoNDB2MWgtNDB6TTAgMzloNDB2MWgtNDB6IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#FF00FF] rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white transform rotate-45 animate-spin"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <div className="inline-block mb-4 px-2 py-1 bg-yellow-300 border-4 border-black transform -rotate-2">
            <span className="text-black font-bold text-sm uppercase">New & Rad!</span>
          </div>
          
          <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-black drop-shadow-[2px_2px_0_#ffffff] mb-8 leading-relaxed">
            <span className="block mb-2">AUTOMATE</span>
            <span className="block mb-2 text-[#FF00FF] drop-shadow-[2px_2px_0_#000000]">REAL ESTATE</span>
            <span className="block">LEADS! <span className="animate-pulse">★</span></span>
          </h1>
          
          <div className="bg-white border-4 border-black p-6 mb-8 transform rotate-1 shadow-[6px_6px_0_#000]">
            <p className="text-black font-bold mb-0">
              Stop chasing leads manually! LeadQuest helps real estate professionals set up <span className="text-[#FF00FF] font-extrabold">totally radical</span> follow-up sequences that convert more prospects into clients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-[#FF00FF] text-white px-8 py-4 font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] tracking-wide"
              onClick={() => window.location.href = '#signup'}
            >
              <Star className="mr-2 h-5 w-5" /> Start Your Quest
            </Button>
            <Button 
              className="bg-yellow-300 text-black px-8 py-4 font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] tracking-wide"
            >
              <Zap className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
          
          <div className="mt-10 flex items-center">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-r from-yellow-300 to-orange-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-r from-[#00FFFF] to-blue-500"></div>
            </div>
            <p className="ml-3 font-bold text-black bg-white px-2 border-2 border-black transform -rotate-2">Trusted by <span className="text-[#FF00FF]">2,500+</span> rad agents!</p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="bg-black border-8 border-black rounded-xl p-8 transform rotate-2 shadow-[8px_8px_0_#FF00FF]">
            <div className="bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] p-2 rounded-md">
              <div className="bg-black p-4 rounded mb-8">
                <div className="h-6 bg-green-400 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-yellow-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-[#00FFFF] rounded w-1/3"></div>
              </div>
              
              <div className="bg-black rounded p-6">
                <div className="font-pixel text-sm text-green-400">
                  <p className="mb-3">WELCOME AGENT!</p>
                  <div className="flex justify-between mb-3">
                    <span>NEW LEADS:</span>
                    <span className="text-yellow-300">12</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span>FOLLOW-UPS:</span>
                    <span className="text-yellow-300">24</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span>CONVERSIONS:</span>
                    <span className="text-yellow-300">8</span>
                  </div>
                  <p className="animate-blink inline-block">▶</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="px-6 py-2 bg-[#00FFFF] border-4 border-black rounded-full font-pixel text-black">
                LEVEL 1: LEAD NURTURE
              </div>
            </div>
          </div>
          
          {/* Decorative 90s elements */}
          <div className="absolute -bottom-10 -left-10 w-20 h-6 bg-yellow-300 border-4 border-black transform rotate-45"></div>
          <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full border-4 border-dashed border-black bg-transparent animate-spin"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
