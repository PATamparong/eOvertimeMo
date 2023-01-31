import styled from "styled-components";
import Container from "../Container";
import { Link } from "react-router-dom";
import { theme } from "../../themes";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: ${theme.color.black3};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 80px;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${(click) => (click ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  flex-direction: flex-start;
  justify-content: left;
  align-items: left;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  flex-direction: flex-end;
  justify-content: right;
  align-items: right;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${theme.fontSizes.md};
  color: #fff;
  align-items: left;
  padding: 1rem 2rem;
  height: auto;
  text-align: center;
  transition: all 0.2s ease;
  /* background-color: #e38b06; */

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  border: none;
  outline: none;
  /* background-color: green; */
`;

export const MenuLeft = styled.div`
  width: 50%;
`;

export const MenuRight = styled.div`
  width: 50%;
`;
