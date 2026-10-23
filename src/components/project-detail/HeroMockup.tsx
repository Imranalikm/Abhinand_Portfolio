import type { Project } from "@/data/projects";
import { ResponsiveImage } from "@/components/ResponsiveImage";

interface HeroMockupProps {
  mockup: Project["mockup"];
}

/** Project's hero preview image, used at the top of the detail page hero. Sized and framed per project from `mockup`. It's the page's LCP element, so it loads eagerly. */
export function HeroMockup({ mockup }: HeroMockupProps) {
  return (
    <div className={`relative mx-auto w-full overflow-hidden ${mockup.shadow ? "shadow-2xl" : ""}`} style={{ maxWidth: mockup.w, aspectRatio: `${mockup.w}/${mockup.h}`, borderRadius: mockup.radius ?? 0 }}>
      <ResponsiveImage picture={mockup.image} alt={`${mockup.brand} website preview`} sizes={`(min-width: ${mockup.w + 100}px) ${mockup.w}px, calc(100vw - 32px)`} className="h-full w-full" style={{ objectFit: mockup.fit ?? "cover", objectPosition: mockup.position }} priority />
    </div>
  );
}
