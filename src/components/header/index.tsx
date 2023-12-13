import logo from "@/logo.filled.svg";
import { Box, IconButton } from "@mui/material";
import { NotificationsNone, GitHub, Settings } from "@mui/icons-material";
import pkg from "@/../package.json";
import "./index.css";

export default function Header() {
  return (
    <div className="Header">
      <Box alignItems="center" display="flex" gap={2}>
        <div
          onClick={() => {
            window.open("https://github.com/evanpatchouli/react-hook-kit", "_blank");
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
        <span>v{pkg.version}</span>
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
