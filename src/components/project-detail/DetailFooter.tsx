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
    <footer className="px-[50px] pb-[50px] pt-[60px] md:pl-[383px]">
      <div className="flex flex-wrap items-end justify-between gap-12">
        <div className="flex flex-wrap items-end gap-32">
          <div>
            <p className="mb-5 text-[24px] font-medium capitalize">Services</p>
            {SITE_INFO.services.map((s) => (
              <p key={s} className="text-[18px] leading-[1.6]">
                {s}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[24px] font-medium lowercase">{SITE_INFO.email}</p>
            <p className="text-[24px] font-medium">{SITE_INFO.phone}</p>
            <p className="text-[24px] font-medium capitalize">{SITE_INFO.location}</p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-none bg-none text-[24px] font-medium capitalize text-[#222] underline"
        >
          Back to top
        </button>
      </div>

      <div className="mt-[60px] flex items-center gap-12">
        <a
          href="#"
          aria-label="Behance"
          className="block opacity-100 transition-opacity duration-200 hover:opacity-50"
        >
          <IconBehance />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="block opacity-100 transition-opacity duration-200 hover:opacity-50"
        >
          <IconLinkedIn />
        </a>
        <p className="ml-[140px] text-[24px] font-medium capitalize">{SITE_INFO.copyright}</p>
      </div>
    </footer>
  );
}
