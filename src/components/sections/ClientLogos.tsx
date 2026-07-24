import type { ReactNode } from "react";
import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";
import { logoCoxFly as imgFile6805C68504B4BLogoCoxFly1, logoWapo as imgWapo13, logoForexiveMark as img47159693817496696455757011363054315679541367NRemovebgPreview, logoPratigya as imgWhatsAppImage20250116At114258Am, logoReworkHealth as imgImportedPhoto17314035089991 } from "@/assets/images";
import { inViewOnce } from "@/lib/motion";

/** Gives a logo a subtle lift + brighten on hover. */
function LogoItem({ children }: { children: ReactNode }) {
  return (
    <motion.div whileHover={{ y: -4, opacity: 0.75 }} transition={{ duration: 0.25 }} className="shrink-0">
      {children}
    </motion.div>
  );
}

/** Infinite horizontal marquee track — duplicates its content once so the loop is seamless. */
function MarqueeRow({ children, reverse = false, duration = 28 }: { children: ReactNode; reverse?: boolean; duration?: number }) {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex items-center w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center gap-[65px] pr-[65px] shrink-0">{children}</div>
        <div className="flex items-center gap-[65px] pr-[65px] shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------------------- Shelter Creations --------------------------- */
export function ShelterCreationsMark() {
  return (
    <div className="h-[42.398px] relative shrink-0 w-[37.979px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.9792 42.3981">
        <g id="Group 241">
          <path d={svgPaths.p3253d1f0} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          <g id="Red">
            <path d={svgPaths.p3cc28580} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function ShelterCreationsWordmark() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[word-break:break-word] capitalize col-1 font-['Prociono:Regular',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#d5cdc4] text-[17px] whitespace-nowrap">SHELTER CREATIONS</p>
      <div className="col-1 h-0 ml-0 mt-[21px] relative row-1 w-[177px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 1">
            <line id="Line 16" stroke="var(--stroke-0, #D5CDC4)" x2="177" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 content-stretch flex gap-[2px] items-center ml-0 mt-[24px] relative row-1">
        <p className="[word-break:break-word] capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[7px] whitespace-nowrap">CONSTRUCTION</p>
        <div className="relative shrink-0 size-[2px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <g id="Ellipse 6">
              <circle cx="1" cy="1" fill="var(--fill-0, #D5CDC4)" r="1" />
              <circle cx="1" cy="1" fill="var(--fill-1, #D5CDC4)" r="1" />
            </g>
          </svg>
        </div>
        <p className="[word-break:break-word] capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[7px] whitespace-nowrap">INTERIORS</p>
        <div className="relative shrink-0 size-[2px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <g id="Ellipse 6">
              <circle cx="1" cy="1" fill="var(--fill-0, #D5CDC4)" r="1" />
              <circle cx="1" cy="1" fill="var(--fill-1, #D5CDC4)" r="1" />
            </g>
          </svg>
        </div>
        <p className="[word-break:break-word] capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[7px] whitespace-nowrap">SWMMING POOLS</p>
      </div>
    </div>
  );
}

export function ShelterCreationsLogo() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ShelterCreationsMark />
      <ShelterCreationsWordmark />
    </div>
  );
}

/* --------------------------------- Cox & Fly ------------------------------- */
export function CoxFlyLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23px] mt-[40px] place-items-start relative row-1">
        <p className="[word-break:break-word] col-1 font-['Poppins:Medium',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#d5cdc4] text-[12px] whitespace-nowrap">{`TOURS & TRAVELS`}</p>
      </div>
      <div className="col-1 h-[49px] ml-0 mt-0 relative row-1 w-[169.213px]" data-name="_file6805c68504b4b-LOGO-COX-FLY 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgFile6805C68504B4BLogoCoxFly1} />
      </div>
    </div>
  );
}

