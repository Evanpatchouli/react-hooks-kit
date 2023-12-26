import React from "react";
type TreeNode<T extends object = {
    [key: string]: any;
}, K extends string | number | undefined = "_id"> = {
    [idKey: K extends string | number ? K : "_id"]: any;
    children?: TreeNode<T, K>[];
} & T;
interface UseTreeOptions<T extends object = {
    [key: string]: any;
}, K extends string | number = "_id"> {
    idKey?: K;
    renderNode?: (node: TreeNode<T, K>, idKey: any, level: number, parentNode: TreeNode<T, K> | null, tree: TreeNode<T, K>) => React.JSX.Element | React.ReactNode;
    renderEmpty?: React.ReactNode | (() => React.ReactNode);
    filterFn?: (node: TreeNode<T, K>) => boolean;
    strict?: boolean;
}
interface Traverse<Callback> {
    (callback: Callback): any[];
    (nodeId: string, callback?: Callback | undefined): any[];
}
declare const useTree: <T extends object = {
    [key: string]: any;
}, K extends string | number = "_id">(initialTree: TreeNode<T, K>, options?: UseTreeOptions<T, K>) => [TreeNode<T, K>, {
    addNode: (node: TreeNode<T, K>, parentId: string) => void | string;
    removeNode: (nodeId: string) => void | string;
    updateNode: (nodeId: string, newNodeData: any) => void | string;
    findNode: (nodeId: string) => TreeNode<T, K> | null;
    moveNode: (sourceNodeId: string, targetNodeId: string) => void | string;
    searchTree: (filter: string | ((node: TreeNode<T, K>) => boolean)) => TreeNode<T, K>[];
    traverse: Traverse<(node: TreeNode<T, K>, level: number, parentNode: TreeNode<T, K> | null) => any>;
    render: () => React.ReactNode[] | React.ReactNode | null;
}];
export default useTree;
