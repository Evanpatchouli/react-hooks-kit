import { DetailedHTMLProps, LiHTMLAttributes } from "react";

const Li = (props: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
  return (
    <li
      style={{
        marginBottom: "0.5rem",
      }}
      {...props}
    />
  );
};

export default Li;
