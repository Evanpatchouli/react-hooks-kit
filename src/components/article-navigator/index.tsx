import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FirstPage as LastIcon, LastPage as NextIcon } from "@mui/icons-material";

export default function ArticleNavigator() {
  const [value, setValue] = React.useState(0);

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
        <BottomNavigationAction label="Last" icon={<LastIcon />} />
        <BottomNavigationAction label="Next" icon={<NextIcon />} />
      </BottomNavigation>
    </Box>
  );
}
