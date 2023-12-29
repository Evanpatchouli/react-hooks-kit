export default function get(
  object: object | null | undefined,
  path?: (string | number | symbol)[] | string | number | symbol,
  strict: boolean = false
) {
  if (object === null || object === undefined) return undefined;
  if (!path) return undefined;
  if (!Array.isArray(path)) {
    switch (typeof path) {
      case "string":
        path = path.split(".");
        break;
      case "number":
        path = [path];
        break;
      case "symbol":
        path = [path];
        break;
      default:
        throw new Error("Invalid path");
    }
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
      // @ts-ignore
      key += "." + path[++i];
    }
    // @ts-ignore
    obj = obj[key];
  }

  return obj;
}
