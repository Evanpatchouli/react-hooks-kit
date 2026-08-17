import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import useEmitter from "../../hooks/useEmitter";
import useReceiver from "../../hooks/useReceiver";

function ReceiverView({
  callback,
  useOptions = false,
}: {
  callback: (...args: any[]) => void;
  useOptions?: boolean;
}) {
  const emitter = useEmitter("receiver-test-emitter");
  const [data, receiver] = useOptions
    ? useReceiver({
        name: "options-receiver",
        eventName: "options-ping",
        callback,
      })
    : useReceiver("ping", callback);

  const emit = () => {
    emitter.emit(useOptions ? "options-ping" : "ping", "hello", 1);
  };

  return (
    <>
      <output data-testid="data">{JSON.stringify(data)}</output>
      <output data-testid="listening">{String(receiver.isListening)}</output>
      <button onClick={emit}>emit</button>
      <button onClick={receiver.stop}>stop</button>
      <button onClick={receiver.start}>start</button>
      <button onClick={() => receiver.reset(["reset"])}>reset</button>
    </>
  );
}

describe("useReceiver", () => {
  afterEach(() => {
    cleanup();
    document.body.replaceChildren();
  });

  it("uses the latest callback and stores emitted arguments", async () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const { rerender } = render(
      <ReceiverView callback={firstCallback} />
    );

    fireEvent.click(screen.getByText("emit"));
    await waitFor(() => {
      expect(screen.getByTestId("data")).toHaveTextContent('["hello",1]');
    });
    expect(firstCallback).toHaveBeenCalledWith("hello", 1);

    rerender(<ReceiverView callback={secondCallback} />);
    fireEvent.click(screen.getByText("emit"));
    await waitFor(() => {
      expect(secondCallback).toHaveBeenCalledWith("hello", 1);
    });
    expect(firstCallback).toHaveBeenCalledTimes(1);
  });

  it("supports callback in the options overload", async () => {
    const callback = vi.fn();
    render(<ReceiverView callback={callback} useOptions />);

    fireEvent.click(screen.getByText("emit"));
    await waitFor(() => {
      expect(callback).toHaveBeenCalledWith("hello", 1);
    });
  });

  it("stops, restarts, and resets the receiver", async () => {
    const callback = vi.fn();
    render(<ReceiverView callback={callback} />);

    fireEvent.click(screen.getByText("stop"));
    expect(screen.getByTestId("listening")).toHaveTextContent("false");
    fireEvent.click(screen.getByText("emit"));
    expect(callback).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("start"));
    expect(screen.getByTestId("listening")).toHaveTextContent("true");
    fireEvent.click(screen.getByText("emit"));
    await waitFor(() => {
      expect(callback).toHaveBeenCalledWith("hello", 1);
    });

    fireEvent.click(screen.getByText("reset"));
    expect(screen.getByTestId("data")).toHaveTextContent('["reset"]');
  });
});

export {};
