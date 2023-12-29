const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.resolve(__dirname, '../src/hooks');
const distDir = path.resolve(__dirname, '../dist');

// 检查 dist 文件夹是否存在
if (fs.existsSync(distDir)) {
  // 清空 dist 文件夹
  fs.removeSync(distDir);
}

// 创建 dist 文件夹
fs.mkdirSync(distDir, { recursive: true });

// 复制 src/hooks 到 dist
fs.copySync(srcDir, distDir);

// 在 dist 文件夹中执行 npm install 和 npm run build
execSync('npm install && npm run build', { cwd: distDir, stdio: 'inherit' });