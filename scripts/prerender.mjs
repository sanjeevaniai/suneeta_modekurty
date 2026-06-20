// Post-build prerender: serve the built site, load it in a headless browser,
// and write the fully-rendered HTML back into dist/. This bakes the page copy
// into static HTML so AI crawlers and search engines read it without running JS.
//
// Run automatically via the "postbuild" npm script.

import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 4317;
const ORIGIN = `http://localhost:${PORT}`;

// Routes to prerender. The personal letter (/foryou-from-mamma) is intentionally
// excluded — it should not be indexed.
const ROUTES = ["/"];

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server did not start at ${url}`);
}

const preview = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--strictPort"],
  { cwd: ROOT, stdio: "ignore" }
);

let browser;
try {
  await waitForServer(ORIGIN);
  browser = await puppeteer.launch({ headless: "new" });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.goto(`${ORIGIN}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
    // Give the signature animation / fonts a beat to settle.
    await new Promise((r) => setTimeout(r, 1500));

    const html = "<!doctype html>\n" + (await page.content()).replace(/^<!doctype html>\n?/i, "");

    const outPath =
      route === "/"
        ? join(ROOT, "dist", "index.html")
        : join(ROOT, "dist", route.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    console.log(`prerendered ${route} -> ${outPath}`);
    await page.close();
  }
} finally {
  if (browser) await browser.close();
  preview.kill();
}
