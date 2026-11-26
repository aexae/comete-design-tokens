import StyleDictionary from "style-dictionary";
import { transformGroups, formats } from "style-dictionary/enums";
import fs from "node:fs";
import path from "node:path";
import { extractVars } from "./src/css-utils.js";

const CSS_DIR = "./build/css";
const semanticPrefixes = [
  "background",
  "surface",
  "text",
  "border",
  "icon",
  "blanket",
  "logo",
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

// ─── 2b. Tokens de composants ───────────────────────────────────
// Les tokens de composants aliasent la couche sémantique (et base/control
// pour les dimensions). On émet des références `var(--…)` (outputReferences)
// pour qu'ils héritent automatiquement du thème via les variables sémantiques.
const COMPONENTS = new Set([
  "button",
  "spinner",
  "avatar",
  "avatar-group",
  "autosave-indicator",
  "banner",
  "page",
  "page-bar",
  "page-toolbar",
  "side-nav",
  "bottom-nav",
  "quick-actions-menu",
]);
const isComponentToken = (token: { path: string[] }) => COMPONENTS.has(token.path[0] ?? "");
const componentSD = new StyleDictionary({
  log: { verbosity: "verbose", warnings: "warn" },
  source: [
    "tokens/base/**/*.json",
    "tokens/theme/light.json",
    "tokens/component/**/*.json",
  ],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: `${CSS_DIR}/`,
      files: [
        {
          destination: "_component.css",
          format: formats.cssVariables,
          options: { outputReferences: true },
          filter: isComponentToken,
        },
      ],
    },
  },
});

await componentSD.cleanAllPlatforms();
await componentSD.buildAllPlatforms();

// ─── 2c. Sortie Omnis (Comète SQL) ──────────────────────────────
// Un fichier plat et résolu par thème, consommé par Comète (Omnis Studio 6.1.3) :
// noms camelCase (convention Omnis), couleurs en entier Omnis (r + g*256 + b*65536)
// avec l'alpha aplati sur surface.default du thème (Omnis 6 n'a pas de transparence),
// dimensions en nombre de px. Exclus : ombres, animation, z-index.
// Le contrat de nommage vis-à-vis de Comète est vérifié par tests/consumers.test.ts.
const OMNIS_DIR = "./build/omnis";
const OMNIS_EXCLUDED_TYPES = new Set(["shadow", "duration", "other"]);
const OMNIS_EXCLUDED_ROOTS = new Set(["z-index"]);
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8")) as { version: string };

type TokenNode = { $value?: unknown; [key: string]: unknown };
const flattenTokens = (node: TokenNode, prefix: string[] = [], out: Record<string, TokenNode> = {}) => {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$") || value === null || typeof value !== "object") continue;
    const child = value as TokenNode;
    if ("$value" in child) out[[...prefix, key].join(".")] = child;
    else flattenTokens(child, [...prefix, key], out);
  }
  return out;
};
/** Valeur hex de `surface.default` du thème, références résolues dans les sources. */
const surfaceDefault = (theme: string): string => {
  const all: Record<string, TokenNode> = {};
  for (const file of fs.globSync("tokens/base/**/*.json")) {
    flattenTokens(JSON.parse(fs.readFileSync(file, "utf-8")) as TokenNode, [], all);
  }
  flattenTokens(JSON.parse(fs.readFileSync(`tokens/theme/${theme}.json`, "utf-8")) as TokenNode, [], all);
  let value = all["surface.default"]?.$value;
  for (let i = 0; typeof value === "string" && value.startsWith("{") && i < 10; i++) {
    value = all[value.slice(1, -1)]?.$value;
  }
  if (typeof value !== "string" || !/^#[0-9a-f]{6}$/i.test(value)) {
    throw new Error(`surface.default du thème ${theme} introuvable ou non opaque : ${String(value)}`);
  }
  return value.toLowerCase();
};

const hexByte = (hex: string, i: number) => parseInt(hex.slice(i, i + 2), 16);
/** "#rrggbb" ou "#rrggbbaa" (aplati sur backdrop) → entier Omnis rgb(). */
const omnisColor = (raw: string, backdrop: string): number => {
  let hex = raw.trim().toLowerCase().replace("#", "");
  if (hex.length === 3 || hex.length === 4) hex = [...hex].map((c) => c + c).join("");
  if (!/^[0-9a-f]{6}([0-9a-f]{2})?$/.test(hex)) throw new Error(`Couleur non hexadécimale : ${raw}`);
  const alpha = hex.length === 8 ? hexByte(hex, 6) : 255;
  const back = backdrop.replace("#", "");
  const mix = (i: number) => Math.round((hexByte(hex, i) * alpha + hexByte(back, i) * (255 - alpha)) / 255);
  return mix(0) + mix(2) * 256 + mix(4) * 65536;
};

