declare module "*.css" {}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
