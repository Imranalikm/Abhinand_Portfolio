import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";
import { fadeUp, inViewOnce, staggerContainer } from "@/lib/motion";

/* ------------------------- 01 User Experience Design ------------------------ */
export function ExpertiseCardUserExperienceText() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col gap-[20px] items-start ml-0 mt-[13px] not-italic relative row-1 text-[#d5cdc4] text-[18px] w-[219px]">
      <p className="font-['Montreal_Serial:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`01  User Experience Design`}</p>
      <div className="font-['Montreal_Serial:Regular',sans-serif] leading-[0] relative shrink-0 whitespace-nowrap">
        <p className="leading-[30px] mb-0">User Research</p>
        <p className="leading-[30px] mb-0">Design Thinking</p>
        <p className="leading-[30px] mb-0">Data Analysis</p>
        <p className="leading-[30px]">Wireframe and Prototype</p>
      </div>
    </div>
  );
}

export function ExpertiseCardUserExperienceIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[300px] mt-0 place-items-start relative row-1" data-name="Group">
      <div className="col-1 h-[12.761px] ml-[24.7px] mt-[24.74px] relative row-1 w-[25px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0001 12.7614">
          <g id="Group" opacity="0.5">
            <path d={svgPaths.p3a285e00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[37.238px] ml-[0.3px] mt-[0.26px] relative row-1 w-[25px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 37.2381">
          <g id="Group" opacity="0.5">
            <path d={svgPaths.pd201800} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[50px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.9998 50">
          <g id="Group">
            <path d={svgPaths.p173efb40} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[13.285px] ml-0 mt-[12.24px] relative row-1 w-[25.602px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6024 13.2853">
          <g id="Group">
            <path d={svgPaths.p10920bf0} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[37.762px] ml-[24.4px] mt-[12.24px] relative row-1 w-[25.602px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6021 37.7617">
          <g id="Group">
            <path d={svgPaths.p29d96400} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ExpertiseCardUserExperience() {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
    >
      <ExpertiseCardUserExperienceText />
      <ExpertiseCardUserExperienceIcon />
    </motion.div>
  );
}

/* ------------------------- 02 User Interface Design ------------------------- */
export function ExpertiseCardUserInterfaceText() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col gap-[20px] items-start ml-0 mt-[14px] not-italic relative row-1 text-[#d5cdc4] text-[18px] w-[204px]">
      <p className="font-['Montreal_Serial:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`02  User Interface Design`}</p>
      <div className="font-['Montreal_Serial:Regular',sans-serif] leading-[0] relative shrink-0 whitespace-nowrap">
        <p className="leading-[30px] mb-0">Design System</p>
        <p className="leading-[30px] mb-0">Interaction Design</p>
        <p className="leading-[30px] mb-0">Responsive Design</p>
        <p className="leading-[30px] mb-0">Web Design</p>
        <p className="leading-[30px]">App Design</p>
      </div>
    </div>
  );
}

export function ExpertiseCardUserInterfaceIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[386.5px] mt-0 place-items-start relative row-1" data-name="Group">
      <div className="col-1 h-[11.585px] ml-[0.27px] mt-[27.2px] relative row-1 w-[49.865px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.8651 11.5849">
          <g id="Group" opacity="0.5">
            <path d={svgPaths.p27da6e00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[49.984px] ml-0 mt-[0.02px] relative row-1 w-[50.41px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.4104 49.9839">
          <g id="Group">
            <path d={svgPaths.p2ccdfc80} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[50px] ml-[24.66px] mt-0 relative row-1 w-[1.091px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.09054 50">
          <g id="Group">
            <path d={svgPaths.pf7f3580} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ExpertiseCardUserInterface() {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
    >
      <ExpertiseCardUserInterfaceText />
      <ExpertiseCardUserInterfaceIcon />
    </motion.div>
  );
}

export function ExpertiseGridRowTop() {
  return (
    <div className="content-stretch flex gap-[119px] items-start relative shrink-0 w-full">
      <ExpertiseCardUserExperience />
      <ExpertiseCardUserInterface />
    </div>
  );
}

/* ------------------------------ 03 Design Planning --------------------------- */
export function ExpertiseCardDesignPlanningText() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col gap-[20px] items-start ml-0 mt-[14px] not-italic relative row-1 text-[#d5cdc4] text-[18px] w-[178px]">
      <p className="font-['Montreal_Serial:Bold',sans-serif] leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">{`03  Design Planning`}</p>
      <div className="font-['Montreal_Serial:Regular',sans-serif] leading-[0] relative shrink-0 w-full">
        <p className="leading-[30px] mb-0">Set Process</p>
        <p className="leading-[30px] mb-0">Design Sprint</p>
        <p className="leading-[30px] mb-0">Project Trackers</p>
        <p className="leading-[30px]">Resource Management</p>
      </div>
    </div>
  );
}

export function ExpertiseCardDesignPlanningIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[299px] mt-0 place-items-start relative row-1" data-name="Group">
      <div className="col-1 h-[10.215px] ml-[0.27px] mt-[15.06px] relative row-1 w-[49.455px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.455 10.2153">
          <g id="Group" opacity="0.5">
            <path d={svgPaths.p1e438600} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[50px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0003 50">
          <g id="Group">
            <path d={svgPaths.pceec200} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[10.761px] ml-0 mt-[24.45px] relative row-1 w-[50px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0003 10.761">
          <g id="Group">
            <path d={svgPaths.p85bbc80} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ExpertiseCardDesignPlanning() {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
    >
      <ExpertiseCardDesignPlanningText />
      <ExpertiseCardDesignPlanningIcon />
    </motion.div>
  );
}

/* ---------------------- 04 Visual Communication & Branding ------------------- */
export function ExpertiseCardBrandingText() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col gap-[20px] items-start ml-0 mt-[15px] not-italic relative row-1 text-[#d5cdc4] text-[18px] w-[306px]">
      <p className="font-['Montreal_Serial:Bold',sans-serif] leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">{`04  Visual Communication & Branding`}</p>
      <div className="content-stretch flex flex-col font-['Montreal_Serial:Regular',sans-serif] gap-[2px] items-start leading-[0] relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <p className="leading-[30px] mb-0">HTML(basic)</p>
          <p className="leading-[30px]">CSS (Basic)</p>
        </div>
        <div className="relative shrink-0 w-full">
          <p className="leading-[30px] mb-0">Implementing typography</p>
          <p className="leading-[30px]">Aligning UI designs with brand identity</p>
        </div>
      </div>
    </div>
  );
}

export function ExpertiseCardBrandingIcon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[389.5px] mt-0 place-items-start relative row-1">
      <div className="col-1 h-[11.412px] ml-0 mt-[38.59px] relative row-1 w-[44.885px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.8849 11.4124">
          <g id="Group">
            <path d={svgPaths.p1f72f4f0} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[20.641px] ml-0 mt-0 relative row-1 w-[44.885px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.8848 20.6406">
          <g id="Group">
            <path d={svgPaths.p3e06da00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[30.486px] ml-[43.76px] mt-[9.76px] relative row-1 w-[1.127px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.12705 30.4864">
          <g id="Group">
            <path d={svgPaths.p1d2fe280} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="col-1 h-[30.486px] ml-0 mt-[9.76px] relative row-1 w-[1.127px]" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.12705 30.4864">
          <g id="Group">
            <path d={svgPaths.p20d92700} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ExpertiseCardBranding() {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
    >
      <ExpertiseCardBrandingText />
      <ExpertiseCardBrandingIcon />
    </motion.div>
  );
}

export function ExpertiseGridRowBottom() {
  return (
    <div className="content-stretch flex gap-[119px] items-start relative shrink-0 w-full">
      <ExpertiseCardDesignPlanning />
      <ExpertiseCardBranding />
    </div>
  );
}

/** 2x2 grid of expertise cards (icon + title + bullet list per card). */
export function ExpertiseGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={staggerContainer(0.12)}
      className="absolute content-stretch flex flex-col gap-[50px] items-start leading-[0] left-[484px] top-[2438px] w-[905.91px]"
    >
      <ExpertiseGridRowTop />
      <ExpertiseGridRowBottom />
    </motion.div>
  );
}

/** Skills / expertise section: eyebrow label, heading and the 2x2 expertise grid. */
export function Skills() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.6 }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[50px] not-italic text-[#d5cdc4] text-[18px] top-[2238px] whitespace-nowrap"
      >
        Area of expertise
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[484px] text-[#d5cdc4] text-[60px] top-[2248px] w-[778px]"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        Skills That Shape Meaningful User Journeys.
      </motion.p>
      <ExpertiseGrid />
    </>
  );
}
