import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: [path.join(import.meta.dirname, "src", "custom-reporter.js")],
  },
});
