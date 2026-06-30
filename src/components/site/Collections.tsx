import { Reveal } from "./Reveal";
import classic from "@/assets/collection-classic.jpg";
import pistachio from "@/assets/collection-pistachio.jpg";
import chocolate from "@/assets/collection-chocolate.jpg";
import lotus from "@/assets/collection-lotus.jpg";
import signature from "@/assets/collection-signature.jpg";
import giftbox from "@/assets/collection-giftbox.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { name: "Classic Kunafa", desc: "The timeless original — crispy kataifi & sweet cheese.", img: classic },
  { name: "Pistachio Collection", desc: "Stone-ground Aleppo pistachios in every bite.", img: pistachio },
  { name: "Chocolate Collection", desc: "Belgian couverture meets golden kataifi.", img: chocolate },
  { name: "Lotus Collection", desc: "Caramelised biscoff layered over warm kunafa.", img: lotus },
  { name: "Signature Specials", desc: "Limited recipes from our master kunafa chef.", img: signature },
  { name: "Gift Boxes", desc: "Ribbon-wrapped, ready for celebrations.", img: giftbox },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-ornament mb-4 sm:mb-5">
            <span className="divider-ornament-line" /> Featured Collections <span className="divider-ornament-line" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light text-balance">
            Six worlds of <em className="gold-text not-italic font-medium">kunafa</em>
          </h2>
          <p className="mt-4 sm:mt-5 text-muted-foreground text-base sm:text-lg">
            Each collection is a story of heritage, ingredients, and the people who craft them.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 90}>
              <a
                href="#bestsellers"
                className="group relative block overflow-hidden rounded-xl sm:rounded-2xl bg-card shadow-soft hover:shadow-luxe transition-all duration-500"
              >
                <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 text-cream">
                  <div className="flex items-end justify-between gap-2 sm:gap-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-2xl md:text-3xl">{it.name}</h3>
                      <p className="mt-0.5 sm:mt-1 text-cream/80 text-xs sm:text-sm max-w-[28ch] hidden sm:block">{it.desc}</p>
                    </div>
                    <span className="h-8 w-8 sm:h-11 sm:w-11 shrink-0 grid place-items-center rounded-full bg-secondary text-secondary-foreground group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
