import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Consideration, Demo, Best, Usage, FAQs } from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseReactor/example.1";
import example2 from "../examples/UseReactor/example.2";
import example3 from "../examples/UseReactor/example.3";
import example4 from "../examples/UseReactor/example.4";
import example5 from "../examples/UseReactor/example.5";
import example6 from "../examples/UseReactor/example.6";
import example7 from "../examples/UseReactor/example.7";
import UseReactorApi from "../hooks-apis/useReactor.api";
import pkg from "@/../package.json";

export default function UseReactor() {
  const hooksName = "useReactor";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  const $p1_1 = useLocaleSelector(`${hooksName}.$p1_1`);
  const $p2 = useLocaleSelector(`${hooksName}.$p2`);
  const $p3 = useLocaleSelector(`${hooksName}.$p3`);
  const $p4 = useLocaleSelector(`${hooksName}.$p4`);
  const $p5 = useLocaleSelector(`${hooksName}.$p5`);
  const $p6 = useLocaleSelector(`${hooksName}.$p6`);
  const $p7 = useLocaleSelector(`${hooksName}.$p7`);
  const $p7_notice = useLocaleSelector(`${hooksName}.$p7_notice`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName.replace(/([A-Z])/g, (str) => str.toUpperCase())} desc={$desc}>
      <Body>{$detail}</Body>
      <Usage>
        <p>{$p1}</p>
        <Demo code={example1.code}>{<example1.View />}</Demo>
        <p>{$p1_1}</p>
        <br />
        <p>{$p2}</p>
        <Demo code={example2.code}>{<example2.View />}</Demo>
        <br />
        <p>{$p3}</p>
        <Demo code={example3.code}>{<example3.View />}</Demo>
        <br />
        <p>{$p4}</p>
        <Demo code={example4.code}>{<example4.View />}</Demo>
        <br />
        <p>{$p5}</p>
        <Demo code={example5.code}>{<example5.View />}</Demo>
        <br />
        <p>{$p6}</p>
        <Demo code={example6.code}>{<example6.View />}</Demo>
        <br />
        <p>{$p7}</p>
        <Demo code={example7.code}>{<example7.View />}</Demo>
        {$p7_notice}
      </Usage>
      <Consideration>{$consider}</Consideration>
      <Best></Best>
      <FAQs></FAQs>
      <UseReactorApi />
    </Article>
  );
}
