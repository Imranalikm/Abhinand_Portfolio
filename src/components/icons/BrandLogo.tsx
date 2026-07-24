import { motion } from "framer-motion";
import svgPaths from "@/assets/icon-paths";

export function BrandLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ rotate: 14, scale: 1.1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[39px] top-[28px] cursor-pointer"
      data-name="Logo"
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g clipPath="url(#clip0_1_1356)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p2020f900} fill="url(#paint0_linear_1_1356)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.ped92480} fill="url(#paint1_linear_1_1356)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1356" x1="19.5" x2="19.5" y1="0" y2="39">
            <stop stopColor="#D5CDC4" />
            <stop offset="1" stopColor="#353432" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1356" x1="9.75" x2="9.75" y1="0" y2="19.5">
            <stop stopColor="#D5CDC4" />
            <stop offset="1" stopColor="#353432" />
          </linearGradient>
          <clipPath id="clip0_1_1356">
            <rect fill="white" height="39" width="39" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}
