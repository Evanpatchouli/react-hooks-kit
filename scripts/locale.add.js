// Node.js 脚本
const fs = require("fs");
const path = require("path");

const readline = require("readline");

// 创建 readline.Interface 实例
const querier = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

querier.question("Please input the variant name: ", (variantName) => {
  // 关闭 readline.Interface 实例
  querier.close();

  if (!variantName) {
    console.error("Please provide a valid variant name.");
    process.exit(1);
  }

  const querier2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  querier2.question("Please input the variant content: ", (content) => {
    // 关闭 readline.Interface 实例
    querier2.close();

    // 读取文件
    const filePath = path.resolve(__dirname, "../src/locale/locale.en.tsx");
    const fileContent = fs.readFileSync(filePath, "utf8");

    // 创建新的条目
    const newEntry = `
${variantName}: "${content}",
__end: "end of locale mappings, please do not delete this line",`;

    // 插入新的条目
    const updatedContent = fileContent.replace(
      '__end: "end of locale mappings, please do not delete this line",',
      newEntry
    );

    // 写入文件
    fs.writeFileSync(filePath, updatedContent);

    console.log(`Locale Variant "${variantName}" has been added.`);
  });
});
