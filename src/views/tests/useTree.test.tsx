import { renderHook, act } from "@testing-library/react";
import useTree from "../../hooks/useTree";

describe("useTree", () => {
  const initialTree = {
    _id: "1",
    name: "Node 1",
    children: [{ _id: "2", name: "Node 2" }],
  };

  it("should initialize tree", () => {
    const { result } = renderHook(() => useTree(initialTree));
    expect(result.current[0]).toEqual(initialTree);
  });

  it("should add node", () => {
    const { result } = renderHook(() => useTree(initialTree));
    act(() => {
      result.current[1].addNode({ _id: "3", name: "Node 3" }, "1");
    });
    expect(result.current[0].children).toContainEqual({
      _id: "3",
      name: "Node 3",
    });
  });

  it("should remove node", () => {
    const { result } = renderHook(() => useTree(initialTree));
    act(() => {
      result.current[1].removeNode("2");
    });
    expect(result.current[0].children).not.toContainEqual({
      _id: "2",
      name: "Node 2",
    });
  });

  it("should update node", () => {
    const { result } = renderHook(() => useTree(initialTree));
    act(() => {
      result.current[1].updateNode("1", { name: "Updated Node 1" });
    });
    expect(result.current[0]).toEqual({
      _id: "1",
      name: "Updated Node 1",
      children: [{ _id: "2", name: "Node 2" }],
    });
  });

  it("should find node", () => {
    const { result } = renderHook(() => useTree(initialTree));
    const node = result.current[1].findNode("2");
    expect(node).toEqual({ _id: "2", name: "Node 2" });
  });

  it("should move node", () => {
    const { result } = renderHook(() => useTree(initialTree));
    act(() => {
      result.current[1].addNode({ _id: "3", name: "Node 3" }, "1");
      result.current[1].moveNode("3", "2");
    });
    expect(result.current[0].children?.[0].children).toContainEqual({
      _id: "3",
      name: "Node 3",
    });
  });

  it("should search tree", () => {
    const { result } = renderHook(() => useTree(initialTree));
    const nodes = result.current[1].searchTree((node) =>
      node.name.includes("Node")
    );
    expect(nodes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ _id: "1", name: "Node 1" }),
        expect.objectContaining({ _id: "2", name: "Node 2" }),
      ])
    );
  });

  it("should traverse tree", () => {
    const { result } = renderHook(() => useTree(initialTree));
    const names: string[] = [];
    result.current[1].traverse((node) =>
      names.push(node.name)
    );
    expect(names).toEqual(["Node 1", "Node 2"]);
  });
});
