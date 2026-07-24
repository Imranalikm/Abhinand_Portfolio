import { motion } from "framer-motion";
import { inViewOnce } from "@/lib/motion";

export function WorkTogetherMarquee() {
  return (
    <div className="absolute content-stretch flex font-['Playfair:Regular',sans-serif] font-normal gap-[24px] items-center leading-[55px] left-[17px] overflow-clip text-[#d5cdc4] text-[70px] top-[5935px] uppercase w-[1423px] whitespace-nowrap">
      <motion.div
        className="[word-break:break-word] flex gap-[24px] items-center shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Let’s work together.
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Let’s work together.
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Let’s work together.
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Let’s work together.
        </p>
      </motion.div>
    </div>
  );
}

/** "Let's work together" marquee heading + closing statement above the footer. */
export function CallToAction() {
  return (
    <>
      <WorkTogetherMarquee />
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[50px] text-[#d5cdc4] text-[60px] top-[6145px] w-[567px]"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        Crafting experiences that connect people and products.
      </motion.p>
    </>
  );
}
