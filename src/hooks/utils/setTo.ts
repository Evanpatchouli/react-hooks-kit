import cloneDeep from "./cloneDeep";

export default function setTo(
  obj: any,
  path: string | number | symbol | (string | number | symbol)[],
  val: any,
  deepClone: boolean = false,
  createIfNotExist: boolean = false
): any {
  let keys: (string | number | symbol)[] = [];
  if (!Array.isArray(path)) {
    switch (typeof path) {
      case "string":
        keys = path.split(".");
        break;
      case "number":
        keys = [path];
        break;
      case "symbol":
        keys = [path];
        break;
      default:
        throw new Error("Invalid path");
    }
  } else if (Array.isArray(path)) {
    keys = path;
  }
  if (deepClone) {
    const newObj = cloneDeep(obj);
    let current = newObj;
    for (let i = 0; i < keys.length - 1; i++) {
      // @ts-ignore
      current = current[keys[i]];
    }
    // @ts-ignore
    current[keys[keys.length - 1]] = val;
    return newObj;
  }

  const lastKey = keys.pop();
  let temp = obj;

  keys.forEach((key) => {
    if (!temp[key]) {
      if (createIfNotExist) {
        temp[key] = isNaN(Number(key)) ? {} : [];
      } else {
        return obj;
      }
    }
    temp = temp[key];
  });

  const newObj = { ...obj };
  let temp2 = newObj;
  keys.forEach((key) => {
    temp2 = temp2[key];
  });

  if ((lastKey || lastKey === 0) && temp2 && (createIfNotExist || lastKey in temp2)) {
    temp2[lastKey] = val;
  }
  return newObj;
}