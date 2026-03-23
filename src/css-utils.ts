/**
 * Extracts CSS custom property declarations from a raw CSS string.
 * Used to pull `--var: value;` lines out of a generated CSS block for reassembly.
 *
 * @param css - Raw CSS string containing custom properties
 * @param indent - Indentation to prepend to each extracted line (default: 2 spaces)
 * @returns Indented custom property declarations joined by newlines
 */
export function extractVars(css: string, indent = "  "): string {
  return css
    .split("\n")
    .filter((l) => l.trim().startsWith("--"))
    .map((l) => `${indent}${l.trim()}`)
    .join("\n");
}
