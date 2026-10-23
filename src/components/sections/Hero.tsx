import { m } from "framer-motion";
import { SocialIconOutline, SocialIconSolid } from "@/components/icons/SocialIcons";
import hero01Svg from "@/assets/svg/hero-01.svg";
import hero02Svg from "@/assets/svg/hero-02.svg";

/** Two small outline/solid social icons centered beneath the hero headline. */
export function HeroSocialIcons() {
  return (
    <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="-translate-x-1/2 absolute content-stretch flex gap-[50px] items-center left-1/2 top-[755px]">
      <m.div whileHover={{ scale: 1.15, rotate: -8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconOutline />
      </m.div>
      <m.div whileHover={{ scale: 1.15, rotate: 8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconSolid />
      </m.div>
    </m.div>
  );
}

/** "© All Rights Reserved" note, top-right of the hero. */
export function CopyrightNote() {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="[word-break:break-word] absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-center leading-[normal] left-[1222px] not-italic text-[#d5cdc4] top-[764px] whitespace-nowrap">
      <p className="relative shrink-0 text-[18px]">©</p>
      <p className="relative shrink-0 text-[16px]">All Rights Reserved</p>
    </m.div>
  );
}

/** Circular "Scroll" pill button. */
export function ScrollIndicator() {
  return (
    <m.button type="button" aria-label="Scroll down" onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight * 0.85, behavior: "smooth" })} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="absolute bg-[rgba(217,217,217,0.2)] content-stretch flex flex-col items-center justify-center left-[247px] px-[9px] py-[23px] rounded-[31px] size-[75px] top-[465px] cursor-pointer">
      <m.p animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="[word-break:break-word] font-['Playfair_Display_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        Scroll
      </m.p>
    </m.button>
  );
}

/** Rotating gradient badge icon used next to the hero blurb. */
export function RotatingBadgeIcon() {
  return (
    <m.div className="overflow-clip relative shrink-0 size-[50px]" data-name="398661759_75fab5f5-473f-423a-ad55-0abff206a258 1" animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}>
      <div className="absolute inset-[1.15%_1.13%_1.11%_1.13%]" data-name="Group">
        <img className="absolute block inset-0 size-full" src={hero01Svg} alt="" decoding="async" draggable={false} />
      </div>
    </m.div>
  );
}

/** Short designer blurb next to the rotating badge icon. */
export function HeroBlurb() {
  return (
    <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute content-stretch flex gap-[15px] items-center left-[858px] top-[445px]">
      <RotatingBadgeIcon />
      <p className="[word-break:break-word] font-['Montreal_Serial:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#d5cdc4] text-[16px] w-[292px]">Abhinandh kottappurath is a designer is passionate about designing intuitive experiences that augment human abilities and help businesses succeed.</p>
    </m.div>
  );
}

/** Large decorative mandala/flower line-art that overlaps the hero area. */
export function DecorativeFlourish() {
  return (
    <div className="absolute contents inset-[8.14%_60.83%_90.27%_31.39%]" data-name="Layer_1">
      <m.div className="absolute inset-[8.14%_60.83%_90.27%_31.39%]" data-name="Group" initial={{ opacity: 0, rotate: -15, scale: 0.85 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "50% 50%" }}>
        <m.img className="absolute block inset-0 size-full" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50% 50%" }} src={hero02Svg} alt="" decoding="async" draggable={false} />
      </m.div>
    </div>
  );
}

const heroLine = {
  hidden: { opacity: 0, y: 46 },
  show: { opacity: 1, y: 0 },
};

/** Hero section: big headline, scroll indicator, blurb and decorative flourish. */
export function Hero() {
  return (
    <>
      <m.div initial="hidden" animate="show" variants={heroLine} transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }} className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[0] left-[50px] text-[#d5cdc4] text-[50px] top-[735px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        <p className="leading-[40px] mb-0">Biography</p>
        <p className="leading-[40px]">2025</p>
      </m.div>
      <m.p initial="hidden" animate="show" variants={heroLine} transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }} className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[275px] text-[#d5cdc4] text-[120px] top-[283px] whitespace-pre" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>{`UI UX  Designer`}</m.p>
      <m.p initial="hidden" animate="show" variants={heroLine} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[274px] text-[#d5cdc4] text-[120px] top-[159px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        An Experienced
      </m.p>
      <m.p initial="hidden" animate="show" variants={heroLine} transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[275px] text-[#d5cdc4] text-[120px] top-[407px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        — Based in
      </m.p>
      <m.p initial="hidden" animate="show" variants={heroLine} transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[721px] text-[#d5cdc4] text-[120px] top-[531px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        India
      </m.p>
      <HeroSocialIcons />
      <CopyrightNote />
      <ScrollIndicator />
      <HeroBlurb />
      <DecorativeFlourish />
    </>
  );
}
