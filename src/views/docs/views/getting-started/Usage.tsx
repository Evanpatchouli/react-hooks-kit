import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { LegacyRef, useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";
import useToogle from "@/hooks/useToggle";
import useRipple from "@/hooks/houdini/hooks/useRipple";
import CodeBox from "@/components/code-box";
import ApiTable from "@/components/api-table";
import UseToggleApi from "../hooks-apis/useToggle.api";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

const code = `
import { useToogle } from "@evanpatchouli/react-hooks-kit";

const staticStyles: { [x: string]: React.CSSProperties } = {
  button: {
    width: "80px",
    height: "2rem",
    cursor: "pointer",
    padding: "10px 4px",
    textTransform: "uppercase",
    background: "white",
    borderRadius: "20px",
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "50%",
    fontFamily: "sans-serif",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

const Switcher = () => {
  const [isOn, toggle] = useToogle();
  return (
    <button
      style={{
        ...staticStyles.button,
        border: \`1px solid \${isOn ? "dodgerblue" : "gray"}\`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "dodgerblue" : "gray",
          transform: \`translate(\${isOn ? "calc(-8px - 100%)" : "calc(8px)"}, -50%)\`,
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};
`;

const staticStyles: { [x: string]: React.CSSProperties } = {
  button: {
    width: "80px",
    height: "1.8rem",
    cursor: "pointer",
    padding: "10px 4px",
    textTransform: "uppercase",
    background: "white",
    borderRadius: "20px",
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "50%",
    fontFamily: "sans-serif",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

const Switcher = () => {
  const [isOn, toggle] = useToogle();
  return (
    <button
      style={{
        ...staticStyles.button,
        border: `1px solid ${isOn ? "dodgerblue" : "gray"}`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "dodgerblue" : "gray",
          transform: `translate(${isOn ? "calc(-8px - 100%)" : "calc(8px)"}, -50%)`,
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};

const code2 = `
import { useToogle, useRipple } from "@evanpatchouli/react-hooks-kit";

const RippleSwitcher = () => {
  const [isOn, toggle] = useToogle();
  const ref = useRipple<HTMLButtonElement>({
    color: "hsla(210, 100%, 56%, 0.557)",
    duration: 500,
    trigger: "mousedown",
  });
  return (
    <button
      ref={ref}
      style={{
        ...staticStyles.button,
        border: \`1px solid \${isOn ? "dodgerblue" : "gray"}\`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "blue" : "gainsboro",
          transform: \`translate(\${isOn ? "calc(-2px - 100%)" : "calc(2px)"}, -50%)\`,
          backgroundColor: isOn ? 'hsla(210, 100%, 56%, 0.557)' : "gray",
          padding: '0 4px',
          lineHeight: '1.4rem',
          borderRadius: '12px',
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};
`;

const RippleSwitcher = () => {
  const [isOn, toggle] = useToogle();
  const ref = useRipple<HTMLButtonElement>({
    color: "hsla(210, 100%, 56%, 0.557)",
    duration: 500,
    trigger: "mousedown",
  });
  return (
    <button
      ref={ref}
      style={{
        ...staticStyles.button,
        border: `1px solid ${isOn ? "dodgerblue" : "gray"}`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "blue" : "gainsboro",
          transform: `translate(${isOn ? "calc(-2px - 100%)" : "calc(2px)"}, -50%)`,
          backgroundColor: isOn ? "hsla(210, 100%, 56%, 0.557)" : "gray",
          padding: "0 4px",
          lineHeight: "1.4rem",
          borderRadius: "12px",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};

export default function Usage() {
  useEffect(() => {
    document.title = `Usage - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="Usage" desc={desc}>
      <SubTitle>npm</SubTitle>
      <p>Take "useToggle" as an example, you can use it to make a Switcher:</p>
      <Body>
        <Switcher />
        <CodeBox>{code}</CodeBox>
      </Body>
      <p>Use "useRipple" to make Switcher more cool:</p>
      <Body>
        <RippleSwitcher />
        <CodeBox>{code2}</CodeBox>
      </Body>
      <strong>Now, you get a cool RippleSwitcher!</strong>
      <UseToggleApi />
      <WasHelpful />
    </Article>
  );
}
