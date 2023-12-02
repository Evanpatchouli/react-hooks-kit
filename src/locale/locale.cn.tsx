import Code from "@/components/code";
import Li from "@/components/layout/Li";

const locale_cn = {
  $article: {
    Consideration: "注意事项",
  },
  useWatch: {
    desc: "一个监听对象某具名属性变化的 hook。",
    detail: (
      <>
        useWatch 是一个用于监听对象属性变化的 hook，它接受三个参数，分别是：
        <ol>
          <li>目标对象</li>
          <li>目标属性路径 (形如 "a.b.c" 或者 ["a", "b", "c"]) 或者一个 getter 函数</li>
          <li>回调函数</li>
        </ol>
        当目标对象的目标属性发生变化时，useWatch 会调用回调函数，回调函数接受两个参数，分别是：
        <ol>
          <li>旧值</li>
          <li>新值</li>
        </ol>
        例如：
      </>
    ),
    consideration: (
      <ol>
        <Li>目标应该是一个对象</Li>
        <Li>目标属性路径应该是一个字符串或者字符串数组，更推荐后者</Li>
        <Li>回调函数应该是一个函数</Li>
        <Li>
          默认情况下，返回值不会有明确的类型推断，因为从复杂对象中获取类型是困难的，但是你可以手动指定类型，例如：
          <code>const a: string = useWatch(obj, "a")</code>。与此同时，回调函数会自动为旧值和新值分配类型。
        </Li>
        <Li>
          严格模式会影响获取特殊键的属性，并可能导致能量消耗，最好的方法是使用数组作为路径而不是字符串路径与严格模式。
        </Li>
        <Li>
          如何获取被监听的值 {"( 比如 c in const obj = { a: { b : { c : 1 } } } )"}?<p>有四种方式：</p>
          <ol>
            <li>
              <Code>{`const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})`}</Code>
            </li>
            <li>
              <Code>{`const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code>{`const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <li>
              <Code>{`const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})`}</Code>
            </li>
            <p>第四种方式只适用于字符串路径而不是数组路径，并且如果路径中的一个键包含 "." 字符，则推断将失败。</p>
          </ol>
        </Li>
        <p>
          因此，建议避免在对象中使用包含 "." 字符
          的字符串作为键，然后在非严格模式下使用字符串或数组路径，从字符串路径推断出 PathValue。一切都会很好。
          此外，使用 getter 替代路径，在这种情况下，你需要确认你的 getter 总能正确工作。
        </p>
      </ol>
    ),
  },
} as const;

export default locale_cn;