StyleDictionary.registerTransform({
  name: "color/omnis",
  type: "value",
  transitive: true,
  filter: (token) => token.$type === "color",
  transform: (token, platform) =>
    typeof token.$value === "number" ? token.$value : omnisColor(String(token.$value), String(platform.backdrop)),
});
StyleDictionary.registerTransform({
  name: "dimension/omnis-px",
  type: "value",
  transitive: true,
  filter: (token) => token.$type === "dimension",
  transform: (token) => {
    if (typeof token.$value === "number") return token.$value;
    const match = /^(-?\d+(?:\.\d+)?)px$/.exec(String(token.$value).trim());
    if (!match) throw new Error(`Dimension attendue en px : ${token.name} = ${String(token.$value)}`);
    return Number(match[1]);
  },
});
/** Niveau d'un token d'après son fichier source : base, theme ou component. */
const omnisTier = (filePath: string): string => {
  const match = /^tokens[\\/](base|theme|component)[\\/]/.exec(filePath);
  const tier = match?.[1];
  if (!tier) throw new Error(`Niveau Omnis inconnu pour ${filePath}`);
  return tier;
};
StyleDictionary.registerFormat({
  name: "json/omnis",
  format: ({ dictionary, options }) => {
    const tokens: Record<string, unknown> = {};
    const deprecated: string[] = [];
    const catalog: { name: string; type: string; tier: string }[] = [];
    for (const token of dictionary.allTokens) {
      if (token.name in tokens) throw new Error(`Nom Omnis en doublon : ${token.name}`);
      tokens[token.name] = token.$value;
      if (token.$deprecated) deprecated.push(token.name);
      catalog.push({ name: token.name, type: String(token.$type), tier: omnisTier(String(token.filePath)) });
    }
    return `${JSON.stringify(
      {
        schema: "https://github.com/aexae/comete-design-tokens/tree/main/build/omnis#v1",
        version: options.version,
        theme: options.theme,
        backdrop: options.backdrop,
        tokens,
        deprecated,
        catalog,
      },
      null,
      1,
    )}\n`;
  },
});

for (const theme of ["light", "dark"]) {
  const backdrop = surfaceDefault(theme);
  const omnisSD = new StyleDictionary({
    log: { verbosity: "verbose", warnings: "warn" },
    source: ["tokens/base/**/*.json", `tokens/theme/${theme}.json`, "tokens/component/**/*.json"],
    platforms: {
      omnis: {
        transforms: ["attribute/cti", "name/camel", "color/omnis", "dimension/omnis-px"],
        backdrop,
        buildPath: `${OMNIS_DIR}/`,
        files: [
          {
            destination: `comete-tokens.${theme}.omnis.json`,
            format: "json/omnis",
            filter: (token) =>
              !OMNIS_EXCLUDED_TYPES.has(String(token.$type)) && !OMNIS_EXCLUDED_ROOTS.has(token.path[0] ?? ""),
            options: { theme, backdrop, version: pkg.version },
          },
        ],
      },
    },
  });
  await omnisSD.buildAllPlatforms();
}

// ─── 3. Assemble le fichier CSS unifié ──────────────────────────
const primitives = fs.readFileSync(path.join(CSS_DIR, "_primitives.css"), "utf-8");
const lightCSS = fs.readFileSync(path.join(CSS_DIR, "_semantic.light.css"), "utf-8");
const darkCSS = fs.readFileSync(path.join(CSS_DIR, "_semantic.dark.css"), "utf-8");
const componentCSS = fs.readFileSync(path.join(CSS_DIR, "_component.css"), "utf-8");

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

/* ── Composants (aliasent le sémantique → héritent du thème) ──── */
:root {
${extractVars(componentCSS)}
}
`;

fs.writeFileSync(path.join(CSS_DIR, "comete-tokens.css"), unified);

// Nettoyage des fichiers intermédiaires
fs.unlinkSync(path.join(CSS_DIR, "_primitives.css"));
fs.unlinkSync(path.join(CSS_DIR, "_semantic.light.css"));
fs.unlinkSync(path.join(CSS_DIR, "_semantic.dark.css"));
fs.unlinkSync(path.join(CSS_DIR, "_component.css"));

console.log("\\n✨ Build terminé");
console.log("   📁 build/css/comete-tokens.css (fichier unique)");
