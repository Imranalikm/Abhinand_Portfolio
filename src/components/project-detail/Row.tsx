interface RowProps {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}

/** Two-column label/content row used throughout the project detail page's body copy sections. */
export function Row({ label, wide, children }: RowProps) {
  return (
    <div className="flex items-start" style={{ gap: wide ? 60 : 130 }}>
      <p className="shrink-0 text-[18px] leading-[1.1] text-[#222]" style={{ minWidth: wide ? 160 : 100 }}>
        {label}
      </p>
      <div className="flex-1 text-[16px] leading-[1.6] text-[#222]">{children}</div>
    </div>
  );
}
