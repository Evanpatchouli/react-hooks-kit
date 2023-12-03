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
    </>
  );
};
`;

export default {
  code,
  View,
};
