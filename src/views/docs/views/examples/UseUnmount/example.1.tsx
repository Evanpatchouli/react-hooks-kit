import useUnMount from "@hooks/useUnMount";

const View = () => {
  useUnMount(() => {
    console.log("The component is unmounting.");
  });

  return (
    <p>
      This component logs a message when it is removed from the tree. Open the
      browser console and navigate away to observe the cleanup.
    </p>
  );
};

const code = `
import useUnMount from "@hooks/useUnMount";

const View = () => {
  useUnMount(() => {
    console.log("The component is unmounting.");
  });

  return <p>Cleanup is registered for unmount.</p>;
};
`;

export default {
  code,
  View,
};
