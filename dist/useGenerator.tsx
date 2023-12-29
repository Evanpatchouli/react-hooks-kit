import { useCallback, useState } from "react";

type GeneratorState<T> = {
  value: T | undefined;
  done: boolean;
  error: any;
};

/**
 * ### Example
 * ```tsx
 * import React from 'react';
 * import { useGenerator } from './useGenerator';
 *
 * function* fetchData() {
 *   const response1 = yield fetch('/api/data1');
 *   const data1 = yield response1.json();
 *
 *   const response2 = yield fetch('/api/data2');
 *   const data2 = yield response2.json();
 *
 *   return [data1, data2];
 * }
 *
 * function MyComponent() {
 *   const { value, done, error } = useGenerator(fetchData);
 *
 *   if (error) {
 *     return <div>Error: {error.message}</div>;
 *   }
 *
 *   if (!done) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <div>Data 1: {JSON.stringify(value[0])}</div>
 *       <div>Data 2: {JSON.stringify(value[1])}</div>
 *     </div>
 *   );
 * }
 *
 * export default MyComponent;
 * ```
 */
export default function useGenerator<T>(
  generatorFn: () => Generator<Promise<T>, void, unknown>
): GeneratorState<T> {
  const [state, setState] = useState<GeneratorState<T>>({
    value: undefined,
    done: false,
    error: null,
  });

  const execute = useCallback(() => {
    const generator = generatorFn();
    const handleResult = (result: IteratorResult<Promise<T>, void>) => {
      if (result.done) {
        setState((prevState) => ({ ...prevState, done: true }));
      } else {
        result.value
          .then((value) => setState({ value, done: false, error: null }))
          .catch((error) => setState((prevState) => ({ ...prevState, error })));
      }
    };
    const iterate = (nextValue?: unknown) => {
      const result = generator.next(nextValue);
      handleResult(result);
    };
    iterate();
  }, [generatorFn]);

  execute();

  return state;
}
