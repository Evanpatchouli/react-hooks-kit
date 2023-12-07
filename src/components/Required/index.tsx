export default function Required(props: { children?: React.ReactNode; hidden?: boolean }) {
  return props.hidden ? null : (
    <span>
      <span style={{ color: "red", marginRight: "0.25em" }}>*</span>
      {props.children}
    </span>
  );
}
