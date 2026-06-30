import { Reveal } from "./Reveal";
import a from "@/assets/collection-classic.jpg";
import b from "@/assets/collection-pistachio.jpg";
import c from "@/assets/collection-chocolate.jpg";
import d from "@/assets/collection-lotus.jpg";
import e from "@/assets/collection-signature.jpg";
import f from "@/assets/collection-giftbox.jpg";
import g from "@/assets/story-craft.jpg";
import h from "@/assets/giftbox-hero.jpg";
import { Instagram } from "lucide-react";

const imgs = [a, b, c, d, e, f, g, h];

export function Gallery() {
  return (
    <section className="relative py-28 md:py-36 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="divider-ornament mb-4"><span className="divider-ornament-line" /> @kunafaday</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Tag us in your <em className="gold-text not-italic font-medium">sweetest moments</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href="#" className="group relative block overflow-hidden rounded-xl aspect-square">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors grid place-items-center">
                  <Instagram className="h-7 w-7 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
