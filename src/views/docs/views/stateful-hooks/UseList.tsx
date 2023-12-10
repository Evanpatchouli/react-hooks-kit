import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  FAQs,
  SubTitle,
  Usage,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/UseList/example.1";
import example2 from "@/views/docs/views/examples/UseList/example.2";
import pkg from "@/../package.json";
import UseListApi from "@/views/docs/views/hooks-apis/useList.api";

export default function UseList() {
  const hooksName = "useList";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article
      title={hooksName.replace(/([A-Z])/g, (str) => str.toUpperCase())}
      desc={$desc}
    >
      <Body>{$detail}</Body>
      <Usage>
        <p>{$p1}</p>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <p>{$p2}</p>
        <Demo code={example2.code}>{<example2.View />}</Demo>
      </Usage>

      <Consideration>{$consider}</Consideration>
      <FAQs>{$faqs}</FAQs>
      <UseListApi />
    </Article>
  );
}
