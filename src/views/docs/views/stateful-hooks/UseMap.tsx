import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, FAQs, SubTitle, Usage, Best } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/UseMap/example.1";
import example2 from "@/views/docs/views/examples/UseMap/example.2";
import example3 from "@/views/docs/views/examples/UseMap/example.3";
import example4 from "@/views/docs/views/examples/UseMap/example.4";
import pkg from "@/../package.json";
import UseMapApi from "@/views/docs/views/hooks-apis/useMap.api";

export default function UseMap() {
  const hooksName = "useMap";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $h2 = useLocaleSelector(`${hooksName}.$h2`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $p3 = useLocaleSelector(`${hooksName}.$p3`);
  const $h3 = useLocaleSelector(`${hooksName}.$h3`);
  const $p4 = useLocaleSelector(`${hooksName}.$p4`);
  const $h4 = useLocaleSelector(`${hooksName}.$h4`);
  const $p5 = useLocaleSelector(`${hooksName}.$p5`);
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
        <p>{$p2}</p>
        <Demo code={example2.code}>{<example2.View />}</Demo>
        <SubTitle>{$h3}</SubTitle>
        <p>{$p3}</p>
        <Demo code={example3.code}>{<example3.View />}</Demo>
        <p>{$p4}</p>
        <SubTitle>{$h4}</SubTitle>
        <p>{$p5}</p>
        <Demo code={example4.code}>{<example4.View />}</Demo>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseMapApi />
    </Article>
  );
}
