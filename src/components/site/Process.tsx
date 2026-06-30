import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Premium Ingredients", d: "Hand-selected pistachios, butter, fresh akkawi." },
  { n: "02", t: "Fresh Kataifi", d: "Stretched and shredded the morning of baking." },
  { n: "03", t: "Handcrafted", d: "Each tray layered by our master kunafa chefs." },
  { n: "04", t: "Baked to Perfection", d: "Stone ovens at exactly 215°C for the perfect crisp." },
  { n: "05", t: "Fresh Delivery", d: "Sealed warm and rushed to your door." },
];

export function Process() {
  return (
    <section className="relative py-28 md:py-36 bg-accent/15">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> How We Make It</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Five steps. One <em className="gold-text not-italic font-medium">obsession</em>.
          </h2>
        </Reveal>
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="relative text-center group">
                  <div className="mx-auto h-20 w-20 rounded-full bg-cream border-2 border-secondary text-primary grid place-items-center font-display text-2xl shadow-soft group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[24ch] mx-auto">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
