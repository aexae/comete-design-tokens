// Applique un lot de descriptions aux sources DTCG.
//
// Entrée : un fichier JSON { "--nom-css": "description", … }. Chaque nom est
// résolu via build/inventory.json (généré par `pnpm inventory`) vers son fichier
// source et son chemin. Les tokens sémantiques reçoivent la description dans
// light.json ET dark.json. Les fichiers sont réécrits en JSON indenté à 2 espaces,
// clés dans l'ordre d'origine (`$description` ajoutée après `$value`).
//
// Usage : pnpm inventory && tsx scripts/set-descriptions.ts chemin/vers/lot.json

import fs from "node:fs";
import path from "node:path";

type Json = Record<string, unknown>;

const ROOT = path.resolve(import.meta.dirname, "..");
const input = process.argv[2];
if (!input) {
  console.error("Usage : tsx scripts/set-descriptions.ts <lot.json>");
  process.exit(1);
}

const descriptions = JSON.parse(fs.readFileSync(input, "utf-8")) as Record<string, string>;
const inventory = JSON.parse(fs.readFileSync(path.join(ROOT, "build", "inventory.json"), "utf-8")) as {
  tokens: { cssName: string; path: string[]; file: string; layer: string }[];
};
const byCss = new Map(inventory.tokens.map((t) => [t.cssName, t]));

const files = new Map<string, Json>();
const load = (file: string): Json => {
  const abs = path.join(ROOT, file);
  if (!files.has(abs)) files.set(abs, JSON.parse(fs.readFileSync(abs, "utf-8")) as Json);
  return files.get(abs)!;
};

const setDescription = (doc: Json, tokenPath: string[], description: string): boolean => {
  let node: Json = doc;
  for (const segment of tokenPath) {
    const next = node[segment];
    if (!next || typeof next !== "object") return false;
    node = next as Json;
  }
  if (!("$value" in node)) return false;
  // Réordonne : $type, $value, $description, puis le reste ($deprecated…).
  const entries = Object.entries(node);
  const type = node.$type;
  const value = node.$value;
  for (const k of Object.keys(node)) delete node[k];
  if (type !== undefined) node.$type = type;
  node.$value = value;
  node.$description = description;
  for (const [k, v] of entries) {
    if (k !== "$type" && k !== "$value" && k !== "$description") node[k] = v;
  }
  return true;
};

const missing: string[] = [];
let applied = 0;
for (const [cssName, description] of Object.entries(descriptions)) {
  const token = byCss.get(cssName);
  if (!token) {
    missing.push(cssName);
    continue;
  }
  const targets =
    token.layer === "semantic" ? ["tokens/theme/light.json", "tokens/theme/dark.json"] : [token.file];
  for (const file of targets) {
    if (!setDescription(load(file), token.path, description.trim())) missing.push(`${cssName} (${file})`);
  }
  applied++;
}

for (const [abs, doc] of files) {
  fs.writeFileSync(abs, `${JSON.stringify(doc, null, 2)}\n`);
}

console.log(`✨ ${applied} description(s) appliquée(s) dans ${files.size} fichier(s)`);
if (missing.length > 0) {
  console.error(`⟂ ${missing.length} token(s) introuvable(s) :\n  ${missing.join("\n  ")}`);
  process.exitCode = 1;
}
