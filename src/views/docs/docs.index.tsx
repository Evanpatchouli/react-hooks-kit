import Article, { Body } from "@/components/layout/Article";

export default function DocsIndex() {
  return (
    <Article title="Docs of react-hooks-kit">
      <Body>
        <p>This is a collection of hooks for react.</p>
        <p>It includes:</p>
        <ul>
          <li>useReactive</li>
          <li>useReactor</li>
          <li>useReactorListener</li>
          <li>useReactorStore</li>
        </ul>

        <p>And it also includes some utils:</p>
        <ul>
          <li>useInterval</li>
          <li>useTicker</li>
          <li>useTimeoutFn</li>
        </ul>

        <p>And some houdini hooks:</p>
        <ul>
          <li>useRipple</li>
          <li>useParticle</li>
        </ul>
      </Body>
    </Article>
  );
}
