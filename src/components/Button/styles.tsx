import styled from "styled-components";

type ButtonProps = {
  width?: number;
  height?: number;
};

export const ButtonStyle = styled.button<ButtonProps>`
  border-radius: ${(bigRadius) => (bigRadius ? "30px" : "20px")};
  background-color: ${(primary) => (primary ? "#E38B06" : "#000")};
  color: ${(primary) => (primary ? "#000" : "#fff")};
  padding: ${(big) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${(bigFont) => (bigFont ? "20px" : "18px")};
  width: ${(props) => `${props.width}%`};
  height: auto;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(primary) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${(big) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${(big) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${(bigFont) => (bigFont ? "16px" : "18px")};
  }
`;

export const OutlineButton = styled.button<ButtonProps>`
  border-radius: ${(bigRadius) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${(big) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${(fontBig) => (fontBig ? "22px" : "18px")};
  width: ${(props) => `${props.width}%`};
  height: auto;
  transition: all 0.5s ease;
  background-color: #fefefe;

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${(bigRadius) => (bigRadius ? "20px" : "18px")};
    padding: ${(big) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${(fontBig) => (fontBig ? "18px" : "16px")};
  }
`;

export const PlainButton = styled.button<ButtonProps>`
  background-color: ${(primary) => (primary ? "#E38B06" : "#000")};
  color: ${(primary) => (primary ? "#000" : "#fff")};
  padding: ${(big) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${(bigFont) => (bigFont ? "20px" : "18px")};
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #e38b06;
  transition: all 0.5s ease;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  &:active {
    transform: translateY(0.5rem);
  }
`;
