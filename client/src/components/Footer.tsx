import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-retro-dark-blue py-6 px-4 text-white border-t border-retro-neon-blue pb-24 md:pb-6 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:20px_20px] opacity-20"></div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-1 bg-retro-bright opacity-10 animate-scan-line"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* SalesGenius Logo */}
          <div className="mb-4 md:mb-0">
            <a 
              href="https://salesgenius.co/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="salesgenius-text text-xl md:text-2xl font-black tracking-wider text-retro-gray hover:text-retro-neon-blue transition-colors duration-300">
                SALESGENIUS
              </div>
            </a>
          </div>
          
          {/* Privacy Policy */}
          <div className="mb-4 md:mb-0">
            <a 
              href="https://salesgenius.co/privacypolicy-3365" 
              target="_blank"
              rel="noopener noreferrer"
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
        
        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-xs text-retro-gray">© {new Date().getFullYear()} SalesGenius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
