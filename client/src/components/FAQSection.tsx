
import { useState, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  cheatCode: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, cheatCode, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="faq-item">
      <button 
        className="faq-question w-full flex items-center justify-between bg-[#051736] hover:bg-[#0a2a5c] p-4 rounded border-l-4 border-[#9013FE] text-left transition-all"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="cheat-code font-bold text-[#FFCC00] mr-3">{cheatCode}</span>
          <span className="font-bold text-white text-sm sm:text-base">{question}</span>
        </div>
        <div className="toggle-icon text-[#00ffff] transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div className={`faq-answer ${isOpen ? 'block' : 'hidden'} bg-black bg-opacity-50 p-4 rounded mt-1 border-l-4 border-[#5affbc]`}>
        <p className="text-[#FFFFFF] text-lg">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WILL THIS WORK WITH MY CRM?",
      answer: "YES! Your custom sequence can be copied into any CRM including Follow Up Boss, KV Core, and others. No special integrations needed - just copy and paste.",
      cheatCode: "↑↑"
    },
    {
      question: "IS THIS ACTUALLY CUSTOMIZED FOR ME?",
      answer: "ABSOLUTELY. Unlike generic templates, our AI creates your sequence based on your specific market, lead sources, and communication style. No two sequences are the same.",
      cheatCode: "↓↓"
    },
    {
      question: "HOW SOON CAN I START USING THIS?",
      answer: "IMMEDIATELY. As soon as you complete the 3-minute questionnaire, your custom 15-day follow-up sequence is ready to use. No waiting, no complicated setup.",
      cheatCode: "←→"
    },
    {
      question: "DO I NEED TECH SKILLS TO USE THIS?",
      answer: "NOT AT ALL. If you can copy and paste, you can use this system. The scripts work with regular texts, emails, and phone calls - no coding or special software required.",
      cheatCode: "BA"
    },
    {
      question: "IS THIS ACTUALLY FREE, AND WHY?",
      answer: "YES, IT'S 100% FREE. We're offering this powerful tool at no cost because many agents who love their free sequence later want our help implementing advanced systems. But there's no obligation - the sequence is yours to keep and use forever.",
      cheatCode: "AB"
    },
    {
      question: "WHAT IF MY LEADS DON'T RESPOND?",
      answer: "THESE SEQUENCES ARE DESIGNED AS A STARTING POINT. While they use proven messaging, you may need to optimize them for your specific market. By using our tool, you agree to review all content before sending to your leads. Many agents find even small tweaks can dramatically improve response rates.",
      cheatCode: "↑↓"
    }
  ];

  useEffect(() => {
    // Add floating animation to pixel elements
    const addRandomAnimation = () => {
      const floatingPixels = document.querySelectorAll('.floating-pixel');
      floatingPixels.forEach(pixel => {
        (pixel as HTMLElement).style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite alternate`;
      });
    };

    addRandomAnimation();
  }, []);

  return (
    <section className="faq-section py-16 relative bg-[#051736]">
      {/* Background grid with subtle glow */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Floating pixel elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-pixel text-[#FFCC00] text-3xl font-bold" style={{top: '10%', left: '5%'}}>?</div>
        <div className="floating-pixel text-[#00ffff] text-3xl font-bold" style={{top: '70%', right: '10%'}}>!</div>
        <div className="floating-pixel text-[#5affbc] text-2xl font-bold" style={{top: '40%', right: '5%'}}>↑↓</div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl text-[#00ffff] glow-text mb-4">CHEAT CODES</h2>
          <p className="text-[#5affbc] text-xl">Unlock these secrets to maximize your lead conversion powers</p>
        </div>
        
        {/* Game manual style FAQ container */}
        <div className="game-manual bg-[#222] border-4 border-[#00ffff] rounded-lg p-1">
          <div className="manual-inner border-2 border-dashed border-[#5affbc] rounded p-6">
            {/* FAQ items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  cheatCode={faq.cheatCode}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bonus secret */}
        <div className="secret-bonus mt-12 text-center">
          <div className="inline-block bg-[#222] border-2 border-[#FFCC00] rounded p-4 shadow-glow-yellow">
            <p className="font-bold text-[#FFCC00] text-sm">SECRET BONUS UNLOCKED!</p>
            <p className="text-white text-lg mt-2">First-time agents get a custom sequence 100% FREE!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
