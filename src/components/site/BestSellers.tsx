import { Reveal } from "./Reveal";
import classic from "@/assets/collection-classic.jpg";
import pistachio from "@/assets/collection-pistachio.jpg";
import chocolate from "@/assets/collection-chocolate.jpg";
import lotus from "@/assets/collection-lotus.jpg";
import signature from "@/assets/collection-signature.jpg";
import { Eye, ShoppingBag, Star } from "lucide-react";

const products = [
  { name: "Royal Pistachio Kunafa", desc: "Aleppo pistachios, clotted cream, rosewater syrup.", price: "₹1,899", rating: 4.9, img: pistachio, tag: "Bestseller" },
  { name: "Classic Cheese Kunafa", desc: "Golden kataifi, fresh akkawi, orange blossom.", price: "₹1,499", rating: 4.8, img: classic, tag: "Signature" },
  { name: "Dark Chocolate Kunafa", desc: "Belgian 70%, hazelnut praline, gold leaf.", price: "₹2,099", rating: 4.9, img: chocolate, tag: "New" },
  { name: "Lotus Dream Kunafa", desc: "Biscoff crumble, caramel drizzle, vanilla cream.", price: "₹1,699", rating: 4.7, img: lotus, tag: "Trending" },
  { name: "Signature Tasting Box", desc: "Five flavours in one luxurious tray.", price: "₹2,999", rating: 5.0, img: signature, tag: "Editor's Pick" },
];

export function BestSellers() {
  return (
    <section id="bestsellers" className="relative py-16 sm:py-24 md:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
          <Reveal>
            <p className="divider-ornament mb-3"><span className="divider-ornament-line" /> Best Sellers</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light max-w-xl text-balance">
              Loved by thousands across the region
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="#" className="inline-flex items-center gap-2 text-primary font-medium uppercase tracking-wide text-sm border-b border-primary/40 pb-1 hover:border-primary">
              View all products
            </a>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxe transition-all duration-500 flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-2 sm:px-3 py-1 rounded-full">{p.tag}</span>
                  {/* Show add-to-cart buttons on larger screens via hover; always show on mobile */}
                  <div className="absolute inset-x-2 bottom-2 flex gap-1.5 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:transition-all">
                    <button className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full bg-cream/95 text-foreground text-xs sm:text-sm py-2 sm:py-2.5 hover:bg-cream">
                      <ShoppingBag className="h-3.5 w-3.5" /> Add
                    </button>
                    <button aria-label="Quick view" className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-full bg-cream/95 text-foreground hover:bg-cream">
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="p-3 sm:p-5 flex flex-col gap-1.5 sm:gap-2 flex-1">
                  <div className="flex items-center gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{p.rating}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-xl leading-snug">{p.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{p.desc}</p>
                  <div className="mt-auto pt-2 sm:pt-3 flex items-center justify-between">
                    <span className="font-display text-base sm:text-lg text-primary">{p.price}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground hidden sm:block">Fresh today</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
