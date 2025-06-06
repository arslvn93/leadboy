import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialData {
  name: string;
  role: string;
  content: string;
  avatarColor: string;
  rank: string;
  score: string;
  achievement: string;
}

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: TestimonialData[] = [
    {
      name: "SARAH J.",
      role: "Realtor, Century 21",
      content: "LeadBoy has been a game-changer for my business. I've seen a 40% increase in lead conversions since I started using it 3 months ago.",
      avatarColor: "#5affbc",
      rank: "1ST",
      score: "40,000 PTS",
      achievement: "Lead conversions x40%"
    },
    {
      name: "MICHAEL D.",
      role: "Broker, RE/MAX",
      content: "I was skeptical at first, but now my team couldn't live without LeadBoy. The automated sequences feel personal and our clients love the consistent communication.",
      avatarColor: "#00ffff",
      rank: "2ND",
      score: "32,500 PTS",
      achievement: "Response rate x65%"
    },
    {
      name: "JENNIFER S.",
      role: "Independent Agent",
      content: "As a solo agent, LeadBoy has given me the ability to compete with larger teams. I can provide the same level of follow-up without hiring an assistant.",
      avatarColor: "#FFCC00",
      rank: "3RD",
      score: "29,750 PTS",
      achievement: "Time saved x10 hrs/wk"
    }
  ];

  const handlePrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="high-scores-section py-12 md:py-16 relative bg-retro-dark-purple">
      {/* VHS distortion scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-[#00ffff] opacity-5 animate-scan-line"></div>
      </div>
      
      {/* Diagonal neon lines - hidden on mobile */}
      <div className="hidden md:block absolute -top-20 right-40 w-[800px] h-[2px] bg-[#00ffff] transform rotate-45 shadow-neon-blue opacity-50"></div>
      <div className="hidden md:block absolute bottom-0 -right-20 w-[400px] h-[2px] bg-[#ff3366] transform -rotate-45 shadow-neon-pink opacity-60"></div>
    
      {/* Arcade cabinet frame */}
      <div className="arcade-cabinet-frame mx-auto relative max-w-[95%] md:max-w-5xl">
        {/* Arcade screen */}
        <div className="arcade-screen bg-black p-3 md:p-6 border-2 md:border-4 border-[#333] rounded-lg relative overflow-hidden">
          {/* CRT scan line effect */}
          <div className="scan-lines absolute inset-0 pointer-events-none opacity-30"></div>
          
          <h2 className="text-center font-bold text-2xl md:text-4xl mb-4 md:mb-8 text-[#00ffff] glow-text">HIGH SCORES</h2>
          
          {/* Mobile Swipeable Cards */}
          {isMobile ? (
            <div className="mobile-testimonials-container">
              {/* Mobile navigation controls */}
              <div className="flex justify-between items-center mb-4">
                <button 
                  onClick={handlePrevious}
                  className="p-2 bg-[#333] rounded-full text-[#00ffff] hover:bg-[#444] transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full ${index === activeTestimonial ? 'bg-[#00ffff]' : 'bg-[#333]'}`}
                      onClick={() => setActiveTestimonial(index)}
                    ></div>
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  className="p-2 bg-[#333] rounded-full text-[#00ffff] hover:bg-[#444] transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Current testimonial card */}
              <div className="mobile-testimonial-card bg-[rgba(0,0,0,0.3)] border border-[#333] rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="pixel-avatar mr-3 w-10 h-10 rounded" style={{backgroundColor: testimonials[activeTestimonial].avatarColor}}></div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-400 text-xs">{testimonials[activeTestimonial].role}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <div className="text-[#FFCC00] font-bold mr-2">{testimonials[activeTestimonial].rank}</div>
                    <div className="text-[#FFCC00] text-base">★★★★★</div>
                  </div>
                </div>
                <div className="text-white text-sm mb-3">{testimonials[activeTestimonial].content}</div>
                <div className="bg-[rgba(90,255,188,0.1)] p-2 rounded text-xs text-[#5affbc] font-medium">
                  Achievement: {testimonials[activeTestimonial].achievement}
                </div>
              </div>
            </div>
          ) : (
            // Desktop Table View
            <div className="leaderboard-container">
              {/* Score table header */}
              <div className="score-table-header flex mb-4 px-4 py-2 bg-[#8BAC0F] rounded-t-md">
                <div className="w-1/4 text-black font-bold text-sm">PLAYER</div>
                <div className="w-2/4 text-black font-bold text-sm">WHAT THEY HAD TO SAY</div>
                <div className="w-1/4 text-black font-bold text-sm">REVIEW</div>
              </div>
              
              {/* Testimonial rows */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="testimonial-row flex items-center hover:bg-[rgba(90,255,188,0.1)] transition-all p-4 border-b border-[#333]"
                >
                  <div className="w-1/4 flex items-center">
                    <div className="pixel-avatar mr-3 w-10 h-10 rounded" style={{backgroundColor: testimonial.avatarColor}}></div>
                    <div>
                      <p className="font-bold text-white text-sm">{testimonial.name}</p>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="w-2/4">
                    <div className="text-white text-sm">{testimonial.content}</div>
                  </div>
                  <div className="w-1/4">
                    <div className="flex items-center">
                      <div className="text-[#FFCC00] font-bold mr-2">{testimonial.rank}</div>
                      <div className="text-[#FFCC00] text-lg">★★★★★</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Blinking cursor at bottom with CTA */}
          <div className="text-center mt-6 md:mt-8">
            <a 
              href="/form.html" 
              className="inline-block"
              onClick={(e) => {
                if (typeof window.fbq !== 'undefined') {
                  window.fbq('track', 'PageView');
                }
              }}
            >
              <span className="text-[#00ffff] font-bold text-base md:text-lg blinking-cursor hover:text-[#5affbc] transition-colors">USE LEADBOY TO CONVERT NEW LEADS TODAY_</span>
            </a>
          </div>
        </div>
        
        {/* Arcade cabinet details */}
        <div className="arcade-details absolute -bottom-2 md:-bottom-4 left-0 right-0 h-4 md:h-8 bg-[#333] rounded-b-lg"></div>
        <div className="arcade-controls absolute -bottom-10 md:-bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 md:space-x-4">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#ff3366] border-2 md:border-4 border-[#333] shadow-neon-pink"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#FFCC00] border-2 md:border-4 border-[#333] shadow-neon-yellow"></div>
        </div>
        
        {/* Decorative lights - smaller on mobile */}
        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#8644B5] opacity-80 animate-pulse-strong"></div>
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#00ffff] opacity-80 animate-pulse-strong"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;