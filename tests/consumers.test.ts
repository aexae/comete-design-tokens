/**
 * Contrat de compatibilité avec les consommateurs hors npm.
 * `consumers/omnis.json` liste les clés que Comète SQL lit dans la sortie Omnis :
 * un renommage ou une suppression doit soit passer par un alias, soit être
 * annoncé avant la release. Nécessite `pnpm build`.
 */
import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

interface ConsumerContract {
  consumer: string;
  keys: string[];
}

interface OmnisOutput {
  tokens: Record<string, unknown>;
  deprecated: string[];
}

const contract = JSON.parse(
  readFileSync(join(process.cwd(), "consumers/omnis.json"), "utf-8")
) as ConsumerContract;

function readOutput(theme: string): OmnisOutput {
  const file = join(process.cwd(), `build/omnis/comete-tokens.${theme}.omnis.json`);
  if (!existsSync(file)) {
    throw new Error(`Fichier de build absent : ${file}\nLancer pnpm build avant les tests d'intégration.`);
  }
  return JSON.parse(readFileSync(file, "utf-8")) as OmnisOutput;
}

describe(`contrat consommateur — ${contract.consumer}`, () => {
  it("should declare a non-empty, sorted, duplicate-free key list", () => {
    expect(contract.keys.length).toBeGreaterThan(0);
    expect(contract.keys).toEqual([...new Set(contract.keys)].sort());
  });

  it.each(["light", "dark"])("should provide every consumed key in the %s output", (theme) => {
    const tokens = readOutput(theme).tokens;
    const missing = contract.keys.filter((key) => !(key in tokens));

    expect(missing).toEqual([]);
  });

  it("should report consumed keys that are deprecated (to plan their replacement)", () => {
    const deprecated = new Set(readOutput("light").deprecated);
    const consumedDeprecated = contract.keys.filter((key) => deprecated.has(key));

    if (consumedDeprecated.length > 0) {
      console.warn(`Clés dépréciées encore lues par ${contract.consumer} : ${consumedDeprecated.join(", ")}`);
    }
    // Un token déprécié reste servi tant qu'il est consommé : sa suppression
    // du dépôt fera échouer le test précédent, pas celui-ci.
    expect(consumedDeprecated.every((key) => key in readOutput("light").tokens)).toBe(true);
  });
});
