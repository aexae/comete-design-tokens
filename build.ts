import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";
import { transformGroups, formats } from "style-dictionary/enums";
import fs from "node:fs";
import path from "node:path";
import { extractVars } from "./src/css-utils.js";

register(StyleDictionary);

const CSS_DIR = "./build/css";
const semanticPrefixes = [
  "background",
  "text",
  "border",
  "icon",
  "blanket",
  "interaction",
  "_logo_no_themed_gradients",
];
const isSemanticToken = (token: { path: string[] }) => {
  const prefix = token.path[0];
  return prefix !== undefined && semanticPrefixes.includes(prefix);
};

// ─── 1. Primitives CSS ──────────────────────────────────────────
const baseSD = new StyleDictionary({
  log: { verbosity: "verbose", warnings: "warn" },
  source: ["tokens/base/**/*.json"],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: `${CSS_DIR}/`,
      files: [
        {
          destination: "_primitives.css",
          format: formats.cssVariables,
          options: { outputReferences: true },
        },
      ],
    },
  },
});

await baseSD.cleanAllPlatforms();
await baseSD.buildAllPlatforms();

// ─── 2. Semantic tokens light + dark ────────────────────────────
for (const theme of ["light", "dark"]) {
  const themeSD = new StyleDictionary({
    log: { verbosity: "verbose", warnings: "warn" },
    source: ["tokens/base/**/*.json", `tokens/theme/${theme}.json`],
    platforms: {
      css: {
        transformGroup: transformGroups.css,
        buildPath: `${CSS_DIR}/`,
        files: [
          {
            destination: `_semantic.${theme}.css`,
            format: formats.cssVariables,
            options: {
              outputReferences: false,
              selector: `[data-theme="${theme}"]`,
            },
            filter: isSemanticToken,
          },
        ],
      },
    },
  });

  await themeSD.cleanAllPlatforms();
  await themeSD.buildAllPlatforms();
}

// ─── 3. Assemble le fichier CSS unifié ──────────────────────────
const primitives = fs.readFileSync(path.join(CSS_DIR, "_primitives.css"), "utf-8");
const lightCSS = fs.readFileSync(path.join(CSS_DIR, "_semantic.light.css"), "utf-8");
const darkCSS = fs.readFileSync(path.join(CSS_DIR, "_semantic.dark.css"), "utf-8");

const unified = `/**
 * Comète Design Tokens
 * Architecture: primitives → semantic (light/dark)
 *
 * Usage:
 *   <link rel="stylesheet" href="comete-tokens.css">
 *   <html data-theme="light">  ou  <html data-theme="dark">
 *
 * AUTO-GENERATED — DO NOT EDIT MANUALLY
 */

/* ── Primitives ──────────────────────────────────────────────── */
${primitives}

/* ── Semantic (light = default) ──────────────────────────────── */
:root {
${extractVars(lightCSS)}
}

/* ── Semantic (dark) ─────────────────────────────────────────── */
${darkCSS}

/* ── Fallback: prefers-color-scheme ──────────────────────────── */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${extractVars(darkCSS, "    ")}
  }
}
`;

fs.writeFileSync(path.join(CSS_DIR, "comete-tokens.css"), unified);

// Nettoyage des fichiers intermédiaires
fs.unlinkSync(path.join(CSS_DIR, "_primitives.css"));
fs.unlinkSync(path.join(CSS_DIR, "_semantic.light.css"));
fs.unlinkSync(path.join(CSS_DIR, "_semantic.dark.css"));

console.log("\\n✨ Build terminé");
console.log("   📁 build/css/comete-tokens.css (fichier unique)");
