import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  SubTitle,
  Usage,
  FAQs,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseMeta/example.1";
import example2 from "../examples/UseMeta/example.2";
import example3 from "../examples/UseMeta/example.3";
import pkg from "@/../package.json";
import UseMetaApi from "../hooks-apis/useMeta.api";

export default function UseToggle() {
  const hooksName = "useMeta";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $p3 = useLocaleSelector(`${hooksName}.$p3`);
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
        <SubTitle low>Set deep property in object</SubTitle>
        <p>{$p1}</p>
        <Demo code={example1.code}>{<example1.View />}</Demo>

        <SubTitle low>Set action of property</SubTitle>
        <p>{$p2}</p>
        <Demo code={example2.code}>{<example2.View />}</Demo>

        <SubTitle low>Set action of whole object</SubTitle>
        <p>{$p3}</p>
        <Demo code={example3.code}>{<example3.View />}</Demo>
      </Usage>

      <Consideration>{$consider}</Consideration>

      <FAQs>{$faqs}</FAQs>

      <UseMetaApi />
    </Article>
  );
}
