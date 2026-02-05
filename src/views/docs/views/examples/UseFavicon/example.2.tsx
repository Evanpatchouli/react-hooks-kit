import useFavicon from "@hooks/useFavicon";
import { useState } from "react";
import { Button } from "@mui/material";

const View = () => {
  const [unread, setUnread] = useState(3);

  useFavicon("/react-hooks-kit/favicon.ico", {
    badge: {
      content: unread,
      position: "top-right",
      bgColor: "#ff3b30",
      textColor: "#fff"
    }
  });

  return (
    <>
      <h3>Example 2: Notification Badge</h3>
      <p>Unread messages: {unread}</p>
      <Button variant="contained" onClick={() => setUnread(unread + 1)}>
        Add Message
      </Button>
      <Button variant="outlined" onClick={() => setUnread(Math.max(0, unread - 1))} style={{ marginLeft: "10px" }}>
        Mark as Read
      </Button>
      <Button variant="outlined" onClick={() => setUnread(0)} style={{ marginLeft: "10px" }}>
        Clear All
      </Button>
    </>
  );
};

const code = `import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [unread, setUnread] = useState(3);

  useFavicon("/favicon.ico", {
    badge: {
      content: unread,
      position: "top-right",
      bgColor: "#ff3b30",
      textColor: "#fff"
    }
  });

  return <div>Unread messages: {unread}</div>;
};`;

export default {
  code,
  View,
};
