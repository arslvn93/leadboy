import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileStickyCTA = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only add scroll listener on mobile
    if (!isMobile) return;
    
    const handleScroll = () => {
      // Show the button once scrolled more than 100px
      setScrolled(window.scrollY > 100);
    };
    
    // Set initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  // Don't render anything on desktop
  if (!isMobile) return null;
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-3 bg-retro-dark-blue bg-opacity-70 backdrop-blur-md border-t border-retro-neon-pink shadow-[0_-4px_20px_rgba(255,51,204,0.3)] z-50 transition-all duration-500 transform ${
        scrolled ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-retro-grid bg-[size:20px_20px] opacity-10"></div>
      
      <Button 
        className="w-full cta-button bg-retro-gradient-pink text-white font-bold uppercase rounded-full px-6 py-3 shadow-neon-pink text-base transition-all duration-300 transform hover:scale-105 border-2 border-retro-neon-pink"
        style={{ animation: 'pulse-slow 2s infinite' }}
        onClick={() => {
          window.location.href = '/form.html';
          // Only track PageView, not Lead
          if (typeof window.fbq !== 'undefined') {
            window.fbq('track', 'PageView');
          }
        }}
      >
        <Rocket className="w-4 h-4 mr-2 text-retro-neon-blue" />
        <span className="text-shadow-neon-pink">START FREE</span>
      </Button>
    </div>
  );
};

export default MobileStickyCTA;