import heroImg from "@/assets/hero-kunafa.jpg";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-40 overflow-hidden">
      <img src={heroImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/85 to-emerald-deep/60" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-cream">
        <Reveal>
          <p className="divider-ornament mb-4 sm:mb-5"><span className="divider-ornament-line" /> Order Today</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-balance max-w-3xl">
            Bring the taste of <em className="gold-text not-italic font-medium">authentic kunafa</em> home
          </h2>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-cream/85">
            Hand-baked this morning. On your table this evening. The most beloved Middle Eastern dessert, now crafted fresh in Lucknow.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#bestsellers" className="group inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-secondary-foreground font-semibold uppercase tracking-wide text-sm shadow-luxe hover:bg-secondary/90 transition">
              Order Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/40 px-8 py-4 text-cream font-medium uppercase tracking-wide text-sm hover:bg-cream/10 transition">
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
