import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseUrl/example.1";
import pkg from "@/../package.json";
import UseUrlApi from "../hooks-apis/useUrl.api";

export default function UseUrl() {
  const $desc = useLocaleSelector("useUrl.desc");
  const $detail = useLocaleSelector("useUrl.detail");
  const $consider = useLocaleSelector("useUrl.consideration");
  useEffect(() => {
    document.title = `useUrl - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="UseUrl" desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <Consideration>{$consider}</Consideration>
      <UseUrlApi />
    </Article>
  );
}
