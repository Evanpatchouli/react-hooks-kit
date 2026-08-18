import useRecord from "@hooks/useRecord";

type Profile = {
  name: string;
  role: string;
  active: boolean;
};

const View = () => {
  const [profile, setProfile] = useRecord<Profile>({
    name: "Ada",
    role: "Editor",
    active: true,
  });

  return (
    <div>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <button onClick={() => setProfile({ role: "Reviewer" }, "rehydrate")}>Merge role</button>{" "}
      <button onClick={() => setProfile((previous) => ({ active: !previous.active }))}>Toggle active</button>{" "}
      <button onClick={() => setProfile({ name: "Guest" }, "override")}>Override record</button>
    </div>
  );
};

const code = `
import useRecord from "@hooks/useRecord";

type Profile = { name: string; role: string; active: boolean };

const View = () => {
  const [profile, setProfile] = useRecord<Profile>({
    name: "Ada",
    role: "Editor",
    active: true,
  });

  return (
    <div>
      <button onClick={() => setProfile({ role: "Reviewer" }, "rehydrate")}>
        Merge role
      </button>
      <button onClick={() => setProfile((previous) => ({ active: !previous.active }))}>
        Toggle active
      </button>
      <button onClick={() => setProfile({ name: "Guest" }, "override")}>
        Override record
      </button>
    </div>
  );
};
`;

export default { code, View };
