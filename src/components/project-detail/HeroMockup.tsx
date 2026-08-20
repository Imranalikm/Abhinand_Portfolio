import type { Project } from "@/data/projects";

interface HeroMockupProps {
  mockup: Project["mockup"];
}

/** Project's hero preview image, used at the top of the detail page hero. */
export function HeroMockup({ mockup }: HeroMockupProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] shadow-2xl" style={{ aspectRatio: "1340/602" }}>
      <img src={mockup.image} alt={mockup.brand} className="h-full w-full object-cover" />
    </div>
  );
}
