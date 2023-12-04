import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";
import { Coffee } from "@mui/icons-material";
import { Button } from "@mui/material";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function Support() {
  useEffect(() => {
    document.title = `Support - ${pkg.homepage}`;
  }, []);

  return (
    <Article title="Support" desc={desc}>
      <SubTitle>Support us to make it better !</SubTitle>
      <Button LinkComponent={"a"} variant="contained">
        Buy me a coffee
        <Coffee style={{ marginLeft: 8 }} />
      </Button>
      <WasHelpful children="🥰 Thank you ~ " />
    </Article>
  );
}
