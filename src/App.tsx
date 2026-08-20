import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ProjectDetail } from "@/pages/ProjectDetail";

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
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
