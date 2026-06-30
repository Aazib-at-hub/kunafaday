const items = [
  "Handcrafted to Perfection",
  "Gifts That Impress",
  "Celebrate Every Moment",
  "Freshly Baked Daily",
  "Delivered Across India",
];

export function BrandMarquee() {
  const loop = [...items, ...items, ...items];
  return (
    <section className="bg-foreground text-cream overflow-hidden py-10">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-16 font-display text-2xl md:text-3xl tracking-wide">
            <span className="text-secondary">✦</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
