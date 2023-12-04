import Li from "@/components/layout/Li";
import Article, { Body, SubTitle } from "@components/layout/Article";
import { useEffect, useState } from "react";
import pkg from "@/../package.json";
import Code from "@/components/code";
import WasHelpful from "@/components/layout/WasHelpful";
import { Button } from "@mui/material";
import { EmailOutlined as Email } from "@mui/icons-material";

const desc = "@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";

export default function Draft() {
  useEffect(() => {
    document.title = `Draft - ${pkg.homepage}`;
  }, []);

  const sx: any = { display: "flex", gap: 1, textTransform: "none" };

  return (
    <Article title="Draft" desc={desc}>
      <WasHelpful />
    </Article>
  );
}
