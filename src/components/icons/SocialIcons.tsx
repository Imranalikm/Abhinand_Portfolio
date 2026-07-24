import svgPaths from "@/assets/icon-paths";

/** Two-path outline social icon (reused in the hero and footer). */
export function SocialIconOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p29f88d00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
          <path d={svgPaths.p88d9f00} fill="var(--fill-0, #D5CDC4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

/** Single-path solid social icon (reused in the hero and footer). */
export function SocialIconSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p5dad00} fill="var(--fill-0, #D5CDC4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
