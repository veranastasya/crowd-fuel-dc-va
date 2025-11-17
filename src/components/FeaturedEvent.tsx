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

        <div className="flex justify-center">
          <iframe
            src="https://luma.com/embed/event/evt-hyi4h2QrRbeErVv/simple"
            className="w-full h-[450px] md:h-[600px] rounded border border-border"
            style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
            allow="fullscreen; payment"
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
