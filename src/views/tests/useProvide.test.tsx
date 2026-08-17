import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import React, { useState } from "react";
import useInject from "../../hooks/useInject";
import useProvide from "../../hooks/useProvide";

type CountMap = {
  "": {
    count: number;
  };
};

function ProviderAndConsumer() {
  const [count, setCount] = useState(1);
  useProvide("count", count, { setState: setCount });
  const [injectedCount, setInjectedCount] = useInject<CountMap>("count");

  return (
    <>
      <output data-testid="provided-count">{count}</output>
      <output data-testid="injected-count">{injectedCount ?? "none"}</output>
      <button onClick={() => setCount((value) => value + 1)}>
        update provider
      </button>
      <button
        onClick={() =>
          setInjectedCount?.((value) => (value === undefined ? 1 : value + 1))
        }
      >
        update injected
      </button>
    </>
  );
}

function NamespacedProviders() {
  useProvide("value", "first", { namespace: "first" });
  useProvide("value", "second", { namespace: "second" });
  const [first] = useInject("value", { namespace: "first" });
  const [second] = useInject("value", { namespace: "second" });

  return (
    <>
      <output data-testid="first-value">{first}</output>
      <output data-testid="second-value">{second}</output>
    </>
  );
}

describe("useProvide", () => {
  afterEach(() => {
    cleanup();
    document.body.replaceChildren();
  });

  it("publishes initial state and updates consumers", async () => {
    render(<ProviderAndConsumer />);

    await waitFor(() => {
      expect(screen.getByTestId("injected-count")).toHaveTextContent("1");
    });

    fireEvent.click(screen.getByText("update provider"));
    await waitFor(() => {
      expect(screen.getByTestId("provided-count")).toHaveTextContent("2");
      expect(screen.getByTestId("injected-count")).toHaveTextContent("2");
    });

    fireEvent.click(screen.getByText("update injected"));
    await waitFor(() => {
      expect(screen.getByTestId("provided-count")).toHaveTextContent("3");
      expect(screen.getByTestId("injected-count")).toHaveTextContent("3");
    });
  });

  it("isolates providers and consumers by namespace", async () => {
    render(<NamespacedProviders />);

    await waitFor(() => {
      expect(screen.getByTestId("first-value")).toHaveTextContent("first");
      expect(screen.getByTestId("second-value")).toHaveTextContent("second");
    });
  });
});

export {};
