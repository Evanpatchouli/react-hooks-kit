import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, Best, FAQs } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseProtect/example.1";
import pkg from "@/../package.json";
import UseProtectApi from "@/views/docs/views/hooks-apis/useProtect.api";

export default function UseProtect() {
  const $desc = useLocaleSelector("useProtect.desc");
  const $detail = useLocaleSelector("useProtect.detail");
  const $consider = useLocaleSelector("useProtect.consideration");
  const $best = useLocaleSelector("useProtect.$best");
  const $faqs = useLocaleSelector("useProtect.$faqs");
  const $p1 = useLocaleSelector("useProtect.$p1");
  useEffect(() => {
    document.title = `useProtect - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="UseProtect" desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <p>{$p1}</p>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseProtectApi />
    </Article>
  );
}
