import { Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            About <span className="bg-gradient-brand bg-clip-text text-transparent">CrowdFuel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a community of passionate founders supporting each other through the entrepreneurial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower startup founders across DC and Northern Virginia with the resources, connections, and support they need to succeed.
            </p>
          </div>

          <div className="space-y-4 text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Community</h3>
            <p className="text-muted-foreground">
              A diverse network of 500+ founders from various industries, all committed to learning, growing, and succeeding together.
            </p>
          </div>

          <div className="space-y-4 text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Values</h3>
            <p className="text-muted-foreground">
              Collaboration, authenticity, and mutual support. We believe that together, we can overcome any challenge entrepreneurship throws our way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
