import React from "react";

export interface AuxProps {
  children: React.ReactNode
}

const Paragrafo = (props: AuxProps) => {
  return (
    <div>
      <p style={{ color: "white" }}>{props.children}</p>
    </div>
  );
};
export default Paragrafo;
