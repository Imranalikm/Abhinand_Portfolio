import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { DESKTOP_QUERY } from "./pages/Home";

// Start fetching the current route's layout chunk in parallel with React booting, instead of after first render.
if (location.pathname === "/") {
  void (window.matchMedia(DESKTOP_QUERY).matches ? import("./components/DesktopHome") : import("./components/mobile/MobileHome"));
} else if (location.pathname.startsWith("/project/")) {
  void import("./pages/ProjectDetail");
}

const root = document.getElementById("root")!;
createRoot(root).render(<App />);
