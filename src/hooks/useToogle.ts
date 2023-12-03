import { useState } from "react";

export default function useToogle(): [boolean, () => void] {
  const [toogle, setToogle] = useState(false);
  const switchToogle = () => {
    setToogle((pre) => !pre);
  };
  return [toogle, switchToogle];
}
