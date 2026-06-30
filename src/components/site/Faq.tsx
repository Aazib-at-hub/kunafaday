import { useState } from "react";
import { Reveal } from "./Reveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How fresh is your kunafa when it arrives?", a: "Every order is baked the same morning and delivered within hours in temperature-controlled couriers." },
  { q: "How should I store my kunafa?", a: "Kunafa is best enjoyed fresh on the day of delivery. Reheat briefly at 160°C for the perfect crisp texture." },
  { q: "Are your ingredients halal?", a: "Yes — all ingredients are 100% halal certified and sourced from trusted regional suppliers." },
  { q: "Do you offer custom gift orders?", a: "Absolutely. From engraved boxes to bespoke flavour selections, our concierge team can curate any occasion." },
  { q: "What areas do you deliver to?", a: "We deliver same-day across Lucknow and offer next-day delivery to major cities across Uttar Pradesh and Delhi NCR." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-balance">Everything you'd like to know</h2>
        </Reveal>
        <div className="mt-10 sm:mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left group"
                >
                  <span className="font-display text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors">{f.q}</span>
                  <span className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full border border-border grid place-items-center text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-5 sm:pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-muted-foreground leading-relaxed text-sm sm:text-base">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
