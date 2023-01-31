import styled from "styled-components";
import { Container } from "../../components";

export const MainContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const LeftView = styled.div`
  width: 50%;
  /* background-color: violet; */
`;
export const RightView = styled.div`
  width: 50%;
  /* background-color: skyblue; */
`;
