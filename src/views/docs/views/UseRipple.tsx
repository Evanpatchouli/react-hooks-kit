import CodeBox from "@/components/code-box";
import CopyIcon from "@/components/copy-icon";
import Article, { Body, Demo, SubTitle } from "@/components/layout/Article";
import useRipple from "@/hooks/houdini/hooks/useRipple";
import { FileCopyOutlined } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import { useState } from "react";

const codes = [
  `
const Demo1 = () => {
  const particleRef = useRipple<HTMLDivElement>();
  return (
    <div
      ref={particleRef}
    >
      Click to render ripple effect
    </div>
  );
}
`,
];

function UseRipple() {
  const particleRef = useRipple<HTMLDivElement>();
  const desc = "useParticle is a hook for using houdini particle effect.";
  return (
    <Article title="UseRipple" desc={desc}>
      <Body>A hook to render ripple effect by using houdini paintWorklet.</Body>
      <SubTitle>Usage</SubTitle>
      <Demo code={codes[0]}>
        <div css={styles.demo1} ref={particleRef}>
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
