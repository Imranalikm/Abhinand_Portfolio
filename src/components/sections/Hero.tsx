import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";
import { SocialIconOutline, SocialIconSolid } from "@/components/icons/SocialIcons";

/** Two small outline/solid social icons centered beneath the hero headline. */
export function HeroSocialIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="-translate-x-1/2 absolute content-stretch flex gap-[50px] items-center left-1/2 top-[755px]"
    >
      <motion.div whileHover={{ scale: 1.15, rotate: -8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconOutline />
      </motion.div>
      <motion.div whileHover={{ scale: 1.15, rotate: 8 }} whileTap={{ scale: 0.95 }}>
        <SocialIconSolid />
      </motion.div>
    </motion.div>
  );
}

/** "© All Rights Reserved" note, top-right of the hero. */
export function CopyrightNote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="[word-break:break-word] absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-center leading-[normal] left-[1222px] not-italic text-[#d5cdc4] top-[764px] whitespace-nowrap"
    >
      <p className="relative shrink-0 text-[18px]">©</p>
      <p className="relative shrink-0 text-[16px]">All Rights Reserved</p>
    </motion.div>
  );
}

/** Circular "Scroll" pill button. */
export function ScrollIndicator() {
  return (
    <motion.button
      type="button"
      aria-label="Scroll down"
      onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight * 0.85, behavior: "smooth" })}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bg-[rgba(217,217,217,0.2)] content-stretch flex flex-col items-center justify-center left-[247px] px-[9px] py-[23px] rounded-[31px] size-[75px] top-[465px] cursor-pointer"
    >
      <motion.p
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="[word-break:break-word] font-['Playfair_Display_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
      >
        Scroll
      </motion.p>
    </motion.button>
  );
}

/** Rotating gradient badge icon used next to the hero blurb. */
export function RotatingBadgeIcon() {
  return (
    <motion.div
      className="overflow-clip relative shrink-0 size-[50px]"
      data-name="398661759_75fab5f5-473f-423a-ad55-0abff206a258 1"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-[1.15%_1.13%_1.11%_1.13%]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8708 48.8706">
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.pad8700} fill="url(#paint0_linear_1_1315)" id="Vector" />
              <path d={svgPaths.p1b17a180} fill="url(#paint1_linear_1_1315)" id="Vector_2" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.p7821500} fill="url(#paint2_linear_1_1315)" id="Vector_3" />
              <path d={svgPaths.p20886480} fill="url(#paint3_linear_1_1315)" id="Vector_4" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.p2cfbce80} fill="url(#paint4_linear_1_1315)" id="Vector_5" />
              <path d={svgPaths.p5b9d300} fill="url(#paint5_linear_1_1315)" id="Vector_6" />
            </g>
            <g id="Group_5">
              <path d={svgPaths.p524b500} fill="url(#paint6_linear_1_1315)" id="Vector_7" />
              <path d={svgPaths.pe59dd00} fill="url(#paint7_linear_1_1315)" id="Vector_8" />
            </g>
            <g id="Group_6">
              <path d={svgPaths.p33986180} fill="url(#paint8_linear_1_1315)" id="Vector_9" />
              <path d={svgPaths.p3b4abc00} fill="url(#paint9_linear_1_1315)" id="Vector_10" />
            </g>
            <g id="Group_7">
              <path d={svgPaths.p2a922980} fill="url(#paint10_linear_1_1315)" id="Vector_11" />
              <path d={svgPaths.p13714f80} fill="url(#paint11_linear_1_1315)" id="Vector_12" />
            </g>
            <g id="Group_8">
              <path d={svgPaths.pfe3f800} fill="url(#paint12_linear_1_1315)" id="Vector_13" />
              <path d={svgPaths.p1a0b2200} fill="url(#paint13_linear_1_1315)" id="Vector_14" />
            </g>
            <g id="Group_9">
              <path d={svgPaths.p14207380} fill="url(#paint14_linear_1_1315)" id="Vector_15" />
              <path d={svgPaths.p88c1f80} fill="url(#paint15_linear_1_1315)" id="Vector_16" />
            </g>
            <path d={svgPaths.p2bdbfd00} fill="url(#paint16_linear_1_1315)" id="Vector_17" />
            <path d={svgPaths.p25c7eb00} fill="url(#paint17_linear_1_1315)" id="Vector_18" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1315" x1="25.0355" x2="40.7617" y1="23.8352" y2="8.10903">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1315" x1="38.2681" x2="28.608" y1="19.7324" y2="10.0723">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1315" x1="23.8352" x2="8.10909" y1="25.0355" y2="40.7616">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1315" x1="19.7325" x2="10.0724" y1="38.2681" y2="28.608">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1315" x1="25.0355" x2="40.7616" y1="25.0355" y2="40.7616">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1315" x1="29.1383" x2="38.7984" y1="38.2681" y2="28.608">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1315" x1="23.8352" x2="8.10905" y1="23.8352" y2="8.10909">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1315" x1="10.6026" x2="20.2627" y1="19.7325" y2="10.0724">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1315" x1="24.4354" x2="24.4354" y1="23.5866" y2="1.34647">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_1315" x1="30.8911" x2="17.2297" y1="11.3287" y2="11.3287">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_1315" x1="24.4354" x2="24.4354" y1="25.2841" y2="47.5242">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_1315" x1="30.8911" x2="17.2297" y1="37.542" y2="37.542">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_1315" x1="25.2841" x2="47.5242" y1="24.4353" y2="24.4353">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_1315" x1="37.542" x2="37.542" y1="30.8911" y2="17.2297">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_1315" x1="23.5866" x2="1.34654" y1="24.4353" y2="24.4353">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_1315" x1="11.3287" x2="11.3287" y1="30.8911" y2="17.2297">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_1315" x1="24.3244" x2="24.3244" y1="27.9465" y2="19.7611">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_1315" x1="20.9008" x2="30.4785" y1="20.8423" y2="29.8124">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B6B8C4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}

