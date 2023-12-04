import { useEffect } from "react";
import Article, { Body, Demo, SubTitle } from "@/components/layout/Article";
import useRipple from "@/hooks/houdini/hooks/useRipple";
import pkg from "@/../package.json";

const codes = [
  `
const Demo1 = () => {
  const useRippleRef = useRipple<HTMLDivElement>();
  return (
    <div
      ref={useRippleRef}
    >
      Click to render ripple effect
    </div>
  );
}
`,
];

function UseRipple() {
  useEffect(() => {
    document.title = `useRipple - ${pkg.homepage}`;
  }, []);

  const useRippleRef = useRipple<HTMLDivElement>();
  const desc = "useRipple is a hook for using houdini particle effect.";

  return (
    <Article title="UseRipple" desc={desc}>
      <Body>A hook to render ripple effect by using houdini paintWorklet.</Body>
      <SubTitle>Usage</SubTitle>
      <Demo code={codes[0]}>
        <div css={styles.demo1} ref={useRippleRef}>
          Click to render ripple effect
        </div>
      </Demo>
      <SubTitle>Considerations</SubTitle>
      <Body>
        <ol>
          <li>
            <strong>useRipple</strong> is a hook to render ripple effect by using <strong>houdini</strong> paintWorklet.
          </li>
          <li>
            <strong>mousedown</strong> is the default trigger to render ripple effect. You should avoid using the same
            trigger on you component other click-like handler to avoid conflict.
          </li>
          <li>
            Different triggers will make the effect a little <strong>different</strong>.
          </li>
        </ol>
      </Body>
    </Article>
  );
}

export default UseRipple;

const styles = {
  demo1: $css`
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
  &::selection {
    background-color: transparent;
  }
`,
} as const;
