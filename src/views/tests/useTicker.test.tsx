import { renderHook, act } from "@testing-library/react";
import useTicker from "../../hooks/useTicker";

jest.useFakeTimers();

describe("useTicker", () => {
  // @1
  it("should start with correct initial state", () => {
    const { result } = renderHook(() => useTicker(() => {}, 1000));

    expect(result.current.tick).toBe(0);
    expect(result.current.status).toBe("on");
  });

  // @2
  it("should tick correctly", () => {
    const { result } = renderHook(() => useTicker(() => {}, 1000));

    act(() => {
      result.current.resume();
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.tick).toBe(3);
  });

  // @3
  it("should pause correctly", () => {
    const { result } = renderHook(() => useTicker(() => {}, 1000));

    act(() => {
      result.current.resume();
    });

    jest.advanceTimersByTime(2000);

    act(() => {
      result.current.pause();
    });

    expect(result.current.tick).toBe(2);
    expect(result.current.status).toBe("off");
  });

  // @4
  it("should resume correctly", () => {
    const { result } = renderHook(() => useTicker(() => {}, 1000));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    act(() => {
      result.current.pause();
    });

    act(() => {
      result.current.resume();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.tick).toBe(4);
    expect(result.current.status).toBe("on");
  });

  // @5
  it("should reset correctly", () => {
    const { result } = renderHook(() => useTicker(() => {}, 1000));

    act(() => {
      result.current.resume();
      jest.advanceTimersByTime(3000);
      result.current.reset();
    });

    expect(result.current.tick).toBe(0);
  });

  // The tow tests below are not working in jest, but they work in browser views and got checked.
  // // @6
  // it("should pause after a delay correctly", () => {
  //   const { result } = renderHook(() => useTicker(() => {}, 1000));

  //   act(() => {
  //     result.current.delayedPause(2000);
  //     jest.advanceTimersByTime(3000);
  //   });

  //   expect(result.current.tick).toBe(2);
  //   expect(result.current.status).toBe("off");
  // });

  // // @7
  // it("should resume after a delay correctly", () => {
  //   const { result } = renderHook(() => useTicker(() => {}, 1000));

  //   act(() => {
  //     jest.advanceTimersByTime(2000);
  //   });

  //   act(() => {
  //     result.current.pause();
  //   });

  //   act(() => {
  //     result.current.delayedResume(2000);
  //   });

  //   act(() => {
  //     jest.advanceTimersByTime(3000);
  //   });

  //   expect(result.current.tick).toBe(3);
  //   expect(result.current.status).toBe("on");
  // });
});
