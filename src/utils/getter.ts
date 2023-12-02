type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type Path<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ? Key | `${Key}.${Path<T[Key], Exclude<keyof T[Key], keyof any[]>>}`
    : Key
  : never;

export type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : T[Key]
    : never
  : P extends keyof T
  ? T[P]
  : undefined;

export default function getter<T extends object, P extends Path<T>>(object: DeepReadonly<T>, path: P): PathValue<T, P> {
  const pathArray = path.split(".") as string[];
  return pathArray.reduce(
    (obj: any, key: string) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    object
  ) as PathValue<T, P>;
}
