import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDom, { flushSync } from "react-dom";
import ReactDomClient from "react-dom/client";

type ToastRoot = {
  render: (element: JSX.Element) => void;
  unmount: () => void;
};

let createRoot = (parentDocument: Element) => {
  const root: ToastRoot = {
    render: (element: JSX.Element) => {
      ReactDom.render(element, parentDocument);
    },
    unmount: () => {
      ReactDom.unmountComponentAtNode(parentDocument);
    },
  };
  return root;
};

if ("createRoot" in ReactDomClient) {
  // Adapt to React 18
  createRoot = ReactDomClient.createRoot as typeof createRoot;
}

interface ToastConfig {
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
  position?: "fixed" | "absolute" | "relative" | "sticky" | "static";
  placement?: "top" | "center" | "bottom" | { x: number; y: number };
  text?: string;
  color?: string;
  bgColor?: string;
}

const defaultConfig: ToastConfig = {
  duration: 2000,
  delay: 0,
  text: "",
  color: "#fff",
  bgColor: "rgba(0, 0, 0, 0.75)",
  placement: "center",
  position: "fixed",
};

interface Toast {
  (text?: string, config?: ToastConfig): void;
  top: (text?: string, config?: ToastConfig) => void;
  center: (text?: string, config?: ToastConfig) => void;
  bottom: (text?: string, config?: ToastConfig) => void;
}

interface ToastInstance {
  element: HTMLDivElement;
  root: ToastRoot;
  timer?: ReturnType<typeof setTimeout>;
}

function useToast(config: ToastConfig = {}) {
  const [toastConfig, setToastConfig] = useState({
    ...defaultConfig,
    ...config,
  });
  const toastRef = useRef<Toast | null>(null);
  const activeToastsRef = useRef<Set<ToastInstance>>(new Set());
  const delayedToastsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  toastRef.current = useCallback(
    (text?: string, config: ToastConfig = {}) => {
      const _config = {
        ...toastConfig,
        ...config,
        ...(text !== undefined ? { text } : {}),
      };
      setToastConfig(_config);

      const showToast = () => {
        const element = document.createElement("div");
        const root = createRoot(element);
        const instance: ToastInstance = { element, root };
        const placement = _config.placement;
        const placementStyle: React.CSSProperties =
          typeof placement === "object"
            ? {
                left: `${placement.x}px`,
                top: `${placement.y}px`,
                transform: "none",
              }
            : placement === "center"
              ? {
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }
              : placement === "bottom"
                ? {
                    left: "50%",
                    bottom: "10%",
                    transform: "translateX(-50%)",
                  }
                : {
                    left: "50%",
                    top: "10%",
                    transform: "translateX(-50%)",
                  };

        const removeToast = () => {
          if (instance.timer !== undefined) {
            clearTimeout(instance.timer);
            instance.timer = undefined;
          }
          instance.root.unmount();
          if (instance.element.parentNode) {
            instance.element.parentNode.removeChild(instance.element);
          }
          activeToastsRef.current.delete(instance);
        };

        document.body.appendChild(element);
        activeToastsRef.current.add(instance);
        flushSync(() => {
          root.render(
            <div
              style={{
                position: _config.position,
                ...placementStyle,
                ..._config.style,
                color: _config.color,
                backgroundColor: _config.bgColor,
                padding: "4px 12px",
                paddingBottom: "6px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
              className={_config.className}
            >
              {_config.text}
            </div>
          );
        });
        instance.timer = setTimeout(
          removeToast,
          Math.max(0, _config.duration ?? 0)
        );
      };

      const delay = Math.max(0, _config.delay ?? 0);
      if (delay === 0) {
        showToast();
      } else {
        let timer: ReturnType<typeof setTimeout> | undefined;
        timer = setTimeout(() => {
          if (timer !== undefined) {
            delayedToastsRef.current.delete(timer);
          }
          showToast();
        }, delay);
        delayedToastsRef.current.add(timer);
      }
    },

    [toastConfig]
  ) as Toast;

  useEffect(() => {
    return () => {
      delayedToastsRef.current.forEach((timer) => clearTimeout(timer));
      delayedToastsRef.current.clear();
      activeToastsRef.current.forEach((instance) => {
        instance.root.unmount();
        if (instance.element.parentNode) {
          instance.element.parentNode.removeChild(instance.element);
        }
      });
      activeToastsRef.current.clear();
    };
  }, []);

  const toast: Toast = useCallback((text?: string, config: ToastConfig = {}) => {
    toastRef.current?.(text, config);
  }, []) as Toast;

  toast.top = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "top" });
  toast.center = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "center" });
  toast.bottom = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "bottom" });

  return toast;
}

export default useToast;
