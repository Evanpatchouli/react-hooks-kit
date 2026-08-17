import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useIndexedDB from "../../hooks/useIndexDB";

function createRequest(db: IDBDatabase) {
  return {
    result: db,
    error: null,
    onupgradeneeded: null,
    onsuccess: null,
    onerror: null,
  } as any;
}

describe("useIndexDB", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("opens the database, runs upgrades, and closes connections", () => {
    const firstDb = { close: vi.fn() } as unknown as IDBDatabase;
    const secondDb = { close: vi.fn() } as unknown as IDBDatabase;
    const firstRequest = createRequest(firstDb);
    const secondRequest = createRequest(secondDb);
    const open = vi
      .fn()
      .mockReturnValueOnce(firstRequest)
      .mockReturnValueOnce(secondRequest);
    vi.stubGlobal("indexedDB", { open });
    const upgrade = vi.fn();
    const { result, rerender, unmount } = renderHook(
      ({ dbName }: { dbName: string }) => useIndexedDB(dbName, 1, upgrade),
      { initialProps: { dbName: "first" } }
    );

    act(() => {
      firstRequest.onupgradeneeded?.({} as IDBVersionChangeEvent);
      firstRequest.onsuccess?.({} as Event);
    });

    expect(upgrade).toHaveBeenCalledWith(firstDb);
    expect(result.current).toEqual({ db: firstDb, error: null });

    rerender({ dbName: "second" });
    expect(firstDb.close).toHaveBeenCalledTimes(1);

    act(() => {
      secondRequest.onsuccess?.({} as Event);
    });
    expect(result.current).toEqual({ db: secondDb, error: null });

    unmount();
    expect(secondDb.close).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledWith("first", 1);
    expect(open).toHaveBeenCalledWith("second", 1);
  });

  it("exposes open errors", () => {
    const request = createRequest({ close: vi.fn() } as unknown as IDBDatabase);
    const open = vi.fn().mockReturnValue(request);
    vi.stubGlobal("indexedDB", { open });
    const { result } = renderHook(() =>
      useIndexedDB("broken", 1, vi.fn())
    );
    const error = new DOMException("open failed", "AbortError");
    request.error = error;

    act(() => {
      request.onerror?.({} as Event);
    });

    expect(result.current).toEqual({ db: null, error });
  });
});

export {};
