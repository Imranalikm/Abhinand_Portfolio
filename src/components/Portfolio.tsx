import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ResumeBanner } from "@/components/sections/ResumeBanner";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

/**
 * Full one-page portfolio, authored at a fixed 1440x7800 canvas.
 * Rendered inside the scaling wrapper in `App.tsx`.
 */
export function Portfolio() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop - 1">
      <Navbar />
      <Hero />
      <About />
      <ClientLogos />
      <Skills />
      <Experience />
      <ResumeBanner />
      <PortfolioShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
}
