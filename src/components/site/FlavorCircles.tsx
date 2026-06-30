import classic from "@/assets/collection-classic.jpg";
import pistachio from "@/assets/collection-pistachio.jpg";
import chocolate from "@/assets/collection-chocolate.jpg";
import lotus from "@/assets/collection-lotus.jpg";
import signature from "@/assets/collection-signature.jpg";
import giftbox from "@/assets/collection-giftbox.jpg";

const flavors = [
  { name: "Pistachio", img: pistachio },
  { name: "Classic", img: classic },
  { name: "Chocolate", img: chocolate },
  { name: "Lotus", img: lotus },
  { name: "Signature", img: signature },
  { name: "Gift Boxes", img: giftbox },
];

export function FlavorCircles() {
  return (
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-light">Choose Your Flavor</h2>
        <p className="mt-3 text-muted-foreground">Explore our sweets by your favorite ingredients</p>

        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {flavors.map((f) => (
            <a key={f.name} href="#bestsellers" className="group flex flex-col items-center">
              <div className="aspect-square w-full rounded-full overflow-hidden ring-1 ring-border shadow-soft">
                <img src={f.img} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="mt-4 text-sm md:text-base font-medium text-secondary border-b border-secondary/40 pb-1">{f.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
