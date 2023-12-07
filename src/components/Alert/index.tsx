import * as React from "react";
import Box from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps, Theme } from "@mui/material";

export default function Alert(props: {
  open?: boolean;
  children?: React.ReactNode;
  setOpen?: Function;
  sx?: SxProps<Theme>;
  severity?: "success" | "info" | "warning" | "error" | undefined;
}) {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ width: "400px", ...props.sx }}>
      <Collapse in={props.open ?? open}>
        <MuiAlert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                if (props.setOpen) props.setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={props.severity ?? "info"}
          sx={{ mb: 2 }}
        >
          {props.children}
        </MuiAlert>
      </Collapse>
    </Box>
  );
}
