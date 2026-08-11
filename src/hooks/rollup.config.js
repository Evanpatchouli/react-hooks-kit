import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "index.ts", // 你的主入口文件
  output: [
    {
      file: "dist/index.js", // CommonJS 版本，用于 Node.js
      format: "cjs",
    },
    {
      file: "dist/index.esm.js", // ES module 版本，用于现代浏览器和工具
      format: "esm",
    },
  ],
  external: ["react", "react-dom", "html5-qrcode"], // 排除 peer 依赖和按需加载的扫码库
  plugins: [
    peerDepsExternal(), // 将 peerDependencies 中的包排除在打包文件之外
    resolve(), // 允许查找外部模块
    typescript({
      allowJs: false,
      noEmit: false,
      declaration: true,
      declarationDir: "dist",
    }), // 编译 TypeScript 文件
    commonjs(), // 转换 CommonJS 模块为 ES2015 模块
    json(), // 解析 .json 文件
  ],
};
