/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Build-time prerender: renders the React app to static HTML for each language
 * so crawlers (and social scrapers that don't execute JS) receive real content.
 *
 *   dist/index.html      -> Spanish  (https://workwaytech.com/)
 *   dist/en/index.html   -> English  (https://workwaytech.com/en/)
 *
 * Run after `vite build` (see the "build" script in package.json). The client
 * bundle hydrates this markup; language is derived from the URL path so the
 * initial client render matches the prerendered HTML.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { translations, type Language } from "../src/i18n";

const SITE = "https://workwaytech.com";
const OG_IMAGE = `${SITE}/logo.png`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, "../dist");

const pages: { lang: Language; outDir: string; url: string }[] = [
  { lang: "es", outDir: distDir, url: `${SITE}/` },
  { lang: "en", outDir: path.join(distDir, "en"), url: `${SITE}/en/` },
];

function headTags(lang: Language, url: string): string {
  const seo = translations[lang].seo;
  const altLocale = translations[lang === "es" ? "en" : "es"].seo.ogLocale;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WorkwayTech",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    description: seo.description,
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
    publisher: {
      "@type": "Organization",
      name: "WorkwayTech",
      url: SITE,
      logo: OG_IMAGE,
    },
  });

  return [
    `<meta name="description" content="${seo.description}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="WorkwayTech" />`,
    `<meta property="og:title" content="${seo.title}" />`,
    `<meta property="og:description" content="${seo.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:alt" content="${seo.ogImageAlt}" />`,
    `<meta property="og:locale" content="${seo.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${altLocale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${seo.title}" />`,
    `<meta name="twitter:description" content="${seo.description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${SITE}/" />`,
    `<link rel="alternate" hreflang="en" href="${SITE}/en/" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .map((tag) => `    ${tag}`)
    .join("\n");
}

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

for (const { lang, outDir, url } of pages) {
  const seo = translations[lang].seo;
  const appHtml = renderToString(<App initialLang={lang} />);

  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title}</title>`)
    .replace("</head>", `${headTags(lang, url)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  console.log(`prerendered [${lang}] -> dist/${path.relative(distDir, path.join(outDir, "index.html"))}`);
}
