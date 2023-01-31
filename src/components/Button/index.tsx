import React from "react";
import { ButtonStyle, OutlineButton, PlainButton } from "./styles";

type Props = {
  outline?: boolean;
  width?: number;
  plain?: boolean;
  height?: number;
  primary?: boolean;
  children?: string;
  bigFont?: boolean;
};

export default function Button(props: Props) {
  const { outline, width, plain, height } = props;

  const buttonDisplay = outline ? (
    <OutlineButton {...props} width={width} height={height}></OutlineButton>
  ) : (
    <ButtonStyle {...props} width={width} height={height}></ButtonStyle>
  );

  return (
    <React.Fragment>
      {plain ? (
        <PlainButton width={width} height={height} {...props} />
      ) : (
        buttonDisplay
      )}
    </React.Fragment>
  );
}
