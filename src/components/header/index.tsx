import logo from "@/logo.filled.svg";
import { Box } from "@mui/material";
import pkg from "@/../package.json";
import "./index.css";

export default function Header() {
  return (
    <div className="Header">
      <Box alignItems="center" display="flex" gap={2}>
        <div
          onClick={() => {
            window.open(
              "https://github.com/evanpatchouli/react-hook-kit",
              "_blank"
            );
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
    </div>
  );
}
