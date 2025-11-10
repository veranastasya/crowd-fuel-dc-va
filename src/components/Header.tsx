import crowdfuelLogo from "@/assets/crowdfuel-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <img 
          src={crowdfuelLogo} 
          alt="CrowdFuel Logo" 
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
