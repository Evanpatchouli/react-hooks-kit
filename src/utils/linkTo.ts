const linkTo = (
  path?: string | { path?: string; hash?: boolean },
  hash?: boolean,
  options?: {
    standardize?: boolean;
  }
) => {
  if (path) {
    if (typeof path === "string" && path) {
      if (window.location.hash || hash) {
        if (options?.standardize && !window.location.href.includes("/#/")) {
          window.location.href = window.location.href.replace("#/", "/#/");
        }
        window.location.hash = path.replace(/#/g, "");
      } else {
        window.location.assign(path);
      }
    } else if (typeof path === "object" && path.path) {
      if (window.location.hash || (path.hash ?? hash)) {
        if (options?.standardize && !window.location.href.includes("/#/")) {
          window.location.href = window.location.href.replace("#/", "/#/");
        }
        window.location.hash = path.path.replace(/#/g, "");
      } else {
        window.location.assign(path.path);
      }
    }
  }
};

export default linkTo;