/* ------------------------------ Soham Travels ------------------------------ */
export function SohamTravelsLogo() {
  return (
    <div className="h-[38px] overflow-clip relative shrink-0 w-[93.575px]" data-name="SOHAM-Travels-logo-1 (traced)">
      <div className="absolute flex inset-[0_0_13.69%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Red">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.5757 32.7988">
              <g id="Red">
                <path d={svgPaths.pde4d200} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p33182a40} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p9eba900} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p274f3000} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p3e832780} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.p37416230} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p2a3e2900} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p1c0147c0} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p28599b80} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p1ba26b00} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.pe748700} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p1643f8c0} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p2c7ca980} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[10.62%_5.08%_0_5.08%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Cyan">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.075 33.9625">
              <g id="Cyan">
                <path d={svgPaths.p2a2b1700} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p14d55e70} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p79d9680} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p1e697070} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p6030e80} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.p1d3f5f00} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p15985180} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p21a92480} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p3ee9f000} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p37de1b00} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p2018b880} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p4692180} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p3e813300} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
                <path d={svgPaths.p10b30970} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
                <path d={svgPaths.p8711c40} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
                <path d={svgPaths.p2d0fdc80} fill="var(--fill-0, #D5CDC4)" id="Vector_16" />
                <path d={svgPaths.p132b4b80} fill="var(--fill-0, #D5CDC4)" id="Vector_17" />
                <path d={svgPaths.p14382e40} fill="var(--fill-0, #D5CDC4)" id="Vector_18" />
                <path d={svgPaths.p168eb000} fill="var(--fill-0, #D5CDC4)" id="Vector_19" />
                <path d={svgPaths.p1f9de100} fill="var(--fill-0, #D5CDC4)" id="Vector_20" />
                <path d={svgPaths.pc7d5100} fill="var(--fill-0, #D5CDC4)" id="Vector_21" />
                <path d={svgPaths.p546af00} fill="var(--fill-0, #D5CDC4)" id="Vector_22" />
                <path d={svgPaths.p16b35780} fill="var(--fill-0, #D5CDC4)" id="Vector_23" />
                <path d={svgPaths.p35a7f900} fill="var(--fill-0, #D5CDC4)" id="Vector_24" />
                <path d={svgPaths.p53b4500} fill="var(--fill-0, #D5CDC4)" id="Vector_25" />
                <path d={svgPaths.p22eb2780} fill="var(--fill-0, #D5CDC4)" id="Vector_26" />
                <path d={svgPaths.p1f0cba80} fill="var(--fill-0, #D5CDC4)" id="Vector_27" />
                <path d={svgPaths.p1aabc680} fill="var(--fill-0, #D5CDC4)" id="Vector_28" />
                <path d={svgPaths.p265f5200} fill="var(--fill-0, #D5CDC4)" id="Vector_29" />
                <path d={svgPaths.p3a26b100} fill="var(--fill-0, #D5CDC4)" id="Vector_30" />
                <path d={svgPaths.pb01c700} fill="var(--fill-0, #D5CDC4)" id="Vector_31" />
                <path d={svgPaths.p3c486a00} fill="var(--fill-0, #D5CDC4)" id="Vector_32" />
                <path d={svgPaths.p274f7800} fill="var(--fill-0, #D5CDC4)" id="Vector_33" />
                <path d={svgPaths.p31112300} fill="var(--fill-0, #D5CDC4)" id="Vector_34" />
                <path d={svgPaths.p215cfb00} fill="var(--fill-0, #D5CDC4)" id="Vector_35" />
                <path d={svgPaths.p2c493f40} fill="var(--fill-0, #D5CDC4)" id="Vector_36" />
                <path d={svgPaths.p2bb86400} fill="var(--fill-0, #D5CDC4)" id="Vector_37" />
                <path d={svgPaths.p393a4c80} fill="var(--fill-0, #D5CDC4)" id="Vector_38" />
                <path d={svgPaths.p1c302100} fill="var(--fill-0, #D5CDC4)" id="Vector_39" />
                <path d={svgPaths.p2a9e9900} fill="var(--fill-0, #D5CDC4)" id="Vector_40" />
                <path d={svgPaths.p196d0e00} fill="var(--fill-0, #D5CDC4)" id="Vector_41" />
                <path d={svgPaths.p1ffa5900} fill="var(--fill-0, #D5CDC4)" id="Vector_42" />
                <path d={svgPaths.p3df1100} fill="var(--fill-0, #D5CDC4)" id="Vector_43" />
                <path d={svgPaths.p242cb500} fill="var(--fill-0, #D5CDC4)" id="Vector_44" />
                <path d={svgPaths.p1991440} fill="var(--fill-0, #D5CDC4)" id="Vector_45" />
                <path d={svgPaths.p177c3e00} fill="var(--fill-0, #D5CDC4)" id="Vector_46" />
                <path d={svgPaths.pc6f3480} fill="var(--fill-0, #D5CDC4)" id="Vector_47" />
                <path d={svgPaths.p593c500} fill="var(--fill-0, #D5CDC4)" id="Vector_48" />
                <path d={svgPaths.pc2ff900} fill="var(--fill-0, #D5CDC4)" id="Vector_49" />
                <path d={svgPaths.p1dce8e40} fill="var(--fill-0, #D5CDC4)" id="Vector_50" />
                <path d={svgPaths.p184e5400} fill="var(--fill-0, #D5CDC4)" id="Vector_51" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Mahabodhi -------------------------------- */
export function MahabodhiLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
        <p className="[word-break:break-word] col-1 font-['Jacques_Francois:Regular',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#d5cdc4] text-[40px] whitespace-nowrap">Mahabodhi</p>
      </div>
      <div className="col-1 flex h-[16.021px] items-center justify-center ml-[46.86px] mt-[48.33px] relative row-1 w-[112.132px]">
        <div className="flex-none rotate-[0.52deg]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#d5cdc4] text-[12px] whitespace-nowrap">foundation services</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Qera Handicrafts ----------------------------- */
export function QeraHandicraftsLogo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] w-[87px]">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[24px] text-center w-full">QERA</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[16px] w-full">Handicrafts</p>
    </div>
  );
}

/* --------------------------- Pratigya Properties --------------------------- */
export function PratigyaPropertiesLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[62px] ml-0 mt-0 relative rounded-[10px] row-1 w-[71px]" data-name="WhatsApp Image 2025-01-16 at 11.42.58 AM">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[10px] size-full" src={imgWhatsAppImage20250116At114258Am} />
      </div>
      <div className="[word-break:break-word] col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12px] mt-[21px] not-italic place-items-start relative row-1 text-[#d5cdc4]">
        <p className="col-1 font-['Italiana:Regular',sans-serif] leading-[normal] ml-[72px] mt-0 relative row-1 text-[20px] w-[84px]">PRATIGYA</p>
        <p className="col-1 font-['Poppins:Regular',sans-serif] leading-[normal] ml-0 mt-[44px] relative row-1 text-[8px] whitespace-nowrap">since 2007</p>
        <p className="col-1 font-['Italiana:Regular',sans-serif] leading-[normal] ml-[72px] mt-[23.5px] relative row-1 text-[12px] uppercase whitespace-nowrap">Properties</p>
      </div>
    </div>
  );
}

/* -------------------------------- Rework Health ---------------------------- */
export function ReworkHealthLogo() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="h-[47px] relative rounded-[4px] shrink-0 w-[76px]" data-name="ImportedPhoto_1731403508999 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[4px] size-full" src={imgImportedPhoto17314035089991} />
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <p className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#d5cdc4] text-[24px] whitespace-nowrap">Rework Health</p>
      </div>
    </div>
  );
}

