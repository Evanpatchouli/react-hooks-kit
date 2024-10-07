import React, { useRef } from "react";
import { useState, useCallback } from "react";
import ReactDom from "react-dom";
import ReactDomClient from "react-dom/client";

let createRoot = (parentDocument: Element) => {
  return {
    render: (element: JSX.Element) => {
      ReactDom.render(element, parentDocument);
    },
  };
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
  top: (text: string, config?: ToastConfig) => void;
  center: (text: string, config?: ToastConfig) => void;
  bottom: (text: string, config?: ToastConfig) => void;
}

function useToast(config: ToastConfig = {}) {
  const [toastConfig, setToastConfig] = useState({
    ...defaultConfig,
    ...config,
  });
  const [toastElement, setToastElement] = useState<HTMLDivElement | null>(null);
  const toastRef = useRef<Toast | null>(null);

  toastRef.current = useCallback(
    (text: string, config: ToastConfig = {}) => {
      const _config = { ...toastConfig, text, ...config };
      setToastConfig(_config);
      const element = document.createElement("div");
      setToastElement(element);
      document.body.appendChild(element);
      const root = createRoot(element);
      root.render(
        <div
          style={{
            position: _config.position,
            ..._config.style,
            color: _config.color,
            left: "50%",
            top: _config.placement === "center" ? "50%" : "10%",
            transform: _config.placement === "center" ? "translate(-50%, -50%)" : "translateX(-50%)",
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
      setTimeout(() => {
        document.body.removeChild(element);
        setToastElement(null);
      }, _config.duration);
    },

    [toastConfig]
  ) as Toast;

  const toast: Toast = useCallback((text?: string, config: ToastConfig = {}) => {
    toastRef.current?.(text, config);
  }, []) as Toast;

  toast.top = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "top" });
  toast.center = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "center" });
  toast.bottom = (text?: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "bottom" });

  return toast;
}

export default useToast;
