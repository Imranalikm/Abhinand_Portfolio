/*
 * Raster images, run through vite-imagetools: AVIF + WebP (alpha preserved), with widths at
 * 1x and 2x of each image's display size on the 1440px design canvas. Logos the design stretches into a
 * different-shaped box are pre-stretched (fit=fill) to that box so the browser never resamples a distorted image.
 */
// Hero mandala line art: rasterised from a 515 KB, 246-path SVG; at its ~112-150px display size the raster is identical and far cheaper to decode.
export { default as heroFlourish } from "./images/hero-flourish.png?w=180;360&format=avif;webp&as=picture";
export { default as portrait } from "./images/abhinandh-portrait.png?w=670;1340&format=avif;webp&as=picture";
export { default as logoCoxFly } from "./images/logo-cox-fly.png?w=259&h=75&fit=fill&format=avif;webp&as=picture";
export { default as logoWapo } from "./images/logo-wapo.png?w=120;240&format=avif;webp&as=picture";
export { default as logoForexiveMark } from "./images/logo-forexive-mark.png?w=204&h=164&fit=fill&format=avif;webp&as=picture";
export { default as logoPratigya } from "./images/logo-pratigya.png?w=71;142&format=avif;webp&as=picture";
export { default as logoReworkHealth } from "./images/logo-rework-health.png?w=76;152&format=avif;webp&as=picture";
export { default as resumeBannerBg } from "./images/resume-banner-bg.png?format=avif;webp&as=picture";
export { default as deviceMacBookAir } from "./images/device-macbook-air.png?w=133;266&format=avif;webp&as=picture";
export { default as deviceIPhone15 } from "./images/device-iphone-15.png?w=174;348&format=avif;webp&as=picture";
