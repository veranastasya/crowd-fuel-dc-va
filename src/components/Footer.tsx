import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import crowdfuelLogo from "@/assets/crowdfuel-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed to updates!",
        description: "You'll receive our latest news and updates.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <img src={crowdfuelLogo} alt="CrowdFuel" className="h-16 w-16" />
            <p className="text-muted-foreground max-w-md">
              A startup founders club across DC and Northern Virginia built to help startup founders grow their businesses.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe for Email Updates</h3>
            <p className="text-muted-foreground">
              Get the latest news, events, and resources for founders.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CrowdFuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
