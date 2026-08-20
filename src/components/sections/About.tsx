import { motion } from "framer-motion";
import { inViewOnce } from "@/lib/motion";

const imgAbhinandhPotfolio = "/abhinandh-portrait.png";
const imgAbhinandhPotfolio1 = "/abhinandh-portrait.png";

/** "About" label, headline, portrait photo and bio paragraphs. */
export function AboutContent() {
  return (
    <div className="absolute contents left-[50px] top-[1051px]">
      <motion.p
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.6 }}
        className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[50px] not-italic text-[#d5cdc4] text-[18px] top-[1051px] whitespace-nowrap"
      >
        About
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[172px] text-[#d5cdc4] text-[60px] top-[1051px] w-[391px]"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        Privileged to be working as a UI/UX Designer at Wisbato Softwares,
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={inViewOnce}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[718px] left-[730px] top-[1051px] w-[670px]"
        data-name="Abhinandh-potfolio"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-bottom size-full" src={imgAbhinandhPotfolio} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[95.355%] to-black" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Regular',sans-serif] leading-[0] left-[172px] not-italic text-[#d5cdc4] text-[18px] top-[1461px] w-[559px]"
      >
        <p className="leading-[normal] mb-0">I am Abhinandh, a passionate and detail-oriented UI/UX Designer with 3.6 years of experience in crafting user-friendly digital solutions. Currently working at Wisbato Pvt Ltd, I have successfully designed and optimized UI/UX experiences across various industries, including e-commerce, real estate, fintech, healthcare, education, corporate, and logistics.</p>
        <p className="leading-[normal]">I specialize in user research, wireframing, prototyping, and usability testing, leveraging tools like Figma and Adobe XD to create visually compelling and functional designs. My expertise in information architecture, interaction design, and user-centered design principles allows me to craft intuitive digital experiences that drive user engagement and business growth.</p>
      </motion.div>
    </div>
  );
}

/** Second stacked portrait layer + duplicated headline painted on top (as authored). */
export function AboutPhotoOverlay() {
  return (
    <div className="absolute contents left-[172px] top-[1051px]">
      <p className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[172px] text-[#d5cdc4] text-[60px] top-[1051px] w-[391px]" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        Privileged to be working as a UI/UX Designer at Wisbato Softwares,
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={inViewOnce}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[718px] left-[730px] top-[1051px] w-[660px]"
        data-name="Abhinandh-potfolio"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-bottom size-full" src={imgAbhinandhPotfolio1} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[95.355%] to-black" />
        </div>
      </motion.div>
    </div>
  );
}

/** About section: intro copy, portrait photo (two stacked layers) and bio text. */
export function About() {
  return (
    <>
      <AboutContent />
      <AboutPhotoOverlay />
    </>
  );
}
