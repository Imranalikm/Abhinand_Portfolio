import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { deviceMacBookAir as imgMacBookAir2022, deviceIPhone15 as imgIPhone15 } from "@/assets/images";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

const DIMMED = "rgba(213,205,196,0.5)";
const BRIGHT = "#d5cdc4";
const EASE = [0.16, 1, 0.3, 1] as const;

interface PlainPortfolioRowProps {
  index: string;
  title: string;
  tags: string;
  top: number;
  tagsTop: number;
  arrowTop: number;
  dividerTop: number;
}

/**
 * A "plain" (no image) portfolio row. Hovering anywhere on the row brightens the
 * text, nudges the title, draws an underline and washes the row with a faint
 * highlight bar — a small, consistent hover language distinct from row 02's photo reveal.
 */
function PlainPortfolioRow({ index, title, tags, top, tagsTop, arrowTop, dividerTop }: PlainPortfolioRowProps) {
  const [hovered, setHovered] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barRef, { once: true, amount: 0.4 });

  return (
    <div className="absolute contents" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div
        ref={barRef}
        className="absolute left-[50px] w-[1340px] rounded-[6px] pointer-events-none"
        style={{ top: top - 15, height: 100, background: BRIGHT }}
        initial={false}
        animate={{ opacity: hovered ? 0.05 : 0 }}
        transition={{ duration: 0.35 }}
      />
      <motion.p
        initial={false}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -24, scale: hovered ? 1.06 : 1, color: hovered ? BRIGHT : DIMMED }}
        transition={{ duration: 0.7, ease: EASE }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[50px] text-[50px] whitespace-nowrap"
        style={{ top, fontVariationSettings: '"opsz" 12, "wdth" 100', transformOrigin: "left center" }}
      >
        {index}
      </motion.p>
      <motion.p
        initial={false}
        animate={{ opacity: inView ? 1 : 0, x: inView ? (hovered ? 14 : 0) : -24, scale: hovered ? 1.05 : 1, color: hovered ? BRIGHT : DIMMED }}
        transition={{ duration: 0.5, ease: EASE }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[192px] text-[50px] whitespace-nowrap"
        style={{ top, fontVariationSettings: '"opsz" 12, "wdth" 100', transformOrigin: "left center" }}
      >
        {title}
      </motion.p>
      <motion.p
        initial={false}
        animate={{ opacity: inView ? 1 : 0, scale: hovered ? 1.05 : 1, color: hovered ? BRIGHT : DIMMED }}
        transition={{ duration: 0.5, delay: inView ? 0.15 : 0 }}
        className="[word-break:break-word] absolute capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[808px] not-italic text-[18px] whitespace-nowrap"
        style={{ top: tagsTop, transformOrigin: "left center" }}
      >
        {tags}
      </motion.p>
      <motion.div
        className="absolute left-[192px] h-[2px] origin-left pointer-events-none"
        style={{ top: dividerTop - 5, width: 550, background: BRIGHT }}
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      />
      <ArrowUpRightIcon top={arrowTop} dimmed active={hovered} />
    </div>
  );
}

/* ------------------------------ Portfolio rows -------------------------------- */
export function PortfolioRowSailsApplication() {
  return (
    <PlainPortfolioRow index="01" title="Sails application" tags="Mobile app , user experience , User interface" top={5075} tagsTop={5091} arrowTop={5084} dividerTop={5160} />
  );
}

