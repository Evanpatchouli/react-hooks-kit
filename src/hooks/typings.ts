export type LazySource = {
  readonly loaded?: boolean;
} & string;

export type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type SnakeCase<S extends string> =
  S extends `${infer P1}${infer P2}${infer P3}`
  ? P2 extends Uncapitalize<P2>
  ? `${Lowercase<P1>}${SnakeCase<`${P2}${P3}`>}`
  : `${Lowercase<P1>}_${Lowercase<P2>}${SnakeCase<`${P2}${P3}`>}`
  : Lowercase<S>;

export type SnakeCaseStrings<T> = {
  [P in keyof T as P extends string ? SnakeCase<P> : never]: T[P];
};

export type SnakeCaseArray<T> = (
  | SnakeCaseStrings<T>
  | string
  | null
  | undefined
  | SnakeCaseArray<T>
)[];

export type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<`${P2}${P3}`>}`
  : Lowercase<S>;

export type CamelCaseStrings<T> = {
  [P in keyof T as P extends string ? CamelCase<P> : never]: T[P];
};

export type CamelCaseArray<T> = (
  | CamelCaseStrings<T>
  | string
  | null
  | undefined
  | CamelCaseArray<T>
)[];

export type Hintable<T> = T | (string & {});
export type Option<T = any> = T | undefined;
export type Property<T extends object, K extends string | number | Symbol> = K extends keyof T ? T[K] : any;
