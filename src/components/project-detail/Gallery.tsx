import { useRef } from "react";
import type { GalleryImage } from "@/data/projects";
import { ResponsiveImage } from "@/components/ResponsiveImage";

interface GalleryProps {
  images: GalleryImage[];
}

/** Draggable horizontal image rail on a dark background, used mid-page on project detail pages. */
export function Gallery({ images }: GalleryProps) {
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  function onDown(e: React.MouseEvent) {
    drag.current = { active: true, startX: e.pageX, scrollLeft: rail.current?.scrollLeft ?? 0 };
  }
  function onUp() {
    drag.current.active = false;
  }
  function onMove(e: React.MouseEvent) {
    if (!drag.current.active || !rail.current) return;
    e.preventDefault();
    rail.current.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX) * 1.2;
  }

  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#222] md:min-h-[420px]">
      <div ref={rail} className="flex cursor-grab select-none items-end justify-center-safe gap-4 overflow-x-auto overflow-y-visible overscroll-x-contain px-4 pt-10 active:cursor-grabbing [scrollbar-width:none] max-md:snap-x max-md:snap-mandatory max-md:scroll-px-4 md:gap-[26px] md:px-16 md:pt-20" onMouseDown={onDown} onMouseUp={onUp} onMouseLeave={onUp} onMouseMove={onMove}>
        {images.map((g, i) => (
          // Height-driven with the design aspect ratio; phones cap the height so tall screenshots fit the viewport.
          <div key={i} className="h-[var(--h)] shrink-0 snap-start overflow-hidden max-md:h-[min(var(--h),55vh)]" style={{ "--h": `${g.h}px`, aspectRatio: `${g.w} / ${g.h}` } as React.CSSProperties}>
            <ResponsiveImage picture={g.src} alt={g.label} sizes={`${g.w}px`} draggable={false} className="pointer-events-none block h-full w-full object-cover object-top" />
          </div>
        ))}
      </div>
    </div>
  );
}
