import { Clock, MessageCircle, BarChart3, Bell, CheckCircle, LayoutGrid } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="pixel-border bg-white p-6">
      <div className="w-12 h-12 mb-4 bg-gameboy-green flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-pixel text-base text-gameboy-gray-dark mb-2">{title}</h3>
      <p className="text-gameboy-gray">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "AUTO-RESPONDER",
      description: "Instantly connect with new leads via email, SMS, or voicemail when they submit an inquiry."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "CUSTOM SEQUENCES",
      description: "Create personalized follow-up sequences based on lead behavior and property interests."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "LEAD SCORING",
      description: "Automatically rank and prioritize your leads based on their engagement and conversion potential."
    },
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "SMART ALERTS",
      description: "Get notified when leads take high-intent actions like revisiting listings or opening multiple emails."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "CRM INTEGRATION",
      description: "Seamlessly connects with your existing CRM systems to maintain a unified lead database."
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-white" />,
      title: "PERFORMANCE STATS",
      description: "Track detailed analytics on open rates, response times, and conversion metrics to optimize your approach."
    }
  ];

  return (
    <section id="features" className="py-12 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl lg:text-3xl text-gameboy-gray-dark mb-4">POWER-UPS</h2>
          <p className="text-gameboy-gray-dark max-w-2xl mx-auto">
            Equip your real estate business with these powerful tools to automate your lead nurturing and close more deals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
