import React from "react";
interface ToastConfig {
    duration?: number;
    delay?: number;
    style?: React.CSSProperties;
    className?: string;
    position?: "fixed" | "absolute" | "relative" | "sticky" | "static";
    placement?: "top" | "center" | "bottom" | {
        x: number;
        y: number;
    };
    text?: string;
    color?: string;
    bgColor?: string;
}
interface Toast {
    (text?: string, config?: ToastConfig): void;
    top: (text: string, config?: ToastConfig) => void;
    center: (text: string, config?: ToastConfig) => void;
    bottom: (text: string, config?: ToastConfig) => void;
}
declare function useToast(config?: ToastConfig): Toast;
export default useToast;
