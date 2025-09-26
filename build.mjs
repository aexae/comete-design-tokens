import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";
import { transformGroups, formats } from "style-dictionary/enums";
import fs from "node:fs";

// Enregistre tous les transforms/format du plugin Tokens Studio
register(StyleDictionary);

// Génère les tokens de base
const baseSD = new StyleDictionary(
  {
    source: ["tokens/base/**/*.json"],
    platforms: {
      scss: {
        transformGroup: transformGroups.scss,
        buildPath: "./dist/",
        files: [
          {
            destination: "base.scss",
            format: formats.scssVariables,
          },
        ],
      },
    },
  },
  { verbosity: "verbose" } // verbose errors
);
await baseSD.cleanAllPlatforms();
await baseSD.buildAllPlatforms();

// Charger le fichier composants
const componentsPath = "./tokens/components/tokens.json";
const componentTokens = JSON.parse(fs.readFileSync(componentsPath, "utf-8"));
const components = Object.keys(componentTokens);

// Pour chaque thème et chaque composant, génère un fichier SCSS filtré
for (const theme of ["light", "dark"]) {
  for (const component of components) {
    const sd = new StyleDictionary({
      include: ["tokens/base/**/*.json"],
      source: [`tokens/theme/${theme}.json`, componentsPath],
      platforms: {
        scss: {
          transformGroup: transformGroups.scss,
          buildPath: "./dist/",
          files: components.map((component) => ({
            destination: `${component}.${theme}.scss`,
            format: formats.scssVariables,
            // filtre composant + thème pour éviter les collisions
            filter: (t) =>
              t.path[0] === component &&
              // Tokens Studio exporte souvent un marqueur de mode
              (t.$extensions?.mode === theme || !t.$extensions?.mode),
          })),
        },
      },
    });

    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }
}
