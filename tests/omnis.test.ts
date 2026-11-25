/**
 * Sortie Omnis (build/omnis) — structure et cohérence des deux fichiers thème.
 * Nécessite que `pnpm build` ait été exécuté au préalable.
 */
import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OMNIS_DIR = join(process.cwd(), "build/omnis");
const THEMES = ["light", "dark"] as const;
const TIERS = ["base", "theme", "component"];

interface CatalogEntry {
  name: string;
  type: string;
  tier: string;
}

interface OmnisOutput {
  schema: string;
  version: string;
  theme: string;
  backdrop: string;
  tokens: Record<string, number | string>;
  deprecated: string[];
  catalog: CatalogEntry[];
}

function readOutput(theme: string): OmnisOutput {
  const file = join(OMNIS_DIR, `comete-tokens.${theme}.omnis.json`);
  if (!existsSync(file)) {
    throw new Error(`Fichier de build absent : ${file}\nLancer pnpm build avant les tests d'intégration.`);
  }
  return JSON.parse(readFileSync(file, "utf-8")) as OmnisOutput;
}

const packageVersion = (JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8")) as { version: string })
  .version;

describe("sortie Omnis — structure", () => {
  it.each(THEMES)("should produce comete-tokens.%s.omnis.json with the package version", (theme) => {
    const out = readOutput(theme);

    expect(out.schema).toMatch(/\/build\/omnis#v1$/);
    expect(out.theme).toBe(theme);
    expect(out.version).toBe(packageVersion);
    expect(out.backdrop).toMatch(/^#[0-9a-f]{6}$/);
    expect(Array.isArray(out.deprecated)).toBe(true);
  });

  it.each(THEMES)("should not use any key starting with $ (Omnis column names) in %s", (theme) => {
    expect(Object.keys(readOutput(theme)).filter((key) => key.startsWith("$"))).toEqual([]);
  });

  it.each(THEMES)("should only contain camelCase keys (Omnis column names) in %s", (theme) => {
    const invalid = Object.keys(readOutput(theme).tokens).filter((key) => !/^[a-z][A-Za-z0-9]*$/.test(key));

    expect(invalid).toEqual([]);
  });

  it.each(THEMES)("should only contain resolved numbers or strings in %s", (theme) => {
    const invalid = Object.entries(readOutput(theme).tokens).filter(
      ([, value]) =>
        !(typeof value === "number" && Number.isFinite(value)) &&
        !(typeof value === "string" && !value.startsWith("{") && !value.startsWith("#"))
    );

    expect(invalid).toEqual([]);
  });

  it("should expose the same keys in light and dark", () => {
    expect(Object.keys(readOutput("light").tokens).sort()).toEqual(Object.keys(readOutput("dark").tokens).sort());
  });

  it("should list deprecated tokens that are still present in the output", () => {
    const out = readOutput("light");
    const missing = out.deprecated.filter((key) => !(key in out.tokens));

    expect(missing).toEqual([]);
  });

  it("should exclude shadows, animation and z-index", () => {
    const keys = Object.keys(readOutput("light").tokens);

    expect(keys.filter((key) => /^(shadow|elevation|duration|easing|zIndex)/.test(key))).toEqual([]);
  });

  it("should expose a large set of tokens (regression guard)", () => {
    expect(Object.keys(readOutput("light").tokens).length).toBeGreaterThanOrEqual(1000);
  });
});

describe("sortie Omnis — catalogue", () => {
  it.each(THEMES)("should describe every token, in token order, in %s", (theme) => {
    const out = readOutput(theme);

    expect(out.catalog.map((entry) => entry.name)).toEqual(Object.keys(out.tokens));
  });

  it.each(THEMES)("should give every token a type and a known tier in %s", (theme) => {
    const invalid = readOutput(theme).catalog.filter(
      (entry) => !(typeof entry.type === "string" && entry.type.length > 0 && TIERS.includes(entry.tier))
    );

    expect(invalid).toEqual([]);
  });

  it("should put primitives in base, semantic colours in theme and component tokens in component", () => {
    const tier = new Map(readOutput("light").catalog.map((entry) => [entry.name, entry.tier]));

    expect(tier.get("red50")).toBe("base");
    expect(tier.get("textDefaultDefault")).toBe("theme");
    expect(tier.get("surfaceDefault")).toBe("theme");
    expect([...tier.entries()].filter(([name, value]) => name.startsWith("button") && value !== "component")).toEqual(
      []
    );
  });

  it.each(THEMES)("should keep every colour in the opaque Omnis rgb() range in %s", (theme) => {
    const out = readOutput(theme);
    const outOfRange = out.catalog
      .filter((entry) => entry.type === "color")
      .map((entry) => [entry.name, out.tokens[entry.name]] as const)
      .filter(([, value]) => typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > 0xffffff);

    expect(outOfRange).toEqual([]);
  });

  it("should type the usual families as expected", () => {
    const type = new Map(readOutput("light").catalog.map((entry) => [entry.name, entry.type]));

    expect(type.get("textDefaultDefault")).toBe("color");
    expect(type.get("cometeBlue500")).toBe("color");
    expect(type.get("space100")).toBe("dimension");
    expect(type.get("fontFamilyPrimary")).toBe("text");
  });
});
