import { motion } from "framer-motion";
import { resumeBannerBg as imgRectangle1 } from "@/assets/images";
import { inViewOnce } from "@/lib/motion";

/** Full-width banner image with a centered "Download my resume" call-out. */
export function ResumeBanner() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={inViewOnce}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[209px] left-0 top-[4617px] w-[1440px] overflow-hidden"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </motion.div>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        whileHover={{ scale: 1.06, opacity: 0.75 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Bold',sans-serif] leading-[normal] left-[calc(50%-87px)] not-italic text-[#d5cdc4] text-[18px] top-[4817px] whitespace-nowrap cursor-pointer"
      >
        Download my resume
      </motion.a>
    </>
  );
}
