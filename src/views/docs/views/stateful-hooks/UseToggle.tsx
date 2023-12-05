import useLocaleSelector from "@/locale/locale.selector";
import Article, {
  Body,
  Consideration,
  Demo,
  SubTitle,
} from "@components/layout/Article";
import { useEffect } from "react";
import example1 from "../examples/UseToggle/example.1";
import example2 from "../examples/UseToggle/example.2";
import pkg from "@/../package.json";

export default function UseToggle() {
  const hooksName = "useToggle";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $p1 = useLocaleSelector(`${hooksName}.$p1`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article
      title={hooksName.replace(/([A-Z])/g, (str) => str.toUpperCase())}
      desc={$desc}
    >
      <Body>{$detail}</Body>
      <Demo code={example1.code}>{<example1.View />}</Demo>
      <SubTitle>Value map</SubTitle>
      <p>{$p1}</p>
      <Demo code={example2.code}>{<example2.View />}</Demo>
      <Consideration>{$consider}</Consideration>
      <SubTitle id="apis">useToggle Apis</SubTitle>
    </Article>
  );
}
