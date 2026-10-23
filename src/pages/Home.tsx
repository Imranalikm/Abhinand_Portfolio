import { lazy, Suspense } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, useDocumentMeta } from "@/lib/useDocumentMeta";

const DesktopHome = lazy(() => import("@/components/DesktopHome").then((mod) => ({ default: mod.DesktopHome })));
const MobileHome = lazy(() => import("@/components/mobile/MobileHome").then((mod) => ({ default: mod.MobileHome })));

/**
 * >=1280px renders the pixel-exact scaled Figma canvas (text stays >=14px down to 1280); below that, a stacked
 * flow layout built for touch and narrow screens. Each is its own chunk, so phones never download the canvas.
 */
export const DESKTOP_QUERY = "(min-width: 1280px)";

export function Home() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  useDocumentMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION);
  return <Suspense fallback={<div className="min-h-screen bg-black" />}>{isDesktop ? <DesktopHome /> : <MobileHome />}</Suspense>;
}
