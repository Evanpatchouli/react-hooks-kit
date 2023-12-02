import { Card, Stack, Typography } from "@mui/material";
import CodeBox from "../code-box";
import useLocaleSelector from "@/locale/locale.selector";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

type ArticleProps = {
  title: string;
  desc?: string;
  children?: React.ReactNode;
};

export const SubTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Typography variant="h5" component={"h6"} gutterBottom marginTop="40px" fontWeight="bold">
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

export const Demo: React.FC<{ children?: React.ReactNode; code?: string; lang?: "ts" | "tsx" }> = ({
  children,
  code,
  lang,
}) => {
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
      <SubTitle>{$consideration}</SubTitle>
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
        {props.desc}
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
