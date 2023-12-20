const linkTo = (path?: string | { path?: string; hash?: boolean }, hash?: boolean) => {
  if (path) {
    if (typeof path === "string" && path) {
      if (window.location.hash || hash) {
        window.location.hash = path.startsWith("/") ? path : "#/" + path;
      } else {
        window.location.assign(path);
      }
    } else if (typeof path === "object" && path.path) {
      if (window.location.hash || (path.hash ?? hash)) {
        window.location.hash = path.path.startsWith("/") ? path.path : "#/" + path.path;
      } else {
        window.location.assign(path.path);
      }
    }
  }
};

export default linkTo;
