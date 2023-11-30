import {
  CamelCaseArray,
  CamelCaseStrings,
  SnakeCaseArray,
  SnakeCaseStrings,
} from "../typings";

export function snakeToCamelCase<T = string>(
  str: T
): CamelCaseStrings<T> | string | null | undefined | CamelCaseArray<T> {
  if (str === null || str === undefined) {
    return str === undefined ? undefined : null;
  }
  if (typeof str === "string") {
    return str.replace(/(_\w)/g, (letter) =>
      letter[1].toUpperCase()
    ) as any as CamelCaseStrings<T>;
  } else if (typeof str === "number") {
    return `${str}`;
  } else if (typeof str === "object") {
    if (Array.isArray(str)) {
      return str.map((v: any) => snakeToCamelCase(v));
    } else {
      return Object.keys(str).reduce(
        // @ts-ignore
        (result, key) => ({
          ...result,
          // @ts-ignore
          [snakeToCamelCase(key)]: snakeToCamelCase(str[key]),
        }),
        {}
      ) as CamelCaseStrings<T>;
    }
  } else {
    return str as any;
  }
}

export function camelToSnakeCase<T = string>(
  str: T
): SnakeCaseStrings<T> | string | null | undefined | SnakeCaseArray<T> {
  if (str === null || str === undefined) {
    return str as null | undefined;
  }
  if (typeof str === "string") {
    return str.replace(
      /([A-Z])/g,
      (letter) => `_${letter.toLowerCase()}`
    ) as any as SnakeCaseStrings<T>;
  } else if (typeof str === "number") {
    return `${str}`;
  } else if (typeof str === "object") {
    if (Array.isArray(str)) {
      return str.map((v: any) => camelToSnakeCase(v));
    } else {
      return Object.keys(str).reduce(
        // @ts-ignore
        (result, key) => ({
          ...result,
          // @ts-ignore
          [camelToSnakeCase(key)]: camelToSnakeCase(str[key]),
        }),
        {}
      ) as SnakeCaseStrings<T>;
    }
  } else {
    return str as any;
  }
}
