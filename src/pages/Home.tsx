import { lazy, Suspense } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, useDocumentMeta } from "@/lib/useDocumentMeta";

const DesktopHome = lazy(() => import("@/components/DesktopHome").then((mod) => ({ default: mod.DesktopHome })));
const MobileHome = lazy(() => import("@/components/mobile/MobileHome").then((mod) => ({ default: mod.MobileHome })));

/**
 * Any mouse/trackpad device (at every window size) and any screen >=1024px gets the original, pixel-exact
 * scaled Figma canvas, exactly as before. Phones and touch tablets under 1024px get a stacked flow layout.
 * Each is its own chunk, so phones never download the canvas.
 */
export const DESKTOP_QUERY = "(hover: hover) and (pointer: fine), (min-width: 1024px)";

export function Home() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  useDocumentMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION);
  return <Suspense fallback={<div className="min-h-screen bg-black" />}>{isDesktop ? <DesktopHome /> : <MobileHome />}</Suspense>;
}
