import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { m } from "framer-motion";
import type { GalleryImage } from "@/data/projects";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { easeOut } from "@/lib/motion";

interface GalleryProps {
  images: GalleryImage[];
}

/** Auto-scroll speed in CSS px per second. */
const SPEED = 40;
/** How long the rail waits after the last drag/touch/wheel before it starts moving again. */
const RESUME_DELAY = 2000;

/**
 * Horizontal rail of page screenshots on a dark band, used mid-page on project detail pages. When the set is
 * wider than the viewport it auto-scrolls in a seamless loop (the set is rendered twice and the scroll position
 * wraps by one set width). It pauses on hover, drag, touch and wheel, while off-screen or in a hidden tab, and
 * never moves for visitors who prefer reduced motion. Dragging with a mouse still works.
 */
export function Gallery({ images }: GalleryProps) {
  const rail = useRef<HTMLDivElement>(null);
  const firstSet = useRef<HTMLDivElement>(null);
  const [loops, setLoops] = useState(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const state = useRef({ hovering: false, pausedUntil: 0, visible: false, pos: 0, setWidth: 0 });

  // Loop only when one set of screenshots is wider than the rail.
  useEffect(() => {
    const el = rail.current;
    const set = firstSet.current;
    if (!el || !set) return;
    const measure = () => setLoops(images.length > 1 && set.scrollWidth > el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images.length]);

  useEffect(() => {
    const el = rail.current;
    const set = firstSet.current;
    if (!el || !set || !loops) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const s = state.current;
    s.pos = el.scrollLeft;
    const io = new IntersectionObserver(([entry]) => (s.visible = entry.isIntersecting), { threshold: 0.1 });
    io.observe(el);

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      // One full set = the first copy's width plus the gap before the second copy.
      s.setWidth = set.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
      const idle = !s.hovering && !drag.current.active && now > s.pausedUntil && s.visible && !document.hidden;
      if (idle) {
        s.pos += (SPEED * dt) / 1000;
        if (s.pos >= s.setWidth) s.pos -= s.setWidth;
        el.scrollLeft = s.pos;
      } else {
        // Follow wherever the visitor scrolled or dragged to, wrapping so the loop stays seamless.
        if (el.scrollLeft >= s.setWidth) el.scrollLeft -= s.setWidth;
        else if (el.scrollLeft <= 0 && s.setWidth) el.scrollLeft += s.setWidth;
        s.pos = el.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [loops]);

  const pause = () => (state.current.pausedUntil = performance.now() + RESUME_DELAY);

  function onDown(e: React.MouseEvent) {
    drag.current = { active: true, startX: e.pageX, scrollLeft: rail.current?.scrollLeft ?? 0 };
  }
  function onUp() {
    if (drag.current.active) pause();
    drag.current.active = false;
  }
  function onMove(e: React.MouseEvent) {
    if (!drag.current.active || !rail.current) return;
    e.preventDefault();
    rail.current.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX) * 1.2;
  }

  const renderSet = (copy: boolean) =>
    images.map((g, i) => (
      // Height-driven with the design aspect ratio; phones cap the height so tall screenshots fit the viewport.
      <m.div key={`${copy ? "b" : "a"}${i}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: Math.min(i, 6) * 0.06, ease: easeOut }} className="group/shot h-[var(--h)] shrink-0 overflow-hidden rounded-[4px] max-md:h-[min(var(--h),55vh)]" style={{ "--h": `${g.h}px`, aspectRatio: `${g.w} / ${g.h}` } as CSSProperties}>
        <ResponsiveImage picture={g.src} alt={copy ? "" : g.label} sizes={`${g.w}px`} draggable={false} className="pointer-events-none block h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-[1.03]" />
      </m.div>
    ));

  return (
    <div className="relative overflow-hidden bg-[#222]">
      <div
        ref={rail}
        className="flex cursor-grab select-none items-start justify-center-safe gap-4 overflow-x-auto overscroll-x-contain px-4 py-10 active:cursor-grabbing [scrollbar-width:none] md:gap-[26px] md:px-16 md:py-20"
        onMouseEnter={() => (state.current.hovering = true)}
        onMouseLeave={() => {
          state.current.hovering = false;
          onUp();
        }}
        onMouseDown={onDown}
        onMouseUp={onUp}
        onMouseMove={onMove}
        onTouchStart={pause}
        onTouchEnd={pause}
        onWheel={pause}
      >
        <div ref={firstSet} className="flex shrink-0 items-start gap-4 md:gap-[26px]">
          {renderSet(false)}
        </div>
        {loops && (
          <div aria-hidden="true" className="flex shrink-0 items-start gap-4 md:gap-[26px]">
            {renderSet(true)}
          </div>
        )}
      </div>
    </div>
  );
}
