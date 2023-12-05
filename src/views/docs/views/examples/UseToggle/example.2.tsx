import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle(false, {
    true: "Open",
    false: "Close",
  } as const);
  return (
    <>
      <Switch checked={open === "Open"} onChange={toggleOpen} /> {open}
    </>
  );
};

const code = `
import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle(false, {
    true: "Open",
    false: "Close",
  } as const);
  return (
    <>
      <Switch checked={open === "Open"} onChange={toggleOpen} /> {open}
    </>
  );
};
`;

export default {
  code,
  View,
};
