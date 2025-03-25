
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className="bg-white border-4 border-[#8B8B8B] p-4 cursor-pointer shadow-[4px_4px_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-pixel text-lg text-[#333333]">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-[#8BAC0F] h-6 w-6" />
        ) : (
          <ChevronDown className="text-[#8BAC0F] h-6 w-6" />
        )}
      </div>
      {isOpen && (
        <div className="mt-4 text-[#444444] border-t-2 border-[#8B8B8B] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WILL THIS WORK WITH MY CRM?",
      answer: "YES! Your custom sequence can be copied into any CRM including Follow Up Boss, KV Core, and others. No special integrations needed - just copy and paste."
    },
    {
      question: "IS THIS ACTUALLY CUSTOMIZED FOR ME?",
      answer: "ABSOLUTELY. Unlike generic templates, our AI creates your sequence based on your specific market, lead sources, and communication style. No two sequences are the same."
    },
    {
      question: "HOW SOON CAN I START USING THIS?",
      answer: "IMMEDIATELY. As soon as you complete the 3-minute questionnaire, your custom 15-day follow-up sequence is ready to use. No waiting, no complicated setup."
    },
    {
      question: "DO I NEED TECH SKILLS TO USE THIS?",
      answer: "NOT AT ALL. If you can copy and paste, you can use this system. The scripts work with regular texts, emails, and phone calls - no coding or special software required."
    },
    {
      question: "IS THIS ACTUALLY FREE, AND WHY?",
      answer: "YES, IT'S 100% FREE. We're offering this powerful tool at no cost because many agents who love their free sequence later want our help implementing advanced systems. But there's no obligation - the sequence is yours to keep and use forever."
    },
    {
      question: "WHAT IF MY LEADS DON'T RESPOND?",
      answer: "THESE SEQUENCES ARE DESIGNED AS A STARTING POINT. While they use proven messaging, you may need to optimize them for your specific market. By using our tool, you agree to review all content before sending to your leads. Many agents find even small tweaks can dramatically improve response rates."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F0F0F0]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl text-[#8BAC0F] mb-4">
            CHEAT CODES (FAQ)
          </h2>
          <div className="w-24 h-1 bg-[#8BAC0F] mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
