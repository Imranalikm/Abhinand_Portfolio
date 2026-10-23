import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "@/components/icons/LogoMark";

interface DetailHeaderProps {
  /** Slug of the next project to link to; omitted when there's only one project so far. */
  nextSlug?: string;
}

/** Fixed top bar for project detail pages: back to portfolio, brand mark, next project. */
export function DetailHeader({ nextSlug }: DetailHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition-[background,backdrop-filter] duration-300 md:px-[50px] md:py-7"
      style={{
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Link to="/" className="group flex items-center gap-1 text-[16px] text-black no-underline max-md:min-h-11">
        <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">⟵</span> Back
      </Link>
      <Link to="/" aria-label="Home" className="flex items-center justify-center transition-transform duration-500 ease-out hover:rotate-[14deg] hover:scale-110 max-md:size-11">
        <LogoMark />
      </Link>
      {nextSlug ? (
        <Link to={`/project/${nextSlug}`} className="group flex items-center gap-1 text-[16px] text-black no-underline max-md:min-h-11">
          Next <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">⟶</span>
        </Link>
      ) : (
        <span />
      )}
    </header>
  );
}
