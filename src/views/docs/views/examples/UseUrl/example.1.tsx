import useUrl from "@/hooks/useUrl";

const View = () => {
  const { params } = useUrl(
    () => {
      console.log("url changed");
    },
    "ursUrl exmaple1 listener",
    true // call immediately
  );
  return (
    <>
      <span>url params: </span>
      <code>{JSON.stringify(params, null, 2)}</code>
      <span style={{ color: "gainsboro" }}> ( try to change query params in broswer location bar )</span>
    </>
  );
};

const code = `
import useUrl from "@/hooks/useUrl";

const View = () => {
  const { params } = useUrl(
    () => {
      console.log("url changed");
    },
    "ursUrl exmaple1 listener",
    true // call immediately
  );
  return (
    <>
      <span>url params: </span>
      <code>{JSON.stringify(params, null, 2)}</code>
      <span>( try to change query params in broswer location bar )</span>
    </>
  );
};
`;

export default {
  code,
  View,
};
