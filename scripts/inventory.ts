// Inventaire des tokens pour le chantier « descriptions ».
//
// Produit :
//   - docs/inventaire-tokens.md  : tables de revue par lot (A → F), à relire en PR
//   - build/inventory.json       : même contenu, exploitable par l'outillage
//
// Pour chaque token : nom CSS, couche (primitive / sémantique / composant), type,
// valeur résolue clair / sombre, alias direct, usages dans le design system
// (src/ et storybook/stories/), description actuelle et diagnostic (absente,
// tautologique, dépréciée).
//
// Usage : pnpm inventory            (DS attendu dans ../comete-design-system)
//         DS_DIR=/chemin pnpm inventory

import fs from "node:fs";
import path from "node:path";

type Json = Record<string, unknown>;
type Layer = "primitive" | "semantic" | "component";
type Lot = "A" | "B" | "C" | "D" | "E" | "F";

interface Token {
  path: string[];
  cssName: string;
  layer: Layer;
  file: string;
  type: string;
  rawLight: unknown;
  rawDark: unknown;
  alias: string | null;
  light: string;
  dark: string;
  description: string;
  deprecated: boolean;
  lot: Lot;
  usagesSrc: number;
  usagesStories: number;
  diagnostic: string;
}

const ROOT = path.resolve(import.meta.dirname, "..");
const DS_DIR = path.resolve(process.env.DS_DIR ?? path.join(ROOT, "..", "comete-design-system"));
const OUT_MD = path.join(ROOT, "docs", "inventaire-tokens.md");
const OUT_JSON = path.join(ROOT, "build", "inventory.json");

// ─── Lecture des sources ────────────────────────────────────────────

const readJson = (file: string): Json => JSON.parse(fs.readFileSync(file, "utf-8")) as Json;

const listFiles = (dir: string, pattern: RegExp): string[] => {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "node_modules") walk(p);
      } else if (pattern.test(entry.name)) out.push(p);
    }
  };
  if (fs.existsSync(dir)) walk(dir);
  return out;
};

interface Leaf {
  path: string[];
  node: Json;
  file: string;
}

const flatten = (node: Json, file: string, prefix: string[] = []): Leaf[] => {
  if ("$value" in node) return [{ path: prefix, node, file }];
  const out: Leaf[] = [];
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    if (child && typeof child === "object") out.push(...flatten(child as Json, file, [...prefix, key]));
  }
  return out;
};

const baseFiles = listFiles(path.join(ROOT, "tokens", "base"), /\.json$/);
const componentFiles = listFiles(path.join(ROOT, "tokens", "component"), /\.json$/);
const lightFile = path.join(ROOT, "tokens", "theme", "light.json");
const darkFile = path.join(ROOT, "tokens", "theme", "dark.json");

const baseLeaves = baseFiles.flatMap((f) => flatten(readJson(f), f));
const lightLeaves = flatten(readJson(lightFile), lightFile);
const darkLeaves = flatten(readJson(darkFile), darkFile);
const componentLeaves = componentFiles.flatMap((f) => flatten(readJson(f), f));

const key = (p: string[]) => p.join(".");
const byKey = (leaves: Leaf[]) => new Map(leaves.map((l) => [key(l.path), l]));
const baseMap = byKey(baseLeaves);
const lightMap = byKey(lightLeaves);
const darkMap = byKey(darkLeaves);
const componentMap = byKey(componentLeaves);

// ─── Résolution des alias ───────────────────────────────────────────

const aliasOf = (value: unknown): string | null =>
  typeof value === "string" && /^\{[^}]+\}$/.test(value) ? value.slice(1, -1) : null;

const resolve = (value: unknown, maps: Map<string, Leaf>[], depth = 0): string => {
  const ref = aliasOf(value);
  if (!ref) return typeof value === "string" ? value : JSON.stringify(value);
  if (depth > 20) return `⟂ boucle ${ref}`;
  for (const m of maps) {
    const leaf = m.get(ref);
    if (leaf) return resolve(leaf.node.$value, maps, depth + 1);
  }
  return `⟂ introuvable ${ref}`;
};

// ─── Nom CSS (transformGroup css de Style Dictionary : name/kebab) ──

const kebab = (segment: string): string =>
  segment
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

const cssName = (p: string[]): string => `--${p.map(kebab).join("-")}`;

// ─── Lots de revue ──────────────────────────────────────────────────

const SEMANTIC_STATUS = new Set(["success", "warning", "critical", "information", "on-warning"]);
const SEMANTIC_BRAND = new Set(["brand", "comete", "accent", "cycle", "day", "night"]);

