import { renderHook, act } from "@testing-library/react";
import useMap from "../../hooks/useMap";

describe("useMap", () => {
  describe("Initialization", () => {
    it("should initialize with empty object", () => {
      const { result } = renderHook(() => useMap({}));
      expect(result.current.map.size).toBe(0);
    });

    it("should initialize with initial values", () => {
      const { result } = renderHook(() => useMap({ name: "John", age: 25 }));
      expect(result.current.map.size).toBe(2);
      expect(result.current.get("name")).toBe("John");
      expect(result.current.get("age")).toBe(25);
    });
  });

  describe("set method - single key-value", () => {
    it("should set a new key-value pair", () => {
      const { result } = renderHook(() => useMap<{ key?: string }>({}));
      act(() => {
        result.current.set("key", "value");
      });
      expect(result.current.get("key")).toBe("value");
    });

    it("should update existing key", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      act(() => {
        result.current.set("name", "Alice");
      });
      expect(result.current.get("name")).toBe("Alice");
    });
  });

  describe("set method - with function", () => {
    it("should set value using function", () => {
      const { result } = renderHook(() => useMap({ count: 0 }));
      act(() => {
        result.current.set("count", (prev) => (prev || 0) + 1);
      });
      expect(result.current.get("count")).toBe(1);
    });

    it("should handle undefined previous value", () => {
      const { result } = renderHook(() => useMap<{ count?: number }>({}));
      act(() => {
        result.current.set("count", (prev) => (prev || 0) + 10);
      });
      expect(result.current.get("count")).toBe(10);
    });
  });

  describe("set method - with record", () => {
    it("should set multiple values in rehydrate mode", () => {
      const { result } = renderHook(() => useMap({ name: "John", age: 25 }));
      act(() => {
        result.current.set({ name: "Alice", city: "NYC" } as any, "rehydrate");
      });
      expect(result.current.get("name")).toBe("Alice");
      expect(result.current.get("age")).toBe(25);
      expect(result.current.get("city" as any)).toBe("NYC");
    });

    it("should set multiple values in override mode", () => {
      const { result } = renderHook(() => useMap({ name: "John", age: 25 }));
      act(() => {
        result.current.set({ name: "Alice" }, "override");
      });
      expect(result.current.get("name")).toBe("Alice");
      expect(result.current.get("age")).toBeUndefined();
    });
  });

  describe("set method - with map action", () => {
    it("should set using map action function", () => {
      const { result } = renderHook(() => useMap({ count: 5 }));
      act(() => {
        result.current.set((prev) => {
          const newMap = new Map(prev);
          newMap.set("count" as any, 10);
          return newMap;
        });
      });
      expect(result.current.get("count")).toBe(10);
    });

    it("should handle object return from map action", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      act(() => {
        result.current.set(() => ({ name: "Alice", age: 30 } as any));
      });
      expect(result.current.get("name")).toBe("Alice");
      expect(result.current.get("age" as any)).toBe(30);
    });
  });

  describe("get method", () => {
    it("should get existing value", () => {
      const { result } = renderHook(() => useMap({ name: "John", age: 25 }));
      expect(result.current.get("name")).toBe("John");
      expect(result.current.get("age")).toBe(25);
    });

    it("should return undefined for non-existent key", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      expect(result.current.get("age" as any)).toBeUndefined();
    });
  });

  describe("del method", () => {
    it("should delete existing key", () => {
      const { result } = renderHook(() => useMap({ name: "John", age: 25 }));
      act(() => {
        result.current.del("age");
      });
      expect(result.current.get("age")).toBeUndefined();
      expect(result.current.map.size).toBe(1);
    });

    it("should handle deleting non-existent key", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      act(() => {
        result.current.del("age" as any);
      });
      expect(result.current.map.size).toBe(1);
    });
  });

  describe("add method", () => {
    it("should add new key-value pair", () => {
      const { result } = renderHook(() => useMap<{ name: string; age?: number }>({ name: "John" }));
      act(() => {
        result.current.add("age", 25);
      });
      expect(result.current.get("age")).toBe(25);
    });

    it("should update existing key", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      act(() => {
        result.current.add("name", "Alice");
      });
      expect(result.current.get("name")).toBe("Alice");
    });

    it("should not trigger re-render if value is the same", () => {
      const { result } = renderHook(() => useMap({ name: "John" }));
      const mapBefore = result.current.map;
      act(() => {
        result.current.add("name", "John");
      });
      expect(result.current.map).toBe(mapBefore);
    });
  });

  describe("Edge cases", () => {
    it("should handle empty initial state", () => {
      const { result } = renderHook(() => useMap({}));
      expect(result.current.map.size).toBe(0);
    });

    it("should maintain immutability", () => {
      const { result } = renderHook(() => useMap({ count: 0 }));
      const mapBefore = result.current.map;
      act(() => {
        result.current.set("count", 1);
      });
      expect(result.current.map).not.toBe(mapBefore);
    });
  });
});
