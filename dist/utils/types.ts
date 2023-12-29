import { Prettify } from "../typings";

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

/**
 * - D - The maximum depth to traverse. Defaults to `20`.
 */
export type PathInto<
  T,
  D extends number = 20,
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

/**
 * - Depth - The maximum depth to traverse. Defaults to `20`.
 */
export type PathArray<
  T,
  K extends keyof any = keyof T,
  Depth extends number = 20
> = Depth extends 0
  ? never
  : K extends keyof T
  ? T[K] extends object
    ? [K, ...PathArray<T[K], keyof T[K], Depth>] | [K] | []
    : [K] | []
  : never;

/**
 * - D - The maximum depth to traverse. Defaults to `20`.
 */
export type Path<T, K extends keyof any = keyof T, D extends number = 20> =
  | PathArray<T, K, D>
  | PathInto<T>
  | keyof T;

type NumberLike<S extends string> = S extends `${infer T}${infer R}`
  ? T extends "-" | "+"
    ? NumberLike<R>
    : T extends `${number}`
    ? NumberLike<R>
    : false
  : true;

export type PathValue<
  T,
  P extends Path<T> | keyof T
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : T[Key] extends (infer U)[]
      ? U
      : T[Key]
    : never
  : P extends keyof T
  ? T[P]
  : P extends `${infer N}`
  ? N extends keyof T
    ? T[N]
    : NumberLike<N> extends true
    ? ToNumber<N> extends keyof T
      ? T[ToNumber<N>]
      : undefined
    : undefined
  : undefined;

type Subtract<X extends number, Y extends number> = [
  ...Array<Y>,
  ...Array<X>
]["length"];

type ToNumber<
  S extends string,
  T extends any[] = [],
  D extends number = 20
> = T["length"] extends D
  ? never
  : S extends `${T["length"]}`
  ? T["length"]
  : ToNumber<S, [...T, any], Subtract<D, 1>>;

/**
 * Converts a string to a query parameter object.
 * ### Parameters
 * - S - The string to convert, like `"http://localhost?id=1&name=evan"`.
 * - Mode - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
 *
 * - StrictParams - The parameters to treat as strict.
 *
 * - FuzzyParams - The parameters to treat as fuzzy.
 *
 * @return A query parameter object
 */
export type ParseQueryString<
  S extends string,
  Mode extends "string" | "fuzzy" | "auto" | "strict" | "any" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = []
> = Prettify<
  S extends `${infer _Prefix}?${infer Params}`
    ? Params extends ""
      ? {}
      : MergeParams<SplitParams<Params>, Mode, StrictParams, FuzzyParams>
    : MergeParams<SplitParams<S>, Mode, StrictParams, FuzzyParams>
>;

type SplitParams<S extends string> = S extends `${infer E}&${infer Rest}`
  ? [E, ...SplitParams<Rest>]
  : [S];

type MergeParams<
  T extends string[],
  Mode extends "string" | "fuzzy" | "auto" | "strict" | "any" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = [],
  M = {}
> = T extends [infer E, ...infer Rest extends string[]]
  ? E extends `${infer K}=${infer V}`
    ? MergeParams<
        Rest,
        Mode,
        StrictParams,
        FuzzyParams,
        SetProperty<M, K, V, Mode, StrictParams, FuzzyParams>
      >
    : E extends `${infer K}`
    ? MergeParams<
        Rest,
        Mode,
        StrictParams,
        FuzzyParams,
        SetProperty<M, K, undefined, Mode, StrictParams, FuzzyParams>
      >
    : never
  : M;

type SetProperty<
  T,
  K extends PropertyKey,
  V extends any = true,
  Mode extends "string" | "fuzzy" | "auto" | "strict" | "any" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = []
> = {
  [P in keyof T | K]: P extends K
    ? P extends keyof T
      ? T[P] extends V
        ? T[P]
        : T[P] extends any[]
        ? V extends T[P][number]
          ? T[P]
          : [...T[P], V]
        : [T[P], V]
      : P extends FuzzyParams[number]
      ? string
      : P extends StrictParams[number]
      ? V extends "true"
        ? true
        : V extends "false"
        ? false
        : V extends "null"
        ? null
        : V extends `${number}`
        ? number
        : V
      : Mode extends "string"
      ? string
      : Mode extends "fuzzy"
      ? string
      : Mode extends "auto"
      ? V extends "true" | "false"
        ? boolean
        : V extends "null"
        ? null
        : V extends `${number}`
        ? number
        : string
      : Mode extends "strict"
      ? V extends "true"
        ? true
        : V extends "false"
        ? false
        : V extends "null"
        ? null
        : V extends `${number}`
        ? ToNumber<V>
        : V
      : Mode extends "any"
      ? any
      : never
    : P extends keyof T
    ? T[P]
    : never;
};

export type ApplyMode<
  T,
  Mode extends "string" | "fuzzy" | "auto" | "strict" | "any" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = []
> = Mode extends "auto"
  ? T
  : {
      [P in keyof T]: P extends FuzzyParams[number]
        ? string
        : P extends StrictParams[number]
        ? T[P] extends "true"
          ? true
          : T[P] extends "false"
          ? false
          : T[P] extends "null"
          ? null
          : T[P] extends `${number}`
          ? ToNumber<T[P]>
          : T[P]
        : Mode extends "string"
        ? string
        : Mode extends "fuzzy"
        ? string
        : Mode extends "strict"
        ? T[P] extends "true"
          ? true
          : T[P] extends "false"
          ? false
          : T[P] extends "null"
          ? null
          : T[P] extends `${number}`
          ? ToNumber<T[P]>
          : T[P]
        : Mode extends "any"
        ? any
        : T[P];
    };
