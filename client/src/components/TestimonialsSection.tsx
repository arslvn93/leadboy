interface TestimonialData {
  name: string;
  role: string;
  content: string;
  avatarColor: string;
  rank: string;
}

const TestimonialsSection = () => {
  const testimonials: TestimonialData[] = [
    {
      name: "SARAH J.",
      role: "Realtor, Century 21",
      content: "LeadQuest has been a game-changer for my business. I've seen a 40% increase in lead conversions since I started using it 3 months ago.",
      avatarColor: "#5affbc",
      rank: "1ST"
    },
    {
      name: "MICHAEL D.",
      role: "Broker, RE/MAX",
      content: "I was skeptical at first, but now my team couldn't live without LeadQuest. The automated sequences feel personal and our clients love the consistent communication.",
      avatarColor: "#00ffff",
      rank: "2ND"
    },
    {
      name: "JENNIFER S.",
      role: "Independent Agent",
      content: "As a solo agent, LeadQuest has given me the ability to compete with larger teams. I can provide the same level of follow-up without hiring an assistant.",
      avatarColor: "#FFCC00",
      rank: "3RD"
    }
  ];

  return (
    <section className="high-scores-section py-16 relative bg-[#051736]">
      {/* VHS distortion scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-[#00ffff] opacity-5 animate-scan-line"></div>
      </div>
      
      {/* Diagonal neon lines */}
      <div className="absolute -top-20 right-40 w-[800px] h-[2px] bg-[#00ffff] transform rotate-45 shadow-neon-blue opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-[400px] h-[2px] bg-[#ff3366] transform -rotate-45 shadow-neon-pink opacity-60"></div>
    
      {/* Arcade cabinet frame */}
      <div className="arcade-cabinet-frame max-w-5xl mx-auto relative">
        {/* Arcade screen */}
        <div className="arcade-screen p-6 border-4 border-[#333] rounded-lg">
          {/* CRT scan line effect */}
          <div className="scan-lines absolute inset-0 pointer-events-none"></div>
          
          <h2 className="text-center font-bold text-4xl mb-8 text-[#00ffff] glow-text">HIGH SCORES</h2>
          
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
                className="testimonial-row flex items-center p-4 border-b border-[#333]"
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
          
          {/* Blinking cursor at bottom */}
          <div className="text-center mt-8">
            <span className="text-[#00ffff] font-bold text-lg blinking-cursor">INSERT COIN TO CONTINUE_</span>
          </div>
        </div>
        
        {/* Arcade cabinet details */}
        <div className="arcade-details absolute -bottom-4 left-0 right-0 h-8 bg-[#333] rounded-b-lg"></div>
        <div className="arcade-controls absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#ff3366] border-4 border-[#333] shadow-neon-pink"></div>
          <div className="w-12 h-12 rounded-full bg-[#FFCC00] border-4 border-[#333] shadow-neon-yellow"></div>
        </div>
        
        {/* Decorative lights */}
        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#8644B5] opacity-80 animate-pulse-strong"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#00ffff] opacity-80 animate-pulse-strong"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;