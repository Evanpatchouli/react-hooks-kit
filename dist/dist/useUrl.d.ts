import { ApplyMode, ParseQueryString } from "./utils/types";
import { Prettify } from "./typings";
type UrlInfo<T extends Record<string, any>> = {
    readonly params: Prettify<Readonly<T>>;
    readonly name?: string;
} & Location & History;
type UrlChangeCallback<T extends Record<string, any>> = (urlInfo: UrlInfo<T>) => void;
/**
 * ## useUrl hook
 * Converts a string to a query parameter object. Return an object merged with location, history, params and name.
 *
 * ### Parameters
 * - callback (?) - The **callback** to call when the url changes.
 * - name (?) - The name of the listener
 * - immediate (`false`) - Whether to call the callback immediately.
 * - config (?) - The configuration of the params parser.
 *   + mode (`"auto"`) - The mode of the params parser: `"string"` | `"auto"` = `"auto"`.
 *   + autoParams (?) - The parameters to treat as auto.
 *   + stringifyParams (?) - The parameters to treat as string.
 *   + custom (?) - The custom parser of certain query parameters.
 *
 * ### Type Parameters
 * - T - `string` or `object`.
 *   + The string to convert, like `"http://localhost?id=1&name=evan"`
 *   + object: object to inferred as, like `{ id: 1, name: "evan" }`
 * - Mode - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
 * - StrictParams - The parameters to treat as strict.
 * - FuzzyParams - The parameters to treat as fuzzy.
 *
 * ### Notes
 * - Type infer mode is not associated with the mode parameter of parser.
 *
 * @return location merged with history, params and name.
 */
declare function useUrl<T extends Record<string, any> | string, Mode extends "any" | "fuzzy" | "auto" | "auto" | "strict" = "auto", StrictParams extends string[] = [], FuzzyParams extends string[] = []>(callback?: UrlChangeCallback<Partial<T extends string ? ParseQueryString<T, Mode, StrictParams, FuzzyParams> : ApplyMode<T, Mode, StrictParams, FuzzyParams>>>, name?: string, immediate?: boolean, config?: {
    mode?: "string" | "auto";
    autoParams?: (keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>) | (string & {}))[];
    stringifyParams?: (keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>) | (string & {}))[];
    custom?: {
        [K in keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>)]?: (value: string | undefined) => any;
    };
}): UrlInfo<Partial<T extends string ? ParseQueryString<T, Mode, StrictParams, FuzzyParams> : ApplyMode<T, Mode, StrictParams, FuzzyParams>>>;
export default useUrl;
