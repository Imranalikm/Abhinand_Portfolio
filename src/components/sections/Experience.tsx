import { motion } from "framer-motion";
import { fadeLeft, fadeUp, inViewOnce, staggerContainer } from "@/lib/motion";

/* ------------------------------ Career timeline ------------------------------ */
export function TimelineEntryWisbatoIntern() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[50px] items-center leading-[normal] relative shrink-0 text-[18px] whitespace-nowrap">
        <p className="font-['Montreal_Serial:Bold',sans-serif] relative shrink-0">UI/UX Intern — WISBATO</p>
        <p className="capitalize font-['Montreal_Serial:Regular',sans-serif] relative shrink-0">1/2/2023</p>
      </div>
      <ul className="block font-['Montreal_Serial:Regular',sans-serif] leading-[0] list-disc min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Assisted in UX research, prototyping, and UI development for client projects.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Learned to create responsive designs and implement user feedback efficiently.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Contributed to improving visual consistency across web products.</span>
        </li>
      </ul>
    </div>
  );
}

export function TimelineEntryJuniorDesigner() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[50px] items-center leading-[normal] relative shrink-0 text-[18px] whitespace-nowrap">
        <p className="font-['Montreal_Serial:Bold',sans-serif] relative shrink-0">Junior UI/UX Designer</p>
        <p className="capitalize font-['Montreal_Serial:Regular',sans-serif] relative shrink-0">1/8/2023</p>
      </div>
      <ul className="block font-['Montreal_Serial:Regular',sans-serif] leading-[0] list-disc min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Lead design for web and mobile interfaces focused on usability and clean visuals.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Collaborated with developers and clients to refine digital experiences.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Created wireframes, prototypes, and final UI for various industry domains (healthcare, fintech, real estate, etc.).</span>
        </li>
      </ul>
    </div>
  );
}

export function TimelineEntryUiUxDesigner() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Montreal_Serial:Bold',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[18px] whitespace-nowrap">UI/UX Designer</p>
      <ul className="block col-1 font-['Montreal_Serial:Regular',sans-serif] list-disc mt-[43px] relative row-1 text-[16px] w-[626px]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Lead design for web and mobile interfaces focused on usability and clean visuals.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Collaborated with developers and clients to refine digital experiences.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Created wireframes, prototypes, and final UI for various industry domains (healthcare, fintech, real estate, etc.).</span>
        </li>
      </ul>
      <p className="capitalize col-1 font-['Montreal_Serial:Regular',sans-serif] leading-[normal] ml-[170px] mt-0 relative row-1 text-[18px] whitespace-nowrap">1/9/2024</p>
    </div>
  );
}

export function CareerTimelineColumnLeft() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={staggerContainer(0.15)}
      className="[word-break:break-word] absolute content-stretch flex flex-col gap-[50px] items-start left-[60px] not-italic text-[#d5cdc4] top-[3291px] w-[626px]"
    >
      <motion.div variants={fadeUp} className="w-full">
        <TimelineEntryWisbatoIntern />
      </motion.div>
      <motion.div variants={fadeUp} className="w-full">
        <TimelineEntryJuniorDesigner />
      </motion.div>
      <motion.div variants={fadeUp} className="w-full">
        <TimelineEntryUiUxDesigner />
      </motion.div>
    </motion.div>
  );
}

export function TimelineEntrySeniorDesigner() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Montreal_Serial:Bold',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[18px] whitespace-nowrap">Senior UI/UX Designer</p>
      <ul className="block col-1 font-['Montreal_Serial:Regular',sans-serif] list-disc mt-[43px] relative row-1 text-[16px] w-[585px]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Managed complex projects and mentored junior designers.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">{` Established design standards, workflows, and component libraries.`}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">{` Collaborated with product managers and stakeholders to define product strategy.`}</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">{` Led usability testing and translated insights into impactful design improvements.`}</span>
        </li>
      </ul>
      <p className="capitalize col-1 font-['Montreal_Serial:Regular',sans-serif] leading-[normal] ml-[211.2px] mt-0 relative row-1 text-[18px] whitespace-nowrap">1/9/2025</p>
    </div>
  );
}

export function TimelineEntryProductDesigner() {
  return (
    <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <p className="col-1 font-['Montreal_Serial:Bold',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[18px] whitespace-nowrap">Product Designer</p>
      <ul className="block col-1 font-['Montreal_Serial:Regular',sans-serif] list-disc mt-[43px] relative row-1 text-[16px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Owned the complete product lifecycle from discovery to launch.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">{` Balanced business objectives, user needs, and technical feasibility.`}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">{` Defined product vision, user journeys, and experience strategies.`}</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">{` Drove product innovation through data-driven decisions and customer insights.`}</span>
        </li>
      </ul>
      <p className="capitalize col-1 font-['Montreal_Serial:Regular',sans-serif] leading-[normal] ml-[29.91%] mt-0 relative row-1 text-[18px] w-[12.65%]">1/6/2026</p>
    </div>
  );
}

export function CareerTimelineColumnRight() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={staggerContainer(0.15, 0.15)}
      className="[word-break:break-word] absolute content-stretch flex flex-col gap-[50px] items-start leading-[0] left-[805px] not-italic text-[#d5cdc4] top-[3291px] w-[585px]"
    >
      <motion.div variants={fadeUp} className="w-full">
        <TimelineEntrySeniorDesigner />
      </motion.div>
      <motion.div variants={fadeUp} className="w-full">
        <TimelineEntryProductDesigner />
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------- Project history list ---------------------------- */
export function ProjectRowFireFightingHose() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">Fire fighting house</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead 2025</p>
    </div>
  );
}

