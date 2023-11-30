import React from "react";
import { useState, useCallback } from "react";
import ReactDOM from "react-dom";

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
  (text: string, config?: ToastConfig): void;
  top: (text: string, config?: ToastConfig) => void;
  center: (text: string, config?: ToastConfig) => void;
  bottom: (text: string, config?: ToastConfig) => void;
}

function useToast(config: ToastConfig = {}) {
  const [toastConfig, setToastConfig] = useState({ ...defaultConfig, ...config });
  const [toastElement, setToastElement] = useState<HTMLDivElement | null>(null);

  const toast: Toast = useCallback(
    (text: string, config: ToastConfig = {}) => {
      setToastConfig({ ...toastConfig, text, ...config });
      const element = document.createElement("div");
      setToastElement(element);
      document.body.appendChild(element);

      ReactDOM.render(
        <div
          style={{
            position: toastConfig.position,
            ...toastConfig.style,
            color: toastConfig.color,
            backgroundColor: toastConfig.bgColor,
          }}
          className={toastConfig.className}
        >
          {toastConfig.text}
        </div>,
        element
      );

      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(element);
        document.body.removeChild(element);
        setToastElement(null);
      }, toastConfig.duration);
    },
    [toastConfig]
  ) as Toast;

  toast.top = (text: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "top" });
  toast.center = (text: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "center" });
  toast.bottom = (text: string, config: ToastConfig = {}) => toast(text, { ...config, placement: "bottom" });

  return toast;
}

export default useToast;
