import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { BestSellers } from "@/components/site/BestSellers";
import { PromoTrio } from "@/components/site/PromoTrio";
import { FlavorCircles } from "@/components/site/FlavorCircles";
import { WhyUs } from "@/components/site/WhyUs";
import { Story } from "@/components/site/Story";
import { Process } from "@/components/site/Process";
import { GiftBoxes } from "@/components/site/GiftBoxes";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Header />
      <Hero />
      <BestSellers />
      <Collections />
      <PromoTrio />
      <FlavorCircles />
      <WhyUs />
      <Story />
      <Process />
      <GiftBoxes />
      <Testimonials />
      <Gallery />
      <Faq />
      <FinalCta />
      <BrandMarquee />
      <Footer />
    </main>
  );
}
