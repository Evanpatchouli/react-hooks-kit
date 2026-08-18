/// <reference types="react" />
declare function useHover<E extends HTMLElement>(onHover: () => void): import("react").MutableRefObject<E | null>;
export default useHover;
