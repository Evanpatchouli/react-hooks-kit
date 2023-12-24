import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";

let createRoot = (targetDocument: Element) => {
  return {
    render: (element: JSX.Element) => {
      ReactDOM.render(element, targetDocument);
    },
  };
};

if ("createRoot" in ReactDOM) {
  // Adapt to React 18
  createRoot = ReactDOM.createRoot as typeof createRoot;
}

export type Render = {
  id: string;
  render: (
    id: string,
    name: string,
    data: any,
    ids: string[]
  ) => React.ReactNode;
  containerStyle?: Partial<CSSStyleDeclaration>;
  containerClassName?: string;
};

export type Step = {
  ids?: string[];
  name?: string;
  data?: any;
  renders?: Render[];
};

export interface Guider {
  start: () => void;
  stop: () => void;
  next: () => void;
  last: () => void;
  go: (step: number) => void;
  // Not for user to use
  step: number;
  options?: {
    steps?: Step[];
    callback?: StepCallback;
    config?: {
      containerStyle?: Partial<CSSStyleDeclaration>;
      containerClassName?: string;
      maskConfig?: MaskConfig;
    };
  };
  register: (id: string) => void;
  unregister: (id: string) => void;
}

export type MaskConfig = {
  backgroundColor?: string;
  opacity?: number;
  zIndex?: number;
  pointerEvents?:
    | "none !important"
    | "auto"
    | React.CSSProperties["pointerEvents"];
};

export type StepCallback = (step: number, stepConfig: Step) => void;

const createMask = (config?: MaskConfig) => {
  const mask = document.createElement("div");
  mask.style.position = "fixed";
  mask.style.top = "0";
  mask.style.right = "0";
  mask.style.bottom = "0";
  mask.style.left = "0";
  mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  mask.style.zIndex = "999";
  mask.style.cursor = "default";
  mask.style.userSelect = "none";
  mask.style.webkitUserSelect = "none";
  mask.style.pointerEvents = "none !important";
  const maskConfig = config;
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

  return mask;
};

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
  const maskRef = useRef<HTMLDivElement | null>(null);
  const zIndexes = useRef<Map<string, string>>(new Map());
  const registered = useRef<Set<string>>(new Set());

  const register = useCallback((id: string) => {
    registered.current.add(id);
  }, []);

  const unregister = useCallback((id: string) => {
    registered.current.delete(id);
  }, []);

  useEffect(() => {
    const currentStep = steps[step];
    const rootDom = document.body;

    const mask = createMask(config?.maskConfig);

    if (currentStep && rootDom) {
      rootDom.appendChild(mask);
      maskRef.current = mask;
    }

    currentStep?.ids?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        zIndexes.current.set(id, element.style.zIndex);
        element.style.zIndex = "1000";
      }
    });

    const renders = currentStep?.renders?.map(
      ({ id, render, containerStyle, containerClassName }) => {
        if (registered.current.has(id)) {
          // 如果已经注册，跳过渲染步骤
          return;
        }
        const target = document.getElementById(id);
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
        target?.appendChild(container);
        if (container && target) {
          // @ts-ignore
          createRoot(container).render(
            // @ts-ignore
            render(id, currentStep.name, currentStep.data, currentStep.ids)
          );
          return container;
        }
      }
    );

    callback?.(step, currentStep);

    return () => {
      if (currentStep && rootDom && maskRef.current) {
        rootDom.removeChild(mask);
        maskRef.current = null;
      }
      renders?.forEach((elem) => elem?.remove());
      // 当不再需要引导元素时，恢复原始的 zIndex
      zIndexes.current.forEach((zIndex, id) => {
        const element = document.getElementById(id);
        if (element) {
          element.style.zIndex = zIndex;
        }
      });
      zIndexes.current.clear();
    };
  }, [step, steps]);

  const start = useCallback(() => setStep(0), []);
  const stop = useCallback(() => setStep(-1), []);
  const next = useCallback(
    () => setStep((prev) => Math.min(prev + 1, steps.length - 1)),
    [steps]
  );
  const last = useCallback(() => setStep((prev) => Math.max(prev - 1, 0)), []);
  const go = useCallback(
    (step: number) => setStep(Math.max(0, Math.min(step, steps.length - 1))),
    [steps]
  );

  return [
    step,
    {
      start,
      stop,
      next,
      last,
      go,
      step,
      options: { steps, callback, config },
      register,
      unregister,
    },
  ];
}

export default useGuide;

interface TargetProps {
  id: string;
  guider: Guider;
  children: React.ReactNode;
}

export const Target: React.FC<TargetProps> = ({ id, guider, children }) => {
  const [guide, setGuide] = useState<React.ReactNode>(null);
  const { step, options } = guider;
  const { steps } = options || {};
  const currentStep = steps?.[step];

  useEffect(() => {
    guider.register(id);
    const render = currentStep?.renders?.find((r) => r.id === id)?.render;
    if (render) {
      // @ts-ignore
      setGuide(render(id, currentStep.name, currentStep.data, currentStep.ids));
    } else {
      setGuide(null);
    }
    return () => {
      guider.unregister(id);
    };
  }, [id, currentStep]);

  const element = document.getElementById(id);

  return (
    <>
      {children}
      {element && ReactDOM.createPortal(guide, element)}
    </>
  );
};
