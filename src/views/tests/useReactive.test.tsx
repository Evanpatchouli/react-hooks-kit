import { renderHook, act } from "@testing-library/react";
import useReactive from "../../hooks/useReactive";

describe("useReactive", () => {
  describe("useReactive for number", () => {
    // return struct of .value
    it("return struct of .value", () => {
      const { result } = renderHook(() => useReactive(1));
      expect(result.current.value).toBe(1);
    });

    // should plus 1
    it("should plus 1", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
      });
      expect(result.current.value).toBe(2);
    });

    // should plus twice
    it("should plus twice", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
        result.current.value++;
      });
      expect(result.current.value).toBe(3);
    });

    // should minus 1
    it("should minus 1", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value--;
      });
      expect(result.current.value).toBe(0);
    });

    // should minus twice
    it("should minus twice", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value--;
        result.current.value--;
      });
      expect(result.current.value).toBe(-1);
    });

    // should plus and minus
    it("should plus and minus", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
        result.current.value--;
      });
      expect(result.current.value).toBe(1);
    });

    // should be updated to 2
    it("should be updated to 2", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value = 2;
      });
      expect(result.current.value).toBe(2);
    });

    // should be updated to undefined
    it("should be updated to undefined", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = undefined;
      });
      expect(result.current.value).toBe(undefined);
    });

    // should be 2 after be undefined and be 2
    it("should be 2 after be undefined and be 2", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = undefined;
        result.current.value = 2;
      });
      expect(result.current.value).toBe(2);
    });

    // should be added to 4
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value + 3;
      });
      expect(result.current.value).toBe(4);
    });

    // should be added to -2
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value - 3;
      });
      expect(result.current.value).toBe(-2);
    });

    // should be multipled to 4
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(2));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value * 2;
      });
      expect(result.current.value).toBe(4);
    });

    // should be 1
    it("should be 1", () => {
      const { result } = renderHook(() => useReactive(2));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value / 2;
      });
      expect(result.current.value).toBe(1);
    });

    // should be 100 after circle invoked
    it("should be 100 after circle invoked", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        while (result.current.value < 100) {
          result.current.value++;
        }
      });
      expect(result.current.value).toBe(100);
    });
  });
});
