// Node.js 脚本
const fs = require("fs");
const path = require("path");

// 获取命令行参数
const [, , moduleName, content] = process.argv;

// 检查参数
if (!moduleName || !moduleName.startsWith("use") || !content) {
  console.error('Please provide a valid module name that starts with "use" and content.');
  process.exit(1);
}

// 读取文件
const filePath = path.resolve(__dirname, "../src/locale/locale.en.tsx");
const fileContent = fs.readFileSync(filePath, "utf8");

// 创建新的条目
const newEntry = `
  ${moduleName}: "${content}",
  __end: "end of locale mappings",`;

// 插入新的条目
const updatedContent = fileContent.replace(
  '__end: "end of locale mappings, please do not delete this line",',
  newEntry
);

// 写入文件
fs.writeFileSync(filePath, updatedContent);

console.log(`Entry "${moduleName}" has been added.`);
