import { Button } from '@/components/ui/button';

interface TestimonialProps {
  name: string;
  role: string;
  rating: number;
  content: string;
}

const Testimonial = ({ name, role, rating, content }: TestimonialProps) => {
  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < count ? "" : "opacity-50"}>
          ★
        </span>
      ));
  };

  return (
    <div className="pixel-border bg-gameboy-green-light p-6">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-gameboy-gray mr-4"></div>
        <div>
          <h3 className="font-pixel text-sm text-gameboy-gray-dark">{name}</h3>
          <p className="text-xs text-gameboy-gray-dark">{role}</p>
        </div>
      </div>
      <div className="font-pixel text-xs text-gameboy-gray-dark mb-2">
        {renderStars(rating)}
      </div>
      <p className="text-gameboy-gray-dark text-sm">{content}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "SARAH J.",
      role: "Realtor, Century 21",
      rating: 5,
      content: "LeadQuest has been a game-changer for my business. I've seen a 40% increase in lead conversions since I started using it 3 months ago."
    },
    {
      name: "MICHAEL D.",
      role: "Broker, RE/MAX",
      rating: 5,
      content: "I was skeptical at first, but now my team couldn't live without LeadQuest. The automated sequences feel personal and our clients love the consistent communication."
    },
    {
      name: "JENNIFER S.",
      role: "Independent Agent",
      rating: 4,
      content: "As a solo agent, LeadQuest has given me the ability to compete with larger teams. I can provide the same level of follow-up without hiring an assistant."
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl lg:text-3xl text-gameboy-gray-dark mb-4">HIGH SCORES</h2>
          <p className="text-gameboy-gray-dark max-w-2xl mx-auto">
            See what other real estate professionals are saying about their experience with LeadQuest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              content={testimonial.content}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gameboy-gray-dark mb-4">
            Join over 2,500 real estate professionals already leveling up their lead nurturing game
          </p>
          <Button 
            className="pixel-button bg-purple-primary text-white px-6 py-3 border-b-4 border-r-4 border-purple-dark hover:border-b-2 hover:border-r-2 transition-all font-bold rounded-none"
            onClick={() => window.location.href = '#signup'}
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
