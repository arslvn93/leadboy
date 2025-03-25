import { Button } from "@/components/ui/button";

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
        <span key={i} className={`text-xl ${i < count ? "text-yellow-400" : "text-gray-400"}`}>★</span>
      ));
  };

  return (
    <div className="transform hover:scale-[1.02] transition-transform">
      <div className="relative bg-[#8BAC0F] p-6 border-4 border-black shadow-[8px_8px_0_#000] min-h-[240px]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-black border-2 border-white mr-4 pixel-corners"></div>
            <div>
              <h3 className="font-pixel text-sm text-black">{name}</h3>
              <p className="text-xs text-black opacity-75">{role}</p>
            </div>
          </div>
          <div className="font-pixel text-lg text-black mb-4">
            {renderStars(rating)}
          </div>
          <p className="text-black text-sm font-pixel leading-relaxed">{content}</p>
        </div>
      </div>
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
    <section className="py-24 px-4 bg-[#F0F0F0] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl text-black mb-4">HIGH SCORES</h2>
          <div className="w-24 h-1 bg-[#8BAC0F] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;