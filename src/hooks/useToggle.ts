import { useState } from "react";

export type ToggleState<T = true, F = false> = {
  true: T;
  false: F;
};

export default function useToggle<T = true, F = false>(
  initial?: boolean,
  valueMap?: Partial<ToggleState<T, F>>
): [NonNullable<F> | true | false | NonNullable<T>, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [toogle, setToogle] = useState(initial || false);
  const switchToogle = () => {
    setToogle((pre) => !pre);
  };
  return [toogle ? valueMap?.true ?? true : valueMap?.false ?? false, switchToogle, setToogle];
}
