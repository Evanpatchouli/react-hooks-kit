// Node.js 脚本
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// 创建 readline.Interface 实例
const querier = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

querier.question("Please input the module name: ", (moduleName) => {
  // 关闭 readline.Interface 实例
  querier.close();

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
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $apis: {
      params: {},
      return: {},
    },
  },
  __end: "end of locale mappings, please do not delete this line",`;

  // 插入新的模块
  const updatedContent = fileContent.replace(
    '__end: "end of locale mappings, please do not delete this line",',
    newModule
  );

  // 写入文件
  fs.writeFileSync(filePath, updatedContent);

  console.log(`Locale Module "${moduleName}" has been added.`);
});
