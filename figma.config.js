require("dotenv").config();

const outputComponentsAsSvg = require("@figma-export/output-components-as-svg");
const svgo = require("@figma-export/transform-svg-with-svgo");

const fileId = process.env.FIGMA_FILE_ID;

const svgoConfig = {
  multipass: true,
  plugins: [
    { removeDimensions: true },
    { removeViewBox: false },
    { removeAttrs: { attrs: "fill" } },
    { addAttributesToSVGElement: { attribute: { fill: "currentColor" } } },
    { sortAttrs: true },
  ],
};

module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        // transformers: [svgo(svgoConfig)],
        outputters: [
          outputComponentsAsSvg({
            output: "./dist",
          }),
        ],
      },
    ],
  ],
};