export function ProjectRowWapoGeneralTrading() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">WAPO GENERAL TRADING</p>
        <div className="h-0 relative shrink-0 w-[464px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 0.5">
              <line id="Line 18" stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 1" strokeWidth="0.5" x2="464" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead 2025</p>
    </div>
  );
}

export function ProjectRowFintechWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Fintech Company Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead Oct 2024</p>
    </div>
  );
}

export function ProjectRowConstructionWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Construction Company Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead Oct 2024</p>
    </div>
  );
}

export function ProjectRowWiscartEcommerce() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Wiscart E-Commerce Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead Oct 2024</p>
    </div>
  );
}

export function ProjectRowCarRentalWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">Car Rental Service Website</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead Oct 2024</p>
    </div>
  );
}

export function ProjectRowHairTransplantWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Dr. Jigar Bhatt Hair Transplant Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">UX/UI Design lead jan 2025</p>
    </div>
  );
}

export function ProjectRowNetAdminPanel() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`.NET Admin & User Panel Responsive Design`}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-pre">{`Senior  web Design lead march 2025`}</p>
    </div>
  );
}

export function ProjectRowWapoLogisticsWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Wapo Logistics & E-Commerce Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-pre">{`Senior  web Design lead april 2025`}</p>
    </div>
  );
}

export function ProjectRowCoxFlyWebsiteA() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Home Cox-Fly Tour & Travel Website`}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-pre">{`Senior  web Design lead april 2025`}</p>
    </div>
  );
}

export function ProjectRowCoxFlyWebsiteB() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Home Cox-Fly Tour & Travel Website`}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-pre">{`Senior  web Design lead april 2025`}</p>
    </div>
  );
}

export function ProjectRowShelterCreationWebsite() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">{`Shelter Creation Website `}</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-pre">{`Senior  web Design lead may 2025`}</p>
    </div>
  );
}

export function ProjectRowSailsTrackingApp() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">Sails tracking application</p>
        <div className="h-0 relative shrink-0 w-[514px]">
          <div className="absolute inset-[-0.5px_-0.78%_-8px_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 8.5">
              <g filter="url(#filter0_d_1_2029)" id="Line 17">
                <line stroke="var(--stroke-0, #D5CDC4)" strokeDasharray="1 2" strokeLinecap="square" strokeWidth="0.5" x1="4.25" x2="517.75" y1="0.25" y2="0.25" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.5" id="filter0_d_1_2029" width="522" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2029" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2029" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-['Montreal_Serial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d5cdc4] text-[18px] whitespace-nowrap">Product designear may 2025</p>
    </div>
  );
}

/** Dashed-line list of past client projects with role/date on the right. */
const PROJECT_ROWS = [
  ProjectRowFireFightingHose,
  ProjectRowWapoGeneralTrading,
  ProjectRowFintechWebsite,
  ProjectRowConstructionWebsite,
  ProjectRowWiscartEcommerce,
  ProjectRowCarRentalWebsite,
  ProjectRowHairTransplantWebsite,
  ProjectRowNetAdminPanel,
  ProjectRowWapoLogisticsWebsite,
  ProjectRowCoxFlyWebsiteA,
  ProjectRowCoxFlyWebsiteB,
  ProjectRowShelterCreationWebsite,
  ProjectRowSailsTrackingApp,
];

export function ProjectHistoryList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={staggerContainer(0.06)}
      className="absolute content-stretch flex flex-col gap-[30px] items-start left-[76px] top-[4110px] w-[1239px]"
    >
      {PROJECT_ROWS.map((Row, index) => (
        <motion.div key={index} variants={fadeLeft} className="w-full">
          <Row />
        </motion.div>
      ))}
    </motion.div>
  );
}

/** Experience section: career timeline (two columns) and project history list. */
export function Experience() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.6 }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[60px] not-italic text-[#d5cdc4] text-[18px] top-[2989px] whitespace-nowrap"
      >
        Area of expertise
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[55px] left-[60px] text-[#d5cdc4] text-[60px] top-[3042px] w-[631px]"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        Experience That Speaks Through Design
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[60px] not-italic text-[#d5cdc4] text-[16px] top-[3172px] w-[626px]"
      >
        From crafting intuitive interfaces to shaping seamless user journeys, every experience has strengthened my passion for purposeful design.
      </motion.p>
      <CareerTimelineColumnLeft />
      <CareerTimelineColumnRight />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.6 }}
        className="[word-break:break-word] absolute font-['Montreal_Serial:Regular',sans-serif] leading-[normal] left-[76px] not-italic text-[#d5cdc4] text-[18px] top-[3867px] whitespace-nowrap"
      >
        Area of expertise
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="[word-break:break-word] absolute font-['Playfair:Regular',sans-serif] font-normal leading-[0] left-[76px] text-[#d5cdc4] text-[60px] top-[3920px] whitespace-nowrap"
        style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
      >
        <p className="leading-[55px] mb-0 whitespace-pre">{`Professional `}</p>
        <p className="leading-[55px] whitespace-pre">experience</p>
      </motion.div>
      <ProjectHistoryList />
    </>
  );
}
