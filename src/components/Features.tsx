import { Presentation, Star, Gift, BookOpen, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Presentation,
    title: "Interactive Workshops and Webinars",
    description: "Participate in regular sessions led by industry leaders on various topics, from scaling your business to mastering digital marketing.",
  },
  {
    icon: Star,
    title: "Member Spotlights",
    description: "Get featured and showcase your startup journey, insights, and success stories to inspire and be inspired.",
  },
  {
    icon: Gift,
    title: "Exclusive Deals and Discounts",
    description: "Enjoy special offers on tools, services, and products essential for your startup's growth.",
  },
  {
    icon: BookOpen,
    title: "Recommended Resources",
    description: "Access cutting-edge tools, insights, and case studies tailored for the unique challenges and opportunities faced by founders.",
  },
  {
    icon: Users,
    title: "Curated Networking",
    description: "Connect with fellow founders who share your passion, area of interest, and drive for success. Meet the right people at the right time.",
  },
  {
    icon: Lightbulb,
    title: "Mentorship Opportunities",
    description: "Learn from those who've walked the path before. Members mentor each other to guide each other through their startup's growth phases.",
  },
  {
    icon: TrendingUp,
    title: "Funding Possibilities",
    description: "Learn about funding opportunities whether it's grants, government contracts, angel investors, venture capitalists, crowdfunding options and more.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Join the <span className="bg-gradient-brand bg-clip-text text-transparent">Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your startup journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
