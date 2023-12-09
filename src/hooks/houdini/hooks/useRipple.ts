import { useRef, useEffect } from "react";
import rippleWorklet from "../worklet/ripple-worklet";

export type RippleConfig = {
  color?: React.CSSProperties["color"];
  duration?: number;
  trigger?: "click" | "mousedown" | "pointerdown";
  alphaMin?: number;
};

let isWorkletRegistered = false;

const useRipple = <T extends HTMLElement = HTMLButtonElement>(
  config: RippleConfig = {
    color: "rgba(31, 143, 255, 0.5)",
    duration: 500,
    alphaMin: 0.3,
  }
): React.RefObject<T> => {
  const ref = useRef<T>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) return;
    try {
      if ("paintWorklet" in CSS && !isWorkletRegistered) {
        // @ts-ignore
        CSS.paintWorklet.addModule(rippleWorklet); // "houdini/ripple.js"
        isWorkletRegistered = true;
      } else if (!isWorkletRegistered) {
        console.warn("Your browser doesn't support CSS Paint API");
      }
    } catch (error) {
      console.error(error);
    }
    mounted.current = true;
  }, []);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    let animationFrameId: number | null = null;
    const handleClick = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const alphaMin = config.alphaMin ?? 0.3;
      const startTime = performance.now();
      button.style.setProperty(
        "--ripple-color",
        config.color ?? "rgba(31, 143, 255, 0.5)"
      );
      button.style.setProperty("--ripple-x", `${x}px`);
      button.style.setProperty("--ripple-y", `${y}px`);
      button.style.setProperty("--ripple-time", "0");
      button.style.setProperty("--ripple-alpha-min", `${alphaMin}`);
      button.style.setProperty("background-image", "paint(ripple)");

      const animate = (time: number) => {
        const progress = (time - startTime) / (config.duration ?? 500); // Convert time to seconds
        button.style.setProperty("--ripple-time", `${progress}`);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    const hiddenRipple = () =>
      button.style.setProperty("--ripple-alpha-min", "0");

    button.addEventListener(config.trigger ?? "mousedown", handleClick);
    button.addEventListener("mouseup", hiddenRipple);
    button.addEventListener("mouseleave", hiddenRipple);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      button.removeEventListener(config.trigger ?? "mousedown", handleClick);
      button.removeEventListener("mouseup", hiddenRipple);
      button.removeEventListener("mouseleave", hiddenRipple);
    };
  }, []);

  return ref;
};

export default useRipple;
