import Code from "@/components/code";
import Li from "@/components/layout/Li";

const locale_cn = {
  $article: {
    Consideration: "考虑",
  },
  useWatch: {
    desc: "用于监视对象中某些属性的钩子。",
    detail: (
      <>
        useWatch 是一个用于监视某些属性变化的钩子，它接受三个参数，分别是：
        <ol>
          <li>目标对象</li>
          <li>目标属性路径（如“a.b.c”或[“a”，“b”，“c”]）或getter函数</li>
          <li>回调函数</li>
        </ol>
        当目标对象的target属性发生变化时，useWatch会调用回调函数，该函数接受
        两个参数，分别是：
        <ol>
          <li>旧值</li>
          <li>新价值</li>
        </ol>
        例如：
      </>
    ),
    $p1: "传递一个对象和一个属性路径或 getter，然后更改源值以查看回调和返回值更新。",
    consideration: (
      <ol>
        <Li>目标对象应该是对象的类型</Li>
        <Li>目标属性路径应该是字符串类型或字符串数​​组，建议后者</Li>
        <Li>回调函数应该是函数类型</Li>
        <Li>
          默认情况下，返回的意志没有明确类型推断，因为从复杂对象中推断类型很困难，
          但您可以自己指定类型，如下所示：<code>const a: string = useWatch(obj, "a")</code>。在
          同时，回调函数将自动将类型分配给旧值和新值
        </Li>
        <Li>
          严格会影响获得特殊钥匙的属性，并且可能会造成能源消耗，最好
          方法是使用数组作为路径，而不是严格模式下的字符串路径。
        </Li>
        <Li>
          如何获得 valueType 观看 {"( like c in const obj = { a: { b : { c : 1 } } } )"}？
          <p>有五种方式：</p>
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
              第四种方法仅适用于字符串路径而不是数组路径，如果路径中的一个键，则推断将失败
              包括“.”特点。
            </p>
          </ol>
        </Li>
        <p>
          因此，建议避免使用包含“.”的字符串。作为对象中的键，然后使用字符串运行
          或数组路径或在非严格模式下，从字符串路径推断出 PathValue。一切都会好起来的。
          否则，请使用 getter 而不是路径，在这种情况下，您需要确认您的 getter 始终正常工作。
        </p>
      </ol>
    ),
    $best: (
      <ul>
        <Li>当键可能包含点或严格的路径处理很重要时，请使用数组路径。</Li>
        <Li>对无法表示为属性路径的派生值使用 getter。</Li>
        <Li>尽可能保持监视对象和回调引用稳定。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：我可以查看嵌套属性吗？
        </Li>
        <Li>
          <strong>A</strong>： 是的。传递字符串路径、数组路径或 getter 函数。
        </Li>
        <Li>
          <strong>Q</strong>: 立即做什么？
        </Li>
        <Li>
          <strong>A</strong>：它在挂载时使用当前值和先前值调用回调一次。
        </Li>
        <Li>
          <strong>Q</strong>：Hook 返回什么？
        </Li>
        <Li>
          <strong>A</strong>：它返回从路径或getter解析的值，或者当无法解析时返回未定义的值。
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>V</strong>：解析值类型。
          </li>
          <li>
            <strong>T</strong>：监视的对象类型。
          </li>
          <li>
            <strong>P</strong>：属性路径类型。
          </li>
        </ul>
      ),
      params: {
        object: "其属性或派生值受到监视的对象。",
        path: "用于解析值的字符串/数组属性路径或 getter 函数。",
        callback: "接收新值和旧值的可选回调。",
        configOrStrict: "可选的 Config 对象或严格布尔值。",
        immediate: "可选的位置标志，在挂载时调用回调。",
      },
      return: {
        value: "从路径或 getter 解析的当前值。",
      },
    },
  },
  useUrl: {
    desc: "获取 url 参数的钩子。",
    detail: (
      <>
        useUrl 是一个用于监听 url 并获取参数的钩子，它接受四个参数。
        <ol>
          <Li>
            <strong>打回来 （？）</strong>：当url改变时，该函数将被调用。
          </Li>
          <Li>
            <strong>姓名 （？）</strong>：url监听的名称，如果有多个url监听，可以使用这个
            参数来区分它们。
          </Li>
          <Li>
            <strong>立即（假）</strong>：当url改变时，该函数将立即被调用。
          </Li>
          <Li>
            <strong>配置（？）</strong>：参数解析器的配置。
            <ol>
              <Li>
                <strong>模式 （？）</strong>: params 解析器的模式: `"string"` | “自动”=“自动”。
              </Li>
              <Li>
                <strong>自动参数（？）</strong>：视为自动的参数。
              </Li>
              <Li>
                <strong>字符串化参数（？）</strong>：将参数视为字符串。
              </Li>
              <Li>
                <strong>风俗 （？）</strong>：某些查询参数的自定义解析器。
              </Li>
            </ol>
          </Li>
        </ol>
        例如：
      </>
    ),
    consideration: (
      <>
        <strong>类型参数</strong>
        <ol>
          <li>
            <strong>T</strong> - `字符串` 或 `对象`
            <ul>
              <li>要转换的字符串，例如“http://localhost?id=1&name=evan”</li>
              <li>
                object: object to inferred as, like <code>{'`{ id: "1", name: "evan" }`'}</code>
              </li>
            </ul>
          </li>
        </ol>
        <ol>
          <li>
            <strong>模式</strong> - 转换时使用的模式：`"string"` | `“模糊”` | `“自动”` | `“严格”` |
            “任何”=“自动”。
          </li>
          <li>
            <strong>严格参数</strong> - 严格对待的参数。
          </li>
          <li>
            <strong>模糊参数</strong> - 视为模糊的参数。
          </li>
        </ol>
      </>
    ),
  },

  useProtect: {
    desc: "使用布尔值、消息或谓词条件来保护状态更新。",
    detail: (
      <>
        <p>
          <code>useProtect</code> 的行为类似于带有受保护 setter 的状态 Hook。它接受一个初始的
          value 后跟一个或多个保护条件，并使用 setter 返回当前值。
        </p>
        <p>
          阻止的更新会引发 <code>Error</code>。布尔和字符串条件提供简单
          守卫，而谓词条件可以将当前值与建议的下一个值进行比较。
        </p>
      </>
    ),
    $p1: "当应在 UI 中报告被拒绝的更改时，在错误处理中包装受保护的更新。",
    consideration: (
      <ol>
        <Li><code>initialData</code> 可以有任何应用程序类型。</Li>
        <Li>条件可以是布尔值、字符串、null、未定义或谓词函数。</Li>
        <ul>
          <Li>
            <strong>布尔值</strong>：当为 true 时，更新将被拒绝并显示默认保护消息。
          </Li>
          <Li>
            <strong>细绳</strong>：非空字符串拒绝更新并成为错误消息。
          </Li>
          <Li>
            <strong>谓词</strong>：真实的返回值拒绝提议的状态；返回的字符串
            成为错误消息。
          </Li>
        </ul>
      </ol>
    ),
    $best: (
      <ul>
        <li>当规则同时依赖于旧值和候选值时，请使用谓词。</li>
        <li>在交互边界捕获设置者错误并显示可操作的反馈。</li>
        <li>当下一个值取决于当前状态时，使用功能更新。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：更新被阻止时会发生什么？</strong>
          <br />
          A：二传手抛出<code>Error</code>，状态保持不变。
        </li>
        <li>
          <strong>问：条件可以提供自定义消息吗？</strong>
          <br />
          答：是的。从谓词返回非空字符串或传递非空字符串条件。
        </li>
        <li>
          <strong>问：是否更新了相同的值？</strong>
          <br />
          答：不会。Hook 使用深度相等，并在值未更改时跳过更新。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the protected state type.</p>,
      params: {
        initialData: "初始状态值。",
        conditions: "应用于更新的布尔、字符串或谓词保护。",
      },
      return: {
        data: "当前受保护状态。",
        setData: "当条件拒绝更新时抛出的受保护的状态设置器。",
      },
    },
  },

  useToggle: {
    desc: "用于切换布尔状态的钩子。",
    detail: (
      <>
        useToggle 是一个用于切换布尔状态的钩子：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> (?) : 布尔值，默认为 false
          </li>
          <li>
            <strong>价值图</strong> (?) ：返回值映射
          </li>
          <ul>
            <li>
              <strong>真的</strong> (?) ：state为true时的值，默认为true
            </li>
            <li>
              <strong>错误的</strong> (?) : state 为 false 时的值，默认为 false
            </li>
          </ul>
        </ol>
        例如：
      </>
    ),
    consideration: (
      <ol>
        <Li>初始值是布尔类型</Li>
      </ol>
    ),
    $p1: "配置值映射",
  },

  useLoading: {
    desc: "用于切换加载状态的钩子。",
    detail: (
      <>
        useLoading 是一个用于管理加载状态的钩子：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> (?)：加载地图
          </li>
          <li>
            <strong>选项</strong> (?) ：值格式化程序的配置
          </li>
          <ul>
            <li>
              <strong>布尔化</strong> (?) ：state为true时的值，默认为true
            </li>
            <li>
              <strong>设置类型</strong> (?) ：使用“覆盖”或“传播”调用设置器
            </li>
          </ul>
        </ol>
        例如：
      </>
    ),
    consideration: (
      <ol>
        <Li>返回值是一个与对象合并的数组，如下所示的结构： </Li>
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
        <Li>使用计数方式加载时，必须确认正负次数始终相同</Li>
        <Li>
          默认情况下，当loading值为0时，loading值为false，可以通过设置boolify禁用它
          为假
        </Li>
        <Li>
          默认情况下，设置的操作将 <strong>覆盖</strong> 旧值，您可以通过设置禁用它
          设置类型为“传播”
        </Li>
      </ol>
    ),
    $p1: "您可以使用计数方式加载，即可以加减加载值，当该值大于0时，加载状态为true，否则为false。",
  },

  useMeta: {
    desc: "一个返回元状态和设置元状态的函数的 React Hook",
    detail: (
      <>
        <h4>参数： </h4>
        <Li>
          <strong>初始对象</strong> ：元状态的初始状态对象。
        </Li>
        <Li>
          <strong>深集</strong> (?)：设置元状态时是否使用深度克隆。默认为 false。
        </Li>
      </>
    ),
    $p1: "使用 setObj 更新对象中的某些属性并重新渲染组件。如果您直接重新分配对象中的属性，则视图将仅在下次重新渲染时同步。",
    $p2: "从旧属性设置属性",
    $p3: "直接重置整个对象或从旧对象重置",
    consideration: (
      <ol>
        <Li>状态必须是一个对象。</Li>
        <Li>没有哪个 DeepSet 能够更快地工作。</Li>
        <Li>
          设置期间不要重新分配属性：
          <div style={{ marginTop: "4px" }}>
            这是 <strong>坏的</strong> 并且不会工作：❌
          </div>
          <Code lang="ts">{`set('count', obj.count++)`}</Code>
          <div>没关系：✅</div>
          <Code lang="ts">{`set('count', obj.count + 1)`}</Code>
          <div>这是最好的：✅</div>
          <Code lang="ts">{`set('count', (pre) +> pre + 1)`}</Code>
        </Li>
      </ol>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 为什么使用useMeta而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：因为 useMeta 可以更轻松地设置状态的深层属性。
        </Li>
        <br />
        <Li>
          <strong>Q</strong>：deepSet和不deepSet有什么区别？
        </Li>
        <Li>
          <strong>A</strong>：当deepSet为true时，设置状态时会深度克隆状态，否则
          将是浅克隆。 Deepclone比shallowclone慢，但更安全。因此，当状态
          对象很大，除非必要，否则应避免使用 deepSet。
        </Li>
      </ul>
    ),
  },

  useReactive: {
    desc: "使您的对象具有反应性的钩子。",
    detail: (
      <>
        useReactive 是一个钩子，用于使您的对象具有反应性：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> ：基元、数组、对象、日期、映射或集合
          </li>
          <li>
            <strong>深的</strong> (?) : boolean, 是否深度reactive, 默认为true
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "为对象创建反应式代理",
    $p2: "为数组创建反应式代理",
    $p3: "为原始值创建反应式代理。在这种情况下，返回的结构将是这样的：{ value: 1 }，您可以使用 value 属性获取该值。",
    consideration: (
      <>
        <ol>
          <Li>初始值可以是基元、数组、对象、日期、映射和集合。</Li>
          <Li>deep 是布尔类型</Li>
        </ol>
        <p
          style={{
            padding: "20px",
            background: "#cff",
            borderRadius: "4px",
          }}
        >
          <strong>ℹ️注意事项</strong> ：每次调用响应式对象的方法都会导致重新渲染。
        </p>
        <p
          style={{
            padding: "20px",
            background: "#ffd",
            borderRadius: "4px",
          }}
        >
          <strong>⚠️警告</strong> : useReactive 尽可能多地代理目标上的所有属性，
          某些 api 的行为与原始 API 不同。
        </p>
      </>
    ),
    $best: (
      <>
        <ul>
          <Li>
            <strong>更好的性能</strong> ：使用浅层反应，并定义一个属性来重新渲染。
          </Li>
          <Li>
            <strong>更好的反应性</strong> ：使用深度反应，每次属性更改时重新渲染。
          </Li>
          <Li>
            <strong>更好的安全性</strong> ：使用unwrap（从useReactive导出）来控制反应数据，以及
            将其重新分配给反应式代理。
          </Li>
        </ul>
      </>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：为什么使用Reactive而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：因为 useReactive 简化了使对象具有反应性的过程。那就是你可以玩
          React.js 就像 Vue.js。
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: 深和不深有什么区别？
        </Li>
        <Li>
          <strong>A</strong>：当deep为true时，对象将是深反应性的，否则它将是浅反应性的
          反应性的。深度反应意味着对象上的每个属性都将被代理。浅反应性意味着仅
          第一级属性将被代理。
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>T</strong>: 建议扩展原语 |数组 |对象|日期 |地图 |放
          </li>
        </ul>
      ),
      params: {},
      return: {},
    },
  },

  useList: {
    desc: "管理列表状态的挂钩。",
    detail: <></>,
    consideration: (
      <ol>
        <Li>
          <strong>初始值</strong> ： 大批
        </Li>
        <Li>
          <strong>选项</strong> ： 目的
        </Li>
      </ol>
    ),
    $p1: "只需渲染临时列表视图。",
    $p2: "控制临时列表数据，可以看到，原来的列表数据还在。只有当您保存列表时，原始列表才会更新。",
    $best: (
      <ul>
        <Li>
          <strong>最佳管理</strong> ：同时使用隔离和控制。
        </Li>
      </ul>
    ),
    $faqs: (
      <>
        <Li>
          <strong>Q</strong>: 为什么用useList而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：因为useList可以更轻松地管理列表状态。
        </Li>
        <br />
        <Li>
          <strong>Q</strong>: useList 有什么能力？
        </Li>
        <Li>
          <strong>A</strong>: useList 有很多功能：
          <ol>
            <li>
              <strong>使成为</strong>：渲染列表视图
            </li>
            <li>
              <strong>隔离</strong>：隔离视图数据和原始数据。
            </li>
            <li>
              <strong>控制</strong>：提供多种控制列表数据的方式。
            </li>
            <li>
              <strong>回溯</strong>：提供追溯列表数据的能力。
            </li>
            <li>
              <strong>分页</strong>：提供对列表数据进行分页的能力。
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
            <strong>T</strong>: 列表元素的类型
          </li>
        </>
      ),
      params: {},
      return: {},
    },
  },

  useReactor: {
    desc: "基于 Reactor 模型的状态钩子。",
    detail: (
      <>
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> ： 目的
          </li>
          <li>
            <strong>插件</strong> ：{"ReactorPlugin<T>[]"}
          </li>
        </ol>
        例如：
      </>
    ),
    consideration: (
      <>
        <ol>
          <Li>
            reactor.value 属性的直接突变不会触发重新渲染。始终使用 set() 或 setValue() 来
            更新状态。
          </Li>
          <Li>
            使用基于路径的 set() 方法（例如 set("user.name", "John")）来更新嵌套属性，而不是
            直接赋值。
          </Li>
          <Li>
            Reactor 最适合管理复杂的对象状态。对于简单的原始值，请考虑使用
            使用状态代替。
          </Li>
          <Li>
            插件操作在状态更改期间同步执行。避免插件中的繁重计算
            回调。
          </Li>
          <Li>
            事件总线（emit/on）仅与 Reactor 实例隔离，不与 useEmitter 或共享事件
            useReceiver 钩子。
          </Li>
        </ol>
        <p
          style={{
            padding: "20px",
            background: "#ffd",
            borderRadius: "4px",
          }}
        >
          <strong>⚠️警告</strong> ：请在 useEffect 挂钩区域调用 subscribe、on 和监听器以避免一些问题
          意想不到的问题。
        </p>
      </>
    ),
    $p1: "基本用法，管理状态。您可以使用 get() 通过路径获取某些属性或通过密钥链直接访问该属性。您可以使用 set() 按路径更新某些属性值。",
    $p1_1:
      "因为这个状态是typeof对象，因此，第三个按钮可以直接改变存储的值，但不会触发重新渲染。",
    $p2: "向 Reactor 实例注册一个插件，并分配其名称以调用该插件",
    $p3: "从useReactor导入listen，监听状态变化，并在then代码块中执行一些操作。",
    $p4: "重新分配Reactor实例的值可以覆盖状态。您也可以使用 setValue 来做到这一点。",
    $p5: "您可以从现有的 Reactor 实例克隆一个新的 Reactor，但它们将指向相同的状态。 CloneValue 将仅克隆状态值。",
    $p6: "你可以为Reactor指定一个默认值，当你调用reset时，该值将被重置为默认值。",
    $p7: "不同的 Reactor 实例可以通过全局事件总线相互通信，您可以发出事件并使用 on 来接收事件负载。",
    $p7_notice: (
      <>
        <p
          style={{
            padding: "20px",
            background: "#cff",
            borderRadius: "4px",
          }}
        >
          <strong>ℹ️注意事项</strong> ：反应器事件总线依赖于发射器。
        </p>
      </>
    ),
    $best: (
      <ul>
        <Li>
          <strong>组件通讯</strong>：使用Reactor的事件总线（emit/on）来同步组件之间的数据
          无需支柱钻井。
        </Li>
        <Li>
          <strong>插件系统</strong>：利用插件来解决横切问题，例如日志记录、验证或
          持久性以保持组件逻辑清晰。
        </Li>
        <Li>
          <strong>基于路径的访问</strong>：使用 get("user.profile.name") 和 set("user.profile.name", value) 进行
          深度嵌套属性而不是手动遍历。
        </Li>
        <Li>
          <strong>国家认购</strong>：使用 subscribe() 对你的其他部分的状态变化做出反应
          无需紧密耦合的应用程序。
        </Li>
        <Li>
          <strong>默认值</strong>：使用setDefaultValue()设置默认值并使用reset()轻松恢复
          初始状态（对于表单有用）。
        </Li>
        <Li>
          <strong>状态克隆</strong>：当您需要状态的独立副本时，请使用cloneValue()
          比较或撤消功能。
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 为什么使用Reactor而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：Reactor 提供高级功能，例如基于路径的访问、订阅、插件、事件
          系统，以及更轻松地管理复杂对象的状态。当您需要的不仅仅是简单状态时，它是理想的选择
          更新。
        </Li>
        <Li>
          <strong>Q</strong>: 我什么时候应该使用插件？
        </Li>
        <Li>
          <strong>A</strong>：使用插件添加在状态更改或操作上运行的自定义逻辑，例如日志记录，
          验证、持久性或副作用。插件有助于保持组件代码干净且可重用。
        </Li>
        <Li>
          <strong>Q</strong>：我可以在 React 组件之外使用 Reactor 吗？
        </Li>
        <Li>
          <strong>A</strong>: 是的，你可以直接使用`new Reactor(initialValue)`创建一个Reactor实例，但是它
          不会触发 React 重新渲染。在组件内部使用 useReactor 钩子进行自动重新渲染。
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>T</strong>：状态值类型。
          </li>
        </ul>
      ),
      params: {
        initialValue: "Reactor 实例持有所需的初始值。",
        plugins: "为操作和事件注册的可选 Reactor 插件。",
      },
      return: {
        ReactorInstance: "管理当前状态的 Reactor 对象。",
        value: "当前状态值。",
        get: "按路径读取值。",
        set: "按路径更新值。",
        reset: "将当前值恢复为默认值。",
        setValue: "替换当前值或应用状态更新程序。",
        setDefaultValue: "替换重置使用的值。",
        getDefaultValue: "返回当前默认值。",
        clone: "创建共享相同状态的 Reactor 克隆。",
        cloneValue: "创建当前状态值的克隆。",
        dispatch: "调用已注册的插件操作。",
        emit: "通过 Reactor 事件总线发出事件。",
        on: "为 Reactor 事件注册一个处理程序。",
      },
    },
  },

  useTree: {
    desc: "管理树状态的钩子。",
    detail: (
      <>
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> ： 大批
          </li>
          <li>
            <strong>选项</strong> ： 目的
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "下面是一个简单的例子来展示如何使用 useTree hook。",
    consideration: (
      <ol>
        <Li>
          初始值是类型 <span className="txt-secondary">树节点</span>
        </Li>
        <Li>options 是对象的类型</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          <strong>控制虚拟节点</strong> ：避免直接改变原有节点。
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 为什么使用Tree而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：因为useTree可以更轻松地管理和渲染树状态。
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <>
          <li>
            <strong>T</strong>：扩展TreeNode，节点类型
          </li>
          <li>
            <strong>K</strong>：扩展字符串，节点的键名作为idKey
          </li>
        </>
      ),
      params: {},
      return: {},
    },
  },

  useBatchHooks: {
    desc: "多次调用 Hook 并将结果值作为有序数组返回。",
    detail: (
      <>
        <p>
          <code>useBatchHooks</code> 对固定数量的实例执行相同的 Hook 并返回
          他们的结果按创建顺序排列。计数重载将相同的参数传递给每个实例；
          数组重载允许每个实例定义自己的参数。
        </p>
        <p>
          它对于重复的基于引用或有状态的 Hook 实例非常有用，例如创建多个
          控件列表的独立纹波参考。
        </p>
      </>
    ),
    $p1: "在渲染过程中保持批量大小和项目顺序稳定，以便底层 Hook 调用保持一致。",
    consideration: (
      <ol>
        <li>Hook 调用的数量和顺序必须在渲染之间保持稳定，以遵循 Hook 规则。</li>
        <li>除非重新安装周围的组件，否则不要从安装后可能更改的数据中获取计数。</li>
        <li>每个项目必须在计数重载中使用相同的 Hook 系列。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>对相同参数使用计数重载，对每个实例参数使用项数组重载。</li>
        <li>按索引将返回值映射到渲染元素的同一稳定列表。</li>
        <li>显示返回结果时，在渲染元素级别使用键。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：计数可以动态变化吗？</strong>
          <br />
          答：它应该在组件的使用寿命内保持稳定。更改 Hook 调用计数可能会违反 Hook 规则。
        </li>
        <li>
          <strong>问：每个 Hook 实例可以接收不同的参数吗？</strong>
          <br />
          答：是的。将数组重载与 <code>{`{ hook, args }`}</code> 项一起使用。
        </li>
        <li>
          <strong>问：结果数组包含什么？</strong>
          <br />
          答：它包含每个 Hook 的返回值，其顺序与批次定义相同。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<Hook>"}</code> is the batched Hook function type.</p>,
      params: {
        hook: "为每个批次项目调用钩子函数。",
        count: "共享参数重载中的 Hook 实例数。",
        args: "参数传递到每个实例。",
        hooks: "数组重载中的每个实例 Hook 和参数定义。",
      },
      return: {
        results: "按顺序从 Hook 实例返回值。",
      },
    },
  },

  useMemento: {
    desc: "用于管理状态作为纪念品的钩子",
    detail: (
      <>
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始状态</strong> ： 任何
          </li>
          <li>
            <strong>配置</strong> ： 目的
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "初始状态将是历史上的第一个状态。默认情况下，历史记录大小为10，严格模式为false。因此，历史记录最多为10个状态，当找不到idKey时会抛出Error。",
    $p2: "要知道，如果调用clear api，所有内容都会被清除，包括历史记录，所以这个操作是不可回滚的。另外，清除后，当前 idKey 将设置为 NaN。 （在未来的版本中，它可能会被设置为其他虚假值，例如 null。）",
    consideration: (
      <ol>
        <Li>初始状态是任何类型</Li>
        <Li>config 是 MementoConfig 对象的类型</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          <strong>严格模式</strong> ：使用严格模式，并将idKey设置为唯一值。
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
    desc: "存储先前状态的钩子。",
    detail: (
      <>
        usePrevious 是一个用于存储先前状态的钩子：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>状态</strong> ：来自 useState 的任何状态
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "当状态是第一个状态时，前一个状态将是未定义的。",
    consideration: <ol>It is just a simple hook, no consideration.</ol>,
    $best: (
      <>
        这是一个 React 组件，允许用户在浅色和深色主题之间切换。 usePrevious 钩子是
        用于跟踪以前的主题，每当主题更改时都会将一条消息记录到控制台。
      </>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 为什么要使用usePrevious而不是useState？
        </Li>
        <Li>
          <strong>A</strong>：因为对于readonly状态来说比较方便。
        </Li>
        <br />
      </ul>
    ),
    $apis: {
      generics: (
        <>
          <li>
            <strong>T</strong>：扩展任何类型的状态。
          </li>
        </>
      ),
      params: {
        state: "useState 中的任何状态",
      },
      return: {
        previous: "之前的状态",
      },
    },
  },

  useEmitter: {
    desc: "创建一个命名空间事件发射器，用于跨组件发布和订阅事件。",
    detail: (
      <>
        <p>
          <code>useEmitter</code> 返回一个带有 <code>emit</code>、<code>subscribe</code> 的发射器，
          <code>unsubscribe</code> 和 <code>unsubscribeAll</code> 方法。发射器可以通信
          通过共享命名空间，不需要 prop 链。
        </p>
        <p>
          Hook 支持配置对象或位置参数来注册初始值
          事件监听器。组件拥有的侦听器会在卸载时自动删除。
        </p>
      </>
    ),
    $p1: "当不同的组件应该交换事件时，请在不同的组件中使用相同的命名空间和事件名称。",
    consideration: (
      <ol>
        <li>在命名空间内使用唯一的发射器名称，以便侦听器键不会发生冲突。</li>
        <li>当组件不再需要手动注册的侦听器时，取消订阅它们。</li>
        <li>保持事件有效负载的记录和稳定，因为发射器不会验证其形状。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用命名空间来隔离具有通用名称的功能级事件。</li>
        <li>当发射器有多个选项时，首选配置对象。</li>
        <li>当组件拥有同一发射器的多个订阅时，请使用 <code>unsubscribeAll</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：组件可以在不共享发射器实例的情况下进行通信吗？</strong>
          <br />
          答：是的。使用相同的事件名称和命名空间； Hook 使用共享侦听器注册表。
        </li>
        <li>
          <strong>问：卸载发射器组件时会发生什么？</strong>
          <br />
          答：它注册的监听器会自动删除。
        </li>
        <li>
          <strong>问：我可以传递多个事件参数吗？</strong>
          <br />
          答：是的。将附加参数传递给 <code>emit</code>；侦听器以相同的顺序接收它们。
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        nameOrConfig: "发射器名称或部分配置对象。",
        initialEventName: "位置超载的可选初始事件名称。",
        initialListener: "为初始事件注册的可选侦听器。",
        config: "可选的部分发射器配置。",
      },
      return: {
        name: "已解析的发射器名称。",
        emit: "向同一命名空间中的侦听器发布事件。",
        subscribe: "注册一个事件监听器。",
        unsubscribe: "删除一个事件的该发射器的侦听器。",
        unsubscribeAll: "删除此发射器注册的所有侦听器。",
      },
    },
  },

  useReceiver: {
    desc: "订阅指定事件并公开其最新参数和侦听控件。",
    detail: (
      <>
        <p>
          <code>useReceiver</code> 侦听通过共享发射器注册表发布的事件。它
          以数组和控制器的形式返回最新的事件参数，用于启动、停止和
          重置接收器。
        </p>
        <p>
          使用字符串重载作为简单的事件名称，或者在接收者时使用选项重载
          需要稳定的名称、命名空间或回调。
        </p>
      </>
    ),
    $p1: "在 useEmitter 和 useReceiver 中使用相同的事件名称和命名空间，以便接收器可以接收发出的有效负载。",
    consideration: (
      <ol>
        <li>在其命名空间内选择唯一的接收器名称以避免侦听器冲突。</li>
        <li>第一个元组值是 <code>null</code>，直到接收者收到事件。</li>
        <li>停止接收器会删除其订阅；再次拨打<code>start</code>订阅。</li>
        <li>接收者回调接收传递给 <code>emit</code> 的相同参数列表。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>当事件名称或命名空间在功能之间共享时，请使用选项重载。</li>
        <li>使用 <code>isListening</code> 使启动和停止控件与订阅状态保持一致。</li>
        <li>当视图应清除其显示的事件负载时调用 <code>reset([])</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：eventResult 包含什么？</strong>
          <br />
          答：它按顺序包含最近接收到的事件的参数。
        </li>
        <li>
          <strong>问：如何暂停和恢复接收？</strong>
          <br />
          A：调用<code>receiver.stop()</code>暂停，调用<code>receiver.start()</code>恢复。
        </li>
        <li>
          <strong>问：清理是自动的吗？</strong>
          <br />
          答：是的。当组件卸载时，订阅将被删除。
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        eventNameOrOptions: "事件名称或接收者选项对象。",
        callback: "可选的位置事件回调。",
      },
      return: {
        eventResult: "最新事件参数或第一个事件之前的 null。",
        receiver: "具有启动、停止、重置和 isListening 的接收器控制对象。",
      },
    },
  },

  useBroadcastChannel: {
    desc: "使用 BroadcastChannel 在同源浏览器上下文之间传递序列化消息。",
    detail: (
      <>
        <p>
          <code>useBroadcastChannel</code> 打开浏览器 <code>BroadcastChannel</code> 以获取所提供的
          名称并在另一个通道实例发布消息时调用 <code>messageHandler</code>。
          当组件卸载或通道名称更改时，通道会自动关闭。
        </p>
        <p>
          消息由 <code>postMessage</code> 进行 JSON 字符串化。默认解析器读回它们
          作为 JSON；传递 <code>false</code> 来接收序列化字符串或提供自定义解析器。
        </p>
      </>
    ),
    $p1: "在需要交换消息的选项卡、窗口、worker 或 Hook 实例中使用相同的通道名称。",
    consideration: (
      <ol>
        <li>
          BroadcastChannel 是同源的并且依赖于浏览器。它不能替代服务器
          连接或跨源消息传递。
        </li>
        <li>
          BroadcastChannel 不会将消息传递回发送消息的通道对象。使用一个
          第二种情况是本地发送者也需要观察消息。
        </li>
        <li>
          当前的实现使用 <code>JSON.stringify</code> 序列化每个传出消息。
          避免无法序列化为 JSON 的值。
        </li>
        <li>
          尽可能使用 <code>useCallback</code> 保持消息处理程序稳定，以避免重新打开
          每个渲染上的通道。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用特定于功能的通道名称以避免不相关的消息冲突。</li>
        <li>为长期存在的通道定义一个小的、版本化的消息形状。</li>
        <li>当接收 UI 不再活动时，关闭或让 Hook 清理通道。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么发件人没有收到自己的消息？</strong>
          <br />
          答：BroadcastChannel 将发送通道对象排除在传递之外。打开另一个实例
          如果发送者也需要显示该消息。
        </li>
        <li>
          <strong>问：我可以寄东西吗？</strong>
          <br />
          A：可以，只要能用<code>JSON.stringify</code>序列化即可。
        </li>
        <li>
          <strong>Q：unmount 会关闭通道吗？</strong>
          <br />
          答：是的。 Hook 在清理期间调用 <code>close()</code>。
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T>"}</code> 是应用程序消息类型。
        </p>
      ),
      params: {
        channelName: "同源通道名称。",
        messageHandler: "从另一个通道实例接收到的消息的回调。",
        parser: "用于序列化消息的 JSON 解析标志或自定义解析器。",
      },
      return: {
        postMessage: "序列化和发布消息的函数。",
      },
    },
  },

  useReflect: {
    desc: "将对象保留在引用中，同时公开基于反应式反射的访问和突变助手。",
    detail: (
      <>
        <p>
          <code>useReflect</code> 存储对象而不替换每个对象上的对象引用
          突变。其 <code>get</code>、<code>set</code>、<code>has</code> 和 <code>apply</code>
          方法使用 JavaScript 反射并在突变后强制 React 渲染。
        </p>
        <p>
          这对于需要命令式更新同时仍然存在的小型可变对象模型非常有用
          当组件的可见值发生变化时通知组件。
        </p>
      </>
    ),
    $p1: "在渲染期间使用 get 进行读取，并设置或应用应触发重新渲染的突变。",
    consideration: (
      <ol>
        <li>存储的对象发生原地变异；不要假设 set 返回一个新的对象引用。</li>
        <li>使用 <code>get()</code> 而不带完整对象的参数或传递一个属性的键。</li>
        <li>当更新需要可预测的结构共享或减速器历史记录时，首选不可变的 React 状态。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用 <code>set</code> 表示单个属性，使用 <code>apply</code> 表示协调突变。</li>
        <li>在读取可选或动态命名的属性之前使用 <code>has</code>。</li>
        <li>尽可能保持对象形状稳定，以便 TypeScript 可以推断属性类型。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：set 会触发 React 更新吗？</strong>
          <br />
          答：是的。 Hook 在 Reflect.set 操作之后强制渲染。
        </li>
        <li>
          <strong>问： get() 返回一个副本吗？</strong>
          <br />
          答：不。当没有提供属性时，它返回存储的对象引用。
        </li>
        <li>
          <strong>问：什么时候应该使用 useState？</strong>
          <br />
          答：当不可变更新、更改历史记录或减速器式转换比命令式突变更重要时，请使用 useState。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T extends object, K extends keyof T>"}</code></p>,
      params: {
        initialValue: "Hook 存储的初始对象。",
      },
      return: {
        get: "读取整个对象或选定的属性。",
        set: "设置一个属性并触发渲染。",
        has: "检查属性是否存在。",
        apply: "应用突变回调并触发渲染。",
      },
    },
  },

  useConsoleLog: {
    desc: "捕获 React 状态下的 console.log 消息，同时保留原始控制台输出。",
    detail: (
      <>
        <p>
          <code>useConsoleLog</code> 将组件订阅到全局 <code>console.log</code>
          函数并将每个捕获的调用作为格式化字符串数组返回。原来的控制台
          仍然调用实现，因此浏览器开发人员工具继续接收日志。
        </p>
        <p>
          多个 Hook 实例共享一个包装器并独立删除。当最后一个
          订阅者卸载后，恢复原来的控制台功能。
        </p>
      </>
    ),
    $p1: "将捕获的数组用于临时应用程序内诊断面板，而不是作为结构化应用程序日志记录的替代品。",
    consideration: (
      <ol>
        <li>Hook 观察全局控制台输出，包括订阅时来自不相关代码的日志。</li>
        <li>参数用空格连接并存储为字符串，因此不会保留原始类型。</li>
        <li>无界日志记录会增加返回的数组；在应用程序级别清除或限制显示的日志。</li>
        <li>避免从显示捕获日志的组件的渲染路径进行日志记录，以防止反馈循环。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>仅在开发工具、诊断或明确范围的调试视图中使用它。</li>
        <li>显示最近日志的有界切片，而不是渲染整个数组。</li>
        <li>首选用于生产遥测和结构化元数据的专用记录器。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：useConsoleLog 是否会抑制浏览器日志？</strong>
          <br />
          答：不会。它将每个捕获的呼叫转发到原始 <code>console.log</code>。
        </li>
        <li>
          <strong>问：它是否捕获console.error和console.warn？</strong>
          <br />
          答：不会。当前的 Hook 只包装了 <code>console.log</code>。
        </li>
        <li>
          <strong>问：console.log 在卸载时会恢复吗？</strong>
          <br />
          答：是的，在删除最后一个活跃订阅者之后。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        none: "该 Hook 不带任何参数。",
      },
      return: {
        logs: "捕获的 console.log 消息格式化为字符串。",
      },
    },
  },

  useSingleton: {
    desc: "在组件实例的生命周期内创建一个稳定的实例。",
    detail: (
      <>
        <p>
          <code>useSingleton</code> 在第一次渲染时调用提供的工厂并保留返回的
          参考值。稍后的渲染将返回相同的值，而无需再次调用工厂。
        </p>
        <p>
          稳定性仅限于一个已安装的组件实例。单独的组件实例接收
          单独的值，并且当组件卸载时，Hook 不会自动处置对象。
        </p>
      </>
    ),
    $p1: "使用工厂进行昂贵的初始化或必须在重新渲染时保持稳定的命令性对象。",
    consideration: (
      <ol>
        <li>工厂在渲染期间运行，因此请保持同步并且不受外部副作用的影响。</li>
        <li>此 Hook 不会创建进程范围或应用程序范围的单例。</li>
        <li>当实例拥有订阅或连接时，通过有效清理手动释放资源。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将其用于稳定的客户端、注册表、可变模型或其他每个组件的命令值。</li>
        <li>保持工厂独立于更换道具；当身份应该改变时创建一个新的组件实例。</li>
        <li>将拥有资源的实例与 <code>useEffect</code> 清理配对。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：实例是所有组件共享的吗？</strong>
          <br />
          答：不会。每个安装的组件实例都有自己的稳定值。
        </li>
        <li>
          <strong>问：道具改变时工厂会重新运行吗？</strong>
          <br />
          答：不会。它会针对已安装的组件实例运行一次。
        </li>
        <li>
          <strong>Q：Hook调用会自动释放吗？</strong>
          <br />
          A：不需要。对需要处置的资源添加效果清理。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the instance type.</p>,
      params: {
        createInstance: "同步工厂在第一次渲染时调用。",
      },
      return: {
        instance: "稳定的每个组件实例。",
      },
    },
  },

  useMediaQuery: {
    desc: "跟踪 CSS 媒体查询当前是否与浏览器环境匹配。",
    detail: (
      <>
        <p>
          <code>useMediaQuery</code> 使用 <code>window.matchMedia</code> 评估提供的查询并
          返回一个布尔值。它侦听媒体查询更改并在视口时更新结果，
          配色方案、输入设备或其他查询的功能发生变化。
        </p>
        <p>
          Hook 支持现代 <code>addEventListener</code> API 和旧版
          <code>addListener</code> 旧版浏览器的后备。
        </p>
      </>
    ),
    $p1: "传递稳定的查询字符串并使用布尔结果来选择布局、行为或可访问性处理。",
    consideration: (
      <ol>
        <li>Hook在初始化时读取<code>window.matchMedia</code>，需要浏览器环境。</li>
        <li>保持查询字符串稳定，除非查询本身发生变化。</li>
        <li>使用 CSS 媒体查询来解决仅样式问题，并在必须更改 JavaScript 行为时使用此 Hook。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>重用命名查询常量以避免组件之间的小字符串差异。</li>
        <li>保持匹配和不匹配的布局易于访问且功能齐全。</li>
        <li>使用与 CSS 相同的断点来保持行为和视觉布局一致。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：当视口改变时它会更新吗？</strong>
          <br />
          答：是的。当媒体查询列表的匹配状态改变时，它会发出一个改变事件。
        </li>
        <li>
          <strong>问：我可以查询配色方案或简化运动吗？</strong>
          <br />
          答：是的。可以使用浏览器的 <code>matchMedia</code> 实现支持的任何查询。
        </li>
        <li>
          <strong>问：我可以在服务器渲染时使用它吗？</strong>
          <br />
          答：当前实现在初始化期间访问 <code>window</code>，因此请提供浏览器兼容的环境或 SSR 包装器。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        query: "由 matchMedia 评估的 CSS 媒体查询字符串。",
      },
      return: {
        matches: "当前查询是否匹配。",
      },
    },
  },

  useNetWork: {
    desc: "跟踪浏览器在线状态和可用网络连接估计。",
    detail: (
      <>
        <p>
          <code>useNetWork</code> 将 <code>navigator.onLine</code> 与可选网络信息相结合
          API 值，例如下行链路、有效类型、往返时间和数据保存偏好。
        </p>
        <p>
          当浏览器暴露时，它响应在线/离线事件和连接变化
          连接对象。可以限制更新以减少网络快速变化期间的重新渲染。
        </p>
      </>
    ),
    $p1: "使用在线状态进行用户反馈，并将连接估计视为提示而不是保证。",
    consideration: (
      <ol>
        <li>网络信息 API 字段是可选的，并且在许多浏览器中不可用。</li>
        <li><code>navigator.onLine</code>表示网络连接启发式，未成功访问特定服务器。</li>
        <li>不要使用下行链路或有效类型作为安全或授权信号。</li>
        <li>当频繁更新会导致不必要的渲染时，请使用大约 17 毫秒以上的节流间隔。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>基于<code>online</code>显示重连或离线UI，然后独立验证重要请求。</li>
        <li>使用 <code>effectiveType</code> 和 <code>saveData</code> 选择可选质量或预取行为。</li>
        <li>使用回退处理缺失字段，因为连接元数据依赖于浏览器。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么速度字段未定义？</strong>
          <br />
          答：浏览器可以在不暴露网络信息 API 的情况下支持在线事件。
        </li>
        <li>
          <strong>问：在线是否意味着API服务器可达？</strong>
          <br />
          A：不是，是浏览器连接提示；请求成功还是需要直接检查。
        </li>
        <li>
          <strong>问：throttleInterval 控制什么？</strong>
          <br />
          答：它限制了 Hook 在网络事件发生后更新状态的频率。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        throttleInterval: "状态更新的可选最小间隔。",
      },
      return: {
        status: "在线状态和可选连接估计。",
      },
    },
  },

  useWhyDidYouUpdate: {
    desc: "记录渲染之间更改的值以帮助诊断意外更新。",
    detail: (
      <>
        <p>
          <code>useWhyDidYouUpdate</code> 存储之前的 props 对象并将其键与
          每次渲染后的当前对象。当值通过引用发生变化时，它会记录之前的值
          和下一个值以及提供的组件名称。
        </p>
        <p>
          第一次渲染仅建立基线，因此不会发出诊断消息，直到
          稍后渲染包含更改的值。
        </p>
      </>
    ),
    $p1: "在调查组件为何重新渲染或接收更改的 props 时暂时使用此 Hook。",
    consideration: (
      <ol>
        <li>比较是浅层的，使用严格的引用比较，而不是深度相等。</li>
        <li>如果没有有意的日志记录策略，请勿在生产中启用详细诊断。</li>
        <li>每当内联对象和函数的父级重新呈现时，内联对象和函数就会出现更改，因为它们的引用是新的。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>传递被调查组件收到的实际 props 或值。</li>
        <li>使用描述性名称，以便控制台消息可以快速识别组件。</li>
        <li>将输出与 React DevTools 和记忆分析相结合，而不是将每个更改都视为错误。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么挂载上没有任何记录？</strong>
          <br />
          答：第一次渲染建立了 previous-props 基线。
        </li>
        <li>
          <strong>问：它是否深入比较嵌套对象？</strong>
          <br />
          答：不。它将每个顶级值与严格的不平等进行比较。
        </li>
        <li>
          <strong>问：更改记录在哪里？</strong>
          <br />
          答：Hook 将 <code>[why-did-you-update]</code> 消息写入浏览器控制台。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        name: "控制台输出中包含诊断标签。",
        props: "要比较的当前顶级值。",
      },
      return: {
        value: "空白;通过 console.log 报告更改。",
      },
    },
  },

  useEyeDropper: {
    desc: "包装浏览器 EyeDropper API 以进行本机屏幕颜色选择。",
    detail: (
      <>
        <p>
          <code>useEyeDropper</code>检测原生EyeDropper API，存储最新选择的sRGB
          十六进制颜色，并公开用于启动选择器的 <code>open</code> 操作。
        </p>
        <p>
          该选择器是实验性的，必须通过用户交互（例如单击按钮）打开。
          本机取消、中止信号和其他选择器错误通过返回的
          承诺。
        </p>
      </>
    ),
    $p1: "当 isSupported 为 false 时禁用选择器按钮，并处理因取消或错误而被拒绝的开放承诺。",
    consideration: (
      <ol>
        <li>必须通过用户手势打开本机选择器；在效果期间调用 open 可能会被拒绝。</li>
        <li>不受支持的浏览器会从 <code>open</code> 返回未定义，而不打开选择器。</li>
        <li>所选值是 sRGB 十六进制文本，并保持初始值，直到成功选取。</li>
        <li>当周围交互需要显式取消时，请使用 <code>AbortSignal</code>。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用 <code>isSupported</code> 实现基于功能的 UI，并在需要时提供后备颜色输入。</li>
        <li>捕获拒绝的承诺，以便用户取消不会成为未处理的拒绝。</li>
        <li>使用存储的 <code>sRGBHex</code> 值作为预览或颜色表单状态的源。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么按钮被禁用？</strong>
          <br />
          答：当前浏览器不公开本机 EyeDropper API。
        </li>
        <li>
          <strong>问：当用户按 Esc 键时会发生什么？</strong>
          <br />
          A：原生Promise拒绝；如果取消应该悄悄处理，请注意结果。
        </li>
        <li>
          <strong>问：不支持时 open 是否会返回颜色？</strong>
          <br />
          答：不。它会在不打开选择器的情况下解析为未定义。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        options: "可选的初始颜色值。",
      },
      return: {
        isSupported: "原生 EyeDropper API 是否可用。",
        sRGBHex: "最新选择的 sRGB 十六进制颜色。",
        open: "打开本机选择器并使用所选结果进行解析。",
      },
    },
  },

  useBattery: {
    desc: "读取电池状态 API 信息并订阅电池更改。",
    detail: (
      <>
        <p>
          <code>useBattery</code>调用<code>navigator.getBattery()</code>并返回充电状态，
          一旦浏览器解析了 BatteryManager，就会显示电量、充电时间和放电时间。
        </p>
        <p>
          当相应的电池状态 API 事件更改时，可选回调运行。钩子
          在清理期间删除所有侦听器，但浏览器对此 API 的支持有限。
        </p>
      </>
    ),
    $p1: "在渲染 Hook 之前检查 navigator.getBattery 支持，并在承诺解析时处理初始 null 状态。",
    consideration: (
      <ol>
        <li>电池状态 API 在许多浏览器中不可用或受到限制。</li>
        <li>当前的实现假设 Hook 渲染时存在 <code>navigator.getBattery()</code>。</li>
        <li>电池电量和时间值是估计值，并且可以独立于应用程序状态而变化。</li>
        <li>请勿使用电池数据作为安全、身份或授权信号。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用功能检测并在电池数据不可用时提供中立后备。</li>
        <li>使用电量或充电状态来调整可选工作，而不是阻止基本功能。</li>
        <li>保持事件回调轻量且稳定。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么返回值是null？</strong>
          <br />
          A：BatteryManager承诺尚未解决；这也是第一次更新之前的回退状态。
        </li>
        <li>
          <strong>问：如果浏览器没有 getBattery 方法怎么办？</strong>
          <br />
          A：不要在该环境下渲染Hook；显示基于特征检测的后备 UI。
        </li>
        <li>
          <strong>问：支持哪些回调？</strong>
          <br />
          A：支持充电、电量、充电时间、放电时间变化回调。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onChargingChange: "可选的位置充电更改回调。",
        callbacks: "用于充电、电平、充电时间和放电时间更改的可选回调。",
      },
      return: {
        batteryStatus: "电池信息或在不可用/加载时为空。",
      },
    },
  },

  useProvide: {
    desc: "发布命名状态以供其他组件通过 useInject 使用。",
    detail: (
      <>
        <p>
          <code>useProvide</code> 在名称下发布一个值，以便其他组件可以读取它
          <a href="#/docs/useInject">使用注入</a>。它在内部使用库事件层并且
          每当提供者以更改的状态呈现时广播当前值。
        </p>
        <p>
          当消费者应该能够时，通过 <code>options.setState</code> 传递状态设置器
          更新提供者。隔离多个存储时，在两个 Hook 中使用相同的自定义命名空间。
        </p>
      </>
    ),
    $p1: "从拥有源状态的组件调用 useProvide，然后使用每个使用者的相同名称。",
    consideration: (
      <ol>
        <li>提供者名称必须与注入器名称完全匹配。</li>
        <li>仅当有意允许消费者更改源状态时才提供 setter。</li>
        <li>注入的值在第一次渲染时可能是未定义的，因为提供程序发现是事件驱动的。</li>
        <li>当应用程序的不同部分可能重用相同的提供程序名称时，请使用自定义命名空间。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>让提供者与状态所有者保持密切联系，并使用 TypeScript 记录值的形状。</li>
        <li>保护消费者渲染，直到提供者值可用。</li>
        <li>公开消费者更新时，传递来自 <code>useState</code> 的稳定设置器。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：如果不存在匹配的提供商会怎样？</strong>
          <br />
          答：注入器接收 <code>undefined</code>，直到提供者具有相同的名称和命名空间
          变得可用。
        </li>
        <li>
          <strong>问：注入器可以更新提供程序吗？</strong>
          <br />
          答：仅当提供者通过 <code>options.setState</code> 传递 setter 时。
        </li>
        <li>
          <strong>问：提供者是否需要 React 上下文？</strong>
          <br />
          答：不需要。它使用共享发射器层，因此消费者不需要是直系后代。
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        name: "唯一的提供商名称。",
        state: "发布到匹配喷油器的值。",
        options: "可选的 setter 和命名空间配置。",
      },
      return: {
        value: "空白; Hook 通过共享提供者事件层发布状态。",
      },
    },
  },

  useInject: {
    desc: "从 useProvide 发布者读取命名状态，并可选择公开其设置器。",
    detail: (
      <>
        <p>
          <code>useInject</code> 使用提供的名称订阅提供者并返回一个元组
          包含当前值和可选的设置器。它请求当前的提供者值
          当喷油器安装时。
        </p>
        <p>
          TypeScript 泛型可以描述提供者命名空间和值形状。当以下情况时传递回调
          消费者需要对提供者的更新做出反应，而不需要从渲染状态中导出该行为。
        </p>
      </>
    ),
    $p1: "使用与 useProvide 相同的名称和命名空间，并在提供程序响应之前处理初始未定义值。",
    consideration: (
      <ol>
        <li>当提供者尚未响应时，注入的值在第一次渲染时未定义。</li>
        <li>除非提供者传递 options.setState，否则 setter 是未定义的。</li>
        <li>保持两个 Hook 之间的提供程序名称和命名空间一致。</li>
        <li>使用回调选项来消除副作用，并保持从返回值派生的渲染。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>声明一个类型映射，以便精确推断注入的值和设置器。</li>
        <li>当提供程序值未定义时渲染加载或后备 UI。</li>
        <li>仅针对有意共享且可变的状态公开 setter。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么该值一开始是未定义的？</strong>
          <br />
          答：提供者发现是通过初始渲染后的效果和事件交换来进行的。
        </li>
        <li>
          <strong>问：setValue什么时候可用？</strong>
          <br />
          答：仅当匹配提供者通过 <code>options.setState</code> 传递其状态设置器时。
        </li>
        <li>
          <strong>问：我可以使用自定义命名空间吗？</strong>
          <br />
          答：是的。将相同的命名空间传递给 <code>useProvide</code> 和 <code>useInject</code>。
        </li>
      </ul>
    ),
    $apis: {
      generics: (
        <p>
          <code>{"<T, N, K, V, C>"}</code> 描述了命名空间映射、命名空间、键、值和
          回调结果类型。
        </p>
      ),
      params: {
        name: "要注入的提供者名称。",
        options: "可选的命名空间和值回调。",
      },
      return: {
        value: "当前提供程序值或在第一次响应之前未定义。",
        setValue: "提供者暴露时的状态设置器，否则未定义。",
      },
    },
  },

  useGuide: {
    desc: "构建分步产品指南，突出显示元素并呈现自定义说明。",
    detail: (
      <>
        <p>
          <code>useGuide</code> 管理一组有序的指导步骤。每一步都可以突出元素
          通过 id，显示自定义内容，并在活动步骤更改时调用回调。
        </p>
        <p>
          Hook 返回当前步骤索引和一个带有开始、停止、下一个、上一个和
          直接导航方法。导出的<code>Target</code>组件可以注册一个元素
          用于基于门户的自定义指南内容。
        </p>
      </>
    ),
    $p1: "首先定义步骤列表，然后从用户操作（例如帮助按钮或入门提示）调用guider.start。",
    $p2: (
      <>
        <p>
          <strong>当指南内容应通过门户呈现时，请使用目标组件。</strong>
          原始方法将生成的容器附加到目标元素，而目标方法
          通过React的portal机制来渲染内容。
        </p>
        <p>
          在原始方法中，<code>useGuide</code> 为每个引导渲染创建一个包装器并将其附加
          到匹配的目标元素。
        </p>
        <p>
          使用 <code>Target</code>，目标保留在正常的 React 树中，引导内容为
          使用 <code>ReactDOM.createPortal</code> 渲染到其中。
        </p>
        <p>
          两种方法都将活动目标提升到掩模上方。使用配置的容器样式和
          用于控制自定义指南内容的位置和外观的类名称。
        </p>
      </>
    ),
    consideration: (
      <ol>
        <Li>当其步骤变为活动状态时，每个目标 id 必须存在于 DOM 中。</Li>
        <Li>目标 ID 应该是唯一的，以便指南不会突出显示意外的元素。</Li>
        <Li>在删除或替换活动步骤引用的元素之前停止指南。</Li>
        <Li>自定义渲染函数在正常目标子树之外运行，并且不应采用本地上下文提供程序。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>
          确保目标的父级具有 <code>relative</code> 或 <code>absolute</code> 等位置
          当自定义内容使用绝对定位时。
        </Li>
        <Li>
          如果父级是滚动容器，请为其提供足够的尺寸来容纳指南内容并验证
          当用户滚动时指南仍然可见。
        </Li>
        <Li>
          避免在父级上使用 <code>overflow: hidden</code>，因为它可能会剪辑指南内容。
        </Li>
        <Li>
          如果另一层具有较高的 <code>z-index</code>，请调整遮罩和容器 z-index 值
          因此活动指南仍然可见。
        </Li>
        <Li>
          定位自定义指南内容时考虑父级填充和边框。
        </Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：如何开始指南？</strong>
          <br />
          答：调用<code>guider.start()</code>；活动步骤从 -1 更改为第一步。
        </li>
        <li>
          <strong>问：如何在步骤之间移动？</strong>
          <br />
          A：使用返回的<code>next()</code>、<code>last()</code>或<code>go(index)</code>
          引导对象。
        </li>
        <li>
          <strong>问：为什么未显示自定义渲染？</strong>
          <br />
          A：确保目标 id 存在于 DOM 中并且渲染 id 与当前步骤的匹配
          目标 ID。对于 Target 方法，使用以下命令渲染导出的 <code>Target</code> 组件
          相同的 ID 和向导。
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        steps: "带有目标 ID 和可选自定义渲染的有序指南步骤。",
        callback: "使用活动步骤索引和步骤配置调用可选回调。",
        config: "可选的容器和面罩配置。",
      },
      return: {
        step: "当前步数索引； -1 表示引导停止。",
        guider: "具有导航和目标注册方法的控制器。",
      },
    },
  },
  useTickState: {
    desc: "一个用勾来管理状态的钩子。",
    detail: (
      <>
        useTickState 是一个钩子，用于通过tick管理状态：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>初始值</strong> ： 任何
          </li>
          <li>
            <strong>勾选</strong> : "onSetState" | “改变时”
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "通过onSetState勾选（默认）",
    $p2: "通过 onChange 勾选",
    consideration: (
      <ol>
        <Li>当勾选“onSetState”时，最好避免滥用setState</Li>
        <Li>当勾选“onChange”时，最好确认一下你的依赖关系</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>勾选“onSetState”，在调用setState之前检查新值是否与旧值不同。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong> ：为什么我需要 useTickState？
        </Li>
        <Li>
          <strong>A</strong> : useTickState 给你一个更清晰的标签来标记状态是否改变
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
    desc: "监听 Reactor 实例值变化的钩子。",
    detail: (
      <>
        useReactorListener 是一个钩子，用于监听 Reactor 实例的值变化：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>反应堆</strong> ：反应堆实例
          </li>
          <li>
            <strong>打回来</strong> : ReactorListener 回调
          </li>
          <li>
            <strong>即时</strong> : 布尔值，默认为 false
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "注册监听器后，将立即调用立即监听器。因此，第一个示例最初不会获得 userCopy 同步，而第二个示例将获得同步。",
    consideration: (
      <ol>
        <Li>reactor 是 Reactor 实例的类型</Li>
        <Li>回调是 ReactorListenerCallback 的类型</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用立即侦听器来同步初始值。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong> ：为什么我需要 useReactorListener？
        </Li>
        <Li>
          <strong>A</strong> ：useReactorListener 允许您独立监听Reactor。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        target: "应观察其状态变化的 Reactor 实例。",
        callback: "使用当前 Reactor 状态调用侦听器。",
        immediate: "是否立即使用当前值调用回调。",
      },
      return: {
        value: "空白;当组件卸载或目标更改时，侦听器会自动删除。",
      },
    },
  },

  useTicker: {
    desc: "管理股票行情的挂钩。",
    detail: (
      <>
        useTicker 是一个用于管理股票代码的钩子：
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>号</strong> ：回调函数
          </li>
          <li>
            <strong>持续时间或选项</strong> ：股票行情配置的持续时间
          </li>
          <li>
            <strong>选项</strong> : 股票行情配置
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "该演示启动一秒的滚动条。使用暂停、恢复、重置和延迟控件来观察其滴答计数和状态。",
    consideration: (
      <ol>
        <li>当immediate为true时，只有第一个resume才会立即调用回调。</li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用暂停和恢复来控制​​应按计划运行的工作。</Li>
        <Li>当滴答计数属于新的逻辑任务时，请使用重置。</Li>
        <Li>保持回调轻量级，因为它是通过计时器运行的。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 默认持续时间是多少？
        </Li>
        <Li>
          <strong>A</strong>：默认持续时间为 1000 毫秒。
        </Li>
        <Li>
          <strong>Q</strong>: 立即控制什么？
        </Li>
        <Li>
          <strong>A</strong>：它控制回调是在挂载时运行、在滴答时运行、在每次启动时运行还是不立即运行。
        </Li>
        <Li>
          <strong>Q</strong>：重置是否会暂停股票行情？
        </Li>
        <Li>
          <strong>A</strong>：否。重置将滴答计数设置为零；需要时单独调用暂停。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        fn: "使用下一个刻度号调用回调。",
        durationOrOptions: "可选的持续时间（以毫秒为单位）或 TickerOptions 对象。",
        options: "与持续时间参数一起使用的可选代码配置。",
      },
      return: {
        tick: "当前刻度数。",
        status: "股票行情自动收录器是打开还是关闭。",
        resume: "恢复股票行情。",
        pause: "暂停股票行情。",
        reset: "将滴答计数重置为零。",
        delayedPause: "在指定的延迟后暂停股票代码。",
        delayedResume: "在指定的延迟后恢复股票行情自动收录器。",
      },
    },
  },

  useDebounce: {
    desc: "一个 React Hook，它延迟函数执行，直到调用停止指定的时间。",
    detail: (
      <>
        <p>
          <code>useDebounce</code> 返回一个去抖函数。重复调用会重置延迟，因此包装
          函数仅在调用者停止调用它后运行。
        </p>
        <p>
          返回的函数还公开 <code>cancel</code> 以清除挂起的调用。
        </p>
      </>
    ),
    $p1: "尝试频繁点击该按钮，并查看最后一次点击后 1 秒后数字是否发生变化。",
    consideration: (
      <ol>
        <Li>将去抖函数传递给事件处理程序时保持其稳定。</Li>
        <Li>使用非负延迟；零延迟直接执行包装的函数。</Li>
        <Li>当挂起的调用不得运行时调用取消。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>对搜索字段、调整处理程序大小和其他高频事件使用去抖动。</Li>
        <Li>选择一个可以平衡响应能力与您要发送的请求数量的延迟。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 包装后的函数什么时候运行？
        </Li>
        <Li>
          <strong>A</strong>：它在延迟结束后运行，而无需再次调用去抖函数。
        </Li>
        <Li>
          <strong>Q</strong>: 如何防止未接来电？
        </Li>
        <Li>
          <strong>A</strong>：调用返回函数的cancel方法。
        </Li>
      </ul>
    ),
    $apis: {
      generics: (
        <ul>
          <li>
            <strong>R</strong>: 建议扩展原语 |数组 |对象|日期 |地图 |放
          </li>
        </ul>
      ),
      params: {
        fn: "应延迟调用的函数。",
        delay: "延迟以毫秒为单位；默认为 200。",
        immediate: "突发中的第一个调用是否立即运行。",
        callback: "使用包装的函数结果调用可选回调。",
      },
      return: {
        debounceFn: "返回 Promise 并公开 cancel() 的去抖函数。",
        cancel: "取消挂起的调用并清除防抖窗口。",
      },
    },
  },

  useMap: {
    desc: "一个 React Hook，通过方便的操作方法来管理 Map 状态。",
    detail: (
      <>
        useMap 是一个钩子，它提供了一种在 React 中管理 Map 状态的便捷方法。它包装了原生地图数据
        结构并提供 set、get、del 和 add 等方法来操作地图状态。返回的地图是
        readonly，也就是说不能直接使用map.set()，而必须使用提供的set()方法来触发
        重新渲染。
        <h4>参数：</h4>
        <ol>
          <li>
            <strong>初始状态</strong>: T extends Object - 将转换为 Map 的初始状态对象。
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "基本用法：使用对象初始化映射，并使用 get() 检索值和 set() 更新值。",
    $h2: "获取和设置",
    $p2: "您可以直接通过“map.get”或使用get方法从地图中获取属性，并使用set方法设置属性。地图中省略了“map.set”。",
    $h3: "集合的四个重载",
    $p3: (
      <>
        Set 方法有 4 个重载：
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
          关于第三次和第四次过载，您可以将第二个参数设置为“重新水化”以重新水化地图，或“覆盖”以
          覆盖地图。如果未指定模式，则默认为“补水”。
        </p>
        <p>关于第四个重载，setMapAction 的返回可以是 T 的普通对象的 Map 实例的类型。</p>
      </>
    ),
    $h4: "删除和添加",
    $p5: "您可以使用 del 方法删除属性，并使用 add 方法添加属性。",
    consideration: (
      <ol>
        <Li>除非你del，否则map.get的类型实际上是T[K]</Li>
        <Li>默认设置操作模式为“补水”</Li>
      </ol>
    ),
    $best: (
      <ol>
        <span>如果您更喜欢 Map 而不是 Object，那么 useMap 是比 useRecord 更好的选择</span>
      </ol>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 为什么用 Map 来使用 Map 而不是 useState 呢？
        </Li>
        <Li>
          <strong>A</strong>：useMap提供方便的方法（set、get、del、add）并确保不变性
          自动地。您不需要手动创建新的 Map 实例来触发重新渲染。
        </Li>
        <Li>
          <strong>Q</strong>：“补水”和“覆盖”模式有什么区别？
        </Li>
        <Li>
          <strong>A</strong>：“补充”将新值与现有值合并（保留现有键），而“覆盖”
          替换整个地图（删除所有现有的键）。
        </Li>
        <Li>
          <strong>Q</strong>: 可以直接使用map.set()吗？
        </Li>
        <Li>
          <strong>A</strong>：不，返回的地图是只读的。必须使用提供的set()方法来触发
          重新渲染。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        initial: "初始对象转换为Map状态。",
      },
      return: {
        map: "包含当前状态的只读映射。",
        get: "通过键返回一个值。",
        set: "使用支持的重载更新一个键或合并/替换映射。",
        del: "通过键删除属性。",
        add: "向地图添加属性。",
      },
    },
  },

  useRecord: {
    desc: "一个 React Hook，用于通过方便的获取和设置操作来管理类型化的单级记录。",
    detail: (
      <>
        <p>
          <code>useRecord</code> 在 React 状态下存储一个普通对象并返回当前记录
          setter 和 getter 函数。通过 <code>set</code> 更新会创建新记录并触发渲染。
        </p>
        <h4>参数：</h4>
        <ol>
          <li>
            <strong>最初的</strong>：用作初始记录值的可选对象
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "当应通过 Hook API 读取值时，使用 setRecord 进行更新并使用 getRecord。",
    consideration: (
      <ol>
        <Li>useRecord 管理一个浅层的、一级对象；它不会深度克隆嵌套值。</Li>
        <Li>使用补充模式合并字段并使用覆盖模式替换完整记录。</Li>
        <Li>不要直接改变返回的记录，因为直接改变不会触发渲染。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>当下一个值取决于前一个值时，首选函数设置器形式。</Li>
        <Li>使用稳定的对象形状，以便 TypeScript 可以准确地推断键和值类型。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>： 补水和覆盖有什么区别？
        </Li>
        <Li>
          <strong>A</strong>：ReHydra 将新字段合并到当前记录中； override 完全取代了它。
        </Li>
        <Li>
          <strong>Q</strong>：如何更新字段的先前值？
        </Li>
        <Li>
          <strong>A</strong>：传递一个函数作为字段值，如 setRecord("count", (value) =&gt; value + 1)。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        initial: "可选的一级记录用作初始状态。",
      },
      return: {
        state: "当前记录状态。",
        setRecord: "使用补充或覆盖模式更新一个字段或替换/合并记录。",
        get: "返回存储在记录键下的值。",
      },
    },
  },

  useResize: {
    desc: "跟踪窗口或元素尺寸并在尺寸更改时通知组件。",
    detail: (
      <>
        <p>
          当未提供目标时，<code>useResize</code> 测量浏览器窗口。有目标
          id 或 ref，它观察带有 <code>ResizeObserver</code> 的元素并返回其客户端宽度
          和身高。
        </p>
        <p>
          可选的回调接收相同大小的对象。依赖项列表控制何时
          再次创建侦听器或观察者，因此需要时包括更改目标或回调值。
        </p>
      </>
    ),
    $p1: "省略目标跟踪窗口；调整浏览器大小以查看返回的宽度和高度变化。",
    $h2: "观察一个元素",
    $p2: "传递一个元素 id 或 ref 来观察它的大小；更改演示滑块以查看 ResizeObserver 更新。",
    consideration: (
      <ol>
        <li>如果没有目标，Hook 就会监听窗口大小调整事件。</li>
        <li>通过目标，Hook 观察元素并且不直接使用窗口大小调整。</li>
        <li>当应该重新创建效果时，在 deps 中包含更改的目标、回调或配置值。</li>
        <li>在执行第一次测量之前，初始值为零。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用回调来处理副作用，并使用返回的大小来渲染布局状态。</li>
        <li>使用稳定的引用和回调来避免不必要的观察者重新创建。</li>
        <li>首选 CSS 来实现仅样式响应行为，并在 JavaScript 需要尺寸时使用此 Hook。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：useResize 默认观察什么？</strong>
          <br />
          答：当省略 <code>target</code> 时，它会观察浏览器窗口。
        </li>
        <li>
          <strong>Q：我可以通过id观察一个元素吗？</strong>
          <br />
          答：是的。传递其 id 字符串，或传递直接渲染元素的 ref 对象。
        </li>
        <li>
          <strong>问：为什么改变目标不会改变观察者？</strong>
          <br />
          A：效果遵循<code>deps</code>；在应该重新创建时包含目标身份或相关值。
        </li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        options: "可选的回调和窗口或元素目标。",
        deps: "控制侦听器或观察者重新创建的依赖项列表。",
      },
      return: {
        size: "所选目标的当前宽度和高度。",
      },
    },
  },

  useThrottle: {
    desc: "useThrottle 是一个钩子，用于限制某个函数在一段时间内最多调用一次。",
    detail: (
      <>
        <h4>参数 ： </h4>
        <ol>
          <Li>
            <strong>号</strong> ：回调函数
          </Li>
          <Li>
            <strong>间隔</strong> ： 数字
          </Li>
          <Li>
            <strong>选项</strong> : 油门配置
          </Li>
        </ol>
        例如：
      </>
    ),
    $p1: "单击按钮，查看数字是否每秒仅变化一次。",
    consideration: (
      <ol>
        <Li>前导和尾随至少其中之一必须为真。</Li>
        <Li>使用非负区间；零间隔直接调用该函数。</Li>
        <Li>仅当启用跟踪执行时，返回的函数才会保留最新的调用。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>对滚动、拖动和重复按钮单击等频繁事件使用限制。</Li>
        <Li>当必须处理最终事件时，使用前导来立即反馈并使用尾随。</Li>
        <Li>当待处理的尾随工作应被丢弃时调用取消。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：节流与去抖有何不同？
        </Li>
        <Li>
          <strong>A</strong>：限制将执行限制为每个时间间隔最多执行一次，而去抖动则等待调用停止。
        </Li>
        <Li>
          <strong>Q</strong>: 前导和尾随都可以为假吗？
        </Li>
        <Li>
          <strong>A</strong>：不可以。至少必须启用一个边缘。
        </Li>
        <Li>
          <strong>Q</strong>: 如何取消待处理的尾随呼叫？
        </Li>
        <Li>
          <strong>A</strong>：调用返回函数的cancel方法。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        fn: "应限制其调用的函数。",
        interval: "执行之间的最小间隔（以毫秒为单位）；默认为 200。",
        options: "控制前导、尾随和结果回调行为。",
      },
      return: {
        throttleFn: "返回 Promise 并公开 cancel() 的受限制函数。",
        cancel: "取消挂起的尾随调用并重置限制窗口。",
      },
    },
  },

  useWatchGetter: {
    desc: "一个用来观察状态获取者的钩子。",
    detail: (
      <>
        <h4>参数 ： </h4>
        <ol>
          <li>
            <strong>吸气剂</strong> ：吸气剂
          </li>
          <li>
            <strong>打回来</strong> : 观察者回调
          </li>
          <li>
            <strong>更新程序</strong> ：是否返回手动更新功能。
          </li>
        </ol>
        例如：
      </>
    ),
    $p1: "当 getter 结果发生变化时，将调用回调。",
    consideration: (
      <ol>
        <Li>
          如果你想手动重新更新getter，你可以将updater设置为true，返回值将是
          像[value, reupdate func]这样的数组。
        </Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用 getter 获取派生值，无需手动连接依赖项即可观察到这些派生值。</Li>
        <Li>当必须立即检查外部更改时，将 updater 返回为 true。</Li>
        <Li>让吸气剂保持便宜，因为它会在每个动画帧上进行评估。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：吸气剂多久评估一次？
        </Li>
        <Li>
          <strong>A</strong>：Hook 在动画帧上对其进行评估，并在结果发生变化时通知回调。
        </Li>
        <Li>
          <strong>Q</strong>: 更新程序改变了什么？
        </Li>
        <Li>
          <strong>A</strong>：当 updater true 时，Hook 返回 [value, update]，以便您可以触发立即检查。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        getter: "返回要监视的值的函数。",
        callback: "当 getter 结果更改时调用可选回调。",
        updater: "是否返回带有值的手动更新函数。",
      },
      return: {
        value: "updater 为 false 时的当前 getter 结果。",
        tuple: "[值，更新] 当 updater 为 true 时。",
        update: "手动评估 getter 并在其更改时更新返回值。",
      },
    },
  },

  useTitle: {
    desc: "用于管理和监控文档标题并自动恢复的 React Hook。",
    detail: (
      <>
        <p>
          <code>useTitle</code> 提供了一种反应式方法来管理文档标题。它返回当前标题
          和一个 setter 函数，允许您动态读取和更新标题。
        </p>
        <p>
          该钩子使用 MutationObserver 来检测外部标题更改（例如，来自其他组件或脚本）
          并自动同步状态。当组件卸载时，原始标题将恢复。
        </p>
      </>
    ),
    $p1: "该钩子返回一个包含当前标题和 setter 函数的数组。在上面的选项卡之间切换以查看不同的用例，包括计数器、通知、计时器和状态指示器。",
    consideration: (
      <ol>
        <li>文档标题是全局资源。使用此钩子的多个组件可能会相互冲突。</li>
        <li>该钩子使用 MutationObserver，它具有良好的浏览器支持，但可能无法在非常旧的浏览器中工作。</li>
        <li>组件卸载时会恢复原始标题，这可能会覆盖其他组件设置的标题。</li>
        <li>频繁的标题更新（例如每秒一次）可能会影响低端设备的性能。</li>
      </ol>
    ),
    $best: <ul>
      <li>使用反映当前页面状态或内容的描述性标题。</li>
      <li>对于通知计数，请使用 <code>(3) New Messages</code> 等格式来引起注意。</li>
      <li>避免过于频繁地更新标题（每秒超过一次），以防止出现性能问题。</li>
      <li>将钩子放置在组件的顶层以获得一致的行为。</li>
      <li>对于计时器或计数器，请考虑使用 <code>useEffect</code> 将标题与状态更改同步。</li>
      <li>保持标题简洁 - 浏览器选项卡用于显示标题的空间有限。</li>
    </ul>,
    $faqs: <ul>
      <li><strong>问：组件卸载后会恢复原来的标题吗？</strong><br />答：是的，当组件卸载时，挂钩会自动恢复原始文档标题。</li>
      <li><strong>问：这个钩子可以检测其他组件所做的标题更改吗？</strong><br />答：是的，该钩子使用 MutationObserver 来监视标题元素并自动与外部更改同步。</li>
      <li><strong>问：如果多个组件使用这个钩子会发生什么？</strong><br />答：由于文档标题是全局的，它们可能会相互冲突。考虑仅使用一个实例或在组件之间进行协调。</li>
      <li><strong>问：这适用于所有浏览器吗？</strong><br />答：是的，所有现代浏览器都支持 MutationObserver。对于较旧的浏览器，该挂钩仍然有效，但不会检测外部更改。</li>
      <li><strong>问：我可以用它来进行 SEO 吗？</strong><br />答：这个钩子在客户端动态改变标题。对于 SEO，请在 HTML 中设置初始标题或使用服务器端渲染。</li>
    </ul>,
    $apis: {
      generics: (<></>),
      params: {
        initialTitle: "组件安装时设置的可选初始标题。如果未提供，则使用当前文档标题。",
      },
      return: {
        "[0] title": "当前文档标题（对外部更改做出反应）。",
        "[1] setTitle": "更新文档标题的功能。签名：（标题：字符串）=> void",
      },
    },
  },

  usePromise: {
    desc: "用于运行带有请求状态、取消和生命周期回调的 Promise 的 Hook。",
    detail: (
      <>
        <p>
          <code>usePromise</code> 执行异步函数并公开其当前状态、数据和错误。
          它在挂载时启动一次，并可以使用返回的函数再次执行。
        </p>
        <p>
          启动新请求会中止先前的请求，从而防止过时的结果替换活动状态。
        </p>
      </>
    ),
    $p1: "使用控件重试请求或在请求挂起时中止请求。",
    consideration: (
      <ol>
        <Li>当承诺应重新运行以更改输入时，设置依赖项列表。</Li>
        <Li>使用返回的错误或 onReject 回调处理被拒绝的承诺。</Li>
        <Li>使用abort进行取消；中止的请求不会更新状态。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>将 Promise 创建保留在 Promise 函数内，以便每次执行都会收到新的请求。</Li>
        <Li>使用 onFinally 进行清理，应在活动请求解决后运行。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 初始状态如何？
        </Li>
        <Li>
          <strong>A</strong>：它处于空闲状态，直到效果启动第一个请求，然后它变为挂起状态。
        </Li>
        <Li>
          <strong>Q</strong>: 当执行被调用两次时会发生什么？
        </Li>
        <Li>
          <strong>A</strong>：前一个请求被中止，只有最新的请求可以更新状态。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        promiseFn: "创建要执行的 Promise 的函数。",
        callbacksOrDeps: "可选的生命周期回调对象或依赖项列表。",
        deps: "触发新执行的依赖关系。",
      },
      return: {
        state: "当前状态、已解决的数据和错误。",
        abort: "中止活动请求并忽略其结果。",
        execute: "启动新请求并中止任何先前的请求。",
      },
    },
  },

  useFetch: {
    desc: "用于获取带有加载、错误、取消和生命周期状态的 JSON 数据的 Hook。",
    detail: (
      <>
        <p>
          <code>useFetch</code> 启动对所提供 URL 的请求并将响应解析为 JSON。它返回
          最新数据以及加载和错误状态。
        </p>
        <p>当 URL 或依赖项更改或组件卸载时，请求会自动中止。</p>
      </>
    ),
    $p1: "此示例加载应用程序清单并在请求完成后呈现响应。",
    consideration: (
      <ol>
        <Li>仅解析成功的 HTTP 响应；非 2xx 响应通过错误返回。</Li>
        <Li>将 deps 用于影响请求但不属于 URL 字符串的值。</Li>
        <Li>不要假设加载时或发生错误后数据存在。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用稳定的选项对象或不断更改依赖项中的请求值。</Li>
        <Li>使用 onFinally 进行请求级清理，必须在成功或失败后运行。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：useFetch 是否解析任意响应体？
        </Li>
        <Li>
          <strong>A</strong>：它使用response.json()解析成功的响应。使用另一个 Hook 来实现不同的正文格式。
        </Li>
        <Li>
          <strong>Q</strong>：组件卸载时会发生什么？
        </Li>
        <Li>
          <strong>A</strong>：活动请求被中止，之后无法更新状态。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        url: "传递请求 URL 来获取。",
        options: "可选的获取请求选项。",
        callbacks: "可选的解决、拒绝和最终回调。",
        deps: "触发新请求的其他依赖项。",
      },
      return: {
        data: "已解析的 JSON 响应数据，或 null。",
        loading: "请求是否有效。",
        error: "请求失败导致的错误，或 null。",
      },
    },
  },

  useForceUpdate: {
    desc: "请求渲染而不更改状态值的 Hook。",
    detail: (
      <>
        <p>
          <code>useForceUpdate</code> 返回一个稳定的函数，该函数递增内部计数器以安排
          使成为。当外部可变资源在 React 状态之外发生变化时，它很有用。
        </p>
        <p>当值属于组件的数据模型时，首选普通状态更新。</p>
      </>
    ),
    $p1: "当值更改时更新状态，或者当外部值更改而无需设置器时调用forceUpdate。",
    consideration: (
      <ol>
        <Li>强制渲染不会使可变数据成为反应性的；组件必须在渲染期间读取最新值。</Li>
        <Li>当 React 状态可以表示值时，不要使用此 Hook 来替代状态。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>在集成边界（例如命令式小部件或外部存储）中使用它。</Li>
        <Li>保持回调在渲染方面没有副作用。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：forceUpdate 会改变状态值吗？
        </Li>
        <Li>
          <strong>A</strong>：它只会增加内部计数器以安排渲染；它不会暴露该计数器。
        </Li>
        <Li>
          <strong>Q</strong>：我什么时候应该使用 useState 来代替？
        </Li>
        <Li>
          <strong>A</strong>：每当更改的值是组件数据或 UI 状态的一部分时，请使用 useState。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        callback: "使用先前的渲染计数器调用可选回调。",
      },
      return: {
        forceUpdate: "安排渲染而不更改应用程序状态。",
      },
    },
  },

  useForm: {
    desc: "用于描述表单字段、验证值以及读取或重置表单数据的 Hook。",
    detail: (
      <>
        <p>
          <code>useForm</code> 将表单元素连接到字段架构。模式可以根据需要标记字段，
          提供异步验证器，并通过字段设置器更新 React 状态。
        </p>
        <p>它的提交助手会阻止浏览器默认设置，并仅在验证成功时调用处理程序。</p>
      </>
    ),
    $p1: "输入姓名并提交表格。在提交处理程序运行之前，空的必填字段将被拒绝。",
    consideration: (
      <ol>
        <Li>将返回的表单处理程序附加到表单的 onSubmit 事件。</Li>
        <Li>应读取的每个字段都必须在表单中具有匹配的名称属性。</Li>
        <Li>验证器应该解析错误消息或未定义消息，而不是因正常验证失败而抛出异常。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>保持架构与表单控件保持一致，并使用 setter 回调来控制状态。</Li>
        <Li>当仅应验证表单的一部分时，将字段列表传递给 onSubmit。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：useForm 会为我呈现输入吗？
        </Li>
        <Li>
          <strong>A</strong>：不。它协调现有的表单元素及其控件。
        </Li>
        <Li>
          <strong>Q</strong>：当验证器返回字符串时会发生什么？
        </Li>
        <Li>
          <strong>A</strong>：该字段无效，通过现有告警通道上报。
        </Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        schema: "字段值、必需的标志、验证器和可选的设置器。",
        formRef: "Ref 指向应读取其 FormData 的表单。",
      },
      return: {
        onSubmit: "创建一个提交处理程序，在调用处理程序之前验证所选字段。",
        get: "从表单中读取一个字段值。",
        gets: "从表单中读取选定或所有字段值。",
        set: "通过架构中配置的字段设置器写入值。",
        sets: "通过配置的字段设置器写入多个值。",
        validate: "验证一个字段，包括必填和自定义验证器检查。",
        validates: "验证选定或所有字段并解析为布尔值。",
        reset: "清除选定的字段或所有配置的字段。",
      },
    },
  },

  useLazy: {
    desc: "用于加载异步值一次并公开其加载和错误状态的 Hook。",
    detail: (
      <>
        <p>
          <code>useLazy</code> 在组件安装后运行异步加载程序。对于延期很有用
          导入、可选功能数据以及其他在组件需要之前不应加载的资源。
        </p>
        <p>加载器结果存储为模块，而失败则通过错误暴露。</p>
      </>
    ),
    $p1: "该示例延迟一个值，以使加载状态在渲染模块之前可见。",
    consideration: (
      <ol>
        <Li>加载程序为每个安装的 Hook 实例运行一次。</Li>
        <Li>让加载器免受依赖于未安装组件的状态更新的影响。</Li>
        <Li>在读取模块之前渲染加载和错误状态的后备。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用动态导入进行代码分割，因此加载的模块实际上是延迟的。</Li>
        <Li>保持加载的值较小或从导入的模块中公开重点功能 API。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: useLazy 会自动重试吗？
        </Li>
        <Li>
          <strong>A</strong>：不。它运行加载程序一次；如果需要重新尝试，请安装新实例。</Li>
        <Li>
          <strong>Q</strong>：如果组件在加载过程中卸载，会发生什么情况？
        </Li>
        <Li>
          <strong>A</strong>：Hook 忽略结果并且卸载后不更新状态。</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        importFunction: "在挂载上加载或创建值的函数。",
      },
      return: {
        module: "加载时或失败后解析值或 null。",
        loading: "加载操作是否挂起。",
        error: "加载错误，没有错误时为 null。",
      },
    },
  },

  useLazyImg: {
    desc: "用于预加载图像并公开后备源和加载状态的 Hook。",
    detail: (
      <>
        <p>
          <code>useLazyImg</code> 使用浏览器的 <code>Image</code> 对象预加载图像并返回其当前
          source 作为类似字符串的值。
        </p>
        <p>在图像解析之前可以使用defaultSrc；当加载失败时可以切换到errorSrc。</p>
      </>
    ),
    $p1: "返回的值包括已加载和错误标志，以便 UI 可以显示适当的状态。",
    consideration: (
      <ol>
        <Li>将返回的类似字符串的值传递给 img src 属性时使用 String(image) 。</Li>
        <Li>当用户看到损坏的或空的图像源时，提供 defaultSrc 或 errorSrc。</Li>
        <Li>使用 onLoad 和 onError 是为了产生副作用，而不是为了渲染图像本身。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>使用小占位符以避免加载真实图像时布局发生变化。</Li>
        <Li>保持 errorSrc 本地且可靠，以便失败的主映像不会创建另一个损坏的请求。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 返回的loaded flag是什么意思？
        </Li>
        <Li>
          <strong>A</strong>：浏览器图像加载成功后为 true，否则为 false。</Li>
        <Li>
          <strong>Q</strong>：我可以传递位置后备参数吗？
        </Li>
        <Li>
          <strong>A</strong>： 是的。 Hook 支持选项对象和位置重载。</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        src: "图像 URL 或包含源和后备的选项对象。",
        defaultSrc: "加载完成之前显示的图像。",
        errorSrc: "加载失败时显示的图像。",
        actions: "可选的 onLoad 和 onError 回调。",
      },
      return: {
        image: "带有已加载和错误状态标志的当前图像源。",
        loaded: "图片是否加载成功。",
        error: "是否加载失败。",
      },
    },
  },

  useMixRef: {
    desc: "一种将对象和回调引用组合成一个回调引用的 Hook。",
    detail: (
      <>
        <p>
          <code>useMixRef</code> 创建一个 ref 回调，将已安装的元素转发到数组中的每个 ref。
          这使得组件可以将相同的 DOM 节点暴露给本地状态、父级和命令式集成。
        </p>
        <p>当节点被删除时，每个回调或可变引用都会收到 null。</p>
      </>
    ),
    $p1: "该示例将相同的元素写入对象引用和回调引用。",
    consideration: (
      <ol>
        <Li>尽可能保持 refs 数组稳定，以便返回的回调不会发生不必要的更改。</Li>
        <Li>仅包含允许接收元素类型的引用。</Li>
        <Li>在回调引用中处理 null，因为 React 在卸载期间调用它们。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>在多个所有者需要相同 DOM 节点的组件边界处使用 useMixRef。</Li>
        <Li>当只有一个消费者时，首选普通的 useRef。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：数组可以包含回调引用吗？
        </Li>
        <Li>
          <strong>A</strong>： 是的。回调引用通过节点调用，稍后在清理时使用 null 调用。</Li>
        <Li>
          <strong>Q</strong>：它是克隆还是包装元素？
        </Li>
        <Li>
          <strong>A</strong>：不。它只返回一个 ref 回调来附加到现有元素。</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        refs: "接收元素的对象引用、回调引用或空值的数组。",
      },
      return: {
        mixedRef: "回调 ref，将每个已安装或已卸载的节点分配给每个提供的 ref。",
      },
    },
  },

  useLocalStorage: {
    desc: "用于将键入的值与浏览器 localStorage 同步的 Hook。",
    detail: (
      <>
        <p>
          <code>useLocalStorage</code> 从 localStorage 读取 JSON 值并使用 setter 返回它。更新中
          value 保留它并调度一个存储事件，以便使用相同键的其他 Hook 实例可以同步。
        </p>
        <p>如果无法解析存储的数据，则 Hook 会回退到初始值。</p>
      </>
    ),
    $p1: "保存值、刷新页面或打开另一个选项卡以观察持久性和同步。",
    consideration: (
      <ol>
        <Li>对跨组件实例的相同逻辑值使用稳定的键。</Li>
        <Li>仅存储可以使用 JSON 序列化的值。</Li>
        <Li>localStorage 仅限浏览器使用，在私人或受限浏览上下文中可能会失败。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>按功能命名空间键，以避免与不相关的应用程序代码发生冲突。</Li>
        <Li>保持持久数据较小并在解析后验证重要数据。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>: 是否支持对象和数组？
        </Li>
        <Li>
          <strong>A</strong>： 是的。它们使用 JSON.stringify 进行序列化并在读取时进行解析。</Li>
        <Li>
          <strong>Q</strong>：在其他地方更改 localStorage 是否会更新 Hook？
        </Li>
        <Li>
          <strong>A</strong>：是的，当存储事件具有相同的密钥时。</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        key: "localStorage 键用于保存值。",
        initialValue: "当密钥不包含有效的 JSON 时使用的后备值。",
      },
      return: {
        storedValue: "当前解析的 localStorage 值。",
        setValue: "序列化并存储新值，然后调度同步事件。",
      },
    },
  },

  useIndexDB: {
    desc: "用于打开 IndexedDB 数据库并管理其生命周期的 Hook。",
    detail: (
      <>
        <p>
          <code>useIndexDB</code> 打开 IndexedDB 数据库并在成功后公开连接。这
          升级回调是当架构版本更改时创建对象存储和索引的地方。
        </p>
        <p>当组件卸载或数据库标识更改时，连接会自动关闭。</p>
      </>
    ),
    $p1: "该示例在第一次架构升级期间创建一个 Notes 对象存储并报告连接状态。",
    consideration: (
      <ol>
        <Li>更改存储或索引时增加版本，以便 IndexedDB 进入升级事务。</Li>
        <Li>不要在upgradeCallback 中执行长时间运行的异步工作。</Li>
        <Li>使用db之前检查错误，因为IndexedDB可能不可用或被阻止。</Li>
      </ol>
    ),
    $best: (
      <ul>
        <Li>保持数据库名称和存储名称在应用程序版本之间保持稳定。</Li>
        <Li>每次操作后关闭或释放应用程序级事务。</Li>
      </ul>
    ),
    $faqs: (
      <ul>
        <Li>
          <strong>Q</strong>：upgradeCallback什么时候调用？
        </Li>
        <Li>
          <strong>A</strong>：当请求的版本比现有数据库版本新时运行。</Li>
        <Li>
          <strong>Q</strong>: Hook 是否提供 CRUD 助手？
        </Li>
        <Li>
          <strong>A</strong>：不。它返回本机 IDBDatabase，因此您可以直接使用 IndexedDB 事务。</Li>
      </ul>
    ),
    $apis: {
      generics: <></>,
      params: {
        dbName: "IndexedDB 数据库名称。",
        version: "数据库架构版本。",
        upgradeCallback: "升级期间调用的回调以创建对象存储和索引。",
      },
      return: {
        db: "打开的数据库连接，或者在打开时或失败后为空。",
        error: "IndexedDB 打开错误，或者为 null。",
      },
    },
  },

  useFavicon: {
    desc: "一个 React Hook，用于动态设置带有可选徽章支持的页面图标。",
    detail: (
      <>
        <p>
          <code>useFavicon</code> 允许您动态更改页面的图标并向其添加徽章。
          它支持多种用例，包括通知计数器、状态指示器和自定义徽章。
        </p>
        <p>
          该钩子提供了一个具有函数重载的简单 API：您可以仅传递一个 URL 来进行基本使用，
          或传递数字/字符串以快速创建徽章，或使用完整选项对象进行完全控制。
        </p>
      </>
    ),
    $p1: "该钩子支持三种使用模式：基本（仅 URL）、简写（URL + 徽章内容）和完整配置（URL + 选项对象）。在上面的选项卡之间切换以查看不同的示例。",
    consideration: (
      <ol>
        <li>网站图标是一种全局资源 - 一次只能显示一个。如果多个组件同时使用这个钩子，它们就会发生冲突。</li>
        <li>徽章渲染使用canvas，对于跨源图像可能有CORS限制。尽可能使用同源图像。</li>
        <li>超过 99 的数字将自动显示为“99+”以保持可读性。</li>
        <li>该挂钩将删除所有现有的图标元素并创建一个新元素以避免浏览器缓存问题。</li>
      </ol>
    ),
    $best: <ul>
      <li>使用简写语法 <code>useFavicon(url, count)</code> 来表示简单的徽章计数器。</li>
      <li>当计数为0时，传递<code>undefined</code>或<code>void 0</code>来隐藏徽章而不是显示“0”。</li>
      <li>将钩子放置在组件的顶层，而不是条件语句内。</li>
      <li>使用同源图像以避免画布渲染出现 CORS 问题。</li>
      <li>对于通知徽章，请使用红色背景 (<code>#ff3b30</code>) 来引起注意。</li>
      <li>对于状态指示器，请使用小尺寸 (<code>size: 0.3</code>) 并位于右下角。</li>
    </ul>,
    $faqs: <ul>
      <li><strong>问：我可以在没有徽章的情况下使用它吗？</strong><br />A：是的，只需调用 <code>useFavicon(iconUrl)</code> 即可，无需第二个参数。</li>
      <li><strong>问：如果图标加载失败怎么办？</strong><br />答：挂钩将回退到没有徽章的原始图标 URL。</li>
      <li><strong>问：我可以动态更改徽章吗？</strong><br />答：是的，只要 iconUrl 或徽章选项发生变化，挂钩就会更新图标。</li>
      <li><strong>问：徽章内容超过99会怎样？</strong><br />答：超过 99 的数字将自动显示为“99+”以保持可读性。</li>
      <li><strong>问：为什么我的徽章没有显示？</strong><br />A：检查图片是否来自同源。由于 CORS 限制，跨源镜像可能会失败。</li>
    </ul>,
    $apis: {
      generics: (<></>),
      params: {
        iconUrl: "网站图标图像的 URL。",
        badge: "徽章内容的简写。可以是字符串或数字。如果提供，则使用默认设置创建徽章。",
        options: "网站图标的完整配置对象。",
        "options.badge": "徽章配置覆盖在网站图标上。",
        "options.badge.content": "要在徽章中显示的内容。超过 99 的数字将显示为“99+”。",
        "options.badge.position": "徽章位置。其中之一：“右上”、“左上”、“右下”、“左下”。默认为“右上角”。",
        "options.badge.bgColor": "徽章背景颜色。默认为“#ff3b30”。",
        "options.badge.textColor": "徽章文字颜色。默认为“#fff”。",
        "options.badge.size": "徽章大小与图标大小的比率 (0-1)。默认为 0.5。",
      },
      return: {
        void: "该钩子不返回任何值。",
      },
    },
  },

  useClickAway: {
    desc: "当 mousedown 发生在 Hook 引用的元素外部时调用回调。",
    detail: (
      <>
        <p>
          <code>useClickAway</code> 返回定义内部区域的引用。它监听
          文档并在事件目标不包含时调用 <code>onClickAway</code>
          地区。
        </p>
        <p>
          清理期间会自动删除文档侦听器。这使得 Hook 非常有用
          取消菜单、弹出窗口、对话框和临时面板。
        </p>
      </>
    ),
    $p1: "将返回的引用附加到完整的交互区域，该区域应保持打开状态以供内部点击。",
    consideration: (
      <ol>
        <li>Hook 侦听 <code>mousedown</code>，而不是单击或触摸事件。</li>
        <li>当周围组件频繁重新渲染时，使用 <code>useCallback</code> 实现稳定的回调。</li>
        <li>当事件目标包含在引用的元素中时，不会调用回调。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将 ref 附加到属于开放区域的最外层元素。</li>
        <li>使用回调来关闭或重置瞬态 UI 状态。</li>
        <li>保留适当的控制措施，以便在区域外重新开放该区域。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：哪个事件会触发回调？</strong>
          <br />
          答：文档级 <code>mousedown</code> 事件，其目标位于引用的元素之外。
        </li>
        <li>
          <strong>问：我可以在区域内包含多个元素吗？</strong>
          <br />
          答：是的。将 ref 附加到其公共包含元素。
        </li>
        <li>
          <strong>问：Hook 会删除它的侦听器吗？</strong>
          <br />
          答：是的。当效果清除时，文档侦听器将被删除。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onClickAway: "为外部 mousedown 事件调用的回调。",
      },
      return: {
        ref: "引用附加到内部区域元素。",
      },
    },
  },

  useCookie: {
    desc: "通过 React 状态读取和写入 URL 编码的浏览器 cookie。",
    detail: (
      <>
        <p>
          <code>useCookie</code> 在初始化期间读取指定的 cookie 并回退到
          <code>initialValue</code> 当它不存在时。每次状态更改都会将值写回
          具有请求的过期时间和根路径的 cookie。
        </p>
        <p>
          Cookie 名称和值由 Hook 进行 URL 编码。 Hook 仅限浏览器并返回
          在没有文档的情况下呈现时的初始值。
        </p>
      </>
    ),
    $p1: "使用返回的 setter 来保持 React 值和浏览器 cookie 同步。",
    consideration: (
      <ol>
        <li>Cookie 的大小有限，并与匹配的请求一起发送，因此不要在此处存储大量或敏感数据。</li>
        <li>该 cookie 使用 <code>path=/</code>，并且不配置 Secure、SameSite 或域属性。</li>
        <li>在 React 外部更改 cookie 不会更新 Hook 状态，直到组件再次初始化。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用命名空间 cookie 名称以避免与其他应用程序功能发生冲突。</li>
        <li>存储首选项或小型会话值，而不是身份验证机密或大型负载。</li>
        <li>选择与数据的预期寿命相匹配的明确过期期限。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：当 cookie 丢失时会发生什么？</strong>
          <br />
          A：Hook以<code>initialValue</code>开头，在第一个效果时写入。
        </li>
        <li>
          <strong>问：cookie 值是否经过编码？</strong>
          <br />
          答：是的。 Hook 在写入时使用 <code>encodeURIComponent</code>，在读取时对值进行解码。
        </li>
        <li>
          <strong>问：我可以用这个 Hook 删除 cookie 吗？</strong>
          <br />
          答：设置适当的空值和过期策略，或使用专用的 cookie 实用程序来删除属性。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        name: "饼干名称。",
        initialValue: "当cookie不存在时的回退值。",
        days: "有效期（以天为单位）；虚假值创建会话 cookie。",
      },
      return: {
        value: "当前 cookie 值。",
        setValue: "更新状态并写入 cookie 的 Setter。",
      },
    },
  },

  useDimensions: {
    desc: "使用 ResizeObserver 测量引用的元素并返回其当前尺寸。",
    detail: (
      <>
        <p>
          <code>useDimensions</code> 返回一个引用和一个维度对象。将参考附加到
          每当内容框发生变化时，元素和 Hook 都会更新宽度、高度、顶部和左侧。
        </p>
        <p>
          观察者在清理期间断开连接。尺寸从零开始，直到目标达到
          被观察到。
        </p>
      </>
    ),
    $p1: "将返回的 ref 附加到其大小应驱动布局或测量 UI 的元素。",
    consideration: (
      <ol>
        <li>当效果运行时，目标必须被渲染并可测量。</li>
        <li>在第一个 ResizeObserver 通知之前，返回值为零。</li>
        <li>ResizeObserver 报告内容框尺寸，因此内边距和边框可能不包含在宽度和高度中。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用尺寸来导出布局决策，而不是在渲染期间读取 DOM 几何图形。</li>
        <li>在渲染昂贵的视觉更新之前舍入或阈值。</li>
        <li>使用稳定的参考附件并避免不必要地更换测量节点。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：尺寸什么时候可用？</strong>
          <br />
          答：挂载目标后，ResizeObserver 会传送第一个条目。
        </li>
        <li>
          <strong>问：它会自动跟踪窗口大小调整吗？</strong>
          <br />
          答：它跟踪目标元素观察到的大小的变化，包括由布局或窗口调整大小引起的变化。
        </li>
        <li>
          <strong>问：观察者清理干净了吗？</strong>
          <br />
          答：是的。当组件卸载时，目标是无法观察到的。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        none: "该 Hook 不带任何参数；将返回的 ref 附加到要测量的元素。",
      },
      return: {
        ref: "参考附加到被测元素。",
        dimensions: "观察到的宽度、高度、顶部和左侧值。",
      },
    },
  },

  useHover: {
    desc: "当指针进入引用的元素时调用回调。",
    detail: (
      <>
        <p>
          <code>useHover</code> 返回一个侦听附加上的 <code>mouseenter</code> 的引用
          元素。每次指针进入该元素时，它都会调用 <code>onHover</code>。
        </p>
        <p>
          该 Hook 是一个通知助手，而不是 <code>isHovered</code> 状态 Hook；使用 CSS 或
          当 UI 需要表示进入和离开状态时的组件状态。
        </p>
      </>
    ),
    $p1: "将返回的 ref 附加到其鼠标输入事件应触发回调的完整元素。",
    consideration: (
      <ol>
        <li>当指针停留在元素上时，回调在 <code>mouseenter</code> 上运行，而不是连续运行。</li>
        <li>使用稳定的回调（例如 <code>useCallback</code>）以避免在每次渲染时重新绑定侦听器。</li>
        <li>Hook 不监听 mouseleave，也不返回悬停布尔值。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将其用于一次性输入操作，例如预取或显示通知。</li>
        <li>使用 CSS <code>:hover</code> 实现仅样式悬停效果。</li>
        <li>当可能重复输入时，保持回调轻量级和幂等性。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：它是否告诉我指针当前是否位于元素上方？</strong>
          <br />
          答：不会。它会在输入时调用回调；如果需要，单独跟踪状态。
        </li>
        <li>
          <strong>问：使用哪个事件？</strong>
          <br />
          答：Hook 监听 <code>mouseenter</code>。
        </li>
        <li>
          <strong>问：监听器是否被移除？</strong>
          <br />
          答：是的。当回调或组件效果被清理时，它会被删除。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        onHover: "mouseenter 上调用的回调。",
      },
      return: {
        ref: "引用附加到目标 HTMLElement。",
      },
    },
  },

  useKeyPress: {
    desc: "跟踪当前是否按下了特定的键盘按键。",
    detail: (
      <>
        <p>
          <code>useKeyPress</code>监听窗口<code>keydown</code>和<code>keyup</code>事件
          并在按下选定的 <code>KeyboardEvent.key</code> 值时返回 true。
        </p>
        <p>
          当 <code>targetKey</code> 更改时状态会重置，并且当
          组件卸载。
        </p>
      </>
    ),
    $p1: "传递您想要跟踪的确切 KeyboardEvent.key 字符串，例如 Enter、Escape 或 ArrowUp。",
    consideration: (
      <ol>
        <li>目标字符串与 <code>KeyboardEvent.key</code> 进行比较，而不是按键代码或物理按键位置。</li>
        <li>Hook 在窗口上监听，因此它可以观察特定输入元素外部的键。</li>
        <li>使用稳定的目标键并处理使用组件中的焦点或可编辑字段行为。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用语义键名称，例如 <code>Enter</code> 和 <code>Escape</code>。</li>
        <li>将布尔值与可访问的焦点和按钮行为相结合，而不是替换本机键盘支持。</li>
        <li>当用户在可编辑控件中键入时忽略或范围快捷方式。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：我应该为 Enter 键传递什么值？</strong>
          <br />
          A：通过<code>"Enter"</code>，匹配<code>KeyboardEvent.key</code>。
        </li>
        <li>
          <strong>问：它能检测按键操作吗？</strong>
          <br />
          答：是的。 Keydown 将值设置为 true，keyup 将其设置为 false。
        </li>
        <li>
          <strong>问：听众清理干净了吗？</strong>
          <br />
          答：是的。在效果清理期间，两个窗口侦听器都会被删除。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        targetKey: "要跟踪的 KeyboardEvent.key 字符串。",
      },
      return: {
        keyPressed: "当前是否按下了目标键。",
      },
    },
  },

  useMousePosition: {
    desc: "跟踪鼠标移动或按下按钮时的浏览器窗口指针坐标。",
    detail: (
      <>
        <p>
          <code>useMousePosition</code>监听窗口鼠标事件并返回最新的客户端
          <code>x</code> 和 <code>y</code> 坐标。默认使用<code>mousemove</code>，可以
          仅当用 <code>mousedown</code> 按下指针时更新。
        </p>
        <p>
          两个坐标均以 <code>null</code> 开头，直到收到所选事件为止。窗户
          侦听器在清理期间被删除。
        </p>
      </>
    ),
    $p1: "选择与交互相匹配的事件频率，并使用返回的客户端坐标来实现轻量级 UI 反馈。",
    consideration: (
      <ol>
        <li><code>mousemove</code>可以频繁发射；保持依赖工作轻量级。</li>
        <li>坐标是视口客户端坐标，而不是文档坐标。</li>
        <li>在第一个选定的鼠标事件发生之前，初始值为 null。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>当不需要连续运动跟踪时，请使用 <code>mousedown</code>。</li>
        <li>在渲染昂贵的指针驱动效果时限制或导出粗略值。</li>
        <li>在计算中使用空坐标之前先对其进行处理。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么坐标最初为空？</strong>
          <br />
          A: 还没有发生选中的鼠标事件。
        </li>
        <li>
          <strong>问：它是否跟踪触摸或指针事件？</strong>
          <br />
          答：不可以。当前API仅支持<code>mousemove</code>和<code>mousedown</code>。
        </li>
        <li>
          <strong>问：坐标是相对于文档的吗？</strong>
          <br />
          答：它们是 <code>clientX</code> 和 <code>clientY</code>，相对于视口而言。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        trigger: "窗口鼠标事件：mousemove 或 mousedown。",
      },
      return: {
        position: "最新的客户端 x 和 y 指针坐标。",
      },
    },
  },

  useOverflow: {
    desc: "检测引用的元素是否溢出其当前偏移尺寸。",
    detail: (
      <>
        <p>
          <code>useOverflow</code> 返回一个引用和一个布尔值。它比较目标的滚动宽度和
          在安装期间和窗口调整大小事件之后的高度及其偏移宽度和高度。
        </p>
        <p>
          钩子对于显示截断提示、溢出控件或替代布局很有用。
          内容不适合固定区域。
        </p>
      </>
    ),
    $p1: "将 ref 附加到可测量元素并使用 isOverflowing 来决定是否应显示溢出 UI。",
    consideration: (
      <ol>
        <li>初始检查在目标安装后运行，并且 Hook 在窗口大小调整时再次检查。</li>
        <li>当前的实现不会观察窗口调整大小事件之间的任意内容或元素调整大小突变。</li>
        <li>溢出取决于目标的 CSS 尺寸和滚动行为。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>当溢出检测有意义时，设置显式尺寸或最大尺寸。</li>
        <li>将 CSS <code>overflow</code> 规则与布尔值一起使用以实现可访问的控件或标签。</li>
        <li>当内容独立于视口发生变化时，触发窗口调整大小或使用更专门的观察​​器。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：什么时候检查溢出？</strong>
          <br />
          答：安装后一次，​​窗口发出调整大小事件时再一次。
        </li>
        <li>
          <strong>问：它会观察每一个内容的变化吗？</strong>
          <br />
          A：不，它不使用ResizeObserver；当必须跟踪任意元素大小变化时使用一个。
        </li>
        <li>
          <strong>问：比较哪些维度？</strong>
          <br />
          A：Hook 比较scrollWidth/scrollHeight 和offsetWidth/offsetHeight。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<E extends HTMLElement = HTMLElement>"}</code></p>,
      params: {
        none: "该 Hook 不带任何参数；将返回的 ref 附加到要测量的元素。",
      },
      return: {
        ref: "参考附加到被测元素。",
        isOverflowing: "滚动尺寸是否超过偏移尺寸。",
      },
    },
  },

  useRaf: {
    desc: "在每个浏览器动画帧上运行回调，直到组件卸载。",
    detail: (
      <>
        <p>
          <code>useRaf</code> 调度连续的 <code>requestAnimationFrame</code> 循环并通过
          回调的浏览器时间戳。回调引用更新，无需重启
          循环。
        </p>
        <p>
          清理过程中预定的帧会自动取消，所以Hook适合
          组件拥有的动画或连续采样的浏览器值。
        </p>
      </>
    ),
    $p1: "使用帧时间戳来计算经过的时间，而不是假设固定的帧速率。",
    consideration: (
      <ol>
        <li>回调大约每个显示帧运行一次，并且可能会在后台选项卡中受到限制。</li>
        <li>当框架不改变可见输出时，不要执行昂贵的工作或无条件的 React 状态更新。</li>
        <li>使用可变动画簿记的引用不应导致额外的渲染。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>从时间戳和开始时间得出动画进度。</li>
        <li>保持回调轻量级，以便它在下一帧之前完成。</li>
        <li>当不需要帧级调度时，使用不同的观察者或计时器。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：循环什么时候停止？</strong>
          <br />
          答：当组件卸载并且挂起的动画帧被取消时，它会停止。
        </li>
        <li>
          <strong>问：回调时间戳代表什么？</strong>
          <br />
          A：这是<code>requestAnimationFrame</code>提供的高分辨率时间戳。
        </li>
        <li>
          <strong>问：更改回调会重新启动循环吗？</strong>
          <br />
          答：不会。Hook 会保留最新的回调，同时保留相同的动画循环。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "接收浏览器动画时间戳的帧回调。",
      },
      return: {
        value: "空白;动画帧循环会自动清理。",
      },
    },
  },

  useRafState: {
    desc: "安排下一个动画帧上的 React 状态更新并合并挂起的更新。",
    detail: (
      <>
        <p>
          <code>useRafState</code> 返回状态和具有熟悉的 React 状态形状的 setter。这
          setter 在提交更新之前等待下一个 <code>requestAnimationFrame</code>。
        </p>
        <p>
          如果在帧运行之前多次调用 setter，则挂起的帧将被取消并
          替换为最新计划的更新。卸载时挂起的帧也会被取消。
        </p>
      </>
    ),
    $p1: "当状态更改应与浏览器的渲染节奏保持一致而不是立即提交时使用它。",
    consideration: (
      <ol>
        <li>调用setter后状态值不会同步改变。</li>
        <li>在帧运行之前，仅保留最新的挂起更新。</li>
        <li>当下一个状态取决于前一个值时，请使用函数设置器形式。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将其用于指针、滚动或动画驱动的值，这些值可以每帧采样一次。</li>
        <li>保持计划的更新较小，以便下一次渲染保持响应。</li>
        <li>当需要即时状态可见性时，使用普通 <code>useState</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：状态什么时候更新？</strong>
          <br />
          答：在下一个可用的动画帧上。
        </li>
        <li>
          <strong>问：当 setter 被重复调用时会发生什么？</strong>
          <br />
          答：挂起的帧被取消并重新安排，因此仅运行最新的挂起更新。
        </li>
        <li>
          <strong>问：卸载后框架会继续运行吗？</strong>
          <br />
          答：不会。Hook 在清理期间取消其待处理的动画帧。
        </li>
      </ul>
    ),
    $apis: {
      generics: <p><code>{"<T>"}</code> is the state value type.</p>,
      params: {
        initialState: "初始状态值。",
      },
      return: {
        state: "当前状态值。",
        setRafState: "为下一个动画帧安排值或功能更新。",
      },
    },
  },

  useScroll: {
    desc: "跟踪浏览器窗口的水平和垂直滚动位置。",
    detail: (
      <>
        <p>
          <code>useScroll</code>监听窗口的<code>scroll</code>事件并返回最新的
          <code>scrollX</code> 和 <code>scrollY</code> 值。可选的回调接收相同的内容
          每次滚动事件后的位置对象。
        </p>
        <p>
          侦听器是被动的，并在清理期间被删除，因此瞬态可以安全地使用 Hook
          标题、进度指示器和滚动到顶部控件等组件。
        </p>
      </>
    ),
    $p1: "将返回的位置用于窗口级滚动状态；跟踪嵌套滚动条时使用元素观察器。",
    consideration: (
      <ol>
        <li>该 Hook 跟踪窗口，而不是任意可滚动元素。</li>
        <li>滚动事件可能很频繁；保持渲染和回调工作轻量级。</li>
        <li>使用稳定的回调（例如 <code>useCallback</code>）以避免在每次渲染时重新绑定侦听器。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>从渲染前的位置导出粗略阈值或进度值。</li>
        <li>使用回调来处理副作用，并使用返回的位置来处理渲染状态。</li>
        <li>尽可能使用被动滚动处理和 CSS 以获得纯粹的视觉效果。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：它是否观察到可滚动的 div？</strong>
          <br />
          A：不。它读取窗口滚动偏移量；嵌套元素需要自己的事件或观察者策略。
        </li>
        <li>
          <strong>问：初始值是多少？</strong>
          <br />
          答：它们是在初始化期间从 <code>window.scrollX</code> 和 <code>window.scrollY</code> 读取的。
        </li>
        <li>
          <strong>问：清理会删除监听器吗？</strong>
          <br />
          答：是的。当效果清除时，窗口侦听器将被删除。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "接收最新窗口滚动位置的可选回调。",
      },
      return: {
        position: "当前 x 和 y 窗口滚动偏移。",
      },
    },
  },

  useSafeArea: {
    desc: "读取设备安全区域插图中的凹口和圆形屏幕边缘。",
    detail: (
      <>
        <p>
          <code>useSafeArea</code> 测量浏览器的 <code>env(safe-area-inset-*)</code> 值并
          返回顶部、右侧、底部和左侧像素插图。它对于填充内容很有用
          设备切口和家庭指示灯。
        </p>
        <p>
          Hook 在安装时计算一次，并在调整大小或方向更改后重新计算。调整大小
          更新被去抖动以避免过多的测量。
        </p>
      </>
    ),
    $p1: "将返回的插入值应用于必须避开设备边缘的内容周围的填充或定位。",
    consideration: (
      <ol>
        <li>在不公开安全区域插入的浏览器或设备上，值为零。</li>
        <li>Hook 测量浏览器 CSS 环境值，并不直接检测硬件。</li>
        <li>使用这些值作为布局输入，并保留足够的视觉间距，即使所有插图均为零。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将插图与您的设计间距相结合，而不是用它替换所有填充。</li>
        <li>将顶部和底部插图应用于固定页眉、页脚和全屏表面。</li>
        <li>在带有凹口和主页指示器的设备上测试方向变化。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么桌面上的所有值都为零？</strong>
          <br />
          答：桌面浏览器通常没有安全区域插入，因此零是预期值。
        </li>
        <li>
          <strong>问：它会轮流更新吗？</strong>
          <br />
          答：是的。 Hook 监听方向变化和调整大小事件。
        </li>
        <li>
          <strong>问：需要特殊的浏览器 API 吗？</strong>
          <br />
          答：它依赖于 CSS 环境变量，当它们不可用时会回落到零。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        none: "该 Hook 不带任何参数；它读取安全区域 CSS 环境值。",
      },
      return: {
        insets: "顶部、右侧、底部和左侧安全区域插入值（以像素为单位）。",
      },
    },
  },

  useAsyncEffect: {
    desc: "运行具有依赖项跟踪、清理、错误处理和完成回调的异步效果。",
    detail: (
      <>
        <p>
          <code>useAsyncEffect</code> 在效果生命周期中运行异步函数。这
          函数可能会解析为清理回调，该回调在依赖项更改或
          组件卸载。
        </p>
        <p>
          Hook 跟踪效果是否仍然有效。如果异步操作在
          组件已被替换或卸载，则立即调用其解析的清理
          被保留为无效效果。
        </p>
      </>
    ),
    $p1: "为预期的失败提供 onError 处理程序，并保持异步效果使用的每个值的依赖项列表完整。",
    consideration: (
      <ol>
        <li>
          异步函数不接收 AbortSignal。中止网络请求或其他外部请求
          当底层 API 支持取消时，您可以自己工作。
        </li>
        <li>
          如果提供，效果拒绝将发送到 <code>onError</code>。没有它，拒绝是
          从异步任务中重新抛出。
        </li>
        <li>
          unmount后返回的清理函数会立即执行，所以异步资源
          不附加到非活动组件。
        </li>
        <li>
          当异步操作可以时，在您自己的取消或主动检查之后保留状态更新
          组件卸载后完成。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>返回订阅、计时器、套接字和其他资源的清理函数。</li>
        <li>使用 <code>onFinally</code> 停止加载指示器，无论成功还是失败。</li>
        <li>使用与异步操作的输入匹配的依赖项列表。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：effect 可以返回清理函数吗？</strong>
          <br />
          答：是的。从解析的异步结果返回一个函数；它在重新运行之前和卸载时运行。
        </li>
        <li>
          <strong>问：onFinally 是做什么用的？</strong>
          <br />
          答：它在异步函数解析或拒绝后运行，对于清除加载状态很有用。
        </li>
        <li>
          <strong>问：Hook 会自动取消请求吗？</strong>
          <br />
          答：不可以。它管理效果活动和清理，但请求取消必须由
          支持时调用者。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        effect: "异步效果回调可能会解析为清理函数。",
        deps: "控制效果执行的依赖列表。默认为空列表。",
        options: "可选的 onError 和 onFinally 回调。",
      },
      return: {
        value: "空白;清理由效果生命周期管理。",
      },
    },
  },

  useBeforeMount: {
    desc: "在组件安装之前的第一次渲染期间运行一次回调。",
    detail: (
      <>
        <p>
          <code>useBeforeMount</code> 在第一次渲染期间同步调用其回调
          永远不会再次为该组件实例调用它。这对于准备
          在生成初始标记之前必须存在的值。
        </p>
        <p>
          回调在 React 将组件提交到 DOM 之前运行，因此它无权访问
          到已安装的 DOM 节点。使用 <code>useEffect</code> 或 <code>useLayoutEffect</code> 进行以下工作
          需要一个承诺的元素。
        </p>
      </>
    ),
    $p1: "保持回调同步和渲染安全；当初始输出依赖于 ref 或另一个渲染时间值时，请使用它。",
    consideration: (
      <ol>
        <li>
          回调在渲染期间运行。不执行订阅、计时器、网络请求或
          状态更新将触发另一个渲染。
        </li>
        <li>
          React 在开发或并发渲染中可能会多次调用渲染逻辑。避免
          依靠这个 Hook 来实现一次性的外部副作用。
        </li>
        <li>
          DOM 节点尚未挂载，因此浏览器测量和事件监听器注册
          属于一种效果。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>仅使用它来导出或准备初始渲染所需的值。</li>
        <li>保持回调幂等，以便重复的渲染尝试保持安全。</li>
        <li>更喜欢在组件安装后可以进行工作的效果。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：组件挂载后回调是否运行？</strong>
          <br />
          答：不会。它在 React 提交组件之前的第一次渲染期间运行。
        </li>
        <li>
          <strong>问：我可以在回调中访问 DOM 元素吗？</strong>
          <br />
          A: 不需要。安装元件后使用<code>useLayoutEffect</code> 或<code>useEffect</code>。
        </li>
        <li>
          <strong>问：我可以用它来获取数据吗？</strong>
          <br />
          答：不建议。从效果或数据获取钩子开始异步工作。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "在第一次渲染期间调用一次回调。",
      },
      return: {
        value: "空白;回调在组件安装之前执行。",
      },
    },
  },

  useMount: {
    desc: "当组件安装时运行效果，具有可选的依赖项、错误处理和清理。",
    detail: (
      <>
        <p>
          <code>useMount</code> 是初始化工作的效果助手。默认为空
          依赖列表，回调在组件挂载及其返回函数运行后运行
          清理期间。
        </p>
        <p>
          第二个参数可以是依赖项列表或错误回调。当出现错误时
          提供回调，可选的第三个参数提供依赖项。
        </p>
      </>
    ),
    $p1: "使用回调返回的清理函数来释放订阅、计时器和效果创建的其他资源。",
    consideration: (
      <ol>
        <li>
          回调在渲染后运行，因此对于 DOM 和外部副作用来说是安全的。
        </li>
        <li>
          如果回调抛出并且未提供错误处理程序，<code>useMount</code> 会记录错误
          到控制台。
        </li>
        <li>
          提供依赖项后，只要 React 检测到依赖项，回调就会再次运行
          改变，不仅仅是在初始安装上。
        </li>
        <li>
          保持依赖值完整且稳定，以避免过时的值或不必要的重新运行。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用默认形式进行一次性初始化。</li>
        <li>每当回调分配资源时，都会返回一个清理函数。</li>
        <li>当初始化失败需要更新 UI 或遥测时，传递显式错误处理程序。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：这个 Hook 是否仅限执行一次？</strong>
          <br />
          A：仅当其依赖列表为空时。提供的依赖项列表遵循正常情况
          影响依赖行为。
        </li>
        <li>
          <strong>问：如何处理错误？</strong>
          <br />
          答：传递错误回调作为第二个参数，后跟可选的依赖项列表。
        </li>
        <li>
          <strong>问：清理何时运行？</strong>
          <br />
          A：React 在效果重新运行之前以及组件运行时运行返回的清理函数
          卸载。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "效果回调。它可能会返回一个清理函数。",
        arg2: "错误回调或依赖项列表。",
        arg3: "与错误回调一起使用的依赖项列表。默认为空列表。",
      },
      return: {
        value: "空白; React 管理回调返回的效果清理。",
      },
    },
  },

  useUnMount: {
    desc: "当组件即将卸载时运行回调。",
    detail: (
      <>
        <p>
          <code>useUnMount</code> 注册一个清理回调，当组件被调用时，React 会调用该回调
          离开树。 Hook 将最新的回调保留在引用中，因此清理使用最多
          最近的回调，无需在每个渲染上重新注册效果。
        </p>
        <p>
          使用它来释放组件拥有的资源，例如订阅、计时器或
          外部连接。
        </p>
      </>
    ),
    $p1: "在组件拥有的资源或订阅附近注册清理。",
    consideration: (
      <ol>
        <li>
          在组件不再可用于正常 UI 之后，回调会在卸载期间运行
          更新。
        </li>
        <li>
          不要依赖回调中的设置状态；该组件已经离开树。
        </li>
        <li>
          如果资源在组件的生命周期内可能发生变化，请让清理回调知道
          最新的资源价值。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>用它来取消订阅、清除计时器、关闭连接和释放浏览器资源。</li>
        <li>当底层 API 可能已经关闭时，使清理具有幂等性。</li>
        <li>当资源还需要对依赖项更改进行清理时，请使用效果的返回清理。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：每次渲染后都会运行回调吗？</strong>
          <br />
          答：不会。它仅在组件卸载时运行。
        </li>
        <li>
          <strong>问：它是否使用第一次渲染的回调？</strong>
          <br />
          答：该实现存储最新的回调并在卸载期间调用该回调。
        </li>
        <li>
          <strong>问：我应该在回调中设置状态吗？</strong>
          <br />
          答：不会。该组件正在被删除，因此请释放资源而不是更新其 UI。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "组件卸载时调用的回调。",
      },
      return: {
        value: "空白; React 在卸载清理期间调用回调。",
      },
    },
  },

  useUpdate: {
    desc: "当依赖项更改时运行回调，同时跳过初始渲染。",
    detail: (
      <>
        <p>
          <code>useUpdate</code> 具有与效果相同的依赖驱动行为，但故意
          忽略第一次渲染。仅当 React 观察到所提供的内容发生变化后，回调才会运行
          依赖列表。
        </p>
        <p>
          这对于响应用户驱动的更新非常有用，而无需在期间运行相同的逻辑
          初始设置。
        </p>
      </>
    ),
    $p1: "将回调读取的每个值包含在依赖项列表中，然后使用 Hook 来执行仅在第一次更新后才发生的工作。",
    consideration: (
      <ol>
        <li>
          回调不会在初始渲染后运行，即使初始依赖值
          被定义。
        </li>
        <li>
          该实现接受返回 <code>void</code> 的回调；使用效果清理
          更新之间需要清理的资源。
        </li>
        <li>
          不完整的依赖项列表可能会导致回调观察到过时的值。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将其用于由后续更改触发的分析、同步或验证。</li>
        <li>使依赖项列表与回调捕获的值保持一致。</li>
        <li>当逻辑也必须在挂载上运行时，请使用 <code>useEffect</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么回调没有在挂载时运行？</strong>
          <br />
          答：跳过初始渲染是 <code>useUpdate</code> 的定义行为。
        </li>
        <li>
          <strong>问：它会在每次重新渲染时运行吗？</strong>
          <br />
          答：不会。它仅在依赖项列表中的值发生更改时运行。
        </li>
        <li>
          <strong>问：回调可以返回清理函数吗？</strong>
          <br />
          A：不需要，回调类型为<code>() =&gt; void</code>；需要清理时使用效果。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "依赖项更改后调用的回调，不包括初始渲染。",
        dependencies: "控制后续回调执行的依赖列表。",
      },
      return: {
        value: "空白;回调由效果生命周期管理。",
      },
    },
  },

  useUpdateEffect: {
    desc: "在依赖项更改后运行效果，同时跳过初始效果执行。",
    detail: (
      <>
        <p>
          <code>useUpdateEffect</code> 是忽略第一次渲染的效果变体。在那之后
          初始传递，当提供的依赖项之一发生更改时，它会运行回调。
        </p>
        <p>
          它对于同步或应响应稍后用户输入的请求很有用，但
          不应以初始状态运行。
        </p>
      </>
    ),
    $p1: "将其用于安装后同步，并将每个捕获的值包含在依赖项列表中。",
    consideration: (
      <ol>
        <li>
          根据设计，第一次渲染时会跳过回调；使用 <code>useEffect</code> 时
          效果也必须在安装上运行。
        </li>
        <li>
          在此实现中，回调类型为 <code>() =&gt; void</code>。直接使用效果
          当需要清理功能时。
        </li>
        <li>
          保持依赖项列表完整，以防止回调中出现过时的值。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将其用于由搜索词、过滤器或受控表单值驱动的更新。</li>
        <li>当应忽略空值或无效值时，请保护回调中昂贵的工作。</li>
        <li>当需要初始同步时，首选正常效果。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：效果什么时候第一次生效？</strong>
          <br />
          答：它首先在初始渲染后依赖项发生更改后运行。
        </li>
        <li>
          <strong>问：这与 useUpdate 有什么不同吗？</strong>
          <br />
          答：目前两者都跳过初始渲染并对依赖项更改做出反应；他们是分开的
          具有相同核心行为的导出。
        </li>
        <li>
          <strong>问：我可以从回调中返回清理吗？</strong>
          <br />
          答：不需要。直接使用 <code>useEffect</code> 来实现回调返回清理的效果。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        callback: "依赖项更改后调用的效果回调，不包括初始渲染。",
        dependencies: "控制后续效果执行的依赖列表。",
      },
      return: {
        value: "空白;效果回调由 React 的效果生命周期管理。",
      },
    },
  },

  useTheme: {
    desc: "跟踪用户的系统浅色或深色配色方案偏好。",
    detail: (
      <>
        <p>
          <code>useTheme</code>从<code>prefers-color-scheme</code>中读取初始值并返回
          <code>"light"</code> 或 <code>"dark"</code>。默认情况下它监听稍后的系统
          首选项更改并更新返回值。
        </p>
        <p>
          Hook 还可以通过回调通知您的应用程序。它观察运行情况
          系统或浏览器偏好；它不提供手动主题切换。
        </p>
      </>
    ),
    $p1: "使用返回的主题值来选择样式或将组件与系统颜色方案首选项同步。",
    consideration: (
      <ol>
        <li>
          初始值为<code>window.matchMedia</code>，因此在浏览器中渲染此Hook
          环境或提供浏览器兼容的测试设置。
        </li>
        <li>
          Hook 遵循系统偏好设置，而不是存储在本地存储中的应用程序设置或
          主题提供商。
        </li>
        <li>
          传递 <code>false</code> 作为第一个参数以禁用更改侦听。最初的主题
          值仍然返回。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用主题值设置根类、数据属性或组件选项板。</li>
        <li>当首选项更改时，使用回调来记录或同步外部系统。</li>
        <li>保持回调轻量级，因为它会在每次检测到的首选项更改时运行。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：useTheme 是否添加手动切换？</strong>
          <br />
          答：不会。它会报告并侦听浏览器的系统颜色方案首选项。
        </li>
        <li>
          <strong>问：如何停止收听？</strong>
          <br />
          A：传递 <code>false</code> 作为第一个参数。
        </li>
        <li>
          <strong>问：我怎样才能收到变更通知？</strong>
          <br />
          答：传递一个回调作为第一个参数，或者传递一个布尔值，后跟一个回调。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        arg1: "布尔监听标志或主题更改回调。省略时默认为监听。",
        arg2: "当 arg1 是布尔值时主题更改回调。",
      },
      return: {
        theme: "当前系统颜色方案首选项：浅色或深色。",
      },
    },
  },

  useToast: {
    desc: "创建轻量级、自动消除来自 React 组件的 toast 通知。",
    detail: (
      <>
        <p>
          <code>useToast</code> 返回一个可调用函数，该函数在组件之外呈现一个 toast
          普通 DOM 子树。每个 Toast 在配置的持续时间后都会被删除，并且延迟 Toast
          被跟踪，直到它们被显示或被卸载清理取消。
        </p>
        <p>
          返回的函数有 <code>top</code>、<code>center</code> 和 <code>bottom</code> 帮助程序
          对于常见的展示位置。每个 Toast 设置会覆盖提供给 Hook 的默认设置。
        </p>
      </>
    ),
    $p1: "从事件处理程序调用返回的 toast 函数，以便将通知绑定到显式用户操作。",
    consideration: (
      <ol>
        <li>
          Toast 元素附加到 <code>document.body</code> 并使用单独的 React 进行渲染
          root，因此将它们的 z 索引与应用程序的其余部分协调起来。
        </li>
        <li>
          负持续时间或延迟被钳位为零。选择足够长的消息持续时间
          待读。
        </li>
        <li>
          当其所属组件卸载时，Hook 会清理活动的和延迟的 toast。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>在 Hook 配置中设置共享视觉默认值，并仅覆盖每个 toast 的不同之处。</li>
        <li>使用放置助手来实现标准位置，使用坐标放置来实现自定义叠加。</li>
        <li>保持 Toast 文本简洁，并为重要消息使用较长的持续时间。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：如何在顶部或底部显示吐司？</strong>
          <br />
          答：调用 <code>toast.top(text)</code> 或 <code>toast.bottom(text)</code>。
        </li>
        <li>
          <strong>问：一个 Toast 是否可以覆盖默认持续时间？</strong>
          <br />
          答：是的。将第二个配置对象传递给调用。
        </li>
        <li>
          <strong>问：组件卸载时会发生什么？</strong>
          <br />
          答：Hook 会删除活动的 Toast 并清除该 Hook 实例创建的延迟计时器。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        config: "默认 Toast 持续时间、延迟、位置、颜色和样式设置。",
      },
      return: {
        toast: "可调用 toast 函数，具有顶部、中心和底部放置助手。",
      },
    },
  },

  useRipple: {
    desc: "通过 React ref 将 CSS Houdini Paint-worklet 波纹动画添加到元素。",
    detail: (
      <>
        <p>
          <code>useRipple</code> 返回一个元素的引用，该元素应该显示来自
          指针位置。它会在支持时注册捆绑的 CSS Paint API 工作集并驱动
          带有 requestAnimationFrame 的动画。
        </p>
        <p>
          将返回的引用附加到按钮或其他交互元素。 Hook 移除监听器
          并在组件卸载或其配置更改时取消活动动画。
        </p>
      </>
    ),
    $p1: "将返回的引用附加到应该接收涟漪效果的交互元素。",
    consideration: (
      <ol>
        <li>
          效果取决于浏览器的 CSS Paint API 和 <code>CSS.paintWorklet</code>。不支持
          浏览器会记录警告并且不渲染绘制工作集。
        </li>
        <li>
          默认触发器是 <code>mousedown</code>。选择与触发条件不冲突的触发器
          元素的其他指针处理程序。
        </li>
        <li>
          ref 必须附加到 HTMLElement，以便 Hook 可以测量其边界并设置 CSS
          自定义属性。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>使用具有可见背景的按钮或类似链接的控件来实现绘制效果。</li>
        <li>选择与其余交互反馈相匹配的持续时间。</li>
        <li>当纹波设置不需要改变时，保持配置对象稳定。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么看不到波纹？</strong>
          <br />
          答：检查 CSS Paint API 支持，确保附加返回的引用，并验证
          元素有一个可见的背景。
        </li>
        <li>
          <strong>问：我可以通过点击或指针按下来触发它吗？</strong>
          <br />
          答：是的。将 <code>config.trigger</code> 设置为支持的指针事件名称之一。
        </li>
        <li>
          <strong>问：它会清理事件监听器吗？</strong>
          <br />
          答：是的。 Hook 会删除其侦听器并取消清理时的活动动画。
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
        config: "可选颜色、持续时间、触发和最小 Alpha 设置。",
      },
      return: {
        ref: "引用附加到目标 HTMLElement。",
      },
    },
  },

  useParticle: {
    desc: "通过 React ref 将 CSS Houdini Paint-worklet 粒子动画添加到元素。",
    detail: (
      <>
        <p>
          <code>useParticle</code> 返回一个元素的引用，该元素应该从
          指针位置。它会在支持时注册捆绑的 CSS Paint API 工作集并进行动画处理
          配置的颗粒数量和尺寸。
        </p>
        <p>
          将 <code>enable</code> 设置为 <code>false</code>，当元素应保持交互但
          应暂时禁用粒子反馈。
        </p>
      </>
    ),
    $p1: "将返回的引用附加到应发射粒子的元素并使用配置的触发器与其交互。",
    consideration: (
      <ol>
        <li>
          效果取决于浏览器的 CSS Paint API 和 <code>CSS.paintWorklet</code>。不支持
          浏览器会记录警告并且不渲染绘制工作集。
        </li>
        <li>
          默认触发器为<code>mousedown</code>；使用 <code>click</code> 或
          <code>pointerdown</code> 当它更好地匹配周围的交互时。
        </li>
        <li>
          返回的 ref 必须附加到 HTMLElement，以便 Hook 可以读取指针坐标
          并设置 CSS 自定义属性。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>在低功率设备上保持适度的颗粒数量和尺寸。</li>
        <li>使用 <code>enable</code> 来尊重 UI 中的简化运动或交互首选项。</li>
        <li>当动画设置不需要更改时，请保持配置稳定。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么看不到颗粒？</strong>
          <br />
          答：检查 CSS Paint API 支持，确认已附加参考，并确保 <code>enable</code> 是
          真的。
        </li>
        <li>
          <strong>问：我可以更改粒子计数吗？</strong>
          <br />
          答：是的。将 <code>config.num</code> 设置为所需的粒子数。
        </li>
        <li>
          <strong>问：Hook 会清理监听器和动画吗？</strong>
          <br />
          答：是的。它会删除触发器侦听器并取消清理时的活动动画。
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
        config: "可选颜色、持续时间、触发、粒子计数和大小设置。",
        enable: "粒子动画是否可以启动。默认为 true。",
      },
      return: {
        ref: "引用附加到目标 HTMLElement。",
      },
    },
  },

  useDimensionsById: {
    desc: "观察由 id 选择的 DOM 元素的尺寸。",
    detail: (
      <>
        <p>
          <code>useDimensionsById</code> 找到具有提供的 id 的元素，并使用以下命令观察它
          <code>ResizeObserver</code>，并返回其宽度、高度、顶部和左侧值。
        </p>
        <p>
          当 id 改变时，Hook 会断开与前一个目标的连接并观察新的目标。
          如果不存在匹配元素，当前尺寸将保持其初始值。
        </p>
      </>
    ),
    $p1: "目标元素必须存在于文档中并且具有提供的 id。",
    consideration: (
      <ol>
        <li>id 必须是唯一的，并且效果运行时必须安装目标。</li>
        <li>返回的尺寸从零开始，直到 ResizeObserver 报告目标。</li>
        <li>Hook 会观察内容框的尺寸，但不会创建目标元素。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>当目标呈现在组件的直接子树之外时，请使用稳定的语义 ID。</li>
        <li>仅当测量目标确实发生变化时才更改 id。</li>
        <li>当 ref 可用并且不需要 id 查找时，请改用 <code>useDimensions</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>Q：如果找不到id怎么办？</strong>
          <br />
          答：不创建观察者，尺寸保留其当前值。
        </li>
        <li>
          <strong>Q：改变id会切换观察者吗？</strong>
          <br />
          答：是的。该效果会清理旧的观察者并查找新的 id。
        </li>
        <li>
          <strong>问：这与 useDimensions 有什么不同吗？</strong>
          <br />
          答：它使用元素 id 而不是返回 ref，当目标位于文档中的其他位置时，这很有用。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        id: "要观察的元素的 ID。",
      },
      return: {
        width: "观察到的内容宽度。",
        height: "观察到的内容高度。",
        top: "观察到的内容顶部偏移。",
        left: "观察内容左偏移。",
      },
    },
  },

  useQrcodeScan: {
    desc: "从相机或图像文件中扫描二维码和条形码。",
    detail: (
      <>
        <p><code>useQrcodeScan</code> 提供实时相机扫描、图像解码、标准化结果元数据、相机权限状态、手电筒和变焦控制。</p>
        <p>相机访问需要 HTTPS 或 localhost。图像解码不需要相机许可。</p>
      </>
    ),
    $p1: "在调用 start 之前渲染扫描仪容器。当您只需要解码图像时，请使用 scanImage。",
    consideration: (
      <ol>
        <li>相机权限和设备可用性取决于浏览器和活动相机。</li>
        <li>在调用 <code>start</code> 之前渲染目标容器，并在离开页面时停止扫描仪。</li>
        <li>图像扫描首先停止活动的实时扫描，并且不请求相机许可。</li>
        <li>当解码器不提供​​元数据（例如格式、边界和内容类型）时，元数据可以为空。</li>
      </ol>
    ),
    $best: (
      <ul>
        <li>在 <code>onError</code> 回调中处理扫描仪错误并显示当前的 <code>status</code>。</li>
        <li>在使用手电筒或变焦之前，尤其是在切换相机之后，请检查 <code>cameraCapabilities</code>。</li>
        <li>在调用 <code>scanImage</code> 之前限制图像大小并调整手机大照片的大小。</li>
        <li>离开扫描流程时使用 <code>reset</code>，开始新结果状态时使用 <code>clearResult</code>。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么摄像头扫描HTTP页面失败？</strong>
          <br />
          答：相机访问需要安全上下文，例如 HTTPS 或 localhost。图像扫描不需要相机许可。
        </li>
        <li>
          <strong>问：为什么格式、边界或内容类型有时为空？</strong>
          <br />
          答：所选的浏览器解码器并不总是提供每个元数据字段。
        </li>
        <li>
          <strong>问：为什么带摄像头的设备不支持手电筒或变焦？</strong>
          <br />
          A：支持属于当前活动的摄像机轨道，切换摄像机后可以改变。
        </li>
        <li>
          <strong>Q：是否一定保证相机启动成功？</strong>
          <br />
          答：不会。设备可用性、浏览器策略和并发摄像头使用仍然会阻止启动。
        </li>
        <li>
          <strong>Q：Hook是否配置微信JS-SDK？</strong>
          <br />
          答：不需要。注入 <code>wechatAdapter</code>，以便应用程序拥有其应用程序 ID、签名 API 和 SDK 准备情况。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        options: "扫描仪模式、适配器、服务和默认回调。",
      },
      return: {
        status: "当前扫描仪生命周期状态。",
        scanResult: "最新标准化扫描结果。",
        start: "开始实时相机扫描。",
        stop: "停止扫描并释放资源。",
        scanImage: "无需请求相机许可即可解码图像。",
        cameraCapabilities: "活动摄像机轨道的手电筒和变焦功能。",
        cameraPermission: "可观察相机权限状态。",
        reset: "停止扫描并清除结果和错误状态。",
      },
    },
  },

  useInfiniteScroll: {
    desc: "一个 React Hook，用于使用 IntersectionObserver 实现无限滚动和自动负载检测。",
    detail: (
      <>
        <p>
          <code>useInfiniteScroll</code>提供了一种在React中实现无限滚动的简单方法
          应用程序。它会自动检测加载器元素何时可见并触发
          使用浏览器的 <code>IntersectionObserver</code> API 异步数据加载。
        </p>
        <p>
          该钩子管理无限列表的整个生命周期：加载状态、累积项目、
          并发控制和视口/容器可见性检测。它还支持两者
          页面级滚动和可滚动容器元素。
        </p>
        <p>
          通过返回必须在列表底部呈现的 <code>loader</code> 元素，
          当用户滚动时，钩子可以观察其可见性并触发额外的数据加载
          接近内容的结尾。
        </p>
      </>
    ),
    $p1: "将返回的加载器元素呈现在列表底部。当它进入视口（或容器）时，钩子会自动触发 loadMore 并追加新项目。",
    consideration: (
      <ol>
        <li>
          <code>loader</code> 元素必须在 DOM 中呈现，以便观察者能够检测到它。
          如果有条件隐藏，则不会触发无限加载。
        </li>
        <li>
          <code>loadMore</code> 功能应该稳定（例如，用 <code>useCallback</code> 包装）
          或引用稳定状态）以避免不必要的重新观察或意外请求。
        </li>
        <li>
          使用<code>mode="container"</code>时，确保容器元素具有固定的高度
          和 <code>overflow: auto</code> 或 <code>overflow: scroll</code>，因此会发生滚动事件
          容器内。
        </li>
        <li>
          该钩子会在内部阻止并发请求，但您的 API 仍然应该是幂等的
          或者在网络重试的情况下防止重复调用。
        </li>
        <li>
          如果加载程序在安装时已经可见（例如当列表很短时），
          钩子将立即触发加载，直到视口/容器被填满。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>
          始终将返回的 <code>loader</code> 放在列表项的底部，以便
          观察者可以检测用户何时到达终点。
        </li>
        <li>
          使用 <code>preloadDistance</code>（例如，200–400px）在用户之前开始加载
          实际上到达底部以获得更流畅的用户体验。
        </li>
        <li>
          使用可滚动面板或聊天样式布局时，请使用
          <code>mode="container"</code> 与 <code>containerRef</code> 或 <code>containerId</code>。
        </li>
        <li>
          将分页状态保留在钩子外部（例如，页面或光标）并在内部更新
          <code>loadMore</code>。
        </li>
        <li>
          当过滤器或查询参数更改时使用 <code>reload()</code> 重新启动列表
          从一开始。
        </li>
        <li>
          如果需要手动加载更多数据，请使用 <code>triggerLoadMore()</code>
          （例如，单击按钮时）。
        </li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：为什么加载器没有触发？</strong>
          <br />
          答：确保加载器元素在 DOM 中呈现并可见。观察者只工作
          元素是否存在并且可以与视口或容器相交。
        </li>
        <li>
          <strong>问：我可以将其与可滚动容器一起使用而不是窗口吗？</strong>
          <br />
          答：是的。设置 <code>mode="container"</code> 并提供 <code>containerRef</code> 或
          <code>containerId</code>。
        </li>
        <li>
          <strong>问：我可以手动控制装载的物品吗？</strong>
          <br />
          答：是的。使用返回的 <code>setItems</code> 函数手动修改列表。
        </li>
        <li>
          <strong>问：如何重置列表？</strong>
          <br />
          A：调用<code>reset()</code>清除物品和加载状态，或者使用
          <code>reload()</code> 复位并立即再次获取第一页。
        </li>
        <li>
          <strong>问：如果列表比视口短怎么办？</strong>
          <br />
          A：钩子会自动触发额外的加载，直到视口或容器
          变为已满或 <code>hasMore</code> 变为 false。
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
              <code>T</code> — <code>loadMore</code> 返回的项目类型。
            </li>
            <li>
              <code>C</code> — 用作加载器容器的 HTML 元素类型。默认为{" "}
              <code>"div"</code>。
            </li>
          </ul>
        </>
      ),
      params: {
        loadMore:
          "异步函数用于获取下一批项目。应该返回一个项目数组或 void。",
        hasMore:
          "指示是否有更多数据可用的布尔值。如果为 false，加载将永久停止。",
        loader:
          "自定义加载指示器。可以是 ReactNode 或返回 ReactNode 的函数。",
        component:
          "用作加载器元素包装器的 HTML 元素类型。默认为“div”。",
        props:
          "传递给加载器容器元素的道具。",
        preloadDistance:
          "距触发预加载的视口/容器底部的距离（以像素为单位）。默认为 200。",
        observerOptions:
          "用于高级控制的自定义 IntersectionObserver 选项。",
        disabled:
          "当 true 时，自动加载被禁用。",
        mode:
          "滚动检测模式。 'viewport' 观察窗口，'container' 观察特定的滚动容器，'auto' 自动选择。",
        containerId:
          "滚动容器元素的 ID。当 mode='container' 时优先。",
        containerRef:
          "当 mode='container' 时，引用滚动容器元素。如果未提供containerId，则使用。",
      },
      return: {
        loader:
          "必须在列表末尾呈现的 React 元素才能在其可见时触发加载。",
        loading:
          "指示请求当前是否正在进行的布尔值。",
        items:
          "已加载项目的累积数组。",
        setItems:
          "状态设置器允许手动修改项目数组。",
        reset:
          "清除所有项目并重置加载状态。",
        reload:
          "重置列表并立即触发第一次加载。",
        triggerLoadMore:
          "手动触发loadMore函数。",
      },
    },
  },

  useAutoPageSize: {
    desc: "根据滚动容器的高度和估计的项目高度计算实际页面大小。",
    detail: (
      <>
        <p>
          <code>useAutoPageSize</code> 测量由 <code>containerId</code> 识别的元素并
          计算有多少项目适合其可见高度。它观察容器
          <code>ResizeObserver</code>，因此结果默认遵循布局更改。
        </p>
        <p>
          返回值永远不会小于<code>minSize</code>。可选的
          <code>buffer</code> 添加额外的项目以减少立即再次请求的机会
          用户开始滚动后。
        </p>
      </>
    ),
    $p1: "请求或切片列表数据的下一页时使用返回的 pageSize。",
    consideration: (
      <ol>
        <li>
          容器必须存在于 DOM 中，并且在以下情况下具有可测量的非零高度：
          效果运行。如果找不到，则挂钩将保留其当前值。
        </li>
        <li>
          <code>estimatedItemHeight</code> 是对每个项目的估计而不是测量；
          为列表布局选择一个代表值。
        </li>
        <li>
          该钩子需要 <code>ResizeObserver</code>。提供浏览器或测试环境
          在渲染钩子之前支持它。
        </li>
      </ol>
    ),
    $best: (
      <ul>
        <li>将 <code>minSize</code> 设置为 API 或列表组件的安全下限。</li>
        <li>使用小型 <code>buffer</code> 保持滚动平滑，而不会过度获取数据。</li>
        <li>将 <code>once</code> 设置为 <code>true</code> 以获得无需调整大小更新的固定布局。</li>
      </ul>
    ),
    $faqs: (
      <ul>
        <li>
          <strong>问：如果找不到容器怎么办？</strong>
          <br />
          答：钩子将 <code>pageSize</code> 保留为其当前值，并且不启动观察者。
        </li>
        <li>
          <strong>问：为什么结果大于可见项数？</strong>
          <br />
          答：计算将 <code>buffer</code> 添加到估计的可见项目数中。
        </li>
        <li>
          <strong>问：第一次测量后如何停止重新计算？</strong>
          <br />
          A：传递 <code>{`{ once: true }`}</code> 作为第三个参数。
        </li>
      </ul>
    ),
    $apis: {
      generics: (<></>),
      params: {
        containerId: "要测量的容器元素的 ID。",
        estimatedItemHeight: "估计的项目高度（以像素为单位）。默认为 150。",
        options: "一次性计算、最小尺寸和额外缓冲项的可选设置。",
      },
      return: {
        pageSize: "计算出的页面大小，至少限制为 minSize。",
      },
    },
  },
  __end: "语言环境映射结束，请不要删除此行",
} as const;

export default locale_cn;
