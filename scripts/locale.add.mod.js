// Node.js 脚本
const fs = require("fs");
const path = require("path");

// 获取命令行参数
const [, , moduleName] = process.argv;

// 检查参数
if (!moduleName || !moduleName.startsWith("use")) {
  console.error('Please provide a valid module name that starts with "use".');
  process.exit(1);
}

// 读取文件
const filePath = path.resolve(__dirname, "../src/locale/locale.en.tsx");
const fileContent = fs.readFileSync(filePath, "utf8");

// 创建新的模块
const newModule = `
  ${moduleName}: {
    desc: "",
    detail: (
      <>
      </>
    ),
    consideration: (
      <ol>
      </ol>
    ),
  },
  __end: "end of locale mappings, please do not delete this line",`;

// 插入新的模块
const updatedContent = fileContent.replace(
  '__end: "end of locale mappings, please do not delete this line",',
  newModule
);

// 写入文件
fs.writeFileSync(filePath, updatedContent);

console.log(`Module "${moduleName}" has been added.`);
