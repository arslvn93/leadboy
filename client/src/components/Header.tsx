import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#FF00FF] border-b-4 border-black px-4 py-4 sticky top-0 z-50 shadow-[0_4px_0_rgba(0,0,0,0.8)]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-pixel drop-shadow-[2px_2px_0_#000] tracking-widest text-sm md:text-base">
          <span className="inline-block animate-pulse">★</span> LEAD<span className="text-yellow-300">QUEST</span> <span className="inline-block animate-pulse">★</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-yellow-300 font-bold transition-colors duration-200 uppercase text-shadow-sm">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-yellow-300 font-bold transition-colors duration-200 uppercase text-shadow-sm">
            How It Works
          </a>
          <a href="#testimonials" className="text-white hover:text-yellow-300 font-bold transition-colors duration-200 uppercase text-shadow-sm">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            className="pixel-button bg-yellow-300 text-black font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] text-sm md:text-base"
            onClick={() => window.location.href = '#signup'}
          >
            Start Free
          </Button>
          
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FF00FF] py-6 px-4 absolute top-full left-0 right-0 border-b-4 border-black">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-white hover:text-yellow-300 font-bold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white hover:text-yellow-300 font-bold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-yellow-300 font-bold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
