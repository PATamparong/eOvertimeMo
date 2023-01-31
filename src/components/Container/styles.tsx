import styled from "styled-components";

type PropTypes = {
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  backgroundColor?: string;
};

export const Div = styled.div<PropTypes>`
  margin-top: ${(props) =>
    props?.marginTop ? `${props?.marginTop}%` : "auto"};
  margin-bottom: ${(props) =>
    props?.marginBottom ? `${props?.marginBottom}%` : "auto"};
  margin-left: ${(props) =>
    props?.marginRight ? `${props?.marginRight}%` : "auto"};
  margin-right: ${(props) =>
    props?.marginLeft ? `${props?.marginLeft}%` : "auto"};
  padding: 0 50px;
  max-width: auto;
  width: ${(props) => `${props?.width}%`};
  background-color: ${(props) => props?.backgroundColor};

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
