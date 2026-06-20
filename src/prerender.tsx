// Build-time prerender entry (no browser required).
// vite-prerender-plugin calls this during `vite build`, rendering the app to a
// static HTML string that gets injected into #root in dist/index.html. The
// client then hydrates it (see main.tsx). This is what AI crawlers and search
// engines read without running JavaScript.

import { StaticRouter } from "react-router-dom/server";
import { AppInner } from "./App";

export async function prerender(data: { url?: string }) {
  const { renderToString } = await import("react-dom/server");
  const html = renderToString(
    <StaticRouter location={data?.url || "/"}>
      <AppInner />
    </StaticRouter>
  );
  return { html };
}
