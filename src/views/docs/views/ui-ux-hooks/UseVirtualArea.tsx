import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, SubTitle } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseVirtualArea/example.1";
import pkg from "@/../package.json";
// import UseToggleApi from "../hooks-apis/useToggle.api";

export default function UseVirtualArea() {
  const hooksName = "useVirtualArea";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName.replace(/([A-Z])/g, (str) => str.toUpperCase())} desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <SubTitle>Value map</SubTitle>
      <p>{$p1}</p>
      <Consideration>{$consider}</Consideration>
      {/* <SubTitle id="hook-api">Api of {hooksName}</SubTitle> */}
      {/* <UseToggleApi /> */}
    </Article>
  );
}
