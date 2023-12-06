import { Card, Stack, Typography } from "@mui/material";
import CodeBox from "../code-box";
import useLocaleSelector from "@/locale/locale.selector";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

type ArticleProps = {
  title: string;
  desc?: string;
  children?: React.ReactNode;
};

export const SubTitle: React.FC<{
  children?: React.ReactNode;
  id?: string;
  low?: boolean;
  top?: string;
}> = ({ children, id, low, top }) => {
  return (
    <Typography
      id={id}
      variant={low ? "h6" : "h5"}
      component={low ? "h6" : "h6"}
      gutterBottom
      marginTop={top ?? "40px"}
      fontWeight="bold"
    >
      {children}
    </Typography>
  );
};

export const Body: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Typography variant="body1" gutterBottom>
      {children}
    </Typography>
  );
};

export const Demo: React.FC<{
  children?: React.ReactNode;
  code?: string;
  lang?: "ts" | "tsx";
}> = ({ children, code, lang }) => {
  return (
    <div className="Demo">
      <Card
        style={{
          padding: "2rem",
        }}
      >
        {children}
      </Card>
      {/* <Button variant="outlined" ref={particleRef}>
        Particle
      </Button> */}
      <CodeBox lang={lang}>{code}</CodeBox>
    </div>
  );
};

export const Consideration: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const $consideration = useLocaleSelector("$article.Consideration");
  return (
    <>
      <SubTitle id="hook-consider">{$consideration}</SubTitle>
      <Body>{children}</Body>
    </>
  );
};

export default function Article(props: ArticleProps) {
  return (
    <>
      <Typography variant="h4" component={"h1"} gutterBottom marginTop="40px" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <div id="hook-desc">{props.desc}</div>
      </Typography>
      <div>{props.children}</div>
      <Stack
        sx={{
          height: "1rem",
        }}
      />
    </>
  );
}
