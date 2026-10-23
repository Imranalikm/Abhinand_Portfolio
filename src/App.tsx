import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LazyMotion, MotionConfig } from "framer-motion";
import { Home } from "@/pages/Home";

const ProjectDetail = lazy(() => import("@/pages/ProjectDetail").then((mod) => ({ default: mod.ProjectDetail })));

/** React Router keeps the browser's scroll position across navigations; reset it so each new route opens at its top instead of wherever the previous page was scrolled to. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LazyMotion features={() => import("@/lib/motionFeatures").then((mod) => mod.default)} strict>
      {/* Honour prefers-reduced-motion: drops transform loops (marquees, spins, slides) but keeps fades. */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}
