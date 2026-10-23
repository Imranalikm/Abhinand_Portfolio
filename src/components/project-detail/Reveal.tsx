import type { ReactNode } from "react";
import { m } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Rise distance in px. */
  y?: number;
}

/** Fades and rises its content into place the first time it scrolls into view (project detail page micro-motion). */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  return (
    <m.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay, ease: easeOut }}>
      {children}
    </m.div>
  );
}
