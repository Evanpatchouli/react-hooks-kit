import setTo from "../../hooks/utils/setTo";

describe("setTo", () => {
  it("should set value to the given path", () => {
    const obj = { a: { b: 2 } };
    const result = setTo(obj, "a.b", 3);
    expect(result.a.b).toBe(3);
  });

  it("should mutate the original object (default)", () => {
    const obj = { a: { b: 2 } };
    setTo(obj, "a.b", 3);
    expect(obj.a.b).toBe(3);
  });

  it("should mutate the original object (deepClone)", () => {
    const obj = { a: { b: 2 } };
    setTo(obj, "a.b", 3, true);
    expect(obj.a.b).toBe(2);
  });

  it("should create new nodes if createIfNotExist is true", () => {
    const obj = { a: { b: 2 } };
    const result = setTo(obj, "a.c.d", 3, false, true);
    expect(result.a.c.d).toBe(3);
  });

  it("should not create new nodes if createIfNotExist is false", () => {
    const obj = { a: { b: 2 } };
    const result = setTo(obj, "a.c.d", 3, false, false);
    expect(result.a.c).toBeUndefined();
  });

  it("should handle array indices correctly", () => {
    const obj = { a: [1, 2, 3] };
    const result = setTo(obj, "a.1", 4, false, true);
    expect(result.a[1]).toBe(4);
  });

  it("should handle nested arrays correctly", () => {
    const obj = {
      a: [
        [1, 2],
        [3, 4],
      ],
    };
    const result = setTo(obj, "a.1.1", 5, false, true);
    expect(result.a[1][1]).toBe(5);
  });

  it("should handle symbol keys correctly", () => {
    const key = Symbol("key");
    const obj = { [key]: 1 };
    const result = setTo(obj, key, 2);
    expect(result[key]).toBe(2);
  });

  it("should handle deepClone with arrays correctly", () => {
    const obj = { a: [1, 2, 3] };
    setTo(obj, "a.1", 4, true);
    expect(obj.a[1]).toBe(2);
  });

  it("should handle deepClone with objects correctly", () => {
    const obj = { a: { b: 2 } };
    setTo(obj, "a.b", 3, true);
    expect(obj.a.b).toBe(2);
  });

  it("should handle non-existent paths correctly when createIfNotExist is false", () => {
    const obj = { a: { b: 2 } };
    const result = setTo(obj, "a.c.d", 3, false, false);
    expect(result).toEqual(obj);
  });

  it("should handle non-existent paths correctly when createIfNotExist is true", () => {
    const obj = { a: { b: 2 } };
    const result = setTo(obj, "a.c.d", 3, false, true);
    expect(result.a.c.d).toBe(3);
  });

  it("should handle nested symbol keys correctly", () => {
    const key1 = Symbol("key1");
    const key2 = Symbol("key2");
    const obj = { [key1]: { [key2]: 2 } };
    setTo(obj, [key1, key2], 3);
    expect(obj[key1][key2]).toBe(3);
  });
});
