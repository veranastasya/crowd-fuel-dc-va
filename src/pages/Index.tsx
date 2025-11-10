import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default Index;
