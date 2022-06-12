require("dotenv").config();

const outputComponentsAsSvgr = require("@figma-export/output-components-as-svgr");
const svgo = require("@figma-export/transform-svg-with-svgo");

const fileId = process.env.FIGMA_FILE_ID;
const pageName = process.env.FIGMA_PAGE_NAME;

const svgoConfig = {
  multipass: true,
  plugins: [
    "preset-default",
    "removeDimensions",
    {
      name: "removeAttrs",
      params: {
        attrs: "fill",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentColor",
          },
        ],
      },
    },
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
  ],
};

module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        onlyFromPages: [pageName],
        transformers: [svgo(svgoConfig)],
        outputters: [
          outputComponentsAsSvgr({
            output: "./dist",
          }),
        ],
      },
    ],
  ],
};
