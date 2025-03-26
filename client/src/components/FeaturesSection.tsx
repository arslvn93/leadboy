import { Clock, MessageCircle, Target } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  patternType: 'dots' | 'lines' | 'zigzag' | 'circles';
  index: number;
}

const FeatureCard = ({ icon, title, description, color, patternType, index }: FeatureCardProps) => {
  const patterns = {
    dots: `radial-gradient(${color}33 2px, transparent 2px)`,
    lines: `repeating-linear-gradient(45deg, ${color}22, ${color}22 5px, transparent 5px, transparent 12px)`,
    zigzag: `linear-gradient(135deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(225deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(315deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(45deg, ${color}33 25%, transparent 25%) 0 0`,
    circles: `radial-gradient(circle at 50% 50%, ${color}44 0%, ${color}44 30%, transparent 30.1%, transparent 100%)`
  };

  const rotate = index % 2 === 0 ? 'rotate-1' : '-rotate-1';

  return (
    <div className={`transform ${rotate} transition-transform hover:scale-105`}>
      <div className="relative bg-white border-4 border-black p-8 shadow-[6px_6px_0_#000] h-full flex flex-col min-h-[280px]">
        <div 
          className="absolute inset-0 opacity-20 z-0" 
          style={{ backgroundImage: patterns[patternType], backgroundSize: '20px 20px' }}
        ></div>

        <div className="relative z-10 flex-1">
          <div className="w-16 h-16 mb-6 rounded-full border-4 border-black flex items-center justify-center"
               style={{ backgroundColor: color }}>
            {icon}
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-yellow-300 border-2 border-black transform -rotate-2">
            <h3 className="font-pixel text-base text-black">{title}</h3>
          </div>

          <p className="text-black font-bold">{description}</p>
        </div>

        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#FF00FF] border-2 border-black transform rotate-45"></div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-black" />,
      title: "DONE-FOR-YOU FOLLOW-UP MESSAGES",
      description: "Custom texts, emails, and call scripts written specifically for your business. Just copy and paste to stop losing leads forever.",
      color: "#00FFFF",
      patternType: "dots" as const
    },
    {
      icon: <Clock className="h-8 w-8 text-black" />,
      title: "SAVE 5+ HOURS EVERY WEEK",
      description: "No more writing messages or wondering what to say. Your entire 15-day follow-up system runs on autopilot.",
      color: "#FF00FF",
      patternType: "lines" as const
    },
    {
      icon: <Target className="h-8 w-8 text-black" />,
      title: "247% HIGHER RESPONSE RATES",
      description: "Your sequence is built for YOUR market and YOUR leads. Not generic templates that get ignored.",
      color: "#FFFF00",
      patternType: "zigzag" as const
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-[#f0f0f0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute top-20 left-10 w-20 h-4 bg-[#FF00FF] transform -rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-32 h-6 bg-yellow-300 transform rotate-12"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full border-4 border-dashed border-[#00FFFF]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF00FF] border-4 border-black px-8 py-2 transform -rotate-1 shadow-[4px_4px_0_#000] mb-6">
            <h2 className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0_#000]">Why Real Estate Agents Choose LeadBoy</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-black text-center">Stop losing commissions to poor follow-up. Our AI creates custom messages that convert leads into clients – automatically.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border-4 border-black p-6 transform rotate-1 shadow-[6px_6px_0_#000]">
            <p className="text-black font-bold">
              Equip your real estate business with these <span className="text-[#FF00FF] font-extrabold">totally tubular</span> tools to automate your lead nurturing and close more deals!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              patternType={feature.patternType}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;