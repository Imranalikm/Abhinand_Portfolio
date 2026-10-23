import type { CSSProperties } from "react";

interface RowProps {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}

/** Two-column label/content row used throughout the project detail page's body copy sections; the label stacks above the copy below `md`. */
export function Row({ label, wide, children }: RowProps) {
  const vars = { "--row-gap": `${wide ? 60 : 130}px`, "--label-w": `${wide ? 160 : 100}px` } as CSSProperties;
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-[var(--row-gap)]" style={vars}>
      <p className="shrink-0 text-[18px] leading-[1.1] text-[#222] md:min-w-[var(--label-w)]">{label}</p>
      <div className="flex-1 text-[16px] leading-[1.6] text-[#222]">{children}</div>
    </div>
  );
}
