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
    <div className="game-console-container mx-auto" style={{maxWidth: isMobile ? '300px' : '400px'}}>
      {/* Glow effects */}
      <div className="absolute inset-0 rounded-2xl bg-[#00ffff] opacity-20 blur-xl"></div>
      
      {/* Console body */}
      <div className="game-console-body relative bg-[#222] rounded-2xl border border-[#444] p-4 shadow-xl">
        {/* Screen area */}
        <div className="screen-area bg-[#1a1a1a] rounded-xl p-4 mb-6">
          {/* Power LED */}
          <div className="w-2 h-2 absolute top-4 left-4 rounded-full bg-[#FF33CC] shadow-[0_0_8px_#FF33CC] animate-pulse-strong"></div>
          
          {/* Screen */}
          <div className="screen bg-[#143522] rounded-lg p-4 relative overflow-hidden font-mono text-sm">
            {/* Screen content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-center border-b border-[#1a472f] pb-2 mb-3">
                <span className="text-[#5affbc] font-bold">LEADBOY AI v1.0</span>
                <span className="text-[#FFCC00] animate-blink">ONLINE</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-2 md:mb-3">
                    <span className="text-[#5affbc]">NEW LEADS:</span>
                    <span className="text-[#FFCC00]">{leads}</span>
                  </div>
                  
                  {!isMobile && (
                    <div className="flex justify-between mb-3">
                      <span className="text-[#5affbc]">SEQUENCES:</span>
                      <span className="text-[#FFCC00]">{sequences}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between mb-2 md:mb-3">
                    <span className="text-[#5affbc]">CONVERSIONS:</span>
                    <span className="text-[#FFCC00]">{conversions}</span>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-4 flex items-center">
                  <span className="text-[#5affbc] mr-2 animate-blink">▶</span>
                  <span className="text-[#5affbc]">AI Assistant ready...</span>
                </div>
              </div>
            </div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 bg-scanlines pointer-events-none"></div>
            
            {/* CRT effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(90,255,188,0.03)] to-transparent pointer-events-none"></div>
            
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-vignette pointer-events-none"></div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="controls-area flex justify-between items-center mb-5">
          {/* D-pad */}
          <div className="d-pad w-16 h-16 md:w-20 md:h-20 bg-[#333] rounded-full relative shadow-inner">
            <div className="absolute inset-0 m-auto w-4 h-4 bg-[#444] rounded"></div>
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#444] rounded-sm"></div>
          </div>
          
          {/* AB buttons */}
          <div className="buttons flex gap-3">
            <div className="a-btn w-10 h-10 rounded-full bg-[#8644B5] flex items-center justify-center text-white border border-[rgba(255,255,255,0.2)] shadow-[0_0_10px_rgba(134,68,181,0.5)]">A</div>
            <div className="b-btn w-10 h-10 rounded-full bg-[#ff3366] flex items-center justify-center text-white border border-[rgba(255,255,255,0.2)] shadow-[0_0_10px_rgba(255,51,102,0.5)]">B</div>
          </div>
        </div>
        
        {/* Options buttons */}
        <div className="options-area flex justify-center gap-8 mb-4">
          <div className="select-btn px-3 py-1 bg-[#333] text-[#aaa] text-xs rounded -rotate-12 shadow">SELECT</div>
          <div className="start-btn px-3 py-1 bg-[#333] text-[#aaa] text-xs rounded -rotate-12 shadow">START</div>
        </div>
        
        {/* Light beams */}
        <div className="absolute -bottom-6 -right-6 w-28 h-2 bg-[#ff3366] rounded-full blur-md transform rotate-45 opacity-50"></div>
        <div className="absolute -top-6 -left-6 w-28 h-2 bg-[#00ffff] rounded-full blur-md transform -rotate-45 opacity-50"></div>
      </div>
    </div>
  );
};

export default GameBoyConsole;