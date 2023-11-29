import { Stack, Typography } from "@mui/material";

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
