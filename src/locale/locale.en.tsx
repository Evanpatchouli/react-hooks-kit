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
            <strong>initialValue</strong> : object
          </li>
          <li>
            <strong>deep</strong> (?) : boolean, Whether to deep reactive, default is true
          </li>
        </ol>
        For example:
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
        </ul>
      </>
    ),
    consideration: (
      <ol>
        <Li>initialValue is type of object</Li>
        <Li>deep is type of boolean</Li>
      </ol>
    ),
    $p1: "",
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
            <strong>T</strong>: extends keyof object
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
      generics: <ul></ul>,
      params: {},
      return: {},
    },
  },

  useVirtualArea: {
    desc: "A hook to render huge list in a virtual area way.",
    detail: (
      <>
        useVirtualArea is a hook that is used to render huge list in a virtual area way:
        <h4>Parameters : </h4>
        <ol>
          <li>
            <strong>options</strong> : object
          </li>
          <li>
            <strong>dependencies</strong> : array
          </li>
        </ol>
        For example:
      </>
    ),
    $p1: "",
    consideration: (
      <ol>
        <Li>options is type of object</Li>
        <Li>dependencies is type of array</Li>
        <Li>options.items is required</Li>
        <Li>options.renderItem is required</Li>
        <Li>options.hasMore is required</Li>
        <Li>options.loadMoreItems is required</Li>
        <Li>options.height is required</Li>
      </ol>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: Why useVirtualArea instead of useState?
        </Li>
        <Li>
          <strong>A</strong>: Because useVirtualArea makes it more efficient to render huge list in a virtual area way.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: What is virtual area?
        </Li>
        <Li>
          <strong>A</strong>: Virtual area is a virtual area in your page that is used to render huge list. It is not
          really a area, but a concept.
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: How about the performance?
        </Li>
        <Li>
          <strong>A</strong>: It is much more efficient than using useState to render huge list. You can try it by
          yourself. The performance is similar to react-window.
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>C</strong>: extends keyof React.JSX.IntrinsicElements. Default: "div"
          </li>
          <li>
            <strong>I</strong>: extends keyof React.JSX.IntrinsicElements. Default: "div"
          </li>
          <li>
            <strong>L</strong>: extends keyof React.JSX.IntrinsicElements. Default: "div"
          </li>
        </ul>
      ),
      params: {},
      return: {},
    },
  },

  useReactor: {
    desc: "",
    detail: <></>,
    consideration: <ol></ol>,
    $p1: "",
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
    $best: <ul></ul>,
    $faqs: <ul></ul>,
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
  __end: "end of locale mappings, please do not delete this line",
} as const;

export default locale_en;
