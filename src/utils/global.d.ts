import { css as _css } from "@emotion/react";

declare global {
  const $css: typeof _css;
  interface Window {
    $css: typeof _css;
  }
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    css?: ReturnType<typeof _css>;
  }
}