const lotOf = (layer: Layer, p: string[]): Lot => {
  if (layer === "component") return "F";
  if (layer === "primitive") {
    const head = p[0] ?? "";
    const isColor = /^(comete|black|white|grey|blue|blue-grey|cool-grey|green|lime|magenta|orange|purple|red|teal|turquoise|yellow|dark-grey-solid|grey-solid)$/.test(
      head
    );
    return isColor ? "E" : "D";
  }
  const [head, group] = p;
  if (head === "logo") return "C";
  if (group && SEMANTIC_STATUS.has(group)) return "B";
  if (group && SEMANTIC_BRAND.has(group)) return "C";
  return "A";
};

// ─── Usages dans le design system ───────────────────────────────────

const dsSources = [
  ...listFiles(path.join(DS_DIR, "src"), /\.(css|ts|tsx)$/),
].filter((f) => !/\.test\.tsx?$/.test(f) && !/\.d\.ts$/.test(f));
const dsStories = listFiles(path.join(DS_DIR, "storybook", "stories"), /\.(css|ts|tsx)$/);

const countUsages = (files: string[]): Map<string, number> => {
  const counts = new Map<string, number>();
  const re = /var\(\s*(--[a-z0-9-]+)/g;
  for (const file of files) {
    const text = fs.readFileSync(file, "utf-8");
    for (const m of text.matchAll(re)) {
      const name = m[1]!;
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return counts;
};

const usagesSrc = countUsages(dsSources);
const usagesStories = countUsages(dsStories);

// ─── Diagnostic des descriptions ────────────────────────────────────

const diagnose = (t: Omit<Token, "diagnostic">): string => {
  if (t.deprecated) return "dépréciée";
  const d = t.description.trim();
  if (!d) return "absente";
  const tautology =
    /^(Spacing|Radius|Size|Sizing|Space)\s*\d+\s*\(\d+ px\)$/i.test(d) ||
    /^\d+(\.\d+)?( ?rem)?( \/ \d+ px)?$/.test(d) ||
    /^[\d.]+ rem \/ \d+ px$/.test(d) ||
    d.replace(/\s/g, "").toLowerCase() === t.light.replace(/\s/g, "").toLowerCase();
  if (tautology) return "tautologique";
  if (d.length < 25) return "trop courte";
  return "ok";
};

// ─── Construction ───────────────────────────────────────────────────

const tokens: Token[] = [];

const push = (layer: Layer, leaf: Leaf, lightNode: Json, darkNode: Json | undefined, mapsLight: Map<string, Leaf>[], mapsDark: Map<string, Leaf>[]) => {
  const p = leaf.path;
  const rawLight = lightNode.$value;
  const rawDark = darkNode ? darkNode.$value : rawLight;
  const name = cssName(p);
  const partial: Omit<Token, "diagnostic"> = {
    path: p,
    cssName: name,
    layer,
    file: path.relative(ROOT, leaf.file),
    type: String(lightNode.$type ?? ""),
    rawLight,
    rawDark,
    alias: aliasOf(rawLight),
    light: resolve(rawLight, mapsLight),
    dark: resolve(rawDark, mapsDark),
    description: String(lightNode.$description ?? darkNode?.$description ?? ""),
    deprecated: Boolean(lightNode.$deprecated ?? darkNode?.$deprecated),
    lot: lotOf(layer, p),
    usagesSrc: usagesSrc.get(name) ?? 0,
    usagesStories: usagesStories.get(name) ?? 0,
  };
  tokens.push({ ...partial, diagnostic: diagnose(partial) });
};

for (const leaf of baseLeaves) push("primitive", leaf, leaf.node, undefined, [baseMap], [baseMap]);
for (const leaf of lightLeaves) {
  const dark = darkMap.get(key(leaf.path));
  push("semantic", leaf, leaf.node, dark?.node, [lightMap, baseMap], [darkMap, baseMap]);
}
for (const leaf of componentLeaves) {
  push("component", leaf, leaf.node, undefined, [componentMap, lightMap, baseMap], [componentMap, darkMap, baseMap]);
}

// Garde : chaque nom CSS calculé doit exister dans le CSS compilé.
const cssFile = path.join(ROOT, "build", "css", "comete-tokens.css");
if (fs.existsSync(cssFile)) {
  const css = fs.readFileSync(cssFile, "utf-8");
  const defined = new Set([...css.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)].map((m) => m[1]));
  const missing = tokens.filter((t) => !defined.has(t.cssName)).map((t) => t.cssName);
  if (missing.length > 0) {
    console.error(`⟂ ${missing.length} nom(s) CSS calculé(s) absents du build :\n  ${missing.slice(0, 10).join("\n  ")}`);
    process.exitCode = 1;
  }
}

// Symétrie light / dark de la couche sémantique.
const onlyDark = [...darkMap.keys()].filter((k) => !lightMap.has(k));

// ─── Sorties ────────────────────────────────────────────────────────

fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), dsDir: DS_DIR, tokens }, null, 2));

