import type { Project } from "@/data/projects";

interface HeroMockupProps {
  mockup: Project["mockup"];
}

/** Project's hero preview image, used at the top of the detail page hero. Sized and framed per project from `mockup`. */
export function HeroMockup({ mockup }: HeroMockupProps) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden ${mockup.shadow ? "shadow-2xl" : ""}`}
      style={{ maxWidth: mockup.w, aspectRatio: `${mockup.w}/${mockup.h}`, borderRadius: mockup.radius ?? 0 }}
    >
      <img
        src={mockup.image}
        alt={mockup.brand}
        className="h-full w-full"
        style={{ objectFit: mockup.fit ?? "cover", objectPosition: mockup.position }}
      />
    </div>
  );
}
