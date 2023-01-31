import styled from "styled-components";

type PropTypes = {
  height?: number;
  width?: number;
};

export const Div = styled.div<PropTypes>`
  height: ${(props) => `${props?.height}vh`};
  width: ${(props) => `${props?.width}vh`};
`;