const LOT_TITLES: Record<Lot, string> = {
  A: "Lot A — sémantique neutre : text, background, border, icon (default, neutral, surface, selected…)",
  B: "Lot B — sémantique de statut : success, warning, critical, information",
  C: "Lot C — marque : brand, comete, accent, cycle, logo",
  D: "Lot D — primitives hors couleur : spacing, sizing, radius, typographie, control, ombres, animation, z-index, breakpoints, opacité",
  E: "Lot E — primitives couleur : palettes et comete",
  F: "Lot F — tokens de composants",
};

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const short = (s: string, n = 110) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

const pct = (n: number, d: number) => (d === 0 ? "0 %" : `${Math.round((n / d) * 100)} %`);

const lines: string[] = [];
lines.push("# Inventaire des tokens");
lines.push("");
lines.push(`> Généré par \`pnpm inventory\` le ${new Date().toISOString().slice(0, 10)}. Ne pas éditer à la main : la source est \`tokens/**/*.json\`.`);
lines.push("");
lines.push("Usages = occurrences de `var(--token)` dans le design system (`src/` hors tests, puis `storybook/stories/`).");
lines.push("Diagnostic : **absente**, **tautologique** (répète la valeur), **trop courte**, **dépréciée**, ok.");
lines.push("");
lines.push("## Synthèse");
lines.push("");
lines.push("| Lot | Tokens | Décrits (ok) | À écrire ou réécrire | Non consommés par le DS |");
lines.push("|---|---:|---:|---:|---:|");
const lots: Lot[] = ["A", "B", "C", "D", "E", "F"];
let totalOk = 0;
for (const lot of lots) {
  const rows = tokens.filter((t) => t.lot === lot);
  const ok = rows.filter((t) => t.diagnostic === "ok").length;
  const todo = rows.filter((t) => t.diagnostic !== "ok" && t.diagnostic !== "dépréciée").length;
  const unused = rows.filter((t) => t.usagesSrc + t.usagesStories === 0).length;
  totalOk += ok;
  lines.push(`| ${lot} | ${rows.length} | ${ok} (${pct(ok, rows.length)}) | ${todo} | ${unused} |`);
}
lines.push(`| **Total** | **${tokens.length}** | **${totalOk} (${pct(totalOk, tokens.length)})** | **${tokens.filter((t) => t.diagnostic !== "ok" && t.diagnostic !== "dépréciée").length}** | **${tokens.filter((t) => t.usagesSrc + t.usagesStories === 0).length}** |`);
lines.push("");
if (onlyDark.length > 0) {
  lines.push(`Tokens présents en sombre seulement : ${onlyDark.map((k) => `\`${k}\``).join(", ")}.`);
  lines.push("");
}

for (const lot of lots) {
  const rows = tokens.filter((t) => t.lot === lot);
  lines.push(`## ${LOT_TITLES[lot]}`);
  lines.push("");
  lines.push(`${rows.length} tokens.`);
  lines.push("");
  lines.push("| Token | Type | Clair | Sombre | Alias | Usages src / stories | Diagnostic | Description actuelle |");
  lines.push("|---|---|---|---|---|---:|---|---|");
  for (const t of rows) {
    const dark = t.dark === t.light ? "=" : t.dark;
    lines.push(
      `| \`${t.cssName}\` | ${t.type} | ${esc(t.light)} | ${esc(dark)} | ${t.alias ? `\`${esc(t.alias)}\`` : ""} | ${t.usagesSrc} / ${t.usagesStories} | ${t.diagnostic} | ${esc(short(t.description))} |`
    );
  }
  lines.push("");
}

fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
fs.writeFileSync(OUT_MD, `${lines.join("\n")}\n`);

console.log(`✨ ${tokens.length} tokens inventoriés`);
console.log(`   📄 ${path.relative(ROOT, OUT_MD)}`);
console.log(`   📦 ${path.relative(ROOT, OUT_JSON)}`);
for (const lot of lots) {
  const rows = tokens.filter((t) => t.lot === lot);
  console.log(`   ${lot} : ${rows.length} tokens, ${rows.filter((t) => t.diagnostic === "ok").length} décrits`);
}
