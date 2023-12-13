import React from "react";
type TreeNode<K extends string | number = "_id"> = {
    [idKey: K]: any;
    children: TreeNode[];
    [key: string]: any;
};
interface UseTreeOptions {
    idKey?: string | number;
    renderNode?: (node: TreeNode, idKey: any, level: number, parentNode: TreeNode | null, tree: TreeNode) => React.JSX.Element | React.ReactNode;
    filterFn?: (node: TreeNode) => boolean;
}
declare const useTree: (initialTree: TreeNode, options?: UseTreeOptions) => (TreeNode<"_id"> | {
    addNode: (node: TreeNode, parentId: string) => void;
    removeNode: (nodeId: string) => void;
    updateNode: (nodeId: string, newNodeData: any) => void;
    findNode: (nodeId: string) => TreeNode | null;
    moveNode: (sourceNodeId: string, targetNodeId: string) => void;
    searchTree: (filter: string | ((node: TreeNode) => boolean)) => any[];
    render: () => any[];
})[];
export default useTree;
