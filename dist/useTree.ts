import React, { useCallback, useEffect, useState } from "react";
import UKey from "./utils/Ukey";
import cloneDeep from "./utils/cloneDeep";

type TreeNode<
  T extends object = { [key: string]: any },
  K extends string | number | undefined = "_id"
> = {
  // @ts-ignore
  [idKey: K extends string | number ? K : "_id"]: any;
  children?: TreeNode<T, K>[];
} & T;

interface UseTreeOptions<
  T extends object = { [key: string]: any },
  K extends string | number = "_id"
> {
  idKey?: K;
  renderNode?: (
    node: TreeNode<T, K>,
    idKey: any,
    level: number,
    parentNode: TreeNode<T, K> | null,
    tree: TreeNode<T, K>
  ) => React.JSX.Element | React.ReactNode;
  renderEmpty?: React.ReactNode | (() => React.ReactNode);
  filterFn?: (node: TreeNode<T, K>) => boolean;
  strict?: boolean;
}

interface Traverse<Callback> {
  (callback: Callback): any[];
  (nodeId: string, callback?: Callback | undefined): any[];
}

const useTree = <
  T extends object = { [key: string]: any },
  K extends string | number = "_id"
>(
  initialTree: TreeNode<T, K>,
  options: UseTreeOptions<T, K> = { idKey: "_id" as K }
): [
  TreeNode<T, K>,
  {
    addNode: (node: TreeNode<T, K>, parentId: string) => void | string;
    removeNode: (nodeId: string) => void | string;
    updateNode: (nodeId: string, newNodeData: any) => void | string;
    findNode: (nodeId: string) => TreeNode<T, K> | null;
    moveNode: (sourceNodeId: string, targetNodeId: string) => void | string;
    searchTree: (
      filter: string | ((node: TreeNode<T, K>) => boolean)
    ) => TreeNode<T, K>[];
    traverse: Traverse<
      (
        node: TreeNode<T, K>,
        level: number,
        parentNode: TreeNode<T, K> | null
      ) => any
    >;
    render: () => React.ReactNode[] | React.ReactNode | null;
  }
] => {
  const [tree, setTree] = useState<TreeNode<T, K>>(
    cloneDeep(initialTree) as any
  );
  const [filteredTree, setFilteredTree] = useState<TreeNode<T, K> | null>(null);
  const idKey = options.idKey;
  const renderNode = options.renderNode || (() => null);
  const filterFn = options.filterFn;

  if (!idKey && idKey !== 0) {
    throw new Error("You must provide an idKey to useTree");
  }

  const traverse = (
    node: TreeNode<T, K>,
    callback: (
      node: TreeNode,
      level: number,
      parentNode: TreeNode<T, K> | null
    ) => any,
    level: number = 0,
    parentNode: TreeNode<T, K> | null = null
  ) => {
    const result = callback(node, level, parentNode);
    const childrenResults: any =
      node.children?.map((child) =>
        traverse(child, callback, level + 1, node)
      ) || [];
    const final = [result, ...childrenResults];

    return final as any[];
  };

  let errMsg = "[react-hooks-kit][useTree] Node cannot be its own parent";
  const addNode = (node: TreeNode, parentId: string) => {
    if (!node[idKey] && node[idKey] !== 0) {
      node[idKey] = `${UKey()}`;
    }
    // check node[idKey] not equal to parentId
    if (node[idKey] === parentId) {
      if (options.strict) {
        throw new Error(errMsg);
      } else {
        console.error(errMsg);
        return errMsg;
      }
    }

    let parentExists = false;
    let nodeExists = false;
    errMsg = `[react-hooks-kit][useTree] Node with id ${node[idKey]} already exists`;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === node[idKey]) {
        nodeExists = true;
        if (options.strict) {
          throw new Error(errMsg);
        }
      }
    });
    if (nodeExists) {
      console.error(errMsg);
      return errMsg;
    }

    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === parentId) {
        parentExists = true;
        if (!Array.isArray(currentNode.children)) {
          currentNode.children = [];
        }
        currentNode.children?.push(node);
      }
    });
    errMsg = `[react-hooks-kit][useTree] Parent with id ${parentId} does not exist`;
    if (!parentExists && options.strict) {
      throw new Error(errMsg);
    } else if (!parentExists) {
      console.error(errMsg);
      return errMsg;
    }
    setTree({ ...tree });
  };

  const removeNode = (nodeId: string | number) => {
    let errMsg = `[react-hooks-kit][removeNode] You must provide a nodeId to removeNode`;
    if (!nodeId && nodeId !== 0) {
      if (options.strict) {
        throw new Error(errMsg);
      } else {
        console.error(errMsg);
        return errMsg;
      }
    }
    let nodeExists = false;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        nodeExists = true;
      }
      if (currentNode.children?.some((child) => child[idKey] === nodeId)) {
        nodeExists = true;
      }
      currentNode.children =
        currentNode.children?.filter((child) => child[idKey] !== nodeId) || [];
    });
    if (!nodeExists) {
      errMsg = `[react-hooks-kit][useTree] Node to remove with id ${nodeId} does not exist`;
      if (options.strict) {
        throw new Error(errMsg);
      } else {
        console.error(errMsg);
        return errMsg;
      }
    }
    setTree({ ...tree });
  };

  const updateNode = (nodeId: string | number, newNodeData: any) => {
    let errMsg =
      "[react-hooks-kit][useTree] You must provide a nodeId to updateNode";
    if (!nodeId && nodeId !== 0) {
      if (options.strict) {
        throw new Error(errMsg);
      } else {
        console.error(errMsg);
        return errMsg;
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
      errMsg = `[react-hooks-kit][useTree] Node to update with id ${nodeId} does not exist`;
      if (options.strict) {
        throw new Error(errMsg);
      }
      console.error(errMsg);
      return errMsg;
    }
    setTree({ ...tree });
  };

  /**
   * Only works for the first node found
   * @param nodeId
   * @returns
   */
  const findNode = (nodeId: string | number): TreeNode<T, K> | null => {
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
  const searchTree = (filter: string | ((node: TreeNode<T, K>) => boolean)) => {
    let filterFn: any;

    if (typeof filter === "string") {
      filterFn = (node: TreeNode) => node[idKey] === filter;
    } else {
      filterFn = filter;
    }

    const results: TreeNode<T, K>[] = [];

    traverse(tree, (node) => {
      if (filterFn(node)) {
        //@ts-ignore
        results.push(node);
      }
    });

    return results;
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
      let errMsg = `[react-hooks-kit][useTree] Node to move with id ${sourceNodeId} does not exist`;
      if (options.strict) {
        throw new Error(errMsg);
      } else {
        console.error(errMsg);
        return errMsg;
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
    if (!tree || `{}` === JSON.stringify(tree)) {
      return options.renderEmpty
        ? typeof options.renderEmpty === "function"
          ? options.renderEmpty()
          : options.renderEmpty
        : null;
    }
    return traverse(tree, (node, level, parentNode) => {
      // @ts-ignore @TODO
      return renderNode(node, idKey, level, parentNode, tree);
    });
  }, [tree, renderNode]);

  // $traverse should like (args1: callback|string, args2?: callback)
  type Callback = (
    node: TreeNode<T, K>,
    level: number,
    parentNode: TreeNode<T, K> | null
  ) => any;

  const $traverse = (callbackOrId: Callback | string, cb?: Callback) => {
    if (typeof callbackOrId === "string") {
      const nodeId = callbackOrId;
      // Find the node and traverse it
      let foundNode = findNode(nodeId);
      if (!foundNode) {
        return [];
      } else {
        const callback = cb;
        // @ts-ignore
        return traverse(foundNode, callback);
      }
    } else {
      const callback = callbackOrId;
      // @ts-ignore
      return traverse(tree, callback);
    }
  };

  useEffect(() => {
    if (filterFn) {
      const result = traverse(tree, (node) => {
        // @ts-ignore @TODO
        if (filterFn(node)) {
          return node;
        } else {
          return null;
        }
      });
      // @ts-ignore
      setFilteredTree(result.filter((node) => node !== null));
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
      traverse: $traverse,
      render,
    },
  ];
};

export default useTree;
