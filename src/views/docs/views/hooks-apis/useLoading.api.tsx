import Blank from "@/components/Blank";
import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { Body, SubTitle } from "@/components/layout/Article";
import { Chip } from "@mui/material";

export default function UseLoadingApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "loadingMap",
      type: "object",
      defaultValue: <Required children="Required" />,
      desc: "initial state map of loadings",
    },
    {
      name: "options",
      type: "object",
      defaultValue: { setType: "override", zeroFalse: true },
      desc: "options of useLoadingApi",
      properties: [
        {
          name: "setType",
          type: '"override" | "spread"',
          defaultValue: "override",
          desc: "set action mode of setter",
        },
        {
          name: "zeroFalse",
          type: "boolean",
          defaultValue: true,
          desc: "whether the value is false when state is 0",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] loading",
      type: <Chip label="{ [x: keyof T]: boolean | number }"></Chip>,
      desc: "state of loadings",
    },
    {
      name: "[1] setLoading",
      type: "(k, v) => void | ( k, (v) => T[k] ) => void | (obj: Partial<T>) => void | ( (obj) => Partial<T> ) => void",
      desc: "set the state of certain loading value",
      details: (
        <p>
          <strong>overload 1</strong> : {"(k, v) => void"} <Blank /> set the state of loading[k] to v
          <br />
          <strong>overload 2</strong> : {"( k, (v) => T[k] ) => void"} <Blank /> set the state of loading[k] to
          v(loading[k])
          <br />
          <strong>overload 3</strong> : {"(obj: Partial<T>) => void"} <Blank /> set the state of loading by obj
          <br />
          <strong>overload 4</strong> : {"( (obj) => Partial<T> ) => void"} <Blank /> set the state of loading by
          obj(loading)
        </p>
      ),
    },
    {
      name: "[2] onLoading",
      type: "(key: keyof T) => void",
      desc: "set the state of loading[key] to true",
    },
    {
      name: "[3] unLoading",
      type: "(key: keyof T) => void",
      desc: "set the state of loading[key] to false",
    },
    {
      name: "[4] plusLoading",
      type: "(key: keyof T) => void",
      desc: "plus the state of loading[key] by 1",
    },
    {
      name: "[5] minusLoading",
      type: "(key: keyof T) => void",
      desc: "minus the state of loading[key] by 1",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useLoading</SubTitle>
      <SubTitle low top="20px">
        Generics
      </SubTitle>
      <Body>
        <ul>
          <li>
            <strong>T</strong>: should extends object
          </li>
        </ul>
      </Body>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Array & Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
