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

type StepCallback = (step: number, stepConfig: Step) => void;

function useGuide(steps: Step[], callback?: StepCallback): [number, Guider] {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const currentStep = steps[step];
    const renders = currentStep?.renders?.map(({ id, render, containerStyle, containerClassName }) => {
      const parent = document.getElementById(id);
      const element = document.createElement("div");
      if (containerStyle) {
        Object.keys(containerStyle).forEach((key) => {
          // @ts-ignore
          element.style[key] = containerStyle[key];
        });
      }
      if (containerClassName) {
        element.className = containerClassName;
      }
      // 默认位于父元素的最后
      parent?.appendChild(element);
      if (element && parent) {
        // @ts-ignore
        createRoot(element).render(render(id, currentStep.name, currentStep.data, currentStep.ids), element);
        return element;
      }
    });

    callback?.(step, currentStep);

    return () => {
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
