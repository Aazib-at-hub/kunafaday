import classic from "@/assets/collection-classic.jpg";
import giftbox from "@/assets/collection-giftbox.jpg";
import pistachio from "@/assets/collection-pistachio.jpg";

const tiles = [
  { title: "Shop Kunafa", cta: "Order Now", img: classic, href: "#bestsellers" },
  { title: "Gifting", cta: "Try Now", img: giftbox, href: "#gifts" },
  { title: "Pistachio Range", cta: "Try Now", img: pistachio, href: "#collections" },
];

export function PromoTrio() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
        {tiles.map((t) => (
          <a key={t.title} href={t.href} className="relative block aspect-[16/10] overflow-hidden group">
            <img src={t.img} alt={t.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            <div className="relative h-full flex flex-col justify-center p-8 text-cream">
              <h3 className="font-display text-3xl md:text-4xl mb-5">{t.title}</h3>
              <span className="inline-block w-fit bg-secondary/95 text-secondary-foreground px-5 py-2 text-[11px] tracking-[0.25em] uppercase font-semibold">
                {t.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
