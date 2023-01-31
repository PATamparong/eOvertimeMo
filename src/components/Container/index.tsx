import React from "react";
import { Div } from "./styles";

export default function Container(props?: any) {
  return (
    <React.Fragment>
      <Div {...props}></Div>
    </React.Fragment>
  );
}
