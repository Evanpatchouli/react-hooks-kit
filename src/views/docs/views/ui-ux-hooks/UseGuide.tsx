import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  FAQs,
  SubTitle,
  Usage,
  Best,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/UseGuide/example.1";
import pkg from "@/../package.json";
import UseGuideApi from "@/views/docs/views/hooks-apis/useGuide.api";
import example2 from "../examples/UseGuide/example.2";

export default function UseGuide() {
  const hooksName = "useGuide";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName} desc={$desc}>
      <Body>{$detail}</Body>
      <Usage>
        <p>{$p1}</p>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <p>{$p2}</p>
        <Demo code={example2.code}>{<example2.View />}</Demo>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseGuideApi />
    </Article>
  );
}
