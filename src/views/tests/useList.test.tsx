import { renderHook, act } from "@testing-library/react";
import useList from "../../hooks/useList";

describe("useList", () => {
  it("should initialize with the correct items", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));
    expect(result.current[0].length).toBe(2);
  });

  it("should return correct pure originalItems", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));
    expect(result.current[1].originalItems).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("should add an item", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));

    act(() => {
      result.current[1].addItem({ id: 3 });
    });

    expect(result.current[0][2]).toEqual(expect.objectContaining({ id: 3 }));
  });

  it("should remove an item", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));

    act(() => {
      result.current[1].removeItem(result.current[0][0]._id);
    });

    expect(result.current[0].length).toEqual(1);
  });

  it("should update items", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));

    act(() => {
      // @ts-ignore
      result.current[1].updateItems([{ _id: result.current[0][0]._id, id: 1, name: "evan" }]);
    });

    expect(result.current[0][0]).toEqual(expect.objectContaining({ id: 1, name: "evan" }));
  });

  it("should reset items", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));

    act(() => {
      result.current[1].addItem({ id: 3 });
      result.current[1].reset();
    });

    expect(result.current[0]).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 1 }), expect.objectContaining({ id: 2 })])
    );
  });

  it("should remove multiple items", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }, { id: 3 }]));

    act(() => {
      result.current[1].removeItems([result.current[0][0]._id, result.current[0][1]._id]);
    });

    expect(result.current[0].length).toEqual(1);
  });

  it("should save the current items", () => {
    const { result } = renderHook(() => useList([{ id: 1 }, { id: 2 }]));

    act(() => {
      result.current[1].addItem({ id: 3 });
      result.current[1].save();
    });

    expect(result.current[0]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 2 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });

  it("should go to a specific page", () => {
    const { result } = renderHook(() =>
      useList(
        Array.from({ length: 20 }, (_, i) => ({ id: i + 1 })),
        { itemsPerPage: 5 },
        []
      )
    );

    act(() => {
      result.current[1].goToPage(2);
    });

    expect(result.current[1].currentPage).toEqual(2);
    expect(result.current[1].pagedItems).toEqual(
      expect.arrayContaining(Array.from({ length: 5 }, (_, i) => expect.objectContaining({ id: i + 6 })))
    );
  });

  it("should go to the next page", () => {
    const { result } = renderHook(() =>
      useList(
        Array.from({ length: 20 }, (_, i) => ({ id: i + 1 })),
        { itemsPerPage: 5 },
        []
      )
    );

    act(() => {
      result.current[1].goNextPage();
    });

    expect(result.current[1].currentPage).toEqual(2);
    expect(result.current[1].pagedItems).toEqual(
      expect.arrayContaining(Array.from({ length: 5 }, (_, i) => expect.objectContaining({ id: i + 6 })))
    );
  });

  it("should go to the last page", () => {
    const { result } = renderHook(() =>
      useList(
        Array.from({ length: 20 }, (_, i) => ({ id: i + 1 })),
        { itemsPerPage: 5 },
        []
      )
    );

    act(() => {
      result.current[1].goToPage(2);
    });
``
    act(() => {
      result.current[1].goLastPage();
    });

    expect(result.current[1].currentPage).toEqual(1);
    expect(result.current[1].pagedItems).toEqual(
      expect.arrayContaining(Array.from({ length: 5 }, (_, i) => expect.objectContaining({ id: i + 1 })))
    );
  });
});
