/// <reference types="vite/client" />

/** Shape vite-imagetools returns for `?…&as=picture` imports: one srcset per format plus a fallback <img>. */
interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

declare module "*as=picture" {
  const picture: Picture;
  export default picture;
}
