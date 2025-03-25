import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gameboy-gray-dark py-8 px-4 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white text-xl tracking-tight font-pixel text-sm md:text-base mb-4">
              LEAD<span className="text-gameboy-green">QUEST</span>
            </div>
            <p className="text-sm text-gameboy-gray-light">
              Automated lead nurture sequences for real estate professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-4">QUICK LINKS</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#features" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#signup" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-4">LEGAL</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-4">CONTACT</h3>
            <ul className="text-sm space-y-2">
              <li className="text-gameboy-gray-light">email@leadquest.com</li>
              <li className="text-gameboy-gray-light">(555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gameboy-gray-light hover:text-white transition duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gameboy-gray mt-8 pt-8 text-center">
          <p className="text-xs text-gameboy-gray-light">© {new Date().getFullYear()} LeadQuest. All rights reserved.</p>
          <p className="text-xs text-gameboy-gray-light mt-2 font-pixel">GAME OVER? PRESS START TO CONTINUE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
