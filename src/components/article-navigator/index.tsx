import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  FirstPage as LastIcon,
  LastPage as NextIcon,
} from "@mui/icons-material";
import useUrl from "@/hooks/useUrl";
import { useMeta } from "@/hooks/useMeta";
import docsMap from "@/views/docs/docs.map";
import { ParseQueryString } from "@/hooks/utils/types";

export default function ArticleNavigator() {
  const docsArray: ParseQueryString<"route=url&title=tlt">[] = Object.values(
    docsMap
  )
    .map((mod) => Object.values(mod))
    .flat();
  const [value, setValue] = React.useState(0);
  const [label, labelSetter] = useMeta({
    last: "Last",
    lastLink: "",
    next: "Next",
    nextLink: "",
  });

  useUrl<"?locale=en">(
    (u) => {
      const pathname = u.hash.replace("#/docs/", "");
      const cur = pathname.split("?")[0];
      const idx = docsArray.findIndex((item) => item.route === cur);
      const last = docsArray[idx - 1];
      const next = docsArray[idx + 1];
      if (last) {
        labelSetter("last", last.title);
        labelSetter("lastLink", last.route);
      } else {
        labelSetter("last", "Docs");
        labelSetter("lastLink", "");
      }
      if (next) {
        labelSetter("next", next.title);
        labelSetter("nextLink", next.route);
      }
    },
    "article-navigator",
    true
  );

  return (
    <Box sx={{ width: "100%", flex: "1" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          display: "flex",
          bottom: "0",
          left: "0",
          right: "0",
          justifyContent: "space-between",
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <BottomNavigationAction
          LinkComponent={"a"}
          href={`#/docs/${label.lastLink}`}
          label={label.last}
          icon={<LastIcon />}
        />
        <BottomNavigationAction
          LinkComponent={"a"}
          href={`#/docs/${label.nextLink}`}
          label={label.next}
          icon={<NextIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
