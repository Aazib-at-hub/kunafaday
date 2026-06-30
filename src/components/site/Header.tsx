import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const topLinks = [
  { label: "About us", href: "#story" },
  { label: "Our Process", href: "#process" },
  { label: "FAQs", href: "#faq" },
  { label: "Visit us", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const mainNav: { label: string; href: string; menu?: string[] }[] = [
  { label: "Kunafa", href: "#bestsellers", menu: ["Classic", "Pistachio", "Chocolate", "Lotus"] },
  { label: "Collections", href: "#collections", menu: ["Signature", "Seasonal", "New Arrivals"] },
  { label: "Middle Eastern Treats", href: "#collections", menu: ["Baklava", "Maamoul", "Basbousa"] },
  { label: "Gift Boxes", href: "#gifts" },
  { label: "Corporate & Bulk Gifting", href: "#contact", menu: ["Weddings", "Festivals", "Corporate"] },
  { label: "Our Story", href: "#story" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-cream border-b border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
      {/* Announcement bar */}
      <div className="bg-secondary/90 text-secondary-foreground text-center text-[11px] md:text-[13px] tracking-[0.15em] py-2 px-4">
        FREE Premium Gift Box on orders ₹5000+
      </div>

      {/* Top utility row — desktop only */}
      <div className="hidden md:block border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between text-[12px] text-foreground/75">
          <nav className="flex items-center gap-7">
            {topLinks.map((l) => (
              <a key={l.label} href={l.href} className="tracking-wide hover:text-secondary transition">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-secondary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-secondary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-secondary"><Youtube className="h-4 w-4" /></a>
            <span className="mx-2 h-4 w-px bg-foreground/20" />
            <button className="inline-flex items-center gap-1.5 tracking-wide hover:text-secondary">
              <span aria-hidden>🇮🇳</span> India (INR ₹) <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Logo row */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1 justify-self-start">
          <button aria-label="Search" className="hidden md:grid h-10 w-10 place-items-center rounded-full hover:bg-muted text-foreground">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full text-foreground hover:bg-muted transition"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <a href="#home" className="justify-self-center flex items-center">
          <img src="/logo.png" alt="Kunafaday" className="h-12 md:h-16 lg:h-20 w-auto" />
        </a>

        <div className="flex items-center gap-1 justify-self-end">
          <button aria-label="Search" className="lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-muted text-foreground">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="hidden md:grid h-10 w-10 place-items-center rounded-full hover:bg-muted text-foreground">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Cart" className="relative h-10 w-10 grid place-items-center rounded-full hover:bg-muted text-foreground">
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-[10px] grid place-items-center text-secondary-foreground font-semibold">0</span>
          </button>
        </div>
      </div>

      {/* Main nav — large screens only */}
      <nav className="hidden lg:block border-t border-border/60">
        <ul className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center gap-8 xl:gap-10">
          {mainNav.map((n) => (
            <li key={n.label} className="group relative">
              <a
                href={n.href}
                className="inline-flex items-center gap-1 text-[12px] tracking-[0.16em] uppercase font-medium text-foreground/85 hover:text-secondary transition"
              >
                {n.label}
                {n.menu && <ChevronDown className="h-3 w-3 opacity-70" />}
              </a>
              {n.menu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="min-w-[200px] rounded-xl bg-card text-foreground shadow-luxe border border-border/60 p-2">
                    {n.menu.map((m) => (
                      <a key={m} href={n.href} className="block px-3 py-2 rounded-lg text-sm hover:bg-muted">{m}</a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mx-3 mb-3 rounded-2xl bg-card shadow-soft border border-border overflow-hidden animate-reveal-up">
          <nav className="flex flex-col divide-y divide-border/60">
            {mainNav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-5 py-4 hover:bg-muted text-foreground uppercase tracking-wide text-sm font-medium"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="px-5 py-4 border-t border-border/60 flex flex-col gap-3">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
              {topLinks.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="hover:text-secondary transition">
                  {n.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-1">
              <a href="#" aria-label="Facebook" className="hover:text-secondary"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-secondary"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-secondary"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-secondary"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
