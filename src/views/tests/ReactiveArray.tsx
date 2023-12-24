import Code from "@/components/code";
import useToast from "@hooks/useToast";
import useReactive from "@hooks/useReactive";
import { Button } from "@mui/material";

// 数组实例的所有属性和方法如下：

// 属性：

// length
// 方法：

// concat() ✅
// copyWithin()
// entries()
// every()
// fill()
// filter()
// find()
// findIndex()
// flat()
// flatMap()
// forEach()
// includes()
// indexOf()
// join() ✅
// keys()
// lastIndexOf()
// map()
// pop() ✅
// push() ✅
// reduce()
// reduceRight()
// reverse() ✅
// shift() ✅
// slice()
// some()
// sort()
// splice()
// toLocaleString()
// toString()
// unshift()
// values()

export default function ReactiveArray() {
  const toast = useToast();
  const arr = useReactive<any[]>([]);
  const handlePush = () => {
    arr.push(Math.random().toFixed(2)); //✅
  };
  const handlePop = () => {
    arr.pop(); //✅
  };
  const handleShift = () => {
    const elem = arr.shift(); //✅
    console.log(`first elem: `, elem);
  };

  const handlePrintLength = () => {
    toast(`${arr.length}`); //✅
  };

  const handleJoin = () => {
    toast(`${arr.join(", ")}`); //✅
  };

  const handleConcat = () => {
    toast(arr.concat(arr).join(", ")); //✅
  };

  const handleReverse = () => {
    arr.reverse(); //✅
  };

  const handleCopyWithin = () => {
    arr.copyWithin(0, 1, 2); //❌ not work
  };

  const handleEntries = () => {
    // @ts-ignore
    for (const [index, elem] of arr.entries()) {
      console.log(`index: ${index}, elem: `, elem); //✅
    }
  };

  const handleEvery = () => {
    const result = arr.every((elem) => elem.value > 0.5); //✅
    toast(`${result}`);
  };

  const handleFill = () => {
    arr.fill(0); //✅
  };

  const handleFilter = () => {
    const result = arr.filter((elem) => elem.value > 0.5); //✅
    toast(`${result.length}`);
    result.forEach((elem) => console.log(`elem: `, elem)); //✅ returns reactive array
  };

  const handleFind = () => {
    const result = arr.find((elem) => elem.value > 0.5); //✅
    toast(`${result.value}`);
    console.log(`elem: `, result); //✅ returns reactive elem
  }

  const handleFindIndex = () => {
    const result = arr.findIndex((elem) => elem.value > 0.5); //✅
    toast(`${result}`);
  }

  const handleFlat = () => {
    const result = arr.flat(); //✅
    console.log(`result: `, result);
  }

  return (
    <div css={$css`width: 600px;`}>
      <Code theme="duotoneLight" lang="json">
        {JSON.stringify(arr, null, 2)}
      </Code>
      <Button onClick={handlePush}>Push</Button>
      <Button onClick={handlePop}>Pop</Button>
      <Button onClick={handleShift}>Shift</Button>
      <Button onClick={handlePrintLength}>Length</Button>
      <Button onClick={handleJoin}>Join</Button>
      <Button onClick={handleConcat}>Concat</Button>
      <Button onClick={handleReverse}>Reverse</Button>
      <Button onClick={handleCopyWithin}>CopyWithin</Button>
      <Button onClick={handleEntries}>Entries</Button>
      <Button onClick={handleEvery}>Every</Button>
      <Button onClick={handleFill}>Fill</Button>
      <Button onClick={handleFilter}>Filter</Button>
      <Button onClick={handleFind}>Find</Button>
      <Button onClick={handleFindIndex}>FindIndex</Button>
      <Button onClick={handleFlat}>Flat</Button>
    </div>
  );
}
