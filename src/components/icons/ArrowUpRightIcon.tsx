import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";

interface ArrowUpRightIconProps {
  top: number;
  dimmed?: boolean;
  /** When true, plays the same animation as a direct hover — driven by hovering the row it belongs to. */
  active?: boolean;
}

/** Arrow icon used on each portfolio project row (6x reuse in the source). */
export function ArrowUpRightIcon({ top, dimmed, active }: ArrowUpRightIconProps) {
  return (
    <motion.div
      className="absolute left-[1352px] size-[38px] cursor-pointer"
      style={{ top }}
      data-name="arrow-up-right"
      animate={active ? { x: 6, y: -6, scale: 1.1 } : { x: 0, y: 0, scale: 1 }}
      whileHover={{ x: 6, y: -6, scale: 1.1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <motion.g
          id="arrow-up-right"
          animate={{ opacity: dimmed ? (active ? 1 : 0.5) : 1 }}
          transition={{ duration: 0.3 }}
        >
          <path d={svgPaths.p2fe87880} id="Vector" stroke="var(--stroke-0, #D5CDC4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pb49d80} id="Vector_2" stroke="var(--stroke-0, #D5CDC4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
