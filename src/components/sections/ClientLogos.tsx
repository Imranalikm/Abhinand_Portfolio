import type { CSSProperties, ReactNode } from "react";
import { m } from "framer-motion";
import { logoCoxFly, logoWapo, logoForexiveMark, logoPratigya, logoReworkHealth } from "@/assets/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { inViewOnce } from "@/lib/motion";
import clientLogos01Svg from "@/assets/svg/clientLogos-01.svg";
import clientLogos02Svg from "@/assets/svg/clientLogos-02.svg";
import clientLogos03Svg from "@/assets/svg/clientLogos-03.svg";
import clientLogos04Svg from "@/assets/svg/clientLogos-04.svg";
import clientLogos05Svg from "@/assets/svg/clientLogos-05.svg";
import clientLogos06Svg from "@/assets/svg/clientLogos-06.svg";
import clientLogos07Svg from "@/assets/svg/clientLogos-07.svg";
import clientLogos08Svg from "@/assets/svg/clientLogos-08.svg";
import clientLogos09Svg from "@/assets/svg/clientLogos-09.svg";
import clientLogos10Svg from "@/assets/svg/clientLogos-10.svg";

/** Gives a logo a subtle lift + brighten on hover. */
function LogoItem({ children }: { children: ReactNode }) {
  return (
    <m.div whileHover={{ y: -4, opacity: 0.75 }} transition={{ duration: 0.25 }} className="shrink-0">
      {children}
    </m.div>
  );
}

/** Infinite horizontal marquee track — duplicates its content once so the loop is seamless. */
function MarqueeRow({ children, reverse = false, duration = 28 }: { children: ReactNode; reverse?: boolean; duration?: number }) {
  return (
    <div className="overflow-hidden relative w-full">
      <div className={`flex items-center w-max animate-[ticker_var(--marquee-duration)_linear_infinite] motion-reduce:animate-none ${reverse ? "[animation-direction:reverse]" : ""}`} style={{ "--marquee-duration": `${duration}s` } as CSSProperties}>
        <div className="flex items-center gap-[65px] pr-[65px] shrink-0">{children}</div>
        <div className="flex items-center gap-[65px] pr-[65px] shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Shelter Creations --------------------------- */
export function ShelterCreationsMark() {
  return (
    <div className="h-[42.398px] relative shrink-0 w-[37.979px]">
      <img className="absolute block inset-0 size-full" src={clientLogos01Svg} alt="" decoding="async" draggable={false} />
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
        <ResponsiveImage picture={logoCoxFly} alt="Cox-Fly Tours & Travels" sizes="11.7vw" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" />
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
            <img className="absolute block inset-0 size-full" src={clientLogos02Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[10.62%_5.08%_0_5.08%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Cyan">
            <img className="absolute block inset-0 size-full" src={clientLogos03Svg} alt="" decoding="async" draggable={false} />
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
        <ResponsiveImage picture={logoPratigya} alt="Pratigya Properties" sizes="4.9vw" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[10px] size-full" />
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
        <ResponsiveImage picture={logoReworkHealth} alt="Rework Health" sizes="5.3vw" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[4px] size-full" />
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
            <img className="absolute block inset-0 size-full" src={clientLogos04Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.01%_11.01%_27.7%_12.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Gray">
            <img className="absolute block inset-0 size-full" src={clientLogos05Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.2%_23.67%_16.39%_21.3%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Red">
            <img className="absolute block inset-0 size-full" src={clientLogos06Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.45%_24.7%_16.58%_23.44%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Red">
            <img className="absolute block inset-0 size-full" src={clientLogos07Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[34.02%_20.36%_46.88%_65.2%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Yellow">
            <img className="absolute block inset-0 size-full" src={clientLogos08Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.03%_11.04%_27.7%_12.56%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Gray">
            <img className="absolute block inset-0 size-full" src={clientLogos09Svg} alt="" decoding="async" draggable={false} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[62.38%_31.22%_17.8%_35.41%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="LightGray">
            <img className="absolute block inset-0 size-full" src={clientLogos10Svg} alt="" decoding="async" draggable={false} />
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
          <ResponsiveImage picture={logoWapo} alt="WAPO General Trading" sizes="8.3vw" className="absolute inset-0 max-w-none object-bottom size-full" />
          <div aria-hidden className="absolute border-[#d5cdc4] border-b border-solid inset-0" />
        </div>
      </LogoItem>
      <LogoItem>
        <QeraHandicraftsLogo />
      </LogoItem>
      <LogoItem>
        <div className="h-[81.837px] relative shrink-0 w-[102px]" data-name="471596938_1749669645575701_1363054315679541367_n-removebg-preview">
          <ResponsiveImage picture={logoForexiveMark} alt="Forexive" sizes="7.1vw" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" />
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
    <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={inViewOnce} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[31px] items-center justify-center left-1/2 top-[1919px] w-[1322px]">
      <ClientLogosRowPrimary />
      <ClientLogosRowSecondary />
    </m.div>
  );
}
