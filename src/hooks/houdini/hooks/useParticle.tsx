import { useRef, useEffect } from "react";
import particleWorklet from "../worklet/particle-worklet";

export type ParticleConfig = {
  color?: React.CSSProperties["color"];
  duration?: number;
  trigger?: "click" | "mousedown" | "pointerdown";
  num?: number;
  size?: number;
};

let isWorkletRegistered = false;

function useParticle<T extends HTMLElement = HTMLButtonElement>(
  config: ParticleConfig = {},
  enable: boolean = true
) {
  const ref = useRef<T>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) return;
    try {
      if ("paintWorklet" in CSS && !isWorkletRegistered) {
        // @ts-ignore
        CSS.paintWorklet.addModule(particleWorklet); // "houdini/ripple.js"
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
    const element = ref.current;
    if (!element) return;

    const trigger = config.trigger ?? "mousedown";
    const duration = config.duration ?? 500;
    const color = config.color ?? null;
    const num = config.num ?? 10;
    const size = config.size ?? 3;

    let animationFrameId: number | null = null;
    const handleTrigger = (event: MouseEvent | PointerEvent) => {
      if (!enable) return;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      const x = event.clientX - element.getBoundingClientRect().left;
      const y = event.clientY - element.getBoundingClientRect().top;
      const startTime = performance.now();

      element.style.setProperty("--particle-x", `${x}px`);
      element.style.setProperty("--particle-y", `${y}px`);
      element.style.setProperty("--particle-size", `${size}`);
      element.style.setProperty("--particle-color", color ?? "");
      element.style.setProperty("--particle-time", "0");
      element.style.setProperty("--particle-num", `${num}`); // "10"

      element.style.backgroundImage = "paint(particle)";

      const animate = (time: number) => {
        const progress = duration === 0 ? 1 : (time - startTime) / duration;
        element.style.setProperty("--particle-time", `${progress}`);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    element.addEventListener(trigger, handleTrigger);

    return () => {
      element.removeEventListener(trigger, handleTrigger);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [ref, config, enable]);

  return ref;
}

export default useParticle;
