import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body } from "@components/layout/Article";
import { useEffect } from "react";
import pkg from "@/../package.json";

export default function UseReactorStore() {
  const hooksName = "useReactorStore";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  return (
    <Article title={hooksName} desc={$desc}>
      <Body>{$detail}</Body>
    </Article>
  );
}
