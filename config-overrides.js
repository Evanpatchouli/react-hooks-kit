const { override, addWebpackAlias, addBabelPresets, addBabelPlugin } = require("customize-cra");
const path = require("path");
module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@components": path.resolve(__dirname, "src/components"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@store": path.resolve(__dirname, "src/store"),
  }),
  ...addBabelPresets([
    "@babel/preset-react",
    { runtime: "automatic", importSource: "@emotion/react" },
    // { runtime: "automatic", importSource: "@emotion/babel-preset-css-prop" },
    "@emotion/babel-preset-css-prop",
  ]),
  addBabelPlugin("@emotion/babel-plugin")
);
