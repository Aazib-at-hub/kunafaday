import { Reveal } from "./Reveal";
import { Sparkles, Leaf, ScrollText, Truck } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Freshly Made Daily", desc: "Every order is crafted the same morning it's delivered — never frozen, never stored." },
  { icon: Leaf, title: "Premium Ingredients", desc: "Aleppo pistachios, akkawi cheese, and stone-pressed syrups imported direct." },
  { icon: ScrollText, title: "Authentic Recipes", desc: "Generations-old recipes from the kitchens of Nablus and Damascus." },
  { icon: Truck, title: "Fast & Fresh Delivery", desc: "Same-day delivery across the city in temperature-controlled couriers." },
];

export function WhyUs() {
  return (
    <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "url(/src/assets/arabesque.png)", backgroundSize: "420px" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> Why Kunafa Day</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-balance">
            A standard of <em className="gold-text not-italic font-medium">craftsmanship</em> you can taste in every bite
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 sm:p-8 hover:bg-cream/[0.08] hover:border-secondary/50 transition-all">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-secondary text-secondary-foreground grid place-items-center group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-5 sm:mt-6 font-display text-xl sm:text-2xl">{f.title}</h3>
                <p className="mt-2 sm:mt-3 text-cream/75 leading-relaxed text-sm sm:text-base">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
