import getFrom from "../../hooks/utils/getFrom";

describe('getFrom', () => {
  it('should return the value at the given string path', () => {
    const obj = { a: { b: 2 } };
    expect(getFrom(obj, 'a.b')).toBe(2);
  });

  it('should return the value at the given array path', () => {
    const obj = { a: { b: 2 } };
    expect(getFrom(obj, ['a', 'b'])).toBe(2);
  });

  it('should return undefined if the path does not exist', () => {
    const obj = { a: { b: 2 } };
    expect(getFrom(obj, 'a.c')).toBeUndefined();
  });

  it('should return the value at the given symbol path', () => {
    const key = Symbol('key');
    const obj = { [key]: 2 };
    expect(getFrom(obj, key)).toBe(2);
  });

  it('should return the value at the given number path', () => {
    const obj = [1, 2, 3];
    expect(getFrom(obj, 1)).toBe(2);
  });

  it('should return undefined if the object is null', () => {
    const obj = null;
    expect(getFrom(obj, 'a')).toBeUndefined();
  });

  it('should return undefined if the object is undefined', () => {
    const obj = undefined;
    expect(getFrom(obj, 'a')).toBeUndefined();
  });

  it('should return the undefined if the path is empty', () => {
    const obj = { a: 1 };
    expect(getFrom(obj, '')).toBeUndefined();
  });

  it('should handle nested symbol keys correctly', () => {
    const key1 = Symbol('key1');
    const key2 = Symbol('key2');
    const obj = { [key1]: { [key2]: 2 } };
    expect(getFrom(obj, [key1, key2])).toBe(2);
  });

  it('should handle complex paths correctly', () => {
    const obj = { a: { b: { c: { d: 2 } } } };
    expect(getFrom(obj, 'a.b.c.d')).toBe(2);
  });
});