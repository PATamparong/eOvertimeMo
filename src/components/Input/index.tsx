import React from "react";
import { InputStyle } from "./styles";

export default function Input(props?: any) {
  const { placeholder, width, type } = props;
  return (
    <React.Fragment>
      <InputStyle placeholder={placeholder} width={width} type={type} />
    </React.Fragment>
  );
}
