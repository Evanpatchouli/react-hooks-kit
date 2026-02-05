import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";
  
export default function UseFavicon() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "iconUrl",
      type: "string",
      defaultValue: <Required />,
      desc: "The URL of the favicon image.",
    },
    {
      name: "badge",
      type: "string | number",
      defaultValue: "undefined",
      desc: "Shorthand for badge content. When provided, creates a badge with default settings.",
    },
    {
      name: "options",
      type: "UseFaviconOptions",
      defaultValue: "undefined",
      desc: "Full configuration object for the favicon.",
      properties: [
        {
          name: "badge",
          type: "BadgeOptions",
          defaultValue: "undefined",
          desc: "Badge configuration to overlay on the favicon.",
          properties: [
            {
              name: "content",
              type: "string | number",
              defaultValue: <Required />,
              desc: "The content to display in the badge. Numbers over 99 will display as '99+'.",
            },
            {
              name: "position",
              type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
              defaultValue: "'top-right'",
              desc: "Badge position.",
            },
            {
              name: "bgColor",
              type: "string",
              defaultValue: "'#ff3b30'",
              desc: "Badge background color.",
            },
            {
              name: "textColor",
              type: "string",
              defaultValue: "'#fff'",
              desc: "Badge text color.",
            },
            {
              name: "size",
              type: "number",
              defaultValue: "0.5",
              desc: "Badge size as a ratio of icon size (0-1).",
            },
          ],
        },
      ],
    },
  ];
  
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "void",
      type: "void",
      defaultValue: null,
      desc: "This hook does not return any value.",
    },
  ];
  
  return (
    <>
      <SubTitle id="hook-api">Api of useFavicon</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        Return Value
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
