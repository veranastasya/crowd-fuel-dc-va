import { Users, TrendingUp, Lightbulb, Rocket, Network, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          <div className="relative w-full max-w-md mx-auto h-[500px]">
            {/* Background gradient blurs */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full animate-pulse" />
            
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 animate-pulse z-20">
              <Network className="w-16 h-16 text-primary-foreground" strokeWidth={1.5} />
            </div>
            
            {/* Orbiting icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {/* Icon 1 - Top */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-card border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '0s' }}>
                <Rocket className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Icon 2 - Top Right */}
              <div className="absolute top-20 right-8 w-16 h-16 bg-card border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <TrendingUp className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              
              {/* Icon 3 - Right */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 w-18 h-18 bg-card border-2 border-accent/50 rounded-2xl flex items-center justify-center shadow-xl animate-float p-3" style={{ animationDelay: '1s' }}>
                <Lightbulb className="w-9 h-9 text-accent" strokeWidth={1.5} />
              </div>
              
              {/* Icon 4 - Bottom Right */}
              <div className="absolute bottom-20 right-12 w-16 h-16 bg-card border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Icon 5 - Bottom */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-card border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <Users className="w-10 h-10 text-secondary" strokeWidth={1.5} />
              </div>
              
              {/* Icon 6 - Bottom Left */}
              <div className="absolute bottom-24 left-8 w-16 h-16 bg-card border-2 border-accent/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
                <Network className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              
              {/* Icon 7 - Left */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 w-18 h-18 bg-card border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float p-3" style={{ animationDelay: '3s' }}>
                <TrendingUp className="w-9 h-9 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Icon 8 - Top Left */}
              <div className="absolute top-16 left-12 w-16 h-16 bg-card border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '3.5s' }}>
                <Rocket className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.4s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.6s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.8s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.4s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
