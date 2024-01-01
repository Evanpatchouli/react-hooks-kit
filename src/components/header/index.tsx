import logo from "@/logo.filled.svg";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { NotificationsNone, GitHub, Settings } from "@mui/icons-material";
import pkg from "@/../package.json";
import "./index.css";
import { useState } from "react";

export default function Header() {
  const [version, setVersion] = useState("beta");

  const handleChange = (event: SelectChangeEvent) => {
    setVersion(event.target.value);
  };
  return (
    <div className="Header">
      <Box alignItems="center" display="flex" gap={2}>
        <div
          onClick={() => {
            window.location.href = "#/";
          }}
          style={{ cursor: "pointer", height: "30px" }}
        >
          <img
            style={{
              height: "30px",
              width: "30px",
            }}
            alt="react-hooks-kit-logo"
            src={logo}
          />
        </div>
        <a href="#" style={{ fontSize: "18px", fontWeight: "bold" }}>
          {new Text("react-hooks-kit").data}
        </a>
        {/* <span>v{pkg.version}</span> */}
        <Select
          size="small"
          value={version}
          variant="standard"
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        >
          <MenuItem value={"beta"}>beta</MenuItem>
          <MenuItem value={"v1"}>v1</MenuItem>
          {/* <MenuItem value={"v2"}>v2</MenuItem>
          <MenuItem value={"v3"}>v3</MenuItem> */}
        </Select>
      </Box>
      <Box display="flex" gap={2}>
        <IconButton style={style.IconBtn}>
          <GitHub style={style.IconBtnIcon} />
        </IconButton>
        <IconButton style={style.IconBtn}>
          <NotificationsNone style={style.IconBtnIcon} />
        </IconButton>
        <IconButton style={style.IconBtn}>
          <Settings style={style.IconBtnIcon} />
        </IconButton>
      </Box>
    </div>
  );
}

const style = {
  IconBtn: {
    borderRadius: "12px",
    padding: "0px",
    height: "fit-content",
  },
  IconBtnIcon: {
    border: "1px solid #66a8ff80",
    borderRadius: "12px",
    padding: "8px",
    margin: "0px",
  },
};
