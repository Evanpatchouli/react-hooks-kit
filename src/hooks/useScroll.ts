import { useState, useEffect, useRef } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

// 创建一个外部数组来存储所有的回调函数
const callbacks: Array<(position: ScrollPosition) => void> = [];

const useScroll = (
  callback?: (position: ScrollPosition) => void
): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  const handleScroll = () => {
    const newPosition = {
      x: window.scrollX,
      y: window.scrollY,
    };
    setPosition(newPosition);
    // 遍历 callbacks 数组并调用每个回调函数
    callbacks.forEach((cb) => cb(newPosition));
  };

  useEffect(() => {
    if (callback) {
      // 将回调函数添加到 callbacks 数组
      callbacks.push(callback);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (callback) {
        // 在组件卸载时，移除该次调用注册的回调函数
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }, [callback]);

  return position;
};

export default useScroll;
