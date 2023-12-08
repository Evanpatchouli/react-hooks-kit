export default function get(
  object: object,
  path?: string[] | string,
  strict: boolean = false
) {
  if (!path) return undefined;
  if (typeof path === "string") {
    path = path.split(".");
  }

  if (!strict) {
    return path.reduce(
      //@ts-ignore
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      object
    );
  }

  let obj = object;
  for (let i = 0; i < path.length; i++) {
    let key = path[i];
    // @ts-ignore
    while (obj[key] === undefined && i + 1 < path.length) {
      key += "." + path[++i];
    }
    // @ts-ignore
    obj = obj[key];
  }

  return obj;
}
