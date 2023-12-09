import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseWatch/example.1";
import pkg from "@/../package.json";

export default function UseWatch() {
  const $desc = useLocaleSelector("useWatch.desc");
  const $detail = useLocaleSelector("useWatch.detail");
  const $consider = useLocaleSelector("useWatch.consideration");
  useEffect(() => {
    document.title = `useWatch - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="UseWatch" desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <Consideration>{$consider}</Consideration>
    </Article>
  );
}
