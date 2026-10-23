import { m } from "framer-motion";
import { SocialIconOutline, SocialIconSolid } from "@/components/icons/SocialIcons";
import { inViewOnce } from "@/lib/motion";
import footer01Svg from "@/assets/svg/footer-01.svg";

export function FooterServicesColumn() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[119px]">
      <p className="font-['Montreal_Serial:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Services</p>
      <div className="content-stretch flex flex-col font-['Montreal_Serial:Regular',sans-serif] gap-[5px] items-start relative shrink-0 text-[18px] w-full">
        <p className="relative shrink-0 whitespace-nowrap">Product design</p>
        <p className="relative shrink-0 whitespace-nowrap">UI Design</p>
        <p className="relative shrink-0 whitespace-nowrap">UX Design</p>
        <p className="relative shrink-0 whitespace-nowrap">Design strategy</p>
      </div>
    </div>
  );
}

export function FooterContactColumn() {
  return (
    <div className="content-stretch flex flex-col font-['Montreal_Serial:Medium',sans-serif] gap-[5px] items-start relative shrink-0 text-[24px]">
      <p className="lowercase relative shrink-0 whitespace-nowrap">abhinandhkottappurath@gmail.com</p>
      <p className="capitalize relative shrink-0 whitespace-nowrap">+91 9995561738</p>
      <p className="capitalize relative shrink-0 whitespace-nowrap">Kerala-India</p>
    </div>
  );
}

export function FooterServicesAndContact() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex gap-[127px] items-end leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#d5cdc4] w-[620px]">
      <FooterServicesColumn />
      <FooterContactColumn />
    </div>
  );
}

/** Two small social icons repeated in the footer (same glyphs as the hero). */
export function FooterSocialIcons() {
  return (
    <div className="col-1 content-stretch flex gap-[50px] items-center ml-0 mt-[198px] relative row-1">
      <m.div whileHover={{ scale: 1.15, rotate: -8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconOutline />
      </m.div>
      <m.div whileHover={{ scale: 1.15, rotate: 8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconSolid />
      </m.div>
    </div>
  );
}

export function FooterMain() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <FooterServicesAndContact />
      <FooterSocialIcons />
      <p className="[word-break:break-word] capitalize col-1 font-['Montreal_Serial:Medium',sans-serif] leading-[normal] ml-[230px] mt-[203px] not-italic relative row-1 text-[#d5cdc4] text-[24px] whitespace-nowrap">© 2025 Abhinandh KP. All Rights Reserved.</p>
    </div>
  );
}

export function FooterContent() {
  return (
    <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={inViewOnce} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute content-stretch flex gap-[199px] items-end justify-end left-[391px] top-[6660px]">
      <FooterMain />
      <m.p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ y: -4, opacity: 0.7 }} transition={{ duration: 0.2 }} className="[text-underline-position:from-font] [word-break:break-word] capitalize decoration-from-font decoration-solid font-['Montreal_Serial:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[24px] underline whitespace-nowrap cursor-pointer">
        Back to top
      </m.p>
    </m.div>
  );
}

/** Small decorative line-art mark beside "Back to top", vertically centered on the footer row. */
export function FooterDecorativeMark() {
  return (
    <m.div className="absolute left-[1290px] top-[6640px] w-[94px] h-[192px]" data-name="Group" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={inViewOnce} transition={{ duration: 1 }}>
      <img className="absolute block inset-0 size-full animate-[sway_16s_ease-in-out_infinite] motion-reduce:animate-none" style={{ transformOrigin: "50% 50%" }} src={footer01Svg} alt="" decoding="async" draggable={false} />
    </m.div>
  );
}

/** Footer: services/contact columns, social icons, copyright and "back to top". */
export function Footer() {
  return (
    <>
      <FooterContent />
      <FooterDecorativeMark />
    </>
  );
}
