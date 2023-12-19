import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Best,
  Body,
  Consideration,
  Demo,
  FAQs,
  SubTitle,
  Usage,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseReactive/example.1";
import UseReactiveApi from "../hooks-apis/useReactive.api";
import pkg from "@/../package.json";
import example2 from "../examples/UseReactive/example.2";

export default function UseToggle() {
  const hooksName = "useReactive";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
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
      <Best children={$best} />
      <FAQs children={$faqs} />
      <UseReactiveApi />
    </Article>
  );
}
