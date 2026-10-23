import type { CSSProperties } from "react";

interface ResponsiveImageProps {
  picture: Picture;
  alt: string;
  /** CSS `sizes` hint for picking a srcset candidate; required so the browser doesn't assume 100vw. */
  sizes: string;
  className?: string;
  style?: CSSProperties;
  /** Above-the-fold / LCP image: load eagerly with high fetch priority instead of lazily. */
  priority?: boolean;
  draggable?: boolean;
}

/**
 * <picture> with AVIF/WebP sources from a vite-imagetools `as=picture` import. Styling goes on the inner
 * <img>; the <picture> wrapper is unstyled and static, so absolutely positioned images keep their containing block.
 */
export function ResponsiveImage({ picture, alt, sizes, className, style, priority, draggable }: ResponsiveImageProps) {
  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        // React 18 only forwards the lowercase attribute.
        {...{ fetchpriority: priority ? "high" : "auto" }}
        draggable={draggable}
      />
    </picture>
  );
}
