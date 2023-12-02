// 过滤掉symbol
type GetKeyType<T> = T extends string | number ? T : never;

type StringNumber = `${number}`;
// 处理数组的下标
type IndexPath<T extends string> =
  | `${T}[${StringNumber}]`
  | `${T}.${StringNumber}`;

type PathInfoArray<
  T extends readonly any[],
  D extends number,
  V extends string,
  L extends any[]
> = T extends (infer R)[]
  ? PathInto<R, D, V extends "" ? StringNumber : IndexPath<V>, [...L, 1]>
  : never;

// 处理对象类型
type PathIntoObject<T, D extends number, V extends string, L extends any[]> = {
  [K in GetKeyType<keyof T>]: PathInto<
    T[K],
    D,
    V extends "" ? `${K}` : `${V}.${K}`,
    [...L, 1]
  >;
}[GetKeyType<keyof T>];

//处理never
type IsNever<T> = T extends never ? 1 : 2;
type IsAny<T, R = IsNever<T>> = 1 | 2 extends R ? true : false;

type IsPlainType<T> = T extends Date | RegExp | Math ? false : true;

export type PathInto<
  T,
  D extends number = 10000,
  V extends string = "",
  L extends any[] = []
> = L["length"] extends D
  ? `${V}${string}`
  : true extends IsAny<T>
  ? `${V}${string}`
  : false extends IsPlainType<T>
  ? V extends ""
    ? never
    : V
  :
      | (V extends "" ? never : V)
      | (T extends readonly any[]
          ? PathInfoArray<T, D, V, L>
          : T extends object
          ? PathIntoObject<T, D, V, L>
          : V);

export type PathArray<T, K extends keyof any = keyof T> = K extends keyof T
  ? T[K] extends object
    ? [K, ...PathArray<T[K]>] | [K] | []
    : [K] | []
  : never;
