import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ number, title, description, isLast = false }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="pixel-border bg-gameboy-green-light p-3 h-16 w-16 flex items-center justify-center mb-6">
        <span className="font-pixel text-2xl text-gameboy-gray-dark">{number}</span>
      </div>
      <h3 className="font-pixel text-base text-gameboy-gray-dark mb-2 text-center">{title}</h3>
      <p className="text-gameboy-gray text-center">{description}</p>
      {!isLast && (
        <div className="mt-4 h-8 flex items-center justify-center">
          <ArrowRight className="h-8 w-8 text-gameboy-green hidden md:block" />
          <ArrowRight className="h-8 w-8 text-gameboy-green block md:hidden transform rotate-90" />
        </div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24 px-4 bg-gameboy-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl lg:text-3xl text-gameboy-gray-dark mb-4">GAME WALKTHROUGH</h2>
          <p className="text-gameboy-gray-dark max-w-2xl mx-auto">
            Follow these simple steps to automate your real estate lead follow-up process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Step
            number={1}
            title="CONNECT"
            description="Link your lead sources and CRM systems to LeadQuest"
          />
          
          <Step
            number={2}
            title="CREATE"
            description="Design custom follow-up sequences for different lead types"
          />
          
          <Step
            number={3}
            title="AUTOMATE"
            description="Activate your sequences and monitor performance in real-time"
            isLast
          />
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="pixel-button bg-purple-primary text-white px-6 py-3 border-b-4 border-r-4 border-purple-dark hover:border-b-2 hover:border-r-2 transition-all font-bold rounded-none"
            onClick={() => window.location.href = '#signup'}
          >
            Begin Your Adventure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
