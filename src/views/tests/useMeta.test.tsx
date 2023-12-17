import { renderHook, act } from "@testing-library/react";
import useMeta from "../../hooks/useMeta";

describe("useMeta", () => {
  it("person.age should be 19", () => {
    const person = {
      age: 18,
    };
    const { result, rerender } = renderHook(() => useMeta(person));
    act(() => {
      result.current[1]("age", 19);
    });

    expect(result.current[0].age).toBe(19);
  });

  it("should update name using function", () => {
    const person = {
      name: "John",
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]("name", (prevName) => prevName + " Doe");
    });

    expect(result.current[0].name).toBe("John Doe");
  });

  it("should update the whole state", () => {
    const person = {
      name: "John",
      age: 18,
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]({ name: "Evan", age: 20 });
    });

    expect(result.current[0]).toEqual({ name: "Evan", age: 20 });
  });

  it("should update the whole state using function", () => {
    const person = {
      name: "John",
      age: 18,
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]((prevState) => ({
        ...prevState,
        age: prevState.age + 1,
      }));
    });

    expect(result.current[0]).toEqual({ name: "John", age: 19 });
  });

  it("should update deep property", () => {
    const person = {
      name: "John",
      age: 18,
      address: {
        city: "New York",
        country: "USA",
      },
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]("address.city", "San Francisco");
    });

    expect(result.current[0].address.city).toBe("San Francisco");
  });

  it("should update deep property using function", () => {
    const person = {
      name: "John",
      age: 18,
      address: {
        city: "New York",
        country: "USA",
      },
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]("address.city", (prevCity) => prevCity + ", CA");
    });

    expect(result.current[0].address.city).toBe("New York, CA");
  });

  it("should update deep property in an array", () => {
    const person = {
      name: "John",
      age: 18,
      hobbies: [
        { name: "Reading", duration: 2 },
        { name: "Writing", duration: 1 },
      ],
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]("hobbies.0.duration", 3);
    });

    expect(result.current[0].hobbies[0].duration).toBe(3);
  });

  it("should update deep property in an array using function", () => {
    const person = {
      name: "John",
      age: 18,
      hobbies: [
        { name: "Reading", duration: 2 },
        { name: "Writing", duration: 1 },
      ],
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1](
        "hobbies.1.name",
        (prevName) => prevName + " and Coding"
      );
    });

    expect(result.current[0].hobbies[1].name).toBe("Writing and Coding");
  });

  it("should not create non-existent deep property (default)", () => {
    const person = {
      name: "John",
      age: 18,
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      // @ts-ignore
      result.current[1]("address.city", "San Francisco");
    });
    // @ts-ignore
    expect(result.current[0].address).toBeUndefined();
  });

  it("should handle non-existent index in an array", () => {
    const person = {
      name: "John",
      age: 18,
      hobbies: [
        { name: "Reading", duration: 2 },
        { name: "Writing", duration: 1 },
      ],
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      result.current[1]("hobbies.2.name", "Coding");
    });

    expect(result.current[0].hobbies[2]).toBeUndefined();
  });

  it("should handle non-string key", () => {
    const person = {
      123: "John",
      age: 18,
    };
    const { result } = renderHook(() => useMeta(person));

    act(() => {
      // @ts-ignore
      result.current[1](123, "Evan");
    });

    // @ts-ignore
    expect(result.current[0][123]).toBe("Evan");
  });

  // more tests
});
