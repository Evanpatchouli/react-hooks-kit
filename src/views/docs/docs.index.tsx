import Article, { Body } from "@/components/layout/Article";

export default function DocsIndex() {
  return (
    <Article title="Docs of react-hooks-kit">
      <Body>
        <p>
          This is a collection of hooks to manage state and view much more
          easier in ReactJs.
        </p>
        <p>It includes some stateful hooks:</p>
        <ul>
          <li>useLoading</li>
          <li>useTree</li>
          <li>useReactive</li>
          <li>useReactor</li>
          <li>...</li>
        </ul>

        <p>And it also includes some utils:</p>
        <ul>
          <li>useGuide</li>
          <li>useTicker</li>
          <li>useVirtualArea</li>
          <li>...</li>
        </ul>

        <p>And it also provides some magical hooks:</p>
        <ul>
          <li>useEmitter</li>
          <li>useReceiver</li>
          <li>useProvide</li>
          <li>useInject</li>
          <li>...</li>
        </ul>

        <p>And some houdini hooks:</p>
        <ul>
          <li>useRipple</li>
          <li>useParticle</li>
          <li>...</li>
        </ul>
      </Body>
    </Article>
  );
}
