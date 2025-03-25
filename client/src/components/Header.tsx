import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Star, Zap } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-retro-dark border-b border-retro-bright px-4 py-3 sticky top-0 z-50 shadow-neon-purple">
      {/* Grid background for header */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:20px_20px] opacity-20"></div>
      
      {/* Glow line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-retro-purple shadow-neon-purple"></div>
      
      <div className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo area */}
        <div className="flex items-center">
          <div className="relative">
            {/* Chrome/gold logo similar to Kid Cosmo */}
            <div className="relative font-display font-black tracking-wider text-xl md:text-3xl transform -rotate-3">
              <span className="kid-cosmo-text">LEADBOY</span>
              <span className="text-sm block mt-1 text-retro-gray">By SalesGenius</span>
              
              {/* Angled line through text - like the Kid Cosmo image */}
              <div className="absolute top-1/2 left-0 w-full h-[3px] bg-retro-purple shadow-neon-purple transform -rotate-6 translate-y-[-2px]"></div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Features', 'How It Works', 'Testimonials'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="relative group"
            >
              <span className="text-white font-display uppercase tracking-wider text-sm transition-colors duration-300 border-b border-transparent group-hover:border-retro-neon-blue group-hover:text-retro-neon-blue group-hover:neon-text-sm">
                {item}
              </span>
            </a>
          ))}
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Button 
            className="bg-retro-gradient-blue text-white font-bold uppercase rounded px-4 py-2 shadow-neon-blue text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-neon-purple"
            onClick={() => window.location.href = '#signup'}
          >
            <Zap className="w-4 h-4 mr-1 text-retro-neon-yellow" />
            Start Free
          </Button>
          
          <button 
            className="md:hidden text-white p-1 rounded border border-retro-bright"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-retro-neon-pink" /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-retro-dark-blue bg-opacity-95 backdrop-blur-sm py-6 px-4 absolute top-full left-0 right-0 border-b border-retro-bright z-40">
          <div className="absolute inset-0 bg-retro-grid bg-[size:20px_20px] opacity-10"></div>
          
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-1 bg-retro-bright opacity-10 animate-scan-line"></div>
          </div>
          
          <nav className="flex flex-col space-y-6 relative z-10">
            {['Features', 'How It Works', 'Testimonials'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="transform transition-all duration-300 hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="text-retro-neon-pink mr-2">▶</span>
                  <span className="text-white font-retro text-lg hover:text-retro-neon-blue transition-colors">
                    {item}
                  </span>
                </div>
              </a>
            ))}
          </nav>
          
          {/* Retro decorative elements */}
          <div className="absolute bottom-2 right-2 flex space-x-1">
            <div className="w-2 h-2 bg-retro-neon-pink rounded-full"></div>
            <div className="w-2 h-2 bg-retro-neon-blue rounded-full"></div>
            <div className="w-2 h-2 bg-retro-neon-green rounded-full"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
