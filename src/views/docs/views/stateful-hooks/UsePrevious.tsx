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
import example1 from "@/views/docs/views/examples/UsePrevious/example.1";
import pkg from "@/../package.json";
import UsePrevoiusApi from "@/views/docs/views/hooks-apis/usePrevious.api";
import BestView from "@/views/docs/views/examples/UsePrevious/best";

export default function UsePrevious() {
  const hooksName = "usePrevious";
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
        <p>{$p1}</p>
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best>
        {$best}
        <Demo code={BestView.code}>{<BestView.View />}</Demo>
      </Best>
      <FAQs>{$faqs}</FAQs>
      <UsePrevoiusApi />
    </Article>
  );
}
