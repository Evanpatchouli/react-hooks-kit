import logo from "@/logo.svg";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>react-hooks-kit</p>
      <line>
        <Button
          LinkComponent={"a"}
          variant="contained"
          sx={{ marginRight: "24px", width: "12rem" }}
          href="#/docs"
        >
          Get started
        </Button>
        <Button
          LinkComponent={"a"}
          href="https://github.com/Evanpatchouli/react-hooks-kit"
          target="_blank"
          variant="contained"
          sx={{ width: "12rem" }}
        >
          Get source
        </Button>
      </line>
    </header>
  );
}
