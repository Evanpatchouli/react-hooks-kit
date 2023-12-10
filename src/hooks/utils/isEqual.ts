export default function isEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString();

  if (a instanceof Function && b instanceof Function)
    return a.toString() === b.toString();

  if (a instanceof Map && b instanceof Map)
    return isEqual(Array.from(a), Array.from(b));

  if (a instanceof Set && b instanceof Set)
    return isEqual(Array.from(a), Array.from(b));

  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (typeof a === "object" && typeof b === "object") {
    if (a.prototype !== b.prototype) return false;

    return Object.is(a, b);
  }
  return false;
}
