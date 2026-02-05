import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const View = () => {
  const [unread, setUnread] = useState(0);
  const [title, setTitle] = useTitle("Messages");

  useEffect(() => {
    if (unread > 0) {
      setTitle(`(${unread}) New Messages`);
    } else {
      setTitle("Messages");
    }
  }, [unread]);

  return (
    <>
      <h3>Example 3: Notification Title</h3>
      <p>The page title shows unread message count, similar to email clients.</p>
      <div style={{ marginBottom: "16px" }}>
        <strong>Unread Messages: </strong>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: unread > 0 ? "#ff3b30" : "#666" }}>
          {unread}
        </span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button variant="contained" onClick={() => setUnread(unread + 1)}>
          New Message
        </Button>
        <Button variant="outlined" onClick={() => setUnread(Math.max(0, unread - 1))}>
          Mark as Read
        </Button>
        <Button variant="outlined" onClick={() => setUnread(0)}>
          Clear All
        </Button>
      </div>
    </>
  );
};

const code = `import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [unread, setUnread] = useState(0);
  const [title, setTitle] = useTitle("Messages");

  useEffect(() => {
    if (unread > 0) {
      setTitle(\`(\${unread}) New Messages\`);
    } else {
      setTitle("Messages");
    }
  }, [unread]);

  return (
    <div>
      <p>Unread: {unread}</p>
      <button onClick={() => setUnread(unread + 1)}>
        New Message
      </button>
    </div>
  );
};`;

export default {
  code,
  View,
};
