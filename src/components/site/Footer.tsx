import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kunafaday" className="h-14 w-auto rounded-md" />
          </div>
          <p className="mt-4 sm:mt-5 text-cream/70 leading-relaxed text-sm">
            Crafting authentic Middle Eastern desserts daily. From our ovens, ribbon-tied, to your table.
          </p>
          <div className="mt-5 sm:mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-full border border-cream/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 sm:mb-5 gold-text">Quick Links</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-cream/70">
            {["Shop All", "Collections", "Gift Boxes", "Our Story", "Track Order", "Wholesale"].map((l) => (
              <li key={l}><a href="#" className="hover:text-secondary transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 sm:mb-5 gold-text">Get in Touch</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-cream/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /><span>Lucknow, Uttar Pradesh, India</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /><span>+91 0522 000 0000</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /><span>hello@kunafaday.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 sm:mb-5 gold-text">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-4">Recipes, new collections, and members-only offers.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input type="email" required placeholder="Your email"
              className="flex-1 bg-cream/5 border border-cream/15 rounded-l-full px-4 py-3 text-sm placeholder:text-cream/40 focus:outline-none focus:border-secondary"
            />
            <button className="rounded-r-full bg-secondary text-secondary-foreground px-4 sm:px-5 text-sm font-semibold uppercase tracking-wide hover:bg-secondary/90">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Kunafa Day. Crafted with love in Lucknow, India.</p>
          <div className="flex gap-5 sm:gap-6">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
