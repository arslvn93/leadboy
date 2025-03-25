import { ArrowDown } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-15" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff00ff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '52px 26px'
      }}></div>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl text-gameboy-green mb-4">
            BEAT THE LEAD CONVERSION GAME IN 3 EASY STEPS:
          </h2>
        </div>

        <div className="space-y-8">
          <Step
            number={1}
            title="PRESS START"
            description="Take 3 minutes to tell us about your business. Like customizing your character before the game begins, this personalizes your entire follow-up strategy."
            position="left"
          />

          <div className="flex justify-center">
            <ArrowDown className="text-gameboy-green h-8 w-8" />
          </div>

          <Step
            number={2}
            title="COLLECT YOUR POWER TOKENS"
            description="Our AI instantly builds your custom 15-day sequence. It's like grabbing all the hidden tokens in one quick sweep – no hunting through levels or wasting time."
            position="right"
          />

          <div className="flex justify-center">
            <ArrowDown className="text-gameboy-green h-8 w-8" />
          </div>

          <Step
            number={3}
            title="DEFEAT THE FINAL BOSS"
            description="OK, maybe your leads aren't exactly 'the final boss' (we're being dramatic) – but copy these scripts into your CRM and watch cold prospects transform into clients faster than you can say 'FINISH HIM!'"
            position="left"
          />
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const Step = ({ number, title, description, position }: StepProps) => {
  return (
    <div className="bg-white border-4 border-[#8B8B8B] p-6 shadow-[6px_6px_0_#000] relative">
      <div className={`flex items-center gap-8 ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="bg-[#8BAC0F] w-20 h-20 flex-shrink-0 flex items-center justify-center border-4 border-black">
          <span className="font-pixel text-3xl text-white">{number}</span>
        </div>
        <div>
          <h3 className="font-pixel text-xl mb-2 text-[#333333]">{title}</h3>
          <p className="text-[#444444] text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;