/* --------------------------------- Forexive -------------------------------- */
export function ForexiveLogoIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[83px]" data-name="image 1 (traced)">
      <div className="absolute flex inset-[34.26%_20.66%_47.15%_65.4%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Yellow">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5661 15.4355">
              <g id="Yellow">
                <path d={svgPaths.p1294abf0} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p16752a80} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p11e87300} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p6417680} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.01%_11.01%_27.7%_12.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Gray">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.5445 45.0609">
              <g id="Gray">
                <path d={svgPaths.p2b0b1af0} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p2cd6f380} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p18f05200} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p1b022900} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p29623b00} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.pd14b900} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p3f04dcf0} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p17e58780} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p253e2080} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p1f1dcb80} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p38b857f2} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p9f96b00} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p19d14e00} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
                <path d={svgPaths.p482df00} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
                <path d={svgPaths.p249f2a00} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
                <path d={svgPaths.p3e09d6c0} fill="var(--fill-0, #D5CDC4)" id="Vector_16" />
                <path d={svgPaths.p18b2d600} fill="var(--fill-0, #D5CDC4)" id="Vector_17" />
                <path d={svgPaths.p1ced80} fill="var(--fill-0, #D5CDC4)" id="Vector_18" />
                <path d={svgPaths.p4d33b80} fill="var(--fill-0, #D5CDC4)" id="Vector_19" />
                <path d={svgPaths.p2788a00} fill="var(--fill-0, #D5CDC4)" id="Vector_20" />
                <path d={svgPaths.p20705e00} fill="var(--fill-0, #D5CDC4)" id="Vector_21" />
                <path d={svgPaths.p17b90f80} fill="var(--fill-0, #D5CDC4)" id="Vector_22" />
                <path d={svgPaths.p30d44f00} fill="var(--fill-0, #D5CDC4)" id="Vector_23" />
                <path d={svgPaths.p44f500} fill="var(--fill-0, #D5CDC4)" id="Vector_24" />
                <path d={svgPaths.p26810a00} fill="var(--fill-0, #D5CDC4)" id="Vector_25" />
                <path d={svgPaths.p39bbc900} fill="var(--fill-0, #D5CDC4)" id="Vector_26" />
                <path d={svgPaths.p138c7780} fill="var(--fill-0, #D5CDC4)" id="Vector_27" />
                <path d={svgPaths.p12c57200} fill="var(--fill-0, #D5CDC4)" id="Vector_28" />
                <path d={svgPaths.p1fcacc70} fill="var(--fill-0, #D5CDC4)" id="Vector_29" />
                <path d={svgPaths.p5132c00} fill="var(--fill-0, #D5CDC4)" id="Vector_30" />
                <path d={svgPaths.p3e054400} fill="var(--fill-0, #D5CDC4)" id="Vector_31" />
                <path d={svgPaths.p3e699e00} fill="var(--fill-0, #D5CDC4)" id="Vector_32" />
                <path d={svgPaths.p293f4370} fill="var(--fill-0, #D5CDC4)" id="Vector_33" />
                <path d={svgPaths.p1cac1a80} fill="var(--fill-0, #D5CDC4)" id="Vector_34" />
                <path d={svgPaths.p22096900} fill="var(--fill-0, #D5CDC4)" id="Vector_35" />
                <path d={svgPaths.p2f90dc80} fill="var(--fill-0, #D5CDC4)" id="Vector_36" />
                <path d={svgPaths.p3107a780} fill="var(--fill-0, #D5CDC4)" id="Vector_37" />
                <path d={svgPaths.pbf5bb00} fill="var(--fill-0, #D5CDC4)" id="Vector_38" />
                <path d={svgPaths.p1b20e880} fill="var(--fill-0, #D5CDC4)" id="Vector_39" />
                <path d={svgPaths.pd72cd80} fill="var(--fill-0, #D5CDC4)" id="Vector_40" />
                <path d={svgPaths.p2a8f6300} fill="var(--fill-0, #D5CDC4)" id="Vector_41" />
                <path d={svgPaths.p31d53a00} fill="var(--fill-0, #D5CDC4)" id="Vector_42" />
                <path d={svgPaths.pa517080} fill="var(--fill-0, #D5CDC4)" id="Vector_43" />
                <path d={svgPaths.p26254a00} fill="var(--fill-0, #D5CDC4)" id="Vector_44" />
                <path d={svgPaths.p14dbff00} fill="var(--fill-0, #D5CDC4)" id="Vector_45" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.2%_23.67%_16.39%_21.3%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Red">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6787 34.3707">
              <g id="Red">
                <path d={svgPaths.p59ef780} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p2239b680} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p28145100} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p21c6db80} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p278e2100} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.pde3af00} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p138f8880} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p2a1b9570} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.pe363100} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p1ac32500} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p584e580} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p37078a00} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p484ff00} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
                <path d={svgPaths.p1c1c7a80} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
                <path d={svgPaths.p32772a80} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
                <path d={svgPaths.p3efbe500} fill="var(--fill-0, #D5CDC4)" id="Vector_16" />
                <path d={svgPaths.p1c4cb140} fill="var(--fill-0, #D5CDC4)" id="Vector_17" />
                <path d={svgPaths.p1d474300} fill="var(--fill-0, #D5CDC4)" id="Vector_18" />
                <path d={svgPaths.p37e9c800} fill="var(--fill-0, #D5CDC4)" id="Vector_19" />
                <path d={svgPaths.p15164e00} fill="var(--fill-0, #D5CDC4)" id="Vector_20" />
                <path d={svgPaths.p3fb69a00} fill="var(--fill-0, #D5CDC4)" id="Vector_21" />
                <path d={svgPaths.p2ac6d200} fill="var(--fill-0, #D5CDC4)" id="Vector_22" />
                <path d={svgPaths.p103f1500} fill="var(--fill-0, #D5CDC4)" id="Vector_23" />
                <path d={svgPaths.p24bcf980} fill="var(--fill-0, #D5CDC4)" id="Vector_24" />
                <path d={svgPaths.p2ca44880} fill="var(--fill-0, #D5CDC4)" id="Vector_25" />
                <path d={svgPaths.pb573f80} fill="var(--fill-0, #D5CDC4)" id="Vector_26" />
                <path d={svgPaths.p1b540480} fill="var(--fill-0, #D5CDC4)" id="Vector_27" />
                <path d={svgPaths.p1af88300} fill="var(--fill-0, #D5CDC4)" id="Vector_28" />
                <path d={svgPaths.pdeca7f2} fill="var(--fill-0, #D5CDC4)" id="Vector_29" />
                <path d={svgPaths.p365a3200} fill="var(--fill-0, #D5CDC4)" id="Vector_30" />
                <path d={svgPaths.pb5c2f00} fill="var(--fill-0, #D5CDC4)" id="Vector_31" />
                <path d={svgPaths.p88611f0} fill="var(--fill-0, #D5CDC4)" id="Vector_32" />
                <path d={svgPaths.pf6b7700} fill="var(--fill-0, #D5CDC4)" id="Vector_33" />
                <path d={svgPaths.p25ee8000} fill="var(--fill-0, #D5CDC4)" id="Vector_34" />
                <path d={svgPaths.p16f7fe40} fill="var(--fill-0, #D5CDC4)" id="Vector_35" />
                <path d={svgPaths.p20fb2000} fill="var(--fill-0, #D5CDC4)" id="Vector_36" />
                <path d={svgPaths.pc529e80} fill="var(--fill-0, #D5CDC4)" id="Vector_37" />
                <path d={svgPaths.p238ae980} fill="var(--fill-0, #D5CDC4)" id="Vector_38" />
                <path d={svgPaths.p653f00} fill="var(--fill-0, #D5CDC4)" id="Vector_39" />
                <path d={svgPaths.p7ac4a00} fill="var(--fill-0, #D5CDC4)" id="Vector_40" />
                <path d={svgPaths.p1547a340} fill="var(--fill-0, #D5CDC4)" id="Vector_41" />
                <path d={svgPaths.p1a467840} fill="var(--fill-0, #D5CDC4)" id="Vector_42" />
                <path d={svgPaths.p1b2ffc00} fill="var(--fill-0, #D5CDC4)" id="Vector_43" />
                <path d={svgPaths.p8308980} fill="var(--fill-0, #D5CDC4)" id="Vector_44" />
                <path d={svgPaths.p157ad00} fill="var(--fill-0, #D5CDC4)" id="Vector_45" />
                <path d={svgPaths.p2f8b2800} fill="var(--fill-0, #D5CDC4)" id="Vector_46" />
                <path d={svgPaths.p2cdaad00} fill="var(--fill-0, #D5CDC4)" id="Vector_47" />
                <path d={svgPaths.pd0af900} fill="var(--fill-0, #D5CDC4)" id="Vector_48" />
                <path d={svgPaths.p22f17c00} fill="var(--fill-0, #D5CDC4)" id="Vector_49" />
                <path d={svgPaths.p2d44c400} fill="var(--fill-0, #D5CDC4)" id="Vector_50" />
                <path d={svgPaths.p3fa818f0} fill="var(--fill-0, #D5CDC4)" id="Vector_51" />
                <path d={svgPaths.p29ca8900} fill="var(--fill-0, #D5CDC4)" id="Vector_52" />
                <path d={svgPaths.p26908500} fill="var(--fill-0, #D5CDC4)" id="Vector_53" />
                <path d={svgPaths.p134c5e00} fill="var(--fill-0, #D5CDC4)" id="Vector_54" />
                <path d={svgPaths.p24599100} fill="var(--fill-0, #D5CDC4)" id="Vector_55" />
                <path d={svgPaths.p1243a500} fill="var(--fill-0, #D5CDC4)" id="Vector_56" />
                <path d={svgPaths.p2eb77200} fill="var(--fill-0, #D5CDC4)" id="Vector_57" />
                <path d={svgPaths.p3599880} fill="var(--fill-0, #D5CDC4)" id="Vector_58" />
                <path d={svgPaths.p2299cf00} fill="var(--fill-0, #D5CDC4)" id="Vector_59" />
                <path d={svgPaths.p26cb080} fill="var(--fill-0, #D5CDC4)" id="Vector_60" />
                <path d={svgPaths.p1fa08180} fill="var(--fill-0, #D5CDC4)" id="Vector_61" />
                <path d={svgPaths.pc1b3700} fill="var(--fill-0, #D5CDC4)" id="Vector_62" />
                <path d={svgPaths.p116347f2} fill="var(--fill-0, #D5CDC4)" id="Vector_63" />
                <path d={svgPaths.p91e7500} fill="var(--fill-0, #D5CDC4)" id="Vector_64" />
                <path d={svgPaths.p292fea00} fill="var(--fill-0, #D5CDC4)" id="Vector_65" />
                <path d={svgPaths.p320e6d00} fill="var(--fill-0, #D5CDC4)" id="Vector_66" />
                <path d={svgPaths.p26281c00} fill="var(--fill-0, #D5CDC4)" id="Vector_67" />
                <path d={svgPaths.p1b04dc00} fill="var(--fill-0, #D5CDC4)" id="Vector_68" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.45%_24.7%_16.58%_23.44%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Red">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0415 34.001">
              <g id="Red">
                <path d={svgPaths.p725e700} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p8c4180} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p3fd8fc80} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p3d1e9a80} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p16fb2e00} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.p3a9fa880} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p101b1c80} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p94d38f0} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p3bed5e80} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p169f1180} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p1276e340} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.pa7cda80} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p3ef97080} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
                <path d={svgPaths.p21aaf080} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
                <path d={svgPaths.p23113420} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.02%_20.36%_46.88%_65.2%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Yellow">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9855 15.8507">
              <g id="Yellow">
                <path d={svgPaths.p4765700} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p268d9d00} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.pe526300} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.pf405200} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p138a8580} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.pa9bf900} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p3082d100} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p2045580} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p2928b100} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p1cfe8bc0} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p24f72bb0} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p3144c00} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p365aed80} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.03%_11.04%_27.7%_12.56%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Gray">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.4044 45.0432">
              <g id="Gray">
                <path d={svgPaths.p16deda00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p3c949d00} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p27496300} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p11b0ba00} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p3dfc1400} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
                <path d={svgPaths.p94c3600} fill="var(--fill-0, #D5CDC4)" id="Vector_6" />
                <path d={svgPaths.p15b52380} fill="var(--fill-0, #D5CDC4)" id="Vector_7" />
                <path d={svgPaths.p5627300} fill="var(--fill-0, #D5CDC4)" id="Vector_8" />
                <path d={svgPaths.p326aaa80} fill="var(--fill-0, #D5CDC4)" id="Vector_9" />
                <path d={svgPaths.p326f96c0} fill="var(--fill-0, #D5CDC4)" id="Vector_10" />
                <path d={svgPaths.p13a81000} fill="var(--fill-0, #D5CDC4)" id="Vector_11" />
                <path d={svgPaths.p153bae80} fill="var(--fill-0, #D5CDC4)" id="Vector_12" />
                <path d={svgPaths.p11ce5600} fill="var(--fill-0, #D5CDC4)" id="Vector_13" />
                <path d={svgPaths.p20e40400} fill="var(--fill-0, #D5CDC4)" id="Vector_14" />
                <path d={svgPaths.p3a535000} fill="var(--fill-0, #D5CDC4)" id="Vector_15" />
                <path d={svgPaths.p2e974100} fill="var(--fill-0, #D5CDC4)" id="Vector_16" />
                <path d={svgPaths.p20f3f400} fill="var(--fill-0, #D5CDC4)" id="Vector_17" />
                <path d={svgPaths.paf0efc0} fill="var(--fill-0, #D5CDC4)" id="Vector_18" />
                <path d={svgPaths.p34927900} fill="var(--fill-0, #D5CDC4)" id="Vector_19" />
                <path d={svgPaths.p3aa0a400} fill="var(--fill-0, #D5CDC4)" id="Vector_20" />
                <path d={svgPaths.p34e92700} fill="var(--fill-0, #D5CDC4)" id="Vector_21" />
                <path d={svgPaths.p2fc93470} fill="var(--fill-0, #D5CDC4)" id="Vector_22" />
                <path d={svgPaths.p391e1c80} fill="var(--fill-0, #D5CDC4)" id="Vector_23" />
                <path d={svgPaths.p73aef00} fill="var(--fill-0, #D5CDC4)" id="Vector_24" />
                <path d={svgPaths.p3b75a800} fill="var(--fill-0, #D5CDC4)" id="Vector_25" />
                <path d={svgPaths.p9286200} fill="var(--fill-0, #D5CDC4)" id="Vector_26" />
                <path d={svgPaths.p1fe5900} fill="var(--fill-0, #D5CDC4)" id="Vector_27" />
                <path d={svgPaths.p1d343700} fill="var(--fill-0, #D5CDC4)" id="Vector_28" />
                <path d={svgPaths.p2ca9c880} fill="var(--fill-0, #D5CDC4)" id="Vector_29" />
                <path d={svgPaths.p3e5a080} fill="var(--fill-0, #D5CDC4)" id="Vector_30" />
                <path d={svgPaths.p3eeb7200} fill="var(--fill-0, #D5CDC4)" id="Vector_31" />
                <path d={svgPaths.p245b3780} fill="var(--fill-0, #D5CDC4)" id="Vector_32" />
                <path d={svgPaths.p2c416500} fill="var(--fill-0, #D5CDC4)" id="Vector_33" />
                <path d={svgPaths.p21797640} fill="var(--fill-0, #D5CDC4)" id="Vector_34" />
                <path d={svgPaths.p3f6a00} fill="var(--fill-0, #D5CDC4)" id="Vector_35" />
                <path d={svgPaths.p373ecac0} fill="var(--fill-0, #D5CDC4)" id="Vector_36" />
                <path d={svgPaths.p3ae9bf00} fill="var(--fill-0, #D5CDC4)" id="Vector_37" />
                <path d={svgPaths.p1c8a5080} fill="var(--fill-0, #D5CDC4)" id="Vector_38" />
                <path d={svgPaths.p33a81680} fill="var(--fill-0, #D5CDC4)" id="Vector_39" />
                <path d={svgPaths.p35876200} fill="var(--fill-0, #D5CDC4)" id="Vector_40" />
                <path d={svgPaths.p361e0f80} fill="var(--fill-0, #D5CDC4)" id="Vector_41" />
                <path d={svgPaths.p30b7ca00} fill="var(--fill-0, #D5CDC4)" id="Vector_42" />
                <path d={svgPaths.p37bcd680} fill="var(--fill-0, #D5CDC4)" id="Vector_43" />
                <path d={svgPaths.pb402700} fill="var(--fill-0, #D5CDC4)" id="Vector_44" />
                <path d={svgPaths.p1dae2f00} fill="var(--fill-0, #D5CDC4)" id="Vector_45" />
                <path d={svgPaths.p13026340} fill="var(--fill-0, #D5CDC4)" id="Vector_46" />
                <path d={svgPaths.p2baa5900} fill="var(--fill-0, #D5CDC4)" id="Vector_47" />
                <path d={svgPaths.p1a2c40} fill="var(--fill-0, #D5CDC4)" id="Vector_48" />
                <path d={svgPaths.p302b3e80} fill="var(--fill-0, #D5CDC4)" id="Vector_49" />
                <path d={svgPaths.p1250d700} fill="var(--fill-0, #D5CDC4)" id="Vector_50" />
                <path d={svgPaths.p39eb3080} fill="var(--fill-0, #D5CDC4)" id="Vector_51" />
                <path d={svgPaths.pd38c900} fill="var(--fill-0, #D5CDC4)" id="Vector_52" />
                <path d={svgPaths.p2d829bf0} fill="var(--fill-0, #D5CDC4)" id="Vector_53" />
                <path d={svgPaths.pc7d1000} fill="var(--fill-0, #D5CDC4)" id="Vector_54" />
                <path d={svgPaths.pe4f3f80} fill="var(--fill-0, #D5CDC4)" id="Vector_55" />
                <path d={svgPaths.p134d6d00} fill="var(--fill-0, #D5CDC4)" id="Vector_56" />
                <path d={svgPaths.p2c655680} fill="var(--fill-0, #D5CDC4)" id="Vector_57" />
                <path d={svgPaths.p21d12600} fill="var(--fill-0, #D5CDC4)" id="Vector_58" />
                <path d={svgPaths.p295d2680} fill="var(--fill-0, #D5CDC4)" id="Vector_59" />
                <path d={svgPaths.p13bc5b80} fill="var(--fill-0, #D5CDC4)" id="Vector_60" />
                <path d={svgPaths.p32b8b780} fill="var(--fill-0, #D5CDC4)" id="Vector_61" />
                <path d={svgPaths.p1e0e2f80} fill="var(--fill-0, #D5CDC4)" id="Vector_62" />
                <path d={svgPaths.pf896500} fill="var(--fill-0, #D5CDC4)" id="Vector_63" />
                <path d={svgPaths.p32355d00} fill="var(--fill-0, #D5CDC4)" id="Vector_64" />
                <path d={svgPaths.p1646c580} fill="var(--fill-0, #D5CDC4)" id="Vector_65" />
                <path d={svgPaths.p23522580} fill="var(--fill-0, #D5CDC4)" id="Vector_66" />
                <path d={svgPaths.pfdd1600} fill="var(--fill-0, #D5CDC4)" id="Vector_67" />
                <path d={svgPaths.p272cb800} fill="var(--fill-0, #D5CDC4)" id="Vector_68" />
                <path d={svgPaths.p3d849e80} fill="var(--fill-0, #D5CDC4)" id="Vector_69" />
                <path d={svgPaths.p6bb61c0} fill="var(--fill-0, #D5CDC4)" id="Vector_70" />
                <path d={svgPaths.p1fee1e80} fill="var(--fill-0, #D5CDC4)" id="Vector_71" />
                <path d={svgPaths.p24c262f2} fill="var(--fill-0, #D5CDC4)" id="Vector_72" />
                <path d={svgPaths.p27180300} fill="var(--fill-0, #D5CDC4)" id="Vector_73" />
                <path d={svgPaths.pf6e8c00} fill="var(--fill-0, #D5CDC4)" id="Vector_74" />
                <path d={svgPaths.p27c6bd00} fill="var(--fill-0, #D5CDC4)" id="Vector_75" />
                <path d={svgPaths.p27fac700} fill="var(--fill-0, #D5CDC4)" id="Vector_76" />
                <path d={svgPaths.p3fec2980} fill="var(--fill-0, #D5CDC4)" id="Vector_77" />
                <path d={svgPaths.p3d8de3f2} fill="var(--fill-0, #D5CDC4)" id="Vector_78" />
                <path d={svgPaths.p13eea700} fill="var(--fill-0, #D5CDC4)" id="Vector_79" />
                <path d={svgPaths.p111f4780} fill="var(--fill-0, #D5CDC4)" id="Vector_80" />
                <path d={svgPaths.p1805a080} fill="var(--fill-0, #D5CDC4)" id="Vector_81" />
                <path d={svgPaths.p2e1e2a00} fill="var(--fill-0, #D5CDC4)" id="Vector_82" />
                <path d={svgPaths.p1a38ff00} fill="var(--fill-0, #D5CDC4)" id="Vector_83" />
                <path d={svgPaths.p1a365df0} fill="var(--fill-0, #D5CDC4)" id="Vector_84" />
                <path d={svgPaths.p1a030f00} fill="var(--fill-0, #D5CDC4)" id="Vector_85" />
                <path d={svgPaths.p4bf2200} fill="var(--fill-0, #D5CDC4)" id="Vector_86" />
                <path d={svgPaths.p1cfffb00} fill="var(--fill-0, #D5CDC4)" id="Vector_87" />
                <path d={svgPaths.p3c7d4000} fill="var(--fill-0, #D5CDC4)" id="Vector_88" />
                <path d={svgPaths.p10376a80} fill="var(--fill-0, #D5CDC4)" id="Vector_89" />
                <path d={svgPaths.p3b8ed9c0} fill="var(--fill-0, #D5CDC4)" id="Vector_90" />
                <path d={svgPaths.p2c9c3300} fill="var(--fill-0, #D5CDC4)" id="Vector_91" />
                <path d={svgPaths.p3aea90c0} fill="var(--fill-0, #D5CDC4)" id="Vector_92" />
                <path d={svgPaths.p10da2b20} fill="var(--fill-0, #D5CDC4)" id="Vector_93" />
                <path d={svgPaths.p11ef9400} fill="var(--fill-0, #D5CDC4)" id="Vector_94" />
                <path d={svgPaths.p27205d80} fill="var(--fill-0, #D5CDC4)" id="Vector_95" />
                <path d={svgPaths.p224cc480} fill="var(--fill-0, #D5CDC4)" id="Vector_96" />
                <path d={svgPaths.p9e7b400} fill="var(--fill-0, #D5CDC4)" id="Vector_97" />
                <path d={svgPaths.p26ee9800} fill="var(--fill-0, #D5CDC4)" id="Vector_98" />
                <path d={svgPaths.p2368de80} fill="var(--fill-0, #D5CDC4)" id="Vector_99" />
                <path d={svgPaths.p35f1df70} fill="var(--fill-0, #D5CDC4)" id="Vector_100" />
                <path d={svgPaths.p33303400} fill="var(--fill-0, #D5CDC4)" id="Vector_101" />
                <path d={svgPaths.p21809a00} fill="var(--fill-0, #D5CDC4)" id="Vector_102" />
                <path d={svgPaths.pb0d0000} fill="var(--fill-0, #D5CDC4)" id="Vector_103" />
                <path d={svgPaths.p63e9300} fill="var(--fill-0, #D5CDC4)" id="Vector_104" />
                <path d={svgPaths.p39e80880} fill="var(--fill-0, #D5CDC4)" id="Vector_105" />
                <path d={svgPaths.p1dda49b0} fill="var(--fill-0, #D5CDC4)" id="Vector_106" />
                <path d={svgPaths.p120063f0} fill="var(--fill-0, #D5CDC4)" id="Vector_107" />
                <path d={svgPaths.p3e291810} fill="var(--fill-0, #D5CDC4)" id="Vector_108" />
                <path d={svgPaths.p366e2e00} fill="var(--fill-0, #D5CDC4)" id="Vector_109" />
                <path d={svgPaths.p1845b800} fill="var(--fill-0, #D5CDC4)" id="Vector_110" />
                <path d={svgPaths.p95fcbf0} fill="var(--fill-0, #D5CDC4)" id="Vector_111" />
                <path d={svgPaths.p2b1eaa00} fill="var(--fill-0, #D5CDC4)" id="Vector_112" />
                <path d={svgPaths.p3257a9f0} fill="var(--fill-0, #D5CDC4)" id="Vector_113" />
                <path d={svgPaths.p6edbf00} fill="var(--fill-0, #D5CDC4)" id="Vector_114" />
                <path d={svgPaths.p1074e700} fill="var(--fill-0, #D5CDC4)" id="Vector_115" />
                <path d={svgPaths.p870af80} fill="var(--fill-0, #D5CDC4)" id="Vector_116" />
                <path d={svgPaths.p3323e000} fill="var(--fill-0, #D5CDC4)" id="Vector_117" />
                <path d={svgPaths.p267955d0} fill="var(--fill-0, #D5CDC4)" id="Vector_118" />
                <path d={svgPaths.pf8b7200} fill="var(--fill-0, #D5CDC4)" id="Vector_119" />
                <path d={svgPaths.p2b783731} fill="var(--fill-0, #D5CDC4)" id="Vector_120" />
                <path d={svgPaths.p26f12300} fill="var(--fill-0, #D5CDC4)" id="Vector_121" />
                <path d={svgPaths.p43a5c12} fill="var(--fill-0, #D5CDC4)" id="Vector_122" />
                <path d={svgPaths.p35b6d00} fill="var(--fill-0, #D5CDC4)" id="Vector_123" />
                <path d={svgPaths.p2cadd200} fill="var(--fill-0, #D5CDC4)" id="Vector_124" />
                <path d={svgPaths.p23287f00} fill="var(--fill-0, #D5CDC4)" id="Vector_125" />
                <path d={svgPaths.p1caa3ff0} fill="var(--fill-0, #D5CDC4)" id="Vector_126" />
                <path d={svgPaths.p1f53a500} fill="var(--fill-0, #D5CDC4)" id="Vector_127" />
                <path d={svgPaths.p29e35c00} fill="var(--fill-0, #D5CDC4)" id="Vector_128" />
                <path d={svgPaths.p3916aa80} fill="var(--fill-0, #D5CDC4)" id="Vector_129" />
                <path d={svgPaths.p2234bf40} fill="var(--fill-0, #D5CDC4)" id="Vector_130" />
                <path d={svgPaths.p3b6d4300} fill="var(--fill-0, #D5CDC4)" id="Vector_131" />
                <path d={svgPaths.p22ae9180} fill="var(--fill-0, #D5CDC4)" id="Vector_132" />
                <path d={svgPaths.p1ad32ff2} fill="var(--fill-0, #D5CDC4)" id="Vector_133" />
                <path d={svgPaths.p194c7140} fill="var(--fill-0, #D5CDC4)" id="Vector_134" />
                <path d={svgPaths.p1163f480} fill="var(--fill-0, #D5CDC4)" id="Vector_135" />
                <path d={svgPaths.p1d6be700} fill="var(--fill-0, #D5CDC4)" id="Vector_136" />
                <path d={svgPaths.p2d8ee8c0} fill="var(--fill-0, #D5CDC4)" id="Vector_137" />
                <path d={svgPaths.p9a0ce00} fill="var(--fill-0, #D5CDC4)" id="Vector_138" />
                <path d={svgPaths.p3ae72980} fill="var(--fill-0, #D5CDC4)" id="Vector_139" />
                <path d={svgPaths.p36a475c0} fill="var(--fill-0, #D5CDC4)" id="Vector_140" />
                <path d={svgPaths.p3a340780} fill="var(--fill-0, #D5CDC4)" id="Vector_141" />
                <path d={svgPaths.p182fd880} fill="var(--fill-0, #D5CDC4)" id="Vector_142" />
                <path d={svgPaths.p26f3ca00} fill="var(--fill-0, #D5CDC4)" id="Vector_143" />
                <path d={svgPaths.p2c149ef0} fill="var(--fill-0, #D5CDC4)" id="Vector_144" />
                <path d={svgPaths.p2da55ca0} fill="var(--fill-0, #D5CDC4)" id="Vector_145" />
                <path d={svgPaths.p22075280} fill="var(--fill-0, #D5CDC4)" id="Vector_146" />
                <path d={svgPaths.p28a90100} fill="var(--fill-0, #D5CDC4)" id="Vector_147" />
                <path d={svgPaths.p316a580} fill="var(--fill-0, #D5CDC4)" id="Vector_148" />
                <path d={svgPaths.p2bfda00} fill="var(--fill-0, #D5CDC4)" id="Vector_149" />
                <path d={svgPaths.p3ea03a80} fill="var(--fill-0, #D5CDC4)" id="Vector_150" />
                <path d={svgPaths.p2654cdc2} fill="var(--fill-0, #D5CDC4)" id="Vector_151" />
                <path d={svgPaths.p27180000} fill="var(--fill-0, #D5CDC4)" id="Vector_152" />
                <path d={svgPaths.p2744c670} fill="var(--fill-0, #D5CDC4)" id="Vector_153" />
                <path d={svgPaths.p35b42f00} fill="var(--fill-0, #D5CDC4)" id="Vector_154" />
                <path d={svgPaths.pdc1fec0} fill="var(--fill-0, #D5CDC4)" id="Vector_155" />
                <path d={svgPaths.p3165d3c0} fill="var(--fill-0, #D5CDC4)" id="Vector_156" />
                <path d={svgPaths.p177ad000} fill="var(--fill-0, #D5CDC4)" id="Vector_157" />
                <path d={svgPaths.p1ba16900} fill="var(--fill-0, #D5CDC4)" id="Vector_158" />
                <path d={svgPaths.p3a706e80} fill="var(--fill-0, #D5CDC4)" id="Vector_159" />
                <path d={svgPaths.p229f4800} fill="var(--fill-0, #D5CDC4)" id="Vector_160" />
                <path d={svgPaths.pc5d1500} fill="var(--fill-0, #D5CDC4)" id="Vector_161" />
                <path d={svgPaths.p28139000} fill="var(--fill-0, #D5CDC4)" id="Vector_162" />
                <path d={svgPaths.p3f9e9500} fill="var(--fill-0, #D5CDC4)" id="Vector_163" />
                <path d={svgPaths.pc21000} fill="var(--fill-0, #D5CDC4)" id="Vector_164" />
                <path d={svgPaths.p80fb80} fill="var(--fill-0, #D5CDC4)" id="Vector_165" />
                <path d={svgPaths.p2c263480} fill="var(--fill-0, #D5CDC4)" id="Vector_166" />
                <path d={svgPaths.p36afc900} fill="var(--fill-0, #D5CDC4)" id="Vector_167" />
                <path d={svgPaths.p290180} fill="var(--fill-0, #D5CDC4)" id="Vector_168" />
                <path d={svgPaths.p11e18800} fill="var(--fill-0, #D5CDC4)" id="Vector_169" />
                <path d={svgPaths.p1897fe00} fill="var(--fill-0, #D5CDC4)" id="Vector_170" />
                <path d={svgPaths.p8527e30} fill="var(--fill-0, #D5CDC4)" id="Vector_171" />
                <path d={svgPaths.p1f25cd00} fill="var(--fill-0, #D5CDC4)" id="Vector_172" />
                <path d={svgPaths.p2b396900} fill="var(--fill-0, #D5CDC4)" id="Vector_173" />
                <path d={svgPaths.p3a9a89c0} fill="var(--fill-0, #D5CDC4)" id="Vector_174" />
                <path d={svgPaths.p19868200} fill="var(--fill-0, #D5CDC4)" id="Vector_175" />
                <path d={svgPaths.p14feba00} fill="var(--fill-0, #D5CDC4)" id="Vector_176" />
                <path d={svgPaths.p22d7d100} fill="var(--fill-0, #D5CDC4)" id="Vector_177" />
                <path d={svgPaths.p32db1a00} fill="var(--fill-0, #D5CDC4)" id="Vector_178" />
                <path d={svgPaths.p24c25d70} fill="var(--fill-0, #D5CDC4)" id="Vector_179" />
                <path d={svgPaths.p37af7700} fill="var(--fill-0, #D5CDC4)" id="Vector_180" />
                <path d={svgPaths.p14e7ce00} fill="var(--fill-0, #D5CDC4)" id="Vector_181" />
                <path d={svgPaths.pc82b780} fill="var(--fill-0, #D5CDC4)" id="Vector_182" />
                <path d={svgPaths.p2e1e9b80} fill="var(--fill-0, #D5CDC4)" id="Vector_183" />
                <path d={svgPaths.paaa3d00} fill="var(--fill-0, #D5CDC4)" id="Vector_184" />
                <path d={svgPaths.p36207dc0} fill="var(--fill-0, #D5CDC4)" id="Vector_185" />
                <path d={svgPaths.p3717d900} fill="var(--fill-0, #D5CDC4)" id="Vector_186" />
                <path d={svgPaths.p2c389700} fill="var(--fill-0, #D5CDC4)" id="Vector_187" />
                <path d={svgPaths.p176c6200} fill="var(--fill-0, #D5CDC4)" id="Vector_188" />
                <path d={svgPaths.p3e241760} fill="var(--fill-0, #D5CDC4)" id="Vector_189" />
                <path d={svgPaths.p37c26180} fill="var(--fill-0, #D5CDC4)" id="Vector_190" />
                <path d={svgPaths.p13621d00} fill="var(--fill-0, #D5CDC4)" id="Vector_191" />
                <path d={svgPaths.p23d5a500} fill="var(--fill-0, #D5CDC4)" id="Vector_192" />
                <path d={svgPaths.p36d0e80} fill="var(--fill-0, #D5CDC4)" id="Vector_193" />
                <path d={svgPaths.p2b267c00} fill="var(--fill-0, #D5CDC4)" id="Vector_194" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[62.38%_31.22%_17.8%_35.41%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="LightGray">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7044 16.4484">
              <g id="LightGray">
                <path d={svgPaths.p1611fa00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
                <path d={svgPaths.p2caaa900} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
                <path d={svgPaths.p4ba1340} fill="var(--fill-0, #D5CDC4)" id="Vector_3" />
                <path d={svgPaths.p35e43580} fill="var(--fill-0, #D5CDC4)" id="Vector_4" />
                <path d={svgPaths.p2687cf80} fill="var(--fill-0, #D5CDC4)" id="Vector_5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/** First logo row: Shelter Creations, Cox & Fly, Soham Travels, Mahabodhi, Ris Gharana, Fire Fighting Hose. Scrolls left. */
export function ClientLogosRowPrimary() {
  return (
    <MarqueeRow duration={24}>
      <LogoItem>
        <ShelterCreationsLogo />
      </LogoItem>
      <LogoItem>
        <CoxFlyLogo />
      </LogoItem>
      <LogoItem>
        <SohamTravelsLogo />
      </LogoItem>
      <LogoItem>
        <MahabodhiLogo />
      </LogoItem>
      <LogoItem>
        <p className="[word-break:break-word] font-['Philosopher:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[22px] w-[145px]">RIS GHARANA</p>
      </LogoItem>
      <LogoItem>
        <div className="[word-break:break-word] font-['Montreal_Serial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#d5cdc4] text-[24px] uppercase whitespace-nowrap">
          <p className="leading-[22px] mb-0">FIRE FIGHTING</p>
          <p className="leading-[22px]">hose</p>
        </div>
      </LogoItem>
    </MarqueeRow>
  );
}

/** Second logo row: Wapo, Qera Handicrafts, Pratigya Properties, Rework Health, Forexive. Scrolls right (opposite direction). */
export function ClientLogosRowSecondary() {
  return (
    <MarqueeRow reverse duration={28}>
      <LogoItem>
        <div className="h-[53px] pointer-events-none relative shrink-0 w-[120px]" data-name="Wapo-13">
          <img alt="" className="absolute inset-0 max-w-none object-bottom size-full" src={imgWapo13} />
          <div aria-hidden className="absolute border-[#d5cdc4] border-b border-solid inset-0" />
        </div>
      </LogoItem>
      <LogoItem>
        <QeraHandicraftsLogo />
      </LogoItem>
      <LogoItem>
        <div className="h-[81.837px] relative shrink-0 w-[102px]" data-name="471596938_1749669645575701_1363054315679541367_n-removebg-preview">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={img47159693817496696455757011363054315679541367NRemovebgPreview} />
        </div>
      </LogoItem>
      <LogoItem>
        <PratigyaPropertiesLogo />
      </LogoItem>
      <LogoItem>
        <ReworkHealthLogo />
      </LogoItem>
      <LogoItem>
        <p className="[word-break:break-word] font-['MuseoModerno:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#d5cdc4] text-[30px] whitespace-nowrap">Forexive</p>
      </LogoItem>
      <LogoItem>
        <ForexiveLogoIcon />
      </LogoItem>
    </MarqueeRow>
  );
}

/** Client / brand logos section (two stacked marquee rows scrolling in opposite directions, centered). */
export function ClientLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewOnce}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[31px] items-center justify-center left-1/2 top-[1919px] w-[1322px]"
    >
      <ClientLogosRowPrimary />
      <ClientLogosRowSecondary />
    </motion.div>
  );
}