/** Short designer blurb next to the rotating badge icon. */
export function HeroBlurb() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute content-stretch flex gap-[15px] items-center left-[858px] top-[445px]"
    >
      <RotatingBadgeIcon />
      <p className="[word-break:break-word] font-['Montreal_Serial:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#d5cdc4] text-[16px] w-[292px]">Abhinandh kottappurath is a designer is passionate about designing intuitive experiences that augment human abilities and help businesses succeed.</p>
    </motion.div>
  );
}

/** Large decorative mandala/flower line-art that overlaps the hero area. */
export function DecorativeFlourish() {
  return (
    <div className="absolute contents inset-[8.14%_60.83%_90.27%_31.39%]" data-name="Layer_1">
      <motion.div
        className="absolute inset-[8.14%_60.83%_90.27%_31.39%]"
        data-name="Group"
        initial={{ opacity: 0, rotate: -15, scale: 0.85 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <motion.svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 112.124 108.1"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <g id="Group">
            <path d={svgPaths.pf83d8c0} id="Vector" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pc42d500} id="Vector_2" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ae64400} id="Vector_3" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2a942d00} id="Vector_4" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p24096400} id="Vector_5" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p21aad6c0} id="Vector_6" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p399b0f80} id="Vector_7" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p16058e80} id="Vector_8" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb3ee340} id="Vector_9" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p93edd80} id="Vector_10" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1f4ca200} id="Vector_11" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pc6cb680} id="Vector_12" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p4ea780} id="Vector_13" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3ef44580} id="Vector_14" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p25cfb100} id="Vector_15" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3ea91c80} id="Vector_16" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3b4c8900} id="Vector_17" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p11864100} id="Vector_18" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p6777300} id="Vector_19" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p270dfa00} id="Vector_20" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c425a00} id="Vector_21" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2bcc5280} id="Vector_22" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pa5ad300} id="Vector_23" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p32806ef0} id="Vector_24" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p280580} id="Vector_25" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb89a800} id="Vector_26" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3d574800} id="Vector_27" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2a71c400} id="Vector_28" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2027b400} id="Vector_29" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p35588700} id="Vector_30" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p120b1100} id="Vector_31" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c2b0c00} id="Vector_32" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1170b300} id="Vector_33" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p14a69180} id="Vector_34" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1a2f7e00} id="Vector_35" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p13e2c900} id="Vector_36" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p17707200} id="Vector_37" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p5d38ef0} id="Vector_38" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1f231980} id="Vector_39" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p86fb880} id="Vector_40" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2f752c00} id="Vector_41" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p318e2900} id="Vector_42" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p14dc9300} id="Vector_43" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pd17a100} id="Vector_44" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pe827180} id="Vector_45" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3eb77600} id="Vector_46" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p18ff0b00} id="Vector_47" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p19361800} id="Vector_48" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p29f07000} id="Vector_49" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p17574100} id="Vector_50" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2d30ec00} id="Vector_51" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p39ab0480} id="Vector_52" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p529400} id="Vector_53" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p143f2000} id="Vector_54" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1ed7ce20} id="Vector_55" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p8b90c00} id="Vector_56" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1e99b780} id="Vector_57" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p333f7d80} id="Vector_58" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3cfafef0} id="Vector_59" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3530ba00} id="Vector_60" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p81cb780} id="Vector_61" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p29b4a80} id="Vector_62" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p39f4fc00} id="Vector_63" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1cf97880} id="Vector_64" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p202e6100} id="Vector_65" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p169a9e78} id="Vector_66" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3540eff0} id="Vector_67" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p22070200} id="Vector_68" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p16558b00} id="Vector_69" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p21cc3a00} id="Vector_70" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p340f8f80} id="Vector_71" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pca07200} id="Vector_72" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p27811400} id="Vector_73" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2f8ada00} id="Vector_74" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p328664c0} id="Vector_75" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3fb65dc0} id="Vector_76" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p33994df1} id="Vector_77" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3f271c80} id="Vector_78" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pe6b2b00} id="Vector_79" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p198656c0} id="Vector_80" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p37ca0900} id="Vector_81" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p12e60270} id="Vector_82" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p370e01f0} id="Vector_83" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p24ee8380} id="Vector_84" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3ab44ef2} id="Vector_85" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p274b7880} id="Vector_86" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p5379700} id="Vector_87" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2308da00} id="Vector_88" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p38ef7a00} id="Vector_89" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pdc9f80} id="Vector_90" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p84f8c80} id="Vector_91" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb6b1900} id="Vector_92" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ea2d100} id="Vector_93" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p24b91200} id="Vector_94" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p34cf6040} id="Vector_95" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3bbdfe00} id="Vector_96" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2fef8500} id="Vector_97" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p28aec100} id="Vector_98" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1e035f0} id="Vector_99" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p31f5ef00} id="Vector_100" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p28623a70} id="Vector_101" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2e92e600} id="Vector_102" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p16da3800} id="Vector_103" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3da0aa72} id="Vector_104" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p14f91180} id="Vector_105" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3d4ee400} id="Vector_106" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb4fd80} id="Vector_107" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1d12fe00} id="Vector_108" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p226186f0} id="Vector_109" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p116acf80} id="Vector_110" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3527d700} id="Vector_111" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p177e7600} id="Vector_112" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3976e500} id="Vector_113" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pa609540} id="Vector_114" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.paa04500} id="Vector_115" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2fa9880} id="Vector_116" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p13fbd100} id="Vector_117" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p25b0a100} id="Vector_118" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pcf26400} id="Vector_119" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p30b19000} id="Vector_120" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2855fcc0} id="Vector_121" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p21f77900} id="Vector_122" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.peb80480} id="Vector_123" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1b59e780} id="Vector_124" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb616b80} id="Vector_125" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p31810d00} id="Vector_126" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ae74d80} id="Vector_127" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1b220180} id="Vector_128" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1d750d00} id="Vector_129" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1a2e6580} id="Vector_130" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1ff08280} id="Vector_131" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3d88cd80} id="Vector_132" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1b6f8f70} id="Vector_133" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3e996af0} id="Vector_134" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p14a10e00} id="Vector_135" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p21d92480} id="Vector_136" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3e46abf0} id="Vector_137" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pe672910} id="Vector_138" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p38e72b70} id="Vector_139" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1a37a700} id="Vector_140" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p13c500} id="Vector_141" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p28d60900} id="Vector_142" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2be0d700} id="Vector_143" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ac07c00} id="Vector_144" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1981b600} id="Vector_145" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p16e02300} id="Vector_146" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p10c74300} id="Vector_147" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p39e06300} id="Vector_148" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pf094000} id="Vector_149" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ce19c80} id="Vector_150" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p25131880} id="Vector_151" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p25146700} id="Vector_152" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2db9ae80} id="Vector_153" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p11e704a0} id="Vector_154" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p17c2e10} id="Vector_155" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pab1ff80} id="Vector_156" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p27a58780} id="Vector_157" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p9d4e600} id="Vector_158" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2dcf3800} id="Vector_159" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2670d80} id="Vector_160" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2977aac0} id="Vector_161" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p22eeb280} id="Vector_162" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ac04280} id="Vector_163" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p19ba0400} id="Vector_164" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p28f9e600} id="Vector_165" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pba72500} id="Vector_166" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p285fe000} id="Vector_167" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3dcd2e00} id="Vector_168" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p8d6a900} id="Vector_169" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c04cdc0} id="Vector_170" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pa8b5600} id="Vector_171" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p53ce700} id="Vector_172" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p9701800} id="Vector_173" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pedc8f00} id="Vector_174" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1f0e4600} id="Vector_175" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3429a200} id="Vector_176" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p12385840} id="Vector_177" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pfd0e600} id="Vector_178" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p37dccc68} id="Vector_179" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p17fe2980} id="Vector_180" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pf517400} id="Vector_181" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3edd000} id="Vector_182" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p122767b0} id="Vector_183" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p6f92200} id="Vector_184" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ab22af0} id="Vector_185" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p328f7f00} id="Vector_186" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pdfb5380} id="Vector_187" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p29d79c00} id="Vector_188" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p35359cc0} id="Vector_189" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p362a4780} id="Vector_190" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2801e400} id="Vector_191" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3856a300} id="Vector_192" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c44c180} id="Vector_193" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p39ef1280} id="Vector_194" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3f2f4a00} id="Vector_195" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pdf0ff80} id="Vector_196" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3bab9700} id="Vector_197" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3e0f3a00} id="Vector_198" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p6504a00} id="Vector_199" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p17ae5b40} id="Vector_200" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2ec89bf0} id="Vector_201" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3039ae00} id="Vector_202" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1952170} id="Vector_203" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2004b200} id="Vector_204" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pdbf4c80} id="Vector_205" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1c37e680} id="Vector_206" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p24ccb000} id="Vector_207" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1cc0000} id="Vector_208" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2889e00} id="Vector_209" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1a402600} id="Vector_210" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p12492e00} id="Vector_211" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1eb73880} id="Vector_212" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3cef6cc0} id="Vector_213" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1989e000} id="Vector_214" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c506a80} id="Vector_215" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2f10e0a8} id="Vector_216" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p458eb00} id="Vector_217" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2227b380} id="Vector_218" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p38f6f370} id="Vector_219" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pc22c600} id="Vector_220" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p48eed00} id="Vector_221" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pfab4700} id="Vector_222" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p3f1f4a00} id="Vector_223" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2bb09800} id="Vector_224" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p8c02000} id="Vector_225" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p348cae80} id="Vector_226" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p45738f0} id="Vector_227" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p218acf80} id="Vector_228" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1eee3500} id="Vector_229" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pb418300} id="Vector_230" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2c1cd400} id="Vector_231" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2d186580} id="Vector_232" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p337a3d80} id="Vector_233" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p289c4500} id="Vector_234" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p265e1300} id="Vector_235" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p39ca800} id="Vector_236" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1f1dde80} id="Vector_237" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2dfdd7a0} id="Vector_238" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p20539600} id="Vector_239" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p2fbb1820} id="Vector_240" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p24ed580} id="Vector_241" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p37ebfe0} id="Vector_242" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.pe847c80} id="Vector_243" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p66e6300} id="Vector_244" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1e751c00} id="Vector_245" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p1d853900} id="Vector_246" stroke="var(--stroke-0, #EFEFEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
          </g>
        </motion.svg>
      </motion.div>
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
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroLine}
        transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[0] left-[50px] text-[#d5cdc4] text-[50px] top-[735px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        <p className="leading-[40px] mb-0">Biography</p>
        <p className="leading-[40px]">2025</p>
      </motion.div>
      <motion.p
        initial="hidden"
        animate="show"
        variants={heroLine}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[275px] text-[#d5cdc4] text-[120px] top-[283px] whitespace-pre"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >{`UI UX  Designer`}</motion.p>
      <motion.p
        initial="hidden"
        animate="show"
        variants={heroLine}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[274px] text-[#d5cdc4] text-[120px] top-[159px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        An Experienced
      </motion.p>
      <motion.p
        initial="hidden"
        animate="show"
        variants={heroLine}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[275px] text-[#d5cdc4] text-[120px] top-[407px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        — Based in
      </motion.p>
      <motion.p
        initial="hidden"
        animate="show"
        variants={heroLine}
        transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[normal] left-[721px] text-[#d5cdc4] text-[120px] top-[531px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        India
      </motion.p>
      <HeroSocialIcons />
      <CopyrightNote />
      <ScrollIndicator />
      <HeroBlurb />
      <DecorativeFlourish />
    </>
  );
}
