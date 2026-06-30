import { Reveal } from "./Reveal";
import craft from "@/assets/story-craft.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-secondary/40" />
            <img src={craft} alt="Handcrafting kataifi dough" loading="lazy" className="relative rounded-2xl shadow-luxe object-cover aspect-[4/5] w-full" />
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-cream rounded-2xl p-4 sm:p-6 shadow-luxe max-w-[180px] sm:max-w-[220px] hidden sm:block">
              <p className="font-display text-3xl sm:text-4xl text-primary">25+</p>
              <p className="text-sm text-muted-foreground">Years perfecting one humble dessert</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> Our Story</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-balance">
            Our passion for <em className="gold-text not-italic font-medium">authentic kunafa</em>
          </h2>
          <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-foreground/80 text-base sm:text-lg leading-relaxed">
            <p>Kunafa Day was born from a love of authentic Middle Eastern desserts, brought to Lucknow by our founder who learned the patient art of stretching kataifi by hand in the kitchens of Nablus.</p>
            <p>Today, that same recipe — unchanged, uncompromised — is crafted fresh in our Lucknow kitchen and delivered to your door within hours. We refuse shortcuts, freezing, or substitutes. Just butter, cheese, pistachio, and time.</p>
            <p>Every dessert that leaves our kitchen carries a piece of the Levant, made with love right here in India.</p>
          </div>
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[
              ["12M+", "Pieces baked"],
              ["Lucknow's", "Favorite dessert"],
              ["100%", "Halal certified"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl sm:text-3xl text-primary">{n}</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
