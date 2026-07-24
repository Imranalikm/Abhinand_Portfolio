import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";
import { SocialIconOutline, SocialIconSolid } from "@/components/icons/SocialIcons";
import { inViewOnce } from "@/lib/motion";

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
      <motion.div whileHover={{ scale: 1.15, rotate: -8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconOutline />
      </motion.div>
      <motion.div whileHover={{ scale: 1.15, rotate: 8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconSolid />
      </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewOnce}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute content-stretch flex gap-[199px] items-end justify-end left-[391px] top-[6410px]"
    >
      <FooterMain />
      <motion.p
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -4, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="[text-underline-position:from-font] [word-break:break-word] capitalize decoration-from-font decoration-solid font-['Montreal_Serial:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[24px] underline whitespace-nowrap cursor-pointer"
      >
        Back to top
      </motion.p>
    </motion.div>
  );
}

/** Small decorative line-art mark beside "Back to top", vertically centered on the footer row. */
export function FooterDecorativeMark() {
  return (
    <motion.div
      className="absolute left-[1290px] top-[6390px] w-[94px] h-[192px]"
      data-name="Group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={inViewOnce}
      transition={{ duration: 1 }}
    >
      <motion.svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 94.1207 191.962"
        animate={{ rotate: [0, 6, 0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <g id="Group">
          <path d={svgPaths.p3b66f00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          <path d={svgPaths.p34868580} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
          <path d={svgPaths.pca2be80} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
          <path d={svgPaths.p13463b00} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
          <path d={svgPaths.p34bd0600} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
          <path d={svgPaths.pe6ef880} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
          <path d={svgPaths.p14ccdb00} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
          <path d={svgPaths.p4e27300} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
          <path d={svgPaths.peceac00} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
          <path d={svgPaths.p2f44da80} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
          <path d={svgPaths.p38d9eff0} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
          <path d={svgPaths.pcf03540} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
          <path d={svgPaths.p1ff9fc00} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
          <path d={svgPaths.p38977340} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
          <path d={svgPaths.p6f38800} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
          <path d={svgPaths.p31820c00} fill="var(--fill-0, #D5CDC4)" id="Vector_16" />
          <path d={svgPaths.p390e3680} fill="var(--fill-0, #D5CDC4)" id="Vector_17" />
          <path d={svgPaths.p1f12da00} fill="var(--fill-0, #D5CDC4)" id="Vector_18" />
          <path d={svgPaths.p2ffe6b00} fill="var(--fill-0, #D5CDC4)" id="Vector_19" />
          <path d={svgPaths.p2275ce80} fill="var(--fill-0, #D5CDC4)" id="Vector_20" />
          <path d={svgPaths.p18089600} fill="var(--fill-0, #D5CDC4)" id="Vector_21" />
          <path d={svgPaths.p11bdb940} fill="var(--fill-0, #D5CDC4)" id="Vector_22" />
          <path d={svgPaths.p19bf870} fill="var(--fill-0, #D5CDC4)" id="Vector_23" />
          <path d={svgPaths.p3b793400} fill="var(--fill-0, #D5CDC4)" id="Vector_24" />
          <path d={svgPaths.p2aee8100} fill="var(--fill-0, #D5CDC4)" id="Vector_25" />
          <path d={svgPaths.p30b93e00} fill="var(--fill-0, #D5CDC4)" id="Vector_26" />
          <path d={svgPaths.p2a8d7100} fill="var(--fill-0, #D5CDC4)" id="Vector_27" />
          <path d={svgPaths.pd6ff980} fill="var(--fill-0, #D5CDC4)" id="Vector_28" />
          <path d={svgPaths.p126c7780} fill="var(--fill-0, #D5CDC4)" id="Vector_29" />
          <path d={svgPaths.p280ffd40} fill="var(--fill-0, #D5CDC4)" id="Vector_30" />
          <path d={svgPaths.pc970c00} fill="var(--fill-0, #D5CDC4)" id="Vector_31" />
          <path d={svgPaths.p32f4b900} fill="var(--fill-0, #D5CDC4)" id="Vector_32" />
          <path d={svgPaths.p2d7683f0} fill="var(--fill-0, #D5CDC4)" id="Vector_33" />
          <path d={svgPaths.p3a176c00} fill="var(--fill-0, #D5CDC4)" id="Vector_34" />
          <path d={svgPaths.p7b10370} fill="var(--fill-0, #D5CDC4)" id="Vector_35" />
          <path d={svgPaths.pdf04d80} fill="var(--fill-0, #D5CDC4)" id="Vector_36" />
          <path d={svgPaths.p9ae2dc0} fill="var(--fill-0, #D5CDC4)" id="Vector_37" />
          <path d={svgPaths.p2bd93000} fill="var(--fill-0, #D5CDC4)" id="Vector_38" />
          <path d={svgPaths.p12415300} fill="var(--fill-0, #D5CDC4)" id="Vector_39" />
          <path d={svgPaths.p257d2040} fill="var(--fill-0, #D5CDC4)" id="Vector_40" />
          <path d={svgPaths.p1587fc0} fill="var(--fill-0, #D5CDC4)" id="Vector_41" />
          <path d={svgPaths.p13485700} fill="var(--fill-0, #D5CDC4)" id="Vector_42" />
          <path d={svgPaths.p1135e000} fill="var(--fill-0, #D5CDC4)" id="Vector_43" />
          <path d={svgPaths.p2ca7cef0} fill="var(--fill-0, #D5CDC4)" id="Vector_44" />
          <path d={svgPaths.p3fb4bc80} fill="var(--fill-0, #D5CDC4)" id="Vector_45" />
          <path d={svgPaths.p322b5580} fill="var(--fill-0, #D5CDC4)" id="Vector_46" />
          <path d={svgPaths.p2aeed600} fill="var(--fill-0, #D5CDC4)" id="Vector_47" />
          <path d={svgPaths.p1e808200} fill="var(--fill-0, #D5CDC4)" id="Vector_48" />
          <path d={svgPaths.p1b97e100} fill="var(--fill-0, #D5CDC4)" id="Vector_49" />
          <path d={svgPaths.pdd84780} fill="var(--fill-0, #D5CDC4)" id="Vector_50" />
          <path d={svgPaths.p15132500} fill="var(--fill-0, #D5CDC4)" id="Vector_51" />
          <path d={svgPaths.p363bfa00} fill="var(--fill-0, #D5CDC4)" id="Vector_52" />
          <path d={svgPaths.pe076400} fill="var(--fill-0, #D5CDC4)" id="Vector_53" />
          <path d={svgPaths.pbe9cae0} fill="var(--fill-0, #D5CDC4)" id="Vector_54" />
          <path d={svgPaths.p22f79900} fill="var(--fill-0, #D5CDC4)" id="Vector_55" />
          <path d={svgPaths.p3ad40700} fill="var(--fill-0, #D5CDC4)" id="Vector_56" />
          <path d={svgPaths.p3f8a0870} fill="var(--fill-0, #D5CDC4)" id="Vector_57" />
          <path d={svgPaths.p2debe480} fill="var(--fill-0, #D5CDC4)" id="Vector_58" />
          <path d={svgPaths.p3043d080} fill="var(--fill-0, #D5CDC4)" id="Vector_59" />
          <path d={svgPaths.p34449f00} fill="var(--fill-0, #D5CDC4)" id="Vector_60" />
          <path d={svgPaths.p175b6c00} fill="var(--fill-0, #D5CDC4)" id="Vector_61" />
          <path d={svgPaths.p1fb1acf0} fill="var(--fill-0, #D5CDC4)" id="Vector_62" />
          <path d={svgPaths.p26522e00} fill="var(--fill-0, #D5CDC4)" id="Vector_63" />
          <path d={svgPaths.p342c8300} fill="var(--fill-0, #D5CDC4)" id="Vector_64" />
          <path d={svgPaths.p3c096af2} fill="var(--fill-0, #D5CDC4)" id="Vector_65" />
          <path d={svgPaths.p12042700} fill="var(--fill-0, #D5CDC4)" id="Vector_66" />
          <path d={svgPaths.p31d8d900} fill="var(--fill-0, #D5CDC4)" id="Vector_67" />
          <path d={svgPaths.p154ceb80} fill="var(--fill-0, #D5CDC4)" id="Vector_68" />
          <path d={svgPaths.p2f13fe00} fill="var(--fill-0, #D5CDC4)" id="Vector_69" />
          <path d={svgPaths.pa94bf80} fill="var(--fill-0, #D5CDC4)" id="Vector_70" />
          <path d={svgPaths.pbc64200} fill="var(--fill-0, #D5CDC4)" id="Vector_71" />
          <path d={svgPaths.p3cd00100} fill="var(--fill-0, #D5CDC4)" id="Vector_72" />
          <path d={svgPaths.p3bfc5a00} fill="var(--fill-0, #D5CDC4)" id="Vector_73" />
          <path d={svgPaths.p14086c20} fill="var(--fill-0, #D5CDC4)" id="Vector_74" />
          <path d={svgPaths.p315a5c00} fill="var(--fill-0, #D5CDC4)" id="Vector_75" />
          <path d={svgPaths.p4c36200} fill="var(--fill-0, #D5CDC4)" id="Vector_76" />
          <path d={svgPaths.p38061480} fill="var(--fill-0, #D5CDC4)" id="Vector_77" />
          <path d={svgPaths.p32a9d600} fill="var(--fill-0, #D5CDC4)" id="Vector_78" />
          <path d={svgPaths.p1c48c880} fill="var(--fill-0, #D5CDC4)" id="Vector_79" />
          <path d={svgPaths.p13e4f500} fill="var(--fill-0, #D5CDC4)" id="Vector_80" />
          <path d={svgPaths.p3daac580} fill="var(--fill-0, #D5CDC4)" id="Vector_81" />
          <path d={svgPaths.p2b044300} fill="var(--fill-0, #D5CDC4)" id="Vector_82" />
          <path d={svgPaths.p317297c0} fill="var(--fill-0, #D5CDC4)" id="Vector_83" />
          <path d={svgPaths.p266209f1} fill="var(--fill-0, #D5CDC4)" id="Vector_84" />
          <path d={svgPaths.p38ff3400} fill="var(--fill-0, #D5CDC4)" id="Vector_85" />
          <path d={svgPaths.p3999d600} fill="var(--fill-0, #D5CDC4)" id="Vector_86" />
          <path d={svgPaths.p1ec55200} fill="var(--fill-0, #D5CDC4)" id="Vector_87" />
          <path d={svgPaths.p12980780} fill="var(--fill-0, #D5CDC4)" id="Vector_88" />
          <path d={svgPaths.pd41a100} fill="var(--fill-0, #D5CDC4)" id="Vector_89" />
          <path d={svgPaths.p3f51b078} fill="var(--fill-0, #D5CDC4)" id="Vector_90" />
          <path d={svgPaths.p18d98000} fill="var(--fill-0, #D5CDC4)" id="Vector_91" />
          <path d={svgPaths.p31757680} fill="var(--fill-0, #D5CDC4)" id="Vector_92" />
          <path d={svgPaths.p1e33c700} fill="var(--fill-0, #D5CDC4)" id="Vector_93" />
          <path d={svgPaths.p295b6000} fill="var(--fill-0, #D5CDC4)" id="Vector_94" />
          <path d={svgPaths.p1de9e100} fill="var(--fill-0, #D5CDC4)" id="Vector_95" />
          <path d={svgPaths.p364ec200} fill="var(--fill-0, #D5CDC4)" id="Vector_96" />
          <path d={svgPaths.p19437c00} fill="var(--fill-0, #D5CDC4)" id="Vector_97" />
          <path d={svgPaths.p35664e80} fill="var(--fill-0, #D5CDC4)" id="Vector_98" />
          <path d={svgPaths.p34f10b00} fill="var(--fill-0, #D5CDC4)" id="Vector_99" />
          <path d={svgPaths.p2b12c480} fill="var(--fill-0, #D5CDC4)" id="Vector_100" />
          <path d={svgPaths.p29dcec00} fill="var(--fill-0, #D5CDC4)" id="Vector_101" />
          <path d={svgPaths.p154f2380} fill="var(--fill-0, #D5CDC4)" id="Vector_102" />
          <path d={svgPaths.p306357f0} fill="var(--fill-0, #D5CDC4)" id="Vector_103" />
          <path d={svgPaths.pdcdc00} fill="var(--fill-0, #D5CDC4)" id="Vector_104" />
          <path d={svgPaths.p2dc06c00} fill="var(--fill-0, #D5CDC4)" id="Vector_105" />
          <path d={svgPaths.p39dee680} fill="var(--fill-0, #D5CDC4)" id="Vector_106" />
          <path d={svgPaths.peba8f70} fill="var(--fill-0, #D5CDC4)" id="Vector_107" />
          <path d={svgPaths.p7ada80} fill="var(--fill-0, #D5CDC4)" id="Vector_108" />
          <path d={svgPaths.p1b486700} fill="var(--fill-0, #D5CDC4)" id="Vector_109" />
          <path d={svgPaths.p1c28a100} fill="var(--fill-0, #D5CDC4)" id="Vector_110" />
          <path d={svgPaths.p2f762e00} fill="var(--fill-0, #D5CDC4)" id="Vector_111" />
          <path d={svgPaths.p1b70c580} fill="var(--fill-0, #D5CDC4)" id="Vector_112" />
          <path d={svgPaths.p3be93540} fill="var(--fill-0, #D5CDC4)" id="Vector_113" />
          <path d={svgPaths.p1145df00} fill="var(--fill-0, #D5CDC4)" id="Vector_114" />
          <path d={svgPaths.p16eed300} fill="var(--fill-0, #D5CDC4)" id="Vector_115" />
        </g>
      </motion.svg>
    </motion.div>
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
