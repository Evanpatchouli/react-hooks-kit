// import _cloneDeep from 'lodash.clonedeep';

export function cloneDeep<T>(target: T, map = new Map()): T {
  if (typeof target === "object" && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    const keys = Array.isArray(target) ? undefined : Object.keys(target);
    // @ts-ignore
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value;
      }
      // @ts-ignore
      cloneTarget[key] = cloneDeep(target[key], map);
    });
    // @ts-ignore
    return cloneTarget;
  } else {
    return target;
  }
}

export function forEach(array: any[], iteratee: (value: any, key: any) => void) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

export default cloneDeep;
