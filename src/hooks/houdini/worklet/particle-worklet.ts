const particleWorklet = URL.createObjectURL(
  new Blob(
    [
      `registerPaint(
        "particle",
        class {
          static get inputProperties() {
            return ["--particle-x", "--particle-y", "--particle-color", "--particle-time", "--particle-num"];
          }
          paint(ctx, geom, properties) {
            const x = parseFloat(properties.get("--particle-x").toString());
            const y = parseFloat(properties.get("--particle-y").toString());
            const color = properties.get("--particle-color").toString();
            const time = parseFloat(properties.get("--particle-time").toString());
            const num = parseFloat(properties.get("--particle-num").toString());

            ctx.globalAlpha = Math.max(1 - Math.sin(time * Math.PI / 2), 0);
            // 创建 num 个粒子
            for (let i = 0; i < num; i++) {
              // 粒子的颜色随机
              ctx.fillStyle = color ? color : \`hsl(\${Math.random() * 360}, 100%, 50%)\`;
              // 粒子的位置与 --particle-time 相关，运动轨迹是一个顶点在上的二次函数
              const particleX = x + time * 30 * Math.cos(i * Math.PI / 5); // 增加粒子的初始速度
              const particleY = y + time * 30 * Math.sin(i * Math.PI / 5) - time * time; // 增加粒子的初始速度
              // 绘制粒子
              ctx.beginPath();
              ctx.arc(particleX, particleY, 2, 0, 2 * Math.PI);
              ctx.fill();
            }
          }
        }
      );`,
    ],
    {
      type: "application/javascript",
    }
  )
);

export default particleWorklet;
