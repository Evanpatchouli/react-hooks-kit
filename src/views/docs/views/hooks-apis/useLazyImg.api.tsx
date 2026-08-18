import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseLazyImgApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "src",
      type: "string | LazyImageOptions",
      desc: "Image URL, or an options object containing the source and fallbacks.",
      properties: [
        {
          name: "src",
          type: "string",
          desc: "Image URL to load.",
        },
        {
          name: "defaultSrc",
          type: "string",
          defaultValue: '""',
          desc: "Image shown before loading completes.",
        },
        {
          name: "errorSrc",
          type: "string",
          defaultValue: '""',
          desc: "Image shown when loading fails.",
        },
        {
          name: "actions",
          type: "LazyImageActions",
          desc: "Optional onLoad and onError callbacks.",
        },
      ],
    },
    {
      name: "defaultSrc / errorSrc / actions",
      type: "string | LazyImageActions",
      defaultValue: "undefined",
      desc: "Positional overload values for the source, fallback images, and callbacks.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "image",
      type: "string & { loaded?: boolean; error?: boolean }",
      desc: "The current image source with loaded and error status flags.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useLazyImg</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (String Object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
