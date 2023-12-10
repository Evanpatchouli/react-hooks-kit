import useTree from "@/hooks/useTree";
import { Button } from "@mui/material";

const initialTree = {
  _id: "1",
  name: "Root",
  children: [
    {
      _id: "2",
      name: "Child 1",
      children: [
        {
          _id: "5",
          name: "Child 1.1",
          children: [],
        },
        {
          _id: "6",
          name: "Child 1.2",
          children: [],
        },
      ],
    },
    {
      _id: "3",
      name: "Child 2",
      children: [],
    },
    {
      _id: "4",
      name: "Child 3",
      children: [],
    },
  ],
};

const View = () => {
  const [tree, { addNode, removeNode, moveNode, searchTree, render }] = useTree(
    initialTree,
    {
      idKey: "_id",
      renderNode: (node, idKey, level) => (
        <div key={node._id} css={$css`margin-left: ${level * 20}px;`}>
          {node.name}
        </div>
      ),
    }
  );

  const handleAddNode = () => {
    const newNode = {
      _id: "4",
      name: "New Node",
      children: [],
    };
    addNode(newNode, "1");
  };

  const handleRemoveNode = () => {
    removeNode("2");
  };

  const handleMoveNode = () => {
    moveNode("3", "4");
  };

  const handleSearchTree = () => {
    const result = searchTree("3");
    console.log(result);
  };

  return (
    <div>
      <Button onClick={handleAddNode}>Add Node</Button>
      <Button onClick={handleRemoveNode}>Remove Node</Button>
      <Button onClick={handleMoveNode}>Move Node</Button>
      <Button onClick={handleSearchTree}>Search Node</Button>
      <div>{render()}</div>
    </div>
  );
};

const code = `

  `;

export default {
  code,
  View,
};
