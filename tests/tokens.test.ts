/**
 * Tests sur les tokens source (JSON) — indépendants du build.
 * Vérifient l'intégrité des références et la symétrie des thèmes,
 * problèmes qu'un simple contrôle de structure du CSS ne détecterait pas.
 */
import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const TOKENS_DIR = join(process.cwd(), "tokens");

type TokenNode = { $value?: unknown; [key: string]: unknown };

function flatten(node: TokenNode, prefix: string[] = [], out: Record<string, unknown> = {}): Record<string, unknown> {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$") || value === null || typeof value !== "object") {
      continue;
    }

    const child = value as TokenNode;
    if ("$value" in child) {
      out[[...prefix, key].join(".")] = child.$value;
      continue;
    }

    flatten(child, [...prefix, key], out);
  }

  return out;
}

function loadTokens(file: string): Record<string, unknown> {
  return flatten(JSON.parse(readFileSync(join(TOKENS_DIR, file), "utf-8")) as TokenNode);
}

function basePrimitives(): Record<string, unknown> {
  const baseDir = join(TOKENS_DIR, "base");
  const out: Record<string, unknown> = {};

  for (const entry of readdirSync(baseDir, { recursive: true })) {
    const relative = String(entry);
    if (relative.endsWith(".json")) {
      Object.assign(out, loadTokens(join("base", relative)));
    }
  }

  return out;
}

/**
 * Extrait les références `{token.path}` d'une valeur, en descendant dans les
 * tableaux et objets : les tokens composites (ombres, typographie) portent leurs
 * références dans un `$value` objet ou tableau, pas seulement dans une chaîne.
 */
function references(value: unknown): string[] {
  if (typeof value === "string") {
    return [...value.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]!);
  }

  if (Array.isArray(value)) {
    return value.flatMap(references);
  }

  if (value !== null && typeof value === "object") {
    return Object.values(value).flatMap(references);
  }

  return [];
}

const primitives = basePrimitives();
const light = loadTokens("theme/light.json");
const dark = loadTokens("theme/dark.json");

describe("tokens source — symétrie light / dark", () => {
  it("should define the same semantic token keys in light and dark", () => {
    expect(Object.keys(light).sort()).toEqual(Object.keys(dark).sort());
  });

  it("should define a non-trivial number of semantic tokens", () => {
    expect(Object.keys(light).length).toBeGreaterThan(100);
  });
});

describe("tokens source — résolution des références", () => {
  const brokenRefs = (tokens: Record<string, unknown>, known: Set<string>): string[] =>
    Object.entries(tokens).flatMap(([key, value]) =>
      references(value)
        .filter((ref) => !known.has(ref))
        .map((ref) => `${key} → {${ref}}`)
    );

  const primitiveKeys = new Set(Object.keys(primitives));

  it.each([
    ["light", light],
    ["dark", dark],
  ])(
    "should resolve every %s reference using only primitives + that theme (as the build does)",
    (_label, tokens) => {
      const known = new Set([...primitiveKeys, ...Object.keys(tokens)]);

      expect(brokenRefs(tokens, known)).toEqual([]);
    }
  );

  it("should resolve every reference between primitives", () => {
    expect(brokenRefs(primitives, primitiveKeys)).toEqual([]);
  });
});
