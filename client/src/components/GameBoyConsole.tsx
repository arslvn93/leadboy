import { useIsMobile } from '@/hooks/use-mobile';

interface GameBoyConsoleProps {
  leads?: number;
  sequences?: number;
  conversions?: number;
}

const GameBoyConsole = ({ 
  leads = 12,
  sequences = 15,
  conversions = 8,
}: GameBoyConsoleProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`game-console-container relative mx-auto ${isMobile ? 'animate-gentle-bounce mb-0 pb-0' : 'mb-4'}`} style={{maxWidth: isMobile ? '280px' : '400px'}}>
      {/* Spotlight effect and light rays */}
      <div className="gameboy-spotlight animate-pulse-strong"></div>
      <div className="light-ray ray1 animate-pulse"></div>
      <div className="light-ray ray2 animate-pulse-slow"></div>
      <div className="light-ray ray3 animate-pulse"></div>
      
      {/* Outer glow - stronger on mobile for better visibility */}
      <div className={`absolute inset-0 rounded-[10%] bg-[#00ffff] ${isMobile ? 'opacity-40' : 'opacity-30'} blur-xl animate-pulse-slow`}></div>
      
      {/* Console body - more rectangular like the image */}
      <div className="game-console-body gameboy-image relative bg-[#222] rounded-[28px] border-2 border-[#333] p-5 shadow-xl" 
           style={{aspectRatio: isMobile ? '0.7/1' : '0.65/1'}}>
        {/* Cyan neon border glow */}
        <div className="absolute inset-0 rounded-[28px] border border-[#00ffff] opacity-40 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
        
        {/* Screen area */}
        <div className="screen-area bg-[#1a1a1a] rounded-3xl p-4 mb-7">
          {/* Power LED */}
          <div className="w-2.5 h-2.5 absolute top-5 left-5 rounded-full bg-[#FF33CC] shadow-[0_0_12px_#FF33CC] animate-pulse-strong"></div>
          
          {/* Screen - more rounded corners with enhanced brightness */}
          <div className="screen bg-[#0a2616] rounded-2xl p-4 relative overflow-hidden font-mono text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]"
               style={{aspectRatio: '1/0.75'}}>
            {/* Green backlight glow */}
            <div className="absolute inset-0 bg-[#5affbc] opacity-10 animate-pulse-slow"></div>
            
            {/* Screen content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-center border-b border-[#1a472f] pb-2 mb-3">
                <span className="text-[#5affbc] font-bold text-sm md:text-base tracking-wide text-shadow-neon-green">LEADBOY AI v1.0</span>
                <span className="text-[#FFCC00] animate-blink text-sm md:text-base text-shadow-neon-blue">ONLINE</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-2 md:mb-3">
                    <span className="text-[#5affbc] tracking-wide">NEW LEADS:</span>
                    <span className="text-[#FFCC00] animate-pulse">{leads}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2 md:mb-3">
                    <span className="text-[#5affbc] tracking-wide">SEQUENCES:</span>
                    <span className="text-[#FFCC00] animate-pulse">{sequences}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2 md:mb-3">
                    <span className="text-[#5affbc] tracking-wide">CONVERSIONS:</span>
                    <span className="text-[#FFCC00] animate-pulse">{conversions}</span>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-3 flex items-center">
                  <span className="text-[#5affbc] mr-2 animate-blink">▶</span>
                  <span className="text-[#5affbc] tracking-wide font-bold text-shadow-neon-green">AI Assistant ready...</span>
                </div>
              </div>
            </div>
            
            {/* Scanlines - with animation */}
            <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none animate-scan-line"></div>
            
            {/* CRT effect with green glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(90,255,188,0.07)] to-transparent pointer-events-none"></div>
            
            {/* Vignette effect - darker at edges */}
            <div className="absolute inset-0 bg-vignette pointer-events-none"></div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="controls-area flex justify-between items-center mb-5">
          {/* D-pad - circular with plus inside like image */}
          <div className="d-pad w-16 h-16 md:w-20 md:h-20 bg-[#333] rounded-full relative shadow-inner">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
              <div className="absolute inset-0 m-auto w-3 h-3 bg-[#333] rounded-sm"></div>
            </div>
          </div>
          
          {/* AB buttons - with stronger glow */}
          <div className="buttons flex gap-4">
            <div className="a-btn w-10 h-10 rounded-full bg-[#8644B5] flex items-center justify-center text-white font-bold 
                           border-2 border-white border-opacity-20 shadow-[0_0_15px_rgba(134,68,181,0.7)]">A</div>
            <div className="b-btn w-10 h-10 rounded-full bg-[#ff3366] flex items-center justify-center text-white font-bold
                           border-2 border-white border-opacity-20 shadow-[0_0_15px_rgba(255,51,102,0.7)]">B</div>
          </div>
        </div>
        
        {/* Options buttons - angled like in image */}
        <div className="options-area flex justify-center gap-10 mb-3">
          <div className="select-btn px-3 py-1 bg-[#333] text-[#ccc] text-xs rounded-md -rotate-12 shadow-md">SELECT</div>
          <div className="start-btn px-3 py-1 bg-[#333] text-[#ccc] text-xs rounded-md -rotate-12 shadow-md">START</div>
        </div>
        
        {/* Speaker lines - subtle */}
        <div className="absolute bottom-4 right-5 space-y-1.5 opacity-30">
          <div className="w-8 h-0.5 bg-[#555] rounded-full"></div>
          <div className="w-8 h-0.5 bg-[#555] rounded-full"></div>
          <div className="w-8 h-0.5 bg-[#555] rounded-full"></div>
        </div>
        
        {/* Corner neon light accents */}
        <div className="absolute -bottom-3 -right-3 w-24 h-1.5 bg-[#ff3366] rounded-full blur-md transform rotate-45 opacity-50"></div>
        <div className="absolute -top-3 -left-3 w-24 h-1.5 bg-[#00ffff] rounded-full blur-md transform -rotate-45 opacity-50"></div>
      </div>
    </div>
  );
};

export default GameBoyConsole;