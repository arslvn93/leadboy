import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeroSection from './MobileHeroSection';
import DesktopHeroSection from './DesktopHeroSection';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Render different components based on device type
  return isMobile ? <MobileHeroSection /> : <DesktopHeroSection />;
};

export default HeroSection;