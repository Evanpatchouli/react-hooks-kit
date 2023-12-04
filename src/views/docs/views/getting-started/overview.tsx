import Li from "@/components/layout/Li";
import useParticle from "@/hooks/houdini/hooks/useParticle";
import useTheme from "@/hooks/useTheme";
import useToogle from "@/hooks/useToogle";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { ThumbUpOffAlt, ThumbUpAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function Overview() {
  useEffect(() => {
    document.title = `overview - ${pkg.homepage}`;
  }, []);

  const theme = useTheme();
  useEffect(() => {
    console.log(`theme: ${theme}`);
  }, [theme]);
  const [thumb, setThumb] = useToogle();

  const effectRef = useParticle({}, !thumb);
  return (
    <Article title="Overview" desc={desc}>
      <SubTitle>Introduction</SubTitle>
      <Body>
        react-hooks-kit is an open source library focused on making it easy to use react hooks.
        <br />
        <br />
        It includes a comprehensive collection of hooks that empower you to accomplish any task in your application
        without being forced into a specific way of doing things.
        <br />
        <br />
        react-hooks-kit is a lightweight library that doesn't require any dependencies. It's easy to use, and it's easy
        to learn.
        <br />
      </Body>
      <SubTitle>Advantages of react-hooks-kit</SubTitle>
      <Body>
        <ul>
          <Li>
            <strong>Cosying</strong>: react-hooks-kit provides a simple API that makes it easy to use react hooks.
          </Li>
          <Li>
            <strong>Lightweight</strong>: It is a lightweight library without any dependencies.
          </Li>
          <Li>
            <strong>Overall</strong>: It includes a comprehensive collection of hooks that empower you to accomplish
            different tasks in your application like store, parser, listeners, effects, etc.
          </Li>
          <Li>
            <strong>Typescript support</strong>: It is developed with typescript and provides excellent typescript
            support and type inference support.
          </Li>
          <li>
            <strong>innovation</strong>: It provides some innovative hooks like useWatch (partial listener), useRipple
            (css houdini effect), etc.
          </li>
        </ul>
      </Body>
      <div
        css={$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `}
      >
        <Button
          onClick={setThumb}
          color={thumb ? "primary" : "inherit"}
          style={{
            textTransform: "none",
          }}
          ref={effectRef}
          disableRipple
        >
          <span
            style={{
              marginRight: 8,
            }}
          >
            Was this page helpful?
          </span>
          {thumb ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
        </Button>
      </div>
    </Article>
  );
}
