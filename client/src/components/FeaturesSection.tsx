import { Clock, MessageCircle, BarChart3, Bell, CheckCircle, LayoutGrid, Zap, Mail, Smartphone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  patternType: 'dots' | 'lines' | 'zigzag' | 'circles';
  index: number;
}

const FeatureCard = ({ icon, title, description, color, patternType, index }: FeatureCardProps) => {
  // Pattern backgrounds based on 90s style
  const patterns = {
    dots: `radial-gradient(${color}33 2px, transparent 2px)`,
    lines: `repeating-linear-gradient(45deg, ${color}22, ${color}22 5px, transparent 5px, transparent 12px)`,
    zigzag: `linear-gradient(135deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(225deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(315deg, ${color}33 25%, transparent 25%) 0 0, 
             linear-gradient(45deg, ${color}33 25%, transparent 25%) 0 0`,
    circles: `radial-gradient(circle at 50% 50%, ${color}44 0%, ${color}44 30%, transparent 30.1%, transparent 100%)`
  };
  
  // Rotate card slightly for alternate items
  const rotate = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
  
  return (
    <div className={`transform ${rotate} transition-transform hover:scale-105`}>
      <div className="relative bg-white border-4 border-black p-8 shadow-[6px_6px_0_#000]">
        {/* Pattern background */}
        <div 
          className="absolute inset-0 opacity-20 z-0" 
          style={{ backgroundImage: patterns[patternType], backgroundSize: '20px 20px' }}
        ></div>
        
        {/* Feature content */}
        <div className="relative z-10">
          <div className="w-16 h-16 mb-6 rounded-full border-4 border-black flex items-center justify-center"
               style={{ backgroundColor: color }}>
            {icon}
          </div>
          
          <div className="inline-block mb-4 px-3 py-1 bg-yellow-300 border-2 border-black transform -rotate-2">
            <h3 className="font-pixel text-base text-black">{title}</h3>
          </div>
          
          <p className="text-black font-bold">{description}</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#FF00FF] border-2 border-black transform rotate-45"></div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-black" />,
      title: "AUTO-RESPONDER",
      description: "Instantly connect with new leads via email, SMS, or voicemail when they submit an inquiry.",
      color: "#00FFFF",
      patternType: "dots" as const
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-black" />,
      title: "CUSTOM SEQUENCES",
      description: "Create personalized follow-up sequences based on lead behavior and property interests.",
      color: "#FF00FF",
      patternType: "lines" as const
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "LEAD SCORING",
      description: "Automatically rank and prioritize your leads based on their engagement and conversion potential.",
      color: "#FFFF00",
      patternType: "zigzag" as const
    },
    {
      icon: <Smartphone className="h-8 w-8 text-black" />,
      title: "SMART ALERTS",
      description: "Get notified when leads take high-intent actions like revisiting listings or opening multiple emails.",
      color: "#00FF00",
      patternType: "circles" as const
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-black" />,
      title: "CRM INTEGRATION",
      description: "Seamlessly connects with your existing CRM systems to maintain a unified lead database.",
      color: "#FF9900",
      patternType: "dots" as const
    },
    {
      icon: <Zap className="h-8 w-8 text-black" />,
      title: "PERFORMANCE STATS",
      description: "Track detailed analytics on open rates, response times, and conversion metrics to optimize your approach.",
      color: "#FF3366",
      patternType: "lines" as const
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-[#f0f0f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-4 bg-[#FF00FF] transform -rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-32 h-6 bg-yellow-300 transform rotate-12"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full border-4 border-dashed border-[#00FFFF]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF00FF] border-4 border-black px-8 py-2 transform -rotate-1 shadow-[4px_4px_0_#000] mb-6">
            <h2 className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0_#000]">RADICAL FEATURES</h2>
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
