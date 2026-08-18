import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  FAQs,
  Usage,
  Best,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "@/views/docs/views/examples/UseToast/example.1";
import example2 from "@/views/docs/views/examples/UseToast/example.2";
import pkg from "@/../package.json";
import UseToastApi from "@/views/docs/views/hooks-apis/useToast.api";

export default function UseToast() {
  const hooksName = "useToast";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);

  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName} desc={$desc}>
      <Body>{$detail}</Body>
      <Usage>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <Demo code={example2.code}>{<example2.View />}</Demo>
        <p>{$p1}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseToastApi />
    </Article>
  );
}
