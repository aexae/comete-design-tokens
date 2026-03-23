import { describe, it, expect } from "vitest";
import { extractVars } from "./css-utils.js";

describe("extractVars", () => {
  it("should extract custom properties with default indent", () => {
    const css = `:root {\n  --color-primary: #fff;\n  --color-secondary: #000;\n}`;
    expect(extractVars(css)).toBe(
      "  --color-primary: #fff;\n  --color-secondary: #000;"
    );
  });

  it("should apply a custom indent", () => {
    const css = `--color-primary: #fff;`;
    expect(extractVars(css, "    ")).toBe("    --color-primary: #fff;");
  });

  it("should ignore non-custom-property lines", () => {
    const css = `:root {\n  --color-primary: #fff;\n  color: red;\n}`;
    expect(extractVars(css)).toBe("  --color-primary: #fff;");
  });

  it("should return empty string when no custom properties are present", () => {
    const css = `:root {\n  color: red;\n  font-size: 16px;\n}`;
    expect(extractVars(css)).toBe("");
  });

  it("should trim leading and trailing whitespace from extracted lines", () => {
    const css = `   --color-primary: #fff;   `;
    expect(extractVars(css, "")).toBe("--color-primary: #fff;");
  });
});
