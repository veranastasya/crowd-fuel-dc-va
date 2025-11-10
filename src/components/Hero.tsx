import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import networkHero from "@/assets/network-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Join 500+ Founders</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Welcome to
                <br />
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  CrowdFuel
                </span>
                <br />
                Founders Club
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                A startup founders club across DC and Northern Virginia built to help startup founders grow their businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg font-semibold bg-primary hover:bg-primary/90">
                Join the Newsletter
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold border-primary text-primary hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/company/104932081" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              If you're looking for a support group that understands the challenge of entrepreneurship, you're in the right place!
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
            <img 
              src={networkHero} 
              alt="Network of connected founders and entrepreneurs" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
