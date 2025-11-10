import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail } from "lucide-react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the CrowdFuel community.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-1">
          <div className="bg-card rounded-xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <Mail className="w-16 h-16 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-black">
                Stay Connected with <span className="bg-gradient-brand bg-clip-text text-transparent">CrowdFuel</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get exclusive insights, event invitations, and founder resources delivered straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background border-border"
                  />
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                    Subscribe
                  </Button>
                </div>
              </form>

              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Or connect with us on LinkedIn</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <a href="https://www.linkedin.com/company/104932081" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Follow on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
