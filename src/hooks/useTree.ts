import React, { useCallback, useEffect, useState } from "react";
import UKey from "./utils/Ukey";

type TreeNode<K extends string | number = "_id"> = {
  // @ts-ignore
  [idKey: K]: any;
  children: TreeNode[];
  [key: string]: any;
};

interface UseTreeOptions {
  idKey?: string | number;
  renderNode?: (
    node: TreeNode,
    idKey: any,
    level: number,
    parentNode: TreeNode | null,
    tree: TreeNode
  ) => React.JSX.Element | React.ReactNode;
  filterFn?: (node: TreeNode) => boolean;
  strict?: boolean;
}

const useTree = (
  initialTree: TreeNode,
  options: UseTreeOptions = { idKey: "_id" }
): [
  TreeNode<typeof options.idKey extends string ? typeof options.idKey : "_id">,
  {
    addNode: (node: TreeNode, parentId: string) => void;
    removeNode: (nodeId: string) => void;
    updateNode: (nodeId: string, newNodeData: any) => void;
    findNode: (nodeId: string) => TreeNode | null;
    moveNode: (sourceNodeId: string, targetNodeId: string) => void;
    searchTree: (filter: string | ((node: TreeNode) => boolean)) => TreeNode[];
    traverse: (
      node: TreeNode,
      callback: (
        node: TreeNode,
        level: number,
        parentNode: TreeNode | null
      ) => any
    ) => any[];
    render: () => React.ReactNode[];
  }
] => {
  const [tree, setTree] = useState<TreeNode>(initialTree);
  const [filteredTree, setFilteredTree] = useState<TreeNode | null>(null);
  const idKey = options.idKey;
  const renderNode = options.renderNode || (() => null);
  const filterFn = options.filterFn;

  if (!idKey && idKey !== 0) {
    throw new Error("You must provide an idKey to useTree");
  }

  const traverse = (
    node: TreeNode,
    callback: (
      node: TreeNode,
      level: number,
      parentNode: TreeNode | null
    ) => any,
    level: number = 0,
    parentNode: TreeNode | null = null
  ) => {
    const result = callback(node, level, parentNode);
    const childrenResults: any = node.children.map((child) =>
      traverse(child, callback, level + 1, node)
    );
    const final = [result, ...childrenResults];

    return final as any[];
  };

  const addNode = (node: TreeNode, parentId: string) => {
    if (!node[idKey] && node[idKey] !== 0) {
      node[idKey] = `${UKey()}`;
    }
    // check node[idKey] not equal to parentId
    if (node[idKey] === parentId) {
      if (options.strict) {
        throw new Error(
          "[react-hooks-kit][useTree] Node cannot be its own parent"
        );
      } else {
        console.error(
          "[react-hooks-kit][useTree] Node cannot be its own parent"
        );
        return;
      }
    }

    let parentExists = false;
    let nodeExists = false;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === node[idKey]) {
        nodeExists = true;
        if (options.strict) {
          throw new Error(
            `[react-hooks-kit][useTree] Node with id ${node[idKey]} already exists`
          );
        }
      }
    });
    if (nodeExists) {
      console.error(
        `[react-hooks-kit][useTree] Node with id ${node[idKey]} already exists`
      );
      return;
    }

    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === parentId) {
        parentExists = true;
        currentNode.children.push(node);
      }
    });
    if (!parentExists && options.strict) {
      throw new Error(
        `[react-hooks-kit][useTree] Parent with id ${parentId} does not exist`
      );
    } else if (!parentExists) {
      console.error(
        `[react-hooks-kit][useTree] Parent with id ${parentId} does not exist`
      );
      return;
    }
    setTree({ ...tree });
  };

  const removeNode = (nodeId: string | number) => {
    if (!nodeId && nodeId !== 0) {
      throw new Error(
        "[react-hooks-kit][useTree] You must provide a nodeId to removeNode"
      );
    }
    let nodeExists = false;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        nodeExists = true;
      }
      if (currentNode.children?.some((child) => child[idKey] === nodeId)) {
        nodeExists = true;
      }
      currentNode.children = currentNode.children.filter(
        (child) => child[idKey] !== nodeId
      );
    });
    if (!nodeExists) {
      if (options.strict) {
        throw new Error(
          `[react-hooks-kit][useTree] Node to remove with id ${nodeId} does not exist`
        );
      } else {
        console.error(
          `[react-hooks-kit][useTree] Node to remove with id ${nodeId} does not exist`
        );
        // return;
      }
    }
    setTree({ ...tree });
  };

  const updateNode = (nodeId: string | number, newNodeData: any) => {
    if (!nodeId && nodeId !== 0) {
      if (options.strict) {
        throw new Error(
          "[react-hooks-kit][useTree] You must provide a nodeId to updateNode"
        );
      } else {
        console.error(
          "[react-hooks-kit][useTree] You must provide a nodeId to updateNode"
        );
        return;
      }
    }
    let nodeExists = false;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        nodeExists = true;
        Object.assign(currentNode, newNodeData);
      }
    });
    if (!nodeExists) {
      if (options.strict) {
        throw new Error(
          `[react-hooks-kit][useTree] Node to update with id ${nodeId} does not exist`
        );
      }
      console.error(
        `[react-hooks-kit][useTree] Node to update with id ${nodeId} does not exist`
      );
      return;
    }
    setTree({ ...tree });
  };

  /**
   * Only works for the first node found
   * @param nodeId
   * @returns
   */
  const findNode = (nodeId: string | number): TreeNode | null => {
    let foundNode = null;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        foundNode = currentNode;
      }
    });
    return foundNode;
  };

  /**
   * Get all nodes that match the filter
   * @param filter
   * @returns
   */
  const searchTree = (filter: string | ((node: TreeNode) => boolean)) => {
    let filterFn: any;

    if (typeof filter === "string") {
      filterFn = (node: TreeNode) => node[idKey] === filter;
    } else {
      filterFn = filter;
    }

    const result = traverse(tree, (node: TreeNode) => {
      if (filterFn(node)) {
        return node;
      } else {
        return null;
      }
    });

    return result.filter((node: TreeNode) => node !== null);
  };

  /**
   * Move a node from one parent to another
   * @param sourceNodeId
   * @param targetNodeId
   */
  const moveNode = (sourceNodeId: string, targetNodeId: string) => {
    let sourceNode = null;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === sourceNodeId) {
        sourceNode = currentNode;
      }
    });

    if (sourceNode === null) {
      if (options.strict) {
        throw new Error(
          `[react-hooks-kit][useTree] Node to move with id ${sourceNodeId} does not exist`
        );
      } else {
        console.error(
          `[react-hooks-kit][useTree] Node to move with id ${sourceNodeId} does not exist`
        );
        return;
      }
    }

    removeNode(sourceNodeId);

    addNode(sourceNode, targetNodeId);
  };

  /**
   * Render the tree
   */
  const render = useCallback(() => {
    if (!renderNode) {
      throw new Error(
        "[react-hooks-kit][useTree] You must provide a renderNode function to useTree"
      );
    }
    return traverse(tree, (node, level, parentNode) => {
      return renderNode(node, idKey, level, parentNode, tree);
    });
  }, [tree, renderNode]);

  useEffect(() => {
    if (filterFn) {
      const result = traverse(tree, (node: TreeNode) => {
        if (filterFn(node)) {
          return node;
        } else {
          return null;
        }
      });
      // @ts-ignore
      setFilteredTree(result.filter((node: TreeNode) => node !== null));
    }
  }, [tree, filterFn]);

  return [
    tree,
    {
      addNode,
      removeNode,
      updateNode,
      findNode,
      moveNode,
      searchTree,
      traverse,
      render,
    },
  ];
};

export default useTree;
