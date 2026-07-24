import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Portfolio } from "@/components/Portfolio";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 6740;

/**
 * The page is authored at a fixed 1440x6740 canvas (the lowest content — the
 * footer row — bottoms out around y=6678; 6740 leaves a small breathing margin).
 * This wrapper measures its own width, computes a uniform scale factor, and
 * renders the fixed-size design tree inside an absolutely positioned inner
 * layer with a CSS transform. The inner layer MUST stay `position: absolute`
 * (not static) - otherwise the unscaled canvas is still reserved in normal
 * flow even though it paints smaller, producing a double scrollbar.
 */
export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.offsetWidth ?? DESIGN_WIDTH;
      setScale(width / DESIGN_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#d5cdc4] origin-left z-50"
        style={{ scaleX: progress }}
      />
      <div ref={containerRef} className="bg-black relative w-full overflow-hidden" style={{ height: DESIGN_HEIGHT * scale }}>
        <div className="absolute top-0 left-0 origin-top-left" style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})` }}>
          <Portfolio />
        </div>
      </div>
    </>
  );
}
