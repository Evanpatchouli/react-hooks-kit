import { renderHook, act } from "@testing-library/react";
import useLoading from "../../hooks/useLoading";
import { useState } from "react";
import { useHookCur } from "./util";

describe("useLoading", () => {
  describe("onLoading", () => {
    it("initial table loading should be false", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );

      expect(result.current[0].table).toBe(false);
    });

    it("now table loading should be true", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.onLoading("table");
      });

      expect(result.current[0].table).toBe(true);
    });

    it("now table loading should be false", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.onLoading("table");
        result.current.unLoading("table");
      });

      expect(result.current[0].table).toBe(false);
    });
  });

  // more tests
});
