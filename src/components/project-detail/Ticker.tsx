interface TickerProps {
  text: string;
}

/** Infinite horizontal marquee banner, used as a section divider on project detail pages. */
export function Ticker({ text }: TickerProps) {
  // Two identical halves back-to-back so `translateX(-50%)` loops seamlessly.
  const half = Array.from({ length: 6 }, () => `${text}    `);
  const repeated = half.concat(half);

  return (
    <div className="overflow-hidden border-t border-b border-[#e0e0e0] py-4">
      <div className="flex w-max animate-[ticker_20s_linear_infinite]">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap pr-10 font-['Playfair',Georgia,serif] text-[clamp(48px,5vw,70px)] leading-[55px] text-[#222]"
            style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
