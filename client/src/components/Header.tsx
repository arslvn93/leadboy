import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Star, Zap } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to generate a random rotation for the 90s effect
  const randomRotation = () => {
    const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  return (
    <header className="bg-[#FF00FF] border-b-4 border-black px-4 py-4 sticky top-0 z-50 shadow-[0_4px_0_#000]">
      {/* Pattern background for header */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.5' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo area */}
        <div className="flex items-center">
          <div className="bg-yellow-300 border-4 border-black transform rotate-6 p-0.5 mr-2">
            <div className="bg-black text-white p-0.5 font-bold text-xs">90s</div>
          </div>
          <div className="relative">
            <div className="text-white text-xl font-pixel drop-shadow-[2px_2px_0_#000] tracking-widest text-sm md:text-xl">
              LEAD<span className="text-yellow-300">QUEST</span>
            </div>
            
            {/* Retro shine effect */}
            <div className="absolute -top-1 left-0 w-full h-1 bg-white opacity-30"></div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Features', 'How It Works', 'Testimonials'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className={`relative transform ${randomRotation()} group`}
            >
              <div className="bg-white border-2 border-black px-3 py-1 text-black font-bold hover:bg-yellow-300 transition-colors duration-200 uppercase text-sm">
                {item}
                <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-black bg-cyan-300 -z-10"></div>
              </div>
            </a>
          ))}
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Button 
            className="bg-yellow-300 text-black font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] text-sm md:text-base relative group"
            onClick={() => window.location.href = '#signup'}
          >
            <Zap className="w-4 h-4 mr-1 group-hover:animate-bounce" />
            Start Free
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00FFFF] border-2 border-black transform rotate-45 hidden md:block"></div>
          </Button>
          
          <button 
            className="md:hidden text-white bg-black border-2 border-white p-1 rounded"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FF00FF] py-6 px-4 absolute top-full left-0 right-0 border-b-4 border-black z-40">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0wIDBoMXY0MGgtMXpNMzkgMGgxdjQwaC0xek0wIDBoNDB2MWgtNDB6TTAgMzloNDB2MWgtNDB6IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
          
          <nav className="flex flex-col space-y-6 relative z-10">
            {['Features', 'How It Works', 'Testimonials'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="transform hover:scale-105 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className={`inline-block bg-white border-2 border-black px-3 py-2 text-black font-bold transform ${randomRotation()}`}>
                  {item}
                </div>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
