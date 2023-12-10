import React, { useCallback, useEffect, useState } from "react";

type TreeNode<K extends string | number = "_id"> = {
  // @ts-ignore
  [idKey: K]: any;
  children: TreeNode[];
  [key: string]: any;
};

interface UseTreeOptions {
  idKey?: string | number;
  renderNode?: (node: TreeNode) => React.JSX.Element | React.ReactNode;
  filterFn?: (node: TreeNode) => boolean;
}

const useTree = (
  initialTree: TreeNode,
  options: UseTreeOptions = { idKey: "_id" }
) => {
  const [tree, setTree] = useState<TreeNode>(initialTree);
  const [filteredTree, setFilteredTree] = useState<TreeNode | null>(null);
  const idKey = options.idKey;
  const renderNode = options.renderNode || (() => null);
  const filterFn = options.filterFn;

  if (!idKey && idKey !== 0) {
    throw new Error("You must provide an idKey to useTree");
  }

  const traverse = (node: TreeNode, callback: (node: TreeNode) => any) => {
    const result = callback(node);
    const childrenResults: any = node.children.map((child) =>
      traverse(child, callback)
    );
    const final = [result, ...childrenResults];

    return final as any[];
  };

  const addNode = (node: TreeNode, parentId: string) => {
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === parentId) {
        currentNode.children.push(node);
      }
    });
    setTree({ ...tree });
  };

  const removeNode = (nodeId: string) => {
    traverse(tree, (currentNode) => {
      currentNode.children = currentNode.children.filter(
        (child) => child[idKey] !== nodeId
      );
    });
    setTree({ ...tree });
  };

  const updateNode = (nodeId: string, newNodeData: any) => {
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        Object.assign(currentNode, newNodeData);
      }
    });
    setTree({ ...tree });
  };

  const findNode = (nodeId: string): TreeNode | null => {
    let foundNode = null;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === nodeId) {
        foundNode = currentNode;
      }
    });
    return foundNode;
  };

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

  const moveNode = (sourceNodeId: string, targetNodeId: string) => {
    let sourceNode = null;
    traverse(tree, (currentNode) => {
      if (currentNode[idKey] === sourceNodeId) {
        sourceNode = currentNode;
      }
    });

    if (sourceNode === null) {
      throw new Error(`Node with id ${sourceNodeId} does not exist`);
    }

    removeNode(sourceNodeId);

    addNode(sourceNode, targetNodeId);
  };

  const render = useCallback(() => {
    if (!renderNode) {
      throw new Error("You must provide a renderNode function to useTree");
    }
    return traverse(tree, renderNode);
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
    { addNode, removeNode, updateNode, findNode, moveNode, searchTree, render },
  ];
};

export default useTree;
