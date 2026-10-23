import svgPaths from "@/assets/icon-paths";
import { SITE_INFO } from "@/data/site";

/** Behance glyph, light-on-dark variant for the (white-background) project detail footer. */
function IconBehance() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p29f88d00} fill="#222" />
      <path d={svgPaths.p88d9f00} fill="#222" />
    </svg>
  );
}

/** LinkedIn glyph, light-on-dark variant for the (white-background) project detail footer. */
function IconLinkedIn() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p5dad00} fill="#222" />
    </svg>
  );
}

/** Footer shared by every project detail page: services, contact, socials, copyright, back to top. */
export function DetailFooter() {
  return (
    <footer className="px-4 pb-10 pt-12 md:px-8 xl:pb-[50px] xl:pl-[383px] xl:pr-[50px] xl:pt-[60px]">
      <div className="flex flex-wrap items-end justify-between gap-12">
        <div className="flex flex-wrap items-end gap-10 md:gap-32">
          <div>
            <p className="mb-5 text-[24px] font-medium capitalize">Services</p>
            {SITE_INFO.services.map((s) => (
              <p key={s} className="text-[18px] leading-[1.6]">
                {s}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="break-words text-[clamp(18px,5vw,24px)] font-medium lowercase">{SITE_INFO.email}</p>
            <p className="text-[clamp(18px,5vw,24px)] font-medium">{SITE_INFO.phone}</p>
            <p className="text-[clamp(18px,5vw,24px)] font-medium capitalize">{SITE_INFO.location}</p>
          </div>
        </div>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="min-h-11 cursor-pointer border-none bg-none text-[clamp(18px,5vw,24px)] font-medium capitalize text-[#222] underline xl:min-h-0">
          Back to top
        </button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6 md:mt-[60px] md:gap-12">
        <a href="#" aria-label="Behance" className="block opacity-100 transition-opacity duration-200 hover:opacity-50 max-xl:p-0.5">
          <IconBehance />
        </a>
        <a href="#" aria-label="LinkedIn" className="block opacity-100 transition-opacity duration-200 hover:opacity-50 max-xl:p-0.5">
          <IconLinkedIn />
        </a>
        <p className="text-[clamp(15px,4vw,24px)] font-medium capitalize xl:ml-[140px]">{SITE_INFO.copyright}</p>
      </div>
    </footer>
  );
}
