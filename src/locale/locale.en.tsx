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
    $p1: "Pass an object and a property path or getter, then change the source value to see the callback and returned value update.",
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
        <Li>Use an array path when keys may contain dots or when strict path handling is important.</Li>
        <Li>Use a getter for derived values that cannot be expressed as a property path.</Li>
        <Li>Keep the watched object and callback references stable when possible.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Can I watch a nested property?
        </Li>
        <Li>
          <strong>A</strong>: Yes. Pass a string path, an array path, or a getter function.
        </Li>
        <Li>
          <strong>Q</strong>: What does immediate do?
        </Li>
        <Li>
          <strong>A</strong>: It invokes the callback once on mount with the current value and previous value.
        </Li>
        <Li>
          <strong>Q</strong>: What does the Hook return?
        </Li>
        <Li>
          <strong>A</strong>: It returns the value resolved from the path or getter, or undefined when it cannot be resolved.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>V</strong>: Resolved value type.
          </li>
          <li>
            <strong>T</strong>: Watched object type.
          </li>
          <li>
            <strong>P</strong>: Property path type.
          </li>
        </ul>
      ),
      params: {
        object: "Object whose property or derived value is watched.",
        path: "String/array property path or getter function used to resolve the value.",
        callback: "Optional callback receiving the new and old values.",
        configOrStrict: "Optional Config object or strict boolean.",
        immediate: "Optional positional flag that invokes the callback on mount.",
      },
      return: {
        value: "Current value resolved from the path or getter.",
      },
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
    desc: "Guards state updates with boolean, message, or predicate conditions.",
    detail: (
      <>
        <p>
          <code>useProtect</code> behaves like a state Hook with a guarded setter. It accepts an initial
          value followed by one or more protection conditions and returns the current value with a setter.
        </p>
        <p>
          A blocked update throws an <code>Error</code>. Boolean and string conditions provide simple
          guards, while predicate conditions can compare the current value with the proposed next value.
        </p>
      </>
    ),
    $p1: "Wrap protected updates in error handling when a rejected change should be reported in the UI.",
    consideration: (
      <ol>
        <Li><code>initialData</code> can have any application type.</Li>
        <Li>Conditions can be boolean, string, null, undefined, or a predicate function.</Li>
        <ul>
          <Li>
            <strong>boolean</strong>: when true, updates are rejected with the default protection message.
          </Li>
          <Li>
            <strong>string</strong>: a non-empty string rejects updates and becomes the error message.
          </Li>
          <Li>
            <strong>predicate</strong>: a truthy return value rejects the proposed state; a returned string
            becomes the error message.
          </Li>
        </ul>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use a predicate when the rule depends on both the old and candidate values.</li>
        <li>Catch setter errors at the interaction boundary and show actionable feedback.</li>
        <li>Use functional updates when the next value depends on the current state.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What happens when an update is blocked?</strong>
          <br />
          A: The setter throws an <code>Error</code> and the state remains unchanged.
        </li>
        <li>
          <strong>Q: Can a condition provide a custom message?</strong>
          <br />
          A: Yes. Return a non-empty string from a predicate or pass a non-empty string condition.
        </li>
        <li>
          <strong>Q: Are equal values updated?</strong>
          <br />
          A: No. The Hook uses deep equality and skips updates when the value has not changed.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the protected state type.</p>,
      params: {
        initialData: "Initial state value.",
        conditions: "Boolean, string, or predicate guards applied to updates.",
      },
      return: {
        data: "Current protected state.",
        setData: "Guarded state setter that throws when a condition rejects the update.",
      },
    },
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
      params: {
        initialValue: "Required initial value held by the Reactor instance.",
        plugins: "Optional Reactor plugins registered for actions and events.",
      },
      return: {
        ReactorInstance: "Reactor object that manages the current state.",
        value: "Current state value.",
        get: "Reads a value by path.",
        set: "Updates a value by path.",
        reset: "Restores the current value to the default value.",
        setValue: "Replaces the current value or applies a state updater.",
        setDefaultValue: "Replaces the value used by reset.",
        getDefaultValue: "Returns the current default value.",
        clone: "Creates a Reactor clone sharing the same state.",
        cloneValue: "Creates a clone of the current state value.",
        dispatch: "Invokes a registered plugin action.",
        emit: "Emits an event through the Reactor event bus.",
        on: "Registers a handler for a Reactor event.",
      },
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
    desc: "Invokes a Hook several times and returns the resulting values as an ordered array.",
    detail: (
      <>
        <p>
          <code>useBatchHooks</code> executes the same Hook for a fixed number of instances and returns
          their results in creation order. The count overload passes the same arguments to each instance;
          the array overload allows each instance to define its own arguments.
        </p>
        <p>
          It is useful for repeated ref-based or stateful Hook instances, such as creating several
          independent ripple refs for a list of controls.
        </p>
      </>
    ),
    $p1: "Keep the batch size and item order stable across renders so the underlying Hook calls remain consistent.",
    consideration: (
      <ol>
        <li>The number and order of Hook calls must remain stable across renders to follow the Rules of Hooks.</li>
        <li>Do not derive count from data that can change after mount unless the surrounding component remounts.</li>
        <li>Every item must use the same Hook family in the count overload.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the count overload for identical arguments and the item-array overload for per-instance arguments.</li>
        <li>Map the returned values by index to the same stable list of rendered elements.</li>
        <li>Use a key at the rendered element level when displaying the returned results.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Can the count change dynamically?</strong>
          <br />
          A: It should remain stable for the component lifetime. Changing Hook call count can violate the Rules of Hooks.
        </li>
        <li>
          <strong>Q: Can each Hook instance receive different arguments?</strong>
          <br />
          A: Yes. Use the array overload with <code>{`{ hook, args }`}</code> items.
        </li>
        <li>
          <strong>Q: What does the result array contain?</strong>
          <br />
          A: It contains each Hook's return value in the same order as the batch definitions.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<Hook>"}</code> is the batched Hook function type.</p>,
      params: {
        hook: "Hook function invoked for each batch item.",
        count: "Number of Hook instances in the shared-argument overload.",
        args: "Arguments passed to every instance.",
        hooks: "Per-instance Hook and argument definitions in the array overload.",
      },
      return: {
        results: "Return values from the Hook instances in order.",
      },
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
    desc: "Creates a namespaced event emitter for publishing and subscribing to events across components.",
    detail: (
      <>
        <p>
          <code>useEmitter</code> returns an emitter with <code>emit</code>, <code>subscribe</code>,
          <code>unsubscribe</code>, and <code>unsubscribeAll</code> methods. Emitters can communicate
          through a shared namespace without requiring a prop chain.
        </p>
        <p>
          The Hook supports a configuration object or positional arguments for registering an initial
          event listener. Listeners owned by the component are removed automatically on unmount.
        </p>
      </>
    ),
    $p1: "Use the same namespace and event name in separate components when they should exchange an event.",
    consideration: (
      <ol>
        <li>Use unique emitter names within a namespace so listener keys do not collide.</li>
        <li>Unsubscribe listeners that were registered manually when their component no longer needs them.</li>
        <li>Keep event payloads documented and stable because the emitter does not validate their shape.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use namespaces to isolate feature-level events with common names.</li>
        <li>Prefer the configuration object when an emitter has more than one option.</li>
        <li>Use <code>unsubscribeAll</code> when a component owns several subscriptions to the same emitter.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Can components communicate without sharing an emitter instance?</strong>
          <br />
          A: Yes. Use the same event name and namespace; the Hook uses a shared listener registry.
        </li>
        <li>
          <strong>Q: What happens when an emitter component unmounts?</strong>
          <br />
          A: Its registered listeners are removed automatically.
        </li>
        <li>
          <strong>Q: Can I pass multiple event arguments?</strong>
          <br />
          A: Yes. Pass additional arguments to <code>emit</code>; the listener receives them in the same order.
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        nameOrConfig: "Emitter name or partial configuration object.",
        initialEventName: "Optional initial event name for the positional overload.",
        initialListener: "Optional listener registered for the initial event.",
        config: "Optional partial emitter configuration.",
      },
      return: {
        name: "Resolved emitter name.",
        emit: "Publishes an event to listeners in the same namespace.",
        subscribe: "Registers an event listener.",
        unsubscribe: "Removes this emitter's listener for one event.",
        unsubscribeAll: "Removes all listeners registered by this emitter.",
      },
    },
  },

  useReceiver: {
    desc: "Subscribes to a named event and exposes its latest arguments and listening controls.",
    detail: (
      <>
        <p>
          <code>useReceiver</code> listens for events published through the shared emitter registry. It
          returns the latest event arguments as an array and a controller for starting, stopping, and
          resetting the receiver.
        </p>
        <p>
          Use the string overload for a simple event name, or the options overload when the receiver
          needs a stable name, namespace, or callback.
        </p>
      </>
    ),
    $p1: "Use the same event name and namespace in useEmitter and useReceiver so the receiver can receive the emitted payload.",
    consideration: (
      <ol>
        <li>Choose a unique receiver name within its namespace to avoid listener collisions.</li>
        <li>The first tuple value is <code>null</code> until the receiver receives an event.</li>
        <li>Stopping a receiver removes its subscription; call <code>start</code> to subscribe again.</li>
        <li>The receiver callback receives the same argument list passed to <code>emit</code>.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the options overload when event names or namespaces are shared across a feature.</li>
        <li>Use <code>isListening</code> to keep start and stop controls consistent with subscription state.</li>
        <li>Call <code>reset([])</code> when a view should clear its displayed event payload.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What does eventResult contain?</strong>
          <br />
          A: It contains the arguments from the most recently received event, in order.
        </li>
        <li>
          <strong>Q: How do I pause and resume receiving?</strong>
          <br />
          A: Call <code>receiver.stop()</code> to pause and <code>receiver.start()</code> to resume.
        </li>
        <li>
          <strong>Q: Is cleanup automatic?</strong>
          <br />
          A: Yes. The subscription is removed when the component unmounts.
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        eventNameOrOptions: "Event name or receiver options object.",
        callback: "Optional positional event callback.",
      },
      return: {
        eventResult: "Latest event arguments or null before the first event.",
        receiver: "Receiver control object with start, stop, reset, and isListening.",
      },
    },
  },

  useBroadcastChannel: {
    desc: "Communicates serialized messages between same-origin browser contexts with BroadcastChannel.",
    detail: (
      <>
        <p>
          <code>useBroadcastChannel</code> opens a browser <code>BroadcastChannel</code> for the supplied
          name and calls <code>messageHandler</code> when another channel instance posts a message.
          The channel is closed automatically when the component unmounts or the channel name changes.
        </p>
        <p>
          Messages are JSON-stringified by <code>postMessage</code>. The default parser reads them back
          as JSON; pass <code>false</code> to receive the serialized string or provide a custom parser.
        </p>
      </>
    ),
    $p1: "Use the same channel name in tabs, windows, workers, or Hook instances that need to exchange messages.",
    consideration: (
      <ol>
        <li>
          BroadcastChannel is same-origin and browser-dependent. It is not a replacement for a server
          connection or cross-origin messaging.
        </li>
        <li>
          A BroadcastChannel does not deliver a message back to the channel object that sent it. Use a
          second instance when a local sender also needs to observe the message.
        </li>
        <li>
          The current implementation serializes every outgoing message with <code>JSON.stringify</code>.
          Avoid values that cannot be serialized as JSON.
        </li>
        <li>
          Keep the message handler stable with <code>useCallback</code> when possible to avoid reopening
          the channel on every render.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use a feature-specific channel name to avoid unrelated message collisions.</li>
        <li>Define a small, versioned message shape for long-lived channels.</li>
        <li>Close or let the Hook clean up channels when the receiving UI is no longer active.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why did the sender not receive its own message?</strong>
          <br />
          A: BroadcastChannel excludes the sending channel object from delivery. Open another instance
          if the sender also needs to display the message.
        </li>
        <li>
          <strong>Q: Can I send an object?</strong>
          <br />
          A: Yes, as long as it can be serialized by <code>JSON.stringify</code>.
        </li>
        <li>
          <strong>Q: Does unmount close the channel?</strong>
          <br />
          A: Yes. The Hook calls <code>close()</code> during cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T>"}</code> is the application message type.
        </p>
      ),
      params: {
        channelName: "Same-origin channel name.",
        messageHandler: "Callback for messages received from another channel instance.",
        parser: "JSON parsing flag or custom parser for serialized messages.",
      },
      return: {
        postMessage: "Function that serializes and posts a message.",
      },
    },
  },

  useReflect: {
    desc: "Keeps an object in a ref while exposing reactive Reflect-based access and mutation helpers.",
    detail: (
      <>
        <p>
          <code>useReflect</code> stores an object without replacing the object reference on every
          mutation. Its <code>get</code>, <code>set</code>, <code>has</code>, and <code>apply</code>
          methods use JavaScript reflection and force a React render after mutations.
        </p>
        <p>
          This is useful for small mutable object models that need imperative updates while still
          notifying the component when their visible values change.
        </p>
      </>
    ),
    $p1: "Use get for reads during render and set or apply for mutations that should trigger a rerender.",
    consideration: (
      <ol>
        <li>The stored object is mutated in place; do not assume set returns a new object reference.</li>
        <li>Use <code>get()</code> without an argument for the full object or pass a key for one property.</li>
        <li>Prefer immutable React state when updates need predictable structural sharing or reducer history.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use <code>set</code> for a single property and <code>apply</code> for a coordinated mutation.</li>
        <li>Use <code>has</code> before reading optional or dynamically named properties.</li>
        <li>Keep the object shape stable when possible so TypeScript can infer property types.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does set trigger a React update?</strong>
          <br />
          A: Yes. The Hook forces a render after the Reflect.set operation.
        </li>
        <li>
          <strong>Q: Does get() return a copy?</strong>
          <br />
          A: No. It returns the stored object reference when no property is supplied.
        </li>
        <li>
          <strong>Q: When should I use useState instead?</strong>
          <br />
          A: Use useState when immutable updates, change history, or reducer-style transitions are more important than imperative mutation.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T extends object, K extends keyof T>"}</code></p>,
      params: {
        initialValue: "Initial object stored by the Hook.",
      },
      return: {
        get: "Reads the whole object or a selected property.",
        set: "Sets one property and triggers a render.",
        has: "Checks whether a property exists.",
        apply: "Applies a mutation callback and triggers a render.",
      },
    },
  },

  useConsoleLog: {
    desc: "Captures console.log messages in React state while preserving the original console output.",
    detail: (
      <>
        <p>
          <code>useConsoleLog</code> subscribes the component to the global <code>console.log</code>
          function and returns each captured call as a formatted string array. The original console
          implementation is still called, so browser developer tools continue to receive the log.
        </p>
        <p>
          Multiple Hook instances share one wrapper and are removed independently. When the last
          subscriber unmounts, the original console function is restored.
        </p>
      </>
    ),
    $p1: "Use the captured array for a temporary in-app diagnostic panel, not as a replacement for structured application logging.",
    consideration: (
      <ol>
        <li>The Hook observes global console output, including logs from unrelated code while subscribed.</li>
        <li>Arguments are joined with spaces and stored as strings, so original types are not preserved.</li>
        <li>Unbounded logging grows the returned array; clear or limit displayed logs at the application level.</li>
        <li>Avoid logging from the render path of a component that displays captured logs to prevent feedback loops.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it only in development tools, diagnostics, or an explicitly scoped debug view.</li>
        <li>Show a bounded slice of recent logs instead of rendering the entire array.</li>
        <li>Prefer a dedicated logger for production telemetry and structured metadata.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does useConsoleLog suppress browser logs?</strong>
          <br />
          A: No. It forwards every captured call to the original <code>console.log</code>.
        </li>
        <li>
          <strong>Q: Does it capture console.error and console.warn?</strong>
          <br />
          A: No. The current Hook wraps only <code>console.log</code>.
        </li>
        <li>
          <strong>Q: Is console.log restored on unmount?</strong>
          <br />
          A: Yes, after the final active subscriber is removed.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {},
      return: {
        logs: "Captured console.log messages formatted as strings.",
      },
    },
  },

  useSingleton: {
    desc: "Creates one stable instance for the lifetime of a component instance.",
    detail: (
      <>
        <p>
          <code>useSingleton</code> calls the supplied factory on the first render and keeps the returned
          value in a ref. Later renders return the same value without invoking the factory again.
        </p>
        <p>
          The stability is scoped to one mounted component instance. Separate component instances receive
          separate values, and the Hook does not automatically dispose an object when the component unmounts.
        </p>
      </>
    ),
    $p1: "Use the factory for expensive initialization or imperative objects that must remain stable across rerenders.",
    consideration: (
      <ol>
        <li>The factory runs during render, so keep it synchronous and free from external side effects.</li>
        <li>This Hook does not create a process-wide or application-wide singleton.</li>
        <li>Dispose resources manually with an effect cleanup when the instance owns subscriptions or connections.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it for stable clients, registries, mutable models, or other per-component imperative values.</li>
        <li>Keep the factory independent of changing props; create a new component instance when identity should change.</li>
        <li>Pair resource-owning instances with <code>useEffect</code> cleanup.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Is the instance shared by all components?</strong>
          <br />
          A: No. Each mounted component instance has its own stable value.
        </li>
        <li>
          <strong>Q: Does the factory rerun when props change?</strong>
          <br />
          A: No. It runs once for the mounted component instance.
        </li>
        <li>
          <strong>Q: Does the Hook call dispose automatically?</strong>
          <br />
          A: No. Add an effect cleanup for resources that need disposal.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the instance type.</p>,
      params: {
        createInstance: "Synchronous factory called on the first render.",
      },
      return: {
        instance: "Stable per-component instance.",
      },
    },
  },

  useMediaQuery: {
    desc: "Tracks whether a CSS media query currently matches the browser environment.",
    detail: (
      <>
        <p>
          <code>useMediaQuery</code> evaluates the supplied query with <code>window.matchMedia</code> and
          returns a boolean. It listens for media query changes and updates the result when the viewport,
          color scheme, input device, or another queried feature changes.
        </p>
        <p>
          The Hook supports the modern <code>addEventListener</code> API and the legacy
          <code>addListener</code> fallback for older browsers.
        </p>
      </>
    ),
    $p1: "Pass a stable query string and use the boolean result to select layout, behavior, or accessibility treatment.",
    consideration: (
      <ol>
        <li>The Hook reads <code>window.matchMedia</code> during initialization and requires a browser environment.</li>
        <li>Keep the query string stable unless the query itself should change.</li>
        <li>Use CSS media queries for styling-only concerns and this Hook when JavaScript behavior must change.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Reuse named query constants to avoid small string differences across components.</li>
        <li>Keep both matched and unmatched layouts accessible and functional.</li>
        <li>Use the same breakpoints as CSS to keep behavior and visual layout aligned.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does it update when the viewport changes?</strong>
          <br />
          A: Yes. The media query list emits a change event when its match status changes.
        </li>
        <li>
          <strong>Q: Can I query color scheme or reduced motion?</strong>
          <br />
          A: Yes. Any query supported by the browser's <code>matchMedia</code> implementation can be used.
        </li>
        <li>
          <strong>Q: Can I use it during server rendering?</strong>
          <br />
          A: The current implementation accesses <code>window</code> during initialization, so provide a browser-compatible environment or an SSR wrapper.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        query: "CSS media query string evaluated by matchMedia.",
      },
      return: {
        matches: "Whether the query currently matches.",
      },
    },
  },

  useNetWork: {
    desc: "Tracks browser online state and available network connection estimates.",
    detail: (
      <>
        <p>
          <code>useNetWork</code> combines <code>navigator.onLine</code> with optional Network Information
          API values such as downlink, effective type, round-trip time, and data-saving preference.
        </p>
        <p>
          It responds to online/offline events and connection changes when the browser exposes a
          connection object. Updates can be throttled to reduce rerenders during rapid network changes.
        </p>
      </>
    ),
    $p1: "Use online state for user feedback and treat connection estimates as hints rather than guarantees.",
    consideration: (
      <ol>
        <li>Network Information API fields are optional and unavailable in many browsers.</li>
        <li><code>navigator.onLine</code> indicates a network connection heuristic, not successful access to a specific server.</li>
        <li>Do not use downlink or effective type as a security or authorization signal.</li>
        <li>Use a throttle interval above approximately 17ms when frequent updates would cause unnecessary renders.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Show reconnecting or offline UI based on <code>online</code>, then verify important requests independently.</li>
        <li>Use <code>effectiveType</code> and <code>saveData</code> to choose optional quality or prefetch behavior.</li>
        <li>Handle missing fields with fallbacks because connection metadata is browser-dependent.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why are speed fields undefined?</strong>
          <br />
          A: The browser may support online events without exposing the Network Information API.
        </li>
        <li>
          <strong>Q: Does online mean the API server is reachable?</strong>
          <br />
          A: No. It is a browser connection hint; request success still needs to be checked directly.
        </li>
        <li>
          <strong>Q: What does throttleInterval control?</strong>
          <br />
          A: It limits how often the Hook updates state after network events.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        throttleInterval: "Optional minimum interval for status updates.",
      },
      return: {
        status: "Online state and optional connection estimates.",
      },
    },
  },

  useWhyDidYouUpdate: {
    desc: "Logs which values changed between renders to help diagnose unexpected updates.",
    detail: (
      <>
        <p>
          <code>useWhyDidYouUpdate</code> stores the previous props object and compares its keys with
          the current object after each render. When a value changes by reference, it logs the previous
          and next values with the supplied component name.
        </p>
        <p>
          The first render only establishes the baseline, so no diagnostic message is emitted until a
          later render contains a changed value.
        </p>
      </>
    ),
    $p1: "Use this Hook temporarily while investigating why a component rerenders or receives changing props.",
    consideration: (
      <ol>
        <li>Comparison is shallow and uses strict reference comparison, not deep equality.</li>
        <li>Do not leave verbose diagnostics enabled in production without an intentional logging strategy.</li>
        <li>Inline objects and functions appear changed whenever their parent rerenders because their references are new.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Pass the actual props or values received by the component being investigated.</li>
        <li>Use a descriptive name so console messages identify the component quickly.</li>
        <li>Combine the output with React DevTools and memoization analysis rather than treating every change as a bug.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is nothing logged on mount?</strong>
          <br />
          A: The first render establishes the previous-props baseline.
        </li>
        <li>
          <strong>Q: Does it compare nested objects deeply?</strong>
          <br />
          A: No. It compares each top-level value with strict inequality.
        </li>
        <li>
          <strong>Q: Where are changes logged?</strong>
          <br />
          A: The Hook writes a <code>[why-did-you-update]</code> message to the browser console.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        name: "Diagnostic label included in the console output.",
        props: "Current top-level values to compare.",
      },
      return: {},
    },
  },

  useEyeDropper: {
    desc: "Wraps the browser EyeDropper API for native screen color picking.",
    detail: (
      <>
        <p>
          <code>useEyeDropper</code> detects the native EyeDropper API, stores the latest selected sRGB
          hexadecimal color, and exposes an <code>open</code> action for launching the picker.
        </p>
        <p>
          The picker is experimental and must be opened from a user interaction such as a button click.
          Native cancellation, abort signals, and other picker errors are propagated through the returned
          Promise.
        </p>
      </>
    ),
    $p1: "Disable the picker button when isSupported is false and handle rejected open promises for cancellation or errors.",
    consideration: (
      <ol>
        <li>The native picker must be opened from a user gesture; calling open during an effect may be rejected.</li>
        <li>Unsupported browsers return undefined from <code>open</code> without opening a picker.</li>
        <li>The selected value is sRGB hexadecimal text and remains at the initial value until a successful pick.</li>
        <li>Use an <code>AbortSignal</code> when the surrounding interaction needs explicit cancellation.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use <code>isSupported</code> for capability-based UI and provide a fallback color input when needed.</li>
        <li>Catch rejected promises so user cancellation does not become an unhandled rejection.</li>
        <li>Use the stored <code>sRGBHex</code> value as the source for previews or color form state.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is the button disabled?</strong>
          <br />
          A: The current browser does not expose the native EyeDropper API.
        </li>
        <li>
          <strong>Q: What happens when the user presses Escape?</strong>
          <br />
          A: The native Promise rejects; catch the result if cancellation should be handled quietly.
        </li>
        <li>
          <strong>Q: Does open return a color when unsupported?</strong>
          <br />
          A: No. It resolves to undefined without opening a picker.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        options: "Optional initial color value.",
      },
      return: {
        isSupported: "Whether the native EyeDropper API is available.",
        sRGBHex: "Latest selected sRGB hexadecimal color.",
        open: "Opens the native picker and resolves with the selected result.",
      },
    },
  },

  useBattery: {
    desc: "Reads Battery Status API information and subscribes to battery changes.",
    detail: (
      <>
        <p>
          <code>useBattery</code> calls <code>navigator.getBattery()</code> and returns charging state,
          level, charging time, and discharging time once the browser resolves the BatteryManager.
        </p>
        <p>
          Optional callbacks run when the corresponding Battery Status API event changes. The Hook
          removes all listeners during cleanup, but browser support for this API is limited.
        </p>
      </>
    ),
    $p1: "Check for navigator.getBattery support before rendering the Hook and handle the initial null status while the promise resolves.",
    consideration: (
      <ol>
        <li>The Battery Status API is unavailable or restricted in many browsers.</li>
        <li>The current implementation assumes <code>navigator.getBattery()</code> exists when the Hook is rendered.</li>
        <li>Battery level and time values are estimates and can change independently of application state.</li>
        <li>Do not use battery data as a security, identity, or authorization signal.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use capability detection and provide a neutral fallback when battery data is unavailable.</li>
        <li>Use level or charging state to adjust optional work, not to block essential functionality.</li>
        <li>Keep event callbacks lightweight and stable.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is the returned value null?</strong>
          <br />
          A: The BatteryManager promise has not resolved yet; it is also the fallback state before the first update.
        </li>
        <li>
          <strong>Q: What if the browser has no getBattery method?</strong>
          <br />
          A: Do not render the Hook in that environment; show a fallback UI based on feature detection.
        </li>
        <li>
          <strong>Q: Which callbacks are supported?</strong>
          <br />
          A: Charging, level, charging-time, and discharging-time change callbacks are supported.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onChargingChange: "Optional positional charging-change callback.",
        callbacks: "Optional callbacks for charging, level, charging-time, and discharging-time changes.",
      },
      return: {
        batteryStatus: "Battery information or null while unavailable/loading.",
      },
    },
  },

  useProvide: {
    desc: "Publishes named state for other components to consume with useInject.",
    detail: (
      <>
        <p>
          <code>useProvide</code> publishes a value under a name so other components can read it with
          <a href="#/docs/useInject">useInject</a>. It uses the library event layer internally and
          broadcasts the current value whenever the provider renders with a changed state.
        </p>
        <p>
          Pass a state setter through <code>options.setState</code> when consumers should be able to
          update the provider. Use the same custom namespace in both Hooks when isolating multiple stores.
        </p>
      </>
    ),
    $p1: "Call useProvide from the component that owns the source state, then use the same name from each consumer.",
    consideration: (
      <ol>
        <li>The provider name must match the injector name exactly.</li>
        <li>Provide a setter only when consumers are intentionally allowed to change the source state.</li>
        <li>The injected value can be undefined on the first render because provider discovery is event-driven.</li>
        <li>Use a custom namespace when separate parts of the application may reuse the same provider name.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Keep the provider close to the state owner and document the value shape with TypeScript.</li>
        <li>Guard consumer rendering until the provider value is available.</li>
        <li>Pass a stable setter from <code>useState</code> when exposing consumer updates.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What happens if no matching provider exists?</strong>
          <br />
          A: Injectors receive <code>undefined</code> until a provider with the same name and namespace
          becomes available.
        </li>
        <li>
          <strong>Q: Can an injector update the provider?</strong>
          <br />
          A: Only when the provider passes a setter through <code>options.setState</code>.
        </li>
        <li>
          <strong>Q: Does the provider need a React context?</strong>
          <br />
          A: No. It uses the shared emitter layer, so consumers do not need to be direct descendants.
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        name: "Unique provider name.",
        state: "Value published to matching injectors.",
        options: "Optional setter and namespace configuration.",
      },
      return: {},
    },
  },

  useInject: {
    desc: "Reads named state from a useProvide publisher and optionally exposes its setter.",
    detail: (
      <>
        <p>
          <code>useInject</code> subscribes to the provider with the supplied name and returns a tuple
          containing the current value and an optional setter. It requests the current provider value
          when the injector mounts.
        </p>
        <p>
          TypeScript generics can describe the provider namespace and value shape. Pass a callback when
          consumers need to react to provider updates without deriving that behavior from render state.
        </p>
      </>
    ),
    $p1: "Use the same name and namespace as useProvide, and handle the initial undefined value before the provider responds.",
    consideration: (
      <ol>
        <li>The injected value is undefined on the first render when the provider has not responded yet.</li>
        <li>The setter is undefined unless the provider passed options.setState.</li>
        <li>Keep the provider name and namespace consistent between both Hooks.</li>
        <li>Use the callback option for side effects and keep rendering derived from the returned value.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Declare a type map so the injected value and setter are inferred precisely.</li>
        <li>Render loading or fallback UI while the provider value is undefined.</li>
        <li>Expose a setter only for state that is intentionally shared and mutable.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is the value undefined at first?</strong>
          <br />
          A: Provider discovery happens through an effect and event exchange after the initial render.
        </li>
        <li>
          <strong>Q: When is setValue available?</strong>
          <br />
          A: Only when the matching provider passes its state setter through <code>options.setState</code>.
        </li>
        <li>
          <strong>Q: Can I use a custom namespace?</strong>
          <br />
          A: Yes. Pass the same namespace to both <code>useProvide</code> and <code>useInject</code>.
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T, N, K, V, C>"}</code> describes the namespace map, namespace, key, value, and
          callback result types.
        </p>
      ),
      params: {
        name: "Provider name to inject.",
        options: "Optional namespace and value callback.",
      },
      return: {
        value: "Current provider value or undefined before the first response.",
        setValue: "Provider state setter when one was exposed, otherwise undefined.",
      },
    },
  },

  useGuide: {
    desc: "Builds a step-by-step product guide that highlights elements and renders custom instructions.",
    detail: (
      <>
        <p>
          <code>useGuide</code> manages an ordered set of guide steps. Each step can highlight elements
          by id, display custom content, and invoke a callback when the active step changes.
        </p>
        <p>
          The Hook returns the current step index and a controller with start, stop, next, previous, and
          direct navigation methods. The exported <code>Target</code> component can register an element
          for portal-based custom guide content.
        </p>
      </>
    ),
    $p1: "Define the step list first, then call guider.start from a user action such as a help button or onboarding prompt.",
    $p2: (
      <>
        <p>
          <strong>Use the Target component when the guide content should be rendered through a portal.</strong>
          The raw approach appends a generated container to the target element, while the Target approach
          renders the content through React's portal mechanism.
        </p>
        <p>
          In the raw approach, <code>useGuide</code> creates a wrapper for each guide render and appends it
          to the matching target element.
        </p>
        <p>
          With <code>Target</code>, the target remains in the normal React tree and the guide content is
          rendered into it with <code>ReactDOM.createPortal</code>.
        </p>
        <p>
          Both approaches raise the active target above the mask. Use the configured container styles and
          class name to control the position and appearance of custom guide content.
        </p>
      </>
    ),
    consideration: (
      <ol>
        <Li>Each target id must exist in the DOM when its step becomes active.</Li>
        <Li>Target ids should be unique so the guide does not highlight an unintended element.</Li>
        <Li>Stop the guide before removing or replacing elements referenced by the active step.</Li>
        <Li>Custom render functions run outside the normal target subtree and should not assume local context providers.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          Ensure the target's parent has a position such as <code>relative</code> or <code>absolute</code>
          when custom content uses absolute positioning.
        </Li>
        <Li>
          If the parent is a scroll container, give it enough dimensions for the guide content and verify
          that the guide remains visible while the user scrolls.
        </Li>
        <Li>
          Avoid <code>overflow: hidden</code> on the parent when it could clip the guide content.
        </Li>
        <Li>
          If another layer has a high <code>z-index</code>, adjust the mask and container z-index values
          so the active guide remains visible.
        </Li>
        <Li>
          Account for parent padding and borders when positioning custom guide content.
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: How do I start the guide?</strong>
          <br />
          A: Call <code>guider.start()</code>; the active step changes from -1 to the first step.
        </li>
        <li>
          <strong>Q: How do I move between steps?</strong>
          <br />
          A: Use <code>next()</code>, <code>last()</code>, or <code>go(index)</code> from the returned
          guider object.
        </li>
        <li>
          <strong>Q: Why is a custom render not shown?</strong>
          <br />
          A: Ensure the target id exists in the DOM and that the render id matches the current step's
          target id. For the Target approach, render the exported <code>Target</code> component with the
          same id and guider.
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        steps: "Ordered guide steps with target ids and optional custom renders.",
        callback: "Optional callback invoked with the active step index and step configuration.",
        config: "Optional container and mask configuration.",
      },
      return: {
        step: "Current step index; -1 means the guide is stopped.",
        guider: "Controller with navigation and Target registration methods.",
      },
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
      params: {
        target: "Reactor instance whose state changes should be observed.",
        callback: "Listener invoked with the current Reactor state.",
        immediate: "Whether to invoke the callback immediately with the current value.",
      },
      return: {
        value: "void; the listener is removed automatically when the component unmounts or the target changes.",
      },
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
    $p1: "The demo starts a one-second ticker. Use pause, resume, reset, and delayed controls to observe its tick count and status.",
    consideration: (
      <ol>
        <li>when immediate is true, only the first resume will call the callback immediately.</li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use pause and resume to control work that should run on a schedule.</Li>
        <Li>Use reset when the tick count belongs to a new logical task.</Li>
        <Li>Keep the callback lightweight because it runs from a timer.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: What is the default duration?
        </Li>
        <Li>
          <strong>A</strong>: The default duration is 1000 milliseconds.
        </Li>
        <Li>
          <strong>Q</strong>: What does immediate control?
        </Li>
        <Li>
          <strong>A</strong>: It controls whether the callback runs on mount, on ticks, on every start, or not immediately.
        </Li>
        <Li>
          <strong>Q</strong>: Does reset pause the ticker?
        </Li>
        <Li>
          <strong>A</strong>: No. Reset sets the tick count to zero; call pause separately when needed.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        fn: "Callback invoked with the next tick number.",
        durationOrOptions: "Optional duration in milliseconds or a TickerOptions object.",
        options: "Optional ticker configuration used with a duration argument.",
      },
      return: {
        tick: "Current tick count.",
        status: "Whether the ticker is on or off.",
        resume: "Resumes the ticker.",
        pause: "Pauses the ticker.",
        reset: "Resets the tick count to zero.",
        delayedPause: "Pauses the ticker after the specified delay.",
        delayedResume: "Resumes the ticker after the specified delay.",
      },
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
      params: {
        fn: "Function whose calls should be delayed.",
        delay: "Delay in milliseconds; defaults to 200.",
        immediate: "Whether the first call in a burst runs immediately.",
        callback: "Optional callback invoked with the wrapped function result.",
      },
      return: {
        debounceFn: "Debounced function that returns a Promise and exposes cancel().",
        cancel: "Cancels the pending invocation and clears the debounce window.",
      },
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
      params: {
        initial: "Initial object converted into the Map state.",
      },
      return: {
        map: "Readonly Map containing the current state.",
        get: "Returns a value by key.",
        set: "Updates one key or merges/replaces the Map using the supported overloads.",
        del: "Deletes a property by key.",
        add: "Adds a property to the Map.",
      },
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
      params: {
        initial: "Optional one-level record used as the initial state.",
      },
      return: {
        state: "The current record state.",
        setRecord: "Updates one field or replaces/merges the record using rehydrate or override mode.",
        get: "Returns the value stored under a record key.",
      },
    },
  },

  useResize: {
    desc: "Tracks window or element dimensions and notifies the component when the size changes.",
    detail: (
      <>
        <p>
          <code>useResize</code> measures the browser window when no target is supplied. With a target
          id or ref, it observes that element with <code>ResizeObserver</code> and returns its client width
          and height.
        </p>
        <p>
          An optional callback receives the same size object. The dependency list controls when the
          listener or observer is created again, so include changing target or callback values when needed.
        </p>
      </>
    ),
    $p1: "Omit target to track the window; resize the browser to see the returned width and height change.",
    $h2: "Observe an element",
    $p2: "Pass an element id or ref to observe its size; change the demo sliders to see ResizeObserver updates.",
    consideration: (
      <ol>
        <li>Without a target, the Hook listens to window resize events.</li>
        <li>With a target, the Hook observes the element and does not use window resize directly.</li>
        <li>Include changing target, callback, or configuration values in deps when the effect should be recreated.</li>
        <li>The initial value is zero until the first measurement is performed.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the callback for side effects and the returned size for rendered layout state.</li>
        <li>Use a stable ref and callback to avoid unnecessary observer recreation.</li>
        <li>Prefer CSS for styling-only responsive behavior and use this Hook when JavaScript needs the dimensions.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What does useResize observe by default?</strong>
          <br />
          A: It observes the browser window when <code>target</code> is omitted.
        </li>
        <li>
          <strong>Q: Can I observe an element by id?</strong>
          <br />
          A: Yes. Pass its id string, or pass a ref object for a directly rendered element.
        </li>
        <li>
          <strong>Q: Why does changing target not switch the observer?</strong>
          <br />
          A: The effect follows <code>deps</code>; include the target identity or a related value when it should be recreated.
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        options: "Optional callback and window or element target.",
        deps: "Dependency list controlling listener or observer recreation.",
      },
      return: {
        size: "Current width and height of the selected target.",
      },
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
        <Li>Use throttling for frequent events such as scrolling, dragging, and repeated button clicks.</Li>
        <Li>Use leading for immediate feedback and trailing when the final event must be processed.</Li>
        <Li>Call cancel when pending trailing work should be discarded.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: How is throttling different from debouncing?
        </Li>
        <Li>
          <strong>A</strong>: Throttling limits execution to at most once per interval, while debouncing waits for calls to stop.
        </Li>
        <Li>
          <strong>Q</strong>: Can both leading and trailing be false?
        </Li>
        <Li>
          <strong>A</strong>: No. At least one edge must be enabled.
        </Li>
        <Li>
          <strong>Q</strong>: How do I cancel a pending trailing call?
        </Li>
        <Li>
          <strong>A</strong>: Call the returned function's cancel method.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        fn: "Function whose calls should be throttled.",
        interval: "Minimum interval between executions in milliseconds; defaults to 200.",
        options: "Controls leading, trailing, and result callback behavior.",
      },
      return: {
        throttleFn: "Throttled function that returns a Promise and exposes cancel().",
        cancel: "Cancels a pending trailing invocation and resets the throttle window.",
      },
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
        <Li>Use a getter for derived values that should be observed without manually wiring dependencies.</Li>
        <Li>Return updater as true when an external change must be checked immediately.</Li>
        <Li>Keep the getter inexpensive because it is evaluated on every animation frame.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: How often is the getter evaluated?
        </Li>
        <Li>
          <strong>A</strong>: The Hook evaluates it on animation frames and notifies the callback when the result changes.
        </Li>
        <Li>
          <strong>Q</strong>: What does updater change?
        </Li>
        <Li>
          <strong>A</strong>: With updater true, the Hook returns [value, update] so you can trigger an immediate check.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        getter: "Function that returns the value to watch.",
        callback: "Optional callback invoked when the getter result changes.",
        updater: "Whether to return a manual update function with the value.",
      },
      return: {
        value: "Current getter result when updater is false.",
        tuple: "[value, update] when updater is true.",
        update: "Manually evaluates the getter and updates the returned value when it changed.",
      },
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
      params: {
        promiseFn: "Function that creates the Promise to execute.",
        callbacksOrDeps: "Optional lifecycle callbacks object or dependency list.",
        deps: "Dependencies that trigger a new execution.",
      },
      return: {
        state: "Current status, resolved data, and error.",
        abort: "Aborts the active request and ignores its result.",
        execute: "Starts a new request and aborts any previous request.",
      },
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
      params: {
        steps: "Ordered guide steps containing target ids and optional custom render definitions.",
        callback: "Called with the active step index and step configuration when the step changes.",
        config: "Optional custom container and mask configuration.",
      },
      return: {
        step: "Current step index; -1 means the guide is stopped.",
        guider: "Controller with navigation methods and Target registration helpers.",
      },
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
      params: {
        callback: "Optional callback invoked with the previous render counter.",
      },
      return: {
        forceUpdate: "Schedules a render without changing application state.",
      },
    },
  },

  useForm: {
    desc: "A Hook for describing form fields, validating values, and reading or resetting form data.",
    detail: (
      <>
        <p>
          <code>useForm</code> connects a form element to a field schema. The schema can mark fields as required,
          provide asynchronous validators, and update React state through field setters.
        </p>
        <p>Its submit helper prevents the browser default and invokes the handler only when validation succeeds.</p>
      </>
    ),
    $p1: "Enter a name and submit the form. An empty required field is rejected before the submit handler runs.",
    consideration: (
      <ol>
        <Li>Attach the returned form handler to the form's onSubmit event.</Li>
        <Li>Every field that should be read must have a matching name attribute in the form.</Li>
        <Li>Validators should resolve with an error message or undefined, rather than throw for normal validation failures.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Keep the schema aligned with the form controls and use setter callbacks for controlled state.</Li>
        <Li>Pass a field list to onSubmit when only part of a form should be validated.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Does useForm render inputs for me?
        </Li>
        <Li>
          <strong>A</strong>: No. It coordinates an existing form element and its controls.
        </Li>
        <Li>
          <strong>Q</strong>: What happens when a validator returns a string?
        </Li>
        <Li>
          <strong>A</strong>: The field is invalid and the message is reported through the existing warning channel.
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        schema: "Field values, required flags, validators, and optional setters.",
        formRef: "Ref pointing to the form whose FormData should be read.",
      },
      return: {
        onSubmit: "Creates a submit handler that validates selected fields before invoking the handler.",
        get: "Reads one field value from the form.",
        gets: "Reads selected or all field values from the form.",
        set: "Writes a value through the field setter configured in the schema.",
        sets: "Writes multiple values through configured field setters.",
        validate: "Validates one field, including required and custom validator checks.",
        validates: "Validates selected or all fields and resolves to a boolean.",
        reset: "Clears selected fields or all configured fields.",
      },
    },
  },

  useLazy: {
    desc: "A Hook for loading an asynchronous value once and exposing its loading and error state.",
    detail: (
      <>
        <p>
          <code>useLazy</code> runs an asynchronous loader after the component mounts. It is useful for deferred
          imports, optional feature data, and other resources that should not be loaded before the component needs them.
        </p>
        <p>The loader result is stored as module, while failures are exposed through error.</p>
      </>
    ),
    $p1: "The example delays a value to make the loading state visible before the module is rendered.",
    consideration: (
      <ol>
        <Li>The loader runs once for each mounted Hook instance.</Li>
        <Li>Keep the loader free of state updates that depend on an unmounted component.</Li>
        <Li>Render a fallback for both loading and error states before reading module.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use dynamic import for code splitting so the loaded module is actually deferred.</Li>
        <Li>Keep the loaded value small or expose a focused feature API from the imported module.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Does useLazy retry automatically?
        </Li>
        <Li>
          <strong>A</strong>: No. It runs the loader once; mount a new instance if a fresh attempt is needed.</Li>
        <Li>
          <strong>Q</strong>: What happens when the component unmounts during loading?
        </Li>
        <Li>
          <strong>A</strong>: The Hook ignores the result and does not update state after unmount.</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        importFunction: "Function that loads or creates the value on mount.",
      },
      return: {
        module: "Resolved value, or null while loading or after failure.",
        loading: "Whether the load operation is pending.",
        error: "Loading error, or null when no error occurred.",
      },
    },
  },

  useLazyImg: {
    desc: "A Hook for preloading an image and exposing fallback sources and load status.",
    detail: (
      <>
        <p>
          <code>useLazyImg</code> preloads an image with the browser's <code>Image</code> object and returns its current
          source as a string-like value.
        </p>
        <p>Before the image resolves it can use defaultSrc; when loading fails it can switch to errorSrc.</p>
      </>
    ),
    $p1: "The returned value includes loaded and error flags so the UI can show the appropriate state.",
    consideration: (
      <ol>
        <Li>Use String(image) when passing the returned string-like value to an img src prop.</Li>
        <Li>Provide a defaultSrc or errorSrc when a broken or empty image source would be visible to users.</Li>
        <Li>Use onLoad and onError for side effects, not for rendering the image itself.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use a small placeholder to avoid layout shifts while the real image loads.</Li>
        <Li>Keep errorSrc local and reliable so a failed primary image does not create another broken request.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: What does the returned loaded flag mean?
        </Li>
        <Li>
          <strong>A</strong>: It is true after the browser image has loaded successfully and false otherwise.</Li>
        <Li>
          <strong>Q</strong>: Can I pass positional fallback arguments?
        </Li>
        <Li>
          <strong>A</strong>: Yes. The Hook supports both an options object and positional overloads.</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        src: "Image URL or an options object containing the source and fallbacks.",
        defaultSrc: "Image shown before loading completes.",
        errorSrc: "Image shown when loading fails.",
        actions: "Optional onLoad and onError callbacks.",
      },
      return: {
        image: "Current image source with loaded and error status flags.",
        loaded: "Whether the image loaded successfully.",
        error: "Whether loading failed.",
      },
    },
  },

  useMixRef: {
    desc: "A Hook that combines object and callback refs into one callback ref.",
    detail: (
      <>
        <p>
          <code>useMixRef</code> creates one ref callback that forwards the mounted element to every ref in an array.
          This lets a component expose the same DOM node to local state, a parent, and an imperative integration.
        </p>
        <p>When the node is removed, each callback or mutable ref receives null.</p>
      </>
    ),
    $p1: "The example writes the same element to both an object ref and a callback ref.",
    consideration: (
      <ol>
        <Li>Keep the refs array stable when possible so the returned callback does not change unnecessarily.</Li>
        <Li>Only include refs that are allowed to receive the element type.</Li>
        <Li>Handle null in callback refs because React calls them during unmount.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Use useMixRef at component boundaries where multiple owners need the same DOM node.</Li>
        <Li>Prefer a normal useRef when there is only one consumer.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Can the array contain callback refs?
        </Li>
        <Li>
          <strong>A</strong>: Yes. Callback refs are invoked with the node and later with null on cleanup.</Li>
        <Li>
          <strong>Q</strong>: Does it clone or wrap the element?
        </Li>
        <Li>
          <strong>A</strong>: No. It only returns a ref callback to attach to the existing element.</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        refs: "Array of object refs, callback refs, or null values that receive the element.",
      },
      return: {
        mixedRef: "Callback ref that assigns each mounted or unmounted node to every supplied ref.",
      },
    },
  },

  useLocalStorage: {
    desc: "A Hook for synchronizing a typed value with browser localStorage.",
    detail: (
      <>
        <p>
          <code>useLocalStorage</code> reads a JSON value from localStorage and returns it with a setter. Updating the
          value persists it and dispatches a storage event so other Hook instances using the same key can synchronize.
        </p>
        <p>If stored data cannot be parsed, the Hook falls back to initialValue.</p>
      </>
    ),
    $p1: "Save a value, refresh the page, or open another tab to observe persistence and synchronization.",
    consideration: (
      <ol>
        <Li>Use a stable key for the same logical value across component instances.</Li>
        <Li>Only store values that can be serialized with JSON.</Li>
        <Li>localStorage is browser-only and can fail in private or restricted browsing contexts.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Namespace keys by feature to avoid collisions with unrelated application code.</Li>
        <Li>Keep persisted data small and validate important data after parsing.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Are objects and arrays supported?
        </Li>
        <Li>
          <strong>A</strong>: Yes. They are serialized with JSON.stringify and parsed on read.</Li>
        <Li>
          <strong>Q</strong>: Does changing localStorage elsewhere update the Hook?
        </Li>
        <Li>
          <strong>A</strong>: Yes, when the storage event has the same key.</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        key: "localStorage key used to persist the value.",
        initialValue: "Fallback value used when the key does not contain valid JSON.",
      },
      return: {
        storedValue: "Current parsed localStorage value.",
        setValue: "Serializes and stores a new value, then dispatches synchronization events.",
      },
    },
  },

  useIndexDB: {
    desc: "A Hook for opening an IndexedDB database and managing its lifecycle.",
    detail: (
      <>
        <p>
          <code>useIndexDB</code> opens an IndexedDB database and exposes the connection after it succeeds. The
          upgrade callback is the place to create object stores and indexes when the schema version changes.
        </p>
        <p>The connection is closed automatically when the component unmounts or the database identity changes.</p>
      </>
    ),
    $p1: "The example creates a notes object store during the first schema upgrade and reports the connection state.",
    consideration: (
      <ol>
        <Li>Increase version when changing stores or indexes so IndexedDB enters the upgrade transaction.</Li>
        <Li>Do not perform long-running asynchronous work inside upgradeCallback.</Li>
        <Li>Check error before using db because IndexedDB may be unavailable or blocked.</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>Keep database names and store names stable across application versions.</Li>
        <Li>Close or release application-level transactions after each operation.</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: When is upgradeCallback called?
        </Li>
        <Li>
          <strong>A</strong>: It runs when the requested version is newer than the existing database version.</Li>
        <Li>
          <strong>Q</strong>: Does the Hook provide CRUD helpers?
        </Li>
        <Li>
          <strong>A</strong>: No. It returns the native IDBDatabase so you can use IndexedDB transactions directly.</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        dbName: "IndexedDB database name.",
        version: "Database schema version.",
        upgradeCallback: "Callback invoked during an upgrade to create object stores and indexes.",
      },
      return: {
        db: "Opened database connection, or null while opening or after failure.",
        error: "IndexedDB opening error, or null.",
      },
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
    desc: "Calls a callback when a mousedown occurs outside an element referenced by the Hook.",
    detail: (
      <>
        <p>
          <code>useClickAway</code> returns a ref that defines an inside region. It listens on the
          document and invokes <code>onClickAway</code> when the event target is not contained by that
          region.
        </p>
        <p>
          The document listener is removed automatically during cleanup. This makes the Hook useful for
          dismissing menus, popovers, dialogs, and temporary panels.
        </p>
      </>
    ),
    $p1: "Attach the returned ref to the complete interactive region that should remain open for inside clicks.",
    consideration: (
      <ol>
        <li>The Hook listens to <code>mousedown</code>, not click or touch events.</li>
        <li>Use <code>useCallback</code> for a stable callback when the surrounding component rerenders frequently.</li>
        <li>The callback is not invoked when the event target is contained by the referenced element.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Attach the ref to the outermost element that belongs to the open region.</li>
        <li>Use the callback to close or reset transient UI state.</li>
        <li>Keep controls that reopen the region outside the region when appropriate.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Which event triggers the callback?</strong>
          <br />
          A: A document-level <code>mousedown</code> event whose target is outside the referenced element.
        </li>
        <li>
          <strong>Q: Can I include multiple elements inside the region?</strong>
          <br />
          A: Yes. Attach the ref to their common containing element.
        </li>
        <li>
          <strong>Q: Does the Hook remove its listener?</strong>
          <br />
          A: Yes. The document listener is removed when the effect cleans up.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onClickAway: "Callback invoked for an outside mousedown event.",
      },
      return: {
        ref: "Ref to attach to the inside region element.",
      },
    },
  },

  useCookie: {
    desc: "Reads and writes a URL-encoded browser cookie through React state.",
    detail: (
      <>
        <p>
          <code>useCookie</code> reads the named cookie during initialization and falls back to
          <code>initialValue</code> when it is absent. Every state change writes the value back to the
          cookie with the requested expiration and a root path.
        </p>
        <p>
          Cookie names and values are URL-encoded by the Hook. The Hook is browser-only and returns the
          initial value when rendered without a document.
        </p>
      </>
    ),
    $p1: "Use the returned setter to keep the React value and browser cookie synchronized.",
    consideration: (
      <ol>
        <li>Cookies are limited in size and sent with matching requests, so do not store large or sensitive data here.</li>
        <li>The cookie uses <code>path=/</code> and does not configure Secure, SameSite, or domain attributes.</li>
        <li>Changing the cookie outside React does not update the Hook state until the component is initialized again.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use a namespaced cookie name to avoid collisions with other application features.</li>
        <li>Store preferences or small session values, not authentication secrets or large payloads.</li>
        <li>Choose an explicit expiration period that matches the data's intended lifetime.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What happens when the cookie is missing?</strong>
          <br />
          A: The Hook starts with <code>initialValue</code> and writes it during the first effect.
        </li>
        <li>
          <strong>Q: Are cookie values encoded?</strong>
          <br />
          A: Yes. The Hook uses <code>encodeURIComponent</code> when writing and decodes values when reading.
        </li>
        <li>
          <strong>Q: Can I remove a cookie with this Hook?</strong>
          <br />
          A: Set an appropriate empty value and expiration strategy, or use a dedicated cookie utility for deletion attributes.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        name: "Cookie name.",
        initialValue: "Fallback value when the cookie does not exist.",
        days: "Expiration period in days; falsy values create a session cookie.",
      },
      return: {
        value: "Current cookie value.",
        setValue: "Setter that updates state and writes the cookie.",
      },
    },
  },

  useDimensions: {
    desc: "Measures a referenced element with ResizeObserver and returns its current dimensions.",
    detail: (
      <>
        <p>
          <code>useDimensions</code> returns a ref and a dimensions object. Attach the ref to an
          element and the Hook updates width, height, top, and left whenever its content box changes.
        </p>
        <p>
          The observer is disconnected during cleanup. Dimensions start at zero until the target has
          been observed.
        </p>
      </>
    ),
    $p1: "Attach the returned ref to the element whose size should drive the layout or measurement UI.",
    consideration: (
      <ol>
        <li>The target must be rendered and measurable when the effect runs.</li>
        <li>The returned values are zero before the first ResizeObserver notification.</li>
        <li>ResizeObserver reports content-box dimensions, so padding and borders may not be included in width and height.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the dimensions to derive layout decisions instead of reading DOM geometry during render.</li>
        <li>Round or threshold values before rendering expensive visual updates.</li>
        <li>Use a stable ref attachment and avoid replacing the measured node unnecessarily.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: When do dimensions become available?</strong>
          <br />
          A: After the target is mounted and ResizeObserver delivers its first entry.
        </li>
        <li>
          <strong>Q: Does it track window resize automatically?</strong>
          <br />
          A: It tracks changes to the target element's observed size, including changes caused by layout or window resize.
        </li>
        <li>
          <strong>Q: Is the observer cleaned up?</strong>
          <br />
          A: Yes. The target is unobserved when the component unmounts.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {},
      return: {
        ref: "Ref to attach to the measured element.",
        dimensions: "Observed width, height, top, and left values.",
      },
    },
  },

  useHover: {
    desc: "Invokes a callback when the pointer enters a referenced element.",
    detail: (
      <>
        <p>
          <code>useHover</code> returns a ref that listens for <code>mouseenter</code> on the attached
          element. It calls <code>onHover</code> each time the pointer enters that element.
        </p>
        <p>
          The Hook is a notification helper rather than an <code>isHovered</code> state Hook; use CSS or
          component state when the UI needs to represent both enter and leave states.
        </p>
      </>
    ),
    $p1: "Attach the returned ref to the complete element whose mouse-enter events should trigger the callback.",
    consideration: (
      <ol>
        <li>The callback runs on <code>mouseenter</code>, not continuously while the pointer remains over the element.</li>
        <li>Use a stable callback such as <code>useCallback</code> to avoid rebinding the listener on every render.</li>
        <li>The Hook does not listen for mouseleave and does not return a hover boolean.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it for one-time enter actions such as prefetching or showing a notification.</li>
        <li>Use CSS <code>:hover</code> for styling-only hover effects.</li>
        <li>Keep the callback lightweight and idempotent when repeated enters are possible.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does it tell me whether the pointer is currently over the element?</strong>
          <br />
          A: No. It invokes a callback on enter; track state separately if needed.
        </li>
        <li>
          <strong>Q: Which event is used?</strong>
          <br />
          A: The Hook listens to <code>mouseenter</code>.
        </li>
        <li>
          <strong>Q: Is the listener removed?</strong>
          <br />
          A: Yes. It is removed when the callback or component effect is cleaned up.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onHover: "Callback invoked on mouseenter.",
      },
      return: {
        ref: "Ref to attach to the target HTMLElement.",
      },
    },
  },

  useKeyPress: {
    desc: "Tracks whether a specific keyboard key is currently pressed.",
    detail: (
      <>
        <p>
          <code>useKeyPress</code> listens to window <code>keydown</code> and <code>keyup</code> events
          and returns true while the selected <code>KeyboardEvent.key</code> value is pressed.
        </p>
        <p>
          The state resets when <code>targetKey</code> changes and the listeners are removed when the
          component unmounts.
        </p>
      </>
    ),
    $p1: "Pass the exact KeyboardEvent.key string you want to track, such as Enter, Escape, or ArrowUp.",
    consideration: (
      <ol>
        <li>The target string is compared with <code>KeyboardEvent.key</code>, not a key code or physical key location.</li>
        <li>The Hook listens on the window, so it can observe keys outside a particular input element.</li>
        <li>Use a stable target key and handle focus or editable-field behavior in the consuming component.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use semantic key names such as <code>Enter</code> and <code>Escape</code>.</li>
        <li>Combine the boolean with accessible focus and button behavior rather than replacing native keyboard support.</li>
        <li>Ignore or scope shortcuts when the user is typing in an editable control.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What value should I pass for the Enter key?</strong>
          <br />
          A: Pass <code>"Enter"</code>, matching <code>KeyboardEvent.key</code>.
        </li>
        <li>
          <strong>Q: Does it detect keyup?</strong>
          <br />
          A: Yes. Keydown sets the value true and keyup sets it false.
        </li>
        <li>
          <strong>Q: Are listeners cleaned up?</strong>
          <br />
          A: Yes. Both window listeners are removed during effect cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        targetKey: "KeyboardEvent.key string to track.",
      },
      return: {
        keyPressed: "Whether the target key is currently pressed.",
      },
    },
  },

  useMousePosition: {
    desc: "Tracks the browser window pointer coordinates from mouse movement or button presses.",
    detail: (
      <>
        <p>
          <code>useMousePosition</code> listens to a window mouse event and returns the latest client
          <code>x</code> and <code>y</code> coordinates. It uses <code>mousemove</code> by default and can
          update only when the pointer is pressed with <code>mousedown</code>.
        </p>
        <p>
          Both coordinates start as <code>null</code> until the selected event is received. The window
          listener is removed during cleanup.
        </p>
      </>
    ),
    $p1: "Choose the event frequency that matches the interaction and use the returned client coordinates for lightweight UI feedback.",
    consideration: (
      <ol>
        <li><code>mousemove</code> can fire frequently; keep dependent work lightweight.</li>
        <li>Coordinates are viewport client coordinates, not document coordinates.</li>
        <li>The initial values are null until the first selected mouse event occurs.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use <code>mousedown</code> when continuous movement tracking is unnecessary.</li>
        <li>Throttle or derive coarse values when rendering expensive pointer-driven effects.</li>
        <li>Handle null coordinates before using them in calculations.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why are coordinates null initially?</strong>
          <br />
          A: No selected mouse event has occurred yet.
        </li>
        <li>
          <strong>Q: Does it track touch or pointer events?</strong>
          <br />
          A: No. The current API supports only <code>mousemove</code> and <code>mousedown</code>.
        </li>
        <li>
          <strong>Q: Are coordinates relative to the document?</strong>
          <br />
          A: They are <code>clientX</code> and <code>clientY</code>, relative to the viewport.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        trigger: "Window mouse event: mousemove or mousedown.",
      },
      return: {
        position: "Latest client x and y pointer coordinates.",
      },
    },
  },

  useOverflow: {
    desc: "Detects whether a referenced element overflows its current offset dimensions.",
    detail: (
      <>
        <p>
          <code>useOverflow</code> returns a ref and a boolean. It compares the target's scroll width and
          height with its offset width and height during mount and after window resize events.
        </p>
        <p>
          The Hook is useful for showing truncation hints, overflow controls, or alternate layouts when
          content does not fit within a fixed region.
        </p>
      </>
    ),
    $p1: "Attach the ref to a measurable element and use isOverflowing to decide whether overflow UI should be shown.",
    consideration: (
      <ol>
        <li>The initial check runs after the target mounts and the Hook checks again on window resize.</li>
        <li>The current implementation does not observe arbitrary content or element resize mutations between window resize events.</li>
        <li>Overflow depends on the target's CSS dimensions and scroll behavior.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Set explicit dimensions or max dimensions when overflow detection should be meaningful.</li>
        <li>Use CSS <code>overflow</code> rules together with the boolean for accessible controls or labels.</li>
        <li>Trigger a window resize or use a more specialized observer when content changes independently of the viewport.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: When is overflow checked?</strong>
          <br />
          A: Once after mount and again when the window emits a resize event.
        </li>
        <li>
          <strong>Q: Does it observe every content change?</strong>
          <br />
          A: No. It does not use ResizeObserver; use one when arbitrary element size changes must be tracked.
        </li>
        <li>
          <strong>Q: What dimensions are compared?</strong>
          <br />
          A: The Hook compares scrollWidth/scrollHeight with offsetWidth/offsetHeight.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<E extends HTMLElement = HTMLElement>"}</code></p>,
      params: {},
      return: {
        ref: "Ref to attach to the measured element.",
        isOverflowing: "Whether scroll dimensions exceed offset dimensions.",
      },
    },
  },

  useRaf: {
    desc: "Runs a callback on every browser animation frame until the component unmounts.",
    detail: (
      <>
        <p>
          <code>useRaf</code> schedules a continuous <code>requestAnimationFrame</code> loop and passes
          the browser timestamp to the callback. The callback reference is updated without restarting
          the loop.
        </p>
        <p>
          The scheduled frame is cancelled automatically during cleanup, so the Hook is suitable for
          animation or continuously sampled browser values owned by a component.
        </p>
      </>
    ),
    $p1: "Use the frame timestamp to calculate elapsed time rather than assuming a fixed frame rate.",
    consideration: (
      <ol>
        <li>The callback runs approximately once per display frame and may be throttled in background tabs.</li>
        <li>Do not perform expensive work or unconditional React state updates when the frame does not change visible output.</li>
        <li>Use a ref for mutable animation bookkeeping that should not cause additional renders.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Derive animation progress from the timestamp and a start time.</li>
        <li>Keep the callback lightweight so it finishes before the next frame.</li>
        <li>Use a different observer or timer when frame-level scheduling is unnecessary.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: When does the loop stop?</strong>
          <br />
          A: It stops when the component unmounts and the pending animation frame is cancelled.
        </li>
        <li>
          <strong>Q: What does the callback timestamp represent?</strong>
          <br />
          A: It is the high-resolution timestamp supplied by <code>requestAnimationFrame</code>.
        </li>
        <li>
          <strong>Q: Does changing the callback restart the loop?</strong>
          <br />
          A: No. The Hook keeps the latest callback while retaining the same animation loop.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Frame callback receiving the browser animation timestamp.",
      },
      return: {},
    },
  },

  useRafState: {
    desc: "Schedules React state updates on the next animation frame and coalesces pending updates.",
    detail: (
      <>
        <p>
          <code>useRafState</code> returns state and a setter with the familiar React state shape. The
          setter waits for the next <code>requestAnimationFrame</code> before committing the update.
        </p>
        <p>
          If the setter is called several times before the frame runs, the pending frame is cancelled and
          replaced by the latest scheduled update. The pending frame is also cancelled on unmount.
        </p>
      </>
    ),
    $p1: "Use it when state changes should align with the browser's rendering cadence rather than commit immediately.",
    consideration: (
      <ol>
        <li>The state value does not change synchronously after calling the setter.</li>
        <li>Only the latest pending update is retained before a frame runs.</li>
        <li>Use the functional setter form when the next state depends on the previous value.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it for pointer, scroll, or animation-driven values that can be sampled once per frame.</li>
        <li>Keep the scheduled update small so the next render remains responsive.</li>
        <li>Use ordinary <code>useState</code> when immediate state visibility is required.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: When does state update?</strong>
          <br />
          A: On the next available animation frame.
        </li>
        <li>
          <strong>Q: What happens when the setter is called repeatedly?</strong>
          <br />
          A: The pending frame is cancelled and scheduled again, so only the latest pending update runs.
        </li>
        <li>
          <strong>Q: Does unmount leave a frame running?</strong>
          <br />
          A: No. The Hook cancels its pending animation frame during cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the state value type.</p>,
      params: {
        initialState: "Initial state value.",
      },
      return: {
        state: "Current state value.",
        setRafState: "Schedules a value or functional update for the next animation frame.",
      },
    },
  },

  useScroll: {
    desc: "Tracks the browser window's horizontal and vertical scroll position.",
    detail: (
      <>
        <p>
          <code>useScroll</code> listens to the window's <code>scroll</code> event and returns the latest
          <code>scrollX</code> and <code>scrollY</code> values. An optional callback receives the same
          position object after each scroll event.
        </p>
        <p>
          The listener is passive and removed during cleanup, so the Hook can safely be used by transient
          components such as headers, progress indicators, and scroll-to-top controls.
        </p>
      </>
    ),
    $p1: "Use the returned position for window-level scroll state; use an element observer when tracking a nested scroller.",
    consideration: (
      <ol>
        <li>This Hook tracks the window, not an arbitrary scrollable element.</li>
        <li>Scroll events can be frequent; keep rendering and callback work lightweight.</li>
        <li>Use a stable callback such as <code>useCallback</code> to avoid rebinding the listener on every render.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Derive coarse thresholds or progress values from the position before rendering.</li>
        <li>Use the callback for side effects and the returned position for rendered state.</li>
        <li>Use passive scroll handling and CSS where possible for purely visual effects.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does it observe a scrollable div?</strong>
          <br />
          A: No. It reads window scroll offsets; nested elements need their own event or observer strategy.
        </li>
        <li>
          <strong>Q: What are the initial values?</strong>
          <br />
          A: They are read from <code>window.scrollX</code> and <code>window.scrollY</code> during initialization.
        </li>
        <li>
          <strong>Q: Does cleanup remove the listener?</strong>
          <br />
          A: Yes. The window listener is removed when the effect cleans up.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Optional callback receiving the latest window scroll position.",
      },
      return: {
        position: "Current x and y window scroll offsets.",
      },
    },
  },

  useSafeArea: {
    desc: "Reads the device safe-area insets for notches and rounded screen edges.",
    detail: (
      <>
        <p>
          <code>useSafeArea</code> measures the browser's <code>env(safe-area-inset-*)</code> values and
          returns top, right, bottom, and left pixel insets. It is useful for padding content away from
          device cutouts and home indicators.
        </p>
        <p>
          The Hook computes once on mount and recomputes after resize or orientation changes. Resize
          updates are debounced to avoid excessive measurements.
        </p>
      </>
    ),
    $p1: "Apply the returned inset values to padding or positioning around content that must avoid device edges.",
    consideration: (
      <ol>
        <li>Values are zero on browsers or devices that do not expose safe-area insets.</li>
        <li>The Hook measures browser CSS environment values and does not detect hardware directly.</li>
        <li>Use the values as layout inputs and preserve adequate visual spacing even when all insets are zero.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Combine the inset with your design spacing instead of replacing all padding with it.</li>
        <li>Apply top and bottom insets to fixed headers, footers, and full-screen surfaces.</li>
        <li>Test orientation changes on devices with notches and home indicators.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why are all values zero on desktop?</strong>
          <br />
          A: Desktop browsers usually have no safe-area inset, so zero is the expected value.
        </li>
        <li>
          <strong>Q: Does it update on rotation?</strong>
          <br />
          A: Yes. The Hook listens for orientation changes and resize events.
        </li>
        <li>
          <strong>Q: Does it require a special browser API?</strong>
          <br />
          A: It relies on CSS environment variables and falls back to zero when they are unavailable.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {},
      return: {
        insets: "Top, right, bottom, and left safe-area inset values in pixels.",
      },
    },
  },

  useAsyncEffect: {
    desc: "Runs an asynchronous effect with dependency tracking, cleanup, error handling, and completion callbacks.",
    detail: (
      <>
        <p>
          <code>useAsyncEffect</code> runs an asynchronous function through the effect lifecycle. The
          function may resolve to a cleanup callback, which runs when dependencies change or the
          component unmounts.
        </p>
        <p>
          The Hook tracks whether the effect is still active. If an async operation finishes after the
          component has been replaced or unmounted, its resolved cleanup is invoked immediately instead
          of being retained for an inactive effect.
        </p>
      </>
    ),
    $p1: "Provide an onError handler for expected failures and keep the dependency list complete for every value used by the async effect.",
    consideration: (
      <ol>
        <li>
          The async function does not receive an AbortSignal. Abort network requests or other external
          work yourself when the underlying API supports cancellation.
        </li>
        <li>
          An effect rejection is sent to <code>onError</code> when provided. Without it, the rejection is
          rethrown from the asynchronous task.
        </li>
        <li>
          A cleanup function returned after unmount is executed immediately, so asynchronous resources
          are not left attached to an inactive component.
        </li>
        <li>
          Keep state updates behind your own cancellation or active checks when the async operation can
          finish after the component has unmounted.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Return a cleanup function for subscriptions, timers, sockets, and other resources.</li>
        <li>Use <code>onFinally</code> to stop a loading indicator regardless of success or failure.</li>
        <li>Use a dependency list that matches the inputs of the asynchronous operation.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Can the effect return a cleanup function?</strong>
          <br />
          A: Yes. Return a function from the resolved async result; it runs before reruns and on unmount.
        </li>
        <li>
          <strong>Q: What is onFinally used for?</strong>
          <br />
          A: It runs after the async function resolves or rejects and is useful for clearing loading state.
        </li>
        <li>
          <strong>Q: Does the Hook cancel the request automatically?</strong>
          <br />
          A: No. It manages effect activity and cleanup, but request cancellation must be implemented by
          the caller when supported.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        effect: "Async effect callback that may resolve to a cleanup function.",
        deps: "Dependency list controlling effect execution. Defaults to an empty list.",
        options: "Optional onError and onFinally callbacks.",
      },
      return: {},
    },
  },

  useBeforeMount: {
    desc: "Runs a callback once during the first render, before the component mounts.",
    detail: (
      <>
        <p>
          <code>useBeforeMount</code> invokes its callback synchronously during the first render and
          never invokes it again for that component instance. This can be useful for preparing a
          value that must exist before the initial markup is produced.
        </p>
        <p>
          The callback runs before React commits the component to the DOM, so it does not have access
          to mounted DOM nodes. Use <code>useEffect</code> or <code>useLayoutEffect</code> for work that
          requires a committed element.
        </p>
      </>
    ),
    $p1: "Keep the callback synchronous and render-safe; use a ref or another render-time value when the initial output depends on it.",
    consideration: (
      <ol>
        <li>
          The callback runs during render. Do not perform subscriptions, timers, network requests, or
          state updates that would trigger another render from it.
        </li>
        <li>
          React may invoke render logic more than once in development or concurrent rendering. Avoid
          relying on this Hook for one-time external side effects.
        </li>
        <li>
          DOM nodes are not mounted yet, so browser measurements and event listener registration
          belong in an effect.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it only to derive or prepare values needed by the initial render.</li>
        <li>Keep the callback idempotent so repeated render attempts remain safe.</li>
        <li>Prefer an effect when the work can happen after the component mounts.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does the callback run after the component mounts?</strong>
          <br />
          A: No. It runs during the first render, before React commits the component.
        </li>
        <li>
          <strong>Q: Can I access a DOM element in the callback?</strong>
          <br />
          A: No. Use <code>useLayoutEffect</code> or <code>useEffect</code> after the element is mounted.
        </li>
        <li>
          <strong>Q: Can I use it to fetch data?</strong>
          <br />
          A: It is not recommended. Start asynchronous work from an effect or a data-fetching Hook.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Callback invoked once during the first render.",
      },
      return: {},
    },
  },

  useMount: {
    desc: "Runs an effect when a component mounts, with optional dependencies, error handling, and cleanup.",
    detail: (
      <>
        <p>
          <code>useMount</code> is an effect helper for initialization work. With its default empty
          dependency list, the callback runs after the component mounts and its returned function runs
          during cleanup.
        </p>
        <p>
          The second argument can be either a dependency list or an error callback. When an error
          callback is provided, the optional third argument supplies the dependencies.
        </p>
      </>
    ),
    $p1: "Use the cleanup function returned by the callback to release subscriptions, timers, and other resources created by the effect.",
    consideration: (
      <ol>
        <li>
          The callback runs after render, so it is safe for DOM and external side effects.
        </li>
        <li>
          If the callback throws and no error handler is provided, <code>useMount</code> logs the error
          to the console.
        </li>
        <li>
          When dependencies are provided, the callback runs again whenever React detects a dependency
          change, not only on the initial mount.
        </li>
        <li>
          Keep dependency values complete and stable to avoid stale values or unnecessary reruns.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the default form for one-time initialization.</li>
        <li>Return a cleanup function whenever the callback allocates a resource.</li>
        <li>Pass an explicit error handler when initialization failures need to update UI or telemetry.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Is this Hook limited to one execution?</strong>
          <br />
          A: Only when its dependency list remains empty. A supplied dependency list follows normal
          effect dependency behavior.
        </li>
        <li>
          <strong>Q: How can I handle errors?</strong>
          <br />
          A: Pass an error callback as the second argument, followed by an optional dependency list.
        </li>
        <li>
          <strong>Q: When does cleanup run?</strong>
          <br />
          A: React runs the returned cleanup function before the effect reruns and when the component
          unmounts.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Effect callback. It may return a cleanup function.",
        arg2: "An error callback or dependency list.",
        arg3: "Dependency list used with an error callback. Defaults to an empty list.",
      },
      return: {},
    },
  },

  useUnMount: {
    desc: "Runs a callback when a component is about to unmount.",
    detail: (
      <>
        <p>
          <code>useUnMount</code> registers a cleanup callback that React invokes when the component
          leaves the tree. The Hook keeps the latest callback in a ref, so the cleanup uses the most
          recent callback without re-registering the effect on every render.
        </p>
        <p>
          Use it for releasing resources owned by the component, such as subscriptions, timers, or
          external connections.
        </p>
      </>
    ),
    $p1: "Register cleanup close to the resource or subscription that the component owns.",
    consideration: (
      <ol>
        <li>
          The callback runs during unmount, after the component is no longer available for normal UI
          updates.
        </li>
        <li>
          Do not rely on setting state in the callback; the component is already leaving the tree.
        </li>
        <li>
          If a resource can change during the component's lifetime, keep the cleanup callback aware of
          the latest resource value.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it to unsubscribe, clear timers, close connections, and release browser resources.</li>
        <li>Make cleanup idempotent when the underlying API may already be closed.</li>
        <li>Use the returned cleanup of an effect when the resource also needs cleanup on dependency changes.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does the callback run after every render?</strong>
          <br />
          A: No. It runs only when the component unmounts.
        </li>
        <li>
          <strong>Q: Does it use the callback from the first render?</strong>
          <br />
          A: The implementation stores the latest callback and invokes that callback during unmount.
        </li>
        <li>
          <strong>Q: Should I set state inside the callback?</strong>
          <br />
          A: No. The component is being removed, so release resources instead of updating its UI.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Callback invoked when the component unmounts.",
      },
      return: {},
    },
  },

  useUpdate: {
    desc: "Runs a callback when dependencies change, while skipping the initial render.",
    detail: (
      <>
        <p>
          <code>useUpdate</code> has the same dependency-driven behavior as an effect, but deliberately
          ignores the first render. The callback runs only after React observes a change in the supplied
          dependency list.
        </p>
        <p>
          This is useful for reacting to user-driven updates without running the same logic during
          initial setup.
        </p>
      </>
    ),
    $p1: "Include every value read by the callback in the dependency list, then use the Hook for work that should happen only after the first update.",
    consideration: (
      <ol>
        <li>
          The callback does not run after the initial render, even when the initial dependency values
          are defined.
        </li>
        <li>
          The implementation accepts a callback returning <code>void</code>; use an effect cleanup for
          resources that need cleanup between updates.
        </li>
        <li>
          An incomplete dependency list can cause the callback to observe stale values.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it for analytics, synchronization, or validation triggered by later changes.</li>
        <li>Keep the dependency list aligned with values captured by the callback.</li>
        <li>Use <code>useEffect</code> instead when the logic must also run on mount.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why did the callback not run on mount?</strong>
          <br />
          A: Skipping the initial render is the defining behavior of <code>useUpdate</code>.
        </li>
        <li>
          <strong>Q: Does it run on every rerender?</strong>
          <br />
          A: No. It runs only when a value in the dependency list changes.
        </li>
        <li>
          <strong>Q: Can the callback return a cleanup function?</strong>
          <br />
          A: No. The callback type is <code>() =&gt; void</code>; use an effect when cleanup is required.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Callback invoked after dependency changes, excluding the initial render.",
        dependencies: "Dependency list that controls subsequent callback execution.",
      },
      return: {},
    },
  },

  useUpdateEffect: {
    desc: "Runs an effect after dependency changes while skipping the initial effect execution.",
    detail: (
      <>
        <p>
          <code>useUpdateEffect</code> is an effect variant that ignores the first render. After that
          initial pass, it runs the callback when one of the supplied dependencies changes.
        </p>
        <p>
          It is useful for synchronization or requests that should respond to later user input but
          should not run with the initial state.
        </p>
      </>
    ),
    $p1: "Use it for post-mount synchronization and include every captured value in the dependency list.",
    consideration: (
      <ol>
        <li>
          The callback is skipped on the first render by design; use <code>useEffect</code> when the
          effect must also run on mount.
        </li>
        <li>
          The callback type is <code>() =&gt; void</code> in this implementation. Use an effect directly
          when a cleanup function is needed.
        </li>
        <li>
          Keep the dependency list complete to prevent stale values inside the callback.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use it for updates driven by search terms, filters, or controlled form values.</li>
        <li>Guard expensive work inside the callback when empty or invalid values should be ignored.</li>
        <li>Prefer a normal effect when initial synchronization is required.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: When does the effect first run?</strong>
          <br />
          A: It first runs after a dependency changes following the initial render.
        </li>
        <li>
          <strong>Q: Is this different from useUpdate?</strong>
          <br />
          A: Both currently skip the initial render and react to dependency changes; they are separate
          exports with the same core behavior.
        </li>
        <li>
          <strong>Q: Can I return cleanup from the callback?</strong>
          <br />
          A: No. Use <code>useEffect</code> directly for an effect whose callback returns cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "Effect callback invoked after dependency changes, excluding the initial render.",
        dependencies: "Dependency list that controls subsequent effect execution.",
      },
      return: {},
    },
  },

  useTheme: {
    desc: "Tracks the user's system light or dark color-scheme preference.",
    detail: (
      <>
        <p>
          <code>useTheme</code> reads the initial value from <code>prefers-color-scheme</code> and returns
          either <code>"light"</code> or <code>"dark"</code>. By default it listens for later system
          preference changes and updates the returned value.
        </p>
        <p>
          The Hook can also notify your application through a callback. It observes the operating
          system or browser preference; it does not provide a manual theme toggle.
        </p>
      </>
    ),
    $p1: "Use the returned theme value to choose styles or synchronize a component with the system color-scheme preference.",
    consideration: (
      <ol>
        <li>
          The initial value reads <code>window.matchMedia</code>, so render this Hook in a browser
          environment or provide a browser-compatible test setup.
        </li>
        <li>
          The Hook follows system preference, not an application setting stored in local storage or a
          theme provider.
        </li>
        <li>
          Pass <code>false</code> as the first argument to disable change listening. The initial theme
          value is still returned.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use the theme value to set a root class, data attribute, or component palette.</li>
        <li>Use the callback for logging or synchronizing external systems when the preference changes.</li>
        <li>Keep the callback lightweight because it runs for every detected preference change.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Does useTheme add a manual toggle?</strong>
          <br />
          A: No. It reports and listens to the browser's system color-scheme preference.
        </li>
        <li>
          <strong>Q: How do I stop listening?</strong>
          <br />
          A: Pass <code>false</code> as the first argument.
        </li>
        <li>
          <strong>Q: How can I receive change notifications?</strong>
          <br />
          A: Pass a callback as the first argument, or pass a boolean followed by a callback.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        arg1: "Boolean listening flag or theme change callback. Defaults to listening when omitted.",
        arg2: "Theme change callback when arg1 is a boolean.",
      },
      return: {
        theme: "Current system color-scheme preference: light or dark.",
      },
    },
  },

  useToast: {
    desc: "Creates lightweight, automatically dismissing toast notifications from a React component.",
    detail: (
      <>
        <p>
          <code>useToast</code> returns a callable function that renders a toast outside the component's
          normal DOM subtree. Each toast is removed after its configured duration, and delayed toasts
          are tracked until they are shown or cancelled by unmount cleanup.
        </p>
        <p>
          The returned function has <code>top</code>, <code>center</code>, and <code>bottom</code> helpers
          for common placements. Per-toast settings override the defaults supplied to the Hook.
        </p>
      </>
    ),
    $p1: "Call the returned toast function from an event handler so notifications are tied to an explicit user action.",
    consideration: (
      <ol>
        <li>
          Toast elements are appended to <code>document.body</code> and rendered with a separate React
          root, so coordinate their z-index with the rest of your application.
        </li>
        <li>
          A negative duration or delay is clamped to zero. Choose a duration long enough for the message
          to be read.
        </li>
        <li>
          The Hook cleans up active and delayed toasts when its owner component unmounts.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Set shared visual defaults in the Hook configuration and override only what differs per toast.</li>
        <li>Use the placement helpers for standard positions and coordinate placement for custom overlays.</li>
        <li>Keep toast text concise and use a longer duration for important messages.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: How do I show a toast at the top or bottom?</strong>
          <br />
          A: Call <code>toast.top(text)</code> or <code>toast.bottom(text)</code>.
        </li>
        <li>
          <strong>Q: Can one toast override the default duration?</strong>
          <br />
          A: Yes. Pass a second configuration object to the call.
        </li>
        <li>
          <strong>Q: What happens when the component unmounts?</strong>
          <br />
          A: The Hook removes active toasts and clears delayed timers created by that Hook instance.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        config: "Default toast duration, delay, placement, color, and style settings.",
      },
      return: {
        toast: "Callable toast function with top, center, and bottom placement helpers.",
      },
    },
  },

  useRipple: {
    desc: "Adds a CSS Houdini paint-worklet ripple animation to an element through a React ref.",
    detail: (
      <>
        <p>
          <code>useRipple</code> returns a ref for an element that should display a ripple from the
          pointer position. It registers the bundled CSS Paint API worklet when supported and drives the
          animation with requestAnimationFrame.
        </p>
        <p>
          Attach the returned ref to a button or other interactive element. The Hook removes listeners
          and cancels an active animation when the component unmounts or its configuration changes.
        </p>
      </>
    ),
    $p1: "Attach the returned ref to the interactive element that should receive the ripple effect.",
    consideration: (
      <ol>
        <li>
          The effect depends on the browser's CSS Paint API and <code>CSS.paintWorklet</code>. Unsupported
          browsers log a warning and do not render the paint worklet.
        </li>
        <li>
          The default trigger is <code>mousedown</code>. Choose a trigger that does not conflict with the
          element's other pointer handlers.
        </li>
        <li>
          The ref must be attached to an HTMLElement so the Hook can measure its bounds and set CSS
          custom properties.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use a button or link-like control with a visible background for the paint effect.</li>
        <li>Choose a duration that matches the rest of the interaction feedback.</li>
        <li>Keep the configuration object stable when the ripple settings do not need to change.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why is the ripple not visible?</strong>
          <br />
          A: Check CSS Paint API support, ensure the returned ref is attached, and verify that the
          element has a visible background.
        </li>
        <li>
          <strong>Q: Can I trigger it with click or pointerdown?</strong>
          <br />
          A: Yes. Set <code>config.trigger</code> to one of the supported pointer event names.
        </li>
        <li>
          <strong>Q: Does it clean up event listeners?</strong>
          <br />
          A: Yes. The Hook removes its listeners and cancels the active animation on cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T extends HTMLElement = HTMLButtonElement>"}</code>
        </p>
      ),
      params: {
        config: "Optional color, duration, trigger, and minimum alpha settings.",
      },
      return: {
        ref: "Ref to attach to the target HTMLElement.",
      },
    },
  },

  useParticle: {
    desc: "Adds a CSS Houdini paint-worklet particle animation to an element through a React ref.",
    detail: (
      <>
        <p>
          <code>useParticle</code> returns a ref for an element that should emit particles from the
          pointer position. It registers the bundled CSS Paint API worklet when supported and animates
          the configured number and size of particles.
        </p>
        <p>
          Set <code>enable</code> to <code>false</code> when the element should remain interactive but
          particle feedback should be temporarily disabled.
        </p>
      </>
    ),
    $p1: "Attach the returned ref to the element that should emit particles and interact with it using the configured trigger.",
    consideration: (
      <ol>
        <li>
          The effect depends on the browser's CSS Paint API and <code>CSS.paintWorklet</code>. Unsupported
          browsers log a warning and do not render the paint worklet.
        </li>
        <li>
          The default trigger is <code>mousedown</code>; use <code>click</code> or
          <code>pointerdown</code> when that better matches the surrounding interaction.
        </li>
        <li>
          The returned ref must be attached to an HTMLElement so the Hook can read pointer coordinates
          and set CSS custom properties.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Keep the particle count and size modest on low-powered devices.</li>
        <li>Use <code>enable</code> to respect reduced-motion or interaction preferences in your UI.</li>
        <li>Keep the configuration stable when animation settings do not need to change.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why are no particles visible?</strong>
          <br />
          A: Check CSS Paint API support, confirm the ref is attached, and ensure <code>enable</code> is
          true.
        </li>
        <li>
          <strong>Q: Can I change the particle count?</strong>
          <br />
          A: Yes. Set <code>config.num</code> to the desired number of particles.
        </li>
        <li>
          <strong>Q: Does the Hook clean up listeners and animations?</strong>
          <br />
          A: Yes. It removes the trigger listener and cancels an active animation on cleanup.
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T extends HTMLElement = HTMLButtonElement>"}</code>
        </p>
      ),
      params: {
        config: "Optional color, duration, trigger, particle count, and size settings.",
        enable: "Whether the particle animation can start. Defaults to true.",
      },
      return: {
        ref: "Ref to attach to the target HTMLElement.",
      },
    },
  },

  useDimensionsById: {
    desc: "Observes the dimensions of a DOM element selected by id.",
    detail: (
      <>
        <p>
          <code>useDimensionsById</code> finds the element with the supplied id, observes it with
          <code>ResizeObserver</code>, and returns its width, height, top, and left values.
        </p>
        <p>
          When the id changes, the Hook disconnects from the previous target and observes the new one.
          If no matching element exists, the current dimensions remain at their initial values.
        </p>
      </>
    ),
    $p1: "The target element must exist in the document and have the supplied id.",
    consideration: (
      <ol>
        <li>The id must be unique and the target must be mounted when the effect runs.</li>
        <li>The returned dimensions start at zero until ResizeObserver reports the target.</li>
        <li>The Hook observes content-box dimensions and does not create the target element.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Use a stable, semantic id when the target is rendered outside the component's direct subtree.</li>
        <li>Change the id only when the measurement target genuinely changes.</li>
        <li>Use <code>useDimensions</code> instead when a ref is available and id lookup is unnecessary.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What happens if the id is not found?</strong>
          <br />
          A: No observer is created and the dimensions retain their current values.
        </li>
        <li>
          <strong>Q: Does changing the id switch the observer?</strong>
          <br />
          A: Yes. The effect cleans up the old observer and looks up the new id.
        </li>
        <li>
          <strong>Q: Is this different from useDimensions?</strong>
          <br />
          A: It uses an element id instead of returning a ref, which is useful when the target is located elsewhere in the document.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        id: "Id of the element to observe.",
      },
      return: {
        width: "Observed content width.",
        height: "Observed content height.",
        top: "Observed content top offset.",
        left: "Observed content left offset.",
      },
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
    consideration: (
      <ol>
        <li>Camera permission and device availability depend on the browser and active camera.</li>
        <li>Render the target container before calling <code>start</code> and stop the scanner when leaving the page.</li>
        <li>Image scanning stops an active live scan first and does not request camera permission.</li>
        <li>Metadata such as format, bounds, and content type can be null when a decoder does not provide it.</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Handle scanner errors in the <code>onError</code> callback and show the current <code>status</code>.</li>
        <li>Check <code>cameraCapabilities</code> before using torch or zoom, especially after switching cameras.</li>
        <li>Limit image size and resize large phone photos before calling <code>scanImage</code>.</li>
        <li>Use <code>reset</code> when leaving a scanning flow and <code>clearResult</code> when starting a new result state.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: Why does camera scanning fail on an HTTP page?</strong>
          <br />
          A: Camera access requires a secure context such as HTTPS or localhost. Image scanning does not request camera permission.
        </li>
        <li>
          <strong>Q: Why are format, bounds, or content type sometimes null?</strong>
          <br />
          A: The selected browser decoder does not always provide every metadata field.
        </li>
        <li>
          <strong>Q: Why are torch or zoom unsupported on a device with a camera?</strong>
          <br />
          A: Support belongs to the currently active camera track and can change after switching cameras.
        </li>
        <li>
          <strong>Q: Does granted guarantee that camera startup will succeed?</strong>
          <br />
          A: No. Device availability, browser policy, and concurrent camera use can still prevent startup.
        </li>
        <li>
          <strong>Q: Does the Hook configure the WeChat JS-SDK?</strong>
          <br />
          A: No. Inject a <code>wechatAdapter</code> so the application owns its app id, signature API, and SDK readiness.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        options: "Scanner mode, adapter, service, and default callbacks.",
      },
      return: {
        status: "Current scanner lifecycle state.",
        scanResult: "Latest normalized scan result.",
        start: "Starts a live camera scan.",
        stop: "Stops scanning and releases resources.",
        scanImage: "Decodes an image without requesting camera permission.",
        cameraCapabilities: "Torch and zoom capabilities for the active camera track.",
        cameraPermission: "Observable camera permission state.",
        reset: "Stops scanning and clears result and error state.",
      },
    },
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
    desc: "Calculates a practical page size from a scroll container's height and an estimated item height.",
    detail: (
      <>
        <p>
          <code>useAutoPageSize</code> measures the element identified by <code>containerId</code> and
          calculates how many items fit in its visible height. It observes the container with
          <code>ResizeObserver</code>, so the result follows layout changes by default.
        </p>
        <p>
          The returned value is never smaller than <code>minSize</code>. The optional
          <code>buffer</code> adds extra items to reduce the chance of another request immediately
          after the user starts scrolling.
        </p>
      </>
    ),
    $p1: "Use the returned pageSize when requesting or slicing the next page of list data.",
    consideration: (
      <ol>
        <li>
          The container must exist in the DOM and have a measurable, non-zero height when the
          effect runs. If it cannot be found, the hook keeps its current value.
        </li>
        <li>
          <code>estimatedItemHeight</code> is an estimate rather than a measurement of every item;
          choose a representative value for the list layout.
        </li>
        <li>
          The hook requires <code>ResizeObserver</code>. Provide a browser or test environment that
          supports it before rendering the hook.
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>Set <code>minSize</code> to a safe lower bound for the API or list component.</li>
        <li>Use a small <code>buffer</code> to keep scrolling smooth without over-fetching data.</li>
        <li>Set <code>once</code> to <code>true</code> for a fixed layout where resize updates are unnecessary.</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q: What happens if the container cannot be found?</strong>
          <br />
          A: The hook leaves <code>pageSize</code> at its current value and does not start an observer.
        </li>
        <li>
          <strong>Q: Why is the result larger than the number of visible items?</strong>
          <br />
          A: The calculation adds <code>buffer</code> to the estimated number of visible items.
        </li>
        <li>
          <strong>Q: How do I stop recalculation after the first measurement?</strong>
          <br />
          A: Pass <code>{`{ once: true }`}</code> as the third argument.
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        containerId: "ID of the container element to measure.",
        estimatedItemHeight: "Estimated item height in pixels. Defaults to 150.",
        options: "Optional settings for one-time calculation, minimum size, and extra buffer items.",
      },
      return: {
        pageSize: "The calculated page size, clamped to at least minSize.",
      },
    },
  },
  __end: "end of locale mappings, please do not delete this line",
} as const;

export default locale_en;
