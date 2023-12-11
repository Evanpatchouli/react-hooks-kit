import useRipple from "@/hooks/houdini/hooks/useRipple";
import useBatchHooks from "@/hooks/useBatchHooks";
import useNetworkStatus from "@/hooks/useNetWork";

export function useRipples<T extends HTMLElement = HTMLButtonElement>(
  count: number = 1,
  config?: Parameters<typeof useRipple>[0]
) {
  return useBatchHooks(useRipple<T>, count, config);
}

export default function Nightly() {
  const netWork = useNetworkStatus();
  const refs = useRipples<any>(2);
  return (
    <div>
      <h1 ref={refs[0]}>{JSON.stringify(netWork, null, 2)}</h1>
      <div ref={refs[1]}>siu</div>
    </div>
  );
}
