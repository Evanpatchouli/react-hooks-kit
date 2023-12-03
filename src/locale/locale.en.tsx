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
        useWatch is a hook that is used to watch the change of certain property,
        it accepts three parameters, which are:
        <ol>
          <li>target object</li>
          <li>
            target property path (like "a.b.c" or ["a", "b", "c"]) or a getter
            function
          </li>
          <li>callback function</li>
        </ol>
        When the target property of the target object changes, useWatch will
        call the callback function, which accepts two parameters, which are:
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
        <Li>
          target property path should be type of string or array of string, the
          latter is suggested
        </Li>
        <Li>callback function should be type of function</Li>
        <Li>
          default, the returned will has no excipit type infer, because inter a
          type from a complex object is difficult, but you can assign type by
          yourself, like this: <code>const a: string = useWatch(obj, "a")</code>
          . In the meantime, callback function will auto assign type to old
          value and new value
        </Li>
        <Li>
          the strict will make effects to get the property with special key and
          may cause energy consumption, the best way is to use array as path
          instead of string path with strict mode.
        </Li>
        <Li>
          How can I get valueType watched{" "}
          {"( like c in const obj = { a: { b : { c : 1 } } } )"}?
          <p>There are five ways:</p>
          <ol>
            <li>
              <Code lang="ts">{`const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})`}</Code>
            </li>
            <li>
              <Code lang="ts">{`const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang="ts">{`const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang="ts">{`const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code lang="ts">{`const c = useWatch(obj, (state) => state.a.b.c, (a, b) => {})`}</Code>
            </li>
            <p>
              The fourth way is only work with string path not array path, and
              infer will fail if the one key in path includes "." character.
            </p>
          </ol>
        </Li>
        <p>
          Therefore, it is suggested to avoid using string includes "." as keys
          in your object, and then run with string or array path or under
          non-strict mode with PathValue inferred from the string path.
          Everything will be fine. Otherwise, use getter instead of path, in
          this case, you need to confirm your getter always works correctly.
        </p>
      </ol>
    ),
  },
  useUrl: {
    desc: "A hook to get url params.",
    detail: (
      <>
        useUrl is a hook that is used to listen url and get params, it accepts
        four parameters.
        <ol>
          <Li>
            <strong>callback (?)</strong>: The function will be called when url
            changes.
          </Li>
          <Li>
            <strong>name (?)</strong>: The name of url listener, if you have
            multiple url listeners, you can use this parameter to distinguish
            them.
          </Li>
          <Li>
            <strong>immediate (false)</strong>: The function will be called
            immediately when url changes.
          </Li>
          <Li>
            <strong>config (?)</strong>: The configuration of the params parser.
            <ol>
              <Li>
                <strong>mode (?)</strong>: The mode of the params parser:
                `"string"` | `"auto"` = `"auto"`.
              </Li>
              <Li>
                <strong>autoParams (?)</strong>: The parameters to treat as
                auto.
              </Li>
              <Li>
                <strong>stringifyParams (?)</strong>: The parameters to treat as
                string.
              </Li>
              <Li>
                <strong>custom (?)</strong>: The custom parser of certain query
                parameters.
              </Li>
            </ol>
          </Li>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <>
        <strong>Type parameters</strong>
        <ol>
          <li>
            <strong>T</strong> - `string` or `object`
            <ul>
              <li>
                The string to convert, like `"http://localhost?id=1&name=evan"`
              </li>
              <li>
                object: object to inferred as, like{" "}
                <code>{'`{ id: "1", name: "evan" }`'}</code>
              </li>
            </ul>
          </li>
        </ol>
        <ol>
          <li>
            <strong>Mode</strong> - The mode to use when converting: `"string"`{" "}
            | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
          </li>
          <li>
            <strong>StrictParams</strong> - The parameters to treat as strict.
          </li>
          <li>
            <strong>FuzzyParams</strong> - The parameters to treat as fuzzy.
          </li>
        </ol>
      </>
    ),
  },
} as const;

export default locale_en;
