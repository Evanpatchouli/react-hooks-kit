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

    // @4 should be yesterday after setting to yesterday
    it("should be yesterday after setting to yesterday", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      act(() => {
        result.current = yesterday;
      });
      expect(result.current).toEqual(yesterday);
    });

    // @5 should be the start of the year after setting to the start of the year
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

    // @6 should be the end of the year after setting to the end of the year
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

    // @9 should be the same date after copying the date
    it("should be the same date after copying the date", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const copiedDate = new Date(result.current.getTime());
      expect(copiedDate.getTime()).toEqual(result.current.getTime());
    });

    // @10 should be the same date after setting the date to itself
    it("should be the same date after setting the date to itself", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      act(() => {
        result.current = new Date(result.current.getTime());
      });
      expect(result.current.getTime()).toEqual(result.current.getTime());
    });

    // @11 should be the next day after adding one day
    it("should be the next day after adding one day", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const nextDay = new Date(result.current.getTime());
      nextDay.setDate(nextDay.getDate() + 1);
      act(() => {
        result.current.setDate(result.current.getDate() + 1);
      });
      expect(result.current.getTime()).toEqual(nextDay.getTime());
    });

    // @12 should be the previous day after subtracting one day
    it("should be the previous day after subtracting one day", () => {
      const { result } = renderHook(() => useReactive(new Date()));
      const previousDay = new Date(result.current.getTime());
      previousDay.setDate(previousDay.getDate() - 1);
      act(() => {
        result.current.setDate(result.current.getDate() - 1);
      });
      expect(result.current.getTime()).toEqual(previousDay.getTime());
    });
  });

  describe("useReactive for Map", () => {
    // @1 should be the same map after copying the map
    it("should be the same map after copying the map", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      const copiedMap = new Map(result.current);
      expect(Array.from(copiedMap.entries())).toEqual(Array.from(result.current.entries()));
    });

    // @2 should be the same map after setting the map to itself
    it("should be the same map after setting the map to itself", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      act(() => {
        result.current = new Map(result.current.entries());
      });
      expect(Array.from(result.current.entries())).toEqual(Array.from(result.current.entries()));
    });

    // @3 should have the new key-value pair after setting a new key-value pair
    it("should have the new key-value pair after setting a new key-value pair", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      act(() => {
        result.current.set("newKey", "newValue");
      });
      expect(result.current.get("newKey")).toEqual("newValue");
    });

    // @4 should not have the key-value pair after deleting the key-value pair
    it("should not have the key-value pair after deleting the key-value pair", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      act(() => {
        result.current.delete("key");
      });
      expect(result.current.has("key")).toEqual(false);
    });

    // @5 should clear the map after calling clear method
    it("should clear the map after calling clear method", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      act(() => {
        result.current.clear();
      });
      expect(result.current.size).toEqual(0);
    });

    // @6 should return the correct size of the map
    it("should return the correct size of the map", () => {
      const { result } = renderHook(() =>
        useReactive(
          new Map([
            ["key", "value"],
            ["anotherKey", "anotherValue"],
          ])
        )
      );
      expect(result.current.size).toEqual(2);
    });

    // @7 should return true when calling has method with an existing key
    it("should return true when calling has method with an existing key", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      expect(result.current.has("key")).toEqual(true);
    });

    // @8 should return false when calling has method with a non-existing key
    it("should return false when calling has method with a non-existing key", () => {
      const { result } = renderHook(() => useReactive(new Map([["key", "value"]])));
      expect(result.current.has("nonExistingKey")).toEqual(false);
    });

    // @9 should iterate over the map correctly with forEach method
    it("should iterate over the map correctly with forEach method", () => {
      const { result } = renderHook(() =>
        useReactive(
          new Map([
            ["key", "value"],
            ["anotherKey", "anotherValue"],
          ])
        )
      );
      const entries: [string, string][] = [];
      result.current.forEach((value, key) => {
        entries.push([key, value]);
      });
      expect(entries).toEqual([
        ["key", "value"],
        ["anotherKey", "anotherValue"],
      ]);
    });

    // @10 should return the correct entries with entries method
    it("should return the correct entries with entries method", () => {
      const { result } = renderHook(() =>
        useReactive(
          new Map([
            ["key", "value"],
            ["anotherKey", "anotherValue"],
          ])
        )
      );
      const entries = Array.from(result.current.entries());
      expect(entries).toEqual([
        ["key", "value"],
        ["anotherKey", "anotherValue"],
      ]);
    });
  });
});
