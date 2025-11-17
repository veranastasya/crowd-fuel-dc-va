import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedEvent = () => {
  return (
    <section id="event" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Next Event</h2>
          <p className="text-muted-foreground text-lg">
            Join us for our upcoming networking session
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="bg-gradient-to-br from-primary/10 via-primary/5 to-background pb-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">Wednesday, Dec 10</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">DC Area</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              CrowdFuel December Networking
            </h3>
          </CardHeader>
          
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're so back! Join us for an exciting evening of networking and insights at the December edition of CrowdFuel, a startup founders club in the DC area built to help startup founders grow their businesses.
            </p>
            
            <Button asChild size="lg" className="w-full md:w-auto group">
              <a 
                href="https://lu.ma/igo1jy90" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                Register on Luma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedEvent;
