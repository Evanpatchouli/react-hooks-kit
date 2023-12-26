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

  describe("useReactive for boolean", () => {
    // @1 should be true after setting to true
    it("should be true after setting to true", () => {
      const { result } = renderHook(() => useReactive(false));
      act(() => {
        result.current.value = true;
      });
      expect(result.current.value).toBe(true);
    });

    // @2 should be false after setting to false
    it("should be false after setting to false", () => {
      const { result } = renderHook(() => useReactive(true));
      act(() => {
        result.current.value = false;
      });
      expect(result.current.value).toBe(false);
    });

    // @3 should be false after negating true
    it("should be false after negating true", () => {
      const { result } = renderHook(() => useReactive(true));
      act(() => {
        result.current.value = !result.current.value;
      });
      expect(result.current.value).toBe(false);
    });

    // @4 should be true after negating false
    it("should be true after negating false", () => {
      const { result } = renderHook(() => useReactive(false));
      act(() => {
        result.current.value = !result.current.value;
      });
      expect(result.current.value).toBe(true);
    });

    // @5 should be true after double negating true
    it("should be true after double negating true", () => {
      const { result } = renderHook(() => useReactive(true));
      act(() => {
        result.current.value = !!result.current.value;
      });
      expect(result.current.value).toBe(true);
    });

    // @6 should be false after double negating false
    it("should be false after double negating false", () => {
      const { result } = renderHook(() => useReactive(false));
      act(() => {
        result.current.value = !!result.current.value;
      });
      expect(result.current.value).toBe(false);
    });

    // @7 should be true after OR operation with true
    it("should be true after OR operation with true", () => {
      const { result } = renderHook(() => useReactive(false));
      act(() => {
        result.current.value = result.current.value || true;
      });
      expect(result.current.value).toBe(true);
    });

    // @8 should be false after AND operation with false
    it("should be false after AND operation with false", () => {
      const { result } = renderHook(() => useReactive(true));
      act(() => {
        result.current.value = result.current.value && false;
      });
      expect(result.current.value).toBe(false);
    });
  });

  describe("useReactive for bigint", () => {
    // @1 should be 100n after setting to 100n
    it("should be 100n after setting to 100n", () => {
      const { result } = renderHook(() => useReactive(BigInt(0)));
      act(() => {
        result.current.value = BigInt(100);
      });
      expect(result.current.value).toBe(BigInt(100));
    });

    // @2 should be 0n after subtracting 100n from 100n
    it("should be 0n after subtracting 100n from 100n", () => {
      const { result } = renderHook(() => useReactive(BigInt(100)));
      act(() => {
        result.current.value -= BigInt(100);
      });
      expect(result.current.value).toBe(BigInt(0));
    });

    // @3 should be 10000n after multiplying 100n by 100n
    it("should be 10000n after multiplying 100n by 100n", () => {
      const { result } = renderHook(() => useReactive(BigInt(100)));
      act(() => {
        result.current.value *= BigInt(100);
      });
      expect(result.current.value).toBe(BigInt(10000));
    });

    // @4 should be 1n after dividing 100n by 100n
    it("should be 1n after dividing 100n by 100n", () => {
      const { result } = renderHook(() => useReactive(BigInt(100)));
      act(() => {
        result.current.value /= BigInt(100);
      });
      expect(result.current.value).toBe(BigInt(1));
    });
  });

  describe("useReactive for symbol", () => {
    // @1 should be Symbol('foo') after setting to Symbol('foo')
    it("should be Symbol('foo') after setting to Symbol('foo')", () => {
      const { result } = renderHook(() => useReactive(Symbol()));
      const symbolFoo = Symbol("foo");
      act(() => {
        result.current.value = symbolFoo;
      });
      expect(result.current.value).toBe(symbolFoo);
    });

    // @2 should be Symbol('bar') after setting to Symbol('bar')
    it("should be Symbol('bar') after setting to Symbol('bar')", () => {
      const { result } = renderHook(() => useReactive(Symbol()));
      const symbolBar = Symbol("bar");
      act(() => {
        result.current.value = symbolBar;
      });
      expect(result.current.value).toBe(symbolBar);
    });
  });

  describe("useReactive for type changing in primitives", () => {
    // @1 should be 'foo' after setting number to string
    it("should be 'foo' after setting number to string", () => {
      const { result } = renderHook(() => useReactive(0));
      act(() => {
        // @ts-ignore
        result.current.value = "foo";
      });
      expect(result.current.value).toBe("foo");
    });

    // @2 should be 100 after setting string to number
    it("should be 100 after setting string to number", () => {
      const { result } = renderHook(() => useReactive(""));
      act(() => {
        // @ts-ignore
        result.current.value = 100;
      });
      expect(result.current.value).toBe(100);
    });

    // @3 should be true after setting number to boolean
    it("should be true after setting number to boolean", () => {
      const { result } = renderHook(() => useReactive(0));
      act(() => {
        // @ts-ignore
        result.current.value = true;
      });
      expect(result.current.value).toBe(true);
    });

    // @4 should be Symbol('foo') after setting boolean to symbol
    it("should be Symbol('foo') after setting boolean to symbol", () => {
      const { result } = renderHook(() => useReactive(false));
      const symbolFoo = Symbol("foo");
      act(() => {
        // @ts-ignore
        result.current.value = symbolFoo;
      });
      expect(result.current.value).toBe(symbolFoo);
    });

    // @5 should be 'foo' after setting symbol to string
    it("should be 'foo' after setting symbol to string", () => {
      const { result } = renderHook(() => useReactive(Symbol()));
      act(() => {
        // @ts-ignore
        result.current.value = "foo";
      });
      expect(result.current.value).toBe("foo");
    });

    // @6 should be false after setting string to boolean
    it("should be false after setting string to boolean", () => {
      const { result } = renderHook(() => useReactive(""));
      act(() => {
        // @ts-ignore
        result.current.value = false;
      });
      expect(result.current.value).toBe(false);
    });

    // @7 should be 100n after setting boolean to bigint
    it("should be 100n after setting boolean to bigint", () => {
      const { result } = renderHook(() => useReactive(true));
      act(() => {
        // @ts-ignore
        result.current.value = BigInt(100);
      });
      expect(result.current.value).toBe(BigInt(100));
    });

    // @8 should be 'foo' after setting bigint to string
    it("should be 'foo' after setting bigint to string", () => {
      const { result } = renderHook(() => useReactive(BigInt(0)));
      act(() => {
        // @ts-ignore
        result.current.value = "foo";
      });
      expect(result.current.value).toBe("foo");
    });
  });

  describe("useReactive for Date", () => {
    // @1 should be a specific date after setting to that date
    it("should be a specific date after setting to that date", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const specificDate = new Date(2022, 1, 1);
      act(() => {
        result.current = specificDate;
      });
      expect(result.current).toEqual(specificDate);
    });

    // @2 should be now after setting to now
    it("should be now after setting to now", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const now = new Date();
      act(() => {
        result.current = now;
      });
      expect(result.current).toEqual(now);
    });

    // @3 should be tomorrow after setting to tomorrow
    it("should be tomorrow after setting to tomorrow", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      act(() => {
        result.current = tomorrow;
      });
      expect(result.current).toEqual(tomorrow);
    });

    // // @4 should be yesterday after setting to yesterday
    it("should be yesterday after setting to yesterday", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      act(() => {
        result.current = yesterday;
      });
      expect(result.current).toEqual(yesterday);
    });

    // // @5 should be the start of the year after setting to the start of the year
    it("should be the start of the year after setting to the start of the year", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const startOfYear = new Date();
      startOfYear.setMonth(0, 1);
      startOfYear.setHours(0, 0, 0, 0);
      act(() => {
        result.current = startOfYear;
      });
      expect(result.current).toEqual(startOfYear);
    });

    // // @6 should be the end of the year after setting to the end of the year
    it("should be the end of the year after setting to the end of the year", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const endOfYear = new Date();
      endOfYear.setMonth(11, 31);
      endOfYear.setHours(23, 59, 59, 999);
      act(() => {
        result.current = endOfYear;
      });
      expect(result.current).toEqual(endOfYear);
    });

    // @7 should be the start of the month after setting to the start of the month
    it("should be the start of the month after setting to the start of the month", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);
      act(() => {
        result.current = startOfMonth;
      });
      expect(result.current).toEqual(startOfMonth);
    });

    // @8 should be the end of the month after setting to the end of the month
    it("should be the end of the month after setting to the end of the month", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const endOfMonth = new Date();
      endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0);
      endOfMonth.setHours(23, 59, 59, 999);
      act(() => {
        result.current = endOfMonth;
      });
      expect(result.current).toEqual(endOfMonth);
    });

    // // @9 should be the same date after copying the date
    it("should be the same date after copying the date", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      act(() => {
        const copiedDate = new Date(result.current.getTime());
        expect(copiedDate.getTime()).toEqual(result.current.getTime());
      });
    });

    // @10 should be the next day after adding one day
    it("should be the next day after adding one day", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      let nextDay: Date;
      act(() => {
        nextDay = new Date(result.current.getTime());
        nextDay.setDate(nextDay.getDate() + 1);
        result.current.setDate(result.current.getDate() + 1);
        expect(result.current.getTime()).toEqual(nextDay.getTime());
      });
    });

    // @11 should be the previous day after subtracting one day
    it("should be the previous day after subtracting one day", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      act(() => {
        const previousDay = new Date(result.current.getTime());
        previousDay.setDate(previousDay.getDate() - 1);
        result.current.setDate(result.current.getDate() - 1);
        expect(result.current.getTime()).toEqual(previousDay.getTime());
      });
    });
  });

  describe("useReactive for Map", () => {
    // @1 should be the same map after copying the map
    it("should be the same map after copying the map", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));

      act(() => {
        expect(result.current.get("key")).toEqual("value");
      });
    });

    // @2 should set value correctly
    it("should set value correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        result.current.set("key", "newValue");
        expect(result.current.get("key")).toEqual("newValue");
      });
    });

    // @3 should delete value correctly
    it("should delete value correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        result.current.delete("key");
        expect(result.current.has("key")).toEqual(false);
      });
    });

    // @4 should clear the map correctly
    it("should get size of the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        expect(result.current.size).toEqual(1);
      });
    });

    // @5 should check if key exists correctly
    it("should check if key exists correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        expect(result.current.has("key")).toEqual(true);
      });
    });

    // @6 should get size of the the map correctly
    it("should clear the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>()));
      act(() => {
        result.current.set("key", "value");
      });
      act(() => {
        expect(result.current.size).toEqual(1);
      });
    });

    // @7 should clear the the map correctly
    it("should clear the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>()));
      act(() => {
        result.current.set("key", "value");
        expect(result.current.size).toEqual(1);
      });
      act(() => {
        result.current.clear();
        expect(result.current.size).toEqual(0);
      });
    });

    // @8 should get entries of the map correctly
    it("should get entries of the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        // {["key", "value"]}
        expect(result.current.entries()).toEqual(new Map<string, any>([["key", "value"]]).entries());
      });
    });

    // @9 should get keys of the map correctly
    it("should get keys of the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        expect(result.current.keys()).toEqual(new Map<string, any>([["key", "value"]]).keys());
      });
    });

    // @10 should get values of the map correctly
    it("should get values of the map correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      act(() => {
        expect(result.current.values()).toEqual(new Map<string, any>([["key", "value"]]).values());
      });
    });

    // @11 should invoke forEach correctly
    it("should invoke forEach correctly", () => {
      const { result } = renderHook(() => useReactive(new Map<string, any>([["key", "value"]])));
      let resultValue = "";
      act(() => {
        result.current.forEach((value) => {
          resultValue = value;
        });
      });
      expect(resultValue).toEqual("value");
    });
  });

  describe("useReactive for Set", () => {
    // @1 should be the same set after copying the set
    it("should be the same set after copying the set", () => {
      const { result } = renderHook(() => useReactive(new Set<string>(["value"])));

      act(() => {
        expect(result.current.has("value")).toEqual(true);
      });
    });

    // @2 should add value correctly
    it("should add value correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.has("value")).toEqual(true);
      });
    });

    // @3 should delete value correctly
    it("should delete value correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        result.current.delete("value");
        expect(result.current.has("value")).toEqual(false);
      });
    });

    // @4 should clear the set correctly
    it("should clear the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.size).toEqual(1);
      });
      act(() => {
        result.current.clear();
        expect(result.current.size).toEqual(0);
      });
    });

    // @5 should check if value exists correctly
    it("should check if value exists correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.has("value")).toEqual(true);
      });
    });

    // @6 should get size of the set correctly
    it("should get size of the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.size).toEqual(1);
      });
    });

    // @7 should clear the set correctly
    it("should clear the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.size).toEqual(1);
      });
      act(() => {
        result.current.clear();
        expect(result.current.size).toEqual(0);
      });
    });

    // @8 should get entries of the set correctly
    it("should get entries of the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.entries()).toEqual(new Set<string>(["value"]).entries());
      });
    });

    // @9 should get keys of the set correctly
    it("should get keys of the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.keys()).toEqual(new Set<string>(["value"]).keys());
      });
    });

    // @10 should get values of the set correctly
    it("should get values of the set correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      act(() => {
        result.current.add("value");
        expect(result.current.values()).toEqual(new Set<string>(["value"]).values());
      });
    });

    // @11 should invoke forEach correctly
    it("should invoke forEach correctly", () => {
      const { result } = renderHook(() => useReactive(new Set<string>()));
      let resultValue = "";
      act(() => {
        result.current.add("value");
        result.current.forEach((value) => {
          resultValue = value;
        });
      });
      expect(resultValue).toEqual("value");
    });
  });

  describe("useReactive for Array", () => {
    // @1 should be the same array after copying the array
    it("should be the same array after copying the array", () => {
      const { result } = renderHook(() => useReactive(["value"]));
      act(() => {
        expect(result.current).toEqual(["value"]);
      });
    });

    // @2 should add value correctly
    it("should add value correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current).toEqual(["value"]);
      });
    });

    // @3 should delete value correctly
    it("should delete value correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        result.current.pop();
        expect(result.current).toEqual([]);
      });
    });

    // @4 should check if value exists correctly
    it("should check if value exists correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current.includes("value")).toEqual(true);
      });
    });

    // @5 should get length of the array correctly
    it("should get length of the array correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current.length).toEqual(1);
      });
    });

    // @6 should get entries of the array correctly
    it("should get entries of the array correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current.entries().next().value?.[1].value).toEqual(
          new Array<string>("value").entries().next().value?.[1]
        );
      });
    });

    // @7 should get keys of the array correctly
    it("should get keys of the array correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current.keys()).toEqual(new Array<string>("value").keys());
      });
    });

    // @8 should get values of the array correctly
    it("should get values of the array correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        expect(result.current.values().next()?.value?.value).toEqual(new Array<string>("value").values().next().value);
      });
    });

    // @9 should invoke forEach correctly
    it("should invoke forEach correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.forEach((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @10 should invoke map correctly
    it("should invoke map correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.map((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @11 should invoke filter correctly
    it("should invoke filter correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.filter((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @12 should invoke reduce correctly
    it("should invoke reduce correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([1, 2, 3]));
      let resultValue = 0;
      act(() => {
        resultValue = result.current.reduce((prev, curr) => prev + curr.value, 0);
      });
      expect(resultValue).toEqual(6);
    });

    // @13 should invoke some correctly
    it("should invoke some correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.some((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @14 should invoke every correctly
    it("should invoke every correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.every((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @15 should invoke at correctly
    it("should invoke at correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue: any = null;
      act(() => {
        result.current.push("value");
        resultValue = result.current.at(0);
      });
      expect(resultValue?.value).toEqual("value");
    });

    // @16 should invoke find correctly
    it("should invoke find correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.find((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @17 should invoke findIndex correctly
    it("should invoke findIndex correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        result.current.findIndex((elem) => {
          resultValue = elem.value;
        });
      });
      expect(resultValue).toEqual("value");
    });

    // @18 should invoke fill correctly
    it("should invoke fill correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        result.current.fill("newValue");
        expect(result.current).toEqual(["newValue"]);
      });
    });

    // @19 should invoke copyWithin correctly
    it("should invoke copyWithin correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        result.current.copyWithin(0, 1);
        expect(result.current).toEqual(["value"]);
      });
    });

    // @20 should invoke reverse correctly
    it("should invoke reverse correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        result.current.reverse();
        expect(result.current).toEqual(["value"]);
      });
    });

    // @21 should invoke sort correctly
    it("should invoke sort correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        result.current.push("value");
        result.current.sort();
        expect(result.current).toEqual(["value"]);
      });
    });

    // @22 should invoke slice correctly
    it("should invoke slice correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value");
        expect(result.current.slice(0, 1)).toEqual([{ value: "value" }]);
      });
    });

    // @23 should invoke splice correctly
    it("should invoke splice correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        result.current.push("value1");
        result.current.push("value2");
        expect(result.current.splice(0, 1)).toEqual([{ value: "value1" }]);
      });
    });

    // @24 should invoke concat correctly
    it("should invoke concat correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      let resultValue = "";
      act(() => {
        expect(result.current.concat(["value"])).toEqual(["value"]);
      });
    });

    // @25 should invoke join correctly
    it("should invoke join correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.join("")).toEqual("");
      });
    });

    // @26 should invoke indexOf correctly
    it("should invoke indexOf correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.indexOf("value")).toEqual(-1);
      });
    });

    // @27 should invoke lastIndexOf correctly
    it("should invoke lastIndexOf correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.lastIndexOf("value")).toEqual(-1);
      });
    });

    // @28 should invoke includes correctly
    it("should invoke includes correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.includes("value")).toEqual(false);
      });
    });

    // @29 should invoke toString correctly
    it("should invoke toString correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.toString()).toEqual("");
      });
    });

    // @30 should invoke toLocaleString correctly
    it("should invoke toLocaleString correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.toLocaleString()).toEqual("");
      });
    });

    // @31 should invoke flat correctly
    it("should invoke flat correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.flat()).toEqual([]);
      });
    });

    // @32 should invoke flatMap correctly
    it("should invoke flatMap correctly", () => {
      const { result } = renderHook(() => useReactive<Array<any>>([]));
      act(() => {
        expect(result.current.flatMap((value) => value)).toEqual([]);
      });
    });
  });
});
