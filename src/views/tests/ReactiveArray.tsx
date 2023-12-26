import Code from "@/components/code";
import useToast from "@hooks/useToast";
import useReactive from "@hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect } from "react";

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
// with()

export default function ReactiveArray() {
  const toast = useToast();
  const arr = useReactive<any[]>([1, 1]);
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
  };

  const handleFindIndex = () => {
    const result = arr.findIndex((elem) => elem.value > 0.5); //✅
    toast(`${result}`);
  };

  const handleFlat = () => {
    const result = arr.flat(); //✅
    console.log(`result: `, result);
  };

  const handleFlatMap = () => {
    const result = arr.flatMap((elem) => elem.value); //✅
    console.log(`result: `, result);
  };

  const handleForEach = () => {
    arr.forEach((elem) => console.log(`elem: `, elem)); //✅
  };

  const handleIncludes = () => {
    const result = arr.includes(1); //✅
    console.log(`result: `, result);
  };

  const handleIndexOf = () => {
    const result = arr.indexOf(1); //✅
    console.log(`result: `, result);
  };

  // @NotSure
  const handleKeys = () => {
    const result = arr.keys(); //✅
    console.log(`result: `, result);
  };

  const handleLastIndexOf = () => {
    const result = arr.lastIndexOf(1); //✅
    console.log(`result: `, result);
  };

  const handleMap = () => {
    const result = arr.map((elem) => elem.value); //✅
    console.log(`result: `, result);
  };

  const handleReduce = () => {
    const result = arr.reduce((prev, curr) => prev + curr.value, 0); //✅
    console.log(`result: `, result);
  };

  const handleReduceRight = () => {
    const result = arr.reduceRight((prev, curr) => prev + curr.value, 0); //✅
    console.log(`result: `, result);
  };

  const handleSlice = () => {
    const result = arr.slice(0, 1); //✅
    console.log(`result: `, result);
  };

  const handleSome = () => {
    const result = arr.some((elem) => elem.value > 0.5); //✅
    console.log(`result: `, result);
  };

  const handleSort = () => {
    const result = arr.sort((a, b) => a.value - b.value); //✅
    console.log(`result: `, result);
  };

  const handleSplice = () => {
    const result = arr.splice(0, 1); //✅
    console.log(`result: `, result);
  };

  const handleToLocaleString = () => {
    const result = arr.toLocaleString(); //✅
    console.log(`result: `, result);
  };

  const handleToString = () => {
    const result = arr.toString(); //✅
    console.log(`result: `, result);
  };

  const handleUnshift = () => {
    const result = arr.unshift(0.5); //✅
    console.log(`result: `, result);
  };

  const handleValues = () => {
    const result = arr.values(); //✅
    const iterator = result;
    // @ts-ignore
    for (const value of iterator) {
      console.log(value);
    }
  };

  const handleWith = () => {
    // @ts-ignore
    const result = arr.with?.(0, 9); //✅
    console.log(`result: `, result);
  };

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
      <Button onClick={handleFlatMap}>FlatMap</Button>
      <Button onClick={handleForEach}>ForEach</Button>
      <Button onClick={handleIncludes}>Includes</Button>
      <Button onClick={handleIndexOf}>IndexOf</Button>
      <Button onClick={handleKeys}>Keys</Button>
      <Button onClick={handleLastIndexOf}>LastIndexOf</Button>
      <Button onClick={handleMap}>Map</Button>
      <Button onClick={handleReduce}>Reduce</Button>
      <Button onClick={handleReduceRight}>ReduceRight</Button>
      <Button onClick={handleSlice}>Slice</Button>
      <Button onClick={handleSome}>Some</Button>
      <Button onClick={handleSort}>Sort</Button>
      <Button onClick={handleSplice}>Splice</Button>
      <Button onClick={handleToLocaleString}>ToLocaleString</Button>
      <Button onClick={handleToString}>ToString</Button>
      <Button onClick={handleUnshift}>Unshift</Button>
      <Button onClick={handleValues}>Values</Button>
      <Button onClick={handleWith}>With</Button>
    </div>
  );
}
