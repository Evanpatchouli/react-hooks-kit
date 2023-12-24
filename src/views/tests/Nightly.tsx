import useRipple from "@/hooks/houdini/hooks/useRipple";
import useBatchHooks from "@/hooks/useBatchHooks";
import useMemento from "@/hooks/useMemento";
import useNetworkStatus from "@/hooks/useNetWork";
import { Button } from "@mui/material";
import Await from "./Await";
import ProvJectView from "./prov-ject";
import ReactiveArray from "./ReactiveArray";

export function useRipples<T extends HTMLElement = HTMLButtonElement>(
  count: number = 1,
  config?: Parameters<typeof useRipple>[0]
) {
  return useBatchHooks(useRipple<T>, count, config);
}

export default function Nightly() {
  const netWork = useNetworkStatus();
  const refs = useRipples<any>(2);
  const [state, setState, memento] = useMemento("initial");
  return (
    <div>
      <h1 ref={refs[0]}>{JSON.stringify(netWork, null, 2)}</h1>
      <div ref={refs[1]}>siu</div>
      <div css={$css`margin: 20px;`}>
        <Button onClick={() => setState("new state")}>setState</Button>
        <Button onClick={() => memento.createMemento("memento 1")}>createMemento</Button>
        <Button onClick={() => memento.rollback()}>rollback</Button>
        <Button onClick={() => memento.forward()}>forward</Button>
        <Button onClick={() => memento.clear()}>clear</Button>
        <label css={$css`display: block;`}>
          state: <span>{state}</span>
        </label>
        <label css={$css`display: block;`}>
          idKey: <span>{memento.idKey}</span>
        </label>
        <label css={$css`display: block;`}>
          mementos: <span>{JSON.stringify(memento.mementos, null, 2)}</span>
        </label>
        <label css={$css`display: block;`}>
          history: <span>{JSON.stringify(memento.history, null, 2)}</span>
        </label>
      </div>
      <Await />
      <ProvJectView />
      <ReactiveArray />
    </div>
  );
}
