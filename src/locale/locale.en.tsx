import Code from "@/components/code";
import Li from "@/components/layout/Li";

const locale_en = {
  $article: {
    Consideration: "Consideration",
  },
  useWatch: {
    desc: "A hook to watch certain property in an object.",
    detail: (
      <>
        useWatch is a hook that is used to watch the change of certain property, it accepts three parameters, which are:
        <ol>
          <li>target object</li>
          <li>target property path (like "a.b.c" or ["a", "b", "c"]) or a getter function</li>
          <li>callback function</li>
        </ol>
        When the target property of the target object changes, useWatch will call the callback function, which accepts
        two parameters, which are:
        <ol>
          <li>old value</li>
          <li>new value</li>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>target object should be type of object</Li>
        <Li>target property path should be type of string or array of string, the latter is suggested</Li>
        <Li>callback function should be type of function</Li>
        <Li>
          default, the returned will has no excipit type infer, because inter a type from a complex object is difficult,
          but you can assign type by yourself, like this: <code>const a: string = useWatch(obj, "a")</code>. In the
          meantime, callback function will auto assign type to old value and new value
        </Li>
        <Li>
          the strict will make effects to get the property with special key and may cause energy consumption, the best
          way is to use array as path instead of string path with strict mode.
        </Li>
        <Li>
          How can I get valueType watched {"( like c in const obj = { a: { b : { c : 1 } } } )"}?
          <p>There are five ways:</p>
          <ol>
            <li>
              <Code lang='ts'>{`const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})`}</Code>
            </li>
            <li>
              <Code lang='ts'>{`const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang='ts'>{`const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang='ts'>{`const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang='ts'>{`const c = useWatch(obj, (state) => state.a.b.c, (a, b) => {})`}</Code>
            </li>
            <p>
              The fourth way is only work with string path not array path, and infer will fail if the one key in path
              includes "." character.
            </p>
          </ol>
        </Li>
        <p>
          Therefore, it is suggested to avoid using string includes "." as keys in your object, and then run with string
          or array path or under non-strict mode with PathValue inferred from the string path. Everything will be fine.
          Otherwise, use getter instead of path, in this case, you need to confirm your getter always works correctly.
        </p>
      </ol>
    ),
  },
} as const;

export default locale_en;
