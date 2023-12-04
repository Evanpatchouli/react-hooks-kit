import { useState } from "react";

export default function useToogle(initial?: boolean): [boolean, () => void] {
  const [toogle, setToogle] = useState(initial || false);
  const switchToogle = () => {
    setToogle((pre) => !pre);
  };
  return [toogle, switchToogle];
}
