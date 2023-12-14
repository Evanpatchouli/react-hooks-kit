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
    
    it("initial table loading should be false (boolify: true)", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        }, {
          boolify: true
        })
      );

      expect(result.current[0].table).toBe(false);
    });
    
    it("initial table loading should be 0 (boolify: false)", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        }, {
          boolify: false
        })
      );

      expect(result.current[0].table).toBe(0);
    });

    
    it("initial table loading should be 1 (boolify: false)", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: true,
        }, {
          boolify: false
        })
      );

      expect(result.current[0].table).toBe(1);
    });
    
    it("initial table loading should be false", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );

      expect(result.current[0].table).toBe(false);
    });

    it("After table onloading should be true", () => {
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

    it("After table unloading should be false", () => {
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

    it("After table plusLoading should be true", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.plusLoading("table");
      });

      expect(result.current[0].table).toBe(true);
    });

    it("After table plus and minusLoading should be false", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.plusLoading("table");
        result.current.minusLoading("table");
      });

      expect(result.current[0].table).toBe(false);
    });

    it("After table plus twice should be 2", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.plusLoading("table");
        result.current.plusLoading("table");
      });

      expect(result.current[0].table).toBe(2);
    });

    it("After table plus twice and minus once should be true", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.plusLoading("table");
        result.current.plusLoading("table");
        result.current.minusLoading("table");
      });

      expect(result.current[0].table).toBe(true);
    });

    it("After table plus twice and minus twice should be false", () => {
      const { result, rerender } = renderHook(() =>
        useLoading({
          table: false,
        })
      );
      act(() => {
        result.current.plusLoading("table");
        result.current.plusLoading("table");
        result.current.minusLoading("table");
        result.current.minusLoading("table");
      });

      expect(result.current[0].table).toBe(false);
    });

    it("After table plus twice and minus twice should be 0 (boolify: false)", () => {
      const { result, rerender } = renderHook(() =>
        useLoading(
          {
            table: false,
          },
          {
            boolify: false,
          }
        )
      );
      act(() => {
        result.current.plusLoading("table");
        result.current.plusLoading("table");
        result.current.minusLoading("table");
        result.current.minusLoading("table");
      });

      expect(result.current[0].table).toBe(0);
    });
  });

  // more tests
});
