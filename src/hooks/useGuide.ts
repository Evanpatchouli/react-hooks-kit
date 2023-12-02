import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

let createRoot = (parentDocument: Element) => {
  return {
    render: (element: JSX.Element) => {
      ReactDOM.render(element, parentDocument);
    },
  };
};

if ("createRoot" in ReactDOM) {
  // Adapt to React 18
  createRoot = ReactDOM.createRoot as typeof createRoot;
}

type Render = {
  id: string;
  render: (id: string, name: string, data: any, ids: string[]) => React.ReactNode;
  containerStyle?: Partial<CSSStyleDeclaration>;
  containerClassName?: string;
};

type Step = {
  ids?: string[];
  name?: string;
  data?: any;
  renders?: Render[];
};

interface Guider {
  start: () => void;
  stop: () => void;
  next: () => void;
  last: () => void;
  go: (step: number) => void;
}

type MaskConfig = {
  backgroundColor?: string;
  opacity?: number;
  zIndex?: number;
  pointerEvents?: "none" | "auto";
};

type StepCallback = (step: number, stepConfig: Step) => void;

function useGuide(
  steps: Step[],
  callback?: StepCallback,
  config?: {
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
    maskConfig?: MaskConfig;
  }
): [number, Guider] {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const currentStep = steps[step];
    // const rootDom = document.getElementById("root");
    const rootDom = document.body;
    const mask = document.createElement("div");
    mask.style.position = "fixed";
    mask.style.top = "0";
    mask.style.right = "0";
    mask.style.bottom = "0";
    mask.style.left = "0";
    mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mask.style.zIndex = "999";
    mask.style.pointerEvents = "auto";
    const maskConfig = config?.maskConfig;
    if (maskConfig) {
      if (maskConfig.backgroundColor) {
        mask.style.backgroundColor = maskConfig.backgroundColor;
      }
      if (maskConfig.opacity) {
        mask.style.opacity = maskConfig.opacity.toString();
      }
      if (maskConfig.zIndex) {
        mask.style.zIndex = maskConfig.zIndex.toString();
      }
    }

    if (currentStep && rootDom) {
      rootDom.appendChild(mask);
    }

    currentStep?.ids?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.zIndex = "1000";
      }
    });

    const renders = currentStep?.renders?.map(({ id, render, containerStyle, containerClassName }) => {
      const parent = document.getElementById(id);
      const container = document.createElement("div");
      container.style.zIndex = "1001";
      container.style.position = "relative";
      if (config?.containerStyle) {
        Object.keys(config.containerStyle).forEach((key) => {
          // @ts-ignore
          container.style[key] = config.containerStyle[key];
        });
      }
      if (containerStyle) {
        Object.keys(containerStyle).forEach((key) => {
          // @ts-ignore
          container.style[key] = containerStyle[key];
        });
      }
      if (config?.containerClassName) {
        container.className = config.containerClassName;
      }
      if (containerClassName) {
        container.className = containerClassName;
      }
      // 默认位于父元素的最后
      parent?.appendChild(container);
      if (container && parent) {
        // @ts-ignore
        createRoot(container).render(render(id, currentStep.name, currentStep.data, currentStep.ids), container);
        return container;
      }
    });

    callback?.(step, currentStep);

    return () => {
      if (currentStep && rootDom) {
        rootDom.removeChild(mask);
      }
      renders?.forEach((elem) => elem?.remove());
    };
  }, [step, steps]);

  const start = useCallback(() => setStep(0), []);
  const stop = useCallback(() => setStep(-1), []);
  const next = useCallback(() => setStep((prev) => Math.min(prev + 1, steps.length - 1)), [steps]);
  const last = useCallback(() => setStep((prev) => Math.max(prev - 1, 0)), []);
  const go = useCallback((step: number) => setStep(Math.max(0, Math.min(step, steps.length - 1))), [steps]);

  return [step, { start, stop, next, last, go }];
}

export default useGuide;
