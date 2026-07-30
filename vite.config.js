import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite injects the built <script>/<link> tags into index.html itself,
// so they can't be edited in the source template. This does two things:
//
// 1. Adds `defer` to the script tag.
// 2. Strips `crossorigin` from the script/stylesheet tags. Vite adds it
//    by default (useful when assets are on a different origin/CDN with
//    SRI), but everything here is same-origin on GitHub Pages with no
//    integrity hashes, so it serves no purpose — and Safari's stricter
//    cross-origin cache partitioning can make a `crossorigin`-tagged
//    same-origin request behave worse (separate cache partition, no
//    reuse) than a plain same-origin one.
//
// The stylesheet link is intentionally left as a plain
// <link rel="stylesheet">, not the preload+onload-swap pattern — that
// trick is unreliable on mobile Safari (the onload swap can fail to
// fire), which left the page unstyled until a manual refresh. The CSS
// bundle here is ~4KB gzipped, so the render-blocking cost is trivial;
// not worth the mobile breakage risk.
function optimizeHtmlOutput() {
  return {
    name: "optimize-html-output",
    transformIndexHtml(html) {
      return html
        .replace(
          /<script type="module" (?!.*\bdefer\b)/g,
          '<script type="module" defer '
        )
        .replace(/\s+crossorigin(?=[\s>])/g, '');
    },
  };
}

export default defineConfig({
  plugins: [react(), optimizeHtmlOutput()],
  base: "/",
});