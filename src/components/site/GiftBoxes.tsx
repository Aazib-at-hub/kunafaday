import { Reveal } from "./Reveal";
import giftHero from "@/assets/giftbox-hero.jpg";
import { Gift } from "lucide-react";

const boxes = [
  { name: "Family Box", pieces: "12 pieces", price: "₹2,500" },
  { name: "Premium Gift Box", pieces: "18 pieces", price: "₹4,200" },
  { name: "Celebration Collection", pieces: "24 pieces", price: "₹5,600" },
  { name: "Corporate Gift Box", pieces: "36 pieces", price: "₹8,900" },
];

export function GiftBoxes() {
  return (
    <section id="gifts" className="relative py-16 sm:py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal>
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> Signature Gifting</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-balance">
            Gifts wrapped in <em className="gold-text not-italic font-medium">emerald & gold</em>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-lg">
            From intimate dinners to corporate occasions — our handcrafted boxes arrive ribbon-tied and ready to delight.
          </p>
          <ul className="mt-8 sm:mt-10 divide-y divide-border">
            {boxes.map((b) => (
              <li key={b.name} className="py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-6 group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center">
                    <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base sm:text-xl truncate">{b.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{b.pieces} · gift-ready</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                  <span className="font-display text-primary text-base sm:text-lg">{b.price}</span>
                  <button className="text-xs tracking-[0.2em] uppercase font-semibold text-primary border-b border-primary/40 pb-0.5 group-hover:border-primary hidden sm:block">
                    Shop
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 transition sm:hidden">
            Shop All Gift Boxes
          </button>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-2 lg:mt-0">
            <img src={giftHero} alt="Luxury kunafa gift box in emerald and gold" loading="lazy" className="rounded-2xl shadow-luxe w-full object-cover" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-secondary text-secondary-foreground rounded-full h-20 w-20 sm:h-28 sm:w-28 grid place-items-center text-center font-display p-3 sm:p-4 shadow-luxe animate-float-slow">
              <span className="text-sm sm:text-base">Gift<br/>Ready</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