/** Row 02 — the MacBook + iPhone mockups sit statically in place, matching the source design, with a gentle continuous float and hover nudge. */
export function PortfolioRowTradingPlatform() {
  const [hovered, setHovered] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(titleRef, { once: true, amount: 0.4 });

  return (
    <div className="absolute contents" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.p
        initial={false}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -24, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[50px] text-[#d5cdc4] text-[50px] top-[5200px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100', transformOrigin: "left center" }}
      >
        02
      </motion.p>
      <motion.p
        ref={titleRef}
        initial={false}
        animate={{ opacity: inView ? 1 : 0, x: inView ? (hovered ? 10 : 0) : -24, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[192px] text-[#d5cdc4] text-[50px] top-[5200px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100', transformOrigin: "left center" }}
      >
        4x trading platform
      </motion.p>
      <motion.p
        initial={false}
        animate={{ opacity: inView ? 1 : 0, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, delay: inView ? 0.15 : 0 }}
        className="[word-break:break-word] absolute capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[808px] not-italic text-[#d5cdc4] text-[18px] top-[5216px] whitespace-nowrap"
        style={{ transformOrigin: "left center" }}
      >
        Website design , user experience , User interface
      </motion.p>
      <ArrowUpRightIcon top={5209} active={hovered} />

      <motion.div
        className="absolute h-[100px] left-[1195px] rounded-[10px] top-[5170px] w-[133px] pointer-events-none"
        data-name="MacBook Air (2022)"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85, y: hovered ? [0, -6, 0] : 12 }}
        transition={{ opacity: { duration: 0.35, ease: EASE }, scale: { duration: 0.35, ease: EASE }, y: { duration: hovered ? 5 : 0.35, repeat: hovered ? Infinity : 0, ease: "easeInOut" } }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgMacBookAir2022} />
      </motion.div>
      <motion.div
        className="absolute h-[107px] left-[659px] top-[5170px] w-[85px] overflow-hidden pointer-events-none"
        data-name="iPhone 15"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85, y: hovered ? [0, -8, 0] : 12 }}
        transition={{ opacity: { duration: 0.35, delay: hovered ? 0.05 : 0, ease: EASE }, scale: { duration: 0.35, delay: hovered ? 0.05 : 0, ease: EASE }, y: { duration: hovered ? 5 : 0.35, delay: hovered ? 0.6 : 0, repeat: hovered ? Infinity : 0, ease: "easeInOut" } }}
      >
        <img alt="" className="absolute h-[123.11%] left-[-49.46%] max-w-none top-[-12.07%] w-[204.74%]" src={imgIPhone15} />
      </motion.div>
    </div>
  );
}

export function PortfolioRowGeneralTrading() {
  return (
    <PlainPortfolioRow index="03" title="General trading" tags="Website design , user experience , User interface" top={5325} tagsTop={5341} arrowTop={5334} dividerTop={5410} />
  );
}

export function PortfolioRowTravelAndTourism() {
  return (
    <PlainPortfolioRow index="04" title="Travel and tourism" tags="Website design , user experience , User interface" top={5450} tagsTop={5466} arrowTop={5459} dividerTop={5535} />
  );
}

export function PortfolioRowRealEstate() {
  return (
    <PlainPortfolioRow index="05" title="Real-estate" tags="Website design , user experience , User interface" top={5575} tagsTop={5591} arrowTop={5584} dividerTop={5660} />
  );
}

export function PortfolioRowConstruction() {
  return (
    <PlainPortfolioRow index="05" title="Construction" tags="Website design , user experience , User interface" top={5700} tagsTop={5716} arrowTop={5709} dividerTop={5785} />
  );
}

/** Six numbered project rows with divider lines between them. */
export function PortfolioProjectList() {
  return (
    <div className="absolute contents left-[50px] top-[5075px]">
      <PortfolioRowSailsApplication />
      <PortfolioRowTradingPlatform />
      <PortfolioRowGeneralTrading />
      <PortfolioRowTravelAndTourism />
      <PortfolioRowRealEstate />
      <PortfolioRowConstruction />
      <div className="absolute h-0 left-[50px] top-[5160px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[50px] top-[5285px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[50px] top-[5410px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[50px] top-[5535px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[50px] top-[5660px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[50px] top-[5785px] w-[1340px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 0.5">
            <line id="Line 21" stroke="var(--stroke-0, #D5CDC4)" strokeOpacity="0.5" strokeWidth="0.5" x2="1340" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Portfolio showcase section: heading and numbered project list (row 02 reveals device mockups on hover). */
export function PortfolioShowcase() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[50px] text-[#d5cdc4] text-[60px] top-[4940px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        Portfolio
      </motion.p>
      <PortfolioProjectList />
    </>
  );
}
