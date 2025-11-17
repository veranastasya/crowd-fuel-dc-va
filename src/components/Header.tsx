import crowdfuelLogo from "@/assets/crowdfuel-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src={crowdfuelLogo} 
                alt="CrowdFuel Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">CrowdFuel</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Join the Club
              </button>
              <button 
                onClick={() => scrollToSection('event')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Event
              </button>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection('newsletter')}
            className="bg-gradient-brand hover:opacity-90 text-white font-semibold px-6"
          >
            Join Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
