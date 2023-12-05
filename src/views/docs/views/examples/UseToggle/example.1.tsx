import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      <Switch checked={open} onChange={toggleOpen} />
    </>
  );
};

const code = `
import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      <Switch checked={open} onChange={toggleOpen} />
    </>
  );
};
`;

export default {
  code,
  View,
};
