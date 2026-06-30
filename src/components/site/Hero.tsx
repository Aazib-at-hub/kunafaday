import heroImg from "@/assets/hero-kunafa.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-[65vh] sm:h-[72vh] md:h-[78vh] min-h-[480px] overflow-hidden">
      <img
        src={heroImg}
        alt="Authentic Middle Eastern kunafa dessert with pistachios"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full flex items-center justify-center text-center text-cream px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-light tracking-tight animate-reveal-up">
            Premium Kunafa
          </h1>
          <p
            className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-cream/95 animate-reveal-up"
            style={{ animationDelay: "150ms" }}
          >
            Freshly made with premium ingredients, delivered across India.
          </p>
          <div className="mt-7 md:mt-8 animate-reveal-up" style={{ animationDelay: "300ms" }}>
            <a
              href="#bestsellers"
              className="inline-block bg-cream text-foreground px-8 md:px-10 py-3.5 text-[11px] tracking-[0.28em] uppercase font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
