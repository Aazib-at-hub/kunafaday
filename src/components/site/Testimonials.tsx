import { useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ayesha K.", city: "Lucknow", text: "The pistachio kunafa is unreal. Tasted like the one my grandmother used to make. Beautifully packaged too.", rating: 5 },
  { name: "Rohan M.", city: "Kanpur", text: "Ordered the corporate gift box for clients — they all messaged to ask where it came from. Absolutely premium.", rating: 5 },
  { name: "Priya S.", city: "Lucknow", text: "Arrived warm, ribbon-tied, and outrageously good. This is my new go-to dessert for every occasion.", rating: 5 },
  { name: "Fatima R.", city: "Delhi", text: "Authentic taste, modern presentation. The chocolate collection deserves its own award.", rating: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> Loved Reviews</p>
          <Quote className="h-12 w-12 text-secondary mx-auto opacity-80" />
          <blockquote className="mt-8 font-display text-3xl md:text-5xl font-light leading-tight text-balance">
            “{r.text}”
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-1 text-secondary">
            {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-5 text-cream/85">
            <span className="font-semibold">{r.name}</span> · {r.city}
          </p>
        </Reveal>
        <div className="mt-12 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="h-12 w-12 rounded-full border border-cream/30 hover:bg-cream/10 grid place-items-center">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, j) => (
              <button key={j} onClick={() => setI(j)} className={`h-1.5 rounded-full transition-all ${j === i ? "w-8 bg-secondary" : "w-3 bg-cream/30"}`} aria-label={`Review ${j + 1}`} />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % reviews.length)} className="h-12 w-12 rounded-full border border-cream/30 hover:bg-cream/10 grid place-items-center">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
