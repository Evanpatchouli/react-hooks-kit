import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, FAQs, SubTitle, Usage, Best } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/UseResize/example.1";
import example2 from "@/views/docs/views/examples/UseResize/example.2";
import pkg from "@/../package.json";
import UseResizeApi from "@/views/docs/views/hooks-apis/useResize.api";

export default function UseResize() {
  const hooksName = "useResize";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $h2 = useLocaleSelector(`${hooksName}.$h2`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName} desc={$desc}>
      <Body>{$detail}</Body>
      <Usage>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <p>{$p1}</p>
        <SubTitle>{$h2}</SubTitle>
        <Demo code={example2.code}>{<example2.View />}</Demo>
        <p>{$p2}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseResizeApi />
    </Article>
  );
}
