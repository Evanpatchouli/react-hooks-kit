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
            <strong>Mode</strong> - The mode to use when converting: `"string"`
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

  useProtect: {
    desc: "A hook to protect your state.",
    detail: (
      <>
        useProtect is a hook that is used to protect your state being changed:
        <ol>
          <li>initialValue</li>
          <li>Conditions to protect</li>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>initialValue is type of any</Li>
        <Li>Conditions to protect could be type of boolean, string or null.</Li>
        <ul>
          <Li>
            <strong>boolean</strong>: if the condition is true, the state will
            be protected with default error message.
          </Li>
          <Li>
            <strong>string</strong>: if the condition is not empty string, the
            state will be protected with the string as error message.
          </Li>
          <Li>
            <strong>null</strong>: if the condition is null, the state will not
            be protected
          </Li>
        </ul>
      </ol>
    ),
  },

  useToggle: {
    desc: "A hook to toggle boolean state.",
    detail: (
      <>
        useToggle is a hook that is used to toggle boolean state:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> (?) : boolean, default is false
          </li>
          <li>
            <strong>valueMap</strong> (?) : the returned value map
          </li>
          <ul>
            <li>
              <strong>true</strong> (?) : the value when state is true, default
              is true
            </li>
            <li>
              <strong>false</strong> (?) : the value when state is false,
              default is false
            </li>
          </ul>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>initialValue is type of boolean</Li>
      </ol>
    ),
    $p1: "configure the value mapping",
  },

  useLoading: {
    desc: "A hook to toggle loading state.",
    detail: (
      <>
        useLoading is a hook that is used to manage loading state:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> (?) : loading map
          </li>
          <li>
            <strong>options</strong> (?) : the config of value formatter
          </li>
          <ul>
            <li>
              <strong>zeroFalse</strong> (?) : the value when state is true,
              default is true
            </li>
            <li>
              <strong>setType</strong> (?) : invoke setter using "override" or
              "spread"
            </li>
          </ul>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>
          Returned Value is an array merged with object like the struct
          following :{" "}
        </Li>
        <Code lang="text" theme="oneLight">
          {`
[loading, onLoading, unLoading, plusLoading, minusLoading, setLoading]
  & 
{
  loading;
  onLoading;
  unLoading;
  plusLoading;
  minusLoading;
  setLoading;
}
`}
        </Code>
        <Li>
          When you use loading in count way, you must confirm that plus times is
          always same with minus times
        </Li>
        <Li>
          By default, the loading value will be false when the loading value is
          0, you can disable it by setting zeroFalse to false
        </Li>
        <Li>
          By default, the set actions will <strong>override</strong> the old
          value, you can disable it by setting setType to "spread"
        </Li>
      </ol>
    ),
    $p1: "You can use loading in count way, that means you can plus or minus loading value, and the loading state will be true when the value is greater than 0, otherwise false.",
  },

  useGuide: {
    desc: "",
    detail: <></>,
    consideration: <ol></ol>,
    $p1: "",
  },

  useMeta: {
    desc: "A React Hook that returns a meta state and a function to set the meta state",
    detail: (
      <>
        <h4>Parameters: </h4>
        <Li>
          <strong>initialObject</strong> : The initial state object of the meta
          state.
        </Li>
        <Li>
          <strong>deepSet</strong> (?): Whether to use deep clone when setting
          the meta state. Defaults to false.
        </Li>
      </>
    ),
    $p1: "Use setObj to update certain property in object and rerender the component. If you directly reassign properties in object, the view will only sync at next rerender.",
    $p2: "Set property from the old property",
    $p3: "Reset the whole object directly or from old object",
    consideration: (
      <ol>
        <Li>The state must be an object.</Li>
        <Li>No deepSet will work quicker.</Li>
        <Li>
          Do not reassign properties during setting :
          <div style={{ marginTop: "4px" }}>
            It is <strong>bad</strong> and will not work: ❌
          </div>
          <Code lang="ts">{`set('count', obj.count++)`}</Code>
          <div>It is ok: ✅</div>
          <Code lang="ts">{`set('count', obj.count + 1)`}</Code>
          <div>It is the best: ✅</div>
          <Code lang="ts">{`set('count', (pre) +> pre + 1)`}</Code>
        </Li>
      </ol>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useMeta instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because useMeta makes it easier to set deep
          properties of the state.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: What's the difference of deepSet or not?
        </Li>
        <Li>
          <strong>A</strong>: When deepSet is true, the state will be deep
          cloned when setting the state, otherwise it will be shallow cloned.
          Deepclone is slower than shallowclone, but it is safer. Therefore, when
          the state object is huge, you should avoid using deepSet unless
          necessary.
        </Li>
      </ul>
    ),
  },

  useReactive: {
    desc: "A hook to make your object reactive.",
    detail: (
      <>
        useReactive is a hook that is used to make your object reactive:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> : object
          </li>
          <li>
            <strong>deep</strong> (?) : boolean, default is true
          </li>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>initialValue is type of object</Li>
        <Li>deep is type of boolean</Li>
      </ol>
    ),
    $p1: "",
  },

  useReactor: {
    desc: "",
    detail: <></>,
    consideration: <ol></ol>,
    $p1: "",
  },

  useList: {
    desc: "",
    detail: <></>,
    consideration: <ol></ol>,
    $p1: "",
  },
  __end: "end of locale mappings, please do not delete this line",
} as const;

export default locale_en;
