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

          <div className="relative w-full max-w-md mx-auto h-[400px] md:h-[500px]">
            {/* Animated gradient background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full animate-pulse-slow z-0" />
            <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-primary/10 to-secondary/10 blur-2xl rounded-full animate-pulse-slower z-0" />
            
            {/* Outer glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-primary/20 animate-spin-slow z-[5]" style={{ animationDuration: '20s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-secondary/20 animate-spin-slow z-[5]" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            
            {/* Central hub with enhanced glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse-glow" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50">
                <Network className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground animate-pulse-icon" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Orbiting icons container with rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-orbit z-30">
              {/* Icon 1 - 0° (Top) */}
              <div className="absolute top-1/2 left-1/2 w-14 h-14 md:w-20 md:h-20 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(0, -180px)', animationDelay: '0s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
                  <Rocket className="w-7 h-7 md:w-10 md:h-10 text-primary animate-icon-pulse" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Icon 2 - 45° (Top Right) */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(127px, -127px)', animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-110">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-secondary animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
              
              {/* Icon 3 - 90° (Right) */}
              <div className="absolute top-1/2 left-1/2 w-14 h-14 md:w-18 md:h-18 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(180px, 0)', animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-accent/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110">
                  <Lightbulb className="w-7 h-7 md:w-9 md:h-9 text-accent animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
              
              {/* Icon 4 - 135° (Bottom Right) */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(127px, 127px)', animationDelay: '1.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
              
              {/* Icon 5 - 180° (Bottom) */}
              <div className="absolute top-1/2 left-1/2 w-14 h-14 md:w-20 md:h-20 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(0, 180px)', animationDelay: '2s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-110">
                  <Users className="w-7 h-7 md:w-10 md:h-10 text-secondary animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '0.8s' }} />
                </div>
              </div>
              
              {/* Icon 6 - 225° (Bottom Left) */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(-127px, 127px)', animationDelay: '2.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-accent/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110">
                  <Network className="w-6 h-6 md:w-8 md:h-8 text-accent animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              {/* Icon 7 - 270° (Left) */}
              <div className="absolute top-1/2 left-1/2 w-14 h-14 md:w-18 md:h-18 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(-180px, 0)', animationDelay: '3s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
                  <TrendingUp className="w-7 h-7 md:w-9 md:h-9 text-primary animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '1.2s' }} />
                </div>
              </div>
              
              {/* Icon 8 - 315° (Top Left) */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 group animate-float-smooth" style={{ transform: 'translate(-50%, -50%) translate(-127px, -127px)', animationDelay: '3.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-card/80 backdrop-blur-sm border-2 border-secondary/50 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-110">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-secondary animate-icon-pulse" strokeWidth={1.5} style={{ animationDelay: '1.4s' }} />
                </div>
              </div>
            </div>
            
            {/* Enhanced connecting lines with gradient and animation */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="85.4%" y2="14.6%" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="url(#line-gradient-3)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="85.4%" y2="85.4%" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="14.6%" y2="85.4%" stroke="url(#line-gradient-3)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="50%" x2="14.6%" y2="14.6%" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.4s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
