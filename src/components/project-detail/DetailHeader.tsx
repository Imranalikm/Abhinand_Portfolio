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
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-[50px] py-7 transition-[background,backdrop-filter] duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Link to="/" className="text-[16px] text-black no-underline">
        ⟵ Back
      </Link>
      <Link to="/">
        <LogoMark />
      </Link>
      {nextSlug ? (
        <Link to={`/project/${nextSlug}`} className="text-[16px] text-black no-underline">
          Next ⟶
        </Link>
      ) : (
        <span />
      )}
    </header>
  );
}
