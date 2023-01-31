import styled from "styled-components";

type PropTypes = {
  width?: number;
};

export const InputStyle = styled.input<PropTypes>`
  font-size: 18px;
  padding: 5px;
  margin: 10px;
  width: ${(props) => `${props.width}%`};
`;
