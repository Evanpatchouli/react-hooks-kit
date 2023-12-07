import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Star } from "@mui/icons-material";
import NavigationIcon from "@mui/icons-material/Navigation";
import ShareIcon from "@mui/icons-material/Share";
import bookmarkSite from "./bookmarkSite";
import Alert from "../Alert";

export default function Dial() {
  const [alertContent, setAlertContent] = React.useState<any | null>(null);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const actions = [
    {
      icon: (
        <NavigationIcon
          style={{
            rotate: "180deg",
          }}
        />
      ),
      name: "Bottom",
      callback: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      },
    },
    {
      icon: <NavigationIcon />,
      name: "Top",
      callback: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      icon: <Star />,
      name: "Star",
      callback: () => {
        bookmarkSite(null, null, (keys: string[]) => {
          setAlertContent(
            <span>
              <span>{"Please press "}</span>
              <strong>{keys.join(" + ")}</strong>
              <span>{" to bookmark site. ✨"}</span>
            </span>
          );
          setAlertOpen(true);
        });
      },
    },
    { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <>
      <Box
        sx={{
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: "80px",
          right: "40px",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.callback}
            />
          ))}
        </SpeedDial>
      </Box>
      <Alert
        open={alertOpen}
        setOpen={setAlertOpen}
        sx={{
          position: "fixed",
          bottom: "0%",
          right: "0%",
          transform: "translate(-10px, -10px)",
        }}
      >
        {alertContent}
      </Alert>
    </>
  );
}
