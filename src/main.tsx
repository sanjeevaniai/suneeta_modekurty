import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// If the page was prerendered (static HTML baked in at build time), hydrate it
// so AI crawlers and search engines read the full copy without running JS.
// Otherwise (dev), mount fresh.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
