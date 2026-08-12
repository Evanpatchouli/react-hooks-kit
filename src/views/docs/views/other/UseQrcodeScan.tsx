import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, FAQs, Usage, Best } from "@components/layout/Article";
import { useEffect } from "react";
import pkg from "@/../package.json";
import example1 from "@/views/docs/views/examples/UseQrcodeScan/example.1";
import UseQrcodeScanApi from "@/views/docs/views/hooks-apis/useQrcodeScan.api";

export default function UseQrcodeScan() {
  const hooksName = "useQrcodeScan";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);
  useEffect(() => { document.title = `${hooksName} - ${pkg.homepage}`; }, []);

  return <Article title={hooksName} desc={$desc}>
    <Body>{$detail}</Body>
    <Usage><Demo code={example1.code}><example1.View /></Demo></Usage>
    <Consideration>{$consider}</Consideration>
    <Best>{$best}</Best>
    <FAQs>{$faqs}</FAQs>
    <UseQrcodeScanApi />
  </Article>;
}
