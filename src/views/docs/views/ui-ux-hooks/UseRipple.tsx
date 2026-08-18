import useLocaleSelector from "@/locale/locale.selector";
import { useEffect } from "react";
import Article, { Body, Demo, SubTitle } from "@/components/layout/Article";
import { Consideration, Best, FAQs } from "@components/layout/Article";
import useRipple from "@/hooks/houdini/hooks/useRipple";
import pkg from "@/../package.json";
import UseRippleApi from "@/views/docs/views/hooks-apis/useRipple.api";

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
  const hooksName = "useRipple";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);

  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  const useRippleRef = useRipple<HTMLDivElement>();

  return (
    <Article title="UseRipple" desc={$desc}>
      <Body>{$detail}</Body>
      <SubTitle>Usage</SubTitle>
      <Demo code={codes[0]}>
        <div css={styles.demo1} ref={useRippleRef}>
          Click to render ripple effect
        </div>
      </Demo>
      <SubTitle>Considerations</SubTitle>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseRippleApi />
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
