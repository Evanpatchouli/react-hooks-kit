import { Path, PathValue } from "./utils/types";
export interface SetMeta<T extends Object = {}, K extends Path<T> | keyof T = Path<T> | keyof T> {
    (key: K, value?: PathValue<T, K>): void;
    (key: K, setAction: (pre: PathValue<T, K>, preObj: T) => PathValue<T, K>): void;
    (state: T, options?: {
        deepSet?: boolean;
        createNonExist?: boolean;
    }): void;
    (setAction: (pre: T) => T): void;
}
/**
 * **useMeta** is a React Hook that returns a meta state and a function to set the meta state.
 * ### Parameters
 * - initialState: `T extends object` - The initial state object of the meta state.
 * - options?: `{ deepSet?: boolean; createNonExist?: boolean }` - The options of the meta state.
 *   - deepSet : `boolean?` - Whether to use deep clone when setting the meta state. Defaults to `false`.
 *   - createNonExist : `boolean?` - Whether to create non-existent nodes when setting the meta state. Defaults to `false`.
 * ---
 * ### Return (Array)
 * - [0] state
 * - [1] stateSetter - there are four overloads:
 *   + (key: K, value?: PathValue<T, K>): void;
 *   + (key: K, setAction: (pre: PathValue<T, K>, preObj: T) => PathValue<T, K>): void;
 *   + (state: T): void;
 *   + (setAction: (pre: T) => T): void;
 * ---
 * ### Usage
 * ```tsx
 * const [meta, setMeta] = useMeta({
 *   name: "John",
 *   age: 18,
 *   more: { height: 180 }
 * });
 *
 * useEffect(() => {
 *   setMeta("name", "Evan");
 *   setMeta("age", 20);
 *   setMeta("age", (pre) => pre + 1);
 *   setMeta("more.height", 190);
 *   setMeta({ name: "Evan", age: 20, more: { height: 180 } });
 *   setMeta((pre) => ({ ...pre, name: "Evan", age: 20 }));
 * }, []);
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useMeta } from "@evanpatchouli/react-hooks-kit";
 *
 * const View = () => {
 *   const [obj, setObj] = useMeta({
 *     name: "John",
 *     age: 20,
 *     more: {
 *       address: "Taipei",
 *       score: 100,
 *     },
 *     messi: {
 *       game: {
 *         wordCup: {
 *           win: true,
 *         },
 *       },
 *     },
 *   });
 *   return (
 *     <>
 *       <Button
 *         onClick={() => {
 *           setObj("more.score", Math.random() * 100);
 *         }}
 *       >
 *         obj.age++
 *       </Button>
 *       <Button
 *         onClick={() => {
 *           obj.more.score++;
 *         }}
 *       >
 *         obj.more.score++ [lazy]
 *       </Button>
 *       <Button
 *         onClick={() => {
 *           obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
 *         }}
 *       >
 *         (!obj.messi.game.wordCup.win) [lazy]
 *       </Button>
 *       <Code theme="oneLight" lang="json">
 *         {JSON.stringify(obj, null, 2)}
 *       </Code>
 *     </>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useMeta instead of useState?
 * - A: Because useMeta makes it easier to set deep properties of the state.
 * ---
 * - Q: What's the difference of deepSet or not?
 * - A: When deepSet is true, the state will be deep cloned when setting the state, otherwise it will be shallow cloned. Deepclone is slower than shallowclone, but it is safer.
 */
export declare const useMeta: <T extends Object = {}>(initialState: T, options?: {
    deepSet?: boolean;
    createNonExist?: boolean;
}) => readonly [T, SetMeta<T, Path<T, keyof T, 20>>];
export default useMeta;
