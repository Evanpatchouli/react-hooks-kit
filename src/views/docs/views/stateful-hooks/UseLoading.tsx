import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, SubTitle } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseLoading/example.1";
import example2 from "../examples/UseLoading/example.2";
import UseLoadingApi from "../hooks-apis/useLoading.api";
import pkg from "@/../package.json";

export default function UseLoading() {
  const hooksName = "useLoading";
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
      <SubTitle>Counter mode</SubTitle>
      <p>{$p1}</p>
      <Demo code={example2.code}>{<example2.View />}</Demo>
      <Consideration>{$consider}</Consideration>
      {/* <SubTitle id="hook-api">Api of {hooksName}</SubTitle> */}
      <UseLoadingApi />
    </Article>
  );
}
