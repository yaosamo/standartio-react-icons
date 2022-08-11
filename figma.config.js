require("dotenv").config();

const outputComponentsAsSvgr = require("@figma-export/output-components-as-svgr");
const transformSvgWithSvgo = require("@figma-export/transform-svg-with-svgo");

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
        attrs: ["stroke"],
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            stroke: "currentColor",
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
        transformers: [transformSvgWithSvgo(svgoConfig)],
        outputters: [
          outputComponentsAsSvgr({
            getDirname: () => "src",
            getFileExtension: () => ".tsx",
            output: "./",
            getSvgrConfig: () => ({
              index: false,
              jsxRuntime: "classic",
              typescript: true,
            }),
          }),
        ],
      },
    ],
  ],
};
