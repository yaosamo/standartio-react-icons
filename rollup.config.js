import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    external: ["react"],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      terser(),
    ],
  },
  {
    input: "src/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
