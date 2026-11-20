/**
 * Aucun nouvel usage d'un token déprécié (`$deprecated`) : un token de
 * composant qui aliase un token déprécié masquerait la dette aux gardes du DS
 * (qui ne comptent que les `var(--…)` directs). Règle d'Axel du 2026-11-20.
 */
import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const TOKENS_DIR = join(process.cwd(), "tokens");

type TokenNode = { $value?: unknown; $deprecated?: unknown; [key: string]: unknown };

function walk(node: TokenNode, prefix: string[], visit: (path: string, token: TokenNode) => void): void {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$") || value === null || typeof value !== "object") continue;
    const child = value as TokenNode;
    const path = [...prefix, key];
    if ("$value" in child) {
      visit(path.join("."), child);
      continue;
    }
    walk(child, path, visit);
  }
}

function read(file: string): TokenNode {
  return JSON.parse(readFileSync(file, "utf-8")) as TokenNode;
}

function deprecatedPaths(): Set<string> {
  const out = new Set<string>();
  for (const theme of ["light", "dark"]) {
    walk(read(join(TOKENS_DIR, "theme", `${theme}.json`)), [], (path, token) => {
      if (token.$deprecated) out.add(path);
    });
  }
  return out;
}

describe("tokens dépréciés", () => {
  it("should not be aliased by any component token", () => {
    const deprecated = deprecatedPaths();
    const componentDir = join(TOKENS_DIR, "component");
    const offenders: string[] = [];

    for (const entry of readdirSync(componentDir, { recursive: true })) {
      const relative = String(entry);
      if (!relative.endsWith(".json")) continue;
      walk(read(join(componentDir, relative)), [], (path, token) => {
        const refs = [...JSON.stringify(token.$value).matchAll(/\{([^}]+)\}/g)].map((match) => match[1]!);
        for (const ref of refs) {
          if (deprecated.has(ref)) offenders.push(`${path} → ${ref}`);
        }
      });
    }

    expect(deprecated.size).toBeGreaterThan(0);
    expect(offenders).toEqual([]);
  });
});
