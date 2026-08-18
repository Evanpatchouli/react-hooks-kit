import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useFetch from "../../hooks/useFetch";

describe("useFetch", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("loads JSON data and invokes resolve and finally callbacks once", async () => {
    const onResolve = vi.fn();
    const onFinally = vi.fn();
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(JSON.stringify({ id: 1 }), { status: 200 }));

    const { result } = renderHook(() =>
      useFetch<{ id: number }>("/items/1", undefined, {
        onResolve,
        onFinally,
      })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current).toEqual({
      data: { id: 1 },
      loading: false,
      error: null,
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(onResolve).toHaveBeenCalledWith({ id: 1 });
    expect(onFinally).toHaveBeenCalledTimes(1);
  });

  it("stores errors and invokes reject and finally callbacks", async () => {
    const error = new Error("network failed");
    const onReject = vi.fn();
    const onFinally = vi.fn();
    vi.spyOn(globalThis, "fetch").mockRejectedValue(error);

    const { result } = renderHook(() =>
      useFetch("/items", undefined, { onReject, onFinally })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe(error);
    expect(onReject).toHaveBeenCalledWith(error);
    expect(onFinally).toHaveBeenCalledTimes(1);
  });

  it("treats a non-success HTTP response as an error", async () => {
    const response = new Response(JSON.stringify({ message: "not found" }), {
      status: 404,
      statusText: "Not Found",
    });
    const onReject = vi.fn();
    vi.spyOn(globalThis, "fetch").mockResolvedValue(response);

    const { result } = renderHook(() =>
      useFetch("/missing", undefined, { onReject })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(
      expect.objectContaining({ status: 404, statusText: "Not Found" })
    );
    expect(onReject).toHaveBeenCalledWith(result.current.error);
  });

  it("passes request options and reruns when explicit dependencies change", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ page: 1 }), { status: 200 })
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ page: 2 }), { status: 200 })
      );
    const { result, rerender } = renderHook(
      ({ page }) =>
        useFetch<{ page: number }>(
          "/items",
          { headers: { "x-page": String(page) } },
          undefined,
          [page]
        ),
      { initialProps: { page: 1 } }
    );

    await waitFor(() => expect(result.current.data).toEqual({ page: 1 }));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[1]).toEqual(
      expect.objectContaining({ headers: { "x-page": "1" }, signal: expect.any(AbortSignal) })
    );

    rerender({ page: 2 });
    await waitFor(() => expect(result.current.data).toEqual({ page: 2 }));
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1]?.[1]).toEqual(
      expect.objectContaining({ headers: { "x-page": "2" } })
    );
  });

  it("aborts an in-flight request on unmount", () => {
    let requestSignal: AbortSignal | undefined;
    vi.spyOn(globalThis, "fetch").mockImplementation((_input, init) => {
      requestSignal = init?.signal ?? undefined;
      return new Promise<Response>(() => undefined);
    });

    const { unmount } = renderHook(() => useFetch("/slow"));
    unmount();

    expect(requestSignal?.aborted).toBe(true);
  });
});

export {};
