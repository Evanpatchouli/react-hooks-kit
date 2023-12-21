import { renderHook, act } from "@testing-library/react";
import useReactive from "../../hooks/useReactive";

describe("useReactive", () => {
  describe("useReactive for number", () => {
    // @1 return struct of .value
    it("return struct of .value", () => {
      const { result } = renderHook(() => useReactive(1));
      expect(result.current.value).toBe(1);
    });

    // @2 should plus 1
    it("should plus 1", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
      });
      expect(result.current.value).toBe(2);
    });

    // @3 should plus twice
    it("should plus twice", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
        result.current.value++;
      });
      expect(result.current.value).toBe(3);
    });

    // @4 should minus 1
    it("should minus 1", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value--;
      });
      expect(result.current.value).toBe(0);
    });

    // @5 should minus twice
    it("should minus twice", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value--;
        result.current.value--;
      });
      expect(result.current.value).toBe(-1);
    });

    // @6 should plus and minus
    it("should plus and minus", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value++;
        result.current.value--;
      });
      expect(result.current.value).toBe(1);
    });

    // @7 should be updated to 2
    it("should be updated to 2", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        result.current.value = 2;
      });
      expect(result.current.value).toBe(2);
    });

    // @8 should be updated to undefined
    it("should be updated to undefined", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = undefined;
      });
      expect(result.current.value).toBe(undefined);
    });

    // @9 should be 2 after be undefined and be 2
    it("should be 2 after be undefined and be 2", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = undefined;
        result.current.value = 2;
      });
      expect(result.current.value).toBe(2);
    });

    // @10 should be added to 4
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value + 3;
      });
      expect(result.current.value).toBe(4);
    });

    // @11 should be added to -2
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value - 3;
      });
      expect(result.current.value).toBe(-2);
    });

    // @12 should be multipled to 4
    it("should be added to 4", () => {
      const { result } = renderHook(() => useReactive(2));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value * 2;
      });
      expect(result.current.value).toBe(4);
    });

    // @13 should be 1
    it("should be 1", () => {
      const { result } = renderHook(() => useReactive(2));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value / 2;
      });
      expect(result.current.value).toBe(1);
    });

    // @14 should be 100 after circle invoked
    it("should be 100 after circle invoked", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        while (result.current.value < 100) {
          result.current.value++;
        }
      });
      expect(result.current.value).toBe(100);
    });

    // @15 should be 0 after modulo by itself
    it("should be 0 after modulo by itself", () => {
      const { result } = renderHook(() => useReactive(10));
      act(() => {
        result.current.value = result.current.value % result.current.value;
      });
      expect(result.current.value).toBe(0);
    });

    // @16 should be 1 after incrementing by 0.1 ten times
    it("should be 1 after incrementing by 0.1 ten times", () => {
      const { result } = renderHook(() => useReactive(0));
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.value += 0.1;
        }
      });
      expect(result.current.value).toBeCloseTo(1);
    });

    // @17 should be 0 after decrementing by 0.1 ten times
    it("should be 0 after decrementing by 0.1 ten times", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.value -= 0.1;
        }
      });
      expect(result.current.value).toBeCloseTo(0);
    });

    // @18 should be 1 after multiplying by 1 ten times
    it("should be 1 after multiplying by 1 ten times", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.value *= 1;
        }
      });
      expect(result.current.value).toBe(1);
    });

    // @19 should be 1 after dividing by 1 ten times
    it("should be 1 after dividing by 1 ten times", () => {
      const { result } = renderHook(() => useReactive(1));
      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current.value /= 1;
        }
      });
      expect(result.current.value).toBe(1);
    });

    // @20 should be 100 after squaring 10
    it("should be 100 after squaring 10", () => {
      const { result } = renderHook(() => useReactive(10));
      act(() => {
        result.current.value = Math.pow(result.current.value, 2);
      });
      expect(result.current.value).toBe(100);
    });
  });

  describe("useReactive for string", () => {
    // @1
    it("should be 'hello'", () => {
      const { result } = renderHook(() => useReactive("hello"));
      expect(result.current.value).toBe("hello");
    });

    // @2 should be ''
    it("should be ''", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = "";
      });
      expect(result.current.value).toBe("");
    });

    // @3 should be 'hello world'
    it("should be 'hello world'", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value += " world";
      });
      expect(result.current.value).toBe("hello world");
    });

    // @4 should be added to 'hello world'
    it("should be added to 'hello world'", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value + " world";
      });
      expect(result.current.value).toBe("hello world");
    });

    // @5 should be removed from 'hello world'
    it("should be removed from 'hello world'", () => {
      const { result } = renderHook(() => useReactive("hello world"));
      act(() => {
        // @ts-ignore
        result.current.value = result.current.value.replace(" world", "");
      });
      expect(result.current.value).toBe("hello");
    });

    // @6 should be 'HELLO' after toUpperCase
    it("should be 'HELLO' after toUpperCase", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.toUpperCase();
      });
      expect(result.current.value).toBe("HELLO");
    });

    // @7 should be 'hello' after toLowerCase
    it("should be 'hello' after toLowerCase", () => {
      const { result } = renderHook(() => useReactive("HELLO"));
      act(() => {
        result.current.value = result.current.value.toLowerCase();
      });
      expect(result.current.value).toBe("hello");
    });

    // @8 should be 'olleh' after reverse
    it("should be 'olleh' after reverse", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.split("").reverse().join("");
      });
      expect(result.current.value).toBe("olleh");
    });

    // @9 should be 'hll' after removing vowels
    it("should be 'hll' after removing vowels", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.replace(/[aeiou]/gi, "");
      });
      expect(result.current.value).toBe("hll");
    });

    // @10 should be 'hello hello' after repeating
    it("should be 'hello hello' after repeating", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.repeat(2);
      });
      expect(result.current.value).toBe("hellohello");
    });

    // @11 should be 'h' after getting first character
    it("should be 'h' after getting first character", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.charAt(0);
      });
      expect(result.current.value).toBe("h");
    });

    // @12 should be 'o' after getting last character
    it("should be 'o' after getting last character", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.charAt(result.current.value.length - 1);
      });
      expect(result.current.value).toBe("o");
    });

    // @13 should be 'heo' after removing 'll' from 'hello'
    it("should be 'heo' after removing 'll' from 'hello'", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.replace("ll", "");
      });
      expect(result.current.value).toBe("heo");
    });

    // @14 should be 'h' after getting first character with array index
    it("should be 'h' after getting first character with array index", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value[0];
      });
      expect(result.current.value).toBe("h");
    });

    // @15 should be 'o' after getting last character with array index
    it("should be 'o' after getting last character with array index", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value[result.current.value.length - 1];
      });
      expect(result.current.value).toBe("o");
    });

    // @16 should be 'heo' after removing 'll' from 'hello' with slice and join
    it("should be 'heo' after removing 'll' from 'hello' with slice and join", () => {
      const { result } = renderHook(() => useReactive("hello"));
      act(() => {
        result.current.value = result.current.value.split("ll").join("");
      });
      expect(result.current.value).toBe("heo");
    });
  });
});
