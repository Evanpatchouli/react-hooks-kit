import Code from "@/components/code";
import Li from "@/components/layout/Li";

const Un = () => <span css={$css`color: gray;`}>Going to complete</span>;

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
    $p1: "",
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
    $best: (
      <ul>
        <Un />
      </ul>
    ),
    $faqs: (
      <ul>
        <Un />
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },
  useUrl: {
    desc: "A hook to get url params.",
    detail: (
      <>
        useUrl is a hook that is used to listen url and get params, it accepts four parameters.
        <ol>
          <Li>
            <strong>callback (?)</strong>: The function will be called when url changes.
          </Li>
          <Li>
            <strong>name (?)</strong>: The name of url listener, if you have multiple url listeners, you can use this
            parameter to distinguish them.
          </Li>
          <Li>
            <strong>immediate (false)</strong>: The function will be called immediately when url changes.
          </Li>
          <Li>
            <strong>config (?)</strong>: The configuration of the params parser.
            <ol>
              <Li>
                <strong>mode (?)</strong>: The mode of the params parser: `"string"` | `"auto"` = `"auto"`.
              </Li>
              <Li>
                <strong>autoParams (?)</strong>: The parameters to treat as auto.
              </Li>
              <Li>
                <strong>stringifyParams (?)</strong>: The parameters to treat as string.
              </Li>
              <Li>
                <strong>custom (?)</strong>: The custom parser of certain query parameters.
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
              <li>The string to convert, like `"http://localhost?id=1&name=evan"`</li>
              <li>
                object: object to inferred as, like <code>{'`{ id: "1", name: "evan" }`'}</code>
              </li>
            </ul>
          </li>
        </ol>
        <ol>
          <li>
            <strong>Mode</strong> - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` |
            `"any"` = `"auto"`.
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
            <strong>boolean</strong>: if the condition is true, the state will be protected with default error message.
          </Li>
          <Li>
            <strong>string</strong>: if the condition is not empty string, the state will be protected with the string
            as error message.
          </Li>
          <Li>
            <strong>null</strong>: if the condition is null, the state will not be protected
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
              <strong>true</strong> (?) : the value when state is true, default is true
            </li>
            <li>
              <strong>false</strong> (?) : the value when state is false, default is false
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
              <strong>boolify</strong> (?) : the value when state is true, default is true
            </li>
            <li>
              <strong>setType</strong> (?) : invoke setter using "override" or "spread"
            </li>
          </ul>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <ol>
        <Li>Returned Value is an array merged with object like the struct following : </Li>
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
        <Li>When you use loading in count way, you must confirm that plus times is always same with minus times</Li>
        <Li>
          By default, the loading value will be false when the loading value is 0, you can disable it by setting boolify
          to false
        </Li>
        <Li>
          By default, the set actions will <strong>override</strong> the old value, you can disable it by setting
          setType to "spread"
        </Li>
      </ol>
    ),
    $p1: "You can use loading in count way, that means you can plus or minus loading value, and the loading state will be true when the value is greater than 0, otherwise false.",
  },

  useMeta: {
    desc: "A React Hook that returns a meta state and a function to set the meta state",
    detail: (
      <>
        <h4>Parameters: </h4>
        <Li>
          <strong>initialObject</strong> : The initial state object of the meta state.
        </Li>
        <Li>
          <strong>deepSet</strong> (?): Whether to use deep clone when setting the meta state. Defaults to false.
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
          <strong>A</strong>: Because useMeta makes it easier to set deep properties of the state.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: What's the difference of deepSet or not?
        </Li>
        <Li>
          <strong>A</strong>: When deepSet is true, the state will be deep cloned when setting the state, otherwise it
          will be shallow cloned. Deepclone is slower than shallowclone, but it is safer. Therefore, when the state
          object is huge, you should avoid using deepSet unless necessary.
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
            <strong>initialValue</strong> : primitives, array, object, Date, Map or Set
          </li>
          <li>
            <strong>deep</strong> (?) : boolean, Whether to deep reactive, default is true
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "Create a reactive proxy for an object",
    $p2: "Create a reactive proxy for an array",
    $p3: "Create a reactive proxy for a primitive value. In this case, the returned struct will be like this: { value: 1 }, and you can get the value by using value property.",
    consideration: (
      <>
        <ol>
          <Li>initialValue could be of primitives, array, object, Date, Map and Set.</Li>
          <Li>deep is type of boolean</Li>
        </ol>
        <p
          style={{
            padding: "20px",
            background: "#cff",
            borderRadius: "4px",
          }}
        >
          <strong>ℹ️ Notice</strong> : Every time you call a method on the reactive object will cause rerender.
        </p>
        <p
          style={{
            padding: "20px",
            background: "#ffd",
            borderRadius: "4px",
          }}
        >
          <strong>⚠️ Warning</strong> : useReactive makes proxies for all properties on the target as many as possible,
          some apis will behave differently from the original.
        </p>
      </>
    ),
    $best: (
      <>
        <ul>
          <Li>
            <strong>Better performance</strong> : Use shallow reactive, and define a property to rerender.
          </Li>
          <Li>
            <strong>Better reactive</strong> : Use deep reactive, rerender every when property changes.
          </Li>
          <Li>
            <strong>Better security</strong> : Use unwrap (exported from useReactive) to control reactive data, and
            reassign it to the reactive proxy.
          </Li>
        </ul>
      </>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useReactive instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because useReactive simplifies the process of making object reactive. That is you can play
          react.js like Vue.js.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: What's the difference of deep or not?
        </Li>
        <Li>
          <strong>A</strong>: When deep is true, the object will be deep reactive, otherwise it will be shallow
          reactive. Deep reactive means every properties on object will get proxied. Shallow reactive means only the
          first level properties will get proxied.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>T</strong>: suggest to extends primitives | Array | object | Date | Map | Set
          </li>
        </ul>
      ),
      params: {},
      return: {},
    },
  },

  useList: {
    desc: "A hook to manage list state.",
    detail: <></>,
    consideration: (
      <ol>
        <Li>
          <strong>initialValue</strong> : array
        </Li>
        <Li>
          <strong>options</strong> : object
        </Li>
      </ol>
    ),
    $p1: "Just render the temporary list view.",
    $p2: "Control the temporary list data, as you see, the original list data is still. Only when you save the list, will the original list get updated.",
    $best: (
      <ul>
        <Li>
          <strong>Best management</strong> : Use isolation and control together.
        </Li>
      </ul>
    ),
    $faqs: (
      <>
        <Li>
          <strong>Q</strong>: Why useList instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because useList makes it easier to manage list state.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: What abilities does useList have?
        </Li>
        <Li>
          <strong>A</strong>: useList has lots of abilities:
          <ol>
            <li>
              <strong>render</strong>: render the list view
            </li>
            <li>
              <strong>isolation</strong>: isolate the view data and original data.
            </li>
            <li>
              <strong>control</strong>: provide many ways to control the list data.
            </li>
            <li>
              <strong>backtracking</strong>: provide ability to trace back the list data.
            </li>
            <li>
              <strong>pagination</strong>: provide ability to paginate the list data.
            </li>
            <span>...</span>
          </ol>
        </Li>
      </>
    ),
    $apis: {
      generics: (
        <>
          <li>
            <strong>T</strong>: typeof list elements
          </li>
        </>
      ),
      params: {},
      return: {},
    },
  },

  useReactor: {
    desc: "A state hook based on Reactor Model.",
    detail: (
      <>
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> : object
          </li>
          <li>
            <strong>plugins</strong> : {"ReactorPlugin<T>[]"}
          </li>
        </ol>
        For example:
      </>
    ),
    consideration: (
      <>
        <ol>
          <Li>
            Direct mutation of reactor.value properties won't trigger re-renders. Always use set() or setValue() to
            update state.
          </Li>
          <Li>
            Use path-based set() method (e.g., set("user.name", "John")) for updating nested properties instead of
            direct assignment.
          </Li>
          <Li>
            Reactor is best suited for managing complex object state. For simple primitive values, consider using
            useState instead.
          </Li>
          <Li>
            Plugin actions are executed synchronously during state changes. Avoid heavy computations in plugin
            callbacks.
          </Li>
          <Li>
            The event bus (emit/on) is isolated to Reactor instances only and doesn't share events with useEmitter or
            useReceiver hooks.
          </Li>
        </ol>
        <p
          style={{
            padding: "20px",
            background: "#ffd",
            borderRadius: "4px",
          }}
        >
          <strong>⚠️ Warning</strong> : please invoke subscribe, on and listeners in useEffect hook area to avoid some
          unexpectable problems.
        </p>
      </>
    ),
    $p1: "Basic usage, manage a state. You can use get() to get certain property by path or directly access that by keys chain. You can use set() to update certain property value by path.",
    $p1_1:
      "Because this state is typeof object, therefore, the third button can directly change the stored value, but will not trigger the rerender.",
    $p2: "Register a plugin to the Reactor Instance, and dipatch its name to invoke the plugin",
    $p3: "Import listen from useReactor, listen the state changing, and do something in then code block.",
    $p4: "Ressign the value of Reactor instance can override the state. You can also use setValue to do that.",
    $p5: "You can clone a new Reactor from an existing Reactor instance, but they will point to the same state. CloneValue will just clone value of state.",
    $p6: "You can assign a default value to Reactor, and when you invoke reset, the value will be reset to default value.",
    $p7: "Different Reactor instances can communicate with each other by a global event bus, you can emit a event and use on to receive a event payload.",
    $p7_notice: (
      <>
        <p
          style={{
            padding: "20px",
            background: "#cff",
            borderRadius: "4px",
          }}
        >
          <strong>ℹ️ Notice</strong> : Reactor Event Bus is dependent from the Emitter's.
        </p>
      </>
    ),
    $best: (
      <ul>
        <Li>
          <strong>Component Communication</strong>: Use Reactor's event bus (emit/on) to sync data between components
          without prop drilling.
        </Li>
        <Li>
          <strong>Plugin System</strong>: Leverage plugins for cross-cutting concerns like logging, validation, or
          persistence to keep component logic clean.
        </Li>
        <Li>
          <strong>Path-based Access</strong>: Use get("user.profile.name") and set("user.profile.name", value) for
          deeply nested properties instead of manual traversal.
        </Li>
        <Li>
          <strong>State Subscription</strong>: Use subscribe() to react to state changes in other parts of your
          application without tight coupling.
        </Li>
        <Li>
          <strong>Default Values</strong>: Set default values with setDefaultValue() and use reset() to easily restore
          initial state (useful for forms).
        </Li>
        <Li>
          <strong>State Cloning</strong>: Use cloneValue() when you need an independent copy of the state for
          comparison or undo functionality.
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useReactor instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Reactor provides advanced features like path-based access, subscriptions, plugins, event
          system, and easier state management for complex objects. It's ideal when you need more than simple state
          updates.
        </Li>
        <Li>
          <strong>Q</strong>: When should I use plugins?
        </Li>
        <Li>
          <strong>A</strong>: Use plugins to add custom logic that runs on state changes or actions, such as logging,
          validation, persistence, or side effects. Plugins help keep your component code clean and reusable.
        </Li>
        <Li>
          <strong>Q</strong>: Can I use Reactor outside of React components?
        </Li>
        <Li>
          <strong>A</strong>: Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it
          won't trigger React re-renders. Use useReactor hook inside components for automatic re-rendering.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>T</strong>: typeof state value.
          </li>
        </ul>
      ),
      params: {},
      return: {},
    },
  },

  useTree: {
    desc: "A hook to manage tree state.",
    detail: (
      <>
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> : array
          </li>
          <li>
            <strong>options</strong> : object
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "Here is a simple example to show how to use useTree hook.",
    consideration: (
      <ol>
        <Li>
          initialValue is type of <span className="txt-secondary">TreeNode</span>
        </Li>
        <Li>options is type of object</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          <strong>Control the virtual nodes</strong> : Avoid to change the original nodes directly.
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useTree instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because useTree makes it easier to manage and render tree state.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <>
          <li>
            <strong>T</strong>: extends TreeNode, type of node
          </li>
          <li>
            <strong>K</strong>: extends string, key name of node as idKey
          </li>
        </>
      ),
      params: {},
      return: {},
    },
  },

  useBatchHooks: {
    desc: "A hook to batch hooks.",
    detail: (
      <>
        useBatchHooks is a hook that is used to batch hooks:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>hook</strong> : the hook to be executed
          </li>
          <li>
            <strong>count</strong> (?) : number of times to execute the hook, default is 1
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "You can batch hooks to create a series of ripple refs and bind them to a series of elements.",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useMemento: {
    desc: "A hook to manage a state as memento",
    detail: (
      <>
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialState</strong> : any
          </li>
          <li>
            <strong>config</strong> : object
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "The initial state will be the first state in the history. By default, the history size is 10, and the strict mode is false. Therefore, the history will be 10 states at most, and an Error would be thrown out when the idKey is not found.",
    $p2: "You should know that if you invoke clear api, all will be cleared, including the history, so this action is not rollbackable. Also, after clear, current idKey will be set to NaN. (In future versions, it may be set to other falsy value such null.)",
    consideration: (
      <ol>
        <Li>initialState is type of any</Li>
        <Li>config is type of object of MementoConfig</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          <strong>Strict Mode</strong> : Use strict mode and set idKey to a unique value.
        </Li>
      </ul>
    ),
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  usePrevious: {
    desc: "A hook to store previous state.",
    detail: (
      <>
        usePrevious is a hook that is used to store previous state:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>state</strong> : any state from useState
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "The previous state will be undefined when the state is the first state.",
    consideration: <ol>It is just a simple hook, no consideration.</ol>,
    $best: (
      <>
        This is a React component that allows users to toggle between a light and dark theme. The usePrevious hook is
        used to keep track of the previous theme, and a message is logged to the console whenever the theme changes.
      </>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why usePrevious instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because it is more convenient for readonly state.
        </Li>
        <br />
      </ul>
    ),
    $apis: {
      generics: (
        <>
          <li>
            <strong>T</strong>: extends any, type of state.
          </li>
        </>
      ),
      params: {
        state: "any state from useState",
      },
      return: {
        previous: "the previous state",
      },
    },
  },

  useEmitter: {
    desc: "",
    detail: <></>,
    $p1: "",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useReceiver: {
    desc: "",
    detail: <></>,
    $p1: "",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useReflect: {
    desc: "",
    detail: <></>,
    $p1: "",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useProvide: {
    desc: "A hook to share a state with other components.",
    detail: (
      <>
        useProvide is a hook that is used to share a state with other components, and it is based on{" "}
        <a href="#/docs/useEmitter">useEmitter</a>:<h4>Parameters : </h4>
        <ol>
          <li>
            <strong>name</strong> : the name of the state, should be unique
          </li>
          <li>
            <strong>state</strong> : any state from useState
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useInject: {
    desc: "A hook to inject a state from other components.",
    detail: (
      <>
        useInject is a hook that is used to inject a state from other components, and it is based on{" "}
        <a href="#/docs/useReceiver">useReceiver</a>:<h4>Parameters : </h4>
        <ol>
          <li>
            <strong>name</strong> : the name of the state, should be unique
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "",
    consideration: <ol></ol>,
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useGuide: {
    desc: "",
    detail: <></>,
    $p1: "Make guidence for elements with certain ids.",
    $p2: (
      <>
        <p>
          <strong>Try to wrapp the target element with Target component.</strong> The wrapped is different from the raw,
          they have different method to render and insert the guide element into DOM tree.
        </p>
        <p>
          By raw way, useGuide will create a div wrapper on every guidence element, and append it to the target element.
        </p>
        <p>
          By Target wrapped way, useGuide will wrap the target element with pure fregment, and render the guidence
          element into the fregment with
          <code> React.createPortal </code>.
        </p>
        <p>
          The expressional difference in visiable is that the wrapped way will higher the zIndex of target element than
          mask, and the raw way will not. (Actually, the raw way will higher target too, but for some reason, it may not
          work.)
        </p>
      </>
    ),
    consideration: (
      <ol>
        <Li>target element should have id</Li>
        <Li>the id should be unique</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          Ensure the parent element of the target element has a position of either 'relative' or 'absolute'. This allows
          the guide element (with 'absolute' positioning) to be positioned relative to the parent element.
        </Li>
        <Li>
          If the parent element is a scroll container, ensure it has sufficient height and width to contain all its
          content. This allows the guide element to correctly follow its target element when the user scrolls.
        </Li>
        <Li>
          Avoid using 'overflow: hidden' on the parent element if possible. This could cause the guide element to be
          clipped or hidden.
        </Li>
        <Li>
          If the parent element has a high 'z-index' value, you may need to adjust the 'z-index' of the guide element to
          ensure it appears above the parent element.
        </Li>
        <Li>
          If the parent element has padding or borders, these values may need to be considered in the positioning
          calculations for the guide element.
        </Li>
      </ul>
    ),
    $faqs: <ul></ul>,
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },
  useTickState: {
    desc: "A hook to manage state with tick.",
    detail: (
      <>
        useTickState is a hook that is used to manage state with tick:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>initialValue</strong> : any
          </li>
          <li>
            <strong>tickBy</strong> : "onSetState" | "onChange"
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "Tick by onSetState(default)",
    $p2: "Tick by onChange",
    consideration: (
      <ol>
        <Li>When tickby "onSetState", you'd better avoid abuse setState</Li>
        <Li>When tickby "onChange", you'd better confirm your dependencies</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Tick by "onSetState", and before invoke setState check whether the new value is differ from the old.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong> : Why I need useTickState?
        </Li>
        <Li>
          <strong>A</strong> : useTickState give you a more clear tag to tag whether the state changes
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useReactorListener: {
    desc: "A hook to listen Reactor instance's value changes.",
    detail: (
      <>
        useReactorListener is a hook that is used to listen Reactor instance's value changes:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>reactor</strong> : Reactor instance
          </li>
          <li>
            <strong>callback</strong> : ReactorListener Callback
          </li>
          <li>
            <strong>immediate</strong> : boolean, default is false
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "The immediate listener will be invoked immediately when the listener is registered. Therefor, the first example will not get userCopy sync at initial, and the second example will.",
    consideration: (
      <ol>
        <Li>reactor is type of Reactor instance</Li>
        <Li>callback is type of ReactorListenerCallback</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use immediate listener to sync the value at initial.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong> : Why I need useReactorListener?
        </Li>
        <Li>
          <strong>A</strong> : useReactorListener allows you to listen a Reactor independently.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useTicker: {
    desc: "A hook to manage a ticker.",
    detail: (
      <>
        useTicker is a hook that is used to manage a ticker:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>fn</strong> : Callback function
          </li>
          <li>
            <strong>duration or options</strong> : the duration of ticker's config
          </li>
          <li>
            <strong>options</strong> : ticker's config
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
        <li>when immediate is true, only the first resume will call the callback immediately.</li>
      </ol>
    ),
    $best: (
      <ol>
        <Un />
      </ol>
    ),
    $faqs: (
      <ul>
        <Un />
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useDebounce: {
    desc: "A React Hook that delays function execution until calls have stopped for a specified period.",
    detail: (
      <>
        <p>
          <code>useDebounce</code> returns a debounced function. Repeated calls reset the delay, so the wrapped
          function runs only after the caller stops invoking it.
        </p>
        <p>
          The returned function also exposes <code>cancel</code> to clear a pending invocation.
        </p>
      </>
    ),
    $p1: "Try to click on the button frequently, and see whether the number changes 1 sec after your last click.",
    consideration: (
      <ol>
        <Li>Keep the debounced function stable when passing it to event handlers.</Li>
        <Li>Use a non-negative delay; a zero delay executes the wrapped function directly.</Li>
        <Li>Call cancel when a pending invocation must not run.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use debouncing for search fields, resize handlers, and other high-frequency events.</Li>
        <Li>Choose a delay that balances responsiveness with the number of requests you want to send.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: When does the wrapped function run?
        </Li>
        <Li>
          <strong>A</strong>: It runs after the delay has elapsed without another call to the debounced function.
        </Li>
        <Li>
          <strong>Q</strong>: How can I prevent a pending call?
        </Li>
        <Li>
          <strong>A</strong>: Call the returned function's cancel method.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>R</strong>: suggest to extends primitives | Array | object | Date | Map | Set
          </li>
        </ul>
      ),
      params: {},
      return: {},
    },
  },

  useMap: {
    desc: "A React Hook that manages a Map state with convenient methods for manipulation.",
    detail: (
      <>
        useMap is a hook that provides a convenient way to manage Map state in React. It wraps the native Map data
        structure and provides methods like set, get, del, and add to manipulate the map state. The returned map is
        readonly, which means you cannot use map.set() directly, but must use the provided set() method to trigger
        re-renders.
        <h4>Parameters:</h4>
        <ol>
          <li>
            <strong>initialState</strong>: T extends Object - The initial state object that will be converted to a Map.
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "Basic usage: initialize a map with an object, and use get() to retrieve values and set() to update values.",
    $h2: "Get and Set",
    $p2: "You can get properties from the map directly by `map.get` or by using get method, and set properties by using set method. `map.set` is omitted from the map.",
    $h3: "Four overloads of set",
    $p3: (
      <>
        Set method has 4 overloads:
        <ol>
          <li>{"set<K> = (key: K, value: T[K]): void;"}</li>
          <li>{"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void"}</li>
          <li>{"set(record, mode?: 'rehydrate' | 'override'): void"}</li>
          <li>{"set(setMapAction: (prev: Map) => T | Map, mode?: 'rehydrate' | 'override'): void"}</li>
        </ol>
      </>
    ),
    $p4: (
      <>
        <p>
          About 3rd and 4th overload, you can set second parameter to 'rehydrate' to rehydrate the map, or 'override' to
          override the map. If the mode not specified, it will be 'rehydrate' by default.
        </p>
        <p>About 4th overload, the return of setMapAction could be type of a Map instance of a plain object of T.</p>
      </>
    ),
    $h4: "Del and Add",
    $p5: "You can delete a property by using del method, and add a property by using add method.",
    consideration: (
      <ol>
        <Li>Unless you del, the type of map.get is T[K] actually</Li>
        <Li>Default set action mode is "rehydrate"</Li>
      </ol>
    ),
    $best: (
      <ol>
        <span>If you prefer Map than Object, useMap is a good choice than useRecord</span>
      </ol>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useMap instead of useState with Map?
        </Li>
        <Li>
          <strong>A</strong>: useMap provides convenient methods (set, get, del, add) and ensures immutability
          automatically. You don't need to manually create a new Map instance to trigger re-renders.
        </Li>
        <Li>
          <strong>Q</strong>: What's the difference between 'rehydrate' and 'override' mode?
        </Li>
        <Li>
          <strong>A</strong>: 'rehydrate' merges new values with existing ones (keeps existing keys), while 'override'
          replaces the entire map (removes all existing keys).
        </Li>
        <Li>
          <strong>Q</strong>: Can I use map.set() directly?
        </Li>
        <Li>
          <strong>A</strong>: No, the returned map is readonly. You must use the provided set() method to trigger
          re-renders.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useRecord: {
    desc: "A React Hook for managing a typed, one-level record with convenient get and set operations.",
    detail: (
      <>
        <p>
          <code>useRecord</code> stores a plain object in React state and returns the current record together with
          setter and getter functions. Updating through <code>set</code> creates a new record and triggers a render.
        </p>
        <h4>Parameters:</h4>
        <ol>
          <li>
            <strong>initial</strong>: an optional object used as the initial record value
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "Use setRecord for updates and getRecord when a value should be read through the Hook API.",
    consideration: (
      <ol>
        <Li>useRecord manages a shallow, one-level object; it does not deep-clone nested values.</Li>
        <Li>Use the rehydrate mode to merge fields and override mode to replace the complete record.</Li>
        <Li>Do not mutate the returned record directly because direct mutation does not trigger a render.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Prefer the functional setter form when the next value depends on the previous value.</Li>
        <Li>Use a stable object shape so TypeScript can infer keys and value types accurately.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: What is the difference between rehydrate and override?
        </Li>
        <Li>
          <strong>A</strong>: Rehydrate merges new fields into the current record; override replaces it entirely.
        </Li>
        <Li>
          <strong>Q</strong>: How do I update a field from its previous value?
        </Li>
        <Li>
          <strong>A</strong>: Pass a function as the field value, such as setRecord("count", (value) =&gt; value + 1).
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useResize: {
    desc: "",
    detail: <></>,
    $p1: "Prop nothing, listen the resize event of window. Try to resize the window and see the changes.",
    $h2: "Listen an element",
    $p2: "Prop a ref, listen the resize event of the ref element. Try to drag the sliders to see the changes.",
    consideration: (
      <ol>
        <Un />
      </ol>
    ),
    $best: (
      <ul>
        <Un />
      </ul>
    ),
    $faqs: (
      <ul>
        <Un />
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useThrottle: {
    desc: "useThrottle is a hook that is used to throttle a function to be called at most once in a certain period.",
    detail: (
      <>
        <h4>Parameters : </h4>
        <ol>
          <Li>
            <strong>fn</strong> : Callback function
          </Li>
          <Li>
            <strong>interval</strong> : number
          </Li>
          <Li>
            <strong>options</strong> : throttle's config
          </Li>
        </ol>
        For example:
      </>
    ),
    $p1: "Click the button, and see whether the number changes only once during every second.",
    consideration: (
      <ol>
        <Un />
      </ol>
    ),
    $best: (
      <ul>
        <Un />
      </ul>
    ),
    $faqs: (
      <ul>
        <Un />
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useWatchGetter: {
    desc: "A hook to watch the getter of a state.",
    detail: (
      <>
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>getter</strong> : Getter
          </li>
          <li>
            <strong>callback</strong> : WatcherCallback
          </li>
          <li>
            <strong>updater</strong> : Whether to return a manual reupdate function.
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "The callback will be invoked when the getter result changes.",
    consideration: (
      <ol>
        <Li>
          If you want to manually reupdate the getter, you can set the updater to true, and the return value will be an
          array like [value, reupdate func].
        </Li>
      </ol>
    ),
    $best: (
      <ul>
        <Un />
      </ul>
    ),
    $faqs: (
      <ul>
        <Un />
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useTitle: {
    desc: "A React Hook for managing and monitoring the document title with automatic restoration.",
    detail: (
      <>
        <p>
          <code>useTitle</code> provides a reactive way to manage the document title. It returns the current title
          and a setter function, allowing you to read and update the title dynamically.
        </p>
        <p>
          The hook uses MutationObserver to detect external title changes (e.g., from other components or scripts)
          and automatically syncs the state. When the component unmounts, the original title is restored.
        </p>
      </>
    ),
    $p1: "The hook returns an array with the current title and a setter function. Switch between tabs above to see different use cases including counters, notifications, timers, and status indicators.",
    consideration: (
      <ol>
        <li>The document title is a global resource. Multiple components using this hook may conflict with each other.</li>
        <li>The hook uses MutationObserver which has good browser support but may not work in very old browsers.</li>
        <li>The original title is restored when the component unmounts, which may override titles set by other components.</li>
        <li>Frequent title updates (e.g., every second) may impact performance on low-end devices.</li>
      </ol>
    ),
    $best: <ul>
      <li>Use descriptive titles that reflect the current page state or content.</li>
      <li>For notification counts, use format like <code>(3) New Messages</code> to draw attention.</li>
      <li>Avoid updating the title too frequently (more than once per second) to prevent performance issues.</li>
      <li>Place the hook at the top level of your component for consistent behavior.</li>
      <li>For timers or counters, consider using <code>useEffect</code> to sync the title with state changes.</li>
      <li>Keep titles concise - browser tabs have limited space for displaying titles.</li>
    </ul>,
    $faqs: <ul>
      <li><strong>Q: Will the original title be restored when the component unmounts?</strong><br />A: Yes, the hook automatically restores the original document title when the component unmounts.</li>
      <li><strong>Q: Can this hook detect title changes made by other components?</strong><br />A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes.</li>
      <li><strong>Q: What happens if multiple components use this hook?</strong><br />A: They may conflict with each other since the document title is global. Consider using only one instance or coordinating between components.</li>
      <li><strong>Q: Does this work in all browsers?</strong><br />A: Yes, MutationObserver is supported in all modern browsers. For older browsers, the hook will still work but won't detect external changes.</li>
      <li><strong>Q: Can I use this for SEO?</strong><br />A: This hook changes the title dynamically on the client side. For SEO, set the initial title in your HTML or use server-side rendering.</li>
    </ul>,
    $apis: {
      generics: (<></>),
      params: {
        initialTitle: "Optional initial title to set when the component mounts. If not provided, uses the current document title.",
      },
      return: {
        "[0] title": "The current document title (reactive to external changes).",
        "[1] setTitle": "Function to update the document title. Signature: (title: string) => void",
      },
    },
  },

  usePromise: {
    desc: "A Hook for running promises with request state, cancellation, and lifecycle callbacks.",
    detail: (
      <>
        <p>
          <code>usePromise</code> executes an asynchronous function and exposes its current status, data, and error.
          It starts once on mount and can be executed again with the returned function.
        </p>
        <p>
          Starting a new request aborts the previous request, preventing stale results from replacing the active state.
        </p>
      </>
    ),
    $p1: "Use the controls to retry the request or abort it while it is pending.",
    consideration: (
      <ol>
        <Li>Set the dependency list when the promise should re-run for changing inputs.</Li>
        <Li>Handle rejected promises with the returned error or onReject callback.</Li>
        <Li>Use abort for cancellation; an aborted request does not update the state.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Keep promise creation inside the promise function so each execution gets a fresh request.</Li>
        <Li>Use onFinally for cleanup that should run after the active request settles.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: What is the initial status?
        </Li>
        <Li>
          <strong>A</strong>: It is idle until the effect starts the first request, then it becomes pending.
        </Li>
        <Li>
          <strong>Q</strong>: What happens when execute is called twice?
        </Li>
        <Li>
          <strong>A</strong>: The previous request is aborted and only the latest request may update the state.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useFetch: {
    desc: "A Hook for fetching JSON data with loading, error, cancellation, and lifecycle state.",
    detail: (
      <>
        <p>
          <code>useFetch</code> starts a request for the supplied URL and parses the response as JSON. It returns the
          latest data together with loading and error state.
        </p>
        <p>Requests are aborted automatically when the URL or dependencies change, or when the component unmounts.</p>
      </>
    ),
    $p1: "This example loads the app manifest and renders the response after the request completes.",
    consideration: (
      <ol>
        <Li>Only successful HTTP responses are parsed; non-2xx responses are returned through error.</Li>
        <Li>Use deps for values that affect the request but are not part of the URL string.</Li>
        <Li>Do not assume data exists while loading or after an error.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use a stable options object or keep changing request values in deps.</Li>
        <Li>Use onFinally for request-level cleanup that must run after success or failure.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Does useFetch parse arbitrary response bodies?
        </Li>
        <Li>
          <strong>A</strong>: It parses successful responses with response.json(). Use another Hook for a different body format.
        </Li>
        <Li>
          <strong>Q</strong>: What happens when the component unmounts?
        </Li>
        <Li>
          <strong>A</strong>: The active request is aborted and cannot update state afterward.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useForceUpdate: {
    desc: "A Hook that requests a render without changing a state value.",
    detail: (
      <>
        <p>
          <code>useForceUpdate</code> returns a stable function that increments an internal counter to schedule a
          render. It is useful when an external mutable resource changes outside React state.
        </p>
        <p>Prefer ordinary state updates when the value belongs to the component's data model.</p>
      </>
    ),
    $p1: "Update state when the value changes, or call forceUpdate when an external value changes without a setter.",
    consideration: (
      <ol>
        <Li>Force rendering does not make mutable data reactive; the component must read the latest value during render.</Li>
        <Li>Do not use this Hook as a replacement for state when React state can represent the value.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use it at integration boundaries such as imperative widgets or external stores.</Li>
        <Li>Keep the callback side-effect free with respect to rendering.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Does forceUpdate change a state value?
        </Li>
        <Li>
          <strong>A</strong>: It increments an internal counter only to schedule a render; it does not expose that counter.
        </Li>
        <Li>
          <strong>Q</strong>: When should I use useState instead?
        </Li>
        <Li>
          <strong>A</strong>: Use useState whenever the changing value is part of the component's data or UI state.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {},
      return: {},
    },
  },

  useFavicon: {
    desc: "A React Hook for dynamically setting the page favicon with optional badge support.",
    detail: (
      <>
        <p>
          <code>useFavicon</code> allows you to dynamically change the favicon of your page and add badges to it.
          It supports multiple use cases including notification counters, status indicators, and custom badges.
        </p>
        <p>
          The hook provides a simple API with function overloading: you can pass just a URL for basic usage,
          or pass a number/string for quick badge creation, or use the full options object for complete control.
        </p>
      </>
    ),
    $p1: "The hook supports three usage patterns: basic (just URL), shorthand (URL + badge content), and full configuration (URL + options object). Switch between tabs above to see different examples.",
    consideration: (
      <ol>
        <li>The favicon is a global resource - only one can be displayed at a time. If multiple components use this hook simultaneously, they will conflict.</li>
        <li>Badge rendering uses canvas, which may have CORS restrictions for cross-origin images. Use same-origin images when possible.</li>
        <li>Numbers over 99 will automatically display as "99+" to maintain readability.</li>
        <li>The hook will remove all existing favicon elements and create a new one to avoid browser caching issues.</li>
      </ol>
    ),
    $best: <ul>
      <li>Use the shorthand syntax <code>useFavicon(url, count)</code> for simple badge counters.</li>
      <li>When count is 0, pass <code>undefined</code> or <code>void 0</code> to hide the badge instead of showing "0".</li>
      <li>Place the hook at the top level of your component, not inside conditional statements.</li>
      <li>Use same-origin images to avoid CORS issues with canvas rendering.</li>
      <li>For notification badges, use red background (<code>#ff3b30</code>) to draw attention.</li>
      <li>For status indicators, use small size (<code>size: 0.3</code>) and position at bottom-right.</li>
    </ul>,
    $faqs: <ul>
      <li><strong>Q: Can I use this without a badge?</strong><br />A: Yes, simply call <code>useFavicon(iconUrl)</code> without the second parameter.</li>
      <li><strong>Q: What happens if the icon fails to load?</strong><br />A: The hook will fallback to the original icon URL without the badge.</li>
      <li><strong>Q: Can I change the badge dynamically?</strong><br />A: Yes, the hook will update the favicon whenever the iconUrl or badge options change.</li>
      <li><strong>Q: What happens when the badge content exceeds 99?</strong><br />A: Numbers over 99 will automatically display as "99+" to maintain readability.</li>
      <li><strong>Q: Why is my badge not showing?</strong><br />A: Check if the image is from the same origin. Cross-origin images may fail due to CORS restrictions.</li>
    </ul>,
    $apis: {
      generics: (<></>),
      params: {
        iconUrl: "The URL of the favicon image.",
        badge: "Shorthand for badge content. Can be a string or number. When provided, creates a badge with default settings.",
        options: "Full configuration object for the favicon.",
        "options.badge": "Badge configuration to overlay on the favicon.",
        "options.badge.content": "The content to display in the badge. Numbers over 99 will display as '99+'.",
        "options.badge.position": "Badge position. One of: 'top-right', 'top-left', 'bottom-right', 'bottom-left'. Defaults to 'top-right'.",
        "options.badge.bgColor": "Badge background color. Defaults to '#ff3b30'.",
        "options.badge.textColor": "Badge text color. Defaults to '#fff'.",
        "options.badge.size": "Badge size as a ratio of icon size (0-1). Defaults to 0.5.",
      },
      return: {
        void: "This hook does not return any value.",
      },
    },
  },

  useClickAway: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useCookie: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useDimensions: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useHover: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useKeyPress: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useMousePosition: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useOverflow: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useRaf: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useRafState: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useScroll: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useSafeArea: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useAsyncEffect: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useDimensionsById: {
    desc: "Observe the dimensions of a DOM element selected by id.",
    detail: (
      <>
        <p><code>useDimensionsById</code> tracks an element with <code>ResizeObserver</code> and returns its width, height, top, and left values.</p>
      </>
    ),
    $p1: "The target element must exist in the document and have the supplied id.",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },

  useQrcodeScan: {
    desc: "Scan QR codes and barcodes from a camera or image file.",
    detail: (
      <>
        <p><code>useQrcodeScan</code> provides live camera scanning, image decoding, normalized result metadata, camera permission state, torch, and zoom controls.</p>
        <p>Camera access requires HTTPS or localhost. Image decoding does not request camera permission.</p>
      </>
    ),
    $p1: "Render the scanner container before calling start. Use scanImage when you only need to decode an image.",
    consideration: <ol><li>Camera permission and device availability depend on the browser and active camera.</li><li>Stop the scanner when leaving the page to release the camera.</li></ol>,
    $best: <ul><li>Handle scanner errors in the onError callback.</li><li>Check cameraCapabilities before using torch or zoom.</li></ul>,
    $faqs: <ul><li>Camera scanning requires a secure context such as HTTPS or localhost.</li></ul>,
    $apis: { generics: (<></>), params: {}, return: {} },
  },

  useInfiniteScroll: {
    desc: "A React Hook for implementing infinite scrolling with automatic load detection using IntersectionObserver.",
    detail: (
      <>
        <p>
          <code>useInfiniteScroll</code> provides a simple way to implement infinite scrolling in React
          applications. It automatically detects when a loader element becomes visible and triggers
          asynchronous data loading using the browser’s <code>IntersectionObserver</code> API.
        </p>
        <p>
          The hook manages the entire lifecycle of an infinite list: loading state, accumulated items,
          concurrency control, and viewport/container visibility detection. It also supports both
          page-level scrolling and scrollable container elements.
        </p>
        <p>
          By returning a <code>loader</code> element that must be rendered at the bottom of your list,
          the hook can observe its visibility and trigger additional data loading when users scroll
          near the end of the content.
        </p>
      </>
    ),
    $p1: "Render the returned loader element at the bottom of your list. When it enters the viewport (or container), the hook automatically triggers loadMore and appends new items.",
    consideration: (
      <ol>
        <li>
          The <code>loader</code> element must be rendered in the DOM for the observer to detect it.
          If it is conditionally hidden, infinite loading will not trigger.
        </li>
        <li>
          The <code>loadMore</code> function should be stable (e.g., wrapped with <code>useCallback</code>
          or referencing stable state) to avoid unnecessary re-observation or unexpected requests.
        </li>
        <li>
          When using <code>mode="container"</code>, ensure the container element has a fixed height
          and <code>overflow: auto</code> or <code>overflow: scroll</code> so scrolling events occur
          inside the container.
        </li>
        <li>
          The hook prevents concurrent requests internally, but your API should still be idempotent
          or safe against repeated calls in case of network retries.
        </li>
        <li>
          If the loader is already visible when mounted (for example when the list is short),
          the hook will immediately trigger loading until the viewport/container is filled.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>
          Always place the returned <code>loader</code> at the bottom of your list items so the
          observer can detect when the user reaches the end.
        </li>
        <li>
          Use <code>preloadDistance</code> (e.g., 200–400px) to start loading before the user
          actually reaches the bottom for smoother UX.
        </li>
        <li>
          When working with scrollable panels or chat-style layouts, use
          <code>mode="container"</code> with <code>containerRef</code> or <code>containerId</code>.
        </li>
        <li>
          Keep pagination state outside the hook (e.g., page or cursor) and update it inside
          <code>loadMore</code>.
        </li>
        <li>
          Use <code>reload()</code> when filters or query parameters change to restart the list
          from the beginning.
        </li>
        <li>
          Use <code>triggerLoadMore()</code> if you need to manually load more data
          (for example when a button is clicked).
        </li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is the loader not triggering?</strong>
          <br />
          A: Ensure the loader element is rendered and visible in the DOM. The observer only works
          if the element exists and can intersect with the viewport or container.
        </li>
        <li>
          <strong>Q: Can I use this with a scrollable container instead of the window?</strong>
          <br />
          A: Yes. Set <code>mode="container"</code> and provide either <code>containerRef</code> or
          <code>containerId</code>.
        </li>
        <li>
          <strong>Q: Can I manually control the loaded items?</strong>
          <br />
          A: Yes. Use the returned <code>setItems</code> function to modify the list manually.
        </li>
        <li>
          <strong>Q: How do I reset the list?</strong>
          <br />
          A: Call <code>reset()</code> to clear the items and loading state, or use
          <code>reload()</code> to reset and immediately fetch the first page again.
        </li>
        <li>
          <strong>Q: What happens if the list is shorter than the viewport?</strong>
          <br />
          A: The hook automatically triggers additional loads until the viewport or container
          becomes filled or <code>hasMore</code> becomes false.
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <>
          <p>
            <code>{"<T, C>"}</code>
          </p>
          <ul>
            <li>
              <code>T</code> — Type of items returned by <code>loadMore</code>.
            </li>
            <li>
              <code>C</code> — HTML element type used as the loader container. Defaults to{" "}
              <code>"div"</code>.
            </li>
          </ul>
        </>
      ),
      params: {
        loadMore:
          "Async function used to fetch the next batch of items. Should return an array of items or void.",
        hasMore:
          "Boolean indicating whether more data is available. When false, loading stops permanently.",
        loader:
          "Custom loading indicator. Can be a ReactNode or a function returning a ReactNode.",
        component:
          "HTML element type used as the wrapper for the loader element. Defaults to 'div'.",
        props:
          "Props passed to the loader container element.",
        preloadDistance:
          "Distance in pixels from the viewport/container bottom that triggers preloading. Defaults to 200.",
        observerOptions:
          "Custom IntersectionObserver options for advanced control.",
        disabled:
          "When true, automatic loading is disabled.",
        mode:
          "Scroll detection mode. 'viewport' observes the window, 'container' observes a specific scroll container, and 'auto' chooses automatically.",
        containerId:
          "ID of the scroll container element. Takes priority when mode='container'.",
        containerRef:
          "Ref to the scroll container element when mode='container'. Used if containerId is not provided.",
      },
      return: {
        loader:
          "React element that must be rendered at the end of the list to trigger loading when it becomes visible.",
        loading:
          "Boolean indicating whether a request is currently in progress.",
        items:
          "Accumulated array of loaded items.",
        setItems:
          "State setter allowing manual modification of the items array.",
        reset:
          "Clears all items and resets the loading state.",
        reload:
          "Resets the list and immediately triggers the first load.",
        triggerLoadMore:
          "Manually triggers the loadMore function.",
      },
    },
  },

  useAutoPageSize: {
    desc: "",
    detail: (
      <>
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
      </ol>
    ),
    $best: <ul></ul>,
    $faqs: <ul></ul>,
    $apis: {
      generics: (<></>),
      params: {},
      return: {},
    },
  },
  __end: "end of locale mappings, please do not delete this line",
} as const;

export default locale_en;
