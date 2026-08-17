import { useEffect, useRef } from "react";

type Props = { [key: string]: any };

function useWhyDidYouUpdate(name: string, props: Props) {
  const previousProps = useRef<Props | null>(null);

  useEffect(() => {
    if (previousProps.current === null) {
      previousProps.current = props;
      return;
    }

    const allKeys = Object.keys({ ...previousProps.current, ...props });
    const changesObj = {};

    allKeys.forEach((key) => {
      if (previousProps.current?.[key] !== props[key]) {
        // @ts-ignore
        changesObj[key] = {
          from: previousProps.current?.[key],
          to: props[key],
        };
      }
    });

    if (Object.keys(changesObj).length) {
      console.log("[why-did-you-update]", name, changesObj);
    }

    previousProps.current = props;
  }, [props]);
}

export default useWhyDidYouUpdate;
