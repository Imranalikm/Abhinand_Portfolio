import svgPaths from "@/assets/icon-paths";

/**
 * Plain, unpositioned brand mark — same gradient glyph as `BrandLogo`, but without
 * the absolute positioning `BrandLogo` bakes in for the fixed 1440px home canvas.
 * Use this wherever the logo sits inside normal document flow (e.g. a flex header).
 */
export function LogoMark({ size = 39 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 39 39" fill="none">
      <g clipPath="url(#logomark-clip)">
        <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p2020f900} fill="url(#logomark-g0)" />
        <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.ped92480} fill="url(#logomark-g1)" />
      </g>
      <defs>
        <linearGradient id="logomark-g0" x1="19.5" y1="0" x2="19.5" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5CDC4" />
          <stop offset="1" stopColor="#353432" />
        </linearGradient>
        <linearGradient id="logomark-g1" x1="9.75" y1="0" x2="9.75" y2="19.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5CDC4" />
          <stop offset="1" stopColor="#353432" />
        </linearGradient>
        <clipPath id="logomark-clip">
          <rect width="39" height="39" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
