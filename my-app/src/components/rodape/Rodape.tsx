import React from "react";

export interface AuxProps {
  children: React.ReactNode;
}
const Rodape = (props: AuxProps) => {
  return <div>{props.children}</div>;
};

export default Rodape;
