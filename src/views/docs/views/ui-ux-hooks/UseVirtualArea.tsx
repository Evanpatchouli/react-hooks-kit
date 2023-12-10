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
import example1 from "../examples/UseVirtualArea/example.1";
import pkg from "@/../package.json";
import UseVirtualAreaApi from "../hooks-apis/useVirtualArea.api";

export default function UseVirtualArea() {
  const hooksName = "useVirtualArea";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
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
        <Demo code={example1.code}>{<example1.View />}</Demo>
      </Usage>

      <p>{$p1}</p>
      <Consideration>{$consider}</Consideration>
      <FAQs>{$faqs}</FAQs>
      <UseVirtualAreaApi />
    </Article>
  );
}
