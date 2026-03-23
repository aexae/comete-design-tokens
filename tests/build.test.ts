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
