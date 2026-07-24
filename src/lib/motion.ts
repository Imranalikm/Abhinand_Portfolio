import type { Transition, Variants } from "framer-motion";

/** Shared easing curve — a soft "expo out" feel used across the site. */
export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

/** Default viewport config: animate once, slightly before the element is fully on screen. */
export const inViewOnce = { once: true, amount: 0.25 } as const;

/** Fade up + in — the workhorse reveal for headlines, paragraphs and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

/** Plain fade — for images / large blocks where a slide would feel heavy. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easeOut } },
};

/** Fade up from the left — used for list rows (timeline, projects, portfolio). */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

/** Scale + fade — for photos and device mockups. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: easeOut } },
};

/** Parent wrapper that staggers its `fadeUp`/`fadeLeft` children into view. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
