import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useNetWorkStatus from "../../hooks/useNetWork";

type Connection = {
  downlink: number;
  uplink: number;
  effectiveType: "slow-2g" | "2g" | "3g" | "4g" | "5g";
  rtt: number;
  saveData: boolean;
  type: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
  addEventListener: ReturnType<typeof vi.fn>;
  removeEventListener: ReturnType<typeof vi.fn>;
};

function createConnection(): Connection {
  return {
    downlink: 12.5,
    uplink: 4.5,
    effectiveType: "4g",
    rtt: 50,
    saveData: true,
    type: "wifi",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
}

describe("useNetWork", () => {
  const originalOnlineDescriptor = Object.getOwnPropertyDescriptor(
    Navigator.prototype,
    "onLine"
  );
  const originalConnectionDescriptor = Object.getOwnPropertyDescriptor(
    Navigator.prototype,
    "connection"
  );

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();

    if (originalOnlineDescriptor) {
      Object.defineProperty(Navigator.prototype, "onLine", originalOnlineDescriptor);
    } else {
      delete (Navigator.prototype as { onLine?: boolean }).onLine;
    }

    if (originalConnectionDescriptor) {
      Object.defineProperty(
        Navigator.prototype,
        "connection",
        originalConnectionDescriptor
      );
    } else {
      delete (Navigator.prototype as { connection?: unknown }).connection;
    }
  });

  it("returns the complete initial connection status", () => {
    const connection = createConnection();
    Object.defineProperty(Navigator.prototype, "onLine", {
      configurable: true,
      value: true,
    });
    Object.defineProperty(Navigator.prototype, "connection", {
      configurable: true,
      value: connection,
    });

    const { result } = renderHook(() => useNetWorkStatus(0));

    expect(result.current).toEqual({
      online: true,
      downlink: 12.5,
      uplink: 4.5,
      effectiveType: "4g",
      rtt: 50,
      saveData: true,
      type: "wifi",
    });
  });

  it("updates status from online, offline, and connection change events", () => {
    const connection = createConnection();
    let changeHandler: (() => void) | undefined;
    connection.addEventListener.mockImplementation(
      (_event: string, handler: () => void) => {
        changeHandler = handler;
      }
    );
    Object.defineProperty(Navigator.prototype, "onLine", {
      configurable: true,
      value: true,
    });
    Object.defineProperty(Navigator.prototype, "connection", {
      configurable: true,
      value: connection,
    });

    const { result, unmount } = renderHook(() => useNetWorkStatus(0));

    connection.downlink = 8;
    connection.uplink = 2;
    connection.effectiveType = "3g";
    connection.rtt = 120;
    connection.saveData = false;
    connection.type = "cellular";
    act(() => {
      changeHandler?.();
    });
    expect(result.current).toMatchObject({
      online: true,
      downlink: 8,
      uplink: 2,
      effectiveType: "3g",
      rtt: 120,
      saveData: false,
      type: "cellular",
    });

    Object.defineProperty(Navigator.prototype, "onLine", {
      configurable: true,
      value: false,
    });
    act(() => {
      window.dispatchEvent(new Event("offline"));
    });
    expect(result.current).toEqual({
      online: false,
      downlink: 0,
      uplink: 0,
      effectiveType: undefined,
      rtt: undefined,
    });

    unmount();
    expect(connection.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });
});

export {};
