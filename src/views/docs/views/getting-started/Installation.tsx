import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function Overview() {
  useEffect(() => {
    document.title = `overview - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="Installation" desc={desc}>
      <SubTitle>npm</SubTitle>
      <Body>
        <Code lang="bash">{`npm i -S @evanpatchouli/react-hooks-kit`}</Code>
      </Body>
      <SubTitle>pnpm</SubTitle>
      <Body>
        <Code lang="bash">{`pnpm i -S @evanpatchouli/react-hooks-kit`}</Code>
      </Body>
      <SubTitle>yarn</SubTitle>
      <Body>
        <Code lang="bash">{`yarn add -S @evanpatchouli/react-hooks-kit`}</Code>
      </Body>
      <WasHelpful />
    </Article>
  );
}
