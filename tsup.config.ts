import { defineConfig, Options } from "tsup";

const commonConfig: Options = {
  minify: true,
  splitting: true,
  dts: true,
  format: ["esm", "cjs"],
  //sourcemap: true,
  clean: true,
};
export default defineConfig([
  {
    ...commonConfig,
    esbuildOptions: (options) => {
      // Append "use client" to the top of the react entry point
      options.banner = {
        js: '"use client";',
      };
    },
    entry: ["src/index.ts"],
  },
]);
