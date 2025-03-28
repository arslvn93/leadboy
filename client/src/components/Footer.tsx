import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-retro-dark-blue py-6 px-4 text-white border-t border-retro-neon-blue pb-24 md:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* SalesGenius Logo */}
          <div className="mb-4 md:mb-0">
            <div className="salesgenius-text text-xl md:text-2xl font-black tracking-wider text-retro-gray">
              SALESGENIUS
            </div>
          </div>
          
          {/* Privacy Policy */}
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-retro-gray hover:text-retro-neon-blue transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-retro-gray hover:text-retro-neon-pink transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-retro-gray hover:text-retro-neon-pink transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-retro-gray hover:text-retro-neon-pink transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright and Cool Banner */}
        <div className="text-center mt-6">
          <p className="text-xs text-retro-gray">© {new Date().getFullYear()} SalesGenius. All rights reserved.</p>
          <p className="text-xs text-retro-neon-blue mt-4 font-pixel animate-pulse-slow">GAME OVER? PRESS START TO CONTINUE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
