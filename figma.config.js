require("dotenv").config();

const outputComponentsAsSvgr = require("@figma-export/output-components-as-svgr");
const transformSvgWithSvgo = require("@figma-export/transform-svg-with-svgo");
const { pascalCase } = require("@figma-export/utils");

const fileId = process.env.FIGMA_FILE_ID;
const pageName = process.env.FIGMA_PAGE_NAME;

const NUMBERS_MAP = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

const replaceNumbers = (str) =>
  str.replace(/(\d)/, (match) => NUMBERS_MAP[match]);

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
            getComponentName: (options) =>
              pascalCase(replaceNumbers(options.basename)),
            getComponentFilename: (options) =>
              pascalCase(replaceNumbers(options.basename)),
            getDirname: () => "src",
            getFileExtension: () => ".tsx",
            output: "./",
            getExportTemplate: (options) => {
              const componentName = pascalCase(
                replaceNumbers(options.basename)
              );
              return `export { default as ${componentName} } from './${componentName}';`;
            },
            getSvgrConfig: () => ({
              typescript: true,
            }),
          }),
        ],
      },
    ],
  ],
};
