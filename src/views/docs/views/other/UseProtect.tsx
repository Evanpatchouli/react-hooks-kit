import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseProtect/example.1";
import pkg from "@/../package.json";

export default function UseProtect() {
  const $desc = useLocaleSelector("useProtect.desc");
  const $detail = useLocaleSelector("useProtect.detail");
  const $consider = useLocaleSelector("useProtect.consideration");
  useEffect(() => {
    document.title = `useProtect - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="UseProtect" desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <Consideration>{$consider}</Consideration>
    </Article>
  );
}
