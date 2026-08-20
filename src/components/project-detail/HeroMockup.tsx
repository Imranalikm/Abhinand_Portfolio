import type { Project } from "@/data/projects";

interface HeroMockupProps {
  mockup: Project["mockup"];
}

/** MacBook-style browser chassis previewing the project's live site, used at the top of the detail page hero. */
export function HeroMockup({ mockup }: HeroMockupProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[14px] bg-[#d8d8d8] shadow-2xl"
      style={{ aspectRatio: "1340/602" }}
    >
      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-b from-[#e4e4e4] to-[#c8c8c8]" />

      <div
        className="absolute overflow-hidden rounded-[6px] bg-black"
        style={{ top: "3.5%", left: "2%", right: "2%", bottom: "9%" }}
      >
        <div className="flex h-full w-full flex-col bg-[#0c0a07]">
          <div
            className="flex shrink-0 items-center justify-between px-6 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-['Playfair',Georgia,serif] text-[16px] text-[#c8b89a]"
              style={{ letterSpacing: "0.12em" }}
            >
              {mockup.brand}
            </span>
            <div className="flex gap-5">
              {mockup.navLinks.map((n) => (
                <span
                  key={n}
                  className="font-['DM_Sans',sans-serif] text-[10px] text-[#666]"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <img src={mockup.image} alt={mockup.brand} className="h-full w-full object-cover opacity-75" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #0c0a07 0%, transparent 50%)" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <p
                className="font-['Playfair',Georgia,serif] text-[clamp(20px,3.5vw,44px)] text-[#c8b89a]"
                style={{ letterSpacing: "0.15em", fontVariationSettings: '"opsz" 12, "wdth" 100' }}
              >
                {mockup.brand}
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[9px] text-[#888]" style={{ letterSpacing: "0.25em" }}>
                {mockup.tagline}
              </p>
              <div
                className="mt-2 font-['DM_Sans',sans-serif] text-[9px] text-[#c8b89a]"
                style={{ border: "1px solid rgba(200,184,154,0.6)", padding: "6px 22px", letterSpacing: "0.2em" }}
              >
                {mockup.ctaLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[1.2%] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#555]" />

      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center rounded-b-[14px]"
        style={{ height: "9%", background: "#cdcdcd" }}
      >
        <div className="h-[3px] w-14 rounded-full bg-[#aaa]" />
      </div>
    </div>
  );
}
