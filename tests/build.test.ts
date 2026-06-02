/**
 * Integration tests — vérifient la structure du fichier CSS généré par le build.
 * Nécessite que `pnpm build` ait été exécuté au préalable.
 */
import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const CSS_OUTPUT = join(process.cwd(), "build/css/comete-tokens.css");

function readOutput(): string {
  if (!existsSync(CSS_OUTPUT)) {
    throw new Error(
      `Fichier de build absent : ${CSS_OUTPUT}\nLancer pnpm build avant les tests d'intégration.`
    );
  }
  return readFileSync(CSS_OUTPUT, "utf-8");
}

describe("build output — structure CSS", () => {
  it("should produce comete-tokens.css", () => {
    expect(existsSync(CSS_OUTPUT)).toBe(true);
  });

  it("should contain :root block for default light semantic tokens", () => {
    expect(readOutput()).toContain(":root {");
  });

  it('should contain [data-theme="dark"] block for dark semantic tokens', () => {
    expect(readOutput()).toContain('[data-theme="dark"]');
  });

  it("should contain @media (prefers-color-scheme: dark) fallback", () => {
    expect(readOutput()).toContain("@media (prefers-color-scheme: dark)");
  });

  it("should contain at least one CSS custom property", () => {
    expect(readOutput()).toMatch(/--[a-z]/);
  });

  it("should include the AUTO-GENERATED header comment", () => {
    expect(readOutput()).toContain("AUTO-GENERATED — DO NOT EDIT MANUALLY");
  });
});

describe("build output — intégrité des tokens", () => {
  it("should not leave any unresolved Style Dictionary reference", () => {
    const unresolved = readOutput().match(/\{[a-z0-9.-]+\}/gi) ?? [];

    expect(unresolved).toEqual([]);
  });

  it("should only reference custom properties that are defined", () => {
    const css = readOutput();
    const defined = new Set(
      [...css.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gim)].map((match) => match[1])
    );
    const used = [...css.matchAll(/var\((--[a-z0-9-]+)/gi)].map((match) => match[1]);

    const dangling = [...new Set(used)].filter((name) => !defined.has(name));

    expect(dangling).toEqual([]);
  });

  it("should expose a large set of custom properties (regression guard)", () => {
    const count = [...readOutput().matchAll(/^\s*--[a-z0-9-]+\s*:/gim)].length;

    expect(count).toBeGreaterThanOrEqual(1000);
  });

  it("should redeclare every dark token in the prefers-color-scheme fallback", () => {
    const css = readOutput();

    expect(declaredProps(css, '[data-theme="dark"]').sort()).toEqual(
      declaredProps(css, ':root:not([data-theme="light"])').sort()
    );
  });
});

function declaredProps(css: string, selector: string): string[] {
  const selectorIndex = css.indexOf(selector);
  if (selectorIndex === -1) {
    throw new Error(`Sélecteur introuvable dans le CSS : ${selector}`);
  }

  const open = css.indexOf("{", selectorIndex);
  let depth = 0;
  let end = open;
  for (let i = open; i < css.length; i++) {
    if (css[i] === "{") {
      depth++;
    } else if (css[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }

  return [...css.slice(open + 1, end).matchAll(/(--[a-z0-9-]+)\s*:/gi)].map((match) => match[1]!);
}
