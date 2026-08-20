import { useRef } from "react";
import type { GalleryImage } from "@/data/projects";

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
    <div className="relative min-h-[420px] overflow-hidden bg-[#222]">
      <div
        ref={rail}
        className="flex cursor-grab select-none items-end gap-[26px] overflow-x-auto overflow-y-visible px-16 pt-20 active:cursor-grabbing [scrollbar-width:none]"
        onMouseDown={onDown}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onMouseMove={onMove}
      >
        {images.map((g, i) => (
          <div key={i} className="shrink-0 overflow-hidden" style={{ width: g.w, height: g.h }}>
            <img
              src={g.src}
              alt={g.label}
              draggable={false}
              className="pointer-events-none block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
