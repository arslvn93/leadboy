import { Gamepad, Zap, Trophy, ArrowDown } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background with neon grid */}
      <div className="absolute inset-0 bg-retro-dark opacity-80"></div>
      <div className="absolute inset-0 retro-grid opacity-30"></div>
      
      {/* Diagonal neon lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-retro-purple shadow-neon-purple"></div>
      <div className="absolute top-40 right-0 w-[600px] h-[2px] bg-retro-neon-blue transform -rotate-45 shadow-neon-blue opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[2px] bg-retro-neon-pink transform rotate-45 shadow-neon-pink opacity-30"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-center text-4xl mb-16 text-retro-blue neon-text font-display uppercase tracking-wider">
          Beat The Lead Conversion Game in 3 Easy Steps:
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Step 1 */}
          <GameLevelCard 
            number={1}
            title="PRESS START"
            description="Take 3 minutes to tell us about your business. Like customizing your character before the game begins, this personalizes your entire follow-up strategy."
            icon={<Gamepad className="w-12 h-12 text-retro-green" />}
            gradient="from-indigo-600 to-blue-700"
          />
          
          {/* Connection line with animation */}
          <div className="flex justify-center">
            <div className="connection-line">
              <div className="pixel-arrow bounce-animation"></div>
            </div>
          </div>
          
          {/* Step 2 */}
          <GameLevelCard 
            number={2}
            title="COLLECT YOUR POWER TOKENS"
            description="Our AI instantly builds your custom 15-day sequence. It's like grabbing all the hidden tokens in one quick sweep – no hunting through levels or wasting time."
            icon={<Zap className="w-12 h-12 text-retro-yellow" />}
            gradient="from-pink-600 to-purple-700"
          />
          
          {/* Connection line with animation */}
          <div className="flex justify-center">
            <div className="connection-line">
              <div className="pixel-arrow bounce-animation"></div>
            </div>
          </div>
          
          {/* Step 3 */}
          <GameLevelCard 
            number={3}
            title="DEFEAT THE FINAL BOSS"
            description="OK, maybe your leads aren't exactly 'the final boss' (we're being dramatic) – but copy these scripts into your CRM and watch cold prospects transform into clients faster than you can say 'FINISH HIM!'"
            icon={<Trophy className="w-12 h-12 text-retro-yellow" />}
            gradient="from-green-600 to-teal-700"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 text-4xl text-retro-pink animate-float opacity-30">★</div>
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full border-2 border-retro-neon-blue opacity-30 animate-pulse-strong"></div>
    </section>
  );
};

interface GameLevelCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const GameLevelCard = ({ number, title, description, icon, gradient }: GameLevelCardProps) => {
  return (
    <div className="game-level-card group transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-6 items-center p-6">
        {/* Level number container */}
        <div className="level-number-container">
          <div className="level-number">{number}</div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-display text-xl mb-3 text-white tracking-wide">{title}</h3>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-20 h-20">
          <div className="controller-icon relative">
            {/* Icon glow */}
            <div className="absolute inset-0 opacity-50 blur-xl bg-white rounded-full"></div>
            {/* Icon */}
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;