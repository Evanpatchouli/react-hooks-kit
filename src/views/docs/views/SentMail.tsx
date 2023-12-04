import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";
import { Button } from "@mui/material";
import { EmailOutlined as Email } from "@mui/icons-material";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function SentMail() {
  useEffect(() => {
    document.title = `SentMail - ${pkg.homepage}`;
  }, []);

  const sx: any = { display: "flex", gap: 1, textTransform: "none" };

  return (
    <Article title="SentMail" desc={desc}>
      <SubTitle>Sent mail to us to get more information and support.</SubTitle>
      <Button sx={sx}>
        <Email /> evanpatchouli@gmail.com
      </Button>
      <Button sx={sx}>
        <Email /> evanpatchouli@foxmail.com
      </Button>
      <Button sx={sx}>
        <Email /> 3125019716@qq.com
      </Button>
      <WasHelpful />
    </Article>
  );
}
