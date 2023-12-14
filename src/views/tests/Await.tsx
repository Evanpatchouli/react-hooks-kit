import Loading from "@/components/Loading";
import { useLoading, useMeta } from "@/hooks";
import { Button } from "@mui/material";
import { useEffect } from "react";

function sleep(ms: number, data?: any) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export default function Await() {
  const loader = useLoading(
    {
      whole: 0,
    },
    {
      boolify: false,
    }
  );

  const fetchA = async () => {
    loader.plusLoading("whole");
    const data = await sleep(2000, "A");
    loader.minusLoading("whole");
    return data;
  };
  const fetchB = async () => {
    loader.plusLoading("whole");
    const data = await sleep(3000, "B");
    loader.minusLoading("whole");
    return data;
  };
  const fetchAB = async () => {
    loader.plusLoading("whole");
    const data = await Promise.all([fetchA(), fetchB()]);
    loader.minusLoading("whole");
    return data;
  };

  const fetchC = async (a: any, b: any) => {
    loader.plusLoading("whole");
    const data = await sleep(3000, a + b);
    loader.minusLoading("whole");
    return data;
  };

  // @ts-ignore
  const [data, dataSetter] = useMeta({
    one: null as any,
    two: null as any,
    three: null as any,
  } as any);

  useEffect(() => {
    fetchA().then((data) => dataSetter({ one: data }));
  }, []);

  useEffect(() => {
    fetchB().then((data) => dataSetter({ two: data }));
  }, []);

  useEffect(() => {
    fetchAB().then((data) => {
      fetchC(data[0], data[1]).then((data) => dataSetter({ three: data }));
    });
  }, []);

  return (
    <div>
      <Button onClick={fetchA}>one: {data.one}</Button>
      <Button onClick={fetchB}>two: {data.two}</Button>
      <Button onClick={fetchAB}>three: {data.three}</Button>
      <Loading on={loader[0].whole ? true : false} />
      {`${loader[0].whole}`}
    </div>
  );
}
