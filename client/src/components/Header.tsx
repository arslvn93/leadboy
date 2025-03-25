import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b-4 border-gameboy-gray px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gameboy-gray-dark text-xl tracking-tight font-pixel text-sm md:text-base">
          LEAD<span className="text-gameboy-green">QUEST</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200">
            How It Works
          </a>
          <a href="#testimonials" className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            className="pixel-button bg-purple-primary text-white border-b-4 border-r-4 border-purple-dark hover:border-b-2 hover:border-r-2 hover:translate-y-[2px] hover:translate-x-[2px] transition-all text-sm md:text-base rounded-none"
            onClick={() => window.location.href = '#signup'}
          >
            Start Free
          </Button>
          
          <button 
            className="md:hidden text-gameboy-gray-dark"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 border-b-2 border-gameboy-gray">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gameboy-gray-dark hover:text-purple-primary transition duration-200"
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
